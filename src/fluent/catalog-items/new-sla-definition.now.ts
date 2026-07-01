import {
    CatalogItem,
    ReferenceVariable,
    MultiLineTextVariable,
    DurationVariable,
    SelectBoxVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, processSlaCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newSlaDefinition = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-sla-definition'],
    name: 'New SLA Definition',
    shortDescription: 'Request a new SLA Definition for a task table.',
    description:
        'An SLA Definition defines timings, conditions, and workflows required to create and progress Task SLAs (task_sla table).',
    catalogs: [platformCatalog],
    categories: [processSlaCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        target_task_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target task table',
            order: 100,
            mandatory: true,
        }),
        start_stop_pause_conditions: MultiLineTextVariable({
            question: 'Start/stop/pause conditions',
            order: 200,
            mandatory: true,
        }),
        target_duration: DurationVariable({
            question: 'Target SLA duration',
            order: 300,
            mandatory: true,
        }),
        applies_to_priority: SelectBoxVariable({
            question: 'Priority/condition this SLA applies to',
            order: 400,
            choices: {
                priority_1: { label: 'Priority 1 - Critical', sequence: 1 },
                priority_2: { label: 'Priority 2 - High', sequence: 2 },
                priority_3: { label: 'Priority 3 - Moderate', sequence: 3 },
                priority_4: { label: 'Priority 4 - Low', sequence: 4 },
                priority_5: { label: 'Priority 5 - Planning', sequence: 5 },
            },
        }),
    },
})
