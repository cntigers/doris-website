"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["317899"],{144196:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return h}});var i=t(410794),n=t(785893),s=t(250065);let o={title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",description:"What needs to be taken care of in IoV data analysis? What's the difference between a near real-time analytic data platform and an actual real-time analytic data platform?",date:"2023-11-29",author:"Apache Doris",tags:["Best Practice"],image:"/images/Iov.png"},r=void 0,l={authorsImageUrls:[void 0]},h=[{value:"What is special about IoV data?",id:"what-is-special-about-iov-data",level:2},{value:"IoV data processing",id:"iov-data-processing",level:2},{value:"From Apache Hive to Apache Doris: a transition to real-time analysis",id:"from-apache-hive-to-apache-doris-a-transition-to-real-time-analysis",level:2},{value:"1. The arrangement of CAN data",id:"1-the-arrangement-of-can-data",level:3},{value:"2. DTC data query",id:"2-dtc-data-query",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Internet of Vehicles, or IoV, is the product of the marriage between the automotive industry and IoT. IoV data is expected to get larger and larger, especially with electric vehicles being the new growth engine of the auto market. The question is: Is your data platform ready for that? This post shows you what an OLAP solution for IoV looks like."}),"\n",(0,n.jsx)(a.h2,{id:"what-is-special-about-iov-data",children:"What is special about IoV data?"}),"\n",(0,n.jsx)(a.p,{children:"The idea of IoV is intuitive: to create a network so vehicles can share information with each other or with urban infrastructure. What\u2018s often under-explained is the network within each vehicle itself. On each car, there is something called Controller Area Network (CAN) that works as the communication center for the electronic control systems. For a car traveling on the road, the CAN is the guarantee of its safety and functionality, because it is responsible for:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Vehicle system monitoring"}),": The CAN is the pulse of the vehicle system. For example, sensors send the temperature, pressure, or position they detect to the CAN; controllers issue commands (like adjusting the valve or the drive motor) to the executor via the CAN."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Real-time feedback"}),": Via the CAN, sensors send the speed, steering angle, and brake status to the controllers, which make timely adjustments to the car to ensure safety."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data sharing and coordination"}),": The CAN allows for data exchange (such as status and commands) between various devices, so the whole system can be more performant and efficient."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Network management and troubleshooting"}),": The CAN keeps an eye on devices and components in the system. It recognizes, configures, and monitors the devices for maintenance and troubleshooting."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"With the CAN being that busy, you can imagine the data size that is traveling through the CAN every day. In the case of this post, we are talking about a car manufacturer who connects 4 million cars together and has to process 100 billion pieces of CAN data every day."}),"\n",(0,n.jsx)(a.h2,{id:"iov-data-processing",children:"IoV data processing"}),"\n",(0,n.jsx)(a.p,{children:"To turn this huge data size into valuable information that guides product development, production, and sales is the juicy part. Like most data analytic workloads, this comes down to data writing and computation, which are also where challenges exist:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data writing at scale"}),": Sensors are everywhere in a car: doors, seats, brake lights... Plus, many sensors collect more than one signal. The 4 million cars add up to a data throughput of millions of TPS, which means dozens of terabytes every day. With increasing car sales, that number is still growing."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Real-time analysis"}),': This is perhaps the best manifestation of "time is life". Car manufacturers collect the real-time data from their vehicles to identify potential malfunctions, and fix them before any damage happens.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Low-cost computation and storage"}),": It's hard to talk about huge data size without mentioning its costs. Low cost makes big data processing sustainable."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"from-apache-hive-to-apache-doris-a-transition-to-real-time-analysis",children:"From Apache Hive to Apache Doris: a transition to real-time analysis"}),"\n",(0,n.jsx)(a.p,{children:"Like Rome, a real-time data processing platform is not built in a day. The car manufacturer used to rely on the combination of a batch analytic engine (Apache Hive) and some streaming frameworks and engines (Apache Flink, Apache Kafka) to gain near real-time data analysis performance. They didn't realize they needed real-time that bad until real-time was a problem."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Near Real-Time Data Analysis Platform"})}),"\n",(0,n.jsx)(a.p,{children:"This is what used to work for them:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"IoV-Hive-based-data-warehouse",src:t(227006).Z+"",width:"1280",height:"766"})}),"\n",(0,n.jsx)(a.p,{children:"Data from the CAN and vehicle sensors are uploaded via 4G network to the cloud gateway, which writes the data into Kafka. Then, Flink processes this data and forwards it to Hive. Going through several data warehousing layers in Hive, the aggregated data is exported to MySQL. At the end, Hive and MySQL provide data to the application layer for data analysis, dashboarding, etc."}),"\n",(0,n.jsx)(a.p,{children:"Since Hive is primarily designed for batch processing rather than real-time analytics, you can tell the mismatch of it in this use case."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data writing"}),": With such a huge data size, the data ingestion time from Flink into Hive was noticeably long. In addition, Hive only supports data updating at the granularity of partitions, which is not enough for some cases."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data analysis"}),": The Hive-based analytic solution delivers high query latency, which is a multi-factor issue. Firstly, Hive was slower than expected when handling large tables with 1 billion rows. Secondly, within Hive, data is extracted from one layer to another by the execution of Spark SQL, which could take a while. Thirdly, as Hive needs to work with MySQL to serve all needs from the application side, data transfer between Hive and MySQL also adds to the query latency."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Real-Time Data Analysis Platform"})}),"\n",(0,n.jsx)(a.p,{children:"This is what happens when they add a real-time analytic engine to the picture:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"IoV-Doris-based-data-warehouse",src:t(229950).Z+"",width:"1280",height:"1058"})}),"\n",(0,n.jsx)(a.p,{children:"Compared to the old Hive-based platform, this new one is more efficient in three ways:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data writing"}),": Data ingestion into ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," is quick and easy, without complicated configurations and the introduction of extra components. It supports a variety of data ingestion methods. For example, in this case, data is written from Kafka into Doris via ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/data-operate/import/import-way/stream-load-manual",children:"Stream Load"}),", and from Hive into Doris via ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/data-operate/import/import-way/broker-load-manual",children:"Broker Load"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Data analysis"}),": To showcase the query speed of Apache Doris by example, it can return a 10-million-row result set within seconds in a cross-table join query. Also, it can work as a ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/lakehouse/multi-catalog/",children:"unified query gateway"})," with its quick access to external data (Hive, MySQL, Iceberg, etc.), so analysts don't have to juggle between multiple components."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Computation and storage costs"}),": Apache Doris provides the Z-Standard algorithm that can bring a 3~5 times higher data compression ratio. That's how it helps reduce costs in data computation and storage. Moreover, the compression can be done solely in Doris so it won't consume resources from Flink."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"A good real-time analytic solution not only stresses data processing speed, it also considers all the way along your data pipeline and smoothens every step of it. Here are two examples:"}),"\n",(0,n.jsx)(a.h3,{id:"1-the-arrangement-of-can-data",children:"1. The arrangement of CAN data"}),"\n",(0,n.jsx)(a.p,{children:"In Kafka, CAN data was arranged by the dimension of CAN ID. However, for the sake of data analysis, analysts had to compare signals from various vehicles, which meant to concatenate data of different CAN ID into a flat table and align it by timestamp. From that flat table, they could derive different tables for different analytic purposes. Such transformation was implemented using Spark SQL, which was time-consuming in the old Hive-based architecture, and the SQL statements are high-maintenance. Moreover, the data was updated by batch on a daily basis, which meant they could only get data from a day ago."}),"\n",(0,n.jsxs)(a.p,{children:["In Apache Doris, all they need is to build the tables with the ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model",children:"Aggregate Key model"}),", specify VIN (Vehicle Identification Number) and timestamp as the Aggregate Key, and define other data fields by ",(0,n.jsx)(a.code,{children:"REPLACE_IF_NOT_NULL"}),". With Doris, they don't have to take care of the SQL statements or the flat table, but are able to extract real-time insights from real-time data."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"IoV-CAN-data",src:t(144759).Z+"",width:"1280",height:"937"})}),"\n",(0,n.jsx)(a.h3,{id:"2-dtc-data-query",children:"2. DTC data query"}),"\n",(0,n.jsx)(a.p,{children:"Of all CAN data, DTC (Diagnostic Trouble Code) deserves high attention and separate storage, because it tells you what's wrong with a car. Each day, the manufacturer receives around 1 billion pieces of DTC. To capture life-saving information from the DTC, data engineers need to relate the DTC data to a DTC configuration table in MySQL."}),"\n",(0,n.jsx)(a.p,{children:"What they used to do was to write the DTC data into Kafka every day, process it in Flink, and store the results in Hive. In this way, the DTC data and the DTC configuration table were stored in two different components. That caused a dilemma: a 1-billion-row DTC table was hard to write into MySQL, while querying from Hive was slow. As the DTC configuration table was also constantly updated, engineers could only import a version of it into Hive on a regular basis. That meant they didn't always get to relate the DTC data to the latest DTC configurations."}),"\n",(0,n.jsxs)(a.p,{children:["As is mentioned, Apache Doris can work as a unified query gateway. This is supported by its ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/lakehouse/multi-catalog/",children:"Multi-Catalog"})," feature. They import their DTC data from Hive into Doris, and then they create a MySQL Catalog in Doris to map to the DTC configuration table in MySQL. When all this is done, they can simply join the two tables within Doris and get real-time query response."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"IoV-DTC-data-query",src:t(51508).Z+"",width:"1280",height:"523"})}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(a.p,{children:"This is an actual real-time analytic solution for IoV. It is designed for data at really large scale, and it is now supporting a car manufacturer who receives 10 billion rows of new data every day in improving driving safety and experience."}),"\n",(0,n.jsx)(a.p,{children:"Building a data platform to suit your use case is not easy, I hope this post helps you in building your own analytic solution."}),"\n",(0,n.jsxs)(a.p,{children:["Apache Doris ",(0,n.jsx)(a.a,{href:"https://github.com/apache/doris",children:"GitHub repo"})]}),"\n",(0,n.jsxs)(a.p,{children:["Find Apache Doris makers on ",(0,n.jsx)(a.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Slack"})]})]})}function c(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},144759:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/IoV-CAN-data-21c4722dff0b60c64dd2286cbf3df3be.jpeg"},51508:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/IoV-DTC-data-query-7e0534a9aafd3005e1e08439acb288fc.png"},229950:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/IoV-Doris-based-data-warehouse-6eb6329ab3bedda6ed707f02219d85c7.png"},227006:function(e,a,t){t.d(a,{Z:function(){return i}});let i=t.p+"assets/images/IoV-Hive-based-data-warehouse-1bbef26f4fbb3012d0ae17fc3b1c4fa5.png"},250065:function(e,a,t){t.d(a,{Z:function(){return r},a:function(){return o}});var i=t(667294);let n={},s=i.createContext(n);function o(e){let a=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:a},e.children)}},410794:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents","source":"@site/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents.md","title":"How big data is saving lives in real time: IoV data analytics helps prevent accidents","description":"What needs to be taken care of in IoV data analysis? What\'s the difference between a near real-time analytic data platform and an actual real-time analytic data platform?","date":"2023-11-29T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"How big data is saving lives in real time: IoV data analytics helps prevent accidents","description":"What needs to be taken care of in IoV data analysis? What\'s the difference between a near real-time analytic data platform and an actual real-time analytic data platform?","date":"2023-11-29","author":"Apache Doris","tags":["Best Practice"],"image":"/images/Iov.png"},"unlisted":false,"prevItem":{"title":"Empowering cyber security by enabling 7 times faster log analysis","permalink":"/zh-CN/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis"},"nextItem":{"title":"Less components, higher performance: Apache Doris instead of ClickHouse, MySQL, Presto, and HBase","permalink":"/zh-CN/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase"}}')}}]);