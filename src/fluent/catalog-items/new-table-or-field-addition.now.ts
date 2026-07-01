import { CatalogItem, SelectBoxVariable, ReferenceVariable, SingleLineTextVariable, MultiLineTextVariable } from '@servicenow/sdk/core'
import { platformCatalog, devConfigCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newTableOrFieldAddition = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-table-or-field-addition'],
    name: 'New Table or Field Addition',
    shortDescription: 'Request a new table or a new field on an existing table.',
    description: 'Use this for platform configuration work: adding a new table, or a new field on an existing table.',
    catalogs: [platformCatalog],
    categories: [devConfigCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        addition_type: SelectBoxVariable({
            question: 'New table or new field?',
            order: 100,
            mandatory: true,
            choices: {
                new_table: { label: 'New table', sequence: 1 },
                new_field: { label: 'New field on existing table', sequence: 2 },
            },
        }),
        target_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target table (if field addition)',
            order: 200,
        }),
        proposed_name: SingleLineTextVariable({
            question: 'Proposed table/field name',
            order: 300,
            mandatory: true,
        }),
        field_type: SelectBoxVariable({
            question: 'Field/column type',
            order: 400,
            choices: {
                string: { label: 'String', sequence: 1 },
                integer: { label: 'Integer', sequence: 2 },
                boolean: { label: 'Boolean', sequence: 3 },
                reference: { label: 'Reference', sequence: 4 },
                date_time: { label: 'Date/Time', sequence: 5 },
            },
        }),
        justification: MultiLineTextVariable({
            question: 'Business justification',
            order: 500,
            mandatory: true,
        }),
    },
})
