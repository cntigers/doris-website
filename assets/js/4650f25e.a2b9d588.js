"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["157967"],{948029:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return d}});var i=a(66109),s=a(785893),n=a(250065);let r={title:"A financial anti-fraud solution based on the Apache Doris data warehouse",description:"Financial fraud prevention is a race against time. This post will get into details about how a retail bank builds their fraud risk management platform based on Apache Doris and how it performs. ",date:"2024-02-22",author:"Apache Doris",tags:["Best Practice"],image:"/images/a-financial-anti-fraud-solution-based-on-the-apache-doris-data-warehouse.png"},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Fraud Risk Management Platform",id:"fraud-risk-management-platform",level:2},{value:"Real-time risk report",id:"real-time-risk-report",level:2},{value:"Multi-dimensional analysis to identify risks",id:"multi-dimensional-analysis-to-identify-risks",level:2},{value:"Federated queries to locate risk details",id:"federated-queries-to-locate-risk-details",level:2},{value:"Auto alerting",id:"auto-alerting",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Financial fraud prevention is a race against time. Implementation-wise, it relies heavily on the data processing power, especially under large datasets. Today I'm going to share with you the use case of a retail bank with over 650 million individual customers. They have compared analytics components including ",(0,s.jsx)(t.a,{href:"https://doris.apache.org",children:"Apache Doris"}),", ClickHouse, Greenplum, Cassandra, and Kylin. After 5 rounds of deployment and comparsion based on 89 custom test cases, they settled on Apache Doris, because they witnessed a six-fold writing speed and faster multi-table joins in Apache Doris as compared to the mighty ClickHouse."]}),"\n",(0,s.jsx)(t.p,{children:"I will get into details about how the bank builds their fraud risk management platform based on Apache Doris and how it performs."}),"\n",(0,s.jsx)(t.h2,{id:"fraud-risk-management-platform",children:"Fraud Risk Management Platform"}),"\n",(0,s.jsxs)(t.p,{children:["In this platform, ",(0,s.jsx)(t.strong,{children:"80% of ad-hoc queries"})," return results in less than ",(0,s.jsx)(t.strong,{children:"2 seconds,"})," and ",(0,s.jsx)(t.strong,{children:"95%"})," of them are finished in under ",(0,s.jsx)(t.strong,{children:"5 seconds."})," On average, the solution ",(0,s.jsx)(t.strong,{children:"intercepts tens of thousands of suspicious transactions"})," every day and ",(0,s.jsx)(t.strong,{children:"avoids losses of millions of dollars"})," for bank customers."]}),"\n",(0,s.jsx)(t.p,{children:"This is an overview of the entire platform from an architectural perspective."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Fraud Risk Management Platform",src:a(244943).Z+"",width:"1280",height:"530"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"source data"})," can be roughly categorized as:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Dimension data: mostly stored in PostgreSQL"}),"\n",(0,s.jsx)(t.li,{children:"Real-time transaction data: decoupled from various external systems via Kafka message queues"}),"\n",(0,s.jsx)(t.li,{children:"Offline data: directly ingested from external systems to Hive, making data reconciliation easy"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.strong,{children:"data ingestion"}),", this is how they collect the three types of source data. First of all, they leverage the ",(0,s.jsx)(t.a,{href:"https://doris.apache.org/docs/lakehouse/multi-catalog/jdbc",children:"JDBC Catalog"})," to to synchronize metadata and user data from PostgreSQL."]}),"\n",(0,s.jsxs)(t.p,{children:["The transaction data needs to be combined with dimension data for further analysis. Thus, they employ a Flink SQL API to read dimension data from PostgreSQL, and real-time transaction data from Kafka. Then, in Flink, they do multi-stream joins and generate wide tables. For real-time refreshing of dimension tables, they use a Lookup Join mechanism, which dynamically looks up and refreshes dimension data when processing data streams. They also utilize Java UDFs to serve their specific needs in ETL. After that, they write the data into Apache Doris via the",(0,s.jsx)(t.a,{href:"https://doris.apache.org/docs/ecosystem/flink-doris-connector/",children:" Flink-Doris-Connector"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The offline data is cleaned, transformed, and written into Hive, Kafka, and PostgreSQL, for which Doris creates catalogs as mappings, based on its ",(0,s.jsx)(t.a,{href:"https://doris.apache.org/docs/lakehouse/multi-catalog/",children:"Multi-Catalog"})," capability, to facilitate federated analysis. In this process, Hive Metastore is in place to access and refresh data from Hive automatically."]}),"\n",(0,s.jsxs)(t.p,{children:["In terms of ",(0,s.jsx)(t.strong,{children:"data modeling"}),", they use Apache Doris as a data warehouse and apply different ",(0,s.jsx)(t.a,{href:"https://doris.apache.org/docs/data-table/data-model",children:"data models"})," for different layers. Each layer aggregates or rolls up data from the previous layer at a coarser granularity. Eventually, it produces a highly aggregated Rollup or Materialized View."]}),"\n",(0,s.jsx)(t.p,{children:"Now let me show you what analytics tasks are running on this platform. Based on the scale of monitoring and human involvement, these tasks can be divided into real-time risk reporting, multi-dimensional analysis, federated queries, and auto alerting."}),"\n",(0,s.jsx)(t.h2,{id:"real-time-risk-report",children:"Real-time risk report"}),"\n",(0,s.jsx)(t.p,{children:"When it comes to fraud prevention, what is diminishing the effectiveness of your anti-fraud efforts? It is incomplete exposure of potential risks and untimely risk identification. That's why people always want real-time, full-scale monitoring and reporting."}),"\n",(0,s.jsx)(t.p,{children:"The bank's solution to that is built on Apache Flink and Apache Doris. First of all, they put together the 17 dimensions. After cleaning, aggregation, and other computations, they visualize the data on a real-time dashboard."}),"\n",(0,s.jsxs)(t.p,{children:["As for ",(0,s.jsx)(t.strong,{children:"scale"}),", it analyzes the workflows of ",(0,s.jsx)(t.strong,{children:"over 10 million customers, 30,000 clerks, 10,000 branches, and 1000 products"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["As for ",(0,s.jsx)(t.strong,{children:"speed"}),", the bank now has evolved from next-day data refreshing to near real-time data processing. Targeted analysis can be done within minutes instead of hours. The solution also supports complicated ad-hoc queries to capture underlying risks by monitoring how the data models and rules run."]}),"\n",(0,s.jsx)(t.h2,{id:"multi-dimensional-analysis-to-identify-risks",children:"Multi-dimensional analysis to identify risks"}),"\n",(0,s.jsx)(t.p,{children:"Case tracing is another common anti-fraud practice. The bank has a fraud model library. Based on the fraud models, they analyze the risks of each transaction and visualize the results in near real time, so their staff can take prompt measures if needed."}),"\n",(0,s.jsxs)(t.p,{children:["For that purpose, they use Apache Doris for ",(0,s.jsx)(t.strong,{children:"multi-dimensional analysis"})," of cases. They check the patterns of transactions, including sources, types, and time, for a comprehensive overview. During this process, they often need to combine ",(0,s.jsx)(t.strong,{children:"over 10 filtering conditions"})," of different dimensions. This is empowered by the ",(0,s.jsx)(t.strong,{children:"ad-hoc query"})," capabilities of Apache Doris. Both rule-based matching and list-based matching of cases can be done ",(0,s.jsx)(t.strong,{children:"within seconds"})," without manual efforts."]}),"\n",(0,s.jsx)(t.h2,{id:"federated-queries-to-locate-risk-details",children:"Federated queries to locate risk details"}),"\n",(0,s.jsx)(t.p,{children:'Apart from identifying risks from each transaction, the bank also receives risk reports from customers. In these cases, the corresponding transaction will be labeled as "risky", and it will be categorized and recorded in the ticketing system. The labels make sure that the high-risk transactions are promptly attended to.'}),"\n",(0,s.jsx)(t.p,{children:"One problem is that, the ticketing system is overloaded with such data, so it is not able to directly present all the details of the risky transactions. What needs to be done is to relate the tickets to the transaction details so the bank staff can locate the actual risks."}),"\n",(0,s.jsxs)(t.p,{children:["How is that implemented? Every day, Apache Doris traverses the incremental tickets and the basic information table to get the ticket IDs, and then it relates the ticket IDs to the dimension data stored in itself. At the end, the ticket details are presented at the frontend of Doris. This entire process takes ",(0,s.jsx)(t.strong,{children:"only a few minutes"}),". This is a big game change compared to the old time when they had to manually look up the suspicious transaction."]}),"\n",(0,s.jsx)(t.h2,{id:"auto-alerting",children:"Auto alerting"}),"\n",(0,s.jsx)(t.p,{children:"Based on Apache Doris, the bank designs their own alerting rules, models, and strategies. The system monitors how everything runs. Once it detects a situation that matches the alert rules, it will trigger an alarm. They have also established a real-time feedback mechanism for the alerting rules, so if a newly added rule causes any negative effects, it will be adjusted or removed rapidly."}),"\n",(0,s.jsxs)(t.p,{children:["So far, the bank has added nearly 100 alerting rules for various risk types to the system. During the past two months, ",(0,s.jsx)(t.strong,{children:"over 100 alarms"})," were issued with ",(0,s.jsx)(t.strong,{children:"over 95% accuracy"})," in less than ",(0,s.jsx)(t.strong,{children:"5 seconds"})," after the risk situation arises."]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["For a comprehensive anti-fraud solution, the bank conducts full-scale real-time monitoring and reporting for all their data workflows. Then, for each transaction, they look into the multiple dimensions of it to identify risks. For the suspicious transactions reported by the bank customers, they perform federated queries to retrieve the full details of them. Also, an auto alerting mechanism is always on patrol to safeguard the whole system. These are the various types of analytic workloads in this solution. The implementation of them rely on the capabilities of Apache Doris, which is a data warehouse designed to be an all-in-one platform for various workloads. If you try to build your own anti-fraud solution, the ",(0,s.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris open source developers"})," are happy to exchange ideas with you."]})]})}function c(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},244943:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/fraud-risk-management-platform-262b039604139527d92106f9c6a67847.png"},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var i=a(667294);let s={},n=i.createContext(s);function r(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}},66109:function(e){e.exports=JSON.parse('{"permalink":"/blog/a-financial-anti-fraud-solution-based-on-the-apache-doris-data-warehouse","source":"@site/blog/a-financial-anti-fraud-solution-based-on-the-apache-doris-data-warehouse.md","title":"A financial anti-fraud solution based on the Apache Doris data warehouse","description":"Financial fraud prevention is a race against time. This post will get into details about how a retail bank builds their fraud risk management platform based on Apache Doris and how it performs. ","date":"2024-02-22T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"A financial anti-fraud solution based on the Apache Doris data warehouse","description":"Financial fraud prevention is a race against time. This post will get into details about how a retail bank builds their fraud risk management platform based on Apache Doris and how it performs. ","date":"2024-02-22","author":"Apache Doris","tags":["Best Practice"],"image":"/images/a-financial-anti-fraud-solution-based-on-the-apache-doris-data-warehouse.png"},"unlisted":false,"prevItem":{"title":"Apache Doris 2.0.5 just released","permalink":"/blog/release-note-2.0.5"},"nextItem":{"title":"A deep dive into inverted index: how it speeds up text searches by 40 times","permalink":"/blog/inverted-index-accelerates-text-searches-by-40-time-apache-doris"}}')}}]);