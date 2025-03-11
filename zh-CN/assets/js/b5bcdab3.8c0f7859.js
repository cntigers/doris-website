"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["197234"],{99622:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","title":"ALTER VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW"},"next":{"title":"DROP VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/view/DROP-VIEW"}}'),t=s("785893"),i=s("250065");let r={title:"ALTER VIEW",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u903B\u8F91\u89C6\u56FE\u7684\u5B9A\u4E49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER VIEW [<db_name>.]<view_name> \n [(<column_definition>)]\nAS <query_stmt>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"column_definition:\n    <column_name> [COMMENT '<comment>'] [,...]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<view_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8981\u4FEE\u6539\u7684\u89C6\u56FE\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<query_stmt>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5B9A\u4E49\u89C6\u56FE\u7684 SELECT \u67E5\u8BE2\u8BED\u53E5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u89C6\u56FE\u6240\u5728\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<column_definition>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u89C6\u56FE\u7684\u5217\u5B9A\u4E49\u3002",(0,t.jsx)(n.br,{}),"\n\u5176\u4E2D\uFF1A",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<column_name>"})]}),(0,t.jsx)(n.br,{}),"\n\u5217\u540D\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<comment>"})]}),(0,t.jsx)(n.br,{}),"\n\u5217\u7684\u6CE8\u91CA\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u6743\u9650"}),(0,t.jsx)(n.th,{children:"\u5BF9\u8C61"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ALTER_PRIV"}),(0,t.jsx)(n.td,{children:"\u89C6\u56FE"}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u6240\u4FEE\u6539\u89C6\u56FE\u7684 SELECT_PRIV \u6743\u9650\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SELECT_PRIV"}),(0,t.jsx)(n.td,{children:"\u8868\u3001\u89C6\u56FE"}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u62E5\u6709\u88AB\u67E5\u8BE2\u7684\u8868\u3001\u89C6\u56FE\u3001\u7269\u5316\u89C6\u56FE\u7684 SELECT_PRIV \u6743\u9650\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:"1\u3001\u4FEE\u6539 example_db \u4E0A\u7684\u89C6\u56FE example_view"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\n  c1 COMMENT "column 1",\n  c2 COMMENT "column 2",\n  c3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table \nGROUP BY k1, k2\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);