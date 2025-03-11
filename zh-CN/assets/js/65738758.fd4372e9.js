"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["708525"],{961601:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-ROLES","title":"SHOW ROLES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/account-management/SHOW-ROLES.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-ROLES","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SHOW-ROLES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW ROLES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP ROLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/DROP-ROLE"},"next":{"title":"GRANT TO","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/GRANT-TO"}}'),l=t("785893"),r=t("250065");let d={title:"SHOW ROLES",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"SHOW ROLES \u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u6240\u6709\u5DF2\u521B\u5EFA\u7684\u89D2\u8272\u4FE1\u606F\uFF0C\u5305\u62EC\u89D2\u8272\u540D\u79F0\uFF0C\u5305\u542B\u7684\u7528\u6237\u4EE5\u53CA\u6743\u9650\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"SHOW ROLES\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Name"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u89D2\u8272\u540D\u79F0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Comment"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u6CE8\u91CA"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Users"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u5305\u542B\u7684\u7528\u6237"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"GlobalPrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u5168\u5C40\u6743\u9650"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"CatalogPrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"Catalog \u6743\u9650"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"DatabasePrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u6570\u636E\u5E93\u6743\u9650"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TablePrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u8868\u6743\u9650"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ResourcePrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u8D44\u6E90\u6743\u9650"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"WorkloadGroupPrivs"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"WorkloadGroup \u6743\u9650"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 GRANT_PRIV \u6743\u9650\u624D\u80FD\u8FDB\u884C\u6B64\u64CD\u4F5C"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u89D2\u8272"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"SHOW ROLES\n"})})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return d}});var s=t(667294);let l={},r=s.createContext(l);function d(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);