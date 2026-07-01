import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'd0fd92761dc442e9b350e58f3f949f9d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '2b5c0236b63c4c19bbb538a4a22ce729'
                    }
                    sn_platform_app_owners_group: {
                        table: 'sys_user_group'
                        id: 'af63559c8cb14091aeada4d64c4e6371'
                    }
                    sn_platform_approval_fulfillment_flow: {
                        table: 'sys_hub_flow'
                        id: '83d31159cac448c6a888b177563760d8'
                    }
                    sn_platform_approval_fulfillment_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a77dd931ef9040e181429b92caf73c49'
                    }
                    sn_platform_approval_fulfillment_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'ca700378f0564fdd908513e5b21f55b2'
                    }
                    sn_platform_cat_access_governance: {
                        table: 'sc_category'
                        id: '50fbe204283c403586d658095ad61f37'
                    }
                    sn_platform_cat_api_governance: {
                        table: 'sc_category'
                        id: '4c2c28430a2449df8c4fef31c6029fd0'
                    }
                    sn_platform_cat_dev_config: {
                        table: 'sc_category'
                        id: 'd908481f7b0740058fe03043d6e097d8'
                    }
                    sn_platform_cat_integrations: {
                        table: 'sc_category'
                        id: '4869e01ebafd4f26aaf504e15e032c43'
                    }
                    sn_platform_cat_notifications: {
                        table: 'sc_category'
                        id: 'd8d87ed74b034298aed7faf30585e767'
                    }
                    sn_platform_cat_platform_health: {
                        table: 'sc_category'
                        id: '1393fa29362247808961858773341b18'
                    }
                    sn_platform_cat_process_sla: {
                        table: 'sc_category'
                        id: '7a2858657eb14fe88d977f15c84ff141'
                    }
                    sn_platform_cat_reporting_analytics: {
                        table: 'sc_category'
                        id: 'a2c5f13fbb214c8cbcbfac02d1e451b2'
                    }
                    sn_platform_catalog: {
                        table: 'sc_catalog'
                        id: 'ec2949eb0bd14e0785abdc1170cb615d'
                    }
                    'sn_platform_ci_application-module-access-request': {
                        table: 'sc_cat_item'
                        id: 'f09ff3b78f5949609afe640d5bd07482'
                    }
                    'sn_platform_ci_bug-defect-report': {
                        table: 'sc_cat_item_producer'
                        id: '64a828110ef94023a0bb93bd3114c4d8'
                    }
                    'sn_platform_ci_data-import-transform-map-setup': {
                        table: 'sc_cat_item'
                        id: '3b687d0106aa4300b69f0c75250ef43d'
                    }
                    'sn_platform_ci_enhancement-request': {
                        table: 'sc_cat_item'
                        id: '82abfe9b332540ba8ef0a25ccd0c702a'
                    }
                    'sn_platform_ci_form-layout-view-change': {
                        table: 'sc_cat_item'
                        id: '6ed6743ae66f411d9abb596d041b9622'
                    }
                    'sn_platform_ci_modify-existing-catalog-item': {
                        table: 'sc_cat_item'
                        id: '8b74259ece774f65b14c2a7b82838b82'
                    }
                    'sn_platform_ci_new-assignment-rule': {
                        table: 'sc_cat_item'
                        id: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                    }
                    'sn_platform_ci_new-catalog-item-request': {
                        table: 'sc_cat_item'
                        id: '855e5f412a0b4c6d87b185efdce75f8f'
                    }
                    'sn_platform_ci_new-dashboard-pa-widget': {
                        table: 'sc_cat_item'
                        id: '814e8ee488294cc486748c1a3f370f56'
                    }
                    'sn_platform_ci_new-integration-request': {
                        table: 'sc_cat_item'
                        id: '2640c2bdbd614301a96375a410043a08'
                    }
                    'sn_platform_ci_new-notification-rule': {
                        table: 'sc_cat_item'
                        id: '71a6623ebee94bea9e24b90f66b4ca76'
                    }
                    'sn_platform_ci_new-report-request': {
                        table: 'sc_cat_item'
                        id: 'f94ed85350ff4d51a01d75592a4aecbf'
                    }
                    'sn_platform_ci_new-scheduled-job': {
                        table: 'sc_cat_item'
                        id: 'ca5a419baad44d1eb077fe66864f65ba'
                    }
                    'sn_platform_ci_new-sla-definition': {
                        table: 'sc_cat_item'
                        id: 'ab809e36b1724711a691e779bedb2f79'
                    }
                    'sn_platform_ci_new-table-or-field-addition': {
                        table: 'sc_cat_item'
                        id: 'be70bb61266b4fafa76bea15bfe70c29'
                    }
                    'sn_platform_ci_oauth-client-registration': {
                        table: 'sc_cat_item'
                        id: 'c080e0fa153a4b10937fa9e7a18bb885'
                    }
                    'sn_platform_ci_performance-slowness-investigation': {
                        table: 'sc_cat_item'
                        id: '4533a9b3792942c3b7144c8e704be6bf'
                    }
                    'sn_platform_ci_role-assignment-acl-exception-request': {
                        table: 'sc_cat_item'
                        id: 'd0839f28ef7540a48ff628b3be7115ae'
                    }
                    sn_platform_generic_fulfillment_flow: {
                        table: 'sys_hub_flow'
                        id: 'bc42cdd6886341e58a6a14a2147cfd87'
                    }
                    sn_platform_generic_fulfillment_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e058449f3db44ac5b3c1db4acbe01e4a'
                    }
                    sn_platform_generic_fulfillment_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'c9f2b63b6b384ca2adc78564d514d29b'
                    }
                    sn_platform_if_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '05efa54e1ad54235818435c51dced2a8'
                    }
                    sn_platform_manager_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: '24a76231a44a4eab8e491d5e0ec49d4f'
                    }
                    sn_platform_oauth_governance_flow: {
                        table: 'sys_hub_flow'
                        id: '85007226b2bc4e4ba87ad0fd7f424c82'
                    }
                    sn_platform_oauth_governance_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '1b24756368f24afc86b288fecea79c86'
                    }
                    sn_platform_oauth_owner_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f75f323a0cf841f785322e45fe9be517'
                    }
                    sn_platform_oauth_owner_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'de2bc1631c1f4143a8f02d5001255549'
                    }
                    sn_platform_oauth_platform_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7ef6dc2b2dea423ca5ea8c6e09c6367d'
                    }
                    sn_platform_oauth_platform_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'd788743a72d040e0b728e19b8684bc77'
                    }
                    sn_platform_oauth_policy_decommission_reason: {
                        table: 'catalog_ui_policy'
                        id: 'ba2dd521f82945dcb528050eaee221ee'
                    }
                    sn_platform_oauth_policy_existing_client: {
                        table: 'catalog_ui_policy'
                        id: '52fc59dba0ba4244a2890a1a4b446f43'
                    }
                    sn_platform_oauth_policy_registration_fields: {
                        table: 'catalog_ui_policy'
                        id: '5f1ff0471ffc4bfaba2da172380f19c1'
                    }
                    sn_platform_oauth_provision_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0d2416321e5e41f7983da264f82bd1e6'
                    }
                    sn_platform_team_group: {
                        table: 'sys_user_group'
                        id: '9e369244b7ae453b848c8e66ff7c3eba'
                    }
                    sn_platform_uc_active_employees: {
                        table: 'user_criteria'
                        id: '0af5e38b32234774bab7ac7e451a8211'
                    }
                    sn_platform_uc_platform_team: {
                        table: 'user_criteria'
                        id: '98382e4b55de4f8aa06b5bf865ca3215'
                    }
                }
                composite: [
                    {
                        table: 'item_option_new'
                        id: '00558e5e429e4d4c8e015c8277abc0da'
                        key: {
                            cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            variable_set: 'NULL'
                            name: 'data_source_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '0269fd2e0c1d426c8e153926b7cbe5c6'
                        key: {
                            question: {
                                id: '9d04675ea68a4cc0a596560e2591344e'
                                key: {
                                    cat_item: '6ed6743ae66f411d9abb596d041b9622'
                                    variable_set: 'NULL'
                                    name: 'view'
                                }
                            }
                            value: 'default'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '030cb23b4d9e4e8faf4e7d5d4496f3b9'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'xml'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '04cad6964d2d419b9d5c5f074c39039a'
                        key: {
                            question: {
                                id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'field_type'
                                }
                            }
                            value: 'boolean'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '04d7fe9ca29e4a9ba3e08663ae41a4e0'
                        deleted: true
                        key: {
                            question: {
                                id: 'c789f395879d482095dcf190bfd5801c'
                                key: {
                                    cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p2'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '054581c957814abab73b421f03808eb0'
                        key: {
                            sc_cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '074e974628504685a64bfcef114cc411'
                        key: {
                            question: {
                                id: '784e6f50cef04ae1bb74578bf5c2f38e'
                                key: {
                                    cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                                    variable_set: 'NULL'
                                    name: 'job_type'
                                }
                            }
                            value: 'record_from_template'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '07c3bc95f6124029a437b4d8edac554f'
                        key: {
                            question: {
                                id: '09cc35663a024c8db8b43fc278558b0b'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'register_service'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '09cc35663a024c8db8b43fc278558b0b'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'request_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0a8d8581b6c246c99c9dd5018c699541'
                        deleted: true
                        key: {
                            cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            variable_set: 'NULL'
                            name: 'affected_product'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0d74fa697d9b4f038dfc48536fa3903d'
                        key: {
                            cat_item: '814e8ee488294cc486748c1a3f370f56'
                            variable_set: 'NULL'
                            name: 'data_source_table'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '0e250420d8ec4c0da678e76683589c4e'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:6d99ca884d0848c39e2f7315c045753a'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '0ee3d38993bf4772990211167f9eda5b'
                        key: {
                            sc_cat_item: '2640c2bdbd614301a96375a410043a08'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0f1e23f167fe4156a97122ed4c1807e0'
                        key: {
                            cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            variable_set: 'NULL'
                            name: 'target_table'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0f40f38f7674432eb8ef3c43ceeddca1'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'vendor'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '10137f2b8a3443ea980e8d3e2e23e8be'
                        key: {
                            question: {
                                id: '9bd8547bf585436380b3a9f9025102bc'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'sharing'
                                }
                            }
                            value: 'group'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '104937d1add5454d8c578051cf072727'
                        key: {
                            question: {
                                id: '37619bab2cf942a985a0a1bdd17b05cc'
                                key: {
                                    cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                                    variable_set: 'NULL'
                                    name: 'trigger_type'
                                }
                            }
                            value: 'record_change'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1115cbc312aa4577804fcc9ebde1d04b'
                        key: {
                            question: {
                                id: '8f0ac84e36e54c939efcd26ee73a6107'
                                key: {
                                    cat_item: '2640c2bdbd614301a96375a410043a08'
                                    variable_set: 'NULL'
                                    name: 'integration_type'
                                }
                            }
                            value: 'inbound_webhook'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '11aa903743994d8495b5b99e73c9e5d6'
                        key: {
                            cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            variable_set: 'NULL'
                            name: 'approving_manager'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '12b16193d24e4006944ae6feb945c193'
                        key: {
                            question: {
                                id: 'ab86442da532417aadfec76941340afd'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'authentication_type'
                                }
                            }
                            value: 'service_oauth'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '12c673980db54295a29d2bbd2fb0413d'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'mockups'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '132c1a38e80940d19af6f4794446c0b9'
                        deleted: true
                        key: {
                            sc_cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '18c4b54f7bd7484cb2d8dc7553699984'
                        key: {
                            question: {
                                id: '380f5b589cd44adb95f7046843299148'
                                key: {
                                    cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                                    variable_set: 'NULL'
                                    name: 'business_value'
                                }
                            }
                            value: 'high'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1991ab1c12e34d7cb88e42fb49c1985f'
                        key: {
                            cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            variable_set: 'NULL'
                            name: 'start_stop_pause_conditions'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1b1926e4612a45daaffdb385e6f9cc57'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'item_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1b7c0a83903740fea3910556a84cf73d'
                        key: {
                            cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            variable_set: 'NULL'
                            name: 'metrics_grouping'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1c329ab3dce44fbbbf99e063d7ed99c0'
                        key: {
                            cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            variable_set: 'NULL'
                            name: 'affected_area'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1c9fa406b7bd4a98acff3e187d2f2771'
                        key: {
                            cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            variable_set: 'NULL'
                            name: 'requesting_department'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '21205b1e01bf4729b0005b4cc6cf053a'
                        key: {
                            cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            variable_set: 'NULL'
                            name: 'source_table'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '245a0f5ce170470290d3d9bb7c0c40b5'
                        key: {
                            sc_cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '250b6a72f28043b1b4ed27eebfa2fa6b'
                        key: {
                            question: {
                                id: '5faa248e1d194f03b9841e231ae29e85'
                                key: {
                                    cat_item: '8b74259ece774f65b14c2a7b82838b82'
                                    variable_set: 'NULL'
                                    name: 'change_type'
                                }
                            }
                            value: 'change_fulfillment'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2735fbde5b034b65acd7670363eeae88'
                        key: {
                            question: {
                                id: '5faa248e1d194f03b9841e231ae29e85'
                                key: {
                                    cat_item: '8b74259ece774f65b14c2a7b82838b82'
                                    variable_set: 'NULL'
                                    name: 'change_type'
                                }
                            }
                            value: 'add_variable'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '29b2e20f362b41d185a5a501016e1ad6'
                        key: {
                            cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            variable_set: 'NULL'
                            name: 'role_requested'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '2b4749fe9e904f4eb28b8c6861e1095f'
                        key: {
                            sc_cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            sc_category: 'd908481f7b0740058fe03043d6e097d8'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2b575f842f004af4b248021fa1811648'
                        key: {
                            question: {
                                id: '718551f5358d42b2973702525437b0c4'
                                key: {
                                    cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p4'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '2bcc1a0d83704927a5aac74120037ae3'
                        key: {
                            sc_cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '304f47d8f2e84ffc898aa5d7104325d3'
                        key: {
                            question: {
                                id: '09cc35663a024c8db8b43fc278558b0b'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'register_user'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '31384d91973f4b7ca430fdb6914fe0c5'
                        key: {
                            question: {
                                id: '9d04675ea68a4cc0a596560e2591344e'
                                key: {
                                    cat_item: '6ed6743ae66f411d9abb596d041b9622'
                                    variable_set: 'NULL'
                                    name: 'view'
                                }
                            }
                            value: 'mobile'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3172f960f3104390ab4fa66eacc2a57c'
                        key: {
                            cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            variable_set: 'NULL'
                            name: 'mockup'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '32211dc2276442128bd8aa392b8bde35'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'list'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '333bf39f7255449baf3d87ac34460c28'
                        key: {
                            sc_cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3636bdd1fb0a4072960aa68414dadc2d'
                        key: {
                            cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            variable_set: 'NULL'
                            name: 'addition_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '36a3fff7ba9445e19e3f9558c44d7861'
                        key: {
                            question: {
                                id: '9294c80a89354ce28e3f26405be66cf2'
                                key: {
                                    cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: 'high'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '36b7b3d90f9540559653e7ce2d53b2dd'
                        key: {
                            sc_cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '36c6881b9b68428ebe5b5a84df192566'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'decommission_reason'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '36d0335ac3be472287f100cd2f20a194'
                        key: {
                            cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            variable_set: 'NULL'
                            name: 'is_recurring'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '37619bab2cf942a985a0a1bdd17b05cc'
                        key: {
                            cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            variable_set: 'NULL'
                            name: 'trigger_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3774f8e69d7f4e71a52114461c041a2d'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'json'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '380f5b589cd44adb95f7046843299148'
                        key: {
                            cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            variable_set: 'NULL'
                            name: 'business_value'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '389f0def3efb4840aa0fbeb62eee5687'
                        key: {
                            sc_cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '39434f16218048fd9885455aa9ca2158'
                        key: {
                            question: {
                                id: '3d2a8b15b696465a89cb1edb495a1a73'
                                key: {
                                    cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                                    variable_set: 'NULL'
                                    name: 'duration'
                                }
                            }
                            value: 'time_limited'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '3a5c2ad74c914637888a415ed474f9ed'
                        key: {
                            sc_cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3c58b1409ea147ea8b0800e5285b7434'
                        key: {
                            question: {
                                id: '37619bab2cf942a985a0a1bdd17b05cc'
                                key: {
                                    cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                                    variable_set: 'NULL'
                                    name: 'trigger_type'
                                }
                            }
                            value: 'event'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3d2a8b15b696465a89cb1edb495a1a73'
                        key: {
                            cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            variable_set: 'NULL'
                            name: 'duration'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '3d43e7e77390426d85fddd79f485f2f3'
                        key: {
                            sc_cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3de32e6c0d464523a684d28c130aba9e'
                        key: {
                            question: {
                                id: '380f5b589cd44adb95f7046843299148'
                                key: {
                                    cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                                    variable_set: 'NULL'
                                    name: 'business_value'
                                }
                            }
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '3e226465687642bdab0e4a3042449d05'
                        key: {
                            sc_cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3e36b0943a6447fc86c9e175884984af'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'existing_oauth_client'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3f3f7b76846d412d8caf441c6dcfa589'
                        key: {
                            cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            variable_set: 'NULL'
                            name: 'is_urgent'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3f4f118c11fb482594a11e439c53d929'
                        key: {
                            cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            variable_set: 'NULL'
                            name: 'existing_feature'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '414edbdd853b446ea8515fa79e78ded4'
                        key: {
                            cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            variable_set: 'NULL'
                            name: 'short_description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '425a8810f28548a590613e8485abd046'
                        key: {
                            cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            variable_set: 'NULL'
                            name: 'message_content'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '46b1f812bce34964a2629dbf65c67fce'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'csv'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4735881b23494ddd81002d88bb2a2ef1'
                        key: {
                            question: {
                                id: '8c620016d8d942d189488e4b00cffea9'
                                key: {
                                    cat_item: 'ab809e36b1724711a691e779bedb2f79'
                                    variable_set: 'NULL'
                                    name: 'applies_to_priority'
                                }
                            }
                            value: 'priority_3'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '49858d18744a43299692d923cd28471f'
                        key: {
                            question: {
                                id: 'd9793c24a543490ca840ee5f1e541017'
                                key: {
                                    cat_item: '814e8ee488294cc486748c1a3f370f56'
                                    variable_set: 'NULL'
                                    name: 'indicator_type'
                                }
                            }
                            value: 'manual'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4d9b8357189347fe884717ef07d58388'
                        key: {
                            cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            variable_set: 'NULL'
                            name: 'job_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4e8131f231b14b35a659121b0be409e0'
                        key: {
                            cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            variable_set: 'NULL'
                            name: 'requested_improvement'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4eec15dd0add40b381ce9195459d87bb'
                        key: {
                            question: {
                                id: '9e02135ab7f645778fc33d081218b0e3'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'test'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5044e37d6c57420880331135d8b28857'
                        key: {
                            question: {
                                id: '09cc35663a024c8db8b43fc278558b0b'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'regenerate_secret'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '50b734719ab7470680f820f02cd8d4e8'
                        key: {
                            cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            variable_set: 'NULL'
                            name: 'proposed_name'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '50fb372239464feb9623dc6e93886463'
                        key: {
                            question: {
                                id: '8f0ac84e36e54c939efcd26ee73a6107'
                                key: {
                                    cat_item: '2640c2bdbd614301a96375a410043a08'
                                    variable_set: 'NULL'
                                    name: 'integration_type'
                                }
                            }
                            value: 'integration_hub_spoke'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5201a372ef6b4454a954be5af26257e3'
                        key: {
                            question: {
                                id: '64e5435b51c040a3bc9130fc0db53619'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'impact_urgency'
                                }
                            }
                            value: 'high'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '521bab07ba344e909a6e35f1f14d6927'
                        key: {
                            sc_cat_item: '2640c2bdbd614301a96375a410043a08'
                            sc_category: '4869e01ebafd4f26aaf504e15e032c43'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '54e07c4ae16e49ca937948840aa6d35b'
                        deleted: true
                        key: {
                            sc_cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '56bbbff2477445c487a1a207f95626e1'
                        key: {
                            sc_cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '56cc2481d3f24c7d83ebc22c09fb0188'
                        key: {
                            question: {
                                id: 'ab86442da532417aadfec76941340afd'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'authentication_type'
                                }
                            }
                            value: 'user_oauth'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '582fe54ac0d248a3895541b375f17976'
                        key: {
                            question: {
                                id: '784e6f50cef04ae1bb74578bf5c2f38e'
                                key: {
                                    cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                                    variable_set: 'NULL'
                                    name: 'job_type'
                                }
                            }
                            value: 'report_generation'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5be7482ae28946f19139f25aee5be9e0'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'business_owner'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5cba655590b24928871b4a16e1c94cd3'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'line'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '5d970b3e47a44373ab5be22272e4d33c'
                        key: {
                            sc_cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            sc_category: 'a2c5f13fbb214c8cbcbfac02d1e451b2'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '5e658e79d95446cb98e224d6fbdf8cc0'
                        key: {
                            sc_cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5f9a2c0b1b0245d489f44f0b25fce9f1'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'item_description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5faa248e1d194f03b9841e231ae29e85'
                        key: {
                            cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            variable_set: 'NULL'
                            name: 'change_type'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '608b9d22a91a4230964925b2d8c5c891'
                        key: {
                            sc_cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            sc_category: 'd908481f7b0740058fe03043d6e097d8'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '60940797b3d447ac916af46860e5eecb'
                        key: {
                            cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            variable_set: 'NULL'
                            name: 'justification'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '60a22ab8d07c4be28bc2ab3f13b7869c'
                        key: {
                            question: {
                                id: '9e02135ab7f645778fc33d081218b0e3'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'dev'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '60cee700f1b94d6aa5d72ed0f0f4fe72'
                        key: {
                            cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            variable_set: 'NULL'
                            name: 'reported_against'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '61ec63f9edbd444d8a97de4c06cb393f'
                        key: {
                            ui_policy: '52fc59dba0ba4244a2890a1a4b446f43'
                            catalog_variable: 'IO:3e36b0943a6447fc86c9e175884984af'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6348f66292d14ca89d3345b66c7fc8ba'
                        key: {
                            question: {
                                id: '8c620016d8d942d189488e4b00cffea9'
                                key: {
                                    cat_item: 'ab809e36b1724711a691e779bedb2f79'
                                    variable_set: 'NULL'
                                    name: 'applies_to_priority'
                                }
                            }
                            value: 'priority_1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '64e5435b51c040a3bc9130fc0db53619'
                        key: {
                            cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            variable_set: 'NULL'
                            name: 'impact_urgency'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '66f88573bc5b41b3b59dd91bec874f03'
                        key: {
                            question: {
                                id: '64e5435b51c040a3bc9130fc0db53619'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'impact_urgency'
                                }
                            }
                            value: 'critical'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6a3f84d231844b92b7131e5999f39d6c'
                        key: {
                            question: {
                                id: '8f0ac84e36e54c939efcd26ee73a6107'
                                key: {
                                    cat_item: '2640c2bdbd614301a96375a410043a08'
                                    variable_set: 'NULL'
                                    name: 'integration_type'
                                }
                            }
                            value: 'soap'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6adf8cccbe9f4460959397a08e044d62'
                        key: {
                            cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            variable_set: 'NULL'
                            name: 'sample_file'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6d99ca884d0848c39e2f7315c045753a'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'expected_transaction_volume'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6eac44363e1f46a09d103f9d8e30e460'
                        key: {
                            question: {
                                id: 'bbb84a5c6eb94403a481e869ade3ad7a'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'environments'
                                }
                            }
                            value: 'test'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6f44f40b97bb4789900a663a3ac55dc3'
                        key: {
                            cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            variable_set: 'NULL'
                            name: 'recipient_criteria'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '6ffbee13bc604315bcb1596014b9951b'
                        key: {
                            sc_cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            sc_category: '1393fa29362247808961858773341b18'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '704c2e8f860147fb9271a943228b2ce8'
                        key: {
                            question: {
                                id: 'd9793c24a543490ca840ee5f1e541017'
                                key: {
                                    cat_item: '814e8ee488294cc486748c1a3f370f56'
                                    variable_set: 'NULL'
                                    name: 'indicator_type'
                                }
                            }
                            value: 'automated'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '70dda184ab04437288df53c376b4bf4a'
                        key: {
                            sc_cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '718551f5358d42b2973702525437b0c4'
                        key: {
                            cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            variable_set: 'NULL'
                            name: 'priority'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '71f20f2aa4c4451ea0fa5c6b2e1e3885'
                        key: {
                            cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            variable_set: 'NULL'
                            name: 'rule_order'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '729e50c48d8a41218b7ebe8b143d9e7f'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:ab86442da532417aadfec76941340afd'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '72bd288ed50441a59d701fd64caa59f9'
                        key: {
                            cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            variable_set: 'NULL'
                            name: 'logic_description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7374177d07644354aa8315f74435be74'
                        key: {
                            cat_item: '814e8ee488294cc486748c1a3f370f56'
                            variable_set: 'NULL'
                            name: 'dashboard_widget_name'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '7391eb50930643d98431ae52dd2bc945'
                        key: {
                            sc_cat_item: '814e8ee488294cc486748c1a3f370f56'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '73ae3185edf94b9f93376aef782681b8'
                        deleted: true
                        key: {
                            sc_cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            sc_category: '1393fa29362247808961858773341b18'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '75b8165d35bd464697cc72843081cf92'
                        key: {
                            ui_policy: 'ba2dd521f82945dcb528050eaee221ee'
                            catalog_variable: 'IO:36c6881b9b68428ebe5b5a84df192566'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '77533aa0af164ce49e7d61188762187a'
                        key: {
                            sc_cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '784e6f50cef04ae1bb74578bf5c2f38e'
                        key: {
                            cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            variable_set: 'NULL'
                            name: 'job_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '787c844dc9694a059a1ee74709c8c794'
                        key: {
                            question: {
                                id: '784e6f50cef04ae1bb74578bf5c2f38e'
                                key: {
                                    cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                                    variable_set: 'NULL'
                                    name: 'job_type'
                                }
                            }
                            value: 'custom_script'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '794b20132a7244f7b7dfe4249c82ccf1'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'form_fields_needed'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7979ae1cdac34eacbf75934707d007cb'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'ldap'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7bd3a0e482164e428988350e2d024adc'
                        key: {
                            question: {
                                id: '5faa248e1d194f03b9841e231ae29e85'
                                key: {
                                    cat_item: '8b74259ece774f65b14c2a7b82838b82'
                                    variable_set: 'NULL'
                                    name: 'change_type'
                                }
                            }
                            value: 'change_visibility'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7c59b2bb354349989862eaf07080de5c'
                        deleted: true
                        key: {
                            question: {
                                id: 'c789f395879d482095dcf190bfd5801c'
                                key: {
                                    cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p1'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '7d902f256ba84ef493cdf147cc90c4ae'
                        key: {
                            sc_cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            sc_category: '4869e01ebafd4f26aaf504e15e032c43'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '7d97d237d7e043599031375200041ecf'
                        key: {
                            sc_cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            sc_category: '7a2858657eb14fe88d977f15c84ff141'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '7ecfa921763e4819a8c855184b4fe740'
                        key: {
                            sc_cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7ff06b3f48074aba8f082843a6c8f6df'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'jdbc'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '806bd1d9f9a043d5857f692f72b1a580'
                        key: {
                            sc_cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '80d7389f1f214efabdb7133baddaf813'
                        key: {
                            cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            variable_set: 'NULL'
                            name: 'affected_product'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '81e777f1b7734c99ab4b908355f556ae'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'application_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '84cb1c7943d240709f9107c4aa8ec728'
                        key: {
                            cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            variable_set: 'NULL'
                            name: 'target_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '84ce5ea2c81240ca94938045875bf757'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'custom'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '85510cbd28934968a369cba63311f327'
                        key: {
                            cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            variable_set: 'NULL'
                            name: 'report_type'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '8798dcd96ea940ef891bafb97e045a15'
                        key: {
                            sc_cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '87c78978437f4b508177b6c9b64fbbe4'
                        key: {
                            sc_cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            sc_category: '1393fa29362247808961858773341b18'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '881a5b6e55684d3c860517d581d9e553'
                        key: {
                            cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            variable_set: 'NULL'
                            name: 'requested_schedule'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '8afd3ccb955247b987ca6bfebdeba4ba'
                        key: {
                            sc_cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8b28f8eb230b468cb9015a3d5c58ed2d'
                        key: {
                            cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8c620016d8d942d189488e4b00cffea9'
                        key: {
                            cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            variable_set: 'NULL'
                            name: 'applies_to_priority'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '8d61a166713d4936b937b4c1af56edab'
                        key: {
                            sc_cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8f0ac84e36e54c939efcd26ee73a6107'
                        key: {
                            cat_item: '2640c2bdbd614301a96375a410043a08'
                            variable_set: 'NULL'
                            name: 'integration_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                        key: {
                            cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            variable_set: 'NULL'
                            name: 'field_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '917bebc8bd64437cb98d08999ee791e1'
                        key: {
                            cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            variable_set: 'NULL'
                            name: 'requested_for'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '91a5135fbd084391a4da43d673e2d8db'
                        key: {
                            question: {
                                id: '3636bdd1fb0a4072960aa68414dadc2d'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'addition_type'
                                }
                            }
                            value: 'new_field'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '91cf0f18029d4a39af3e915da1f9e141'
                        key: {
                            cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            variable_set: 'NULL'
                            name: 'requested_changes'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9294c80a89354ce28e3f26405be66cf2'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'urgency'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: '94afe6bae9bd47ae9e5ac3fad04a8f90'
                        key: {
                            sc_cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '94be59f905504948acb54978e4d5b860'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:b4d767aafe434ecf909d47cbda3aba07'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '950f23701a294299857e6303823227ba'
                        key: {
                            question: {
                                id: '8c620016d8d942d189488e4b00cffea9'
                                key: {
                                    cat_item: 'ab809e36b1724711a691e779bedb2f79'
                                    variable_set: 'NULL'
                                    name: 'applies_to_priority'
                                }
                            }
                            value: 'priority_5'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '95cafcad655b4d8fb982b269b2fb85cb'
                        key: {
                            cat_item: '2640c2bdbd614301a96375a410043a08'
                            variable_set: 'NULL'
                            name: 'data_flow_description'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '985c9143b43e42f1838277090ce23081'
                        key: {
                            question: {
                                id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'field_type'
                                }
                            }
                            value: 'string'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9885f3eaea8446288515b68e56933a0c'
                        key: {
                            cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            variable_set: 'NULL'
                            name: 'change_description'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '995f097d42584e1e955f9a34434546b6'
                        key: {
                            question: {
                                id: '9bd8547bf585436380b3a9f9025102bc'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'sharing'
                                }
                            }
                            value: 'personal'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '996d5ca724d940659e24fb77ae67e65e'
                        key: {
                            sc_cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9b55d4c6513d477fb2434bee70a7e6b9'
                        key: {
                            question: {
                                id: '8c620016d8d942d189488e4b00cffea9'
                                key: {
                                    cat_item: 'ab809e36b1724711a691e779bedb2f79'
                                    variable_set: 'NULL'
                                    name: 'applies_to_priority'
                                }
                            }
                            value: 'priority_2'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9bd8547bf585436380b3a9f9025102bc'
                        key: {
                            cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            variable_set: 'NULL'
                            name: 'sharing'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9c02ac5ccf664dad9677da74450f2d5e'
                        key: {
                            question: {
                                id: '9294c80a89354ce28e3f26405be66cf2'
                                key: {
                                    cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: 'low'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9d04675ea68a4cc0a596560e2591344e'
                        key: {
                            cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            variable_set: 'NULL'
                            name: 'view'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9da5b5fdc3dd4ec98e9b92869323d93d'
                        key: {
                            question: {
                                id: 'd9793c24a543490ca840ee5f1e541017'
                                key: {
                                    cat_item: '814e8ee488294cc486748c1a3f370f56'
                                    variable_set: 'NULL'
                                    name: 'indicator_type'
                                }
                            }
                            value: 'formula'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9e02135ab7f645778fc33d081218b0e3'
                        key: {
                            cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            variable_set: 'NULL'
                            name: 'environment'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9ea2a4a1f7014b9fa7b8d4d932490eb3'
                        key: {
                            cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            variable_set: 'NULL'
                            name: 'target_task_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9ee1833ce82046b888ee5289185abb5c'
                        key: {
                            question: {
                                id: '3d2a8b15b696465a89cb1edb495a1a73'
                                key: {
                                    cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                                    variable_set: 'NULL'
                                    name: 'duration'
                                }
                            }
                            value: 'permanent'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9f769f9428f8498a8cc5bd3402d00225'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'bar'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'a15e4a184b2547edab411daa9a19f1ae'
                        key: {
                            sc_cat_item: '2640c2bdbd614301a96375a410043a08'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a217292734c645e1888dc2ec38bbb4b9'
                        key: {
                            cat_item: '2640c2bdbd614301a96375a410043a08'
                            variable_set: 'NULL'
                            name: 'business_owner'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a55497c6778d4d68b6e43b99c4ea53e3'
                        key: {
                            question: {
                                id: '9e02135ab7f645778fc33d081218b0e3'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'prod'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a71de35cc60b4d08a44b7c75dceed246'
                        key: {
                            question: {
                                id: '5faa248e1d194f03b9841e231ae29e85'
                                key: {
                                    cat_item: '8b74259ece774f65b14c2a7b82838b82'
                                    variable_set: 'NULL'
                                    name: 'change_type'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a7a9128e4b504091afa1bab04276008b'
                        key: {
                            question: {
                                id: '8f0ac84e36e54c939efcd26ee73a6107'
                                key: {
                                    cat_item: '2640c2bdbd614301a96375a410043a08'
                                    variable_set: 'NULL'
                                    name: 'integration_type'
                                }
                            }
                            value: 'outbound_rest'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'aa3c5d5536ba43418d43d5eae154dc5f'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'required_roles'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'aab4a94629a943e9a09e64223568ed7c'
                        key: {
                            sc_cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            sc_category: 'd908481f7b0740058fe03043d6e097d8'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ab7127b4b5624ff49323f990a72aa80f'
                        key: {
                            question: {
                                id: 'bbb84a5c6eb94403a481e869ade3ad7a'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'environments'
                                }
                            }
                            value: 'prod'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ab86442da532417aadfec76941340afd'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'authentication_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ae220053e5da48c582ac02e73fbaeb28'
                        key: {
                            question: {
                                id: '64e5435b51c040a3bc9130fc0db53619'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'impact_urgency'
                                }
                            }
                            value: 'low'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'ae459356f6874c9ab88cb6541ae62c6c'
                        key: {
                            sc_cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            sc_category: 'd8d87ed74b034298aed7faf30585e767'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'b22467749a8e4156806cd608cc87375c'
                        key: {
                            sc_cat_item: '814e8ee488294cc486748c1a3f370f56'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b2565655b25c4cb5ac6dd51251aa57ce'
                        key: {
                            question: {
                                id: '64e5435b51c040a3bc9130fc0db53619'
                                key: {
                                    cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                                    variable_set: 'NULL'
                                    name: 'impact_urgency'
                                }
                            }
                            value: 'medium'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b4d767aafe434ecf909d47cbda3aba07'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'apis_required'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b6c8d21772c54516a3fdd3d09c453c03'
                        deleted: true
                        key: {
                            cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            variable_set: 'NULL'
                            name: 'short_description'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'b6cdd77afba74bf68a9fa82e38db4027'
                        key: {
                            sc_cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            sc_category: '7a2858657eb14fe88d977f15c84ff141'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b78365c7809a42d78b635d95c432a9e3'
                        key: {
                            question: {
                                id: '718551f5358d42b2973702525437b0c4'
                                key: {
                                    cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p2'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b85dcaf2960d48a0936fd12e3b942f39'
                        key: {
                            cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            variable_set: 'NULL'
                            name: 'justification'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b94652b37d9d410cbb5f76732f3d81d8'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'requesting_group'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bbb84a5c6eb94403a481e869ade3ad7a'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'environments'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'bf40c5ad4c0d4234aab9b315125c8248'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:f3422820ce164a33b00868aa0f408521'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bfc15e22f841423f9177e521008853b0'
                        key: {
                            cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            variable_set: 'NULL'
                            name: 'field_mapping_notes'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c060c35bd9214d708c012afb57e2dd81'
                        key: {
                            cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            variable_set: 'NULL'
                            name: 'affected_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'c179205922c145d2a99fcde17b865cd7'
                        key: {
                            question: {
                                id: '9294c80a89354ce28e3f26405be66cf2'
                                key: {
                                    cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                                    variable_set: 'NULL'
                                    name: 'urgency'
                                }
                            }
                            value: 'medium'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c3e5753fd024437a8cbdbf9e29cf3cdf'
                        key: {
                            cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            variable_set: 'NULL'
                            name: 'requested_for'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'c4cdc4e925574a7190aee68bbf67d6fc'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:aa3c5d5536ba43418d43d5eae154dc5f'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c54230f340d3406ab4f9fb1b733cddb6'
                        key: {
                            cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                            variable_set: 'NULL'
                            name: 'target_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'c72b3d677a5843a492ce8c4ec37a503f'
                        key: {
                            question: {
                                id: '37619bab2cf942a985a0a1bdd17b05cc'
                                key: {
                                    cat_item: '71a6623ebee94bea9e24b90f66b4ca76'
                                    variable_set: 'NULL'
                                    name: 'trigger_type'
                                }
                            }
                            value: 'flow_step'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c789f395879d482095dcf190bfd5801c'
                        deleted: true
                        key: {
                            cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            variable_set: 'NULL'
                            name: 'priority'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c851619fcf0e41099c3252eedd1c99a9'
                        deleted: true
                        key: {
                            cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'c9e6a2c888d64988bbfb1964cd1ff73c'
                        key: {
                            sc_cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ca7d3fdd9f664c0097cfc7484fc96e79'
                        key: {
                            cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            variable_set: 'NULL'
                            name: 'requires_approval'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'ca8f354827214b488be31a192f5285f7'
                        key: {
                            sc_cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'cab2dfc8da0845baaf463e5ce69ae404'
                        key: {
                            cat_item: 'ab809e36b1724711a691e779bedb2f79'
                            variable_set: 'NULL'
                            name: 'target_duration'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'cd4249a848254408813c7bcb1bf95864'
                        key: {
                            question: {
                                id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'field_type'
                                }
                            }
                            value: 'reference'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'cde38276feb04f10b2fc73f9635940b3'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'technical_owner'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ce7ca37c7d3b470c8be5b4ef680e92ad'
                        key: {
                            question: {
                                id: 'bbb84a5c6eb94403a481e869ade3ad7a'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'environments'
                                }
                            }
                            value: 'dev'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd039ea83004f4486aa1a09dd8f2c6385'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'trend'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'd193a3929ce54e3b86612631fa10aae1'
                        key: {
                            sc_cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd1940f75d42f4fa0ac148e7100bc0b6b'
                        key: {
                            cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                            variable_set: 'NULL'
                            name: 'justification'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd27f0a4e61c744e1b2775b79fdfa8b80'
                        key: {
                            question: {
                                id: '380f5b589cd44adb95f7046843299148'
                                key: {
                                    cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                                    variable_set: 'NULL'
                                    name: 'business_value'
                                }
                            }
                            value: 'low'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'd373da6e9b9b46e3ada56c70b28473fd'
                        key: {
                            sc_cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'd4633807ec02464292aadacce2344652'
                        key: {
                            sc_cat_item: 'ca5a419baad44d1eb077fe66864f65ba'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd49514cca94e483abc9209ee23acbbd7'
                        key: {
                            question: {
                                id: '09cc35663a024c8db8b43fc278558b0b'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'modify'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'd512007d2fa44738a20c2afcdf6032df'
                        key: {
                            sc_cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd722351bad8646fba46cff1cd9c0d45f'
                        key: {
                            cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            variable_set: 'NULL'
                            name: 'condition'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd7f908e2054b46ab84da82ed46ea6b63'
                        key: {
                            cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            variable_set: 'NULL'
                            name: 'target_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd809d4cce2f74da89b2c7e6d50b1966d'
                        key: {
                            question: {
                                id: '9bd8547bf585436380b3a9f9025102bc'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'sharing'
                                }
                            }
                            value: 'global'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd8c839dbcace4d23807adcda6c6dfae9'
                        key: {
                            question: {
                                id: '3636bdd1fb0a4072960aa68414dadc2d'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'addition_type'
                                }
                            }
                            value: 'new_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd937410633044ee2a2e18fda02cf0817'
                        key: {
                            question: {
                                id: '718551f5358d42b2973702525437b0c4'
                                key: {
                                    cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p1'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd978d56adfe54193b7f8872bc2484c00'
                        key: {
                            question: {
                                id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'field_type'
                                }
                            }
                            value: 'integer'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd9793c24a543490ca840ee5f1e541017'
                        key: {
                            cat_item: '814e8ee488294cc486748c1a3f370f56'
                            variable_set: 'NULL'
                            name: 'indicator_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'da469130e8684a4d989ff3410131d822'
                        key: {
                            question: {
                                id: '718551f5358d42b2973702525437b0c4'
                                key: {
                                    cat_item: '64a828110ef94023a0bb93bd3114c4d8'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p3'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'da672356788e4071955eba7ad33549b2'
                        key: {
                            sc_cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'da7ba379b33442f2ae4737b3a63c4841'
                        deleted: true
                        key: {
                            question: {
                                id: 'c789f395879d482095dcf190bfd5801c'
                                key: {
                                    cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p3'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dacdc7d07e244c7d925d2a0fa45043a0'
                        key: {
                            cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            variable_set: 'NULL'
                            name: 'target_table'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'dd70ebf15fd14599abfe5f372cd05505'
                        key: {
                            sc_cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            sc_category: '50fbe204283c403586d658095ad61f37'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dfee6a8b34c243b3b85f7c23ea1e3d42'
                        key: {
                            cat_item: '2640c2bdbd614301a96375a410043a08'
                            variable_set: 'NULL'
                            name: 'system_name'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e11c2489dde749b3acb896381d8cf271'
                        key: {
                            question: {
                                id: '9119c5d85b254e0fa475ba8a26bfb5f4'
                                key: {
                                    cat_item: 'be70bb61266b4fafa76bea15bfe70c29'
                                    variable_set: 'NULL'
                                    name: 'field_type'
                                }
                            }
                            value: 'date_time'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'e128c2e473494575b604f8ffea3c557c'
                        key: {
                            sc_cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            sc_category: 'd908481f7b0740058fe03043d6e097d8'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'e47cb92b8b00476f8890c4e7f9712f0d'
                        key: {
                            sc_cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e5e7a3f2467748b6b17f0a13bf4f0574'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'pie'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e7a390c07efd479baf6dbb5f3b366da2'
                        deleted: true
                        key: {
                            question: {
                                id: 'c789f395879d482095dcf190bfd5801c'
                                key: {
                                    cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: 'p4'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'e83167640e22441fb9cf86170fc0b6ca'
                        key: {
                            sc_cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                            sc_category: '4869e01ebafd4f26aaf504e15e032c43'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'ea0fa5312f6c4fd3abdc6f4cd1d5c941'
                        key: {
                            sc_cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'ea77c4821bc643fdbef8d0b8c34f0f10'
                        key: {
                            sc_cat_item: '6ed6743ae66f411d9abb596d041b9622'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'eab5f207d8d845a0b8a61367adfba6f5'
                        key: {
                            question: {
                                id: '9d04675ea68a4cc0a596560e2591344e'
                                key: {
                                    cat_item: '6ed6743ae66f411d9abb596d041b9622'
                                    variable_set: 'NULL'
                                    name: 'view'
                                }
                            }
                            value: 'service_portal'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'eb34dc140b99450393e382aa5d7afa4d'
                        key: {
                            cat_item: '814e8ee488294cc486748c1a3f370f56'
                            variable_set: 'NULL'
                            name: 'kpi_definition'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'ecc3d86782474f4392148c6cbac65cab'
                        key: {
                            sc_cat_item: 'd0839f28ef7540a48ff628b3be7115ae'
                            sc_category: '50fbe204283c403586d658095ad61f37'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'ed8945737f1f415689e0090e94952530'
                        key: {
                            sc_cat_item: '82abfe9b332540ba8ef0a25ccd0c702a'
                            sc_category: '1393fa29362247808961858773341b18'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'ee7ba55e50e043b2a7582f2d681c709a'
                        key: {
                            ui_policy: '5f1ff0471ffc4bfaba2da172380f19c1'
                            catalog_variable: 'IO:bbb84a5c6eb94403a481e869ade3ad7a'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ee8aba9fe8c84e72985233c0db7d1b59'
                        key: {
                            cat_item: '2640c2bdbd614301a96375a410043a08'
                            variable_set: 'NULL'
                            name: 'requires_mid_server'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ef90113fe94d4b74ad88a605293feb2f'
                        deleted: true
                        key: {
                            cat_item: 'd0296472e74f45e8af5f9b121b22c330'
                            variable_set: 'NULL'
                            name: 'reported_against'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_mtom'
                        id: 'f02f12c69933465589b96c7bd0f97ded'
                        key: {
                            sc_cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            user_criteria: '0af5e38b32234774bab7ac7e451a8211'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f173a261dbf04775ac7cb4561e6a9a34'
                        key: {
                            question: {
                                id: '09cc35663a024c8db8b43fc278558b0b'
                                key: {
                                    cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'decommission'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f20a238468f544fc955ad1d0abbfb9cb'
                        key: {
                            cat_item: 'f09ff3b78f5949609afe640d5bd07482'
                            variable_set: 'NULL'
                            name: 'target_app_or_module'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'f2e3f095259f492bb09269fab3f38134'
                        key: {
                            sc_cat_item: '855e5f412a0b4c6d87b185efdce75f8f'
                            sc_catalog: 'ec2949eb0bd14e0785abdc1170cb615d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f3422820ce164a33b00868aa0f408521'
                        key: {
                            cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            variable_set: 'NULL'
                            name: 'business_justification'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f4a4f29c2e3b4fa19c131dfc8faf8399'
                        key: {
                            cat_item: '4533a9b3792942c3b7144c8e704be6bf'
                            variable_set: 'NULL'
                            name: 'symptoms'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f6643ce1ca7244a7b627f75f069ef856'
                        key: {
                            question: {
                                id: '85510cbd28934968a369cba63311f327'
                                key: {
                                    cat_item: 'f94ed85350ff4d51a01d75592a4aecbf'
                                    variable_set: 'NULL'
                                    name: 'report_type'
                                }
                            }
                            value: 'pivot_table'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f708c1d0a1c247eb8cfe860079eb8187'
                        key: {
                            cat_item: '8b74259ece774f65b14c2a7b82838b82'
                            variable_set: 'NULL'
                            name: 'item_to_modify'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f81f4a99aef14657a9ae05c35a376c3c'
                        key: {
                            question: {
                                id: '8c620016d8d942d189488e4b00cffea9'
                                key: {
                                    cat_item: 'ab809e36b1724711a691e779bedb2f79'
                                    variable_set: 'NULL'
                                    name: 'applies_to_priority'
                                }
                            }
                            value: 'priority_4'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'f8a8a674d55d442d97c14df0e579791d'
                        key: {
                            sc_cat_item: 'c080e0fa153a4b10937fa9e7a18bb885'
                            sc_category: '4c2c28430a2449df8c4fef31c6029fd0'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'fa3bf79a64944e978683733bc6596bf1'
                        key: {
                            sc_cat_item: '814e8ee488294cc486748c1a3f370f56'
                            sc_category: 'a2c5f13fbb214c8cbcbfac02d1e451b2'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'fae4fe9c3d9248078a8b3056cedbb959'
                        key: {
                            question: {
                                id: '00558e5e429e4d4c8e015c8277abc0da'
                                key: {
                                    cat_item: '3b687d0106aa4300b69f0c75250ef43d'
                                    variable_set: 'NULL'
                                    name: 'data_source_type'
                                }
                            }
                            value: 'excel'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'fc487df8e3d74fc4a46bf1df3e0bcd95'
                        key: {
                            cat_item: 'fbf5d509dad540d6932b3ba6f9e9bb05'
                            variable_set: 'NULL'
                            name: 'target_group'
                        }
                    },
                ]
            }
        }
    }
}
