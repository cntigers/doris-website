"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["240179"],{986684:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","title":"SHOW BACKEND CONFIG","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW BACKEND CONFIG","language":"en"},"sidebar":"docs","previous":{"title":"SHOW BACKENDS","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS"},"next":{"title":"DECOMMISSION BACKEND","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND"}}'),a=t("785893"),i=t("250065");let r={title:"SHOW BACKEND CONFIG",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2},{value:"Query All Configuration Items",id:"query-all-configuration-items",level:3},{value:"Query Configuration Items for a Specified BE ID",id:"query-configuration-items-for-a-specified-be-id",level:3},{value:"Query Configuration Items Matching a Specified Pattern",id:"query-configuration-items-matching-a-specified-pattern",level:3}];function u(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Display the configuration items and their current values for BACKEND (i.e., BE)."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"[ ADMIN ] SHOW BACKEND CONFIG [ LIKE <config_key_pattern> ] [ FROM <backend_id> ]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"<config_key_pattern>"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'Provides a wildcard pattern to match BE configuration items. The matching rules are the same as those for LIKE expressions. For writing rules, please refer to the "Matching Expressions" section.'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"<backend_id>"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'The ID of the BE. Used to view the configuration of the BE with the specified ID. The ID of the BE can be obtained through the SHOW BACKENDS command. Please refer to the "SHOW BACKENDS" command for details.'}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"BackendId: The ID of the BE"}),"\n",(0,a.jsx)(n.li,{children:"Host: The host address of the BE"}),"\n",(0,a.jsx)(n.li,{children:"Key: The name of the configuration item"}),"\n",(0,a.jsx)(n.li,{children:"Value: The corresponding value of the configuration item"}),"\n",(0,a.jsx)(n.li,{children:"Type: The type of the configuration value"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(n.p,{children:"Users executing this SQL command must have at least ADMIN_PRIV permissions."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"query-all-configuration-items",children:"Query All Configuration Items"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG\n"})}),"\n",(0,a.jsx)(n.p,{children:"Result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| BackendId | Host         | Key                            | Value | Type                     | IsMutable |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level       | 9     | int64_t                  | true      |\n| 12793     | 172.16.123.1 | agent_task_trace_threshold_sec | 2     | int32_t                  | true      |\n...\n| 12794     | 172.16.123.2 | zone_map_row_num_threshold     | 20    | int32_t                  | true      |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"query-configuration-items-for-a-specified-be-id",children:"Query Configuration Items for a Specified BE ID"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG FROM 12793\n"})}),"\n",(0,a.jsx)(n.p,{children:"Result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| BackendId | Host         | Key                            | Value | Type                     | IsMutable |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level       | 9     | int64_t                  | true      |\n| 12793     | 172.16.123.1 | agent_task_trace_threshold_sec | 2     | int32_t                  | true      |\n...\n| 12793     | 172.16.123.1 | zone_map_row_num_threshold     | 20    | int32_t                  | true      |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"query-configuration-items-matching-a-specified-pattern",children:"Query Configuration Items Matching a Specified Pattern"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG LIKE '%compression_level%'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------+-------+---------+-----------+\n| BackendId | Host         | Key                      | Value | Type    | IsMutable |\n+-----------+--------------+--------------------------+-------+---------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level | 9     | int64_t | true      |\n| 12794     | 172.16.123.2 | LZ4_HC_compression_level | 9     | int64_t | true      |\n+-----------+--------------+--------------------------+-------+---------+-----------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);