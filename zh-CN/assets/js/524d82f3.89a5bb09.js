"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["797094"],{145558:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"admin-manual/memory-management/be-oom-analysis","title":"BE OOM \u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/memory-management/be-oom-analysis.md","sourceDirName":"admin-manual/memory-management","slug":"/admin-manual/memory-management/be-oom-analysis","permalink":"/zh-CN/docs/2.0/admin-manual/memory-management/be-oom-analysis","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BE OOM \u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5185\u5B58\u8D85\u9650\u9519\u8BEF\u5206\u6790","permalink":"/zh-CN/docs/2.0/admin-manual/memory-management/memory-limit-exceeded-analysis"},"next":{"title":"\u76D1\u63A7\u6307\u6807","permalink":"/zh-CN/docs/2.0/admin-manual/maint-monitor/monitor-metrics/metrics"}}'),l=a("785893"),i=a("250065");let c={title:"BE OOM \u5206\u6790",language:"zh-CN"},s=void 0,d={},o=[{value:"\u89E3\u51B3\u65B9\u6CD5",id:"\u89E3\u51B3\u65B9\u6CD5",level:2},{value:"\u5185\u5B58\u5206\u6790",id:"\u5185\u5B58\u5206\u6790",level:2}];function t(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"\u81EA Doris 1.2 \u7248\u672C\u5F00\u59CB\u652F\u6301 BE OOM \u5206\u6790"})}),"\n",(0,l.jsxs)(n.p,{children:["\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u5728 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/2.0/admin-manual/memory-management/memory-limit-exceeded-analysis",children:"Memory Limit Exceeded Analysis"})," \u4E2D\u6211\u4EEC\u5B9A\u65F6\u68C0\u6D4B\u64CD\u4F5C\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\uFF0C\u5E76\u5728\u5185\u5B58\u4E0D\u8DB3\u65F6\u53CA\u65F6\u54CD\u5E94\uFF0C\u5982\u89E6\u53D1\u5185\u5B58 GC \u91CA\u653E\u7F13\u5B58\u6216 cancel \u5185\u5B58\u8D85\u9650\u7684\u67E5\u8BE2\uFF0C\u4F46\u56E0\u4E3A\u5237\u65B0\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u548C\u5185\u5B58 GC \u90FD\u5177\u6709\u4E00\u5B9A\u7684\u6EDE\u540E\u6027\uFF0C\u540C\u65F6\u6211\u4EEC\u5F88\u96BE\u5B8C\u5168 catch \u6240\u6709\u5927\u5185\u5B58\u7533\u8BF7\uFF0C\u5728\u96C6\u7FA4\u538B\u529B\u8FC7\u5927\u65F6\u4ECD\u6709 OOM \u98CE\u9669\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u89E3\u51B3\u65B9\u6CD5",children:"\u89E3\u51B3\u65B9\u6CD5"}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"../../admin-manual/config/be-config",children:"BE \u914D\u7F6E\u9879"})," \u5728",(0,l.jsx)(n.code,{children:"be.conf"}),"\u4E2D\u8C03\u5C0F",(0,l.jsx)(n.code,{children:"mem_limit"}),"\uFF0C\u8C03\u5927",(0,l.jsx)(n.code,{children:"max_sys_mem_available_low_water_mark_bytes"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5185\u5B58\u5206\u6790",children:"\u5185\u5B58\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u82E5\u5E0C\u671B\u8FDB\u4E00\u6B65\u4E86\u89E3 OOM \u524D BE \u8FDB\u7A0B\u7684\u5185\u5B58\u4F7F\u7528\u4F4D\u7F6E\uFF0C\u51CF\u5C11\u8FDB\u7A0B\u5185\u5B58\u4F7F\u7528\uFF0C\u53EF\u53C2\u8003\u5982\u4E0B\u6B65\u9AA4\u5206\u6790\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"dmesg -T"}),"\u786E\u8BA4 OOM \u7684\u65F6\u95F4\u548C OOM \u65F6\u7684\u8FDB\u7A0B\u5185\u5B58\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67E5\u770B be/log/be.INFO \u7684\u6700\u540E\u662F\u5426\u6709 ",(0,l.jsx)(n.code,{children:"Memory Tracker Summary"})," \u65E5\u5FD7\uFF0C\u5982\u679C\u6709\u8BF4\u660E BE \u5DF2\u7ECF\u68C0\u6D4B\u5230\u5185\u5B58\u8D85\u9650\uFF0C\u5219\u7EE7\u7EED\u6B65\u9AA4 3\uFF0C\u5426\u5219\u7EE7\u7EED\u6B65\u9AA4 8"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Memory Tracker Summary:\n    Type=consistency, Used=0(0 B), Peak=0(0 B)\n    Type=batch_load, Used=0(0 B), Peak=0(0 B)\n    Type=clone, Used=0(0 B), Peak=0(0 B)\n    Type=schema_change, Used=0(0 B), Peak=0(0 B)\n    Type=compaction, Used=0(0 B), Peak=0(0 B)\n    Type=load, Used=0(0 B), Peak=0(0 B)\n    Type=query, Used=206.67 MB(216708729 B), Peak=565.26 MB(592723181 B)\n    Type=global, Used=930.42 MB(975614571 B), Peak=1017.42 MB(1066840223 B)\n    Type=tc/jemalloc_cache, Used=51.97 MB(54494616 B), Peak=-1.00 B(-1 B)\n    Type=process, Used=1.16 GB(1246817916 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=474.20 MB(497233597 B), Peak=649.18 MB(680718208 B)\n    MemTracker Label=BufferAllocator, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=LoadChannelMgr, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=StorageEngine, Parent Label=Orphan, Used=320.56 MB(336132488 B), Peak=322.56 MB(338229824 B)\n    MemTracker Label=SegCompaction, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=SegmentMeta, Parent Label=Orphan, Used=948.64 KB(971404 B), Peak=943.64 KB(966285 B)\n    MemTracker Label=TabletManager, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache, Type=global, Limit=-1.00 B(-1 B), Used=455.22 MB(477329882 B), Peak=454.18 MB(476244180 B)\n    MemTrackerLimiter Label=IndexPageCache, Type=global, Limit=-1.00 B(-1 B), Used=1.00 MB(1051092 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SegmentCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DiskIO, Type=global, Limit=2.47 GB(2655423201 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=ChunkAllocator, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=LastestSuccessChannelCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DeleteBitmap AggCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5F53 OOM \u524D be/log/be.INFO \u7684\u6700\u540E\u5305\u542B\u7CFB\u7EDF\u5185\u5B58\u8D85\u9650\u7684\u65E5\u5FD7\u65F6\uFF0C\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/2.0/admin-manual/memory-management/memory-limit-exceeded-analysis",children:"Memory Limit Exceeded Analysis"})," \u4E2D\u7684\u65E5\u5FD7\u5206\u6790\u65B9\u6CD5\uFF0C\u67E5\u770B\u8FDB\u7A0B\u6BCF\u4E2A\u7C7B\u522B\u7684\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u3002\u82E5\u5F53\u524D\u662F",(0,l.jsx)(n.code,{children:"type=query"}),"\u5185\u5B58\u4F7F\u7528\u8F83\u591A\uFF0C\u82E5\u5DF2\u77E5 OOM \u524D\u7684\u67E5\u8BE2\u7EE7\u7EED\u6B65\u9AA4 4\uFF0C\u5426\u5219\u7EE7\u7EED\u6B65\u9AA4 5\uFF1B\u82E5\u5F53\u524D\u662F",(0,l.jsx)(n.code,{children:"type=load"}),"\u5185\u5B58\u4F7F\u7528\u591A\u7EE7\u7EED\u6B65\u9AA4 6\uFF0C\u82E5\u5F53\u524D\u662F",(0,l.jsx)(n.code,{children:"type=global"}),"\u5185\u5B58\u4F7F\u7528\u591A\u7EE7\u7EED\u6B65\u9AA4 7\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type=query"}),"\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u591A\uFF0C\u4E14\u5DF2\u77E5 OOM \u524D\u7684\u67E5\u8BE2\u65F6\uFF0C\u6BD4\u5982\u6D4B\u8BD5\u96C6\u7FA4\u6216\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u91CD\u542F BE \u8282\u70B9\uFF0C\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/2.0/admin-manual/memory-management/memory-tracker",children:"Memory Tracker"})," \u67E5\u770B\u5B9E\u65F6 memory tracker \u7EDF\u8BA1\uFF0C",(0,l.jsx)(n.code,{children:"set global enable_profile=true"}),"\u540E\u91CD\u8BD5\u67E5\u8BE2\uFF0C\u89C2\u5BDF\u5177\u4F53\u7B97\u5B50\u7684\u5185\u5B58\u4F7F\u7528\u4F4D\u7F6E\uFF0C\u786E\u8BA4\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u662F\u5426\u5408\u7406\uFF0C\u8FDB\u4E00\u6B65\u8003\u8651\u4F18\u5316 SQL \u5185\u5B58\u4F7F\u7528\uFF0C\u6BD4\u5982\u8C03\u6574 join \u987A\u5E8F\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type=query"}),"\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u591A\uFF0C\u4E14\u672A\u77E5 OOM \u524D\u7684\u67E5\u8BE2\u65F6\uFF0C\u6BD4\u5982\u4F4D\u4E8E\u7EBF\u4E0A\u96C6\u7FA4\uFF0C\u5219\u5728",(0,l.jsx)(n.code,{children:"be/log/be.INFO"}),"\u4ECE\u540E\u5411\u524D\u641C",(0,l.jsx)(n.code,{children:"Deregister query/load memory tracker, queryId"})," \u548C ",(0,l.jsx)(n.code,{children:"Register query/load memory tracker, query/load id"}),"\uFF0C\u540C\u4E00\u4E2A query id \u82E5\u540C\u65F6\u6253\u51FA\u4E0A\u8FF0\u4E24\u884C\u65E5\u5FD7\u5219\u8868\u793A\u67E5\u8BE2\u6216\u5BFC\u5165\u6210\u529F\uFF0C\u82E5\u53EA\u6709 Register \u6CA1\u6709 Deregister\uFF0C\u5219\u8FD9\u4E2A\u67E5\u8BE2\u6216\u5BFC\u5165\u5728 OOM \u524D\u4ECD\u5728\u8FD0\u884C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5F97\u5230 OOM \u524D\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u67E5\u8BE2\u548C\u5BFC\u5165\uFF0C\u6309\u7167\u6B65\u9AA4 4 \u7684\u65B9\u6CD5\u5BF9\u53EF\u7591\u5927\u5185\u5B58\u67E5\u8BE2\u5206\u6790\u5176\u5185\u5B58\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type=load"}),"\u5BFC\u5165\u5185\u5B58\u4F7F\u7528\u591A\u65F6\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type=global"}),"\u5185\u5B58\u4F7F\u7528\u591A\u65F6\uFF0C\u7EE7\u7EED\u67E5\u770B",(0,l.jsx)(n.code,{children:"Memory Tracker Summary"}),"\u65E5\u5FD7\u540E\u534A\u90E8\u5206\u5DF2\u7ECF\u6253\u51FA\u5F97",(0,l.jsx)(n.code,{children:"type=global"}),"\u8BE6\u7EC6\u7EDF\u8BA1\u3002\u5F53 DataPageCache\u3001IndexPageCache\u3001SegmentCache\u3001ChunkAllocator\u3001LastestSuccessChannelCache \u7B49\u5185\u5B58\u4F7F\u7528\u591A\u65F6\uFF0C\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/2.0/admin-manual/config/be-config",children:"BE \u914D\u7F6E\u9879"})," \u8003\u8651\u4FEE\u6539 cache \u7684\u5927\u5C0F\uFF1B\u5F53 Orphan \u5185\u5B58\u4F7F\u7528\u8FC7\u591A\u65F6\uFF0C\u5982\u4E0B\u7EE7\u7EED\u5206\u6790\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u82E5",(0,l.jsx)(n.code,{children:"Parent Label=Orphan"}),"\u7684 tracker \u7EDF\u8BA1\u503C\u76F8\u52A0\u53EA\u5360 Orphan \u5185\u5B58\u7684\u5C0F\u90E8\u5206\uFF0C\u5219\u8BF4\u660E\u5F53\u524D\u6709\u5927\u91CF\u5185\u5B58\u6CA1\u6709\u51C6\u786E\u7EDF\u8BA1\uFF0C\u6BD4\u5982 brpc \u8FC7\u7A0B\u7684\u5185\u5B58\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8003\u8651\u501F\u52A9 heap profile ",(0,l.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/community/developer-guide/debug-tool",children:"Memory Tracker"})," \u4E2D\u7684\u65B9\u6CD5\u8FDB\u4E00\u6B65\u5206\u6790\u5185\u5B58\u4F4D\u7F6E\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u82E5",(0,l.jsx)(n.code,{children:"Parent Label=Orphan"}),"\u7684 tracker \u7EDF\u8BA1\u503C\u76F8\u52A0\u5360 Orphan \u5185\u5B58\u7684\u5927\u90E8\u5206\uFF0C\u5F53",(0,l.jsx)(n.code,{children:"Label=TabletManager"}),"\u5185\u5B58\u4F7F\u7528\u591A\u65F6\uFF0C\u8FDB\u4E00\u6B65\u67E5\u770B\u96C6\u7FA4 Tablet \u6570\u91CF\uFF0C\u82E5 Tablet \u6570\u91CF\u8FC7\u591A\u5219\u8003\u8651\u5220\u9664\u8FC7\u65F6\u4E0D\u4F1A\u88AB\u4F7F\u7528\u7684\u8868\u6216\u6570\u636E\uFF1B\u5F53",(0,l.jsx)(n.code,{children:"Label=StorageEngine"}),"\u5185\u5B58\u4F7F\u7528\u8FC7\u591A\u65F6\uFF0C\u8FDB\u4E00\u6B65\u67E5\u770B\u96C6\u7FA4 Segment \u6587\u4EF6\u4E2A\u6570\uFF0C\u82E5 Segment \u6587\u4EF6\u4E2A\u6570\u8FC7\u591A\u5219\u8003\u8651\u624B\u52A8\u89E6\u53D1 compaction\uFF1B"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"8",children:["\n",(0,l.jsxs)(n.li,{children:["\u82E5",(0,l.jsx)(n.code,{children:"be/log/be.INFO"}),"\u6CA1\u6709\u5728 OOM \u524D\u6253\u5370\u51FA",(0,l.jsx)(n.code,{children:"Memory Tracker Summary"}),"\u65E5\u5FD7\uFF0C\u8BF4\u660E BE \u6CA1\u6709\u53CA\u65F6\u68C0\u6D4B\u51FA\u5185\u5B58\u8D85\u9650\uFF0C\u89C2\u5BDF Grafana \u5185\u5B58\u76D1\u63A7\u786E\u8BA4 BE \u5728 OOM \u524D\u7684\u5185\u5B58\u589E\u957F\u8D8B\u52BF\uFF0C\u82E5 OOM \u53EF\u590D\u73B0\uFF0C\u8003\u8651\u5728",(0,l.jsx)(n.code,{children:"be.conf"}),"\u4E2D\u589E\u52A0",(0,l.jsx)(n.code,{children:"memory_debug=true"}),"\uFF0C\u91CD\u542F\u96C6\u7FA4\u540E\u4F1A\u6BCF\u79D2\u6253\u5370\u96C6\u7FA4\u5185\u5B58\u7EDF\u8BA1\uFF0C\u89C2\u5BDF OOM \u524D\u7684\u6700\u540E\u4E00\u6B21",(0,l.jsx)(n.code,{children:"Memory Tracker Summary"}),"\u65E5\u5FD7\uFF0C\u7EE7\u7EED\u6B65\u9AA4 3 \u5206\u6790"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return c}});var r=a(667294);let l={},i=r.createContext(l);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);