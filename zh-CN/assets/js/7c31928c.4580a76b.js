"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["948423"],{249056:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>l,assets:()=>r,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/negative","title":"NEGATIVE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/negative.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/negative","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/negative","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NEGATIVE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"POSITIVE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/positive"},"next":{"title":"RANDOM","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/random"}}'),t=s("785893"),i=s("250065");let c={title:"NEGATIVE",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4F20\u53C2 x \u7684\u8D1F\u503C"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"NEGATIVE(<x>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<x>"})}),(0,t.jsxs)(e.td,{children:["\u81EA\u53D8\u91CF \u652F\u6301\u7C7B\u578B",(0,t.jsx)(e.code,{children:"BIGINT DOUBLE DECIMAL"})]})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u6574\u578B\u6216\u8005\u6D6E\u70B9\u6570\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5F53\u53C2\u6570\u4E3A NULL \u65F6\uFF0C\u8FD4\u56DE NULL"}),"\n",(0,t.jsx)(e.li,{children:"\u5F53\u53C2\u6570\u4E3A 0 \u65F6\uFF0C\u8FD4\u56DE 0"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT negative(-10);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------+\n| negative(-10) |\n+---------------+\n|            10 |\n+---------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT negative(12);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------------+\n| negative(12) |\n+--------------+\n|          -12 |\n+--------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT negative(0);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------+\n| negative(0) |\n+-------------+\n|           0 |\n+-------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT negative(null);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+----------------+\n| negative(NULL) |\n+----------------+\n|           NULL |\n+----------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return c}});var l=s(667294);let t={},i=l.createContext(t);function c(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);