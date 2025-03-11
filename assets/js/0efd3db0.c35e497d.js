"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["168998"],{333319:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/grouping","title":"GROUPING","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/grouping.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/grouping","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/grouping","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"GROUPING","language":"en"},"sidebar":"docs","previous":{"title":"HLL_UNION_AGG","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/hll-union-agg"},"next":{"title":"GROUPING_ID","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/grouping-id"}}'),r=t("785893"),s=t("250065");let i={title:"GROUPING",language:"en"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether a specified column expression in a GROUP BY list is aggregated or not. GROUPING returns 1 if the column is aggregated (i.e., coming from a summary row generated by ROLLUP, CUBE, or GROUPING SETS) and 0 if it is not aggregated. This function is useful for distinguishing the NULL values produced by these operations from actual NULL values in the data."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GROUPING( <column_expression> )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<column_expression>"})}),(0,r.jsx)(n.td,{children:"A column or an expression that appears in the GROUP BY clause."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a BIGINT value. The function returns 1 if the specified column expression is aggregated and 0 if it is not."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["The following example groups the ",(0,r.jsx)(n.code,{children:"camp"})," column and aggregates the count of ",(0,r.jsx)(n.code,{children:"occupation"}),". The GROUPING function is applied to the ",(0,r.jsx)(n.code,{children:"camp"})," column to differentiate between the summary row added by the ROLLUP operation and actual NULL values in the data."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `roles` (\n  role_id       INT,\n  occupation    VARCHAR(32),\n  camp          VARCHAR(32),\n  register_time DATE\n)\nUNIQUE KEY(role_id)\nDISTRIBUTED BY HASH(role_id) BUCKETS 1\nPROPERTIES (\n  \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\nINSERT INTO `roles` VALUES\n(0, 'who am I', NULL, NULL),\n(1, 'mage', 'alliance', '2018-12-03 16:11:28'),\n(2, 'paladin', 'alliance', '2018-11-30 16:11:28'),\n(3, 'rogue', 'horde', '2018-12-01 16:11:28'),\n(4, 'priest', 'alliance', '2018-12-02 16:11:28'),\n(5, 'shaman', 'horde', NULL),\n(6, 'warrior', 'alliance', NULL),\n(7, 'warlock', 'horde', '2018-12-04 16:11:28'),\n(8, 'hunter', 'horde', NULL);\n\nSELECT \n  camp, \n  COUNT(occupation) AS occ_cnt,\n  GROUPING(camp) AS grouping\nFROM\n  `roles`\nGROUP BY\n  ROLLUP(camp);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result set shows two NULL values under the ",(0,r.jsx)(n.code,{children:"camp"})," column. The first NULL, with a grouping value of 1, is the summary row added by the ROLLUP operation representing the aggregate of all ",(0,r.jsx)(n.code,{children:"camp"})," groups. The second NULL, with a grouping value of 0, represents an actual NULL value from the data."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------+---------+----------+\n| camp     | occ_cnt | grouping |\n+----------+---------+----------+\n| NULL     |       9 |        1 |\n| NULL     |       1 |        0 |\n| alliance |       4 |        0 |\n| horde    |       4 |        0 |\n+----------+---------+----------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);