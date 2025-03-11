"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["194443"],{997305:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile-approx","title":"PERCENTILE_APPROX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile-approx.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile-approx","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-approx","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PERCENTILE_APPROX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PERCENTILE_ARRAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-array"},"next":{"title":"PERCENTILE_APPROX_WEIGHTED","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted"}}'),r=s("785893"),l=s("250065");let i={title:"PERCENTILE_APPROX",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PERCENTILE_APPROX"})," \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u8FD1\u4F3C\u767E\u5206\u4F4D\u6570\uFF0C\u4E3B\u8981\u7528\u4E8E\u5927\u6570\u636E\u96C6\u7684\u573A\u666F\u3002\u4E0E ",(0,r.jsx)(n.code,{children:"PERCENTILE"})," \u51FD\u6570\u76F8\u6BD4\uFF0C\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5185\u5B58\u6548\u7387\uFF1A\u4F7F\u7528\u56FA\u5B9A\u5927\u5C0F\u7684\u5185\u5B58\uFF0C\u5373\u4F7F\u5728\u5904\u7406\u9AD8\u57FA\u6570\u5217\uFF08\u6570\u636E\u91CF\u5F88\u5927\uFF09\u65F6\u4E5F\u80FD\u4FDD\u6301\u8F83\u4F4E\u7684\u5185\u5B58\u6D88\u8017"}),"\n",(0,r.jsx)(n.li,{children:"\u6027\u80FD\u4F18\u52BF\uFF1A\u9002\u5408\u5904\u7406\u5927\u89C4\u6A21\u6570\u636E\u96C6\uFF0C\u8BA1\u7B97\u901F\u5EA6\u5FEB"}),"\n",(0,r.jsx)(n.li,{children:"\u7CBE\u5EA6\u53EF\u8C03\uFF1A\u901A\u8FC7 compression \u53C2\u6570\u53EF\u4EE5\u5728\u7CBE\u5EA6\u548C\u6027\u80FD\u4E4B\u95F4\u505A\u5E73\u8861"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"PERCENTILE_APPROX(<col>, <p> [, <compression>])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<col>"})}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u8BA1\u7B97\u767E\u5206\u4F4D\u6570\u7684\u5217"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<p>"})}),(0,r.jsxs)(n.td,{children:["\u767E\u5206\u4F4D\u6570\u503C\uFF0C\u53D6\u503C\u8303\u56F4 ",(0,r.jsx)(n.code,{children:"[0.0, 1.0]"}),"\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.code,{children:"0.99"})," \u8868\u793A ",(0,r.jsx)(n.code,{children:"99"})," \u5206\u4F4D\u6570"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<compression>"})}),(0,r.jsxs)(n.td,{children:["\u53EF\u9009\u53C2\u6570\uFF0C\u538B\u7F29\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4 ",(0,r.jsx)(n.code,{children:"[2048, 10000]"}),"\u3002\u503C\u8D8A\u5927\uFF0C\u7CBE\u5EA6\u8D8A\u9AD8\uFF0C\u4F46\u5185\u5B58\u6D88\u8017\u4E5F\u8D8A\u5927\u3002\u5982\u679C\u4E0D\u6307\u5B9A\u6216\u8D85\u51FA\u8303\u56F4\uFF0C\u5219\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"10000"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"DOUBLE"})," \u7C7B\u578B\u7684\u503C\uFF0C\u8868\u793A\u8BA1\u7B97\u5F97\u5230\u7684\u8FD1\u4F3C\u767E\u5206\u4F4D\u6570\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE response_times (\n    request_id INT,\n    response_time DECIMAL(10, 2)\n) DUPLICATE KEY(`request_id`)\nDISTRIBUTED BY HASH(`request_id`) BUCKETS AUTO\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n\n-- \u63D2\u5165\u793A\u4F8B\u6570\u636E\nINSERT INTO response_times VALUES\n(1, 10.5),\n(2, 15.2),\n(3, 20.1),\n(4, 25.8),\n(5, 30.3),\n(6, 35.7),\n(7, 40.2),\n(8, 45.9),\n(9, 50.4),\n(10, 100.6);\n\n-- \u4F7F\u7528\u4E0D\u540C\u538B\u7F29\u5EA6\u8BA1\u7B97 99 \u5206\u4F4D\u6570\nSELECT \n    percentile_approx(response_time, 0.99) as p99_default,          -- \u9ED8\u8BA4\u538B\u7F29\u5EA6\n    percentile_approx(response_time, 0.99, 2048) as p99_fast,       -- \u4F4E\u538B\u7F29\u5EA6\uFF0C\u66F4\u5FEB\n    percentile_approx(response_time, 0.99, 10000) as p99_accurate   -- \u9AD8\u538B\u7F29\u5EA6\uFF0C\u66F4\u7CBE\u786E\nFROM response_times;\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------------------+-------------------+-------------------+\n| p99_default       | p99_fast          | p99_accurate      |\n+-------------------+-------------------+-------------------+\n| 100.5999984741211 | 100.5999984741211 | 100.5999984741211 |\n+-------------------+-------------------+-------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);