import { CatalogItem, ReferenceVariable, SelectBoxVariable, MultiLineTextVariable, YesNoVariable } from '@servicenow/sdk/core'
import { platformCatalog, devConfigCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const modifyExistingCatalogItem = CatalogItem({
    $id: Now.ID['sn_platform_ci_modify-existing-catalog-item'],
    name: 'Modify Existing Catalog Item',
    shortDescription:
        'Request a change to an existing Service Catalog item (variables, fulfillment process, visibility).',
    description: 'Use this to request the platform team modify an already-published catalog item.',
    catalogs: [platformCatalog],
    categories: [devConfigCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        item_to_modify: ReferenceVariable({
            referenceTable: 'sc_cat_item',
            question: 'Item to modify',
            order: 100,
            mandatory: true,
        }),
        change_type: SelectBoxVariable({
            question: 'Change type',
            order: 200,
            choices: {
                add_variable: { label: 'Add variable', sequence: 1 },
                change_fulfillment: { label: 'Change fulfillment process engine', sequence: 2 },
                change_visibility: { label: 'Change visibility', sequence: 3 },
                other: { label: 'Other', sequence: 4 },
            },
        }),
        change_description: MultiLineTextVariable({
            question: 'Description of the change',
            order: 300,
            mandatory: true,
        }),
        is_urgent: YesNoVariable({
            question: 'Blocking/urgent',
            order: 400,
        }),
    },
})
