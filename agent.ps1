#Requires -Version 5.1
<#
.SYNOPSIS
  agent.ps1 - a foundational, self-improving agentic REPL in a single PowerShell file.
  Compatible with Windows PowerShell 5.1 (and PowerShell 7+). Run in a real console
  (conhost / Windows Terminal), not the ISE.

.DESCRIPTION
  Talks to Claude (Sonnet 5) through an Anthropic-Messages-API-compatible endpoint
  (works with AI gateways that support Claude Code; Bedrock-backed gateways included).

  Configuration (same env vars Claude Code uses):
    ANTHROPIC_BASE_URL     e.g. https://your-gateway.example.com   (default: https://api.anthropic.com)
    ANTHROPIC_AUTH_TOKEN   sent as "Authorization: Bearer <token>"
    ANTHROPIC_API_KEY      fallback, sent as "x-api-key: <key>"
    ANTHROPIC_MODEL        default: claude-sonnet-5
                           (if your gateway expects Bedrock-style IDs, set anthropic.claude-sonnet-5)

  REPL keys:
    Enter        submit        Ctrl+C  clear the current line (does NOT exit)
    Up / Down    history       Ctrl+D  exit (on an empty line)
    Left/Right/Home/End/Backspace/Delete  line editing
  Commands: exit | quit | /reset | /model | /help
#>

Set-StrictMode -Version 2
$ErrorActionPreference = 'Stop'

# Windows PowerShell 5.1 defaults to TLS 1.0 -- force TLS 1.2 for HTTPS endpoints.
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

# ---- Configuration -----------------------------------------------------------

$script:BaseUrl = if ($env:ANTHROPIC_BASE_URL) { $env:ANTHROPIC_BASE_URL.TrimEnd('/') } else { 'https://api.anthropic.com' }
$script:Model   = if ($env:ANTHROPIC_MODEL) { $env:ANTHROPIC_MODEL } else { 'claude-sonnet-5' }
$script:SelfPath = $PSCommandPath
$script:MaxToolOutputChars = 30000
$script:HistoryFile = Join-Path $HOME '.psagent_history'
$script:Messages = @()

function Get-AuthHeaders {
    $h = @{
        'anthropic-version' = '2023-06-01'
        'content-type'      = 'application/json'
    }
    if ($env:ANTHROPIC_AUTH_TOKEN) { $h['Authorization'] = "Bearer $($env:ANTHROPIC_AUTH_TOKEN)" }
    elseif ($env:ANTHROPIC_API_KEY) { $h['x-api-key'] = $env:ANTHROPIC_API_KEY }
    return $h
}

function Resolve-FullPath {
    # 5.1-safe replacement for [IO.Path]::GetFullPath(path, base) (.NET Core only)
    param([string]$Path)
    if ([System.IO.Path]::IsPathRooted($Path)) { return [System.IO.Path]::GetFullPath($Path) }
    return [System.IO.Path]::GetFullPath((Join-Path (Get-Location).Path $Path))
}

# ---- System prompt -----------------------------------------------------------

$script:SystemPrompt = @"
You are a foundational agentic loop - a minimal, self-improving agent implemented as a single PowerShell script running as a REPL.

Your own source code lives at: $script:SelfPath
That file is your body. You can read it, reason about it, and rewrite it. Improving your own loop - better tools, better error handling, better UX - is part of your mandate whenever the user asks for it or when you notice a deficiency that blocks a task.

Environment:
- OS: $([System.Environment]::OSVersion.VersionString)
- PowerShell: $($PSVersionTable.PSVersion) (target compatibility: Windows PowerShell 5.1)
- Working directory: $(Get-Location)

How to work:
- You have tools to run PowerShell, and to read, write, edit, list, and search files. Use run_powershell for anything the file tools don't cover (git, network, processes, installing modules).
- Session state persists: variables and functions you define in run_powershell survive across calls within this conversation.
- To write and execute a new script: write_file it, then run_powershell with `powershell -NoProfile -File <path>` (isolated) or `. <path>` (in-session).
- Any code you write for this host must be Windows PowerShell 5.1 compatible: no ?? or ?. operators, no ternary, no two-argument [IO.Path]::GetFullPath.
- Verify your work. After a change, run something that proves it worked, and report the actual output.
- Be concise in replies. Lead with the outcome.

