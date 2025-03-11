"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["179384"],{269331:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>c,assets:()=>t,toc:()=>d,contentTitle:()=>o});var c=JSON.parse('{"id":"developer-guide/benchmark-tool","title":"Doris BE\u5B58\u50A8\u5C42Benchmark\u5DE5\u5177","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/benchmark-tool.md","sourceDirName":"developer-guide","slug":"/developer-guide/benchmark-tool","permalink":"/zh-CN/community/developer-guide/benchmark-tool","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Doris BE\u5B58\u50A8\u5C42Benchmark\u5DE5\u5177","language":"zh-CN"},"sidebar":"community","previous":{"title":"Doris Docker \u5FEB\u901F\u642D\u5EFA\u5F00\u53D1\u73AF\u5883","permalink":"/zh-CN/community/developer-guide/docker-dev"},"next":{"title":"Pipeline Tracing","permalink":"/zh-CN/community/developer-guide/pipeline-tracing"}}'),i=r("785893"),s=r("250065");let l={title:"Doris BE\u5B58\u50A8\u5C42Benchmark\u5DE5\u5177",language:"zh-CN"},o="Doris BE\u5B58\u50A8\u5C42Benchmark\u5DE5\u5177",t={},d=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u7F16\u8BD1",id:"\u7F16\u8BD1",level:2},{value:"\u4F7F\u7528",id:"\u4F7F\u7528",level:2},{value:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u8BFB\u53D6\u6D4B\u8BD5",id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u8BFB\u53D6\u6D4B\u8BD5",level:4},{value:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u5199\u5165\u6D4B\u8BD5",id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u5199\u5165\u6D4B\u8BD5",level:4},{value:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u8BFB\u53D6\u6D4B\u8BD5",id:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u8BFB\u53D6\u6D4B\u8BD5",level:4},{value:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u5199\u5165\u6D4B\u8BD5",id:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u5199\u5165\u6D4B\u8BD5",level:4},{value:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u7F16\u7801\u6D4B\u8BD5",id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u7F16\u7801\u6D4B\u8BD5",level:4},{value:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u89E3\u7801\u6D4B\u8BD5",id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u89E3\u7801\u6D4B\u8BD5",level:4},{value:"Custom\u6D4B\u8BD5",id:"custom\u6D4B\u8BD5",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"doris-be\u5B58\u50A8\u5C42benchmark\u5DE5\u5177",children:"Doris BE\u5B58\u50A8\u5C42Benchmark\u5DE5\u5177"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7528\u9014",children:"\u7528\u9014"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5BE\u5B58\u50A8\u5C42\u7684\u4E00\u4E9B\u90E8\u5206(\u4F8B\u5982segment\u3001page)\u7684\u6027\u80FD\u3002\u6839\u636E\u8F93\u5165\u6570\u636E\u6784\u9020\u51FA\u6307\u5B9A\u5BF9\u8C61,\u5229\u7528google benchmark\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\u3002\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7F16\u8BD1",children:"\u7F16\u8BD1"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u786E\u4FDD\u73AF\u5883\u5DF2\u7ECF\u80FD\u987A\u5229\u7F16\u8BD1Doris\u672C\u4F53,\u53EF\u4EE5\u53C2\u8003",(0,i.jsx)(n.a,{href:"/docs/install/source-install/compilation-general",children:"\u7F16\u8BD1\u4E0E\u90E8\u7F72"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8FD0\u884C\u76EE\u5F55\u4E0B\u7684",(0,i.jsx)(n.code,{children:"run-be-ut.sh"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7F16\u8BD1\u51FA\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F4D\u4E8E",(0,i.jsx)(n.code,{children:"./be/ut_build_ASAN/test/tools/benchmark_tool"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528",children:"\u4F7F\u7528"}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u8BFB\u53D6\u6D4B\u8BD5",children:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u8BFB\u53D6\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.p,{children:["\u4F1A\u5148\u5229\u7528\u6570\u636E\u96C6\u5199\u5165\u4E00\u4E2A",(0,i.jsx)(n.code,{children:"segment"}),"\u6587\u4EF6,\u7136\u540E\u5BF9scan\u6574\u4E2A",(0,i.jsx)(n.code,{children:"segment"}),"\u7684\u8017\u65F6\u8FDB\u884C\u7EDF\u8BA1\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=SegmentScan --column_type=int,varchar --rows_number=10000 --iterations=0"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684",(0,i.jsx)(n.code,{children:"column_type"}),"\u53EF\u4EE5\u8BBE\u7F6E\u8868\u7ED3\u6784,",(0,i.jsx)(n.code,{children:"segment"}),"\u5C42\u7684\u8868\u7ED3\u6784\u7C7B\u578B\u76EE\u524D\u652F\u6301",(0,i.jsx)(n.code,{children:"int\u3001char\u3001varchar\u3001string"}),",",(0,i.jsx)(n.code,{children:"char"}),"\u7C7B\u578B\u7684\u957F\u5EA6\u4E3A",(0,i.jsx)(n.code,{children:"8"}),",",(0,i.jsx)(n.code,{children:"varchar"}),"\u548C",(0,i.jsx)(n.code,{children:"string"}),"\u7C7B\u578B\u957F\u5EA6\u9650\u5236\u90FD\u4E3A\u6700\u5927\u503C\u3002\u9ED8\u8BA4\u503C\u4E3A",(0,i.jsx)(n.code,{children:"int,varchar"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636E\u96C6\u6309\u4EE5\u4E0B\u89C4\u5219\u751F\u6210\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"int: \u5728[1,1000000]\u5185\u968F\u673A\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E\u5B57\u7B26\u96C6\u4E3A\u5927\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD,\u957F\u5EA6\u6839\u636E\u7C7B\u578B\u4E0D\u540C\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"char: \u957F\u5EA6\u5728[1,8]\u5185\u968F\u673A\u3002\nvarchar: \u957F\u5EA6\u5728[1,128]\u5185\u968F\u673A\u3002\nstring: \u957F\u5EA6\u5728[1,100000]\u5185\u968F\u673A\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"rows_number"}),"\u8868\u793A\u6570\u636E\u7684\u884C\u6570,\u9ED8\u8BA4\u503C\u4E3A",(0,i.jsx)(n.code,{children:"10000"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"iterations"}),"\u8868\u793A\u8FED\u4EE3\u6B21\u6570,benchmark\u4F1A\u91CD\u590D\u8FDB\u884C\u6D4B\u8BD5,\u7136\u540E\u8BA1\u7B97\u5E73\u5747\u8017\u65F6\u3002\u5982\u679C",(0,i.jsx)(n.code,{children:"iterations"}),"\u4E3A",(0,i.jsx)(n.code,{children:"0"}),"\u5219\u8868\u793A\u7531benchmark\u81EA\u52A8\u9009\u62E9\u8FED\u4EE3\u6B21\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A",(0,i.jsx)(n.code,{children:"10"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u5199\u5165\u6D4B\u8BD5",children:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u5199\u5165\u6D4B\u8BD5"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u5C06\u6570\u636E\u96C6\u6DFB\u52A0\u8FDBsegment\u5E76\u5199\u5165\u78C1\u76D8\u7684\u6D41\u7A0B\u8FDB\u884C\u8017\u65F6\u7EDF\u8BA1\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=SegmentWrite"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u8BFB\u53D6\u6D4B\u8BD5",children:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u8BFB\u53D6\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=SegmentScanByFile --input_file=./sample.dat"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684",(0,i.jsx)(n.code,{children:"input_file"}),"\u4E3A\u5BFC\u5165\u7684\u6570\u636E\u96C6\u6587\u4EF6\u3002\n\u6570\u636E\u96C6\u6587\u4EF6\u7B2C\u4E00\u884C\u4E3A\u8868\u7ED3\u6784\u5B9A\u4E49,\u4E4B\u540E\u6BCF\u884C\u5206\u522B\u5BF9\u5E94\u4E00\u884C\u6570\u636E,\u6BCF\u4E2A\u6570\u636E\u7528",(0,i.jsx)(n.code,{children:","}),"\u9694\u5F00\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E3E\u4F8B:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"int,char,varchar\n123,hello,world\n321,good,bye\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7C7B\u578B\u652F\u6301\u540C\u6837\u4E3A",(0,i.jsx)(n.code,{children:"int"}),"\u3001",(0,i.jsx)(n.code,{children:"char"}),"\u3001",(0,i.jsx)(n.code,{children:"varchar"}),"\u3001",(0,i.jsx)(n.code,{children:"string"}),",\u6CE8\u610F",(0,i.jsx)(n.code,{children:"char"}),"\u7C7B\u578B\u6570\u636E\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC78\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884Csegment\u5199\u5165\u6D4B\u8BD5",children:"\u4F7F\u7528\u4ECE\u6587\u4EF6\u5BFC\u5165\u7684\u6570\u636E\u96C6\u8FDB\u884CSegment\u5199\u5165\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=SegmentWriteByFile --input_file=./sample.dat"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u7F16\u7801\u6D4B\u8BD5",children:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u7F16\u7801\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=BinaryDictPageEncode --rows_number=10000 --iterations=0"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F1A\u968F\u673A\u751F\u6210\u957F\u5EA6\u5728[1,8]\u4E4B\u95F4\u7684varchar,\u5E76\u5BF9\u7F16\u7801\u8FDB\u884C\u8017\u65F6\u7EDF\u8BA1\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u89E3\u7801\u6D4B\u8BD5",children:"\u4F7F\u7528\u968F\u673A\u751F\u6210\u7684\u6570\u636E\u96C6\u8FDB\u884Cpage\u5B57\u5178\u89E3\u7801\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"./benchmark_tool --operation=BinaryDictPageDecode"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F1A\u968F\u673A\u751F\u6210\u957F\u5EA6\u5728[1,8]\u4E4B\u95F4\u7684varchar\u5E76\u7F16\u7801,\u5E76\u5BF9\u89E3\u7801\u8FDB\u884C\u8017\u65F6\u7EDF\u8BA1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"custom\u6D4B\u8BD5",children:"Custom\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u652F\u6301\u7528\u6237\u4F7F\u7528\u81EA\u5DF1\u7F16\u5199\u7684\u51FD\u6570\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5,\u5177\u4F53\u53EF\u4EE5\u5B9E\u73B0\u5728",(0,i.jsx)(n.code,{children:"/be/test/tools/benchmark_tool.cpp"}),"\u3002\n\u4F8B\u5982\u5B9E\u73B0\u6709\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void custom_run_plus() {\n    int p = 100000;\n    int q = 0;\n    while (p--) {\n        q++;\n        if (UNLIKELY(q == 1024)) q = 0;\n    }\n}\nvoid custom_run_mod() {\n    int p = 100000;\n    int q = 0;\n    while (p--) {\n        q++;\n        if (q %= 1024) q = 0;\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5219\u53EF\u4EE5\u901A\u8FC7\u6CE8\u518C",(0,i.jsx)(n.code,{children:"CustomBenchmark"}),"\u6765\u52A0\u5165\u6D4B\u8BD5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'benchmarks.emplace_back(\n                    new doris::CustomBenchmark("custom_run_plus", 0,\n                        custom_init, custom_run_plus));\nbenchmarks.emplace_back(\n                    new doris::CustomBenchmark("custom_run_mod", 0,\n                        custom_init, custom_run_mod));\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684",(0,i.jsx)(n.code,{children:"init"}),"\u4E3A\u6BCF\u8F6E\u6D4B\u8BD5\u7684\u521D\u59CB\u5316\u6B65\u9AA4(\u4E0D\u4F1A\u8BA1\u5165\u8017\u65F6),\u5982\u679C\u7528\u6237\u6709\u9700\u8981\u521D\u59CB\u5316\u7684\u5BF9\u8C61\u5219\u53EF\u4EE5\u901A\u8FC7",(0,i.jsx)(n.code,{children:"CustomBenchmark"}),"\u7684\u6D3E\u751F\u7C7B\u6765\u5B9E\u73B0\u3002\n\u8FD0\u884C\u540E\u6709\u5982\u4E0B\u7ED3\u679C:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2021-08-30T10:29:35+08:00\nRunning ./benchmark_tool\nRun on (96 X 3100.75 MHz CPU s)\nCPU Caches:\n  L1 Data 32 KiB (x48)\n  L1 Instruction 32 KiB (x48)\n  L2 Unified 1024 KiB (x48)\n  L3 Unified 33792 KiB (x2)\nLoad Average: 0.55, 0.53, 0.39\n----------------------------------------------------------\nBenchmark                Time             CPU   Iterations\n----------------------------------------------------------\ncustom_run_plus      0.812 ms        0.812 ms          861\ncustom_run_mod        1.30 ms         1.30 ms          539\n"})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var c=r(667294);let i={},s=c.createContext(i);function l(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);