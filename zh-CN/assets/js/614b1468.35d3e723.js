"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["679015"],{95559:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>t,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>i});var l=JSON.parse('{"id":"data-operate/import/handling-messy-data","title":"\u5F02\u5E38\u6570\u636E\u5904\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/handling-messy-data.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/handling-messy-data","permalink":"/zh-CN/docs/dev/data-operate/import/handling-messy-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5F02\u5E38\u6570\u636E\u5904\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Variant","permalink":"/zh-CN/docs/dev/data-operate/import/complex-types/variant"},"next":{"title":"\u5BFC\u5165\u65F6\u5B9E\u73B0\u6570\u636E\u8F6C\u6362","permalink":"/zh-CN/docs/dev/data-operate/import/load-data-convert"}}'),r=s("785893"),d=s("250065");let t={title:"\u5F02\u5E38\u6570\u636E\u5904\u7406",language:"zh-CN"},i=void 0,c={},a=[{value:"\u4E25\u683C\u6A21\u5F0F",id:"\u4E25\u683C\u6A21\u5F0F",level:2},{value:"\u5217\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u7684\u8FC7\u6EE4\u7B56\u7565",id:"\u5217\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u7684\u8FC7\u6EE4\u7B56\u7565",level:3},{value:"\u9650\u5B9A\u90E8\u5206\u5217\u66F4\u65B0\u53EA\u80FD\u66F4\u65B0\u5DF2\u6709\u7684\u5217",id:"\u9650\u5B9A\u90E8\u5206\u5217\u66F4\u65B0\u53EA\u80FD\u66F4\u65B0\u5DF2\u6709\u7684\u5217",level:3},{value:"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F",id:"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F",level:3},{value:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B",id:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B",level:2},{value:"\u8FC7\u6EE4\u6BD4\u4F8B\u8BA1\u7B97\u65B9\u6CD5",id:"\u8FC7\u6EE4\u6BD4\u4F8B\u8BA1\u7B97\u65B9\u6CD5",level:3},{value:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\u8BBE\u7F6E",id:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\u8BBE\u7F6E",level:3}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u6E90\u6570\u636E\u5217\u4E0E\u76EE\u6807\u5217\u7684\u6570\u636E\u7C7B\u578B\u53EF\u80FD\u5B58\u5728\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u5BFC\u5165\u8FC7\u7A0B\u4F1A\u5BF9\u8FD9\u4E9B\u7C7B\u578B\u4E0D\u4E00\u81F4\u7684\u6570\u636E\u8FDB\u884C\u8F6C\u6362\uFF0C\u4F46\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u51FA\u73B0\u5B57\u6BB5\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5B57\u6BB5\u8D85\u957F\u3001\u7CBE\u5EA6\u4E0D\u5339\u914D\u7B49\u95EE\u9898\uFF0C\u4ECE\u800C\u5BFC\u81F4\u8F6C\u6362\u5931\u8D25\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4E3A\u4E86\u5904\u7406\u8FD9\u4E9B\u5F02\u5E38\u60C5\u51B5\uFF0CDoris \u63D0\u4F9B\u4E86\u4E24\u4E2A\u91CD\u8981\u7684\u63A7\u5236\u53C2\u6570\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4E25\u683C\u6A21\u5F0F (strict_mode)\uFF1A\u7528\u4E8E\u63A7\u5236\u662F\u5426\u8FC7\u6EE4\u8F6C\u6362\u5931\u8D25\u7684\u6570\u636E\u884C\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B (max_filter_ratio)\uFF1A\u7528\u4E8E\u8BBE\u7F6E\u53EF\u5BB9\u5FCD\u7684\u5F02\u5E38\u6570\u636E\u6240\u5360\u603B\u6570\u636E\u7684\u6700\u5927\u6BD4\u4F8B\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4E25\u683C\u6A21\u5F0F",children:"\u4E25\u683C\u6A21\u5F0F"}),"\n",(0,r.jsx)(e.p,{children:"\u4E25\u683C\u6A21\u5F0F\u5177\u6709\u4E24\u4E2A\u4E3B\u8981\u529F\u80FD\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5BF9\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u53D1\u751F\u5217\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u7684\u6570\u636E\u884C\u8FDB\u884C\u8FC7\u6EE4\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u90E8\u5206\u5217\u66F4\u65B0\u573A\u666F\u4E2D\uFF0C\u9650\u5236\u53EA\u80FD\u66F4\u65B0\u5DF2\u5B58\u5728\u7684\u5217\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5217\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u7684\u8FC7\u6EE4\u7B56\u7565",children:"\u5217\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u7684\u8FC7\u6EE4\u7B56\u7565"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636E\u4E25\u683C\u6A21\u5F0F\u7684\u8BBE\u7F6E\uFF0C\u7CFB\u7EDF\u4F1A\u91C7\u53D6\u4E0D\u540C\u7684\u5904\u7406\u7B56\u7565\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5173\u95ED\u4E25\u683C\u6A21\u5F0F\u65F6\uFF1A\u8F6C\u6362\u5931\u8D25\u7684\u5B57\u6BB5\u5C06\u88AB\u8BBE\u7F6E\u4E3A NULL \u503C\uFF0C\u5305\u542B\u8FD9\u4E9B NULL \u503C\u7684\u5F02\u5E38\u6570\u636E\u884C\u4F1A\u4E0E\u6B63\u786E\u7684\u6570\u636E\u884C\u4E00\u8D77\u5BFC\u5165\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u65F6\uFF1A\u7CFB\u7EDF\u4F1A\u8FC7\u6EE4\u6389\u8F6C\u6362\u5931\u8D25\u7684\u6570\u636E\u884C\uFF0C\u4EC5\u5BFC\u5165\u6B63\u786E\u7684\u6570\u636E\u884C\u3002\u8FD9\u91CC\u7684"\u8F6C\u6362\u5931\u8D25"\u7279\u6307\uFF1A\u539F\u59CB\u6570\u636E\u975E NULL\uFF0C\u4F46\u5728\u5217\u7C7B\u578B\u8F6C\u6362\u540E\u7ED3\u679C\u4E3A NULL \u7684\u60C5\u51B5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u91CC\u7684\u5217\u7C7B\u578B\u8F6C\u6362\u4E0D\u5305\u62EC\u4F7F\u7528\u51FD\u6570\u8BA1\u7B97\u5F97\u5230\u7684 NULL \u503C\u3002'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u4E8E NULL \u503C\u7684\u5904\u7406\uFF1A\u65E0\u8BBA\u662F\u6B63\u786E\u7684\u6570\u636E\u884C\u8FD8\u662F\u5F02\u5E38\u7684\u6570\u636E\u884C\u90FD\u53EF\u80FD\u5305\u542B NULL \u503C\u3002\u5982\u679C\u76EE\u6807\u5217\u88AB\u5B9A\u4E49\u4E3A\u4E0D\u5141\u8BB8 NULL \u503C\uFF0C\u5219\u5305\u542B NULL \u503C\u7684\u6570\u636E\u884C\u90FD\u4F1A\u88AB\u8FC7\u6EE4\u6389\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. \u4EE5\u5217\u7C7B\u578B\u4E3A TinyInt \u6765\u4E3E\u4F8B\uFF1A"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u539F\u59CB\u6570\u636E\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"\u539F\u59CB\u6570\u636E\u4E3E\u4F8B"}),(0,r.jsx)(e.th,{children:"\u8F6C\u6362\u4E3A TinyInt \u540E\u7684\u503C"}),(0,r.jsx)(e.th,{children:"\u4E25\u683C\u6A21\u5F0F"}),(0,r.jsx)(e.th,{children:"\u7ED3\u679C"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"\\N"}),(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F\u6216\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"NULL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:'"abc" or 2000'}),(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F"}),(0,r.jsx)(e.td,{children:"\u975E\u6CD5\u503C\uFF08\u88AB\u8FC7\u6EE4\uFF09"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:'"abc"'}),(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"NULL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F\u6216\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"\u6B63\u786E\u5BFC\u5165"})]})]})]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u4E2D\u7684\u5217\u5141\u8BB8\u5BFC\u5165\u7A7A\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"abc"})," \u53CA ",(0,r.jsx)(e.code,{children:"2000"})," \u5728\u8F6C\u6362\u4E3A TinyInt \u540E\uFF0C\u4F1A\u56E0\u7C7B\u578B\u6216\u7CBE\u5EA6\u95EE\u9898\u53D8\u4E3A NULL\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u5F00\u542F\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u7C7B\u6570\u636E\u5C06\u4F1A\u88AB\u8FC7\u6EE4\u3002\u800C\u5982\u679C\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u5219\u4F1A\u5BFC\u5165 ",(0,r.jsx)(e.code,{children:"null"}),"\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u4EE5\u5217\u7C7B\u578B\u4E3A Decimal(1,0) \u4E3E\u4F8B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u539F\u59CB\u6570\u636E\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"\u539F\u59CB\u6570\u636E\u4E3E\u4F8B"}),(0,r.jsx)(e.th,{children:"\u8F6C\u6362\u4E3A Decimal \u540E\u7684\u503C"}),(0,r.jsx)(e.th,{children:"\u4E25\u683C\u6A21\u5F0F"}),(0,r.jsx)(e.th,{children:"\u7ED3\u679C"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"\\N"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F\u6216\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"NULL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"aaa"}),(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F"}),(0,r.jsx)(e.td,{children:"\u975E\u6CD5\u503C\uFF08\u88AB\u8FC7\u6EE4\uFF09"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"aaa"}),(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"NULL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u975E\u7A7A\u503C"}),(0,r.jsx)(e.td,{children:"1 or 10"}),(0,r.jsx)(e.td,{children:"1 or 10"}),(0,r.jsx)(e.td,{children:"\u5F00\u542F\u6216\u5173\u95ED"}),(0,r.jsx)(e.td,{children:"\u6B63\u786E\u5BFC\u5165"})]})]})]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u4E2D\u7684\u5217\u5141\u8BB8\u5BFC\u5165\u7A7A\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"abc"})," \u5728\u8F6C\u6362\u4E3A Decimal \u540E\uFF0C\u4F1A\u56E0\u7C7B\u578B\u95EE\u9898\u53D8\u4E3A NULL\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u5F00\u542F\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u7C7B\u6570\u636E\u5C06\u4F1A\u88AB\u8FC7\u6EE4\u3002\u800C\u5982\u679C\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u5219\u4F1A\u5BFC\u5165 ",(0,r.jsx)(e.code,{children:"null"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"10"})," \u867D\u7136\u662F\u4E00\u4E2A\u8D85\u8FC7\u8303\u56F4\u7684\u503C\uFF0C\u4F46\u662F\u56E0\u4E3A\u5176\u7C7B\u578B\u7B26\u5408 decimal \u7684\u8981\u6C42\uFF0C\u6240\u4EE5\u4E25\u683C\u6A21\u5F0F\u5BF9\u5176\u4E0D\u4EA7\u751F\u5F71\u54CD\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(e.h3,{id:"\u9650\u5B9A\u90E8\u5206\u5217\u66F4\u65B0\u53EA\u80FD\u66F4\u65B0\u5DF2\u6709\u7684\u5217",children:"\u9650\u5B9A\u90E8\u5206\u5217\u66F4\u65B0\u53EA\u80FD\u66F4\u65B0\u5DF2\u6709\u7684\u5217"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u90E8\u5206\u5217\u66F4\u65B0\u63D2\u5165\u7684\u6BCF\u4E00\u884C\u6570\u636E\u5FC5\u987B\u6EE1\u8DB3\u8BE5\u884C\u6570\u636E\u7684 Key \u5728\u8868\u4E2D\u5DF2\u7ECF\u5B58\u5728\u3002\u800C\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0\u65F6\u53EF\u4EE5\u66F4\u65B0 Key \u5DF2\u7ECF\u5B58\u5728\u7684\u884C\uFF0C\u4E5F\u53EF\u4EE5\u63D2\u5165 Key \u4E0D\u5B58\u5728\u7684\u65B0\u884C\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B\u5982\u6709\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE user_profile\n(\n    id               INT,\n    name             VARCHAR(10),\n    age              INT,\n    city             VARCHAR(10),\n    balance          DECIMAL(9, 0),\n    last_access_time DATETIME\n) ENGINE=OLAP\nUNIQUE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8868\u4E2D\u6709\u4E00\u6761\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> select * from user_profile;\n+------+-------+------+----------+---------+---------------------+\n| id   | name  | age  | city     | balance | last_access_time   |\n+------+-------+------+----------+---------+---------------------+\n|    1 | kevin |   18 | shenzhen |     400 | 2023-07-01 12:00:00|\n+------+-------+------+----------+---------+---------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5F53\u7528\u6237\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u7684 Insert Into \u90E8\u5206\u5217\u66F4\u65B0\u5411\u8868\u4E2D\u63D2\u5165\u4E0A\u8FF0\u6570\u636E\u65F6\uFF0C\u7531\u4E8E\u5F00\u542F\u4E86\u4E25\u683C\u6A21\u5F0F\u4E14\u7B2C\u4E8C\u3001\u4E09\u884C\u7684\u6570\u636E\u7684 key(",(0,r.jsx)(e.code,{children:"(3)"}),", ",(0,r.jsx)(e.code,{children:"(18)"}),") \u4E0D\u5728\u539F\u8868\u4E2D\uFF0C\u6240\u4EE5\u672C\u6B21\u63D2\u5165\u4F1A\u5931\u8D25\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nSET enable_insert_strict = true;\nINSERT INTO user_profile (id, balance, last_access_time) VALUES\n(1, 500, '2023-07-03 12:00:01'),\n(3, 23, '2023-07-03 12:00:02'),\n(18, 9999999, '2023-07-03 12:00:03');\nERROR 1105 (HY000): errCode = 2, detailMessage = Insert has filtered data in strict mode\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u7528\u6237\u4F7F\u7528\u975E\u4E25\u683C\u6A21\u5F0F\u7684 Insert Into \u90E8\u5206\u5217\u66F4\u65B0\u5411\u8868\u4E2D\u63D2\u5165\u5982\u4E0B\u6570\u636E\u65F6\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nSET enable_insert_strict = false;\nINSERT INTO user_profile (id, balance, last_access_time) VALUES \n(1, 500, '2023-07-03 12:00:01'),\n(3, 23, '2023-07-03 12:00:02'),\n(18, 9999999, '2023-07-03 12:00:03');\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8868\u4E2D\u539F\u6709\u7684\u4E00\u6761\u6570\u636E\u5C06\u4F1A\u88AB\u66F4\u65B0\uFF0C\u6B64\u5916\u8FD8\u5411\u8868\u4E2D\u63D2\u5165\u4E86\u4E24\u6761\u65B0\u6570\u636E\u3002\u5BF9\u4E8E\u63D2\u5165\u7684\u6570\u636E\u4E2D\u7528\u6237\u6CA1\u6709\u6307\u5B9A\u7684\u5217\uFF0C\u5982\u679C\u8BE5\u5217\u6709\u9ED8\u8BA4\u503C\uFF0C\u5219\u4F1A\u4EE5\u9ED8\u8BA4\u503C\u586B\u5145\uFF1B\u5426\u5219\uFF0C\u5982\u679C\u8BE5\u5217\u53EF\u4EE5\u4E3A NULL\uFF0C\u5219\u5C06\u4EE5 NULL \u503C\u586B\u5145\uFF1B\u5426\u5219\u672C\u6B21\u63D2\u5165\u4E0D\u6210\u529F\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> select * from user_profile;\n+------+-------+------+----------+---------+---------------------+\n| id   | name  | age  | city     | balance | last_access_time    |\n+------+-------+------+----------+---------+---------------------+\n|    1 | kevin |   18 | shenzhen |     500 | 2023-07-03 12:00:01 |\n|    3 | NULL  | NULL | NULL     |      23 | 2023-07-03 12:00:02 |\n|   18 | NULL  | NULL | NULL     | 9999999 | 2023-07-03 12:00:03 |\n+------+-------+------+----------+---------+---------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F",children:"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F"}),"\n",(0,r.jsx)(e.p,{children:"\u4E25\u683C\u6A21\u5F0F\uFF08strict_mode\uFF09\u9ED8\u8BA4\u4E3A False\uFF0C\u4EE5\u4E0B\u662F\u5404\u79CD\u5BFC\u5165\u65B9\u5F0F\u7684\u8BBE\u7F6E\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Stream Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T data.txt \\\nhttp://host:port/api/example_db/test_table/_stream_load\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Broker Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label_1\n(\n    DATA INFILE("s3://bucket/data.txt")\n    INTO TABLE test_table\n)\nWITH S3 (...)\nPROPERTIES\n(\n    "strict_mode" = "true"\n);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Routine Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.job1 ON test_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\nFROM KAFKA (...);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"MySQL Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL INFILE \'data.txt\'\nINTO TABLE test_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Insert Into"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SET enable_insert_strict = true;\nINSERT INTO test_table ...;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B",children:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\uFF08max_filter_ratio\uFF09\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u5BFC\u5165\u63A7\u5236\u53C2\u6570\uFF0C\u5B83\u5B9A\u4E49\u4E86\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u5BB9\u5FCD\u7684\u5F02\u5E38\u6570\u636E\u6240\u5360\u603B\u6570\u636E\u7684\u6700\u5927\u6BD4\u4F8B\u3002\u5982\u679C\u5B9E\u9645\u8FC7\u6EE4\u6BD4\u4F8B\u4F4E\u4E8E\u8BBE\u5B9A\u7684\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\uFF0C\u5BFC\u5165\u4EFB\u52A1\u5C06\u7EE7\u7EED\u6267\u884C\uFF0C\u5F02\u5E38\u6570\u636E\u4F1A\u88AB\u5FFD\u7565\uFF1B\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6BD4\u4F8B\uFF0C\u5BFC\u5165\u4EFB\u52A1\u5C06\u5931\u8D25\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u8FC7\u6EE4\u6BD4\u4F8B\u8BA1\u7B97\u65B9\u6CD5",children:"\u8FC7\u6EE4\u6BD4\u4F8B\u8BA1\u7B97\u65B9\u6CD5"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Filtered Rows \u56E0\u6570\u636E\u8D28\u91CF\u4E0D\u5408\u683C\u800C\u88AB\u8FC7\u6EE4\u6389\u7684\u884C\u3002\u6570\u636E\u8D28\u91CF\u4E0D\u5408\u683C\u5305\u62EC\u7C7B\u578B\u9519\u8BEF\u3001\u7CBE\u5EA6\u9519\u8BEF\u3001\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u957F\u3001\u6587\u4EF6\u5217\u6570\u4E0D\u5339\u914D\u7B49\u6570\u636E\u683C\u5F0F\u95EE\u9898\uFF0C\u4EE5\u53CA\u56E0\u6CA1\u6709\u5BF9\u5E94\u7684\u5206\u533A\u800C\u88AB\u8FC7\u6EE4\u6389\u7684\u6570\u636E\u884C\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Unselected Rows \u8FD9\u90E8\u5206\u4E3A\u56E0 ",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/data-operate/import/load-data-convert#%E5%89%8D%E7%BD%AE%E8%BF%87%E6%BB%A4",children:"\u524D\u7F6E\u8FC7\u6EE4"})," \u6216 ",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/data-operate/import/load-data-convert#%E5%90%8E%E7%BD%AE%E8%BF%87%E6%BB%A4",children:"\u540E\u7F6E\u8FC7\u6EE4"})," \u6761\u4EF6\u800C\u88AB\u8FC7\u6EE4\u6389\u7684\u6570\u636E\u884C\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Loaded Rows \u88AB\u6B63\u786E\u5BFC\u5165\u7684\u6570\u636E\u884C\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8FC7\u6EE4\u6BD4\u4F8B\u7684\u8BA1\u7B97\u516C\u5F0F\u4E3A\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",children:"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4E5F\u5C31\u662F\u8BF4 ",(0,r.jsx)(e.code,{children:"Unselected Rows"})," \u4E0D\u4F1A\u53C2\u4E0E\u8FC7\u6EE4\u6BD4\u4F8B\u7684\u8BA1\u7B97\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\u8BBE\u7F6E",children:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\u8BBE\u7F6E"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u5927\u8FC7\u6EE4\u6BD4\u4F8B\uFF08max_filter_ratio\uFF09\u9ED8\u8BA4\u4E3A 0\uFF0C\u8868\u793A\u4E0D\u5141\u8BB8\u4EFB\u4F55\u5F02\u5E38\u6570\u636E\u3002\u4EE5\u4E0B\u662F\u5404\u79CD\u5BFC\u5165\u65B9\u5F0F\u7684\u8BBE\u7F6E\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Stream Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd \\\n-H "max_filter_ratio: 0.1" \\\n-T data.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Broker Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label_1\n(\n    DATA INFILE("s3://bucket/data.txt")\n    INTO TABLE test_table\n)\nWITH S3 (...)\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Routine Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.job1 ON test_table\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n)\nFROM KAFKA (...);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"MySQL Load"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL INFILE \'data.txt\'\nINTO TABLE test_table\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Insert Into"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SET insert_max_filter_ratio = 0.1;\nINSERT INTO test_table FROM S3/HDFS/LOCAL();\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u5BF9\u4E8E Insert Into \u8BED\u53E5\uFF0C",(0,r.jsx)(e.code,{children:"insert_max_filter_ratio"})," \u4EC5\u5728 ",(0,r.jsx)(e.code,{children:"enable_insert_strict = false"})," \u65F6\u751F\u6548\uFF0C\u4E14\u53EA\u9002\u7528\u4E8E ",(0,r.jsx)(e.code,{children:"INSERT INTO FROM S3/HDFS/LOCAL()"})," \u8BED\u6CD5\u3002\u9ED8\u8BA4\u503C\u4E3A 1.0\uFF0C\u8868\u793A\u5141\u8BB8\u6240\u6709\u5F02\u5E38\u6570\u636E\u88AB\u8FC7\u6EE4\u3002"]})})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return t}});var l=s(667294);let r={},d=l.createContext(r);function t(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);