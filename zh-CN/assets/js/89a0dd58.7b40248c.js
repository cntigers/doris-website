"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["270762"],{736148:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/repeat","title":"REPEAT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/repeat.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/repeat","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/repeat","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REPEAT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INITCAP","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/initcap"},"next":{"title":"REVERSE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/reverse"}}'),l=s("785893"),i=s("250065");let r={title:"REPEAT",language:"zh-CN"},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"REPEAT \u51FD\u6570\u7528\u4E8E\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u91CD\u590D\u6307\u5B9A\u7684\u6B21\u6570\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"REPEAT( <str>, <count> )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u91CD\u590D\u7684\u5B57\u7B26\u4E32"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<count>"})}),(0,l.jsx)(e.td,{children:"\u91CD\u590D\u7684\u6B21\u6570\uFF0C\u5FC5\u987B\u4E3A\u975E\u8D1F\u6574\u6570\uFF0C\u5C0F\u4E8E 1 \u65F6\u5C06\u8FD4\u56DE\u7A7A\u4E32"})]})]})]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:"repeat \u51FD\u6570\u9ED8\u8BA4\u6700\u591A\u91CD\u590D 10000 \u6B21\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6B21\u6570\u5C06\u4F1A\u62A5\u9519\uFF0C\u53EF\u901A\u8FC7\u4F1A\u8BDD\u53D8\u91CF\u8C03\u6574\u9650\u5236\uFF1A"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"set repeat_max_num = 20000\n"})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u91CD\u590D\u6307\u5B9A\u7684\u6B21\u6570\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SELECT repeat("a", 3);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------+\n| repeat('a', 3) |\n+----------------+\n| aaa            |\n+----------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SELECT repeat("a", -1);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------+\n| repeat('a', -1) |\n+-----------------+\n|                 |\n+-----------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);