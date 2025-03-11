"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["329610"],{244912:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"lakehouse/lakehouse-best-practices/doris-hudi","title":"\u4F7F\u7528 Doris \u548C Hudi","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/lakehouse-best-practices/doris-hudi.md","sourceDirName":"lakehouse/lakehouse-best-practices","slug":"/lakehouse/lakehouse-best-practices/doris-hudi","permalink":"/zh-CN/docs/lakehouse/lakehouse-best-practices/doris-hudi","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u4F7F\u7528 Doris \u548C Hudi","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SQL \u65B9\u8A00\u517C\u5BB9","permalink":"/zh-CN/docs/lakehouse/sql-dialect"},"next":{"title":"\u4F7F\u7528 Doris \u548C Paimon","permalink":"/zh-CN/docs/lakehouse/lakehouse-best-practices/doris-paimon"}}'),c=n("785893"),r=n("250065");let t={title:"\u4F7F\u7528 Doris \u548C Hudi",language:"zh-CN"},a=void 0,l={},o=[{value:"Apache Doris &amp; Hudi",id:"apache-doris--hudi",level:2},{value:"\u4F7F\u7528\u6307\u5357",id:"\u4F7F\u7528\u6307\u5357",level:2},{value:"01 \u73AF\u5883\u51C6\u5907",id:"01-\u73AF\u5883\u51C6\u5907",level:3},{value:"02 \u73AF\u5883\u90E8\u7F72",id:"02-\u73AF\u5883\u90E8\u7F72",level:3},{value:"03 \u6570\u636E\u51C6\u5907",id:"03-\u6570\u636E\u51C6\u5907",level:3},{value:"04 \u6570\u636E\u67E5\u8BE2",id:"04-\u6570\u636E\u67E5\u8BE2",level:3},{value:"05 Incremental Read",id:"05-incremental-read",level:3},{value:"06 TimeTravel",id:"06-timetravel",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2}];function d(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"\u4F5C\u4E3A\u4E00\u79CD\u5168\u65B0\u7684\u5F00\u653E\u5F0F\u7684\u6570\u636E\u7BA1\u7406\u67B6\u6784\uFF0C\u6E56\u4ED3\u4E00\u4F53\uFF08Data Lakehouse\uFF09\u878D\u5408\u4E86\u6570\u636E\u4ED3\u5E93\u7684\u9AD8\u6027\u80FD\u3001\u5B9E\u65F6\u6027\u4EE5\u53CA\u6570\u636E\u6E56\u7684\u4F4E\u6210\u672C\u3001\u7075\u6D3B\u6027\u7B49\u4F18\u52BF\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u52A0\u4FBF\u6377\u5730\u6EE1\u8DB3\u5404\u79CD\u6570\u636E\u5904\u7406\u5206\u6790\u7684\u9700\u6C42\uFF0C\u5728\u4F01\u4E1A\u7684\u5927\u6570\u636E\u4F53\u7CFB\u4E2D\u5DF2\u7ECF\u5F97\u5230\u8D8A\u6765\u8D8A\u591A\u7684\u5E94\u7528\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u5728\u8FC7\u53BB\u591A\u4E2A\u7248\u672C\u4E2D\uFF0CApache Doris \u6301\u7EED\u52A0\u6DF1\u4E0E\u6570\u636E\u6E56\u7684\u878D\u5408\uFF0C\u5F53\u524D\u5DF2\u6F14\u8FDB\u51FA\u4E00\u5957\u6210\u719F\u7684\u6E56\u4ED3\u4E00\u4F53\u89E3\u51B3\u65B9\u6848\u3002"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u81EA 0.15 \u7248\u672C\u8D77\uFF0CApache Doris \u5F15\u5165 Hive \u548C Iceberg \u5916\u90E8\u8868\uFF0C\u5C1D\u8BD5\u5728 Apache Iceberg \u4E4B\u4E0A\u63A2\u7D22\u4E0E\u6570\u636E\u6E56\u7684\u80FD\u529B\u7ED3\u5408\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u81EA 1.2 \u7248\u672C\u8D77\uFF0CApache Doris \u6B63\u5F0F\u5F15\u5165 Multi-Catalog \u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u591A\u79CD\u6570\u636E\u6E90\u7684\u81EA\u52A8\u5143\u6570\u636E\u6620\u5C04\u548C\u6570\u636E\u8BBF\u95EE\u3001\u5E76\u5BF9\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u548C\u67E5\u8BE2\u6267\u884C\u7B49\u65B9\u9762\u505A\u4E86\u8BF8\u591A\u6027\u80FD\u4F18\u5316\uFF0C\u5B8C\u5168\u5177\u5907\u4E86\u6784\u5EFA\u6781\u901F\u6613\u7528 Lakehouse \u67B6\u6784\u7684\u80FD\u529B\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u5728 2.1 \u7248\u672C\u4E2D\uFF0CApache Doris \u6E56\u4ED3\u4E00\u4F53\u67B6\u6784\u5F97\u5230\u5168\u9762\u52A0\u5F3A\uFF0C\u4E0D\u4EC5\u589E\u5F3A\u4E86\u4E3B\u6D41\u6570\u636E\u6E56\u683C\u5F0F\uFF08Hudi\u3001Iceberg\u3001Paimon \u7B49\uFF09\u7684\u8BFB\u53D6\u548C\u5199\u5165\u80FD\u529B\uFF0C\u8FD8\u5F15\u5165\u4E86\u591A SQL \u65B9\u8A00\u517C\u5BB9\u3001\u53EF\u4ECE\u539F\u6709\u7CFB\u7EDF\u65E0\u7F1D\u5207\u6362\u81F3 Apache Doris\u3002\u5728\u6570\u636E\u79D1\u5B66\u53CA\u5927\u89C4\u6A21\u6570\u636E\u8BFB\u53D6\u573A\u666F\u4E0A\uFF0CDoris \u96C6\u6210\u4E86 Arrow Flight \u9AD8\u901F\u8BFB\u53D6\u63A5\u53E3\uFF0C\u4F7F\u5F97\u6570\u636E\u4F20\u8F93\u6548\u7387\u5B9E\u73B0 100 \u500D\u7684\u63D0\u5347\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"\u4F7F\u7528 Doris \u548C Hudi \u6784\u5EFA Lakehouse",src:n(758614).Z+"",width:"2560",height:"1280"})}),"\n",(0,c.jsx)(s.h2,{id:"apache-doris--hudi",children:"Apache Doris & Hudi"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://hudi.apache.org/",children:"Apache Hudi"})," \u662F\u76EE\u524D\u6700\u4E3B\u6D41\u7684\u5F00\u653E\u6570\u636E\u6E56\u683C\u5F0F\u4E4B\u4E00\uFF0C\u4E5F\u662F\u4E8B\u52A1\u6027\u7684\u6570\u636E\u6E56\u7BA1\u7406\u5E73\u53F0\uFF0C\u652F\u6301\u5305\u62EC Apache Doris \u5728\u5185\u7684\u591A\u79CD\u4E3B\u6D41\u67E5\u8BE2\u5F15\u64CE\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"Apache Doris \u540C\u6837\u5BF9 Apache Hudi \u6570\u636E\u8868\u7684\u8BFB\u53D6\u80FD\u529B\u8FDB\u884C\u4E86\u589E\u5F3A\uFF1A"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u652F\u6301 Copy on Write Table\uFF1ASnapshot Query"}),"\n",(0,c.jsx)(s.li,{children:"\u652F\u6301 Merge on Read Table\uFF1ASnapshot Queries, Read Optimized Queries"}),"\n",(0,c.jsx)(s.li,{children:"\u652F\u6301 Time Travel"}),"\n",(0,c.jsx)(s.li,{children:"\u652F\u6301 Incremental Read"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u51ED\u501F Apache Doris \u7684\u9AD8\u6027\u80FD\u67E5\u8BE2\u6267\u884C\u4EE5\u53CA Apache Hudi \u7684\u5B9E\u65F6\u6570\u636E\u7BA1\u7406\u80FD\u529B\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u6548\u3001\u7075\u6D3B\u3001\u4F4E\u6210\u672C\u7684\u6570\u636E\u67E5\u8BE2\u548C\u5206\u6790\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u56DE\u6EAF\u3001\u5BA1\u8BA1\u548C\u589E\u91CF\u5904\u7406\u529F\u80FD\uFF0C\u5F53\u524D\u57FA\u4E8E Apache Doris \u548C Apache Hudi \u7684\u7EC4\u5408\u5DF2\u7ECF\u5728\u591A\u4E2A\u793E\u533A\u7528\u6237\u7684\u771F\u5B9E\u4E1A\u52A1\u573A\u666F\u4E2D\u5F97\u5230\u9A8C\u8BC1\u548C\u63A8\u5E7F\uFF1A"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5B9E\u65F6\u6570\u636E\u5206\u6790\u4E0E\u5904\u7406\uFF1A\u6BD4\u5982\u91D1\u878D\u884C\u4E1A\u4EA4\u6613\u5206\u6790\u3001\u5E7F\u544A\u884C\u4E1A\u5B9E\u65F6\u70B9\u51FB\u6D41\u5206\u6790\u3001\u7535\u5546\u884C\u4E1A\u7528\u6237\u884C\u4E3A\u5206\u6790\u7B49\u5E38\u89C1\u573A\u666F\u4E0B\uFF0C\u90FD\u8981\u6C42\u5B9E\u65F6\u7684\u6570\u636E\u66F4\u65B0\u53CA\u67E5\u8BE2\u5206\u6790\u3002Hudi \u80FD\u591F\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u5B9E\u65F6\u66F4\u65B0\u548C\u7BA1\u7406\uFF0C\u5E76\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\u548C\u53EF\u9760\u6027\uFF0CDoris \u5219\u80FD\u591F\u5B9E\u65F6\u9AD8\u6548\u5904\u7406\u5927\u89C4\u6A21\u6570\u636E\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u4E8C\u8005\u7ED3\u5408\u80FD\u591F\u5145\u5206\u6EE1\u8DB3\u5B9E\u65F6\u6570\u636E\u5206\u6790\u4E0E\u5904\u7406\u7684\u9700\u6C42\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u6570\u636E\u56DE\u6EAF\u4E0E\u5BA1\u8BA1\uFF1A\u5BF9\u4E8E\u91D1\u878D\u3001\u533B\u7597\u7B49\u5BF9\u6570\u636E\u5B89\u5168\u548C\u51C6\u786E\u6027\u8981\u6C42\u6781\u9AD8\u7684\u884C\u4E1A\u6765\u8BF4\uFF0C\u6570\u636E\u56DE\u6EAF\u548C\u5BA1\u8BA1\u662F\u975E\u5E38\u91CD\u8981\u7684\u529F\u80FD\u3002Hudi \u63D0\u4F9B\u4E86\u65F6\u95F4\u65C5\u884C\uFF08Time Travel\uFF09\u529F\u80FD\uFF0C\u5141\u8BB8\u7528\u6237\u67E5\u770B\u5386\u53F2\u6570\u636E\u72B6\u6001\uFF0C\u7ED3\u5408 Apache Doris \u9AD8\u6548\u67E5\u8BE2\u80FD\u529B\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u5206\u6790\u4EFB\u4F55\u65F6\u95F4\u70B9\u7684\u6570\u636E\uFF0C\u5B9E\u73B0\u7CBE\u786E\u7684\u56DE\u6EAF\u548C\u5BA1\u8BA1\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u589E\u91CF\u6570\u636E\u8BFB\u53D6\u4E0E\u5206\u6790\uFF1A\u5728\u8FDB\u884C\u5927\u6570\u636E\u5206\u6790\u65F6\u5F80\u5F80\u9762\u4E34\u7740\u6570\u636E\u89C4\u6A21\u5E9E\u5927\u3001\u66F4\u65B0\u9891\u7E41\u7684\u95EE\u9898\uFF0CHudi \u652F\u6301\u589E\u91CF\u6570\u636E\u8BFB\u53D6\uFF0C\u8FD9\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u53EA\u9700\u5904\u7406\u53D8\u5316\u7684\u6570\u636E\uFF0C\u4E0D\u5FC5\u8FDB\u884C\u5168\u91CF\u6570\u636E\u66F4\u65B0\uFF1B\u540C\u65F6 Apache Doris \u7684 Incremental Read \u529F\u80FD\u4E5F\u53EF\u4F7F\u8FD9\u4E00\u8FC7\u7A0B\u66F4\u52A0\u9AD8\u6548\uFF0C\u663E\u8457\u63D0\u5347\u4E86\u6570\u636E\u5904\u7406\u548C\u5206\u6790\u7684\u6548\u7387\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u8DE8\u6570\u636E\u6E90\u8054\u90A6\u67E5\u8BE2\uFF1A\u8BB8\u591A\u4F01\u4E1A\u6570\u636E\u6765\u6E90\u590D\u6742\uFF0C\u6570\u636E\u53EF\u80FD\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u6570\u636E\u5E93\u4E2D\u3002Doris \u7684 Multi-Catalog \u529F\u80FD\u652F\u6301\u591A\u79CD\u6570\u636E\u6E90\u7684\u81EA\u52A8\u6620\u5C04\u4E0E\u540C\u6B65\uFF0C\u652F\u6301\u8DE8\u6570\u636E\u6E90\u7684\u8054\u90A6\u67E5\u8BE2\u3002\u8FD9\u5BF9\u4E8E\u9700\u8981\u4ECE\u591A\u4E2A\u6570\u636E\u6E90\u4E2D\u83B7\u53D6\u548C\u6574\u5408\u6570\u636E\u8FDB\u884C\u5206\u6790\u7684\u4F01\u4E1A\u6765\u8BF4\uFF0C\u6781\u5927\u5730\u7F29\u77ED\u4E86\u6570\u636E\u6D41\u8F6C\u8DEF\u5F84\uFF0C\u63D0\u5347\u4E86\u5DE5\u4F5C\u6548\u7387\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u672C\u6587\u5C06\u5728 Docker \u73AF\u5883\u4E0B\uFF0C\u4E3A\u8BFB\u8005\u4ECB\u7ECD\u5982\u4F55\u5FEB\u901F\u642D\u5EFA Apache Doris + Apache Hudi \u7684\u6D4B\u8BD5\u53CA\u6F14\u793A\u73AF\u5883\uFF0C\u5E76\u5BF9\u5404\u529F\u80FD\u64CD\u4F5C\u8FDB\u884C\u6F14\u793A\uFF0C\u5E2E\u52A9\u8BFB\u8005\u5FEB\u901F\u5165\u95E8\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u5173\u4E8E\u66F4\u591A\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605 ",(0,c.jsx)(s.a,{href:"../datalake-analytics/hudi",children:"Hudi Catalog"})]}),"\n",(0,c.jsx)(s.h2,{id:"\u4F7F\u7528\u6307\u5357",children:"\u4F7F\u7528\u6307\u5357"}),"\n",(0,c.jsxs)(s.p,{children:["\u672C\u6587\u6D89\u53CA\u6240\u6709\u811A\u672C\u548C\u4EE3\u7801\u53EF\u4EE5\u4ECE\u8BE5\u5730\u5740\u83B7\u53D6\uFF1A",(0,c.jsx)(s.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/hudi",children:"https://github.com/apache/doris/tree/master/samples/datalake/hudi"})]}),"\n",(0,c.jsx)(s.h3,{id:"01-\u73AF\u5883\u51C6\u5907",children:"01 \u73AF\u5883\u51C6\u5907"}),"\n",(0,c.jsx)(s.p,{children:"\u672C\u6587\u793A\u4F8B\u91C7\u7528 Docker Compose \u90E8\u7F72\uFF0C\u7EC4\u4EF6\u53CA\u7248\u672C\u53F7\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u7EC4\u4EF6\u540D\u79F0"}),(0,c.jsx)(s.th,{children:"\u7248\u672C"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"Apache Doris"}),(0,c.jsx)(s.td,{children:"\u9ED8\u8BA4 2.1.4\uFF0C\u53EF\u4FEE\u6539"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"Apache Hudi"}),(0,c.jsx)(s.td,{children:"0.14"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"Apache Spark"}),(0,c.jsx)(s.td,{children:"3.4.2"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"Apache Hive"}),(0,c.jsx)(s.td,{children:"2.1.3"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"MinIO"}),(0,c.jsx)(s.td,{children:"2022-05-26T05-48-41Z"})]})]})]}),"\n",(0,c.jsx)(s.h3,{id:"02-\u73AF\u5883\u90E8\u7F72",children:"02 \u73AF\u5883\u90E8\u7F72"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u521B\u5EFA Docker \u7F51\u7EDC"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"sudo docker network create -d bridge hudi-net"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u542F\u52A8\u6240\u6709\u7EC4\u4EF6"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"sudo ./start-hudi-compose.sh"})}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:["\u6CE8\uFF1A\u542F\u52A8\u524D\uFF0C\u53EF\u5C06 ",(0,c.jsx)(s.code,{children:"start-hudi-compose.sh"})," \u4E2D\u7684 ",(0,c.jsx)(s.code,{children:"DORIS_PACKAGE"})," \u548C ",(0,c.jsx)(s.code,{children:"DORIS_DOWNLOAD_URL"})," \u4FEE\u6539\u6210\u9700\u8981\u7684 Doris \u7248\u672C\u3002\u5EFA\u8BAE\u4F7F\u7528 2.1.4 \u6216\u66F4\u9AD8\u7248\u672C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u811A\u672C\uFF0C\u767B\u9646 Spark \u547D\u4EE4\u884C\u6216 Doris \u547D\u4EE4\u884C\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- Doris\nsudo ./login-spark.sh\n\n-- Spark\nsudo ./login-doris.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"03-\u6570\u636E\u51C6\u5907",children:"03 \u6570\u636E\u51C6\u5907"}),"\n",(0,c.jsxs)(s.p,{children:["\u63A5\u4E0B\u6765\u5148\u901A\u8FC7 Spark \u751F\u6210 Hudi \u7684\u6570\u636E\u3002\u5982\u4E0B\u65B9\u4EE3\u7801\u6240\u793A\uFF0C\u96C6\u7FA4\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E00\u5F20\u540D\u4E3A ",(0,c.jsx)(s.code,{children:"customer"})," \u7684 Hive \u8868\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u5F20 Hive \u8868\uFF0C\u521B\u5EFA\u4E00\u4E2A Hudi \u8868\uFF1A"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- ./login-spark.sh\nspark-sql> use default;\n\n-- create a COW table\nspark-sql> CREATE TABLE customer_cow\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n\n-- create a MOR table\nspark-sql> CREATE TABLE customer_mor\nUSING hudi\nTBLPROPERTIES (\n  type = 'mor',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n"})}),"\n",(0,c.jsx)(s.h3,{id:"04-\u6570\u636E\u67E5\u8BE2",children:"04 \u6570\u636E\u67E5\u8BE2"}),"\n",(0,c.jsxs)(s.p,{children:["\u5982\u4E0B\u6240\u793A\uFF0CDoris \u96C6\u7FA4\u4E2D\u5DF2\u7ECF\u521B\u5EFA\u4E86\u540D\u4E3A ",(0,c.jsx)(s.code,{children:"hudi"})," \u7684 Catalog\uFF08\u53EF\u901A\u8FC7 ",(0,c.jsx)(s.code,{children:"SHOW CATALOGS"})," \u67E5\u770B\uFF09\u3002\u4EE5\u4E0B\u4E3A\u8BE5 Catalog \u7684\u521B\u5EFA\u8BED\u53E5\uFF1A"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'-- \u5DF2\u7ECF\u521B\u5EFA\uFF0C\u65E0\u9700\u518D\u6B21\u6267\u884C\nCREATE CATALOG `hudi` PROPERTIES (\n    "type"="hms",\n    \'hive.metastore.uris\' = \'thrift://hive-metastore:9083\',\n    "s3.access_key" = "minio",\n    "s3.secret_key" = "minio123",\n    "s3.endpoint" = "http://minio:9000",\n    "s3.region" = "us-east-1",\n    "use_path_style" = "true"\n);\n'})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u624B\u52A8\u5237\u65B0\u8BE5 Catalog\uFF0C\u5BF9\u521B\u5EFA\u7684 Hudi \u8868\u8FDB\u884C\u540C\u6B65\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- ./login-doris.sh\ndoris> REFRESH CATALOG hudi;\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u4F7F\u7528 Spark \u64CD\u4F5C Hudi \u4E2D\u7684\u6570\u636E\uFF0C\u90FD\u53EF\u4EE5\u5728 Doris \u4E2D\u5B9E\u65F6\u53EF\u89C1\uFF0C\u4E0D\u9700\u8981\u518D\u6B21\u5237\u65B0 Catalog\u3002\u6211\u4EEC\u901A\u8FC7 Spark \u5206\u522B\u7ED9 COW \u548C MOR \u8868\u63D2\u5165\u4E00\u884C\u6570\u636E\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'spark-sql> insert into customer_cow values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\nspark-sql> insert into customer_mor values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u901A\u8FC7 Doris \u53EF\u4EE5\u76F4\u63A5\u67E5\u8BE2\u5230\u6700\u65B0\u63D2\u5165\u7684\u6570\u636E\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"doris> use hudi.default;\ndoris> select * from customer_cow where c_custkey = 100;\ndoris> select * from customer_mor where c_custkey = 100;\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u518D\u901A\u8FC7 Spark \u63D2\u5165 c_custkey=32 \u5DF2\u7ECF\u5B58\u5728\u7684\u6570\u636E\uFF0C\u5373\u8986\u76D6\u5DF2\u6709\u6570\u636E\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'spark-sql> insert into customer_cow values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\nspark-sql> insert into customer_mor values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u901A\u8FC7 Doris \u53EF\u4EE5\u67E5\u8BE2\u66F4\u65B0\u540E\u7684\u6570\u636E\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"doris> select * from customer_cow where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\ndoris> select * from customer_mor where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"05-incremental-read",children:"05 Incremental Read"}),"\n",(0,c.jsxs)(s.p,{children:["Incremental Read \u662F Hudi \u63D0\u4F9B\u7684\u529F\u80FD\u7279\u6027\u4E4B\u4E00\uFF0C\u901A\u8FC7 Incremental Read\uFF0C\u7528\u6237\u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u65F6\u95F4\u8303\u56F4\u7684\u589E\u91CF\u6570\u636E\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u589E\u91CF\u5904\u7406\u3002\u5BF9\u6B64\uFF0CDoris \u53EF\u5BF9\u63D2\u5165 ",(0,c.jsx)(s.code,{children:"c_custkey=100"})," \u540E\u7684\u53D8\u66F4\u6570\u636E\u8FDB\u884C\u67E5\u8BE2\u3002\u5982\u4E0B\u6240\u793A\uFF0C\u6211\u4EEC\u63D2\u5165\u4E86\u4E00\u6761 ",(0,c.jsx)(s.code,{children:"c_custkey=32"})," \u7684\u6570\u636E\uFF1A"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"doris> select * from customer_cow@incr('beginTime'='20240603015018572');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_cow', 'latest_state', '20240603015018572');\n\ndoris> select * from customer_mor@incr('beginTime'='20240603015058442');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_mor', 'latest_state', '20240603015058442');\n"})}),"\n",(0,c.jsx)(s.h3,{id:"06-timetravel",children:"06 TimeTravel"}),"\n",(0,c.jsx)(s.p,{children:"Doris \u652F\u6301\u67E5\u8BE2\u6307\u5B9A\u5FEB\u7167\u7248\u672C\u7684 Hudi \u6570\u636E\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u7684 Time Travel \u529F\u80FD\u3002\u9996\u5148\uFF0C\u53EF\u4EE5\u901A\u8FC7 Spark \u67E5\u8BE2\u4E24\u5F20 Hudi \u8868\u7684\u63D0\u4EA4\u5386\u53F2\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"spark-sql> call show_commits(table => 'customer_cow', limit => 10);\n20240603033556094        20240603033558249        commit        448833        0        1        1        183        0        0\n20240603015444737        20240603015446588        commit        450238        0        1        1        202        1        0\n20240603015018572        20240603015020503        commit        436692        1        0        1        1        0        0\n20240603013858098        20240603013907467        commit        44902033        100        0        25        18751        0        0\n\nspark-sql> call show_commits(table => 'customer_mor', limit => 10);\n20240603033745977        20240603033748021        deltacommit        1240        0        1        1        0        0        0\n20240603015451860        20240603015453539        deltacommit        1434        0        1        1        1        1        0\n20240603015058442        20240603015100120        deltacommit        436691        1        0        1        1        0        0\n20240603013918515        20240603013922961        deltacommit        44904040        100        0        25        18751        0        0\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u63A5\u7740\uFF0C\u53EF\u901A\u8FC7 Doris \u6267\u884C ",(0,c.jsx)(s.code,{children:"c_custkey=32"})," \uFF0C\u67E5\u8BE2\u6570\u636E\u63D2\u5165\u4E4B\u524D\u7684\u6570\u636E\u5FEB\u7167\u3002\u5982\u4E0B\u53EF\u770B\u5230 ",(0,c.jsx)(s.code,{children:"c_custkey=32"})," \u7684\u6570\u636E\u8FD8\u672A\u66F4\u65B0\uFF1A"]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\u6CE8\uFF1ATime Travel \u8BED\u6CD5\u6682\u65F6\u4E0D\u652F\u6301\u65B0\u4F18\u5316\u5668\uFF0C\u9700\u8981\u5148\u6267\u884C set enable_nereids_planner=false;\u5173\u95ED\u65B0\u4F18\u5316\u5668\uFF0C\u8BE5\u95EE\u9898\u5C06\u4F1A\u5728\u540E\u7EED\u7248\u672C\u4E2D\u4FEE\u590D\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"doris> select * from customer_cow for time as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n-- compare with spark-sql\nspark-sql> select * from customer_mor timestamp as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n\ndoris> select * from customer_mor for time as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\nspark-sql> select * from customer_mor timestamp as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,c.jsx)(s.p,{children:"Apache Hudi \u4E2D\u7684\u6570\u636E\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u4E24\u7C7B \u2014\u2014 \u57FA\u7EBF\u6570\u636E\u548C\u589E\u91CF\u6570\u636E\u3002\u57FA\u7EBF\u6570\u636E\u901A\u5E38\u662F\u5DF2\u7ECF\u7ECF\u8FC7\u5408\u5E76\u7684 Parquet \u6587\u4EF6\uFF0C\u800C\u589E\u91CF\u6570\u636E\u662F\u6307\u7531 INSERT\u3001UPDATE \u6216 DELETE \u4EA7\u751F\u7684\u6570\u636E\u589E\u91CF\u3002\u57FA\u7EBF\u6570\u636E\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\uFF0C\u589E\u91CF\u6570\u636E\u9700\u8981\u901A\u8FC7 Merge on Read \u7684\u65B9\u5F0F\u8FDB\u884C\u8BFB\u53D6\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u5BF9\u4E8E Hudi COW \u8868\u7684\u67E5\u8BE2\u6216\u8005 MOR \u8868\u7684 Read Optimized \u67E5\u8BE2\u800C\u8A00\uFF0C\u5176\u6570\u636E\u90FD\u5C5E\u4E8E\u57FA\u7EBF\u6570\u636E\uFF0C\u53EF\u76F4\u63A5\u901A\u8FC7 Doris \u539F\u751F\u7684 Parquet Reader \u8BFB\u53D6\u6570\u636E\u6587\u4EF6\uFF0C\u4E14\u53EF\u83B7\u5F97\u6781\u901F\u7684\u67E5\u8BE2\u54CD\u5E94\u3002\u800C\u5BF9\u4E8E\u589E\u91CF\u6570\u636E\uFF0CDoris \u9700\u8981\u901A\u8FC7 JNI \u8C03\u7528 Hudi \u7684 Java SDK \u8FDB\u884C\u8BBF\u95EE\u3002\u4E3A\u4E86\u8FBE\u5230\u6700\u4F18\u7684\u67E5\u8BE2\u6027\u80FD\uFF0CApache Doris \u5728\u67E5\u8BE2\u65F6\uFF0C\u4F1A\u5C06\u4E00\u4E2A\u67E5\u8BE2\u4E2D\u7684\u6570\u636E\u5206\u4E3A\u57FA\u7EBF\u548C\u589E\u91CF\u6570\u636E\u4E24\u90E8\u5206\uFF0C\u5E76\u5206\u522B\u4F7F\u7528\u4E0A\u8FF0\u65B9\u5F0F\u8FDB\u884C\u8BFB\u53D6\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u4E3A\u9A8C\u8BC1\u8BE5\u4F18\u5316\u601D\u8DEF\uFF0C\u6211\u4EEC\u901A\u8FC7 EXPLAIN \u8BED\u53E5\u6765\u67E5\u770B\u4E00\u4E2A\u4E0B\u65B9\u793A\u4F8B\u7684\u67E5\u8BE2\u4E2D\uFF0C\u5206\u522B\u6709\u591A\u5C11\u57FA\u7EBF\u6570\u636E\u548C\u589E\u91CF\u6570\u636E\u3002\u5BF9\u4E8E COW \u8868\u6765\u8BF4\uFF0C\u6240\u6709 101 \u4E2A\u6570\u636E\u5206\u7247\u5747\u4E3A\u662F\u57FA\u7EBF\u6570\u636E\uFF08",(0,c.jsx)(s.code,{children:"hudiNativeReadSplits=101/101"}),"\uFF09\uFF0C\u56E0\u6B64 COW \u8868\u5168\u90E8\u53EF\u76F4\u63A5\u901A\u8FC7  Doris  Parquet Reader \u8FDB\u884C\u8BFB\u53D6\uFF0C\u56E0\u6B64\u53EF\u83B7\u5F97\u6700\u4F73\u7684\u67E5\u8BE2\u6027\u80FD\u3002\u5BF9\u4E8E ROW \u8868\uFF0C\u5927\u90E8\u5206\u6570\u636E\u5206\u7247\u662F\u57FA\u7EBF\u6570\u636E\uFF08",(0,c.jsx)(s.code,{children:"hudiNativeReadSplits=100/101"}),"\uFF09\uFF0C\u4E00\u4E2A\u5206\u7247\u6570\u4E3A\u589E\u91CF\u6570\u636E\uFF0C\u57FA\u672C\u4E5F\u80FD\u591F\u83B7\u5F97\u8F83\u597D\u7684\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- COW table is read natively\ndoris> explain select * from customer_cow where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_cow                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45338886, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=101/101                              |\n\n-- MOR table: because only the base file contains `c_custkey = 32` that is updated, 100 splits are read natively, while the split with log file is read by JNI.\ndoris> explain select * from customer_mor where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45340731, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=100/101                              |\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u53EF\u4EE5\u901A\u8FC7 Spark \u8FDB\u884C\u4E00\u4E9B\u5220\u9664\u64CD\u4F5C\uFF0C\u8FDB\u4E00\u6B65\u89C2\u5BDF Hudi \u57FA\u7EBF\u6570\u636E\u548C\u589E\u91CF\u6570\u636E\u7684\u53D8\u5316\uFF1A"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- Use delete statement to see more differences\nspark-sql> delete from customer_cow where c_custkey = 64;\ndoris> explain select * from customer_cow where c_custkey = 64;\n\nspark-sql> delete from customer_mor where c_custkey = 64;\ndoris> explain select * from customer_mor where c_custkey = 64;\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5206\u533A\u6761\u4EF6\u8FDB\u884C\u5206\u533A\u88C1\u526A\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u51CF\u5C11\u6570\u636E\u91CF\uFF0C\u4EE5\u63D0\u5347\u67E5\u8BE2\u901F\u5EA6\u3002\u5982\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u901A\u8FC7\u5206\u533A\u6761\u4EF6 ",(0,c.jsx)(s.code,{children:"c_nationkey=15"})," \u8FDB\u884C\u5206\u533A\u88C1\u51CF\uFF0C\u4F7F\u5F97\u67E5\u8BE2\u8BF7\u6C42\u53EA\u9700\u8981\u8BBF\u95EE\u4E00\u4E2A\u5206\u533A\uFF08",(0,c.jsx)(s.code,{children:"partition=1/26"}),"\uFF09\u7684\u6570\u636E\u5373\u53EF\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"-- customer_xxx is partitioned by c_nationkey, we can use the partition column to prune data\ndoris> explain select * from customer_mor where c_custkey = 64 and c_nationkey = 15;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 64), (c_nationkey[#12] = 15) |\n|      inputSplitNum=4, totalFileSize=1798186, scanRanges=4      |\n|      partition=1/26                                            |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=3/4                                  |\n"})})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},758614:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/lakehouse-architecture-for-doris-and-hudi-d456941968fdb7115f91bf70b919b62a.png"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var i=n(667294);let c={},r=i.createContext(c);function t(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);