"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["227360"],{676117:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"query-acceleration/materialized-view/async-materialized-view/overview","title":"Overview of Asynchronous Materialized Views","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-acceleration/materialized-view/async-materialized-view/overview.md","sourceDirName":"query-acceleration/materialized-view/async-materialized-view","slug":"/query-acceleration/materialized-view/async-materialized-view/overview","permalink":"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview of Asynchronous Materialized Views","language":"en"},"sidebar":"docs","previous":{"title":"Sync-Materialized View","permalink":"/docs/3.0/query-acceleration/materialized-view/sync-materialized-view"},"next":{"title":"Creating, Querying, and Maintaining Asynchronous Materialized Views","permalink":"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/functions-and-demands"}}'),r=n("785893"),a=n("250065");let s={title:"Overview of Asynchronous Materialized Views",language:"en"},l=void 0,o={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Principle Introduction",id:"principle-introduction",level:2},{value:"Support for Materialized Refresh Data Lake",id:"support-for-materialized-refresh-data-lake",level:2},{value:"Relationship Between Materialized Views and OLAP Internal Tables",id:"relationship-between-materialized-views-and-olap-internal-tables",level:2},{value:"More References",id:"more-references",level:2}];function c(e){let i={a:"a",br:"br",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Materialized views, as an efficient solution, combine the flexibility of views with the high\nperformance advantages of physical tables.\nThey can pre-compute and store the result sets of queries,\nallowing for quick retrieval of results directly from the stored materialized view\nwhen query requests arrive, thus avoiding the overhead of re-executing complex query statements."}),"\n",(0,r.jsx)(i.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Query Acceleration and Concurrency Improvement"}),": Materialized views can significantly enhance query speed while boosting the system's concurrent processing capabilities, effectively reducing resource consumption."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Simplifying ETL Processes"}),": During the Extract, Transform, Load (ETL) process, materialized views can streamline workflows, improve development efficiency, and make data processing smoother."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Accelerating External Table Queries in Lakehouse Architecture"}),": In a lakehouse architecture, materialized views can significantly enhance the query speed for external data sources, improving data access efficiency."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Improving Write Efficiency"}),": By reducing resource contention, materialized views can optimize the data writing process, enhance write efficiency, and ensure data consistency and integrity."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Consistency of Asynchronous Materialized Views with Base Table Data"}),": Asynchronous materialized views will eventually be consistent with the base table data, but they cannot be synchronized in real-time, meaning real-time consistency cannot be maintained."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Support for Window Function Queries"}),": Currently, if a query contains window functions, it is not supported to transparently rewrite that query to utilize materialized views."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Materialized Views Joining More Tables than Query Tables"}),": If the number of tables joined in the materialized view exceeds the number of tables involved in the query (for example, if the query only involves t1 and t2, while the materialized view includes t1, t2, and an additional t3), the system currently does not support transparently rewriting that query to utilize the materialized view."]}),"\n",(0,r.jsx)(i.li,{children:"If the materialized view contains set operations such as UNION ALL, LIMIT, ORDER BY, or CROSS JOIN, the materialized view can be built normally, but it cannot be used for transparent rewriting."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"principle-introduction",children:"Principle Introduction"}),"\n",(0,r.jsx)(i.p,{children:"Materialized views, as an advanced feature in databases, essentially function as MTMV-type internal tables. When creating a materialized view, the system simultaneously registers a refresh task. This task will run when needed, executing an INSERT OVERWRITE statement to write the latest data into the materialized view."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Refresh Mechanism"}),(0,r.jsx)(i.br,{}),"\nUnlike the real-time incremental refresh used by synchronous materialized views, asynchronous materialized views offer more flexible refresh options."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Full Refresh"}),":",(0,r.jsx)(i.br,{}),"\nIn this mode, the system recalculates all data involved in the SQL definition of the materialized view and writes the complete results into the materialized view. This process ensures that the data in the materialized view remains consistent with the base table data, but it may consume more computational resources and time."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Partition Incremental Refresh"}),":",(0,r.jsx)(i.br,{}),"\nWhen the partition data of the base table for the materialized view changes, the system can intelligently identify these changes and refresh only the affected partitions. This mechanism significantly reduces the computational resources and time required to refresh the materialized view while ensuring eventual data consistency."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Transparent Rewriting"}),":",(0,r.jsx)(i.br,{}),"\nTransparent rewriting is an important means for databases to optimize query performance. When processing user queries, the system can automatically optimize and rewrite the SQL to improve execution efficiency and reduce computational costs. This rewriting process is transparent to the user, requiring no intervention."]}),"\n",(0,r.jsx)(i.p,{children:"Doris asynchronous materialized views utilize a transparent rewriting algorithm based on the SPJG (SELECT-PROJECT-JOIN-GROUP-BY) model. This algorithm can deeply analyze the structural information of SQL, automatically searching for and selecting suitable materialized views for transparent rewriting. When multiple materialized views are available, the algorithm will also choose the optimal materialized view to respond to the query SQL based on certain strategies (such as cost models), further enhancing query performance."}),"\n",(0,r.jsx)(i.h2,{id:"support-for-materialized-refresh-data-lake",children:"Support for Materialized Refresh Data Lake"}),"\n",(0,r.jsx)(i.p,{children:"The support for materialized refresh data lakes varies by table type and catalog."}),"\n",(0,r.jsxs)(i.table,{children:["\n    ",(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.th,{rowSpan:"2",children:"Table Type"}),"\n        ",(0,r.jsx)(i.th,{rowSpan:"2",children:"Catalog Type"}),"\n        ",(0,r.jsx)(i.th,{colSpan:"2",children:"Refresh Method"}),"\n        ",(0,r.jsx)(i.th,{children:"Triggered Refresh"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.th,{children:"Full Refresh"}),"\n        ",(0,r.jsx)(i.th,{children:"Partition Refresh"}),"\n        ",(0,r.jsx)(i.th,{children:"Auto Trigger"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"Internal Table"}),"\n        ",(0,r.jsx)(i.td,{children:"Internal"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1.4"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"Hive"}),"\n        ",(0,r.jsx)(i.td,{children:"Hive"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"Iceberg"}),"\n        ",(0,r.jsx)(i.td,{children:"Iceberg"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"Paimon"}),"\n        ",(0,r.jsx)(i.td,{children:"Paimon"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"Hudi"}),"\n        ",(0,r.jsx)(i.td,{children:"Hudi"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"JDBC"}),"\n        ",(0,r.jsx)(i.td,{children:"JDBC"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]}),"\n    ",(0,r.jsxs)(i.tr,{children:["\n        ",(0,r.jsx)(i.td,{children:"ES"}),"\n        ",(0,r.jsx)(i.td,{children:"ES"}),"\n        ",(0,r.jsx)(i.td,{children:"Supported in 2.1"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n        ",(0,r.jsx)(i.td,{children:"Not supported"}),"\n    "]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"relationship-between-materialized-views-and-olap-internal-tables",children:"Relationship Between Materialized Views and OLAP Internal Tables"}),"\n",(0,r.jsx)(i.p,{children:"Asynchronous materialized views define SQL using the base table's table model without restrictions, which can be detail models, primary key models (merge-on-write and merge-on-read), aggregate models, etc."}),"\n",(0,r.jsx)(i.p,{children:"The underlying implementation of materialized views relies on OLAP tables of the Duplicate model, which theoretically allows them to support all core functionalities of the Duplicate model. However, to ensure that materialized views can execute data refresh tasks stably and efficiently, we have imposed a series of necessary restrictions on their functionality. The specific restrictions are as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The partitions of materialized views are automatically created and maintained based on their base tables, so users cannot perform partition operations on materialized views."}),"\n",(0,r.jsx)(i.li,{children:"Since there are related jobs (JOB) that need to be processed behind materialized views, commands like DELETE TABLE or RENAME TABLE cannot be used to operate on materialized views. Instead, the commands specific to the materialized view must be used for these operations."}),"\n",(0,r.jsx)(i.li,{children:"The column data types of materialized views are automatically inferred based on the query statement specified at creation, so these data types cannot be modified. Otherwise, it may lead to failures in the refresh tasks of the materialized view."}),"\n",(0,r.jsx)(i.li,{children:"Materialized views have some properties that Duplicate tables do not possess, and these properties need to be modified through the commands of the materialized view. Other common properties should be modified using the ALTER TABLE command."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"more-references",children:"More References"}),"\n",(0,r.jsxs)(i.p,{children:["For creating, querying, and maintaining asynchronous materialized views, you can refer to ",(0,r.jsx)(i.a,{href:"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/functions-and-demands",children:"Creating, Querying, and Maintaining Asynchronous Materialized Views"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["For best practices, you can refer to ",(0,r.jsx)(i.a,{href:"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/use-guide",children:"Best Practices"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["For frequently asked questions, you can refer to ",(0,r.jsx)(i.a,{href:"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/faq",children:"Frequently Asked Questions"}),"."]})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return s}});var t=n(667294);let r={},a=t.createContext(r);function s(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);