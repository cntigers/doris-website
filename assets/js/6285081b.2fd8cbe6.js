"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["565525"],{394565:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"data-operate/update/unique-update-concurrent-control","title":"Concurrency Control for Updates in the Primary Key Model","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/data-operate/update/unique-update-concurrent-control.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/unique-update-concurrent-control","permalink":"/docs/2.0/data-operate/update/unique-update-concurrent-control","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Concurrency Control for Updates in the Primary Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Updating Data on Aggregate Key Model","permalink":"/docs/2.0/data-operate/update/update-of-aggregate-model"},"next":{"title":"Deleting Data with DELETE Command","permalink":"/docs/2.0/data-operate/delete/delete-manual"}}'),a=t("785893"),o=t("250065");let r={title:"Concurrency Control for Updates in the Primary Key Model",language:"en"},i=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Update Concurrency Control",id:"update-concurrency-control",level:2},{value:"Sequence Column",id:"sequence-column",level:2},{value:"Basic Principles",id:"basic-principles",level:3},{value:"Syntax Usage",id:"syntax-usage",level:3},{value:"Enabling Sequence Column Support",id:"enabling-sequence-column-support",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Note",id:"note",level:3}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Doris adopts a Multi-Version Concurrency Control (MVCC) mechanism to manage concurrent updates. Each data load operation is assigned a transaction, which ensures atomicity (i.e., the operation either fully succeeds or completely fails). Upon transaction commit, the system assigns a version number. When using the Unique Key model and loading multiple batches of data with duplicate primary keys, Doris determines the overwrite order based on the version number: data with a higher version number will overwrite data with a lower version number."}),"\n",(0,a.jsx)(n.p,{children:"In certain scenarios, users may need to specify a sequence column in the table creation statement to customize the order in which data takes effect. For example, when synchronizing data into Doris using multiple concurrent processes, the data may arrive out of order. This could lead to older data overwriting newer data due to its delayed arrival. To address this, users can assign a lower sequence value to the older data and a higher sequence value to the newer data, enabling Doris to determine the update order based on the sequence values provided by the user."}),"\n",(0,a.jsxs)(n.p,{children:["Additionally, ",(0,a.jsx)(n.code,{children:"UPDATE"})," statements differ significantly from updates performed via data loads at the implementation level. An ",(0,a.jsx)(n.code,{children:"UPDATE"})," operation involves two steps: reading the data to be updated from the database and writing the updated data back. By default, ",(0,a.jsx)(n.code,{children:"UPDATE"})," statements use table-level locks to provide transaction capabilities with Serializable isolation, meaning multiple ",(0,a.jsx)(n.code,{children:"UPDATE"})," statements must be executed serially. However, users can bypass this restriction by modifying the configuration. For detailed instructions, refer to the relevant section below."]}),"\n",(0,a.jsx)(n.h2,{id:"update-concurrency-control",children:"Update Concurrency Control"}),"\n",(0,a.jsxs)(n.p,{children:["By default, concurrent ",(0,a.jsx)(n.code,{children:"UPDATE"}),"s on the same table are not allowed in Doris."]}),"\n",(0,a.jsxs)(n.p,{children:["The main reason is that Doris currently supports row-level updates, which means that even if the user specifies to update only a specific column (e.g., ",(0,a.jsx)(n.code,{children:"SET v2 = 1"}),"), all other value columns will be overwritten as well (even though their values remain unchanged)."]}),"\n",(0,a.jsxs)(n.p,{children:["This poses a problem when multiple ",(0,a.jsx)(n.code,{children:"UPDATE"}),' operations are performed concurrently on the same row. The behavior becomes unpredictable, and it may lead to inconsistent or "dirty" data.']}),"\n",(0,a.jsxs)(n.p,{children:["However, in practical applications, if the user can ensure that concurrent updates will not affect the same row simultaneously, they can manually enable the concurrent update restriction. This can be done by modifying the FE (Frontend) configuration ",(0,a.jsx)(n.code,{children:"enable_concurrent_update"}),". When this configuration is set to ",(0,a.jsx)(n.code,{children:"true"}),", the update command will not have transaction guarantees."]}),"\n",(0,a.jsx)(n.admonition,{title:"Caution:",type:"caution",children:(0,a.jsxs)(n.p,{children:["Enabling the ",(0,a.jsx)(n.code,{children:"enable_concurrent_update"})," configuration may introduce certain performance risks."]})}),"\n",(0,a.jsx)(n.h2,{id:"sequence-column",children:"Sequence Column"}),"\n",(0,a.jsx)(n.p,{children:"The Unique model primarily caters to scenarios that require unique primary keys, ensuring the uniqueness constraint. When loading data in the same batch or different batches, the replacement order is not guaranteed. The uncertainty in the replacement order results in ambiguity in the specific data loaded into the table."}),"\n",(0,a.jsx)(n.p,{children:"To address this issue, Doris supports sequence columns. Users can specify a sequence column during data load, allowing the replacement order to be controlled by the user. The sequence column determines the order of replacements for rows with the same key column. A higher sequence value can replace a lower one, but not vice versa. This method delegates the determination of order to the user, enabling control over the replacement sequence."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Sequence columns are currently supported only in the Unique model."})}),"\n",(0,a.jsx)(n.h3,{id:"basic-principles",children:"Basic Principles"}),"\n",(0,a.jsxs)(n.p,{children:["The basic principle is achieved by adding a hidden column called ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.strong,{children:"DORIS_SEQUENCE_COL"})}),". The type of this column is specified by the user during table creation and its specific value is determined during data load. Based on this value, the row that takes effect is determined for rows with the same key column."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Table Creation"})}),"\n",(0,a.jsxs)(n.p,{children:["When creating a Unique table, an automatically added hidden column called ",(0,a.jsx)(n.strong,{children:"DORIS_SEQUENCE_COL"})," is created, based on the user-specified type."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data load"})}),"\n",(0,a.jsxs)(n.p,{children:["During data load, the FE (Frontend) sets the value of the hidden column as the value of the ",(0,a.jsx)(n.code,{children:"ORDER BY"})," expression (for broker load and routine load) or the value of the ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," expression (for stream load). The value column is replaced based on this sequence value. The value of the hidden column, ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"}),", can be set as a column in the data source or a column in the table structure."]}),"\n",(0,a.jsx)(n.h3,{id:"syntax-usage",children:"Syntax Usage"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Sequence Column has two ways to create a table, one is to set the ",(0,a.jsx)(n.code,{children:"sequence_col"})," attribute when creating a table, and the other is to set the ",(0,a.jsx)(n.code,{children:"sequence_type"})," attribute when creating a table."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. Set ",(0,a.jsx)(n.code,{children:"sequence_col"})," (Recommended)"]})}),"\n",(0,a.jsx)(n.p,{children:"When creating a Unique table, specify the mapping of the sequence column to other columns in the table."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"PROPERTIES (\n    \"function_column.sequence_col\" = 'column_name',\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sequence_col"})," is used to specify the mapping of the sequence column to a column in the table. The column can be of type integer or time type (DATE, DATETIME), and its type cannot be changed after creation."]}),"\n",(0,a.jsx)(n.p,{children:"The load method is the same as when there is no sequence column, making it relatively simple. This method is recommended."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["2. Set ",(0,a.jsx)(n.code,{children:"sequence_type"})]})}),"\n",(0,a.jsx)(n.p,{children:"When creating a Unique table, specify the type of the sequence column."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sequence_type"})," is used to specify the type of the sequence column, which can be integer or time type (DATE, DATETIME)."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"During data load, you need to specify the mapping of the sequence column to other columns."})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"1. Stream Load"})}),"\n",(0,a.jsxs)(n.p,{children:["The syntax for stream load is to add the mapping of the hidden column ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," to the ",(0,a.jsx)(n.code,{children:"source_sequence"})," in the header. Example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"2. Broker Load"})}),"\n",(0,a.jsxs)(n.p,{children:["Set the mapping of the hidden column ",(0,a.jsx)(n.code,{children:"source_sequence"})," in the ",(0,a.jsx)(n.code,{children:"ORDER BY"})," clause."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"3. Routine Load"})}),"\n",(0,a.jsx)(n.p,{children:"The mapping method is the same as above. Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1  100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n'})}),"\n",(0,a.jsx)(n.h3,{id:"enabling-sequence-column-support",children:"Enabling Sequence Column Support"}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," or ",(0,a.jsx)(n.code,{children:"function_column.sequence_type"})," is set when creating a new table, the new table will support sequence columns."]}),"\n",(0,a.jsxs)(n.p,{children:["For a table that does not support sequence columns, if you want to use this feature, you can use the following statement: ",(0,a.jsx)(n.code,{children:'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")'})," to enable it."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are unsure whether a table supports sequence columns, you can set a session variable to display hidden columns with ",(0,a.jsx)(n.code,{children:"SET show_hidden_columns=true"}),", and then use ",(0,a.jsx)(n.code,{children:"desc tablename"}),". If the output includes the ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"})," column, it means that the table supports sequence columns; otherwise, it does not."]}),"\n",(0,a.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example using Stream Load to demonstrate the usage:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"1. Create a table with sequence col support"})}),"\n",(0,a.jsxs)(n.p,{children:["Create a unique model ",(0,a.jsx)(n.code,{children:"test_table"})," and specify the sequence column mapping to the ",(0,a.jsx)(n.code,{children:"modify_date"})," column in the table."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Table structure:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL> desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"2. Load data normally:"})}),"\n",(0,a.jsx)(n.p,{children:"Load the following data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-21	a\n1	2020-02-22	1	2020-02-22	b\n1	2020-02-22	1	2020-03-05	c\n1	2020-02-22	1	2020-02-26	d\n1	2020-02-22	1	2020-02-23	e\n1	2020-02-22	1	2020-02-24	b\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here is an example using Stream Load:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"curl --location-trusted -u root: -T testData http://host:port/api/test/test_table/_stream_load\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the data load, because the value of the sequence column (i.e., modify_date) '2020-03-05' is the maximum, the keyword column retains the value 'c'."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"3. Guarantee the order of replacement"})}),"\n",(0,a.jsx)(n.p,{children:"After completing the above steps, load the following data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-22	a\n1	2020-02-22	1	2020-02-23	b\n"})}),"\n",(0,a.jsx)(n.p,{children:"Query the data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the loaded data, the sequence column (modify_date) of all previously loaded data is compared, and '2020-03-05' is the maximum. Therefore, the keyword column retains the value 'c'."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"4. Try loading the following data again"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"1	2020-02-22	1	2020-02-22	a\n1	2020-02-22	1	2020-03-23	w\n"})}),"\n",(0,a.jsx)(n.p,{children:"Query the data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now the original data in the table can be replaced. In summary, during thestream load process, the sequence column is used to determine the order of replacement for duplicate records. The record with the maximum value in the sequence column will be retained in the table."}),"\n",(0,a.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"To prevent misuse, users must explicitly specify the sequence column in loading tasks such as StreamLoad/BrokerLoad and in insert statements for row updates (unless the default value of the sequence column is CURRENT_TIMESTAMP). Otherwise, the following error message will be received:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"Table test_tbl has sequence column, need to specify the sequence column\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Since version 2.0, Doris has supported partial column updates for Merge-on-Write implementation of Unique Key tables. In partial column update, users can update only a subset of columns each time, so it is not necessary to include the sequence column. If the loading task submitted by the user includes the sequence column, it has no effect. If the loading task submitted by the user does not include the sequence column, Doris will use the value of the matching sequence column from the historical data as the value of the updated row's sequence column. If there is no existing column with the same key in the historical data, it will be automatically filled with null or the default value."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In cases of concurrent data load, Doris utilizes MVCC (Multi-Version Concurrency Control) mechanism to ensure data correctness. If two batches of loaded data update different columns of the same key, the load task with a higher system version will reapply the data for the same key written by the load task with a lower version after the lower version load task succeeds."}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},o=s.createContext(a);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);