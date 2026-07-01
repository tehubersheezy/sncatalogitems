import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation'
import { applicationOwnersGroup, platformTeamGroup } from '../foundation/access.now'

// Governance model source: ServiceNow Inbound REST API Governance (v1) -- two sequential
// approval stages (Application Owner, then Platform/API Owner) before an OAuth client is
// provisioned. Sequential approvals are modeled as two separate askForApproval calls per
// the wfa-flow-actions-guide guidance ("sequential = multiple askForApproval calls").
export const oauthClientRegistrationFlow = Flow(
    {
        $id: Now.ID['sn_platform_oauth_governance_flow'],
        name: 'OAuth Client Registration - Governance Approval & Fulfillment',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.application.serviceCatalog,
        { $id: Now.ID['sn_platform_oauth_governance_trigger'] },
        { run_flow_in: 'background' }
    ),
    params => {
        // Stage 1: Application Owner approval (business need / ownership).
        const ownerApproval = wfa.action(
            action.core.askForApproval,
            { $id: Now.ID['sn_platform_oauth_owner_approval'] },
            {
                record: wfa.dataPill(params.trigger.request_item, 'reference'),
                table: 'sc_req_item',
                approval_reason: 'Application Owner approval required for OAuth client registration',
                approval_conditions: wfa.approvalRules({
                    conditionType: 'OR',
                    ruleSets: [
                        {
                            action: 'ApprovesRejects',
                            conditionType: 'AND',
                            rules: [[{ ruleType: 'Any', users: [], groups: [`${applicationOwnersGroup}`], manual: false }]],
                        },
                    ],
                }),
                due_date: wfa.approvalDueDate({
                    action: 'reject',
                    dateType: 'actual',
                    date: '{}',
                    duration: 5,
                    durationType: 'days',
                    daysSchedule: '',
                }),
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['sn_platform_oauth_owner_approved'],
                condition: `${wfa.dataPill(ownerApproval.approval_state, 'choice')}=approved`,
            },
            () => {
                // Stage 2: Platform/API Owner approval (technical + standards review).
                const platformApproval = wfa.action(
                    action.core.askForApproval,
                    { $id: Now.ID['sn_platform_oauth_platform_approval'] },
                    {
                        record: wfa.dataPill(params.trigger.request_item, 'reference'),
                        table: 'sc_req_item',
                        approval_reason: 'Platform/API Owner approval required for OAuth client registration',
                        approval_conditions: wfa.approvalRules({
                            conditionType: 'OR',
                            ruleSets: [
                                {
                                    action: 'ApprovesRejects',
                                    conditionType: 'AND',
                                    rules: [[{ ruleType: 'Any', users: [], groups: [`${platformTeamGroup}`], manual: false }]],
                                },
                            ],
                        }),
                        due_date: wfa.approvalDueDate({
                            action: 'reject',
                            dateType: 'actual',
                            date: '{}',
                            duration: 5,
                            durationType: 'days',
                            daysSchedule: '',
                        }),
                    }
                )

                wfa.flowLogic.if(
                    {
                        $id: Now.ID['sn_platform_oauth_platform_approved'],
                        condition: `${wfa.dataPill(platformApproval.approval_state, 'choice')}=approved`,
                    },
                    () => {
                        wfa.action(
                            action.core.createCatalogTask,
                            { $id: Now.ID['sn_platform_oauth_provision_task'] },
                            {
                                ah_requested_item: wfa.dataPill(params.trigger.request_item, 'reference'),
                                ah_short_description: 'Provision OAuth client per approved OAuth Client Registration request',
                                ah_wait: false,
                            }
                        )
                    }
                )
            }
        )
    }
)
