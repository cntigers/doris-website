"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644341"],{988035:function(n,e,i){i.r(e),i.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"table-design/data-partitioning/data-bucketing","title":"\u6570\u636E\u5206\u6876","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/data-partitioning/data-bucketing.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/data-bucketing","permalink":"/zh-CN/docs/table-design/data-partitioning/data-bucketing","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u6570\u636E\u5206\u6876","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u81EA\u52A8\u5206\u533A","permalink":"/zh-CN/docs/table-design/data-partitioning/auto-partitioning"},"next":{"title":"\u5E38\u89C1\u95EE\u9898","permalink":"/zh-CN/docs/table-design/data-partitioning/common-issues"}}'),d=i("785893"),t=i("250065");let l={title:"\u6570\u636E\u5206\u6876",language:"zh-CN"},r=void 0,c={},a=[{value:"\u5206\u6876\u65B9\u5F0F",id:"\u5206\u6876\u65B9\u5F0F",level:2},{value:"Hash \u5206\u6876",id:"hash-\u5206\u6876",level:3},{value:"Random \u5206\u6876",id:"random-\u5206\u6876",level:3},{value:"\u9009\u62E9\u5206\u6876\u952E",id:"\u9009\u62E9\u5206\u6876\u952E",level:2},{value:"\u9009\u62E9\u5206\u6876\u6570\u91CF",id:"\u9009\u62E9\u5206\u6876\u6570\u91CF",level:2},{value:"\u624B\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",id:"\u624B\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",level:3},{value:"\u81EA\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",id:"\u81EA\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",level:3},{value:"\u7EF4\u62A4\u6570\u636E\u5206\u6876",id:"\u7EF4\u62A4\u6570\u636E\u5206\u6876",level:2}];function h(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u4E00\u4E2A\u5206\u533A\u53EF\u4EE5\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u8FDB\u4E00\u6B65\u5212\u5206\u4E3A\u591A\u4E2A\u6570\u636E\u5206\u6876\uFF08bucket\uFF09\u3002\u6BCF\u4E2A\u5206\u6876\u90FD\u4F5C\u4E3A\u4E00\u4E2A\u7269\u7406\u6570\u636E\u5206\u7247\uFF08tablet\uFF09\u5B58\u50A8\u3002\u5408\u7406\u7684\u5206\u6876\u7B56\u7565\u53EF\u4EE5\u6709\u6548\u964D\u4F4E\u67E5\u8BE2\u65F6\u7684\u6570\u636E\u626B\u63CF\u91CF\uFF0C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u5E76\u589E\u52A0\u5E76\u53D1\u5904\u7406\u80FD\u529B\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u5206\u6876\u65B9\u5F0F",children:"\u5206\u6876\u65B9\u5F0F"}),"\n",(0,d.jsx)(e.p,{children:"Doris \u652F\u6301\u4E24\u79CD\u5206\u6876\u65B9\u5F0F\uFF1AHash \u5206\u6876\u4E0E Random \u5206\u6876\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"hash-\u5206\u6876",children:"Hash \u5206\u6876"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u521B\u5EFA\u8868\u6216\u65B0\u589E\u5206\u533A\u65F6\uFF0C\u7528\u6237\u9700\u9009\u62E9\u4E00\u5217\u6216\u591A\u5217\u4F5C\u4E3A\u5206\u6876\u5217\uFF0C\u5E76\u660E\u786E\u6307\u5B9A\u5206\u6876\u7684\u6570\u91CF\u3002\u5728\u540C\u4E00\u5206\u533A\u5185\uFF0C\u7CFB\u7EDF\u4F1A\u6839\u636E\u5206\u6876\u952E\u548C\u5206\u6876\u6570\u91CF\u8FDB\u884C\u54C8\u5E0C\u8BA1\u7B97\u3002\u54C8\u5E0C\u503C\u76F8\u540C\u7684\u6570\u636E\u4F1A\u88AB\u5206\u914D\u5230\u540C\u4E00\u4E2A\u5206\u6876\u4E2D\u3002\u4F8B\u5982\uFF0C\u5728\u4E0B\u56FE\u4E2D\uFF0Cp250102 \u5206\u533A\u6839\u636E region \u5217\u88AB\u5212\u5206\u4E3A 3 \u4E2A\u5206\u6876\uFF0C\u54C8\u5E0C\u503C\u76F8\u540C\u7684\u884C\u88AB\u5F52\u5165\u540C\u4E00\u4E2A\u5206\u6876\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"hash-bucket",src:i(641838).Z+"",width:"5788",height:"2740"})}),"\n",(0,d.jsx)(e.p,{children:"\u63A8\u8350\u5728\u4EE5\u4E0B\u573A\u666F\u4E2D\u4F7F\u7528 Hash \u5206\u6876\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u4E1A\u52A1\u9700\u6C42\u9891\u7E41\u57FA\u4E8E\u67D0\u4E2A\u5B57\u6BB5\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5B57\u6BB5\u4F5C\u4E3A\u5206\u6876\u952E\uFF0C\u5229\u7528 Hash \u5206\u6876\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u5F53\u8868\u4E2D\u7684\u6570\u636E\u5206\u5E03\u8F83\u4E3A\u5747\u5300\u65F6\uFF0CHash \u5206\u6876\u540C\u6837\u662F\u4E00\u79CD\u6709\u6548\u7684\u9009\u62E9\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u5E26\u6709 Hash \u5206\u6876\u7684\u8868\u3002\u8BE6\u7EC6\u8BED\u6CD5\u8BF7\u53C2\u8003 CREATE TABLE \u8BED\u53E5\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE demo.hash_bucket_tbl(\n    oid         BIGINT,\n    dt          DATE,\n    region      VARCHAR(10),\n    amount      INT\n)\nDUPLICATE KEY(oid)\nPARTITION BY RANGE(dt) (\n    PARTITION p250101 VALUES LESS THAN("2025-01-01"),\n    PARTITION p250102 VALUES LESS THAN("2025-01-02")\n)\nDISTRIBUTED BY HASH(region) BUCKETS 8;\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u793A\u4F8B\u4E2D\uFF0C\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"DISTRIBUTED BY HASH(region)"})," \u6307\u5B9A\u4E86\u521B\u5EFA Hash \u5206\u6876\uFF0C\u5E76\u9009\u62E9 ",(0,d.jsx)(e.code,{children:"region"})," \u5217\u4F5C\u4E3A\u5206\u6876\u952E\u3002\u540C\u65F6\uFF0C\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"BUCKETS 8"})," \u6307\u5B9A\u4E86\u521B\u5EFA 8 \u4E2A\u5206\u6876\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"random-\u5206\u6876",children:"Random \u5206\u6876"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u6BCF\u4E2A\u5206\u533A\u4E2D\uFF0C\u4F7F\u7528 Random \u5206\u6876\u4F1A\u968F\u673A\u5730\u5C06\u6570\u636E\u5206\u6563\u5230\u5404\u4E2A\u5206\u6876\u4E2D\uFF0C\u4E0D\u4F9D\u8D56\u4E8E\u67D0\u4E2A\u5B57\u6BB5\u7684 Hash \u503C\u8FDB\u884C\u6570\u636E\u5212\u5206\u3002Random \u5206\u6876\u80FD\u591F\u786E\u4FDD\u6570\u636E\u5747\u5300\u5206\u6563\uFF0C\u4ECE\u800C\u907F\u514D\u7531\u4E8E\u5206\u6876\u952E\u9009\u62E9\u4E0D\u5F53\u800C\u5F15\u53D1\u7684\u6570\u636E\u503E\u659C\u95EE\u9898\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u5BFC\u5165\u6570\u636E\u65F6\uFF0C\u5355\u6B21\u5BFC\u5165\u4F5C\u4E1A\u7684\u6BCF\u4E2A\u6279\u6B21\u4F1A\u88AB\u968F\u673A\u5199\u5165\u5230\u4E00\u4E2A tablet \u4E2D\uFF0C\u4EE5\u6B64\u4FDD\u8BC1\u6570\u636E\u7684\u5747\u5300\u5206\u5E03\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u6B21\u64CD\u4F5C\u4E2D\uFF0C8 \u4E2A\u6279\u6B21\u7684\u6570\u636E\u88AB\u968F\u673A\u5206\u914D\u5230 ",(0,d.jsx)(e.code,{children:"p250102"})," \u5206\u533A\u4E0B\u7684 3 \u4E2A\u5206\u6876\u4E2D\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"random-bucket",src:i(489307).Z+"",width:"5788",height:"2740"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u4F7F\u7528 Random \u5206\u6876\u65F6\uFF0C\u53EF\u4EE5\u542F\u7528\u5355\u5206\u7247\u5BFC\u5165\u6A21\u5F0F\uFF08\u901A\u8FC7\u8BBE\u7F6E ",(0,d.jsx)(e.code,{children:"load_to_single_tablet"})," \u4E3A ",(0,d.jsx)(e.code,{children:"true"}),"\uFF09\u3002\u8FD9\u6837\uFF0C\u5728\u5927\u89C4\u6A21\u6570\u636E\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u5355\u4E2A\u6279\u6B21\u7684\u6570\u636E\u4EC5\u5199\u5165\u4E00\u4E2A\u6570\u636E\u5206\u7247\uFF0C\u80FD\u591F\u63D0\u9AD8\u6570\u636E\u5BFC\u5165\u7684\u5E76\u53D1\u5EA6\u548C\u541E\u5410\u91CF\uFF0C\u51CF\u5C11\u56E0\u6570\u636E\u5BFC\u5165\u548C\u538B\u7F29\uFF08Compaction\uFF09\u64CD\u4F5C\u9020\u6210\u7684\u5199\u653E\u5927\u95EE\u9898\uFF0C\u4ECE\u800C\u786E\u4FDD\u96C6\u7FA4\u7A33\u5B9A\u6027\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u4EE5\u4E0B\u573A\u666F\u4E2D\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Random \u5206\u6876\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u5728\u4EFB\u610F\u7EF4\u5EA6\u5206\u6790\u7684\u573A\u666F\u4E2D\uFF0C\u4E1A\u52A1\u6CA1\u6709\u7279\u522B\u9488\u5BF9\u67D0\u4E00\u5217\u9891\u7E41\u8FDB\u884C\u8FC7\u6EE4\u6216\u5173\u8054\u67E5\u8BE2\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9 Random \u5206\u6876\uFF1B"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u5F53\u7ECF\u5E38\u67E5\u8BE2\u7684\u5217\u6216\u7EC4\u5408\u5217\u6570\u636E\u5206\u5E03\u6781\u5176\u4E0D\u5747\u5300\u65F6\uFF0C\u4F7F\u7528 Random \u5206\u6876\u53EF\u4EE5\u907F\u514D\u6570\u636E\u503E\u659C\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"Random \u5206\u6876\u65E0\u6CD5\u6839\u636E\u5206\u6876\u952E\u8FDB\u884C\u526A\u88C1\uFF0C\u4F1A\u626B\u63CF\u547D\u4E2D\u5206\u533A\u7684\u6240\u6709\u6570\u636E\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u70B9\u67E5\u573A\u666F\u4E0B\u4F7F\u7528\uFF1B"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u53EA\u6709 DUPLICATE \u8868\u53EF\u4EE5\u4F7F\u7528 Random \u5206\u533A\uFF0CUNIQUE \u4E0E AGGREGATE \u8868\u65E0\u6CD5\u4F7F\u7528 Random \u5206\u6876\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u5E26\u6709 Random \u5206\u6876\u7684\u8868\u3002\u8BE6\u7EC6\u8BED\u6CD5\u8BF7\u53C2\u8003 CREATE TABLE \u8BED\u53E5\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE demo.random_bucket_tbl(\n    oid         BIGINT,\n    dt          DATE,\n    region      VARCHAR(10),\n    amount      INT\n)\nDUPLICATE KEY(oid)\nPARTITION BY RANGE(dt) (\n    PARTITION p250101 VALUES LESS THAN("2025-01-01"),\n    PARTITION p250102 VALUES LESS THAN("2025-01-02")\n)\nDISTRIBUTED BY RANDOM BUCKETS 8;\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u793A\u4F8B\u4E2D\uFF0C\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"DISTRIBUTED BY RANDOM"})," \u8BED\u53E5\u6307\u5B9A\u4E86\u4F7F\u7528 Random \u5206\u6876\uFF0C\u521B\u5EFA Random \u5206\u6876\u65E0\u9700\u9009\u62E9\u5206\u6876\u952E\uFF0C\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"BUCKETS 8"})," \u8BED\u53E5\u6307\u5B9A\u521B\u5EFA 8 \u4E2A\u5206\u6876\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u9009\u62E9\u5206\u6876\u952E",children:"\u9009\u62E9\u5206\u6876\u952E"}),"\n",(0,d.jsx)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,d.jsx)(e.p,{children:"\u53EA\u6709 Hash \u5206\u6876\u9700\u8981\u9009\u62E9\u5206\u6876\u952E\uFF0CRandom \u5206\u6876\u4E0D\u9700\u8981\u9009\u62E9\u5206\u6876\u952E\u3002"})}),"\n",(0,d.jsx)(e.p,{children:"\u5206\u6876\u952E\u53EF\u4EE5\u662F\u4E00\u5217\u6216\u8005\u591A\u5217\u3002\u5982\u679C\u662F DUPLICATE \u8868\uFF0C\u4EFB\u4F55 Key \u5217\u4E0E Value \u5217\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u5206\u6876\u952E\u3002\u5982\u679C\u662F AGGREGATE \u6216 UNIQUE \u8868\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u9010\u6E10\u7684\u805A\u5408\u6027\uFF0C\u5206\u6876\u5217\u5FC5\u987B\u662F Key \u5217\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u6839\u636E\u4EE5\u4E0B\u89C4\u5219\u9009\u62E9\u5206\u6876\u952E\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5229\u7528\u67E5\u8BE2\u8FC7\u6EE4\u6761\u4EF6\uFF1A"}),"\u4F7F\u7528\u67E5\u8BE2\u4E2D\u7684\u8FC7\u6EE4\u6761\u4EF6\u8FDB\u884C Hash \u5206\u6876\uFF0C\u6709\u52A9\u4E8E\u6570\u636E\u7684\u526A\u88C1\uFF0C\u51CF\u5C11\u6570\u636E\u626B\u63CF\u91CF\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5229\u7528\u9AD8\u57FA\u6570\u5217\uFF1A"}),"\u9009\u62E9\u9AD8\u57FA\u6570\uFF08\u552F\u4E00\u503C\u8F83\u591A\uFF09\u7684\u5217\u8FDB\u884C Hash \u5206\u6876\uFF0C\u6709\u52A9\u4E8E\u6570\u636E\u5747\u5300\u7684\u5206\u6563\u5728\u6BCF\u4E00\u4E2A\u5206\u6876\u4E2D\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u9AD8\u5E76\u53D1\u70B9\u67E5\u573A\u666F\uFF1A"}),"\u5EFA\u8BAE\u9009\u62E9\u5355\u5217\u6216\u8F83\u5C11\u5217\u8FDB\u884C\u5206\u6876\u3002\u70B9\u67E5\u53EF\u80FD\u4EC5\u89E6\u53D1\u4E00\u4E2A\u5206\u6876\u626B\u63CF\uFF0C\u4E0D\u540C\u67E5\u8BE2\u4E4B\u95F4\u89E6\u53D1\u4E0D\u540C\u5206\u6876\u626B\u63CF\u7684\u6982\u7387\u8F83\u5927\uFF0C\u4ECE\u800C\u51CF\u5C0F\u67E5\u8BE2\u95F4\u7684 IO \u5F71\u54CD\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5927\u541E\u5410\u67E5\u8BE2\u573A\u666F\uFF1A"}),"\u5EFA\u8BAE\u9009\u62E9\u591A\u5217\u8FDB\u884C\u5206\u6876\uFF0C\u4F7F\u6570\u636E\u66F4\u5747\u5300\u5206\u5E03\u3002\u82E5\u67E5\u8BE2\u6761\u4EF6\u4E0D\u80FD\u5305\u542B\u6240\u6709\u5206\u6876\u952E\u7684\u7B49\u503C\u6761\u4EF6\uFF0C\u5C06\u589E\u52A0\u67E5\u8BE2\u541E\u5410\uFF0C\u964D\u4F4E\u5355\u4E2A\u67E5\u8BE2\u5EF6\u8FDF\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u9009\u62E9\u5206\u6876\u6570\u91CF",children:"\u9009\u62E9\u5206\u6876\u6570\u91CF"}),"\n",(0,d.jsx)(e.p,{children:"\u5728 Doris \u4E2D\uFF0C\u4E00\u4E2A bucket \u4F1A\u88AB\u5B58\u50A8\u4E3A\u4E00\u4E2A\u7269\u7406\u6587\u4EF6\uFF08tablet\uFF09\u3002\u4E00\u4E2A\u8868\u7684 Tablet \u6570\u91CF\u7B49\u4E8E partition_num\uFF08\u5206\u533A\u6570\uFF09\u4E58\u4EE5 bucket_num\uFF08\u5206\u6876\u6570\uFF09\u3002\u4E00\u65E6\u6307\u5B9A Partition \u7684\u6570\u91CF\uFF0C\u4FBF\u4E0D\u53EF\u66F4\u6539\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u786E\u5B9A bucket \u6570\u91CF\u65F6\uFF0C\u9700\u9884\u5148\u8003\u8651\u673A\u5668\u6269\u5BB9\u60C5\u51B5\u3002\u81EA 2.0 \u7248\u672C\u8D77\uFF0CDoris \u652F\u6301\u6839\u636E\u673A\u5668\u8D44\u6E90\u548C\u96C6\u7FA4\u4FE1\u606F\u81EA\u52A8\u8BBE\u7F6E\u5206\u533A\u4E2D\u7684\u5206\u6876\u6570\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u624B\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",children:"\u624B\u52A8\u8BBE\u7F6E\u5206\u6876\u6570"}),"\n",(0,d.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"DISTRIBUTED"})," \u8BED\u53E5\u53EF\u4EE5\u6307\u5B9A\u5206\u6876\u6570\u91CF\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:"-- Set hash bucket num to 8\nDISTRIBUTED BY HASH(region) BUCKETS 8\n\n-- Set random bucket num to 8\nDISTRIBUTED BY RANDOM BUCKETS 8\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u51B3\u5B9A\u5206\u6876\u6570\u91CF\u65F6\uFF0C\u901A\u5E38\u9075\u5FAA\u6570\u91CF\u4E0E\u5927\u5C0F\u4E24\u4E2A\u539F\u5219\uFF0C\u5F53\u53D1\u751F\u51B2\u7A81\u65F6\uFF0C\u4F18\u5148\u8003\u8651\u5927\u5C0F\u539F\u5219\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5927\u5C0F\u539F\u5219"}),"\uFF1A\u5EFA\u8BAE\u4E00\u4E2A tablet \u7684\u5927\u5C0F\u5728 1-10G \u8303\u56F4\u5185\u3002\u8FC7\u5C0F\u7684 tablet \u53EF\u80FD\u5BFC\u81F4\u805A\u5408\u6548\u679C\u4E0D\u4F73\uFF0C\u589E\u52A0\u5143\u6570\u636E\u7BA1\u7406\u538B\u529B\uFF1B\u8FC7\u5927\u7684 tablet \u5219\u4E0D\u5229\u4E8E\u526F\u672C\u8FC1\u79FB\u3001\u8865\u9F50\uFF0C\u4E14\u4F1A\u589E\u52A0 Schema Change \u64CD\u4F5C\u7684\u5931\u8D25\u91CD\u8BD5\u4EE3\u4EF7\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6570\u91CF\u539F\u5219"}),"\uFF1A\u5728\u4E0D\u8003\u8651\u6269\u5BB9\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u8868\u7684 tablet \u6570\u91CF\u5EFA\u8BAE\u7565\u591A\u4E8E\u6574\u4E2A\u96C6\u7FA4\u7684\u78C1\u76D8\u6570\u91CF\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u5047\u8BBE\u6709 10 \u53F0 BE \u673A\u5668\uFF0C\u6BCF\u4E2A BE \u4E00\u5757\u78C1\u76D8\uFF0C\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u5EFA\u8BAE\u8FDB\u884C\u6570\u636E\u5206\u6876\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5355\u8868\u5927\u5C0F"}),(0,d.jsx)(e.th,{children:"\u5EFA\u8BAE\u5206\u6876\u6570\u91CF"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"500MB"}),(0,d.jsx)(e.td,{children:"4-8 \u4E2A\u5206\u6876"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"5GB"}),(0,d.jsx)(e.td,{children:"6-16 \u4E2A\u5206\u6876"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"50GB"}),(0,d.jsx)(e.td,{children:"32 \u4E2A\u5206\u6876"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"500GB"}),(0,d.jsx)(e.td,{children:"\u5EFA\u8BAE\u5206\u533A\uFF0C\u6BCF\u4E2A\u5206\u533A 50GB\uFF0C\u6BCF\u4E2A\u5206\u533A 16-32 \u4E2A\u5206\u6876"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"5TB"}),(0,d.jsx)(e.td,{children:"\u5EFA\u8BAE\u5206\u533A\uFF0C\u6BCF\u4E2A\u5206\u533A 50GB\uFF0C\u6BCF\u4E2A\u5206\u6876 16-32 \u4E2A\u5206\u6876"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,d.jsxs)(e.p,{children:["\u8868\u7684\u6570\u636E\u91CF\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"SHOW DATA"})," \u547D\u4EE4\u67E5\u770B\u3002\u7ED3\u679C\u9700\u8981\u9664\u4EE5\u526F\u672C\u6570\uFF0C\u53CA\u8868\u7684\u6570\u636E\u91CF\u3002"]})}),"\n",(0,d.jsx)(e.h3,{id:"\u81EA\u52A8\u8BBE\u7F6E\u5206\u6876\u6570",children:"\u81EA\u52A8\u8BBE\u7F6E\u5206\u6876\u6570"}),"\n",(0,d.jsx)(e.p,{children:"\u81EA\u52A8\u63A8\u7B97\u5206\u6876\u6570\u529F\u80FD\u4F1A\u6839\u636E\u8FC7\u53BB\u4E00\u6BB5\u65F6\u95F4\u7684\u5206\u533A\u5927\u5C0F\uFF0C\u81EA\u52A8\u9884\u6D4B\u672A\u6765\u7684\u5206\u533A\u5927\u5C0F\uFF0C\u5E76\u636E\u6B64\u786E\u5B9A\u5206\u6876\u6570\u91CF\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:'-- Set hash bucket auto\nDISTRIBUTED BY HASH(region) BUCKETS AUTO\nproperties("estimate_partition_size" = "20G")\n\n-- Set random bucket auto\nDISTRIBUTED BY HASH(region) BUCKETS AUTO\nproperties("estimate_partition_size" = "20G")\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u521B\u5EFA\u5206\u6876\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"estimate_partition_size"})," \u5C5E\u6027\u6765\u8C03\u6574\u524D\u671F\u4F30\u7B97\u7684\u5206\u533A\u5927\u5C0F\u3002\u6B64\u53C2\u6570\u4E3A\u53EF\u9009\u8BBE\u7F6E\uFF0C\u82E5\u672A\u7ED9\u51FA\uFF0CDoris \u5C06\u9ED8\u8BA4\u53D6\u503C\u4E3A 10GB\u3002\u8BF7\u6CE8\u610F\uFF0C\u8BE5\u53C2\u6570\u4E0E\u540E\u671F\u7CFB\u7EDF\u901A\u8FC7\u5386\u53F2\u5206\u533A\u6570\u636E\u63A8\u7B97\u51FA\u7684\u672A\u6765\u5206\u533A\u5927\u5C0F\u65E0\u5173\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u7EF4\u62A4\u6570\u636E\u5206\u6876",children:"\u7EF4\u62A4\u6570\u636E\u5206\u6876"}),"\n",(0,d.jsxs)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:[(0,d.jsx)(e.p,{children:"\u76EE\u524D\uFF0CDoris \u4EC5\u652F\u6301\u4FEE\u6539\u65B0\u589E\u5206\u533A\u7684\u5206\u6876\u6570\u91CF\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B\u64CD\u4F5C\u6682\u4E0D\u652F\u6301\uFF1A"}),(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u4FEE\u6539\u5206\u6876\u7C7B\u578B"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u4FEE\u6539\u5206\u6876\u952E"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u4FEE\u6539\u5DF2\u521B\u5EFA\u7684\u5206\u6876\u7684\u5206\u6876\u6570\u91CF"}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u5EFA\u8868\u65F6\uFF0C\u5DF2\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"DISTRIBUTED"})," \u8BED\u53E5\u7EDF\u4E00\u6307\u5B9A\u4E86\u6BCF\u4E2A\u5206\u533A\u7684\u6570\u91CF\u3002\u4E3A\u4E86\u5E94\u5BF9\u6570\u636E\u589E\u957F\u6216\u51CF\u5C11\u7684\u60C5\u51B5\uFF0C\u5728\u52A8\u6001\u589E\u52A0\u5206\u533A\u65F6\uFF0C\u53EF\u4EE5\u5355\u72EC\u6307\u5B9A\u65B0\u5206\u533A\u7684\u5206\u6876\u6570\u91CF\u3002\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"ALTER TABLE"})," \u547D\u4EE4\u6765\u4FEE\u6539\u65B0\u589E\u5206\u533A\u7684\u5206\u6876\u6570\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:'-- Modify hash bucket table\nALTER TABLE demo.hash_bucket_tbl \nADD PARTITION p250103 VALUES LESS THAN("2025-01-03")\nDISTRIBUTED BY HASH(region) BUCKETS 16;\n\n-- Modify random bucket table\nALTER TABLE demo.random_bucket_tbl \nADD PARTITION p250103 VALUES LESS THAN("2025-01-03")\nDISTRIBUTED BY RANDOM BUCKETS 16;\n\n-- Modify dynamic partition table\nALTER TABLE demo.dynamic_partition_tbl\nSET ("dynamic_partition.buckets"="16");\n'})}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u4FEE\u6539\u5206\u6876\u6570\u91CF\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 SHOW PARTITION \u547D\u4EE4\u67E5\u770B\u4FEE\u6539\u540E\u7684\u5206\u6876\u6570\u91CF\u3002"})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},641838:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/hash-bucket-bddcce3aa18c83ad8523cae53d8588e3.png"},489307:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/random-bucket-d8defe2db9959b5c291ab585a08aaf34.png"},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return l}});var s=i(667294);let d={},t=s.createContext(d);function l(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);