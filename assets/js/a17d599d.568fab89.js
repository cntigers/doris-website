"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["938951"],{943653:function(e,a,o){o.r(a),o.d(a,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>m,contentTitle:()=>l});var r=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","title":"Load Memory Analysis","description":"\x3c!--","source":"@site/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Load Memory Analysis","language":"en"},"sidebar":"docs","previous":{"title":"Query Memory Analysis","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis"},"next":{"title":"Query error Process Memory Not Enough","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"}}'),n=o("785893"),t=o("250065");let s={title:"Load Memory Analysis",language:"en"},l=void 0,i={},m=[{value:"Load memory view",id:"load-memory-view",level:2},{value:"Load Memory Analysis",id:"load-memory-analysis",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Doris data load is divided into two stages: fragment reading and channel writing. The execution logic of fragment and query fragment is the same, but Stream Load usually has only Scan Operator. Channel mainly writes data to the temporary data structure Memtable, and then Delta Writer compresses the data and writes it to the file."}),"\n",(0,n.jsx)(a.h2,{id:"load-memory-view",children:"Load memory view"}),"\n",(0,n.jsxs)(a.p,{children:["If you see a large value of ",(0,n.jsx)(a.code,{children:"Label=load, Type=overview"})," Memory Tracker anywhere, it means that the load memory is used a lot."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,n.jsx)(a.p,{children:"The memory load by Doris is divided into two parts. The first part is the memory used by fragment execution, and the second part is the memory used in the construction and flushing process of MemTable."}),"\n",(0,n.jsxs)(a.p,{children:["The Memory Tracker with ",(0,n.jsx)(a.code,{children:"Label=AllMemTableMemory, Parent Label=DetailsTrackerSet"})," found in the BE web page ",(0,n.jsx)(a.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=global"})," is the memory used by all load tasks to construct and flush ",(0,n.jsx)(a.code,{children:"MemTable"})," on this BE node. When the error process memory exceeds the limit or the available memory is insufficient, this Memory Tracker can also be found in the ",(0,n.jsx)(a.code,{children:"Memory Tracker Summary"})," in the ",(0,n.jsx)(a.code,{children:"be.INFO"})," log."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n"})}),"\n",(0,n.jsx)(a.h2,{id:"load-memory-analysis",children:"Load Memory Analysis"}),"\n",(0,n.jsxs)(a.p,{children:["If the value of ``Label=AllMemTableMemory` is small, the main memory used by the load task is the execution fragment. The analysis method is the same as ",(0,n.jsx)(a.a,{href:"/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis",children:"Query Memory Analysis"}),", so it will not be repeated here."]}),"\n",(0,n.jsxs)(a.p,{children:["If the value of ",(0,n.jsx)(a.code,{children:"Label=AllMemTableMemory"})," is large, MemTable may not be flushed in time. You can consider reducing the values \u200B\u200Bof ",(0,n.jsx)(a.code,{children:"load_process_max_memory_limit_percent"})," and ",(0,n.jsx)(a.code,{children:"load_process_soft_mem_limit_percent"})," in ",(0,n.jsx)(a.code,{children:"be.conf"}),". This can make MemTable flush more frequently, so that fewer MemTables are cached in memory, but the number of files written will increase. If too many small files are written, the pressure of compaction will increase. If compaction is not timely, the metadata memory will increase, the query will slow down, and even the load will report an error after the number of files exceeds the limit."]}),"\n",(0,n.jsxs)(a.p,{children:["During the load execution process, check the BE web page ",(0,n.jsx)(a.code,{children:"/mem_tracker?type=load"}),". According to the values \u200B\u200Bof the two groups of memory trackers ",(0,n.jsx)(a.code,{children:"Label=MemTableManualInsert"})," and ",(0,n.jsx)(a.code,{children:"Label=MemTableHookFlush"}),", you can locate ",(0,n.jsx)(a.code,{children:"LoadID"})," and ",(0,n.jsx)(a.code,{children:"TabletID"})," with large ",(0,n.jsx)(a.code,{children:"MemTable"})," memory usage."]})]})}function c(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return l},a:function(){return s}});var r=o(667294);let n={},t=r.createContext(n);function s(e){let a=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);