import { CatalogItem, ReferenceVariable, SelectBoxVariable, MultiLineTextVariable } from '@servicenow/sdk/core'
import { platformCatalog, reportingAnalyticsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newReportRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-report-request'],
    name: 'New Report Request',
    shortDescription: 'Request a new report be built.',
    description: 'Use this to request a new report against a specific table.',
    catalogs: [platformCatalog],
    categories: [reportingAnalyticsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        source_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Source table',
            order: 100,
            mandatory: true,
        }),
        report_type: SelectBoxVariable({
            question: 'Report type',
            order: 200,
            mandatory: true,
            choices: {
                bar: { label: 'Bar', sequence: 1 },
                pie: { label: 'Pie', sequence: 2 },
                line: { label: 'Line', sequence: 3 },
                pivot_table: { label: 'Pivot table', sequence: 4 },
                list: { label: 'List', sequence: 5 },
                trend: { label: 'Trend', sequence: 6 },
            },
        }),
        metrics_grouping: MultiLineTextVariable({
            question: 'Metrics/grouping needed',
            order: 300,
            mandatory: true,
        }),
        sharing: SelectBoxVariable({
            question: 'Sharing',
            order: 400,
            choices: {
                personal: { label: 'Personal', sequence: 1 },
                group: { label: 'Group', sequence: 2 },
                global: { label: 'Global', sequence: 3 },
            },
        }),
    },
})
