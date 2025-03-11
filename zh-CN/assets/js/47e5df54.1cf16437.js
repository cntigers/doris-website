"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["779463"],{704064:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/current-timestamp","title":"CURRENT_TIMESTAMP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/current-timestamp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/current-timestamp","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/current-timestamp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CURRENT_TIMESTAMP","language":"zh-CN"}}'),l=t("785893"),i=t("250065");let c={title:"CURRENT_TIMESTAMP",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u51FD\u6570\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u8FD4\u56DE\u503C\u4E3A\u65E5\u671F\u65F6\u95F4\u7C7B\u578B\uFF08",(0,l.jsx)(e.code,{children:"DATETIME"}),"\uFF09\u3002\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u6307\u5B9A\u7CBE\u5EA6\u4EE5\u8C03\u6574\u8FD4\u56DE\u503C\u7684\u5C0F\u6570\u79D2\u90E8\u5206\u7684\u4F4D\u6570\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CURRENT_TIMESTAMP([<precision>])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<precision>"})}),(0,l.jsxs)(e.td,{children:["\u53EF\u9009\u53C2\u6570\uFF0C\u8868\u793A\u8FD4\u56DE\u503C\u7684\u5C0F\u6570\u79D2\u90E8\u5206\u7684\u7CBE\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A 0 \u5230 6\u3002\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u4E0D\u8FD4\u56DE\u5C0F\u6570\u79D2\u90E8\u5206\u3002 ",(0,l.jsx)(e.br,{}),"\u53D7\u9650\u4E8E JDK \u5B9E\u73B0\uFF0C\u5982\u679C\u7528\u6237\u4F7F\u7528 JDK8 \u6784\u5EFA FE\uFF0C\u5219\u7CBE\u5EA6\u6700\u591A\u652F\u6301\u5230\u6BEB\u79D2\uFF08\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D\uFF09\uFF0C\u66F4\u5927\u7684\u7CBE\u5EA6\u4F4D\u5C06\u5168\u90E8\u586B\u5145 0\u3002\u5982\u679C\u7528\u6237\u6709\u66F4\u9AD8\u7CBE\u5EA6\u9700\u6C42\uFF0C\u8BF7\u4F7F\u7528 JDK11\u3002"]})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u8FD4\u56DE\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u7C7B\u578B\u4E3A ",(0,l.jsx)(e.code,{children:"DATETIME"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C\u6307\u5B9A\u7684 ",(0,l.jsx)(e.code,{children:"<precision>"})," \u8D85\u51FA\u8303\u56F4\uFF08\u5982\u4E3A\u8D1F\u6570\u6216\u5927\u4E8E 6\uFF09\uFF0C\u51FD\u6570\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(3),CURRENT_TIMESTAMP(6);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------+-------------------------+----------------------------+\n| now()               | now(3)                  | now(6)                     |\n+---------------------+-------------------------+----------------------------+\n| 2025-01-23 11:26:01 | 2025-01-23 11:26:01.771 | 2025-01-23 11:26:01.771000 |\n+---------------------+-------------------------+----------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var s=t(667294);let l={},i=s.createContext(l);function c(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);