import {
    CatalogItem,
    CatalogUiPolicy,
    SelectBoxVariable,
    SingleLineTextVariable,
    MultiLineTextVariable,
    ReferenceVariable,
    MultipleChoiceVariable,
} from '@servicenow/sdk/core'
import { platformCatalog, apiGovernanceCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { oauthClientRegistrationFlow } from '../flows/oauth-governance.now'

// Source: ServiceNow Inbound REST API Governance (v1) -- scope is inbound REST API access
// only (OAuth client registration, credential lifecycle). IntegrationHub, MID Server,
// outbound integrations, and webhooks are explicitly out of scope for this item; see
// new-integration-request.now.ts for the general integration-build intake instead.
export const oauthClientRegistration = CatalogItem({
    $id: Now.ID['sn_platform_ci_oauth-client-registration'],
    name: 'OAuth Client Registration',
    shortDescription: 'Register, modify, or decommission an OAuth client for inbound REST API access to ServiceNow.',
    description:
        'Governs requesting, provisioning, and managing access to ServiceNow inbound REST APIs. Every API request must execute under a known identity (anonymous access is prohibited) -- User Identity (OAuth Authorization Code, acting as the logged-in user) or Service Identity (OAuth Client Credentials, representing a system). All OAuth client creation, modification, secret regeneration, and decommissioning must go through this request; manual creation outside this process is not permitted.',
    catalogs: [platformCatalog],
    categories: [apiGovernanceCategory],
    availableFor: [activeEmployeeCriteria],
    flow: oauthClientRegistrationFlow,
    variables: {
        request_type: SelectBoxVariable({
            question: 'Request type',
            order: 100,
            mandatory: true,
            choices: {
                register_user: { label: 'Register User OAuth Application', sequence: 1 },
                register_service: { label: 'Register Service OAuth Application', sequence: 2 },
                modify: { label: 'Modify Existing OAuth Client', sequence: 3 },
                regenerate_secret: { label: 'Regenerate Client Secret', sequence: 4 },
                decommission: { label: 'Decommission OAuth Client', sequence: 5 },
            },
        }),

        // -- Business information (registration) --
        application_name: SingleLineTextVariable({
            question: 'Application name',
            order: 200,
            mandatory: true,
        }),
        business_justification: MultiLineTextVariable({
            question: 'Business justification',
            order: 300,
        }),
        business_owner: ReferenceVariable({
            referenceTable: 'sys_user',
            question: 'Business owner',
            tooltip: 'Named individual accountable for the business need and continued use of this integration.',
            order: 400,
        }),
        technical_owner: ReferenceVariable({
            referenceTable: 'sys_user',
            question: 'Technical owner',
            tooltip: 'Named individual responsible for implementation and credential management.',
            order: 500,
        }),
        vendor: SingleLineTextVariable({
            question: 'Vendor (if applicable)',
            order: 600,
        }),

        // -- Authentication (registration) --
        authentication_type: SelectBoxVariable({
            question: 'Authentication type',
            order: 700,
            choices: {
                user_oauth: { label: 'User OAuth (Authorization Code) -- acts on behalf of a user', sequence: 1 },
                service_oauth: { label: 'Service OAuth (Client Credentials) -- acts as itself', sequence: 2 },
            },
        }),

        // -- API requirements (registration) --
        apis_required: MultiLineTextVariable({
            question: 'APIs required',
            order: 800,
        }),
        required_roles: MultiLineTextVariable({
            question: 'Required roles',
            tooltip: 'Least privilege applies -- request only the roles required for the approved business function.',
            order: 900,
        }),
        environments: MultipleChoiceVariable({
            question: 'Environment(s)',
            choiceDirection: 'across',
            choices: {
                dev: { label: 'Development', sequence: 1 },
                test: { label: 'Test', sequence: 2 },
                prod: { label: 'Production', sequence: 3 },
            },
            order: 1000,
        }),
        expected_transaction_volume: SingleLineTextVariable({
            question: 'Expected transaction volume',
            exampleText: 'e.g. 500 requests/hour',
            order: 1100,
        }),

        // -- Target client (modify / regenerate secret / decommission) --
        existing_oauth_client: SingleLineTextVariable({
            question: 'Existing OAuth client (name or Client ID)',
            order: 1200,
        }),
        decommission_reason: MultiLineTextVariable({
            question: 'Decommission reason',
            order: 1300,
        }),
    },
})

// Show/require registration-only fields when registering a new User or Service OAuth app.
export const oauthRegistrationFieldsPolicy = CatalogUiPolicy({
    $id: Now.ID['sn_platform_oauth_policy_registration_fields'],
    shortDescription: 'OAuth Client Registration: show registration fields for new applications',
    catalogItem: oauthClientRegistration,
    catalogCondition: `${oauthClientRegistration.variables.request_type}=register_user^OR${oauthClientRegistration.variables.request_type}=register_service^EQ`,
    actions: [
        { variableName: oauthClientRegistration.variables.business_justification, visible: true, mandatory: true },
        { variableName: oauthClientRegistration.variables.authentication_type, visible: true, mandatory: true },
        { variableName: oauthClientRegistration.variables.apis_required, visible: true, mandatory: true },
        { variableName: oauthClientRegistration.variables.required_roles, visible: true, mandatory: true },
        { variableName: oauthClientRegistration.variables.environments, visible: true, mandatory: true },
        { variableName: oauthClientRegistration.variables.expected_transaction_volume, visible: true, mandatory: true },
    ],
})

// Show/require the existing-client reference for modify / regenerate-secret / decommission.
export const oauthExistingClientPolicy = CatalogUiPolicy({
    $id: Now.ID['sn_platform_oauth_policy_existing_client'],
    shortDescription: 'OAuth Client Registration: show existing client field for modify/regenerate/decommission',
    catalogItem: oauthClientRegistration,
    catalogCondition: `${oauthClientRegistration.variables.request_type}=modify^OR${oauthClientRegistration.variables.request_type}=regenerate_secret^OR${oauthClientRegistration.variables.request_type}=decommission^EQ`,
    actions: [
        { variableName: oauthClientRegistration.variables.existing_oauth_client, visible: true, mandatory: true },
    ],
})

// Show/require the decommission reason only when decommissioning.
export const oauthDecommissionReasonPolicy = CatalogUiPolicy({
    $id: Now.ID['sn_platform_oauth_policy_decommission_reason'],
    shortDescription: 'OAuth Client Registration: show decommission reason when decommissioning',
    catalogItem: oauthClientRegistration,
    catalogCondition: `${oauthClientRegistration.variables.request_type}=decommission^EQ`,
    actions: [
        { variableName: oauthClientRegistration.variables.decommission_reason, visible: true, mandatory: true },
    ],
})
