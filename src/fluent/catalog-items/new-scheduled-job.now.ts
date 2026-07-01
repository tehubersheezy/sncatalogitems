import { CatalogItem, SingleLineTextVariable, MultiLineTextVariable, SelectBoxVariable, ReferenceVariable } from '@servicenow/sdk/core'
import { platformCatalog, integrationsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newScheduledJob = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-scheduled-job'],
    name: 'New Scheduled Job / Integration Job',
    shortDescription: 'Request a new scheduled job (Schedule Job [sysauto]).',
    description:
        'Use this to request a new scheduled job -- report generation/distribution, auto-generating a record from a template, or running a custom script on a schedule.',
    catalogs: [platformCatalog],
    categories: [integrationsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        job_name: SingleLineTextVariable({ question: 'Job name', order: 100, mandatory: true }),
        job_type: SelectBoxVariable({
            question: 'Job type',
            order: 200,
            mandatory: true,
            choices: {
                report_generation: { label: 'Automate report generation/distribution', sequence: 1 },
                record_from_template: { label: 'Auto-generate a record from a template', sequence: 2 },
                custom_script: { label: 'Run a custom script', sequence: 3 },
            },
        }),
        requested_schedule: MultiLineTextVariable({ question: 'Requested schedule/frequency', order: 300, mandatory: true }),
        logic_description: MultiLineTextVariable({ question: 'Script/logic description', order: 400, mandatory: true }),
        affected_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Affected table',
            order: 500,
        }),
    },
})
