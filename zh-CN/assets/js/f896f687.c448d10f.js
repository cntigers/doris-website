"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["763292"],{396173:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/UPDATE","title":"UPDATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/DML/UPDATE.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/UPDATE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/UPDATE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"UPDATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW LAST INSERT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT"},"next":{"title":"DELETE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/DELETE"}}'),l=t("785893"),s=t("250065");let r={title:"UPDATE",language:"zh-CN"},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u662F\u4E3A\u8FDB\u884C\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\u7684\u64CD\u4F5C\uFF0CUPDATE \u8BED\u53E5\u76EE\u524D\u4EC5\u652F\u6301 UNIQUE KEY \u6A21\u578B\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["UPDATE \u64CD\u4F5C\u76EE\u524D\u53EA\u652F\u6301\u66F4\u65B0 Value \u5217\uFF0CKey \u5217\u7684\u66F4\u65B0\u53EF\u53C2\u8003",(0,l.jsx)(n.a,{href:"/zh-CN/docs/ecosystem/flink-doris-connector#%E4%BD%BF%E7%94%A8flinkcdc%E6%9B%B4%E6%96%B0key%E5%88%97",children:"\u4F7F\u7528 FlinkCDC \u66F4\u65B0 Key \u5217"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"[cte]\nUPDATE target_table [table_alias]\n    SET assignment_list\n    [ FROM additional_tables]\n    WHERE condition\n"})}),"\n",(0,l.jsx)(n.h4,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"target_table: \u5F85\u66F4\u65B0\u6570\u636E\u7684\u76EE\u6807\u8868\u3002\u53EF\u4EE5\u662F 'db_name.table_name' \u5F62\u5F0F"}),"\n",(0,l.jsx)(n.li,{children:"assignment_list: \u5F85\u66F4\u65B0\u7684\u76EE\u6807\u5217\uFF0C\u5F62\u5982 'col_name = value, col_name = value' \u683C\u5F0F"}),"\n",(0,l.jsx)(n.li,{children:"WHERE condition: \u671F\u671B\u66F4\u65B0\u7684\u6761\u4EF6\uFF0C\u4E00\u4E2A\u8FD4\u56DE true \u6216\u8005 false \u7684\u8868\u8FBE\u5F0F\u5373\u53EF"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cte: \u901A\u7528\u8868\u8FBE\u5F0F\u3002\u53EF\u4EE5\u662F 'WITH a AS SELECT * FROM tbl' \u5F62\u5F0F"}),"\n",(0,l.jsx)(n.li,{children:"table_alias: \u8868\u7684\u522B\u540D"}),"\n",(0,l.jsx)(n.li,{children:"FROM additional_tables: \u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\uFF0C\u7528\u4E8E\u9009\u4E2D\u66F4\u65B0\u7684\u884C\uFF0C\u6216\u8005\u83B7\u53D6\u66F4\u65B0\u7684\u503C\u3002\u6CE8\u610F\uFF0C\u5982\u9700\u8981\u5728\u6B64\u5217\u8868\u4E2D\u518D\u6B21\u4F7F\u7528\u76EE\u6807\u8868\uFF0C\u9700\u8981\u4E3A\u5176\u663E\u5F0F\u6307\u5B9A\u522B\u540D\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,l.jsx)(n.p,{children:"\u5F53\u524D UPDATE \u8BED\u53E5\u4EC5\u652F\u6301\u5728 UNIQUE KEY \u6A21\u578B\u4E0A\u7684\u884C\u66F4\u65B0\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"test"})," \u8868\u662F\u4E00\u4E2A unique \u6A21\u578B\u7684\u8868\uFF0C\u5305\u542B\uFF1Ak1, k2, v1, v2  \u56DB\u4E2A\u5217\u3002\u5176\u4E2D k1, k2 \u662F key\uFF0Cv1, v2 \u662F value\uFF0C\u805A\u5408\u65B9\u5F0F\u662F Replace\u3002"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5C06 'test' \u8868\u4E2D\u6EE1\u8DB3\u6761\u4EF6 k1 =1 , k2 =2 \u7684 v1 \u5217\u66F4\u65B0\u4E3A 1"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u5C06 'test' \u8868\u4E2D k1=1 \u7684\u5217\u7684 v1 \u5217\u81EA\u589E 1"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE test SET v1 = v1+1 WHERE k1=1;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["\u4F7F\u7528",(0,l.jsx)(n.code,{children:"t2"}),"\u548C",(0,l.jsx)(n.code,{children:"t3"}),"\u8868\u8FDE\u63A5\u7684\u7ED3\u679C\uFF0C\u66F4\u65B0",(0,l.jsx)(n.code,{children:"t1"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u521B\u5EFA t1, t2, t3 \u4E09\u5F20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63D2\u5165\u6570\u636E\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u66F4\u65B0 t1\nUPDATE t1\n  SET t1.c1 = t2.c1, t1.c3 = t2.c3 * 100\n  FROM t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9884\u671F\u7ED3\u679C\u4E3A\uFF0C\u66F4\u65B0\u4E86",(0,l.jsx)(n.code,{children:"t1"}),"\u8868",(0,l.jsx)(n.code,{children:"id"}),"\u4E3A",(0,l.jsx)(n.code,{children:"1"}),"\u7684\u5217"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 1  | 10 | 1  | 1000.0 | 2000-01-01 |\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"\u4F7F\u7528 cte \u66F4\u65B0\u8868"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'create table orders(\n    o_orderkey bigint,\n    o_totalprice decimal(15, 2)\n) unique key(o_orderkey)\ndistributed by hash(o_orderkey) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into orders values\n(1, 34.1),\n(2, 432.8);\n\ncreate table lineitem(\n    l_linenumber int,\n    o_orderkey bigint,\n    l_discount  decimal(15, 2)\n) unique key(l_linenumber)\ndistributed by hash(l_linenumber) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into lineitem values\n(1, 1, 1.23),\n(2, 1, 3.21),\n(3, 2, 18.08),\n(4, 2, 23.48);\n\nwith discount_orders as (\n    select * from orders \n    where o_totalprice > 100\n)\nupdate lineitem  set l_discount = l_discount*0.9\nfrom discount_orders \nwhere lineitem.o_orderkey = discount_orders.o_orderkey;\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"UPDATE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(667294);let l={},s=i.createContext(l);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);