"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875181"],{76974:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-position","title":"ARRAY_POSITION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-position.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-position","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_POSITION","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_REVERSE_SPLIT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-reverse-split"},"next":{"title":"ARRAY_CONTAINS","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-contains"}}'),t=r("785893"),s=r("250065");let i={title:"ARRAY_POSITION",language:"en"},l=void 0,c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,t.jsxs)(e.p,{children:["Returns a position/index of first occurrence of the ",(0,t.jsx)(e.code,{children:"value"})," in the given array."]}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"ARRAY_POSITION(<arr>, <value>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<arr>"})}),(0,t.jsx)(e.td,{children:"ARRAY array"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<value>"})}),(0,t.jsx)(e.td,{children:"Element to search for"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(e.p,{children:"The position of the value in the array (starting from 1). Special cases:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"0, if the value does not exist in the array."}),"\n",(0,t.jsx)(e.li,{children:"NULL, if the array is NULL."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_test (\n                            id INT,\n                            c_array ARRAY<INT>,\n                            array_position INT\n)\nduplicate key (id)\ndistributed by hash(id) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_test (id, c_array, array_position) VALUES\n                                                         (1, [1, 2, 3, 4, 5], 5),\n                                                         (2, [6, 7, 8], 0),\n                                                         (3, [], 0),\n                                                         (4, NULL, NULL);\nSELECT id,c_array,array_position(c_array, 5) FROM `array_test`;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------+-----------------+------------------------------+\n| id   | c_array         | array_position(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            5 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select array_position([1, null], null);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------------------------------------+\n| array_position(ARRAY(1, NULL), NULL) |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);