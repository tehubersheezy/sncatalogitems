import {
    CatalogItemRecordProducer,
    SingleLineTextVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    ReferenceVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, platformHealthCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'

export const bugDefectReport = CatalogItemRecordProducer({
    $id: Now.ID['sn_platform_ci_bug-defect-report'],
    name: 'Bug/Defect Report (Platform Issue)',
    shortDescription: 'Report a platform configuration bug -- not an end-user incident.',
    description:
        'Creates an Agile Development 2.0 Defect record (rm_defect) directly -- rm_defect extends task, so a Record Producer is the correct mechanism.',
    table: 'rm_defect',
    catalogs: [platformCatalog],
    categories: [platformHealthCategory],
    availableFor: [activeEmployeeCriteria],
    variables: {
        short_description: SingleLineTextVariable({
            question: 'Short description',
            order: 100,
            mandatory: true,
            mapToField: true,
            field: 'short_description',
        }),
        description: MultiLineTextVariable({
            question: 'Description',
            order: 200,
            mandatory: true,
            mapToField: true,
            field: 'description',
        }),
        affected_product: SingleLineTextVariable({
            question: 'Affected product/feature',
            order: 300,
            mapToField: true,
            field: 'product',
        }),
        priority: SelectBoxVariable({
            question: 'Priority',
            order: 400,
            mandatory: true,
            mapToField: true,
            field: 'priority',
            choices: {
                p1: { label: 'P1 - Critical', sequence: 1 },
                p2: { label: 'P2 - High', sequence: 2 },
                p3: { label: 'P3 - Medium', sequence: 3 },
                p4: { label: 'P4 - Low', sequence: 4 },
            },
        }),
        reported_against: ReferenceVariable({
            referenceTable: 'task',
            question: 'Reported against (problem/change/task)',
            order: 500,
            mapToField: true,
            field: 'reported_against',
        }),
    },
})
