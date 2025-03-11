"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["533669"],{543578:function(e,r,o){o.r(r),o.d(r,{default:()=>h,frontMatter:()=>n,metadata:()=>s,assets:()=>l,toc:()=>m,contentTitle:()=>i});var s=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded","title":"Query error Process Memory Not Enough","description":"\x3c!--","source":"@site/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Query error Process Memory Not Enough","language":"en"},"sidebar":"docs","previous":{"title":"Load Memory Analysis","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis"},"next":{"title":"Query error Memory Tracker Limit Exceeded","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded"}}'),a=o("785893"),t=o("250065");let n={title:"Query error Process Memory Not Enough",language:"en"},i=void 0,l={},m=[{value:"Error message analysis",id:"error-message-analysis",level:2},{value:"1 Canceled in memory Full GC",id:"1-canceled-in-memory-full-gc",level:3},{value:"2 Canceled in Minor GC of memory",id:"2-canceled-in-minor-gc-of-memory",level:3},{value:"3 Failed to apply for memory from Allocator",id:"3-failed-to-apply-for-memory-from-allocator",level:3},{value:"The memory usage of the Canceled Query is too large",id:"the-memory-usage-of-the-canceled-query-is-too-large",level:2},{value:"The Canceled Query itself has a small memory, and there are other queries with larger memory",id:"the-canceled-query-itself-has-a-small-memory-and-there-are-other-queries-with-larger-memory",level:2},{value:"Process memory outside query and load tasks is too large",id:"process-memory-outside-query-and-load-tasks-is-too-large",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["When ",(0,a.jsx)(r.code,{children:"MEM_LIMIT_EXCEEDED"})," appears in the error message of the query and contains ",(0,a.jsx)(r.code,{children:"Process memory not enough"}),", it means that the process is canceled due to insufficient available memory."]}),"\n",(0,a.jsx)(r.p,{children:"First, parse the error message to confirm the reason for Cancel, the memory size used by the query itself when Canceled, and the memory status of the process. There are usually three reasons for the Cancel of the query:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"The memory of the Canceled Query itself is too large."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"The memory of the Canceled Query itself is small, and there are other queries with larger memory."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"The memory of the globally shared Cahce, metadata, etc. is too large, or the memory of other tasks other than query and load tasks is too large"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"error-message-analysis",children:"Error message analysis"}),"\n",(0,a.jsx)(r.p,{children:"There are two situations when the available memory of the process is insufficient. One is that the current memory of the process exceeds the configured memory limit, and the other is that the remaining available memory of the system is lower than the watermark. There are three paths to cancel tasks such as queries:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["If the error message contains ",(0,a.jsx)(r.code,{children:"cancel top memory used"}),", it means that the task is canceled in the memory Full GC."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["If the error message contains ",(0,a.jsx)(r.code,{children:"cancel top memory overcommit"}),", it means that the task was canceled in the memory Minor GC."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["If the error message contains ",(0,a.jsx)(r.code,{children:"Allocator sys memory check failed"}),", it means that the task was canceled after failing to apply for memory from ",(0,a.jsx)(r.code,{children:"Doris Allocator"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"After analyzing the error message below,"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"If the memory used by the query and load itself accounts for a large proportion of the process memory, refer to [Query own memory is too large] to analyze the memory usage of the query and load, and try to adjust parameters or optimize SQL to reduce the memory required for execution."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"If the task itself uses very little memory, refer to [Process memory other than query and load is too large] to try to reduce the memory usage of other locations in the process, so as to reserve more memory for query and other task execution."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["For more information about memory limits, watermark calculation methods, and memory GC, see ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-feature/memory-control-strategy",children:"Memory Control Strategy"})]}),"\n",(0,a.jsx)(r.h3,{id:"1-canceled-in-memory-full-gc",children:"1 Canceled in memory Full GC"}),"\n",(0,a.jsx)(r.p,{children:"If the BE process memory exceeds the process memory upper limit (MemLimit) or the system's remaining available memory is lower than the memory low watermark (LowWaterMark), Full GC is triggered. At this time, the task with the largest memory will be canceled first."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]Process memory not enough, cancel top memory used query: <Query#Id=e862471398b14e71-9361a1ab8153cb29> consumption 866.97 MB, backend 10.16.10.8, process memory used 3.12 GB exceed limit 3.01 GB or sys available memory 191.25 GB less than low water mark 3.20 GB. Execute again after enough memory, details see be.INFO.\n"})}),"\n",(0,a.jsx)(r.p,{children:"Error message analysis:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"(10.16.10.8)"}),": BE node with insufficient memory during query."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"query: <Query#Id=e862471398b14e71-9361a1ab8153cb29> consumption 866.97 MB"}),": The currently canceled queryID, the query itself uses 866.97 MB of memory."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"process memory used 3.12 GB exceed limit 3.01 GB or sys available memory 191.25 GB less than low water mark 3.20 GB"})," The reason for the process memory exceeding the limit is that the physical memory used by the BE process, 3.12 GB, exceeds the MemLimit of 3.01 GB. The current operating system has 191.25 GB of memory available for BE to use, which is still higher than the LowWaterMark of 3.20 GB."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"2-canceled-in-minor-gc-of-memory",children:"2 Canceled in Minor GC of memory"}),"\n",(0,a.jsx)(r.p,{children:"If the Doris BE process memory exceeds the process memory soft limit (SoftMemLimit) or the system's remaining available memory is lower than the memory warning watermark (WarningWaterMark), Minor GC is triggered. At this time, the query with the largest memory limit ratio will be canceled first."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]Process memory not enough, cancel top memory overcommit query: <Query#Id=e862471398b14e71-9361a1ab8153cb29> consumption 866.97 MB, backend 10.16.10.8, process memory used 2.12 GB exceed soft limit 2.71 GB or sys available memory 3.25 GB less than warning water mark 6.40 GB. Execute again after enough memory, details see be.INFO.\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Error message analysis: ",(0,a.jsx)(r.code,{children:"process memory used 3.12 GB exceed soft limit 6.02 GB or sys available memory 3.25 GB less than warning water mark 6.40 GB"})," The reason for the process memory exceeding the limit is that the remaining memory available to BE in the current operating system is 3.25 GB, which is lower than the WarningWaterMark of 6.40 GB, and the physical memory used by the BE process is 2.12 GB, which does not exceed the SoftMemLimit of 2.71 GB."]}),"\n",(0,a.jsx)(r.h3,{id:"3-failed-to-apply-for-memory-from-allocator",children:"3 Failed to apply for memory from Allocator"}),"\n",(0,a.jsxs)(r.p,{children:["Doris BE's large memory requests will be allocated through ",(0,a.jsx)(r.code,{children:"Doris Allocator"}),", and the memory size will be checked during allocation. If the process has insufficient available memory, an exception will be thrown and the current query will be attempted to be canceled."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]PreCatch error code:11, [E11] Allocator sys memory check failed: Cannot alloc:4294967296, consuming tracker:<Query#Id=457efb1fdae74d3 b-b4fffdcfd4baaf32>, peak used 405956032, current used 386704704, exec node:<>, process memory used 2.23 GB exceed limit 3.01 GB or sys available memory 181.67 GB less than low water mark 3.20 GB.\n"})}),"\n",(0,a.jsx)(r.p,{children:"Error message analysis:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"consuming tracker:<Query#Id=457efb1fdae74d3b-b4fffdcfd4baaf32>, peak used 405956032, current used 386704704, exec node:VAGGREGATION_NODE (id=7)>"}),": The queryID currently being canceled, the query currently uses 386704704 Bytes of memory, the query memory peak is 405956032 Bytes, and the operator being executed is ",(0,a.jsx)(r.code,{children:"VAGGREGATION_NODE (id=7)>"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Cannot alloc:4294967296"}),": The current application for 4 GB of memory failed because the current process memory of 2.23 GB plus 4 GB will exceed the MemLimit of 3.01 GB."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"the-memory-usage-of-the-canceled-query-is-too-large",children:"The memory usage of the Canceled Query is too large"}),"\n",(0,a.jsxs)(r.p,{children:["Refer to ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis",children:"Query Memory Analysis"})," or ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis",children:"Load Memory Analysis"})," to analyze the memory usage of queries and loads, and try to adjust parameters or optimize SQL to reduce the memory required for execution."]}),"\n",(0,a.jsxs)(r.p,{children:["It should be noted that if the task fails to apply for memory from the Allocator and is Canceled, ",(0,a.jsx)(r.code,{children:"Cannot alloc"})," or ",(0,a.jsx)(r.code,{children:"try alloc"})," will show that the memory currently being applied for by the Query is too large. At this time, you need to pay attention to whether the memory application here is reasonable. Search ",(0,a.jsx)(r.code,{children:"Allocator sys memory check failed"})," in ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"})," to find the stack of memory application."]}),"\n",(0,a.jsx)(r.h2,{id:"the-canceled-query-itself-has-a-small-memory-and-there-are-other-queries-with-larger-memory",children:"The Canceled Query itself has a small memory, and there are other queries with larger memory"}),"\n",(0,a.jsx)(r.p,{children:"Usually, it is because the query with larger memory is stuck in the Cancel stage and cannot release the memory in time. Full GC will first cancel queries in order of memory usage, and then cancel loads in order of memory usage. If a query is canceled in memory Full GC, but there are other queries in the BE process that use more memory than the currently canceled query, you need to pay attention to whether these queries with larger memory usage are stuck during the cancel process."}),"\n",(0,a.jsxs)(r.p,{children:["First, execute ",(0,a.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"})," to find the time when the query is canceled, and then search ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," in the context to find the process memory statistics log. If there is a query that uses more memory in ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"}),". Run ",(0,a.jsx)(r.code,{children:"grep {queryID with larger memory} be/log/be.INFO"})," to check if there is a log with the keyword ",(0,a.jsx)(r.code,{children:"Cancel"}),". The corresponding time point is the time when the query is canceled. If the query is also canceled, and the time point when the query with larger memory is canceled is different from the time point when the current query is canceled, refer to [Query Cancel process stuck] in ",(0,a.jsx)(r.a,{href:"../../../trouble-shooting/memory-management/memory-issue-faq",children:"Memory Issue FAQ"})," to analyze whether the query with larger memory is stuck in the cache process. For the analysis of ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"}),", refer to ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"process-memory-outside-query-and-load-tasks-is-too-large",children:"Process memory outside query and load tasks is too large"}),"\n",(0,a.jsx)(r.p,{children:"Try to locate the memory location and consider reducing memory usage to reserve more memory for query and load execution."}),"\n",(0,a.jsxs)(r.p,{children:["The time when the task was canceled due to insufficient available memory can be found in the process memory statistics log in ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"}),". Run ",(0,a.jsx)(r.code,{children:"grep queryID be/log/be.INFO"})," to find the time when the query was canceled, and then search ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," in the context to find the process memory statistics log. Then refer to the [Process Memory Statistics Log Analysis] section in ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"})," for further analysis. Before analysis, refer to the [Memory Tracker Statistics Missing] section in ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," to analyze whether the Memory Tracker has statistics missing."]}),"\n",(0,a.jsxs)(r.p,{children:["If the Memory Tracker has statistics missing, refer to the [Memory Tracker Statistics Missing] section for further analysis. Otherwise, Memory Tracker counts most of the memory and there is no missing statistics. Refer to ",(0,a.jsx)(r.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/overview",children:"Overview"})," to analyze the reasons why different parts of the Doris BE process occupy too much memory and how to reduce its memory usage."]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return n}});var s=o(667294);let a={},t=s.createContext(a);function n(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);