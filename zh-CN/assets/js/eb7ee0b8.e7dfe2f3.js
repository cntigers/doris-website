"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["819460"],{566737:function(n,e,d){d.r(e),d.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"table-design/data-model/tips","title":"\u4F7F\u7528\u6CE8\u610F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/data-model/tips.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/tips","permalink":"/zh-CN/docs/2.0/table-design/data-model/tips","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u4F7F\u7528\u6CE8\u610F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u805A\u5408\u6A21\u578B","permalink":"/zh-CN/docs/2.0/table-design/data-model/aggregate"},"next":{"title":"\u884C\u5217\u6DF7\u5B58","permalink":"/zh-CN/docs/2.0/table-design/row-store"}}'),t=d("785893"),r=d("250065");let l={title:"\u4F7F\u7528\u6CE8\u610F",language:"zh-CN"},i=void 0,c={},h=[{value:"\u5EFA\u8868\u65F6\u5217\u7C7B\u578B\u5EFA\u8BAE",id:"\u5EFA\u8868\u65F6\u5217\u7C7B\u578B\u5EFA\u8BAE",level:2},{value:"\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027",id:"\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027",level:2},{value:"Unique \u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0",id:"unique-\u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0",level:2},{value:"Duplicate \u6A21\u578B",id:"duplicate-\u6A21\u578B",level:2},{value:"Key \u5217\u7684\u4E0D\u540C\u610F\u4E49",id:"key-\u5217\u7684\u4E0D\u540C\u610F\u4E49",level:2},{value:"\u6A21\u578B\u9009\u62E9\u5EFA\u8BAE",id:"\u6A21\u578B\u9009\u62E9\u5EFA\u8BAE",level:2}];function x(n){let e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u5EFA\u8868\u65F6\u5217\u7C7B\u578B\u5EFA\u8BAE",children:"\u5EFA\u8868\u65F6\u5217\u7C7B\u578B\u5EFA\u8BAE"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Key \u5217\u5FC5\u987B\u5728\u6240\u6709 Value \u5217\u4E4B\u524D\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5C3D\u91CF\u9009\u62E9\u6574\u578B\u7C7B\u578B\u3002\u56E0\u4E3A\u6574\u578B\u7C7B\u578B\u7684\u8BA1\u7B97\u548C\u67E5\u627E\u6548\u7387\u8FDC\u9AD8\u4E8E\u5B57\u7B26\u4E32\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5BF9\u4E8E\u4E0D\u540C\u957F\u5EA6\u7684\u6574\u578B\u7C7B\u578B\u7684\u9009\u62E9\u539F\u5219\uFF0C\u9075\u5FAA\u591F\u7528\u5373\u53EF\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5BF9\u4E8E VARCHAR \u548C STRING \u7C7B\u578B\u7684\u957F\u5EA6\uFF0C\u9075\u5FAA\u591F\u7528\u5373\u53EF\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027",children:"\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD9\u91CC\u9488\u5BF9 Aggregate \u6A21\u578B\uFF0C\u6765\u4ECB\u7ECD\u4E0B\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u805A\u5408\u6A21\u578B\u4E2D\uFF0C\u6A21\u578B\u5BF9\u5916\u5C55\u73B0\u7684\uFF0C\u662F\u6700\u7EC8\u805A\u5408\u540E\u7684\u6570\u636E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EFB\u4F55\u8FD8\u672A\u805A\u5408\u7684\u6570\u636E\uFF08\u6BD4\u5982\u8BF4\u4E24\u4E2A\u4E0D\u540C\u5BFC\u5165\u6279\u6B21\u7684\u6570\u636E\uFF09\uFF0C\u5FC5\u987B\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u5BF9\u5916\u5C55\u793A\u7684\u4E00\u81F4\u6027\u3002\u4E3E\u4F8B\u8BF4\u660E\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8BBE\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"ColumnName"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"AggregationType"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"user_id"}),(0,t.jsx)(e.td,{children:"LARGEINT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u7528\u6237 id"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"date"}),(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u6570\u636E\u704C\u5165\u65E5\u671F"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cost"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"SUM"}),(0,t.jsx)(e.td,{children:"\u7528\u6237\u603B\u6D88\u8D39"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8BBE\u5B58\u50A8\u5F15\u64CE\u4E2D\u6709\u5982\u4E0B\u4E24\u4E2A\u5DF2\u7ECF\u5BFC\u5165\u5B8C\u6210\u7684\u6279\u6B21\u7684\u6570\u636E\uFF1A"}),"\n",(0,t.jsx)(e.p,{children:"batch 1"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"50"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"batch 2"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10003"}),(0,t.jsx)(e.td,{children:"2017/11/22"}),(0,t.jsx)(e.td,{children:"22"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u7528\u6237 10001 \u5206\u5C5E\u5728\u4E24\u4E2A\u5BFC\u5165\u6279\u6B21\u4E2D\u7684\u6570\u636E\u8FD8\u6CA1\u6709\u805A\u5408\u3002\u4F46\u662F\u4E3A\u4E86\u4FDD\u8BC1\u7528\u6237\u53EA\u80FD\u67E5\u8BE2\u5230\u5982\u4E0B\u6700\u7EC8\u805A\u5408\u540E\u7684\u6570\u636E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"51"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10003"}),(0,t.jsx)(e.td,{children:"2017/11/22"}),(0,t.jsx)(e.td,{children:"22"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4EEC\u5728\u67E5\u8BE2\u5F15\u64CE\u4E2D\u52A0\u5165\u4E86\u805A\u5408\u7B97\u5B50\uFF0C\u6765\u4FDD\u8BC1\u6570\u636E\u5BF9\u5916\u7684\u4E00\u81F4\u6027\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u53E6\u5916\uFF0C\u5728\u805A\u5408\u5217\uFF08Value\uFF09\u4E0A\uFF0C\u6267\u884C\u4E0E\u805A\u5408\u7C7B\u578B\u4E0D\u4E00\u81F4\u7684\u805A\u5408\u7C7B\u67E5\u8BE2\u65F6\uFF0C\u8981\u6CE8\u610F\u8BED\u610F\u3002\u6BD4\u5982\u5728\u5982\u4E0A\u793A\u4F8B\u4E2D\u6267\u884C\u5982\u4E0B\u67E5\u8BE2\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:"SELECT MIN(cost) FROM table;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5F97\u5230\u7684\u7ED3\u679C\u662F 5\uFF0C\u800C\u4E0D\u662F 1\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u540C\u65F6\uFF0C\u8FD9\u79CD\u4E00\u81F4\u6027\u4FDD\u8BC1\uFF0C\u5728\u67D0\u4E9B\u67E5\u8BE2\u4E2D\uFF0C\u4F1A\u6781\u5927\u5730\u964D\u4F4E\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u6700\u57FA\u672C\u7684 count(*) \u67E5\u8BE2\u4E3A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:"SELECT COUNT(*) FROM table;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5176\u4ED6\u6570\u636E\u5E93\u4E2D\uFF0C\u8FD9\u7C7B\u67E5\u8BE2\u90FD\u4F1A\u5F88\u5FEB\u5730\u8FD4\u56DE\u7ED3\u679C\u3002\u56E0\u4E3A\u5728\u5B9E\u73B0\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u201C\u5BFC\u5165\u65F6\u5BF9\u884C\u8FDB\u884C\u8BA1\u6570\uFF0C\u4FDD\u5B58 count \u7684\u7EDF\u8BA1\u4FE1\u606F\u201D\uFF0C\u6216\u8005\u5728\u67E5\u8BE2\u65F6\u201C\u4EC5\u626B\u63CF\u67D0\u4E00\u5217\u6570\u636E\uFF0C\u83B7\u5F97 count \u503C\u201D\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5F88\u5C0F\u7684\u5F00\u9500\uFF0C\u5373\u53EF\u83B7\u5F97\u67E5\u8BE2\u7ED3\u679C\u3002\u4F46\u662F\u5728 Doris \u7684\u805A\u5408\u6A21\u578B\u4E2D\uFF0C\u8FD9\u79CD\u67E5\u8BE2\u7684\u5F00\u9500\u975E\u5E38\u5927\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u521A\u624D\u7684\u6570\u636E\u4E3A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(e.p,{children:"batch 1"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"50"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"batch 2"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10003"}),(0,t.jsx)(e.td,{children:"2017/11/22"}),(0,t.jsx)(e.td,{children:"22"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u56E0\u4E3A\u6700\u7EC8\u7684\u805A\u5408\u7ED3\u679C\u4E3A\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"51"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10003"}),(0,t.jsx)(e.td,{children:"2017/11/22"}),(0,t.jsx)(e.td,{children:"22"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6240\u4EE5\uFF0C",(0,t.jsx)(e.code,{children:"select count(*) from table;"})," \u7684\u6B63\u786E\u7ED3\u679C\u5E94\u8BE5\u4E3A 4\u3002\u4F46\u5982\u679C\u53EA\u626B\u63CF ",(0,t.jsx)(e.code,{children:"user_id"})," \u8FD9\u4E00\u5217\uFF0C\u5982\u679C\u52A0\u4E0A\u67E5\u8BE2\u65F6\u805A\u5408\uFF0C\u6700\u7EC8\u5F97\u5230\u7684\u7ED3\u679C\u662F 3\uFF0810001, 10002, 10003\uFF09\u3002\u800C\u5982\u679C\u4E0D\u52A0\u67E5\u8BE2\u65F6\u805A\u5408\uFF0C\u5219\u5F97\u5230\u7684\u7ED3\u679C\u662F 5\uFF08\u4E24\u6279\u6B21\u4E00\u5171 5 \u884C\u6570\u636E\uFF09\u3002\u53EF\u89C1\u8FD9\u4E24\u4E2A\u7ED3\u679C\u90FD\u662F\u4E0D\u5BF9\u7684\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4E3A\u4E86\u5F97\u5230\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u5FC5\u987B\u540C\u65F6\u8BFB\u53D6 ",(0,t.jsx)(e.code,{children:"user_id"})," \u548C ",(0,t.jsx)(e.code,{children:"date"})," \u8FD9\u4E24\u5217\u7684\u6570\u636E\uFF0C\u518D\u52A0\u4E0A\u67E5\u8BE2\u65F6\u805A\u5408\uFF0C\u624D\u80FD\u8FD4\u56DE 4 \u8FD9\u4E2A\u6B63\u786E\u7684\u7ED3\u679C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728 count(*) \u67E5\u8BE2\u4E2D\uFF0C",(0,t.jsxs)(e.em,{children:["Doris \u5FC5\u987B\u626B\u63CF\u6240\u6709\u7684 AGGREGATE KEY \u5217\uFF08\u8FD9\u91CC\u5C31\u662F",(0,t.jsx)(e.code,{children:"user_id"})," ",(0,t.jsx)(e.code,{children:"date"}),"\uFF09\uFF0C\u5E76\u4E14\u805A\u5408\u540E\uFF0C\u624D\u80FD\u5F97\u5230\u8BED\u610F\u6B63\u786E\u7684\u7ED3\u679C\u3002"]})," \u5F53\u805A\u5408\u5217\u975E\u5E38\u591A\u65F6\uFF0Ccount(*) \u67E5\u8BE2\u9700\u8981\u626B\u63CF\u5927\u91CF\u7684\u6570\u636E\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u56E0\u6B64\uFF0C\u5F53\u4E1A\u52A1\u4E0A\u6709\u9891\u7E41\u7684 count(*) \u67E5\u8BE2\u65F6\uFF0C\u5EFA\u8BAE\u7528\u6237\u901A\u8FC7\u589E\u52A0\u4E00\u4E2A\u503C\u6052\u4E3A 1 \u7684\uFF0C\u805A\u5408\u7C7B\u578B\u4E3A SUM \u7684\u5217\u6765\u6A21\u62DF count(*)\u3002\u5982\u521A\u624D\u7684\u4F8B\u5B50\u4E2D\u7684\u8868\u7ED3\u6784\uFF0C\u6211\u4EEC\u4FEE\u6539\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"ColumnName"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"AggregateType"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"user_id"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u7528\u6237 id"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"date"}),(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u6570\u636E\u704C\u5165\u65E5\u671F"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cost"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"SUM"}),(0,t.jsx)(e.td,{children:"\u7528\u6237\u603B\u6D88\u8D39"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"count"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"SUM"}),(0,t.jsx)(e.td,{children:"\u7528\u4E8E\u8BA1\u7B97 count"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u589E\u52A0\u4E00\u4E2A count \u5217\uFF0C\u5E76\u4E14\u5BFC\u5165\u6570\u636E\u4E2D\uFF0C\u8BE5\u5217\u503C\u6052\u4E3A 1\u3002\u5219 ",(0,t.jsx)(e.code,{children:"select count(*) from table;"})," \u7684\u7ED3\u679C\u7B49\u4EF7\u4E8E ",(0,t.jsx)(e.code,{children:"select sum(count) from table;"}),"\u3002\u800C\u540E\u8005\u7684\u67E5\u8BE2\u6548\u7387\u5C06\u8FDC\u9AD8\u4E8E\u524D\u8005\u3002\u4E0D\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u6709\u4F7F\u7528\u9650\u5236\uFF0C\u5C31\u662F\u7528\u6237\u9700\u8981\u81EA\u884C\u4FDD\u8BC1\uFF0C\u4E0D\u4F1A\u91CD\u590D\u5BFC\u5165 AGGREGATE KEY \u5217\u90FD\u76F8\u540C\u5730\u884C\u3002\u5426\u5219\uFF0C",(0,t.jsx)(e.code,{children:"select sum(count) from table;"})," \u53EA\u80FD\u8868\u8FF0\u539F\u59CB\u5BFC\u5165\u7684\u884C\u6570\uFF0C\u800C\u4E0D\u662F ",(0,t.jsx)(e.code,{children:"select count(*) from table;"})," \u7684\u8BED\u4E49\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u53E6\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5C31\u662F\u5C06\u5982\u4E0A\u7684 ",(0,t.jsx)(e.code,{children:"count"})," \u5217\u7684\u805A\u5408\u7C7B\u578B\u6539\u4E3A REPLACE\uFF0C\u4E14\u4F9D\u7136\u503C\u6052\u4E3A 1\u3002\u90A3\u4E48 ",(0,t.jsx)(e.code,{children:"select sum(count) from table;"})," \u548C ",(0,t.jsx)(e.code,{children:"select count(*) from table;"})," \u7684\u7ED3\u679C\u5C06\u662F\u4E00\u81F4\u7684\u3002\u5E76\u4E14\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6CA1\u6709\u5BFC\u5165\u91CD\u590D\u884C\u7684\u9650\u5236\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"unique-\u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0",children:"Unique \u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0"}),"\n",(0,t.jsx)(e.p,{children:"Unique \u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\u6CA1\u6709\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027\uFF0C\u8FD8\u662F\u4EE5\u521A\u624D\u7684\u6570\u636E\u4E3A\u4F8B\uFF0C\u5199\u65F6\u5408\u5E76\u4E3A\u6BCF\u6B21\u5BFC\u5165\u7684 rowset \u589E\u52A0\u4E86\u5BF9\u5E94\u7684 delete bitmap\uFF0C\u6765\u6807\u8BB0\u54EA\u4E9B\u6570\u636E\u88AB\u8986\u76D6\u3002\u7B2C\u4E00\u6279\u6570\u636E\u5BFC\u5165\u540E\u72B6\u6001\u5982\u4E0B"}),"\n",(0,t.jsx)(e.p,{children:"batch 1"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"}),(0,t.jsx)(e.th,{children:"delete bit"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"50"}),(0,t.jsx)(e.td,{children:"FALSE"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"}),(0,t.jsx)(e.td,{children:"FALSE"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u5F53\u7B2C\u4E8C\u6279\u6570\u636E\u5BFC\u5165\u5B8C\u6210\u540E\uFF0C\u7B2C\u4E00\u6279\u6570\u636E\u4E2D\u91CD\u590D\u7684\u884C\u5C31\u4F1A\u88AB\u6807\u8BB0\u4E3A\u5DF2\u5220\u9664\uFF0C\u6B64\u65F6\u4E24\u6279\u6570\u636E\u72B6\u6001\u5982\u4E0B"}),"\n",(0,t.jsx)(e.p,{children:"batch 1"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"}),(0,t.jsx)(e.th,{children:"delete bit"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"50"}),(0,t.jsx)(e.td,{children:"TRUE"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10002"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"39"}),(0,t.jsx)(e.td,{children:"FALSE"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"batch 2"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"user_id"}),(0,t.jsx)(e.th,{children:"date"}),(0,t.jsx)(e.th,{children:"cost"}),(0,t.jsx)(e.th,{children:"delete bit"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/20"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"FALSE"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10001"}),(0,t.jsx)(e.td,{children:"2017/11/21"}),(0,t.jsx)(e.td,{children:"5"}),(0,t.jsx)(e.td,{children:"FALSE"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10003"}),(0,t.jsx)(e.td,{children:"2017/11/22"}),(0,t.jsx)(e.td,{children:"22"}),(0,t.jsx)(e.td,{children:"FALSE"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u67E5\u8BE2\u65F6\uFF0C\u6240\u6709\u5728 delete bitmap \u4E2D\u88AB\u6807\u8BB0\u5220\u9664\u7684\u6570\u636E\u90FD\u4E0D\u4F1A\u8BFB\u51FA\u6765\uFF0C\u56E0\u6B64\u4E5F\u65E0\u9700\u8FDB\u884C\u505A\u4EFB\u4F55\u6570\u636E\u805A\u5408\uFF0C\u4E0A\u8FF0\u6570\u636E\u4E2D\u6709\u6548\u5730\u884C\u6570\u4E3A 4 \u884C\uFF0C\u67E5\u8BE2\u51FA\u7684\u7ED3\u679C\u4E5F\u5E94\u8BE5\u662F 4 \u884C\uFF0C\u4E5F\u5C31\u53EF\u4EE5\u91C7\u53D6\u5F00\u9500\u6700\u5C0F\u7684\u65B9\u5F0F\u6765\u83B7\u53D6\u7ED3\u679C\uFF0C\u5373\u524D\u9762\u63D0\u5230\u7684\u201C\u4EC5\u626B\u63CF\u67D0\u4E00\u5217\u6570\u636E\uFF0C\u83B7\u5F97 count \u503C\u201D\u7684\u65B9\u5F0F\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0Ccount(*) \u67E5\u8BE2\u5728 Unique \u6A21\u578B\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\u4E0A\u7684\u6027\u80FD\uFF0C\u76F8\u6BD4\u805A\u5408\u6A21\u578B\u6709 10 \u500D\u4EE5\u4E0A\u7684\u63D0\u5347\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"duplicate-\u6A21\u578B",children:"Duplicate \u6A21\u578B"}),"\n",(0,t.jsx)(e.p,{children:"Duplicate \u6A21\u578B\u6CA1\u6709\u805A\u5408\u6A21\u578B\u7684\u8FD9\u4E2A\u5C40\u9650\u6027\u3002\u56E0\u4E3A\u8BE5\u6A21\u578B\u4E0D\u6D89\u53CA\u805A\u5408\u8BED\u610F\uFF0C\u5728\u505A count(*) \u67E5\u8BE2\u65F6\uFF0C\u4EFB\u610F\u9009\u62E9\u4E00\u5217\u67E5\u8BE2\uFF0C\u5373\u53EF\u5F97\u5230\u8BED\u610F\u6B63\u786E\u7684\u7ED3\u679C\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"key-\u5217\u7684\u4E0D\u540C\u610F\u4E49",children:"Key \u5217\u7684\u4E0D\u540C\u610F\u4E49"}),"\n",(0,t.jsx)(e.p,{children:'Duplicate\u3001Aggregate\u3001Unique \u6A21\u578B\uFF0C\u90FD\u4F1A\u5728\u5EFA\u8868\u6307\u5B9A Key \u5217\uFF0C\u7136\u800C\u5B9E\u9645\u4E0A\u662F\u6709\u6240\u533A\u522B\u7684\uFF1A\u5BF9\u4E8E Duplicate \u6A21\u578B\uFF0C\u8868\u7684 Key \u5217\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u53EA\u662F "\u6392\u5E8F\u5217"\uFF0C\u5E76\u975E\u8D77\u5230\u552F\u4E00\u6807\u8BC6\u7684\u4F5C\u7528\u3002\u800C Aggregate\u3001Unique \u6A21\u578B\u8FD9\u79CD\u805A\u5408\u7C7B\u578B\u7684\u8868\uFF0CKey \u5217\u662F\u517C\u987E "\u6392\u5E8F\u5217" \u548C "\u552F\u4E00\u6807\u8BC6\u5217"\uFF0C\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684 "Key \u5217"\u3002'}),"\n",(0,t.jsx)(e.h2,{id:"\u6A21\u578B\u9009\u62E9\u5EFA\u8BAE",children:"\u6A21\u578B\u9009\u62E9\u5EFA\u8BAE"}),"\n",(0,t.jsx)(e.p,{children:"\u56E0\u4E3A\u6570\u636E\u6A21\u578B\u5728\u5EFA\u8868\u65F6\u5C31\u5DF2\u7ECF\u786E\u5B9A\uFF0C\u4E14\u65E0\u6CD5\u4FEE\u6539\u3002\u6240\u4EE5\uFF0C\u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684\u6570\u636E\u6A21\u578B\u975E\u5E38\u91CD\u8981\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Aggregate \u6A21\u578B\u53EF\u4EE5\u901A\u8FC7\u9884\u805A\u5408\uFF0C\u6781\u5927\u5730\u964D\u4F4E\u805A\u5408\u67E5\u8BE2\u65F6\u6240\u9700\u626B\u63CF\u7684\u6570\u636E\u91CF\u548C\u67E5\u8BE2\u7684\u8BA1\u7B97\u91CF\uFF0C\u975E\u5E38\u9002\u5408\u6709\u56FA\u5B9A\u6A21\u5F0F\u7684\u62A5\u8868\u7C7B\u67E5\u8BE2\u573A\u666F\u3002\u4F46\u662F\u8BE5\u6A21\u578B\u5BF9 count(*) \u67E5\u8BE2\u5F88\u4E0D\u53CB\u597D\u3002\u540C\u65F6\u56E0\u4E3A\u56FA\u5B9A\u4E86 Value \u5217\u4E0A\u7684\u805A\u5408\u65B9\u5F0F\uFF0C\u5728\u8FDB\u884C\u5176\u4ED6\u7C7B\u578B\u7684\u805A\u5408\u67E5\u8BE2\u65F6\uFF0C\u9700\u8981\u8003\u8651\u8BED\u610F\u6B63\u786E\u6027\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Unique \u6A21\u578B\u9488\u5BF9\u9700\u8981\u552F\u4E00\u4E3B\u952E\u7EA6\u675F\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4E3B\u952E\u552F\u4E00\u6027\u7EA6\u675F\u3002\u4F46\u662F\u65E0\u6CD5\u5229\u7528 ROLLUP \u7B49\u9884\u805A\u5408\u5E26\u6765\u7684\u67E5\u8BE2\u4F18\u52BF\u3002\u5BF9\u4E8E\u805A\u5408\u67E5\u8BE2\u6709\u8F83\u9AD8\u6027\u80FD\u9700\u6C42\u7684\u7528\u6237\uFF0C\u63A8\u8350\u4F7F\u7528\u81EA 1.2 \u7248\u672C\u52A0\u5165\u7684\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Duplicate \u9002\u5408\u4EFB\u610F\u7EF4\u5EA6\u7684 Ad-hoc \u67E5\u8BE2\u3002\u867D\u7136\u540C\u6837\u65E0\u6CD5\u5229\u7528\u9884\u805A\u5408\u7684\u7279\u6027\uFF0C\u4F46\u662F\u4E0D\u53D7\u805A\u5408\u6A21\u578B\u7684\u7EA6\u675F\uFF0C\u53EF\u4EE5\u53D1\u6325\u5217\u5B58\u6A21\u578B\u7684\u4F18\u52BF\uFF08\u53EA\u8BFB\u53D6\u76F8\u5173\u5217\uFF0C\u800C\u4E0D\u9700\u8981\u8BFB\u53D6\u6240\u6709 Key \u5217\uFF09\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5982\u679C\u6709\u90E8\u5206\u5217\u66F4\u65B0\u7684\u9700\u6C42\uFF0C\u8BF7\u67E5\u9605\u6587\u6863",(0,t.jsx)(e.a,{href:"../../data-operate/update/update-of-unique-model",children:"\u4E3B\u952E\u6A21\u578B\u90E8\u5206\u5217\u66F4\u65B0"})," \u4E0E ",(0,t.jsx)(e.a,{href:"../../data-operate/update/update-of-aggregate-model",children:"\u805A\u5408\u6A21\u578B\u90E8\u4EFD\u5217\u66F4\u65B0"})," \u83B7\u53D6\u76F8\u5173\u4F7F\u7528\u5EFA\u8BAE\u3002"]}),"\n"]}),"\n"]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return i},a:function(){return l}});var s=d(667294);let t={},r=s.createContext(t);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);