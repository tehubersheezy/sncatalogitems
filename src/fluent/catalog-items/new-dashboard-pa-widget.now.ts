import {
    CatalogItem,
    SingleLineTextVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    ReferenceVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, reportingAnalyticsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newDashboardPaWidget = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-dashboard-pa-widget'],
    name: 'New Dashboard / Performance Analytics Widget',
    shortDescription: 'Request a new dashboard or Performance Analytics indicator/widget.',
    description:
        'Platform Analytics is the umbrella product; Performance Analytics specifically refers to the KPI/Indicator engine. Indicators are automated, formula, or manual.',
    catalogs: [platformCatalog],
    categories: [reportingAnalyticsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        dashboard_widget_name: SingleLineTextVariable({
            question: 'Dashboard/widget name',
            order: 100,
            mandatory: true,
        }),
        indicator_type: SelectBoxVariable({
            question: 'Indicator type',
            order: 200,
            mandatory: true,
            choices: {
                automated: { label: 'Automated', sequence: 1 },
                formula: { label: 'Formula', sequence: 2 },
                manual: { label: 'Manual', sequence: 3 },
            },
        }),
        kpi_definition: MultiLineTextVariable({
            question: 'KPI/metric definition',
            order: 300,
            mandatory: true,
        }),
        data_source_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Data source table',
            order: 400,
        }),
    },
})
