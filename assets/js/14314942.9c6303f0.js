"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["40852"],{63670:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/conditional-functions/coalesce","title":"COALESCE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/conditional-functions/coalesce.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/conditional-functions","slug":"/sql-manual/sql-functions/scalar-functions/conditional-functions/coalesce","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/coalesce","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"COALESCE","language":"en"},"sidebar":"docs","previous":{"title":"quantile_state_empty","permalink":"/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-state-empty"},"next":{"title":"IF","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/if"}}'),l=t("785893"),a=t("250065");let i={title:"COALESCE",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Returns the first non-null expression from left to right in the parameter list. If all arguments are NULL, returns NULL."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"COALESCE(<expr> [, ...])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"A sequence of expressions to evaluate. All expressions must be compatible data types."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"The first non-null expression in the parameter list. Returns NULL if all arguments are NULL."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT COALESCE(NULL, '1111', '0000');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------------------+\n| coalesce(NULL, '1111', '0000') |\n+--------------------------------+\n| 1111                           |\n+--------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);