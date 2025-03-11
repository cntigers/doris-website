"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["862033"],{517902:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"query-acceleration/performance-tuning-overview/analysis-tools","title":"\u5206\u6790\u5DE5\u5177","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/performance-tuning-overview/analysis-tools.md","sourceDirName":"query-acceleration/performance-tuning-overview","slug":"/query-acceleration/performance-tuning-overview/analysis-tools","permalink":"/zh-CN/docs/query-acceleration/performance-tuning-overview/analysis-tools","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5206\u6790\u5DE5\u5177","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8BCA\u65AD\u5DE5\u5177","permalink":"/zh-CN/docs/query-acceleration/performance-tuning-overview/diagnostic-tools"},"next":{"title":"\u8C03\u4F18\u6D41\u7A0B","permalink":"/zh-CN/docs/query-acceleration/performance-tuning-overview/tuning-process"}}'),s=i("785893"),l=i("250065");let o={title:"\u5206\u6790\u5DE5\u5177",language:"zh-CN"},t=void 0,a={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"Doris Explain",id:"doris-explain",level:2},{value:"Doris Profile",id:"doris-profile",level:2},{value:"Profile \u6587\u4EF6\u7ED3\u6784",id:"profile-\u6587\u4EF6\u7ED3\u6784",level:3},{value:"Merged Profile",id:"merged-profile",level:3},{value:"Execution Profile",id:"execution-profile",level:3},{value:"PipelineTask \u6267\u884C\u65F6\u95F4",id:"pipelinetask-\u6267\u884C\u65F6\u95F4",level:3},{value:"\u7CFB\u7EDF\u7EA7\u6027\u80FD\u5DE5\u5177",id:"\u7CFB\u7EDF\u7EA7\u6027\u80FD\u5DE5\u5177",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0A\u8282",(0,s.jsx)(n.a,{href:"/zh-CN/docs/query-acceleration/performance-tuning-overview/diagnostic-tools",children:"\u8BCA\u65AD\u5DE5\u5177"}),"\u5DF2\u7ECF\u5E2E\u52A9\u4E1A\u52A1\u548C\u8FD0\u7EF4\u4EBA\u5458\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u6162 SQL\uFF0C\u672C\u7AE0\u8282\u5F00\u59CB\u4ECB\u7ECD\u5982\u4F55\u5BF9\u6162 SQL \u7684\u6027\u80FD\u74F6\u9888\u8FDB\u884C\u5206\u6790\uFF0C\u4EE5\u786E\u5B9A\u5177\u4F53\u6162\u5728 SQL \u6267\u884C\u7684\u54EA\u4E2A\u73AF\u8282\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4E00\u6761 SQL \u7684\u6267\u884C\u8FC7\u7A0B\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u8BA1\u5212\u751F\u6210\u548C\u8BA1\u5212\u6267\u884C\u4E24\u4E2A\u9636\u6BB5\uFF0C\u524D\u4E00\u90E8\u5206\u8D1F\u8D23\u751F\u6210\u6267\u884C\u8BA1\u5212\uFF0C\u540E\u4E00\u90E8\u5206\u8D1F\u8D23\u5177\u4F53\u8BA1\u5212\u7684\u6267\u884C\u3002\u8FD9\u4E24\u4E2A\u90E8\u5206\u51FA\u73B0\u95EE\u9898\u90FD\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u74F6\u9888\u7684\u53D1\u751F\u3002\u6BD4\u5982\u751F\u6210\u4E86\u5DEE\u8BA1\u5212\uFF0C\u90A3\u4E48\u5373\u4F7F\u518D\u4F18\u79C0\u7684\u6267\u884C\u5668\u4E5F\u4E0D\u53EF\u80FD\u83B7\u5F97\u5F88\u597D\u7684\u6027\u80FD\u3002\u540C\u6837\u4E00\u4E2A\u6B63\u786E\u7684\u8BA1\u5212\uFF0C\u5982\u679C\u76F8\u5E94\u7684\u6267\u884C\u624B\u6BB5\u4E0D\u5408\u9002\uFF0C\u4E5F\u5BB9\u6613\u4EA7\u751F\u6027\u80FD\u74F6\u9888\u3002\u6B64\u5916\uFF0C\u6267\u884C\u5668\u7684\u6027\u80FD\u548C\u5F53\u524D\u8FD0\u884C\u7684\u786C\u4EF6\u548C\u7CFB\u7EDF\u67B6\u6784\u6709\u7D27\u5BC6\u7684\u5173\u7CFB\uFF0C\u4E00\u4E9B\u57FA\u7840\u8BBE\u65BD\u7684\u7F3A\u9677\u6216\u8005\u914D\u7F6E\u4E0D\u6B63\u786E\u4E5F\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0A\u8FF0\u4E09\u7C7B\u95EE\u9898\u90FD\u9700\u8981\u826F\u597D\u7684\u5206\u6790\u5DE5\u5177\u7684\u652F\u6301\u3002\u57FA\u4E8E\u6B64\uFF0CDoris \u7CFB\u7EDF\u63D0\u4F9B\u4E86\u4E24\u4E2A\u6027\u80FD\u5206\u6790\u5DE5\u5177\u6765\u5206\u522B\u5206\u6790\u8BA1\u5212\u4EE5\u53CA\u6267\u884C\u7684\u6027\u80FD\u74F6\u9888\u3002\u53E6\u5916\u7CFB\u7EDF\u7EA7\u522B\u4E5F\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u6027\u80FD\u68C0\u6D4B\u5DE5\u5177\uFF0C\u8F85\u52A9\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\u3002\u4E0B\u9762\u5206\u522B\u5C31\u8FD9\u4E09\u4E2A\u65B9\u9762\u8FDB\u884C\u4ECB\u7ECD\uFF1A"}),"\n",(0,s.jsx)(n.h2,{id:"doris-explain",children:"Doris Explain"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u8BA1\u5212\u662F\u5BF9\u4E00\u6761 SQL \u5177\u4F53\u7684\u6267\u884C\u65B9\u5F0F\u548C\u6267\u884C\u8FC7\u7A0B\u7684\u63CF\u8FF0\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u4E24\u8868\u8FDE\u63A5\u7684 SQL\uFF0C\u6267\u884C\u8BA1\u5212\u4F1A\u5C55\u793A\u8FD9\u4E24\u5F20\u8868\u7684\u8BBF\u95EE\u65B9\u5F0F\u4FE1\u606F\u3001\u8FDE\u63A5\u65B9\u5F0F\u4FE1\u606F\uFF0C\u4EE5\u53CA\u8FDE\u63A5\u7684\u987A\u5E8F\u7B49\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86 Explain \u5DE5\u5177\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5C55\u793A\u4E00\u4E2A SQL \u7684\u6267\u884C\u8BA1\u5212\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u8FC7\u5BF9 Explain \u8F93\u51FA\u7684\u8BA1\u5212\u8FDB\u884C\u5206\u6790\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F7F\u7528\u8005\u5FEB\u901F\u5B9A\u4F4D\u8BA1\u5212\u5C42\u9762\u7684\u74F6\u9888\uFF0C\u4ECE\u800C\u9488\u5BF9\u4E0D\u540C\u7684\u60C5\u51B5\u8FDB\u884C\u8BA1\u5212\u5C42\u9762\u7684\u8C03\u4F18\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86\u591A\u79CD\u4E0D\u540C\u7C92\u5EA6\u7684 Explain \u5DE5\u5177\uFF0C\u5982 Explain Verbose\u3001Explain All Plan\u3001Explain Memo Plan\u3001Explain Shape Plan\uFF0C\u5206\u522B\u7528\u4E8E\u5C55\u793A\u6700\u7EC8\u7269\u7406\u8BA1\u5212\u3001\u5404\u9636\u6BB5\u903B\u8F91\u8BA1\u5212\u3001\u57FA\u4E8E\u6210\u672C\u4F18\u5316\u8FC7\u7A0B\u7684\u8BA1\u5212\u3001\u8BA1\u5212\u5F62\u6001\u7B49\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u8003\u6267\u884C\u8BA1\u5212 Explain\uFF0C\u4E86\u89E3\u5404\u79CD Explain \u7684\u4F7F\u7528\u65B9\u6CD5\u548C\u8F93\u51FA\u4FE1\u606F\u7684\u89E3\u91CA\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u5206\u6790 Explain \u7684\u8F93\u51FA\uFF0C\u4E1A\u52A1\u4EBA\u5458\u548C DBA \u5C31\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5F53\u524D\u8BA1\u5212\u7684\u6027\u80FD\u74F6\u9888\u3002\u4F8B\u5982\uFF0C\u901A\u8FC7\u5206\u6790\u6267\u884C\u8BA1\u5212\u53D1\u73B0 Filter \u6CA1\u6709\u4E0B\u63A8\u5230\u57FA\u8868\uFF0C\u5BFC\u81F4\u6CA1\u6709\u63D0\u524D\u8FC7\u6EE4\u6570\u636E\uFF0C\u4F7F\u5F97\u53C2\u4E0E\u8BA1\u7B97\u7684\u6570\u636E\u91CF\u8FC7\u591A\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002\u53C8\u5982\uFF0C\u4E24\u8868\u7684 Inner \u7B49\u503C\u8FDE\u63A5\u4E2D\uFF0C\u8FDE\u63A5\u6761\u4EF6\u4E00\u4FA7\u7684\u8FC7\u6EE4\u6761\u4EF6\u6CA1\u6709\u63A8\u5BFC\u5230\u53E6\u5916\u4E00\u4FA7\uFF0C\u5BFC\u81F4\u6CA1\u6709\u5BF9\u53E6\u4E00\u4FA7\u7684\u8868\u6570\u636E\u8FDB\u884C\u63D0\u524D\u8FC7\u6EE4\uFF0C\u4E5F\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u4E0D\u4F18\u3002\u6B64\u7C7B\u6027\u80FD\u74F6\u9888\u90FD\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Explain \u7684\u8F93\u51FA\u6765\u5B9A\u4F4D\u548C\u89E3\u51B3\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 Doris Explain \u8F93\u51FA\u8FDB\u884C\u8BA1\u5212\u5C42\u8C03\u4F18\u7684\u6848\u4F8B\u8BE6\u89C1",(0,s.jsx)(n.a,{href:"/zh-CN/docs/query-acceleration/tuning/tuning-plan/optimizing-table-schema",children:"\u8BA1\u5212\u8C03\u4F18"}),"\u7AE0\u8282\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"doris-profile",children:"Doris Profile"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0A\u8FF0 Explain \u5DE5\u5177\u63CF\u8FF0\u4E86\u4E00\u6761 SQL \u7684\u6267\u884C\u7684\u89C4\u5212\uFF0C\u6BD4\u5982\u4E00\u4E2A t1 \u548C t2 \u8868\u7684\u8FDE\u63A5\u64CD\u4F5C\u88AB\u89C4\u5212\u6210\u4E86 Hash Join \u7684\u6267\u884C\u65B9\u5F0F\uFF0C\u5E76\u4E14 t1 \u8868\u88AB\u89C4\u5212\u5728 build \u4FA7\uFF0Ct2 \u8868\u88AB\u89C4\u5212\u5728 probe \u4FA7\u3002\u5F53 SQL \u5177\u4F53\u6267\u884C\u65F6\uFF0C\u5982\u4F55\u4E86\u89E3\u6BCF\u4E2A\u5177\u4F53\u7684\u6267\u884C\u5206\u522B\u8017\u8D39\u591A\u5C11\u65F6\u95F4\uFF0C\u6BD4\u5982 build \u8017\u8D39\u591A\u5C11\u65F6\u95F4\uFF0Cprobe \u8017\u8D39\u591A\u5C11\u65F6\u95F4\uFF0Cprofile \u5DE5\u5177\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u6267\u884C\u4FE1\u606F\u4F9B\u6027\u80FD\u5206\u6790\u548C\u8C03\u4F18\u4F7F\u7528\u3002\u4E0B\u9762\u90E8\u5206\u5148\u6574\u4F53\u4ECB\u7ECD Profile \u7684\u6587\u4EF6\u7ED3\u6784\uFF0C\u7136\u540E\u5206\u522B\u4ECB\u7ECD Merged Profile\uFF0CExecution Profile \u4EE5\u53CA PipelineTask \u7684\u6267\u884C\u65F6\u95F4\u542B\u4E49\uFF1A"}),"\n",(0,s.jsx)(n.h3,{id:"profile-\u6587\u4EF6\u7ED3\u6784",children:"Profile \u6587\u4EF6\u7ED3\u6784"}),"\n",(0,s.jsx)(n.p,{children:"Profile \u6587\u4EF6\u4E2D\u5305\u542B\u51E0\u4E2A\u4E3B\u8981\u7684\u90E8\u5206\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u67E5\u8BE2\u57FA\u672C\u4FE1\u606F\uFF1A\u5305\u62EC ID\uFF0C\u65F6\u95F4\uFF0C\u6570\u636E\u5E93\u7B49\u3002"}),"\n",(0,s.jsx)(n.li,{children:"SQL \u8BED\u53E5\u4EE5\u53CA\u6267\u884C\u8BA1\u5212\u3002"}),"\n",(0,s.jsx)(n.li,{children:"FE \u7684\u8017\u65F6\uFF08Plan Time\uFF0CSchedule Time \u7B49\uFF09\u3002"}),"\n",(0,s.jsx)(n.li,{children:"BE \u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u5404\u4E2A operator \u7684\u6267\u884C\u8017\u65F6\uFF08\u5305\u62EC Merged Profile \u548C Execution  Profile\uFF09\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u4FA7\u7684\u8BE6\u7EC6\u4FE1\u606F\u4E3B\u8981\u5305\u542B\u5728\u6700\u540E\u4E00\u90E8\u5206\uFF0C\u63A5\u4E0B\u6765\u4E3B\u8981\u4ECB\u7ECD Profile \u80FD\u591F\u63D0\u4F9B\u54EA\u4E9B\u4FE1\u606F\u4F9B\u6027\u80FD\u5206\u6790\u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"merged-profile",children:"Merged Profile"}),"\n",(0,s.jsx)(n.p,{children:"\u4E3A\u4E86\u5E2E\u52A9\u7528\u6237\u66F4\u51C6\u786E\u7684\u5206\u6790\u6027\u80FD\u74F6\u9888\uFF0CDoris \u63D0\u4F9B\u4E86\u5404\u4E2A operator \u805A\u5408\u540E\u7684 profile \u7ED3\u679C\u3002\u4EE5 EXCHANGE_OPERATOR \u4E3A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXCHANGE_OPERATOR  (id=4):\n    -  BlocksProduced:  sum  0,  avg  0,  max  0,  min  0\n    -  CloseTime:  avg  34.133us,  max  38.287us,  min  29.979us\n    -  ExecTime:  avg  700.357us,  max  706.351us,  min  694.364us\n    -  InitTime:  avg  648.104us,  max  648.604us,  min  647.605us\n    -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n    -  PeakMemoryUsage:  sum  0.00  ,  avg  0.00  ,  max  0.00  ,  min  0.00  \n    -  OpenTime:  avg  4.541us,  max  5.943us,  min  3.139us\n    -  ProjectionTime:  avg  0ns,  max  0ns,  min  0ns\n    -  RowsProduced:  sum  0,  avg  0,  max  0,  min  0\n    -  WaitForDependencyTime:  avg  0ns,  max  0ns,  min  0ns\n    -  WaitForData0:  avg  9.434ms,  max  9.476ms,  min  9.391ms\n"})}),"\n",(0,s.jsx)(n.p,{children:"Merged Profile \u5BF9\u6BCF\u4E2A operator \u7684\u6838\u5FC3\u6307\u6807\u505A\u4E86\u5408\u5E76\uFF0C\u6838\u5FC3\u6307\u6807\u548C\u542B\u4E49\u5305\u62EC\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6307\u6807\u540D\u79F0"}),(0,s.jsx)(n.th,{children:"\u6307\u6807\u542B\u4E49"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BlocksProduced"}),(0,s.jsx)(n.td,{children:"\u4EA7\u751F\u7684 Data Block \u6570\u91CF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CloseTime"}),(0,s.jsx)(n.td,{children:"Operator \u5728 close \u9636\u6BB5\u7684\u8017\u65F6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ExecTime"}),(0,s.jsx)(n.td,{children:"Operator \u5728\u5404\u4E2A\u9636\u6BB5\u6267\u884C\u7684\u603B\u8017\u65F6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"InitTime"}),(0,s.jsx)(n.td,{children:"Operator \u5728 Init \u9636\u6BB5\u7684\u8017\u65F6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MemoryUsage"}),(0,s.jsx)(n.td,{children:"Operator \u5728\u6267\u884C\u9636\u6BB5\u7684\u5185\u5B58\u7528\u91CF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OpenTime"}),(0,s.jsx)(n.td,{children:"Operator \u5728 Open \u9636\u6BB5\u7684\u8017\u65F6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ProjectionTime"}),(0,s.jsx)(n.td,{children:"Operator \u5728\u505A projection \u7684\u8017\u65F6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RowsProduced"}),(0,s.jsx)(n.td,{children:"Operator \u8FD4\u56DE\u7684\u884C\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WaitForDependencyTime"}),(0,s.jsx)(n.td,{children:"Operator \u7B49\u5F85\u81EA\u8EAB\u6267\u884C\u7684\u6761\u4EF6\u4F9D\u8D56\u7684\u65F6\u95F4"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Doris \u4E2D\uFF0C\u6BCF\u4E2A operator \u6839\u636E\u7528\u6237\u8BBE\u7F6E\u7684\u5E76\u53D1\u6570\u5E76\u53D1\u6267\u884C\uFF0C\u6240\u4EE5 Merged Profile \u5BF9\u6BCF\u4E2A\u6267\u884C\u5E76\u53D1\u53C8\u8BA1\u7B97\u51FA\u4E86\u6BCF\u4E2A\u6307\u6807\u7684 Max\uFF0CAvg \u548C Min \u7684\u503C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4E2D WaitForDependencyTime \u662F\u6BCF\u4E2A Operator \u4E0D\u540C\u7684\uFF0C\u56E0\u4E3A\u6BCF\u4E2A operator \u6267\u884C\u7684\u6761\u4EF6\u4F9D\u8D56\u4E0D\u540C\uFF0C\u4F8B\u5982\u5728\u8FD9\u4E2A\u4F8B\u5B50\u7684 EXCHANGE_OPERATOR \u4E2D\uFF0C\u6761\u4EF6\u4F9D\u8D56\u662F\u6709\u6570\u636E\u88AB\u4E0A\u6E38\u7684\u7B97\u5B50\u901A\u8FC7 rpc \u53D1\u9001\u8FC7\u6765\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684 WaitForDependencyTime \u5176\u5B9E\u5C31\u662F\u5728\u7B49\u5F85\u4E0A\u6E38\u7B97\u5B50\u53D1\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"execution-profile",children:"Execution Profile"}),"\n",(0,s.jsx)(n.p,{children:"\u533A\u522B\u4E8E Merged Profile\uFF0CExecution Profile \u5C55\u793A\u7684\u662F\u5177\u4F53\u7684\u67D0\u4E2A\u5E76\u53D1\u4E2D\u7684\u8BE6\u7EC6\u6307\u6807\uFF0C\u4EE5 id=4 \u7684\u8FD9\u4E2A exchange operator \u4E3A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXCHANGE_OPERATOR  (id=4):(ExecTime:  706.351us)\n      -  BlocksProduced:  0\n      -  CloseTime:  38.287us\n      -  DataArrivalWaitTime:  0ns\n      -  DecompressBytes:  0.00  \n      -  DecompressTime:  0ns\n      -  DeserializeRowBatchTimer:  0ns\n      -  ExecTime:  706.351us\n      -  FirstBatchArrivalWaitTime:  0ns\n      -  InitTime:  647.605us\n      -  LocalBytesReceived:  0.00  \n      -  MemoryUsage:  \n      -  PeakMemoryUsage:  0.00  \n      -  OpenTime:  5.943us\n      -  ProjectionTime:  0ns\n      -  RemoteBytesReceived:  0.00  \n      -  RowsProduced:  0\n      -  SendersBlockedTotalTimer(*):  0ns\n      -  WaitForDependencyTime:  0ns\n      -  WaitForData0:  9.476ms\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8FD9\u4E2A profile \u4E2D\uFF0C\u4F8B\u5982 LocalBytesReceived \u662F exchange operator \u7279\u5316\u7684\u4E00\u4E2A\u6307\u6807\uFF0C\u5176\u4ED6\u7684 operator \u4E2D\u6CA1\u6709\uFF0C\u6240\u4EE5\u6CA1\u5728 Merged Profile \u4E2D\u5305\u542B\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"pipelinetask-\u6267\u884C\u65F6\u95F4",children:"PipelineTask \u6267\u884C\u65F6\u95F4"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u4E00\u4E2A PipelineTask \u7531\u591A\u4E2A operator \u7EC4\u6210\u3002\u5206\u6790\u4E00\u4E2A PipelineTask \u7684\u6267\u884C\u8017\u65F6\u7684\u65F6\u5019\uFF0C\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u51E0\u4E2A\u65B9\u9762\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"ExecuteTime\uFF1A\u6574\u4E2A PipelineTask \u7684\u5B9E\u9645\u6267\u884C\u65F6\u95F4\uFF0C\u7EA6\u7B49\u4E8E\u8FD9\u4E2A task \u4E2D\u6240\u6709 operator \u7684 ExecTime \u76F8\u52A0"}),"\n",(0,s.jsx)(n.li,{children:"WaitWorkerTime\uFF1Atask \u7B49\u5F85\u6267\u884C worker \u7684\u65F6\u95F4\u3002\u5F53 task \u5904\u4E8E runnable \u72B6\u6001\u65F6\uFF0C\u4ED6\u8981\u7B49\u5F85\u4E00\u4E2A\u7A7A\u95F2 worker \u6765\u6267\u884C\uFF0C\u8FD9\u4E2A\u8017\u65F6\u4E3B\u8981\u53D6\u51B3\u4E8E\u96C6\u7FA4\u8D1F\u8F7D\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7B49\u5F85\u6267\u884C\u4F9D\u8D56\u7684\u65F6\u95F4\uFF1A\u4E00\u4E2A task \u53EF\u4EE5\u6267\u884C\u7684\u4F9D\u8D56\u6761\u4EF6\u662F\u6BCF\u4E2A operator \u7684 dependency \u5168\u90E8\u6EE1\u8DB3\u6267\u884C\u6761\u4EF6\uFF0C\u800C task \u7B49\u5F85\u6267\u884C\u4F9D\u8D56\u7684\u65F6\u95F4\u5C31\u662F\u5C06\u8FD9\u4E9B\u4F9D\u8D56\u7684\u7B49\u5F85\u65F6\u95F4\u76F8\u52A0\u3002\u4F8B\u5982\u7B80\u5316\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684\u5176\u4E2D\u4E00\u4E2A task\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PipelineTask  (index=1):(ExecTime:  4.773ms)\n  -  ExecuteTime:  1.656ms\n      -  CloseTime:  90.402us\n      -  GetBlockTime:  11.235us\n      -  OpenTime:  1.448ms\n      -  PrepareTime:  1.555ms\n      -  SinkTime:  14.228us\n  -  WaitWorkerTime:  63.868us\n    DATA_STREAM_SINK_OPERATOR  (id=8,dst_id=8):(ExecTime:  1.688ms)\n      -  WaitForDependencyTime:  0ns\n          -  WaitForBroadcastBuffer:  0ns\n          -  WaitForRpcBufferQueue:  0ns\n    AGGREGATION_OPERATOR  (id=7  ,  nereids_id=648):(ExecTime:  398.12us)\n      -  WaitForDependency[AGGREGATION_OPERATOR_DEPENDENCY]Time:  10.495ms\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u4E2A task \u5305\u542B\u4E86\uFF08DATA_STREAM_SINK_OPERATOR - AGGREGATION_OPERATOR\uFF09\u4E24\u4E2A operator\uFF0C\u5176\u4E2D DATA_STREAM_SINK_OPERATOR \u6709\u4E24\u4E2A\u4F9D\u8D56\uFF08WaitForBroadcastBuffer \u548C WaitForRpcBufferQueue\uFF09\uFF0CAGGREGATION_OPERATOR \u6709\u4E00\u4E2A\u4F9D\u8D56\uFF08AGGREGATION_OPERATOR_DEPENDENCY\uFF09\uFF0C\u6240\u4EE5\u5F53\u524D task \u7684\u8017\u65F6\u5206\u5E03\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6267\u884C\u603B\u65F6\u95F4\uFF1A1.656ms\uFF08\u7EA6\u7B49\u4E8E\u4E24\u4E2A operator \u7684 ExecTime \u603B\u548C\uFF09"}),"\n",(0,s.jsx)(n.li,{children:"\u7B49\u5F85 Worker \u7684\u65F6\u95F4\uFF1A63.868us\uFF08\u8BF4\u660E\u5F53\u524D\u96C6\u7FA4\u8D1F\u8F7D\u4E0D\u9AD8\uFF0Ctask \u5C31\u7EEA\u4EE5\u540E\u7ACB\u5373\u5C31\u6709 worker \u6765\u6267\u884C\uFF09"}),"\n",(0,s.jsx)(n.li,{children:"\u7B49\u5F85\u6267\u884C\u4F9D\u8D56\u7684\u65F6\u95F4\uFF08WaitForBroadcastBuffer + WaitForRpcBufferQueue + WaitForDependency[AGGREGATION_OPERATOR_DEPENDENCY]Time\uFF09\uFF1A10.495ms\u3002\u5F53\u524D task \u7684\u6240\u6709 dependency \u76F8\u52A0\u5F97\u5230\u603B\u7684\u7B49\u5F85\u65F6\u95F4\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 Profile \u8FDB\u884C\u6267\u884C\u5C42\u8C03\u4F18\u7684\u6848\u4F8B\u8BE6\u89C1",(0,s.jsx)(n.a,{href:"/zh-CN/docs/query-acceleration/tuning/tuning-execution/adjustment-of-runtimefilter-wait-time",children:"\u6267\u884C\u8C03\u4F18"}),"\u7AE0\u8282\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7CFB\u7EDF\u7EA7\u6027\u80FD\u5DE5\u5177",children:"\u7CFB\u7EDF\u7EA7\u6027\u80FD\u5DE5\u5177"}),"\n",(0,s.jsx)(n.p,{children:"\u5E38\u7528\u7684\u7CFB\u7EDF\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7528\u6765\u8F85\u52A9\u5B9A\u4F4D\u6267\u884C\u671F\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u6BD4\u5982\u5E38\u7528\u7684 Linux \u4E0B top / free/ perf/ sar/ iostats \u7B49\uFF0C\u90FD\u53EF\u4EE5\u7528\u6765\u89C2\u5BDF SQL \u8FD0\u884C\u65F6\u7CFB\u7EDF CPU/ MEM / IO / NETWORK \u72B6\u6001\uFF0C\u4EE5\u8F85\u52A9\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(n.p,{children:"\u597D\u7528\u7684\u6027\u80FD\u5206\u6790\u5DE5\u5177\u662F\u5FEB\u901F\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\u7684\u91CD\u8981\u524D\u63D0\u3002Doris \u63D0\u4F9B\u4E86 Explain \u548C Profile\uFF0C\u4E3A\u5206\u6790\u6267\u884C\u8BA1\u5212\u95EE\u9898\u548C\u6267\u884C\u671F\u54EA\u4E2A\u64CD\u4F5C\u8017\u65F6\u9AD8\u7684\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u5DE5\u5177\u652F\u6491\u3002\u540C\u65F6\uFF0C\u719F\u7EC3\u4F7F\u7528\u7CFB\u7EDF\u7EA7\u522B\u7684\u5206\u6790\u5DE5\u5177\u4E5F\u4F1A\u5BF9\u6027\u80FD\u74F6\u9888\u7684\u5B9A\u4F4D\u8D77\u5230\u5F88\u597D\u7684\u8F85\u52A9\u4F5C\u7528\u3002"})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return o}});var r=i(667294);let s={},l=r.createContext(s);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);