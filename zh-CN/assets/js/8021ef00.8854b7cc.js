"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875678"],{384888:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>r,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/second","title":"SECOND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/second.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/second","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/second","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SECOND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MINUTE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/minute"},"next":{"title":"FROM_DAYS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/from-days"}}'),l=t("785893"),i=t("250065");let c={title:"SECOND",language:"zh-CN"},d=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u51FD\u6570\u7528\u4E8E\u8FD4\u56DE\u6307\u5B9A\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u7684\u79D2\u6570\u90E8\u5206\u3002\u79D2\u6570\u7684\u8303\u56F4\u662F 0 \u5230 59\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SECOND(<datetime>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<datetime>"})}),(0,l.jsx)(n.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u6216\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u652F\u6301 DATE \u6216 DATETIME \u7C7B\u578B\u3002"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u8F93\u5165\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u7684\u79D2\u6570\u90E8\u5206\uFF0C\u8303\u56F4\u4E3A 0 \u5230 59\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679C\u8F93\u5165\u503C\u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679C\u8F93\u5165\u503C\u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00 00:00:00\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select second('2018-12-31 23:59:59');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------+\n| second(cast('2018-12-31 23:59:59' as DATETIMEV2(0))) |\n+------------------------------------------------------+\n|                                                   59 |\n+------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let l={},i=s.createContext(l);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);