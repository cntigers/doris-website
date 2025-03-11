"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["428039"],{498275:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"table-design/tiered-storage/remote-storage","title":"\u8FDC\u7A0B\u5B58\u50A8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/tiered-storage/remote-storage.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/remote-storage","permalink":"/zh-CN/docs/3.0/table-design/tiered-storage/remote-storage","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u8FDC\u7A0B\u5B58\u50A8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8","permalink":"/zh-CN/docs/3.0/table-design/tiered-storage/tiered-ssd-hdd"},"next":{"title":"\u884C\u5217\u6DF7\u5B58","permalink":"/zh-CN/docs/3.0/table-design/row-store"}}'),i=s("785893"),l=s("250065");let r={title:"\u8FDC\u7A0B\u5B58\u50A8",language:"zh-CN"},o=void 0,a={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230 S3 \u517C\u5BB9\u5B58\u50A8",id:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230-s3-\u517C\u5BB9\u5B58\u50A8",level:3},{value:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230 HDFS",id:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230-hdfs",level:3},{value:"\u5B58\u91CF\u8868\u51B7\u5374\u5230\u8FDC\u7A0B\u5B58\u50A8",id:"\u5B58\u91CF\u8868\u51B7\u5374\u5230\u8FDC\u7A0B\u5B58\u50A8",level:3},{value:"\u914D\u7F6E compaction",id:"\u914D\u7F6E-compaction",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u51B7\u6570\u636E\u7A7A\u95F4",id:"\u51B7\u6570\u636E\u7A7A\u95F4",level:2},{value:"\u67E5\u770B",id:"\u67E5\u770B",level:3},{value:"\u5783\u573E\u56DE\u6536",id:"\u5783\u573E\u56DE\u6536",level:3},{value:"\u67E5\u8BE2\u4E0E\u6027\u80FD\u4F18\u5316",id:"\u67E5\u8BE2\u4E0E\u6027\u80FD\u4F18\u5316",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8FDC\u7A0B\u5B58\u50A8\u652F\u6301\u5C06\u51B7\u6570\u636E\u653E\u5230\u5916\u90E8\u5B58\u50A8\uFF08\u4F8B\u5982\u5BF9\u8C61\u5B58\u50A8\uFF0CHDFS\uFF09\u4E0A\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"warning",children:(0,i.jsx)(n.p,{children:"\u8FDC\u7A0B\u5B58\u50A8\u7684\u6570\u636E\u53EA\u6709\u4E00\u4E2A\u526F\u672C\uFF0C\u6570\u636E\u53EF\u9760\u6027\u4F9D\u8D56\u8FDC\u7A0B\u5B58\u50A8\u7684\u6570\u636E\u53EF\u9760\u6027\uFF0C\u60A8\u9700\u8981\u4FDD\u8BC1\u8FDC\u7A0B\u5B58\u50A8\u6709 ec\uFF08\u64E6\u9664\u7801\uFF09\u6216\u8005\u591A\u526F\u672C\u6280\u672F\u786E\u4FDD\u6570\u636E\u53EF\u9760\u6027\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,i.jsx)(n.h3,{id:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230-s3-\u517C\u5BB9\u5B58\u50A8",children:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230 S3 \u517C\u5BB9\u5B58\u50A8"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E00\u6B65\uFF1A"})," \u521B\u5EFA S3 Resource\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u521B\u5EFA S3 RESOURCE \u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C S3 \u8FDC\u7AEF\u7684\u94FE\u63A5\u6821\u9A8C\uFF0C\u4EE5\u4FDD\u8BC1 RESOURCE \u521B\u5EFA\u7684\u6B63\u786E\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E8C\u6B65\uFF1A"})," \u521B\u5EFA STORAGE POLICY\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E4B\u540E\u521B\u5EFA STORAGE POLICY\uFF0C\u5173\u8054\u4E0A\u6587\u521B\u5EFA\u7684 RESOURCE\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E09\u6B65\uFF1A"})," \u5EFA\u8868\u65F6\u4F7F\u7528 STORAGE POLICY\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "enable_unique_key_merge_on_write" = "false",\n    "storage_policy" = "test_policy"\n);\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"warning",children:(0,i.jsxs)(n.p,{children:["UNIQUE \u8868\u5982\u679C\u8BBE\u7F6E\u4E86 ",(0,i.jsx)(n.code,{children:'"enable_unique_key_merge_on_write" = "true"'})," \u7684\u8BDD\uFF0C\u65E0\u6CD5\u4F7F\u7528\u6B64\u529F\u80FD\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230-hdfs",children:"\u51B7\u6570\u636E\u4FDD\u5B58\u5230 HDFS"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E00\u6B65\uFF1A"})," \u521B\u5EFA HDFS RESOURCE\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n        "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E8C\u6B65\uFF1A"})," \u521B\u5EFA STORAGE POLICY\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_policy PROPERTIES (\n    "storage_resource" = "remote_hdfs",\n    "cooldown_ttl" = "300"\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u7B2C\u4E09\u6B65\uFF1A"})," \u4F7F\u7528 STORAGE POLICY \u521B\u5EFA\u8868\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n"enable_unique_key_merge_on_write" = "false",\n"storage_policy" = "test_policy"\n);\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"warning",children:(0,i.jsxs)(n.p,{children:["UNIQUE \u8868\u5982\u679C\u8BBE\u7F6E\u4E86 ",(0,i.jsx)(n.code,{children:'"enable_unique_key_merge_on_write" = "true"'})," \u7684\u8BDD\uFF0C\u65E0\u6CD5\u4F7F\u7528\u6B64\u529F\u80FD\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u5B58\u91CF\u8868\u51B7\u5374\u5230\u8FDC\u7A0B\u5B58\u50A8",children:"\u5B58\u91CF\u8868\u51B7\u5374\u5230\u8FDC\u7A0B\u5B58\u50A8"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4E86\u65B0\u5EFA\u8868\u652F\u6301\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\u5916\uFF0CDoris \u8FD8\u652F\u6301\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u8868\u6216\u8005 PARTITION\uFF0C\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u8868\uFF0C\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\uFF0C\u5C06\u521B\u5EFA\u597D\u7684 STORAGE POLICY \u4E0E\u8868\u5173\u8054\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684 PARTITION\uFF0C\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\uFF0C\u5C06\u521B\u5EFA\u597D\u7684 STORAGE POLICY \u4E0E PARTITON \u5173\u8054\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF0C\u5982\u679C\u7528\u6237\u5728\u5EFA\u8868\u65F6\u7ED9\u6574\u5F20 Table \u548C\u90E8\u5206 Partition \u6307\u5B9A\u4E86\u4E0D\u540C\u7684 Storage Policy\uFF0CPartition \u8BBE\u7F6E\u7684 Storage policy \u4F1A\u88AB\u65E0\u89C6\uFF0C\u6574\u5F20\u8868\u7684\u6240\u6709 Partition \u90FD\u4F1A\u4F7F\u7528 table \u7684 Policy. \u5982\u679C\u60A8\u9700\u8981\u8BA9\u67D0\u4E2A Partition \u7684 Policy \u548C\u522B\u7684\u4E0D\u540C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u4E0A\u6587\u4E2D\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684 Partition\uFF0C\u5173\u8054 Storage policy \u7684\u65B9\u5F0F\u4FEE\u6539\u3002"}),(0,i.jsxs)(n.p,{children:["\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 Docs \u76EE\u5F55\u4E0B",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"RESOURCE"}),"\u3001 ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY",children:"POLICY"}),"\u3001 ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE TABLE"}),"\u3001 ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN",children:"ALTER TABLE"}),"\u7B49\u6587\u6863\u3002"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u914D\u7F6E-compaction",children:"\u914D\u7F6E compaction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BE \u53C2\u6570",(0,i.jsx)(n.code,{children:"cold_data_compaction_thread_num"}),"\u53EF\u4EE5\u8BBE\u7F6E\u6267\u884C\u8FDC\u7A0B\u5B58\u50A8\u7684 Compaction \u7684\u5E76\u53D1\uFF0C\u9ED8\u8BA4\u662F 2\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BE \u53C2\u6570",(0,i.jsx)(n.code,{children:"cold_data_compaction_interval_sec"}),"\u53EF\u4EE5\u8BBE\u7F6E\u6267\u884C\u8FDC\u7A0B\u5B58\u50A8\u7684 Compaction \u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u9ED8\u8BA4\u662F 1800\uFF0C\u5355\u4F4D\uFF1A\u79D2\uFF0C\u5373\u534A\u4E2A\u5C0F\u65F6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u4E86\u8FDC\u7A0B\u5B58\u50A8\u7684\u8868\u4E0D\u652F\u6301\u5907\u4EFD\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0D\u652F\u6301\u4FEE\u6539\u8FDC\u7A0B\u5B58\u50A8\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u6BD4\u5982 endpoint\u3001bucket\u3001path\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unique \u6A21\u578B\u8868\u5728\u5F00\u542F Merge-on-Write \u7279\u6027\u65F6\uFF0C\u4E0D\u652F\u6301\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Storage policy \u652F\u6301\u521B\u5EFA\u3001\u4FEE\u6539\u548C\u5220\u9664\uFF0C\u5220\u9664\u524D\u9700\u8981\u5148\u4FDD\u8BC1\u6CA1\u6709\u8868\u5F15\u7528\u6B64 Storage policy\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u51B7\u6570\u636E\u7A7A\u95F4",children:"\u51B7\u6570\u636E\u7A7A\u95F4"}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u770B",children:"\u67E5\u770B"}),"\n",(0,i.jsx)(n.p,{children:"\u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7 show proc '/backends'\u53EF\u4EE5\u67E5\u770B\u5230\u6BCF\u4E2A BE \u4E0A\u4F20\u5230\u5BF9\u8C61\u7684\u5927\u5C0F\uFF0CRemoteUsedCapacity \u9879\uFF0C\u6B64\u65B9\u5F0F\u7565\u6709\u5EF6\u8FDF\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7 show tablets from tableName \u53EF\u4EE5\u67E5\u770B\u5230\u8868\u7684\u6BCF\u4E2A tablet \u5360\u7528\u7684\u5BF9\u8C61\u5927\u5C0F\uFF0CRemoteDataSize \u9879\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5783\u573E\u56DE\u6536",children:"\u5783\u573E\u56DE\u6536"}),"\n",(0,i.jsx)(n.p,{children:"\u8FDC\u7A0B\u5B58\u50A8\u4E0A\u53EF\u80FD\u4F1A\u6709\u5982\u4E0B\u60C5\u51B5\u4EA7\u751F\u5783\u573E\u6570\u636E\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0A\u4F20 rowset \u5931\u8D25\u4F46\u662F\u6709\u90E8\u5206 segment \u4E0A\u4F20\u6210\u529F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0A\u4F20\u7684 rowset \u6CA1\u6709\u5728\u591A\u526F\u672C\u8FBE\u6210\u4E00\u81F4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compaction \u5B8C\u6210\u540E\uFF0C\u53C2\u4E0E compaction \u7684 rowset\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5783\u573E\u6570\u636E\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6E05\u7406\u6389\u3002BE \u53C2\u6570",(0,i.jsx)(n.code,{children:"remove_unused_remote_files_interval_sec"}),"\u53EF\u4EE5\u8BBE\u7F6E\u8FDC\u7A0B\u5B58\u50A8\u7684\u5783\u573E\u56DE\u6536\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u9ED8\u8BA4\u662F 21600\uFF0C\u5355\u4F4D\uFF1A\u79D2\uFF0C\u5373 6 \u4E2A\u5C0F\u65F6\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u67E5\u8BE2\u4E0E\u6027\u80FD\u4F18\u5316",children:"\u67E5\u8BE2\u4E0E\u6027\u80FD\u4F18\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u4E3A\u4E86\u4F18\u5316\u67E5\u8BE2\u7684\u6027\u80FD\u548C\u5BF9\u8C61\u5B58\u50A8\u8D44\u6E90\u8282\u7701\uFF0C\u5F15\u5165\u4E86\u672C\u5730 Cache\u3002\u5728\u7B2C\u4E00\u6B21\u67E5\u8BE2\u8FDC\u7A0B\u5B58\u50A8\u7684\u6570\u636E\u65F6\uFF0CDoris \u4F1A\u5C06\u8FDC\u7A0B\u5B58\u50A8\u7684\u6570\u636E\u52A0\u8F7D\u5230 BE \u7684\u672C\u5730\u78C1\u76D8\u505A\u7F13\u5B58\uFF0CCache \u6709\u4EE5\u4E0B\u7279\u6027\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cache \u5B9E\u9645\u5B58\u50A8\u4E8E BE \u672C\u5730\u78C1\u76D8\uFF0C\u4E0D\u5360\u7528\u5185\u5B58\u7A7A\u95F4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cache \u662F\u901A\u8FC7 LRU \u7BA1\u7406\u7684\uFF0C\u4E0D\u652F\u6301 TTL\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5177\u4F53\u914D\u7F6E\u8BF7\u53C2\u8003 (../../lakehouse/filecache)\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null."})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"S3 SDK \u9ED8\u8BA4\u4F7F\u7528 virtual-hosted style \u65B9\u5F0F\u3002\u4F46\u67D0\u4E9B\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF (\u5982\uFF1Aminio) \u53EF\u80FD\u6CA1\u5F00\u542F\u6216\u6CA1\u652F\u6301 virtual-hosted style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0 use_path_style \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 path style \u65B9\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);