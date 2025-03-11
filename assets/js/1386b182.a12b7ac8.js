"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["492145"],{193476:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","title":"quantile_percent","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/quantile-functions","slug":"/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"quantile_percent","language":"en"},"sidebar":"docs","previous":{"title":"to_quantile_state","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state"},"next":{"title":"quantile_state_empty","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-state-empty"}}'),i=t("785893"),s=t("250065");let l={title:"quantile_percent",language:"en"},r=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"QUANTILE_PERCENT"})," function is used to calculate the quantile value for a given percentage. It takes two parameters: a quantile_state column and a constant floating-point number representing the percentage. The function returns a floating-point number that represents the quantile value at the given percentage position."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"QUANTILE_PERCENT(<quantile_state>, <percent>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<quantile_state>"})}),(0,i.jsx)(n.td,{children:"The target column."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<percent>"})}),(0,i.jsx)(n.td,{children:"Target percent."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"Double"})," type to represent quantile."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS quantile_state_agg_test (\n         `dt` int(11) NULL COMMENT "",\n         `id` int(11) NULL COMMENT "",\n         `price` quantile_state QUANTILE_UNION NOT NULL COMMENT ""\n        ) ENGINE=OLAP\n        AGGREGATE KEY(`dt`, `id`)\n        COMMENT "OLAP"\n        DISTRIBUTED BY HASH(`dt`) BUCKETS 1\n        PROPERTIES ("replication_num" = "1");\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,0, to_quantile_state(1, 2048));\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,1, to_quantile_state(-1, 2048)),\n            (20220201,1, to_quantile_state(0, 2048)),(20220201,1, to_quantile_state(1, 2048)),\n            (20220201,1, to_quantile_state(2, 2048)),(20220201,1, to_quantile_state(3, 2048));\n\nSELECT dt, id, quantile_percent(quantile_union(price), 0) FROM quantile_state_agg_test GROUP BY dt, id ORDER BY dt, id\n'})}),"\n",(0,i.jsx)(n.p,{children:"Result is"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------+------+--------------------------------------------+\n| dt       | id   | quantile_percent(quantile_union(price), 0) |\n+----------+------+--------------------------------------------+\n| 20220201 |    0 |                                          1 |\n| 20220201 |    1 |                                         -1 |\n+----------+------+--------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var a=t(667294);let i={},s=a.createContext(i);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);