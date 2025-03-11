"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["635370"],{66231:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","title":"SHOW PRIVILEGES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW PRIVILEGES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REVOKE FROM","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/REVOKE-FROM"},"next":{"title":"SHOW GRANTS","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/SHOW-GRANTS"}}'),l=t("785893"),s=t("250065");let a={title:"SHOW PRIVILEGES",language:"zh-CN"},i=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SHOW PRIVILEGES"})," \u8BED\u53E5\u7528\u4E8E\u663E\u793A\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\u5F53\u524D\u53EF\u7528\u7684\u6743\u9650\u5217\u8868\u3002\u5B83\u5E2E\u52A9\u7528\u6237\u4E86\u89E3\u7CFB\u7EDF\u652F\u6301\u7684\u6743\u9650\u7C7B\u578B\u4EE5\u53CA\u6BCF\u79CD\u6743\u9650\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PRIVILEGES\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5217\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Privilege"}),(0,l.jsx)(n.td,{children:"\u6743\u9650\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Context"}),(0,l.jsx)(n.td,{children:"\u53EF\u4F5C\u7528\u8303\u56F4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Comment"}),(0,l.jsx)(n.td,{children:"\u8BF4\u660E"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u4E0D\u9700\u8981\u5177\u6709\u7279\u5B9A\u7684\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u6240\u6709\u6743\u9650\u9879"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PRIVILEGES\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------+-------------------------------------------------------+-----------------------------------------------+\n| Privilege   | Context                                               | Comment                                       |\n+-------------+-------------------------------------------------------+-----------------------------------------------+\n| Node_priv   | GLOBAL                                                | Privilege for cluster node operations         |\n| Admin_priv  | GLOBAL                                                | Privilege for admin user                      |\n| Grant_priv  | GLOBAL,CATALOG,DATABASE,TABLE,RESOURCE,WORKLOAD GROUP | Privilege for granting privilege              |\n| Select_priv | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for select data in tables           |\n| Load_priv   | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for loading data into tables        |\n| Alter_priv  | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for alter database or table         |\n| Create_priv | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for creating database or table      |\n| Drop_priv   | GLOBAL,CATALOG,DATABASE,TABLE                         | Privilege for dropping database or table      |\n| Usage_priv  | RESOURCE,WORKLOAD GROUP                               | Privilege for using resource or workloadGroup |\n+-------------+-------------------------------------------------------+-----------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let l={},s=r.createContext(l);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);