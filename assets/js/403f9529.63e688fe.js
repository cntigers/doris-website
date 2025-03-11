"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["550955"],{254917:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/ifnull","title":"IFNULL","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/conditional-functions/ifnull.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/ifnull","permalink":"/docs/2.0/sql-manual/sql-functions/conditional-functions/ifnull","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"IFNULL","language":"en"},"sidebar":"docs","previous":{"title":"IF","permalink":"/docs/2.0/sql-manual/sql-functions/conditional-functions/if"},"next":{"title":"NVL","permalink":"/docs/2.0/sql-manual/sql-functions/conditional-functions/nvl"}}'),i=s("785893"),t=s("250065");let r={title:"IFNULL",language:"en"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"<expr1>"})," if it is not ",(0,i.jsx)(n.code,{children:"NULL"}),"; otherwise, returns ",(0,i.jsx)(n.code,{children:"<expr2>"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NVL"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"IFNULL(<expr1>, <expr2>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<expr1>"})}),(0,i.jsxs)(n.td,{children:["The first expression to check for ",(0,i.jsx)(n.code,{children:"NULL"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<expr2>"})}),(0,i.jsxs)(n.td,{children:["The value to return if ",(0,i.jsx)(n.code,{children:"<expr1>"})," is ",(0,i.jsx)(n.code,{children:"NULL"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"<expr1>"})," if it is not ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Otherwise, returns ",(0,i.jsx)(n.code,{children:"<expr2>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT IFNULL(1, 0);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+\n| IFNULL(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT IFNULL(NULL, 10);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------+\n| IFNULL(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var l=s(667294);let i={},t=l.createContext(i);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);