"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["595216"],{618787:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE","title":"DROP RESOURCE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DROP RESOURCE","language":"en"},"sidebar":"docs","previous":{"title":"ALTER RESOURCE","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE"},"next":{"title":"SHOW RESOURCES","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES"}}'),a=t("785893"),l=t("250065");let r={title:"DROP RESOURCE",language:"en"},c=void 0,o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function m(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to delete an existing resource. Only the root or admin user can delete resources."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP RESOURCE '<resource_name>'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsx)(n.p,{children:"ODBC/S3 resources in use cannot be deleted."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Delete the Spark resource named spark0:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP RESOURCE 'spark0';\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);