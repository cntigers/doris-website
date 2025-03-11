"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["550679"],{406491:function(e,n,c){c.r(n),c.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>d,toc:()=>h,contentTitle:()=>r});var l=JSON.parse('{"id":"query-acceleration/sql-cache-manual","title":"\u67E5\u8BE2\u7F13\u5B58","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/sql-cache-manual.md","sourceDirName":"query-acceleration","slug":"/query-acceleration/sql-cache-manual","permalink":"/zh-CN/docs/query-acceleration/sql-cache-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u67E5\u8BE2\u7F13\u5B58","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u5E38\u89C1\u95EE\u9898","permalink":"/zh-CN/docs/query-acceleration/materialized-view/async-materialized-view/faq"},"next":{"title":"\u9AD8\u5E76\u53D1\u70B9\u67E5","permalink":"/zh-CN/docs/query-acceleration/high-concurrent-point-query"}}'),s=c("785893"),i=c("250065");let a={title:"\u67E5\u8BE2\u7F13\u5B58",language:"zh-CN"},r=void 0,d={},h=[{value:"\u6982\u5FF5\u4ECB\u7ECD",id:"\u6982\u5FF5\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"\u975E\u786E\u5B9A\u51FD\u6570",id:"\u975E\u786E\u5B9A\u51FD\u6570",level:3},{value:"\u5B9E\u73B0\u539F\u7406",id:"\u5B9E\u73B0\u539F\u7406",level:2},{value:"BE \u5B9E\u73B0\u539F\u7406",id:"be-\u5B9E\u73B0\u539F\u7406",level:3},{value:"FE \u5B9E\u73B0\u539F\u7406",id:"fe-\u5B9E\u73B0\u539F\u7406",level:3},{value:"\u5FEB\u901F\u4E0A\u624B",id:"\u5FEB\u901F\u4E0A\u624B",level:2},{value:"\u5F00\u542F\u548C\u5173\u95ED SQL Cache",id:"\u5F00\u542F\u548C\u5173\u95ED-sql-cache",level:3},{value:"\u68C0\u67E5\u67E5\u8BE2\u662F\u5426\u547D\u4E2D SQL Cache",id:"\u68C0\u67E5\u67E5\u8BE2\u662F\u5426\u547D\u4E2D-sql-cache",level:3},{value:"\u6307\u6807\u76D1\u63A7",id:"\u6307\u6807\u76D1\u63A7",level:2},{value:"\u5185\u5B58\u63A7\u5236",id:"\u5185\u5B58\u63A7\u5236",level:2},{value:"FE \u5185\u5B58\u63A7\u5236",id:"fe-\u5185\u5B58\u63A7\u5236",level:3},{value:"BE \u5185\u5B58\u63A7\u5236",id:"be-\u5185\u5B58\u63A7\u5236",level:3},{value:"\u6392\u67E5\u7F13\u5B58\u5931\u6548\u539F\u56E0",id:"\u6392\u67E5\u7F13\u5B58\u5931\u6548\u539F\u56E0",level:2}];function t(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u5FF5\u4ECB\u7ECD",children:"\u6982\u5FF5\u4ECB\u7ECD"}),"\n",(0,s.jsx)(n.p,{children:"SQL Cache \u662F Doris \u63D0\u4F9B\u7684\u4E00\u79CD\u67E5\u8BE2\u4F18\u5316\u673A\u5236\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002\u5B83\u901A\u8FC7\u7F13\u5B58\u67E5\u8BE2\u7ED3\u679C\u6765\u51CF\u5C11\u91CD\u590D\u8BA1\u7B97\uFF0C\u9002\u7528\u4E8E\u6570\u636E\u66F4\u65B0\u9891\u7387\u8F83\u4F4E\u7684\u573A\u666F\u3002"}),"\n",(0,s.jsx)(n.p,{children:"SQL Cache \u57FA\u4E8E\u4EE5\u4E0B\u5173\u952E\u56E0\u7D20\u6765\u5B58\u50A8\u548C\u83B7\u53D6\u7F13\u5B58\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SQL \u6587\u672C"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u89C6\u56FE\u5B9A\u4E49"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8868\u548C\u5206\u533A\u7684\u7248\u672C"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53D8\u91CF\u548C\u7ED3\u679C\u503C"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u975E\u786E\u5B9A\u51FD\u6570\u548C\u7ED3\u679C\u503C"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u884C\u7B56\u7565\u5B9A\u4E49"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636E\u8131\u654F\u5B9A\u4E49"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0A\u56E0\u7D20\u7684\u7EC4\u5408\u552F\u4E00\u786E\u5B9A\u4E00\u4E2A\u7F13\u5B58\u6570\u636E\u96C6\u3002\u5982\u679C\u5176\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u53D1\u751F\u53D8\u5316\uFF0C\u4F8B\u5982 SQL \u53D8\u5316\u3001\u67E5\u8BE2\u5B57\u6BB5\u6216\u6761\u4EF6\u4E0D\u540C\u6216\u8005\u6570\u636E\u66F4\u65B0\u540E\u7248\u672C\u53D8\u5316\uFF0C\u7F13\u5B58\u5C06\u4E0D\u4F1A\u547D\u4E2D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u6D89\u53CA\u591A\u8868 Join \u7684\u67E5\u8BE2\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u8868\u66F4\u65B0\u4E86\uFF0C\u5206\u533A ID \u6216\u7248\u672C\u53F7\u5C31\u4F1A\u4E0D\u540C\uFF0C\u5BFC\u81F4\u7F13\u5B58\u65E0\u6CD5\u547D\u4E2D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"SQL Cache \u975E\u5E38\u9002\u5408 T+1 \u66F4\u65B0\u573A\u666F\u3002\u6570\u636E\u5728\u51CC\u6668\u66F4\u65B0\uFF0C\u7B2C\u4E00\u6B21\u67E5\u8BE2\u4ECE BE \u83B7\u53D6\u7ED3\u679C\u5E76\u653E\u5165\u7F13\u5B58\uFF0C\u540E\u7EED\u76F8\u540C\u76F8\u4F3C\u7684\u67E5\u8BE2\u5219\u76F4\u63A5\u4ECE\u7F13\u5B58\u83B7\u53D6\u7ED3\u679C\u3002\u5B9E\u65F6\u66F4\u65B0\u6570\u636E\u4E5F\u53EF\u4EE5\u4F7F\u7528 SQL Cache\uFF0C\u4F46\u53EF\u80FD\u4F1A\u9762\u4E34\u8F83\u4F4E\u7684\u7F13\u5B58\u547D\u4E2D\u7387\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D\uFF0CSQL Cache \u652F\u6301 OlapTable \u5185\u90E8\u8868\u548C Hive \u5916\u90E8\u8868\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,s.jsx)(n.h3,{id:"\u975E\u786E\u5B9A\u51FD\u6570",children:"\u975E\u786E\u5B9A\u51FD\u6570"}),"\n",(0,s.jsx)(n.p,{children:"\u975E\u786E\u5B9A\u51FD\u6570\u662F\u6307\u5176\u8FD0\u7B97\u7ED3\u679C\u4E0E\u8F93\u5165\u53C2\u6570\u4E4B\u95F4\u65E0\u6CD5\u5F62\u6210\u56FA\u5B9A\u5173\u7CFB\u7684\u51FD\u6570\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u5E38\u89C1\u51FD\u6570 ",(0,s.jsx)(n.code,{children:"select now()"})," \u4E3A\u4F8B\uFF0C\u5B83\u8FD4\u56DE\u5F53\u524D\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u3002\u7531\u4E8E\u8BE5\u51FD\u6570\u5728\u4E0D\u540C\u65F6\u95F4\u6267\u884C\u65F6\u4F1A\u8FD4\u56DE\u4E0D\u540C\u7684\u7ED3\u679C\uFF0C\u56E0\u6B64\u5176\u8FD4\u56DE\u503C\u662F\u52A8\u6001\u53D8\u5316\u3002",(0,s.jsx)(n.code,{children:"now"})," \u51FD\u6570\u8FD4\u56DE\u7684\u662F\u79D2\u7EA7\u522B\u7684\u65F6\u95F4\uFF0C\u6240\u4EE5\u5728\u540C\u4E00\u79D2\u5185\u53EF\u4EE5\u590D\u7528\u4E4B\u524D\u7684 SQL Cache\uFF1B\u4F46\u4E0B\u4E00\u79D2\u4E4B\u540E\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u521B\u5EFA SQL Cache\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E3A\u4E86\u4F18\u5316\u7F13\u5B58\u5229\u7528\u7387\uFF0C\u5EFA\u8BAE\u5C06\u8FD9\u79CD\u7EC6\u7C92\u5EA6\u7684\u65F6\u95F4\u8F6C\u4E3A\u7C97\u7C92\u5EA6\u7684\u65F6\u95F4\uFF0C\u4F8B\u5982\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"select * from tbl where dt=date(now())"}),"\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u540C\u4E00\u5929\u7684\u67E5\u8BE2\u90FD\u53EF\u4EE5\u5229\u7528\u5230 SQL Cache\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76F8\u6BD4\u4E4B\u4E0B\uFF0C",(0,s.jsx)(n.code,{children:"random()"})," \u51FD\u6570\u5219\u5F88\u96BE\u5229\u7528\u5230 Cache\uFF0C\u56E0\u4E3A\u5B83\u6BCF\u6B21\u8FD0\u7B97\u7684\u7ED3\u679C\u90FD\u662F\u4E0D\u540C\u7684\u3002\u56E0\u6B64\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u5728\u67E5\u8BE2\u4E2D\u4F7F\u7528\u8FD9\u7C7B\u975E\u786E\u5B9A\u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B9E\u73B0\u539F\u7406",children:"\u5B9E\u73B0\u539F\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"be-\u5B9E\u73B0\u539F\u7406",children:"BE \u5B9E\u73B0\u539F\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0CSQL Cache \u7684\u7ED3\u679C\u4F1A\u901A\u8FC7\u4E00\u81F4\u6027\u54C8\u5E0C\u65B9\u6CD5\u9009\u62E9\u4E00\u4E2A BE\uFF0C\u5E76\u5C06\u5176\u5B58\u653E\u5728\u8BE5 BE \u7684\u5185\u5B58\u4E2D\u3002\u8FD9\u4E9B\u7ED3\u679C\u4EE5 HashMap \u7684\u7ED3\u6784\u8FDB\u884C\u5B58\u50A8\u3002\u5F53\u8BFB\u5199 Cache \u7684\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u4F7F\u7528 SQL \u5B57\u7B26\u4E32\u7B49\u5143\u6570\u636E\u4FE1\u606F\u7684\u6458\u8981\u4F5C\u4E3A Key\uFF0C\u4ECE HashMap \u4E2D\u5FEB\u901F\u68C0\u7D22\u7ED3\u679C\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"fe-\u5B9E\u73B0\u539F\u7406",children:"FE \u5B9E\u73B0\u539F\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u5F53 FE \u63A5\u6536\u5230\u67E5\u8BE2\u8BF7\u6C42\u65F6\uFF0C\u5B83\u9996\u5148\u4F1A\u5728\u5185\u5B58\u4E2D\u5229\u7528 SQL \u5B57\u7B26\u4E32\u8FDB\u884C\u67E5\u627E\uFF0C\u5224\u65AD\u4E4B\u524D\u662F\u5426\u6267\u884C\u8FC7\u76F8\u540C\u7684\u67E5\u8BE2\uFF0C\u5E76\u5C1D\u8BD5\u83B7\u53D6\u8BE5\u67E5\u8BE2\u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5305\u62EC\u67E5\u8BE2\u6240\u6D89\u53CA\u8868\u7684\u7248\u672C\u4EE5\u53CA\u5206\u533A\u7684\u7248\u672C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u82E5\u8FD9\u4E9B\u5143\u6570\u636E\u4FE1\u606F\u4FDD\u6301\u4E0D\u53D8\uFF0C\u5219\u8BF4\u660E\u76F8\u5E94\u8868\u7684\u6570\u636E\u672A\u53D1\u751F\u53D8\u66F4\uFF0C\u56E0\u6B64\u53EF\u4EE5\u91CD\u590D\u5229\u7528\u4E4B\u524D\u7684 SQL Cache\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CFE \u80FD\u591F\u8DF3\u8FC7 SQL \u89E3\u6790\u4F18\u5316\u6D41\u7A0B\uFF0C\u76F4\u63A5\u4F9D\u636E\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5\u5B9A\u4F4D\u5230\u5BF9\u5E94\u7684 BE\uFF0C\u5E76\u5C1D\u8BD5\u4ECE\u4E2D\u68C0\u7D22\u67E5\u8BE2\u7ED3\u679C\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u82E5\u76EE\u6807 BE \u4E2D\u5B58\u6709\u8BE5\u67E5\u8BE2\u7ED3\u679C\u7684\u7F13\u5B58\uFF0CFE \u4FBF\u80FD\u8FC5\u901F\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53CD\u4E4B\uFF0C\u82E5 BE \u4E2D\u672A\u627E\u5230\u5BF9\u5E94\u7684\u7ED3\u679C\u7F13\u5B58\uFF0CFE \u5219\u9700\u6267\u884C\u5B8C\u6574\u7684 SQL \u89E3\u6790\u4E0E\u4F18\u5316\u6D41\u7A0B\uFF0C\u968F\u540E\u5C06\u67E5\u8BE2\u8BA1\u5212\u4F20\u9001\u81F3 BE \u8FDB\u884C\u8BA1\u7B97\u5904\u7406\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5F53 BE \u5C06\u8BA1\u7B97\u7ED3\u679C\u8FD4\u56DE\u7ED9 FE \u540E\uFF0CFE \u4F1A \u8D1F\u8D23\u5C06\u8FD9\u4E9B\u7ED3\u679C\u5B58\u50A8\u81F3\u5BF9\u5E94\u7684 BE \u4E2D\uFF0C\u5E76\u5728\u5176\u5185\u5B58\u4E2D\u8BB0\u5F55\u6B64\u6B21\u67E5\u8BE2\u7684\u5143\u6570\u636E\u4FE1\u606F\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u5728\u540E\u7EED\u63A5\u6536\u5230\u76F8\u540C\u67E5\u8BE2\u65F6\uFF0CFE \u80FD\u591F\u76F4\u63A5\u4ECE BE \u4E2D\u83B7\u53D6\u7ED3\u679C\uFF0C\u4ECE\u800C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u5982\u679C SQL \u4F18\u5316\u9636\u6BB5\u5224\u65AD\u51FA\u67E5\u8BE2\u7ED3\u679C\u4EC5\u5305\u542B 0 \u884C\u6216 1 \u884C\u6570\u636E\uFF0CFE \u4F1A\u9009\u62E9\u5C06\u8FD9\u4E9B\u7ED3\u679C\u4FDD\u5B58\u5728\u5176\u5185\u5B58\u4E2D\uFF0C\u4EE5\u4FBF\u66F4\u5FEB\u901F\u5730\u54CD\u5E94\u672A\u6765\u53EF\u80FD\u7684\u76F8\u540C\u67E5\u8BE2\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5FEB\u901F\u4E0A\u624B",children:"\u5FEB\u901F\u4E0A\u624B"}),"\n",(0,s.jsx)(n.h3,{id:"\u5F00\u542F\u548C\u5173\u95ED-sql-cache",children:"\u5F00\u542F\u548C\u5173\u95ED SQL Cache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5728\u5F53\u524D Session \u6253\u5F00 SQL Cache, \u9ED8\u8BA4\u662F\u5173\u95ED\u72B6\u6001\nset enable_sql_cache=true;\n-- \u5728\u5F53\u524D Session \u5173\u95ED SQL Cache\nset enable_sql_cache=false;\n\n-- \u5168\u5C40\u6253\u5F00 SQL Cache, \u9ED8\u8BA4\u662F\u5173\u95ED\u72B6\u6001\nset global enable_sql_cache=true;\n-- \u5168\u5C40\u5173\u95ED SQL Cache\nset global enable_sql_cache=false;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u68C0\u67E5\u67E5\u8BE2\u662F\u5426\u547D\u4E2D-sql-cache",children:"\u68C0\u67E5\u67E5\u8BE2\u662F\u5426\u547D\u4E2D SQL Cache"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Doris 2.1.3 \u7248\u672C\u53CA\u5176\u540E\u7EED\u7248\u672C\u4E2D\uFF0C\u7528\u6237\u80FD\u591F\u901A\u8FC7\u6267\u884C",(0,s.jsx)(n.code,{children:"explain plan"}),"\u8BED\u53E5\u68C0\u67E5\u5F53\u524D\u67E5\u8BE2\u662F\u5426\u80FD\u591F\u6210\u529F\u547D\u4E2D SQL Cache\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u793A\u4F8B\u6240\u793A\uFF0C\u5F53\u67E5\u8BE2\u8BA1\u5212\u6811\u4E2D\u51FA\u73B0",(0,s.jsx)(n.code,{children:"LogicalSqlCache"}),"\u6216",(0,s.jsx)(n.code,{children:"PhysicalSqlCache"}),"\u8282\u70B9\u65F6\uFF0C\u5373\u8868\u660E\u67E5\u8BE2\u5DF2\u547D\u4E2D SQL Cache\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"> explain plan select * from t2;\n\n+------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                            |\n+------------------------------------------------------------------------------------------------------------+\n| ========== PARSED PLAN (time: 28ms) ==========                                                             |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== ANALYZED PLAN  ==========                                                                       |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== REWRITTEN PLAN  ==========                                                                      |\n| LogicalSqlCache[1] ( queryId=711dea740e4746e6-8bc11afe08f6542c )                                           |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n|                                                                                                            |\n| ========== OPTIMIZED PLAN  ==========                                                                      |\n| PhysicalSqlCache[3] ( queryId=711dea740e4746e6-8bc11afe08f6542c, backend=192.168.126.3:9051, rowCount=12 ) |\n| +--PhysicalResultSink[39] ( outputExprs=[id#0, name#1] )                                                   |\n|    +--PhysicalOlapScan[t2]@0 ( stats=12 )                                                                  |\n+------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5BF9\u4E8E Doris 2.1.3 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u7528\u6237\u5219\u9700\u8981\u901A\u8FC7\u67E5\u770B Profile \u4FE1\u606F\u6765\u786E\u8BA4\u67E5\u8BE2\u662F\u5426\u547D\u4E2D\u4E86 SQL Cache\u3002\u5728 Profile \u4FE1\u606F\u4E2D\uFF0C\u82E5 ",(0,s.jsx)(n.code,{children:"Is Cached:"})," \u8FD9\u4E00\u5B57\u6BB5\u663E\u793A\u4E3A ",(0,s.jsx)(n.code,{children:"Yes"}),"\uFF0C\u5219\u4EE3\u8868\u8BE5\u67E5\u8BE2\u5DF2\u6210\u529F\u547D\u4E2D SQL Cache\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"Execution  Summary:\n      -  Parse  SQL  Time:  18ms\n      -  Nereids  Analysis  Time:  N/A\n      -  Nereids  Rewrite  Time:  N/A\n      -  Nereids  Optimize  Time:  N/A\n      -  Nereids  Translate  Time:  N/A\n      -  Workload  Group:  normal\n      -  Analysis  Time:  N/A\n      -  Wait  and  Fetch  Result  Time:  N/A\n      -  Fetch  Result  Time:  0ms\n      -  Write  Result  Time:  0ms\n      -  Doris  Version:  915138e801\n      -  Is  Nereids:  Yes\n      -  Is  Cached:  Yes\n      -  Total  Instances  Num:  0\n      -  Instances  Num  Per  BE:  \n      -  Parallel  Fragment  Exec  Instance  Num:  1\n      -  Trace  ID:  \n      -  Transaction  Commit  Time:  N/A\n      -  Nereids  Distribute  Time:  N/A\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u4E24\u79CD\u65B9\u6CD5\u5747\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u6709\u6548\u7684\u624B\u6BB5\u6765\u9A8C\u8BC1\u67E5\u8BE2\u662F\u5426\u5229\u7528\u4E86 SQL Cache\uFF0C\u4ECE\u800C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u8BC4\u4F30\u67E5\u8BE2\u6027\u80FD\u5E76\u4F18\u5316\u67E5\u8BE2\u7B56\u7565\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6307\u6807\u76D1\u63A7",children:"\u6307\u6807\u76D1\u63A7"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1. \u5728 FE \u7684 HTTP \u63A5\u53E3"})," ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"http://${FE_IP}:${FE_HTTP_PORT}/metrics"})})," ",(0,s.jsx)(n.strong,{children:"\u4F1A\u8FD4\u56DE\u4E24\u4E2A\u76F8\u5173\u6307\u6807\uFF1A"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'# \u4EE3\u8868\u5DF2\u7ECF\u628A 1 \u4E2A SQL \u5199\u5165\u5230\u7F13\u5B58\u4E2D\ndoris_fe_cache_added{type="sql"} 1\n\n# \u4EE3\u8868\u547D\u4E2D\u4E86\u4E24\u6B21 SQL Cache\ndoris_fe_cache_hit{type="sql"} 2\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsx)(n.p,{children:"\u4EE5\u4E0A\u6307\u6807\u7EDF\u8BA1\u7684\u662F\u547D\u4E2D\u6B21\u6570\uFF0C\u53EA\u589E\u4E0D\u51CF\uFF0C\u5F53 FE \u91CD\u542F\u540E\u4ECE 0 \u5F00\u59CB\u7EDF\u8BA1\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2. \u5728 BE \u7684 HTTP \u63A5\u53E3"})," ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"http://${BE_IP}:${BE_HTTP_PORT}/metrics"})})," ",(0,s.jsx)(n.strong,{children:"\u4F1A\u8FD4\u56DE\u76F8\u5173\u4FE1\u606F\uFF1A"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"# \u4EE3\u8868\u5F53\u524D BE \u7684\u5185\u5B58\u4E2D\u5B58\u5728 1205 \u4E2A Cache\ndoris_be_query_cache_sql_total_count 1205\n\n# \u5F53\u524D\u6240\u6709 Cache \u5360\u7528 BE \u5185\u5B58 44k\ndoris_be_query_cache_memory_total_byte 44101\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsx)(n.p,{children:"\u4E0D\u540C\u7684 Cache \u53EF\u80FD\u4F1A\u5B58\u653E\u5230\u4E0D\u540C\u7684 BE \u4E2D\uFF0C\u56E0\u6B64\u9700\u6536\u96C6\u6240\u6709 BE \u7684 Metrics \u624D\u80FD\u5F97\u5230\u5B8C\u6574\u4FE1\u606F\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u5B58\u63A7\u5236",children:"\u5185\u5B58\u63A7\u5236"}),"\n",(0,s.jsx)(n.h3,{id:"fe-\u5185\u5B58\u63A7\u5236",children:"FE \u5185\u5B58\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 FE \u4E2D\uFF0CCache \u7684\u5143\u6570\u636E\u4FE1\u606F\u88AB\u8BBE\u7F6E\u4E3A\u5F31\u5F15\u7528\u3002\u5F53 FE \u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u91CA\u653E\u6700\u8FD1\u6700\u4E45\u672A\u4F7F\u7528\u7684 Cache \u5143\u6570\u636E\u3002\u6B64\u5916\uFF0C\u7528\u6237\u8FD8\u53EF\u4EE5\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B SQL \u8BED\u53E5\uFF0C\u8FDB\u4E00\u6B65\u9650\u5236 FE \u5185\u5B58\u7684\u4F7F\u7528\u91CF\u3002\u6B64\u914D\u7F6E\u5B9E\u65F6\u751F\u6548\uFF0C\u4E14\u6BCF\u4E2A FE \u90FD\u9700\u8981\u8FDB\u884C\u914D\u7F6E\u3002\u82E5\u9700\u6301\u4E45\u5316\u914D\u7F6E\uFF0C\u5219\u9700\u5C06\u5176\u4FDD\u5B58\u5728 fe.conf \u6587\u4EF6\u4E2D\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u6700\u591A\u5B58\u653E 100 \u4E2A Cache \u5143\u6570\u636E\uFF0C\u8D85\u8FC7\u65F6\u81EA\u52A8\u91CA\u653E\u6700\u8FD1\u6700\u4E45\u672A\u4F7F\u7528\u7684\u5143\u6570\u636E\u3002\u9ED8\u8BA4\u503C\u4E3A 100\u3002  \nADMIN SET FRONTEND CONFIG ('sql_cache_manage_num'='100');  \n  \n-- \u5F53 300 \u79D2\u672A\u8BBF\u95EE\u8BE5 Cache \u5143\u6570\u636E\u540E\uFF0C\u81EA\u52A8\u8FDB\u884C\u91CA\u653E\u3002\u9ED8\u8BA4\u503C\u4E3A 300\u3002  \nADMIN SET FRONTEND CONFIG ('expire_sql_cache_in_fe_second'='300');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"be-\u5185\u5B58\u63A7\u5236",children:"BE \u5185\u5B58\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 be.conf \u6587\u4EF6\u4E2D\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\u66F4\u6539\uFF0C\u91CD\u542F BE \u540E\u751F\u6548\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5F53 Cache \u7684\u5185\u5B58\u7A7A\u95F4\u8D85\u8FC7 query_cache_max_size_mb + query_cache_elasticity_size_mb \u65F6\uFF0C  \n-- \u91CA\u653E\u6700\u8FD1\u6700\u4E45\u672A\u4F7F\u7528\u7684 Cache\uFF0C\u76F4\u81F3\u5360\u7528\u5185\u5B58\u4F4E\u4E8E query_cache_max_size_mb\u3002  \nquery_cache_max_size_mb = 256  \nquery_cache_elasticity_size_mb = 128\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53E6\u5916\u8FD8\u53EF\u4EE5\u5728 FE \u4E2D\u914D\u7F6E\uFF0C\u5F53\u7ED3\u679C\u884C\u6570\u6216\u5927\u5C0F\u8D85\u8FC7\u67D0\u4E2A\u9608\u503C\u65F6\uFF0C\u4E0D\u521B\u5EFA SQL Cache\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u9ED8\u8BA4\u8D85\u8FC7 3000 \u884C\u7ED3\u679C\u65F6\uFF0C\u4E0D\u521B\u5EFA SQL Cache\u3002  \nADMIN SET FRONTEND CONFIG ('cache_result_max_row_count'='3000');  \n  \n-- \u9ED8\u8BA4\u8D85\u8FC7 30M \u65F6\uFF0C\u4E0D\u521B\u5EFA SQL Cache\u3002  \nADMIN SET FRONTEND CONFIG ('cache_result_max_data_size'='31457280');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6392\u67E5\u7F13\u5B58\u5931\u6548\u539F\u56E0",children:"\u6392\u67E5\u7F13\u5B58\u5931\u6548\u539F\u56E0"}),"\n",(0,s.jsx)(n.p,{children:"\u7F13\u5B58\u5931\u6548\u539F\u56E0\u4E00\u822C\u5305\u62EC\u4EE5\u4E0B\u51E0\u70B9\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8868/\u89C6\u56FE\u7684\u7ED3\u6784\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F8B\u5982\u6267\u884C\u4E86 ",(0,s.jsx)(n.code,{children:"drop table"}),"\u3001",(0,s.jsx)(n.code,{children:"replace table"}),"\u3001",(0,s.jsx)(n.code,{children:"alter table"})," \u6216 ",(0,s.jsx)(n.code,{children:"alter view"})," \u7B49\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8868\u6570\u636E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F8B\u5982\u6267\u884C\u4E86 ",(0,s.jsx)(n.code,{children:"insert"}),"\u3001",(0,s.jsx)(n.code,{children:"delete"}),"\u3001",(0,s.jsx)(n.code,{children:"update"})," \u6216 ",(0,s.jsx)(n.code,{children:"truncate"})," \u7B49\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7528\u6237\u6743\u9650\u88AB\u79FB\u9664\uFF0C\u4F8B\u5982\u6267\u884C\u4E86 ",(0,s.jsx)(n.code,{children:"revoke"})," \u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u4E86\u975E\u786E\u5B9A\u51FD\u6570\uFF0C\u5E76\u4E14\u51FD\u6570\u7684\u8BC4\u4F30\u503C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F8B\u5982\u6267\u884C\u4E86 ",(0,s.jsx)(n.code,{children:"select random()"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u4E86\u53D8\u91CF\uFF0C\u5E76\u4E14\u53D8\u91CF\u7684\u503C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F8B\u5982\u6267\u884C\u4E86 ",(0,s.jsx)(n.code,{children:"select * from tbl where dt = @dt_var"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Row Policy \u6216 Data Masking \u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u4E86\u7528\u6237\u5BF9\u67D0\u4E9B\u8868\u7684\u90E8\u5206\u6570\u636E\u4E0D\u53EF\u89C1\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7ED3\u679C\u884C\u6570\u8D85\u8FC7\u4E86 FE \u914D\u7F6E\u7684 ",(0,s.jsx)(n.code,{children:"cache_result_max_row_count"}),"\uFF0C\u9ED8\u8BA4\u503C\u4E3A 3000 \u884C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7ED3\u679C\u5927\u5C0F\u8D85\u8FC7\u4E86 FE \u914D\u7F6E\u7684 ",(0,s.jsx)(n.code,{children:"cache_result_max_data_size"}),"\uFF0C\u9ED8\u8BA4\u503C\u4E3A 30MB\u3002"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return r},a:function(){return a}});var l=c(667294);let s={},i=l.createContext(s);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);