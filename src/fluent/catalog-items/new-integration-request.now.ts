import {
    CatalogItem,
    SingleLineTextVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    YesNoVariable,
    ReferenceVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, integrationsCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { genericFulfillmentFlow } from '../flows/fulfillment.now'

export const newIntegrationRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_new-integration-request'],
    name: 'New Integration Request',
    shortDescription: 'Request a new integration with a third-party system (REST/SOAP API, MID Server).',
    description:
        'Use this to request the platform team build a new integration. This is a custom intake wrapper the platform team maintains -- there is no native ServiceNow "integration request" record type.',
    catalogs: [platformCatalog],
    categories: [integrationsCategory],
    availableFor: [activeEmployeeCriteria],
    flow: genericFulfillmentFlow,
    variables: {
        system_name: SingleLineTextVariable({
            question: 'System/vendor name',
            order: 100,
            mandatory: true,
        }),
        integration_type: SelectBoxVariable({
            question: 'Integration type',
            order: 200,
            mandatory: true,
            choices: {
                inbound_webhook: { label: 'Inbound webhook', sequence: 1 },
                outbound_rest: { label: 'Outbound REST', sequence: 2 },
                soap: { label: 'SOAP', sequence: 3 },
                integration_hub_spoke: { label: 'Integration Hub spoke', sequence: 4 },
            },
        }),
        requires_mid_server: YesNoVariable({
            question: 'Requires a MID Server (on-prem system reachability)',
            order: 300,
        }),
        data_flow_description: MultiLineTextVariable({
            question: 'Data flow description',
            order: 400,
            mandatory: true,
        }),
        business_owner: ReferenceVariable({
            referenceTable: 'sys_user_group',
            question: 'Business owner group',
            order: 500,
        }),
    },
})
