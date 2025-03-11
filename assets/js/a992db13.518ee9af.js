"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["532781"],{161359:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash","title":"HLL_HASH","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/hll-functions","slug":"/sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-hash","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HLL_HASH","language":"en"},"sidebar":"docs","previous":{"title":"HLL_FROM_BASE64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-from-base64"},"next":{"title":"hll-to-base64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-to-base64"}}'),l=t("785893"),a=t("250065");let i={title:"HLL_HASH",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Converts a given value to the HLL (HyperLogLog) type. This function is typically used during data loading to create an HLL from raw data."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"HLL_HASH(<value>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<value>"})}),(0,l.jsx)(e.td,{children:"The value to be converted to HLL type. This can be a string, number, or any data type."})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT HLL_CARDINALITY(HLL_HASH('abc'));\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------------------+\n| hll_cardinality(HLL_HASH('abc')) |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);