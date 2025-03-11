"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["51888"],{323023:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>l,assets:()=>r,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/from-millisecond","title":"FROM_MILLISECOND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-millisecond.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/from-millisecond","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-millisecond","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FROM_MILLISECOND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FROM_MICROSECOND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-microsecond"},"next":{"title":"FROM_SECOND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-second"}}'),i=s("785893"),t=s("250065");let c={title:"FROM_MILLISECOND",language:"zh-CN"},o=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function a(n){let e={code:"code",h2:"h2",li:"li",millisecond:"millisecond",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:["\u51FD\u6570\u5C06\u8F93\u5165\u7684 Unix \u65F6\u95F4\u6233\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09\u8F6C\u6362\u4E3A ",(0,i.jsx)(e.code,{children:"DATETIME"})," \u7C7B\u578B\u7684\u65E5\u671F\u65F6\u95F4\u503C\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"FROM_MILLISECOND(<millisecond>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<millisecond>"})}),(0,i.jsx)(e.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684 Unix \u65F6\u95F4\u6233\uFF0C\u8868\u793A\u4ECE 1970-01-01 00:00:00 UTC \u5F00\u59CB\u7684\u6BEB\u79D2\u6570\u3002"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8FD4\u56DE\u4E00\u4E2A DATETIME \u7C7B\u578B\u7684\u503C\uFF0C\u8868\u793A\u8F93\u5165\u7684 Unix \u65F6\u95F4\u6233\u5BF9\u5E94\u7684\u65E5\u671F\u65F6\u95F4\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C ",(0,i.jsx)(e.millisecond,{children:" \u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C ",(0,i.jsx)(e.millisecond,{children:" \u8D85\u51FA\u6709\u6548\u8303\u56F4\uFF0C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u3002"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT FROM_MILLISECOND(1700000000000);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| from_millisecond(1700000000000) |\n+---------------------------------+\n| 2023-11-15 06:13:20             |\n+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return c}});var l=s(667294);let i={},t=l.createContext(i);function c(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);