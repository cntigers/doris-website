"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["211555"],{457802:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/system-info-and-help/SHOW-PROC","title":"SHOW PROC","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/system-info-and-help/SHOW-PROC.md","sourceDirName":"sql-manual/sql-statements/system-info-and-help","slug":"/sql-manual/sql-statements/system-info-and-help/SHOW-PROC","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/system-info-and-help/SHOW-PROC","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PROC","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW TYPECAST","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/types/SHOW-TYPECAST"},"next":{"title":"\u6700\u65B0\u53D1\u5E03","permalink":"/zh-CN/docs/dev/releasenotes/all-release"}}'),r=s("785893"),t=s("250065");let i={title:"SHOW PROC",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function d(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"Proc \u7CFB\u7EDF\u662F Doris \u7684\u4E00\u4E2A\u6BD4\u8F83\u6709\u7279\u8272\u7684\u529F\u80FD\u3002\u4F7F\u7528\u8FC7 Linux \u7684\u540C\u5B66\u53EF\u80FD\u6BD4\u8F83\u4E86\u89E3\u8FD9\u4E2A\u6982\u5FF5\u3002\u5728 Linux \u7CFB\u7EDF\u4E2D\uFF0Cproc \u662F\u4E00\u4E2A\u865A\u62DF\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u901A\u5E38\u6302\u8F7D\u5728 /proc \u76EE\u5F55\u4E0B\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u6765\u67E5\u770B\u7CFB\u7EDF\u5185\u90E8\u7684\u6570\u636E\u7ED3\u6784\u3002\u6BD4\u5982\u53EF\u4EE5\u901A\u8FC7 /proc/pid \u67E5\u770B\u6307\u5B9A pid \u8FDB\u7A0B\u7684\u8BE6\u7EC6\u60C5\u51B5\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u548C Linux \u4E2D\u7684 proc \u7CFB\u7EDF\u7C7B\u4F3C\uFF0CDoris \u4E2D\u7684 proc \u7CFB\u7EDF\u4E5F\u88AB\u7EC4\u7EC7\u6210\u4E00\u4E2A\u7C7B\u4F3C\u76EE\u5F55\u7684\u7ED3\u6784\uFF0C\u6839\u636E\u7528\u6237\u6307\u5B9A\u7684\u201C\u76EE\u5F55\u8DEF\u5F84\uFF08proc \u8DEF\u5F84\uFF09\u201D\uFF0C\u6765\u67E5\u770B\u4E0D\u540C\u7684\u7CFB\u7EDF\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(e.p,{children:"proc \u7CFB\u7EDF\u88AB\u8BBE\u8BA1\u4E3A\u4E3B\u8981\u9762\u5411\u7CFB\u7EDF\u7BA1\u7406\u4EBA\u5458\uFF0C\u65B9\u4FBF\u5176\u67E5\u770B\u7CFB\u7EDF\u5185\u90E8\u7684\u4E00\u4E9B\u8FD0\u884C\u72B6\u6001\u3002\u5982\u8868\u7684 tablet \u72B6\u6001\u3001\u96C6\u7FA4\u5747\u8861\u72B6\u6001\u3001\u5404\u79CD\u4F5C\u4E1A\u7684\u72B6\u6001\u7B49\u7B49\u3002\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u529F\u80FD"}),"\n",(0,r.jsx)(e.p,{children:"Doris \u4E2D\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u67E5\u770B proc \u7CFB\u7EDF\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u901A\u8FC7 Doris \u63D0\u4F9B\u7684 WEB UI \u754C\u9762\u67E5\u770B\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A",(0,r.jsx)(e.code,{children:"http://FE_IP:FE_HTTP_PORT"})]}),"\n",(0,r.jsx)(e.li,{children:"\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u662F\u901A\u8FC7\u547D\u4EE4"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:' SHOW PROC  "/";'})," \u53EF\u770B\u5230 Doris PROC \u652F\u6301\u7684\u6240\u6709\u547D\u4EE4"]}),"\n",(0,r.jsx)(e.p,{children:'\u901A\u8FC7 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5 Doris \u540E\uFF0C\u53EF\u4EE5\u6267\u884C SHOW PROC \u8BED\u53E5\u67E5\u770B\u6307\u5B9A proc \u76EE\u5F55\u7684\u4FE1\u606F\u3002proc \u76EE\u5F55\u662F\u4EE5 "/" \u5F00\u5934\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002'}),"\n",(0,r.jsx)(e.p,{children:"show proc \u8BED\u53E5\u7684\u7ED3\u679C\u4EE5\u4E8C\u7EF4\u8868\u7684\u5F62\u5F0F\u5C55\u73B0\u3002\u800C\u901A\u5E38\u7ED3\u679C\u8868\u7684\u7B2C\u4E00\u5217\u7684\u503C\u4E3A proc \u7684\u4E0B\u4E00\u7EA7\u5B50\u76EE\u5F55\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'mysql> show proc "/";\n+---------------------------+\n| name                      |\n+---------------------------+\n| auth                      |\n| backends                  |\n| bdbje                     |\n| brokers                   |\n| catalogs                  |\n| cluster_balance           |\n| cluster_health            |\n| colocation_group          |\n| current_backend_instances |\n| current_queries           |\n| current_query_stmts       |\n| dbs                       |\n| diagnose                  |\n| frontends                 |\n| jobs                      |\n| load_error_hub            |\n| monitor                   |\n| resources                 |\n| routine_loads             |\n| statistic                 |\n| stream_loads              |\n| tasks                     |\n| transactions              |\n| trash                     |\n+---------------------------+\n23 rows in set (0.00 sec)\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"auth\uFF1A\u7528\u6237\u540D\u79F0\u53CA\u5BF9\u5E94\u7684\u6743\u9650\u4FE1\u606F"}),"\n",(0,r.jsxs)(e.li,{children:["backends\uFF1A\u663E\u793A\u96C6\u7FA4\u4E2D BE \u7684\u8282\u70B9\u5217\u8868\uFF0C\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"})]}),"\n",(0,r.jsxs)(e.li,{children:["bdbje\uFF1A\u67E5\u770B bdbje \u6570\u636E\u5E93\u5217\u8868\uFF0C\u9700\u8981\u4FEE\u6539 ",(0,r.jsx)(e.code,{children:"fe.conf"})," \u6587\u4EF6\u589E\u52A0 ",(0,r.jsx)(e.code,{children:"enable_bdbje_debug_mode=true"})," , \u7136\u540E\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"sh start_fe.sh --daemon"})," \u542F\u52A8 ",(0,r.jsx)(e.code,{children:"FE"})," \u5373\u53EF\u8FDB\u5165 ",(0,r.jsx)(e.code,{children:"debug"})," \u6A21\u5F0F\u3002\u8FDB\u5165 ",(0,r.jsx)(e.code,{children:"debug"})," \u6A21\u5F0F\u4E4B\u540E\uFF0C\u4EC5\u4F1A\u542F\u52A8 ",(0,r.jsx)(e.code,{children:"http server"})," \u548C  ",(0,r.jsx)(e.code,{children:"MySQLServer"})," \u5E76\u6253\u5F00 ",(0,r.jsx)(e.code,{children:"BDBJE"})," \u5B9E\u4F8B\uFF0C\u4F46\u4E0D\u4F1A\u8FDB\u5165\u4EFB\u4F55\u5143\u6570\u636E\u7684\u52A0\u8F7D\u53CA\u540E\u7EED\u5176\u4ED6\u542F\u52A8\u6D41\u7A0B\uFF0C"]}),"\n",(0,r.jsxs)(e.li,{children:["brokers : \u67E5\u770B\u96C6\u7FA4 Broker \u8282\u70B9\u4FE1\u606F\uFF0C\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../cluster-management/instance-management/SHOW-BROKER",children:"SHOW BROKER"})]}),"\n",(0,r.jsxs)(e.li,{children:["catalogs : \u67E5\u770B\u5F53\u524D\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u76EE\u5F55\uFF0C\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/SHOW-CATALOG",children:"SHOW CATALOGS"})]}),"\n",(0,r.jsxs)(e.li,{children:["cluster_balance\uFF1A\u67E5\u770B\u96C6\u7FA4\u5747\u8861\u60C5\u51B5\uFF0C\u5177\u4F53\u53C2\u7167 ",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-repair-and-balance",children:"\u6570\u636E\u526F\u672C\u7BA1\u7406"})]}),"\n",(0,r.jsxs)(e.li,{children:["cluster_health : \u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"SHOW PROC '/cluster_health/tablet_health'"}),"; \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u6574\u4E2A\u96C6\u7FA4\u7684\u526F\u672C\u72B6\u6001\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["colocation_group :   \u8BE5\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u96C6\u7FA4\u5185\u5DF2\u5B58\u5728\u7684 Group \u4FE1\u606F\uFF0C\u5177\u4F53\u53EF\u4EE5\u67E5\u770B ",(0,r.jsx)(e.a,{href:"../../../query-acceleration/colocation-join",children:"Colocation Join"})," \u7AE0\u8282"]}),"\n",(0,r.jsx)(e.li,{children:"current_backend_instances\uFF1A\u663E\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u4F5C\u4E1A\u7684 be \u8282\u70B9\u5217\u8868"}),"\n",(0,r.jsx)(e.li,{children:"current_queries  : \u67E5\u770B\u6B63\u5728\u6267\u884C\u7684\u67E5\u8BE2\u5217\u8868\uFF0C\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684 SQL \u8BED\u53E5\u3002"}),"\n",(0,r.jsx)(e.li,{children:"current_query_stmts : \u8FD4\u56DE\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684 query\u3002"}),"\n",(0,r.jsx)(e.li,{children:"dbs\uFF1A\u4E3B\u8981\u7528\u4E8E\u67E5\u770B Doris \u96C6\u7FA4\u4E2D\u5404\u4E2A\u6570\u636E\u5E93\u4EE5\u53CA\u5176\u4E2D\u7684\u8868\u7684\u5143\u6570\u636E\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u5305\u62EC\u8868\u7ED3\u6784\u3001\u5206\u533A\u3001\u7269\u5316\u89C6\u56FE\u3001\u6570\u636E\u5206\u7247\u548C\u526F\u672C\u7B49\u7B49\u3002\u901A\u8FC7\u8FD9\u4E2A\u76EE\u5F55\u548C\u5176\u5B50\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6E05\u695A\u7684\u5C55\u793A\u96C6\u7FA4\u4E2D\u7684\u8868\u5143\u6570\u636E\u60C5\u51B5\uFF0C\u4EE5\u53CA\u5B9A\u4F4D\u4E00\u4E9B\u5982\u6570\u636E\u503E\u659C\u3001\u526F\u672C\u6545\u969C\u7B49\u95EE\u9898"}),"\n",(0,r.jsx)(e.li,{children:"diagnose : \u62A5\u544A\u548C\u8BCA\u65AD\u96C6\u7FA4\u4E2D\u7684\u5E38\u89C1\u7BA1\u63A7\u95EE\u9898\uFF0C\u4E3B\u8981\u5305\u62EC\u526F\u672C\u5747\u8861\u548C\u8FC1\u79FB\u3001\u4E8B\u52A1\u5F02\u5E38\u7B49"}),"\n",(0,r.jsxs)(e.li,{children:["frontends\uFF1A\u663E\u793A\u96C6\u7FA4\u4E2D\u6240\u6709\u7684 FE \u8282\u70B9\u4FE1\u606F\uFF0C\u5305\u62EC IP \u5730\u5740\u3001\u89D2\u8272\u3001\u72B6\u6001\u3001\u662F\u5426\u662F master \u7B49\uFF0C\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../cluster-management/instance-management/SHOW-FRONTENDS",children:"SHOW FRONTENDS"})]}),"\n",(0,r.jsxs)(e.li,{children:["jobs\uFF1A\u5404\u7C7B\u4EFB\u52A1\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u53EF\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u7684 Job \u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5982\u679C ",(0,r.jsx)(e.code,{children:"dbId"})," = -1, \u5219\u8FD4\u56DE\u6240\u6709\u5E93\u7684\u6C47\u603B\u4FE1\u606F"]}),"\n",(0,r.jsxs)(e.li,{children:["load_error_hub\uFF1ADoris \u652F\u6301\u5C06 load \u4F5C\u4E1A\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\u96C6\u4E2D\u5B58\u50A8\u5230\u4E00\u4E2A error hub \u4E2D\u3002\u7136\u540E\u76F4\u63A5\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"SHOW LOAD WARNINGS;"})," \u8BED\u53E5\u67E5\u770B\u9519\u8BEF\u4FE1\u606F\u3002\u8FD9\u91CC\u5C55\u793A\u7684\u5C31\u662F error hub \u7684\u914D\u7F6E\u4FE1\u606F\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"monitor : \u663E\u793A\u7684\u662F FE JVM \u7684\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5"}),"\n",(0,r.jsxs)(e.li,{children:["resources : \u67E5\u770B\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u666E\u901A\u8D26\u6237\u53EA\u80FD\u770B\u5230\u81EA\u5DF1\u6709 USAGE_PRIV \u4F7F\u7528\u6743\u9650\u7684\u8D44\u6E90\u3002\u53EA\u6709 root \u548C admin \u8D26\u6237\u53EF\u4EE5\u770B\u5230\u6240\u6709\u7684\u8D44\u6E90\u3002\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../cluster-management/compute-management/SHOW-RESOURCES",children:"SHOW RESOURCES"})]}),"\n",(0,r.jsx)(e.li,{children:"routine_loads\uFF1A\u663E\u793A\u6240\u6709\u7684 routine load \u4F5C\u4E1A\u4FE1\u606F\uFF0C\u5305\u62EC\u4F5C\u4E1A\u540D\u79F0\u3001\u72B6\u6001\u7B49"}),"\n",(0,r.jsx)(e.li,{children:"statistics\uFF1A\u4E3B\u8981\u7528\u4E8E\u6C47\u603B\u67E5\u770B Doris \u96C6\u7FA4\u4E2D\u6570\u636E\u5E93\u3001\u8868\u3001\u5206\u533A\u3001\u5206\u7247\u3001\u526F\u672C\u7684\u6570\u91CF\u3002\u4EE5\u53CA\u4E0D\u5065\u5EB7\u526F\u672C\u7684\u6570\u91CF\u3002\u8FD9\u4E2A\u4FE1\u606F\u6709\u52A9\u4E8E\u6211\u4EEC\u603B\u4F53\u628A\u63A7\u96C6\u7FA4\u5143\u4FE1\u606F\u7684\u89C4\u6A21\u3002\u5E2E\u52A9\u6211\u4EEC\u4ECE\u6574\u4F53\u89C6\u89D2\u67E5\u770B\u96C6\u7FA4\u5206\u7247\u60C5\u51B5\uFF0C\u80FD\u591F\u5FEB\u901F\u67E5\u770B\u96C6\u7FA4\u5206\u7247\u7684\u5065\u5EB7\u60C5\u51B5\u3002\u4ECE\u800C\u8FDB\u4E00\u6B65\u5B9A\u4F4D\u6709\u95EE\u9898\u7684\u6570\u636E\u5206\u7247\u3002"}),"\n",(0,r.jsx)(e.li,{children:"stream_loads : \u8FD4\u56DE\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684 stream load \u4EFB\u52A1\u3002"}),"\n",(0,r.jsx)(e.li,{children:"tasks :  \u663E\u793A\u73B0\u5728\u5404\u79CD\u4F5C\u4E1A\u7684\u4EFB\u52A1\u603B\u91CF\uFF0C\u53CA\u5931\u8D25\u7684\u6570\u91CF\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["transactions\uFF1A\u7528\u4E8E\u67E5\u770B\u6307\u5B9A transaction id \u7684\u4E8B\u52A1\u8BE6\u60C5\uFF0C\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../transaction/SHOW-TRANSACTION",children:"SHOW TRANSACTION"})]}),"\n",(0,r.jsxs)(e.li,{children:["trash\uFF1A\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B backend \u5185\u7684\u5783\u573E\u6570\u636E\u5360\u7528\u7A7A\u95F4\u3002\u7B49\u540C\u4E8E ",(0,r.jsx)(e.a,{href:"../table-and-view/data-and-status-management/SHOW-TRASH",children:"SHOW TRASH"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'\u5982 "/dbs" \u5C55\u793A\u6240\u6709\u6570\u636E\u5E93\uFF0C\u800C "/dbs/10002" \u5C55\u793A id \u4E3A 10002 \u7684\u6570\u636E\u5E93\u4E0B\u7684\u6240\u6709\u8868'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'mysql> show proc "/dbs/10002";\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| TableId | TableName            | IndexNum | PartitionColumnName | PartitionNum | State  | Type | LastConsistencyCheckTime | ReplicaCount |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| 10065   | dwd_product_live     | 1        | dt                  | 9            | NORMAL | OLAP | NULL                     | 18           |\n| 10109   | ODS_MR_BILL_COSTS_DO | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10119   | test                 | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10124   | test_parquet_import  | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n4 rows in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5C55\u793A\u96C6\u7FA4\u4E2D\u6240\u6709\u5E93\u8868\u4E2A\u6570\u76F8\u5173\u7684\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> show proc '/statistic';\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| DbId  | DbName               | TableNum | PartitionNum | IndexNum | TabletNum | ReplicaNum |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| 10002 | default_cluster:test | 4        | 12           | 12       | 21        | 21         |\n| Total | 1                    | 4        | 12           | 12       | 21        | 21         |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n2 rows in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u96C6\u7FA4\u5185\u5DF2\u5B58\u5728\u7684 Group \u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"GroupId\uFF1A\u4E00\u4E2A Group \u7684\u5168\u96C6\u7FA4\u552F\u4E00\u6807\u8BC6\uFF0C\u524D\u534A\u90E8\u5206\u4E3A db id\uFF0C\u540E\u534A\u90E8\u5206\u4E3A group id\u3002"}),"\n",(0,r.jsx)(e.li,{children:"GroupName\uFF1AGroup \u7684\u5168\u540D\u3002"}),"\n",(0,r.jsx)(e.li,{children:"TabletIds\uFF1A\u8BE5 Group \u5305\u542B\u7684 Table \u7684 id \u5217\u8868\u3002"}),"\n",(0,r.jsx)(e.li,{children:"BucketsNum\uFF1A\u5206\u6876\u6570\u3002"}),"\n",(0,r.jsx)(e.li,{children:"ReplicationNum\uFF1A\u526F\u672C\u6570\u3002"}),"\n",(0,r.jsx)(e.li,{children:"DistCols\uFF1ADistribution columns\uFF0C\u5373\u5206\u6876\u5217\u7C7B\u578B\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["IsStable\uFF1A\u8BE5 Group \u662F\u5426\u7A33\u5B9A\uFF08\u7A33\u5B9A\u7684\u5B9A\u4E49\uFF0C\u89C1 ",(0,r.jsx)(e.code,{children:"Colocation \u526F\u672C\u5747\u8861\u548C\u4FEE\u590D"})," \u4E00\u8282\uFF09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u8FDB\u4E00\u6B65\u67E5\u770B\u4E00\u4E2A Group \u7684\u6570\u636E\u5206\u5E03\u60C5\u51B5\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"BucketIndex\uFF1A\u5206\u6876\u5E8F\u5217\u7684\u4E0B\u6807\u3002"}),"\n",(0,r.jsx)(e.li,{children:"BackendIds\uFF1A\u5206\u6876\u4E2D\u6570\u636E\u5206\u7247\u6240\u5728\u7684 BE \u8282\u70B9 id \u5217\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u663E\u793A\u73B0\u5728\u5404\u79CD\u4F5C\u4E1A\u7684\u4EFB\u52A1\u603B\u91CF\uFF0C\u53CA\u5931\u8D25\u7684\u6570\u91CF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> show proc '/tasks';\n+-------------------------+-----------+----------+\n| TaskType                | FailedNum | TotalNum |\n+-------------------------+-----------+----------+\n| CREATE                  | 0         | 0        |\n| DROP                    | 0         | 0        |\n| PUSH                    | 0         | 0        |\n| CLONE                   | 0         | 0        |\n| STORAGE_MEDIUM_MIGRATE  | 0         | 0        |\n| ROLLUP                  | 0         | 0        |\n| SCHEMA_CHANGE           | 0         | 0        |\n| CANCEL_DELETE           | 0         | 0        |\n| MAKE_SNAPSHOT           | 0         | 0        |\n| RELEASE_SNAPSHOT        | 0         | 0        |\n| CHECK_CONSISTENCY       | 0         | 0        |\n| UPLOAD                  | 0         | 0        |\n| DOWNLOAD                | 0         | 0        |\n| CLEAR_REMOTE_FILE       | 0         | 0        |\n| MOVE                    | 0         | 0        |\n| REALTIME_PUSH           | 0         | 0        |\n| PUBLISH_VERSION         | 0         | 0        |\n| CLEAR_ALTER_TASK        | 0         | 0        |\n| CLEAR_TRANSACTION_TASK  | 0         | 0        |\n| RECOVER_TABLET          | 0         | 0        |\n| STREAM_LOAD             | 0         | 0        |\n| UPDATE_TABLET_META_INFO | 0         | 0        |\n| ALTER                   | 0         | 0        |\n| INSTALL_PLUGIN          | 0         | 0        |\n| UNINSTALL_PLUGIN        | 0         | 0        |\n| Total                   | 0         | 0        |\n+-------------------------+-----------+----------+\n26 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u663E\u793A\u6574\u4E2A\u96C6\u7FA4\u7684\u526F\u672C\u72B6\u6001\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> show proc '/cluster_health/tablet_health';\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| DbId     | DbName                    | TabletNum | HealthyNum | ReplicaMissingNum | VersionIncompleteNum | ReplicaRelocatingNum | RedundantNum | ReplicaMissingInClusterNum | ReplicaMissingForTagNum | ForceRedundantNum | ColocateMismatchNum | ColocateRedundantNum | NeedFurtherRepairNum | UnrecoverableNum | ReplicaCompactionTooSlowNum | InconsistentNum | OversizeNum | CloningNum |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| 25852112 | default_cluster:bowen     | 1920      | 1920       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 25342914 | default_cluster:bw        | 128       | 128        | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 2575532  | default_cluster:cps       | 1440      | 1440       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 16          | 0          |\n| 26150325 | default_cluster:db        | 38374     | 38374      | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 453         | 0          |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u770B\u67D0\u4E2A\u6570\u636E\u5E93\u4E0B\u9762\u7684\u526F\u672C\u72B6\u6001\uFF0C\u5982 DbId \u4E3A 25852112 \u7684\u6570\u636E\u5E93\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> show proc '/cluster_health/tablet_health/25852112';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u62A5\u544A\u548C\u8BCA\u65AD\u96C6\u7FA4\u7BA1\u63A7\u95EE\u9898"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'MySQL > show proc "/diagnose";\n+-----------------+----------+------------+\n| Item            | ErrorNum | WarningNum |\n+-----------------+----------+------------+\n| cluster_balance | 2        | 0          |\n| Total           | 2        | 0          |\n+-----------------+----------+------------+\n\n2 rows in set\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u770B\u526F\u672C\u5747\u8861\u8FC1\u79FB\u95EE\u9898"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'MySQL > show proc "/diagnose/cluster_balance";\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n| Item                  | Status | Content                                                                                                     | Detail Cmd                                                          | Suggestion |\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n| Tablet Health         | ERROR  | healthy tablet num 691 < total tablet num 1014                                                              | show 	proc "/cluster_health/tablet_health";                          | <null>     |\n| BeLoad Balance        | ERROR  | backend load not balance for tag {"location" : "default"}, low load backends [], high load backends 	[10009] | show proc "/cluster_balance/cluster_load_stat/location_default/HDD" | <null>     |\n| Disk Balance          | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n| Colocate Group Stable | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n| History Tablet Sched  | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n\n5 rows in set\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"SHOW, PROC \n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);