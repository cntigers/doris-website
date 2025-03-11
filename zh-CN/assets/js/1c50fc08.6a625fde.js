"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["554739"],{432120:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>s});var t=JSON.parse('{"id":"admin-manual/workload-management/concurrency-control-and-queuing","title":"\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/workload-management/concurrency-control-and-queuing.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/concurrency-control-and-queuing","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/concurrency-control-and-queuing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5DE5\u4F5C\u8D1F\u8F7D\u5206\u6790\u4E0E\u8BCA\u65AD","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/analysis-diagnosis"},"next":{"title":"\u67E5\u8BE2\u7194\u65AD","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/sql-blocking"}}'),d=r("785893"),o=r("250065");let i={title:"\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F",language:"zh-CN"},s=void 0,c={},a=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u67E5\u770B\u6392\u961F\u72B6\u6001",id:"\u67E5\u770B\u6392\u961F\u72B6\u6001",level:2},{value:"\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91",id:"\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91",level:2}];function l(n){let e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F\u662F\u4E00\u79CD\u8D44\u6E90\u7BA1\u7406\u673A\u5236\uFF0C\u5F53\u591A\u4E2A\u67E5\u8BE2\u540C\u65F6\u8BF7\u6C42\u8D44\u6E90\uFF0C\u8FBE\u5230\u7CFB\u7EDF\u5E76\u53D1\u80FD\u529B\u7684\u4E0A\u9650\u65F6\uFF0CDoris \u4F1A\u6839\u636E\u9884\u8BBE\u7684\u7B56\u7565\u548C\u9650\u5236\u6761\u4EF6\u5BF9\u67E5\u8BE2\u8FDB\u884C\u6392\u961F\u7BA1\u7406\uFF0C\u786E\u4FDD\u7CFB\u7EDF\u5728\u9AD8\u8D1F\u8F7D\u60C5\u51B5\u4E0B\u4ECD\u80FD\u5E73\u7A33\u8FD0\u884C\uFF0C\u907F\u514D OOM\u3001\u7CFB\u7EDF\u5361\u6B7B\u7B49\u95EE\u9898\u3002"}),"\n",(0,d.jsx)(e.p,{children:"Doris \u7684\u5E76\u53D1\u63A7\u5236\u4E0E\u6392\u961F\u673A\u5236\u4E3B\u8981\u901A\u8FC7 workload group \u6765\u5B9E\u73B0\u3002workload group \u5B9A\u4E49\u4E86\u67E5\u8BE2\u7684\u8D44\u6E90\u4F7F\u7528\u4E0A\u9650\uFF0C\u5305\u62EC\u6700\u5927\u5E76\u53D1\u6570\u3001\u6392\u961F\u961F\u5217\u957F\u5EA6\u548C\u8D85\u65F6\u65F6\u95F4\u7B49\u53C2\u6570\u3002\u901A\u8FC7\u5408\u7406\u914D\u7F6E\u8FD9\u4E9B\u53C2\u6570\uFF0C\u53EF\u4EE5\u8FBE\u5230\u8D44\u6E90\u7BA1\u63A7\u7684\u76EE\u7684\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:'create workload group if not exists queue_group\nproperties (\n    "max_concurrency" = "10",\n    "max_queue_size" = "20",\n    "queue_timeout" = "3000"\n);\n'})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u53C2\u6570\u8BF4\u660E"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5C5E\u6027\u540D\u79F0"}),(0,d.jsx)(e.th,{children:"\u6570\u636E\u7C7B\u578B"}),(0,d.jsx)(e.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(e.th,{children:"\u53D6\u503C\u8303\u56F4"}),(0,d.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max_concurrency"}),(0,d.jsx)(e.td,{children:"\u6574\u578B"}),(0,d.jsx)(e.td,{children:"2147483647"}),(0,d.jsx)(e.td,{children:"[0, 2147483647]"}),(0,d.jsx)(e.td,{children:"\u53EF\u9009\uFF0C\u6700\u5927\u67E5\u8BE2\u5E76\u53D1\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u6574\u578B\u6700\u5927\u503C\uFF0C\u4E5F\u5C31\u662F\u4E0D\u505A\u5E76\u53D1\u7684\u9650\u5236\u3002\u8FD0\u884C\u4E2D\u7684\u67E5\u8BE2\u6570\u91CF\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u65F6\uFF0C\u65B0\u6765\u7684\u67E5\u8BE2\u4F1A\u8FDB\u5165\u6392\u961F\u7684\u903B\u8F91\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max_queue_size"}),(0,d.jsx)(e.td,{children:"\u6574\u578B"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"[0, 2147483647]"}),(0,d.jsx)(e.td,{children:"\u53EF\u9009\uFF0C\u67E5\u8BE2\u6392\u961F\u961F\u5217\u7684\u957F\u5EA6\uFF0C\u5F53\u6392\u961F\u961F\u5217\u5DF2\u6EE1\u65F6\uFF0C\u65B0\u6765\u7684\u67E5\u8BE2\u4F1A\u88AB\u62D2\u7EDD\u3002\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u542B\u4E49\u662F\u4E0D\u6392\u961F\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"queue_timeout"}),(0,d.jsx)(e.td,{children:"\u6574\u578B"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"[0, 2147483647]"}),(0,d.jsx)(e.td,{children:"\u53EF\u9009\uFF0C\u67E5\u8BE2\u5728\u6392\u961F\u961F\u5217\u4E2D\u7684\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u5982\u679C\u67E5\u8BE2\u5728\u961F\u5217\u4E2D\u7684\u6392\u961F\u65F6\u95F4\u8D85\u8FC7\u8FD9\u4E2A\u503C\uFF0C\u90A3\u4E48\u5C31\u4F1A\u76F4\u63A5\u629B\u51FA\u5F02\u5E38\u7ED9\u5BA2\u6237\u7AEF\u3002\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u542B\u4E49\u662F\u4E0D\u6392\u961F\uFF0C\u67E5\u8BE2\u8FDB\u5165\u961F\u5217\u540E\u7ACB\u5373\u8FD4\u56DE\u5931\u8D25\u3002"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679C\u96C6\u7FA4\u4E2D\u76EE\u524D\u6709 1 \u53F0 FE\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u914D\u7F6E\u7684\u542B\u4E49\u4E3A\uFF0C\u96C6\u7FA4\u4E2D\u540C\u65F6\u8FD0\u884C\u7684\u67E5\u8BE2\u6570\u6700\u5927\u4E0D\u8D85\u8FC7 10 \u4E2A\uFF0C\u5F53\u6700\u5927\u5E76\u53D1\u5DF2\u6EE1\u65F6\uFF0C\u65B0\u6765\u7684\u67E5\u8BE2\u4F1A\u6392\u961F\uFF0C\u961F\u5217\u7684\u957F\u5EA6\u4E0D\u8D85\u8FC7 20\u3002\u67E5\u8BE2\u5728\u961F\u5217\u4E2D\u6392\u961F\u7684\u65F6\u95F4\u6700\u957F\u4E3A 3s\uFF0C\u6392\u961F\u8D85\u8FC7 3s \u7684\u67E5\u8BE2\u4F1A\u76F4\u63A5\u8FD4\u56DE\u5931\u8D25\u7ED9\u5BA2\u6237\u7AEF\u3002"}),"\n",(0,d.jsxs)(e.admonition,{type:"tip",children:[(0,d.jsx)(e.p,{children:"\u76EE\u524D\u7684\u6392\u961F\u8BBE\u8BA1\u662F\u4E0D\u611F\u77E5 FE \u7684\u4E2A\u6570\u7684\uFF0C\u6392\u961F\u7684\u53C2\u6570\u53EA\u5728\u5355 FE \u7C92\u5EA6\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A"}),(0,d.jsx)(e.p,{children:"\u4E00\u4E2A Doris \u96C6\u7FA4\u914D\u7F6E\u4E86\u4E00\u4E2A workload group\uFF0C\u8BBE\u7F6E max_concurrency = 1\uFF1B\n\u5982\u679C\u96C6\u7FA4\u4E2D\u6709 1FE\uFF0C\u90A3\u4E48\u8FD9\u4E2A workload group \u5728 Doris \u96C6\u7FA4\u89C6\u89D2\u770B\u540C\u65F6\u53EA\u4F1A\u8FD0\u884C\u4E00\u4E2A SQL\uFF1B\n\u5982\u679C\u6709 3 \u53F0 FE\uFF0C\u90A3\u4E48\u5728 Doris \u96C6\u7FA4\u89C6\u89D2\u770B\u6700\u5927\u53EF\u8FD0\u884C\u7684 SQL \u4E2A\u6570\u4E3A 3\u3002"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u67E5\u770B\u6392\u961F\u72B6\u6001",children:"\u67E5\u770B\u6392\u961F\u72B6\u6001"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u8BED\u6CD5"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"show workload groups\n"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u793A\u4F8B"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"mysql [(none)]>show workload groups\\G;\n*************************** 1. row ***************************\n                          Id: 1\n                        Name: normal\n                   cpu_share: 20\n                memory_limit: 50%\n    enable_memory_overcommit: true\n             max_concurrency: 2147483647\n              max_queue_size: 0\n               queue_timeout: 0\n              cpu_hard_limit: 1%\n             scan_thread_num: 16\n  max_remote_scan_thread_num: -1\n  min_remote_scan_thread_num: -1\n        memory_low_watermark: 50%\n       memory_high_watermark: 80%\n                         tag: \n       read_bytes_per_second: -1\nremote_read_bytes_per_second: -1\n           running_query_num: 0\n           waiting_query_num: 0\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"running_query_num"}),"\u4EE3\u8868\u8FD0\u884C\u4E2D\u7684\u67E5\u8BE2\u6570\u91CF\uFF0C",(0,d.jsx)(e.code,{children:"waiting_query_num"}),"\u4EE3\u8868\u6392\u961F\u4E2D\u7684\u67E5\u8BE2\u6570\u91CF"]}),"\n",(0,d.jsx)(e.h2,{id:"\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91",children:"\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u6709\u4E9B\u8FD0\u7EF4\u60C5\u51B5\u4E0B\uFF0C\u7BA1\u7406\u5458\u8D26\u6237\u9700\u8981\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91\u6267\u884C SQL \u5BF9\u7CFB\u7EDF\u8FDB\u884C\u4E00\u4E9B\u7BA1\u7406\u64CD\u4F5C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E session \u53D8\u91CF\uFF0C\u6765\u7ED5\u5F00\u6392\u961F\u7684\u903B\u8F91\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"set bypass_workload_group = true;\n"})})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return i}});var t=r(667294);let d={},o=t.createContext(d);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);