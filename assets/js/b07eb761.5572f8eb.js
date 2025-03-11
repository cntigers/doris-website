"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["815614"],{739447:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/topn","title":"TOPN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/topn.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/topn","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TOPN","language":"en"},"sidebar":"docs","previous":{"title":"CORR","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/corr"},"next":{"title":"TOPN_ARRAY","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn-array"}}'),r=t("785893"),a=t("250065");let i={title:"TOPN",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The TOPN function returns the N most frequent values in the specified column. It is an approximate calculation function that returns results ordered by count in descending order."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TOPN(<expr>, <top_num> [, <space_expand_rate>])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr>"})}),(0,r.jsx)(n.td,{children:"The column or expression to be counted."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<top_num>"})}),(0,r.jsx)(n.td,{children:"The number of the most frequent values to return. It must be a positive integer."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<space_expand_rate>"})}),(0,r.jsxs)(n.td,{children:["Optional parameter, which is used to set the number of counters used in the Space-Saving algorithm. ",(0,r.jsx)(n.code,{children:"counter_numbers = top_num * space_expand_rate"})," , the larger the value of space_expand_rate, the more accurate the result, and the default value is 50."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a JSON string containing values and their corresponding occurrence counts."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Create sample table\nCREATE TABLE page_visits (\n    page_id INT,\n    user_id INT,\n    visit_date DATE\n) DISTRIBUTED BY HASH(page_id)\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\n-- Insert test data\nINSERT INTO page_visits VALUES\n(1, 101, '2024-01-01'),\n(2, 102, '2024-01-01'),\n(1, 103, '2024-01-01'),\n(3, 101, '2024-01-01'),\n(1, 104, '2024-01-01'),\n(2, 105, '2024-01-01'),\n(1, 106, '2024-01-01'),\n(4, 107, '2024-01-01');\n\n-- Find top 3 most visited pages\nSELECT TOPN(page_id, 3) as top_pages\nFROM page_visits;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+---------------------+\n| top_pages           |\n+---------------------+\n| {"1":4,"2":2,"4":1} |\n+---------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);