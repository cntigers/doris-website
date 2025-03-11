"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["23686"],{922354:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","title":"OUTFILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"OUTFILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW EXPORT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT"},"next":{"title":"CLEAN LABEL","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL"}}'),l=s("785893"),i=s("250065");let d={title:"OUTFILE",language:"zh-CN"},c=void 0,t={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u6570\u636E\u7C7B\u578B\u6620\u5C04",id:"\u6570\u636E\u7C7B\u578B\u6620\u5C04",level:3},{value:"\u5BFC\u51FA\u6570\u636E\u91CF\u548C\u5BFC\u51FA\u6548\u7387",id:"\u5BFC\u51FA\u6570\u636E\u91CF\u548C\u5BFC\u51FA\u6548\u7387",level:3},{value:"\u5BFC\u51FA\u6587\u4EF6\u7684\u7BA1\u7406",id:"\u5BFC\u51FA\u6587\u4EF6\u7684\u7BA1\u7406",level:3},{value:"\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6",id:"\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6",level:3},{value:"\u7ED3\u679C\u5B8C\u6574\u6027\u4FDD\u8BC1",id:"\u7ED3\u679C\u5B8C\u6574\u6027\u4FDD\u8BC1",level:3},{value:"\u5E76\u53D1\u5BFC\u51FA",id:"\u5E76\u53D1\u5BFC\u51FA",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," \u547D\u4EE4\u7528\u4E8E\u5C06\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3A\u6587\u4EF6\u3002\u76EE\u524D\u652F\u6301\u901A\u8FC7 Broker \u8FDB\u7A0B\uFF0CS3 \u534F\u8BAE\u6216 HDFS \u534F\u8BAE\uFF0C\u5BFC\u51FA\u5230\u8FDC\u7AEF\u5B58\u50A8\uFF0C\u5982 HDFS\uFF0CS3\uFF0CBOS\uFF0CCOS\uFF08\u817E\u8BAF\u4E91\uFF09\u4E0A\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'<query_stmt>\nINTO OUTFILE "<file_path>"\n[ FORMAT AS <format_as> ]\n[ <properties> ]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<query_stmt>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5FC5\u987B\u662F\u662F\u5408\u6CD5\u7684 SQL\uFF0C\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/data-query/SELECT",children:"query \u8BED\u53E5\u6587\u6863"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<file_path>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u6587\u4EF6\u5B58\u50A8\u7684\u8DEF\u5F84\u53CA\u6587\u4EF6\u524D\u7F00\u3002\u6307\u5411\u6587\u4EF6\u5B58\u50A8\u7684\u8DEF\u5F84\u4EE5\u53CA\u6587\u4EF6\u524D\u7F00\u3002\u5982 ",(0,l.jsx)(n.code,{children:"hdfs://path/to/my_file_"}),"\u3002",(0,l.jsx)(n.br,{}),"\n\u6700\u7EC8\u7684\u6587\u4EF6\u540D\u5C06\u7531 ",(0,l.jsx)(n.code,{children:"my_file_"}),"\u3001\u6587\u4EF6\u5E8F\u53F7\u4EE5\u53CA\u6587\u4EF6\u683C\u5F0F\u540E\u7F00\u7EC4\u6210\u3002\u5176\u4E2D\u6587\u4EF6\u5E8F\u53F7\u7531 0 \u5F00\u59CB\uFF0C\u6570\u91CF\u4E3A\u6587\u4EF6\u88AB\u5206\u5272\u7684\u6570\u91CF\u3002\u5982\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"my_file_abcdefg_0.csv"}),"\n",(0,l.jsx)(n.li,{children:"my_file_abcdefg_1.csv"}),"\n",(0,l.jsx)(n.li,{children:"my_file_abcdegf_2.csv"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u7701\u7565\u6587\u4EF6\u524D\u7F00\uFF0C\u53EA\u6307\u5B9A\u6587\u4EF6\u76EE\u5F55\uFF0C\u5982",(0,l.jsx)(n.code,{children:"hdfs://path/to/"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<format_as>"})]})}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u3002\u76EE\u524D\u652F\u6301\u5982\u4E0B\u683C\u5F0F\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CSV"})," (\u9ED8\u8BA4)"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"PARQUET"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"CSV_WITH_NAMES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"CSV_WITH_NAMES_AND_TYPES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"ORC"})}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6CE8\uFF1APARQUET\u3001CSV_WITH_NAMES\u3001CSV_WITH_NAMES_AND_TYPES\u3001ORC \u5728 1.2 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<properties>"})]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'[ PROPERTIES ("<key>"="<value>" [, ... ]) ]\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u76EE\u524D\u652F\u6301\u901A\u8FC7 Broker \u8FDB\u7A0B\uFF0C\u6216\u901A\u8FC7 S3/HDFS \u534F\u8BAE\u8FDB\u884C\u5BFC\u51FA\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u81EA\u8EAB\u5BFC\u51FA\u6587\u4EF6\u76F8\u5173\u7684\u5C5E\u6027"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"column_separator"}),': \u5217\u5206\u9694\u7B26\uFF0C\u53EA\u7528\u4E8E CSV \u76F8\u5173\u683C\u5F0F\u3002\u5728 1.2 \u7248\u672C\u5F00\u59CB\u652F\u6301\u591A\u5B57\u8282\u5206\u9694\u7B26\uFF0C\u5982\uFF1A"\\x01", "abc"\u3002']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"line_delimiter"}),': \u884C\u5206\u9694\u7B26\uFF0C\u53EA\u7528\u4E8E CSV \u76F8\u5173\u683C\u5F0F\u3002\u5728 1.2 \u7248\u672C\u5F00\u59CB\u652F\u6301\u591A\u5B57\u8282\u5206\u9694\u7B26\uFF0C\u5982\uFF1A"\\x01", "abc"\u3002']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"max_file_size"}),": \u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5982\u679C\u7ED3\u679C\u8D85\u8FC7\u8FD9\u4E2A\u503C\uFF0C\u5C06\u5207\u5272\u6210\u591A\u4E2A\u6587\u4EF6\uFF0C",(0,l.jsx)(n.code,{children:"max_file_size"})," \u53D6\u503C\u8303\u56F4\u662F[5MB, 2GB], \u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"1GB"}),"\u3002\uFF08\u5F53\u6307\u5B9A\u5BFC\u51FA\u4E3A OCR \u6587\u4EF6\u683C\u5F0F\u65F6\uFF0C\u5B9E\u9645\u5207\u5206\u6587\u4EF6\u7684\u5927\u5C0F\u5C06\u662F 64MB \u7684\u500D\u6570\uFF0C\u5982\uFF1A\u6307\u5B9A ",(0,l.jsx)(n.code,{children:"max_file_size = 5MB"}),", \u5B9E\u9645\u5C06\u4EE5 64 MB \u4E3A\u5207\u5206\uFF1B\u6307\u5B9A ",(0,l.jsx)(n.code,{children:"max_file_size = 65MB"}),", \u5B9E\u9645\u5C06\u4EE5 128 MB \u4E3A\u5207\u5206\uFF09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"delete_existing_files"}),": \u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"false"}),"\uFF0C\u82E5\u6307\u5B9A\u4E3A ",(0,l.jsx)(n.code,{children:"true"}),"\uFF0C\u5219\u4F1A\u5148\u5220\u9664 ",(0,l.jsx)(n.code,{children:"file_path"}),' \u6307\u5B9A\u7684\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u7136\u540E\u5BFC\u51FA\u6570\u636E\u5230\u8BE5\u76EE\u5F55\u4E0B\u3002\u4F8B\u5982\uFF1A"file_path" = "/user/tmp", \u5219\u4F1A\u5220\u9664"/user/"\u4E0B\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55\uFF1B"file_path" = "/user/tmp/", \u5219\u4F1A\u5220\u9664"/user/tmp/"\u4E0B\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55\u3002']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"file_suffix"}),": \u6307\u5B9A\u5BFC\u51FA\u6587\u4EF6\u7684\u540E\u7F00\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8BE5\u53C2\u6570\uFF0C\u5C06\u4F7F\u7528\u6587\u4EF6\u683C\u5F0F\u7684\u9ED8\u8BA4\u540E\u7F00\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"compress_type"}),"\uFF1A\u5F53\u6307\u5B9A\u5BFC\u51FA\u7684\u6587\u4EF6\u683C\u5F0F\u4E3A Parquet / ORC \u6587\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A Parquet / ORC \u6587\u4EF6\u4F7F\u7528\u7684\u538B\u7F29\u65B9\u5F0F\u3002Parquet \u6587\u4EF6\u683C\u5F0F\u53EF\u6307\u5B9A\u538B\u7F29\u65B9\u5F0F\u4E3A SNAPPY\uFF0CGZIP\uFF0CBROTLI\uFF0CZSTD\uFF0CLZ4 \u53CA PLAIN\uFF0C\u9ED8\u8BA4\u503C\u4E3A SNAPPY\u3002ORC \u6587\u4EF6\u683C\u5F0F\u53EF\u6307\u5B9A\u538B\u7F29\u65B9\u5F0F\u4E3A PLAIN\uFF0CSNAPPY\uFF0CZLIB \u4EE5\u53CA ZSTD\uFF0C\u9ED8\u8BA4\u503C\u4E3A ZLIB\u3002\u8BE5\u53C2\u6570\u81EA 2.1.5 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002\uFF08PLAIN \u5C31\u662F\u4E0D\u91C7\u7528\u538B\u7F29\uFF09"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Broker \u76F8\u5173\u5C5E\u6027"}),"  ",(0,l.jsxs)(n.em,{children:["\uFF08\u9700\u52A0\u524D\u7F00 ",(0,l.jsx)(n.code,{children:"broker."}),"\uFF09"]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"broker.name: broker"}),": \u540D\u79F0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"broker.hadoop.security.authentication"}),": \u6307\u5B9A\u8BA4\u8BC1\u65B9\u5F0F\u4E3A kerberos"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"broker.kerberos_principal"}),": \u6307\u5B9A kerberos \u7684 principal"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"broker.kerberos_keytab"}),": \u6307\u5B9A kerberos \u7684 keytab \u6587\u4EF6\u8DEF\u5F84\u3002\u8BE5\u6587\u4EF6\u5FC5\u987B\u4E3A Broker \u8FDB\u7A0B\u6240\u5728\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5E76\u4E14\u53EF\u4EE5\u88AB Broker \u8FDB\u7A0B\u8BBF\u95EE"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"HDFS \u76F8\u5173\u5C5E\u6027"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"fs.defaultFS"}),": namenode \u5730\u5740\u548C\u7AEF\u53E3"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.username"}),": hdfs \u7528\u6237\u540D"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.nameservices"}),": name service \u540D\u79F0\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.ha.namenodes.[nameservice ID]"}),": namenode \u7684 id \u5217\u8868\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.namenode.rpc-address.[nameservice ID].[name node ID]"}),": Name node \u7684 rpc \u5730\u5740\uFF0C\u6570\u91CF\u4E0E namenode \u6570\u91CF\u76F8\u540C\uFF0C\u4E0E hdfs-site.xml \u4FDD\u6301\u4E00\u81F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.client.failover.proxy.provider.[nameservice ID]"}),': HDFS \u5BA2\u6237\u7AEF\u8FDE\u63A5\u6D3B\u8DC3 namenode \u7684 java \u7C7B\uFF0C\u901A\u5E38\u662F"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"']}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5BF9\u4E8E\u5F00\u542F kerberos \u8BA4\u8BC1\u7684 Hadoop \u96C6\u7FA4\uFF0C\u8FD8\u9700\u8981\u989D\u5916\u8BBE\u7F6E\u5982\u4E0B PROPERTIES \u5C5E\u6027\uFF1A"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.namenode.kerberos.principal"}),": HDFS namenode \u670D\u52A1\u7684 principal \u540D\u79F0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.security.authentication"}),": \u8BA4\u8BC1\u65B9\u5F0F\u8BBE\u7F6E\u4E3A kerberos"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.kerberos.principal"}),": \u8BBE\u7F6E Doris \u8FDE\u63A5 HDFS \u65F6\u4F7F\u7528\u7684 Kerberos \u4E3B\u4F53"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),": \u8BBE\u7F6E keytab \u672C\u5730\u6587\u4EF6\u8DEF\u5F84"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"S3 \u534F\u8BAE\u5219\u76F4\u63A5\u6267\u884C S3 \u534F\u8BAE\u914D\u7F6E\u5373\u53EF\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"s3.endpoint"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"s3.access_key"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"s3.secret_key"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"s3.region"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"use_path_style"}),": (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"false"})," \u3002S3 SDK \u9ED8\u8BA4\u4F7F\u7528 Virtual-hosted Style \u65B9\u5F0F\u3002\u4F46\u67D0\u4E9B\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF\u53EF\u80FD\u6CA1\u5F00\u542F\u6216\u4E0D\u652F\u6301 Virtual-hosted Style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u53EF\u4EE5\u6DFB\u52A0 ",(0,l.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 Path Style \u8BBF\u95EE\u65B9\u5F0F\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u82E5\u8981\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"delete_existing_files"})," \u53C2\u6570\uFF0C\u8FD8\u9700\u8981\u5728 ",(0,l.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u6DFB\u52A0\u914D\u7F6E",(0,l.jsx)(n.code,{children:"enable_delete_existing_files = true"}),"\u5E76\u91CD\u542F fe\uFF0C\u6B64\u65F6 delete_existing_files \u624D\u4F1A\u751F\u6548\u3002delete_existing_files = true \u662F\u4E00\u4E2A\u5371\u9669\u7684\u64CD\u4F5C\uFF0C\u5EFA\u8BAE\u53EA\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"Outfile \u8BED\u53E5\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C\u5404\u4E2A\u5217\u7684\u542B\u4E49\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5217\u540D"}),(0,l.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FileNumber"}),(0,l.jsx)(n.td,{children:"int"}),(0,l.jsx)(n.td,{children:"\u6700\u7EC8\u751F\u6210\u7684\u6587\u4EF6\u4E2A\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TotalRows"}),(0,l.jsx)(n.td,{children:"int"}),(0,l.jsx)(n.td,{children:"\u7ED3\u679C\u96C6\u884C\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FileSize"}),(0,l.jsx)(n.td,{children:"int"}),(0,l.jsx)(n.td,{children:"\u5BFC\u51FA\u6587\u4EF6\u603B\u5927\u5C0F\u3002\u5355\u4F4D\u5B57\u8282\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"URL"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsxs)(n.td,{children:["\u5BFC\u51FA\u7684\u6587\u4EF6\u8DEF\u5F84\u7684\u524D\u7F00\uFF0C\u591A\u4E2A\u6587\u4EF6\u4F1A\u4EE5\u540E\u7F00 ",(0,l.jsx)(n.code,{children:"_0"}),",",(0,l.jsx)(n.code,{children:"_1"})," \u4F9D\u6B21\u7F16\u53F7\u3002"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6570\u636E\u5E93\u3001\u8868\u7684\u8BFB\u6743\u9650\u3002"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636E\u7C7B\u578B\u6620\u5C04",children:"\u6570\u636E\u7C7B\u578B\u6620\u5C04"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6240\u6709\u6587\u4EF6\u7C7B\u578B\u90FD\u652F\u6301\u5BFC\u51FA\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u800C\u5BF9\u4E8E\u590D\u6742\u6570\u636E\u7C7B\u578B\uFF08ARRAY/MAP/STRUCT\uFF09\uFF0C\u5F53\u524D\u53EA\u6709 ",(0,l.jsx)(n.code,{children:"csv"}),"\u3001",(0,l.jsx)(n.code,{children:"orc"}),"\u3001",(0,l.jsx)(n.code,{children:"csv_with_names"})," \u548C ",(0,l.jsx)(n.code,{children:"csv_with_names_and_types"})," \u652F\u6301\u5BFC\u51FA\u590D\u6742\u7C7B\u578B\uFF0C\u4E14\u4E0D\u652F\u6301\u5D4C\u5957\u590D\u6742\u7C7B\u578B\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Parquet\u3001ORC \u6587\u4EF6\u683C\u5F0F\u62E5\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\uFF0CDoris \u7684\u5BFC\u51FA\u529F\u80FD\u80FD\u591F\u81EA\u52A8\u5C06 Doris \u7684\u6570\u636E\u7C7B\u578B\u5BFC\u51FA\u5230 Parquet/ORC \u6587\u4EF6\u683C\u5F0F\u7684\u5BF9\u5E94\u6570\u636E\u7C7B\u578B\u3002\u4EE5\u4E0B\u662F Apache Doris \u6570\u636E\u7C7B\u578B\u548C Parquet/ORC \u6587\u4EF6\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04\u5173\u7CFB\u8868\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Doris \u5BFC\u51FA\u5230 ORC \u6587\u4EF6\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04\u8868\uFF1A"})}),"\n",(0,l.jsx)(n.p,{children:"| Doris Type              | Orc Type  |\n|-------------------------|-----------|\n| boolean                 | boolean   |\n| tinyint                 | tinyint   |\n| smallint                | smallint  |\n| int                     | int       |\n| bigint                  | bigint    |\n| largeInt                | string    |\n| date                    | string    |\n| datev2                  | string    |\n| datetime                | string    |\n| datetimev2              | timestamp |\n| float                   | float     |\n| double                  | double    |\n| char / varchar / string | string    |\n| decimal                 | decimal   |\n| struct                  | struct    |\n| map                     | map       |\n| array                   | array     |"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Doris \u5BFC\u51FA\u5230 Parquet \u6587\u4EF6\u683C\u5F0F\u7684\u6570\u636E\u7C7B\u578B\u6620\u5C04\u8868\uFF1A"})}),"\n",(0,l.jsx)(n.p,{children:"Doris \u5BFC\u51FA\u5230 Parquet \u6587\u4EF6\u683C\u5F0F\u65F6\uFF0C\u4F1A\u5148\u5C06 Doris \u5185\u5B58\u6570\u636E\u8F6C\u6362\u4E3A Arrow \u5185\u5B58\u6570\u636E\u683C\u5F0F\uFF0C\u7136\u540E\u7531 Arrow \u5199\u51FA\u5230 Parquet \u6587\u4EF6\u683C\u5F0F\u3002Doris \u6570\u636E\u7C7B\u578B\u5230 Arrow \u6570\u636E\u7C7B\u7684\u6620\u5C04\u5173\u7CFB\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"| Doris Type              | Arrow Type |\n|-------------------------|------------|\n| boolean                 | boolean    |\n| tinyint                 | int8       |\n| smallint                | int16      |\n| int                     | int32      |\n| bigint                  | int64      |\n| largeInt                | utf8       |\n| date                    | utf8       |\n| datev2                  | utf8       |\n| datetime                | utf8       |\n| datetimev2              | utf8       |\n| float                   | float32    |\n| double                  | float64    |\n| char / varchar / string | utf8       |\n| decimal                 | decimal128 |\n| struct                  | struct     |\n| map                     | map        |\n| array                   | list       |"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5BFC\u51FA\u6570\u636E\u91CF\u548C\u5BFC\u51FA\u6548\u7387",children:"\u5BFC\u51FA\u6570\u636E\u91CF\u548C\u5BFC\u51FA\u6548\u7387"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u529F\u80FD\u672C\u8D28\u4E0A\u662F\u6267\u884C\u4E00\u4E2A SQL \u67E5\u8BE2\u547D\u4EE4\u3002\u6700\u7EC8\u7684\u7ED3\u679C\u662F\u5355\u7EBF\u7A0B\u8F93\u51FA\u7684\u3002\u6240\u4EE5\u6574\u4E2A\u5BFC\u51FA\u7684\u8017\u65F6\u5305\u62EC\u67E5\u8BE2\u672C\u8EAB\u7684\u8017\u65F6\uFF0C\u548C\u6700\u7EC8\u7ED3\u679C\u96C6\u5199\u51FA\u7684\u8017\u65F6\u3002\u5982\u679C\u67E5\u8BE2\u8F83\u5927\uFF0C\u9700\u8981\u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF ",(0,l.jsx)(n.code,{children:"query_timeout"})," \u9002\u5F53\u7684\u5EF6\u957F\u67E5\u8BE2\u8D85\u65F6\u65F6\u95F4\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5BFC\u51FA\u6587\u4EF6\u7684\u7BA1\u7406",children:"\u5BFC\u51FA\u6587\u4EF6\u7684\u7BA1\u7406"}),"\n",(0,l.jsx)(n.p,{children:"Doris \u4E0D\u4F1A\u7BA1\u7406\u5BFC\u51FA\u7684\u6587\u4EF6\u3002\u5305\u62EC\u5BFC\u51FA\u6210\u529F\u7684\uFF0C\u6216\u8005\u5BFC\u51FA\u5931\u8D25\u540E\u6B8B\u7559\u7684\u6587\u4EF6\uFF0C\u90FD\u9700\u8981\u7528\u6237\u81EA\u884C\u5904\u7406\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6",children:"\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6\u65F6\u9700\u8981\u5148\u5728 ",(0,l.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u914D\u7F6E",(0,l.jsx)(n.code,{children:"enable_outfile_to_local=true"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select * from tbl1 limit 10 \nINTO OUTFILE "file:///home/work/path/result_";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5BFC\u51FA\u5230\u672C\u5730\u6587\u4EF6\u7684\u529F\u80FD\u4E0D\u9002\u7528\u4E8E\u516C\u6709\u4E91\u7528\u6237\uFF0C\u4EC5\u9002\u7528\u4E8E\u79C1\u6709\u5316\u90E8\u7F72\u7684\u7528\u6237\u3002\u5E76\u4E14\u9ED8\u8BA4\u7528\u6237\u5BF9\u96C6\u7FA4\u8282\u70B9\u6709\u5B8C\u5168\u7684\u63A7\u5236\u6743\u9650\u3002Doris \u5BF9\u4E8E\u7528\u6237\u586B\u5199\u7684\u5BFC\u51FA\u8DEF\u5F84\u4E0D\u4F1A\u505A\u5408\u6CD5\u6027\u68C0\u67E5\u3002\u5982\u679C Doris \u7684\u8FDB\u7A0B\u7528\u6237\u5BF9\u8BE5\u8DEF\u5F84\u65E0\u5199\u6743\u9650\uFF0C\u6216\u8DEF\u5F84\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u62A5\u9519\u3002\u540C\u65F6\u5904\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u5982\u679C\u8BE5\u8DEF\u5F84\u5DF2\u5B58\u5728\u540C\u540D\u7684\u6587\u4EF6\uFF0C\u5219\u4E5F\u4F1A\u5BFC\u51FA\u5931\u8D25\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Doris \u4E0D\u4F1A\u7BA1\u7406\u5BFC\u51FA\u5230\u672C\u5730\u7684\u6587\u4EF6\uFF0C\u4E5F\u4E0D\u4F1A\u68C0\u67E5\u78C1\u76D8\u7A7A\u95F4\u7B49\u3002\u8FD9\u4E9B\u6587\u4EF6\u9700\u8981\u7528\u6237\u81EA\u884C\u7BA1\u7406\uFF0C\u5982\u6E05\u7406\u7B49\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u7ED3\u679C\u5B8C\u6574\u6027\u4FDD\u8BC1",children:"\u7ED3\u679C\u5B8C\u6574\u6027\u4FDD\u8BC1"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u662F\u4E00\u4E2A\u540C\u6B65\u547D\u4EE4\uFF0C\u56E0\u6B64\u6709\u53EF\u80FD\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4EFB\u52A1\u8FDE\u63A5\u65AD\u5F00\u4E86\uFF0C\u4ECE\u800C\u65E0\u6CD5\u83B7\u6089\u5BFC\u51FA\u7684\u6570\u636E\u662F\u5426\u6B63\u5E38\u7ED3\u675F\uFF0C\u6216\u662F\u5426\u5B8C\u6574\u3002\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"success_file_name"})," \u53C2\u6570\u8981\u6C42\u4EFB\u52A1\u6210\u529F\u540E\uFF0C\u5728\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A\u6210\u529F\u6587\u4EF6\u6807\u8BC6\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u6765\u5224\u65AD\u5BFC\u51FA\u662F\u5426\u6B63\u5E38\u7ED3\u675F\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5E76\u53D1\u5BFC\u51FA",children:"\u5E76\u53D1\u5BFC\u51FA"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BBE\u7F6E Session \u53D8\u91CF",(0,l.jsx)(n.code,{children:"set enable_parallel_outfile = true;"}),"\u53EF\u5F00\u542F Outfile \u5E76\u53D1\u5BFC\u51FA\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 Broker \u65B9\u5F0F\u5BFC\u51FA\uFF0C\u5C06\u7B80\u5355\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"hdfs://path/to/result.txt"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A CSV\u3002\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"my_broker"})," \u5E76\u8BBE\u7F6E kerberos \u8BA4\u8BC1\u4FE1\u606F\u3002\u6307\u5B9A\u5217\u5206\u9694\u7B26\u4E3A ",(0,l.jsx)(n.code,{children:","}),"\uFF0C\u884C\u5206\u9694\u7B26\u4E3A ",(0,l.jsx)(n.code,{children:"\\n"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u7EC8\u751F\u6210\u6587\u4EF6\u5982\u5982\u679C\u4E0D\u5927\u4E8E 100MB\uFF0C\u5219\u4E3A\uFF1A",(0,l.jsx)(n.code,{children:"result_0.csv"}),"\u3002\n\u5982\u679C\u5927\u4E8E 100MB\uFF0C\u5219\u53EF\u80FD\u4E3A ",(0,l.jsx)(n.code,{children:"result_0.csv, result_1.csv, ..."}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06\u7B80\u5355\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"hdfs://path/to/result.parquet"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A PARQUET\u3002\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"my_broker"})," \u5E76\u8BBE\u7F6E kerberos \u8BA4\u8BC1\u4FE1\u606F\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06 CTE \u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"hdfs://path/to/result.txt"}),"\u3002\u9ED8\u8BA4\u5BFC\u51FA\u683C\u5F0F\u4E3A CSV\u3002\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"my_broker"})," \u5E76\u8BBE\u7F6E HDFS \u9AD8\u53EF\u7528\u4FE1\u606F\u3002\u4F7F\u7528\u9ED8\u8BA4\u7684\u884C\u5217\u5206\u9694\u7B26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u7EC8\u751F\u6210\u6587\u4EF6\u5982\u5982\u679C\u4E0D\u5927\u4E8E 1GB\uFF0C\u5219\u4E3A\uFF1A",(0,l.jsx)(n.code,{children:"result_0.csv"}),"\u3002\n\u5982\u679C\u5927\u4E8E 1GB\uFF0C\u5219\u53EF\u80FD\u4E3A ",(0,l.jsx)(n.code,{children:"result_0.csv, result_1.csv, ..."}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06 UNION \u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"bos://bucket/result.txt"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A PARQUET\u3002\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"my_broker"})," \u5E76\u8BBE\u7F6E HDFS \u9AD8\u53EF\u7528\u4FE1\u606F\u3002PARQUET \u683C\u5F0F\u65E0\u9700\u6307\u5B9A\u5217\u5206\u5272\u7B26\u3002\n\u5BFC\u51FA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u4E00\u4E2A\u6807\u8BC6\u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06 Select \u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"s3a://${bucket_name}/path/result.txt"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A CSV\u3002\n\u5BFC\u51FA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u4E00\u4E2A\u6807\u8BC6\u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u7EC8\u751F\u6210\u6587\u4EF6\u5982\u5982\u679C\u4E0D\u5927\u4E8E 1GB\uFF0C\u5219\u4E3A\uFF1A",(0,l.jsx)(n.code,{children:"my_file_0.csv"}),"\u3002\n\u5982\u679C\u5927\u4E8E 1GB\uFF0C\u5219\u53EF\u80FD\u4E3A ",(0,l.jsx)(n.code,{children:"my_file_0.csv, result_1.csv, ..."}),"\u3002\n\u5728 cos \u4E0A\u9A8C\u8BC1"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"  1. \u4E0D\u5B58\u5728\u7684 path \u4F1A\u81EA\u52A8\u521B\u5EFA\n  2. access.key/secret.key/endpoint\u9700\u8981\u548Ccos\u7684\u540C\u5B66\u786E\u8BA4\u3002\u5C24\u5176\u662Fendpoint\u7684\u503C\uFF0C\u4E0D\u9700\u8981\u586B\u5199bucket_name\u3002\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528 S3 \u534F\u8BAE\u5BFC\u51FA\u5230 bos\uFF0C\u5E76\u4E14\u5E76\u53D1\u5BFC\u51FA\u5F00\u542F\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u7EC8\u751F\u6210\u7684\u6587\u4EF6\u524D\u7F00\u4E3A ",(0,l.jsx)(n.code,{children:"my_file_{fragment_instance_id}_"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528 S3 \u534F\u8BAE\u5BFC\u51FA\u5230 bos\uFF0C\u5E76\u4E14\u5E76\u53D1\u5BFC\u51FA Session \u53D8\u91CF\u5F00\u542F\u3002\n\u6CE8\u610F\uFF1A\u4F46\u7531\u4E8E\u67E5\u8BE2\u8BED\u53E5\u5E26\u4E86\u4E00\u4E2A\u9876\u5C42\u7684\u6392\u5E8F\u8282\u70B9\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u67E5\u8BE2\u5373\u4F7F\u5F00\u542F\u5E76\u53D1\u5BFC\u51FA\u7684 Session \u53D8\u91CF\uFF0C\u4E5F\u662F\u65E0\u6CD5\u5E76\u53D1\u5BFC\u51FA\u7684\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 HDFS \u65B9\u5F0F\u5BFC\u51FA\uFF0C\u5C06\u7B80\u5355\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"hdfs://${host}:${fileSystem_port}/path/to/result.txt"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A CSV\uFF0C\u7528\u6237\u540D\u4E3A work\u3002\u6307\u5B9A\u5217\u5206\u9694\u7B26\u4E3A ",(0,l.jsx)(n.code,{children:","}),"\uFF0C\u884C\u5206\u9694\u7B26\u4E3A ",(0,l.jsx)(n.code,{children:"\\n"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- fileSystem_port \u9ED8\u8BA4\u503C\u4E3A 9000\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679C Hadoop \u96C6\u7FA4\u5F00\u542F\u9AD8\u53EF\u7528\u5E76\u4E14\u542F\u7528 Kerberos \u8BA4\u8BC1\uFF0C\u53EF\u4EE5\u53C2\u8003\u5982\u4E0B SQL \u8BED\u53E5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u7EC8\u751F\u6210\u6587\u4EF6\u5982\u5982\u679C\u4E0D\u5927\u4E8E 100 MB\uFF0C\u5219\u4E3A\uFF1A",(0,l.jsx)(n.code,{children:"result_0.csv"}),"\u3002\n\u5982\u679C\u5927\u4E8E 100 MB\uFF0C\u5219\u53EF\u80FD\u4E3A ",(0,l.jsx)(n.code,{children:"result_0.csv, result_1.csv, ..."}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06 Select \u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u5230\u817E\u8BAF\u4E91 cos \u7684\u6587\u4EF6 ",(0,l.jsx)(n.code,{children:"cosn://${bucket_name}/path/result.txt"}),"\u3002\u6307\u5B9A\u5BFC\u51FA\u683C\u5F0F\u4E3A CSV\u3002\n\u5BFC\u51FA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u4E00\u4E2A\u6807\u8BC6\u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "cosn://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "broker_name",\n    "broker.fs.cosn.userinfo.secretId" = "xxx",\n    "broker.fs.cosn.userinfo.secretKey" = "xxxx",\n    "broker.fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxx.myqcloud.com",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let l={},i=r.createContext(l);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);