"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["939724"],{70659:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","title":"CREATE ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE ASYNC MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL MATERIALIZED VIEW TASK","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/CANCEL-MATERIALIZED-VIEW-TASK"},"next":{"title":"PAUSE MATERIALIZED VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/PAUSE-MATERIALIZED-VIEW-JOB"}}'),r=t("785893"),s=t("250065");let i={title:"CREATE ASYNC MATERIALIZED VIEW",language:"zh-CN"},d=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function a(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",query:"query",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u8BED\u53E5\uFF0C\u5217\u540D\u548C\u5217\u7C7B\u578B\u662F\u901A\u8FC7\u7269\u5316\u89C6\u56FE SQL \u8BED\u53E5\u63A8\u5BFC\u51FA\u6765\u7684\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5217\u540D\uFF0C\u4E0D\u53EF\u4EE5\u5B9A\u4E49\u5217\u7C7B\u578B\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW \n[ IF NOT EXISTS ] <materialized_view_name>\n    [ (<columns_definition>) ] \n    [ BUILD <build_mode> ]\n    [ REFRESH <refresh_method> [<refresh_trigger>]]\n    [ [DUPLICATE] KEY (<key_cols>) ]\n    [ COMMENT '<table_comment>' ]\n    [ PARTITION BY (\n        { <partition_col> \n            | DATE_TRUNC(<partition_col>, <partition_unit>) }\n        )]\n    [ DISTRIBUTED BY { HASH (<distribute_cols>) | RANDOM }\n        [ BUCKETS { <bucket_count> | AUTO } ]\n    ]               \n    [ PROPERTIES (\n          -- Table property\n          <table_property>\n          -- Additional table properties\n          [ , ... ]) \n    ]\n    AS <query>\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"columns_definition\n  : -- Column definition\n    <col_name> \n      [ COMMENT '<col_comment>' ]\nrefresh_trigger\n  : ON MANUAL\n  | ON SCHEDULE EVERY <int_value> <refresh_unit> [ STARTS '<start_time>']\n  | ON COMMIT\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["1. ",(0,r.jsx)(e.code,{children:"<materialized_view_name>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u8868\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF1B\u5728\u521B\u5EFA\u8868\u7684\u6570\u636E\u5E93\uFF08Database\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,r.jsx)(e.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["2. ",(0,r.jsx)(e.code,{children:"<query>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u521B\u5EFA\u7269\u5316\u89C6\u56FE \u4E2D\u4E3A\u5FC5\u9009\u53C2\u6570\u3002\u6307\u5B9A\u586B\u5145\u6570\u636E\u7684 SELECT \u8BED\u53E5\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["1. ",(0,r.jsx)(e.code,{children:"<key_cols>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u7684 key \u5217\u3002Doris \u4E2D Key \u5217\u5FC5\u987B\u662F\u8868\u7684\u524D K \u4E2A\u5217\u3002\u5173\u4E8E Key \u7684\u9650\u5236\uFF0C\u4EE5\u53CA\u5982\u4F55\u9009\u62E9 Key \u5217\uFF0C\u8BF7\u53C2\u9605\u201C\u6570\u636E\u6A21\u578B\u201D\u7AE0\u8282\u4E2D\u7684\u5404\u4E2A\u5C0F\u8282\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["2. ",(0,r.jsx)(e.code,{children:"<build_mode>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5237\u65B0\u65F6\u673A\uFF1A\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u5237\u65B0"}),"\n",(0,r.jsx)(e.p,{children:"IMMEDIATE\uFF1A\u7ACB\u5373\u5237\u65B0\uFF0C\u9ED8\u8BA4 IMMEDIATE"}),"\n",(0,r.jsx)(e.p,{children:"DEFERRED\uFF1A\u5EF6\u8FDF\u5237\u65B0"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["3. ",(0,r.jsx)(e.code,{children:"<refresh_method>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5237\u65B0\u65B9\u5F0F"}),"\n",(0,r.jsx)(e.p,{children:"COMPLETE\uFF1A\u5237\u65B0\u6240\u6709\u5206\u533A"}),"\n",(0,r.jsx)(e.p,{children:"AUTO\uFF1A\u5C3D\u91CF\u589E\u91CF\u5237\u65B0\uFF0C\u53EA\u5237\u65B0\u81EA\u4E0A\u6B21\u7269\u5316\u5237\u65B0\u540E\u6570\u636E\u53D8\u5316\u7684\u5206\u533A\uFF0C\u5982\u679C\u4E0D\u80FD\u589E\u91CF\u5237\u65B0\uFF0C\u5C31\u5237\u65B0\u6240\u6709\u5206\u533A"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["4.",(0,r.jsx)(e.code,{children:" <refresh_trigger>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u89E6\u53D1\u65B9\u5F0F"}),"\n",(0,r.jsx)(e.p,{children:"MANUAL\uFF1A\u624B\u52A8\u5237\u65B0"}),"\n",(0,r.jsx)(e.p,{children:"ON SCHEDULE\uFF1A\u5B9A\u65F6\u5237\u65B0"}),"\n",(0,r.jsx)(e.p,{children:"ON COMMIT\uFF1A\u89E6\u53D1\u5F0F\u5237\u65B0\uFF0C\u57FA\u8868\u6570\u636E\u53D8\u66F4\uFF0C\u89E6\u53D1\u7269\u5316\u89C6\u56FE\u5237\u65B0"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["5. ",(0,r.jsx)(e.code,{children:"<refresh_unit>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5468\u671F\u5237\u65B0\u65F6\u95F4\u5355\u4F4D\uFF0C\u76EE\u524D\u652F\u6301 MINUTE\uFF0CHOUR\uFF0CDAY\uFF0CWEEK"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["6. ",(0,r.jsx)(e.code,{children:"<partition_col>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A PARTITION BY\uFF0C\u9ED8\u8BA4\u53EA\u6709\u4E00\u4E2A\u5206\u533A\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u6307\u5B9A\u5206\u533A\u5B57\u6BB5\uFF0C\u4F1A\u81EA\u52A8\u63A8\u5BFC\u51FA\u5B57\u6BB5\u6765\u81EA\u54EA\u4E2A\u57FA\u8868\u5E76\u540C\u6B65\u57FA\u8868\uFF08\u5F53\u524D\u652F\u6301\u5185\u8868\u548C Hive \u8868\uFF09\uFF0C\u5982\u679C\u662F\u5185\u8868\uFF0C\u53EA\u5141\u8BB8\u6709\u4E00\u4E2A\u5206\u533A\u5B57\u6BB5\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u7269\u5316\u89C6\u56FE\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5206\u533A\u4E0A\u5377\u7684\u65B9\u5F0F\u51CF\u5C11\u7269\u5316\u89C6\u56FE\u7684\u5206\u533A\u6570\u91CF\uFF0C\u76EE\u524D\u5206\u533A\u4E0A\u5377\u51FD\u6570\u652F\u6301 ",(0,r.jsx)(e.code,{children:"date_trunc"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["7. ",(0,r.jsx)(e.code,{children:"<partition_unit>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5206\u533A\u4E0A\u5377\u7684\u805A\u5408\u7C92\u5EA6\uFF0C\u76EE\u524D\u652F\u6301 HOUR\uFF0CDAY\uFF0CWEEK\uFF0CQUARTER\uFF0CMONTH\uFF0CYEAR"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["8. ",(0,r.jsx)(e.code,{children:"<start_time>"})]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8C03\u5EA6\u5F00\u59CB\u65F6\u95F4\u9700\u8981\u6BD4\u5F53\u524D\u65F6\u95F4\u5927\uFF0C\u9700\u8981\u662F\u672A\u6765\u7684\u67D0\u4E2A\u65F6\u95F4"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["9. ",(0,r.jsx)(e.code,{children:"<table_property>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u5185\u8868\u4F7F\u7528\u7684\u5C5E\u6027\uFF0C\u7269\u5316\u89C6\u56FE\u57FA\u672C\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u8FD8\u6709\u4E00\u4E9B\u662F\u7269\u5316\u89C6\u56FE\u7279\u6709\u7684\u5C5E\u6027\uFF0C\u5217\u4E3E\u5982\u4E0B"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u5C5E\u6027\u540D"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u4F5C\u7528"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"grace_period"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u67E5\u8BE2\u6539\u5199\u65F6\u5141\u8BB8\u7269\u5316\u89C6\u56FE\u6570\u636E\u7684\u6700\u5927\u5EF6\u8FDF\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\u3002\u5982\u679C\u5206\u533A A \u548C\u57FA\u8868\u7684\u6570\u636E\u4E0D\u4E00\u81F4\uFF0C\u7269\u5316\u89C6\u56FE\u7684\u5206\u533A A \u4E0A\u6B21\u5237\u65B0\u65F6\u95F4\u4E3A 10:15:00\uFF0C\u7CFB\u7EDF\u5F53\u524D\u65F6\u95F4\u4E3A  10:15:08\uFF0C\u90A3\u4E48\u8BE5\u5206\u533A\u4E0D\u4F1A\u88AB\u900F\u660E\u6539\u5199\u3002\u4F46\u662F\u5982\u679C ",(0,r.jsx)(e.code,{children:"grace_period"}),"  = 10\uFF0C\u8BE5\u5206\u533A\u5C31\u4F1A\u88AB\u7528\u4E8E\u900F\u660E\u6539\u5199"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"excluded_trigger_tables"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u6570\u636E\u5237\u65B0\u65F6\u5FFD\u7565\u7684\u8868\u540D\uFF0C\u9017\u53F7\u5206\u5272\u3002\u4F8B\u5982",(0,r.jsx)(e.code,{children:"table1,table2"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"refresh_partition_num"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5355\u6B21 insert \u8BED\u53E5\u5237\u65B0\u7684\u5206\u533A\u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002\u7269\u5316\u89C6\u56FE\u5237\u65B0\u65F6\u4F1A\u5148\u8BA1\u7B97\u8981\u5237\u65B0\u7684\u5206\u533A\u5217\u8868\uFF0C\u7136\u540E\u6839\u636E\u8BE5\u914D\u7F6E\u62C6\u5206\u6210\u591A\u4E2A Insert \u8BED\u53E5\u987A\u5E8F\u6267\u884C\u3002\u9047\u5230\u5931\u8D25\u7684 Insert \u8BED\u53E5\uFF0C\u6574\u4E2A\u4EFB\u52A1\u5C06\u505C\u6B62\u6267\u884C\u3002\u7269\u5316\u89C6\u56FE\u4FDD\u8BC1\u5355\u4E2A Insert \u8BED\u53E5\u7684\u4E8B\u52A1\u6027\uFF0C\u5931\u8D25\u7684 Insert \u8BED\u53E5\u4E0D\u4F1A\u5F71\u54CD\u5230\u5DF2\u7ECF\u5237\u65B0\u6210\u529F\u7684\u5206\u533A"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"workload_group"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u7269\u5316\u89C6\u56FE\u6267\u884C\u5237\u65B0\u4EFB\u52A1\u65F6\u4F7F\u7528\u7684 ",(0,r.jsx)(e.code,{children:"workload_group"})," \u540D\u79F0\u3002\u7528\u6765\u9650\u5236\u7269\u5316\u89C6\u56FE\u5237\u65B0\u6570\u636E\u4F7F\u7528\u7684\u8D44\u6E90\uFF0C\u907F\u514D\u5F71\u54CD\u5230\u5176\u5B83\u4E1A\u52A1\u7684\u8FD0\u884C\u3002\u5173\u4E8E ",(0,r.jsx)(e.code,{children:"workload_group"})," \u7684\u521B\u5EFA\u53CA\u4F7F\u7528\uFF0C\u53EF\u53C2\u8003 ",(0,r.jsx)(e.a,{href:"https://doris.apache.org/zh-CN/docs/admin-manual/workload-group.md",children:"WORKLOAD-GROUP"})," \u6587\u6863\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"partition_sync_limit"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u5F53\u57FA\u8868\u7684\u5206\u533A\u5B57\u6BB5\u4E3A\u65F6\u95F4\u65F6\uFF0C\u53EF\u4EE5\u7528\u6B64\u5C5E\u6027\u914D\u7F6E\u540C\u6B65\u57FA\u8868\u7684\u5206\u533A\u8303\u56F4\uFF0C\u914D\u5408 ",(0,r.jsx)(e.code,{children:"partition_sync_time_unit"})," \u4E00\u8D77\u4F7F\u7528\u3002\u4F8B\u5982\u8BBE\u7F6E\u4E3A 2\uFF0C",(0,r.jsx)(e.code,{children:"partition_sync_time_unit"})," \u8BBE\u7F6E\u4E3A ",(0,r.jsx)(e.code,{children:"MONTH"}),"\uFF0C\u4EE3\u8868\u4EC5\u540C\u6B65\u57FA\u8868\u8FD1 2 \u4E2A\u6708\u7684\u5206\u533A\u548C\u6570\u636E\u3002\u6700\u5C0F\u503C\u4E3A ",(0,r.jsx)(e.code,{children:"1"}),"\u3002\u968F\u7740\u65F6\u95F4\u7684\u53D8\u5316\u7269\u5316\u89C6\u56FE\u6BCF\u6B21\u5237\u65B0\u65F6\u90FD\u4F1A\u81EA\u52A8\u589E\u5220\u5206\u533A\uFF0C\u4F8B\u5982\u7269\u5316\u89C6\u56FE\u73B0\u5728\u6709 2,3 \u4E24\u4E2A\u6708\u7684\u6570\u636E\uFF0C\u4E0B\u4E2A\u6708\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u5220\u9664 2 \u6708\u7684\u6570\u636E\uFF0C\u589E\u52A0 4 \u6708\u7684\u6570\u636E\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"partition_sync_time_unit"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5206\u533A\u5237\u65B0\u7684\u65F6\u95F4\u5355\u4F4D\uFF0C\u652F\u6301 DAY/MONTH/YEAR\uFF08\u9ED8\u8BA4DAY\uFF09"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"partition_date_format"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u5F53\u57FA\u8868\u7684\u5206\u533A\u5B57\u6BB5\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5982\u679C\u60F3\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"partition_sync_limit"}),"\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u65E5\u671F\u7684\u683C\u5F0F\uFF0C\u5C06\u6309\u7167 ",(0,r.jsx)(e.code,{children:"partition_date_format"}),"\u7684\u8BBE\u7F6E\u89E3\u6790\u5206\u533A\u65F6\u95F4"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"enable_nondeterministic_function"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL \u662F\u5426\u5141\u8BB8\u5305\u542B nondeterministic \u51FD\u6570\uFF0C\u6BD4\u5982 current_date(), now(), random() \u7B49\uFF0C\u5982\u679C \u662F true, \u5141\u8BB8\u5305\u542B\uFF0C\u5426\u5219\u4E0D\u5141\u8BB8\u5305\u542B\uFF0C\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u5305\u542B\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"use_for_rewrite"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u6807\u8BC6\u6B64\u7269\u5316\u89C6\u56FE\u662F\u5426\u53C2\u4E0E\u5230\u900F\u660E\u6539\u5199\u4E2D\uFF0C\u5982\u679C\u4E3A false\uFF0C\u4E0D\u53C2\u4E0E\u5230\u900F\u660E\u6539\u5199\uFF0C\u9ED8\u8BA4\u662F true\u3002\u6570\u636E\u5EFA\u6A21\u573A\u666F\u4E2D\uFF0C\u5982\u679C\u7269\u5316\u89C6\u56FE\u53EA\u662F\u7528\u4E8E\u76F4\u67E5\uFF0C\u7269\u5316\u89C6\u56FE\u53EF\u4EE5\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u4ECE\u800C\u4E0D\u53C2\u4E0E\u900F\u660E\u6539\u5199\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u54CD\u5E94\u901F\u5EA6\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"CREATE_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u6570\u636E\u5E93"}),(0,r.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u8868 , \u89C6\u56FE"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["\u9700\u8981\u62E5\u6709",(0,r.jsx)(e.query,{children:" \u4E2D\u88AB\u67E5\u8BE2\u7684\u8868\u6216\u8005\u89C6\u56FE\u7684 SELECT_PRIV \u6743\u9650"})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7269\u5316\u89C6\u56FE  DML, DDL \u9650\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u7269\u5316\u89C6\u56FE\u4E0D\u652F\u6301\u4FEE\u6539\u5217\u7C7B\u578B\uFF0C\u65B0\u589E\uFF0C\u5220\u9664\u5217\u7B49 schema change \u64CD\u4F5C\uFF0C\u539F\u56E0\u662F\u5217\u662F\u901A\u8FC7\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL \u63A8\u5BFC\u51FA\u6765\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7269\u5316\u89C6\u56FE\u4E0D\u652F\u6301\u624B\u52A8 insert into \u6216\u8005 insert overwrite \u6570\u636E\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5206\u533A\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u6761\u4EF6"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u7269\u5316\u89C6\u56FE\u7684 SQL \u5B9A\u4E49\u548C\u5206\u533A\u5B57\u6BB5\u9700\u8981\u6EE1\u8DB3\u5982\u4E0B\u6761\u4EF6\uFF0C\u624D\u53EF\u4EE5\u8FDB\u884C\u5206\u533A\u589E\u91CF\u66F4\u65B0\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u4F7F\u7528\u7684 Base Table \u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u662F\u5206\u533A\u8868\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u4F7F\u7528\u7684 Base Table \u5206\u533A\u8868\uFF0C\u5FC5\u987B\u4F7F\u7528 List \u6216\u8005 Range \u5206\u533A\u7B56\u7565\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL \u4E2D Partition By \u5206\u533A\u5217\u53EA\u80FD\u6709\u4E00\u4E2A\u5206\u533A\u5B57\u6BB5\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u7684 SQL \u4E2D Partition By \u7684\u5206\u533A\u5217\uFF0C\u8981\u5728 Select \u540E\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL\uFF0C\u5982\u679C\u4F7F\u7528\u4E86 Group By\uFF0C\u5206\u533A\u5217\u7684\u5B57\u6BB5\u4E00\u5B9A\u8981\u5728 Group By \u540E\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL\uFF0C\u5982\u679C\u4F7F\u7528\u4E86 Window \u51FD\u6570\uFF0C\u5206\u533A\u5217\u7684\u5B57\u6BB5\u4E00\u5B9A\u8981\u5728 Partition By \u540E\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6570\u636E\u53D8\u66F4\u5E94\u53D1\u751F\u5728\u5206\u533A\u8868\u4E0A\uFF0C\u5982\u679C\u53D1\u751F\u5728\u975E\u5206\u533A\u8868\uFF0C\u7269\u5316\u89C6\u56FE\u9700\u8981\u5168\u91CF\u6784\u5EFA\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u5316\u89C6\u56FE\u4F7F\u7528 Join \u7684 NULL \u4EA7\u751F\u7AEF\u7684\u5B57\u6BB5\u4F5C\u4E3A\u5206\u533A\u5B57\u6BB5\uFF0C\u4E0D\u80FD\u5206\u533A\u589E\u91CF\u66F4\u65B0\uFF0C\u4F8B\u5982\u5BF9\u4E8E LEFT OUTER JOIN \u5206\u533A\u5B57\u6BB5\u9700\u8981\u5728\u5DE6\u4FA7\uFF0C\u5728\u53F3\u4FA7\u5219\u4E0D\u884C\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5168\u91CF\u7269\u5316\u89C6\u56FE"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW complete_mv (\norderdate COMMENT '\u8BA2\u5355\u65E5\u671F', \norderkey COMMENT '\u8BA2\u5355\u952E', \npartkey COMMENT '\u90E8\u4EF6\u952E'\n) \nBUILD IMMEDIATE \nREFRESH AUTO \nON SCHEDULE EVERY 1 DAY STARTS '2024-12-01 20:30:00' \nDISTRIBUTED BY HASH (orderkey) BUCKETS 2 \nPROPERTIES \n(\"replication_num\" = \"1\") \nAS \nSELECT \no_orderdate, \nl_orderkey, \nl_partkey \nFROM \norders \nLEFT JOIN lineitem ON l_orderkey = o_orderkey \nLEFT JOIN partsupp ON ps_partkey = l_partkey \nand l_suppkey = ps_suppkey;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5206\u533A\u7269\u5316\u89C6\u56FE"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u4E0B\u6240\u793A\uFF0C\u5982\u679C\u6307\u5B9A\u5206\u533A\u5B57\u6BB5\uFF0C\u4F1A\u81EA\u52A8\u63A8\u5BFC\u51FA\u5B57\u6BB5\u6765\u81EA\u54EA\u4E2A\u57FA\u8868\u5E76\u540C\u6B65\u57FA\u8868\u5206\u533A\u3002\u57FA\u8868\u6309\u7167\u5929\u5206\u533A\uFF0C\u5206\u533A\u5B57\u6BB5\u662F o_orderdate\uFF0C\u5206\u533A\u7C7B\u578B\u662F RANGE\u3002\u7269\u5316\u89C6\u56FE\u6309\u6708\u5206\u533A\uFF0C\u4F7F\u7528 DATE_TRUNC \u51FD\u6570\u5BF9\u57FA\u8868\u5206\u533A\u6309\u6708\u8FDB\u884C\u4E0A\u5377\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS orders  (\no_orderkey       integer not null,\no_custkey        integer not null,\no_orderstatus    char(1) not null,\no_totalprice     decimalv3(15,2) not null,\no_orderdate      date not null,\no_orderpriority  char(15) not null,  \no_clerk          char(15) not null, \no_shippriority   integer not null,\no_comment        varchar(79) not null\n)\nDUPLICATE KEY(o_orderkey, o_custkey)\nPARTITION BY RANGE(o_orderdate)(\nFROM ('2023-10-16') TO ('2023-11-30') INTERVAL 1 DAY\n)\nDISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\nPROPERTIES (\n\"replication_num\" = \"1\"\n);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW partition_mv\nBUILD IMMEDIATE \nREFRESH AUTO \nON SCHEDULE EVERY 1 DAY STARTS '2024-12-01 20:30:00' \nPARTITION BY (DATE_TRUNC(o_orderdate, 'MONTH'))\nDISTRIBUTED BY HASH (l_orderkey) BUCKETS 2 \nPROPERTIES \n(\"replication_num\" = \"1\") \nAS \nSELECT \no_orderdate, \nl_orderkey, \nl_partkey \nFROM \norders \nLEFT JOIN lineitem ON l_orderkey = o_orderkey \nLEFT JOIN partsupp ON ps_partkey = l_partkey \nand l_suppkey = ps_suppkey;\n"})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return i}});var l=t(667294);let r={},s=l.createContext(r);function i(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);