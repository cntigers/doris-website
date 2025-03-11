"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["531783"],{224761:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/topn-weighted","title":"TOPN_WEIGHTED","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/topn-weighted.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/topn-weighted","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TOPN_WEIGHTED","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TOPN_ARRAY","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn-array"},"next":{"title":"COUNT","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/count"}}'),r=t("785893"),l=t("250065");let c={title:"TOPN_WEIGHTED",language:"zh-CN"},d=void 0,i={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"TOPN_WEIGHTED \u51FD\u6570\u8FD4\u56DE\u6307\u5B9A\u5217\u4E2D\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684 N \u4E2A\u503C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u503C\u6307\u5B9A\u6743\u91CD\u3002\u4E0E\u666E\u901A\u7684 TOPN \u51FD\u6570\u4E0D\u540C\uFF0CTOPN_WEIGHTED \u5141\u8BB8\u901A\u8FC7\u6743\u91CD\u6765\u8C03\u6574\u503C\u7684\u91CD\u8981\u6027\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"TOPN_WEIGHTED(<expr>, <weight>, <top_num> [, <space_expand_rate>])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<expr>"})}),(0,r.jsx)(e.td,{children:"\u8981\u7EDF\u8BA1\u7684\u5217\u6216\u8868\u8FBE\u5F0F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<weight>"})}),(0,r.jsx)(e.td,{children:"\u7528\u4E8E\u8C03\u6574\u6743\u91CD\u7684\u5217\u6216\u8868\u8FBE\u5F0F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<top_num>"})}),(0,r.jsx)(e.td,{children:"\u8981\u8FD4\u56DE\u7684\u6700\u9AD8\u9891\u7387\u503C\u7684\u6570\u91CF\uFF0C\u5FC5\u987B\u662F\u6B63\u6574\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<space_expand_rate>"})}),(0,r.jsxs)(e.td,{children:["\u53EF\u9009\u9879\uFF0C\u8BE5\u503C\u7528\u6765\u8BBE\u7F6E Space-Saving \u7B97\u6CD5\u4E2D\u4F7F\u7528\u7684 counter \u4E2A\u6570",(0,r.jsx)(e.code,{children:"counter_numbers = top_num * space_expand_rate"})," space_expand_rate \u7684\u503C\u8D8A\u5927\uFF0C\u7ED3\u679C\u8D8A\u51C6\u786E\uFF0C\u9ED8\u8BA4\u503C\u4E3A 50"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u503C\u548C\u5BF9\u5E94\u7684\u52A0\u6743\u8BA1\u6570\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE product_sales (\n    product_id INT,\n    sale_amount DECIMAL(10,2),\n    sale_date DATE\n) DISTRIBUTED BY HASH(product_id)\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO product_sales VALUES\n(1, 100.00, '2024-01-01'),\n(2, 50.00, '2024-01-01'),\n(1, 150.00, '2024-01-01'),\n(3, 75.00, '2024-01-01'),\n(1, 200.00, '2024-01-01'),\n(2, 80.00, '2024-01-01'),\n(1, 120.00, '2024-01-01'),\n(4, 90.00, '2024-01-01');\n\n-- \u67E5\u627E\u9500\u552E\u989D\u6700\u9AD8\u7684\u524D 3 \u4E2A\u4EA7\u54C1\uFF08\u6309\u9500\u552E\u91D1\u989D\u52A0\u6743\uFF09\nSELECT TOPN_WEIGHTED(product_id, sale_amount, 3) as top_products\nFROM product_sales;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------+\n| top_products |\n+--------------+\n| [1, 2, 4]    |\n+--------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return c}});var s=t(667294);let r={},l=s.createContext(r);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);