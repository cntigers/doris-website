"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["26419"],{285114:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/optimizing-table-schema","title":"\u4F18\u5316\u8868 Schema \u8BBE\u8BA1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/optimizing-table-schema","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4F18\u5316\u8868 Schema \u8BBE\u8BA1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Distribute Hint","permalink":"/zh-CN/docs/3.0/query-acceleration/hints/distribute-hint"},"next":{"title":"\u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1\u548C\u4F7F\u7528","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-index"}}'),c=i("785893"),l=i("250065");let r={title:"\u4F18\u5316\u8868 Schema \u8BBE\u8BA1",language:"zh-CN"},a=void 0,s={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B 1\uFF1A\u8868\u5F15\u64CE\u9009\u62E9",id:"\u6848\u4F8B-1\u8868\u5F15\u64CE\u9009\u62E9",level:2},{value:"\u6848\u4F8B 2\uFF1A\u5206\u6876\u5217\u9009\u62E9",id:"\u6848\u4F8B-2\u5206\u6876\u5217\u9009\u62E9",level:2},{value:"\u6848\u4F8B 3\uFF1AKey \u5217\u4F18\u5316",id:"\u6848\u4F8B-3key-\u5217\u4F18\u5316",level:2},{value:"\u6848\u4F8B 4\uFF1A\u5B57\u6BB5\u7C7B\u578B\u4F18\u5316",id:"\u6848\u4F8B-4\u5B57\u6BB5\u7C7B\u578B\u4F18\u5316",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,c.jsx)(n.p,{children:"Schema \u8BBE\u8BA1\u548C\u8C03\u4F18\u4E2D\uFF0C\u8868\u8BBE\u8BA1\u662F\u5176\u4E2D\u91CD\u8981\u7684\u4E00\u90E8\u5206\uFF0C\u5305\u62EC\u8868\u5F15\u64CE\u9009\u62E9\u3001\u5206\u533A\u5206\u6876\u5217\u9009\u62E9\u3001\u5206\u533A\u5206\u6876\u5927\u5C0F\u8BBE\u7F6E\u3001key \u5217\u548C\u5B57\u6BB5\u7C7B\u578B\u4F18\u5316\u7B49\u3002\u7F3A\u4E4F Schema \u8BBE\u8BA1\u7684\u7CFB\u7EDF\uFF0C\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u503E\u659C\u7B49\u95EE\u9898\uFF0C\u4E0D\u80FD\u5145\u5206\u5229\u7528\u7CFB\u7EDF\u5E76\u884C\u548C\u6392\u5E8F\u7279\u6027\uFF0C\u4ECE\u800C\u5F71\u54CD Doris \u5728\u4E1A\u52A1\u7CFB\u7EDF\u4E2D\u53D1\u6325\u771F\u5B9E\u7684\u6027\u80FD\u4F18\u52BF\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8BE6\u7EC6\u7684\u8BBE\u8BA1\u539F\u5219\u53EF\u4EE5\u53C2\u8003",(0,c.jsx)(n.a,{href:"/zh-CN/docs/3.0/table-design/overview",children:"\u6570\u636E\u8868\u8BBE\u8BA1"}),"\u7AE0\u8282\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002\u672C\u7AE0\u5C06\u4ECE\u5B9E\u9645\u6848\u4F8B\u7684\u89D2\u5EA6\uFF0C\u5C55\u793A\u51E0\u79CD\u5178\u578B\u573A\u666F\u4E0B\u56E0 Schema \u8BBE\u8BA1\u95EE\u9898\u5BFC\u81F4\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u5E76\u7ED9\u51FA\u4F18\u5316\u5EFA\u8BAE\uFF0C\u4F9B\u4E1A\u52A1\u8C03\u4F18\u53C2\u8003\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6848\u4F8B-1\u8868\u5F15\u64CE\u9009\u62E9",children:"\u6848\u4F8B 1\uFF1A\u8868\u5F15\u64CE\u9009\u62E9"}),"\n",(0,c.jsx)(n.p,{children:"Doris \u652F\u6301 Duplicate\u3001Unique\u3001Aggregate \u4E09\u79CD\u8868\u6A21\u578B\u3002\u5176\u4E2D\uFF0CUnique \u53C8\u53EF\u4EE5\u8FDB\u4E00\u6B65\u5206\u4E3A Merge-On-Read\uFF08MOR\uFF09\u548C Merge-On-Write\uFF08MOW\uFF09\u4E24\u79CD\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u51E0\u79CD\u8868\u6A21\u578B\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u7531\u597D\u5230\u5DEE\u4F9D\u6B21\u4E3A\uFF1ADuplicate > MOW > MOR == Aggregate\u3002\u56E0\u6B64\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u63A8\u8350\u4F7F\u7528 Duplicate \u8868\uFF0C\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,c.jsx)(n.admonition,{title:"\u4F18\u5316\u5EFA\u8BAE",type:"tip",children:(0,c.jsxs)(n.p,{children:["\u5F53\u4E1A\u52A1\u65E0\u6570\u636E\u66F4\u65B0\u9700\u6C42\uFF0C\u4F46\u5BF9\u67E5\u8BE2\u6027\u80FD\u6709\u8F83\u9AD8\u8981\u6C42\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 ",(0,c.jsx)(n.a,{href:"/zh-CN/docs/3.0/table-design/data-model/duplicate",children:"Duplicate \u8868"}),"\u3002"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u6848\u4F8B-2\u5206\u6876\u5217\u9009\u62E9",children:"\u6848\u4F8B 2\uFF1A\u5206\u6876\u5217\u9009\u62E9"}),"\n",(0,c.jsx)(n.p,{children:"Doris \u652F\u6301\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u6876\u64CD\u4F5C\uFF0C\u5373\u4F9D\u636E Schema \u4E2D\u9884\u8BBE\u7684\u5206\u6876\u952E\u6765\u5206\u5E03\u6570\u636E\uFF0C\u8FDB\u800C\u5F62\u6210\u6570\u636E Bucket\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u9009\u53D6\u6070\u5F53\u7684\u5206\u6876\u5217\uFF0C\u5BF9\u4E8E\u539F\u59CB\u6570\u636E\u7684\u5408\u7406\u5206\u5E03\u81F3\u5173\u91CD\u8981\uFF0C\u5B83\u80FD\u6709\u6548\u9632\u6B62\u6570\u636E\u503E\u659C\u6240\u5F15\u53D1\u7684\u6027\u80FD\u95EE\u9898\u3002\u540C\u65F6\uFF0C\u8FD9\u4E5F\u80FD\u6700\u5927\u5316\u5730\u5229\u7528 Doris \u63D0\u4F9B\u7684 Colocate Join \u548C Bucket Shuffle Join \u7279\u6027\uFF0C\u4ECE\u800C\u663E\u8457\u63D0\u5347 Join \u64CD\u4F5C\u7684\u6027\u80FD\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B\u9762 t1 \u8868\u7684\u5EFA\u8868\u8BED\u53E5\u4E3A\u4F8B\uFF0C\u5F53\u524D\u5206\u6876\u5217\u9009\u5B9A\u4E3A c2\u3002\u7136\u800C\uFF0C\u5728\u5B9E\u9645\u6570\u636E\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u82E5 c2 \u5217\u7684\u503C\u5168\u90E8\u9ED8\u8BA4\u4E3A null\uFF0C\u90A3\u4E48\u5373\u4FBF\u8BBE\u5B9A\u4E86 64 \u4E2A\u5206\u6876\uFF0C\u5B9E\u9645\u4E0A\u4E5F\u53EA\u6709\u4E00\u4E2A\u5206\u6876\u4F1A\u5305\u542B\u6240\u6709\u6570\u636E\u3002\u8FD9\u79CD\u6781\u7AEF\u60C5\u51B5\u4F1A\u5BFC\u81F4\u4E25\u91CD\u7684\u6570\u636E\u503E\u659C\uFF0C\u8FDB\u800C\u4EA7\u751F\u6027\u80FD\u74F6\u9888\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 64\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n\uFF09;\ninsert into t1 select number, null from numbers ('number'='10000000');\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9488\u5BF9\u4E0A\u8FF0\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5206\u6876\u5217\u4ECE c2 \u6539\u4E3A c1\uFF0C\u4EE5\u5B9E\u73B0\u6570\u636E\u7684\u5145\u5206\u6563\u5217\uFF0C\u5E76\u6700\u5927\u5316\u5730\u5229\u7528\u7CFB\u7EDF\u7684\u5E76\u884C\u5904\u7406\u80FD\u529B\uFF0C\u4ECE\u800C\u8FBE\u5230\u8C03\u4F18\u7684\u76EE\u7684\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u56E0\u6B64\uFF0C\u5728 Schema \u8BBE\u8BA1\u9636\u6BB5\uFF0C\u4E1A\u52A1\u4EBA\u5458\u9700\u8981\u6839\u636E\u4E1A\u52A1\u7279\u6027\uFF0C\u63D0\u524D\u8FDB\u884C\u5408\u7406\u7684\u5206\u6876\u5217\u8BBE\u8BA1\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u9884\u5148\u4E86\u89E3\u5230 c2 \u5217\u7684\u4E1A\u52A1\u542B\u4E49\u4E2D\u53EF\u80FD\u5305\u542B\u5927\u91CF\u503E\u659C\u7684\u503C\uFF0C\u5982 null \u6216\u67D0\u4E9B\u7279\u5B9A\u7684\u503C\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u907F\u514D\u9009\u62E9\u8FD9\u4E9B\u5B57\u6BB5\u4F5C\u4E3A\u5206\u6876\u5217\u3002\u76F8\u53CD\uFF0C\u5E94\u8BE5\u9009\u62E9\u90A3\u4E9B\u5728\u4E1A\u52A1\u542B\u4E49\u4E0A\u5177\u6709\u5145\u5206\u6563\u5217\u7279\u6027\u7684\u5B57\u6BB5\uFF0C\u5982\u7528\u6237 ID\uFF0C\u4F5C\u4E3A\u5206\u6876\u5217\u3002\u5728\u6027\u80FD\u95EE\u9898\u6392\u67E5\u9636\u6BB5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B SQL \u8BED\u53E5\u6765\u786E\u8BA4\u5206\u6876\u5B57\u6BB5\u662F\u5426\u5B58\u5728\u6570\u636E\u503E\u659C\uFF0C\u5E76\u636E\u6B64\u8FDB\u884C\u540E\u7EED\u7684\u4F18\u5316\u8C03\u6574\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select c2\uFF0Ccount(*) cnt from t1 group by c2 order by cnt desc limit 10;\n"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u4F18\u5316\u5EFA\u8BAE",type:"tip",children:(0,c.jsx)(n.p,{children:"\u68C0\u67E5\u5206\u6876\u5217\u662F\u5426\u5B58\u5728\u6570\u636E\u503E\u659C\u95EE\u9898\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u66F4\u6362\u4E3A\u5728\u4E1A\u52A1\u542B\u4E49\u4E0A\u5177\u6709\u5145\u5206\u6563\u5217\u7279\u6027\u7684\u5B57\u6BB5\u4F5C\u4E3A\u5206\u6876\u5217\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u53EF\u4EE5\u660E\u786E\u7684\u662F\uFF0C\u826F\u597D\u7684\u4E8B\u524D\u8BBE\u8BA1\u80FD\u591F\u663E\u8457\u964D\u4F4E\u4E8B\u540E\u95EE\u9898\u53D1\u751F\u65F6\u7684\u5B9A\u4F4D\u548C\u4FEE\u6B63\u6210\u672C\u3002\u56E0\u6B64\uFF0C\u5F3A\u70C8\u63A8\u8350\u4E1A\u52A1\u4EBA\u5458\u5728 Schema \u8BBE\u8BA1\u9636\u6BB5\u8FDB\u884C\u4E25\u683C\u7684\u8BBE\u8BA1\u548C\u68C0\u67E5\uFF0C\u4EE5\u907F\u514D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u6210\u672C\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6848\u4F8B-3key-\u5217\u4F18\u5316",children:"\u6848\u4F8B 3\uFF1AKey \u5217\u4F18\u5316"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4E09\u79CD\u8868\u6A21\u578B\u4E2D\uFF0C\u82E5\u5EFA\u8868 Schema \u660E\u786E\u6307\u5B9A\u4E86 Duplicate Key\u3001Unique Key \u6216 Aggregate Key\uFF0CDoris \u5C06\u5728\u5B58\u50A8\u5C42\u9762\u786E\u4FDD\u6570\u636E\u4F9D\u636E Key \u5217\u8FDB\u884C\u6392\u5E8F\u3002\u8FD9\u4E00\u7279\u6027\u4E3A\u6570\u636E\u67E5\u8BE2\u7684\u6027\u80FD\u4F18\u5316\u63D0\u4F9B\u4E86\u65B0\u7684\u601D\u8DEF\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5728 Schema \u8BBE\u8BA1\u9636\u6BB5\uFF0C\u82E5\u80FD\u5C06\u4E1A\u52A1\u67E5\u8BE2\u4E2D\u9891\u7E41\u4F7F\u7528\u7684\u7B49\u503C\u6216\u8303\u56F4\u67E5\u8BE2\u5217\u5B9A\u4E49\u4E3A Key \u5217\uFF0C\u5C06\u4F1A\u663E\u8457\u63D0\u5347\u8FD9\u7C7B\u67E5\u8BE2\u7684\u6267\u884C\u901F\u5EA6\uFF0C\u8FDB\u800C\u63D0\u5347\u6574\u4F53\u6027\u80FD\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u7EC4\u4E1A\u52A1\u67E5\u8BE2\u9700\u6C42\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select * from t1 where t1.c1 = 1;\nselect * from t1 where t1.c1 > 1 and t1.c1 < 10;\nselect * from t1 where t1.c1 in (1, 2, 3);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9488\u5BF9\u4E0A\u8FF0\u4E1A\u52A1\u9700\u6C42\u548C t1 \u8868\u7684 Schema \u8BBE\u8BA1\u4E0E\u540E\u671F\u4F18\u5316\uFF0C\u53EF\u4EE5\u8003\u8651\u5C06 c1 \u5217\u4F5C\u4E3A Key \u5217\uFF0C\u4EE5\u52A0\u901F\u67E5\u8BE2\u8FC7\u7A0B\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n\uFF09;\n'})}),"\n",(0,c.jsx)(n.admonition,{title:"\u4F18\u5316\u5EFA\u8BAE",type:"tip",children:(0,c.jsx)(n.p,{children:"\u5C06\u4E1A\u52A1\u67E5\u8BE2\u4E2D\u9891\u7E41\u4F7F\u7528\u7684\u5217\u8BBE\u5B9A\u4E3A Key \u5217\uFF0C\u4EE5\u52A0\u901F\u67E5\u8BE2\u8FC7\u7A0B\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6848\u4F8B-4\u5B57\u6BB5\u7C7B\u578B\u4F18\u5316",children:"\u6848\u4F8B 4\uFF1A\u5B57\u6BB5\u7C7B\u578B\u4F18\u5316"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u5176\u5904\u7406\u590D\u6742\u7A0B\u5EA6\u53EF\u80FD\u5B58\u5728\u663E\u8457\u5DEE\u5F02\u3002\u4F8B\u5982\uFF0C\u53D8\u957F\u7C7B\u578B\u7684\u6570\u636E\u5904\u7406\u76F8\u8F83\u4E8E\u5B9A\u957F\u7C7B\u578B\u800C\u8A00\uFF0C\u5176\u590D\u6742\u6027\u8981\u9AD8\u5F97\u591A\uFF1B\u540C\u6837\uFF0C\u9AD8\u7CBE\u7C7B\u578B\u7684\u6570\u636E\u5904\u7406\u4E5F\u6BD4\u4F4E\u7CBE\u7C7B\u578B\u66F4\u4E3A\u590D\u6742\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u4E00\u7279\u6027\u5BF9\u4E1A\u52A1\u7CFB\u7EDF Schema \u7684\u8BBE\u8BA1\u53CA\u540E\u671F\u4F18\u5316\u63D0\u4F9B\u4E86\u91CD\u8981\u542F\u793A\uFF1A"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5728\u6EE1\u8DB3\u4E1A\u52A1\u7CFB\u7EDF\u8868\u8FBE\u548C\u8BA1\u7B97\u9700\u6C42\u7684\u524D\u63D0\u4E0B\uFF0C\u5E94\u4F18\u5148\u9009\u62E9\u5B9A\u957F\u7C7B\u578B\uFF0C\u907F\u514D\u4F7F\u7528\u53D8\u957F\u7C7B\u578B\uFF1B"}),"\n",(0,c.jsx)(n.li,{children:"\u5C3D\u91CF\u91C7\u7528\u4F4E\u7CBE\u7C7B\u578B\uFF0C\u907F\u514D\u9AD8\u7CBE\u7C7B\u578B\u3002\u5177\u4F53\u5B9E\u8DF5\u5305\u62EC\uFF1A\u4F7F\u7528 BIGINT \u66FF\u4EE3 VARCHAR \u6216 STRING \u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u4EE5\u53CA\u7528 FLOAT / INT / BIGINT \u66FF\u6362 DECIMAL \u7C7B\u578B\u7684\u5B57\u6BB5\u7B49\u3002\u6B64\u7C7B\u5B57\u6BB5\u7C7B\u578B\u7684\u5408\u7406\u8BBE\u8BA1\u548C\u4F18\u5316\uFF0C\u5C06\u6781\u5927\u5730\u63D0\u5347\u4E1A\u52A1\u7684\u8BA1\u7B97\u6548\u7387\uFF0C\u4ECE\u800C\u589E\u5F3A\u7CFB\u7EDF\u6027\u80FD\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{title:"\u4F18\u5316\u5EFA\u8BAE",type:"tip",children:(0,c.jsx)(n.p,{children:"\u5728\u5B9A\u4E49 Schema \u7C7B\u578B\u65F6\uFF0C\u5E94\u9075\u5FAA\u5B9A\u957F\u548C\u4F4E\u7CBE\u4F18\u5148\u7684\u539F\u5219\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,c.jsx)(n.p,{children:"\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u4E00\u4E2A\u7CBE\u5FC3\u8BBE\u8BA1\u7684 Schema \u80FD\u591F\u6700\u5927\u5316\u5730\u5229\u7528 Doris \u7684\u7279\u6027\uFF0C\u8FDB\u800C\u663E\u8457\u63D0\u5347\u4E1A\u52A1\u6027\u80FD\u3002\u53CD\u89C2\u672A\u7ECF\u8FC7\u8C03\u4F18\u7684 Schema \u8BBE\u8BA1\u5219\u53EF\u80FD\u5BF9\u4E1A\u52A1\u9020\u6210\u5168\u5C40\u6027\u7684\u8D1F\u9762\u5F71\u54CD\uFF0C\u4F8B\u5982\u6570\u636E\u503E\u659C\u7B49\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u524D\u671F\u7684 Schema \u8BBE\u8BA1\u4F18\u5316\u5DE5\u4F5C\u663E\u5F97\u5C24\u4E3A\u91CD\u8981\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var t=i(667294);let c={},l=t.createContext(c);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);