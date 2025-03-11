"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["389562"],{806594:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>t,contentTitle:()=>d});var l=JSON.parse('{"id":"admin-manual/data-admin/backup","title":"\u6570\u636E\u5907\u4EFD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/data-admin/backup.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/backup","permalink":"/zh-CN/docs/2.0/admin-manual/data-admin/backup","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u6570\u636E\u5907\u4EFD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FQDN","permalink":"/zh-CN/docs/2.0/admin-manual/cluster-management/fqdn"},"next":{"title":"\u6570\u636E\u5907\u4EFD\u6062\u590D","permalink":"/zh-CN/docs/2.0/admin-manual/data-admin/restore"}}'),a=s("785893"),i=s("250065");let r={title:"\u6570\u636E\u5907\u4EFD",language:"zh-CN"},d="\u6570\u636E\u5907\u4EFD",c={},t=[{value:"\u539F\u7406\u8BF4\u660E",id:"\u539F\u7406\u8BF4\u660E",level:2},{value:"\u5F00\u59CB\u5907\u4EFD",id:"\u5F00\u59CB\u5907\u4EFD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u5907\u4EFD",id:"\u5907\u4EFD",level:3},{value:"\u6570\u636E\u8FC1\u79FB",id:"\u6570\u636E\u8FC1\u79FB",level:3},{value:"\u8BF4\u660E",id:"\u8BF4\u660E",level:2},{value:"\u76F8\u5173\u547D\u4EE4",id:"\u76F8\u5173\u547D\u4EE4",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u6570\u636E\u5907\u4EFD",children:"\u6570\u636E\u5907\u4EFD"})}),"\n",(0,a.jsx)(n.p,{children:"Doris \u652F\u6301\u5C06\u5F53\u524D\u6570\u636E\u4EE5\u6587\u4EF6\u7684\u5F62\u5F0F\u5907\u4EFD\u5230 HDFS \u548C\u5BF9\u8C61\u5B58\u50A8\u3002\u4E4B\u540E\u53EF\u4EE5\u901A\u8FC7\u6062\u590D\u547D\u4EE4\uFF0C\u4ECE\u8FDC\u7AEF\u5B58\u50A8\u7CFB\u7EDF\u4E2D\u5C06\u6570\u636E\u6062\u590D\u5230\u4EFB\u610F Doris \u96C6\u7FA4\u3002\u901A\u8FC7\u8FD9\u4E2A\u529F\u80FD\uFF0CDoris \u53EF\u4EE5\u652F\u6301\u5C06\u6570\u636E\u5B9A\u671F\u5730\u8FDB\u884C\u5FEB\u7167\u5907\u4EFD\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5728\u4E0D\u540C\u96C6\u7FA4\u95F4\u8FDB\u884C\u6570\u636E\u8FC1\u79FB\uFF0C\u96C6\u7FA4\u95F4\u65E0\u635F\u8FC1\u79FB\u53EF\u4EE5\u4F7F\u7528 CCR (ccr.md)\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u9700\u8981 Doris \u7248\u672C 0.8.2+"}),"\n",(0,a.jsx)(n.h2,{id:"\u539F\u7406\u8BF4\u660E",children:"\u539F\u7406\u8BF4\u660E"}),"\n",(0,a.jsx)(n.p,{children:"\u5907\u4EFD\u64CD\u4F5C\u662F\u5C06\u6307\u5B9A\u8868\u6216\u5206\u533A\u7684\u6570\u636E\uFF0C\u76F4\u63A5\u4EE5 Doris \u5B58\u50A8\u7684\u6587\u4EF6\u7684\u5F62\u5F0F\uFF0C\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93\u4E2D\u8FDB\u884C\u5B58\u50A8\u3002\u5F53\u7528\u6237\u63D0\u4EA4 Backup \u8BF7\u6C42\u540E\uFF0C\u7CFB\u7EDF\u5185\u90E8\u4F1A\u505A\u5982\u4E0B\u64CD\u4F5C\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5FEB\u7167\u53CA\u5FEB\u7167\u4E0A\u4F20"}),"\n",(0,a.jsx)(n.p,{children:"\u5FEB\u7167\u9636\u6BB5\u4F1A\u5BF9\u6307\u5B9A\u7684\u8868\u6216\u5206\u533A\u6570\u636E\u6587\u4EF6\u8FDB\u884C\u5FEB\u7167\u3002\u4E4B\u540E\uFF0C\u5907\u4EFD\u90FD\u662F\u5BF9\u5FEB\u7167\u8FDB\u884C\u64CD\u4F5C\u3002\u5728\u5FEB\u7167\u4E4B\u540E\uFF0C\u5BF9\u8868\u8FDB\u884C\u7684\u66F4\u6539\u3001\u5BFC\u5165\u7B49\u64CD\u4F5C\u90FD\u4E0D\u518D\u5F71\u54CD\u5907\u4EFD\u7684\u7ED3\u679C\u3002\u5FEB\u7167\u53EA\u662F\u5BF9\u5F53\u524D\u6570\u636E\u6587\u4EF6\u4EA7\u751F\u4E00\u4E2A\u786C\u94FE\uFF0C\u8017\u65F6\u5F88\u5C11\u3002\u5FEB\u7167\u5B8C\u6210\u540E\uFF0C\u4F1A\u5F00\u59CB\u5BF9\u8FD9\u4E9B\u5FEB\u7167\u6587\u4EF6\u8FDB\u884C\u9010\u4E00\u4E0A\u4F20\u3002\u5FEB\u7167\u4E0A\u4F20\u7531\u5404\u4E2A Backend \u5E76\u53D1\u5B8C\u6210\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5143\u6570\u636E\u51C6\u5907\u53CA\u4E0A\u4F20"}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u636E\u6587\u4EF6\u5FEB\u7167\u4E0A\u4F20\u5B8C\u6210\u540E\uFF0CFrontend \u4F1A\u9996\u5148\u5C06\u5BF9\u5E94\u5143\u6570\u636E\u5199\u6210\u672C\u5730\u6587\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 broker \u5C06\u672C\u5730\u5143\u6570\u636E\u6587\u4EF6\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93\u3002\u5B8C\u6210\u6700\u7EC8\u5907\u4EFD\u4F5C\u4E1A"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u52A8\u6001\u5206\u533A\u8868\u8BF4\u660E"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u8BE5\u8868\u662F\u52A8\u6001\u5206\u533A\u8868\uFF0C\u5907\u4EFD\u4E4B\u540E\u4F1A\u81EA\u52A8\u7981\u7528\u52A8\u6001\u5206\u533A\u5C5E\u6027\uFF0C\u5728\u505A\u6062\u590D\u7684\u65F6\u5019\u9700\u8981\u624B\u52A8\u5C06\u8BE5\u8868\u7684\u52A8\u6001\u5206\u533A\u5C5E\u6027\u542F\u7528\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE tbl1 SET ("dynamic_partition.enable"="true")\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5907\u4EFD\u548C\u6062\u590D\u64CD\u4F5C\u90FD\u4E0D\u4F1A\u4FDD\u7559\u8868\u7684 ",(0,a.jsx)(n.code,{children:"colocate_with"})," \u5C5E\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5F00\u59CB\u5907\u4EFD",children:"\u5F00\u59CB\u5907\u4EFD"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A HDFS \u7684\u8FDC\u7A0B\u4ED3\u5E93 example_repo\uFF08S3 \u5B58\u50A8\u8BF7\u53C2\u8003 2\uFF09\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `example_repo`\nWITH HDFS\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A s3 \u7684\u8FDC\u7A0B\u4ED3\u5E93 : s3_repo\uFF08HDFS \u5B58\u50A8\u8BF7\u53C2\u8003 1\uFF09"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/test"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://xxxx.xxxx.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY"="xxx",\n    "AWS_REGION" = "xxx"\n); \n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:"ON LOCATION \u8FD9\u91CC\u540E\u9762\u8DDF\u7684\u662F Bucket Name"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\u7684\u8868 example_tbl \u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\uFF0C\u8868 example_tbl \u7684 p1, p2 \u5206\u533A\uFF0C\u4EE5\u53CA\u8868 example_tbl2 \u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n   example_tbl PARTITION (p1,p2),\n   example_tbl2\n);\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u67E5\u770B\u6700\u8FD1 backup \u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n               JobId: 17891847\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: [default_cluster:example_db.example_tbl]\n          CreateTime: 2022-04-08 15:52:29\nSnapshotFinishedTime: 2022-04-08 15:52:32\n  UploadFinishedTime: 2022-04-08 15:52:38\n        FinishedTime: 2022-04-08 15:52:44\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u67E5\u770B\u8FDC\u7AEF\u4ED3\u5E93\u4E2D\u5DF2\u5B58\u5728\u7684\u5907\u4EFD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "snapshot_label1";\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| snapshot_label1 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["BACKUP \u7684\u66F4\u591A\u7528\u6CD5\u53EF\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,a.jsx)(n.h3,{id:"\u5907\u4EFD",children:"\u5907\u4EFD"}),"\n",(0,a.jsx)(n.p,{children:"\u5F53\u524D\u6211\u4EEC\u652F\u6301\u6700\u5C0F\u5206\u533A\uFF08Partition\uFF09\u7C92\u5EA6\u7684\u5168\u91CF\u5907\u4EFD\uFF08\u589E\u91CF\u5907\u4EFD\u6709\u53EF\u80FD\u5728\u672A\u6765\u7248\u672C\u652F\u6301\uFF09\u3002\u5982\u679C\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5B9A\u671F\u5907\u4EFD\uFF0C\u9996\u5148\u9700\u8981\u5728\u5EFA\u8868\u65F6\uFF0C\u5408\u7406\u7684\u89C4\u5212\u8868\u7684\u5206\u533A\u53CA\u5206\u6876\uFF0C\u6BD4\u5982\u6309\u65F6\u95F4\u8FDB\u884C\u5206\u533A\u3002\u7136\u540E\u5728\u4E4B\u540E\u7684\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u6309\u7167\u5206\u533A\u7C92\u5EA6\u8FDB\u884C\u5B9A\u671F\u7684\u6570\u636E\u5907\u4EFD\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636E\u8FC1\u79FB",children:"\u6570\u636E\u8FC1\u79FB"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u5148\u5C06\u6570\u636E\u5907\u4EFD\u5230\u8FDC\u7AEF\u4ED3\u5E93\uFF0C\u518D\u901A\u8FC7\u8FDC\u7AEF\u4ED3\u5E93\u5C06\u6570\u636E\u6062\u590D\u5230\u53E6\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u5B8C\u6210\u6570\u636E\u8FC1\u79FB\u3002\u56E0\u4E3A\u6570\u636E\u5907\u4EFD\u662F\u901A\u8FC7\u5FEB\u7167\u7684\u5F62\u5F0F\u5B8C\u6210\u7684\uFF0C\u6240\u4EE5\uFF0C\u5728\u5907\u4EFD\u4F5C\u4E1A\u7684\u5FEB\u7167\u9636\u6BB5\u4E4B\u540E\u7684\u65B0\u7684\u5BFC\u5165\u6570\u636E\uFF0C\u662F\u4E0D\u4F1A\u5907\u4EFD\u7684\u3002\u56E0\u6B64\uFF0C\u5728\u5FEB\u7167\u5B8C\u6210\u540E\uFF0C\u5230\u6062\u590D\u4F5C\u4E1A\u5B8C\u6210\u8FD9\u671F\u95F4\uFF0C\u5728\u539F\u96C6\u7FA4\u4E0A\u5BFC\u5165\u7684\u6570\u636E\uFF0C\u90FD\u9700\u8981\u5728\u65B0\u96C6\u7FA4\u4E0A\u540C\u6837\u5BFC\u5165\u4E00\u904D\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5EFA\u8BAE\u5728\u8FC1\u79FB\u5B8C\u6210\u540E\uFF0C\u5BF9\u65B0\u65E7\u4E24\u4E2A\u96C6\u7FA4\u5E76\u884C\u5BFC\u5165\u4E00\u6BB5\u65F6\u95F4\u3002\u5B8C\u6210\u6570\u636E\u548C\u4E1A\u52A1\u6B63\u786E\u6027\u6821\u9A8C\u540E\uFF0C\u518D\u5C06\u4E1A\u52A1\u8FC1\u79FB\u5230\u65B0\u7684\u96C6\u7FA4\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BF4\u660E",children:"\u8BF4\u660E"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5907\u4EFD\u6062\u590D\u76F8\u5173\u7684\u64CD\u4F5C\u76EE\u524D\u53EA\u5141\u8BB8\u62E5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u6267\u884C\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4E00\u4E2A Database \u5185\uFF0C\u53EA\u5141\u8BB8\u6709\u4E00\u4E2A\u6B63\u5728\u6267\u884C\u7684\u5907\u4EFD\u6216\u6062\u590D\u4F5C\u4E1A\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5907\u4EFD\u548C\u6062\u590D\u90FD\u652F\u6301\u6700\u5C0F\u5206\u533A\uFF08Partition\uFF09\u7EA7\u522B\u7684\u64CD\u4F5C\uFF0C\u5F53\u8868\u7684\u6570\u636E\u91CF\u5F88\u5927\u65F6\uFF0C\u5EFA\u8BAE\u6309\u5206\u533A\u5206\u522B\u6267\u884C\uFF0C\u4EE5\u964D\u4F4E\u5931\u8D25\u91CD\u8BD5\u7684\u4EE3\u4EF7\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u56E0\u4E3A\u5907\u4EFD\u6062\u590D\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u7684\u90FD\u662F\u5B9E\u9645\u7684\u6570\u636E\u6587\u4EF6\u3002\u6240\u4EE5\u5F53\u4E00\u4E2A\u8868\u7684\u5206\u7247\u8FC7\u591A\uFF0C\u6216\u8005\u4E00\u4E2A\u5206\u7247\u6709\u8FC7\u591A\u7684\u5C0F\u7248\u672C\u65F6\uFF0C\u53EF\u80FD\u5373\u4F7F\u603B\u6570\u636E\u91CF\u5F88\u5C0F\uFF0C\u4F9D\u7136\u9700\u8981\u5907\u4EFD\u6216\u6062\u590D\u5F88\u957F\u65F6\u95F4\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"SHOW PARTITIONS FROM table_name;"})," \u548C ",(0,a.jsx)(n.code,{children:"SHOW TABLETS FROM table_name;"})," \u6765\u67E5\u770B\u5404\u4E2A\u5206\u533A\u7684\u5206\u7247\u6570\u91CF\uFF0C\u4EE5\u53CA\u5404\u4E2A\u5206\u7247\u7684\u6587\u4EF6\u7248\u672C\u6570\u91CF\uFF0C\u6765\u9884\u4F30\u4F5C\u4E1A\u6267\u884C\u65F6\u95F4\u3002\u6587\u4EF6\u6570\u91CF\u5BF9\u4F5C\u4E1A\u6267\u884C\u7684\u65F6\u95F4\u5F71\u54CD\u975E\u5E38\u5927\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u5728\u5EFA\u8868\u65F6\uFF0C\u5408\u7406\u89C4\u5212\u5206\u533A\u5206\u6876\uFF0C\u4EE5\u907F\u514D\u8FC7\u591A\u7684\u5206\u7247\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5F53\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"SHOW BACKUP"})," \u6216\u8005 ",(0,a.jsx)(n.code,{children:"SHOW RESTORE"})," \u547D\u4EE4\u67E5\u770B\u4F5C\u4E1A\u72B6\u6001\u65F6\u3002\u6709\u53EF\u80FD\u4F1A\u5728 ",(0,a.jsx)(n.code,{children:"TaskErrMsg"})," \u4E00\u5217\u4E2D\u770B\u5230\u9519\u8BEF\u4FE1\u606F\u3002\u4F46\u53EA\u8981 ",(0,a.jsx)(n.code,{children:"State"})," \u5217\u4E0D\u4E3A ",(0,a.jsx)(n.code,{children:"CANCELLED"}),"\uFF0C\u5219\u8BF4\u660E\u4F5C\u4E1A\u4F9D\u7136\u5728\u7EE7\u7EED\u3002\u8FD9\u4E9B Task \u6709\u53EF\u80FD\u4F1A\u91CD\u8BD5\u6210\u529F\u3002\u5F53\u7136\uFF0C\u6709\u4E9B Task \u9519\u8BEF\uFF0C\u4E5F\u4F1A\u76F4\u63A5\u5BFC\u81F4\u4F5C\u4E1A\u5931\u8D25\u3002\n\u5E38\u89C1\u7684",(0,a.jsx)(n.code,{children:"TaskErrMsg"}),"\u9519\u8BEF\u5982\u4E0B\uFF1A\nQ1\uFF1A\u5907\u4EFD\u5230 HDFS\uFF0C\u72B6\u6001\u663E\u793A UPLOADING\uFF0CTaskErrMsg \u9519\u8BEF\u4FE1\u606F\uFF1A[13333: Close broker writer failed, broker:TNetworkAddress(hostname=10.10.0.0,port=8000) msg:errors while close file output stream, cause by: DataStreamer Exception: ]\n\u8FD9\u4E2A\u4E00\u822C\u662F\u7F51\u7EDC\u901A\u4FE1\u95EE\u9898\uFF0C\u67E5\u770Bbroker\u65E5\u5FD7\uFF0C\u770B\u67D0\u4E2Aip \u6216\u8005\u7AEF\u53E3\u4E0D\u901A\uFF0C\u5982\u679C\u662F\u4E91\u670D\u52A1\uFF0C\u5219\u9700\u8981\u67E5\u770B\u662F\u5426\u8BBF\u95EE\u4E86\u5185\u7F51\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u53EF\u4EE5\u5728borker/conf\u6587\u4EF6\u5939\u4E0B\u6DFB\u52A0hdfs-site.xml\uFF0C\u8FD8\u9700\u5728hdfs-site.xml\u914D\u7F6E\u6587\u4EF6\u4E0B\u6DFB\u52A0dfs.client.use.datanode.hostname=true\uFF0C\u5E76\u5728broker\u8282\u70B9\u4E0A\u914D\u7F6EHADOOP\u96C6\u7FA4\u7684\u4E3B\u673A\u540D\u6620\u5C04\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5982\u679C\u6062\u590D\u4F5C\u4E1A\u662F\u4E00\u6B21\u8986\u76D6\u64CD\u4F5C\uFF08\u6307\u5B9A\u6062\u590D\u6570\u636E\u5230\u5DF2\u7ECF\u5B58\u5728\u7684\u8868\u6216\u5206\u533A\u4E2D\uFF09\uFF0C\u90A3\u4E48\u4ECE\u6062\u590D\u4F5C\u4E1A\u7684 ",(0,a.jsx)(n.code,{children:"COMMIT"})," \u9636\u6BB5\u5F00\u59CB\uFF0C\u5F53\u524D\u96C6\u7FA4\u4E0A\u88AB\u8986\u76D6\u7684\u6570\u636E\u6709\u53EF\u80FD\u4E0D\u80FD\u518D\u88AB\u8FD8\u539F\u3002\u6B64\u65F6\u5982\u679C\u6062\u590D\u4F5C\u4E1A\u5931\u8D25\u6216\u88AB\u53D6\u6D88\uFF0C\u6709\u53EF\u80FD\u9020\u6210\u4E4B\u524D\u7684\u6570\u636E\u5DF2\u635F\u574F\u4E14\u65E0\u6CD5\u8BBF\u95EE\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u901A\u8FC7\u518D\u6B21\u6267\u884C\u6062\u590D\u64CD\u4F5C\uFF0C\u5E76\u7B49\u5F85\u4F5C\u4E1A\u5B8C\u6210\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5EFA\u8BAE\uFF0C\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u8986\u76D6\u7684\u65B9\u5F0F\u6062\u590D\u6570\u636E\uFF0C\u9664\u975E\u786E\u8BA4\u5F53\u524D\u6570\u636E\u5DF2\u4E0D\u518D\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u76F8\u5173\u547D\u4EE4",children:"\u76F8\u5173\u547D\u4EE4"}),"\n",(0,a.jsxs)(n.p,{children:["\u548C\u5907\u4EFD\u6062\u590D\u529F\u80FD\u76F8\u5173\u7684\u547D\u4EE4\u5982\u4E0B\u3002\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7 mysql-client \u8FDE\u63A5 Doris \u540E\uFF0C\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"help cmd;"})," \u7684\u65B9\u5F0F\u67E5\u770B\u8BE6\u7EC6\u5E2E\u52A9\u3002"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"CREATE REPOSITORY"}),"\n",(0,a.jsxs)(n.p,{children:["\u521B\u5EFA\u4E00\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u8DEF\u5F84\uFF0C\u7528\u4E8E\u5907\u4EFD\u6216\u6062\u590D\u3002\u5177\u4F53\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",children:"\u521B\u5EFA\u8FDC\u7A0B\u4ED3\u5E93\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"BACKUP"}),"\n",(0,a.jsxs)(n.p,{children:["\u6267\u884C\u4E00\u6B21\u5907\u4EFD\u64CD\u4F5C\u3002\u5177\u4F53\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP",children:"\u5907\u4EFD\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SHOW BACKUP"}),"\n",(0,a.jsxs)(n.p,{children:["\u67E5\u770B\u6700\u8FD1\u4E00\u6B21 backup \u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5\u3002\u5177\u4F53\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/SHOW-BACKUP.md",children:"\u67E5\u770B\u5907\u4EFD\u4F5C\u4E1A\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SHOW SNAPSHOT"}),"\n",(0,a.jsxs)(n.p,{children:["\u67E5\u770B\u8FDC\u7AEF\u4ED3\u5E93\u4E2D\u5DF2\u5B58\u5728\u7684\u5907\u4EFD\u3002\u5177\u4F53\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/SHOW-SNAPSHOT.md",children:"\u67E5\u770B\u5907\u4EFD\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"CANCEL BACKUP"}),"\n",(0,a.jsxs)(n.p,{children:["\u53D6\u6D88\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u5907\u4EFD\u4F5C\u4E1A\u3002\u5177\u4F53\u53C2\u8003",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP",children:"\u53D6\u6D88\u5907\u4EFD\u4F5C\u4E1A\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"DROP REPOSITORY"}),"\n",(0,a.jsxs)(n.p,{children:["\u5220\u9664\u5DF2\u521B\u5EFA\u7684\u8FDC\u7AEF\u4ED3\u5E93\u3002\u5220\u9664\u4ED3\u5E93\uFF0C\u4EC5\u4EC5\u662F\u5220\u9664\u8BE5\u4ED3\u5E93\u5728 Doris \u4E2D\u7684\u6620\u5C04\uFF0C\u4E0D\u4F1A\u5220\u9664\u5B9E\u9645\u7684\u4ED3\u5E93\u6570\u636E\u3002\u5177\u4F53\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",children:"\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var l=s(667294);let a={},i=l.createContext(a);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);