"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["988754"],{762013:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/topn-weighted","title":"TOPN_WEIGHTED","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/topn-weighted.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/topn-weighted","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TOPN_WEIGHTED","language":"en"},"sidebar":"docs","previous":{"title":"TOPN_ARRAY","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/topn-array"},"next":{"title":"COUNT","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/count"}}'),r=t("785893"),a=t("250065");let i={title:"TOPN_WEIGHTED",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The TOPN_WEIGHTED function returns the N most frequent values in the specified column with weighted counting. Unlike the regular TOPN function, TOPN_WEIGHTED allows adjusting the importance of values through weights."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TOPN_WEIGHTED(<expr>, <weight>, <top_num> [, <space_expand_rate>])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr>"})}),(0,r.jsx)(n.td,{children:"The column or expression to be counted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<weight>"})}),(0,r.jsx)(n.td,{children:"The column or expression to adjust the weight"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<top_num>"})}),(0,r.jsx)(n.td,{children:"The number of the most frequent values to return. It must be a positive integer."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<space_expand_rate>"})}),(0,r.jsxs)(n.td,{children:["Optional, the value to set the counter_numbers used in the Space-Saving algorithm. ",(0,r.jsx)(n.code,{children:"counter_numbers = top_num * space_expand_rate"}),". The value of space_expand_rate should be greater than 1, and the default value is 50."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Return an array containing values and weighted counts."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- create example table\nCREATE TABLE product_sales (\n    product_id INT,\n    sale_amount DECIMAL(10,2),\n    sale_date DATE\n) DISTRIBUTED BY HASH(product_id)\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\n-- insert test data\nINSERT INTO product_sales VALUES\n(1, 100.00, '2024-01-01'),\n(2, 50.00, '2024-01-01'),\n(1, 150.00, '2024-01-01'),\n(3, 75.00, '2024-01-01'),\n(1, 200.00, '2024-01-01'),\n(2, 80.00, '2024-01-01'),\n(1, 120.00, '2024-01-01'),\n(4, 90.00, '2024-01-01');\n\n-- find the top 3 products with highest sales amount\nSELECT TOPN_WEIGHTED(product_id, sale_amount, 3) as top_products\nFROM product_sales;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------+\n| top_products |\n+--------------+\n| [1, 2, 4]    |\n+--------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);