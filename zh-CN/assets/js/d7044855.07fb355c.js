"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["259580"],{948052:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile-array","title":"PERCENTILE_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/percentile-array.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile-array","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-array","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"PERCENTILE_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PERCENTILE","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile"},"next":{"title":"PERCENTILE_APPROX","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"}}'),s=t("785893"),r=t("250065");let i={title:"PERCENTILE_ARRAY",language:"zh-CN"},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"PERCENTILE_ARRAY"})," \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u7CBE\u786E\u7684\u767E\u5206\u4F4D\u6570\u6570\u7EC4\uFF0C\u5141\u8BB8\u4E00\u6B21\u6027\u8BA1\u7B97\u591A\u4E2A\u767E\u5206\u4F4D\u6570\u503C\u3002\u8FD9\u4E2A\u51FD\u6570\u4E3B\u8981\u9002\u7528\u4E8E\u5C0F\u6570\u636E\u91CF\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E3B\u8981\u7279\u70B9\uFF1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u7CBE\u786E\u8BA1\u7B97\uFF1A\u63D0\u4F9B\u7CBE\u786E\u7684\u767E\u5206\u4F4D\u6570\u7ED3\u679C\uFF0C\u800C\u4E0D\u662F\u8FD1\u4F3C\u503C"}),"\n",(0,s.jsx)(e.li,{children:"\u6279\u91CF\u5904\u7406\uFF1A\u53EF\u4EE5\u4E00\u6B21\u8BA1\u7B97\u591A\u4E2A\u767E\u5206\u4F4D\u6570"}),"\n",(0,s.jsx)(e.li,{children:"\u9002\u7528\u8303\u56F4\uFF1A\u6700\u9002\u5408\u5904\u7406\u6570\u636E\u91CF\u8F83\u5C0F\u7684\u573A\u666F"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"PERCENTILE_ARRAY(<col>, <array_p>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<col>"})}),(0,s.jsx)(e.td,{children:"\u9700\u8981\u8BA1\u7B97\u767E\u5206\u4F4D\u6570\u7684\u5217"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<array_p>"})}),(0,s.jsxs)(e.td,{children:["\u767E\u5206\u4F4D\u6570\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u5FC5\u987B\u5728 ",(0,s.jsx)(e.code,{children:"[0.0, 1.0]"})," \u8303\u56F4\u5185\uFF0C\u4F8B\u5982 ",(0,s.jsx)(e.code,{children:"[0.5, 0.95, 0.99]"})]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD4\u56DE\u4E00\u4E2A ",(0,s.jsx)(e.code,{children:"DOUBLE"})," \u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u5305\u542B\u4E86\u5BF9\u5E94\u4E8E\u8F93\u5165\u767E\u5206\u4F4D\u6570\u6570\u7EC4\u7684\u8BA1\u7B97\u7ED3\u679C\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE sales_data (\n    id INT,\n    amount DECIMAL(10, 2)\n) DUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS AUTO\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n\n-- \u63D2\u5165\u793A\u4F8B\u6570\u636E\nINSERT INTO sales_data VALUES\n(1, 10.5),\n(2, 15.2),\n(3, 20.1),\n(4, 25.8),\n(5, 30.3),\n(6, 35.7),\n(7, 40.2),\n(8, 45.9),\n(9, 50.4),\n(10, 100.6);\n\n-- \u8BA1\u7B97\u591A\u4E2A\u767E\u5206\u4F4D\u6570\nSELECT percentile_array(amount, [0.25, 0.5, 0.75, 0.9]) as percentiles\nFROM sales_data;\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------+\n| percentiles                             |\n+-----------------------------------------+\n| [21.25, 32.5, 43.75, 54.99999999999998] |\n+-----------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);