"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["378516"],{69e4:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","title":"INSERT OVERWRITE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","permalink":"/docs/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"INSERT OVERWRITE","language":"en"},"sidebar":"docs","previous":{"title":"INSERT","permalink":"/docs/sql-manual/sql-statements/data-modification/DML/INSERT"},"next":{"title":"SHOW LAST INSERT","permalink":"/docs/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT"}}'),s=n("785893"),a=n("250065");let r={title:"INSERT OVERWRITE",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"For Auto Partition Table",id:"for-auto-partition-table",level:4},{value:"Examples",id:"examples",level:2},{value:"Overwrite Table",id:"overwrite-table",level:4},{value:"Overwrite Table Partition",id:"overwrite-table-partition",level:4},{value:"Overwrite Auto Detect Partition",id:"overwrite-auto-detect-partition",level:4},{value:"Keywords",id:"keywords",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"The function of this statement is to overwrite a table or some partitions of a table"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table table_name\n    [ PARTITION (p1, ... | *) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,s.jsx)(t.p,{children:"Parameters"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["table_name: the destination table to overwrite. This table must exist. It can be of the form ",(0,s.jsx)(t.code,{children:"db_name.table_name"})]}),"\n",(0,s.jsx)(t.p,{children:"partitions: the table partitions that needs to be overwritten. The following two formats are supported"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["partition names. must be one of the existing partitions in ",(0,s.jsx)(t.code,{children:"table_name"})," separated by a comma"]}),"\n",(0,s.jsxs)(t.li,{children:["asterisk(*)\u3002Enable ",(0,s.jsx)(t.a,{href:"#overwrite-auto-detect-partition",children:"auto-detect-partition"}),". The write operation will automatically detect the partitions involved in the data and overwrite those partitions. This format is supported since Apache Doris 2.1.3 version."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"label: specify a label for the Insert task"}),"\n",(0,s.jsxs)(t.p,{children:["column_name: the specified destination column must be one of the existing columns in ",(0,s.jsx)(t.code,{children:"table_name"})]}),"\n",(0,s.jsx)(t.p,{children:"expression: the corresponding expression that needs to be assigned to a column"}),"\n",(0,s.jsx)(t.p,{children:"DEFAULT: let the column use the default value"}),"\n",(0,s.jsx)(t.p,{children:"query: a common query, the result of the query will overwrite the target."}),"\n",(0,s.jsxs)(t.p,{children:["hint: some indicator used to indicate the execution behavior of ",(0,s.jsx)(t.code,{children:"INSERT"}),". You can choose one of this values: ",(0,s.jsx)(t.code,{children:"/*+ STREAMING */"}),", ",(0,s.jsx)(t.code,{children:"/*+ SHUFFLE */"})," or `/*+ NOSHUFFLE */."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"STREAMING: At present, it has no practical effect and is only reserved for compatibility with previous versions. (In the previous version, adding this hint would return a label, but now it defaults to returning a label)"}),"\n",(0,s.jsx)(t.li,{children:"SHUFFLE: When the target table is a partition table, enabling this hint will do repartiiton."}),"\n",(0,s.jsx)(t.li,{children:"NOSHUFFLE: Even if the target table is a partition table, repartiiton will not be performed, but some other operations will be performed to ensure that the data is correctly dropped into each partition."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Notice:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the current version, the session variable ",(0,s.jsx)(t.code,{children:"enable_insert_strict"})," is set to ",(0,s.jsx)(t.code,{children:"true"})," by default. If some data that does not conform to the format of the target table is filtered out during the execution of the ",(0,s.jsx)(t.code,{children:"INSERT OVERWRITE"})," statement, such as when overwriting a partition and not all partition conditions are satisfied, overwriting the target table will fail."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"INSERT OVERWRITE"})," statement first creates a new table, inserts the data to be overwritten into the new table, and then atomically replaces the old table with the new table and modifies its name. Therefore, during the process of overwriting the table, the data in the old table can still be accessed normally until the overwriting is completed."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"for-auto-partition-table",children:"For Auto Partition Table"}),"\n",(0,s.jsxs)(t.p,{children:["If the target table of the INSERT OVERWRITE is an autopartitioned table, the behaviour is controlled by the ",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-statements/session/variable/SET-VARIABLE",children:"Session Variable"}),"  ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," controls the behaviour as follows:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["If PARTITION is not specified (overwrite the whole table), when ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," is ",(0,s.jsx)(t.code,{children:"true"}),", the table is overwritten and partitions are created according to the table's auto-partitioning rules for data that does not have a corresponding partition, and those datas is admit. If ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," is ",(0,s.jsx)(t.code,{children:"false"}),", data for which no partition is found will accumulate error rows until it fails."]}),"\n",(0,s.jsx)(t.li,{children:"If an overwrite PARTITION is specified, the AUTO PARTITION table behaves as a normal partitioned table during this process, and data that does not satisfy the conditions of an existing partition is filtered instead of creating a new partition."}),"\n",(0,s.jsxs)(t.li,{children:["If you specify PARTITION as ",(0,s.jsx)(t.code,{children:"partition(*)"})," (auto detect partition and overwrite), when ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," is ",(0,s.jsx)(t.code,{children:"true"}),", for the data that have corresponding partitions in the table, overwrite their corresponding partitions, and leave the other existing partitions unchanged. At the same time, for data without corresponding partitions, create partitions according to the table's auto-partitioning rules, and accommodate the data without corresponding partitions. If ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," is ",(0,s.jsx)(t.code,{children:"false"}),", data for which no partition is found will accumulate error rows until it fails."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"})," was introduced since 2.1.8. In versions without ",(0,s.jsx)(t.code,{children:"enable_auto_create_when_overwrite"}),", the behaviour is as if the variable had a value of ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Examples are shown below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'mysql> create table auto_list(\n    ->              k0 varchar null\n    ->          )\n    ->          auto partition by list (k0)\n    ->          (\n    ->              PARTITION p1 values in (("Beijing"), ("BEIJING")),\n    ->              PARTITION p2 values in (("Shanghai"), ("SHANGHAI")),\n    ->              PARTITION p3 values in (("xxx"), ("XXX")),\n    ->              PARTITION p4 values in (("list"), ("LIST")),\n    ->              PARTITION p5 values in (("1234567"), ("7654321"))\n    ->          )\n    ->          DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    ->          properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.14 sec)\n\nmysql> insert into auto_list values ("Beijing"),("Shanghai"),("xxx"),("list"),("1234567");\nQuery OK, 5 rows affected (0.22 sec)\n\nmysql> insert overwrite table auto_list partition(*) values ("BEIJING"), ("new1");\nQuery OK, 2 rows affected (0.28 sec)\n\nmysql> select * from auto_list;\n+----------+ --- p1 is overwritten, new1 gets the new partition, and the other partitions remain unchanged.\n| k0       |\n+----------+\n| 1234567  |\n| BEIJING  |\n| list     |\n| xxx      |\n| new1     |\n| Shanghai |\n+----------+\n6 rows in set (0.48 sec)\n\nmysql> insert overwrite table auto_list values ("SHANGHAI"), ("new2");\nQuery OK, 2 rows affected (0.17 sec)\n\nmysql> select * from auto_list;\n+----------+ --- The whole table is overwritten, and new2 gets the new partition.\n| k0       |\n+----------+\n| new2     |\n| SHANGHAI |\n+----------+\n2 rows in set (0.15 sec)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Assuming there is a table named ",(0,s.jsx)(t.code,{children:"test"}),". The table contains two columns ",(0,s.jsx)(t.code,{children:"c1"})," and ",(0,s.jsx)(t.code,{children:"c2"}),", and two partitions ",(0,s.jsx)(t.code,{children:"p1"})," and ",(0,s.jsx)(t.code,{children:"p2"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS test (\n  `c1` int NOT NULL DEFAULT "1",\n  `c2` int NOT NULL DEFAULT "4"\n) ENGINE=OLAP\nUNIQUE KEY(`c1`)\nPARTITION BY LIST (`c1`)\n(\nPARTITION p1 VALUES IN ("1","2","3"),\nPARTITION p2 VALUES IN ("4","5","6")\n)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 3\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "in_memory" = "false",\n  "storage_format" = "V2"\n);\n'})}),"\n",(0,s.jsx)(t.h4,{id:"overwrite-table",children:"Overwrite Table"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite the ",(0,s.jsx)(t.code,{children:"test"})," table using the form of ",(0,s.jsx)(t.code,{children:"VALUES"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"// Single-row overwrite.\nINSERT OVERWRITE table test VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1);\n// Multi-row overwrite.\nINSERT OVERWRITE table test VALUES (1, 2), (3, 2 + 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1), (3);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The first and second statements have the same effect. If the target column is not specified during overwriting, the column order in the table will be used as the default target column. After the overwrite is successful, there is only one row of data in the ",(0,s.jsx)(t.code,{children:"test"})," table."]}),"\n",(0,s.jsxs)(t.li,{children:["The third and fourth statements have the same effect. The unspecified column ",(0,s.jsx)(t.code,{children:"c2"})," will be overwritten with the default value 4. After the overwrite is successful, there is only one row of data in the ",(0,s.jsx)(t.code,{children:"test"})," table."]}),"\n",(0,s.jsxs)(t.li,{children:["The fifth and sixth statements have the same effect. Expressions (such as ",(0,s.jsx)(t.code,{children:"2+2"}),", ",(0,s.jsx)(t.code,{children:"2*2"}),") can be used in the statement. The result of the expression will be computed during the execution of the statement and then overwritten into the ",(0,s.jsx)(t.code,{children:"test"})," table. After the overwrite is successful, there are two rows of data in the ",(0,s.jsx)(t.code,{children:"test"})," table."]}),"\n",(0,s.jsxs)(t.li,{children:["The seventh and eighth statements have the same effect. The unspecified column ",(0,s.jsx)(t.code,{children:"c2"})," will be overwritten with the default value 4. After the overwrite is successful, there are two rows of data in the ",(0,s.jsx)(t.code,{children:"test"})," table."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite the ",(0,s.jsx)(t.code,{children:"test"})," table in the form of a query statement. The data format of the ",(0,s.jsx)(t.code,{children:"test2"})," table and the ",(0,s.jsx)(t.code,{children:"test"})," table must be consistent. If they are not consistent, implicit data type conversion will be triggered."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table test SELECT * FROM test2;\nINSERT OVERWRITE table test (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The first and second statements have the same effect. The purpose of these statements is to take data from the ",(0,s.jsx)(t.code,{children:"test2"})," table and overwrite the ",(0,s.jsx)(t.code,{children:"test"})," table with the taken data. After the overwrite is successful, the data in the ",(0,s.jsx)(t.code,{children:"test"})," table will be consistent with the data in the ",(0,s.jsx)(t.code,{children:"test2"})," table."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite the ",(0,s.jsx)(t.code,{children:"test"})," table and specify a label."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table test WITH LABEL `label1` SELECT * FROM test2;\nINSERT OVERWRITE table test WITH LABEL `label2` (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Users can use the ",(0,s.jsx)(t.code,{children:"SHOW LOAD;"})," command to check the status of the job imported by this ",(0,s.jsx)(t.code,{children:"label"}),". It should be noted that the label is unique."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"overwrite-table-partition",children:"Overwrite Table Partition"}),"\n",(0,s.jsx)(t.p,{children:"When using INSERT OVERWRITE to rewrite partitions, we actually encapsulate the following three steps into a single transaction and execute it. If it fails halfway through, the operations that have been performed will be rolled back:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Assuming that partition ",(0,s.jsx)(t.code,{children:"p1"})," is specified to be rewritten, first create an empty temporary partition ",(0,s.jsx)(t.code,{children:"pTMP"})," with the same structure as the target partition to be rewritten."]}),"\n",(0,s.jsxs)(t.li,{children:["Write data to ",(0,s.jsx)(t.code,{children:"pTMP"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["replace ",(0,s.jsx)(t.code,{children:"p1"})," with the ",(0,s.jsx)(t.code,{children:"pTMP"})," atom"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following is examples:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite partitions ",(0,s.jsx)(t.code,{children:"P1"})," and ",(0,s.jsx)(t.code,{children:"P2"})," of the ",(0,s.jsx)(t.code,{children:"test"})," table using the form of ",(0,s.jsx)(t.code,{children:"VALUES"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"// Single-row overwrite.\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1);\n// Multi-row overwrite.\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2), (4, 2 + 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2), (4, 2 * 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT), (4, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1), (4);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Unlike overwriting an entire table, the above statements are overwriting partitions in the table. Partitions can be overwritten one at a time or multiple partitions can be overwritten at once. It should be noted that only data that satisfies the corresponding partition filtering condition can be overwritten successfully. If there is data in the overwritten data that does not satisfy any of the partitions, the overwrite will fail. An example of a failure is shown below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) VALUES (7, 2);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The data overwritten by the above statements (",(0,s.jsx)(t.code,{children:"c1=7"}),") does not satisfy the conditions of partitions ",(0,s.jsx)(t.code,{children:"P1"})," and ",(0,s.jsx)(t.code,{children:"P2"}),", so the overwrite will fail."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite partitions ",(0,s.jsx)(t.code,{children:"P1"})," and ",(0,s.jsx)(t.code,{children:"P2"})," of the ",(0,s.jsx)(t.code,{children:"test"})," table in the form of a query statement. The data format of the ",(0,s.jsx)(t.code,{children:"test2"})," table and the ",(0,s.jsx)(t.code,{children:"test"})," table must be consistent. If they are not consistent, implicit data type conversion will be triggered."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Overwrite partitions ",(0,s.jsx)(t.code,{children:"P1"})," and ",(0,s.jsx)(t.code,{children:"P2"})," of the ",(0,s.jsx)(t.code,{children:"test"})," table and specify a label."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label3` SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label4` (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"overwrite-auto-detect-partition",children:"Overwrite Auto Detect Partition"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This feature is available since version 2.1.3."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When the PARTITION clause specified by the INSERT OVERWRITE command is ",(0,s.jsx)(t.code,{children:"PARTITION(*)"}),", this overwrite will automatically detect the partition where the data is located. Example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'mysql> create table test(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p10 values less than (10),\n    -> PARTITION p100 values less than (100),\n    -> PARTITION pMAX values less than (maxvalue)\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> insert into test values (1), (2), (15), (100), (200);\nQuery OK, 5 rows affected (0.29 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    1 |\n|    2 |\n|   15 |\n|  100 |\n|  200 |\n+------+\n5 rows in set (0.23 sec)\n\nmysql> insert overwrite table test partition(*) values (3), (1234);\nQuery OK, 2 rows affected (0.24 sec)\n\nmysql> select * from test order by k0;\n+------+\n| k0   |\n+------+\n|    3 |\n|   15 |\n| 1234 |\n+------+\n3 rows in set (0.20 sec)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, all data in partitions ",(0,s.jsx)(t.code,{children:"p10"})," and ",(0,s.jsx)(t.code,{children:"pMAX"}),", where data 3 and 1234 are located, are overwritten, while partition ",(0,s.jsx)(t.code,{children:"p100"})," remains unchanged. This operation can be interpreted as syntactic sugar for specifying a specific partition to be overwritten by the PARTITION clause during an INSERT OVERWRITE operation, which is implemented in the same way as ",(0,s.jsx)(t.a,{href:"#overwrite-table-partition",children:"specify a partition to overwrite"}),". The ",(0,s.jsx)(t.code,{children:"PARTITION(*)"})," syntax eliminates the need to manually fill in all the partition names when overwriting a large number of partitions."]}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"INSERT OVERWRITE, OVERWRITE, AUTO DETECT\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var i=n(667294);let s={},a=i.createContext(s);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);