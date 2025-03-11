"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["741071"],{492286:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/struct-functions/struct-element","title":"STRUCT_ELEMENT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/struct-functions/struct-element.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/struct-functions","slug":"/sql-manual/sql-functions/scalar-functions/struct-functions/struct-element","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/struct-element","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STRUCT_ELEMENT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NAMED_STRUCT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct"},"next":{"title":"JSON_PARSE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-parse"}}'),c=t("785893"),l=t("250065");let r={title:"STRUCT_ELEMENT",language:"zh-CN"},i=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE struct \u6570\u636E\u5217\u5185\u7684\u67D0\u4E00 field"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"STRUCT_ELEMENT( <struct>, `<filed_location>/<filed_name>`)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<struct>"})}),(0,c.jsx)(e.td,{children:"\u8F93\u5165\u7684 struct \u5217\uFF0C\u5982\u679C\u662F null\uFF0C\u5219\u8FD4\u56DE null"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<filed_location>"})}),(0,c.jsx)(e.td,{children:"field \u7684\u4F4D\u7F6E\uFF0C\u8D77\u59CB\u4F4D\u7F6E\u4ECE 1 \u5F00\u59CB\uFF0C\u4EC5\u652F\u6301\u5E38\u91CF"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<filed_name>"})}),(0,c.jsx)(e.td,{children:"field \u7684\u540D\u5B57\uFF0C\u4EC5\u652F\u6301\u5E38\u91CF"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u7684 field \u5217\uFF0C\u7C7B\u578B\u4E3A\u4EFB\u610F\u7C7B\u578B"}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2'),struct_element(named_struct('f1', 1, 'f2', 'a'), 1);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------+-----------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2') | struct_element(named_struct('f1', 1, 'f2', 'a'), 1) |\n+--------------------------------------------------------+-----------------------------------------------------+\n| a                                                      |                                                   1 |\n+--------------------------------------------------------+-----------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select struct_col, struct_element(struct_col, 'f1') from test_struct;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+-------------------------------------+\n| struct_col                                      | struct_element(`struct_col `, 'f1') |\n+-------------------------------------------------+-------------------------------------+\n| {1, 2, 3, 4, 5}                                 |                                   1 |\n| {1, 1000, 10000000, 100000000000, 100000000000} |                                   1 |\n| {5, 4, 3, 2, 1}                                 |                                   5 |\n| NULL                                            |                                NULL |\n| {1, NULL, 3, NULL, 5}                           |                                   1 |\n+-------------------------------------------------+-------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var s=t(667294);let c={},l=s.createContext(c);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);