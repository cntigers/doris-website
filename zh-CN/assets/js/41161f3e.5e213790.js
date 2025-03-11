"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["643177"],{518107:function(n,i,e){e.r(i),e.d(i,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"table-design/data-partitioning/dynamic-partitioning","title":"\u52A8\u6001\u5206\u533A","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/data-partitioning/dynamic-partitioning.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/dynamic-partitioning","permalink":"/zh-CN/docs/3.0/table-design/data-partitioning/dynamic-partitioning","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u52A8\u6001\u5206\u533A","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u624B\u52A8\u5206\u533A","permalink":"/zh-CN/docs/3.0/table-design/data-partitioning/manual-partitioning"},"next":{"title":"\u81EA\u52A8\u5206\u533A","permalink":"/zh-CN/docs/3.0/table-design/data-partitioning/auto-partitioning"}}'),d=e("785893"),r=e("250065");let c={title:"\u52A8\u6001\u5206\u533A",language:"zh-CN"},s=void 0,a={},l=[{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"\u521B\u5EFA\u52A8\u6001\u5206\u533A",id:"\u521B\u5EFA\u52A8\u6001\u5206\u533A",level:2},{value:"\u7BA1\u7406\u52A8\u6001\u5206\u533A",id:"\u7BA1\u7406\u52A8\u6001\u5206\u533A",level:2},{value:"\u4FEE\u6539\u52A8\u6001\u5206\u533A\u5C5E\u6027",id:"\u4FEE\u6539\u52A8\u6001\u5206\u533A\u5C5E\u6027",level:3},{value:"\u67E5\u770B\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u60C5\u51B5",id:"\u67E5\u770B\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u60C5\u51B5",level:3},{value:"\u5386\u53F2\u5206\u533A\u7BA1\u7406",id:"\u5386\u53F2\u5206\u533A\u7BA1\u7406",level:3},{value:"\u52A8\u6001\u5206\u533A\u53C2\u6570\u8BF4\u660E",id:"\u52A8\u6001\u5206\u533A\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u52A8\u6001\u5206\u533A\u5C5E\u6027\u53C2\u6570",id:"\u52A8\u6001\u5206\u533A\u5C5E\u6027\u53C2\u6570",level:3},{value:"FE \u914D\u7F6E\u53C2\u6570",id:"fe-\u914D\u7F6E\u53C2\u6570",level:3},{value:"\u52A8\u6001\u5206\u533A\u6700\u4F73\u5B9E\u8DF5",id:"\u52A8\u6001\u5206\u533A\u6700\u4F73\u5B9E\u8DF5",level:2}];function h(n){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.p,{children:"\u52A8\u6001\u5206\u533A\u4F1A\u6309\u7167\u8BBE\u5B9A\u7684\u89C4\u5219\uFF0C\u6EDA\u52A8\u6DFB\u52A0\u3001\u5220\u9664\u5206\u533A\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u8868\u5206\u533A\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406\uFF08TTL\uFF09\uFF0C\u51CF\u5C11\u6570\u636E\u5B58\u50A8\u538B\u529B\u3002\u5728\u65E5\u5FD7\u7BA1\u7406\uFF0C\u65F6\u5E8F\u6570\u636E\u7BA1\u7406\u7B49\u573A\u666F\uFF0C\u901A\u5E38\u53EF\u4EE5\u4F7F\u7528\u52A8\u6001\u5206\u533A\u80FD\u529B\u6EDA\u52A8\u5220\u9664\u8FC7\u671F\u7684\u6570\u636E\u3002"}),"\n",(0,d.jsx)(i.p,{children:"\u4E0B\u56FE\u4E2D\u5C55\u793A\u4E86\u4F7F\u7528\u52A8\u6001\u5206\u533A\u8FDB\u884C\u751F\u547D\u5468\u671F\u7BA1\u7406\uFF0C\u5176\u4E2D\u6307\u5B9A\u4E86\u4EE5\u4E0B\u89C4\u5219\uFF1A"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:["\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u5355\u4F4D ",(0,d.jsx)(i.code,{children:"dynamic_partition.time_unit"})," \u4E3A DAY\uFF0C\u6309\u5929\u7EC4\u7EC7\u5206\u533A\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:["\u52A8\u6001\u5206\u533A\u8D77\u59CB\u504F\u79FB\u91CF ",(0,d.jsx)(i.code,{children:"dynamic_partition.start"})," \u8BBE\u7F6E\u4E3A -1\uFF0C\u4FDD\u7559\u4E00\u5929\u524D\u5206\u533A\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:["\u52A8\u6001\u5206\u533A\u7ED3\u675F\u504F\u79FB\u91CF ",(0,d.jsx)(i.code,{children:"dynamic_partition.end"})," \u8BBE\u7F6E\u4E3A 2\uFF0C\u4FDD\u7559\u672A\u6765\u4E24\u5929\u5206\u533A"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u4F9D\u636E\u4EE5\u4E0A\u89C4\u5219\uFF0C\u968F\u7740\u65F6\u95F4\u63A8\u79FB\uFF0C\u603B\u4F1A\u4FDD\u7559 4 \u4E2A\u5206\u533A\uFF0C\u5373\u8FC7\u53BB\u4E00\u5929\u5206\u533A\uFF0C\u5F53\u5929\u5206\u533A\u4E0E\u672A\u6765\u4E24\u5929\u5206\u533A\uFF1A"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"dynamic-partition",src:e(105527).Z+"",width:"3196",height:"1668"})}),"\n",(0,d.jsx)(i.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,d.jsx)(i.p,{children:"\u5728\u4F7F\u7528\u52A8\u6001\u5206\u533A\u65F6\uFF0C\u9700\u8981\u9075\u5B88\u4EE5\u4E0B\u89C4\u5219\uFF1A"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsx)(i.p,{children:"\u52A8\u6001\u5206\u533A\u4E0E\u8DE8\u96C6\u7FA4\u590D\u5236\uFF08CCR\uFF09\u540C\u65F6\u4F7F\u7528\u65F6\u4F1A\u5931\u6548\uFF1B"}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsx)(i.p,{children:"\u52A8\u6001\u5206\u533A\u53EA\u652F\u6301\u5728 DATE/DATETIME \u5217\u4E0A\u8FDB\u884C Range \u7C7B\u578B\u7684\u5206\u533A\uFF1B"}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsx)(i.p,{children:"\u52A8\u6001\u5206\u533A\u53EA\u652F\u6301\u5355\u4E00\u5206\u533A\u952E\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"\u521B\u5EFA\u52A8\u6001\u5206\u533A",children:"\u521B\u5EFA\u52A8\u6001\u5206\u533A"}),"\n",(0,d.jsxs)(i.p,{children:["\u5728\u5EFA\u8868\u65F6\uFF0C\u901A\u8FC7\u6307\u5B9A ",(0,d.jsx)(i.code,{children:"dynamic_partition"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u521B\u5EFA\u52A8\u6001\u5206\u533A\u8868\u3002"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE test_dynamic_partition(\n    order_id    BIGINT,\n    create_dt   DATE,\n    username    VARCHAR(20)\n)\nDUPLICATE KEY(order_id)\nPARTITION BY RANGE(create_dt) ()\nDISTRIBUTED BY HASH(order_id) BUCKETS 10\nPROPERTIES(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-1",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.create_history_partition" = "true"\n);\n'})}),"\n",(0,d.jsx)(i.p,{children:"\u4E0A\u4F8B\u4E2D\u521B\u5EFA\u4E86\u52A8\u6001\u5206\u533A\u8868\uFF0C\u6307\u5B9A\u4EE5\u4E0B"}),"\n",(0,d.jsxs)(i.p,{children:["\u8BE6\u7EC6 ",(0,d.jsx)(i.code,{children:"dynamic_partition"})," \u53C2\u6570\u53EF\u4EE5\u53C2\u8003",(0,d.jsx)(i.a,{href:"#%E5%8A%A8%E6%80%81%E5%88%86%E5%8C%BA%E5%B1%9E%E6%80%A7%E5%8F%82%E6%95%B0",children:"\u52A8\u6001\u5206\u533A\u53C2\u6570\u8BF4\u660E"}),"\u3002"]}),"\n",(0,d.jsx)(i.h2,{id:"\u7BA1\u7406\u52A8\u6001\u5206\u533A",children:"\u7BA1\u7406\u52A8\u6001\u5206\u533A"}),"\n",(0,d.jsx)(i.h3,{id:"\u4FEE\u6539\u52A8\u6001\u5206\u533A\u5C5E\u6027",children:"\u4FEE\u6539\u52A8\u6001\u5206\u533A\u5C5E\u6027"}),"\n",(0,d.jsx)(i.admonition,{title:"\u63D0\u793A\uFF1A",type:"info",children:(0,d.jsxs)(i.p,{children:["\u5728\u4F7F\u7528 ALTER TABLE \u8BED\u53E5\u4FEE\u6539\u52A8\u6001\u5206\u533A\u65F6\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u751F\u6548\u3002\u4F1A\u4EE5 ",(0,d.jsx)(i.code,{children:"dynamic_partition_check_interval_seconds"})," \u53C2\u6570\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u8F6E\u8BAD\u68C0\u67E5 dynamic partition \u5206\u533A\uFF0C\u5B8C\u6210\u9700\u8981\u7684\u5206\u533A\u521B\u5EFA\u4E0E\u5220\u9664\u64CD\u4F5C\u3002"]})}),"\n",(0,d.jsx)(i.p,{children:"\u4E0B\u4F8B\u4E2D\u901A\u8FC7 ALTER TABLE \u8BED\u53E5\uFF0C\u5C06\u975E\u52A8\u6001\u5206\u533A\u8868\u4FEE\u6539\u4E3A\u52A8\u6001\u5206\u533A\uFF1A"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE test_dynamic_partition(\n    order_id    BIGINT,\n    create_dt   DATE,\n    username    VARCHAR(20)\n)\nDUPLICATE KEY(order_id)\nDISTRIBUTED BY HASH(order_id) BUCKETS 10;\n\nALTER TABLE test_partition SET (\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-1",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.create_history_partition" = "true"\n);\n\n'})}),"\n",(0,d.jsx)(i.h3,{id:"\u67E5\u770B\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u60C5\u51B5",children:"\u67E5\u770B\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u60C5\u51B5"}),"\n",(0,d.jsxs)(i.p,{children:["\u901A\u8FC7 ",(0,d.jsx)(i.a,{href:"../../sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES",children:"SHOW-DYNAMIC-PARTITION"})," \u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u4E0B\uFF0C\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u7684\u8C03\u5EA6\u60C5\u51B5\uFF1A"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n7 rows in set (0.02 sec)\n"})}),"\n",(0,d.jsx)(i.h3,{id:"\u5386\u53F2\u5206\u533A\u7BA1\u7406",children:"\u5386\u53F2\u5206\u533A\u7BA1\u7406"}),"\n",(0,d.jsxs)(i.p,{children:["\u5728\u4F7F\u7528 ",(0,d.jsx)(i.code,{children:"start"})," \u4E0E ",(0,d.jsx)(i.code,{children:"end"})," \u5C5E\u6027\u6307\u5B9A\u52A8\u6001\u5206\u533A\u6570\u91CF\u65F6\uFF0C\u4E3A\u4E86\u907F\u514D\u4E00\u6B21\u6027\u521B\u5EFA\u6240\u6709\u7684\u5206\u533A\u9020\u6210\u7B49\u5F85\u65F6\u95F4\u8FC7\u957F\uFF0C\u4E0D\u4F1A\u521B\u5EFA\u5386\u53F2\u5206\u533A\uFF0C\u53EA\u4F1A\u521B\u5EFA\u5F53\u524D\u65F6\u95F4\u4EE5\u540E\u5F97\u5206\u533A\u3002\u5982\u679C\u9700\u8981\u4E00\u6B21\u6027\u521B\u5EFA\u6240\u6709\u5206\u533A\uFF0C\u9700\u8981\u5F00\u542F ",(0,d.jsx)(i.code,{children:"create_history_partition"})," \u53C2\u6570\u3002"]}),"\n",(0,d.jsx)(i.p,{children:"\u4F8B\u5982\u5F53\u524D\u65E5\u671F\u4E3A 2024-10-11\uFF0C\u6307\u5B9A start = -2\uFF0Cend = 2\uFF1A"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:["\u5982\u679C\u6307\u5B9A\u4E86 ",(0,d.jsx)(i.code,{children:"create_history_partition = true"}),"\uFF0C\u7ACB\u5373\u521B\u5EFA\u6240\u6709\u5206\u533A\uFF0C\u5373 [10-09, 10-13] \u4E94\u4E2A\u5206\u533A\uFF1B"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:["\u5982\u679C\u6307\u5B9A\u4E86 ",(0,d.jsx)(i.code,{children:"create_history_partition = false"}),"\uFF0C\u53EA\u521B\u5EFA\u5305\u542B 10-11 \u4EE5\u540E\u7684\u5206\u533A\uFF0C\u5373 [10-11, 10-13] \u4E09\u4E2A\u5206\u533A\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"\u52A8\u6001\u5206\u533A\u53C2\u6570\u8BF4\u660E",children:"\u52A8\u6001\u5206\u533A\u53C2\u6570\u8BF4\u660E"}),"\n",(0,d.jsx)(i.h3,{id:"\u52A8\u6001\u5206\u533A\u5C5E\u6027\u53C2\u6570",children:"\u52A8\u6001\u5206\u533A\u5C5E\u6027\u53C2\u6570"}),"\n",(0,d.jsx)(i.p,{children:"\u52A8\u6001\u5206\u533A\u7684\u89C4\u5219\u53C2\u6570\u4EE5 dynamic_partition \u4E3A\u524D\u7F00\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4EE5\u4E0B\u89C4\u5219\u53C2\u6570\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53C2\u6570"}),(0,d.jsx)(i.th,{children:"\u5FC5\u9009"}),(0,d.jsx)(i.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.enable"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsx)(i.td,{children:"\u662F\u5426\u5F00\u542F\u52A8\u6001\u5206\u533A\u7279\u6027\u3002\u53EF\u4EE5\u6307\u5B9A\u4E3A TRUE \u6216 FALSE\u3002\u5982\u679C\u6307\u5B9A\u4E86\u52A8\u6001\u5206\u533A\u5176\u4ED6\u5FC5\u586B\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A TRUE\u3002"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.time_unit"})}),(0,d.jsx)(i.td,{children:"\u662F"}),(0,d.jsxs)(i.td,{children:["\u52A8\u6001\u5206\u533A\u8C03\u5EA6\u7684\u5355\u4F4D\u3002\u53EF\u6307\u5B9A\u4E3A ",(0,d.jsx)(i.code,{children:"HOUR"}),"\u3001",(0,d.jsx)(i.code,{children:"DAY"}),"\u3001",(0,d.jsx)(i.code,{children:"WEEK"}),"\u3001",(0,d.jsx)(i.code,{children:"MONTH"}),"\u3001",(0,d.jsx)(i.code,{children:"YEAR"}),"\u3002\u5206\u522B\u8868\u793A\u6309\u5C0F\u65F6\u3001\u6309\u5929\u3001\u6309\u661F\u671F\u3001\u6309\u6708\u3001\u6309\u5E74\u8FDB\u884C\u5206\u533A\u521B\u5EFA\u6216\u5220\u9664\uFF1A"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.start"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u52A8\u6001\u5206\u533A\u7684\u8D77\u59CB\u504F\u79FB\uFF0C\u4E3A\u8D1F\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A -2147483648\uFF0C\u5373\u4E0D\u5220\u9664\u5386\u53F2\u5206\u533A\u3002\u6839\u636E ",(0,d.jsx)(i.code,{children:"time_unit"})," \u5C5E\u6027\u7684\u4E0D\u540C\uFF0C\u4EE5\u5F53\u5929\uFF08\u661F\u671F/\u6708\uFF09\u4E3A\u57FA\u51C6\uFF0C\u5206\u533A\u8303\u56F4\u5728\u6B64\u504F\u79FB\u4E4B\u524D\u7684\u5206\u533A\u5C06\u4F1A\u88AB\u5220\u9664\u3002\u6B64\u504F\u79FB\u4E4B\u540E\u81F3\u5F53\u524D\u65F6\u95F4\u7684\u5386\u53F2\u5206\u533A\u5982\u4E0D\u5B58\u5728\uFF0C\u662F\u5426\u521B\u5EFA\u53D6\u51B3\u4E8E ",(0,d.jsx)(i.code,{children:"dynamic_partition.create_history_partition"}),"\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.end"})}),(0,d.jsx)(i.td,{children:"\u662F"}),(0,d.jsxs)(i.td,{children:["\u52A8\u6001\u5206\u533A\u7684\u7ED3\u675F\u504F\u79FB\uFF0C\u4E3A\u6B63\u6570\u3002\u6839\u636E ",(0,d.jsx)(i.code,{children:"time_unit"})," \u5C5E\u6027\u7684\u4E0D\u540C\uFF0C\u4EE5\u5F53\u5929\uFF08\u661F\u671F/\u6708\uFF09\u4E3A\u57FA\u51C6\uFF0C\u63D0\u524D\u521B\u5EFA\u5BF9\u5E94\u8303\u56F4\u7684\u5206\u533A\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.prefix"})}),(0,d.jsx)(i.td,{children:"\u662F"}),(0,d.jsx)(i.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u540D\u524D\u7F00\u3002"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.buckets"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u6240\u5BF9\u5E94\u7684\u5206\u6876\u6570\u3002\u8BBE\u7F6E\u8BE5\u53C2\u6570\u540E\u4F1A\u8986\u76D6 ",(0,d.jsx)(i.code,{children:"DISTRIBUTED"})," \u4E2D\u6307\u5B9A\u7684\u5206\u6876\u6570\u3002\u91CF\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.replication_num"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsx)(i.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u6240\u5BF9\u5E94\u7684\u526F\u672C\u6570\u91CF\uFF0C\u5982\u679C\u4E0D\u586B\u5199\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u8BE5\u8868\u521B\u5EFA\u65F6\u6307\u5B9A\u7684\u526F\u672C\u6570\u91CF\u3002"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.create_history_partition"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u9ED8\u8BA4\u4E3A false\u3002\u5F53\u7F6E\u4E3A true \u65F6\uFF0CDoris \u4F1A\u81EA\u52A8\u521B\u5EFA\u6240\u6709\u5206\u533A\uFF0C\u5177\u4F53\u521B\u5EFA\u89C4\u5219\u89C1\u4E0B\u6587\u3002\u540C\u65F6\uFF0CFE \u7684\u53C2\u6570 ",(0,d.jsx)(i.code,{children:"max_dynamic_partition_num"})," \u4F1A\u9650\u5236\u603B\u5206\u533A\u6570\u91CF\uFF0C\u4EE5\u907F\u514D\u4E00\u6B21\u6027\u521B\u5EFA\u8FC7\u591A\u5206\u533A\u3002\u5F53\u671F\u671B\u521B\u5EFA\u7684\u5206\u533A\u4E2A\u6570\u5927\u4E8E ",(0,d.jsx)(i.code,{children:"max_dynamic_partition_num"})," \u503C\u65F6\uFF0C\u64CD\u4F5C\u5C06\u88AB\u7981\u6B62\u3002\u5F53\u4E0D\u6307\u5B9A ",(0,d.jsx)(i.code,{children:"start"})," \u5C5E\u6027\u65F6\uFF0C\u8BE5\u53C2\u6570\u4E0D\u751F\u6548\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.history_partition_num"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u5F53",(0,d.jsx)(i.code,{children:"create_history_partition"})," \u4E3A ",(0,d.jsx)(i.code,{children:"true"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u521B\u5EFA\u5386\u53F2\u5206\u533A\u6570\u91CF\u3002\u9ED8\u8BA4\u503C\u4E3A -1\uFF0C\u5373\u672A\u8BBE\u7F6E\u3002\u8BE5\u53D8\u91CF\u4E0E ",(0,d.jsx)(i.code,{children:"dynamic_partition.start"})," \u4F5C\u7528\u76F8\u540C\uFF0C\u5EFA\u8BAE\u540C\u65F6\u53EA\u8BBE\u7F6E\u4E00\u4E2A\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.start_day_of_week"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u5F53 ",(0,d.jsx)(i.code,{children:"time_unit"})," \u4E3A ",(0,d.jsx)(i.code,{children:"WEEK"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u6BCF\u5468\u7684\u8D77\u59CB\u70B9\u3002\u53D6\u503C\u4E3A 1 \u5230 7\u3002\u5176\u4E2D 1 \u8868\u793A\u5468\u4E00\uFF0C7 \u8868\u793A\u5468\u65E5\u3002\u9ED8\u8BA4\u4E3A 1\uFF0C\u5373\u8868\u793A\u6BCF\u5468\u4EE5\u5468\u4E00\u4E3A\u8D77\u59CB\u70B9\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.start_day_of_month"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u5F53 ",(0,d.jsx)(i.code,{children:"time_unit"})," \u4E3A ",(0,d.jsx)(i.code,{children:"MONTH"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u6BCF\u6708\u7684\u8D77\u59CB\u65E5\u671F\u3002\u53D6\u503C\u4E3A 1 \u5230 28\u3002\u5176\u4E2D 1 \u8868\u793A\u6BCF\u6708 1 \u53F7\uFF0C28 \u8868\u793A\u6BCF\u6708 28 \u53F7\u3002\u9ED8\u8BA4\u4E3A 1\uFF0C\u5373\u8868\u793A\u6BCF\u6708\u4EE5 1 \u53F7\u4E3A\u8D77\u59CB\u70B9\u3002\u6682\u4E0D\u652F\u6301\u4EE5 29\u300130\u300131 \u53F7\u4E3A\u8D77\u59CB\u65E5\uFF0C\u4EE5\u907F\u514D\u56E0\u95F0\u5E74\u6216\u95F0\u6708\u5E26\u6765\u7684\u6B67\u4E49\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.reserved_history_periods"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u9700\u8981\u4FDD\u7559\u7684\u5386\u53F2\u5206\u533A\u7684\u65F6\u95F4\u8303\u56F4\u3002\u5F53",(0,d.jsx)(i.code,{children:"dynamic_partition.time_unit"}),' \u8BBE\u7F6E\u4E3A "DAY/WEEK/MONTH/YEAR" \u65F6\uFF0C\u9700\u8981\u4EE5 ',(0,d.jsx)(i.code,{children:"[yyyy-MM-dd,yyyy-MM-dd],[...,...]"})," \u683C\u5F0F\u8FDB\u884C\u8BBE\u7F6E\u3002\u5F53",(0,d.jsx)(i.code,{children:"dynamic_partition.time_unit"}),' \u8BBE\u7F6E\u4E3A "HOUR" \u65F6\uFF0C\u9700\u8981\u4EE5 ',(0,d.jsx)(i.code,{children:"[yyyy-MM-dd HH:mm:ss,yyyy-MM-dd HH:mm:ss],[...,...]"})," \u7684\u683C\u5F0F\u6765\u8FDB\u884C\u8BBE\u7F6E\u3002\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A ",(0,d.jsx)(i.code,{children:'"NULL"'}),"\u3002"]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition.time_zone"})}),(0,d.jsx)(i.td,{children:"\u5426"}),(0,d.jsxs)(i.td,{children:["\u52A8\u6001\u5206\u533A\u65F6\u533A\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u670D\u52A1\u5668\u7684\u7CFB\u7EDF\u65F6\u533A\uFF0C\u5982 ",(0,d.jsx)(i.code,{children:"Asia/Shanghai"}),"\u3002\u66F4\u591A\u65F6\u533A\u8BBE\u7F6E\u53EF\u4EE5\u53C2\u8003",(0,d.jsx)(i.a,{href:"../../admin-manual/cluster-management/time-zone",children:"\u65F6\u533A\u7BA1\u7406"}),"\u3002"]})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"fe-\u914D\u7F6E\u53C2\u6570",children:"FE \u914D\u7F6E\u53C2\u6570"}),"\n",(0,d.jsxs)(i.p,{children:["\u53EF\u4EE5\u5728 FE \u914D\u7F6E\u6587\u4EF6\u6216\u901A\u8FC7 ",(0,d.jsx)(i.code,{children:"ADMIN SET FRONTEND CONFIG"})," \u547D\u4EE4\u4FEE\u6539 FE \u4E2D\u7684\u52A8\u6001\u5206\u533A\u53C2\u6570\u914D\u7F6E\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"\u53C2\u6570"}),(0,d.jsx)(i.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(i.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition_enable"})}),(0,d.jsx)(i.td,{children:"false"}),(0,d.jsx)(i.td,{children:"\u662F\u5426\u5F00\u542F Doris \u7684\u52A8\u6001\u5206\u533A\u529F\u80FD\u3002\u8BE5\u53C2\u6570\u53EA\u5F71\u54CD\u52A8\u6001\u5206\u533A\u8868\u7684\u5206\u533A\u64CD\u4F5C\uFF0C\u4E0D\u5F71\u54CD\u666E\u901A\u8868\u3002"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"dynamic_partition_check_interval_seconds"})}),(0,d.jsx)(i.td,{children:"600"}),(0,d.jsx)(i.td,{children:"\u52A8\u6001\u5206\u533A\u7EBF\u7A0B\u7684\u6267\u884C\u9891\u7387\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"max_dynamic_partition_num"})}),(0,d.jsx)(i.td,{children:"500"}),(0,d.jsx)(i.td,{children:"\u7528\u4E8E\u9650\u5236\u521B\u5EFA\u52A8\u6001\u5206\u533A\u8868\u65F6\u53EF\u4EE5\u521B\u5EFA\u7684\u6700\u5927\u5206\u533A\u6570\uFF0C\u907F\u514D\u4E00\u6B21\u521B\u5EFA\u8FC7\u591A\u5206\u533A\u3002"})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"\u52A8\u6001\u5206\u533A\u6700\u4F73\u5B9E\u8DF5",children:"\u52A8\u6001\u5206\u533A\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,d.jsx)(i.p,{children:"\u793A\u4F8B 1\uFF1A\u6309\u5929\u5206\u533A\uFF0C\u53EA\u4FDD\u7559\u8FC7\u53BB 7 \u5929\u7684\u53CA\u5F53\u5929\u5206\u533A\uFF0C\u5E76\u4E14\u9884\u5148\u521B\u5EFA\u672A\u6765 3 \u5929\u7684\u5206\u533A\u3002"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1 (\n    order_id    BIGINT,\n    create_dt   DATE,\n    username    VARCHAR(20)\n)\nPARTITION BY RANGE(create_dt) ()\nDISTRIBUTED BY HASH(create_dt)\nPROPERTIES (\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n'})}),"\n",(0,d.jsx)(i.p,{children:"\u793A\u4F8B 2\uFF1A\u6309\u6708\u5206\u533A\uFF0C\u4E0D\u5220\u9664\u5386\u53F2\u5206\u533A\uFF0C\u5E76\u4E14\u9884\u5148\u521B\u5EFA\u672A\u6765 2 \u4E2A\u6708\u7684\u5206\u533A\u3002\u540C\u65F6\u8BBE\u5B9A\u4EE5\u6BCF\u6708 3 \u53F7\u4E3A\u8D77\u59CB\u65E5\u3002"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1 (\n    order_id    BIGINT,\n    create_dt   DATE,\n    username    VARCHAR(20)\n)\nPARTITION BY RANGE(create_dt) ()\nDISTRIBUTED BY HASH(create_dt)\nPROPERTIES (\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n'})}),"\n",(0,d.jsx)(i.p,{children:"\u793A\u4F8B 3\uFF1A\u6309\u5929\u5206\u533A\uFF0C\u4FDD\u7559\u8FC7\u53BB 10 \u5929\u53CA\u672A\u6765 10 \u5929\u5206\u533A\uFF0C\u5E76\u4E14\u4FDD\u7559 [2020-06-01,2020-06-20] \u53CA [2020-10-31,2020-11-15] \u671F\u95F4\u7684\u5386\u53F2\u6570\u636E\u3002"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1 (\n    order_id    BIGINT,\n    create_dt   DATE,\n    username    VARCHAR(20)\n)\nPARTITION BY RANGE(create_dt) ()\nDISTRIBUTED BY HASH(create_dt)\nPROPERTIES (\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-10",\n    "dynamic_partition.end" = "10",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.reserved_history_periods"="[2020-06-01,2020-06-20],[2020-10-31,2020-11-15]"\n);\n'})})]})}function o(n={}){let{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,d.jsx)(i,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},105527:function(n,i,e){e.d(i,{Z:function(){return t}});let t=e.p+"assets/images/dynamic-partition-cbc81f6bbb5876c1d7f81a6c921cb533.png"},250065:function(n,i,e){e.d(i,{Z:function(){return s},a:function(){return c}});var t=e(667294);let d={},r=t.createContext(d);function c(n){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(i):{...i,...n}},[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);