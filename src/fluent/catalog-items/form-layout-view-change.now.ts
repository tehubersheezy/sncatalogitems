import {
    CatalogItem,
    ReferenceVariable,
    SelectBoxVariable,
    MultiLineTextVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, devConfigCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const formLayoutViewChange = CatalogItem({
    $id: Now.ID['sn_platform_ci_form-layout-view-change'],
    name: 'Form Layout / View Change',
    shortDescription: 'Request a change to a form layout or view.',
    description: 'Use this to request the platform team change a form layout or view for a specific table.',
    catalogs: [platformCatalog],
    categories: [devConfigCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        target_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target table/form',
            order: 100,
            mandatory: true,
        }),
        view: SelectBoxVariable({
            question: 'View',
            order: 200,
            choices: {
                default: { label: 'Default', sequence: 1 },
                service_portal: { label: 'Service Portal', sequence: 2 },
                mobile: { label: 'Mobile', sequence: 3 },
            },
        }),
        requested_changes: MultiLineTextVariable({
            question: 'Requested changes',
            order: 300,
            mandatory: true,
        }),
        mockup: AttachmentVariable({
            question: 'Mockup',
            order: 400,
        }),
    },
})
