import {
    CatalogItem,
    SingleLineTextVariable,
    MultiLineTextVariable,
    ReferenceVariable,
    SelectBoxVariable,
    YesNoVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, devConfigCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newCatalogItemRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-catalog-item-request'],
    name: 'New Catalog Item Request',
    shortDescription: "Request the platform team build a new Service Catalog item for your team's good or service.",
    description:
        'Use this to request a brand-new catalog item be designed and built, including its intake form and fulfillment process.',
    catalogs: [platformCatalog],
    categories: [devConfigCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        item_name: SingleLineTextVariable({
            question: 'Item name',
            order: 100,
            mandatory: true,
        }),
        item_description: MultiLineTextVariable({
            question: 'Description of the good/service',
            order: 200,
            mandatory: true,
        }),
        requesting_group: ReferenceVariable({
            referenceTable: 'sys_user_group',
            question: 'Requesting/fulfillment group',
            order: 300,
        }),
        urgency: SelectBoxVariable({
            question: 'Urgency',
            order: 400,
            choices: {
                low: { label: 'Low', sequence: 1 },
                medium: { label: 'Medium', sequence: 2 },
                high: { label: 'High', sequence: 3 },
            },
        }),
        requires_approval: YesNoVariable({
            question: 'Requires an approval step',
            order: 500,
        }),
        form_fields_needed: MultiLineTextVariable({
            question: 'Fields/questions needed on the intake form',
            order: 600,
        }),
        mockups: AttachmentVariable({
            question: 'Mockups or reference material',
            order: 700,
        }),
    },
})
