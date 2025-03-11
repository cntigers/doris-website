"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807548"],{265491:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>x,contentTitle:()=>r});var l=JSON.parse('{"id":"lakehouse/database/max-compute","title":"\u963F\u91CC\u4E91 MaxCompute","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/database/max-compute.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/max-compute","permalink":"/zh-CN/docs/lakehouse/database/max-compute","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u963F\u91CC\u4E91 MaxCompute","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Elasticsearch","permalink":"/zh-CN/docs/lakehouse/database/es"},"next":{"title":"\u5206\u6790 S3/HDFS \u4E0A\u7684\u6587\u4EF6","permalink":"/zh-CN/docs/lakehouse/file"}}'),s=t("785893"),c=t("250065");let i={title:"\u963F\u91CC\u4E91 MaxCompute",language:"zh-CN"},r="\u963F\u91CC\u4E91 MaxCompute",d={},x=[{value:"\u8FDE\u63A5 MaxCompute",id:"\u8FDE\u63A5-maxcompute",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u521B\u5EFA Catalog \u7684\u57FA\u672C\u5C5E\u6027",id:"\u521B\u5EFA-catalog-\u7684\u57FA\u672C\u5C5E\u6027",level:3},{value:"\u521B\u5EFA Catalog \u7684\u53EF\u9009\u5C5E\u6027",id:"\u521B\u5EFA-catalog-\u7684\u53EF\u9009\u5C5E\u6027",level:3},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota",id:"\u5982\u4F55\u83B7\u53D6-endpoint-\u548C-quota",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u963F\u91CC\u4E91-maxcompute",children:"\u963F\u91CC\u4E91 MaxCompute"})}),"\n",(0,s.jsx)(n.p,{children:"MaxCompute \u662F\u963F\u91CC\u4E91\u4E0A\u7684\u4F01\u4E1A\u7EA7 SaaS\uFF08Software as a Service\uFF09\u6A21\u5F0F\u4E91\u6570\u636E\u4ED3\u5E93\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/MaxCompute/product-overview/what-is-MaxCompute",children:"\u4EC0\u4E48\u662F MaxCompute"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FDE\u63A5-maxcompute",children:"\u8FDE\u63A5 MaxCompute"}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- 1. \u521B\u5EFACatalog\u3002\nCREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.default.project" = "xxx",\n  "mc.access_key" = "xxxx",\n  "mc.secret_key" = "xxx",\n  "mc.endpoint" = "http://service.cn-beijing-vpc.MaxCompute.aliyun-inc.com/api"\n);\n\n-- 2. \u5207\u6362\u5230\u65B0\u521B\u5EFA\u7684Catalog\u4E0B\u3002\nSWITCH mc;\n\n-- \u4E0B\u9762\u7684\u6B65\u9AA4\u5C31\u548C\u4F7F\u7528Mysql\u4E00\u6837\u4E86\u3002\n\n-- 3. \u67E5\u770B\u8BE5Catalog\u4E0B\u6240\u6709\u7684\u6570\u636E\u5E93\u3002\nSHOW DATABASES;\n\n-- 4. \u4F7F\u7528\u6570\u636E\u5E93, \u8FD9\u91CC\u7684xxx\u4E3A\u7B2C\u4E09\u6B65\u5C55\u793A\u51FA\u6765\u7ED3\u679C\u7684\u4EFB\u610F\u4E00\u4E2A\u6570\u636E\u5E93\u3002\nUSE xxx;\n\n-- 5. \u67E5\u770B\u8BE5\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u8868\u3002\nSHOW TABLES;\n\n-- 6. \u8FDB\u884CSQL\u67E5\u8BE2\u3002\nselect * from tb  limit 10;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u521B\u5EFA-catalog-\u7684\u57FA\u672C\u5C5E\u6027",children:"\u521B\u5EFA Catalog \u7684\u57FA\u672C\u5C5E\u6027"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"type"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["\u56FA\u5B9A\u4E3A ",(0,s.jsx)(n.code,{children:"max_compute"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"mc.default.project"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["\u60F3\u8981\u8BBF\u95EE\u7684 MaxCompute \u9879\u76EE\u540D\u79F0\u3002\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.a,{href:"https://MaxCompute.console.aliyun.com/cn-beijing/project-list",children:"MaxCompute \u9879\u76EE\u5217\u8868"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"mc.access_key"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["AccessKey\u3002\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"mc.secret_key"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["SecretKey\u3002\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"mc.endpoint"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["MaxCompute \u5F00\u901A\u7684\u5730\u57DF\u3002\u8BF7\u53C2\u7167\u4E0B\u6587\u7684",(0,s.jsx)(n.code,{children:"\u5982\u4F55\u83B7\u53D6Endpoint \u548C Quota"}),"\u6765\u914D\u7F6E\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u521B\u5EFA-catalog-\u7684\u53EF\u9009\u5C5E\u6027",children:"\u521B\u5EFA Catalog \u7684\u53EF\u9009\u5C5E\u6027"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mc.quota"}),(0,s.jsx)(n.td,{children:"pay-as-you-go"}),(0,s.jsxs)(n.td,{children:["Quota \u540D\u79F0\u3002\u8BF7\u53C2\u7167\u4E0B\u6587\u7684 ",(0,s.jsx)(n.code,{children:"\u5982\u4F55\u83B7\u53D6Endpoint \u548C Quota"})," \u6765\u914D\u7F6E\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mc.split_strategy"}),(0,s.jsx)(n.td,{children:"byte_size"}),(0,s.jsxs)(n.td,{children:["\u8BBE\u7F6E split \u7684\u5212\u5206\u65B9\u5F0F\uFF0C\u53EF\u8BBE\u7F6E\u4E3A\u6309\u7167\u5B57\u8282\u5927\u5C0F\u5212\u5206 ",(0,s.jsx)(n.code,{children:"byte_size"})," \u548C\u6309\u7167\u6570\u636E\u884C\u6570\u5212\u5206 ",(0,s.jsx)(n.code,{children:"row_count"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mc.split_byte_size"}),(0,s.jsx)(n.td,{children:"268435456"}),(0,s.jsxs)(n.td,{children:["\u6BCF\u4E2A split \u8BFB\u53D6\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF0C\u9ED8\u8BA4\u4E3A 256MB\uFF0C\u5F53\u4E14\u4EC5\u5F53 ",(0,s.jsx)(n.code,{children:'"mc.split_strategy" = "byte_size"'})," \u65F6\u751F\u6548"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mc.split_row_count"}),(0,s.jsx)(n.td,{children:"1048576"}),(0,s.jsxs)(n.td,{children:["\u6BCF\u4E2A split \u8BFB\u591A\u5C11\u884C\uFF0C\u5F53\u4E14\u4EC5\u5F53 ",(0,s.jsx)(n.code,{children:'"mc.split_strategy" = "row_count"'})," \u65F6\u751F\u6548"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"MaxCompute"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u5907\u6CE8"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"SMALLINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"SMALLINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"INT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"INT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"BIGINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"BIGINT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"BINARY"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4E0D\u652F\u6301"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"FLOAT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"FLOAT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DOUBLE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DOUBLE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DECIMAL(precision,scale)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DECIMAL(precision,scale)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"VARCHAR(n)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"VARCHAR(n)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"CHAR(n)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"CHAR(n)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"STRING"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"STRING"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DATE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DATE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DATETIME"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DATETIME(3)"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["\u53EF\u4EE5\u901A\u8FC7",(0,s.jsx)(n.code,{children:"SET [global] time_zone = 'Asia/Shanghai'"}),"\u6765\u6307\u5B9A\u65F6\u533A"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TIMESTAMP"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4E0D\u652F\u6301"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"TIMESTAMP_NTZ"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DATETIME(6)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"MaxCompute \u7684 TIMESTAMP_NTZ \u7CBE\u5EA6\u4E3A 9, Doris \u7684 DATETIME \u6700\u5927\u7CBE\u5EA6\u53EA\u6709 6\uFF0C\u6545\u8BFB\u53D6\u6570\u636E\u65F6\u4F1A\u5C06\u591A\u7684\u90E8\u5206\u76F4\u63A5\u622A\u65AD\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"BOOLEAN"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"BOOLEAN"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"ARRAY"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"ARRAY"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"MAP"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"MAP"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"STRUCT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"STRUCT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"JSON"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4E0D\u652F\u6301"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u81EA 2.1.7 \u7248\u672C\u5F00\u59CB\uFF0CMaxCompute Catalog \u57FA\u4E8E ",(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u5F00\u653E\u5B58\u50A8 SDK"})," \u5F00\u53D1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5F00\u653E\u5B58\u50A8 SDK \u7684\u4F7F\u7528\u6709\u4E00\u5B9A\u7684\u9650\u5236\uFF0C\u8BF7\u53C2\u7167\u8BE5 ",(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u6587\u6863"})," \u4E2D ",(0,s.jsx)(n.code,{children:"\u4F7F\u7528\u9650\u5236"})," \u7684\u7AE0\u8282\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"MaxCompute \u4E2D\u7684 Project \u76F8\u5F53\u4E8E Doris \u4E2D\u7684 DataBase\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4F55\u83B7\u53D6-endpoint-\u548C-quota",children:"\u5982\u4F55\u83B7\u53D6 Endpoint \u548C Quota"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u4F7F\u7528\u6570\u636E\u4F20\u8F93\u670D\u52A1\u72EC\u4EAB\u8D44\u6E90\u7EC4\uFF0C\u8BF7\u53C2\u7167\u8BE5 ",(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts",children:"\u6587\u6863"})," \u4E2D ",(0,s.jsx)(n.code,{children:"\u4F7F\u7528\u72EC\u4EAB\u6570\u636E\u670D\u52A1\u8D44\u6E90\u7EC4"})," \u7AE0\u8282\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"2.\u6388\u6743"})," \u6765\u5F00\u542F\u76F8\u5E94\u7684\u6743\u9650\uFF0C\u5E76\u5728 ",(0,s.jsx)(n.code,{children:"\u914D\u989D\uFF08Quota\uFF09\u7BA1\u7406"})," \u5217\u8868\u4E2D\uFF0C\u67E5\u770B\u5E76\u590D\u5236\u5BF9\u5E94\u7684 QuotaName\uFF0C\u6307\u5B9A ",(0,s.jsx)(n.code,{children:'"mc.quota" = "QuotaName"'}),"\u3002\u6B64\u65F6\u60A8\u53EF\u4EE5\u9009\u62E9 VPC / \u516C\u7F51\u6765\u8BBF\u95EE MaxCompute\uFF0C\u4F46\u662F\u8D70 VPC \u7684\u5E26\u5BBD\u6709\u4FDD\u969C\uFF0C\u516C\u7F51\u5E26\u5BBD\u8D44\u6E90\u5C0F\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u4F7F\u7528\u6309\u91CF\u4ED8\u8D39\uFF0C\u8BF7\u53C2\u7167\u8BE5 ",(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"\u6587\u6863"}),"\n\u4E2D ",(0,s.jsx)(n.code,{children:"\u4F7F\u7528\u5F00\u653E\u5B58\u50A8\uFF08\u6309\u91CF\u4ED8\u8D39\uFF09"})," \u7684\u7AE0\u8282\uFF0C\u6765\u5F00\u542F\u5F00\u653E\u5B58\u50A8 (Storage API) \u5F00\u5173\uFF0C\u5E76\u7ED9 Ak,SK \u5BF9\u5E94\u7684\u7528\u6237\u8D4B\u4E88\u6743\u9650\u3002\u6B64\u65F6\u60A8\u7684 ",(0,s.jsx)(n.code,{children:"mc.quota"})," \u4E3A\u9ED8\u8BA4\u503C ",(0,s.jsx)(n.code,{children:"pay-as-you-go"}),"\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u6307\u5B9A\u8BE5\u503C\u3002\u6B64\u65F6\u60A8\u53EA\u80FD\u4F7F\u7528 VPC \u6765\u8BBF\u95EE MaxCompute\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u7B2C 1/2 \u6B65\uFF0C\u60A8\u5DF2\u7ECF\u77E5\u9053\u8BE5\u5982\u4F55\u8BBF\u95EE MaxCompute\uFF0C\u4E0B\u9762\u9700\u8981\u6839\u636E ",(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints",children:"\u963F\u91CC\u4E91 Endpoints \u6587\u6863"})," \u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"\u5730\u57DFEndpoint\u5BF9\u7167\u8868"})," \u6765\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"mc.endpoint"})," \u3002\u4F7F\u7528 VPC \u8BBF\u95EE\u7684\u7528\u6237\uFF0C\u9700\u8981\u6839\u636E ",(0,s.jsx)(n.code,{children:"\u5404\u5730\u57DFEndpoint\u5BF9\u7167\u8868\uFF08\u963F\u91CC\u4E91VPC\u7F51\u7EDC\u8FDE\u63A5\u65B9\u5F0F\uFF09"})," \u8868\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"VPC\u7F51\u7EDCEndpoint"})," \u5217\u6765\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"mc.endpoint"})," \u3002\u4F7F\u7528\u516C\u7F51\u8BBF\u95EE\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u9009\u62E9 ",(0,s.jsx)(n.code,{children:"\u5404\u5730\u57DFEndpoint\u5BF9\u7167\u8868\uFF08\u963F\u91CC\u4E91\u7ECF\u5178\u7F51\u7EDC\u8FDE\u63A5\u65B9\u5F0F\uFF09"})," \u8868\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"\u7ECF\u5178\u7F51\u7EDCEndpoint"})," \u5217\u3001\u6216\u8005\u9009\u62E9 ",(0,s.jsx)(n.code,{children:"\u5404\u5730\u57DFEndpoint\u5BF9\u7167\u8868\uFF08\u5916\u7F51\u8FDE\u63A5\u65B9\u5F0F)"})," \u8868\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"\u5916\u7F51Endpoint"})," \u5217\u6765\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"mc.endpoint"}),"\u3002"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},c=l.createContext(s);function i(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);