"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801604"],{111150:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>d});var s=JSON.parse('{"id":"data-operate/import/data-source/tencent-cos","title":"\u817E\u8BAF\u4E91 COS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/data-source/tencent-cos.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/tencent-cos","permalink":"/zh-CN/docs/data-operate/import/data-source/tencent-cos","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u817E\u8BAF\u4E91 COS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u534E\u4E3A\u4E91 OBS","permalink":"/zh-CN/docs/data-operate/import/data-source/huawei-obs"},"next":{"title":"MinIO","permalink":"/zh-CN/docs/data-operate/import/data-source/minio"}}'),i=a("785893"),r=a("250065");let l={title:"\u817E\u8BAF\u4E91 COS",language:"zh-CN"},d=void 0,o={},t=[{value:"\u4F7F\u7528 S3 Load \u5BFC\u5165",id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"\u4F7F\u7528 TVF \u5BFC\u5165",id:"\u4F7F\u7528-tvf-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E24\u79CD\u65B9\u5F0F\u4ECE\u817E\u8BAF\u4E91 COS \u5BFC\u5165\u6587\u4EF6\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4F7F\u7528 S3 Load \u5C06\u817E\u8BAF\u4E91 COS \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4F7F\u7528 TVF \u5C06\u817E\u8BAF\u4E91 COS \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",children:"\u4F7F\u7528 S3 Load \u5BFC\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 S3 Load \u5BFC\u5165\u5BF9\u8C61\u5B58\u50A8\u4E0A\u7684\u6587\u4EF6\uFF0C\u8BE6\u7EC6\u6B65\u9AA4\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual",children:"Broker Load \u624B\u518C"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728\u817E\u8BAF\u4E91 COS \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL s3_load_2022_04_01\n(\n    DATA INFILE("s3://your_bucket_name/s3load_example.csv")\n    INTO TABLE test_s3load\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nWITH S3\n(\n    "provider" = "COS",\n    "s3.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528-tvf-\u5BFC\u5165",children:"\u4F7F\u7528 TVF \u5BFC\u5165"}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728\u817E\u8BAF\u4E91 COS \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'INSERT INTO test_s3load\nSELECT * FROM S3\n(\n    "uri" = "s3://your_bucket_name/s3load_example.csv",\n    "format" = "csv",\n    "provider" = "COS",\n    "s3.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing",\n    "s3.access_key" = "<your-ak>",\n    "s3.secret_key" = "<your-sk>",\n    "column_separator" = ",",\n    "csv_schema" = "user_id:int;name:string;age:int"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return l}});var s=a(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);