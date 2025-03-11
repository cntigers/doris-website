"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["858968"],{82109:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/minute","title":"MINUTE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/minute.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/minute","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/minute","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MINUTE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HOUR","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hour"},"next":{"title":"SECOND","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/second"}}'),l=t("785893"),i=t("250065");let c={title:"MINUTE",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u63D0\u53D6\u5206\u949F\u90E8\u5206\u7684\u503C\u3002\u8FD4\u56DE\u503C\u8303\u56F4\u4E3A 0 \u5230 59\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MINUTE(<date>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<date>"})}),(0,l.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u53EF\u4EE5\u662F DATE\u3001DATETIME\u3001DATETIMEV2 \u6216 TIME"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A INT\uFF0C\u8868\u793A\u5206\u949F\u503C\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A 0-59\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT MINUTE('2018-12-31 23:59:59');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------+\n| minute(cast('2018-12-31 23:59:59' as DATETIMEV2(0))) |\n+------------------------------------------------------+\n|                                                   59 |\n+------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8F93\u5165\u53C2\u6570\u53EF\u4EE5\u662F\u591A\u79CD\u65F6\u95F4\u76F8\u5173\u7C7B\u578B"}),"\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE\u503C\u59CB\u7EC8\u662F 0-59 \u4E4B\u95F4\u7684\u6574\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return c}});var s=t(667294);let l={},i=s.createContext(l);function c(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);