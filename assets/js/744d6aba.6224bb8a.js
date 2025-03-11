"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["399656"],{598015:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"ecosystem/beats","title":"Beats Doris Output Plugin","description":"\x3c!--","source":"@site/docs/ecosystem/beats.md","sourceDirName":"ecosystem","slug":"/ecosystem/beats","permalink":"/docs/dev/ecosystem/beats","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Beats Doris Output Plugin","language":"en"},"sidebar":"docs","previous":{"title":"Logstash Doris Output Plugin","permalink":"/docs/dev/ecosystem/logstash"},"next":{"title":"Fluent Bit Doris Output Plugin","permalink":"/docs/dev/ecosystem/fluentbit"}}'),a=n("785893"),s=n("250065");let o={title:"Beats Doris Output Plugin",language:"en"},r="Beats Doris output plugin",l={},d=[{value:"Installation",id:"installation",level:2},{value:"Download from the Official Website",id:"download-from-the-official-website",level:3},{value:"Compile from Source Code",id:"compile-from-source-code",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"TEXT Log Collection Example",id:"text-log-collection-example",level:3},{value:"JSON Log Collection Example",id:"json-log-collection-example",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"beats-doris-output-plugin",children:"Beats Doris output plugin"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats",children:"Beats"})," is a data collection agent that supports custom output plugins to write data into storage systems, with the Beats Doris output plugin being the one for outputting to Doris."]}),"\n",(0,a.jsxs)(t.p,{children:["The Beats Doris output plugin supports ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/filebeat",children:"Filebeat"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/metricbeat",children:"Metricbeat"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/packetbeat",children:"Packetbeat"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/winlogbeat",children:"Winlogbeat"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/auditbeat",children:"Auditbeat"}),", and ",(0,a.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/heartbeat",children:"Heartbeat"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["By invoking the ",(0,a.jsx)(t.a,{href:"../data-operate/import/import-way/stream-load-manual",children:"Doris Stream Load"})," HTTP interface, the Beats Doris output plugin writes data into Doris in real-time, offering capabilities such as multi-threaded concurrency, failure retries, custom Stream Load formats and parameters, and output write speed."]}),"\n",(0,a.jsx)(t.p,{children:"To use the Beats Doris output plugin, there are three main steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Download or compile the Beats binary program that includes the Doris output plugin."}),"\n",(0,a.jsx)(t.li,{children:"Configure the Beats output address and other parameters."}),"\n",(0,a.jsx)(t.li,{children:"Start Beats to write data into Doris in real-time."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h3,{id:"download-from-the-official-website",children:"Download from the Official Website"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0"})}),"\n",(0,a.jsx)(t.h3,{id:"compile-from-source-code",children:"Compile from Source Code"}),"\n",(0,a.jsxs)(t.p,{children:["Execute the following commands in the ",(0,a.jsx)(t.code,{children:"extension/beats/"})," directory:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd doris/extension/beats\n\ngo build -o filebeat-doris filebeat/filebeat.go\ngo build -o metricbeat-doris metricbeat/metricbeat.go\ngo build -o winlogbeat-doris winlogbeat/winlogbeat.go\ngo build -o packetbeat-doris packetbeat/packetbeat.go\ngo build -o auditbeat-doris auditbeat/auditbeat.go\ngo build -o heartbeat-doris heartbeat/heartbeat.go\n"})}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"The configuration for the Beats Doris output plugin is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Configuration"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"http_hosts"})}),(0,a.jsx)(t.td,{children:'Stream Load HTTP address, formatted as a string array, can have one or more elements, each element is host:port. For example: ["http://fe1:8030", "http://fe2:8030"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"user"})}),(0,a.jsx)(t.td,{children:"Doris username, this user needs to have import permissions for the corresponding Doris database and table"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"password"})}),(0,a.jsx)(t.td,{children:"Doris user's password"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"database"})}),(0,a.jsx)(t.td,{children:"The Doris database name to write into"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"table"})}),(0,a.jsx)(t.td,{children:"The Doris table name to write into"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"label_prefix"})}),(0,a.jsxs)(t.td,{children:["Doris Stream Load Label prefix, the final generated Label is ",(0,a.jsxs)(t.em,{children:["{label_prefix}",(0,a.jsx)(t.em,{children:"{db}"}),"{table}",(0,a.jsx)(t.em,{children:"{yyyymmdd_hhmmss}"}),"{uuid}"]}),", the default value is beats"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"headers"})}),(0,a.jsx)(t.td,{children:"Doris Stream Load headers parameter, syntax format is YAML map"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"codec_format_string"})}),(0,a.jsx)(t.td,{children:"The format string for outputting to Doris Stream Load, %{[a][b]} represents the a.b field in the input, refer to the usage examples in subsequent sections"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bulk_max_size"})}),(0,a.jsx)(t.td,{children:"Doris Stream Load batch size, default is 100000"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"max_retries"})}),(0,a.jsx)(t.td,{children:"Number of retries for Doris Stream Load requests on failure, default is -1 for infinite retries to ensure data reliability"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"log_request"})}),(0,a.jsx)(t.td,{children:"Whether to output Doris Stream Load request and response metadata in logs for troubleshooting, default is true"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"log_progress_interval"})}),(0,a.jsx)(t.td,{children:"Time interval for outputting speed in logs, unit is seconds, default is 10, setting to 0 can disable this type of logging"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,a.jsx)(t.h3,{id:"text-log-collection-example",children:"TEXT Log Collection Example"}),"\n",(0,a.jsx)(t.p,{children:"This example demonstrates TEXT log collection using Doris FE logs as an example."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. Data"})}),"\n",(0,a.jsx)(t.p,{children:"FE log files are typically located at the fe/log/fe.log file under the Doris installation directory. They are typical Java program logs, including fields such as timestamp, log level, thread name, code location, and log content. Not only do they contain normal logs, but also exception logs with stacktraces, which are multiline. Log collection and storage need to combine the main log and stacktrace into a single log entry."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Table Creation"})}),"\n",(0,a.jsx)(t.p,{children:"The table structure includes fields such as the log's creation time, collection time, hostname, log file path, log type, log level, thread name, code location, and log content."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. Configuration"})}),"\n",(0,a.jsx)(t.p,{children:"The filebeat log collection configuration file, such as filebeat_doris_log.yml, is in YAML format and mainly consists of four parts corresponding to the various stages of ETL:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Input is responsible for reading the raw data."}),"\n",(0,a.jsx)(t.li,{children:"Processor is responsible for data transformation."}),"\n",(0,a.jsx)(t.li,{children:"queue.mem configures the internal buffer queue of filebeat."}),"\n",(0,a.jsx)(t.li,{children:"Output is responsible for sending the data to the output destination."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'# 1. input is responsible for reading raw data\n# type: log is a log input plugin that can be configured to read the path of the log file. It uses the multiline feature to concatenate lines that do not start with a timestamp to the end of the previous line, achieving the effect of merging stacktraces with the main log. The log input saves the log content in the message field, and there are also some metadata fields such as agent.host, log.file.path.\n\nfilebeat.inputs:\n- type: log\n   enabled: true\n   paths:\n     - /path/to/your/log\n   # multiline can concatenate multi-line logs (e.g., Java stacktraces)\n   multiline:\n     type: pattern\n     # Effect: Lines starting with yyyy-mm-dd HH:MM:SS are considered as a new log, others are concatenated to the previous log\n     pattern: \'^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\'\n     negate: true\n     match: after\n     skip_newline: true\n\n# 2. processors section is responsible for data transformation\nprocessors:\n# Use the js script plugin to replace \\t in logs with spaces to avoid JSON parsing errors\n- script:\n     lang: javascript\n     source: >\n         function process(event) {\n             var msg = event.Get("message");\n             msg = msg.replace(/\\t/g, "   ");\n             event.Put("message", msg);\n         }\n# Use the dissect plugin for simple log parsing\n- dissect:\n     # Example log: 2024-06-08 18:26:25,481 INFO (report-thread|199) [ReportHandler.cpuReport():617] begin to handle\n     tokenizer: "%{day} %{time} %{log_level} (%{thread}) [%{position}] %{content}"\n     target_prefix: ""\n     ignore_failure: true\n     overwrite_keys: true\n\n# 3. internal buffer Queue total count, flush batch size, flush interval\nqueue.mem:\n   events: 1000000\n   flush.min_events: 100000\n   flush.timeout: 10s\n\n# 4. output section is responsible for data output\n# The doris output sends data to Doris using the Stream Load HTTP interface. The data format for Stream Load is specified as JSON through the headers parameter, and the codec_format_string parameter formats the output to Doris in a printf-like manner. For example, the following example formats a JSON based on filebeat internal fields such as agent.hostname, and fields produced by processors like dissect, such as day, using %{[a][b]} to reference them. Stream Load will automatically write the JSON fields into the corresponding fields of the Doris table.\n\noutput.doris:\n   fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n   user: "your_username"\n   password: "your_password"\n   database: "your_db"\n   table: "your_table"\n   # Output string format\n   ## %{[agent][hostname]} %{[log][file][path]} are filebeat\u81EA\u5E26\u7684metadata\n   ## Common filebeat metadata also includes\u91C7\u96C6\u65F6\u95F4\u6233 %{[@timestamp]}\n   ## %{[day]} %{[time]} are fields obtained from the above dissect parsing\n   codec_format_string: \'{"ts": "%{[day]} %{[time]}", "host": "%{[agent][hostname]}", "path": "%{[log][file][path]}", "message": "%{[message]}" }\'\n   headers:\n     format: "json"\n     read_json_by_line: "true"\n     load_to_single_tablet: "true"\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"4. Running filebeat"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'\n./filebeat-doris -f config/filebeat_doris_log.yml\n\n# When log_request is set to true, the log will output the request parameters and response results of each Stream Load.\n\ndoris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# By default, speed information is logged every 10 seconds, including the amount of data since startup (in MB and ROWS), the total speed (in MB/s and R/S), and the speed in the last 10 seconds.\n\ntotal 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n'})}),"\n",(0,a.jsx)(t.h3,{id:"json-log-collection-example",children:"JSON Log Collection Example"}),"\n",(0,a.jsx)(t.p,{children:"This example demonstrates JSON log collection using data from the GitHub events archive."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. Data"})}),"\n",(0,a.jsxs)(t.p,{children:["The GitHub events archive contains archived data of GitHub user actions, formatted as JSON. It can be downloaded from ",(0,a.jsx)(t.a,{href:"https://data.gharchive.org/",children:"here"}),", for example, the data for January 1, 2024, at 3 PM."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"wget https://data.gharchive.org/2024-01-01-15.json.gz\n"})}),"\n",(0,a.jsx)(t.p,{children:"Below is a sample of the data. Normally, each piece of data is on a single line, but for ease of display, it has been formatted here."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Table Creation"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor` VARIANT,\n  `repo` VARIANT,\n  `payload` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor` (`actor`) USING INVERTED,\n  INDEX `idx_host` (`repo`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. Filebeat Configuration"})}),"\n",(0,a.jsx)(t.p,{children:"This configuration file differs from the previous TEXT log collection in the following aspects:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Processors are not used because no additional processing or transformation is needed."}),"\n",(0,a.jsx)(t.li,{children:"The codec_format_string in the output is simple, directly outputting the entire message, which is the raw content."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'# input\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /path/to/your/log\n\n# queue and batch\nqueue.mem:\n  events: 1000000\n  flush.min_events: 100000\n  flush.timeout: 10s\n\n# output\noutput.doris:\n  fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n  user: "your_username"\n  password: "your_password"\n  database: "your_db"\n  table: "your_table"\n  # output string format\n  ## Directly outputting the raw message of each line from the original file. Since headers specify format: "json", Stream Load will automatically parse the JSON fields and write them into the corresponding fields of the Doris table.\n  codec_format_string: \'%{[message]}\'\n  headers:\n    format: "json"\n    read_json_by_line: "true"\n    load_to_single_tablet: "true"\n\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"4. Running Filebeat"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"./filebeat-doris -f config/filebeat_github_events.yml\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var i=n(667294);let a={},s=i.createContext(a);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);