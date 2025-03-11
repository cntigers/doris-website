"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["501189"],{889275:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>l,assets:()=>t,toc:()=>x,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/EXPORT","title":"EXPORT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/data-modification/load-and-export/EXPORT.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/EXPORT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/EXPORT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPORT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SYNC","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/SYNC"},"next":{"title":"CANCEL EXPORT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT"}}'),r=s("785893"),i=s("250065");let d={title:"EXPORT",language:"zh-CN"},c=void 0,t={},x=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u5E76\u53D1\u6267\u884C",id:"\u5E76\u53D1\u6267\u884C",level:3},{value:"\u5185\u5B58\u9650\u5236",id:"\u5185\u5B58\u9650\u5236",level:3},{value:"\u5176\u4ED6\u4E8B\u9879",id:"\u5176\u4ED6\u4E8B\u9879",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"Export \u6570\u636E\u5230\u672C\u5730",id:"export-\u6570\u636E\u5230\u672C\u5730",level:3},{value:"Export \u5230 S3",id:"export-\u5230-s3",level:3},{value:"export \u5230 HDFS",id:"export-\u5230-hdfs",level:3},{value:"Export \u901A\u8FC7 Broker \u8282\u70B9",id:"export-\u901A\u8FC7-broker-\u8282\u70B9",level:3}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"EXPORT"})," \u547D\u4EE4\u7528\u4E8E\u5C06\u6307\u5B9A\u8868\u7684\u6570\u636E\u5BFC\u51FA\u4E3A\u6587\u4EF6\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002\u76EE\u524D\u652F\u6301\u901A\u8FC7 Broker \u8FDB\u7A0B\uFF0CS3 \u534F\u8BAE\u6216 HDFS \u534F\u8BAE\uFF0C\u5BFC\u51FA\u5230\u8FDC\u7AEF\u5B58\u50A8\uFF0C\u5982 HDFS\uFF0CS3\uFF0CBOS\uFF0CCOS\uFF08\u817E\u8BAF\u4E91\uFF09\u4E0A\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"EXPORT"})," \u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u63D0\u4EA4\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"EXPORT JOB"})," \u5230 Doris\uFF0C\u4EFB\u52A1\u63D0\u4EA4\u6210\u529F\u7ACB\u5373\u8FD4\u56DE\u3002\u6267\u884C\u540E\u53EF\u4F7F\u7528 ",(0,r.jsx)(n.a,{href:"./SHOW-EXPORT",children:"SHOW EXPORT"})," \u547D\u4EE4\u67E5\u770B\u8FDB\u5EA6\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"EXPORT TABLE <table_name>\n[ PARTITION ( <partation_name> [ , ... ] ) ]\n[ <where_clause> ]\nTO <export_path>\n[ <properties> ]\nWITH <target_storage>\n[ <broker_properties> ];\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u524D\u8981\u5BFC\u51FA\u7684\u8868\u7684\u8868\u540D\u3002\u652F\u6301 Doris \u672C\u5730\u8868\u3001\u89C6\u56FE View\u3001Catalog \u5916\u8868\u6570\u636E\u7684\u5BFC\u51FA\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<export_path>"})]})}),"\n",(0,r.jsxs)(n.p,{children:["\u5BFC\u51FA\u7684\u6587\u4EF6\u8DEF\u5F84\u3002\u53EF\u4EE5\u662F\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6587\u4EF6\u76EE\u5F55\u52A0\u6587\u4EF6\u524D\u7F00\uFF0C\u5982",(0,r.jsx)(n.code,{children:"hdfs://path/to/my_file_"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<where_clause>"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u6307\u5B9A\u5BFC\u51FA\u6570\u636E\u7684\u8FC7\u6EE4\u6761\u4EF6\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<partation_name>"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u53EA\u5BFC\u51FA\u6307\u5B9A\u8868\u7684\u67D0\u4E9B\u6307\u5B9A\u5206\u533A\uFF0C\u53EA\u5BF9 Doris \u672C\u5730\u8868\u6709\u6548\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["3. ",(0,r.jsx)(n.code,{children:"<properties>"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u6307\u5B9A\u4E00\u4E9B\u5BFC\u51FA\u53C2\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'[ PROPERTIES ("<key>"="<value>" [, ... ]) ]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u6307\u5B9A\u5982\u4E0B\u53C2\u6570\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"label"}),": \u53EF\u9009\u53C2\u6570\uFF0C\u6307\u5B9A\u6B64\u6B21 Export \u4EFB\u52A1\u7684 Label\uFF0C\u5F53\u4E0D\u6307\u5B9A\u65F6\u7CFB\u7EDF\u4F1A\u968F\u673A\u751F\u6210\u4E00\u4E2A Label\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"column_separator"}),"\uFF1A\u6307\u5B9A\u5BFC\u51FA\u7684\u5217\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"\\t"}),"\uFF0C\u652F\u6301\u591A\u5B57\u8282\u3002\u8BE5\u53C2\u6570\u53EA\u7528\u4E8E CSV \u6587\u4EF6\u683C\u5F0F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"line_delimiter"}),"\uFF1A\u6307\u5B9A\u5BFC\u51FA\u7684\u884C\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"\\n"}),"\uFF0C\u652F\u6301\u591A\u5B57\u8282\u3002\u8BE5\u53C2\u6570\u53EA\u7528\u4E8E CSV \u6587\u4EF6\u683C\u5F0F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"columns"}),"\uFF1A\u6307\u5B9A\u5BFC\u51FA\u8868\u7684\u67D0\u4E9B\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"format"}),"\uFF1A\u6307\u5B9A\u5BFC\u51FA\u4F5C\u4E1A\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u652F\u6301\uFF1Aparquet, orc, csv, csv_with_names\u3001csv_with_names_and_types\u3002\u9ED8\u8BA4\u4E3A CSV \u683C\u5F0F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"max_file_size"}),"\uFF1A\u5BFC\u51FA\u4F5C\u4E1A\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5982\u679C\u7ED3\u679C\u8D85\u8FC7\u8FD9\u4E2A\u503C\uFF0C\u5C06\u5207\u5272\u6210\u591A\u4E2A\u6587\u4EF6\u3002",(0,r.jsx)(n.code,{children:"max_file_size"}),"\u53D6\u503C\u8303\u56F4\u662F[5MB, 2GB], \u9ED8\u8BA4\u4E3A 1GB\u3002\uFF08\u5F53\u6307\u5B9A\u5BFC\u51FA\u4E3A orc \u6587\u4EF6\u683C\u5F0F\u65F6\uFF0C\u5B9E\u9645\u5207\u5206\u6587\u4EF6\u7684\u5927\u5C0F\u5C06\u662F 64MB \u7684\u500D\u6570\uFF0C\u5982\uFF1A\u6307\u5B9A max_file_size = 5MB, \u5B9E\u9645\u5C06\u4EE5 64MB \u4E3A\u5207\u5206\uFF1B\u6307\u5B9A max_file_size = 65MB, \u5B9E\u9645\u5C06\u4EE5 128MB \u4E3A\u5207\u5206\uFF09"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parallelism"}),"\uFF1A\u5BFC\u51FA\u4F5C\u4E1A\u7684\u5E76\u53D1\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A",(0,r.jsx)(n.code,{children:"1"}),"\uFF0C\u5BFC\u51FA\u4F5C\u4E1A\u4F1A\u5F00\u542F",(0,r.jsx)(n.code,{children:"parallelism"}),"\u4E2A\u6570\u7684\u7EBF\u7A0B\u53BB\u6267\u884C",(0,r.jsx)(n.code,{children:"select into outfile"}),"\u8BED\u53E5\u3002\uFF08\u5982\u679C Parallelism \u4E2A\u6570\u5927\u4E8E\u8868\u7684 Tablets \u4E2A\u6570\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u628A Parallelism \u8BBE\u7F6E\u4E3A Tablets \u4E2A\u6570\u5927\u5C0F\uFF0C\u5373\u6BCF\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"select into outfile"}),"\u8BED\u53E5\u8D1F\u8D23\u4E00\u4E2A Tablets\uFF09"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"delete_existing_files"}),": \u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"false"}),"\uFF0C\u82E5\u6307\u5B9A\u4E3A ",(0,r.jsx)(n.code,{children:"true"}),"\uFF0C\u5219\u4F1A\u5148\u5220\u9664",(0,r.jsx)(n.code,{children:"export_path"}),'\u6240\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u7136\u540E\u5BFC\u51FA\u6570\u636E\u5230\u8BE5\u76EE\u5F55\u4E0B\u3002\u4F8B\u5982\uFF1A"export_path" = "/user/tmp", \u5219\u4F1A\u5220\u9664"/user/"\u4E0B\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55\uFF1B"file_path" = "/user/tmp/", \u5219\u4F1A\u5220\u9664"/user/tmp/"\u4E0B\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55\u3002']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"with_bom"}),": \u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"false"}),"\uFF0C\u82E5\u6307\u5B9A\u4E3A ",(0,r.jsx)(n.code,{children:"true"}),"\uFF0C\u5219\u5BFC\u51FA\u7684\u6587\u4EF6\u7F16\u7801\u4E3A\u5E26\u6709 BOM \u7684 UTF8 \u7F16\u7801\uFF08\u53EA\u5BF9 csv \u76F8\u5173\u7684\u6587\u4EF6\u683C\u5F0F\u751F\u6548\uFF09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"data_consistency"}),": \u53EF\u4EE5\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"none"})," / ",(0,r.jsx)(n.code,{children:"partition"})," \uFF0C\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"partition"})," \u3002\u6307\u793A\u4EE5\u4F55\u79CD\u7C92\u5EA6\u5207\u5206\u5BFC\u51FA\u8868\uFF0C",(0,r.jsx)(n.code,{children:"none"})," \u4EE3\u8868 Tablets \u7EA7\u522B\uFF0C",(0,r.jsx)(n.code,{children:"partition"}),"\u4EE3\u8868 Partition \u7EA7\u522B\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"timeout"}),"\uFF1A\u5BFC\u51FA\u4F5C\u4E1A\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 2 \u5C0F\u65F6\uFF0C\u5355\u4F4D\u662F\u79D2\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"compress_type"}),"\uFF1A(\u81EA 2.1.5 \u652F\u6301) \u5F53\u6307\u5B9A\u5BFC\u51FA\u7684\u6587\u4EF6\u683C\u5F0F\u4E3A Parquet / ORC \u6587\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A Parquet / ORC \u6587\u4EF6\u4F7F\u7528\u7684\u538B\u7F29\u65B9\u5F0F\u3002Parquet \u6587\u4EF6\u683C\u5F0F\u53EF\u6307\u5B9A\u538B\u7F29\u65B9\u5F0F\u4E3A SNAPPY\uFF0CGZIP\uFF0CBROTLI\uFF0CZSTD\uFF0CLZ4 \u53CA PLAIN\uFF0C\u9ED8\u8BA4\u503C\u4E3A SNAPPY\u3002ORC \u6587\u4EF6\u683C\u5F0F\u53EF\u6307\u5B9A\u538B\u7F29\u65B9\u5F0F\u4E3A PLAIN\uFF0CSNAPPY\uFF0CZLIB \u4EE5\u53CA ZSTD\uFF0C\u9ED8\u8BA4\u503C\u4E3A ZLIB\u3002\u8BE5\u53C2\u6570\u81EA 2.1.5 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002\uFF08PLAIN \u5C31\u662F\u4E0D\u91C7\u7528\u538B\u7F29\uFF09"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u8981\u4F7F\u7528 delete_existing_files \u53C2\u6570\uFF0C\u8FD8\u9700\u8981\u5728 fe.conf \u4E2D\u6DFB\u52A0\u914D\u7F6E",(0,r.jsx)(n.code,{children:"enable_delete_existing_files = true"}),"\u5E76\u91CD\u542F fe\uFF0C\u6B64\u65F6 delete_existing_files \u624D\u4F1A\u751F\u6548\u3002delete_existing_files = true \u662F\u4E00\u4E2A\u5371\u9669\u7684\u64CD\u4F5C\uFF0C\u5EFA\u8BAE\u53EA\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4F7F\u7528\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["4. ",(0,r.jsx)(n.code,{children:"<target_storage>"})]}),(0,r.jsx)(n.br,{}),"\n\u5B58\u50A8\u4ECB\u8D28\uFF0C\u53EF\u9009 BROKER\u3001S3\u3001HDFS\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["5. ",(0,r.jsx)(n.code,{children:"<broker_properties>"})]}),(0,r.jsx)(n.br,{}),"\n\u6839\u636E ",(0,r.jsx)(n.code,{children:"<target_storage>"})," \u4E0D\u540C\u7684\u5B58\u50A8\u4ECB\u8D28\uFF0C\u9700\u8981\u6307\u5B9A\u4E0D\u540C\u7684\u5C5E\u6027\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BROKER"}),(0,r.jsx)(n.br,{}),"\n\u53EF\u4EE5\u901A\u8FC7 Broker \u8FDB\u7A0B\u5199\u6570\u636E\u5230\u8FDC\u7AEF\u5B58\u50A8\u4E0A\u3002\u8FD9\u91CC\u9700\u8981\u5B9A\u4E49\u76F8\u5173\u7684\u8FDE\u63A5\u4FE1\u606F\u4F9B Broker \u4F7F\u7528\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'WITH BROKER "broker_name"\n("<key>"="<value>" [,...])\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Broker \u76F8\u5173\u5C5E\u6027\uFF1A"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"}),": \u7528\u6237\u540D"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"password"}),": \u5BC6\u7801"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.security.authentication"}),": \u6307\u5B9A\u8BA4\u8BC1\u65B9\u5F0F\u4E3A kerberos"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kerberos_principal"}),": \u6307\u5B9A kerberos \u7684 principal"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kerberos_keytab"}),": \u6307\u5B9A kerberos \u7684 keytab \u6587\u4EF6\u8DEF\u5F84\u3002\u8BE5\u6587\u4EF6\u5FC5\u987B\u4E3A Broker \u8FDB\u7A0B\u6240\u5728\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5E76\u4E14\u53EF\u4EE5\u88AB Broker \u8FDB\u7A0B\u8BBF\u95EE"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HDFS"})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u76F4\u63A5\u5C06\u6570\u636E\u5199\u5230\u8FDC\u7AEF HDFS \u4E0A\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'WITH HDFS ("<key>"="<value>" [,...])\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HDFS \u76F8\u5173\u5C5E\u6027\uFF1A"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fs.defaultFS"}),": namenode \u5730\u5740\u548C\u7AEF\u53E3"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.username"}),": HDFS \u7528\u6237\u540D"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.nameservices"}),": name service \u540D\u79F0\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.ha.namenodes.[nameservice ID]"}),": namenode \u7684 id \u5217\u8868\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.namenode.rpc-address.[nameservice ID].[name node ID]"}),": Name node \u7684 rpc \u5730\u5740\uFF0C\u6570\u91CF\u4E0E namenode \u6570\u91CF\u76F8\u540C\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5BF9\u4E8E\u5F00\u542F kerberos \u8BA4\u8BC1\u7684 Hadoop \u96C6\u7FA4\uFF0C\u8FD8\u9700\u8981\u989D\u5916\u8BBE\u7F6E\u5982\u4E0B PROPERTIES \u5C5E\u6027\uFF1A"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.namenode.kerberos.principal"}),": HDFS namenode \u670D\u52A1\u7684 principal \u540D\u79F0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.security.authentication"}),": \u8BA4\u8BC1\u65B9\u5F0F\u8BBE\u7F6E\u4E3A kerberos"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.kerberos.principal"}),": \u8BBE\u7F6E Doris \u8FDE\u63A5 HDFS \u65F6\u4F7F\u7528\u7684 Kerberos \u4E3B\u4F53"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),": \u8BBE\u7F6E keytab \u672C\u5730\u6587\u4EF6\u8DEF\u5F84"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"S3"})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u76F4\u63A5\u5C06\u6570\u636E\u5199\u5230\u8FDC\u7AEF S3 \u5BF9\u8C61\u5B58\u50A8\u4E0A\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'WITH S3 ("<key>"="<value>" [,...])\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"S3 \u76F8\u5173\u5C5E\u6027\uFF1A"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"s3.endpoint"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"s3.region"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"s3.secret_key"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"s3.access_key"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"use_path_style"}),": (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"false"}),"\u3002S3 SDK \u9ED8\u8BA4\u4F7F\u7528 Virtual-hosted Style \u65B9\u5F0F\u3002\u4F46\u67D0\u4E9B\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF\u53EF\u80FD\u6CA1\u5F00\u542F\u6216\u4E0D\u652F\u6301 Virtual-hosted Style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u53EF\u4EE5\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 Path Style \u8BBF\u95EE\u65B9\u5F0F\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5217\u540D"}),(0,r.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jobId"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"label"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u7684\u6807\u7B7E\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dbId"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"\u6570\u636E\u5E93\u7684\u6807\u8BC6\u7B26\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableId"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"\u8868\u7684\u6807\u8BC6\u7B26\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5F53\u524D\u4F5C\u4E1A\u7684\u72B6\u6001\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u6587\u4EF6\u7684\u8DEF\u5F84\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"partitions"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u7684\u5206\u533A\u540D\u79F0\u5217\u8868\uFF0C\u591A\u4E2A\u5206\u533A\u540D\u79F0\u7528\u9017\u53F7\u5206\u9694\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"progress"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u7684\u5F53\u524D\u8FDB\u5EA6\uFF08\u767E\u5206\u6BD4\uFF09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"createTimeMs"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u4F5C\u4E1A\u521B\u5EFA\u65F6\u95F4\u7684\u6BEB\u79D2\u503C\uFF0C\u683C\u5F0F\u5316\u4E3A\u65E5\u671F\u65F6\u95F4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exportStartTimeMs"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u5F00\u59CB\u65F6\u95F4\u7684\u6BEB\u79D2\u503C\uFF0C\u683C\u5F0F\u5316\u4E3A\u65E5\u671F\u65F6\u95F4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exportFinishTimeMs"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4\u7684\u6BEB\u79D2\u503C\uFF0C\u683C\u5F0F\u5316\u4E3A\u65E5\u671F\u65F6\u95F4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"failMsg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u5BFC\u51FA\u4F5C\u4E1A\u5931\u8D25\u65F6\u7684\u9519\u8BEF\u4FE1\u606F\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6570\u636E\u5E93\u3001\u8868\u7684\u8BFB\u6743\u9650\u3002"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.h3,{id:"\u5E76\u53D1\u6267\u884C",children:"\u5E76\u53D1\u6267\u884C"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E00\u4E2A Export \u4F5C\u4E1A\u53EF\u4EE5\u8BBE\u7F6E",(0,r.jsx)(n.code,{children:"parallelism"}),"\u53C2\u6570\u6765\u5E76\u53D1\u5BFC\u51FA\u6570\u636E\u3002",(0,r.jsx)(n.code,{children:"parallelism"}),"\u53C2\u6570\u5B9E\u9645\u5C31\u662F\u6307\u5B9A\u6267\u884C EXPORT \u4F5C\u4E1A\u7684\u7EBF\u7A0B\u6570\u91CF\u3002\u5F53\u8BBE\u7F6E",(0,r.jsx)(n.code,{children:'"data_consistency" = "none"'}),"\u65F6\uFF0C\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u4F1A\u8D1F\u8D23\u5BFC\u51FA\u8868\u7684\u90E8\u5206 Tablets\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E00\u4E2A Export \u4F5C\u4E1A\u7684\u5E95\u5C42\u6267\u884C\u903B\u8F91\u5B9E\u9645\u4E0A\u662F",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\uFF0C",(0,r.jsx)(n.code,{children:"parallelism"}),"\u53C2\u6570\u8BBE\u7F6E\u7684\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u90FD\u4F1A\u53BB\u6267\u884C\u72EC\u7ACB\u7684",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Export \u4F5C\u4E1A\u62C6\u5206\u6210\u591A\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u7684\u5177\u4F53\u903B\u8F91\u662F\uFF1A\u5C06\u8BE5\u8868\u7684\u6240\u6709 tablets \u5E73\u5747\u7684\u5206\u7ED9\u6240\u6709 parallel \u7EBF\u7A0B\uFF0C\u5982\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"num(tablets) = 40, parallelism = 3\uFF0C\u5219\u8FD9 3 \u4E2A\u7EBF\u7A0B\u5404\u81EA\u8D1F\u8D23\u7684 tablets \u6570\u91CF\u5206\u522B\u4E3A 14\uFF0C13\uFF0C13 \u4E2A\u3002"}),"\n",(0,r.jsx)(n.li,{children:"num(tablets) = 2, parallelism = 3\uFF0C\u5219 Doris \u4F1A\u81EA\u52A8\u5C06 parallelism \u8BBE\u7F6E\u4E3A 2\uFF0C\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u8D1F\u8D23\u4E00\u4E2A tablets\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8D1F\u8D23\u7684 tablest \u8D85\u8FC7 ",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"})," \u6570\u503C\uFF08\u9ED8\u8BA4\u4E3A 10\uFF0C\u53EF\u5728 fe.conf \u4E2D\u6DFB\u52A0",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"}),"\u53C2\u6570\u6765\u4FEE\u6539\u8BE5\u503C\uFF09\u65F6\uFF0C\u8BE5\u7EBF\u7A0B\u5C31\u4F1A\u62C6\u5206\u4E3A\u591A\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\uFF0C\u5982\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4E00\u4E2A\u7EBF\u7A0B\u8D1F\u8D23\u7684 tablets \u6570\u91CF\u5206\u522B\u4E3A 14\uFF0C",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export = 10"}),"\uFF0C\u5219\u8BE5\u7EBF\u7A0B\u8D1F\u8D23\u4E24\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\uFF0C\u7B2C\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\u5BFC\u51FA 10 \u4E2A tablets\uFF0C\u7B2C\u4E8C\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\u5BFC\u51FA 4 \u4E2A tablets\uFF0C\u4E24\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\u7531\u8BE5\u7EBF\u7A0B\u4E32\u884C\u6267\u884C\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u6240\u8981\u5BFC\u51FA\u7684\u6570\u636E\u91CF\u5F88\u5927\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u9002\u5F53\u8C03\u5927",(0,r.jsx)(n.code,{children:"parallelism"}),"\u53C2\u6570\u6765\u589E\u52A0\u5E76\u53D1\u5BFC\u51FA\u3002\u82E5\u673A\u5668\u6838\u6570\u7D27\u5F20\uFF0C\u65E0\u6CD5\u518D\u589E\u52A0",(0,r.jsx)(n.code,{children:"parallelism"})," \u800C\u5BFC\u51FA\u8868\u7684 Tablets \u53C8\u8F83\u591A\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u8C03\u5927",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"}),"\u6765\u589E\u52A0\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"}),"\u8BED\u53E5\u8D1F\u8D23\u7684 tablets \u6570\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u5FEB\u5BFC\u51FA\u901F\u5EA6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u82E5\u5E0C\u671B\u4EE5 Parition \u7C92\u5EA6\u5BFC\u51FA Table\uFF0C\u53EF\u4EE5\u8BBE\u7F6E Export \u5C5E\u6027 ",(0,r.jsx)(n.code,{children:'"data_consistency" = "partition"'})," \uFF0C\u6B64\u65F6 Export \u4EFB\u52A1\u5E76\u53D1\u7684\u7EBF\u7A0B\u4F1A\u4EE5 Parition \u7C92\u5EA6\u6765\u5212\u5206\u4E3A\u591A\u4E2A Outfile \u8BED\u53E5\uFF0C\u4E0D\u540C\u7684 Outfile \u8BED\u53E5\u5BFC\u51FA\u7684 Parition \u4E0D\u540C\uFF0C\u800C\u540C\u4E00\u4E2A Outfile \u8BED\u53E5\u5BFC\u51FA\u7684\u6570\u636E\u4E00\u5B9A\u5C5E\u4E8E\u540C\u4E00\u4E2A Partition\u3002\u5982\uFF1A\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:'"data_consistency" = "partition"'})," \u540E"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"num(partition) = 40, parallelism = 3\uFF0C\u5219\u8FD9 3 \u4E2A\u7EBF\u7A0B\u5404\u81EA\u8D1F\u8D23\u7684 Partition \u6570\u91CF\u5206\u522B\u4E3A 14\uFF0C13\uFF0C13 \u4E2A\u3002"}),"\n",(0,r.jsx)(n.li,{children:"num(partition) = 2, parallelism = 3\uFF0C\u5219 Doris \u4F1A\u81EA\u52A8\u5C06 Parallelism \u8BBE\u7F6E\u4E3A 2\uFF0C\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u8D1F\u8D23\u4E00\u4E2A Partition\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u5B58\u9650\u5236",children:"\u5185\u5B58\u9650\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u5E38\u4E00\u4E2A Export \u4F5C\u4E1A\u7684\u67E5\u8BE2\u8BA1\u5212\u53EA\u6709 ",(0,r.jsx)(n.code,{children:"\u626B\u63CF-\u5BFC\u51FA"})," \u4E24\u90E8\u5206\uFF0C\u4E0D\u6D89\u53CA\u9700\u8981\u592A\u591A\u5185\u5B58\u7684\u8BA1\u7B97\u903B\u8F91\u3002\u6240\u4EE5\u901A\u5E38 2GB \u7684\u9ED8\u8BA4\u5185\u5B58\u9650\u5236\u53EF\u4EE5\u6EE1\u8DB3\u9700\u6C42\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F46\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6BD4\u5982\u4E00\u4E2A\u67E5\u8BE2\u8BA1\u5212\uFF0C\u5728\u540C\u4E00\u4E2A BE \u4E0A\u9700\u8981\u626B\u63CF\u7684 Tablet \u8FC7\u591A\uFF0C\u6216\u8005 Tablet \u7684\u6570\u636E\u7248\u672C\u8FC7\u591A\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u4E0D\u8DB3\u3002\u53EF\u4EE5\u8C03\u6574 Session \u53D8\u91CF ",(0,r.jsx)(n.code,{children:"exec_mem_limit"})," \u6765\u8C03\u5927\u5185\u5B58\u4F7F\u7528\u9650\u5236\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5176\u4ED6\u4E8B\u9879",children:"\u5176\u4ED6\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4E0D\u5EFA\u8BAE\u4E00\u6B21\u6027\u5BFC\u51FA\u5927\u91CF\u6570\u636E\u3002\u4E00\u4E2A Export \u4F5C\u4E1A\u5EFA\u8BAE\u7684\u5BFC\u51FA\u6570\u636E\u91CF\u6700\u5927\u5728\u51E0\u5341 GB\u3002\u8FC7\u5927\u7684\u5BFC\u51FA\u4F1A\u5BFC\u81F4\u66F4\u591A\u7684\u5783\u573E\u6587\u4EF6\u548C\u66F4\u9AD8\u7684\u91CD\u8BD5\u6210\u672C\u3002\u5982\u679C\u8868\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5EFA\u8BAE\u6309\u7167\u5206\u533A\u5BFC\u51FA\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679C Export \u4F5C\u4E1A\u8FD0\u884C\u5931\u8D25\uFF0C\u5DF2\u7ECF\u751F\u6210\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u5220\u9664\uFF0C\u9700\u8981\u7528\u6237\u624B\u52A8\u5220\u9664\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Export \u4F5C\u4E1A\u4F1A\u626B\u63CF\u6570\u636E\uFF0C\u5360\u7528 IO \u8D44\u6E90\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u7684\u67E5\u8BE2\u5EF6\u8FDF\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u76EE\u524D\u5728 Export \u65F6\u53EA\u662F\u7B80\u5355\u68C0\u67E5 Tablets \u7248\u672C\u662F\u5426\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u5728\u6267\u884C Export \u8FC7\u7A0B\u4E2D\u4E0D\u8981\u5BF9\u8BE5\u8868\u8FDB\u884C\u5BFC\u5165\u6570\u636E\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4E00\u4E2A Export Job \u5141\u8BB8\u5BFC\u51FA\u7684\u5206\u533A\u6570\u91CF\u6700\u5927\u4E3A 2000\uFF0C\u53EF\u4EE5\u5728 ",(0,r.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u6DFB\u52A0\u53C2\u6570 ",(0,r.jsx)(n.code,{children:"maximum_number_of_export_partitions"})," \u5E76\u91CD\u542F FE \u6765\u4FEE\u6539\u8BE5\u8BBE\u7F6E\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"export-\u6570\u636E\u5230\u672C\u5730",children:"Export \u6570\u636E\u5230\u672C\u5730"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Export \u6570\u636E\u5230\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"enable_outfile_to_local=true"})," \u5E76\u4E14\u91CD\u542F FE\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230\u672C\u5730\u5B58\u50A8\uFF0C\u9ED8\u8BA4\u5BFC\u51FA CSV \u683C\u5F0F\u6587\u4EF6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/";\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684 k1,k2 \u5217\u5BFC\u51FA\u5230\u672C\u5730\u5B58\u50A8\uFF0C\u9ED8\u8BA4\u5BFC\u51FA CSV \u6587\u4EF6\u683C\u5F0F\uFF0C\u5E76\u8BBE\u7F6E Label"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "label" = "label1",\n  "columns" = "k1,k2"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5C06 Test \u8868\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"k1 < 50"})," \u7684\u884C\u5BFC\u51FA\u5230\u672C\u5730\u5B58\u50A8\uFF0C\u9ED8\u8BA4\u5BFC\u51FA CSV \u683C\u5F0F\u6587\u4EF6\uFF0C\u5E76\u4EE5 ",(0,r.jsx)(n.code,{children:","})," \u4F5C\u4E3A\u5217\u5206\u5272\u7B26"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test WHERE k1 < 50 TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "column_separator"=","\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684\u5206\u533A p1,p2 \u5BFC\u51FA\u5230\u672C\u5730\u5B58\u50A8\uFF0C\u9ED8\u8BA4\u5BFC\u51FA csv \u683C\u5F0F\u6587\u4EF6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test PARTITION (p1,p2) TO "file:///home/user/tmp/" \nPROPERTIES ("columns" = "k1,k2");\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230\u672C\u5730\u5B58\u50A8\uFF0C\u5BFC\u51FA\u5176\u4ED6\u683C\u5F0F\u7684\u6587\u4EF6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- parquet\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "parquet"\n);\n\n-- orc\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "orc"\n);\n\n-- csv(csv_with_names) , Use \'AA\' as the column separator and \'zz\' as the row separator\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names",\n  "column_separator"="AA",\n  "line_delimiter" = "zz"\n);\n\n-- csv(csv_with_names_and_types) \nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names_and_types"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"max_file_sizes"})," \u5C5E\u6027",(0,r.jsx)(n.br,{}),"\n\u5F53\u5BFC\u51FA\u6587\u4EF6\u5927\u4E8E 5MB \u65F6\uFF0C\u5C06\u5207\u5272\u6570\u636E\u4E3A\u591A\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u6700\u5927\u4E3A 5MB\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- When the exported file is larger than 5MB, the data will be split into multiple files, with each file having a maximum size of 5MB.\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"parallelism"})," \u5C5E\u6027"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "parallelism" = "5"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"delete_existing_files"})," \u5C5E\u6027",(0,r.jsx)(n.br,{}),"\nExport \u5BFC\u51FA\u6570\u636E\u65F6\u4F1A\u5148\u5C06",(0,r.jsx)(n.code,{children:"/home/user/"}),"\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55\u5220\u9664\uFF0C\u7136\u540E\u5BFC\u51FA\u6570\u636E\u5230\u8BE5\u76EE\u5F55\u4E0B\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- When exporting data, all files and directories under the `/home/user/` directory will be deleted first, and then the data will be exported to this directory.\nEXPORT TABLE test TO "file:///home/user/tmp"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "delete_existing_files" = "true"\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"export-\u5230-s3",children:"Export \u5230 S3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5C06 s3_test \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230 S3 \u4E0A\uFF0C\u4EE5\u4E0D\u53EF\u89C1\u5B57\u7B26 ",(0,r.jsx)(n.code,{children:"\\x07"})," \u4F5C\u4E3A\u5217\u6216\u8005\u884C\u5206\u9694\u7B26\u3002\u5982\u679C\u9700\u8981\u5C06\u6570\u636E\u5BFC\u51FA\u5230 minio\uFF0C\u8FD8\u9700\u8981\u6307\u5B9A ",(0,r.jsx)(n.code,{children:"use_path_style"}),"=",(0,r.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE s3_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH S3 (\n  "s3.endpoint" = "xxxxx",\n  "s3.region" = "xxxxx",\n  "s3.secret_key"="xxxx",\n  "s3.access_key" = "xxxxx"\n)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"export-\u5230-hdfs",children:"export \u5230 HDFS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230 HDFS \u4E0A\uFF0C\u5BFC\u51FA\u6587\u4EF6\u683C\u5F0F\u4E3A Parquet\uFF0C\u5BFC\u51FA\u4F5C\u4E1A\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u9650\u5236\u4E3A 512MB\uFF0C\u4FDD\u7559\u6240\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c/" \nPROPERTIES(\n    "format" = "parquet",\n    "max_file_size" = "512MB",\n    "delete_existing_files" = "false"\n)\nwith HDFS (\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"export-\u901A\u8FC7-broker-\u8282\u70B9",children:"Export \u901A\u8FC7 Broker \u8282\u70B9"}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u5148\u542F\u52A8 Broker \u8FDB\u7A0B\uFF0C\u5E76\u5728 FE \u4E2D\u6DFB\u52A0\u8BE5 Broker\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C06 Test \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230 HDFS \u4E0A"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'\u5C06 testTbl \u8868\u4E2D\u7684\u5206\u533A p1,p2 \u5BFC\u51FA\u5230 HDFS \u4E0A\uFF0C\u4EE5","\u4F5C\u4E3A\u5217\u5206\u9694\u7B26\uFF0C\u5E76\u6307\u5B9A Label'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "label" = "mylabel",\n  "column_separator"=","\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5C06 testTbl \u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5BFC\u51FA\u5230 HDFS \u4E0A\uFF0C\u4EE5\u4E0D\u53EF\u89C1\u5B57\u7B26 ",(0,r.jsx)(n.code,{children:"\\x07"})," \u4F5C\u4E3A\u5217\u6216\u8005\u884C\u5206\u9694\u7B26\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var l=s(667294);let r={},i=l.createContext(r);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);