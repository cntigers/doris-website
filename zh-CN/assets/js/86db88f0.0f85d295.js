"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["119947"],{273049:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>r,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff","title":"MILLISECONDS_DIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MILLISECONDS_DIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MILLISECONDS_ADD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add"},"next":{"title":"MILLISECONDS_SUB","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-sub"}}'),l=s("785893"),i=s("250065");let d={title:"MILLISECONDS_DIFF",language:"zh-CN"},c=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u65F6\u95F4\u503C\u4E4B\u95F4\u7684\u6BEB\u79D2\u5DEE\u503C\u3002\u7ED3\u679C\u4E3A ",(0,l.jsx)(e.code,{children:"<end_date>"})," \u51CF\u53BB ",(0,l.jsx)(e.code,{children:"<start_date>"})," \u7684\u6BEB\u79D2\u6570\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MILLISECONDS_DIFF(<enddate>, <startdate>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<end_date>"})}),(0,l.jsx)(e.td,{children:"\u7ED3\u675F\u65F6\u95F4\uFF0C\u7C7B\u578B\u4E3A DATETIMEV2"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<start_date>"})}),(0,l.jsx)(e.td,{children:"\u5F00\u59CB\u65F6\u95F4\uFF0C\u7C7B\u578B\u4E3A DATETIMEV2"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A INT\uFF0C\u8868\u793A\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u6BEB\u79D2\u5DEE\u503C\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"<end_date>"})," \u5927\u4E8E ",(0,l.jsx)(e.code,{children:"<start_date>"}),"\uFF0C\u8FD4\u56DE\u6B63\u6570"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"<end_date>"})," \u5C0F\u4E8E ",(0,l.jsx)(e.code,{children:"<start_date>"}),"\uFF0C\u8FD4\u56DE\u8D1F\u6570"]}),"\n",(0,l.jsx)(e.li,{children:"1 \u79D2 = 1,000 \u6BEB\u79D2"}),"\n",(0,l.jsx)(e.li,{children:"1 \u6BEB\u79D2 = 1,000 \u5FAE\u79D2"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT MILLISECONDS_DIFF('2020-12-25 21:00:00.623000', '2020-12-25 21:00:00.123000');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------------------------+\n| milliseconds_diff(cast('2020-12-25 21:00:00.623000' as DATETIMEV2(3)), cast('2020-12-25 21:00:00.123000' as DATETIMEV2(3))) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         500 |\n+-----------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793A\u4F8B\u4E2D\u7684\u65F6\u95F4\u5DEE\u4E3A 0.5 \u79D2\uFF0C\u5373 500 \u6BEB\u79D2"}),"\n",(0,l.jsx)(e.li,{children:"\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\u4E0E\u8F93\u5165\u65F6\u95F4\u7684\u7CBE\u5EA6\u6709\u5173\uFF0C\u793A\u4F8B\u4F7F\u7528\u4E86 3 \u4F4D\u5C0F\u6570\u7CBE\u5EA6"}),"\n",(0,l.jsx)(e.li,{children:"\u7ED3\u679C\u53EA\u8FD4\u56DE\u6BEB\u79D2\u5DEE\u503C\uFF0C\u4E0D\u5305\u542B\u5FAE\u79D2\u90E8\u5206"}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return d}});var t=s(667294);let l={},i=t.createContext(l);function d(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);