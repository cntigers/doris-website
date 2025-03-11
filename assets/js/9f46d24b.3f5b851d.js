"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["169883"],{201351:function(n,e,l){l.r(e),l.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/ln","title":"LN","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ln.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/ln","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ln","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LN","language":"en"},"sidebar":"docs","previous":{"title":"LOG10","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/log10"},"next":{"title":"CEIL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ceil"}}'),t=l("785893"),a=l("250065");let r={title:"LN",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["Returns the natural logarithm of ",(0,t.jsx)(e.code,{children:"x"})," to base ",(0,t.jsx)(e.code,{children:"e"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"DLOG1"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"LN(<x>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<x>"})}),(0,t.jsx)(e.td,{children:"Antilogarithm should be greater than 0"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(e.p,{children:"Return a float-point number. Special cases:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"If x IS NULL, return NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select ln(1);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------+\n| ln(cast(1 as DOUBLE)) |\n+-----------------------+\n|                   0.0 |\n+-----------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select ln(e());\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------+\n| ln(e()) |\n+---------+\n|     1.0 |\n+---------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select ln(10);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| ln(cast(10 as DOUBLE)) |\n+------------------------+\n|      2.302585092994046 |\n+------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return r}});var s=l(667294);let t={},a=s.createContext(t);function r(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);