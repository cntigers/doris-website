"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["989018"],{309419:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","title":"quantile_percent","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/quantile-functions","slug":"/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-percent","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"quantile_percent","language":"zh-CN"},"sidebar":"docs","previous":{"title":"to_quantile_state","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/to-quantile-state"},"next":{"title":"quantile_state_empty","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/quantile-functions/quantile-state-empty"}}'),s=t("785893"),i=t("250065");let l={title:"quantile_percent",language:"zh-CN"},r=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"QUANTILE_PERCENT"})," \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u7ED9\u5B9A\u767E\u5206\u6BD4\u7684\u5206\u4F4D\u6570\u503C\u3002\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u4E00\u4E2A quantile_state \u5217\u548C\u4E00\u4E2A\u8868\u793A\u767E\u5206\u6BD4\u7684\u5E38\u91CF\u6D6E\u70B9\u6570\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u7ED9\u5B9A\u767E\u5206\u6BD4\u4F4D\u7F6E\u7684\u5206\u4F4D\u6570\u503C\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"QUANTILE_PERCENT(<quantile_state>, <percent>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<quantile_state>"})}),(0,s.jsx)(e.td,{children:"\u76EE\u6807\u5217\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<percent>"})}),(0,s.jsx)(e.td,{children:"\u76EE\u6807\u767E\u5206\u6BD4\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD4\u56DE\u4E00\u4E2A ",(0,s.jsx)(e.code,{children:"Double"})," \u7C7B\u578B\u7684\u5206\u4F4D\u6570\u503C\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS quantile_state_agg_test (\n         `dt` int(11) NULL COMMENT "",\n         `id` int(11) NULL COMMENT "",\n         `price` quantile_state QUANTILE_UNION NOT NULL COMMENT ""\n        ) ENGINE=OLAP\n        AGGREGATE KEY(`dt`, `id`)\n        COMMENT "OLAP"\n        DISTRIBUTED BY HASH(`dt`) BUCKETS 1\n        PROPERTIES ("replication_num" = "1");\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,0, to_quantile_state(1, 2048));\n\nINSERT INTO quantile_state_agg_test VALUES(20220201,1, to_quantile_state(-1, 2048)),\n            (20220201,1, to_quantile_state(0, 2048)),(20220201,1, to_quantile_state(1, 2048)),\n            (20220201,1, to_quantile_state(2, 2048)),(20220201,1, to_quantile_state(3, 2048));\n\nSELECT dt, id, quantile_percent(quantile_union(price), 0) FROM quantile_state_agg_test GROUP BY dt, id ORDER BY dt, id\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------+------+--------------------------------------------+\n| dt       | id   | quantile_percent(quantile_union(price), 0) |\n+----------+------+--------------------------------------------+\n| 20220201 |    0 |                                          1 |\n| 20220201 |    1 |                                         -1 |\n+----------+------+--------------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var a=t(667294);let s={},i=a.createContext(s);function l(n){let e=a.useContext(i);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);