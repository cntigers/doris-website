"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["491060"],{17523:function(n,e,r){r.r(e),r.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-union","title":"ARRAY_UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/array-functions/array-union.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-union","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-union","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_DIFFERENCE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-difference"},"next":{"title":"ARRAY_JOIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-join"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_UNION",language:"zh-CN"},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5C06\u591A\u4E2A\u6570\u7EC4\u8FDB\u884C\u5408\u5E76\uFF0C\u4E0D\u5305\u542B\u91CD\u590D\u5143\u7D20\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"ARRAY_UNION(<array>, <array> [, ... ])\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<array>"})}),(0,t.jsx)(e.td,{children:"\u5F85\u5408\u5E76\u7684\u6570\u7EC4"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B array1 \u548C array2 \u7684\u5E76\u96C6\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u91CD\u590D\u9879\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT ARRAY_UNION([1, 2, 3, 6],[1, 2, 5]),ARRAY_UNION([1, 4, 3, 5, NULL],[1,6,10]);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------------------------------------+---------------------------------------------+\n| array_union([1, 2, 3, 6], [1, 2, 5]) | array_union([1, 4, 3, 5, NULL], [1, 6, 10]) |\n+--------------------------------------+---------------------------------------------+\n| [3, 2, 1, 6, 5]                      | [null, 10, 3, 1, 6, 4, 5]                   |\n+--------------------------------------+---------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);