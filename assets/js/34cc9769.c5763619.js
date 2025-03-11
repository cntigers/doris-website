"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["429539"],{843333:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"query-data/cte","title":"Common Table Expression","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-data/cte.md","sourceDirName":"query-data","slug":"/query-data/cte","permalink":"/docs/3.0/query-data/cte","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Common Table Expression","language":"en"},"sidebar":"docs","previous":{"title":"Window Function","permalink":"/docs/3.0/query-data/window-function"},"next":{"title":"Alias Function","permalink":"/docs/3.0/query-data/udf/alias-function"}}'),r=n("785893"),a=n("250065");let i={title:"Common Table Expression",language:"en"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Simple CTE",id:"simple-cte",level:3},{value:"Nested CTE",id:"nested-cte",level:3},{value:"Recursive CTE (NOT Support)",id:"recursive-cte-not-support",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Common Table Expression (CTE) define a temporary result set that can be referenced multiple times within the scope of an SQL statement. CTEs are primarily used in SELECT statements."}),"\n",(0,r.jsxs)(t.p,{children:["To specify a CTE, use the ",(0,r.jsx)(t.code,{children:"WITH"})," clause with one or more comma-separated clauses. Each clause provides a subquery that generates a result set and associates a name with the subquery."]}),"\n",(0,r.jsxs)(t.p,{children:["Doris supports nested CTE. Within the statement that contains the ",(0,r.jsx)(t.code,{children:"WITH"})," clause, you can reference each CTE name to access the corresponding CTE result set. CTE names can be referenced in other CTE, allowing you to define CTE based on other CTE."]}),"\n",(0,r.jsxs)(t.p,{children:["Doris ",(0,r.jsx)(t.strong,{children:"DOES NOT"})," support recursive CTE. For more information, please read MySQL manual about ",(0,r.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.4/en/with.html#common-table-expressions-recursive",children:"recursive CTE"})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.h3,{id:"simple-cte",children:"Simple CTE"}),"\n",(0,r.jsx)(t.p,{children:"The following example defines CTE named cte1 and cte2 within the WITH clause and refers to them in the top-level SELECT below the WITH clause:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"WITH\n  cte1 AS (SELECT a, b FROM table1),\n  cte2 AS (SELECT c, d FROM table2)\nSELECT b, d FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"nested-cte",children:"Nested CTE"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"WITH\n  cte1 AS (SELECT a, b FROM table1),\n  cte2 AS (SELECT c, d FROM cte1)\nSELECT b, d FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"recursive-cte-not-support",children:"Recursive CTE (NOT Support)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"WITH r_cte AS (\n  SELECT 1 AS user_id, 2 as manager_id\n  UNION ALL\n  SELECT user_id, manager_id FROM r_cte INNER JOIN (SELECT 1 AS user_id, 2 as manager_id) t ON r_cte.manager_id = t.user_id\n)\nSELECT * FROM r_cte\n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var s=n(667294);let r={},a=s.createContext(r);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);