"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["680211"],{72807:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","title":"CREATE STORAGE POLICY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE STORAGE POLICY","language":"en"},"sidebar":"docs","previous":{"title":"SHOW STORAGE VAULTS","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-VAULTS"},"next":{"title":"ALTER STORAGE POLICY","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY"}}'),a=n("785893"),r=n("250065");let l={title:"CREATE STORAGE POLICY",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"To create a storage policy, you must first create a storage resource, and then associate the created storage resource name when creating the migration policy. For details, refer to the RESOURCE section."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY <policy_name>\nPROPERTIES(\n    "storage_resource" = "<storage_resource_name>"\n    [{\uFF0C "cooldown_datetime" = "<cooldown_datetime>"\n    \uFF5C \uFF0C "cooldown_ttl" = "<cooldown_ttl>"}]\n);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<policy_name>"}),": The name of the storage policy to be created"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<storage_resource_name>"}),": The name of the associated storage resource. For details on how to create it, refer to the RESOURCE section"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<cooldown_datetime>"}),": Specifies the cooldown time for creating the data migration policy"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<cooldown_ttl>"}),": Specifies the duration of hot data for creating the data migration policy"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The prerequisite for successfully executing this SQL command is to have ADMIN_PRIV privileges. Refer to the privilege document."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Entire cluster management privileges"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"All privileges except NODE_PRIV"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a data migration policy with a specified data cooldown time."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n"storage_resource" = "s3",\n"cooldown_datetime" = "2022-06-08 00:00:00"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a data migration policy with a specified duration of hot data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n"storage_resource" = "s3",\n"cooldown_ttl" = "1d"\n);\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var s=n(667294);let a={},r=s.createContext(a);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);