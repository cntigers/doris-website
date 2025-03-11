"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["824119"],{151562:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=t(768919),s=t(785893),n=t(250065);let r={title:"Introduction to Apache Doris: a next-generation real-time data warehouse",description:"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.",date:"2023-10-03",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/doris-intro.png"},o=void 0,c={authorsImageUrls:[void 0]},l=[{value:"What is Apache Doris?",id:"what-is-apache-doris",level:2},{value:"Performance",id:"performance",level:2},{value:"Architectural Design",id:"architectural-design",level:2},{value:"Fast Point Queries for A Column-Oriented Database",id:"fast-point-queries-for-a-column-oriented-database",level:2},{value:"Data Ingestion",id:"data-ingestion",level:2},{value:"Data Update",id:"data-update",level:2},{value:"Service Availability &amp; Data Reliability",id:"service-availability--data-reliability",level:2},{value:"Cross Cluster Replication",id:"cross-cluster-replication",level:2},{value:"Multi-Tenant Management",id:"multi-tenant-management",level:2},{value:"Easy to Use",id:"easy-to-use",level:2},{value:"Semi-Structured Data Analysis",id:"semi-structured-data-analysis",level:2},{value:"Data Lakehouse",id:"data-lakehouse",level:2},{value:"Tiered Storage",id:"tiered-storage",level:2},{value:"The Apache Doris Community",id:"the-apache-doris-community",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"what-is-apache-doris",children:"What is Apache Doris?"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," is an open-source real-time data warehouse. It can collect data from various data sources, including relational databases (MySQL, PostgreSQL, SQL Server, Oracle, etc.), logs, and time series data from IoT devices. It is capable of reporting, ad-hoc analysis, federated queries, and log analysis, so it can be used to support dashboarding, self-service BI, A/B testing, user behavior analysis and the like."]}),"\n",(0,s.jsx)(a.p,{children:"Apache Doris supports both batch import and stream writing. It can be well integrated with Apache Spark, Apache Hive, Apache Flink, Airbyte, DBT, and Fivetran. It can also connect to data lakes such as Apache Hive, Apache Hudi, Apache Iceberg, Delta Lake, and Apache Paimon."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"What-Is-Apache-Doris",src:t(14844).Z+"",width:"1280",height:"654"})}),"\n",(0,s.jsx)(a.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsx)(a.p,{children:"As a real-time OLAP engine, Apache Doris hasn a competitive edge in query speed. According to the TPC-H and SSB-Flat benchmarking results, Doris can deliver much faster performance than Presto, Greenplum, and ClickHouse."}),"\n",(0,s.jsx)(a.p,{children:"As for its self-volution, it has increased its query speed by over 10 times in the past two years, both in complex queries and flat table analysis."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Apache-Doris-VS-Presto-Greenplum-ClickHouse",src:t(293576).Z+"",width:"1280",height:"616"})}),"\n",(0,s.jsx)(a.h2,{id:"architectural-design",children:"Architectural Design"}),"\n",(0,s.jsx)(a.p,{children:"Behind the fast speed of Apache Doris is the architectural design, features, and mechanisms that contribute to the performance of Doris."}),"\n",(0,s.jsx)(a.p,{children:"First of all, Apache Doris has a cost-based optimizer (CBO) that can figure out the most efficient execution plan for complicated big queries. It has a fully vectorized execution engine so it can reduce virtual function calls and cache misses. It is MPP-based (Massively Parallel Processing) so it can give full play to the user's machines and cores. In Doris, query execution is data-driven, which means whether a query gets executed is determined by whether its relevant data is ready, and this enables more efficient use of CPUs."}),"\n",(0,s.jsx)(a.h2,{id:"fast-point-queries-for-a-column-oriented-database",children:"Fast Point Queries for A Column-Oriented Database"}),"\n",(0,s.jsx)(a.p,{children:'Apache Doris is a column-oriented database so it can make data compression and data sharding easier and faster. But this might not be suitable for cases such as customer-facing services. In these cases, a data platform will have to handle requests from a large number of users concurrently (these are called "high-concurrency point queries"), and having a columnar storage engine will amplify I/O operations per second, especially when data is arranged in flat tables.'}),"\n",(0,s.jsx)(a.p,{children:"To fix that, Apache Doris enables hybrid storage, which means to have row storage and columnar storage at the same time."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Hybrid-Columnar-Row-Storage",src:t(534310).Z+"",width:"1914",height:"456"})}),"\n",(0,s.jsx)(a.p,{children:"In addition, since point queries are all simple queries, it will be unnecessary and wasteful to call out the query planner, so Doris executes a short circuit plan for them to reduce overhead."}),"\n",(0,s.jsx)(a.p,{children:"Another big source of overheads in high-concurrency point queries is SQL parsing. For that, Doris has prepared statements. The idea is to pre-compute the SQL statement and cache them, so they can be reused for similar queries."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"prepared-statement-and-short-circuit-plan",src:t(210976).Z+"",width:"1902",height:"392"})}),"\n",(0,s.jsx)(a.h2,{id:"data-ingestion",children:"Data Ingestion"}),"\n",(0,s.jsx)(a.p,{children:"Apache Doris provides a range of methods for data ingestion."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Real-Time stream writing"}),":"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/stream-load-manual?_highlight=stream&_highlight=loa",children:"Stream Load"})}),": You can apply this method to write local files or data streams via HTTP. It is linearly scalable and can reach a throughput of 10 million records per second in some use cases."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/1.2/ecosystem/flink-doris-connector/",children:"Flink-Doris-Connector"})}),": With built-in Flink CDC, this Connector ingests data from OLTP databases to Doris. So far, we have realized auto-synchronization of data from MySQL and Oracle to Doris."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})}),": This is to subscribe data from Kafka message queues."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/insert-into-manual",children:"Insert Into"})}),": This is especially useful when you try to do ETL in Doris internally, like writing data from one Doris table to another."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Batch writing"}),":"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/spark-load-manual",children:"Spark Load"})}),": With this method, you can leverage Spark resources to pre-process data from HDFS and object storage before writing to Doris."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),": This supports HDFS and S3 protocol."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"insert into <internal table> select from <external table>"}),": This simple statement allows you to connect Doris to various storage systems, data lakes, and databases."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"data-update",children:"Data Update"}),"\n",(0,s.jsx)(a.p,{children:"For data updates, what Apache Doris has to offer is that, it supports both Merge on Read and Merge on Write, the former for low-frequency batch updates and the latter for real-time writing. With Merge on Write, the latest data will be ready by the time you execute queries, and that's why it can improve your query speed by 5 to 10 times compared to Merge on Read."}),"\n",(0,s.jsx)(a.p,{children:"From an implementation perspective, these are a few common data update operations, and Doris supports them all:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Upsert"}),": to replace or update a whole row"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Partial column update"}),": to update just a few columns in a row"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Conditional updating"}),": to filter out some data by combining a few conditions in order to replace or delete it"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Insert Overwrite"}),": to rewrite a table or partition"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"In some cases, data updates happen concurrently, which means there is numerous new data coming in and trying to modify the existing data record, so the updating order matters a lot. That's why Doris allows you to decide the order, either by the order of transaction commit or that of the sequence column (something that you specify in the table in advance). Doris also supports data deletion based on the specified predicate, and that's how conditional updating is done."}),"\n",(0,s.jsx)(a.h2,{id:"service-availability--data-reliability",children:"Service Availability & Data Reliability"}),"\n",(0,s.jsx)(a.p,{children:"Apart from fast performance in queries and data ingestion, Apache Doris also provides service availability guarantee, and this is how:"}),"\n",(0,s.jsx)(a.p,{children:"Architecturally, Doris has two processes: frontend and backend. Both of them are easily scalable. The frontend nodes manage the clusters, metadata and handle user requests; the backend nodes execute the queries and are capable of auto data balancing and auto-restoration. It supports cluster upgrading and scaling to avoid interruption to services."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"architecture-design-of-Apache-Doris",src:t(434822).Z+"",width:"1118",height:"720"})}),"\n",(0,s.jsx)(a.h2,{id:"cross-cluster-replication",children:"Cross Cluster Replication"}),"\n",(0,s.jsx)(a.p,{children:"Enterprise users, especially those in finance or e-commerce, will need to backup their clusters or their entire data center, just in case of force majeure. So Doris 2.0 provides Cross Cluster Replication (CCR). With CCR, users can do a lot:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Disaster recovery"}),": for quick restoration of data services"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Read-write separation"}),": master cluster + slave cluster; one for reading, one for writing"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Isolated upgrade of clusters"}),": For cluster scaling, CCR allows users to pre-create a backup cluster for a trial run so they can clear out the possible incompatibility issues and bugs."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Tests show that Doris CCR can reach a data latency of minutes. In the best case, it can reach the upper speed limit of the hardware environment."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Cross-Cluster-Replication-in-Apache-Doris",src:t(86912).Z+"",width:"1280",height:"297"})}),"\n",(0,s.jsx)(a.h2,{id:"multi-tenant-management",children:"Multi-Tenant Management"}),"\n",(0,s.jsx)(a.p,{children:"Apache Doris has sophisticated Role-Based Access Control, and it allows fine-grained privilege control on the level of databases, tables, rows, and columns."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"multi-tenant-management-in-Apache-Doris",src:t(947700).Z+"",width:"1095",height:"720"})}),"\n",(0,s.jsx)(a.p,{children:"For resource isolation, Doris used to implement a hard isolation plan, which is to divide the backend nodes into resource groups, and assign the Resource Groups to different workloads. This is a hard isolation plan. It was simple and neat. But sometimes users can make the most out of their computing resource because some Resource Groups are idle."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"resource-group-in-Apache-Doris",src:t(899897).Z+"",width:"1280",height:"685"})}),"\n",(0,s.jsx)(a.p,{children:"Thus, instead of Resource Groups, Doris 2.0 introduces Workload Group. A soft limit is set for a Workload Group about how many resources it can use. When that soft limit is hit, and meanwhile there are some idle resources available. The idle resources will be shared across the workload groups. Users can also prioritize the workload groups in terms of their access to idle resources."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"workload-group-in-Apache-Doris",src:t(304740).Z+"",width:"1166",height:"362"})}),"\n",(0,s.jsx)(a.h2,{id:"easy-to-use",children:"Easy to Use"}),"\n",(0,s.jsx)(a.p,{children:"As many capabilities as Apache Doris provides, it is also easy to use. It supports standard SQL and is compatible with MySQL protocol and most BI tools on the market."}),"\n",(0,s.jsx)(a.p,{children:"Another effort that we've made to improve usability is a feature called Light Schema Change. This means if users need to add or delete some columns in a table, they just need to update the metadata in the frontend but don't have to modify all the data files. Light Schema Change can be done within milliseconds. It also allows changes to indexes and data type of columns. The combination of Light Schema Change and Flink-Doris-Connector means synchronization of upstream tables within milliseconds."}),"\n",(0,s.jsx)(a.h2,{id:"semi-structured-data-analysis",children:"Semi-Structured Data Analysis"}),"\n",(0,s.jsx)(a.p,{children:"Common examples of semi-structure data include logs, observability data, and time series data. These cases require schema-free support, lower cost, and capabilities in multi-dimensional analysis and full-text search."}),"\n",(0,s.jsx)(a.p,{children:"In text analysis, mostly, people use the LIKE operator, so we put a lot of effort into improving the performance of it, including pushing down the LIKE operator down to the storage layer (to reduce data scanning), and introducing the NGram Bloomfilter, the Hyperscan regex matching library, and the Volnitsky algorithm (for sub-string matching)."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"LIKE-operator",src:t(146249).Z+"",width:"1280",height:"335"})}),"\n",(0,s.jsx)(a.p,{children:"We have also introduced inverted index for text tokenization. It is a power tool for fuzzy keyword search, full-text search, equivalence queries, and range queries."}),"\n",(0,s.jsx)(a.h2,{id:"data-lakehouse",children:"Data Lakehouse"}),"\n",(0,s.jsx)(a.p,{children:"For users to build a high-performing data lakehouse and a unified query gateway, Doris can map, cache, and auto-refresh the meta data from external sources. It supports Hive Metastore and almost all open data lakehouse formats. You can connect it to relational databases, Elasticsearch, and many other sources. And it allows you to reuse your own authentication systems, like Kerberos and Apache Ranger, on the external tables."}),"\n",(0,s.jsx)(a.p,{children:"Benchmark results show that Apache Doris is 3~5 times faster than Trino in queries on Hive tables. It is the joint result of a few features:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Efficient query engine"}),"\n",(0,s.jsx)(a.li,{children:"Hot data caching mechanism"}),"\n",(0,s.jsx)(a.li,{children:"Compute nodes"}),"\n",(0,s.jsx)(a.li,{children:"Views in Doris"}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/advanced/compute-node",children:"Compute Nodes"})," is a newly introduced solution in version 2.0 for data lakehousing. Unlike normal backend nodes, Compute Nodes are stateless and do not store any data. Neither are they involved in data balancing during cluster scaling. Thus, they can join the cluster flexibly and easily during computation peak times."]}),"\n",(0,s.jsx)(a.p,{children:"Also, Doris allows you to write the computation results of external tables into Doris to form a view. This is a similar thinking to Materialized Views: to trade space for speed. After a query on external tables is executed, the results can be put in Doris internally. When there are similar queries following up, the system can directly read the results of previous queries from Doris, and that speeds things up."}),"\n",(0,s.jsx)(a.h2,{id:"tiered-storage",children:"Tiered Storage"}),"\n",(0,s.jsxs)(a.p,{children:["The main purpose of tiered storage is to save money. ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/advanced/cold-hot-separation?_highlight=cold",children:"Tiered storage "}),"means to separate hot data and cold data into different storage, with hot data being the data that is frequently accessed and cold data that isn't. It allows users to put hot data in the quick but expensive disks (such as SSD and HDD), and cold data in object storage."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"tiered-storage-in-Apache-Doris",src:t(683692).Z+"",width:"1150",height:"622"})}),"\n",(0,s.jsx)(a.p,{children:"Roughly speaking, for a data asset consisting of 80% cold data, tiered storage will reduce your storage cost by 70%."}),"\n",(0,s.jsx)(a.h2,{id:"the-apache-doris-community",children:"The Apache Doris Community"}),"\n",(0,s.jsxs)(a.p,{children:["This is an overview of Apache Doris, an open-source real-time data warehouse. It is actively evolving with an agile release schedule, and the ",(0,s.jsx)(a.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"community"})," embraces any questions, ideas, and feedback."]})]})}function h(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},534310:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/Introduction_3-1ec14fc9a98e2d4029ce949804b3e1a7.png"},210976:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/Introduction_4-5daaa3b40e9f7b62a6f30bf10a039f94.png"},14844:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_1-d906db31b97b75340d9e0cf7fe267dfc.png"},146249:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_10-f4a60eac6572f70e2d4cedb5046e2b60.png"},683692:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_11-a841a4fd892e69d61184e21b7c34246b.png"},293576:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_2-3b95346f511caf321269de6c7ea692cd.png"},434822:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_5-69ce643bd14fb428099a545039a4e18e.png"},86912:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_6-0a799bae221f0af5ddfe41901743df98.png"},947700:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_7-97a2ac7fbb42fff86d99e46f92e184e5.png"},899897:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_8-c25066059694cad6e5e4015a4e4e8976.png"},304740:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/introduction_9-aeadca64cd04fe431a0120cec1fd6b20.png"},250065:function(e,a,t){t.d(a,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},n=i.createContext(s);function r(e){let a=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:a},e.children)}},768919:function(e){e.exports=JSON.parse('{"permalink":"/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse","source":"@site/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse.md","title":"Introduction to Apache Doris: a next-generation real-time data warehouse","description":"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.","date":"2023-10-03T00:00:00.000Z","tags":[{"inline":true,"label":"Tech Sharing","permalink":"/blog/tags/tech-sharing"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Introduction to Apache Doris: a next-generation real-time data warehouse","description":"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.","date":"2023-10-03","author":"Apache Doris","tags":["Tech Sharing"],"image":"/images/doris-intro.png"},"unlisted":false,"prevItem":{"title":"Migrating from ClickHouse to Apache Doris: what happened?","permalink":"/blog/migrating-from-clickhouse-to-apache-doris-what-happened"},"nextItem":{"title":"Log analysis: Elasticsearch vs Apache Doris","permalink":"/blog/log-analysis-elasticsearch-vs-apache-doris"}}')}}]);