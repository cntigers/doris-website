"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["334716"],{261129:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","title":"SHOW PRIVILEGES","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","permalink":"/docs/dev/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PRIVILEGES","language":"en"},"sidebar":"docs","previous":{"title":"REVOKE FROM","permalink":"/docs/dev/sql-manual/sql-statements/account-management/REVOKE-FROM"},"next":{"title":"SHOW GRANTS","permalink":"/docs/dev/sql-manual/sql-statements/account-management/SHOW-GRANTS"}}'),r=t("785893"),i=t("250065");let a={title:"SHOW PRIVILEGES",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SHOW PRIVILEGES"})," statement is used to display the list of currently available privileges in the database system. It helps users understand the types of privileges supported by the system and the details of each privilege."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PRIVILEGES\n"})}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Privilege"}),(0,r.jsx)(n.td,{children:"Privilege name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Context"}),(0,r.jsx)(n.td,{children:"Applicable range"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Comment"}),(0,r.jsx)(n.td,{children:"Description"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command does not need to have specific privileges."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"View all privileges"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PRIVILEGES\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------------+-------------------------------------------------------+-----------------------------------------------+\n| Privilege   | Context                                               | Comment                                       |\n+-------------+-------------------------------------------------------+-----------------------------------------------+\n| Node_priv   | GLOBAL                                                | Privilege for cluster node operations         |\n| Admin_priv  | GLOBAL                                                | Privilege for admin user                      |\n| Grant_priv  | GLOBAL,CATALOG,DATABASE,TABLE,RESOURCE,WORKLOAD GROUP | Privilege for granting privilege              |\n| Select_priv | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for select data in tables           |\n| Load_priv   | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for loading data into tables        |\n| Alter_priv  | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for alter database or table         |\n| Create_priv | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for creating database or table      |\n| Drop_priv   | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for dropping database or table      |\n| Usage_priv  | RESOURCE,WORKLOAD GROUP                               | Privilege for using resource or workloadGroup |\n+-------------+-------------------------------------------------------+-----------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);