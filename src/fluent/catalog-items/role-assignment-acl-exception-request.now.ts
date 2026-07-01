import { CatalogItem, ReferenceVariable, RequestedForVariable, SelectBoxVariable, MultiLineTextVariable } from '@servicenow/sdk/core'
import { platformCatalog, accessGovernanceCategory } from '../foundation/taxonomy.now'
import { activeEmployeeCriteria } from '../foundation/access.now'
import { approvalFulfillmentFlow } from '../flows/fulfillment.now'

export const roleAssignmentAclExceptionRequest = CatalogItem({
    $id: Now.ID['sn_platform_ci_role-assignment-acl-exception-request'],
    name: 'Role Assignment / ACL Exception Request',
    shortDescription: 'Request a role assignment or an exception to standard access control.',
    description: 'Custom intake wrapper around native role elevation / time-limited roles -- there is no native "ACL exception request" record type in ServiceNow.',
    catalogs: [platformCatalog],
    categories: [accessGovernanceCategory],
    availableFor: [activeEmployeeCriteria],
    flow: approvalFulfillmentFlow,
    variables: {
        requested_for: RequestedForVariable({ question: 'Requesting user', order: 100, mandatory: true }),
        role_requested: ReferenceVariable({
            referenceTable: 'sys_user_role',
            question: 'Role requested',
            order: 200,
            mandatory: true,
        }),
        duration: SelectBoxVariable({
            question: 'Duration',
            order: 300,
            mandatory: true,
            choices: {
                permanent: { label: 'Permanent', sequence: 1 },
                time_limited: { label: 'Time-limited (max 5 days)', sequence: 2 },
            },
        }),
        justification: MultiLineTextVariable({ question: 'Business justification', order: 400, mandatory: true }),
        approving_manager: ReferenceVariable({
            referenceTable: 'sys_user',
            question: 'Approving manager',
            order: 500,
            mandatory: true,
        }),
    },
})
