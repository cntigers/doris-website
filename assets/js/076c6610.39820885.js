"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["604641"],{562583:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-avg","title":"ARRAY_AVG","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-avg.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-avg","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-avg","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_AVG","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_FILTER","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-filter"},"next":{"title":"ARRAY_SUM","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-sum"}}'),t=a("785893"),s=a("250065");let l={title:"ARRAY_AVG",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Get the average of all elements in an array (",(0,t.jsx)(n.code,{children:"NULL"})," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,t.jsx)(n.code,{children:"NULL"})," values, the function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_AVG(<arr>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<arr>"})}),(0,t.jsx)(n.td,{children:"The array to calculate the average values from"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a constant. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NULL"})," values in the array will be skipped."]}),"\n",(0,t.jsx)(n.li,{children:"Strings and varchar in the array will be skipped."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table array_type_table(\n    k1 INT, \n    k2 Array<int>\n) \nduplicate key (k1)\ndistributed by hash(k1) buckets 1 \nproperties(\n    'replication_num' = '1'\n);\ninsert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nselect k2, array_avg(k2) from array_type_table;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------------+-----------------+\n| k2           | array_avg(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               2 |\n| [1, NULL, 3] |               2 |\n+--------------+-----------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select array_avg(['test',2,1,null]);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------+\n| array_avg(cast(['test', '2', '1', NULL] as ARRAY<DOUBLE>)) |\n+------------------------------------------------------------+\n|                                                        1.5 |\n+------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var r=a(667294);let t={},s=r.createContext(t);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);