Self-improvement protocol (follow strictly - never brick yourself):
1. read_file your own source ($script:SelfPath) before proposing changes.
2. Write the improved version to a sibling candidate file first (e.g. agent.candidate.ps1).
3. Validate the candidate: run_powershell with
   [System.Management.Automation.Language.Parser]::ParseFile(<candidate>, [ref]`$null, [ref]`$errs); `$errs
   It must produce zero parse errors. Spot-test extracted functions where practical.
4. Only after validation, overwrite $script:SelfPath with the candidate's content and delete the candidate.
5. Tell the user changes take effect on next launch (exit, then re-run the script).
Never leave your source file in a syntactically broken state.
"@

# ---- Tool definitions (Anthropic Messages API schema) --------------------------

$script:Tools = @(
    @{
        name = 'run_powershell'
        description = 'Execute PowerShell code in a persistent session (variables/functions survive across calls). Returns combined output and errors as text. Use for shell commands, git, processes, running scripts, anything without a dedicated tool.'
        input_schema = @{
            type = 'object'
            properties = @{
                code = @{ type = 'string'; description = 'The PowerShell code to execute.' }
                timeout_seconds = @{ type = 'integer'; description = 'Max seconds to wait before the run is stopped. Default 120.' }
            }
            required = @('code')
        }
    }
    @{
        name = 'read_file'
        description = 'Read a text file and return its contents.'
        input_schema = @{
            type = 'object'
            properties = @{
                path = @{ type = 'string'; description = 'Absolute or relative file path.' }
            }
            required = @('path')
        }
    }
    @{
        name = 'write_file'
        description = 'Write content to a file (creates or overwrites). Creates parent directories as needed.'
        input_schema = @{
            type = 'object'
            properties = @{
                path    = @{ type = 'string' }
                content = @{ type = 'string' }
            }
            required = @('path', 'content')
        }
    }
    @{
        name = 'edit_file'
        description = 'Replace an exact string in a file. old_string must appear exactly once (include surrounding context to disambiguate).'
        input_schema = @{
            type = 'object'
            properties = @{
                path       = @{ type = 'string' }
                old_string = @{ type = 'string' }
                new_string = @{ type = 'string' }
            }
            required = @('path', 'old_string', 'new_string')
        }
    }
    @{
        name = 'list_directory'
        description = 'List files and directories at a path.'
        input_schema = @{
            type = 'object'
            properties = @{
                path    = @{ type = 'string'; description = 'Directory path. Defaults to the current directory.' }
                recurse = @{ type = 'boolean'; description = 'List recursively. Default false.' }
            }
        }
    }
    @{
        name = 'search_files'
        description = 'Search file contents with a regex pattern (like grep). Returns matching lines as path:line:text.'
        input_schema = @{
            type = 'object'
            properties = @{
                pattern = @{ type = 'string'; description = 'Regex pattern.' }
                path    = @{ type = 'string'; description = 'Directory or file to search. Defaults to the current directory.' }
                include = @{ type = 'string'; description = "Filename filter, e.g. '*.ps1'. Default all files." }
            }
            required = @('pattern')
        }
    }
)

# ---- Persistent runspace for run_powershell ------------------------------------

$script:AgentRunspace = [runspacefactory]::CreateRunspace()
$script:AgentRunspace.Open()
# start the agent session in the same directory as the REPL
$initPs = [powershell]::Create()
$initPs.Runspace = $script:AgentRunspace
[void]$initPs.AddScript("Set-Location '$((Get-Location).Path -replace "'", "''")'").Invoke()
$initPs.Dispose()

function Invoke-InAgentSession {
    param([string]$Code, [int]$TimeoutSeconds = 120)

    $ps = [powershell]::Create()
    $ps.Runspace = $script:AgentRunspace
    [void]$ps.AddScript($Code).AddCommand('Out-String')
    try {
        $handle = $ps.BeginInvoke()
        if (-not $handle.AsyncWaitHandle.WaitOne([timespan]::FromSeconds($TimeoutSeconds))) {
            $ps.Stop()
            return @{ ok = $false; text = "Execution timed out after $TimeoutSeconds seconds and was stopped." }
        }
        $output = ($ps.EndInvoke($handle) | Out-String).TrimEnd()
        $errText = @($ps.Streams.Error | ForEach-Object { $_.ToString() }) -join "`n"
        $text = $output
        if ($errText) {
            if ($text) { $text = $text + "`n--- errors ---`n" + $errText }
            else { $text = "--- errors ---`n" + $errText }
        }
        if (-not $text) { $text = '(no output)' }
        return @{ ok = (-not $ps.HadErrors); text = $text }
    }
    catch {
        return @{ ok = $false; text = "Execution failed: $($_.Exception.Message)" }
    }
    finally {
        $ps.Dispose()
    }
}

