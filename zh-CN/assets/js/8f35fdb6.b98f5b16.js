"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["157210"],{427961:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>u,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/struct-functions/named-struct","title":"NAMED_STRUCT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/struct-functions","slug":"/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NAMED_STRUCT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRUCT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/struct"},"next":{"title":"STRUCT_ELEMENT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/struct-element"}}'),l=t("785893"),c=t("250065");let r={title:"NAMED_STRUCT",language:"zh-CN"},i=void 0,a={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u548C\u503C\u6784\u9020\u5E76\u8FD4\u56DE struct ,\u6CE8\u610F\u4E8B\u9879\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53C2\u6570\u4E2A\u6570\u5FC5\u987B\u4E3A\u975E 0 \u5076\u6570\uFF0C\u5947\u6570\u4F4D\u662F field \u7684\u540D\u5B57\uFF0C\u5FC5\u987B\u4E3A\u5E38\u91CF\u5B57\u7B26\u4E32\uFF0C\u5076\u6570\u4F4D\u662F field \u7684\u503C\uFF0C\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"NAMED_STRUCT( <field_name> , <filed_value> [ , <field_name> , <filed_value> ... ] )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<field_name>"})}),(0,l.jsx)(e.td,{children:"\u6784\u9020 struct \u7684\u5947\u6570\u4F4D\u8F93\u5165\u5185\u5BB9\uFF0Cfield \u7684\u540D\u5B57"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<filed_value>"})}),(0,l.jsx)(e.td,{children:"\u6784\u9020 struct \u7684\u5076\u6570\u4F4D\u8F93\u5165\u5185\u5BB9\uFF0Cfield \u7684\u503C\uFF0C\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u548C\u503C\u6784\u9020\u5E76\u8FD4\u56DE struct"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\"),named_struct('a', null, 'b', \"v\");\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------+-----------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') | named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------------------+-----------------------------------+\n| {\"f1\":1, \"f2\":\"a\", \"f3\":\"abc\"}                | {\"a\":null, \"b\":\"v\"}               |\n+-----------------------------------------------+-----------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},c=s.createContext(l);function r(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);