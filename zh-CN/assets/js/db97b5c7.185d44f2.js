"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["838434"],{721074:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>c,assets:()=>a,toc:()=>r,contentTitle:()=>d});var c=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/second-ceil","title":"SECOND_CEIL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-ceil.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/second-ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-ceil","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SECOND_CEIL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE_CEIL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-ceil"},"next":{"title":"MINUTE_CEIL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-ceil"}}'),i=s("785893"),t=s("250065");let l={title:"SECOND_CEIL",language:"zh-CN"},d=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u51FD\u6570\u7528\u4E8E\u5C06\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\u5411\u4E0A\u5BF9\u9F50\u5230\u6307\u5B9A\u7684\u79D2\u5468\u671F\u8FB9\u754C\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u9F50\u540E\u7684\u65E5\u671F\u65F6\u95F4\u503C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECOND_CEIL(<datetime>[, <period>][, <origin_datetime>])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u652F\u6301 DATETIME \u7C7B\u578B\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<period>"})}),(0,i.jsx)(n.td,{children:"\u53EF\u9009\uFF0C\u8868\u793A\u6BCF\u4E2A\u5468\u671F\u7531\u591A\u5C11\u79D2\u7EC4\u6210\uFF0C\u652F\u6301\u6B63\u6574\u6570\u7C7B\u578B\uFF08INT\uFF09\u3002\u9ED8\u8BA4\u4E3A 1 \u79D2\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<origin_datetime>"})}),(0,i.jsx)(n.td,{children:"\u53EF\u9009\uFF0C\u5BF9\u9F50\u7684\u65F6\u95F4\u8D77\u70B9\uFF0C\u652F\u6301 DATETIME \u7C7B\u578B\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A 0001-01-01T00:00:00\u3002"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u8868\u793A\u8F93\u5165\u65E5\u671F\u65F6\u95F4\u5411\u4E0A\u5BF9\u9F50\u540E\u7684\u7ED3\u679C\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u8F93\u5165\u7684 ",(0,i.jsx)(n.code,{children:"<datetime>"})," \u4E3A NULL\uFF0C\u8FD4\u56DE NULL\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u8F93\u5165\u7684 ",(0,i.jsx)(n.code,{children:"<datetime>"})," \u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00T00:00:00\uFF09\uFF0C\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsxs)(n.p,{children:["\u53EA\u6307\u5B9A\u53C2\u6570",(0,i.jsx)(n.code,{children:"<datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_CEIL('2025-01-23 12:34:56');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------+\n| second_ceil(cast('2025-01-23 12:34:56' as DATETIMEV2(0))) |\n+-----------------------------------------------------------+\n| 2025-01-23 12:34:56                                       |\n+-----------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u5B9A\u53C2\u6570 ",(0,i.jsx)(n.code,{children:"<datetime>"}),"\uFF0C ",(0,i.jsx)(n.code,{children:"<origin_datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_CEIL('2025-01-23 12:34:56', '2025-01-01 00:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------------------------+\n| second_ceil(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), cast('2025-01-01 00:00:00' as DATETIMEV2(0))) |\n+---------------------------------------------------------------------------------------------------------+\n| 2025-01-23 12:34:56                                                                                     |\n+---------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u5B9A\u53C2\u6570 ",(0,i.jsx)(n.code,{children:"<datetime>"}),"\uFF0C",(0,i.jsx)(n.code,{children:"<period>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_CEIL('2025-01-23 12:34:56', 5)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------+\n| second_ceil(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2025-01-23 12:35:00                                          |\n+--------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u65F6\u6307\u5B9A   ",(0,i.jsx)(n.code,{children:"<datetime>"}),"\uFF0C",(0,i.jsx)(n.code,{children:"<period>"}),"\uFF0C",(0,i.jsx)(n.code,{children:"<origin_datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_CEIL('2025-01-23 12:34:56', 10, '2025-01-23 12:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------------------------------------+\n| second_ceil(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 10, cast('2025-01-23 12:00:00' as DATETIMEV2(0))) |\n+-------------------------------------------------------------------------------------------------------------+\n| 2025-01-23 12:35:00                                                                                         |\n+-------------------------------------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var c=s(667294);let i={},t=c.createContext(i);function l(e){let n=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);