# ---- Tool dispatcher -----------------------------------------------------------

function Limit-Text {
    param([string]$Text)
    if ($Text.Length -gt $script:MaxToolOutputChars) {
        return $Text.Substring(0, $script:MaxToolOutputChars) + "`n... [truncated at $script:MaxToolOutputChars chars]"
    }
    return $Text
}

function Test-InputProp {
    param($Obj, [string]$Name)
    return ($null -ne $Obj.PSObject.Properties[$Name]) -and $Obj.$Name
}

function Invoke-AgentTool {
    param([string]$Name, $ToolInput)

    try {
        switch ($Name) {
            'run_powershell' {
                $timeout = 120
                if (Test-InputProp $ToolInput 'timeout_seconds') { $timeout = [int]$ToolInput.timeout_seconds }
                return Invoke-InAgentSession -Code $ToolInput.code -TimeoutSeconds $timeout
            }
            'read_file' {
                $p = Resolve-FullPath $ToolInput.path
                if (-not (Test-Path -LiteralPath $p -PathType Leaf)) { return @{ ok = $false; text = "File not found: $p" } }
                return @{ ok = $true; text = [System.IO.File]::ReadAllText($p) }
            }
            'write_file' {
                $full = Resolve-FullPath $ToolInput.path
                $dir = Split-Path -Parent $full
                if ($dir -and -not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
                [System.IO.File]::WriteAllText($full, [string]$ToolInput.content, (New-Object System.Text.UTF8Encoding($false)))
                return @{ ok = $true; text = "Wrote $(([string]$ToolInput.content).Length) chars to $full" }
            }
            'edit_file' {
                $p = Resolve-FullPath $ToolInput.path
                if (-not (Test-Path -LiteralPath $p -PathType Leaf)) { return @{ ok = $false; text = "File not found: $p" } }
                $content = [System.IO.File]::ReadAllText($p)
                $old = [string]$ToolInput.old_string
                $count = ([regex]::Matches($content, [regex]::Escape($old))).Count
                if ($count -eq 0) { return @{ ok = $false; text = 'old_string not found in file.' } }
                if ($count -gt 1) { return @{ ok = $false; text = "old_string appears $count times; include more context to make it unique." } }
                $idx = $content.IndexOf($old)
                $content = $content.Substring(0, $idx) + [string]$ToolInput.new_string + $content.Substring($idx + $old.Length)
                [System.IO.File]::WriteAllText($p, $content, (New-Object System.Text.UTF8Encoding($false)))
                return @{ ok = $true; text = "Edited $p" }
            }
            'list_directory' {
                $p = '.'
                if (Test-InputProp $ToolInput 'path') { $p = $ToolInput.path }
                $recurse = $false
                if (Test-InputProp $ToolInput 'recurse') { $recurse = [bool]$ToolInput.recurse }
                $items = @(Get-ChildItem -LiteralPath $p -Recurse:$recurse -Force -ErrorAction Stop |
                    ForEach-Object {
                        $kind = if ($_.PSIsContainer) { 'dir ' } else { 'file' }
                        $size = if ($_.PSIsContainer) { '' } else { " ($($_.Length) bytes)" }
                        "$kind $($_.FullName)$size"
                    })
                $text = if ($items.Count -gt 0) { $items -join "`n" } else { '(empty)' }
                return @{ ok = $true; text = $text }
            }
            'search_files' {
                $p = '.'
                if (Test-InputProp $ToolInput 'path') { $p = $ToolInput.path }
                $include = $null
                if (Test-InputProp $ToolInput 'include') { $include = [string]$ToolInput.include }
                $files = if (Test-Path -LiteralPath $p -PathType Leaf) { @(Get-Item -LiteralPath $p) }
                         else { @(Get-ChildItem -Path $p -Recurse -File -Force -ErrorAction SilentlyContinue) }
                if ($include) { $files = @($files | Where-Object { $_.Name -like $include }) }
                $found = @($files |
                    Select-String -Pattern $ToolInput.pattern -ErrorAction SilentlyContinue |
                    Select-Object -First 200 |
                    ForEach-Object { "$($_.Path):$($_.LineNumber):$($_.Line.Trim())" })
                $text = if ($found.Count -gt 0) { $found -join "`n" } else { 'No matches.' }
                return @{ ok = $true; text = $text }
            }
            default {
                return @{ ok = $false; text = "Unknown tool: $Name" }
            }
        }
    }
    catch {
        return @{ ok = $false; text = "Tool error: $($_.Exception.Message)" }
    }
}

# ---- Anthropic Messages API call ------------------------------------------------

function Get-ErrorDetail {
    param($ErrorRecord)
    if ($ErrorRecord.ErrorDetails -and $ErrorRecord.ErrorDetails.Message) {
        return $ErrorRecord.ErrorDetails.Message
    }
    # 5.1: read the response body off the WebException by hand
    try {
        if ($ErrorRecord.Exception.Response) {
            $stream = $ErrorRecord.Exception.Response.GetResponseStream()
            if ($stream) {
                $reader = New-Object System.IO.StreamReader($stream)
                $body = $reader.ReadToEnd()
                $reader.Dispose()
                if ($body) { return $body }
            }
        }
    } catch { }
    return $ErrorRecord.Exception.Message
}

function Invoke-Claude {
    param($Messages)

    $body = @{
        model      = $script:Model
        max_tokens = 16000
        system     = $script:SystemPrompt
        tools      = $script:Tools
        messages   = @($Messages)
    }
    $json = ConvertTo-Json -InputObject $body -Depth 64
    # send UTF-8 bytes: 5.1 encodes string bodies as ISO-8859-1 and corrupts non-ASCII
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)

    $uri = "$script:BaseUrl/v1/messages"
    $maxRetries = 4
    for ($attempt = 1; $attempt -le $maxRetries; $attempt++) {
        try {
            return Invoke-RestMethod -Uri $uri -Method Post -Headers (Get-AuthHeaders) -Body $bytes
        }
        catch {
            $status = 0
            try { $status = [int]$_.Exception.Response.StatusCode } catch { }
            $detail = Get-ErrorDetail $_
            $retryable = ($status -eq 429) -or ($status -ge 500)
            if ($retryable -and $attempt -lt $maxRetries) {
                $delay = [int][Math]::Pow(2, $attempt)
                Write-Host "  [$status] retrying in ${delay}s ..." -ForegroundColor DarkYellow
                Start-Sleep -Seconds $delay
                continue
            }
            throw "API request failed ($status): $detail"
        }
    }
}

