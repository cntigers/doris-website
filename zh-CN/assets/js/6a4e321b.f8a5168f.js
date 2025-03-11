"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["449657"],{867476:function(n,e,d){d.r(e),d.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>r,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"lakehouse/catalogs/maxcompute-catalog","title":"MaxCompute Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/catalogs/maxcompute-catalog.md","sourceDirName":"lakehouse/catalogs","slug":"/lakehouse/catalogs/maxcompute-catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/maxcompute-catalog","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MaxCompute Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Paimon Catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/paimon-catalog"},"next":{"title":"Delta Lake Catalog","permalink":"/zh-CN/docs/dev/lakehouse/catalogs/delta-lake-catalog"}}'),c=d("785893"),t=d("250065");let i={title:"MaxCompute Catalog",language:"zh-CN"},l=void 0,r={},h=[{value:"\u9002\u7528\u573A\u666F",id:"\u9002\u7528\u573A\u666F",level:2},{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u914D\u7F6E Catalog",id:"\u914D\u7F6E-catalog",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:3},{value:"\u652F\u6301\u7684 MaxCompute \u7248\u672C",id:"\u652F\u6301\u7684-maxcompute-\u7248\u672C",level:3},{value:"\u652F\u6301\u7684 MaxCompute \u8868",id:"\u652F\u6301\u7684-maxcompute-\u8868",level:3},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"\u57FA\u7840\u793A\u4F8B",id:"\u57FA\u7840\u793A\u4F8B",level:2},{value:"\u67E5\u8BE2\u64CD\u4F5C",id:"\u67E5\u8BE2\u64CD\u4F5C",level:2},{value:"\u57FA\u7840\u67E5\u8BE2",id:"\u57FA\u7840\u67E5\u8BE2",level:3},{value:"\u9644\u5F55",id:"\u9644\u5F55",level:2},{value:"\u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota(\u9002\u7528\u4E8E Doris 2.1.7 \u4E4B\u540E)",id:"\u5982\u4F55\u83B7\u53D6-endpoint-\u548C-quota\u9002\u7528\u4E8E-doris-217-\u4E4B\u540E",level:3},{value:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740 (\u9002\u7528\u4E8E Doris 2.1.7 \u4E4B\u524D)",id:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740-\u9002\u7528\u4E8E-doris-217-\u4E4B\u524D",level:3}];function x(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/",children:"MaxCompute"})," \u662F\u963F\u91CC\u4E91\u4E0A\u7684\u4F01\u4E1A\u7EA7 SaaS\uFF08Software as a Service\uFF09\u6A21\u5F0F\u4E91\u6570\u636E\u4ED3\u5E93\u3002\u901A\u8FC7 MaxCompute \u63D0\u4F9B\u7684\u5F00\u653E\u5B58\u50A8 SDK\uFF0CDoris \u53EF\u4EE5\u83B7\u53D6 MaxCompute \u7684\u8868\u4FE1\u606F\u5E76\u8FDB\u884C\u67E5\u8BE2\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u9002\u7528\u573A\u666F",children:"\u9002\u7528\u573A\u666F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u573A\u666F"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6570\u636E\u96C6\u6210"}),(0,c.jsx)(e.td,{children:"\u8BFB\u53D6 MaxCompute \u6570\u636E\u5E76\u5199\u5165\u5230 Doris \u5185\u8868\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6570\u636E\u5199\u56DE"}),(0,c.jsx)(e.td,{children:"\u4E0D\u652F\u6301\u3002"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u81EA 2.1.7 \u7248\u672C\u5F00\u59CB\uFF0CMaxCompute Catalog \u57FA\u4E8E ",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u5F00\u653E\u5B58\u50A8 SDK"})," \u5F00\u53D1\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u57FA\u4E8E Tunnel API \u8FDB\u884C\u5F00\u53D1\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5F00\u653E\u5B58\u50A8 SDK \u7684\u4F7F\u7528\u6709\u4E00\u5B9A\u7684\u9650\u5236\uFF0C\u8BF7\u53C2\u7167\u8BE5 ",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u6587\u6863"})," \u4E2D ",(0,c.jsx)(e.code,{children:"\u4F7F\u7528\u9650\u5236"})," \u7684\u7AE0\u8282\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"MaxCompute \u4E2D\u7684 Project \u76F8\u5F53\u4E8E Doris \u4E2D\u7684 Database\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u914D\u7F6E-catalog",children:"\u914D\u7F6E Catalog"}),"\n",(0,c.jsx)(e.h3,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE CATALOG [IF NOT EXISTS] catalog_name PROPERTIES (\n    'type' = 'max_compute',\n    {McRequiredProperties},\n    {McOptionalProperties},\n    {CommonProperties}\n);\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"{McRequiredProperties}"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u5C5E\u6027\u540D"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"}),(0,c.jsx)(e.th,{children:"\u652F\u6301\u7684 Doris \u7248\u672C"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.default.project"})}),(0,c.jsxs)(e.td,{children:["\u60F3\u8981\u8BBF\u95EE\u7684 MaxCompute \u9879\u76EE\u540D\u79F0\u3002\u53EF\u4EE5\u5728 ",(0,c.jsx)(e.a,{href:"https://maxcompute.console.aliyun.com/cn-beijing/project-list",children:"MaxCompute \u9879\u76EE\u5217\u8868"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.access_key"})}),(0,c.jsxs)(e.td,{children:["AccessKey\u3002\u53EF\u4EE5\u5728 ",(0,c.jsx)(e.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.secret_key"})}),(0,c.jsxs)(e.td,{children:["SecretKey\u3002\u53EF\u4EE5\u5728 ",(0,c.jsx)(e.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.region"})}),(0,c.jsx)(e.td,{children:"MaxCompute \u5F00\u901A\u7684\u5730\u57DF\u3002\u53EF\u4EE5\u4ECE Endpoint \u4E2D\u627E\u5230\u5BF9\u5E94\u7684 Region"}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u4E0D\u542B\uFF09\u4E4B\u524D"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.endpoint"})}),(0,c.jsx)(e.td,{children:"MaxCompute \u5F00\u901A\u7684\u5730\u57DF\u3002\u8BF7\u53C2\u7167\u4E0B\u6587\u7684\u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota \u6765\u914D\u7F6E\u3002"}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u542B\uFF09\u4E4B\u540E"})]})]})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"{McOptionalProperties}"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u5C5E\u6027\u540D"}),(0,c.jsx)(e.th,{children:"\u9ED8\u8BA4\u503C"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"}),(0,c.jsx)(e.th,{children:"\u652F\u6301\u7684 Doris \u7248\u672C"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.tunnel_endpoint"})}),(0,c.jsx)(e.td,{children:"\u65E0"}),(0,c.jsxs)(e.td,{children:["\u53C2\u8003\u9644\u5F55\u4E2D\u7684",(0,c.jsx)(e.code,{children:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740 "}),"\u3002"]}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u4E0D\u542B\uFF09\u4E4B\u524D"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.odps_endpoint"})}),(0,c.jsx)(e.td,{children:"\u65E0"}),(0,c.jsxs)(e.td,{children:["\u53C2\u8003\u9644\u5F55\u4E2D\u7684",(0,c.jsx)(e.code,{children:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740 "}),"\u3002"]}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u4E0D\u542B\uFF09\u4E4B\u524D"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.quota"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"pay-as-you-go"})}),(0,c.jsx)(e.td,{children:"Quota \u540D\u79F0\u3002\u8BF7\u53C2\u7167\u4E0B\u6587\u7684 \u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota \u6765\u914D\u7F6E"}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.split_strategy"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"byte_size"})}),(0,c.jsxs)(e.td,{children:["\u8BBE\u7F6E split \u7684\u5212\u5206\u65B9\u5F0F\uFF0C\u53EF\u8BBE\u7F6E\u4E3A\u6309\u7167\u5B57\u8282\u5927\u5C0F\u5212\u5206 ",(0,c.jsx)(e.code,{children:"byte_size"})," \u548C\u6309\u7167\u6570\u636E\u884C\u6570\u5212\u5206 ",(0,c.jsx)(e.code,{children:"row_count"})]}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.split_byte_size"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"268435456"})}),(0,c.jsxs)(e.td,{children:["\u6BCF\u4E2A split \u8BFB\u53D6\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF0C\u9ED8\u8BA4\u4E3A 256MB\uFF0C\u5F53\u4E14\u4EC5\u5F53 ",(0,c.jsx)(e.code,{children:'"mc.split_strategy" = "byte_size"'})," \u65F6\u751F\u6548"]}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.split_row_count"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"1048576"})}),(0,c.jsxs)(e.td,{children:["\u6BCF\u4E2A split \u8BFB\u591A\u5C11\u884C\uFF0C\u5F53\u4E14\u4EC5\u5F53 ",(0,c.jsx)(e.code,{children:'"mc.split_strategy" = "row_count"'})," \u65F6\u751F\u6548"]}),(0,c.jsx)(e.td,{children:"2.1.7\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.split_cross_partition"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"false"})}),(0,c.jsx)(e.td,{children:"\u751F\u6210\u7684 split \u662F\u5426\u8DE8\u5206\u533A"}),(0,c.jsx)(e.td,{children:"2.1.8\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.connect_timeout"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"10s"})}),(0,c.jsx)(e.td,{children:"\u8FDE\u63A5 maxcompute \u7684\u8D85\u65F6\u65F6\u95F4"}),(0,c.jsx)(e.td,{children:"2.1.8\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.read_timeout"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"120s"})}),(0,c.jsx)(e.td,{children:"\u8BFB\u53D6 maxcompute \u7684\u8D85\u65F6\u65F6\u95F4"}),(0,c.jsx)(e.td,{children:"2.1.8\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.retry_count"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"4"})}),(0,c.jsx)(e.td,{children:"\u8D85\u65F6\u540E\u7684\u91CD\u8BD5\u6B21\u6570"}),(0,c.jsx)(e.td,{children:"2.1.8\uFF08\u542B\uFF09\u4E4B\u540E"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"mc.datetime_predicate_push_down"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"true"})}),(0,c.jsxs)(e.td,{children:["\u662F\u5426\u5141\u8BB8\u4E0B\u63A8 ",(0,c.jsx)(e.code,{children:"timestamp/timestamp_ntz"})," \u7C7B\u578B\u7684\u8C13\u8BCD\u6761\u4EF6\u3002Doris \u5BF9\u8FD9\u4E24\u4E2A\u7C7B\u578B\u7684\u540C\u6B65\u4F1A\u4E22\u5931\u7CBE\u5EA6\uFF089 -> 6\uFF09\u3002\u56E0\u6B64\u5982\u679C\u539F\u6570\u636E\u7CBE\u5EA6\u9AD8\u4E8E6\u4F4D\uFF0C\u5219\u6761\u4EF6\u4E0B\u63A8\u53EF\u80FD\u5BFC\u81F4\u7ED3\u679C\u4E0D\u51C6\u786E\u3002"]}),(0,c.jsx)(e.td,{children:"2.1.9/3.0.5\uFF08\u542B\uFF09\u4E4B\u540E"})]})]})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"{CommonProperties}"})}),"\n",(0,c.jsxs)(e.p,{children:["CommonProperties \u90E8\u5206\u7528\u4E8E\u586B\u5199\u901A\u7528\u5C5E\u6027\u3002\u8BF7\u53C2\u9605",(0,c.jsx)(e.a,{href:"/zh-CN/docs/dev/lakehouse/catalog-overview",children:" \u6570\u636E\u76EE\u5F55\u6982\u8FF0 "}),"\u4E2D\u3010\u901A\u7528\u5C5E\u6027\u3011\u90E8\u5206\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u652F\u6301\u7684-maxcompute-\u7248\u672C",children:"\u652F\u6301\u7684 MaxCompute \u7248\u672C"}),"\n",(0,c.jsx)(e.p,{children:"\u4EC5\u652F\u6301\u516C\u6709\u4E91\u7248\u672C\u7684 Max Compute\u3002\u79C1\u6709\u4E91\u7248\u672C\u652F\u6301\u8BF7\u8054\u7CFB Doris \u793E\u533A\u652F\u6301\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u652F\u6301\u7684-maxcompute-\u8868",children:"\u652F\u6301\u7684 MaxCompute \u8868"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u652F\u6301\u8BFB\u53D6\u5206\u533A\u8868\u3001\u805A\u7C07\u8868\u3001\u7269\u5316\u89C6\u56FE\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u8BFB\u53D6 MaxCompute \u7684\u5916\u90E8\u8868\u3001\u903B\u8F91\u89C6\u56FE\u3001Delta Table\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"Max Compute Type"}),(0,c.jsx)(e.th,{children:"Doris Type"}),(0,c.jsx)(e.th,{children:"Comment"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"bolean"}),(0,c.jsx)(e.td,{children:"boolean"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"tiny"}),(0,c.jsx)(e.td,{children:"tinyint"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"tinyint"}),(0,c.jsx)(e.td,{children:"tinyint"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"smallint"}),(0,c.jsx)(e.td,{children:"smallint"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"int"}),(0,c.jsx)(e.td,{children:"int"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"bigint"}),(0,c.jsx)(e.td,{children:"bigint"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"float"}),(0,c.jsx)(e.td,{children:"float"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"double"}),(0,c.jsx)(e.td,{children:"double"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"decimal(P, S)"}),(0,c.jsx)(e.td,{children:"decimal(P, S)"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"char(N)"}),(0,c.jsx)(e.td,{children:"char(N)"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"varchar(N)"}),(0,c.jsx)(e.td,{children:"varchar(N)"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"string"}),(0,c.jsx)(e.td,{children:"string"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"date"}),(0,c.jsx)(e.td,{children:"date"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"datetime"}),(0,c.jsx)(e.td,{children:"datetime(3)"}),(0,c.jsxs)(e.td,{children:["\u56FA\u5B9A\u6620\u5C04\u5230\u7CBE\u5EA6 3\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"SET [GLOBAL] time_zone = 'Asia/Shanghai'"})," \u6765\u6307\u5B9A\u65F6\u533A"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"timestamp_ntz"}),(0,c.jsx)(e.td,{children:"datetime(6)"}),(0,c.jsxs)(e.td,{children:["MaxCompute \u7684 ",(0,c.jsx)(e.code,{children:"timestamp_ntz"})," \u7CBE\u5EA6\u4E3A 9, Doris \u7684 DATETIME \u6700\u5927\u7CBE\u5EA6\u53EA\u6709 6\uFF0C\u6545\u8BFB\u53D6\u6570\u636E\u65F6\u4F1A\u5C06\u591A\u7684\u90E8\u5206\u76F4\u63A5\u622A\u65AD\u3002"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"timestamp"}),(0,c.jsx)(e.td,{children:"datetime(6)"}),(0,c.jsxs)(e.td,{children:["\u81EA 2.1.9/3.0.5 \u652F\u6301\u3002MaxCompute \u7684 ",(0,c.jsx)(e.code,{children:"timestamp"})," \u7CBE\u5EA6\u4E3A 9, Doris \u7684 DATETIME \u6700\u5927\u7CBE\u5EA6\u53EA\u6709 6\uFF0C\u6545\u8BFB\u53D6\u6570\u636E\u65F6\u4F1A\u5C06\u591A\u7684\u90E8\u5206\u76F4\u63A5\u622A\u65AD\u3002"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"array"}),(0,c.jsx)(e.td,{children:"array"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"map"}),(0,c.jsx)(e.td,{children:"map"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"struct"}),(0,c.jsx)(e.td,{children:"struct"}),(0,c.jsx)(e.td,{})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"other"}),(0,c.jsx)(e.td,{children:"UNSUPPORTED"}),(0,c.jsx)(e.td,{})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u57FA\u7840\u793A\u4F8B",children:"\u57FA\u7840\u793A\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE CATALOG mc_catalog PROPERTIES (\n    'type' = 'max_compute',\n    'mc.default.project' = 'project',\n    'mc.access_key' = 'sk',\n    'mc.secret_key' = 'ak',\n    'mc.endpoint' = 'http://service.cn-beijing-vpc.MaxCompute.aliyun-inc.com/api'\n);\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u4F7F\u7528 2.1.7\uFF08\u4E0D\u542B\uFF09\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u8BF7\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\u3002\uFF08\u5EFA\u8BAE\u5347\u7EA7\u5230 2.1.8 \u540E\u4F7F\u7528\uFF09"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE CATALOG mc_catalog PROPERTIES (\n    'type' = 'max_compute',\n    'mc.region' = 'cn-beijing',\n    'mc.default.project' = 'project',\n    'mc.access_key' = 'ak',\n    'mc.secret_key' = 'sk'\n    'mc.odps_endpoint' = 'http://service.cn-beijing.maxcompute.aliyun-inc.com/api',\n    'mc.tunnel_endpoint' = 'http://dt.cn-beijing.maxcompute.aliyun-inc.com'\n);\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u67E5\u8BE2\u64CD\u4F5C",children:"\u67E5\u8BE2\u64CD\u4F5C"}),"\n",(0,c.jsx)(e.h3,{id:"\u57FA\u7840\u67E5\u8BE2",children:"\u57FA\u7840\u67E5\u8BE2"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"-- 1. switch to catalog, use database and query\nSWITCH mc_ctl;\nUSE mc_ctl;\nSELECT * FROM mc_tbl LIMIT 10;\n\n-- 2. use mc database directly\nUSE mc_ctl.mc_db;\nSELECT * FROM mc_tbl LIMIT 10;\n\n-- 3. use full qualified name to query\nSELECT * FROM mc_ctl.mc_db.mc_tbl LIMIT 10;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9644\u5F55",children:"\u9644\u5F55"}),"\n",(0,c.jsx)(e.h3,{id:"\u5982\u4F55\u83B7\u53D6-endpoint-\u548C-quota\u9002\u7528\u4E8E-doris-217-\u4E4B\u540E",children:"\u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota(\u9002\u7528\u4E8E Doris 2.1.7 \u4E4B\u540E)"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528\u6570\u636E\u4F20\u8F93\u670D\u52A1\u72EC\u4EAB\u8D44\u6E90\u7EC4"}),"\n",(0,c.jsxs)(e.p,{children:["\u8BF7\u53C2\u7167\u8BE5 ",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts",children:"\u6587\u6863"})," \u4E2D\u3010\u4F7F\u7528\u72EC\u4EAB\u6570\u636E\u670D\u52A1\u8D44\u6E90\u7EC4\u3011\u7AE0\u8282\u4E2D\u7684\u30102.\u6388\u6743\u3011\u6765\u5F00\u542F\u76F8\u5E94\u7684\u6743\u9650\uFF0C\u5E76\u5728\u3010\u914D\u989D\uFF08Quota\uFF09\u7BA1\u7406\u3011\u5217\u8868\u4E2D\uFF0C\u67E5\u770B\u5E76\u590D\u5236\u5BF9\u5E94\u7684 ",(0,c.jsx)(e.code,{children:"QuotaName"}),"\uFF0C\u6307\u5B9A ",(0,c.jsx)(e.code,{children:'"mc.quota" = "QuotaName"'}),"\u3002\u6B64\u65F6\u60A8\u53EF\u4EE5\u9009\u62E9 VPC \u6216\u516C\u7F51\u6765\u8BBF\u95EE MaxCompute\uFF0C\u4F46\u662F\u8D70 VPC \u7684\u5E26\u5BBD\u6709\u4FDD\u969C\uFF0C\u516C\u7F51\u5E26\u5BBD\u8D44\u6E90\u5C0F\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528\u6309\u91CF\u4ED8\u8D39"}),"\n",(0,c.jsxs)(e.p,{children:["\u8BF7\u53C2\u7167\u8BE5 ",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u6587\u6863"})," \u4E2D\u3010\u4F7F\u7528\u5F00\u653E\u5B58\u50A8\uFF08\u6309\u91CF\u4ED8\u8D39\uFF09\u3011\u7684\u7AE0\u8282\uFF0C\u6765\u5F00\u542F\u5F00\u653E\u5B58\u50A8 (Storage API) \u5F00\u5173\uFF0C\u5E76\u7ED9 Ak,SK \u5BF9\u5E94\u7684\u7528\u6237\u8D4B\u4E88\u6743\u9650\u3002\u6B64\u65F6 ",(0,c.jsx)(e.code,{children:"mc.quota"})," \u4E3A\u9ED8\u8BA4\u503C ",(0,c.jsx)(e.code,{children:"pay-as-you-go"}),"\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u6307\u5B9A\u8BE5\u503C\u3002\u6309\u91CF\u4ED8\u8D39\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u4F7F\u7528 VPC \u6765\u8BBF\u95EE MaxCompute\uFF0C\u65E0\u6CD5\u901A\u8FC7\u516C\u7F51\u8BBF\u95EE\u3002\u53EA\u6709\u9884\u4ED8\u8D39\u7528\u6237\u624D\u80FD\u901A\u8FC7\u516C\u7F51\u8BBF\u95EE MaxCompute\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6839\u636E ",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints",children:"\u963F\u91CC\u4E91 Endpoints \u6587\u6863"})," \u4E2D\u7684\u3010\u5730\u57DF Endpoint \u5BF9\u7167\u8868\u3011\u6765\u914D\u7F6E ",(0,c.jsx)(e.code,{children:"mc.endpoint"})," \u3002\u4F7F\u7528 VPC \u8BBF\u95EE\u7684\u7528\u6237\uFF0C\u9700\u8981\u6839\u636E\u3010\u5404\u5730\u57DF Endpoint \u5BF9\u7167\u8868\uFF08\u963F\u91CC\u4E91 VPC \u7F51\u7EDC\u8FDE\u63A5\u65B9\u5F0F\uFF09\u3011\u8868\u4E2D\u7684\u3010VPC \u7F51\u7EDC Endpoint\u3011\u5217\u6765\u914D\u7F6E ",(0,c.jsx)(e.code,{children:"mc.endpoint"})," \u3002\u4F7F\u7528\u516C\u7F51\u8BBF\u95EE\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u9009\u62E9\u3010\u5404\u5730\u57DF Endpoint \u5BF9\u7167\u8868\uFF08\u963F\u91CC\u4E91\u7ECF\u5178\u7F51\u7EDC\u8FDE\u63A5\u65B9\u5F0F\uFF09\u3011\u8868\u4E2D\u7684\u3010\u7ECF\u5178\u7F51\u7EDC Endpoint\u3011\u5217\u3001\u6216\u8005\u9009\u62E9\u3010\u5404\u5730\u57DF Endpoint \u5BF9\u7167\u8868\uFF08\u5916\u7F51\u8FDE\u63A5\u65B9\u5F0F)\u3011\u8868\u4E2D\u7684\u3010\u5916\u7F51 Endpoint \u5217\u6765\u914D\u7F6E ",(0,c.jsx)(e.code,{children:"mc.endpoint"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740-\u9002\u7528\u4E8E-doris-217-\u4E4B\u524D",children:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740 (\u9002\u7528\u4E8E Doris 2.1.7 \u4E4B\u524D)"}),"\n",(0,c.jsx)(e.p,{children:"\u5728 Doris 2.1.7 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u4F7F\u7528 Tunnel SDK \u4E0E MaxCompute \u4EA4\u4E92\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u4E24\u4E2A endpoint \u5C5E\u6027\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"mc.odps_endpoint"}),"\uFF1AMaxCompute Endpoint\uFF0C\u7528\u4E8E\u83B7\u53D6 MaxCompute \u5143\u6570\u636E\uFF08\u5E93\u8868\u4FE1\u606F\uFF09\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"mc.tunnel_endpoint"}),": Tunnel Endpoint\uFF0C\u7528\u4E8E\u8BFB\u53D6 MaxCompute \u6570\u636E\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CMaxCompute Catalog \u6839\u636E ",(0,c.jsx)(e.code,{children:"mc.region"})," \u548C  ",(0,c.jsx)(e.code,{children:"mc.public_access"})," \u53BB\u751F\u6210 endpoint\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u751F\u6210\u540E\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:(0,c.jsx)(e.code,{children:"mc.public_access"})}),(0,c.jsx)(e.th,{children:(0,c.jsx)(e.code,{children:"mc.odps_endpoint"})}),(0,c.jsx)(e.th,{children:(0,c.jsx)(e.code,{children:"mc.tunnel_endpoint"})})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"false"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"http://service.{mc.region}.maxcompute.aliyun-inc.com/api"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"http://dt.{mc.region}.maxcompute.aliyun-inc.com"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"true"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"http://service.{mc.region}.maxcompute.aliyun.com/api"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"http://dt.{mc.region}.maxcompute.aliyun.com"})})]})]})]}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u6237\u4E5F\u53EF\u4EE5\u5355\u72EC\u6307\u5B9A",(0,c.jsx)(e.code,{children:"mc.odps_endpoint"})," \u548C ",(0,c.jsx)(e.code,{children:"mc.tunnel_endpoint"})," \u6765\u81EA\u5B9A\u4E49\u670D\u52A1\u5730\u5740\uFF0C\u9002\u7528\u4E8E\u4E00\u4E9B\u79C1\u6709\u90E8\u7F72\u7684 MaxCompute \u73AF\u5883\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["MaxCompute Endpoint \u548C Tunnel Endpoint \u7684\u914D\u7F6E\u8BF7\u53C2\u89C1",(0,c.jsx)(e.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints",children:"\u5404\u5730\u57DF\u53CA\u4E0D\u540C\u7F51\u7EDC\u8FDE\u63A5\u65B9\u5F0F\u4E0B\u7684 Endpoint"}),"\u3002"]})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return i}});var s=d(667294);let c={},t=s.createContext(c);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);