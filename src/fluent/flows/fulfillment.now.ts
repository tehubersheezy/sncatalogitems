import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation'
import { platformTeamGroup } from '../foundation/access.now'

// Shared fulfillment flow for catalog items that just need a fulfillment task routed
// to the platform team, with no approval gate.
export const genericFulfillmentFlow = Flow(
    {
        $id: Now.ID['sn_platform_generic_fulfillment_flow'],
        name: 'Platform Catalog - Generic Fulfillment',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.application.serviceCatalog,
        { $id: Now.ID['sn_platform_generic_fulfillment_trigger'] },
        { run_flow_in: 'background' }
    ),
    params => {
        wfa.action(
            action.core.createCatalogTask,
            { $id: Now.ID['sn_platform_generic_fulfillment_task'] },
            {
                ah_requested_item: wfa.dataPill(params.trigger.request_item, 'reference'),
                ah_short_description: 'Fulfill ServiceNow platform catalog request',
                ah_wait: false,
            }
        )
    }
)

// Shared fulfillment flow for catalog items that need a blocking approval (from the
// platform team group) before the fulfillment task is created.
export const approvalFulfillmentFlow = Flow(
    {
        $id: Now.ID['sn_platform_approval_fulfillment_flow'],
        name: 'Platform Catalog - Approval & Fulfillment',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.application.serviceCatalog,
        { $id: Now.ID['sn_platform_approval_fulfillment_trigger'] },
        { run_flow_in: 'background' }
    ),
    params => {
        const approval = wfa.action(
            action.core.askForApproval,
            { $id: Now.ID['sn_platform_manager_approval'] },
            {
                record: wfa.dataPill(params.trigger.request_item, 'reference'),
                table: 'sc_req_item',
                approval_reason: 'Approval required for this ServiceNow platform request',
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
                $id: Now.ID['sn_platform_if_approved'],
                condition: `${wfa.dataPill(approval.approval_state, 'choice')}=approved`,
            },
            () => {
                wfa.action(
                    action.core.createCatalogTask,
                    { $id: Now.ID['sn_platform_approval_fulfillment_task'] },
                    {
                        ah_requested_item: wfa.dataPill(params.trigger.request_item, 'reference'),
                        ah_short_description: 'Fulfill approved ServiceNow platform catalog request',
                        ah_wait: false,
                    }
                )
            }
        )
    }
)
