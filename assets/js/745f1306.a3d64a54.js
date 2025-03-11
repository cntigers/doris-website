"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["591145"],{45201:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"query-acceleration/high-concurrent-point-query","title":"High-Concurrency Point Query Optimization","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/high-concurrent-point-query.md","sourceDirName":"query-acceleration","slug":"/query-acceleration/high-concurrent-point-query","permalink":"/docs/query-acceleration/high-concurrent-point-query","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"High-Concurrency Point Query Optimization","language":"en"},"sidebar":"docs","previous":{"title":"SQL Cache","permalink":"/docs/query-acceleration/sql-cache-manual"},"next":{"title":"Orthogonal BITMAP Calculation","permalink":"/docs/query-acceleration/distinct-counts/orthogonal-bitmap-manual"}}'),o=t("785893"),i=t("250065");let s={title:"High-Concurrency Point Query Optimization",language:"en"},a=void 0,l={},c=[{value:"Background",id:"background",level:2},{value:"Row Store Format",id:"row-store-format",level:2},{value:"Accelerate point query for unique model",id:"accelerate-point-query-for-unique-model",level:2},{value:"Using <code>PreparedStatement</code>",id:"using-preparedstatement",level:2},{value:"Enable row cache",id:"enable-row-cache",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"FAQ",id:"faq",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Tips",type:"tip",children:(0,o.jsx)(n.p,{children:"This feature is supported since the Apache Doris 2.0 version"})}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(n.p,{children:"Doris is built on a columnar storage format engine. In high-concurrency service scenarios, users always want to retrieve entire rows of data from the system. However, when tables are wide, the columnar format greatly amplifies random read IO. Doris query engine and planner are too heavy for some simple queries, such as point queries. A short path needs to be planned in the FE's query plan to handle such queries. FE is the access layer service for SQL queries, written in Java. Parsing and analyzing SQL also leads to high CPU overhead for high-concurrency queries. To solve these problems, we have introduced row storage, short query path, and PreparedStatement in Doris. Below is a guide to enable these optimizations."}),"\n",(0,o.jsx)(n.h2,{id:"row-store-format",children:"Row Store Format"}),"\n",(0,o.jsxs)(n.p,{children:["We support a row format for olap table to reduce point lookup io cost,\nbut to enable this format, you need to spend more disk space for row format store.\nCurrently, we store row in an extra column called ",(0,o.jsx)(n.code,{children:"row column"})," for simplicity.\nThe Row Storage mode can only be turned on when creating a table. You need to specify the following properties in the property of the table creation statement:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'"store_row_column" = "true"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"accelerate-point-query-for-unique-model",children:"Accelerate point query for unique model"}),"\n",(0,o.jsxs)(n.p,{children:["The above row storage is used to enable the Merge-On-Write strategy under the Unique model to reduce the IO overhead during enumeration. When ",(0,o.jsx)(n.code,{children:"enable_unique_key_merge_on_write"})," and ",(0,o.jsx)(n.code,{children:"store_row_column"})," are enabled when creating a Unique table, the query of the primary key will take a short path to optimize SQL execution, and only one RPC is required to complete the query. The following is an example of enabling the Merge-On-Write strategy under the Unique model by combining the query and row existence:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `tbl_point_query` (\n    `k1` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`k1`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1)` BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1",\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"enable_unique_key_merge_on_write"})," should be enabled, since we need primary key for quick point lookup in storage engine"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["when condition only contains primary key like ",(0,o.jsx)(n.code,{children:"select * from tbl_point_query where key = 123"}),", such query will go through the short fast path"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"light_schema_change"})," should also been enabled since we rely on ",(0,o.jsx)(n.code,{children:"column unique id"})," of each column when doing a point query."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"It only supports equality queries on the key column of a single table and does not support joins or nested subqueries. The WHERE condition should consist of the key column alone and be an equality comparison. It can be considered as a type of key-value query."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Enabling rowstore may lead to space expansion and occupy more disk space. For scenarios where querying only specific columns is needed, starting from Doris 2.1, it is recommended to use ",(0,o.jsx)(n.code,{children:'"row_store_columns"="k1,v1,v2"'})," to specify certain columns for rowstore storage. Queries can then selectively access these columns, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SELECT k1, v1, v2 FROM tbl_point_query WHERE k1 = 1\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"using-preparedstatement",children:["Using ",(0,o.jsx)(n.code,{children:"PreparedStatement"})]}),"\n",(0,o.jsxs)(n.p,{children:["In order to reduce CPU cost for parsing query SQL and SQL expressions, we provide ",(0,o.jsx)(n.code,{children:"PreparedStatement"})," feature in FE fully compatible with mysql protocol (currently only support point queries like above mentioned).Enable it will pre calculate PreparedStatement SQL and expressions and caches it in a session level memory buffer and will be reused later on.We could improve 4x+ performance by using ",(0,o.jsx)(n.code,{children:"PreparedStatement"})," when CPU became bottleneck doing such queries.Bellow is an JDBC example of using ",(0,o.jsx)(n.code,{children:"PreparedStatement"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Setup JDBC url and enable server side prepared statement"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"PreparedStatement"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// use `?` for placement holders, readStatement should be reused\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where k1 = ?");\n...\nreadStatement.setInt(1,1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1,1235);\nresultSet = readStatement.executeQuery();\n...\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"enable-row-cache",children:"Enable row cache"}),"\n",(0,o.jsx)(n.p,{children:"Doris has a page-level cache that stores data for a specific column in each page. Therefore, the page cache is a column-based cache. For the row storage mentioned earlier, a row contains data for multiple columns, and the cache may be evicted by large queries, which can reduce the hit rate. To increase the hit rate of the row cache, a separate row cache is introduced, which reuses the LRU cache mechanism in Doris to ensure memory usage. You can enable it by specifying the following BE configuration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"disable_storage_row_cache"})," : Whether to enable the row cache. It is not enabled by default."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"row_cache_mem_limit"})," : Specifies the percentage of memory occupied by the row cache. The default is 20% of memory."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generally, it is effective to improve query processing capabilities by increasing the number of Observers."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Query load balancing: During the enumeration, if it is found that the FE CPU that accepts enumeration requests is used too high, or the request response becomes slow, you can use jdbc load balance for load balancing, and distribute the requests to multiple nodes to share the pressure (and also You can use other methods for query load balancing configuration, such as Nginx, proxySQL)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"By directing the query requests to the Observer role to share the request pressure of high-concurrency queries and reducing the number of query requests sent to the fe master, it can usually solve the problem of the time-consuming fluctuation of the Fe Master node query to obtain better performance and stability"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. How to confirm that the configuration is correct and short path optimization using concurrent enumeration is used ?"})}),"\n",(0,o.jsx)(n.p,{children:"A: explain sql, when SHORT-CIRCUIT appears in the execution plan, it proves that short path optimization is used"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"mysql> explain select * from tbl_point_query where k1 = -2147481418 ;                                                                                                                                \n   +-----------------------------------------------------------------------------------------------+                                                                                                       \n   | Explain String(Old Planner)                                                                   |                                                                                                       \n   +-----------------------------------------------------------------------------------------------+                                                                                                       \n   | PLAN FRAGMENT 0                                                                               |                                                                                                       \n   |   OUTPUT EXPRS:                                                                               |                                                                                                       \n   |     `test`.`tbl_point_query`.`k1`                                                            |                                                                                                       \n   |     `test`.`tbl_point_query`.`v1`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v2`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v3`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v4`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v5`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v6`                                                             |                                                                                                       \n   |     `test`.`tbl_point_query`.`v7`                                                             |                                                                                                       \n   |   PARTITION: UNPARTITIONED                                                                    |                                                                                                       \n   |                                                                                               |                                                                                                       \n   |   HAS_COLO_PLAN_NODE: false                                                                   |                                                                                                       \n   |                                                                                               |                                                                                                       \n   |   VRESULT SINK                                                                                |                                                                                                       \n   |      MYSQL_PROTOCAL                                                                           |                                                                                                       \n   |                                                                                               |                                                                                                       \n   |   0:VOlapScanNode                                                                             |                                                                                                       \n   |      TABLE: test.tbl_point_query(tbl_point_query), PREAGGREGATION: ON                         |                                                                                                       \n   |      PREDICATES: `k1` = -2147481418 AND `test`.`tbl_point_query`.`__DORIS_DELETE_SIGN__` = 0 |                                                                                                       \n   |      partitions=1/1 (tbl_point_query), tablets=1/1, tabletList=360065                         |                                                                                                       \n   |      cardinality=9452868, avgRowSize=833.31323, numNodes=1                                    |                                                                                                       \n   |      pushAggOp=NONE                                                                           |                                                                                                       \n   |      SHORT-CIRCUIT                                                                            |                                                                                                       \n   +-----------------------------------------------------------------------------------------------+\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. How to confirm that prepared statement is effective ?"})}),"\n",(0,o.jsx)(n.p,{children:"A: After sending the request to Doris, find the corresponding query request in fe.audit.log and find Stmt=EXECUTE(), indicating that prepared statement is effective"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"2024-01-02 11:15:51,248 [query] |Client=192.168.1.82:53450|User=root|Db=test|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=49|ScanBytes=0|ScanRows=0|ReturnRows=1|StmtId=51|QueryId=b63d30b908f04dad-ab4a\n   3ba21d2c776b|IsQuery=true|isNereids=false|feIp=10.16.10.6|Stmt=EXECUTE(-2147481418)|CpuTimeMS=0|SqlHash=eee20fa2ac13a4f93bd4503a87921024|peakMemoryBytes=0|SqlDigest=|TraceId=|WorkloadGroup=|FuzzyVaria\n   bles=\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. Can non-primary key queries use special optimization of high-concurrency point lookups?"})}),"\n",(0,o.jsx)(n.p,{children:"A: No, high-concurrency query only targets the equivalent query of the key column, and the query cannot contain join or nested subqueries."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. Is useServerPrepStmts useful in ordinary queries?"})}),"\n",(0,o.jsx)(n.p,{children:"A: Prepared Statement currently only takes effect when primary key is checked."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"5. Does optimizer selection require global settings?"})}),"\n",(0,o.jsx)(n.p,{children:"A: When using prepared statement for query, Doris will choose the query method with the best performance, and there is no need to manually set the optimizer."})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);