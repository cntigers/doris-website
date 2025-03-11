"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["363382"],{419748:function(e,l,s){s.r(l),s.d(l,{default:()=>d,frontMatter:()=>h,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>t});var n=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.1","title":"Release 2.1.1","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/releasenotes/v2.1/release-2.1.1.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.1","permalink":"/docs/releasenotes/v2.1/release-2.1.1","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.1.1","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.1.2","permalink":"/docs/releasenotes/v2.1/release-2.1.2"},"next":{"title":"Release 2.1.0","permalink":"/docs/releasenotes/v2.1/release-2.1.0"}}'),i=s("785893"),r=s("250065");let h={title:"Release 2.1.1",language:"en"},t=void 0,c={},a=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Upgrade Problem",id:"upgrade-problem",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Bugfix",id:"bugfix",level:2}];function o(e){let l={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.p,{children:"Dear community members, Apache Doris 2.1.1 has been officially released on April 3, 2024, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.strong,{children:"Quick Download:"})," ",(0,i.jsx)(l.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.strong,{children:"GitHub\uFF1A"})," ",(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"behavior-changed",children:"Behavior Changed"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"Change float type output format to improve float type serialization performance."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32049",children:"https://github.com/apache/doris/pull/32049"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"Change system table value functions active_queries(), workload_groups() to system tables."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32314",children:"https://github.com/apache/doris/pull/32314"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"3",children:["\n",(0,i.jsx)(l.li,{children:"Disable show query/load profile stmt because there are not so many developers use it and the pipeline and pipelinex engine not support it."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32467",children:"https://github.com/apache/doris/pull/32467"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"4",children:["\n",(0,i.jsx)(l.li,{children:"Upgrade arrow flight version to 15.0.2 to fix some bugs, so that please use ADBC 15.0.2 version to access Doris."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32827",children:"https://github.com/apache/doris/pull/32827"}),"."]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"upgrade-problem",children:"Upgrade Problem"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"BE will core when rolling pgrade problem from 2.0.x to 2.1.x"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32672",children:"https://github.com/apache/doris/pull/32672"})}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32444",children:"https://github.com/apache/doris/pull/32444"})}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32162",children:"https://github.com/apache/doris/pull/32162"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"JDBC Catalog will have query errors when rolling grade rom 2.0.x to 2.1.x."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32618",children:"https://github.com/apache/doris/pull/32618"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"new-feature",children:"New Feature"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"Enable column auth by default."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32659",children:"https://github.com/apache/doris/pull/32659"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"Get correct cores for pipeline and pipelinex engine when running within docker or k8s."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32370",children:"https://github.com/apache/doris/pull/32370"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"3",children:["\n",(0,i.jsx)(l.li,{children:"Support read parquet int96 type."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32394",children:"https://github.com/apache/doris/pull/32394"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"4",children:["\n",(0,i.jsx)(l.li,{children:"Enable proxy protocol to support IP transparency. Using this protocol, IP transparency for load balancing can be achieved, so that after load balancing, Doris can still obtain the client's real IP and implement permission control such as whitelisting."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32338/files",children:"https://github.com/apache/doris/pull/32338/files"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"5",children:["\n",(0,i.jsx)(l.li,{children:"Add workload group queue related columns for active_queries system table. Uses could use this system to monitor the workload queue usage."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32259",children:"https://github.com/apache/doris/pull/32259"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"6",children:["\n",(0,i.jsx)(l.li,{children:"Add new system table backend_active_tasks to monitor the realtime query statics on every BE."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31945",children:"https://github.com/apache/doris/pull/31945"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"7",children:["\n",(0,i.jsx)(l.li,{children:"Add ipv4 and ipv6 support for spark-doris connector."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32240",children:"https://github.com/apache/doris/pull/32240"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"8",children:["\n",(0,i.jsx)(l.li,{children:"Add inverted index support for CCR."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32101",children:"https://github.com/apache/doris/pull/32101"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"9",children:["\n",(0,i.jsx)(l.li,{children:"Support select experimental session variable."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31837",children:"https://github.com/apache/doris/pull/31837"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"10",children:["\n",(0,i.jsx)(l.li,{children:"Support materialized view with bitmap_union(bitmap_from_array()) case."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31962",children:"https://github.com/apache/doris/pull/31962"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"11",children:["\n",(0,i.jsxs)(l.li,{children:["Support partition prune for ",(0,i.jsx)(l.em,{children:"HIVE_DEFAULT_PARTITION"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31736",children:"https://github.com/apache/doris/pull/31736"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"12",children:["\n",(0,i.jsx)(l.li,{children:"Support function in set variable statement."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32492",children:"https://github.com/apache/doris/pull/32492"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"13",children:["\n",(0,i.jsx)(l.li,{children:"Support arrow serialization for varint type."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32809",children:"https://github.com/apache/doris/pull/32809"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"optimization",children:"Optimization"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"Auto resume routine load when be restart or during upgrade. And keep the routine load stable."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32239",children:"https://github.com/apache/doris/pull/32239"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"Routine Load: optimize allocate task to be algorithm for load balance."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32021",children:"https://github.com/apache/doris/pull/32021"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"3",children:["\n",(0,i.jsx)(l.li,{children:"Spark Load: update spark version for spark load to resolve cve problem."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/30368",children:"https://github.com/apache/doris/pull/30368"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"4",children:["\n",(0,i.jsx)(l.li,{children:"Skip cooldown if the tablet is dropped."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32079",children:"https://github.com/apache/doris/pull/32079"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"5",children:["\n",(0,i.jsx)(l.li,{children:"Support using workload group to manage routine load."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31671",children:"https://github.com/apache/doris/pull/31671"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"6",children:["\n",(0,i.jsx)(l.li,{children:"[MTMV ]Improve the performance for query rewritting by materialized view."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31886",children:"https://github.com/apache/doris/pull/31886"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"7",children:["\n",(0,i.jsx)(l.li,{children:"Reduce jvm heap memory consumed by profiles of BrokerLoadJob."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31985",children:"https://github.com/apache/doris/pull/31985"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"8",children:["\n",(0,i.jsx)(l.li,{children:"Imporve the high QPS query by speed up PartitionPrunner."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31970",children:"https://github.com/apache/doris/pull/31970"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"9",children:["\n",(0,i.jsx)(l.li,{children:"Reduce duplicated memory consumption for column name and column path for schema cache."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31141",children:"https://github.com/apache/doris/pull/31141"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"10",children:["\n",(0,i.jsx)(l.li,{children:"Support more join types for query rewriting by materialized view such as INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, LEFT SEMI JOIN, RIGHT SEMI JOIN, LEFT ANTI JOIN, RIGHT ANTI JOIN"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32909",children:"https://github.com/apache/doris/pull/32909"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"bugfix",children:"Bugfix"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"Do not push down topn-filter through right/full outer join if the first orderkey is nulls first."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32633",children:"https://github.com/apache/doris/pull/32633"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"Fix memory leak in Java UDF"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32630",children:"https://github.com/apache/doris/pull/32630"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"3",children:["\n",(0,i.jsx)(l.li,{children:"If some odbc tables use the same resource, and restore not all odbc tables, it will not retain the resource.\nand check some conf for backup/restore"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31989",children:"https://github.com/apache/doris/pull/31989"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"4",children:["\n",(0,i.jsx)(l.li,{children:"Fold constant will core for variant type."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32265",children:"https://github.com/apache/doris/pull/32265"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"5",children:["\n",(0,i.jsx)(l.li,{children:"Routine load will pause when transaction fail in some cases."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32638",children:"https://github.com/apache/doris/pull/32638"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"6",children:["\n",(0,i.jsx)(l.li,{children:"the result of left semi join with empty right side should be false instead of null."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32477",children:"https://github.com/apache/doris/pull/32477"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"7",children:["\n",(0,i.jsx)(l.li,{children:"Fix core when build inverted index for a new column with no data."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32669",children:"https://github.com/apache/doris/pull/32669"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"8",children:["\n",(0,i.jsx)(l.li,{children:"Fix be core caused by null-safe-equal join."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32623",children:"https://github.com/apache/doris/pull/32623"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"9",children:["\n",(0,i.jsx)(l.li,{children:"Partial update: fix data correctness risk when load delete sign data into a table with sequence col."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32574",children:"https://github.com/apache/doris/pull/32574"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"10",children:["\n",(0,i.jsx)(l.li,{children:"Select outfile: Fix the column type mapping in the orc/parquet file format."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32281",children:"https://github.com/apache/doris/pull/32281"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"11",children:["\n",(0,i.jsx)(l.li,{children:"Fix BE core during restore stage."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32489",children:"https://github.com/apache/doris/pull/32489"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"12",children:["\n",(0,i.jsx)(l.li,{children:"Use array_agg func after other agg func like count, sum, may make be core."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32387",children:"https://github.com/apache/doris/pull/32387"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"13",children:["\n",(0,i.jsx)(l.li,{children:"Variant type should always nullable or there will some bugs."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32248",children:"https://github.com/apache/doris/pull/32248"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"14",children:["\n",(0,i.jsx)(l.li,{children:"Fix the bug of handling empty blocks in schema change."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32396",children:"https://github.com/apache/doris/pull/32396"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"15",children:["\n",(0,i.jsx)(l.li,{children:"Fix BE will core when use json_length() in some cases."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32145",children:"https://github.com/apache/doris/pull/32145"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"16",children:["\n",(0,i.jsx)(l.li,{children:"Fix error when query iceberg table using date cast predicate"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/32194",children:"https://github.com/apache/doris/pull/32194"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"17",children:["\n",(0,i.jsx)(l.li,{children:"Fix some bugs when build inverted index for variant type."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31992",children:"https://github.com/apache/doris/pull/31992"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"18",children:["\n",(0,i.jsx)(l.li,{children:"Wrong result of two or more map_agg functions in query."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31928",children:"https://github.com/apache/doris/pull/31928"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"19",children:["\n",(0,i.jsx)(l.li,{children:"Fix wrong result of money_format function."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31883",children:"https://github.com/apache/doris/pull/31883"})}),"\n"]}),"\n",(0,i.jsxs)(l.ol,{start:"20",children:["\n",(0,i.jsx)(l.li,{children:"Fix connection hang after too many connections."}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://github.com/apache/doris/pull/31594",children:"https://github.com/apache/doris/pull/31594"})}),"\n"]})]})}function d(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,l,s){s.d(l,{Z:function(){return t},a:function(){return h}});var n=s(667294);let i={},r=n.createContext(i);function h(e){let l=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);