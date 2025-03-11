"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["996211"],{591906:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>t});var r=JSON.parse('{"id":"table-design/column-compression","title":"\u6570\u636E\u538B\u7F29","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/column-compression.md","sourceDirName":"table-design","slug":"/table-design/column-compression","permalink":"/zh-CN/docs/dev/table-design/column-compression","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6570\u636E\u538B\u7F29","language":"zh_CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u7C7B\u578B","permalink":"/zh-CN/docs/dev/table-design/data-type"},"next":{"title":"\u7D22\u5F15\u6982\u8FF0","permalink":"/zh-CN/docs/dev/table-design/index/index-overview"}}'),d=s("785893"),l=s("250065");let i={title:"\u6570\u636E\u538B\u7F29",language:"zh_CN"},t=void 0,c={},h=[{value:"\u4E3A\u4EC0\u4E48\u9700\u8981\u538B\u7F29",id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u538B\u7F29",level:2},{value:"\u652F\u6301\u7684\u538B\u7F29\u7B97\u6CD5",id:"\u652F\u6301\u7684\u538B\u7F29\u7B97\u6CD5",level:2},{value:"\u538B\u7F29\u539F\u7406",id:"\u538B\u7F29\u539F\u7406",level:2},{value:"\u5F71\u54CD\u538B\u7F29\u6548\u679C\u7684\u56E0\u7D20",id:"\u5F71\u54CD\u538B\u7F29\u6548\u679C\u7684\u56E0\u7D20",level:2},{value:"\u6570\u636E\u7684\u5E8F\u5217\u6027\uFF08Order of Data\uFF09",id:"\u6570\u636E\u7684\u5E8F\u5217\u6027order-of-data",level:3},{value:"\u6570\u636E\u7684\u91CD\u590D\u5EA6\uFF08Data Redundancy\uFF09",id:"\u6570\u636E\u7684\u91CD\u590D\u5EA6data-redundancy",level:3},{value:"\u6570\u636E\u7684\u7C7B\u578B\uFF08Data Type\uFF09",id:"\u6570\u636E\u7684\u7C7B\u578Bdata-type",level:3},{value:"\u5217\u7684\u957F\u5EA6\uFF08Column Length\uFF09",id:"\u5217\u7684\u957F\u5EA6column-length",level:3},{value:"\u7A7A\u503C\uFF08Nulls\uFF09",id:"\u7A7A\u503Cnulls",level:3},{value:"\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u7B97\u6CD5",id:"\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u7B97\u6CD5",level:2},{value:"\u5728 Doris \u4E2D\u8BBE\u7F6E\u538B\u7F29",id:"\u5728-doris-\u4E2D\u8BBE\u7F6E\u538B\u7F29",level:2}];function o(n){let e={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:["Doris \u91C7\u7528 ",(0,d.jsx)(e.strong,{children:"\u5217\u5F0F\u5B58\u50A8"})," \u6A21\u578B\u6765\u7EC4\u7EC7\u548C\u5B58\u50A8\u6570\u636E\uFF0C\u8FD9\u79CD\u5B58\u50A8\u6A21\u578B\u7279\u522B\u9002\u5408\u5206\u6790\u578B\u8D1F\u8F7D\uFF0C\u80FD\u591F\u663E\u8457\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002\u5728\u5217\u5F0F\u5B58\u50A8\u4E2D\uFF0C\u8868\u7684\u6BCF\u4E00\u5217\u4F1A\u72EC\u7ACB\u5B58\u50A8\uFF0C\u8FD9\u4E3A\u538B\u7F29\u6280\u672F\u7684\u5E94\u7528\u63D0\u4F9B\u4E86\u4FBF\u5229\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u5B58\u50A8\u6548\u7387\u3002Doris \u63D0\u4F9B\u591A\u79CD\u538B\u7F29\u7B97\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5DE5\u4F5C\u8D1F\u8F7D\u7684\u9700\u6C42\uFF0C\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u65B9\u5F0F\u6765\u4F18\u5316\u5B58\u50A8\u548C\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u538B\u7F29",children:"\u4E3A\u4EC0\u4E48\u9700\u8981\u538B\u7F29"}),"\n",(0,d.jsx)(e.p,{children:"\u5728 Doris \u4E2D\uFF0C\u6570\u636E\u538B\u7F29\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u4E2A\u6838\u5FC3\u76EE\u6807\uFF1A"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u63D0\u5347\u5B58\u50A8\u6548\u7387"}),"\n\u538B\u7F29\u53EF\u4EE5\u663E\u8457\u51CF\u5C11\u6570\u636E\u5B58\u50A8\u6240\u9700\u7684\u78C1\u76D8\u7A7A\u95F4\uFF0C\u652F\u6301\u5728\u540C\u6837\u7684\u7269\u7406\u8D44\u6E90\u4E0A\u5B58\u50A8\u66F4\u591A\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u4F18\u5316\u6027\u80FD"}),"\n\u538B\u7F29\u540E\u7684\u6570\u636E\u4F53\u79EF\u66F4\u5C0F\uFF0C\u67E5\u8BE2\u65F6\u9700\u8981\u7684 I/O \u64CD\u4F5C\u66F4\u5C11\uFF0C\u4ECE\u800C\u52A0\u901F\u67E5\u8BE2\u54CD\u5E94\u65F6\u95F4\u3002\u73B0\u4EE3\u538B\u7F29\u7B97\u6CD5\u7684\u89E3\u538B\u901F\u5EA6\u901A\u5E38\u975E\u5E38\u5FEB\uFF0C\u80FD\u591F\u5728\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u7684\u540C\u65F6\u63D0\u5347\u8BFB\u53D6\u6548\u7387\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u652F\u6301\u7684\u538B\u7F29\u7B97\u6CD5",children:"\u652F\u6301\u7684\u538B\u7F29\u7B97\u6CD5"}),"\n",(0,d.jsx)(e.p,{children:"Doris \u652F\u6301\u591A\u79CD\u538B\u7F29\u7B97\u6CD5\uFF0C\u6BCF\u79CD\u7B97\u6CD5\u5728\u538B\u7F29\u7387\u548C\u89E3\u538B\u901F\u5EA6\u4E4B\u95F4\u6709\u4E0D\u540C\u7684\u6743\u8861\uFF0C\u53EF\u6839\u636E\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u7B97\u6CD5\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u538B\u7F29\u7C7B\u578B"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u7279\u70B9"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u9002\u7528\u573A\u666F"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u65E0\u538B\u7F29"})}),(0,d.jsx)(e.td,{children:"- \u6570\u636E\u4E0D\u8FDB\u884C\u538B\u7F29\u3002"}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u538B\u7F29\u7684\u573A\u666F\uFF0C\u4F8B\u5982\u6570\u636E\u5DF2\u7ECF\u88AB\u538B\u7F29\u6216\u8005\u5B58\u50A8\u7A7A\u95F4\u4E0D\u662F\u95EE\u9898\u7684\u60C5\u51B5\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"LZ4"})}),(0,d.jsxs)(e.td,{children:["- \u538B\u7F29\u548C\u89E3\u538B\u901F\u5EA6\u975E\u5E38\u5FEB\u3002",(0,d.jsx)(e.br,{})," - \u538B\u7F29\u6BD4\u9002\u4E2D\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u5BF9\u89E3\u538B\u901F\u5EA6\u8981\u6C42\u9AD8\u7684\u573A\u666F\uFF0C\u5982\u5B9E\u65F6\u67E5\u8BE2\u6216\u9AD8\u5E76\u53D1\u8D1F\u8F7D\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"LZ4F (LZ4 \u6846\u67B6)"})}),(0,d.jsxs)(e.td,{children:["- LZ4 \u7684\u6269\u5C55\u7248\u672C\uFF0C\u652F\u6301\u66F4\u7075\u6D3B\u7684\u538B\u7F29\u914D\u7F6E\u3002",(0,d.jsx)(e.br,{})," - \u901F\u5EA6\u5FEB\uFF0C\u538B\u7F29\u6BD4\u9002\u4E2D\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u9700\u8981\u5FEB\u901F\u538B\u7F29\u5E76\u5BF9\u914D\u7F6E\u6709\u7EC6\u7C92\u5EA6\u63A7\u5236\u7684\u573A\u666F\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"LZ4HC (LZ4 \u9AD8\u538B\u7F29)"})}),(0,d.jsxs)(e.td,{children:["- \u76F8\u6BD4 LZ4 \u6709\u66F4\u9AD8\u7684\u538B\u7F29\u6BD4\uFF0C\u4F46\u538B\u7F29\u901F\u5EA6\u8F83\u6162\u3002",(0,d.jsx)(e.br,{})," - \u89E3\u538B\u901F\u5EA6\u4E0E LZ4 \u76F8\u5F53\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u9700\u8981\u66F4\u9AD8\u538B\u7F29\u6BD4\u7684\u573A\u666F\uFF0C\u540C\u65F6\u4ECD\u7136\u5173\u6CE8\u89E3\u538B\u901F\u5EA6\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"ZSTD (Zstandard)"})}),(0,d.jsxs)(e.td,{children:["- \u9AD8\u538B\u7F29\u6BD4\uFF0C\u652F\u6301\u7075\u6D3B\u7684\u538B\u7F29\u7EA7\u522B\u8C03\u6574\u3002",(0,d.jsx)(e.br,{})," - \u5373\u4F7F\u5728\u9AD8\u538B\u7F29\u6BD4\u4E0B\uFF0C\u89E3\u538B\u901F\u5EA6\u4ECD\u7136\u5F88\u5FEB\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u5BF9\u5B58\u50A8\u6548\u7387\u8981\u6C42\u8F83\u9AD8\u4E14\u9700\u8981\u5E73\u8861\u67E5\u8BE2\u6027\u80FD\u7684\u573A\u666F\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"Snappy"})}),(0,d.jsxs)(e.td,{children:["- \u8BBE\u8BA1\u91CD\u70B9\u662F\u5FEB\u901F\u89E3\u538B\u3002",(0,d.jsx)(e.br,{})," - \u538B\u7F29\u6BD4\u9002\u4E2D\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u5BF9\u89E3\u538B\u901F\u5EA6\u8981\u6C42\u9AD8\u4E14\u5BF9 CPU \u6D88\u8017\u4F4E\u7684\u573A\u666F\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"Zlib"})}),(0,d.jsxs)(e.td,{children:["- \u63D0\u4F9B\u826F\u597D\u7684\u538B\u7F29\u6BD4\u4E0E\u901F\u5EA6\u5E73\u8861\u3002",(0,d.jsx)(e.br,{})," - \u4E0E\u5176\u4ED6\u7B97\u6CD5\u76F8\u6BD4\uFF0C\u538B\u7F29\u548C\u89E3\u538B\u901F\u5EA6\u8F83\u6162\uFF0C\u4F46\u538B\u7F29\u6BD4\u66F4\u9AD8\u3002"]}),(0,d.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u5BF9\u5B58\u50A8\u6548\u7387\u8981\u6C42\u8F83\u9AD8\u4E14\u5BF9\u89E3\u538B\u901F\u5EA6\u4E0D\u654F\u611F\u7684\u573A\u666F\uFF0C\u5982\u5F52\u6863\u548C\u51B7\u6570\u636E\u5B58\u50A8\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u538B\u7F29\u539F\u7406",children:"\u538B\u7F29\u539F\u7406"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6309\u5217\u538B\u7F29"}),"\n\u7531\u4E8E\u91C7\u7528\u5217\u5F0F\u5B58\u50A8\uFF0CDoris \u80FD\u591F\u5BF9\u8868\u4E2D\u6BCF\u4E00\u5217\u72EC\u7ACB\u538B\u7F29\u3002\u8FD9\u79CD\u65B9\u5F0F\u63D0\u5347\u4E86\u538B\u7F29\u6548\u7387\uFF0C\u56E0\u4E3A\u540C\u4E00\u5217\u7684\u6570\u636E\u5F80\u5F80\u5177\u6709\u76F8\u4F3C\u7684\u5206\u5E03\u7279\u6027\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u538B\u7F29\u524D\u7684\u7F16\u7801"}),"\n\u5728\u538B\u7F29\u6570\u636E\u4E4B\u524D\uFF0CDoris \u4F1A\u5BF9\u5217\u6570\u636E\u8FDB\u884C\u7F16\u7801\uFF08\u4F8B\u5982",(0,d.jsx)(e.strong,{children:"\u5B57\u5178\u7F16\u7801"}),"\u3001",(0,d.jsx)(e.strong,{children:"\u6E38\u7A0B\u7F16\u7801"}),"\u7B49\uFF09\uFF0C\u5C06\u6570\u636E\u8F6C\u6362\u4E3A\u66F4\u9002\u5408\u538B\u7F29\u7684\u5F62\u5F0F\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u63D0\u5347\u538B\u7F29\u6548\u7387\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6309\u9875\u538B\u7F29"}),"\nDoris \u91C7\u7528 ",(0,d.jsx)(e.strong,{children:"\u9875\uFF08Page\uFF09"})," \u7EA7\u522B\u7684\u538B\u7F29\u7B56\u7565\u3002\u6BCF\u4E00\u5217\u7684\u6570\u636E\u4F1A\u88AB\u5206\u6210\u591A\u4E2A\u9875\uFF0C\u6BCF\u4E2A\u9875\u5185\u7684\u6570\u636E\u4F1A\u72EC\u7ACB\u8FDB\u884C\u538B\u7F29\u3002\u901A\u8FC7\u6309\u9875\u538B\u7F29\uFF0CDoris \u80FD\u591F\u9AD8\u6548\u5730\u5904\u7406\u5927\u89C4\u6A21\u6570\u636E\u96C6\uFF0C\u540C\u65F6\u4FDD\u8BC1\u9AD8\u6548\u7684\u538B\u7F29\u7387\u548C\u89E3\u538B\u6027\u80FD\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u53EF\u914D\u7F6E\u7684\u538B\u7F29\u7B56\u7565"}),"\n\u7528\u6237\u53EF\u4EE5\u5728\u521B\u5EFA\u8868\u65F6\u6307\u5B9A\u9700\u8981\u4F7F\u7528\u7684\u538B\u7F29\u7B97\u6CD5\u3002\u8FD9\u79CD\u7075\u6D3B\u6027\u4F7F\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u5DE5\u4F5C\u8D1F\u8F7D\uFF0C\u5728\u538B\u7F29\u6548\u7387\u548C\u6027\u80FD\u4E4B\u95F4\u505A\u51FA\u6700\u4F73\u9009\u62E9\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u5F71\u54CD\u538B\u7F29\u6548\u679C\u7684\u56E0\u7D20",children:"\u5F71\u54CD\u538B\u7F29\u6548\u679C\u7684\u56E0\u7D20"}),"\n",(0,d.jsx)(e.p,{children:"\u867D\u7136\u4E0D\u540C\u7684\u538B\u7F29\u7B97\u6CD5\u6709\u4E0D\u540C\u7684\u4F18\u7F3A\u70B9\uFF0C\u4F46\u538B\u7F29\u7684\u6548\u679C\u4E0D\u4EC5\u4EC5\u4F9D\u8D56\u4E8E\u9009\u62E9\u7684\u7B97\u6CD5\uFF0C\u8FD8\u53D7\u4EE5\u4E0B\u56E0\u7D20\u7684\u5F71\u54CD\uFF1A"}),"\n",(0,d.jsx)(e.h3,{id:"\u6570\u636E\u7684\u5E8F\u5217\u6027order-of-data",children:"\u6570\u636E\u7684\u5E8F\u5217\u6027\uFF08Order of Data\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"\u6570\u636E\u7684\u987A\u5E8F\u5BF9\u4E8E\u538B\u7F29\u6548\u679C\u6709\u91CD\u8981\u5F71\u54CD\u3002\u5BF9\u4E8E\u5177\u6709\u9AD8\u5E8F\u5217\u6027\u7684\u5217\uFF08\u4F8B\u5982\u65F6\u95F4\u6233\u6216\u8FDE\u7EED\u6570\u503C\u5217\uFF09\uFF0C\u538B\u7F29\u7B97\u6CD5\u901A\u5E38\u80FD\u591F\u83B7\u5F97\u66F4\u597D\u7684\u6548\u679C\u3002\u6570\u636E\u7684\u987A\u5E8F\u8D8A\u6709\u89C4\u5F8B\uFF0C\u538B\u7F29\u7B97\u6CD5\u5728\u538B\u7F29\u65F6\u53EF\u4EE5\u8BC6\u522B\u51FA\u66F4\u591A\u7684\u91CD\u590D\u6A21\u5F0F\uFF0C\u4ECE\u800C\u63D0\u5347\u538B\u7F29\u6BD4\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u6570\u636E\u7684\u91CD\u590D\u5EA6data-redundancy",children:"\u6570\u636E\u7684\u91CD\u590D\u5EA6\uFF08Data Redundancy\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"\u6570\u636E\u5217\u4E2D\u91CD\u590D\u503C\u8D8A\u591A\uFF0C\u538B\u7F29\u6548\u679C\u8D8A\u660E\u663E\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528\u5B57\u5178\u7F16\u7801\u5BF9\u91CD\u590D\u503C\u8FDB\u884C\u7F16\u7801\u80FD\u591F\u663E\u8457\u964D\u4F4E\u5B58\u50A8\u7A7A\u95F4\u3002\u800C\u5BF9\u4E8E\u6CA1\u6709\u660E\u663E\u91CD\u590D\u7684\u6570\u636E\u5217\uFF0C\u538B\u7F29\u6548\u679C\u53EF\u80FD\u4E0D\u5982\u9884\u671F\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u6570\u636E\u7684\u7C7B\u578Bdata-type",children:"\u6570\u636E\u7684\u7C7B\u578B\uFF08Data Type\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"\u6570\u636E\u7684\u7C7B\u578B\u4E5F\u4F1A\u5F71\u54CD\u538B\u7F29\u6548\u679C\u3002\u901A\u5E38\uFF0C\u6570\u503C\u7C7B\u578B\u7684\u6570\u636E\uFF08\u5982\u6574\u6570\u548C\u6D6E\u70B9\u6570\uFF09\u6BD4\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E\u66F4\u5BB9\u6613\u538B\u7F29\u3002\u5BF9\u4E8E\u6D6E\u52A8\u8303\u56F4\u8F83\u5927\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u538B\u7F29\u7B97\u6CD5\u7684\u6548\u679C\u53EF\u80FD\u4F1A\u53D7\u5230\u5F71\u54CD\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u5217\u7684\u957F\u5EA6column-length",children:"\u5217\u7684\u957F\u5EA6\uFF08Column Length\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"\u5217\u4E2D\u6570\u636E\u7684\u957F\u5EA6\u4E5F\u4F1A\u5F71\u54CD\u538B\u7F29\u6548\u679C\u3002\u8F83\u77ED\u7684\u5217\u901A\u5E38\u6BD4\u957F\u5217\u66F4\u5BB9\u6613\u538B\u7F29\uFF0C\u56E0\u4E3A\u538B\u7F29\u7B97\u6CD5\u5728\u8F83\u77ED\u6570\u636E\u5757\u4E0A\u80FD\u591F\u66F4\u9AD8\u6548\u5730\u627E\u5230\u91CD\u590D\u6A21\u5F0F\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u7A7A\u503Cnulls",children:"\u7A7A\u503C\uFF08Nulls\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"\u5217\u4E2D\u7A7A\u503C\u7684\u6BD4\u4F8B\u8F83\u9AD8\u65F6\uFF0C\u538B\u7F29\u7B97\u6CD5\u53EF\u80FD\u4F1A\u66F4\u6709\u6548\uFF0C\u56E0\u4E3A\u538B\u7F29\u7B97\u6CD5\u4F1A\u5C06\u8FD9\u4E9B\u7A7A\u503C\u4F5C\u4E3A\u4E00\u79CD\u7279\u6B8A\u7684\u6A21\u5F0F\u8FDB\u884C\u7F16\u7801\uFF0C\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u7B97\u6CD5",children:"\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u7B97\u6CD5"}),"\n",(0,d.jsx)(e.p,{children:"\u9009\u62E9\u5408\u9002\u7684\u538B\u7F29\u7B97\u6CD5\u9700\u6839\u636E\u5DE5\u4F5C\u8D1F\u8F7D\u7279\u6027\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u5BF9\u4E8E ",(0,d.jsx)(e.strong,{children:"\u9AD8\u6027\u80FD\u5B9E\u65F6\u5206\u6790"})," \u573A\u666F\uFF0C\u63A8\u8350\u4F7F\u7528 ",(0,d.jsx)(e.strong,{children:"LZ4"})," \u6216 ",(0,d.jsx)(e.strong,{children:"Snappy"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u5BF9\u4E8E ",(0,d.jsx)(e.strong,{children:"\u5B58\u50A8\u6548\u7387\u4F18\u5148"})," \u7684\u573A\u666F\uFF0C\u63A8\u8350\u4F7F\u7528 ",(0,d.jsx)(e.strong,{children:"ZSTD"})," \u6216 ",(0,d.jsx)(e.strong,{children:"Zlib"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u5BF9\u4E8E\u9700\u8981\u517C\u987E\u901F\u5EA6\u548C\u538B\u7F29\u7387\u7684\u573A\u666F\uFF0C\u53EF\u9009\u62E9 ",(0,d.jsx)(e.strong,{children:"LZ4F"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u5BF9\u4E8E ",(0,d.jsx)(e.strong,{children:"\u5F52\u6863\u6216\u51B7\u6570\u636E\u5B58\u50A8"})," \u573A\u666F\uFF0C\u5EFA\u8BAE\u4F7F\u7528 ",(0,d.jsx)(e.strong,{children:"Zlib"})," \u6216 ",(0,d.jsx)(e.strong,{children:"LZ4HC"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u5728-doris-\u4E2D\u8BBE\u7F6E\u538B\u7F29",children:"\u5728 Doris \u4E2D\u8BBE\u7F6E\u538B\u7F29"}),"\n",(0,d.jsx)(e.p,{children:"\u521B\u5EFA\u8868\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u538B\u7F29\u7B97\u6CD5\u6765\u6307\u5B9A\u5B58\u50A8\u6570\u636E\u7684\u538B\u7F29\u65B9\u5F0F\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE example_table (\n    id INT,\n    name STRING,\n    age INT\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "compression" = "zstd"\n);\n'})})]})}function x(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return i}});var r=s(667294);let d={},l=r.createContext(d);function i(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);