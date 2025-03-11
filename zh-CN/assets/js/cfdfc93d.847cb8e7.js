"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["80100"],{117360:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return t},toc:function(){return l}});var t=a(910400),o=a(785893),i=a(250065);let s={title:"Announcing open source realtime analytical database Apache Doris as a top-level project",description:"Apache Doris is a modern, high-performance and real-time analytical database based on MPP. It is well known for its high-performance and easy-to-use. It can return query results under massive data within only sub-seconds. It can support not only high concurrent point query scenarios, but also complex analysis scenarios with high throughput. Based on this, Apache Doris can be well applied in many business fields, such as multi-dimensional reporting, user portrait, ad-hoc query, real-time dashboard and so on.",date:"2022-06-16",author:"morningman",tags:["Top News"],image:"/images/live-streaming.png"},r=void 0,c={authorsImageUrls:[void 0]},l=[];function h(e){let n={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Apache Doris is a modern, high-performance and real-time analytical database based on MPP. It is well known for its high-performance and easy-to-use. It can return query results under massive data within only sub-seconds. It can support not only high concurrent point query scenarios, but also complex analysis scenarios with high throughput. Based on this, Apache Doris can be well applied in many business fields, such as multi-dimensional reporting, user portrait, ad-hoc query, real-time dashboard and so on."}),"\n",(0,o.jsx)(n.p,{children:"Apache Doris was first born in the Palo Project within Baidu's advertising report business and officially opened source in 2017. It was donated by Baidu to Apache foundation for incubation in July 2018, and then incubated and operated by members of the podling project management committee (PPMC) under the guidance of Apache incubator mentors."}),"\n",(0,o.jsx)(n.p,{children:"We are very proud that Doris graduated from Apache incubator successfully. It is an important milestone. In the whole incubating period, with the guidance of Apache Way and the help of incubator mentors, we learned how to develop our project and community in Apache Way, and have achieved great growth in this process."}),"\n",(0,o.jsx)(n.p,{children:"At present, Apache Doris community has gathered more than 300 contributors from nearly 100 enterprises in different industries, and the number of active contributors per month is close to 100. During the incubation period, Apache Doris released a total of 8 major versions and completed many major functions, including storage engine upgrade, vectorization execution engine and so on, and released 1.0 version. It is the strength of these open source contributors that makes Apache Doris achieve today's results."}),"\n",(0,o.jsx)(n.p,{children:"At the same time, Apache Doris now has a wide range of users in China and even around the world. Up to now, Apache Doris has been applied in the production environment of more than 500 enterprises around the world. Among the top 50 Internet companies in China by market value or valuation, more than 80% are long-term users of Apache Doris, including Baidu, Meituan, Xiaomi, JD, ByteDance, Tencent, Kwai, Netease, Sina, 360 and other well-known companies. It also has rich applications in some traditional industries, such as finance, energy, manufacturing, telecommunications and other fields."}),"\n",(0,o.jsx)(n.p,{children:"You can quickly build a simple, easy-to-use and powerful data analysis platform based on Apache Doris, which is very easy to start, and the learning cost is very low. In addition, the distributed architecture of Apache Doris is very simple, which can greatly reduce the workload of system operation and maintenance. This is also the key factor for more and more users to choose Apache Doris."}),"\n",(0,o.jsx)(n.p,{children:"As a mature analytical database project, Apache Doris has the following advantages:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Excellent performance: it is equipped with an efficient column storage engine, which not only reduces the amount of data scanning, but also implements an ultra-high data compression ratio. At the same time, Doris also provides a rich index structure to speed up data reading and filtering. Using the partition and bucket pruning function, Doris can support ultra-high concurrency of online service business, and a single node can support up to thousands of QPS. Further, Apache Doris combines the vectorization execution engine to give full play to the modern CPU parallel computing power, supplemented by intelligent materialized view technology to accelerate pre-aggregation, and can simultaneously carry out planning based and cost based query optimization through the query optimizer. Through the above methods, Doris can reach ultimate query performance."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Easy to use: it supports ANSI SQL syntax, including single table aggregation, sorting, filtering and multi table join, sub query, etc. it also supports complex SQL syntax such as window function and grouping set. At the same time, users can expand system functions through UDF, UDAF and other user-defined functions. In addition, Apache Doris is also compatible with MySQL protocol. Users can access Doris through various client tools and support seamless connection with BI tools."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Streamlined architecture: the system has only two modules \u2014\u2014 frontend (FE) and backend (BE). The FE node is responsible for the access of user requests, the analysis of query plans, metadata storage and cluster management, and the BE node is responsible for the implementation of data storage and query plans. It is a complete distributed database management system. Users can run the Apache Doris cluster without installing any third-party management and control components, and the deployment and upgrade process are very simple. At the same time, any module can support horizontal expansion, and the cluster can be expanded up to hundreds of nodes, supporting the storage of more than 10PB of ultra large scale data."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Scalability and reliability: it supports the storage of multiple replicas of data. The cluster is able to self-healing. Its own distributed management framework can automatically manage the distribution, repair and balance of data replicas. When the replicas are damaged, the system can automatically perceive and repair them. When a node is expanded, it can be completed with only one SQL command, and the data replicas will be automatically rebalanced among nodes without manual intervention or operation. Whether it is capacity expansion, capacity reduction, single node failure or upgrading, the system does not need to stop running, and can normally provide stable and reliable online services."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ecological enrichment: It provides rich data synchronisation methods, supports fast loading of data from localhost, Hadoop, Flink, Spark, Kafka, SeaTunnel and other systems, and can also directly access data in MySQL, PostgreSQL, Oracle, S3, Hive, Iceberg, Elasticsearch and other systems without data replication. At the same time, the data stored in Doris can also be read by Spark and Flink, and can be output to the upstream data application for display and analysis."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Graduation is not the ultimate goal, it is the starting point of a new journey. In the past, our goal of launching Doris was to provide more people with better data analysis tools and solve their data analysis problems. Becoming an Apache top-level project is not only an affirmation of the hard work of all contributors to the Apache Doris community in the past, but also means that we have established a strong, prosperous and sustainable open source community under the guidance of Apache Way.In the future, we will continue to operate the community in the Way of Apache. I believe we will attract more excellent open source contributors to participate in the community, and the community will further grow with the help of all contributors."}),"\n",(0,o.jsx)(n.p,{children:"Apache Doris will carry out more challenging and meaningful work in the future, including new query optimizer, support for Lakehouse integration, and architecture evolution for cloud infrastructure. More open source technology enthusiasts are welcome to join the Apache Doris community and grow together."}),"\n",(0,o.jsx)(n.p,{children:"Once again, we sincerely thank all contributors who participated in the construction of Apache Doris community and all users who use Apache Doris and constantly put forward improvement suggestions. At the same time, we also thank our incubator mentors, IPMC members and friends in various open source project communities who have continuously encouraged, supported and helped us all the way."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Apache Doris GitHub:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/apache/doris",children:"https://github.com/apache/doris"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Apache Doris website:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://doris.apache.org",children:"http://doris.apache.org"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Please contact us via:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"dev@doris.apache.org.",children:"dev@doris.apache.org."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"See How to subscribe:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://doris.apache.org/community/subscribe-mail-list/",children:"https://doris.apache.org/community/subscribe-mail-list"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return s}});var t=a(667294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},910400:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/Annoucing","source":"@site/blog/Annoucing.md","title":"Announcing open source realtime analytical database Apache Doris as a top-level project","description":"Apache Doris is a modern, high-performance and real-time analytical database based on MPP. It is well known for its high-performance and easy-to-use. It can return query results under massive data within only sub-seconds. It can support not only high concurrent point query scenarios, but also complex analysis scenarios with high throughput. Based on this, Apache Doris can be well applied in many business fields, such as multi-dimensional reporting, user portrait, ad-hoc query, real-time dashboard and so on.","date":"2022-06-16T00:00:00.000Z","tags":[{"inline":true,"label":"Top News","permalink":"/zh-CN/blog/tags/top-news"}],"hasTruncateMarker":false,"authors":[{"name":"morningman","key":null,"page":null}],"frontMatter":{"title":"Announcing open source realtime analytical database Apache Doris as a top-level project","description":"Apache Doris is a modern, high-performance and real-time analytical database based on MPP. It is well known for its high-performance and easy-to-use. It can return query results under massive data within only sub-seconds. It can support not only high concurrent point query scenarios, but also complex analysis scenarios with high throughput. Based on this, Apache Doris can be well applied in many business fields, such as multi-dimensional reporting, user portrait, ad-hoc query, real-time dashboard and so on.","date":"2022-06-16","author":"morningman","tags":["Top News"],"image":"/images/live-streaming.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 1.1.0","permalink":"/zh-CN/blog/release-note-1.1.0"},"nextItem":{"title":"Apache Doris(Incubating) announced 1.0.0 release","permalink":"/zh-CN/blog/release-note-1.0.0"}}')}}]);