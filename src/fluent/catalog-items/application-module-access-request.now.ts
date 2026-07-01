import { CatalogItem, SingleLineTextVariable, MultiLineTextVariable, RequestedForVariable } from '@servicenow/sdk/core'
import { platformCatalog, accessGovernanceCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { approvalFulfillmentFlow } from '../flows/fulfillment.now'

export const applicationModuleAccessRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_application-module-access-request'],
    name: 'Application/Module Access Request',
    shortDescription: 'Request access to a specific application or module.',
    description:
        'Use this to request access to an application or module, following the standard grant-role-access process.',
    catalogs: [platformCatalog],
    categories: [accessGovernanceCategory],
    availableFor: [activeEmployeeCriteria],
    flow: approvalFulfillmentFlow,
    variables: {
        target_app_or_module: SingleLineTextVariable({
            question: 'Application/module name',
            order: 100,
            mandatory: true,
        }),
        requested_for: RequestedForVariable({
            question: 'User needing access',
            order: 200,
            mandatory: true,
        }),
        justification: MultiLineTextVariable({
            question: 'Justification',
            order: 300,
            mandatory: true,
        }),
    },
})
