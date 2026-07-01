import { Record } from '@servicenow/sdk/core'

// sc_category's link-to-catalog field is inferred as `sc_catalog` (standard ServiceNow
// convention) -- not directly confirmed in the docs reviewed this session. Verify against
// the instance dictionary once connected, and correct here if the field name differs.

export const platformCatalog = Record({
    $id: Now.ID['sn_platform_catalog'],
    table: 'sc_catalog',
    data: {
        title: 'ServiceNow Platform Services',
        description:
            'Requests to the ServiceNow platform team: configuration, integrations, access, reporting, notifications, process/SLA changes, and platform health.',
        active: true,
    },
})

export const devConfigCategory = Record({
    $id: Now.ID['sn_platform_cat_dev_config'],
    table: 'sc_category',
    data: {
        title: 'Development & Configuration',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const integrationsCategory = Record({
    $id: Now.ID['sn_platform_cat_integrations'],
    table: 'sc_category',
    data: {
        title: 'Integrations',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const accessGovernanceCategory = Record({
    $id: Now.ID['sn_platform_cat_access_governance'],
    table: 'sc_category',
    data: {
        title: 'Access & Governance',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const reportingAnalyticsCategory = Record({
    $id: Now.ID['sn_platform_cat_reporting_analytics'],
    table: 'sc_category',
    data: {
        title: 'Reporting & Analytics',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const notificationsCategory = Record({
    $id: Now.ID['sn_platform_cat_notifications'],
    table: 'sc_category',
    data: {
        title: 'Notifications & Communication',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const processSlaCategory = Record({
    $id: Now.ID['sn_platform_cat_process_sla'],
    table: 'sc_category',
    data: {
        title: 'Process & SLA',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const platformHealthCategory = Record({
    $id: Now.ID['sn_platform_cat_platform_health'],
    table: 'sc_category',
    data: {
        title: 'Platform Health',
        sc_catalog: platformCatalog,
        active: true,
    },
})

export const apiGovernanceCategory = Record({
    $id: Now.ID['sn_platform_cat_api_governance'],
    table: 'sc_category',
    data: {
        title: 'API Governance',
        sc_catalog: platformCatalog,
        active: true,
    },
})
