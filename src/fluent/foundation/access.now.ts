import { Record } from '@servicenow/sdk/core'

export const platformTeamGroup = Record({
    $id: Now.ID['sn_platform_team_group'],
    table: 'sys_user_group',
    data: {
        name: 'ServiceNow Platform Team',
        description: 'Fulfillers for ServiceNow platform catalog requests',
        active: true,
    },
})

// Simple field-based criteria (no script) per user-criteria-guide performance guidance --
// scripted criteria are never cached, so field-based is preferred whenever possible.
export const activeEmployeeCriteria = Record({
    $id: Now.ID['sn_platform_uc_active_employees'],
    table: 'user_criteria',
    data: {
        name: 'Active Employees (ITIL)',
        active: true,
        role: Now.ref('sys_user_role', { name: 'itil' }),
    },
})

// Stage-1 approver pool for OAuth Client Registration governance. The source governance
// transcript names a per-integration "Business Owner" as the stage-1 approver; resolving
// that specific named individual dynamically from a catalog variable inside a Fluent flow
// wasn't a pattern grounded in the SDK docs reviewed this session, so stage-1 approval
// routes to this group in the interim -- populate it with actual application owners.
export const applicationOwnersGroup = Record({
    $id: Now.ID['sn_platform_app_owners_group'],
    table: 'sys_user_group',
    data: {
        name: 'Application Owners',
        description: 'Stage-1 approvers for OAuth Client Registration requests (business justification / ownership review)',
        active: true,
    },
})

export const platformTeamCriteria = Record({
    $id: Now.ID['sn_platform_uc_platform_team'],
    table: 'user_criteria',
    data: {
        name: 'ServiceNow Platform Team',
        active: true,
        // Reference by Now.ID key -- group is defined in this same project.
        group: Now.ref('sys_user_group', 'sn_platform_team_group'),
    },
})
