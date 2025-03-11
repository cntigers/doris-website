"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381662"],{812584:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/asin","title":"ASIN","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/asin.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/asin","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/asin","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ASIN","language":"en"},"sidebar":"docs","previous":{"title":"TAN","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/tan"},"next":{"title":"ACOS","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/acos"}}'),t=s("785893"),c=s("250065");let l={title:"ASIN",language:"en"},r=void 0,o={},a=[{value:"asin",id:"asin",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"asin",children:"asin"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DOUBLE asin(DOUBLE x)"}),"\nReturns the arc sine of ",(0,t.jsx)(e.code,{children:"x"}),", or ",(0,t.jsx)(e.code,{children:"nan"})," if ",(0,t.jsx)(e.code,{children:"x"})," is not in the range ",(0,t.jsx)(e.code,{children:"-1"})," to ",(0,t.jsx)(e.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select asin(0.5);\n+---------------------+\n| asin(0.5)           |\n+---------------------+\n| 0.52359877559829893 |\n+---------------------+\nmysql> select asin(2);\n+-----------+\n| asin(2.0) |\n+-----------+\n|       nan |\n+-----------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ASIN\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return l}});var i=s(667294);let t={},c=i.createContext(t);function l(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);