"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["396704"],{409166:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"data-operate/delete/batch-delete-manual","title":"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/delete/batch-delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/batch-delete-manual","permalink":"/zh-CN/docs/dev/data-operate/delete/batch-delete-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Delete \u64CD\u4F5C","permalink":"/zh-CN/docs/dev/data-operate/delete/delete-manual"},"next":{"title":"Truncate \u64CD\u4F5C","permalink":"/zh-CN/docs/dev/data-operate/delete/truncate-manual"}}'),r=l("785893"),d=l("250065");let a={title:"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664",language:"zh-CN"},i=void 0,t={},c=[{value:"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664",id:"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664",level:2},{value:"\u5220\u9664\u6807\u8BB0\u7684\u5DE5\u4F5C\u539F\u7406",id:"\u5220\u9664\u6807\u8BB0\u7684\u5DE5\u4F5C\u539F\u7406",level:2},{value:"\u539F\u7406\u8BF4\u660E",id:"\u539F\u7406\u8BF4\u660E",level:3},{value:"\u6570\u636E\u793A\u4F8B",id:"\u6570\u636E\u793A\u4F8B",level:3},{value:"\u8868\u7ED3\u6784",id:"\u8868\u7ED3\u6784",level:4},{value:"\u6570\u636E\u5BFC\u5165",id:"\u6570\u636E\u5BFC\u5165",level:4},{value:"\u67E5\u8BE2",id:"\u67E5\u8BE2",level:4},{value:"\u8BED\u6CD5\u8BF4\u660E",id:"\u8BED\u6CD5\u8BF4\u660E",level:2},{value:"\u5BFC\u5165\u5408\u5E76\u65B9\u5F0F\u9009\u62E9",id:"\u5BFC\u5165\u5408\u5E76\u65B9\u5F0F\u9009\u62E9",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664",children:"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664"}),"\n",(0,r.jsx)(n.p,{children:"\u5220\u9664\u64CD\u4F5C\u53EF\u4EE5\u89C6\u4E3A\u6570\u636E\u66F4\u65B0\u7684\u4E00\u79CD\u7279\u6B8A\u5F62\u5F0F\u3002\u5728\u4E3B\u952E\u6A21\u578B\uFF08Unique Key\uFF09\u8868\u4E0A\uFF0CDoris \u652F\u6301\u901A\u8FC7\u5BFC\u5165\u6570\u636E\u65F6\u6DFB\u52A0\u5220\u9664\u6807\u8BB0\u6765\u5B9E\u73B0\u5220\u9664\u64CD\u4F5C\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u76F8\u6BD4 ",(0,r.jsx)(n.code,{children:"DELETE"})," \u8BED\u53E5\uFF0C\u4F7F\u7528\u5220\u9664\u6807\u8BB0\u5728\u4EE5\u4E0B\u573A\u666F\u4E2D\u5177\u6709\u66F4\u597D\u7684\u6613\u7528\u6027\u548C\u6027\u80FD\u4F18\u52BF\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CDC \u573A\u666F"}),"\uFF1A\u5728\u4ECE OLTP \u6570\u636E\u5E93\u540C\u6B65\u6570\u636E\u5230 Doris \u65F6\uFF0Cbinlog \u4E2D\u7684 Insert \u548C Delete \u64CD\u4F5C\u901A\u5E38\u4EA4\u66FF\u51FA\u73B0\u3002\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"DELETE"})," \u8BED\u53E5\u65E0\u6CD5\u9AD8\u6548\u5904\u7406\u8FD9\u4E9B\u5220\u9664\u64CD\u4F5C\u3002\u901A\u8FC7\u4F7F\u7528\u5220\u9664\u6807\u8BB0\uFF0C\u53EF\u4EE5\u7EDF\u4E00\u5904\u7406 Insert \u548C Delete \u64CD\u4F5C\uFF0C\u7B80\u5316 CDC \u5199\u5165 Doris \u7684\u4EE3\u7801\uFF0C\u540C\u65F6\u63D0\u9AD8\u6570\u636E\u5BFC\u5165\u548C\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6279\u91CF\u5220\u9664\u6307\u5B9A\u4E3B\u952E"}),"\uFF1A\u5982\u679C\u9700\u8981\u5220\u9664\u5927\u91CF\u4E3B\u952E\uFF0C\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"DELETE"})," \u8BED\u53E5\u7684\u6548\u7387\u8F83\u4F4E\u3002\u6BCF\u6B21\u6267\u884C ",(0,r.jsx)(n.code,{children:"DELETE"})," \u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u7A7A\u7684 rowset \u6765\u8BB0\u5F55\u5220\u9664\u6761\u4EF6\uFF0C\u5E76\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7248\u672C\u3002\u9891\u7E41\u5220\u9664\u6216\u5220\u9664\u6761\u4EF6\u8FC7\u591A\u65F6\uFF0C\u4F1A\u4E25\u91CD\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5220\u9664\u6807\u8BB0\u7684\u5DE5\u4F5C\u539F\u7406",children:"\u5220\u9664\u6807\u8BB0\u7684\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,r.jsx)(n.h3,{id:"\u539F\u7406\u8BF4\u660E",children:"\u539F\u7406\u8BF4\u660E"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8868\u7ED3\u6784"}),"\uFF1A\u5220\u9664\u6807\u8BB0\u5728\u4E3B\u952E\u8868\u4E0A\u5B58\u50A8\u4E3A\u4E00\u4E2A\u9690\u85CF\u5217 ",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"}),"\uFF0C\u8BE5\u5217\u503C\u4E3A 1 \u65F6\u8868\u793A\u5220\u9664\u6807\u8BB0\u751F\u6548\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6570\u636E\u5BFC\u5165"}),"\uFF1A\u7528\u6237\u5728\u5BFC\u5165\u4EFB\u52A1\u4E2D\u53EF\u4EE5\u6307\u5B9A\u5220\u9664\u6807\u8BB0\u5217\u7684\u6620\u5C04\u6761\u4EF6\uFF0C\u4E0D\u540C\u5BFC\u5165\u4EFB\u52A1\u7684\u7528\u6CD5\u4E0D\u540C\uFF0C\u8BE6\u89C1\u4E0B\u6587\u8BED\u6CD5\u8BF4\u660E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u67E5\u8BE2"}),"\uFF1A\u5728\u67E5\u8BE2\u65F6\uFF0CDoris FE \u4F1A\u5728\u67E5\u8BE2\u89C4\u5212\u4E2D\u81EA\u52A8\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__ != true"})," \u7684\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u5C06\u5220\u9664\u6807\u8BB0\u4E3A 1 \u7684\u6570\u636E\u8FC7\u6EE4\u6389\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6570\u636E\u5408\u5E76\uFF08compaction\uFF09"}),"\uFF1ADoris \u7684\u540E\u53F0\u6570\u636E\u5408\u5E76\u4F1A\u5B9A\u671F\u6E05\u7406\u5220\u9664\u6807\u8BB0\u4E3A 1 \u7684\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u793A\u4F8B",children:"\u6570\u636E\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h4,{id:"\u8868\u7ED3\u6784",children:"\u8868\u7ED3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u793A\u4F8B\u8868\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example_table (\n    id BIGINT NOT NULL,\n    value STRING\n)\nUNIQUE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "replication_num" = "3"\n);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 session \u53D8\u91CF ",(0,r.jsx)(n.code,{children:"show_hidden_columns"})," \u67E5\u770B\u9690\u85CF\u5217\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> set show_hidden_columns=true;\n\nmysql> desc example_table;\n+-----------------------+---------+------+-------+---------+-------+\n| Field                 | Type    | Null | Key   | Default | Extra |\n+-----------------------+---------+------+-------+---------+-------+\n| id                    | bigint  | No   | true  | NULL    |       |\n| value                 | text    | Yes  | false | NULL    | NONE  |\n| __DORIS_DELETE_SIGN__ | tinyint | No   | false | 0       | NONE  |\n| __DORIS_VERSION_COL__ | bigint  | No   | false | 0       | NONE  |\n+-----------------------+---------+------+-------+---------+-------+\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u6570\u636E\u5BFC\u5165",children:"\u6570\u636E\u5BFC\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u4E2D\u6709\u5982\u4E0B\u5B58\u91CF\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"+------+-------+\n| id   | value |\n+------+-------+\n|    1 | foo   |\n|    2 | bar   |\n+------+-------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u5199\u5165 id \u4E3A 1 \u7684\u5220\u9664\u6807\u8BB0\uFF08\u6B64\u5904\u4EC5\u505A\u539F\u7406\u5C55\u793A\uFF0C\u4E0D\u4ECB\u7ECD\u5404\u79CD\u5BFC\u5165\u4F7F\u7528\u5220\u9664\u6807\u8BB0\u7684\u65B9\u6CD5\uFF09\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> insert into example_table (id, __DORIS_DELETE_SIGN__) values (1, 1);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u67E5\u8BE2",children:"\u67E5\u8BE2"}),"\n",(0,r.jsx)(n.p,{children:"\u76F4\u63A5\u67E5\u770B\u6570\u636E\uFF0C\u53EF\u4EE5\u53D1\u73B0 id \u4E3A 1 \u7684\u8BB0\u5F55\u5DF2\u88AB\u5220\u9664\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> select * from example_table;\n+------+-------+\n| id   | value |\n+------+-------+\n|    2 | bar   |\n+------+-------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 session \u53D8\u91CF ",(0,r.jsx)(n.code,{children:"show_hidden_columns"})," \u67E5\u770B\u9690\u85CF\u5217\uFF0C\u53EF\u4EE5\u770B\u5230 id \u4E3A 1 \u7684\u884C\u5E76\u672A\u88AB\u5B9E\u9645\u5220\u9664\uFF0C\u5176\u9690\u85CF\u5217 ",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"})," \u503C\u4E3A 1\uFF0C\u5728\u67E5\u8BE2\u65F6\u88AB\u8FC7\u6EE4\u6389\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> set show_hidden_columns=true;\nmysql> select * from example_table;\n+------+-------+-----------------------+-----------------------+\n| id   | value | __DORIS_DELETE_SIGN__ | __DORIS_VERSION_COL__ |\n+------+-------+-----------------------+-----------------------+\n|    1 | NULL  |                     1 |                     3 |\n|    2 | bar   |                     0 |                     2 |\n+------+-------+-----------------------+-----------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5\u8BF4\u660E",children:"\u8BED\u6CD5\u8BF4\u660E"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0D\u540C\u5BFC\u5165\u7C7B\u578B\u5728\u8BBE\u7F6E\u5220\u9664\u6807\u8BB0\u7684\u8BED\u6CD5\u4E0A\u6709\u6240\u4E0D\u540C\uFF0C\u4EE5\u4E0B\u662F\u5404\u79CD\u5BFC\u5165\u7C7B\u578B\u7684\u5220\u9664\u6807\u8BB0\u4F7F\u7528\u8BED\u6CD5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5BFC\u5165\u5408\u5E76\u65B9\u5F0F\u9009\u62E9",children:"\u5BFC\u5165\u5408\u5E76\u65B9\u5F0F\u9009\u62E9"}),"\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165\u6570\u636E\u65F6\u6709\u51E0\u79CD\u5408\u5E76\u65B9\u5F0F\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"APPEND"}),"\uFF1A\u6570\u636E\u5168\u90E8\u8FFD\u52A0\u5230\u73B0\u6709\u6570\u636E\u4E2D\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DELETE"}),"\uFF1A\u5220\u9664\u6240\u6709\u4E0E\u5BFC\u5165\u6570\u636E key \u5217\u503C\u76F8\u540C\u7684\u884C\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MERGE"}),"\uFF1A\u6839\u636E DELETE ON \u7684\u6761\u4EF6\u51B3\u5B9A APPEND \u8FD8\u662F DELETE\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Stream Load"})," \u7684\u5199\u6CD5\u662F\u5728 header \u4E2D\u7684 columns \u5B57\u6BB5\u589E\u52A0\u4E00\u4E2A\u8BBE\u7F6E\u5220\u9664\u6807\u8BB0\u5217\u7684\u5B57\u6BB5\uFF0C\u793A\u4F8B\uFF1A",(0,r.jsx)(n.code,{children:'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"'}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E Stream Load \u7684\u4F7F\u7528\u793A\u4F8B\uFF0C\u8BF7\u67E5\u9605 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual",children:"Stream Load \u4F7F\u7528\u624B\u518C"})," \u4E2D\u201C\u6307\u5B9A merge_type \u8FDB\u884C Delete \u64CD\u4F5C\u201D\u548C\u201C\u6307\u5B9A merge_type \u8FDB\u884C Merge \u64CD\u4F5C\u201D\u7AE0\u8282\u7684\u5185\u5BB9\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Broker Load"})," \u7684\u5199\u6CD5\u662F\u5728 ",(0,r.jsx)(n.code,{children:"PROPERTIES"})," \u5904\u8BBE\u7F6E\u5220\u9664\u6807\u8BB0\u5217\u7684\u5B57\u6BB5\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label_c3=true]\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Routine Load"})," \u7684\u5199\u6CD5\u662F\u5728 ",(0,r.jsx)(n.code,{children:"columns"})," \u5B57\u6BB5\u589E\u52A0\u6620\u5C04\uFF0C\u6620\u5C04\u65B9\u5F0F\u540C\u4E0A\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n [WITH MERGE|APPEND|DELETE]\n COLUMNS(k1, k2, k3, v1, v2, label),\n WHERE k1  100 and k2 like "%doris%"\n [DELETE ON label=true]\n PROPERTIES\n (\n     "desired_concurrent_number"="3",\n     "max_batch_interval" = "20",\n     "max_batch_rows" = "300000",\n     "max_batch_size" = "209715200",\n     "strict_mode" = "false"\n )\n FROM KAFKA\n (\n     "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n     "kafka_topic" = "my_topic",\n     "kafka_partitions" = "0,1,2,3",\n     "kafka_offsets" = "101,0,0,200"\n );\n'})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return a}});var s=l(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);