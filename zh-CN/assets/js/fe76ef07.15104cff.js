"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["292590"],{755172:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>r,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","title":"MILLISECONDS_ADD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MILLISECONDS_ADD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MICROSECONDS_SUB","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub"},"next":{"title":"MILLISECONDS_DIFF","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff"}}'),l=s("785893"),i=s("250065");let c={title:"MILLISECONDS_ADD",language:"zh-CN"},d=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5411\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u6DFB\u52A0\u6307\u5B9A\u7684\u6BEB\u79D2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u65E5\u671F\u65F6\u95F4\u503C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MILLISECONDS_ADD(<basetime>, <delta>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<basetime>"})}),(0,l.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E3A DATETIMEV2"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<delta>"})}),(0,l.jsx)(e.td,{children:"\u8981\u6DFB\u52A0\u7684\u6BEB\u79D2\u6570\uFF0C\u7C7B\u578B\u4E3A INT\uFF0C1 \u79D2 = 1,000 \u6BEB\u79D2 = 1,000,000 \u5FAE\u79D2"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIMEV2\uFF0C\u8FD4\u56DE\u4EE5\u8F93\u5165\u65E5\u671F\u65F6\u95F4\u4E3A\u57FA\u51C6\uFF0C\u589E\u52A0\u6307\u5B9A\u6BEB\u79D2\u6570\u540E\u7684\u65F6\u95F4\u503C\u3002\u8FD4\u56DE\u503C\u7684\u7CBE\u5EA6\u4E0E\u8F93\u5165\u53C2\u6570 basetime \u7684\u7CBE\u5EA6\u76F8\u540C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT MILLISECONDS_ADD('2023-09-08 16:02:08.435123', 1);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------------------+\n| milliseconds_add(cast('2023-09-08 16:02:08.435123' as DATETIMEV2(6)), 1) |\n+--------------------------------------------------------------------------+\n| 2023-09-08 16:02:08.436123                                               |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793A\u4F8B\u4E2D\u6DFB\u52A0 1 \u6BEB\u79D2\u540E\uFF0C\u65F6\u95F4\u4ECE .435123 \u589E\u52A0\u5230 .436123"}),"\n",(0,l.jsx)(e.li,{children:"1 \u6BEB\u79D2\u7B49\u4E8E 1000 \u5FAE\u79D2"}),"\n",(0,l.jsx)(e.li,{children:"\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\u4E0E\u8F93\u5165\u65F6\u95F4\u7684\u7CBE\u5EA6\u6709\u5173\uFF0C\u793A\u4F8B\u4F7F\u7528\u4E86 6 \u4F4D\u5C0F\u6570\u7CBE\u5EA6"}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var t=s(667294);let l={},i=t.createContext(l);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);