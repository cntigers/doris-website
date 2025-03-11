"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["780998"],{139549:function(e,i,s){s.r(i),s.d(i,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return h},metadata:function(){return r},toc:function(){return o}});var r=s(870475),t=s(785893),n=s(250065);let h={title:"Apache Doris 3.0.4 Released",summary:"Dear community members, the Apache Doris 3.0.4 version was officially released on February 28, 2025, this version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Storage Efficiency, Compute-Storage Separation, Query Optimizer and Asynchronous Materialized Views, and more.",description:"Dear community members, the Apache Doris 3.0.4 version was officially released on February 28, 2025, this version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Storage Efficiency, Compute-Storage Separation, Query Optimizer and Asynchronous Materialized Views, and more.",date:"2025-02-28",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/3.0.4.jpg"},a=void 0,l={authorsImageUrls:[void 0]},o=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Storage",id:"storage",level:3},{value:"Compute-Storage Separation",id:"compute-storage-separation",level:3},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views",level:3},{value:"Query Optimizer",id:"query-optimizer",level:3},{value:"Others",id:"others",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Storage",id:"storage-1",level:3},{value:"Compute-Storage Decoupled",id:"compute-storage-decoupled",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Hive",id:"hive",level:4},{value:"Iceberg",id:"iceberg",level:4},{value:"Paimon",id:"paimon",level:4},{value:"Hudi",id:"hudi",level:4},{value:"JDBC",id:"jdbc",level:4},{value:"MaxCompute",id:"maxcompute",level:4},{value:"Others",id:"others-1",level:4},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views-1",level:3},{value:"Query Optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Semi-structured Data Management",id:"semi-structured-data-management",level:3},{value:"BloomFilter Index",id:"bloomfilter-index",level:4},{value:"Inverted Index",id:"inverted-index",level:4},{value:"Others",id:"others-2",level:4},{value:"Permissions",id:"permissions",level:3}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Dear community members, the Apache Doris 3.0.4 version was officially released on February 02, 2025, this version further enhances the performance and stability of the system."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://doris.apache.org/download/",children:"Quick Download"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/releases",children:"GitHub Release"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the Audit log, the ",(0,t.jsx)(i.code,{children:"force"})," flag is retained for ",(0,t.jsx)(i.code,{children:"drop table"})," and ",(0,t.jsx)(i.code,{children:"drop database"})," statements.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43227",children:"#43227"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["When exporting data to Parquet/ORC formats, the ",(0,t.jsx)(i.code,{children:"bitmap"}),", ",(0,t.jsx)(i.code,{children:"quantile_state"}),", and ",(0,t.jsx)(i.code,{children:"hll"})," types are exported in Binary format. Additionally, support has been added for exporting ",(0,t.jsx)(i.code,{children:"jsonb"})," and ",(0,t.jsx)(i.code,{children:"variant"})," types, which are exported as ",(0,t.jsx)(i.code,{children:"string"}),". ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44041",children:"#44041"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For more information, please refer to documentation: ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/docs/3.0/data-operate/export/export-overview",children:"Export Overview - Apache Doris"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The Hudi JNI Scanner has been replaced from Spark API to Hadoop API to enhance compatibility. Users can switch by setting the session variable ",(0,t.jsx)(i.code,{children:"set hudi_jni_scanner=spark/hadoop"}),". ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44396",children:"#44396"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The use of ",(0,t.jsx)(i.code,{children:"auto bucket"})," in Colocate tables is prohibited.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44396",children:"#44396"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Paimon cache has been added to the Catalog, eliminating real-time data queries.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44911",children:"#44911 "})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The default value of ",(0,t.jsx)(i.code,{children:"max_broker_concurrency"})," has been increased to improve performance for large-scale data imports with Broker Load. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44929",children:"#44929"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The default value of the ",(0,t.jsx)(i.code,{children:"storage medium"})," for Auto Partition partitions has been changed to the attribute value of the current table's ",(0,t.jsx)(i.code,{children:"storage medium"}),", rather than using the system default value. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45955",children:"#45955"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Column updates are prohibited during Schema Change execution for Key columns. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46347",children:"#46347"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For Key columns containing auto-increment columns, support has been added to allow column updates without providing the auto-increment column.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44528",children:"#44528"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The FE ID generator strategy has been switched to a time-based approach, and IDs no longer start from 10000. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44790",children:"#44790"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the compute-storage separation mode, the default stale rowset recycling delay for Compaction has been reduced to 1800 seconds to decrease the recycling interval. This may cause large queries to fail in extreme scenarios, and adjustments can be made as needed. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45460",children:"#45460"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"show cache hotspot"})," statement has been disabled in compute-storage separation mode, and direct access to system tables is required. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47332",children:"#47332"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Deleting the system-created ",(0,t.jsx)(i.code,{children:"admin"})," user is prohibited. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44751",children:"#44751"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,t.jsx)(i.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Optimized the issue of Routine Load tasks frequently timing out due to a small ",(0,t.jsx)(i.code,{children:"max_match_interval"})," setting. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46292",children:"#46292"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved performance for Broker Load when importing multiple compressed files. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43975",children:"#43975"})]}),"\n",(0,t.jsxs)(i.li,{children:["Increased the default value of ",(0,t.jsx)(i.code,{children:"webserver_num_workers"})," to enhance Stream Load performance. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46593",children:"#46593"})]}),"\n",(0,t.jsxs)(i.li,{children:["Optimized the load imbalance issue for Routine Load import tasks during BE node scaling. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44798",children:"#44798"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved the use of Routine Load thread pools to prevent timeouts from affecting queries. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45039",children:"#45039"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"compute-storage-separation",children:"Compute-Storage Separation"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Enhanced the stability and observability of the Meta-service. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44036",children:"#44036"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45617",children:"#45617"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45255",children:"#45255"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45068",children:"#45068"})]}),"\n",(0,t.jsxs)(i.li,{children:["Optimized File Cache by adding an early eviction strategy, reducing lock time, and improving query performance. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47473",children:"#47473"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45678",children:"#45678"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47472",children:"#47472"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved initialization checks and queue transitions for File Cache to enhance stability. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44004",children:"#44004"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44429",children:"#44429"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45057",children:"#45057"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47229",children:"#47229"})]}),"\n",(0,t.jsxs)(i.li,{children:["Increased the speed of HDFS data recycling. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46393",children:"#46393"})]}),"\n",(0,t.jsxs)(i.li,{children:["Optimized performance issues when the FE acquires compute groups during ultra-high-frequency imports.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47203",children:"#47203"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved several import-related parameters for primary key tables in compute-storage separation to enhance the stability of real-time high-concurrency imports. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47295",children:"#47295"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46750",children:"#46750"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46365",children:"#46365"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"lakehouse",children:"Lakehouse"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Supported reading Hive tables in JSON format. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46393",children:"#43469"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For more information, please refer to documentation: ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/docs/dev/lakehouse/file-formats/text#json",children:"Text/CSV/JSON - Apache Doris"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Introduced the session variable ",(0,t.jsx)(i.code,{children:"enable_text_validate_utf8"})," to skip UTF-8 encoding checks for CSV formats.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45537",children:"#45537"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For more information, please refer to documentation: ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/docs/dev/lakehouse/file-formats/text#character-set",children:"Text/CSV/JSON - Apache Doris"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Updated the Hudi version to 0.15 and optimized query planning performance for Hudi tables."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Improved read performance for MaxCompute partitioned tables.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45148",children:"#45148"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Optimized performance for Parquet file delayed materialization under high filter rates.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46183",children:"#46183"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Supported delayed materialization for complex Parquet types. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44098",children:"#44098"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Optimized predicate pushdown logic for ORC types, supporting more predicate conditions for index filtering. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43255",children:"#43255"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"asynchronous-materialized-views",children:"Asynchronous Materialized Views"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Supported more scenarios for aggregate roll-up rewriting.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44412",children:"#44412"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"query-optimizer",children:"Query Optimizer"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Improved partition pruning performance. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46261",children:"#46261"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added rules to eliminate ",(0,t.jsx)(i.code,{children:"group by"})," keys based on data characteristics.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43391",children:"#43391"})]}),"\n",(0,t.jsxs)(i.li,{children:["Adaptively adjusted the wait time for Runtime Filters based on the target table size. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42640",children:"#42640"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved the ability to push down aggregations in joins to fit more scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43856",children:"#43856"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43380",children:"#43380"})]}),"\n",(0,t.jsxs)(i.li,{children:["Improved Limit pushdown for aggregations to fit more scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44042",children:"#44042"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"others",children:"Others"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Optimized startup scripts for FE, BE, and MS processes to provide clearer output. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45610",children:"#45610"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45490",children:"#45490"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45883",children:"#45883"})]}),"\n",(0,t.jsxs)(i.li,{children:["The case sensitivity of table names in ",(0,t.jsx)(i.code,{children:"show tables"})," now matches MySQL behavior. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46030",children:"#46030"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"show index"})," now supports arbitrary target table types. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45861",children:"#45861"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"information_schema.columns"})," now supports displaying default values. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44849",children:"#44849"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"information_schema.views"})," now supports displaying view definitions. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45857",children:"#45857"})]}),"\n",(0,t.jsxs)(i.li,{children:["Supported the MySQL protocol ",(0,t.jsx)(i.code,{children:"COM_RESET_CONNECTION"})," command. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44747",children:"#44747"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,t.jsx)(i.h3,{id:"storage-1",children:"Storage"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed potential memory errors during the import process for aggregate table models.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46997",children:"#46997"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue of Routine Load offset loss during FE master node restarts in compute-storage separation mode. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46566",children:"#46566"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed memory leaks in FE Observer nodes during batch import scenarios in compute-storage mode. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47244",children:"#47244"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue of Cumulative Point rollback during Full Compaction with Order Data Compaction. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44359",children:"#44359"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Delete operations could temporarily prevent Tablet Compaction scheduling. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43466",children:"#43466"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved incorrect Tablet states after Schema Change in multi-compute-cluster scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45821",children:"#45821"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the potential NPE error when performing Column Rename Schema Change on primary key tables with ",(0,t.jsx)(i.code,{children:"sequence_type"}),". ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46906",children:"#46906"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Data Correctness"}),": Fixed correctness issues for primary key tables when importing partial column updates containing DELETE SIGN columns. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46194",children:"#46194"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved potential memory leaks in FE when Publish tasks for primary key tables were continuously stuck. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44846",children:"#44846"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"compute-storage-decoupled",children:"Compute-Storage Decoupled"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where File Cache size could exceed the table data size. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46561",children:"#46561"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46390",children:"#46390"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved upload failures at the 5MB boundary during data uploads.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47333",children:"#47333"})]}),"\n",(0,t.jsxs)(i.li,{children:["Enhanced robustness by adding more parameter checks for several ",(0,t.jsx)(i.code,{children:"alter"})," operations in Storage Vault.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45155",children:"#45155"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45156",children:"#45156"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46625",children:"#46625"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47078",children:"#47078"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45685",children:"#45685"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46779",children:"#46779"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved issues with data recycling failures or slow recycling due to improper Storage Vault configurations. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46798",children:"#46798"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47536",children:"#47536"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47475",children:"#47475"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47324",children:"#47324"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45072",children:"#45072"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where data recycling could stall, preventing timely recycling.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45760",children:"#45760"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved incorrect retries for MTTM-230 errors in compute-storage separation mode.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47370",children:"#47370"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47326",children:"#47326"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Group Commit WAL was not fully replayed during BE decommissioning in compute-storage separation mode.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47187",children:"#47187"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where Tablet Meta exceeding 2GB rendered MS unavailable.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44780",children:"#44780"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Data Correctness"}),": Fixed two duplicate Key issues in primary key tables in compute-storage separation mode. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46039",children:"#46039"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44975",children:"#44975"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where Base Compaction could continuously fail due to large Delete Bitmaps in primary key tables during high-frequency real-time imports.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46969",children:"#46969"})]}),"\n",(0,t.jsxs)(i.li,{children:["Modified incorrect retry logic for Schema Change in primary key tables in compute-storage separation mode to enhance robustness. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46748",children:"#46748"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"lakehouse-1",children:"Lakehouse"}),"\n",(0,t.jsx)(i.h4,{id:"hive",children:"Hive"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Hive views created by Spark could not be queried.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43553",children:"#43553"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where certain Hive Transaction tables could not be read correctly. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45753",children:"#45753"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where partition pruning failed for Hive tables with special characters in partitions.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42906",children:"#42906"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"iceberg",children:"Iceberg"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Iceberg tables could not be created in Kerberos authentication environments.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43445",children:"#43445"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where ",(0,t.jsx)(i.code,{children:"count(*)"})," queries were inaccurate for Iceberg tables with dangling deletes. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44039",children:"#44039"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where query errors occurred due to mismatched column names in Iceberg tables. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44470",children:"#44470"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where Iceberg tables could not be read after partition modifications. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45367",children:"#45367"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"paimon",children:"Paimon"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Paimon Catalog could not access Alibaba Cloud OSS-HDFS.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42585",children:"#42585"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"hudi",children:"Hudi"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where partition pruning failed for Hudi tables in certain scenarios.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44669",children:"#44669"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"jdbc",children:"JDBC"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Fixed the issue where tables could not be retrieved using JDBC Catalog after enabling case-insensitive table names."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"maxcompute",children:"MaxCompute"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where partition pruning failed for MaxCompute tables in certain scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44508",children:"#44508"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"others-1",children:"Others"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where export tasks caused memory leaks in FE. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44019",children:"#44019"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where S3 object storage could not be accessed via HTTPS protocol. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44242",children:"#44242"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where Kerberos authentication tickets could not be automatically refreshed.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44916",children:"#44916"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where reading Hadoop Block compressed format files failed. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45289",children:"#45289"})]}),"\n",(0,t.jsxs)(i.li,{children:["When querying ORC format data, CHAR type predicates are no longer pushed down to avoid potential result errors. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45484",children:"#45484"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"asynchronous-materialized-views-1",children:"Asynchronous Materialized Views"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where transparent query rewriting could lead to planning or result errors in extreme scenarios.  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44575",children:"#44575"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45744",children:"#45744"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where multiple build tasks could be generated during asynchronous materialized view scheduling in extreme scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46020",children:"#46020"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46280",children:"#46280"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"query-optimizer-1",children:"Query Optimizer"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where some expression rewrites could produce incorrect expressions. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44770",children:"#44770"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44920",children:"#44920"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45922",children:"#45922"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45596",children:"#45596"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved occasional incorrect results from SQL Cache. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44782",children:"#44782"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44631",children:"#44631"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46443",children:"#46443"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47266",children:"#47266"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where limit pushdown for aggregation operators could produce incorrect results in some scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45369",children:"#45369"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where delayed materialization optimization could produce incorrect execution plans in some scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45693",children:"#45693"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46551",children:"#46551"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"query-execution",children:"Query Execution"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where regular expressions and ",(0,t.jsx)(i.code,{children:"like"})," functions produced incorrect results with special characters. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44547",children:"#44547"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where SQL Cache results could be incorrect when switching databases. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44782",children:"#44782"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed a series of Arrow Flight-related issues. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45023",children:"#45023"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43929",children:"#43929"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where results were incorrect when the Hash table for HashJoin exceeded 4GB in some cases. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46461",children:"#46461"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the overflow issue of the ",(0,t.jsx)(i.code,{children:"convert_to"})," function with Chinese characters. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46405",children:"#46405"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where results could be incorrect in extreme scenarios when ",(0,t.jsx)(i.code,{children:"group by"})," was used with Limit. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47844",children:"#47844"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where results could be incorrect when accessing certain system tables. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47498",children:"#47498"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where the ",(0,t.jsx)(i.code,{children:"percentile"})," function could cause system crashes. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/47068",children:"#47068"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the performance degradation issue for single-table queries with Limit. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46090",children:"#46090"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where ",(0,t.jsx)(i.code,{children:"StDistanceSphere"})," and ",(0,t.jsx)(i.code,{children:"StAngleSphere"})," functions caused system crashes. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45508",children:"#45508"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where ",(0,t.jsx)(i.code,{children:"map_agg"})," results were incorrect. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40454",children:"#40454"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"semi-structured-data-management",children:"Semi-structured Data Management"}),"\n",(0,t.jsx)(i.h4,{id:"bloomfilter-index",children:"BloomFilter Index"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the exception caused by large parameters in BloomFilter Index. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45780",children:"#45780"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue of high memory usage during BloomFilter Index writes. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45833",children:"#45833"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where BloomFilter Index was not correctly deleted when columns were dropped. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44361",children:"#44361"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43378",children:"#43378"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"inverted-index",children:"Inverted Index"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the occasional crash during inverted index construction. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43246",children:"#43246"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where words with zero occurrences occupied space during inverted index merging. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43113",children:"#43113"})]}),"\n",(0,t.jsxs)(i.li,{children:["Prevented abnormal large values in Index Size statistics. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46549",children:"#46549"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue with inverted indexes for VARIANT type fields. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43375",children:"#43375"})]}),"\n",(0,t.jsxs)(i.li,{children:["Optimized local cache locality for inverted indexes to improve cache hit rates. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/46518",children:"#46518"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the metric ",(0,t.jsx)(i.code,{children:"NumInvertedIndexRemoteIOTotal"})," to query profiles for remote storage reads of inverted indexes. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45675",children:"#45675"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44863",children:"#44863"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"others-2",children:"Others"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fixed the crash issue of the ",(0,t.jsx)(i.code,{children:"ipv6_cidr_to_range"})," function with special NULL data. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44700",children:"#44700"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["When granting ",(0,t.jsx)(i.code,{children:"CREATE_PRIV"}),", the existence of the corresponding resource is no longer checked. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45125",children:"#45125"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fixed the issue where queries on views with permissions could fail due to missing permissions for referenced tables in extreme scenarios. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/44621",children:"#44621"})]}),"\n",(0,t.jsxs)(i.li,{children:["Resolved the issue where permission checks for ",(0,t.jsx)(i.code,{children:"use db"})," did not distinguish between internal and external Catalogs. ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/pull/45720",children:"#45720"})]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,i,s){s.d(i,{Z:function(){return a},a:function(){return h}});var r=s(667294);let t={},n=r.createContext(t);function h(e){let i=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),r.createElement(n.Provider,{value:i},e.children)}},870475:function(e){e.exports=JSON.parse('{"permalink":"/blog/release-note-3.0.4","source":"@site/blog/release-note-3.0.4.md","title":"Apache Doris 3.0.4 Released","description":"Dear community members, the Apache Doris 3.0.4 version was officially released on February 28, 2025, this version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Storage Efficiency, Compute-Storage Separation, Query Optimizer and Asynchronous Materialized Views, and more.","date":"2025-02-28T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris 3.0.4 Released","summary":"Dear community members, the Apache Doris 3.0.4 version was officially released on February 28, 2025, this version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Storage Efficiency, Compute-Storage Separation, Query Optimizer and Asynchronous Materialized Views, and more.","description":"Dear community members, the Apache Doris 3.0.4 version was officially released on February 28, 2025, this version introduces continuous upgrades and enhancements in several key areas, including Lakehouse, Storage Efficiency, Compute-Storage Separation, Query Optimizer and Asynchronous Materialized Views, and more.","date":"2025-02-28","author":"Apache Doris","tags":["Release Notes"],"picked":"true","order":"1","image":"/images/3.0.4.jpg"},"unlisted":false,"nextItem":{"title":"Apache Doris 2.1.8 just released","permalink":"/blog/release-note-2.1.8"}}')}}]);