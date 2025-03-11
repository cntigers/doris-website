"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["313559"],{841032:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/intersect-count","title":"INTERSECT_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/intersect-count.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/intersect-count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/intersect-count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"INTERSECT_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"hll_raw_agg","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/hll-raw-agg"},"next":{"title":"QUANTILE_UNION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/quantile-union"}}'),l=t("785893"),i=t("250065");let r={title:"INTERSECT_COUNT",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"INTERSECT_COUNT \u51FD\u6570\u7528\u4E8E\u8BA1\u7B97 Bitmap \u6570\u636E\u7ED3\u6784\u7684\u4EA4\u96C6\u5143\u7D20\u7684\u6570\u91CF\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"INTERSECT_COUNT(<bitmap_column>, <column_to_filter>, <filter_values>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<bitmap_column>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u83B7\u53D6\u7B2C\u4E00\u4E2A\u503C\u7684\u8868\u8FBE\u5F0F"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<column_to_filter>"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\u3002\u9700\u8981\u8FDB\u884C\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<filter_values>"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\u3002\u8FC7\u6EE4\u7EF4\u5EA6\u5217\u7684\u4E0D\u540C\u53D6\u503C"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE BIGINT \u7C7B\u578B\u7684\u503C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select dt,bitmap_to_string(user_id) from pv_bitmap where dt in (3,4);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+-----------------------------+\n| dt   | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| 4    | 1,2,3                       |\n| 3    | 1,2,3,4,5                   |\n+------+-----------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select intersect_count(user_id,dt,3,4) from pv_bitmap;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------------------------+\n| intersect_count(`user_id`, `dt`, 3, 4) |\n+----------------------------------------+\n|                                      3 |\n+----------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);