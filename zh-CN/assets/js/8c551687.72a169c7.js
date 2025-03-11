"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["109620"],{598130:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>l,assets:()=>i,toc:()=>o,contentTitle:()=>t});var l=JSON.parse('{"id":"data-operate/import/data-source/local-file","title":"\u672C\u5730\u6587\u4EF6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/data-source/local-file.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/local-file","permalink":"/zh-CN/docs/dev/data-operate/import/data-source/local-file","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u672C\u5730\u6587\u4EF6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5BFC\u5165\u6982\u89C8","permalink":"/zh-CN/docs/dev/data-operate/import/load-manual"},"next":{"title":"Kafka","permalink":"/zh-CN/docs/dev/data-operate/import/data-source/kafka"}}'),s=a("785893"),r=a("250065");let d={title:"\u672C\u5730\u6587\u4EF6",language:"zh-CN"},t=void 0,i={},o=[{value:"\u4F7F\u7528 Stream Load \u5BFC\u5165",id:"\u4F7F\u7528-stream-load-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 Stream Load \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-stream-load-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"\u4F7F\u7528 Streamloader \u5DE5\u5177\u5BFC\u5165",id:"\u4F7F\u7528-streamloader-\u5DE5\u5177\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 stream loader \u5DE5\u5177\u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-stream-loader-\u5DE5\u5177\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3},{value:"\u4F7F\u7528 MySQL Load \u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165",id:"\u4F7F\u7528-mysql-load-\u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-2",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-2",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 Mysql Load \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-mysql-load-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-2",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u591A\u79CD\u65B9\u5F0F\u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Stream Load"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Stream Load \u662F\u901A\u8FC7 HTTP \u534F\u8BAE\u5C06\u672C\u5730\u6587\u4EF6\u6216\u6570\u636E\u6D41\u5BFC\u5165\u5230 Doris \u4E2D\u3002Stream Load \u662F\u4E00\u4E2A\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6267\u884C\u5BFC\u5165\u540E\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u7684\u8FD4\u56DE\u5224\u65AD\u5BFC\u5165\u662F\u5426\u6210\u529F\u3002\u652F\u6301\u5BFC\u5165 CSV\u3001JSON\u3001Parquet \u4E0E ORC \u683C\u5F0F\u7684\u6570\u636E\u3002\u66F4\u591A\u6587\u6863\u53C2\u8003",(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual",children:"stream load"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"streamloader"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Streamloader \u5DE5\u5177\u662F\u4E00\u6B3E\u7528\u4E8E\u5C06\u6570\u636E\u5BFC\u5165 Doris \u6570\u636E\u5E93\u7684\u4E13\u7528\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF0C\u5E95\u5C42\u57FA\u4E8E Stream Load \u5B9E\u73B0\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u591A\u6587\u4EF6\uFF0C\u591A\u5E76\u53D1\u5BFC\u5165\u7684\u529F\u80FD\uFF0C\u964D\u4F4E\u5927\u6570\u636E\u91CF\u5BFC\u5165\u7684\u8017\u65F6\u3002\u66F4\u591A\u6587\u6863\u53C2\u8003",(0,s.jsx)(n.a,{href:"../../../ecosystem/doris-streamloader",children:"Streamloader"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"MySQL Load"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u517C\u5BB9 MySQL \u534F\u8BAE\uFF0C\u53EF\u4EE5\u4F7F\u7528 MySQL \u6807\u51C6\u7684 ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",children:"LOAD DATA"})," \u8BED\u6CD5\u5BFC\u5165\u672C\u5730\u6587\u4EF6\u3002MySQL Load \u662F\u4E00\u79CD\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6267\u884C\u5BFC\u5165\u540E\u5373\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\uFF0C\u4E3B\u8981\u9002\u7528\u4E8E\u5BFC\u5165\u5BA2\u6237\u7AEF\u672C\u5730 CSV \u6587\u4EF6\u3002\u66F4\u591A\u6587\u6863\u53C2\u8003",(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/data-operate/import/import-way/mysql-load-manual",children:"MySQL Load"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528-stream-load-\u5BFC\u5165",children:"\u4F7F\u7528 Stream Load \u5BFC\u5165"}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,s.jsxs)(n.p,{children:["\u521B\u5EFA CSV \u6587\u4EF6 ",(0,s.jsx)(n.code,{children:"streamload_example.csv"}),"\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u8868\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_streamload(\n    user_id            BIGINT       NOT NULL COMMENT "\u7528\u6237 ID",\n    name               VARCHAR(20)           COMMENT "\u7528\u6237\u59D3\u540D",\n    age                INT                   COMMENT "\u7528\u6237\u5E74\u9F84"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-stream-load-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 Stream Load \u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"curl"})," \u63D0\u4EA4 Stream Load \u5BFC\u5165\u4F5C\u4E1A\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <doris_user>:<doris_password> \\\n    -H "column_separator:," \\\n    -H "columns:user_id,name,age" \\\n    -T streamload_example.csv \\\n    -XPUT http://<fe_ip>:<fe_http_port>/api/testdb/test_streamload/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Stream Load \u662F\u4E00\u79CD\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5BFC\u5165\u7ED3\u679C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7ED9\u7528\u6237\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'{\n    "TxnId": 3,\n    "Label": "123",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 10,\n    "NumberLoadedRows": 10,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 118,\n    "LoadTimeMs": 173,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 70,\n    "ReadDataTimeMs": 2,\n    "WriteDataTimeMs": 48,\n    "CommitAndPublishTimeMs": 52\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select count(*) from testdb.test_streamload;\n+----------+\n| count(*) |\n+----------+\n|       10 |\n+----------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528-streamloader-\u5DE5\u5177\u5BFC\u5165",children:"\u4F7F\u7528 Streamloader \u5DE5\u5177\u5BFC\u5165"}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA csv \u6587\u4EF6 streamloader_example.csv \u6587\u4EF6\u3002\u5177\u4F53\u5185\u5BB9\u5982\u4E0B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u88AB\u5BFC\u5165\u7684\u8868\uFF0C\u5177\u4F53\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_streamloader(\n    user_id            BIGINT       NOT NULL COMMENT "\u7528\u6237 ID",\n    name               VARCHAR(20)           COMMENT "\u7528\u6237\u59D3\u540D",\n    age                INT                   COMMENT "\u7528\u6237\u5E74\u9F84"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-stream-loader-\u5DE5\u5177\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 stream loader \u5DE5\u5177\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'doris-streamloader --source_file="streamloader_example.csv" --url="http://localhost:8330" --header="column_separator:," --db="testdb" --table="test_streamloader"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u662F\u4E00\u79CD\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5BFC\u5165\u7ED3\u679C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'Load Result: {\n        "Status": "Success",\n        "TotalRows": 10,\n        "FailLoadRows": 0,\n        "LoadedRows": 10,\n        "FilteredRows": 0,\n        "UnselectedRows": 0,\n        "LoadBytes": 118,\n        "LoadTimeMs": 623,\n        "LoadFiles": [\n                "streamloader_example.csv"\n        ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select count(*) from testdb.test_streamloader;\n+----------+\n| count(*) |\n+----------+\n|       10 |\n+----------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528-mysql-load-\u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165",children:"\u4F7F\u7528 MySQL Load \u4ECE\u672C\u5730\u6570\u636E\u5BFC\u5165"}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-2",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u540D\u4E3A client_local.csv \u7684\u6587\u4EF6\uFF0C\u6837\u4F8B\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728\u5E93\u4E2D\u521B\u5EFA\u8868-2",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6267\u884C LOAD DATA \u547D\u4EE4\u524D\uFF0C\u9700\u8981\u5148\u94FE\u63A5 mysql \u5BA2\u6237\u7AEF\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"mysql --local-infile  -h <fe_ip> -P <fe_query_port> -u root -D testdb\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C MySQL Load\uFF0C\u5728\u8FDE\u63A5\u65F6\u9700\u8981\u4F7F\u7528\u6307\u5B9A\u53C2\u6570\u9009\u9879\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u94FE\u63A5 mysql \u5BA2\u6237\u7AEF\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"--local-infile"})," \u9009\u9879\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5\u9519\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901A\u8FC7 JDBC \u94FE\u63A5\uFF0C\u9700\u8981\u5728 URL \u4E2D\u6307\u5B9A\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"allowLoadLocalInfile=true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u4EE5\u4E0B\u8868\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE testdb.t1 (\n    pk     INT, \n    v1     INT SUM\n) AGGREGATE KEY (pk) \nDISTRIBUTED BY hash (pk);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-mysql-load-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 Mysql Load \u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"\u94FE\u63A5 MySQL Client \u540E\uFF0C\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-2",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"MySQL Load \u662F\u4E00\u79CD\u540C\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5BFC\u5165\u540E\u7ED3\u679C\u4F1A\u5728\u547D\u4EE4\u884C\u4E2D\u8FD4\u56DE\u7ED9\u7528\u6237\u3002\u5982\u679C\u5BFC\u5165\u6267\u884C\u5931\u8D25\uFF0C\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u62A5\u9519\u4FE1\u606F\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4E0B\u662F\u5BFC\u5165\u6210\u529F\u7684\u7ED3\u679C\u663E\u793A\uFF0C\u4F1A\u8FD4\u56DE\u5BFC\u5165\u7684\u884C\u6570\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return d}});var l=a(667294);let s={},r=l.createContext(s);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);