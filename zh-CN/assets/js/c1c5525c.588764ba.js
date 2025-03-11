"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["780581"],{275478:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>a,assets:()=>l,toc:()=>t,contentTitle:()=>o});var a=JSON.parse('{"id":"lakehouse/datalake-analytics/paimon","title":"Paimon Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/paimon.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/paimon","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/paimon","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Paimon Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Iceberg Catalog","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/iceberg"},"next":{"title":"LakeSoul Catalog","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/lakesoul"}}'),i=s("785893"),r=s("250065");let d={title:"Paimon Catalog",language:"zh-CN"},o=void 0,l={},t=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u521B\u5EFA Catalog",id:"\u521B\u5EFA-catalog",level:2},{value:"\u57FA\u4E8E FileSystem \u521B\u5EFA Catalog",id:"\u57FA\u4E8E-filesystem-\u521B\u5EFA-catalog",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"MINIO",id:"minio",level:4},{value:"OBS",id:"obs",level:4},{value:"COS",id:"cos",level:4},{value:"OSS",id:"oss",level:4},{value:"\u57FA\u4E8E Hive Metastore \u521B\u5EFA Catalog",id:"\u57FA\u4E8E-hive-metastore-\u521B\u5EFA-catalog",level:3},{value:"\u57FA\u4E8E Aliyun DLF \u521B\u5EFA Catalog",id:"\u57FA\u4E8E-aliyun-dlf-\u521B\u5EFA-catalog",level:3},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u5FEB\u901F\u4F53\u9A8C ",(0,i.jsx)(e.a,{href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-paimon",children:"Apache Doris & Paimon"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6570\u636E\u653E\u5728 hdfs \u65F6\uFF0C\u9700\u8981\u5C06 core-site.xml\uFF0Chdfs-site.xml \u548C hive-site.xml  \u653E\u5230 FE \u548C BE \u7684 conf \u76EE\u5F55\u4E0B\u3002\u4F18\u5148\u8BFB\u53D6 conf \u76EE\u5F55\u4E0B\u7684 hadoop \u914D\u7F6E\u6587\u4EF6\uFF0C\u518D\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"HADOOP_CONF_DIR"})," \u7684\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5F53\u524D\u9002\u914D\u7684 Paimon \u7248\u672C\u4E3A 0.8\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u521B\u5EFA-catalog",children:"\u521B\u5EFA Catalog"}),"\n",(0,i.jsx)(e.p,{children:"Paimon Catalog \u5F53\u524D\u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684 Metastore \u521B\u5EFA Catalog:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"filesystem\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u540C\u65F6\u5B58\u50A8\u5143\u6570\u636E\u548C\u6570\u636E\u5728 filesystem\u3002"}),"\n",(0,i.jsx)(e.li,{children:"hive metastore\uFF0C\u5B83\u8FD8\u5C06\u5143\u6570\u636E\u5B58\u50A8\u5728 Hive metastore \u4E2D\u3002\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u4ECE Hive \u8BBF\u95EE\u8FD9\u4E9B\u8868\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u57FA\u4E8E-filesystem-\u521B\u5EFA-catalog",children:"\u57FA\u4E8E FileSystem \u521B\u5EFA Catalog"}),"\n",(0,i.jsx)(e.h4,{id:"hdfs",children:"HDFS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    \'type\'=\'paimon\',\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    \'hadoop.security.authentication\' = \'kerberos\',\n    \'hadoop.kerberos.keytab\' = \'/doris/hdfs.keytab\',   \n    \'hadoop.kerberos.principal\' = \'hdfs@HADOOP.COM\'\n);\n'})}),"\n",(0,i.jsx)(e.h4,{id:"minio",children:"MINIO"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://bucket_name/paimons3",\n    "s3.endpoint" = "http://<ip>:<port>",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n'})}),"\n",(0,i.jsx)(e.h4,{id:"obs",children:"OBS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_obs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "obs://bucket_name/paimon",\n    "obs.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key"="ak",\n    "obs.secret_key"="sk"\n);\n'})}),"\n",(0,i.jsx)(e.h4,{id:"cos",children:"COS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "cosn://paimon-1308700295/paimoncos",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n'})}),"\n",(0,i.jsx)(e.h4,{id:"oss",children:"OSS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u57FA\u4E8E-hive-metastore-\u521B\u5EFA-catalog",children:"\u57FA\u4E8E Hive Metastore \u521B\u5EFA Catalog"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "hive.metastore.sasl.enabled" = "true",\n    "hive.metastore.kerberos.principal" = "hive/xxx@HADOOP.COM",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "hdfs@HADOOP.COM",\n    "hadoop.kerberos.keytab" = "/doris/hdfs.keytab"\n);\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u57FA\u4E8E-aliyun-dlf-\u521B\u5EFA-catalog",children:"\u57FA\u4E8E Aliyun DLF \u521B\u5EFA Catalog"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u529F\u80FD\u81EA 2.1.7 \u548C 3.0.3 \u7248\u672C\u652F\u6301\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'CREATE CATALOG `paimon_dlf` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "dlf",\n    "warehouse" = "oss://xx/yy/",\n    "dlf.proxy.mode" = "DLF_ONLY",\n    "dlf.uid" = "xxxxx",\n    "dlf.region" = "cn-beijing",\n    "dlf.access_key" = "ak",\n    "dlf.secret_key" = "sk"\n    \n    -- "dlf.endpoint" = "dlf.cn-beijing.aliyuncs.com",  -- optional\n    -- "dlf.catalog.id" = "xxxx", -- optional\n);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Paimon Data Type"}),(0,i.jsx)(e.th,{children:"Doris Data Type"}),(0,i.jsx)(e.th,{children:"Comment"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BooleanType"}),(0,i.jsx)(e.td,{children:"Boolean"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"TinyIntType"}),(0,i.jsx)(e.td,{children:"TinyInt"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SmallIntType"}),(0,i.jsx)(e.td,{children:"SmallInt"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"IntType"}),(0,i.jsx)(e.td,{children:"Int"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FloatType"}),(0,i.jsx)(e.td,{children:"Float"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BigIntType"}),(0,i.jsx)(e.td,{children:"BigInt"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DoubleType"}),(0,i.jsx)(e.td,{children:"Double"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"VarCharType"}),(0,i.jsx)(e.td,{children:"VarChar"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"CharType"}),(0,i.jsx)(e.td,{children:"Char"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"VarBinaryType, BinaryType"}),(0,i.jsx)(e.td,{children:"String"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DecimalType(precision, scale)"}),(0,i.jsx)(e.td,{children:"Decimal(precision, scale)"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"TimestampType,LocalZonedTimestampType"}),(0,i.jsx)(e.td,{children:"DateTime"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DateType"}),(0,i.jsx)(e.td,{children:"Date"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ArrayType"}),(0,i.jsx)(e.td,{children:"Array"}),(0,i.jsx)(e.td,{children:"\u652F\u6301 Array \u5D4C\u5957"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"MapType"}),(0,i.jsx)(e.td,{children:"Map"}),(0,i.jsx)(e.td,{children:"\u652F\u6301 Map \u5D4C\u5957"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"RowType"}),(0,i.jsx)(e.td,{children:"Struct"}),(0,i.jsx)(e.td,{children:"\u652F\u6301 Struct \u5D4C\u5957\uFF082.0.10 \u548C 2.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Kerberos \u95EE\u9898"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u786E\u4FDD principal \u548C keytab \u914D\u7F6E\u6B63\u786E\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u9700\u5728 BE \u8282\u70B9\u542F\u52A8\u5B9A\u65F6\u4EFB\u52A1\uFF08\u5982 crontab\uFF09\uFF0C\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\uFF08\u5982 12 \u5C0F\u65F6\uFF09\uFF0C\u6267\u884C\u4E00\u6B21 ",(0,i.jsx)(e.code,{children:"kinit -kt your_principal your_keytab"})," \u547D\u4EE4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Unknown type value: UNSUPPORTED"}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u662F Doris 2.0.2 \u7248\u672C\u548C Paimon 0.5 \u7248\u672C\u7684\u4E00\u4E2A\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u9700\u8981\u5347\u7EA7\u5230 2.0.3 \u6216\u66F4\u9AD8\u7248\u672C\u89E3\u51B3\uFF0C\u6216\u81EA\u884C ",(0,i.jsx)(e.a,{href:"https://github.com/apache/doris/pull/24985",children:"patch"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8BBF\u95EE\u5BF9\u8C61\u5B58\u50A8\uFF08OSS\u3001S3 \u7B49\uFF09\u62A5\u9519\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u652F\u6301"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 2.0.5\uFF08\u542B\uFF09\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u7528\u6237\u9700\u624B\u52A8\u4E0B\u8F7D\u4EE5\u4E0B jar \u5305\u5E76\u653E\u7F6E\u5728 ",(0,i.jsx)(e.code,{children:"${DORIS_HOME}/be/lib/java_extensions/preload-extensions"})," \u76EE\u5F55\u4E0B\uFF0C\u91CD\u542F BE\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8BBF\u95EE OSS\uFF1A",(0,i.jsx)(e.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.6.0-incubating/paimon-oss-0.6.0-incubating.jar",children:"paimon-oss-0.6.0-incubating.jar"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u8BBF\u95EE\u5176\u4ED6\u5BF9\u8C61\u5B58\u50A8\uFF1A",(0,i.jsx)(e.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar",children:"paimon-s3-0.6.0-incubating.jar"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"2.0.6 \u4E4B\u540E\u7684\u7248\u672C\u4E0D\u518D\u9700\u8981\u7528\u6237\u624B\u52A8\u653E\u7F6E\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return d}});var a=s(667294);let i={},r=a.createContext(i);function d(n){let e=a.useContext(r);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);