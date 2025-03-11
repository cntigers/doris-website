"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["23243"],{452844:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>r,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff","title":"MONTHS_DIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MONTHS_DIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MONTHS_ADD","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/months-add"},"next":{"title":"MONTHS_SUB","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub"}}'),i=t("785893"),l=t("250065");let d={title:"MONTHS_DIFF",language:"zh-CN"},c=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"MONTHS_DIFF"})," \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u76F8\u5DEE\u7684\u6708\u4EFD\u6570\u3002\u8BE5\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u65E5\u671F\u53C2\u6570\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u65E5\u671F\u51CF\u53BB\u7B2C\u4E8C\u4E2A\u65E5\u671F\u540E\u7684\u76F8\u5DEE\u6708\u4EFD\u6570\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"MONTHS_DIFF(<enddate>, <startdate>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<enddate>"})}),(0,i.jsxs)(e.td,{children:["\u7ED3\u675F\u65E5\u671F\uFF0C\u8868\u793A\u8BA1\u7B97\u5DEE\u503C\u65F6\u7684\u8F83\u665A\u65E5\u671F\u3002\u652F\u6301\u65E5\u671F\u7C7B\u578B\uFF08\u5982 ",(0,i.jsx)(e.code,{children:"DATE"}),"\uFF09\u6216\u65E5\u671F\u65F6\u95F4\u7C7B\u578B\uFF08\u5982 ",(0,i.jsx)(e.code,{children:"DATETIME"}),"\uFF09"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<startdate>"})}),(0,i.jsxs)(e.td,{children:["\u5F00\u59CB\u65E5\u671F\uFF0C\u8868\u793A\u8BA1\u7B97\u5DEE\u503C\u65F6\u7684\u8F83\u65E9\u65E5\u671F\u3002\u652F\u6301\u65E5\u671F\u7C7B\u578B\uFF08\u5982 ",(0,i.jsx)(e.code,{children:"DATE"}),"\uFF09\u6216\u65E5\u671F\u65F6\u95F4\u7C7B\u578B\uFF08\u5982 ",(0,i.jsx)(e.code,{children:"DATETIME"}),"\uFF09"]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"<enddate>"})," \u51CF\u53BB ",(0,i.jsx)(e.code,{children:"<startdate>"})," \u6240\u5F97\u6708\u4EFD\u6570"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5F53",(0,i.jsx)(e.code,{children:"<enddate>"}),"\u4E0E",(0,i.jsx)(e.code,{children:"<startdate>"}),"\u4EFB\u610F\u4E3A NULL\uFF0C\u6216\u8005\u4E24\u8005\u90FD\u4E3A NULL \u65F6\uFF0C\u8FD4\u56DE NULL"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select months_diff('2020-12-25','2020-10-25'),months_diff('2020-10-25 10:00:00','2020-12-25 11:00:00');\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n| months_diff(cast('2020-12-25' as DATETIMEV2(0)), cast('2020-10-25' as DATETIMEV2(0))) | months_diff(cast('2020-10-25 10:00:00' as DATETIMEV2(0)), cast('2020-12-25 11:00:00' as DATETIMEV2(0))) |\n+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n|                                                                                     2 |                                                                                                      -2 |\n+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var s=t(667294);let i={},l=s.createContext(i);function d(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);