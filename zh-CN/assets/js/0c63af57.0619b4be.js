"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["891768"],{691354:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state","title":"to_quantile_state","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/quantile-functions","slug":"/sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"to_quantile_state","language":"zh-CN"},"sidebar":"docs","previous":{"title":"g","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/other-functions/g"},"next":{"title":"quantile_percent","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent"}}'),a=t("785893"),i=t("250065");let l={title:"to_quantile_state",language:"zh-CN"},r=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:["\u6B64\u51FD\u6570\u5C06\u6570\u503C\u7C7B\u578B\u8F6C\u5316\u6210 ",(0,a.jsx)(e.code,{children:"QUANTILE_STATE"})," \u7C7B\u578B\u3002 compression \u53C2\u6570\u662F\u53EF\u9009\u9879\uFF0C\u53EF\u8BBE\u7F6E\u8303\u56F4\u662F[2048, 10000]\uFF0C\u503C\u8D8A\u5927\uFF0C\u540E\u7EED\u5206\u4F4D\u6570\u8FD1\u4F3C\u8BA1\u7B97\u7684\u7CBE\u5EA6\u8D8A\u9AD8\uFF0C\u5185\u5B58\u6D88\u8017\u8D8A\u5927\uFF0C\u8BA1\u7B97\u8017\u65F6\u8D8A\u957F\u3002 compression \u53C2\u6570\u672A\u6307\u5B9A\u6216\u8BBE\u7F6E\u7684\u503C\u5728[2048, 10000]\u8303\u56F4\u5916\uFF0C\u4EE5 2048 \u7684\u9ED8\u8BA4\u503C\u8FD0\u884C"]}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"TO_QUANTILE_STATE(<raw_data> <compression>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<raw_data>"})}),(0,a.jsx)(e.td,{children:"\u76EE\u6807\u5217\u3002"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<compression>"})}),(0,a.jsx)(e.td,{children:"\u538B\u7F29\u9608\u503C\u3002"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(e.p,{children:["\u8F6C\u6362\u4E4B\u540E\u7684 ",(0,a.jsx)(e.code,{children:"QUANTILE_STATE"})," \u7C7B\u578B\u7684\u5217\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS ${tableName_21} (\n         `dt` int(11) NULL COMMENT "",\n         `id` int(11) NULL COMMENT "",\n         `price` quantile_state QUANTILE_UNION NOT NULL COMMENT ""\n        ) ENGINE=OLAP\n        AGGREGATE KEY(`dt`, `id`)\n        COMMENT "OLAP"\n        DISTRIBUTED BY HASH(`dt`) BUCKETS 1\n        PROPERTIES ("replication_num" = "1");\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,0, to_quantile_state(1, 2048));\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,1, to_quantile_state(-1, 2048)),\n            (20220201,1, to_quantile_state(0, 2048)),(20220201,1, to_quantile_state(1, 2048)),\n            (20220201,1, to_quantile_state(2, 2048)),(20220201,1, to_quantile_state(3, 2048));\n\nSELECT dt, id, quantile_percent(quantile_union(price), 0) FROM quantile_state_agg_test GROUP BY dt, id ORDER BY dt, id\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+----------+------+--------------------------------------------+\n| dt       | id   | quantile_percent(quantile_union(price), 0) |\n+----------+------+--------------------------------------------+\n| 20220201 |    0 |                                          1 |\n| 20220201 |    1 |                                         -1 |\n+----------+------+--------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);