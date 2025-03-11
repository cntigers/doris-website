"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["789499"],{712949:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE","title":"UPDATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"UPDATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DELETE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"next":{"title":"EXPORT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"}}'),i=l("785893"),a=l("250065");let s={title:"UPDATE",language:"zh-CN"},r=void 0,c={},d=[{value:"UPDATE",id:"update",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3}];function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"update",children:"UPDATE"}),"\n",(0,i.jsx)(e.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(e.p,{children:"UPDATE"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u662F\u4E3A\u8FDB\u884C\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\u7684\u64CD\u4F5C\uFF0CUPDATE \u8BED\u53E5\u76EE\u524D\u4EC5\u652F\u6301 UNIQUE KEY \u6A21\u578B\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["UPDATE \u64CD\u4F5C\u76EE\u524D\u53EA\u652F\u6301\u66F4\u65B0 Value \u5217\uFF0CKey \u5217\u7684\u66F4\u65B0\u53EF\u53C2\u8003",(0,i.jsx)(e.a,{href:"/zh-CN/docs/2.0/ecosystem/flink-doris-connector#%E4%BD%BF%E7%94%A8flinkcdc%E6%9B%B4%E6%96%B0key%E5%88%97",children:"\u4F7F\u7528 FlinkCDC \u66F4\u65B0 Key \u5217"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"UPDATE target_table [table_alias]\n    SET assignment_list\n    WHERE condition\n\nassignment_list:\n    assignment [, assignment] ...\n\nassignment:\n    col_name = value\n\nvalue:\n    {expr | DEFAULT}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"UPDATE target_table [table_alias]\n    SET assignment_list\n    [ FROM additional_tables]\n    WHERE condition\n"})}),"\n",(0,i.jsx)(e.h4,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"target_table: \u5F85\u66F4\u65B0\u6570\u636E\u7684\u76EE\u6807\u8868\u3002\u53EF\u4EE5\u662F 'db_name.table_name' \u5F62\u5F0F"}),"\n",(0,i.jsx)(e.li,{children:"assignment_list: \u5F85\u66F4\u65B0\u7684\u76EE\u6807\u5217\uFF0C\u5F62\u5982 'col_name = value, col_name = value' \u683C\u5F0F"}),"\n",(0,i.jsx)(e.li,{children:"WHERE condition: \u671F\u671B\u66F4\u65B0\u7684\u6761\u4EF6\uFF0C\u4E00\u4E2A\u8FD4\u56DE true \u6216\u8005 false \u7684\u8868\u8FBE\u5F0F\u5373\u53EF"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"table_alias: \u8868\u7684\u522B\u540D"}),"\n",(0,i.jsx)(e.li,{children:"FROM additional_tables: \u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\uFF0C\u7528\u4E8E\u9009\u4E2D\u66F4\u65B0\u7684\u884C\uFF0C\u6216\u8005\u83B7\u53D6\u66F4\u65B0\u7684\u503C\u3002\u6CE8\u610F\uFF0C\u5982\u9700\u8981\u5728\u6B64\u5217\u8868\u4E2D\u518D\u6B21\u4F7F\u7528\u76EE\u6807\u8868\uFF0C\u9700\u8981\u4E3A\u5176\u663E\u5F0F\u6307\u5B9A\u522B\u540D\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"note",children:"Note"}),"\n",(0,i.jsx)(e.p,{children:"\u5F53\u524D UPDATE \u8BED\u53E5\u4EC5\u652F\u6301\u5728 UNIQUE KEY \u6A21\u578B\u4E0A\u7684\u884C\u66F4\u65B0\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"test"})," \u8868\u662F\u4E00\u4E2A unique \u6A21\u578B\u7684\u8868\uFF0C\u5305\u542B\uFF1Ak1, k2, v1, v2  \u56DB\u4E2A\u5217\u3002\u5176\u4E2D k1, k2 \u662F key\uFF0Cv1, v2 \u662F value\uFF0C\u805A\u5408\u65B9\u5F0F\u662F Replace\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5C06 'test' \u8868\u4E2D\u6EE1\u8DB3\u6761\u4EF6 k1 =1 , k2 =2 \u7684 v1 \u5217\u66F4\u65B0\u4E3A 1"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u5C06 'test' \u8868\u4E2D k1=1 \u7684\u5217\u7684 v1 \u5217\u81EA\u589E 1"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"UPDATE test SET v1 = v1+1 WHERE k1=1;\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\u4F7F\u7528",(0,i.jsx)(e.code,{children:"t2"}),"\u548C",(0,i.jsx)(e.code,{children:"t3"}),"\u8868\u8FDE\u63A5\u7684\u7ED3\u679C\uFF0C\u66F4\u65B0",(0,i.jsx)(e.code,{children:"t1"})]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"-- \u521B\u5EFA t1, t2, t3 \u4E09\u5F20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63D2\u5165\u6570\u636E\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u66F4\u65B0 t1\nUPDATE t1\n  SET t1.c1 = t2.c1, t1.c3 = t2.c3 * 100\n  FROM t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u9884\u671F\u7ED3\u679C\u4E3A\uFF0C\u66F4\u65B0\u4E86",(0,i.jsx)(e.code,{children:"t1"}),"\u8868",(0,i.jsx)(e.code,{children:"id"}),"\u4E3A",(0,i.jsx)(e.code,{children:"1"}),"\u7684\u5217"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 1  | 10 | 1  | 1000.0 | 2000-01-01 |\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"UPDATE\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return s}});var t=l(667294);let i={},a=t.createContext(i);function s(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);