import { CatalogItem, SingleLineTextVariable, MultiLineTextVariable, SelectBoxVariable } from '@servicenow/sdk/core'
import { platformCatalog, platformHealthCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const performanceSlownessInvestigation = CatalogItem({
    $id: Now.ID['sn_platform_ci_performance-slowness-investigation'],
    name: 'Performance/Slowness Investigation Request',
    shortDescription: 'Request an investigation into platform performance or slowness -- not an end-user incident.',
    description:
        'No native ServiceNow record type fits this cleanly; routed as a platform-team-internal catalog item.',
    catalogs: [platformCatalog],
    categories: [platformHealthCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        affected_area: SingleLineTextVariable({
            question: 'Affected app/table/module',
            order: 100,
            mandatory: true,
        }),
        environment: SelectBoxVariable({
            question: 'Environment',
            order: 200,
            mandatory: true,
            choices: {
                prod: { label: 'Production', sequence: 1 },
                test: { label: 'Test', sequence: 2 },
                dev: { label: 'Development', sequence: 3 },
            },
        }),
        symptoms: MultiLineTextVariable({
            question: 'Symptoms/reproduction steps',
            order: 300,
            mandatory: true,
        }),
        impact_urgency: SelectBoxVariable({
            question: 'Impact/urgency',
            order: 400,
            choices: {
                low: { label: 'Low', sequence: 1 },
                medium: { label: 'Medium', sequence: 2 },
                high: { label: 'High', sequence: 3 },
                critical: { label: 'Critical', sequence: 4 },
            },
        }),
    },
})
