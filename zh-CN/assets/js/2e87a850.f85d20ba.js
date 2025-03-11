"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["736460"],{868564:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/mod","title":"MOD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/numeric-functions/mod.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/mod","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/mod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MOD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RANDOM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/random"},"next":{"title":"NORMAL_CDF","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/normal-cdf"}}'),c=s("785893"),t=s("250065");let i={title:"MOD",language:"zh-CN"},r=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u6C42\u6574\u6570\u7C7B\u578B\uFF0Ca / b \u7684\u4F59\u6570\uFF0C\u6D6E\u70B9\u7C7B\u578B\u8BF7\u4F7F\u7528 fmod \u51FD\u6570\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"MOD(<col_a> , <col_b>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<col_a>"})}),(0,c.jsx)(e.td,{children:"\u88AB\u9664\u6570"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<col_b>"})}),(0,c.jsx)(e.td,{children:"\u9664  \u6570 \u4E0D\u80FD\u4E3A 0"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5F53 col_a \u4E3A ",(0,c.jsx)(e.code,{children:"NULL"})," \u6216 col_b \u4E3A ",(0,c.jsx)(e.code,{children:"NULL"}),"\u65F6\uFF0C\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"NULL"})]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select mod(10, 3);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+----------+\n| (10 % 3) |\n+----------+\n|        1 |\n+----------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select mod(10, 0);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+----------+\n| (10 % 0) |\n+----------+\n|     NULL |\n+----------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);