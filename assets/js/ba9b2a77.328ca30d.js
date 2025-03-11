"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["377525"],{655188:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>h,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"table-design/data-model/tips","title":"Usage Notes","description":"\x3c!--","source":"@site/docs/table-design/data-model/tips.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/tips","permalink":"/docs/dev/table-design/data-model/tips","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Usage Notes","language":"en"},"sidebar":"docs","previous":{"title":"Aggregate Model","permalink":"/docs/dev/table-design/data-model/aggregate"},"next":{"title":"Data Distribution Concept","permalink":"/docs/dev/table-design/data-partitioning/data-distribution"}}'),r=t("785893"),d=t("250065");let i={title:"Usage Notes",language:"en"},l=void 0,h={},o=[{value:"Suggestions for column types",id:"suggestions-for-column-types",level:2},{value:"Limitations of aggregate model",id:"limitations-of-aggregate-model",level:2},{value:"MoW Unique Key Model",id:"mow-unique-key-model",level:3},{value:"Duplicate model",id:"duplicate-model",level:3},{value:"Key columns",id:"key-columns",level:2},{value:"Suggestions for choosing data model",id:"suggestions-for-choosing-data-model",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"suggestions-for-column-types",children:"Suggestions for column types"}),"\n",(0,r.jsx)(n.p,{children:"Suggestions for column types when creating a table:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The Key column should precede all Value columns."}),"\n",(0,r.jsx)(n.li,{children:"Whenever possible, choose integer types. This is because the calculation and search efficiency of integer types are much higher than that of strings."}),"\n",(0,r.jsx)(n.li,{children:"For selecting integer types of different lengths, follow the principle of sufficiency."}),"\n",(0,r.jsx)(n.li,{children:"For the lengths of VARCHAR and STRING types, also follow the principle of sufficiency."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limitations-of-aggregate-model",children:"Limitations of aggregate model"}),"\n",(0,r.jsx)(n.p,{children:"This section is about the limitations of the Aggregate Model."}),"\n",(0,r.jsx)(n.p,{children:"The Aggregate Model only presents the aggregated data. That means we have to ensure the presentation consistency of data that has not yet been aggregated (for example, two different import batches). The following provides further explanation with examples."}),"\n",(0,r.jsx)(n.p,{children:"Suppose that you have the following table schema:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ColumnName"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"AggregationType"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user_id"}),(0,r.jsx)(n.td,{children:"LARGEINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"User ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Date when the data are imported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cost"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"SUM"}),(0,r.jsx)(n.td,{children:"Total user consumption"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Assume that there are two batches of data that have been imported into the storage engine as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 1"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 2"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10003"}),(0,r.jsx)(n.td,{children:"2017-11-22"}),(0,r.jsx)(n.td,{children:"22"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"As you can see, data about User 10001 in these two import batches have not yet been aggregated. However, in order to ensure that users can only query the aggregated data as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"51"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10003"}),(0,r.jsx)(n.td,{children:"2017-11-22"}),(0,r.jsx)(n.td,{children:"22"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"We have added an aggregation operator to the  query engine to ensure the presentation consistency of data."}),"\n",(0,r.jsx)(n.p,{children:"In addition, on the aggregate column (Value), when executing aggregate class queries that are inconsistent with the aggregate type, please pay attention to the semantics. For example, in the example above, if you execute the following query:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SELECT MIN(cost) FROM table;"})}),"\n",(0,r.jsx)(n.p,{children:"The result will be 5, not 1."}),"\n",(0,r.jsx)(n.p,{children:"Meanwhile, this consistency guarantee could considerably reduce efficiency in some queries."}),"\n",(0,r.jsx)(n.p,{children:"Take the basic count (*) query as an example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SELECT COUNT(*) FROM table;"})}),"\n",(0,r.jsxs)(n.p,{children:["In other databases, such queries return results quickly. Because in actual implementation, the models can get the query result by counting rows and saving the statistics upon import, or by scanning only one certain column of data to get count value upon query, with very little overhead. But in Doris's Aggregation Model, the overhead of such queries is ",(0,r.jsx)(n.strong,{children:"large"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For the previous example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 1"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 2"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10003"}),(0,r.jsx)(n.td,{children:"2017-11-22"}),(0,r.jsx)(n.td,{children:"22"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Since the final aggregation result is:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"51"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10003"}),(0,r.jsx)(n.td,{children:"2017-11-22"}),(0,r.jsx)(n.td,{children:"22"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The correct result of  ",(0,r.jsx)(n.code,{children:"select count (*) from table;"}),"  should be ",(0,r.jsx)(n.strong,{children:"4"}),". But if the model only scans the ",(0,r.jsx)(n.code,{children:"user_id"}),"\ncolumn and operates aggregation upon query, the final result will be ",(0,r.jsx)(n.strong,{children:"3"})," (10001, 10002, 10003).\nAnd if it does not operate aggregation, the final result will be ",(0,r.jsx)(n.strong,{children:"5"})," (a total of five rows in two batches). Apparently, both results are wrong."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to get the correct result, we must read both the  ",(0,r.jsx)(n.code,{children:"user_id"})," and ",(0,r.jsx)(n.code,{children:"date"})," column, and ",(0,r.jsx)(n.strong,{children:"performs aggregation"})," when querying.\nThat is to say, in the ",(0,r.jsx)(n.code,{children:"count (*)"})," query, Doris must scan all AGGREGATE KEY columns (in this case, ",(0,r.jsx)(n.code,{children:"user_id"})," and ",(0,r.jsx)(n.code,{children:"date"}),")\nand aggregate them to get the semantically correct results. That means if there are many aggregated columns, ",(0,r.jsx)(n.code,{children:"count (*)"})," queries could involve scanning large amounts of data."]}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, if you need to perform frequent ",(0,r.jsx)(n.code,{children:"count (*)"})," queries, we recommend that you simulate ",(0,r.jsx)(n.code,{children:"count (*)"})," by adding a\ncolumn of value 1 and aggregation type SUM. In this way, the table schema in the previous example will be modified as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ColumnName"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"AggregationType"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user ID"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"User ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Date when the data are imported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cost"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"SUM"}),(0,r.jsx)(n.td,{children:"Total user consumption"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"SUM"}),(0,r.jsx)(n.td,{children:"For count queries"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The above adds a count column, the value of which will always be ",(0,r.jsx)(n.strong,{children:"1"}),", so the result of ",(0,r.jsx)(n.code,{children:"select count (*) from table;"}),"\nis equivalent to that of ",(0,r.jsx)(n.code,{children:"select sum (count) from table;"})," The latter is much more efficient than the former. However,\nthis method has its shortcomings, too. That is, it  requires that users will not import rows with the same values in the\nAGGREGATE KEY columns. Otherwise, ",(0,r.jsx)(n.code,{children:"select sum (count) from table;"})," can only express the number of rows of the originally imported data, instead of the semantics of ",(0,r.jsx)(n.code,{children:"select count (*) from table;"})]}),"\n",(0,r.jsxs)(n.p,{children:["Another method is to add a ",(0,r.jsx)(n.code,{children:"cound"})," column of value 1 but aggregation type of REPLACE. Then ",(0,r.jsx)(n.code,{children:"select sum (count) from table;"}),"\nand ",(0,r.jsx)(n.code,{children:"select count (*) from table;"}),"  could produce the same results. Moreover, this method does not require the absence of same AGGREGATE KEY columns in the import data."]}),"\n",(0,r.jsx)(n.h3,{id:"mow-unique-key-model",children:"MoW Unique Key Model"}),"\n",(0,r.jsxs)(n.p,{children:["The Merge on Write implementation in the Unique Model does not impose the same limitation as the Aggregate Model.\nIn Merge on Write, the model adds a  ",(0,r.jsx)(n.code,{children:"delete bitmap"})," for each imported rowset to mark the data being overwritten or deleted. With the previous example, after Batch 1 is imported, the data status will be as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 1"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"}),(0,r.jsx)(n.th,{children:"delete bit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"After Batch 2 is imported, the duplicate rows in the first batch will be marked as deleted, and the status of the two batches of data is as follows"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 1"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"}),(0,r.jsx)(n.th,{children:"delete bit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"50"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10002"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"39"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"batch 2"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"user_id"}),(0,r.jsx)(n.th,{children:"date"}),(0,r.jsx)(n.th,{children:"cost"}),(0,r.jsx)(n.th,{children:"delete bit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-20"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10001"}),(0,r.jsx)(n.td,{children:"2017-11-21"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10003"}),(0,r.jsx)(n.td,{children:"2017-11-22"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["In queries, all data marked ",(0,r.jsx)(n.code,{children:"true"})," in the ",(0,r.jsx)(n.code,{children:"delete bitmap"})," will not be read, so there is no need for data aggregation.\nSince there are 4 valid rows in the above data, the query result should also be 4.  This also enables minimum overhead since it only scans one column of data."]}),"\n",(0,r.jsxs)(n.p,{children:["In the test environment, ",(0,r.jsx)(n.code,{children:"count(*)"})," queries in Merge on Write of the Unique Model deliver 10 times higher performance than that of the Aggregate Model."]}),"\n",(0,r.jsx)(n.h3,{id:"duplicate-model",children:"Duplicate model"}),"\n",(0,r.jsxs)(n.p,{children:["The Duplicate Model does not impose the same limitation as the Aggregate Model because it does not involve aggregation semantics.\nFor any columns, it can return the semantically correct results in  ",(0,r.jsx)(n.code,{children:"count (*)"})," queries."]}),"\n",(0,r.jsx)(n.h2,{id:"key-columns",children:"Key columns"}),"\n",(0,r.jsx)(n.p,{children:'For the Duplicate, Aggregate, and Unique Models, the Key columns will be specified when the table is created,\nbut there exist some differences: In the Duplicate Model, the Key columns of the table can be regarded as just "sorting columns",\nbut not unique identifiers. In Aggregate and Unique Models, the Key columns are both "sorting columns" and "unique identifier columns".'}),"\n",(0,r.jsx)(n.h2,{id:"suggestions-for-choosing-data-model",children:"Suggestions for choosing data model"}),"\n",(0,r.jsxs)(n.p,{children:["Since the data model was established when the table was built, and ",(0,r.jsx)(n.strong,{children:"irrevocable thereafter, it is very important to select the appropriate data model"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The Aggregate Model can greatly reduce the amount of data scanned and query computation by pre-aggregation. Thus, it is very suitable for report query scenarios with fixed patterns. But this model is unfriendly to ",(0,r.jsx)(n.code,{children:"count (*)"})," queries. Meanwhile, since the aggregation method on the Value column is fixed, semantic correctness should be considered in other types of aggregation queries."]}),"\n",(0,r.jsx)(n.li,{children:"The Unique Model guarantees the uniqueness of primary key for scenarios requiring a unique primary key. The downside is that it cannot exploit the advantage brought by pre-aggregation such as ROLLUP in queries. Users who have high-performance requirements for aggregate queries are recommended to use the newly added Merge on Write implementation since version 1.2."}),"\n",(0,r.jsx)(n.li,{children:"The Duplicate Model is suitable for ad-hoc queries of any dimensions. Although it may not be able to take advantage of the pre-aggregation feature, it is not limited by what constrains the Aggregate Model and can give full play to the advantage of columnar storage (reading only the relevant columns, but not all Key columns)."}),"\n",(0,r.jsxs)(n.li,{children:["If user need to use partial-update, please refer to document ",(0,r.jsx)(n.a,{href:"../../data-operate/update/update-of-unique-model",children:"partial-update"})]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);