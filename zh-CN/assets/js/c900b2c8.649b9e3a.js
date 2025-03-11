"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["921015"],{456713:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>r,toc:()=>a,contentTitle:()=>c});var d=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/timediff","title":"TIMEDIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/timediff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/timediff","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/timediff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TIMEDIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TIME_ROUND","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/time-round"},"next":{"title":"TIMESTAMPADD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/timestampadd"}}'),i=t("785893"),s=t("250065");let l={title:"TIMEDIFF",language:"zh-CN"},c=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TIMEDIFF"})," \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u65F6\u95F4\u503C\u4E4B\u95F4\u7684\u5DEE\u503C\u3002\u8BE5\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u5176\u5DEE\u503C\uFF0C\u7ED3\u679C\u4E3A ",(0,i.jsx)(n.code,{children:"TIME"})," \u7C7B\u578B\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TIMEDIFF(<end_datetime>, <start_datetime>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<end_datetime>"})}),(0,i.jsx)(n.td,{children:"\u7ED3\u675F\u7684\u65F6\u95F4\u6216\u65E5\u671F\u65F6\u95F4\u503C"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<start_datetime>"})}),(0,i.jsx)(n.td,{children:"\u5F00\u59CB\u7684\u65F6\u95F4\u6216\u65E5\u671F\u65F6\u95F4\u503C"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"TIME"})," \u7C7B\u578B\u7684\u503C\uFF0C\u8868\u793A\u4E24\u4E2A\u8F93\u5165\u4E4B\u95F4\u7684\u65F6\u95F4\u5DEE\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5F53 ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," \u665A\u4E8E ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," \u65F6\uFF0C\u8FD4\u56DE\u6B63\u7684\u65F6\u95F4\u5DEE\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F53 ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," \u65E9\u4E8E ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," \u65F6\uFF0C\u8FD4\u56DE\u8D1F\u7684\u65F6\u95F4\u5DEE\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F53 ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," \u548C ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," \u76F8\u7B49\u65F6\uFF0C\u8FD4\u56DE ",(0,i.jsx)(n.code,{children:"00:00:00"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," \u6216 ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," \u4E3A ",(0,i.jsx)(n.code,{children:"NULL"}),"\uFF0C\u51FD\u6570\u8FD4\u56DE ",(0,i.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," \u6216 ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," \u4E3A\u975E\u6CD5\u65F6\u95F4\u6216\u65E5\u671F\u65F6\u95F4\u503C\uFF08\u5982 ",(0,i.jsx)(n.code,{children:"0000-00-00 00:00:00"}),"\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE ",(0,i.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT TIMEDIFF('2024-07-20 16:59:30','2024-07-11 16:35:21');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2024-07-20 16:59:30' as DATETIMEV2(0)), cast('2024-07-11 16:35:21' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 216:24:09                                                                                            |\n+------------------------------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var d=t(667294);let i={},s=d.createContext(i);function l(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);