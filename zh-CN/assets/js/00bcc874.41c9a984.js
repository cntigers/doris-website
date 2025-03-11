"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["690587"],{977481:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var i=n(764858),t=n(785893),o=n(250065);let s={title:"Choosing an OLAP engine for financial risk management: what to consider?",description:"This post provides reference for what you should take into account when choosing an OLAP engine in a financial scenario.",date:"2023-08-17",author:"Jianbo Liu",tags:["Best Practice"],image:"/images/financial-risk.png"},r=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Data Must Be Combined",id:"data-must-be-combined",level:2},{value:"High Concurrency &amp; High Throughput",id:"high-concurrency--high-throughput",level:2},{value:"Log Analysis",id:"log-analysis",level:2},{value:"Easy Maintenance",id:"easy-maintenance",level:2},{value:"Architecture Overview",id:"architecture-overview",level:2}];function h(e){let a={a:"a",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"From a data engineer's point of view, financial risk management is a series of data analysis activities on financial data. The financial sector imposes its unique requirements on data engineering. This post explains them with a use case of Apache Doris, and provides reference for what you should take into account when choosing an OLAP engine in a financial scenario."}),"\n",(0,t.jsx)(a.h2,{id:"data-must-be-combined",children:"Data Must Be Combined"}),"\n",(0,t.jsx)(a.p,{children:"The financial data landscape is evolving from standalone to distributed, heterogeneous systems. For example, in this use case scenario, the fintech service provider needs to connect the various transaction processing (TP) systems (MySQL, Oracle, and PostgreSQL) of its partnering banks. Before they adopted an OLAP engine, they were using Kettle to collect data. The ETL tool did not support join queries across different data sources and it could not store data. The ever-enlarging data size at the source end was pushing the system towards latency and instability. That's when they decided to introduce an OLAP engine."}),"\n",(0,t.jsx)(a.p,{children:"The financial user's main pursuit is quick queries on large data volume with as least engineering and maintenance efforts as possible, so when it comes to the choice of OLAP engines, SQL on Hadoop should be crossed off the list due to its huge ecosystem and complicated components. One reason that they landed on Apache Doris was the metadata management capability. Apache Doris collects metadata of various data sources via API so it is a fit for the case which requires combination of different TP systems."}),"\n",(0,t.jsx)(a.h2,{id:"high-concurrency--high-throughput",children:"High Concurrency & High Throughput"}),"\n",(0,t.jsx)(a.p,{children:"Financial risk control is based on analysis of large amounts of transaction data. Sometimes analysts identify abnormalities by combining data from different large tables, and often times they need to check a certain data record, which comes in the form of concurrent point queries in the data system. Thus, the OLAP engine should be able to handle both high-throughput queries and high-concurrency queries."}),"\n",(0,t.jsxs)(a.p,{children:["To speed up the highly concurrent point queries, you can create ",(0,t.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/query-acceleration/materialized-view/",children:"Materialized Views"})," in Apache Doris. A Materialized View is a pre-computed data set stored in Apache Doris so that the system can respond much faster to queries that are frequently conducted."]}),"\n",(0,t.jsxs)(a.p,{children:["To facilitate queries on large tables, you can leverage the ",(0,t.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/query-acceleration/join-optimization/colocation-join/",children:"Colocation Join"})," mechanism. Colocation Join minimizes data transfer between computation nodes to reduce overheads brought by data movement. Thus, it can largely improve query speed when joining large tables."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"colocation-join",src:n(506288).Z+"",width:"1280",height:"687"})}),"\n",(0,t.jsx)(a.h2,{id:"log-analysis",children:"Log Analysis"}),"\n",(0,t.jsx)(a.p,{children:"Log analysis is important in financial data processing. Real-time processing and monitoring of logs can expose risks in time. Apache Doris provides data storage and analytics capabilities to make log analysis easier and more efficient. As logs are bulky, Apache Doris can deliver a high data compression rate to lower storage costs."}),"\n",(0,t.jsxs)(a.p,{children:["Retrieval is a major part of log analysis, so ",(0,t.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/releasenotes/release-2.0.0",children:"Apache Doris 2.0"})," supports inverted index, which is a way to accelerate text searching and equivalence/range queries on numerics and datetime. It allows users to quickly locate the log record that they need among the massive data. The JSON storage feature in Apache Doris is reported to reduce storage costs of user activity logs by 70%, and the variety of parse functions provided can save data engineers from developing their own SQl functions."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"log-analysis",src:n(368130).Z+"",width:"1280",height:"473"})}),"\n",(0,t.jsx)(a.h2,{id:"easy-maintenance",children:"Easy Maintenance"}),"\n",(0,t.jsxs)(a.p,{children:["In addition to the easy deployment, Apache Doris has a few mechanisms that are designed to save maintenance efforts. For example, it ensures high availability of cluster nodes with Systemd, and high availability of data with multi-replica and auto-balancing of replicas, so all maintenance required is to backup metadata on a regular basis. Apache Doris also supports ",(0,t.jsx)(a.a,{href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition/",children:"dynamic partitioning of data"}),", which means it will automatically create or delete data partitions according to the rules specified by the user. This saves efforts in partition management and eliminates possible efforts caused by manual management."]}),"\n",(0,t.jsx)(a.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsx)(a.p,{children:"This is overall data architecture in the case. The user utilizes Apache Flume for log data collection, and DataX for data update. Data from multiple sources will be collected into Apache Doris to form a data mart, from which analysts extract information to generate reports and dashboards for reference in risk control and business decisions. As for stability of the data mart itself, Grafana and Prometheus are used to monitor memory usage, compaction score and query response time of Apache Doris to make sure it is running well."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"data-architecture",src:n(297442).Z+"",width:"1280",height:"792"})})]})}function d(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},506288:function(e,a,n){n.d(a,{Z:function(){return i}});let i=n.p+"assets/images/Xingyun_1-d07e739500944ff34d4ad3c75968850b.png"},368130:function(e,a,n){n.d(a,{Z:function(){return i}});let i=n.p+"assets/images/Xingyun_2-84440a0d5bfc678448d3a3e3063bd7f9.png"},297442:function(e,a,n){n.d(a,{Z:function(){return i}});let i=n.p+"assets/images/Xingyun_3-ef9c50ef508df963514a76a7365b0490.png"},250065:function(e,a,n){n.d(a,{Z:function(){return r},a:function(){return s}});var i=n(667294);let t={},o=i.createContext(t);function s(e){let a=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:a},e.children)}},764858:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/Choosing-an-OLAP-Engine-for-Financial-Risk-Management-What-to-Consider","source":"@site/blog/Choosing-an-OLAP-Engine-for-Financial-Risk-Management-What-to-Consider.md","title":"Choosing an OLAP engine for financial risk management: what to consider?","description":"This post provides reference for what you should take into account when choosing an OLAP engine in a financial scenario.","date":"2023-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Jianbo Liu","key":null,"page":null}],"frontMatter":{"title":"Choosing an OLAP engine for financial risk management: what to consider?","description":"This post provides reference for what you should take into account when choosing an OLAP engine in a financial scenario.","date":"2023-08-17","author":"Jianbo Liu","tags":["Best Practice"],"image":"/images/financial-risk.png"},"unlisted":false,"prevItem":{"title":"LLM-powered OLAP: the Tencent application with Apache Doris","permalink":"/zh-CN/blog/Tencent-LLM"},"nextItem":{"title":"Auto synchronization of an entire MySQL database for data analysis","permalink":"/zh-CN/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis"}}')}}]);