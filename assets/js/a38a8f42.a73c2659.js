"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["421647"],{275342:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","title":"BITMAP_HASH","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_HASH","language":"en"},"sidebar":"docs","previous":{"title":"TO_BITMAP","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap"},"next":{"title":"BITMAP_FROM_STRING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-string"}}'),a=t("785893"),i=t("250065");let r={title:"BITMAP_HASH",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Computes the 32-bit hash value of any input type and returns a Bitmap containing that hash value."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"BITMAP_HASH(<expr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<expr>"})}),(0,a.jsx)(n.td,{children:"Any value or field expression"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["Returns a Bitmap containing the 32-bit hash value of the parameter ",(0,a.jsx)(n.code,{children:"<expr>"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"::: note"}),"\n",(0,a.jsxs)(n.p,{children:["The hash algorithm used is MurMur3.",(0,a.jsx)(n.br,{}),"\nMurMur3 is a high-performance, low-collision hashing algorithm that produces values close to a random distribution and can pass chi-squared distribution tests. Note that the hash values computed may differ across different hardware platforms and seed values.",(0,a.jsx)(n.br,{}),"\nFor more details on the performance of this algorithm, see the ",(0,a.jsx)(n.a,{href:"http://rurban.github.io/smhasher/",children:"Smhasher"})," benchmark."]}),"\n",(0,a.jsx)(n.p,{children:":::"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"To compute the MurMur3 hash of a value, you can use:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_to_array(bitmap_hash('hello'))[1];\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To count the distinct values in a column using bitmaps, which can be more efficient than ",(0,a.jsx)(n.code,{children:"count distinct"})," in some scenarios:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);