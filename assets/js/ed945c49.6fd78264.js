"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["357817"],{202592:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/conditional-functions/ifnull","title":"IFNULL","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/conditional-functions/ifnull.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/conditional-functions","slug":"/sql-manual/sql-functions/scalar-functions/conditional-functions/ifnull","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/ifnull","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IFNULL","language":"en"},"sidebar":"docs","previous":{"title":"NOT_NULL_OR_EMPTY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/not-null-or-empty"},"next":{"title":"NULLIF","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/nullif"}}'),i=s("785893"),t=s("250065");let r={title:"IFNULL",language:"en"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["Returns ",(0,i.jsx)(e.code,{children:"<expr1>"})," if it is not ",(0,i.jsx)(e.code,{children:"NULL"}),"; otherwise, returns ",(0,i.jsx)(e.code,{children:"<expr2>"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"NVL"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IFNULL(<expr1>, <expr2>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<expr1>"})}),(0,i.jsxs)(e.td,{children:["The first expression to check for ",(0,i.jsx)(e.code,{children:"NULL"}),"."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<expr2>"})}),(0,i.jsxs)(e.td,{children:["The value to return if ",(0,i.jsx)(e.code,{children:"<expr1>"})," is ",(0,i.jsx)(e.code,{children:"NULL"}),"."]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Returns ",(0,i.jsx)(e.code,{children:"<expr1>"})," if it is not ",(0,i.jsx)(e.code,{children:"NULL"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Otherwise, returns ",(0,i.jsx)(e.code,{children:"<expr2>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT IFNULL(1, 0);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------------+\n| IFNULL(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT IFNULL(NULL, 10);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------------+\n| IFNULL(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var l=s(667294);let i={},t=l.createContext(i);function r(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);