# ---- Agentic loop: one user turn -------------------------------------------------

function Invoke-AgentTurn {
    param([string]$UserInput)

    $script:Messages += , @{ role = 'user'; content = $UserInput }

    while ($true) {
        Write-Host '  ...' -ForegroundColor DarkGray
        $resp = Invoke-Claude -Messages $script:Messages

        # Echo assistant content back verbatim - preserves thinking/tool_use blocks,
        # which Sonnet 5 (adaptive thinking) requires for multi-turn coherence.
        $script:Messages += , @{ role = 'assistant'; content = @($resp.content) }

        $toolUses = @()
        foreach ($block in @($resp.content)) {
            switch ($block.type) {
                'text'     { Write-Host ''; Write-Host $block.text; Write-Host '' }
                'thinking' { Write-Host '  [thinking]' -ForegroundColor DarkGray }
                'tool_use' { $toolUses += , $block }
            }
        }

        if ($resp.stop_reason -eq 'refusal') {
            Write-Host '  [request was refused by the model / safety layer]' -ForegroundColor Red
            break
        }
        if ($resp.stop_reason -eq 'max_tokens') {
            Write-Host '  [response truncated: hit max_tokens]' -ForegroundColor DarkYellow
        }
        if ($resp.stop_reason -ne 'tool_use') {
            try {
                Write-Host "  [$($script:Model) | in: $($resp.usage.input_tokens) out: $($resp.usage.output_tokens)]" -ForegroundColor DarkGray
            } catch { }
            break
        }

        # Execute all requested tools; return every result in ONE user message.
        $results = @()
        foreach ($tu in $toolUses) {
            $inputPreview = ConvertTo-Json -InputObject $tu.input -Depth 10 -Compress
            if ($inputPreview.Length -gt 160) { $inputPreview = $inputPreview.Substring(0, 160) + '...' }
            Write-Host "  > $($tu.name) $inputPreview" -ForegroundColor DarkCyan

            $result = Invoke-AgentTool -Name $tu.name -ToolInput $tu.input
            $text = Limit-Text $result.text
            if (-not $result.ok) {
                $firstLine = @($text -split "`n")[0]
                Write-Host "    ! $firstLine" -ForegroundColor Red
            }

            $results += , @{
                type        = 'tool_result'
                tool_use_id = $tu.id
                content     = $text
                is_error    = (-not $result.ok)
            }
        }
        $script:Messages += , @{ role = 'user'; content = @($results) }
    }
}

