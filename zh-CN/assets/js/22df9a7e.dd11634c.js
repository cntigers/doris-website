"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["208018"],{413262:function(e,r,n){n.r(r),n.d(r,{default:()=>t,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>m,contentTitle:()=>l});var i=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis","title":"\u67E5\u8BE2\u5185\u5B58\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u67E5\u8BE2\u5185\u5B58\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5143\u6570\u636E\u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis"},"next":{"title":"\u5BFC\u5165\u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis"}}'),o=n("785893"),s=n("250065");let a={title:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790",language:"zh-CN"},l=void 0,d={},m=[{value:"\u67E5\u8BE2\u5185\u5B58\u67E5\u770B",id:"\u67E5\u8BE2\u5185\u5B58\u67E5\u770B",level:2},{value:"\u4F7F\u7528 Query Profile \u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",id:"\u4F7F\u7528-query-profile-\u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",level:2},{value:"\u4F7F\u7528 Heap Profile \u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",id:"\u4F7F\u7528-heap-profile-\u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"\u901A\u5E38\u5148\u4F7F\u7528 Query Profile \u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\uFF0C\u5982\u679C Query Profile \u4E2D\u7EDF\u8BA1\u7684\u5404\u4E2A\u7B97\u5B50\uFF08Operator\uFF09\u5185\u5B58\u4E4B\u548C\u8FDC\u5C0F\u4E8E Query Memory Trcker \u7EDF\u8BA1\u5230\u7684\u5185\u5B58\uFF0C\u8BF4\u660E Query Profile \u7EDF\u8BA1\u5230\u7684\u7B97\u5B50\u5185\u5B58\u4E0E\u5B9E\u9645\u4F7F\u7528\u7684\u5185\u5B58\u76F8\u5DEE\u8F83\u5927\uFF0C\u90A3\u4E48\u5F80\u5F80\u8FD8\u9700\u8981\u4F7F\u7528 Heap Profile \u8FDB\u4E00\u6B65\u5206\u6790\u3002\u5982\u679C Query \u56E0\u4E3A\u5185\u5B58\u8D85\u9650\u88AB Cancel\uFF0C\u65E0\u6CD5\u6267\u884C\u5B8C\u6210\uFF0C\u6B64\u65F6 Query Profile \u4E0D\u5B8C\u6574\uFF0C\u53EF\u80FD\u65E0\u6CD5\u51C6\u786E\u5206\u6790\uFF0C\u901A\u5E38\u76F4\u63A5\u4F7F\u7528 Heap Profile \u5206\u6790 Query \u5185\u5B58\u4F7F\u7528\u3002"}),"\n",(0,o.jsx)(r.h2,{id:"\u67E5\u8BE2\u5185\u5B58\u67E5\u770B",children:"\u67E5\u8BE2\u5185\u5B58\u67E5\u770B"}),"\n",(0,o.jsxs)(r.p,{children:["\u5982\u679C\u4EFB\u4F55\u5730\u65B9\u770B\u5230 ",(0,o.jsx)(r.code,{children:"Label=query, Type=overview"})," Memory Tracker \u7684\u503C\u8F83\u5927\uFF0C\u8BF4\u660E\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u591A\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u5982\u679C\u4F60\u5DF2\u77E5\u8981\u5206\u6790\u7684\u67E5\u8BE2\uFF0C\u90A3\u4E48\u8DF3\u8FC7\u672C\u8282\u7EE7\u7EED\u540E\u9762\u7684\u5206\u6790\uFF0C\u5426\u5219\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6CD5\u5B9A\u4F4D\u5927\u5185\u5B58\u67E5\u8BE2\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["\u9996\u5148\u5B9A\u4F4D\u5927\u5185\u5B58\u67E5\u8BE2\u7684 QueryID\uFF0C\u5728 BE web \u9875\u9762 ",(0,o.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=query"})," \u4E2D\u6309\u7167 ",(0,o.jsx)(r.code,{children:"Current Consumption"})," \u6392\u5E8F\u53EF\u4EE5\u770B\u5230\u5B9E\u65F6\u7684\u5927\u5185\u5B58\u67E5\u8BE2\uFF0C\u5728 ",(0,o.jsx)(r.code,{children:"label"})," \u4E2D\u53EF\u4EE5\u627E\u5230 QueryID\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5F53\u62A5\u9519\u8FDB\u7A0B\u5185\u5B58\u8D85\u9650\u6216\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u5728 ",(0,o.jsx)(r.code,{children:"be.INFO"})," \u65E5\u5FD7\u4E2D ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"})," \u4E0B\u534A\u90E8\u5206\u5305\u542B\u5185\u5B58\u4F7F\u7528 TOP 10 \u7684\u4EFB\u52A1\uFF08\u67E5\u8BE2/\u5BFC\u5165/Compaction \u7B49\uFF09\u7684 Memory Tracker\uFF0C\u683C\u5F0F\u4E3A ",(0,o.jsx)(r.code,{children:"MemTrackerLimiter Label=Query#Id=xxx, Type=query"}),"\uFF0C\u901A\u5E38\u5728 TOP 10 \u7684\u4EFB\u52A1\u4E2D\u5C31\u80FD\u5B9A\u4F4D\u5230\u5927\u5185\u5B58\u67E5\u8BE2\u7684 QueryID\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5386\u53F2\u67E5\u8BE2\u7684\u5185\u5B58\u7EDF\u8BA1\u7ED3\u679C\u53EF\u4EE5\u67E5\u770B",(0,o.jsx)(r.code,{children:"fe/log/fe.audit.log"}),"\u4E2D\u6BCF\u4E2A\u67E5\u8BE2\u7684",(0,o.jsx)(r.code,{children:"peakMemoryBytes"}),"\uFF0C\u6216\u8005\u5728",(0,o.jsx)(r.code,{children:"be/log/be.INFO"}),"\u4E2D\u641C\u7D22",(0,o.jsx)(r.code,{children:"Deregister query/load memory tracker, queryId"}),"\u67E5\u770B\u5355\u4E2A BE \u4E0A\u6BCF\u4E2A\u67E5\u8BE2\u7684\u5185\u5B58\u5CF0\u503C\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u4F7F\u7528-query-profile-\u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",children:"\u4F7F\u7528 Query Profile \u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528"}),"\n",(0,o.jsxs)(r.p,{children:["\u4F9D\u636E QueryID \u5728 ",(0,o.jsx)(r.code,{children:"fe/log/fe.audit.log"})," \u4E2D\u627E\u5230\u5305\u62EC SQL \u5728\u5185\u7684\u67E5\u8BE2\u4FE1\u606F\uFF0C",(0,o.jsx)(r.code,{children:"explain SQL"})," \u5F97\u5230\u67E5\u8BE2\u8BA1\u5212\uFF0C",(0,o.jsx)(r.code,{children:"set enable_profile=true"}),"\u540E\u6267\u884C SQL \u5F97\u5230\u67E5\u8BE2\u7684 Query Profile\uFF0C\u6709\u5173 Query Profile \u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u8003\u6587\u6863 ",(0,o.jsx)(r.a,{href:"../../../../query-acceleration/performance-tuning-overview/analysis-tools#doris-profile",children:"Query Profile"}),"\uFF0C\u8FD9\u91CC\u53EA\u4ECB\u7ECD Query Profile \u4E2D\u5185\u5B58\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u5E76\u636E\u6B64\u5B9A\u4F4D\u4F7F\u7528\u5927\u91CF\u5185\u5B58\u7684 Operator \u548C\u6570\u636E\u7ED3\u6784\u3002"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"\u5B9A\u4F4D\u4F7F\u7528\u5927\u91CF\u5185\u5B58\u7684 Operator \u6216\u5185\u5B58\u6570\u636E\u7ED3\u6784"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Query Profile \u5206\u4E3A\u4E24\u90E8\u5206\uFF1A"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"MergedProfile"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["MergedProfile \u662F Query \u6240\u6709 Instance Profile \u7684\u805A\u5408\u7ED3\u679C\uFF0C\u5176\u4E2D\u80FD\u770B\u5230\u6BCF\u4E2A Fragment \u7684\u6BCF\u4E2A Pipeline \u7684\u6BCF\u4E2A Operator(\u7B97\u5B50) \u5728\u6240\u6709 Instance \u4E0A\u5185\u5B58\u4F7F\u7528\u7684 sum\u3001avg\u3001max\u3001min\uFF0C\u5305\u62EC Operator \u7684\u5CF0\u503C\u5185\u5B58 ",(0,o.jsx)(r.code,{children:"PeakMemoryUsage"})," \u4EE5\u53CA ",(0,o.jsx)(r.code,{children:"HashTable"}),"\u3001",(0,o.jsx)(r.code,{children:"Arena"})," \u7B49\u4E3B\u8981\u5185\u5B58\u6570\u636E\u7ED3\u6784\u7684\u5CF0\u503C\u5185\u5B58\uFF0C\u636E\u6B64\u5B9A\u4F4D\u5230\u4F7F\u7528\u4E86\u5927\u91CF\u5185\u5B58\u7684 Operator \u548C \u6570\u636E\u7ED3\u6784\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"MergedProfile  \n          Fragments:\n              Fragment  0:\n                  Pipeline  :  0(instance_num=1):\n                      RESULT_SINK_OPERATOR  (id=0):\n                            -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                          EXCHANGE_OPERATOR  (id=20):\n                                -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                    -  PeakMemoryUsage:  sum  1.16  KB,  avg  1.16  KB,  max  1.16  KB,  min  1.16  KB\n              Fragment  1:\n                  Pipeline  :  1(instance_num=12):\n                      AGGREGATION_SINK_OPERATOR  (id=18  ,  nereids_id=1532):\n                            -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                -  HashTable:  sum  96.00  B,  avg  8.00  B,  max  24.00  B,  min  0.00  \n                                -  PeakMemoryUsage:  sum  1.58  MB,  avg  134.67  KB,  max  404.02  KB,  min  0.00  \n                                -  SerializeKeyArena:  sum  1.58  MB,  avg  134.67  KB,  max  404.00  KB,  min  0.00  \n                          EXCHANGE_OPERATOR  (id=17):\n                                -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                    -  PeakMemoryUsage:  sum  2.25  KB,  avg  192.00  B,  max  768.00  B,  min  0.00\n"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"Execution  Profile"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Execution  Profile"})," \u662F Query \u5177\u4F53\u6BCF\u4E2A Instance Profile \u7684\u7ED3\u679C\uFF0C\u901A\u5E38\u4F9D\u636E ",(0,o.jsx)(r.code,{children:"MergedProfile"})," \u5B9A\u4F4D\u5230\u4F7F\u7528\u4E86\u5927\u91CF\u5185\u5B58\u7684 Operator \u548C\u6570\u636E\u7ED3\u6784\u540E\uFF0C\u5373\u53EF\u4F9D\u636E ",(0,o.jsx)(r.code,{children:"explain SQL"})," \u540E\u7684\u67E5\u8BE2\u8BA1\u5212\u5206\u6790\u5176\u5185\u5B58\u4F7F\u7528\u7684\u539F\u56E0\uFF0C\u5982\u679C\u4E00\u4E9B\u573A\u666F\u4E0B\u9700\u8981\u5206\u6790 Query \u5728\u67D0\u4E00\u4E2A BE \u7ED3\u70B9\u6216\u67D0\u4E00\u4E2A Instance \u7684\u5185\u5B58\u503C\uFF0C\u53EF\u4EE5\u4F9D\u636E ",(0,o.jsx)(r.code,{children:"Execution  Profile"})," \u8FDB\u4E00\u6B65\u5B9A\u4F4D\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"Execution  Profile  36ca4f8b97834449-acae910fbee8c670:(ExecTime:  48sec201ms)\n    Fragments:\n        Fragment  0:\n            Fragment  Level  Profile:    (host=TNetworkAddress(hostname:10.16.10.8,  port:9013)):(ExecTime:  48sec111ms)\n            Pipeline  :1    (host=TNetworkAddress(hostname:10.16.10.8,  port:9013)):\n                PipelineTask  (index=80):(ExecTime:  6sec267ms)\n                DATA_STREAM_SINK_OPERATOR  (id=17,dst_id=17):(ExecTime:  1.634ms)\n                -  MemoryUsage:  \n                    -  PeakMemoryUsage:  1.50  KB\n                STREAMING_AGGREGATION_OPERATOR  (id=16  ,  nereids_id=1526):(ExecTime:  41.269ms)\n                    -  MemoryUsage:  \n                        -  HashTable:  168.00  B\n                        -  PeakMemoryUsage:  404.16  KB\n                        -  SerializeKeyArena:  404.00  KB\n                HASH_JOIN_OPERATOR  (id=15  ,  nereids_id=1520):(ExecTime:  6sec150ms)\n                        -  MemoryUsage:  \n                            -  PeakMemoryUsage:  3.22  KB\n                            -  ProbeKeyArena:  3.22  KB\n                    LOCAL_EXCHANGE_OPERATOR  (PASSTHROUGH)  (id=-12):(ExecTime:  67.950ms)\n                            -  MemoryUsage:  \n                                -  PeakMemoryUsage:  1.41  MB\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"HASH_JOIN_SINK_OPERATOR"})," \u5185\u5B58\u5360\u7528\u591A"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"HASH_JOIN_SINK_OPERATOR  (id=12  ,  nereids_id=1304):(ExecTime:  1min14sec)\n    -  JoinType:  INNER_JOIN\n    -  BroadcastJoin:  true\n    -  BuildRows:  600.030257M  (600030257)\n    -  InputRows:  600.030256M  (600030256)\n    -  MemoryUsage:  \n        -  BuildBlocks:  15.65  GB\n        -  BuildKeyArena:  0.00  \n        -  HashTable:  6.24  GB\n        -  PeakMemoryUsage:  21.89 GB\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u53EF\u89C1\u4E3B\u8981\u4F7F\u7528\u5185\u5B58\u7684 Hash Join Build \u9636\u6BB5\u7684 ",(0,o.jsx)(r.code,{children:"BuildBlocks"})," \u548C ",(0,o.jsx)(r.code,{children:"HashTable"}),"\uFF0C\u901A\u5E38 Hash Join \u7684 Build \u9636\u6BB5\u4F7F\u7528\u5185\u5B58\u592A\u591A\uFF0C\u9996\u5148\u786E\u8BA4 Join Reorder \u987A\u5E8F\u662F\u5426\u5408\u7406\uFF0C\u901A\u5E38\u6B63\u786E\u7684\u987A\u5E8F\u662F\u5C0F\u8868\u7528\u4E8E Hash Join Build\uFF0C\u5927\u8868\u7528\u4E8E Hash Join Probe\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6700\u5C0F\u5316 Hash Join \u6574\u4F53\u7684\u5185\u5B58\u4F7F\u7528\uFF0C\u5E76\u901A\u5E38\u5177\u6709\u66F4\u597D\u7684\u6027\u80FD\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u4E3A\u4E86\u786E\u8BA4 Join Reorder \u987A\u5E8F\u662F\u5426\u5408\u7406\uFF0C\u6211\u4EEC\u627E\u5230 id=12 \u7684 ",(0,o.jsx)(r.code,{children:"HASH_JOIN_OPERATOR"})," \u7684 profile\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,o.jsx)(r.code,{children:"ProbeRows"})," \u53EA\u6709 196240 \u884C\uFF0C\u6240\u4EE5\u8FD9\u4E2A Hash Join Reorder \u6B63\u786E\u7684\u987A\u5E8F\u5E94\u8BE5\u4EA4\u6362\u5DE6\u8868\u548C\u53F3\u8868\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5 ",(0,o.jsx)(r.code,{children:"set disable_join_reorder=true"})," \u5173\u95ED Join Reorder \u5E76\u624B\u52A8\u6307\u5B9A\u5DE6\u8868\u548C\u53F3\u8868\u7684\u987A\u5E8F\u540E\u6267\u884C Query \u9A8C\u8BC1\uFF0C\u8FDB\u4E00\u6B65\u53EF\u53C2\u8003\u67E5\u8BE2\u4F18\u5316\u5668\u4E2D Join Reorder \u76F8\u5173\u7684\u6587\u6863\u3002"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"HASH_JOIN_OPERATOR  (id=12  ,  nereids_id=1304):(ExecTime:  8sec223ms)\n    -  BlocksProduced:  227\n    -  MemoryUsage:  \n        -  PeakMemoryUsage:  0.00  \n        -  ProbeKeyArena:  0.00  \n    -  ProbeRows:  196.24K  (196240)\n    -  RowsProduced:  786.22K  (786220)\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u4F7F\u7528-heap-profile-\u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528",children:"\u4F7F\u7528 Heap Profile \u5206\u6790\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528"}),"\n",(0,o.jsxs)(r.p,{children:["\u5982\u679C\u4E0A\u9762\u4F7F\u7528 Query Profile \u65E0\u6CD5\u51C6\u786E\u5B9A\u4F4D\u5185\u5B58\u7684\u4F7F\u7528\u4F4D\u7F6E\uFF0C\u82E5\u96C6\u7FA4\u65B9\u4FBF\u91CD\u542F\uFF0C\u5E76\u4E14\u73B0\u8C61\u53EF\u4EE5\u88AB\u590D\u73B0\uFF0C\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis",children:"Heap Profile \u5185\u5B58\u5206\u6790"})," \u5206\u6790 Query \u5185\u5B58\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 Query \u6267\u884C\u524D Dump \u4E00\u6B21 Heap Profile\uFF0C\u5728 Query \u6267\u884C\u8FC7\u7A0B\u4E2D\u518D Dump \u4E00\u6B21 Heap Profile\uFF0C\u901A\u8FC7\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"jeprof --dot lib/doris_be --base=heap_dump_file_1 heap_dump_file_2"})," \u5BF9\u6BD4\u4E24\u4E2A Heap Profile \u4E4B\u95F4\u7684\u5185\u5B58\u53D8\u5316\uFF0C\u53EF\u4EE5\u5F97\u51FA\u4EE3\u7801\u4E2D\u7684\u6BCF\u4E2A\u51FD\u6570\u5728 Query \u6267\u884C\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u5185\u5B58\u5360\u6BD4\uFF0C\u5BF9\u7167\u4EE3\u7801\u5373\u53EF\u5B9A\u4F4D\u5185\u5B58\u4F7F\u7528\u4F4D\u7F6E\uFF0C\u56E0\u4E3A Query \u6267\u884C\u8FC7\u7A0B\u4E2D\u5185\u5B58\u5B9E\u65F6\u53D8\u5316\uFF0C\u6240\u4EE5\u53EF\u80FD\u9700\u8981\u5728 Query \u6267\u884C\u8FC7\u7A0B\u4E2D\u591A\u6B21 Dump Heap Profile \u5E76\u5BF9\u6BD4\u5206\u6790\u3002"]})]})}function t(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return a}});var i=n(667294);let o={},s=i.createContext(o);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);