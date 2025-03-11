"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["865185"],{927325:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","title":"ARRAY_WITH_CONSTANT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_WITH_CONSTANT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_JOIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-join"},"next":{"title":"ARRAY_ENUMERATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate"}}'),a=t("785893"),r=t("250065");let l={title:"ARRAY_WITH_CONSTANT",language:"zh-CN"},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u751F\u6210\u4E00\u4E2A\u5305\u542B n \u4E2A\u91CD\u590D\u5143\u7D20 element \u7684\u6570\u7EC4"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"ARRAY_WITH_CONSTANT(<n>, <element>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<n>"})}),(0,a.jsx)(e.td,{children:"\u5143\u6570\u4E2A\u6570"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<element>"})}),(0,a.jsx)(e.td,{children:"\u6307\u5B9A\u5143\u7D20"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B n \u4E2A\u91CD\u590D\u7684 element \u5143\u7D20\u3002array_repeat \u4E0E array_with_constant \u529F\u80FD\u76F8\u540C\uFF0C\u7528\u6765\u517C\u5BB9 hive \u8BED\u6CD5\u683C\u5F0F\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'SELECT ARRAY_WITH_CONSTANT(2, "hello"),ARRAY_WITH_CONSTANT(3, 12345);\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:'+---------------------------------+-------------------------------+\n| array_with_constant(2, \'hello\') | array_with_constant(3, 12345) |\n+---------------------------------+-------------------------------+\n| ["hello", "hello"]              | [12345, 12345, 12345]         |\n+---------------------------------+-------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);