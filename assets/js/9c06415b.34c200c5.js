"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["384274"],{774710:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-difference","title":"ARRAY_DIFFERENCE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-difference.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-difference","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-difference","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_DIFFERENCE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_DISTINCT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-distinct"},"next":{"title":"ARRAY_UNION","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-union"}}'),a=r("785893"),s=r("250065");let l={title:"ARRAY_DIFFERENCE",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculates the difference between adjacent array elements.\nReturns an array where the first element will be 0, the second is the difference between a[1] - a[0].\nneed notice that NULL will be return NULL"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ARRAY_DIFFERENCE(<arr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<arr>"})}),(0,a.jsx)(n.td,{children:"The array to calculate the difference from"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns an array. Special cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If a NULL value exists in the input, the result will be NULL."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE array_type_table (\n   k1 INT,\n   k2 ARRAY<INT>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table (k1, k2) VALUES\n(0, []),\n(1, [NULL]),\n(2, [1, 2, 3]),\n(3, [1, NULL, 3]),\n(4, [0, 1, 2, 3, NULL, 4, 6]),\n(5, [1, 2, 3, 4, 5, 4, 3, 2, 1]),\n(6, [6, 7, 8]);\nselect *,array_difference(k2) from array_type_table;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------+-----------------------------+---------------------------------+\n| k1   | k2                          | array_difference(`k2`)          |\n+------+-----------------------------+---------------------------------+\n|    0 | []                          | []                              |\n|    1 | [NULL]                      | [NULL]                          |\n|    2 | [1, 2, 3]                   | [0, 1, 1]                       |\n|    3 | [1, NULL, 3]                | [0, NULL, NULL]                 |\n|    4 | [0, 1, 2, 3, NULL, 4, 6]    | [0, 1, 1, 1, NULL, NULL, 2]     |\n|    5 | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [0, 1, 1, 1, 1, -1, -1, -1, -1] |\n|    6 | [6, 7, 8]                   | [0, 1, 1]                       |\n+------+-----------------------------+---------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);