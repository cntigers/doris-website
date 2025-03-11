"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["513318"],{812379:function(e,a,n){n.r(a),n.d(a,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>r,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"data-operate/import/data-source/hdfs","title":"HDFS","description":"\x3c!--","source":"@site/docs/data-operate/import/data-source/hdfs.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/hdfs","permalink":"/docs/dev/data-operate/import/data-source/hdfs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HDFS","language":"en"},"sidebar":"docs","previous":{"title":"Flink","permalink":"/docs/dev/data-operate/import/data-source/flink"},"next":{"title":"Amazon S3","permalink":"/docs/dev/data-operate/import/data-source/amazon-s3"}}'),s=n("785893"),d=n("250065");let i={title:"HDFS",language:"en"},l=void 0,r={},o=[{value:"load with HDFS Load",id:"load-with-hdfs-load",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris",level:3},{value:"Step 3: Load data using HDFS Load",id:"step-3-load-data-using-hdfs-load",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data",level:3},{value:"Load with TVF",id:"load-with-tvf",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data-1",level:3},{value:"Step 2: Create a table in Doris",id:"step-2-create-a-table-in-doris-1",level:3},{value:"Step 3: Load data using TVF",id:"step-3-load-data-using-tvf",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data-1",level:3}];function h(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Doris provides two ways to load files from HDFS:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Use HDFS Load to load HDFS files into Doris, which is an asynchronous load method."}),"\n",(0,s.jsx)(a.li,{children:"Use TVF to load HDFS files into Doris, which is a synchronous load method."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"load-with-hdfs-load",children:"load with HDFS Load"}),"\n",(0,s.jsxs)(a.p,{children:["Use HDFS Load to import files on HDFS. For detailed steps, please refer to the ",(0,s.jsx)(a.a,{href:"../import-way/broker-load-manual",children:"Broker Load Manual"})]}),"\n",(0,s.jsx)(a.h3,{id:"step-1-prepare-the-data",children:"Step 1: Prepare the data"}),"\n",(0,s.jsx)(a.p,{children:"Create a CSV file hdfsload_example.csv The file is stored on HDFS and its content is as follows:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(a.h3,{id:"step-2-create-a-table-in-doris",children:"Step 2: Create a table in Doris"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:'CREATE TABLE test_hdfsload(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(a.h3,{id:"step-3-load-data-using-hdfs-load",children:"Step 3: Load data using HDFS Load"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:'LOAD LABEL hdfs_load_2022_04_01\n(\n    DATA INFILE("hdfs://127.0.0.1:8020/tmp/hdfsload_example.csv")\n    INTO TABLE test_hdfsload\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nwith HDFS\n(\n    "fs.defaultFS" = "hdfs://127.0.0.1:8020",\n    "hadoop.username" = "user"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,s.jsx)(a.h3,{id:"step-4-check-the-imported-data",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM test_hdfsload;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Results:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"mysql> select * from test_hdfsload;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsx)(a.h2,{id:"load-with-tvf",children:"Load with TVF"}),"\n",(0,s.jsx)(a.h3,{id:"step-1-prepare-the-data-1",children:"Step 1: Prepare the data"}),"\n",(0,s.jsx)(a.p,{children:"Create a CSV file hdfsload_example.csv The file is stored on HDFS and its content is as follows:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(a.h3,{id:"step-2-create-a-table-in-doris-1",children:"Step 2: Create a table in Doris"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:'CREATE TABLE test_hdfsload(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(a.h3,{id:"step-3-load-data-using-tvf",children:"Step 3: Load data using TVF"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:'INSERT INTO test_hdfsload\nSELECT * FROM hdfs (\n    "uri" = "hdfs://127.0.0.1:8020/tmp/hdfsload_example.csv",\n    "fs.defaultFS" = "hdfs://127.0.0.1:8020",\n    "hadoop.username" = "doris",\n    "format" = "csv",\n    "csv_schema" = "user_id:int;name:string;age:int"\n);\n'})}),"\n",(0,s.jsx)(a.h3,{id:"step-4-check-the-imported-data-1",children:"Step 4: Check the imported data"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM test_hdfsload;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Results:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"mysql> select * from test_hdfsload;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function c(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return l},a:function(){return i}});var t=n(667294);let s={},d=t.createContext(s);function i(e){let a=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);