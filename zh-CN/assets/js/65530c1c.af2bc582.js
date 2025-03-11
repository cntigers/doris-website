"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["857704"],{735785:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/topn-array","title":"TOPN_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/topn-array.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/topn-array","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/topn-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TOPN_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TOPN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/topn"},"next":{"title":"TOPN_WEIGHTED","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/topn-weighted"}}'),r=t("785893"),a=t("250065");let i={title:"TOPN_ARRAY",language:"zh-CN"},l=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"TOPN_ARRAY \u51FD\u6570\u8FD4\u56DE\u6307\u5B9A\u5217\u4E2D\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684 N \u4E2A\u503C\u7684\u6570\u7EC4\u3002\u4E0E TOPN \u51FD\u6570\u4E0D\u540C\uFF0CTOPN_ARRAY \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B\uFF0C\u4FBF\u4E8E\u540E\u7EED\u5904\u7406\u548C\u5206\u6790\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"TOPN_ARRAY(<expr>, <top_num> [, <space_expand_rate>])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<expr>"})}),(0,r.jsx)(e.td,{children:"\u8981\u7EDF\u8BA1\u7684\u5217\u6216\u8868\u8FBE\u5F0F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<top_num>"})}),(0,r.jsx)(e.td,{children:"\u8981\u8FD4\u56DE\u7684\u6700\u9AD8\u9891\u7387\u503C\u7684\u6570\u91CF\uFF0C\u5FC5\u987B\u662F\u6B63\u6574\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<space_expand_rate>"})}),(0,r.jsxs)(e.td,{children:["\u53EF\u9009\u9879\uFF0C\u8BE5\u503C\u7528\u6765\u8BBE\u7F6E Space-Saving \u7B97\u6CD5\u4E2D\u4F7F\u7528\u7684 counter \u4E2A\u6570",(0,r.jsx)(e.code,{children:"counter_numbers = top_num * space_expand_rate"})," space_expand_rate \u7684\u503C\u8D8A\u5927\uFF0C\u7ED3\u679C\u8D8A\u51C6\u786E\uFF0C\u9ED8\u8BA4\u503C\u4E3A 50"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684 N \u4E2A\u503C\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE page_visits (\n    page_id INT,\n    user_id INT,\n    visit_date DATE\n) DISTRIBUTED BY HASH(page_id)\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO page_visits VALUES\n(1, 101, '2024-01-01'),\n(2, 102, '2024-01-01'),\n(1, 103, '2024-01-01'),\n(3, 101, '2024-01-01'),\n(1, 104, '2024-01-01'),\n(2, 105, '2024-01-01'),\n(1, 106, '2024-01-01'),\n(4, 107, '2024-01-01');\n\n-- \u67E5\u627E\u8BBF\u95EE\u91CF\u6700\u9AD8\u7684\u524D 3 \u4E2A\u9875\u9762\nSELECT TOPN_ARRAY(page_id, 3) as top_pages\nFROM page_visits;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------+\n| top_pages |\n+-----------+\n| [1, 2, 4] |\n+-----------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);