"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["692258"],{522150:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"ecosystem/fluentbit","title":"Fluent Bit Doris Output Plugin","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/fluentbit.md","sourceDirName":"ecosystem","slug":"/ecosystem/fluentbit","permalink":"/zh-CN/docs/ecosystem/fluentbit","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Fluent Bit Doris Output Plugin","language":"zh-CN"}}'),i=t("785893"),s=t("250065");let a={title:"Fluent Bit Doris Output Plugin",language:"zh-CN"},l=void 0,o={},d=[{value:"\u5B89\u88C5\uFF08alpha \u7248\u672C\uFF09",id:"\u5B89\u88C5alpha-\u7248\u672C",level:2},{value:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",id:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",level:3},{value:"\u4ECE\u6E90\u7801\u7F16\u8BD1",id:"\u4ECE\u6E90\u7801\u7F16\u8BD1",level:3},{value:"\u53C2\u6570\u914D\u7F6E",id:"\u53C2\u6570\u914D\u7F6E",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3},{value:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://fluentbit.io/",children:"Fluent Bit"})," \u662F\u4E00\u4E2A\u5FEB\u901F\u7684\u65E5\u5FD7\u5904\u7406\u5668\u548C\u8F6C\u53D1\u5668\uFF0C\u5B83\u652F\u6301\u81EA\u5B9A\u4E49\u8F93\u51FA\u63D2\u4EF6\u5C06\u6570\u636E\u5199\u5165\u5B58\u50A8\u7CFB\u7EDF\uFF0CFluent Bit Doris Output Plugin \u662F\u8F93\u51FA\u5230 Doris \u7684\u63D2\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Fluent Bit Doris Output Plugin \u8C03\u7528 ",(0,i.jsx)(n.a,{href:"../data-operate/import/import-way/stream-load-manual",children:"Doris Stream Load"})," HTTP \u63A5\u53E3\u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris\uFF0C\u63D0\u4F9B\u591A\u7EBF\u7A0B\u5E76\u53D1\uFF0C\u5931\u8D25\u91CD\u8BD5\uFF0C\u81EA\u5B9A\u4E49 Stream Load \u683C\u5F0F\u548C\u53C2\u6570\uFF0C\u8F93\u51FA\u5199\u5165\u901F\u5EA6\u7B49\u80FD\u529B\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528 Fluent Bit Doris Output Plugin \u4E3B\u8981\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4E0B\u8F7D\u6216\u7F16\u8BD1\u5305\u542B Doris Output Plugin \u7684 Fluent Bit \u4E8C\u8FDB\u5236\u7A0B\u5E8F"}),"\n",(0,i.jsx)(n.li,{children:"\u914D\u7F6E Fluent Bit \u8F93\u51FA\u5730\u5740\u548C\u5176\u4ED6\u53C2\u6570"}),"\n",(0,i.jsx)(n.li,{children:"\u542F\u52A8 Fluent Bit \u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u88C5alpha-\u7248\u672C",children:"\u5B89\u88C5\uFF08alpha \u7248\u672C\uFF09"}),"\n",(0,i.jsx)(n.h3,{id:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",children:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/joker-star-l/fluent-bit/releases/download/v3.1.9-alpha/fluent-bit",children:"https://github.com/joker-star-l/fluent-bit/releases/download/v3.1.9-alpha/fluent-bit"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4ECE\u6E90\u7801\u7F16\u8BD1",children:"\u4ECE\u6E90\u7801\u7F16\u8BD1"}),"\n",(0,i.jsxs)(n.p,{children:["\u514B\u9686 ",(0,i.jsx)(n.a,{href:"https://github.com/joker-star-l/fluent-bit",children:"https://github.com/joker-star-l/fluent-bit"})," \u7684 dev \u5206\u652F\uFF0C\u5728 build/ \u76EE\u5F55\u4E0B\u6267\u884C"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cmake -DFLB_RELEASE=ON ..\nmake\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7F16\u8BD1\u4EA7\u7269\u4E3A build/bin/fluent-bit\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570\u914D\u7F6E",children:"\u53C2\u6570\u914D\u7F6E"}),"\n",(0,i.jsx)(n.p,{children:"Fluent Bit Doris output plugin \u7684\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u914D\u7F6E"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"host"})}),(0,i.jsx)(n.td,{children:"Stream Load HTTP host"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"port"})}),(0,i.jsx)(n.td,{children:"Stream Load HTTP port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"user"})}),(0,i.jsx)(n.td,{children:"Doris \u7528\u6237\u540D\uFF0C\u8BE5\u7528\u6237\u9700\u8981\u6709 doris \u5BF9\u5E94\u5E93\u8868\u7684\u5BFC\u5165\u6743\u9650"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsx)(n.td,{children:"Doris \u7528\u6237\u7684\u5BC6\u7801"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"database"})}),(0,i.jsx)(n.td,{children:"\u8981\u5199\u5165\u7684 Doris \u5E93\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"table"})}),(0,i.jsx)(n.td,{children:"\u8981\u5199\u5165\u7684 Doris \u8868\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"label_prefix"})}),(0,i.jsxs)(n.td,{children:["Doris Stream Load Label \u524D\u7F00\uFF0C\u6700\u7EC8\u751F\u6210\u7684 Label \u4E3A ",(0,i.jsx)(n.em,{children:"{label_prefix}_{timestamp}_{uuid}"})," \uFF0C\u9ED8\u8BA4\u503C\u662F fluentbit, \u5982\u679C\u8BBE\u7F6E\u4E3A false \u5219\u4E0D\u4F1A\u6DFB\u52A0 Label"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"time_key"})}),(0,i.jsx)(n.td,{children:"\u6570\u636E\u4E2D\u8981\u6DFB\u52A0\u7684\u65F6\u95F4\u6233\u5217\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u662F date\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A false \u5219\u4E0D\u4F1A\u6DFB\u52A0\u8BE5\u5217"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"header"})}),(0,i.jsx)(n.td,{children:"Doris Stream Load \u7684 header \u53C2\u6570\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log_request"})}),(0,i.jsx)(n.td,{children:"\u65E5\u5FD7\u4E2D\u662F\u5426\u8F93\u51FA Doris Stream Load \u8BF7\u6C42\u548C\u54CD\u5E94\u5143\u6570\u636E\uFF0C\u7528\u4E8E\u6392\u67E5\u95EE\u9898\uFF0C\u9ED8\u8BA4\u4E3A true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log_progress_interval"})}),(0,i.jsx)(n.td,{children:"\u65E5\u5FD7\u4E2D\u8F93\u51FA\u901F\u5EA6\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5173\u95ED\u8FD9\u79CD\u65E5\u5FD7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"retry_limit"})}),(0,i.jsx)(n.td,{children:"Doris Stream Load \u8BF7\u6C42\u5931\u8D25\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A 1, \u5982\u679C\u8BBE\u7F6E\u4E3A false \u5219\u4E0D\u9650\u5236\u91CD\u8BD5\u6B21\u6570"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"workers"})}),(0,i.jsx)(n.td,{children:"\u6267\u884C Doris Stream Load \u7684 worker \u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A 2"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(n.h3,{id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u793A\u4F8B\u4EE5 Doris FE \u7684\u65E5\u5FD7\u4E3A\u4F8B\u5C55\u793A TEXT \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsxs)(n.p,{children:["FE \u65E5\u5FD7\u6587\u4EF6\u4E00\u822C\u4F4D\u4E8E Doris \u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"fe/log/fe.log"})," \u6587\u4EF6\uFF0C\u662F\u5178\u578B\u7684 Java \u7A0B\u5E8F\u65E5\u5FD7\uFF0C\u5305\u62EC\u65F6\u95F4\u6233\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002\u4E0D\u4EC5\u6709\u6B63\u5E38\u7684\u65E5\u5FD7\uFF0C\u8FD8\u6709\u5E26 ",(0,i.jsx)(n.code,{children:"stacktrace"})," \u7684\u5F02\u5E38\u65E5\u5FD7\uFF0C",(0,i.jsx)(n.code,{children:"stacktrace"})," \u662F\u8DE8\u884C\u7684\uFF0C\u65E5\u5FD7\u91C7\u96C6\u5B58\u50A8\u9700\u8981\u628A\u4E3B\u65E5\u5FD7\u548C ",(0,i.jsx)(n.code,{children:"stacktrace"})," \u7EC4\u5408\u6210\u4E00\u6761\u65E5\u5FD7\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. \u5EFA\u8868"})}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u7ED3\u6784\u5305\u62EC\u65E5\u5FD7\u7684\u4EA7\u751F\u65F6\u95F4\uFF0C\u91C7\u96C6\u65F6\u95F4\uFF0C\u4E3B\u673A\u540D\uFF0C\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u65E5\u5FD7\u7C7B\u578B\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. \u914D\u7F6E"})}),"\n",(0,i.jsxs)(n.p,{children:["Fluent Bit \u65E5\u5FD7\u91C7\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF0C",(0,i.jsx)(n.code,{children:"doris_log.conf"})," \u7528\u4E8E\u5B9A\u4E49 ETL \u7684\u5404\u4E2A\u90E8\u5206\u7EC4\u4EF6\uFF0C",(0,i.jsx)(n.code,{children:"parsers.conf"})," \u7528\u4E8E\u5B9A\u4E49\u4E0D\u540C\u7684\u65E5\u5FD7\u89E3\u6790\u5668\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"doris_log.conf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"# config for Fluent Bit service\n[SERVICE]\n    log_level info\n    # parsers file\n    parsers_file parsers.conf\n\n# use input tail\n[INPUT]\n    name tail\n    path /path/to/your/log\n    # add log file name to the record, key is 'path'\n    path_key path\n    # set multiline parser\n    multiline.parser multiline_java \n\n# parse log\n[FILTER]\n    match *\n    name parser\n    key_name log\n    parser fe_log\n    reserve_data true\n\n# add host info\n[FILTER]\n    name sysinfo\n    match *\n    # add hostname to the record, key is 'host'\n    hostname_key host\n\n# output to doris\n[OUTPUT]\n    name doris\n    match *\n    host fehost\n    port feport\n    user your_username\n    password your_password\n    database your_db\n    table your_table\n    # add 'collect_time' to the record\n    time_key collect_time\n    # 'collect_time' is timestamp, change it to datatime\n    header columns collect_time=from_unixtime(collect_time)\n    log_request true\n    log_progress_interval 10\n"})}),"\n",(0,i.jsx)(n.p,{children:"parsers.conf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'[MULTILINE_PARSER]\n    name          multiline_java\n    type          regex\n    flush_timeout 1000\n    # Regex rules for multiline parsing\n    # ---------------------------------\n    #\n    # configuration hints:\n    #\n    #  - first state always has the name: start_state\n    #  - every field in the rule must be inside double quotes\n    #\n    # rules   |   state name   | regex pattern | next state name\n    # --------|----------------|---------------|-----------------\n    rule         "start_state"   "/(^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2})(.*)/"  "cont"\n    rule         "cont"          "/(^(?![0-9]{4}-[0-9]{2}-[0-9]{2}))(.*)/"     "cont"\n\n\n[PARSER]\n    name        fe_log\n    format      regex\n    # parse and add \'log_time\', \'level\', \'thread\', \'position\', \'message\' to the record\n    regex       ^(?<log_time>[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3}) (?<level>[^ ]+) \\((?<thread>[^\\)]+)\\) \\[(?<position>[^\\]]+)\\] (?<message>(\\n|.)*)\\n$\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. \u8FD0\u884C Fluent Bit"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'fluent-bit -c doris_log.conf\n\n# log stream load response\n\n[2024/10/31 18:39:55] [ info] [output:doris:doris.1] 127.0.0.1:8040, HTTP status=200\n{\n    "TxnId": 32155,\n    "Label": "fluentbit_1730371195_91cca1aa-c15f-45d2-b503-fe7d2e839c2a",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 1,\n    "NumberLoadedRows": 1,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 836,\n    "LoadTimeMs": 298,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 3,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 268,\n    "CommitAndPublishTimeMs": 25\n}\n\n# log speed info\n\n[2024/10/31 18:40:13] [ info] [output:doris:doris.1] total 0 MB 2 ROWS, total speed 0 MB/s 0 R/s, last 10 seconds speed 0 MB/s 0 R/s\n'})}),"\n",(0,i.jsx)(n.h3,{id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u6837\u4F8B\u4EE5 github events archive \u7684\u6570\u636E\u4E3A\u4F8B\u5C55\u793A JSON \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsxs)(n.p,{children:["github events archive \u662F github \u7528\u6237\u64CD\u4F5C\u4E8B\u4EF6\u7684\u5F52\u6863\u6570\u636E\uFF0C\u683C\u5F0F\u662F JSON\uFF0C\u53EF\u4EE5\u4ECE ",(0,i.jsx)(n.a,{href:"https://www.gharchive.org/",children:"https://www.gharchive.org/"})," \u4E0B\u8F7D\uFF0C\u6BD4\u5982\u4E0B\u8F7D 2024 \u5E74 1 \u6708 1 \u65E5 15 \u70B9\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://data.gharchive.org/2024-01-01-15.json.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u6761\u6570\u636E\u6837\u4F8B\uFF0C\u5B9E\u9645\u4E00\u6761\u6570\u636E\u4E00\u884C\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5C55\u793A\u8FDB\u884C\u4E86\u683C\u5F0F\u5316\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jason",children:'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. \u5EFA\u8868"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor` VARIANT,\n  `repo` VARIANT,\n  `payload` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor` (`actor`) USING INVERTED,\n  INDEX `idx_host` (`repo`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. \u914D\u7F6E"})}),"\n",(0,i.jsx)(n.p,{children:"\u548C\u4E4B\u524D TEXT \u65E5\u5FD7\u91C7\u96C6\u76F8\u6BD4\uFF0C\u8BE5\u914D\u7F6E\u6587\u4EF6\u6CA1\u6709\u4F7F\u7528 FILTER\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u989D\u5916\u7684\u5904\u7406\u8F6C\u6362\u3002"}),"\n",(0,i.jsx)(n.p,{children:"github_events.conf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[SERVICE]\n    log_level info\n    parsers_file github_parsers.conf\n\n[INPUT]\n    name tail\n    parser github\n    path /path/to/your/log\n\n[OUTPUT]\n    name doris\n    match *\n    host fehost\n    port feport\n    user your_username\n    password your_password\n    database your_db\n    table your_table\n    time_key false\n    log_request true\n    log_progress_interval 10\n"})}),"\n",(0,i.jsx)(n.p,{children:"github_parsers.conf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[PARSER]\n    name github\n    format json\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. \u8FD0\u884C Fluent Bit"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"fluent-bit -c github_events.conf\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(667294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);