# ---- REPL line editor -------------------------------------------------------------
#   Ctrl+C clears the line, Up/Down history, Left/Right/Home/End/Del editing,
#   Ctrl+D on an empty line exits.

$script:PromptHistory = New-Object System.Collections.Generic.List[string]
if (Test-Path -LiteralPath $script:HistoryFile) {
    foreach ($h in @(Get-Content -LiteralPath $script:HistoryFile -Tail 200 -ErrorAction SilentlyContinue)) {
        if ($h) { $script:PromptHistory.Add($h) }
    }
}

$script:LineTop = 0
$script:LastLen = 0

function Update-ReplLine {
    param([string]$Prompt, [string]$Text, [int]$Cursor)

    $width = [Math]::Max(20, [Console]::BufferWidth)
    $full  = $Prompt + $Text
    $pad   = [Math]::Max(0, $script:LastLen - $full.Length)

    [Console]::SetCursorPosition(0, $script:LineTop)
    [Console]::Write($full + (' ' * $pad))

    # if writing wrapped past the bottom, the buffer scrolled - shift our anchor up
    $written  = $full.Length + $pad
    $endRow   = $script:LineTop + [int][Math]::Floor($written / $width)
    $overflow = $endRow - ([Console]::BufferHeight - 1)
    if ($overflow -gt 0) { $script:LineTop = [Math]::Max(0, $script:LineTop - $overflow) }

    $pos = $Prompt.Length + $Cursor
    $row = $script:LineTop + [int][Math]::Floor($pos / $width)
    $col = $pos % $width
    [Console]::SetCursorPosition($col, [Math]::Max(0, [Math]::Min($row, [Console]::BufferHeight - 1)))
    $script:LastLen = $full.Length
}

function Read-ReplLine {
    param([string]$Prompt)

    # flush any keys buffered during generation (e.g. stray Ctrl+C presses)
    while ([Console]::KeyAvailable) { [void][Console]::ReadKey($true) }

    Write-Host -NoNewline $Prompt
    $script:LineTop = [Console]::CursorTop
    $script:LastLen = $Prompt.Length

    $buffer  = New-Object System.Text.StringBuilder
    $cursor  = 0
    $histIdx = $script:PromptHistory.Count
    $stash   = ''

    while ($true) {
        $key = [Console]::ReadKey($true)
        $ctrl = ($key.Modifiers -band [ConsoleModifiers]::Control) -ne 0

        if ($key.Key -eq [ConsoleKey]::Enter) {
            Write-Host ''
            return $buffer.ToString()
        }
        elseif ($ctrl -and $key.Key -eq [ConsoleKey]::C) {
            # clear the line instead of exiting
            [void]$buffer.Remove(0, $buffer.Length)
            $cursor = 0
            $histIdx = $script:PromptHistory.Count
            Update-ReplLine $Prompt '' 0
        }
        elseif ($ctrl -and $key.Key -eq [ConsoleKey]::D) {
            if ($buffer.Length -eq 0) { Write-Host ''; return $null }
        }
        elseif ($ctrl -and $key.Key -eq [ConsoleKey]::U) {
            [void]$buffer.Remove(0, $cursor)
            $cursor = 0
            Update-ReplLine $Prompt $buffer.ToString() $cursor
        }
        elseif ($key.Key -eq [ConsoleKey]::UpArrow) {
            if ($histIdx -gt 0) {
                if ($histIdx -eq $script:PromptHistory.Count) { $stash = $buffer.ToString() }
                $histIdx--
                [void]$buffer.Remove(0, $buffer.Length)
                [void]$buffer.Append($script:PromptHistory[$histIdx])
                $cursor = $buffer.Length
                Update-ReplLine $Prompt $buffer.ToString() $cursor
            }
        }
        elseif ($key.Key -eq [ConsoleKey]::DownArrow) {
            if ($histIdx -lt $script:PromptHistory.Count) {
                $histIdx++
                [void]$buffer.Remove(0, $buffer.Length)
                if ($histIdx -eq $script:PromptHistory.Count) { [void]$buffer.Append($stash) }
                else { [void]$buffer.Append($script:PromptHistory[$histIdx]) }
                $cursor = $buffer.Length
                Update-ReplLine $Prompt $buffer.ToString() $cursor
            }
        }
        elseif ($key.Key -eq [ConsoleKey]::LeftArrow)  { if ($cursor -gt 0) { $cursor--; Update-ReplLine $Prompt $buffer.ToString() $cursor } }
        elseif ($key.Key -eq [ConsoleKey]::RightArrow) { if ($cursor -lt $buffer.Length) { $cursor++; Update-ReplLine $Prompt $buffer.ToString() $cursor } }
        elseif ($key.Key -eq [ConsoleKey]::Home)       { $cursor = 0; Update-ReplLine $Prompt $buffer.ToString() $cursor }
        elseif ($key.Key -eq [ConsoleKey]::End)        { $cursor = $buffer.Length; Update-ReplLine $Prompt $buffer.ToString() $cursor }
        elseif ($key.Key -eq [ConsoleKey]::Backspace) {
            if ($cursor -gt 0) {
                [void]$buffer.Remove($cursor - 1, 1)
                $cursor--
                Update-ReplLine $Prompt $buffer.ToString() $cursor
            }
        }
        elseif ($key.Key -eq [ConsoleKey]::Delete) {
            if ($cursor -lt $buffer.Length) {
                [void]$buffer.Remove($cursor, 1)
                Update-ReplLine $Prompt $buffer.ToString() $cursor
            }
        }
        elseif ($key.KeyChar -and -not [char]::IsControl($key.KeyChar)) {
            [void]$buffer.Insert($cursor, $key.KeyChar)
            $cursor++
            Update-ReplLine $Prompt $buffer.ToString() $cursor
        }
    }
}

