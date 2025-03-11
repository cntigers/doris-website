"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["254506"],{946454:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>l,assets:()=>i,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/log2","title":"LOG2","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/log2.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/log2","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log2","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LOG2","language":"en"},"sidebar":"docs","previous":{"title":"LOG","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log"},"next":{"title":"LOG10","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/log10"}}'),t=s("785893"),r=s("250065");let a={title:"LOG2",language:"en"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["Returns the natural logarithm of ",(0,t.jsx)(e.code,{children:"x"})," to base ",(0,t.jsx)(e.code,{children:"2"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"LOG2(<x>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<x>"})}),(0,t.jsx)(e.td,{children:"Antilogarithm should be greater than 0"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(e.p,{children:"Returns a floating-point number."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["If x IS NULL: return ",(0,t.jsx)(e.code,{children:"NULL"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select log2(1);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| log2(cast(1 as DOUBLE)) |\n+-------------------------+\n|                     0.0 |\n+-------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select log2(2);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| log2(cast(2 as DOUBLE)) |\n+-------------------------+\n|                     1.0 |\n+-------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select log2(10);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| log2(cast(10 as DOUBLE)) |\n+--------------------------+\n|       3.3219280948873626 |\n+--------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return a}});var l=s(667294);let t={},r=l.createContext(t);function a(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);