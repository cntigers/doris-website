"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["904697"],{384412:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>r,toc:()=>a,contentTitle:()=>t});var i=JSON.parse('{"id":"data-operate/delete/delete-manual","title":"Delete \u64CD\u4F5C","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/delete/delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/delete-manual","permalink":"/zh-CN/docs/data-operate/delete/delete-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Delete \u64CD\u4F5C","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5220\u9664\u64CD\u4F5C\u6982\u8FF0","permalink":"/zh-CN/docs/data-operate/delete/delete-overview"},"next":{"title":"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664","permalink":"/zh-CN/docs/data-operate/delete/batch-delete-manual"}}'),d=l("785893"),s=l("250065");let c={title:"Delete \u64CD\u4F5C",language:"zh-CN"},t=void 0,r={},a=[{value:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u5220\u9664",id:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u5220\u9664",level:2},{value:"\u5FC5\u987B\u53C2\u6570",id:"\u5FC5\u987B\u53C2\u6570",level:3},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:3},{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u901A\u8FC7\u4F7F\u7528 <code>USING</code> \u5B50\u53E5\u5220\u9664",id:"\u901A\u8FC7\u4F7F\u7528-using-\u5B50\u53E5\u5220\u9664",level:2},{value:"\u5FC5\u987B\u53C2\u6570",id:"\u5FC5\u987B\u53C2\u6570-1",level:3},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570-1",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B-1",level:3},{value:"\u76F8\u5173\u914D\u7F6E",id:"\u76F8\u5173\u914D\u7F6E",level:2},{value:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",id:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",level:2},{value:"\u6027\u80FD\u5EFA\u8BAE",id:"\u6027\u80FD\u5EFA\u8BAE",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u5220\u9664\u64CD\u4F5C\u8BED\u53E5\u901A\u8FC7 MySQL \u534F\u8BAE\uFF0C\u6309\u6761\u4EF6\u5220\u9664\u6307\u5B9A\u8868\u6216\u5206\u533A\u4E2D\u7684\u6570\u636E\u3002\u652F\u6301\u901A\u8FC7\u7B80\u5355\u7684\u8C13\u8BCD\u7EC4\u5408\u6761\u4EF6\u6765\u6307\u5B9A\u8981\u5220\u9664\u7684\u6570\u636E\uFF0C\u4E5F\u652F\u6301\u5728\u4E3B\u952E\u8868\u4E0A\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"USING"})," \u5B50\u53E5\u5173\u8054\u591A\u8868\u8FDB\u884C\u5220\u9664\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u5220\u9664",children:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u5220\u9664"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n  [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n  WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5FC5\u987B\u53C2\u6570",children:"\u5FC5\u987B\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"table_name"}),": \u6307\u5B9A\u9700\u8981\u5220\u9664\u6570\u636E\u7684\u8868"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"column_name"}),": \u5C5E\u4E8E ",(0,d.jsx)(n.code,{children:"table_name"})," \u7684\u5217"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"op"}),": \u903B\u8F91\u6BD4\u8F83\u64CD\u4F5C\u7B26\uFF0C\u5305\u62EC\uFF1A=, >, <, >=, <=, !=, in, not in"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"value | value_list"}),": \u8FDB\u884C\u903B\u8F91\u6BD4\u8F83\u7684\u503C\u6216\u503C\u5217\u8868"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name])"}),": \u6307\u5B9A\u6267\u884C\u5220\u9664\u6570\u636E\u7684\u5206\u533A\u540D\uFF0C\u5982\u679C\u8868\u4E0D\u5B58\u5728\u6B64\u5206\u533A\uFF0C\u5219\u62A5\u9519"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"table_alias"}),": \u8868\u7684\u522B\u540D"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u4F7F\u7528\u8868\u6A21\u578B Aggregate \u65F6\uFF0C\u53EA\u80FD\u6307\u5B9A Key \u5217\u4E0A\u7684\u6761\u4EF6\u3002\u5F53\u9009\u5B9A\u7684 Key \u5217\u4E0D\u5B58\u5728\u4E8E\u67D0\u4E2A Rollup \u4E2D\u65F6\uFF0C\u65E0\u6CD5\u8FDB\u884C\u5220\u9664\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5BF9\u4E8E\u5206\u533A\u8868\uFF0C\u9700\u8981\u6307\u5B9A\u5206\u533A\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0CDoris \u4F1A\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u5206\u533A\u3002\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0CDoris \u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u5206\u533A\uFF1A\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u6761\u4EF6\u4E2D\u4E0D\u5305\u542B\u5206\u533A\u5217"}),"\n",(0,d.jsxs)(n.li,{children:["\u5206\u533A\u5217\u7684 ",(0,d.jsx)(n.code,{children:"op"})," \u4E3A ",(0,d.jsx)(n.code,{children:"not in"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5F53\u5206\u533A\u8868\u672A\u6307\u5B9A\u5206\u533A\uFF0C\u6216\u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u5206\u533A\u65F6\uFF0C\u9700\u8981\u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF ",(0,d.jsx)(n.code,{children:"delete_without_partition"})," \u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\uFF0C\u6B64\u65F6\u5220\u9664\u64CD\u4F5C\u4F1A\u5E94\u7528\u5230\u6240\u6709\u5206\u533A\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. \u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u5206\u533A ",(0,d.jsx)(n.code,{children:"p1"})," \u4E2D ",(0,d.jsx)(n.code,{children:"k1"})," \u5217\u503C\u4E3A 3 \u7684\u6570\u636E\u884C"]})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\n  WHERE k1 = 3;\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["2. \u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u5206\u533A ",(0,d.jsx)(n.code,{children:"p1"})," \u4E2D ",(0,d.jsx)(n.code,{children:"k1"})," \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 ",(0,d.jsx)(n.code,{children:"status"}),' \u5217\u503C\u4E3A "outdated" \u7684\u6570\u636E\u884C']})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND status = "outdated";\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["3. \u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u5206\u533A ",(0,d.jsx)(n.code,{children:"p1"}),", ",(0,d.jsx)(n.code,{children:"p2"})," \u4E2D ",(0,d.jsx)(n.code,{children:"k1"})," \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 ",(0,d.jsx)(n.code,{children:"dt"}),' \u5217\u503C\u4F4D\u4E8E "2024-10-01" \u548C "2024-10-31" \u4E4B\u95F4\u7684\u6570\u636E\u884C']})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND dt >= "2024-10-01" AND dt <= "2024-10-31";\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"\u901A\u8FC7\u4F7F\u7528-using-\u5B50\u53E5\u5220\u9664",children:["\u901A\u8FC7\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"USING"})," \u5B50\u53E5\u5220\u9664"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u7528\u6237\u9700\u8981\u5173\u8054\u591A\u5F20\u8868\u624D\u80FD\u7CBE\u786E\u786E\u5B9A\u8981\u5220\u9664\u7684\u6570\u636E\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B ",(0,d.jsx)(n.code,{children:"USING"})," \u5B50\u53E5\u975E\u5E38\u6709\u7528\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n  [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n  [USING additional_tables]\n  WHERE condition\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5FC5\u987B\u53C2\u6570-1",children:"\u5FC5\u987B\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"table_name"}),": \u6307\u5B9A\u9700\u8981\u5220\u9664\u6570\u636E\u7684\u8868"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"WHERE condition"}),": \u6307\u5B9A\u7528\u4E8E\u9009\u62E9\u5220\u9664\u884C\u7684\u6761\u4EF6"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u53EF\u9009\u53C2\u6570-1",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name])"}),": \u6307\u5B9A\u6267\u884C\u5220\u9664\u6570\u636E\u7684\u5206\u533A\u540D\uFF0C\u5982\u679C\u8868\u4E0D\u5B58\u5728\u6B64\u5206\u533A\uFF0C\u5219\u62A5\u9519"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"table_alias"}),": \u8868\u7684\u522B\u540D"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6B64\u5F62\u5F0F\u53EA\u80FD\u5728 UNIQUE KEY \u6A21\u578B\u8868\u4E0A\u4F7F\u7528"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u793A\u4F8B-1",children:"\u793A\u4F8B"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"t2"})," \u548C ",(0,d.jsx)(n.code,{children:"t3"})," \u8868\u8FDE\u63A5\u7684\u7ED3\u679C\uFF0C\u5220\u9664 ",(0,d.jsx)(n.code,{children:"t1"})," \u4E2D\u7684\u6570\u636E\uFF0C\u5220\u9664\u7684\u8868\u53EA\u652F\u6301 unique \u6A21\u578B\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"-- \u521B\u5EFA t1, t2, t3 \u4E09\u5F20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63D2\u5165\u6570\u636E\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u5220\u9664 t1 \u4E2D\u7684\u6570\u636E\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9884\u671F\u7ED3\u679C\u4E3A\uFF0C\u5220\u9664 ",(0,d.jsx)(n.code,{children:"t1"})," \u8868\u4E2D ",(0,d.jsx)(n.code,{children:"id"})," \u4E3A ",(0,d.jsx)(n.code,{children:"1"})," \u7684\u884C\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u76F8\u5173\u914D\u7F6E",children:"\u76F8\u5173\u914D\u7F6E"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8D85\u65F6\u914D\u7F6E"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"insert_timeout"}),": \u56E0\u4E3A\u5220\u9664\u64CD\u4F5C\u662F\u4E00\u4E2A SQL \u547D\u4EE4\u4E14\u88AB\u89C6\u4E3A\u4E00\u79CD\u7279\u6B8A\u7684\u5BFC\u5165\uFF0C\u56E0\u6B64\u5220\u9664\u8BED\u53E5\u4F1A\u53D7 Session \u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"insert_timeout"})," \u503C\u5F71\u54CD\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"SET insert_timeout = xxx"})," \u6765\u589E\u52A0\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"IN \u8C13\u8BCD\u914D\u7F6E"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"max_allowed_in_element_num_of_delete"}),": \u5982\u679C\u7528\u6237\u5728\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"in"})," \u8C13\u8BCD\u65F6\u9700\u8981\u5360\u7528\u7684\u5143\u7D20\u8F83\u591A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u8C03\u6574\u5141\u8BB8\u643A\u5E26\u7684\u5143\u7D20\u4E0A\u9650\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1024\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",children:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55"}),"\n",(0,d.jsxs)(n.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"SHOW DELETE"})," \u8BED\u53E5\u67E5\u770B\u5386\u53F2\u4E0A\u5DF2\u6267\u884C\u5B8C\u6210\u7684\u5220\u9664\u8BB0\u5F55\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW DELETE [FROM db_name]\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6027\u80FD\u5EFA\u8BAE",children:"\u6027\u80FD\u5EFA\u8BAE"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u660E\u7EC6\u8868\uFF08Duplicate Key\uFF09\u548C\u805A\u5408\u8868\uFF08Aggregate Key\uFF09\u4E0A\uFF0C\u5220\u9664\u64CD\u4F5C\u6267\u884C\u901F\u5EA6\u8F83\u5FEB\uFF0C\u4F46\u77ED\u65F6\u95F4\u5185\u5927\u91CF\u5220\u9664\u64CD\u4F5C\u4F1A\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5728\u4E3B\u952E\u8868\uFF08Unique Key\uFF09\u4E0A\uFF0C\u5220\u9664\u64CD\u4F5C\u88AB\u8F6C\u6362\u6210 ",(0,d.jsx)(n.code,{children:"INSERT INTO"})," \u8BED\u53E5\uFF0C\u6D89\u53CA\u5927\u8303\u56F4\u5220\u9664\u65F6\u6267\u884C\u901F\u5EA6\u8F83\u6162\uFF0C\u4F46\u77ED\u65F6\u95F4\u5185\u5927\u91CF\u5220\u9664\u4E0D\u4F1A\u5BF9\u67E5\u8BE2\u6027\u80FD\u6709\u8F83\u5927\u5F71\u54CD\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664\u8BED\u6CD5\u8BE6\u89C1 ",(0,d.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-modification/DML/DELETE",children:"DELETE"})," \u8BED\u6CD5\u624B\u518C\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return c}});var i=l(667294);let d={},s=i.createContext(d);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);