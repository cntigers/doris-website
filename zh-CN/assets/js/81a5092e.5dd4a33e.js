"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["256055"],{395639:function(e,n,l){l.r(n),l.d(n,{default:()=>N,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW","title":"DROP-MATERIALIZED-VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Drop","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DROP-MATERIALIZED-VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP-INDEX","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},"next":{"title":"DROP-FUNCTION","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION"}}'),a=l("785893"),t=l("250065");let i={title:"DROP-MATERIALIZED-VIEW",language:"zh-CN"},r=void 0,c={},d=[{value:"DROP-MATERIALIZED-VIEW",id:"drop-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"drop-materialized-view",children:"DROP-MATERIALIZED-VIEW"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"DROP MATERIALIZED VIEW"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5220\u9664\u7269\u5316\u89C6\u56FE\u3002\u540C\u6B65\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name;\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"IF EXISTS:\n\u5982\u679C\u7269\u5316\u89C6\u56FE\u4E0D\u5B58\u5728\uFF0C\u4E0D\u8981\u629B\u51FA\u9519\u8BEF\u3002\u5982\u679C\u4E0D\u58F0\u660E\u6B64\u5173\u952E\u5B57\uFF0C\u7269\u5316\u89C6\u56FE\u4E0D\u5B58\u5728\u5219\u62A5\u9519\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"mv_name:\n\u5F85\u5220\u9664\u7684\u7269\u5316\u89C6\u56FE\u7684\u540D\u79F0\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"table_name:\n\u5F85\u5220\u9664\u7684\u7269\u5316\u89C6\u56FE\u6240\u5C5E\u7684\u8868\u540D\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.p,{children:"\u8868\u7ED3\u6784\u4E3A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> desc all_type_table all;\n+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n|                |       |          |      |       |         |       |\n| k1_sumk2       | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | SUM   |\n+----------------+-------+----------+------+-------+---------+-------+\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5220\u9664\u8868 all_type_table \u7684\u540D\u4E3A k1_sumk2 \u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_sumk2 on all_type_table;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u88AB\u5220\u9664\u540E\u7684\u8868\u7ED3\u6784"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5220\u9664\u8868 all_type_table \u4E2D\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5220\u9664\u8BF7\u6C42\u76F4\u63A5\u62A5\u9519"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5220\u9664\u8868 all_type_table \u4E2D\u7684\u7269\u5316\u89C6\u56FE k1_k2\uFF0C\u4E0D\u5B58\u5728\u4E0D\u62A5\u9519\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec) \n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5B58\u5728\u5219\u5220\u9664\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u62A5\u9519\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"DROP, MATERIALIZED, VIEW\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function N(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var s=l(667294);let a={},t=s.createContext(a);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);