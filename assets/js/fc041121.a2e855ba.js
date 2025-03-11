"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["985218"],{929101:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","title":"PMOD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/pmod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PMOD","language":"en"},"sidebar":"docs","previous":{"title":"TANH","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/tanh"},"next":{"title":"ROUND","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/round"}}'),l=s("785893"),r=s("250065");let i={title:"PMOD",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Returns the smallest positive solution of the modulo operation x mod y within the modular system, which is obtained by calculating (x % y + y) % y."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"PMOD(<x> , <y>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<x>"})}),(0,l.jsx)(e.td,{children:"Dividend"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<y>"})}),(0,l.jsx)(e.td,{children:"Divisor  should not be 0"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,l.jsx)(e.p,{children:"Returns an integer or a floating-point number. Special cases:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"If x = 0, returns 0."}),"\n",(0,l.jsx)(e.li,{children:"If x is NULL or y is NULL, returns NULL."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(13,5);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(-13,5);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------+\n| pmod(-13, 5) |\n+--------------+\n|            2 |\n+--------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(0,-12);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------+\n| pmod(0, -12) |\n+--------------+\n|            0 |\n+--------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT PMOD(0,null);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------+\n| pmod(cast(0 as DOUBLE), NULL) |\n+-------------------------------+\n|                          NULL |\n+-------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);