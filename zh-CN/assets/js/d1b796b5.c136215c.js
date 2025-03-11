"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["878943"],{807931:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","title":"PMOD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PMOD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TANH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/tanh"},"next":{"title":"ROUND","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/round"}}'),c=s("785893"),t=s("250065");let i={title:"PMOD",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u6A21\u8FD0\u7B97 x mod y \u5728\u6A21\u7CFB\u4E2D\u7684\u6700\u5C0F\u6B63\u6570\u89E3\uFF0C\u5373\u901A\u8FC7\u8BA1\u7B97 (x % y + y) % y \u5F97\u51FA\u7ED3\u679C\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"PMOD(<x> , <y>)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<x>"})}),(0,c.jsx)(e.td,{children:"\u88AB\u9664\u6570"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<y>"})}),(0,c.jsx)(e.td,{children:"\u9664\u6570 \u4E0D\u80FD\u4E3A 0"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\u6216\u6D6E\u70B9\u6570\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5F53 x=0 \u65F6\uFF0C\u8FD4\u56DE 0\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u5F53 x is NULL \u6216 y is NULL \u65F6\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(13,5);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(-13,5);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------+\n| pmod(-13, 5) |\n+--------------+\n|            2 |\n+--------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(0,-12);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------+\n| pmod(0, -12) |\n+--------------+\n|            0 |\n+--------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(0,null);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-------------------------------+\n| pmod(cast(0 as DOUBLE), NULL) |\n+-------------------------------+\n|                          NULL |\n+-------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);