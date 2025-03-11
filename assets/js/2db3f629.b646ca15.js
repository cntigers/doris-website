"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875096"],{371838:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","title":"WIDTH_BUCKET","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/width-bucket","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WIDTH_BUCKET","language":"en"},"sidebar":"docs","previous":{"title":"UUID_NUMERIC","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/uuid_numeric"},"next":{"title":"TO_BASE64","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/to-base64"}}'),l=t("785893"),i=t("250065");let r={title:"WIDTH_BUCKET",language:"en"},a=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Construct an equal-width histogram, where the histogram range is divided into equal-sized intervals, and after calculation, return the bucket number where the value of the expression falls. Special cases:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The function returns an integer value or NULL (if any input is NULL, it will return NULL)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"WIDTH_BUCKET(<expr>, <min_value>, <max_value>, <num_buckets>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsxs)(n.td,{children:["The expression for creating the histogram. This expression must evaluate to a numeric value or a value that can be implicitly converted to a numeric value. The value's range must be from ",(0,l.jsx)(n.code,{children:"-(2^53 - 1)"})," to ",(0,l.jsx)(n.code,{children:"2^53 - 1"})," (inclusive)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<min_value>"})}),(0,l.jsxs)(n.td,{children:["The lowest value point of the acceptable range for the expression. The parameter must be numeric and not equal to ",(0,l.jsx)(n.code,{children:"<max_value>"}),". The range must be from ",(0,l.jsx)(n.code,{children:"-(2^53 - 1)"})," to ",(0,l.jsx)(n.code,{children:"2^53 - 1"})," (inclusive). Additionally, the difference between the highest and lowest value points must be less than ",(0,l.jsx)(n.code,{children:"2^53"})," (for example: ",(0,l.jsx)(n.code,{children:"abs(max_value - min_value) < 2^53)"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<max_value>"})}),(0,l.jsxs)(n.td,{children:["The highest value point of the acceptable range for the expression. The parameter must be numeric and not equal to ",(0,l.jsx)(n.code,{children:"<min_value>"}),". The range must be from ",(0,l.jsx)(n.code,{children:"-(2^53 - 1)"})," to ",(0,l.jsx)(n.code,{children:"2^53 - 1"})," (inclusive). Additionally, the difference between the highest and lowest value points must be less than ",(0,l.jsx)(n.code,{children:"2^53"})," (for example: ",(0,l.jsx)(n.code,{children:"abs(max_value - min_value) < 2^53)"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<num_buckets>"})}),(0,l.jsx)(n.td,{children:"The number of buckets. It must be a positive integer. The function assigns a value from the expression to each bucket and returns the corresponding bucket number"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Return the bucket number where the expression value falls. The function returns the following rules when the expression is out of range:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If the value of the expression is less than ",(0,l.jsx)(n.code,{children:"min_value"}),", return 0."]}),"\n",(0,l.jsxs)(n.li,{children:["If the value of the expression is greater than or equal to max_value, return ",(0,l.jsx)(n.code,{children:"num_buckets + 1"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["If any parameter is ",(0,l.jsx)(n.code,{children:"null"}),", return ",(0,l.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'DROP TABLE IF EXISTS width_bucket_test;\n\nCREATE TABLE IF NOT EXISTS width_bucket_test (\n`k1` int NULL COMMENT "",\n`v1` date NULL COMMENT "",\n`v2` double NULL COMMENT "",\n`v3` bigint NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`)\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2"\n);\n\nINSERT INTO width_bucket_test VALUES  \n(1, "2022-11-18", 290000.00, 290000),\n(2, "2023-11-18", 320000.00, 320000),\n(3, "2024-11-18", 399999.99, 399999), \n(4, "2025-11-18", 400000.00, 400000), \n(5, "2026-11-18", 470000.00, 470000), \n(6, "2027-11-18", 510000.00, 510000), \n(7, "2028-11-18", 610000.00, 610000), \n(8, null, null, null);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM width_bucket_test ORDER BY k1;                                      \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------------+-----------+--------+\n| k1   | v1         | v2        | v3     |\n+------+------------+-----------+--------+\n|    1 | 2022-11-18 |    290000 | 290000 |\n|    2 | 2023-11-18 |    320000 | 320000 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |\n|    4 | 2025-11-18 |    400000 | 400000 |\n|    5 | 2026-11-18 |    470000 | 470000 |\n|    6 | 2027-11-18 |    510000 | 510000 |\n|    7 | 2028-11-18 |    610000 | 610000 |\n|    8 | NULL       |      NULL |   NULL |\n+------+------------+-----------+--------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v1, date('2023-11-18'), date('2027-11-18'), 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    0 |\n|    2 | 2023-11-18 |    320000 | 320000 |    1 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    4 |\n|    6 | 2027-11-18 |    510000 | 510000 |    5 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v2, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT k1, v1, v2, v3, width_bucket(v3, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);