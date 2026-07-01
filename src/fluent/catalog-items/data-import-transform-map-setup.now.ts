import {
    CatalogItem,
    SelectBoxVariable,
    ReferenceVariable,
    AttachmentVariable,
    MultiLineTextVariable,
    YesNoVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, integrationsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const dataImportTransformMapSetup = CatalogItem({
    $id: Now.ID['sn_platform_ci_data-import-transform-map-setup'],
    name: 'Data Import / Transform Map Setup',
    shortDescription: 'Request a new data import (Import Set + Transform Map) be configured.',
    description: 'Use this to request the platform team set up a new data import pipeline.',
    catalogs: [platformCatalog],
    categories: [integrationsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        data_source_type: SelectBoxVariable({
            question: 'Data source type',
            order: 100,
            mandatory: true,
            choices: {
                csv: { label: 'CSV', sequence: 1 },
                excel: { label: 'Excel', sequence: 2 },
                xml: { label: 'XML', sequence: 3 },
                json: { label: 'JSON', sequence: 4 },
                jdbc: { label: 'JDBC', sequence: 5 },
                ldap: { label: 'LDAP', sequence: 6 },
                custom: { label: 'Custom', sequence: 7 },
            },
        }),
        target_table: ReferenceVariable({
            referenceTable: 'sys_db_object',
            question: 'Target table',
            order: 200,
            mandatory: true,
        }),
        sample_file: AttachmentVariable({
            question: 'Sample file',
            order: 300,
        }),
        field_mapping_notes: MultiLineTextVariable({
            question: 'Field mapping notes',
            order: 400,
            mandatory: true,
        }),
        is_recurring: YesNoVariable({
            question: 'Recurring import',
            order: 500,
        }),
    },
})
