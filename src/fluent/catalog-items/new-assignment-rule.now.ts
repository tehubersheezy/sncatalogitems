import { CatalogItem, ReferenceVariable, MultiLineTextVariable, SingleLineTextVariable } from '@servicenow/sdk/core'
import { platformCatalog, processSlaCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newAssignmentRule = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-assignment-rule'],
    name: 'New Assignment Rule',
    shortDescription: 'Request a new assignment rule to set assigned_to/assignment_group automatically.',
    description:
        'Assignment rules set assigned_to/assignment_group when conditions match; only the lowest-order matching rule runs.',
    catalogs: [platformCatalog],
    categories: [processSlaCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        target_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target table',
            order: 100,
            mandatory: true,
        }),
        condition: MultiLineTextVariable({
            question: 'Condition',
            order: 200,
            mandatory: true,
        }),
        target_group: ReferenceVariable({
            referenceTable: 'sys_user_group',
            question: 'Target assignment group',
            order: 300,
            mandatory: true,
        }),
        rule_order: SingleLineTextVariable({
            question: 'Order/priority (lower runs first)',
            order: 400,
        }),
    },
})