# ---- Main REPL ----------------------------------------------------------------------

function Show-Banner {
    Write-Host ''
    Write-Host '  agent.ps1 - self-improving agentic loop' -ForegroundColor Cyan
    Write-Host "  model:    $script:Model"                  -ForegroundColor DarkGray
    Write-Host "  endpoint: $script:BaseUrl"                -ForegroundColor DarkGray
    Write-Host "  self:     $script:SelfPath"               -ForegroundColor DarkGray
    Write-Host '  keys:     Ctrl+C clears line | Up/Down history | Ctrl+D or "exit" quits' -ForegroundColor DarkGray
    Write-Host '  commands: /reset /model /help'            -ForegroundColor DarkGray
    Write-Host ''
    if (-not $env:ANTHROPIC_AUTH_TOKEN -and -not $env:ANTHROPIC_API_KEY) {
        Write-Host '  ! No ANTHROPIC_AUTH_TOKEN or ANTHROPIC_API_KEY set - requests will fail.' -ForegroundColor Yellow
        Write-Host ''
    }
}

try {
    [Console]::TreatControlCAsInput = $true
    Show-Banner

    while ($true) {
        $line = Read-ReplLine -Prompt 'you > '
        if ($null -eq $line) { break }          # Ctrl+D
        $line = $line.Trim()
        if (-not $line) { continue }

        $histCount = $script:PromptHistory.Count
        if ($histCount -eq 0 -or $script:PromptHistory[$histCount - 1] -ne $line) {
            $script:PromptHistory.Add($line)
            Add-Content -LiteralPath $script:HistoryFile -Value $line -Encoding UTF8
        }

        # NOTE: no switch here on purpose - 'continue' inside a switch statement
        # targets the switch, not the while loop.
        if ($line -eq 'exit' -or $line -eq 'quit') { break }
        elseif ($line -eq '/reset') {
            $script:Messages = @()
            Write-Host '  conversation cleared' -ForegroundColor DarkGray
            continue
        }
        elseif ($line -eq '/model') {
            Write-Host "  $script:Model via $script:BaseUrl" -ForegroundColor DarkGray
            continue
        }
        elseif ($line -eq '/help') {
            Write-Host '  exit|quit  leave | /reset  clear conversation | /model  show config' -ForegroundColor DarkGray
            Write-Host '  Ctrl+C clears the input line | Up/Down recall history | Ctrl+D exits' -ForegroundColor DarkGray
            continue
        }

        try {
            Invoke-AgentTurn -UserInput $line
        }
        catch {
            Write-Host "  error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}
finally {
    [Console]::TreatControlCAsInput = $false
    if ($script:AgentRunspace) { $script:AgentRunspace.Dispose() }
    Write-Host 'bye.' -ForegroundColor DarkGray
}
