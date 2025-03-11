"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["202058"],{368742:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/INSERT","title":"INSERT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/DML/INSERT.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/INSERT","permalink":"/docs/sql-manual/sql-statements/data-modification/DML/INSERT","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"INSERT","language":"en"},"sidebar":"docs","previous":{"title":"EXPLAIN","permalink":"/docs/sql-manual/sql-statements/data-query/EXPLAIN"},"next":{"title":"INSERT OVERWRITE","permalink":"/docs/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE"}}'),i=n("785893"),l=n("250065");let a={title:"INSERT",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"The change statement is to complete the data insertion operation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,i.jsx)(t.p,{children:"Parameters"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["tablet_name: The destination table for importing data. Can be of the form ",(0,i.jsx)(t.code,{children:"db_name.table_name"})]}),"\n",(0,i.jsxs)(t.p,{children:["partitions: Specify the partitions to be imported, which must be partitions that exist in ",(0,i.jsx)(t.code,{children:"table_name"}),". Multiple partition names are separated by commas"]}),"\n",(0,i.jsx)(t.p,{children:"label: specify a label for the Insert task"}),"\n",(0,i.jsxs)(t.p,{children:["column_name: The specified destination column, must be a column that exists in ",(0,i.jsx)(t.code,{children:"table_name"})]}),"\n",(0,i.jsx)(t.p,{children:"expression: the corresponding expression that needs to be assigned to a column"}),"\n",(0,i.jsx)(t.p,{children:"DEFAULT: let the corresponding column use the default value"}),"\n",(0,i.jsx)(t.p,{children:"query: a common query, the result of the query will be written to the target"}),"\n",(0,i.jsxs)(t.p,{children:["hint: some indicator used to indicate the execution behavior of ",(0,i.jsx)(t.code,{children:"INSERT"}),". You can choose one of this values: ",(0,i.jsx)(t.code,{children:"/*+ STREAMING */"}),", ",(0,i.jsx)(t.code,{children:"/*+ SHUFFLE */"})," or `/*+ NOSHUFFLE */."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"STREAMING: At present, it has no practical effect and is only reserved for compatibility with previous versions. (In the previous version, adding this hint would return a label, but now it defaults to returning a label)"}),"\n",(0,i.jsx)(t.li,{children:"SHUFFLE: When the target table is a partition table, enabling this hint will do repartiiton."}),"\n",(0,i.jsx)(t.li,{children:"NOSHUFFLE: Even if the target table is a partition table, repartiiton will not be performed, but some other operations will be performed to ensure that the data is correctly dropped into each partition."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For a Unique table with merge-on-write enabled, you can also perform partial columns updates using the insert statement. To perform partial column updates with the insert statement, you need to set the session variable enable_unique_key_partial_update to true (the default value for this variable is false, meaning partial columns updates with the insert statement are not allowed by default). When performing partial columns updates, the columns being inserted must contain at least all the Key columns and specify the columns you want to update. If the Key column values for the inserted row already exist in the original table, the data in the row with the same key column values will be updated. If the Key column values for the inserted row do not exist in the original table, a new row will be inserted into the table. In this case, columns not specified in the insert statement must either have default values or be nullable. These missing columns will first attempt to be populated with default values, and if a column has no default value, it will be filled with null. If a column cannot be null, the insert operation will fail."}),"\n",(0,i.jsxs)(t.p,{children:["Please note that the default value of the session variable ",(0,i.jsx)(t.code,{children:"enable_insert_strict"}),", which controls whether the insert statement operates in strict mode, is true. In other words, the insert statement is in strict mode by default, and in this mode, updating non-existing keys in partial column updates is not allowed. Therefore, when using the insert statement for partial columns update and wishing to insert non-existing keys, you need to set ",(0,i.jsx)(t.code,{children:"enable_unique_key_partial_update"})," to true and simultaneously set ",(0,i.jsx)(t.code,{children:"enable_insert_strict"})," to false."]}),"\n",(0,i.jsx)(t.p,{children:"Notice:"}),"\n",(0,i.jsxs)(t.p,{children:["When executing the ",(0,i.jsx)(t.code,{children:"INSERT"})," statement, the default behavior is to filter the data that does not conform to the target table format, such as the string is too long. However, for business scenarios that require data not to be filtered, you can set the session variable ",(0,i.jsx)(t.code,{children:"enable_insert_strict"})," to ",(0,i.jsx)(t.code,{children:"true"})," to ensure that ",(0,i.jsx)(t.code,{children:"INSERT"})," will not be executed successfully when data is filtered out."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"test"})," table contains two columns ",(0,i.jsx)(t.code,{children:"c1"}),", ",(0,i.jsx)(t.code,{children:"c2"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Import a row of data into the ",(0,i.jsx)(t.code,{children:"test"})," table"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The first and second statements have the same effect. When no target column is specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, use the default value of the ",(0,i.jsx)(t.code,{children:"c2"})," column to complete the data import."]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Import multiple rows of data into the ",(0,i.jsx)(t.code,{children:"test"})," table at one time"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The first and second statements have the same effect, import two pieces of data into the ",(0,i.jsx)(t.code,{children:"test"})," table at one time\nThe effect of the third and fourth statements is known, and the default value of the ",(0,i.jsx)(t.code,{children:"c2"})," column is used to import two pieces of data into the ",(0,i.jsx)(t.code,{children:"test"})," table"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Import a query result into the ",(0,i.jsx)(t.code,{children:"test"})," table"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["Import a query result into the ",(0,i.jsx)(t.code,{children:"test"})," table, specifying the partition and label"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"INSERT\n"})}),"\n",(0,i.jsx)(t.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"View the returned results"}),"\n",(0,i.jsx)(t.p,{children:"The INSERT operation is a synchronous operation, and the return of the result indicates the end of the operation. Users need to perform corresponding processing according to the different returned results."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The execution is successful, the result set is empty"}),"\n",(0,i.jsx)(t.p,{children:"If the result set of the insert corresponding to the select statement is empty, it will return as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(t.code,{children:"0 rows affected"})," means that no data was imported."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The execution is successful, the result set is not empty"}),"\n",(0,i.jsx)(t.p,{children:"In the case where the result set is not empty. The returned results are divided into the following situations:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Insert executes successfully and is visible:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(t.code,{children:"4 rows affected"})," means that a total of 4 rows of data were imported. ",(0,i.jsx)(t.code,{children:"2 warnings"})," indicates the number of lines to be filtered."]}),"\n",(0,i.jsx)(t.p,{children:"Also returns a json string:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"label"})," is a user-specified label or an automatically generated label. Label is the ID of this Insert Into import job. Each import job has a unique Label within a single database."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"status"})," indicates whether the imported data is visible. Show ",(0,i.jsx)(t.code,{children:"visible"})," if visible, ",(0,i.jsx)(t.code,{children:"committed"})," if not visible."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"txnId"})," is the id of the import transaction corresponding to this insert."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"err"})," field shows some other unexpected errors."]}),"\n",(0,i.jsx)(t.p,{children:"When you need to view the filtered rows, the user can pass the following statement"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'show load where label="xxx";\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The URL in the returned result can be used to query the wrong data. For details, see the summary of ",(0,i.jsx)(t.strong,{children:"Viewing Error Lines"})," later."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Invisibility of data is a temporary state, this batch of data will eventually be visible"})}),"\n",(0,i.jsx)(t.p,{children:"You can view the visible status of this batch of data with the following statement:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"show transaction where id=4005;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.code,{children:"TransactionStatus"})," column in the returned result is ",(0,i.jsx)(t.code,{children:"visible"}),", the representation data is visible."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Execution failed"}),"\n",(0,i.jsx)(t.p,{children:"Execution failure indicates that no data was successfully imported, and the following is returned:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"ERROR 1064 (HY000): all partitions have no load data"})," shows the reason for the failure. The following url can be used to query the wrong data:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'show load warnings on "url";\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can view the specific error line."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Timeout time"}),"\n",(0,i.jsx)(t.p,{children:"The timeout for an INSERT operation is governed by max(insert_timeout, query_timeout). Both are environment variables, with insert_timeout defaulting to 4 hours and query_timeout defaulting to 5 minutes. If the operation exceeds the timeout, the job will be canceled. The introduction of insert_timeout is to ensure that INSERT statements have a longer default timeout, allowing import tasks to be unaffected by the shorter default timeout typically applied to regular queries."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Label and atomicity"}),"\n",(0,i.jsxs)(t.p,{children:["The INSERT operation also guarantees the atomicity of imports, see the ",(0,i.jsx)(t.a,{href:"/docs/data-operate/transaction",children:"Import Transactions and Atomicity"})," documentation."]}),"\n",(0,i.jsxs)(t.p,{children:["When using ",(0,i.jsx)(t.code,{children:"CTE(Common Table Expressions)"})," as the query part in an insert operation, the ",(0,i.jsx)(t.code,{children:"WITH LABEL"})," and ",(0,i.jsx)(t.code,{children:"column"})," parts must be specified."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Filter Threshold"}),"\n",(0,i.jsxs)(t.p,{children:["Unlike other import methods, INSERT operations cannot specify a filter threshold (",(0,i.jsx)(t.code,{children:"max_filter_ratio"}),"). The default filter threshold is 1, which means that rows with errors can be ignored."]}),"\n",(0,i.jsxs)(t.p,{children:["For business scenarios that require data not to be filtered, you can set ",(0,i.jsx)(t.a,{href:"../../session/variable/SET-VARIABLE",children:"session variable"})," ",(0,i.jsx)(t.code,{children:"enable_insert_strict"})," to ",(0,i.jsx)(t.code,{children:"true"})," to ensure that when there is data When filtered out, ",(0,i.jsx)(t.code,{children:"INSERT"})," will not be executed successfully."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Performance issues"}),"\n",(0,i.jsxs)(t.p,{children:["There is no single row insertion using the ",(0,i.jsx)(t.code,{children:"VALUES"})," method. If you must use it this way, combine multiple rows of data into one INSERT statement for bulk commit."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var s=n(667294);let i={},l=s.createContext(i);function a(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);