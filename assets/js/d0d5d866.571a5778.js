"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["389526"],{888145:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3sum","title":"SM3SUM","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3sum.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3sum","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3sum","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SM3SUM","language":"en"},"sidebar":"docs","previous":{"title":"SM3","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sm3"},"next":{"title":"SHA1","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/sha"}}'),l=t("785893"),a=t("250065");let r={title:"SM3SUM",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Calculate multiple strings SM3 256-bit"}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SM3SUM( <str> [ , <str> ... ] )\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"parameter"}),(0,l.jsx)(n.th,{children:"description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<str>"})}),(0,l.jsx)(n.td,{children:"The value of sm3 that needs to be calculated"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns the sm3 value of the input multiple strings"}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select sm3sum("ab","cd");\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------+\n| sm3sum('ab', 'cd')                                               |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);