"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["997038"],{829391:function(e,r,t){t.r(r),t.d(r,{default:()=>d,frontMatter:()=>n,metadata:()=>o,assets:()=>m,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/overview","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/trouble-shooting/memory-management/overview.md","sourceDirName":"admin-manual/trouble-shooting/memory-management","slug":"/admin-manual/trouble-shooting/memory-management/overview","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview","language":"en"},"sidebar":"docs","previous":{"title":"partition_statistics","permalink":"/docs/3.0/admin-manual/system-tables/internal_schema/partition_statistics"},"next":{"title":"Memory Issue FAQ","permalink":"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-issue-faq"}}'),a=t("785893"),s=t("250065");let n={title:"Overview",language:"en"},i=void 0,m={},l=[{value:"Doris BE memory structure",id:"doris-be-memory-structure",level:2},{value:"Memory View",id:"memory-view",level:2},{value:"Real-time Memory Statistics",id:"real-time-memory-statistics",level:3},{value:"Historical memory statistics",id:"historical-memory-statistics",level:3},{value:"Memory Analysis",id:"memory-analysis",level:2},{value:"Memory problem FAQ",id:"memory-problem-faq",level:2},{value:"Memory control strategy",id:"memory-control-strategy",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Memory management is one of the most important components of Doris. During the operation of Doris, both load and query rely on a large number of memory operations. The quality of memory management directly affects the stability and performance of Doris."}),"\n",(0,a.jsx)(r.p,{children:"As an OLAP database based on the MPP architecture, Apache Doris will stream and calculate between operators after loading data from disk to memory, and store the intermediate results of calculation in memory. This method reduces frequent disk I/O operations and makes full use of the parallel computing capabilities of multiple machines and multiple cores, which can show huge advantages in performance."}),"\n",(0,a.jsx)(r.p,{children:"When facing complex calculations and large-scale operations with huge memory resource consumption, effective memory allocation, statistics, and control play a very critical role in the stability of the system - faster memory allocation speed will effectively improve query performance, and memory allocation, tracking and restriction can ensure that there is no memory hotspot, timely and accurately respond to insufficient memory and avoid OOM and query failure as much as possible. This series of mechanisms will significantly improve system stability; at the same time, more accurate memory statistics are also the basis for large queries to fall to disk."}),"\n",(0,a.jsx)(r.h2,{id:"doris-be-memory-structure",children:"Doris BE memory structure"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Memory Structure",src:t(337779).Z+"",width:"1686",height:"1420"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"Server physical memory: The physical memory used by all processes on the server, MemTotal seen by `cat /proc/meminfo` or `free -h`.\n    |\n    |---\x3e Linux Kernel Memory And Other Process Memory: Memory used by the Linux kernel and other processes.\n    |\n    |---\x3e Doris BE Process Memory: The memory used by the Doris BE process. The upper limit is the server physical memory minus the memory used by the Linux kernel and other processes, or the memory size configured by the Cgroup.\n            |\n            |---\x3e Untracked: Memory that is not tracked and managed, including RPC, JVM, some metadata, etc. JVM is used when accessing external tables or using Java UDF.\n            |\n            |---\x3e tracked: Memory that is tracked and managed, allowing real-time viewing, automatic memory recycling, and size control through parameters.\n                    |\n                    |---\x3e jemalloc: The cache and metadata managed by jemalloc support parameter control and are automatically recycled when memory is insufficient.\n                    |\n                    |---\x3e global: Doris globally shared memory, mainly including cache and metadata.\n                    |       |\n                    |       |---\x3e doris cache: Doris manages its own cache, which supports controlling capacity and elimination time through parameters separately, and automatically reclaims when memory is insufficient.\n                    |       |\n                    |       |---\x3e doris metadata: metadata of data stored on BE, including a series of memory data structures such as data schema and their caches.\n                    |\n                    |---\x3e Task: The memory used by the tasks executed on Doris, which is expected to be released after the task is completed, including query, load, compaction, etc.\n                    |       |\n                    |       |---\x3e query: Memory used during the query. A query is split into multiple fragments and executed separately, connected by data shuffle.\n                    |       |       |\n                    |       |       |---\x3e Fragment: A fragment is split into multiple operators and executed in the form of a pipeline.\n                    |       |       |       |\n                    |       |       |       |---\x3e operator: includes memory data structures such as data block, hash table, arena, exchange sink buffer, etc.\n                    |       |\n                    |       |---\x3e load: Memory used during data load. Data load includes two stages: fragment reading and channel writing data.\n                    |       |       |\n                    |       |       |---\x3e fragment: Same as query fragment execution, stream load usually only has scan operator.\n                    |       |       |\n                    |       |       |---\x3e channel: The tablet channel writes data to a temporary data structure called memtable, and then the delta writer compresses the data and writes it to the file.\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"memory-view",children:"Memory View"}),"\n",(0,a.jsx)(r.p,{children:"Doris BE uses Memory Tracker to record process memory usage, supports Web page viewing, and prints to BE logs when memory-related errors are reported, for memory analysis and troubleshooting."}),"\n",(0,a.jsx)(r.h3,{id:"real-time-memory-statistics",children:"Real-time Memory Statistics"}),"\n",(0,a.jsxs)(r.p,{children:["Real-time memory statistics can be viewed through Doris BE's Web page ",(0,a.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker"}),", which displays the current memory size and peak memory size tracked by Memory Tracker of ",(0,a.jsx)(r.code,{children:"type=overview"}),", including Query/Load/Compaction/Global, etc. ",(0,a.jsx)(r.code,{children:"be_web_server_port"})," defaults to 8040."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://github.com/apache/doris/assets/13197424/f989f4d2-4cc5-4a8e-880e-93ae6073d17d",alt:"image"})}),"\n",(0,a.jsxs)(r.p,{children:["Memory Tracker is divided into different types. Among the Memory Tracker of type=overview, except for ",(0,a.jsx)(r.code,{children:"process resident memory"}),", ",(0,a.jsx)(r.code,{children:"process virtual memory"}),", and ",(0,a.jsx)(r.code,{children:"sum of all trackers"}),", the details of other Memory Trackers of type=overview can be viewed through ",(0,a.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=Lable"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Memory Tracker has the following properties:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Label: the name of the Memory Tracker"}),"\n",(0,a.jsx)(r.li,{children:"Current Consumption(Bytes): the current memory value, in B."}),"\n",(0,a.jsx)(r.li,{children:"Current Consumption(Normalize): the .G.M.K formatted output of the current memory value."}),"\n",(0,a.jsx)(r.li,{children:"Peak Consumption (Bytes): The peak memory value after the BE process is started, in units of B, and reset after the BE is restarted."}),"\n",(0,a.jsx)(r.li,{children:"Peak Consumption (Normalize): The .G.M.K formatted output of the peak memory value after the BE process is started, and reset after the BE is restarted."}),"\n",(0,a.jsx)(r.li,{children:"Parent Label: Used to indicate the parent-child relationship between two memory trackers. The memory recorded by the Child Tracker is a subset of the Parent Tracker. The memory recorded by different trackers with the same Parent may have an intersection."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["For more information about Memory Tracker, refer to ",(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"historical-memory-statistics",children:"Historical memory statistics"}),"\n",(0,a.jsxs)(r.p,{children:["Historical memory statistics can be viewed through Doris BE's Bvar page ",(0,a.jsx)(r.code,{children:"http://{be_host}:{brpc_port}/vars/*memory_*"}),". Use the real-time memory statistics page ",(0,a.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker"})," to search for the Bvar page under the Memory Tracker Label to get the memory size change trend tracked by the corresponding Memory Tracker. ",(0,a.jsx)(r.code,{children:"brpc_port"})," defaults to 8060."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Bvar Memory",src:t(68299).Z+"",width:"1592",height:"1792"})}),"\n",(0,a.jsxs)(r.p,{children:["When the error process memory exceeds the limit or the available memory is insufficient, you can find the ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," in the ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"})," log, which contains all the Memory Trackers of ",(0,a.jsx)(r.code,{children:"Type=overview"})," and ",(0,a.jsx)(r.code,{children:"Type=global"}),", to help users analyze the memory status at that time. For details, please refer to ",(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"memory-analysis",children:"Memory Analysis"}),"\n",(0,a.jsxs)(r.p,{children:["Correspond the Memory Tracker of ",(0,a.jsx)(r.code,{children:"type=overview"})," to each part of the memory under ",(0,a.jsx)(r.code,{children:"tracked"})," in the above memory structure:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"Doris BE Process Memory\n    |\n    |---\x3e tracked: corresponds to `MemTrackerLimiter Label=sum of all trackers, Type=overview`, which is all the memory counted by the Memory Tracker, that is, the sum of the Current Consumption of other Memory Trackers with `type=overview` except `Label=process resident memory` and `Label=process virtual memory`.\n            |\n            |---\x3e jemalloc\n            |       |\n            |       |---\x3e jemalloc cache: corresponds to `MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview`. The Jemalloc cache includes two parts: Dirty Page and Thread Cache.\n            |       |\n            |       |---\x3e jemalloc metadata: Corresponding to `MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview`, Metadata of Jemalloc.\n            |\n            |---\x3e global: corresponds to `MemTrackerLimiter Label=global, Type=overview`, including global Memory Trackers with the same life cycle and process such as Cache, metadata, and decompression. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=global` displays all Memory Trackers of `type=global`.\n            |\n            |---\x3e task\n            |       |\n            |       |---\x3e query: corresponds to `MemTrackerLimiter Label=query, Type=overview`, which is the sum of Current Consumption of all Query Memory Trackers. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=query` displays all Memory Trackers of `type=query`.\n            |       |\n            |       |---\x3e load: corresponds to `MemTrackerLimiter Label=load, Type=overview`, the sum of Current Consumption of all Load Memory Trackers. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=load` displays all Memory Trackers of `type=load`.\n            |       |\n            |       |---\x3e reserved: corresponds to `MemTrackerLimiter Label=reserved_memory, Type=overview`. The reserved memory is used when query the Hash Table and other memory-intensive behaviors. Before query the Hash Table, the memory of the Hash Table to be constructed will be reserved from the Memory Tracker to ensure that subsequent memory requests can be met.\n            |       |\n            |       |---\x3e compaction: corresponds to `MemTrackerLimiter Label=compaction, Type=overview`, the sum of Current Consumption of all Compaction Memory Trackers. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=compaction` displays all Memory Trackers of `type=compaction`.\n            |       |\n            |       |---\x3e schema_change: corresponds to `MemTrackerLimiter Label=schema_change, Type=overview`, the sum of Current Consumption of all Schema Change Memory Trackers. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=schema_change` displays all Memory Trackers of `type=schema_change`.\n\n            |       |\n            |       |---\x3e other: corresponds to `MemTrackerLimiter Label=other, Type=overview`, the total memory of other tasks except the above, such as EngineAlterTabletTask, EngineCloneTask, CloudEngineCalcDeleteBitmapTask, SnapshotManager, etc. The web page `http://{be_host}:{be_web_server_port}/mem_tracker?type=other` displays all Memory Trackers of `type=other`.\n    |\n    |---\x3e Doris BE process physical memory, corresponding to `MemTrackerLimiter Label=process resident memory, Type=overview`, Current Consumption is taken from VmRSS in `/proc/self/status`, Peak Consumption is taken from VmHWM in `/proc/self/status`.\n    |\n    |---\x3e Doris BE process virtual memory, corresponding to `MemTrackerLimiter Label=process virtual memory, Type=overview`, Current Consumption is taken from VmSize in `/proc/self/status`, and Peak Consumption is taken from VmPeak in `/proc/self/status`.\n"})}),"\n",(0,a.jsx)(r.p,{children:"Analysis methods for each part of the memory in the above memory structure:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc memory analysis"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis",children:"Global memory analysis"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis",children:"Query memory analysis"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis",children:"Load memory analysis"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"memory-problem-faq",children:"Memory problem FAQ"}),"\n",(0,a.jsxs)(r.p,{children:["Refer to ",(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-issue-faq",children:"Memory problem FAQ"})," to analyze common memory problems."]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"memory-control-strategy",children:"Memory control strategy"}),"\n",(0,a.jsxs)(r.p,{children:["Refer to ",(0,a.jsx)(r.a,{href:"/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy",children:"Memory Control Strategy"})," for an introduction to memory allocation, monitoring, and recycling, which ensure the efficient and controllable memory of the Doris BE process."]})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},68299:function(e,r,t){t.d(r,{Z:function(){return o}});let o=t.p+"assets/images/bvar-memory-9c598521dff20751a24f3a3ae458096a.png"},337779:function(e,r,t){t.d(r,{Z:function(){return o}});let o=t.p+"assets/images/memory-structure-c33470cfd0abfcf0b7ced0de7e483537.png"},250065:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return n}});var o=t(667294);let a={},s=o.createContext(a);function n(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);