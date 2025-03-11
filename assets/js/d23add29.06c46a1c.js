"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["781017"],{138190:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY","title":"SHOW STORAGE POLICY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW STORAGE POLICY","language":"en"},"sidebar":"docs","previous":{"title":"DROP STORAGE POLICY","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY"},"next":{"title":"WARM UP","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/WARM-UP"}}'),a=n("785893"),l=n("250065");let i={title:"SHOW STORAGE POLICY",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"View tables and partitions associated with all/specified storage policies."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW STORAGE POLICY [ USING [ FOR <storage_policy_name> ] ]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(t.p,{children:"<storage_policy_name>"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The name of the storage policy to view."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The prerequisite for successfully executing this SQL command is to have ADMIN_PRIV privileges. Please refer to the\nprivilege document."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Privilege (Privilege)"}),(0,a.jsx)(t.th,{children:"Object (Object)"}),(0,a.jsx)(t.th,{children:"Notes (Notes)"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ADMIN_PRIV"}),(0,a.jsx)(t.td,{children:"Entire cluster management privileges"}),(0,a.jsx)(t.td,{children:"All privileges except NODE_PRIV"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View all objects with enabled storage policies."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"show storage policy using;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| PolicyName            | Database                                | Table                                  | Partitions |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | table_with_storage_policy_1            | ALL        |\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201701    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201702    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | table_with_storage_policy_2            | ALL        |\n| test_policy           | db2                                     | db2_test_1                             | ALL        |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View objects using the storage policy test_storage_policy."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"show storage policy using for test_storage_policy;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+---------------------+-----------+---------------------------------+------------+\n| PolicyName          | Database  | Table                           | Partitions |\n+---------------------+-----------+---------------------------------+------------+\n| test_storage_policy | db_1      | partition_with_storage_policy_1 | p201701    |\n| test_storage_policy | db_1      | table_with_storage_policy_1     | ALL        |\n+---------------------+-----------+---------------------------------+------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View the properties of all storage policies."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"show storage policy;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+-------------+----------+---------+---------+-----------------+------------------+-------------+\n| PolicyName  | Id       | Version | Type    | StorageResource | CooldownDatetime | CooldownTtl |\n+-------------+----------+---------+---------+-----------------+------------------+-------------+\n| test_policy | 14589252 | 0       | STORAGE | remote_s3       | -1               | 300         |\n| dev_policy  | 14589521 | 0       | STORAGE | remote_s3       | -1               | 3000        |\n+-------------+----------+---------+---------+-----------------+------------------+-------------+\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);