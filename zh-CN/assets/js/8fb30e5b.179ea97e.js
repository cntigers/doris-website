"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["468934"],{534147:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond","title":"MICROSECOND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MICROSECOND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"year_ceil","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/year-ceil"},"next":{"title":"MICROSECONDS_ADD","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-add"}}'),c=t("785893"),i=t("250065");let l={title:"MICROSECOND",language:"zh-CN"},a=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u63D0\u53D6\u5FAE\u79D2\u90E8\u5206\u7684\u503C\u3002\u8FD4\u56DE\u7684\u8303\u56F4\u662F 0 \u5230 999999\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"MICROSECOND(<date>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<date>"})}),(0,c.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E3A DATETIMEV2\uFF0C\u7CBE\u5EA6\u9700\u8981\u5927\u4E8E 0"})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A INT\uFF0C\u8FD4\u56DE\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u7684\u5FAE\u79D2\u90E8\u5206\u3002\u53D6\u503C\u8303\u56F4\u4E3A 0 \u5230 999999\u3002\u5BF9\u4E8E\u7CBE\u5EA6\u5C0F\u4E8E 6 \u7684\u8F93\u5165\uFF0C\u4E0D\u8DB3\u7684\u4F4D\u6570\u8865 0\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT MICROSECOND(CAST('1999-01-02 10:11:12.000123' AS DATETIMEV2(6))) AS microsecond;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------+\n| microsecond |\n+-------------+\n|         123 |\n+-------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let c={},i=s.createContext(c);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);