"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["31257"],{51312:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","title":"CREATE VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW BUILD INDEX","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/index/SHOW-BUILD-INDEX"},"next":{"title":"ALTER VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW"}}'),t=s("785893"),i=s("250065");let d={title:"CREATE VIEW",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u901A\u8FC7\u6307\u5B9A\u7684\u67E5\u8BE2\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u903B\u8F91\u89C6\u56FE\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW [IF NOT EXISTS] [<db_name>.]<view_name>\n   [(<column_definition>)]\nAS <query_stmt>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"column_definition:\n    <column_name> [COMMENT '<comment>'] [,...]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<view_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u89C6\u56FE\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF1B\u5728\u521B\u5EFA\u89C6\u56FE\u7684\u6570\u636E\u5E93\u4E2D\u5FC5\u987B\u552F\u4E00\u3002",(0,t.jsx)(n.br,{}),"\n\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My View"}),"\uFF09\u3002",(0,t.jsx)(n.br,{}),"\n\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002",(0,t.jsx)(n.br,{}),"\n\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<query_stmt>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5B9A\u4E49\u89C6\u56FE\u7684 SELECT \u67E5\u8BE2\u8BED\u53E5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u89C6\u56FE\u6240\u5728\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<column_definition>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u89C6\u56FE\u7684\u5217\u5B9A\u4E49\u3002",(0,t.jsx)(n.br,{}),"\n\u5176\u4E2D\uFF1A",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<column_name>"})]}),(0,t.jsx)(n.br,{}),"\n\u5217\u540D\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<comment>"})]}),(0,t.jsx)(n.br,{}),"\n\u5217\u7684\u6CE8\u91CA\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u6743\u9650"}),(0,t.jsx)(n.th,{children:"\u5BF9\u8C61"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CREATE_PRIV"}),(0,t.jsx)(n.td,{children:"\u6570\u636E\u5E93"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SELECT_PRIV"}),(0,t.jsx)(n.td,{children:"\u8868\u3001\u89C6\u56FE"}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u62E5\u6709\u88AB\u67E5\u8BE2\u7684\u8868\u3001\u89C6\u56FE\u3001\u7269\u5316\u89C6\u56FE\u7684 SELECT_PRIV \u6743\u9650\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u89C6\u56FE\u4E3A\u903B\u8F91\u89C6\u56FE\uFF0C\u6CA1\u6709\u7269\u7406\u5B58\u50A8\u3002\u6240\u6709\u5728\u89C6\u56FE\u4E0A\u7684\u67E5\u8BE2\u76F8\u5F53\u4E8E\u5728\u89C6\u56FE\u5BF9\u5E94\u7684\u5B50\u67E5\u8BE2\u4E0A\u8FDB\u884C\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u89C6\u56FE\u7684\u521B\u5EFA\u548C\u5220\u9664\u4E0D\u4F1A\u5F71\u54CD\u5E95\u5C42\u8868\u7684\u6570\u636E\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 example_db \u4E0A\u521B\u5EFA\u89C6\u56FE example_view"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u5217\u5B9A\u4E49\u7684\u89C6\u56FE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var l=s(667294);let t={},i=l.createContext(t);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);