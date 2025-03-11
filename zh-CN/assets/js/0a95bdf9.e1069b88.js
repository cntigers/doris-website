"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["838127"],{403080:function(e,r,a){a.r(r),a.d(r,{default:()=>t,frontMatter:()=>l,metadata:()=>c,assets:()=>s,toc:()=>i,contentTitle:()=>m});var c=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded","title":"\u67E5\u8BE2\u62A5\u9519 Memory Tracker Limit Exceeded","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded","permalink":"/zh-CN/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u67E5\u8BE2\u62A5\u9519 Memory Tracker Limit Exceeded","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u67E5\u8BE2\u62A5\u9519 Process Memory Not Enough","permalink":"/zh-CN/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"},"next":{"title":"OOM Killer Crash \u5206\u6790","permalink":"/zh-CN/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/oom-crash-analysis"}}'),n=a("785893"),d=a("250065");let l={title:"\u67E5\u8BE2\u62A5\u9519 Memory Tracker Limit Exceeded",language:"zh-CN"},m=void 0,s={},i=[{value:"\u9519\u8BEF\u4FE1\u606F\u89E3\u6790",id:"\u9519\u8BEF\u4FE1\u606F\u89E3\u6790",level:2},{value:"\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\u548C\u5185\u5B58\u8D85\u53D1",id:"\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\u548C\u5185\u5B58\u8D85\u53D1",level:2},{value:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790",id:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u5F53\u67E5\u8BE2\u6216\u5BFC\u5165\u7684\u62A5\u9519\u4FE1\u606F\u4E2D\u51FA\u73B0 ",(0,n.jsx)(r.code,{children:"MEM_LIMIT_EXCEEDED"})," \u4E14\u5305\u542B ",(0,n.jsx)(r.code,{children:"memory tracker limit exceeded"})," \u65F6\uFF0C\u8BF4\u660E\u4EFB\u52A1\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u9519\u8BEF\u4FE1\u606F\u89E3\u6790",children:"\u9519\u8BEF\u4FE1\u606F\u89E3\u6790"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]PreCatch error code:11, [E11] Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED]failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label:Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB. backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>, can `set exec_mem_limit=8G` to change limit, details see be.INFO.\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u9519\u8BEF\u4FE1\u606F\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label:Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB"}),"\uFF1A\u5F53\u524D\u6B63\u5728\u6267\u884C Query ",(0,n.jsx)(r.code,{children:"f78208b15e064527-a84c5c0b04c04fcf"})," \u5728\u5C1D\u8BD5\u7533\u8BF7 1.03 MB \u5185\u5B58\u7684\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u67E5\u8BE2\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u7684\u5185\u5B58\u4E0A\u9650\uFF0C\u67E5\u8BE2\u5185\u5B58\u4E0A\u9650\u662F 100 MB\uFF08Session Variables \u4E2D\u7684 ",(0,n.jsx)(r.code,{children:"exec_mem_limit"}),"\uFF09\uFF0C\u5F53\u524D\u5DF2\u7ECF\u4F7F\u7528 99.25 MB\uFF0C\u5185\u5B58\u5CF0\u503C\u662F 99.29 MB\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>, can set exec_mem_limit=8G to change limit, details see be.INFO."}),"\uFF1A\u672C\u6B21\u5185\u5B58\u7533\u8BF7\u7684\u4F4D\u7F6E\u662F",(0,n.jsx)(r.code,{children:"VHASH_JOIN_NODE (id=4)"}),"\uFF0C\u5E76\u63D0\u793A\u53EF\u901A\u8FC7 ",(0,n.jsx)(r.code,{children:"set exec_mem_limit"})," \u6765\u8C03\u9AD8\u5355\u6B21\u67E5\u8BE2\u7684\u5185\u5B58\u4E0A\u9650\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\u548C\u5185\u5B58\u8D85\u53D1",children:"\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\u548C\u5185\u5B58\u8D85\u53D1"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"show variables;"})," \u53EF\u4EE5\u67E5\u770B Doris Session Veriable\uFF0C\u5176\u4E2D\u7684 ",(0,n.jsx)(r.code,{children:"exec_mem_limit"})," \u662F\u5355\u6B21\u67E5\u8BE2\u548C\u5BFC\u5165\u7684\u6267\u884C\u5185\u5B58\u9650\u5236\uFF0C\u4F46\u4ECE Doris 1.2 \u5F00\u59CB\u652F\u6301\u67E5\u8BE2\u5185\u5B58\u8D85\u53D1 (overcommit)\uFF0C\u65E8\u5728\u5141\u8BB8\u67E5\u8BE2\u8BBE\u7F6E\u66F4\u7075\u6D3B\u7684\u5185\u5B58\u9650\u5236\uFF0C\u5185\u5B58\u5145\u8DB3\u65F6\u5373\u4F7F\u67E5\u8BE2\u5185\u5B58\u8D85\u8FC7\u4E0A\u9650\u4E5F\u4E0D\u4F1A\u88AB Cancel\uFF0C\u6240\u4EE5\u901A\u5E38\u7528\u6237\u65E0\u9700\u5173\u6CE8\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u3002\u76F4\u5230\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u67E5\u8BE2\u4F1A\u5728\u5C1D\u8BD5\u5206\u914D\u65B0\u5185\u5B58\u65F6\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6B64\u65F6\u4F1A\u57FA\u4E8E\u4E00\u5B9A\u89C4\u5219\u4F18\u5148 Cancel ",(0,n.jsx)(r.code,{children:"mem_used"})," \u4E0E ",(0,n.jsx)(r.code,{children:"exec_mem_limit"})," \u6BD4\u503C\u5927\u7684 Query\u3002\u5982\u679C\u7B49\u5F85\u8FC7\u7A0B\u4E2D\u5185\u5B58\u91CA\u653E\u7684\u5927\u5C0F\u6EE1\u8DB3\u9700\u6C42\uFF0C\u67E5\u8BE2\u5C06\u7EE7\u7EED\u6267\u884C\uFF0C\u5426\u5219\u5C06\u629B\u51FA\u5F02\u5E38\u5E76\u7EC8\u6B62\u67E5\u8BE2\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679C\u5E0C\u671B\u5173\u95ED\u67E5\u8BE2\u5185\u5B58\u8D85\u53D1\uFF0C\u53C2\u8003 ",(0,n.jsx)(r.a,{href:"../../../config/be-config",children:"BE \u914D\u7F6E\u9879"}),"\uFF0C\u5728 ",(0,n.jsx)(r.code,{children:"conf/be.conf"})," \u4E2D\u589E\u52A0 ",(0,n.jsx)(r.code,{children:"enable_query_memory_overcommit=false"}),"\uFF0C\u6B64\u65F6\u5355\u6B21\u67E5\u8BE2\u548C\u5BFC\u5165\u7684\u5185\u5B58\u8D85\u8FC7 ",(0,n.jsx)(r.code,{children:"exec_mem_limit"})," \u5373\u4F1A\u88AB Cancel\u3002\u5982\u679C\u4F60\u5E0C\u671B\u907F\u514D\u5927\u67E5\u8BE2\u5BF9\u96C6\u7FA4\u7A33\u5B9A\u6027\u9020\u6210\u7684\u8D1F\u9762\u5F71\u54CD\uFF0C\u6216\u8005\u5E0C\u671B\u51C6\u786E\u63A7\u5236\u96C6\u7FA4\u4E0A\u7684\u4EFB\u52A1\u6267\u884C\u6765\u4FDD\u8BC1\u8DB3\u591F\u7684\u7A33\u5B9A\u6027\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8003\u8651\u5173\u95ED\u67E5\u8BE2\u5185\u5B58\u8D85\u53D1\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790",children:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679C\u9700\u8981\u5206\u6790\u67E5\u8BE2\u7684\u5185\u5B58\u4F7F\u7528\uFF0C\u53C2\u8003 ",(0,n.jsx)(r.a,{href:"/zh-CN/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis",children:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790"}),"\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"set enable_profile=true"})," \u5F00\u542F Query Profile \u540E\uFF0C\u5728\u4EFB\u52A1\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u7684\u5185\u5B58\u4E0A\u9650\u65F6\uFF0C\u5728 ",(0,n.jsx)(r.code,{children:"be/log/be.INFO"})," \u5C06\u6253\u5370\u67E5\u8BE2\u6B63\u5728\u7533\u8BF7\u5185\u5B58\u7684\u8C03\u7528\u6808\uFF0C\u5E76\u53EF\u4EE5\u770B\u5230\u67E5\u8BE2\u6BCF\u4E2A\u7B97\u5B50\u5F53\u524D\u4F7F\u7528\u7684\u5185\u5B58\u548C\u5CF0\u503C\uFF0C\u53C2\u8003 ",(0,n.jsx)(r.a,{href:"/zh-CN/docs/dev/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis",children:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790"})," \u5206\u6790 ",(0,n.jsx)(r.code,{children:"Process Memory Summary"})," \u548C ",(0,n.jsx)(r.code,{children:"Memory Tracker Summary"}),"\uFF0C\u5E2E\u52A9\u786E\u8BA4\u5F53\u524D\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u662F\u5426\u7B26\u5408\u9884\u671F\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED]failed alloc size 32.00 MB, memory tracker limit exceeded, tracker label:Query#I\nd=41363cb6ba734ad5-bc8720bdf9b3090d, type:query, limit 100.00 MB, peak used 75.32 MB, current used 72.62 MB. backend 10.16.10.8, process memory used 2.33 GB. exec node:<>, can `set exec_mem_limit=8G`\n to change limit, details see be.INFO.\nProcess Memory Summary:\n    os physical memory 375.81 GB. process memory used 2.33 GB(= 2.60 GB[vm/rss] - 280.53 MB[tc/jemalloc_cache] + 0[reserved] + 0B[waiting_refresh]), limit 338.23 GB, soft limit 304.41 GB. sys availab\nle memory 337.33 GB(= 337.33 GB[proc/available] - 0[reserved] - 0B[waiting_refresh]), low water mark 6.40 GB, warning water mark 12.80 GB.\nMemory Tracker Summary:    MemTrackerLimiter Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Type=query, Limit=100.00 MB(104857600 B), Used=72.62 MB(76146688 B), Peak=75.32 MB(78981248 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=122.00 B(122 B), Peak=122.00 B(122 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=21.73 MB(22790276 B), Peak=21.73 MB(22790276 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=24.03 MB(25201284 B), Peak=24.03 MB(25201284 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n"})})]})}function t(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return m},a:function(){return l}});var c=a(667294);let n={},d=c.createContext(n);function l(e){let r=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function m(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),c.createElement(d.Provider,{value:r},e.children)}}}]);