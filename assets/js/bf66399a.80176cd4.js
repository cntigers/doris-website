"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["983509"],{226310:function(e,n,t){t.r(n),t.d(n,{default:()=>g,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"table-design/data-model/aggregate","title":"Aggregate Model","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/table-design/data-model/aggregate.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/aggregate","permalink":"/docs/2.0/table-design/data-model/aggregate","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Aggregate Model","language":"en"},"sidebar":"docs","previous":{"title":"Unique Key Model","permalink":"/docs/2.0/table-design/data-model/unique"},"next":{"title":"Usage Notes","permalink":"/docs/2.0/table-design/data-model/tips"}}'),s=t("785893"),r=t("250065");let i={title:"Aggregate Model",language:"en"},o=void 0,l={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"Principle",id:"principle",level:2},{value:"Table Creation Instructions",id:"table-creation-instructions",level:2},{value:"Data Insertion and Storage",id:"data-insertion-and-storage",level:2},{value:"AGG_STATE",id:"agg_state",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Doris's ",(0,s.jsx)(n.strong,{children:"Aggregate Key Model"})," is designed to efficiently handle aggregation operations in large-scale data queries. By performing pre-aggregation on the data, it reduces redundancy in computations and improves query performance. The model stores only aggregated data, omitting raw data, which saves storage space and enhances query performance."]}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Summarizing Detailed Data"}),": The Aggregate Key Model is used in scenarios like e-commerce platforms evaluating monthly sales, financial risk control calculating customer transaction totals, or advertising campaigns analyzing total ad clicks, for multidimensional summarization of detailed data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"No Need to Query Raw Detailed Data"}),": For use cases such as dashboard reports or user transaction behavior analysis, where the raw data is stored in a data lake and does not need to be retained in the database, only the aggregated data is stored."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"principle",children:"Principle"}),"\n",(0,s.jsxs)(n.p,{children:["Each data import creates a version in the Aggregate Key Model, and during the ",(0,s.jsx)(n.strong,{children:"Compaction"})," stage, versions are merged. When querying, data is aggregated by the primary key:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data Import Stage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Data is imported into the aggregate key table in batches, with each batch creating a new version."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Within each version, data with the same aggregation keys is pre-aggregated (e.g., sum, count, etc.)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Background File Merging Stage (Compaction)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Multiple batches generate multiple version files, which are periodically merged into a larger version file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"During the merge process, data with the same aggregation key is re-aggregated to reduce redundancy and optimize storage."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Query Stage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"During queries, the system aggregates data with the same aggregation key from all versions to ensure accurate results."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This process ensures that aggregation operations are performed efficiently, even with large data volumes. The aggregated results are optimized for fast querying, providing a significant performance improvement over raw data queries"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"table-creation-instructions",children:"Table Creation Instructions"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a table, the ",(0,s.jsx)(n.strong,{children:"AGGREGATE KEY"})," keyword can be used to specify the Aggregate Key Model. The Aggregate Key Model must specify Key columns, which are used to aggregate Value columns during storage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_agg\n(\n    user_id             LARGEINT    NOT NULL,\n    load_dt             DATE        NOT NULL,\n    city                VARCHAR(20),\n    last_visit_dt       DATETIME    REPLACE DEFAULT "1970-01-01 00:00:00",\n    cost                BIGINT      SUM DEFAULT "0",\n    max_dwell           INT         MAX DEFAULT "0",\n)\nAGGREGATE KEY(user_id, load_dt, city)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, a fact table for user information and access behavior is defined, where ",(0,s.jsx)(n.code,{children:"user_id"}),", ",(0,s.jsx)(n.code,{children:"load_date"}),", ",(0,s.jsx)(n.code,{children:"city"}),", and ",(0,s.jsx)(n.code,{children:"age"})," are used as Key columns for aggregation. During data import, the Key columns are aggregated into one row, and the Value columns are aggregated according to the specified aggregation types."]}),"\n",(0,s.jsx)(n.p,{children:"The following types of dimension aggregation are supported in the Aggregate Key Model:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Aggregation Method"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SUM"}),(0,s.jsx)(n.td,{children:"Sum, accumulates multiple Value rows."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"REPLACE"}),(0,s.jsx)(n.td,{children:"Replacement, the Value in the next batch replaces the previously inserted Value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAX"}),(0,s.jsx)(n.td,{children:"Retain the maximum value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MIN"}),(0,s.jsx)(n.td,{children:"Retain the minimum value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"REPLACE_IF_NOT_NULL"}),(0,s.jsx)(n.td,{children:"Replace non-null values. Unlike REPLACE, null values are not replaced."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HLL_UNION"}),(0,s.jsx)(n.td,{children:"Aggregation method for HLL type columns, using the HyperLogLog algorithm."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BITMAP_UNION"}),(0,s.jsx)(n.td,{children:"Aggregation method for BITMAP type columns, performing bitmap union aggregation."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Tip:",type:"info",children:(0,s.jsxs)(n.p,{children:["If the aggregation methods above do not meet your business requirements, consider using the ",(0,s.jsx)(n.code,{children:"agg_state"})," type."]})}),"\n",(0,s.jsx)(n.h2,{id:"data-insertion-and-storage",children:"Data Insertion and Storage"}),"\n",(0,s.jsx)(n.p,{children:"In the Aggregate Key table, data is aggregated based on the primary key. After data insertion, aggregation operations are completed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"aggrate-key-model-insert",src:t(589227).Z+"",width:"5872",height:"2824"})}),"\n",(0,s.jsx)(n.p,{children:"In the example above, there were originally 4 rows of data in the table. After inserting 2 rows, aggregation operations on the dimension columns are performed based on the Key columns:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- 4 rows raw data\nINSERT INTO example_tbl_agg VALUES\n(101, '2024-11-01', 'BJ', '2024-10-29', 10, 20),\n(102, '2024-10-30', 'BJ', '2024-10-29', 20, 20),\n(101, '2024-10-30', 'BJ', '2024-10-28', 5, 40),\n(101, '2024-10-30', 'SH', '2024-10-29', 10, 20);\n\n-- insert into 2 rows\nINSERT INTO example_tbl_agg VALUES\n(101, '2024-11-01', 'BJ', '2024-10-30', 20, 10),\n(102, '2024-11-01', 'BJ', '2024-10-30', 10, 30);\n\n-- check the rows of table\nSELECT * FROM example_tbl_agg;\n+---------+------------+------+---------------------+------+----------------+\n| user_id | load_date  | city | last_visit_date     | cost | max_dwell_time |\n+---------+------------+------+---------------------+------+----------------+\n| 102     | 2024-10-30 | BJ   | 2024-10-29 00:00:00 |   20 |             20 |\n| 102     | 2024-11-01 | BJ   | 2024-10-30 00:00:00 |   10 |             30 |\n| 101     | 2024-10-30 | BJ   | 2024-10-28 00:00:00 |    5 |             40 |\n| 101     | 2024-10-30 | SH   | 2024-10-29 00:00:00 |   10 |             20 |\n| 101     | 2024-11-01 | BJ   | 2024-10-30 00:00:00 |   30 |             20 |\n+---------+------------+------+---------------------+------+----------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"agg_state",children:"AGG_STATE"}),"\n",(0,s.jsx)(n.p,{children:"::: Info Tips:\nAGG_STATE is an experimental feature and is recommended for use in development and testing environments.\n:::"}),"\n",(0,s.jsx)(n.p,{children:"AGG_STATE cannot be used as a Key column. The aggregation function's signature must be declared when creating the table. Users don\u2019t need to specify length or default values. The data storage size depends on the function implementation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set enable_agg_state = true;\nCREATE TABLE aggstate(\n    k1   int  NULL,\n    v1   int  SUM,\n    v2   agg_state<group_concat(string)> generic\n)\nAGGREGATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS 3;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this case, ",(0,s.jsx)(n.code,{children:"agg_state"})," is used to declare the data type as ",(0,s.jsx)(n.code,{children:"agg_state"}),", and ",(0,s.jsx)(n.code,{children:"sum/group_concat"})," is the signature of the aggregation function. Note that ",(0,s.jsx)(n.code,{children:"agg_state"})," is a data type, just like ",(0,s.jsx)(n.code,{children:"int"}),", ",(0,s.jsx)(n.code,{children:"array"}),", or ",(0,s.jsx)(n.code,{children:"string"}),". ",(0,s.jsx)(n.code,{children:"agg_state"})," can only be used with combinators such as ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-functions/combinators/state",children:"state"}),", ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-functions/combinators/merge",children:"merge"}),", or ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-functions/combinators/union",children:"union"}),". ",(0,s.jsx)(n.code,{children:"agg_state"})," represents the intermediate result of an aggregation function. For example, for the aggregation function ",(0,s.jsx)(n.code,{children:"group_concat"}),", ",(0,s.jsx)(n.code,{children:"agg_state"})," can represent the intermediate state of ",(0,s.jsx)(n.code,{children:"group_concat('a', 'b', 'c')"}),", rather than the final result."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"agg_state"})," type needs to be generated using the ",(0,s.jsx)(n.code,{children:"state"})," function. For this table, you need to use ",(0,s.jsx)(n.code,{children:"group_concat_state"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into aggstate values(1, 1, group_concat_state('a'));\ninsert into aggstate values(1, 2, group_concat_state('b'));\ninsert into aggstate values(1, 3, group_concat_state('c'));\ninsert into aggstate values(2, 4, group_concat_state('d'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The calculation method in the table is shown in the diagram below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"state-func-group-concat-state-result-1",src:t(863970).Z+"",width:"2796",height:"792"})}),"\n",(0,s.jsxs)(n.p,{children:["When querying the table, the ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-functions/combinators/merge/",children:"merge"})," operation can be used to merge multiple ",(0,s.jsx)(n.code,{children:"state"})," values and return the final aggregation result. Since ",(0,s.jsx)(n.code,{children:"group_concat"})," requires ordering, the result may be unstable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select group_concat_merge(v2) from aggstate;\n+------------------------+\n| group_concat_merge(v2) |\n+------------------------+\n| d,c,b,a                |\n+------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you do not want the final aggregation result, you can use ",(0,s.jsx)(n.code,{children:"union"})," to combine multiple intermediate aggregation results and generate a new intermediate result."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into aggstate select 3,sum_union(k2),group_concat_union(k3) from aggstate;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The calculations in the table are as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"state-func-group-concat-state-result-2",src:t(37443).Z+"",width:"2796",height:"980"})}),"\n",(0,s.jsx)(n.p,{children:"The query result is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate;\n+---------------+------------------------+\n| sum_merge(k2) | group_concat_merge(k3) |\n+---------------+------------------------+\n|            20 | c,b,a,d,c,b,a,d        |\n+---------------+------------------------+\n\nmysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate where k1 != 2;\n+---------------+------------------------+\n| sum_merge(k2) | group_concat_merge(k3) |\n+---------------+------------------------+\n|            16 | c,b,a,d,c,b,a          |\n+---------------+------------------------+\n"})})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},589227:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/aggrate-key-model-insert-da52f9903218567c94814e1f793743b8.png"},863970:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/state-func-group-concat-state-result-1-ce42d97ce583b45f53f7007dc9f877fc.png"},37443:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/state-func-group-concat-state-result-2-522093a6d2ff018cab756c022e1dbb18.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);