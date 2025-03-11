"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12795"],{368637:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"table-design/data-partitioning/data-distribution","title":"Data Distribution Concept","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/table-design/data-partitioning/data-distribution.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/data-distribution","permalink":"/docs/table-design/data-partitioning/data-distribution","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Data Distribution Concept","language":"en"},"sidebar":"docs","previous":{"title":"Usage Notes","permalink":"/docs/table-design/data-model/tips"},"next":{"title":"Manual partitioning","permalink":"/docs/table-design/data-partitioning/manual-partitioning"}}'),a=i("785893"),r=i("250065");let s={title:"Data Distribution Concept",language:"en"},o=void 0,l={},d=[{value:"Overview of Data Distribution",id:"overview-of-data-distribution",level:2},{value:"Data Writing",id:"data-writing",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Node and Storage Architecture",id:"node-and-storage-architecture",level:2},{value:"Node Types",id:"node-types",level:3},{value:"Data Shard (Tablet)",id:"data-shard-tablet",level:3},{value:"Partitioning Strategy",id:"partitioning-strategy",level:2},{value:"Partition Types",id:"partition-types",level:3},{value:"Partition Modes",id:"partition-modes",level:3},{value:"Bucketing Strategy",id:"bucketing-strategy",level:2},{value:"Data Distribution Optimization",id:"data-distribution-optimization",level:2},{value:"Colocate Join",id:"colocate-join",level:3},{value:"Partition Pruning",id:"partition-pruning",level:3},{value:"Bucketing Parallelism",id:"bucketing-parallelism",level:3},{value:"Data Distribution Goals",id:"data-distribution-goals",level:2}];function c(e){let t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In Doris, the core of ",(0,a.jsx)(t.strong,{children:"data distribution"})," is to efficiently map the rows of data written to the table onto various ",(0,a.jsx)(t.strong,{children:"data shards (Tablets)"})," in the underlying storage through reasonable partitioning and bucketing strategies. Through data distribution strategies, Doris can fully utilize the storage and computing capabilities of multiple nodes, thereby supporting efficient storage and querying of large-scale data."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"overview-of-data-distribution",children:"Overview of Data Distribution"}),"\n",(0,a.jsx)(t.h3,{id:"data-writing",children:"Data Writing"}),"\n",(0,a.jsx)(t.p,{children:"When writing data, Doris first allocates the rows of data to the corresponding partitions based on the table's partitioning strategy. Then, according to the bucketing strategy, the rows of data are further mapped to specific shards within the partition, determining the storage location of the data rows."}),"\n",(0,a.jsx)(t.h3,{id:"query-execution",children:"Query Execution"}),"\n",(0,a.jsxs)(t.p,{children:["During query execution, Doris's optimizer will trim data based on partitioning and bucketing strategies to maximize the reduction of the scanning range. In cases involving JOIN or aggregation queries, data transfer across nodes (Shuffle) may occur. Reasonable partitioning and bucketing design can reduce Shuffle and fully utilize ",(0,a.jsx)(t.strong,{children:"Colocate Join"})," to optimize query performance."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"node-and-storage-architecture",children:"Node and Storage Architecture"}),"\n",(0,a.jsx)(t.h3,{id:"node-types",children:"Node Types"}),"\n",(0,a.jsx)(t.p,{children:"A Doris cluster consists of the following two types of nodes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"FE Node (Frontend)"}),": Manages cluster metadata (such as tables and shards) and is responsible for SQL parsing and execution planning."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"BE Node (Backend)"}),": Stores data and is responsible for executing computational tasks. The results from BE are aggregated and returned to FE, which then returns them to the user."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"data-shard-tablet",children:"Data Shard (Tablet)"}),"\n",(0,a.jsx)(t.p,{children:"The data stored in the BE node is divided into shards, with each shard being the smallest unit of data management in Doris and the basic unit for data movement and replication."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"partitioning-strategy",children:"Partitioning Strategy"}),"\n",(0,a.jsxs)(t.p,{children:["Partitioning is the first layer of logical division for data organization, used to divide the data in the table into smaller subsets. Doris provides the following two ",(0,a.jsx)(t.strong,{children:"partition types"})," and three ",(0,a.jsx)(t.strong,{children:"partition modes"}),":"]}),"\n",(0,a.jsx)(t.h3,{id:"partition-types",children:"Partition Types"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Range Partitioning"}),": Allocates data rows to corresponding partitions based on the value range of the partition column."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"List Partitioning"}),": Allocates data rows to corresponding partitions based on specific values of the partition column."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"partition-modes",children:"Partition Modes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Manual Partitioning"}),": Users manually create partitions (e.g., specified during table creation or added via ",(0,a.jsx)(t.code,{children:"ALTER"})," statements)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Dynamic Partitioning"}),": The system automatically creates partitions based on time scheduling rules, but does not create partitions on demand when writing data."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Automatic Partitioning"}),": The system automatically creates corresponding partitions as needed during data writing, but care should be taken to avoid generating too many partitions with dirty data."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"bucketing-strategy",children:"Bucketing Strategy"}),"\n",(0,a.jsx)(t.p,{children:"Bucketing is the second layer of logical division for data organization, used to further divide data rows into smaller units within a partition. Doris supports the following two bucketing methods:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Hash Bucketing"}),": Distributes data rows evenly across shards by calculating the ",(0,a.jsx)(t.code,{children:"crc32"})," hash value of the bucketing column and taking the modulus of the number of buckets."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Random Bucketing"}),": Randomly allocates data rows to shards. When using Random bucketing, the ",(0,a.jsx)(t.code,{children:"load_to_single_tablet"})," option can be used to optimize the quick writing of small-scale data."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"data-distribution-optimization",children:"Data Distribution Optimization"}),"\n",(0,a.jsx)(t.h3,{id:"colocate-join",children:"Colocate Join"}),"\n",(0,a.jsxs)(t.p,{children:["For large tables that frequently require JOIN or aggregation queries, the ",(0,a.jsx)(t.strong,{children:"Colocate"})," strategy can be enabled to place data with the same bucketing column values on the same physical node, reducing data transfer across nodes and significantly improving query performance."]}),"\n",(0,a.jsx)(t.h3,{id:"partition-pruning",children:"Partition Pruning"}),"\n",(0,a.jsx)(t.p,{children:"During queries, Doris can prune irrelevant partitions through filtering conditions, thereby reducing the data scanning range and lowering I/O costs."}),"\n",(0,a.jsx)(t.h3,{id:"bucketing-parallelism",children:"Bucketing Parallelism"}),"\n",(0,a.jsx)(t.p,{children:"During queries, a reasonable number of buckets can fully utilize the computational and I/O resources of the machines."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"data-distribution-goals",children:"Data Distribution Goals"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Uniform Data Distribution"}),"\nEnsure that data is evenly distributed across all BE nodes to avoid data skew that could overload certain nodes, thereby improving overall system performance."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Optimize Query Performance"}),"\nReasonable partition pruning can significantly reduce the amount of data scanned, a reasonable number of buckets can enhance computational parallelism, and effective use of COLOCATE can lower Shuffle costs, improving JOIN and aggregation query efficiency."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Flexible Data Management"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Time-based partitioning to store cold data (HDD) and hot data (SSD)."}),"\n",(0,a.jsx)(t.li,{children:"Regularly delete historical partitions to free up storage space."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Control Metadata Scale"}),"\nThe metadata for each shard is stored in both FE and BE, so it is necessary to reasonably control the number of shards. The empirical recommendation is:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For every 10 million shards, FE requires at least 100GB of memory."}),"\n",(0,a.jsx)(t.li,{children:"The number of shards handled by a single BE should be less than 20,000."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Optimize Write Throughput"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The number of buckets should be reasonably controlled (recommended < 128) to avoid degrading write performance."}),"\n",(0,a.jsx)(t.li,{children:"The number of partitions written at one time should be appropriate (recommended to write a small number of partitions at a time)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"By carefully designing and managing partitioning and bucketing strategies, Doris can efficiently support the storage and query processing of large-scale data, meeting various complex business needs."})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(667294);let a={},r=n.createContext(a);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);