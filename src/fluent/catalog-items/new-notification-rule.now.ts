import { CatalogItem, ReferenceVariable, SelectBoxVariable, MultiLineTextVariable } from '@servicenow/sdk/core'
import { platformCatalog, notificationsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newNotificationRule = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-notification-rule'],
    name: 'New Email/SMS Notification Rule',
    shortDescription: 'Request a new email or SMS notification rule.',
    description:
        'The Notification form has four tabs: When to send, Who will receive, What it will contain, What Digest will contain. Documented "send when" options: record inserted/updated, an event fired, or a Notification step in Flow Designer.',
    catalogs: [platformCatalog],
    categories: [notificationsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        target_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target table',
            order: 100,
            mandatory: true,
        }),
        trigger_type: SelectBoxVariable({
            question: 'Trigger type',
            order: 200,
            mandatory: true,
            choices: {
                record_change: { label: 'Record inserted or updated', sequence: 1 },
                event: { label: 'Particular event fired', sequence: 2 },
                flow_step: { label: 'Notification step in Flow Designer', sequence: 3 },
            },
        }),
        recipient_criteria: MultiLineTextVariable({
            question: 'Recipient criteria',
            order: 300,
            mandatory: true,
        }),
        message_content: MultiLineTextVariable({
            question: 'Message content',
            order: 400,
            mandatory: true,
        }),
    },
})
