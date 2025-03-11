"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["751969"],{755024:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"table-design/data-model/unique","title":"Unique Key Model","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/table-design/data-model/unique.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/unique","permalink":"/docs/3.0/table-design/data-model/unique","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Unique Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Duplicate Key Model","permalink":"/docs/3.0/table-design/data-model/duplicate"},"next":{"title":"Aggregate Model","permalink":"/docs/3.0/table-design/data-model/aggregate"}}'),s=i("785893"),r=i("250065");let a={title:"Unique Key Model",language:"en"},d=void 0,l={},o=[{value:"Use Cases",id:"use-cases",level:2},{value:"Implementation Methods",id:"implementation-methods",level:2},{value:"Merge-on-write",id:"merge-on-write",level:2},{value:"Creating a Merge-on-write Table",id:"creating-a-merge-on-write-table",level:3},{value:"Merge-on-read",id:"merge-on-read",level:2},{value:"Creating a Merge-on-read Table",id:"creating-a-merge-on-read-table",level:3},{value:"Data Insertion and Storage",id:"data-insertion-and-storage",level:2},{value:"Notes",id:"notes",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["When data updates are required, use the ",(0,s.jsx)(n.strong,{children:"Unique Key Model"}),". It guarantees the uniqueness of the Key columns so that new data overwrites existing records with matching keys, ensuring that only the most up-to-date records are maintained. This model is ideal for update scenarios, enabling unique-key-level updates during data insertion.\nThe Unique Key Model has the following characteristics:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Unique Key UPSERT"}),": During insertion, records with duplicate keys are updated, while new keys are inserted."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Automatic Deduplication"}),": The model ensures key uniqueness and automatically deduplicates data based on the unique key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Optimized for High-frequency Updates"}),": It efficiently handles high-frequency updates while balancing update and query performance."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"High-frequency Data Updates"}),": In upstream OLTP databases, where dimension tables are frequently updated, the Unique Key Model can efficiently synchronize the upstream updated records and perform efficient UPSERT operations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Efficient Data Deduplication"}),": In scenarios such as advertising campaigns or customer relationship management systems, where deduplication is required based on user IDs, the Unique Key Model ensures efficient deduplication."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Partial Columns Updates"}),": In scenarios such as in user profiling where dynamic tags change frequently, or in order consumption scenarios where the transaction status needs to be updated. The Unique Key Model's partial column update capability allows for changes to specific columns."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implementation-methods",children:"Implementation Methods"}),"\n",(0,s.jsx)(n.p,{children:"In Doris, the Unique Key Model has two implementation methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Merge-on-write"}),": Starting from version 1.2, the default implementation of the Unique Key Model in Doris is the merge-on-write mode. In this mode, data is immediately merged for the same Key upon writing, ensuring that the data storage state after each write is the final merged result of the unique key, and only the latest result is stored. Merge-on-write provides a good balance between query and write performance, avoiding the need to merge multiple versions of data during queries and ensuring predicate pushdown to the storage layer. The merge-on-write model is recommended for most scenarios."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Merge-on-read"}),": Prior to version 1.2, Doris's Unique Key Model defaulted to merge-on-read mode. In this mode, data is not merged upon writing but is appended incrementally, retaining multiple versions within Doris. During queries or Compaction, data is merged by the same Key version. Merge-on-read is suitable for write-heavy and read-light scenarios, but during queries, multiple versions must be merged, and predicates cannot be pushed down, which may affect query speed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In Doris, there are two types of update semantics for the Unique Key Model:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Full Row Upsert"}),": The default update semantic for the Unique Key Model is ",(0,s.jsx)(n.strong,{children:"full row UPSERT"}),", i.e., UPDATE OR INSERT. If the Key of the row exists, it will be updated; if it does not exist, new data will be inserted. In the full row UPSERT semantic, even if the user inserts data into specific columns using ",(0,s.jsx)(n.code,{children:"INSERT INTO"}),", Doris will fill in the missing columns with NULL values or default values during the planner stage."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Partial Column Upsert"}),": If users want to update specific fields, they need to use the merge-on-write implementation and enable partial column updates support via specific parameters. Please refer to the documentation on ",(0,s.jsx)(n.a,{href:"../../data-operate/update/update-of-unique-model",children:"Partial Column Updates"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"merge-on-write",children:"Merge-on-write"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-merge-on-write-table",children:"Creating a Merge-on-write Table"}),"\n",(0,s.jsxs)(n.p,{children:["To create a Unique Key table, use the ",(0,s.jsx)(n.code,{children:"UNIQUE KEY"})," keyword. Enable merge-on-write mode by setting the ",(0,s.jsx)(n.code,{children:"enable_unique_key_merge_on_write"})," attribute (default since Doris 2.1):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    user_id         LARGEINT        NOT NULL,\n    user_name       VARCHAR(50)     NOT NULL,\n    city            VARCHAR(20),\n    age             SMALLINT,\n    sex             TINYINT\n)\nUNIQUE KEY(user_id, user_name)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"merge-on-read",children:"Merge-on-read"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-merge-on-read-table",children:"Creating a Merge-on-read Table"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a table, the ",(0,s.jsx)(n.code,{children:"UNIQUE KEY"})," keyword can be used to specify a Unique Key table. The merge-on-read mode can be enabled by explicitly disabling the ",(0,s.jsx)(n.code,{children:"enable_unique_key_merge_on_write"})," attribute. Before Doris version 2.1, the merge-on-read mode was enabled by default:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    user_id         LARGEINT        NOT NULL,\n    username        VARCHAR(50)     NOT NULL,\n    city            VARCHAR(20),\n    age             SMALLINT,\n    sex             TINYINT\n)\nUNIQUE KEY(user_id, username)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "false"\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"data-insertion-and-storage",children:"Data Insertion and Storage"}),"\n",(0,s.jsx)(n.p,{children:"In a Unique Key table, the Key columns serve both for sorting and deduplication. New insertions overwrite existing records with matching keys."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"unique-key-model-insert",src:i(598390).Z+"",width:"5188",height:"2596"})}),"\n",(0,s.jsx)(n.p,{children:"As shown in the example, there were 4 rows of data in the original table. After inserting 2 new rows, the newly inserted rows are updated based on the unique key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- insert into raw data\nINSERT INTO example_tbl_unique VALUES\n(101, 'Tom', 'BJ', 26, 1),\n(102, 'Jason', 'BJ', 27, 1),\n(103, 'Juice', 'SH', 20, 2),\n(104, 'Olivia', 'SZ', 22, 2);\n\n-- insert into data to update by key\nINSERT INTO example_tbl_unique VALUES\n(101, 'Tom', 'BJ', 27, 1),\n(102, 'Jason', 'SH', 28, 1);\n\n-- check updated data\nSELECT * FROM example_tbl_unique;\n+---------+----------+------+------+------+\n| user_id | username | city | age  | sex  |\n+---------+----------+------+------+------+\n| 101     | Tom      | BJ   |   27 |    1 |\n| 102     | Jason    | SH   |   28 |    1 |\n| 104     | Olivia   | SZ   |   22 |    2 |\n| 103     | Juice    | SH   |   20 |    2 |\n+---------+----------+------+------+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The implementation mode for Unique Key tables is fixed at creation and cannot be changed via schema alterations."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Under full row UPSERT semantics, if specific columns are omitted during insertion, Doris fills them with NULL or default values during planning."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For partial column upsert, enable merge-on-write mode with the appropriate parameters. Refer to ",(0,s.jsx)(n.a,{href:"../../data-operate/update/update-of-unique-model",children:"Partial Column Updates"})," for guidance."]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},598390:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/unique-key-model-insert-9efad210cd22c8c80098b55f0a4f5d8f.png"},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var t=i(667294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);