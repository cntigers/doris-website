"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["56340"],{421653:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return t},toc:function(){return l}});var t=i(393317),r=i(785893),a=i(250065);let s={title:"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down",language:"en",description:"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris",date:"2023-01-28",author:"Yi Yang",tags:["Best Practice"],image:"/images/clickhouse-kudu-to-doris.png"},o=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Author:",id:"author",level:2},{value:"Data Service Architecture Requirements",id:"data-service-architecture-requirements",level:2},{value:"Early Problems Found: ClickHouse Shuts Down When High-concurrency Occurs",id:"early-problems-found-clickhouse-shuts-down-when-high-concurrency-occurs",level:2},{value:"Selection between Doris, Clickhouse and Kudu",id:"selection-between-doris-clickhouse-and-kudu",level:2},{value:"Data Warehouse Architecture Requirements",id:"data-warehouse-architecture-requirements",level:2},{value:"Early Problems Found: Kudu+Impala Underperforms",id:"early-problems-found-kuduimpala-underperforms",level:2},{value:"New Data Warehouse Architecture Design Based on Doris",id:"new-data-warehouse-architecture-design-based-on-doris",level:2},{value:"GitHub:",id:"github",level:2},{value:"Apache Doris Website:",id:"apache-doris-website",level:2}];function d(e){let n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kv",src:i(792641).Z+"",width:"900",height:"383"})}),"\n",(0,r.jsx)(n.h2,{id:"author",children:"Author:"}),"\n",(0,r.jsx)(n.p,{children:"YiYang, Senior Big Data Developer, Linkedcare"}),"\n",(0,r.jsx)(n.h1,{id:"about-linkedcare",children:"About Linkedcare"}),"\n",(0,r.jsx)(n.p,{children:"Linkedcare is a leading SaaS software company in the health technology industry, focusing on the medical dental and cosmetic plastic surgery. In 2021, it was selected as one of the top 150 digital healthcare companies in the world by CB Insights. Linkedcare has served thousands of plastic surgery institutions in Los Angeles, Taiwan, and Hong Kong. Linkedcare also provides integrated management system services for dental clinics, covering electronic medical records, customer relationship management, intelligent marketing, B2B trading platform, insurance payment, BI tools, etc."}),"\n",(0,r.jsx)(n.h1,{id:"doris-evolution-in-linkedcare",children:"Doris' Evolution in Linkedcare"}),"\n",(0,r.jsx)(n.p,{children:"Let me briefly introduce Doris's development in Linkedcare first. In general, the application of Doris in Linkedcare can be divided into two stages:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris;"}),"\n",(0,r.jsx)(n.li,{children:"Due to the continuous improvement of real-time data analysis requirements, T+1's data reporting gradually cannot meet business needs. Linkedcare needs a data warehouse that can handle real-time processing, and Doris has been introduced into the company's data warehouse since then. With the support of the Apache Doris community and the SelectDB professional technical team, our business data has been gradually migrated from Kudu to Doris."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"1",src:i(571057).Z+"",width:"1696",height:"866"})}),"\n",(0,r.jsx)(n.h1,{id:"data-service-architecture-from-clickhouse-to-doris",children:"Data Service Architecture: From ClickHouse to Doris"}),"\n",(0,r.jsx)(n.h2,{id:"data-service-architecture-requirements",children:"Data Service Architecture Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Support complex queries: When customers do self-service on the dashboard, a complex SQL query statement will be generated to directly query the database, and the complexity of the statement is unknown, which adds a lot of pressure on the database and affects query performance."}),"\n",(0,r.jsx)(n.li,{children:"High concurrency and low latency: At least 100 concurrent queries can be supported, and query results can be return within 1 second;"}),"\n",(0,r.jsx)(n.li,{children:"Real-time data update: The report data comes from the SaaS system. When the customer modifies the historical data in the system, the report data must be changed accordingly to ensure consistentency, which requires real-time processing."}),"\n",(0,r.jsx)(n.li,{children:"Low cost and easy deployment: There are a lot of private cloud customers in our SaaS business. In order to reduce labor costs, the business requires that the architecture deployment and operation and maintenance be simple enough."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"early-problems-found-clickhouse-shuts-down-when-high-concurrency-occurs",children:"Early Problems Found: ClickHouse Shuts Down When High-concurrency Occurs"}),"\n",(0,r.jsx)(n.p,{children:"The previous project chose ClickHouse to provide data query services, but serious concurrency problems occurred during use:\n10 concurrent queries will cause ClickHouse to shut down, resulting in the inability to provide services to customers normally, which is the direct reason for us to replace ClickHouse."}),"\n",(0,r.jsx)(n.p,{children:"In addition, there are several severe problems:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The cost of ClickHouse services on the cloud is very high, and the dependency on ClickHouse components is relatively high. The frequent interaction between ClickHouse and Zookeeper during data ingestion will put greater pressure on stability."}),"\n",(0,r.jsx)(n.li,{children:"How to seamlessly migrate data without affecting the normal use of customers is another problem."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"selection-between-doris-clickhouse-and-kudu",children:"Selection between Doris, Clickhouse and Kudu"}),"\n",(0,r.jsx)(n.p,{children:"To deal with the existing problems and meet the business requirements, we decided to conduct research on Doris (0.14), Clickhouse, and Kudu respectively."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"2",src:i(142419).Z+"",width:"1600",height:"454"})}),"\n",(0,r.jsx)(n.p,{children:"As shown in the table above, we made a deep comparison of these 3 databases. And we can see that Doris has excellent performance in many aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"High concurrency: Doris can handle high-concurrency of 1,000 and more. So it will easily solve the problem of 10 concurrent queries which led ClickHouse to shut down."}),"\n",(0,r.jsx)(n.li,{children:"Query performance: Doris can achieve millisecond-level query response. In single-table query, although Doris and ClickHouse are almost equivalent in query performance, in multi-table query, Doris is far better than ClickHouse. Doris can make sure that the QPS won't drop when high-concurrency happens."}),"\n",(0,r.jsx)(n.li,{children:"Data update: Doris' data model can meet our needs for data update to ensure the consistency of system data and business data, which will be described in detail below."}),"\n",(0,r.jsx)(n.li,{children:"Ease of use: Doris has a flat architecture, simple and fast deployment, fully-completed data ingest functions, and good at scaling out; At the same time, Doris can automatically perform replica balancing internally, and the operation and maintenance cost is extremely low. However, ClickHouse and Kudu rely heavily on components and require a lot of preparatory work for use. This requires a professional team to handle a large number of daily operation and maintenance tasks."}),"\n",(0,r.jsx)(n.li,{children:"Standard SQL: Doris is compatible with the MySQL protocol and uses standard SQL. It is easy for developers to get started and does not require additional learning costs."}),"\n",(0,r.jsx)(n.li,{children:"Distributed JOINs: Doris supports distributed JOINs, but ClickHouse has limitations in JOIN queries and functions as well as poor maintainability."}),"\n",(0,r.jsx)(n.li,{children:"Active community: The Apache Doris open source community is active with passion. At the same time, SelectDB provides a professional and full-time team for technical support for the Doris community. If you encounter problems, you can directly contact the community and find out a solution in time."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"From the above research, we can find that Doris has excellent capabilities in all aspects and is very in line with our needs. Therefore, we adopt Doris instead of ClickHouse, which solves the problems of poor concurrency and the shutdown of ClickHouse."}),"\n",(0,r.jsx)(n.h1,{id:"data-warehouse-architecture-from-kuduimpala-to-doris",children:"Data Warehouse Architecture: From Kudu+Impala to Doris"}),"\n",(0,r.jsx)(n.p,{children:"In the process of using data reports, we have gradually discovered many advantages of Doris, so we decided to introduce Doris to the company's data warehouse."}),"\n",(0,r.jsx)(n.h2,{id:"data-warehouse-architecture-requirements",children:"Data Warehouse Architecture Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When the customer modifies the historical data in the system, the report data should also be changed accordingly. At the same time, there should be a feature that can help customers to change the value of a single column;"}),"\n",(0,r.jsx)(n.li,{children:"When Flink extracts the full amount of data from the business database and writes it into the data warehouse frequently, the version compaction must keep up with the speed of new version generation, and will not cause version accumulation;"}),"\n",(0,r.jsx)(n.li,{children:"Through resource isolation and other functions, Doris reduces the possibility of resource preemption, improves resource utilization, and makes full use of resources on the core computing nodes;"}),"\n",(0,r.jsx)(n.li,{children:"Due to the limited memory resources in the company, overloaded tasks must be completed without increasing the number of clusters."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"early-problems-found-kuduimpala-underperforms",children:"Early Problems Found: Kudu+Impala Underperforms"}),"\n",(0,r.jsx)(n.p,{children:"The early company data warehouse architecture used Kudu and Impala for computing and storage. But we found the following problems during use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"When the number of concurrent queries (QPS) is large, the simple query response time of Kudu+Impala is always more than a few seconds, which cannot reach the millisecond-level required by the business. The long waiting time has brought bad user experience to customers."}),"\n",(0,r.jsx)(n.li,{children:"The Kudu+Impala engine cannot perform incremental aggregation of factual data, and can barely support real-time data analysis."}),"\n",(0,r.jsx)(n.li,{children:"Kudu relies on a large number of primary key lookups when ingesting data. The batch processing efficiency is low and Kudu consumes a lot of CPU, which is not friendly to resource utilization."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"new-data-warehouse-architecture-design-based-on-doris",children:"New Data Warehouse Architecture Design Based on Doris"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"3",src:i(802700).Z+"",width:"1280",height:"690"})}),"\n",(0,r.jsx)(n.p,{children:"As shown in the figure above, Apache Doris is used in the new architecture and is responsible for data warehouse storage and computing; Data ingestion of real-time data and ODS data through Kafka has been replaced with Flink; We use Duckula as our stream computing platform; While we introduce DolphinSchedular for our task scheduling."}),"\n",(0,r.jsx)(n.h1,{id:"benefits-of-the-new-architecture-based-on-apache-doris",children:"Benefits of the new architecture based on Apache Doris:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The new data warehouse architecture based on Doris no longer depends on Hadoop related components, and the operation and maintenance cost is low."}),"\n",(0,r.jsx)(n.li,{children:"Higher performance. Doris uses less server resources but provides stronger data processing capabilities;"}),"\n",(0,r.jsx)(n.li,{children:"Doris supports high concurrency and can directly support WebApp query services;"}),"\n",(0,r.jsx)(n.li,{children:"Doris supports the access to external tables, which enable easy data publishing and data ingestion;"}),"\n",(0,r.jsx)(n.li,{children:"Doris supports dynamic scaling out and automatic data balance;"}),"\n",(0,r.jsx)(n.li,{children:"Doris supports multiple federated queries, including Hive, ES, MySQL, etc.;"}),"\n",(0,r.jsx)(n.li,{children:"Doris' Aggregate Model supports users updating a single column;"}),"\n",(0,r.jsx)(n.li,{children:"By adjusting BE parameters and cluster size, the problem of version accumulation can be effectively solved;"}),"\n",(0,r.jsx)(n.li,{children:"Through the Resource Tag and Query Block function, cluster resource isolation can be realized, resource usage rate can be reduced, and query performance can be improved."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Thanks to the excellent capabilities of the new architecture, the cluster we use has been reduced from 18 pieces of 16Cores 128G to 12 pieces of 16Cores 128G, saving up to 33% of resources compared to before; Further, the computing performance has been greatly improved. Doris can complete an ETL task that was completed in 3 hours on Kudu in only 1 hour. In addition, in frequent updates, Kudu's internal data fragmentation files cannot be automatically merged so that the performance will become worse and worse, requiring regular rebuilding; While the compaction function of Doris can effectively solve this problem."}),"\n",(0,r.jsx)(n.h1,{id:"highly-recommended",children:"Highly Recommended"}),"\n",(0,r.jsx)(n.p,{children:"The cost of using Doris is very low. Only 3 low-end servers or even desktops can be used to deploy easily a data warehouse based on Apache Doris; For enterprises with limited investment and do not want to be left behind by the market, it is highly recommended to try Apache Doris."}),"\n",(0,r.jsx)(n.p,{children:"Doris is also a mature analytical database with MPP architecture. At the same time, its community is very active and easy to communicate with. SelectDB, the commercial company behind Doris, has set up a full-time technical team for the community. Any questions can be answered within 1 hour. In the last year, the community has been continuously promoted by SelectDB and introduced a series of industry-leading new features. In addition, the community will seriously consider the user habits when iterating, which will bring a lot of convenience."}),"\n",(0,r.jsx)(n.p,{children:"I really appreciate the full support from the Doris community and the SelectDB team. And I sincerely recommend developers and enterprises to start with Apache Doris today."}),"\n",(0,r.jsx)(n.h1,{id:"apache-doris",children:"Apache Doris"}),"\n",(0,r.jsxs)(n.p,{children:["Apache Doris is a real-time analytical database based on MPP architecture, known for its high performance and ease of use. It supports both high-concurrency point queries and high-throughput complex analysis. (",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris",children:"https://github.com/apache/doris"}),")"]}),"\n",(0,r.jsx)(n.h1,{id:"links",children:"Links"}),"\n",(0,r.jsx)(n.h2,{id:"github",children:"GitHub:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/doris",children:"https://github.com/apache/doris"})}),"\n",(0,r.jsx)(n.h2,{id:"apache-doris-website",children:"Apache Doris Website:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doris.apache.org",children:"https://doris.apache.org"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},571057:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/1-39a723280720a07dc2ed0a7de5c99c9b.png"},142419:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2-bd04a72816c9ff95512e08d3f6e8e05f.png"},802700:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/3-e7990ac868e7345d5fda0512b0ec6b8c.png"},792641:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/kv-c9c4b972a14903911ba1674b76f5edca.png"},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(667294);let r={},a=t.createContext(r);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}},393317:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/linkedcare","source":"@site/blog/linkedcare.md","title":"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down","description":"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris","date":"2023-01-28T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Yi Yang","key":null,"page":null}],"frontMatter":{"title":"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down","language":"en","description":"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris","date":"2023-01-28","author":"Yi Yang","tags":["Best Practice"],"image":"/images/clickhouse-kudu-to-doris.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 1.2.2","permalink":"/zh-CN/blog/release-note-1.2.2"},"nextItem":{"title":"A glimpse of the next-generation analytical database","permalink":"/zh-CN/blog/summit"}}')}}]);