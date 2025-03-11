"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["24083"],{57908:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/fmod","title":"FMOD","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/fmod.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/fmod","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/fmod","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FMOD","language":"en"},"sidebar":"docs","previous":{"title":"FLOOR","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/floor"},"next":{"title":"MONEY_FORMAT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/money-format"}}'),l=t("785893"),r=t("250065");let i={title:"FMOD",language:"en"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Find the remainder of a / b for the floating-point type. For the integer type, please use the mod function."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MOD(<col_a> , <col_b>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<col_a>"})}),(0,l.jsx)(e.td,{children:"Dividend"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<col_b>"})}),(0,l.jsx)(e.td,{children:"Divisor should not be 0"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,l.jsx)(e.p,{children:"Return a float-point type. Special cases:"}),"\n",(0,l.jsx)(e.p,{children:"If col_a IS NULL or col_b IS NULL, return NULL."}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select fmod(10.1, 3.2);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------+\n| fmod(10.1, 3.2) |\n+-----------------+\n|      0.50000024 |\n+-----------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select fmod(10.1, 0);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------+\n| fmod(10.1, 0) |\n+---------------+\n|          NULL |\n+---------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);