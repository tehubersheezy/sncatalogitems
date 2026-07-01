import { CatalogItem, SingleLineTextVariable, MultiLineTextVariable, SelectBoxVariable, ReferenceVariable } from '@servicenow/sdk/core'
import { platformCatalog, platformHealthCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const enhancementRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_enhancement-request'],
    name: 'Enhancement Request (Existing Functionality)',
    shortDescription: 'Request an improvement or new capability for an existing feature or service.',
    description:
        'Feeds Demand Management (dmn_demand) via the documented Create Enhancement path once triaged -- that path requires Project Portfolio Suite and the it_demand_manager role, so the fulfillment task here routes to the platform team for triage rather than auto-creating a Demand record.',
    catalogs: [platformCatalog],
    categories: [platformHealthCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        existing_feature: SingleLineTextVariable({
            question: 'Existing feature/item this enhances',
            order: 100,
            mandatory: true,
        }),
        requested_improvement: MultiLineTextVariable({
            question: 'Requested improvement',
            order: 200,
            mandatory: true,
        }),
        business_value: SelectBoxVariable({
            question: 'Business value/priority',
            order: 300,
            mandatory: true,
            choices: {
                low: { label: 'Low', sequence: 1 },
                medium: { label: 'Medium', sequence: 2 },
                high: { label: 'High', sequence: 3 },
            },
        }),
        requesting_department: ReferenceVariable({
            referenceTable: 'sys_user_group',
            question: 'Requesting department',
            order: 400,
        }),
    },
})
