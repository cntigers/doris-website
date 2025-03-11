"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["965669"],{280324:function(n,e,l){l.r(e),l.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","title":"HLL_FROM_BASE64","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/hll-functions","slug":"/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HLL_FROM_BASE64","language":"en"},"sidebar":"docs","previous":{"title":"HLL_EMPTY","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-empty"},"next":{"title":"HLL_HASH","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash"}}'),t=l("785893"),a=l("250065");let r={title:"HLL_FROM_BASE64",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["Converts a base64-encoded string (usually the result of the ",(0,t.jsx)(e.code,{children:"HLL_TO_BASE64"})," function) into an HLL. If the input string is invalid or NULL, the function returns NULL."]}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"HLL_FROM_BASE64(<input>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<input>"})}),(0,t.jsxs)(e.td,{children:["A base64-encoded string, typically generated by the ",(0,t.jsx)(e.code,{children:"HLL_TO_BASE64"})," function. If the input string is invalid or NULL, the function returns NULL."]})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select hll_union_agg(hll_from_base64(hll_to_base64(pv))), hll_union_agg(pv) from test_hll;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------+-------------------+\n| hll_union_agg(hll_from_base64(hll_to_base64(pv))) | hll_union_agg(pv) |\n+---------------------------------------------------+-------------------+\n|                                                 3 |                 3 |\n+---------------------------------------------------+-------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc'))));\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc')))) |\n+------------------------------------------------------------------+\n|                                                                1 |\n+------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(''))));\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('')))) |\n+---------------------------------------------------------------+\n|                                                             1 |\n+---------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL))));\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL)))) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return r}});var s=l(667294);let t={},a=s.createContext(t);function r(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);