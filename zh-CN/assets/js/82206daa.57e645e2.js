"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["555739"],{258618:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>d,assets:()=>t,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"lakehouse/datalake-analytics/dlf","title":"\u963F\u91CC\u4E91 DLF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/datalake-analytics/dlf.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/dlf","permalink":"/zh-CN/docs/lakehouse/datalake-analytics/dlf","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u963F\u91CC\u4E91 DLF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Paimon Catalog","permalink":"/zh-CN/docs/lakehouse/datalake-analytics/paimon"},"next":{"title":"Hive","permalink":"/zh-CN/docs/lakehouse/datalake-building/hive-build"}}'),a=l("785893"),i=l("250065");let s={title:"\u963F\u91CC\u4E91 DLF",language:"zh-CN"},c=void 0,t={},o=[{value:"\u8FDE\u63A5 DLF",id:"\u8FDE\u63A5-dlf",level:2},{value:"\u521B\u5EFA DLF Catalog",id:"\u521B\u5EFA-dlf-catalog",level:3},{value:"\u4F7F\u7528\u5F00\u542F\u4E86 HDFS \u670D\u52A1\u7684 OSS \u5B58\u50A8\u6570\u636E",id:"\u4F7F\u7528\u5F00\u542F\u4E86-hdfs-\u670D\u52A1\u7684-oss-\u5B58\u50A8\u6570\u636E",level:3},{value:"\u8BBF\u95EE DLF Iceberg \u8868",id:"\u8BBF\u95EE-dlf-iceberg-\u8868",level:3},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2}];function r(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u963F\u91CC\u4E91 Data Lake Formation(DLF) \u662F\u963F\u91CC\u4E91\u4E0A\u7684\u7EDF\u4E00\u5143\u6570\u636E\u7BA1\u7406\u670D\u52A1\u3002\u517C\u5BB9 Hive Metastore \u534F\u8BAE\u3002"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://www.aliyun.com/product/bigdata/dlf",children:"\u4EC0\u4E48\u662F Data Lake Formation"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u56E0\u6B64\u6211\u4EEC\u4E5F\u53EF\u4EE5\u548C\u8BBF\u95EE Hive Metastore \u4E00\u6837\uFF0C\u8FDE\u63A5\u5E76\u8BBF\u95EE DLF\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8FDE\u63A5-dlf",children:"\u8FDE\u63A5 DLF"}),"\n",(0,a.jsx)(n.h3,{id:"\u521B\u5EFA-dlf-catalog",children:"\u521B\u5EFA DLF Catalog"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG dlf PROPERTIES (\n   "type"="hms",\n   "hive.metastore.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53EF\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk"\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,a.jsx)(n.code,{children:"type"})," \u56FA\u5B9A\u4E3A ",(0,a.jsx)(n.code,{children:"hms"}),"\u3002\u5982\u679C\u9700\u8981\u516C\u7F51\u8BBF\u95EE\u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",(0,a.jsx)(n.code,{children:'"dlf.access.public"="true"'})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.endpoint"}),"\uFF1ADLF Endpoint\uFF0C\u53C2\u9605\uFF1A",(0,a.jsx)(n.a,{href:"https://www.alibabacloud.com/help/zh/data-lake-formation/latest/regions-and-endpoints",children:"DLF Region \u548C Endpoint \u5BF9\u7167\u8868"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.region"}),"\uFF1ADLF Region\uFF0C\u53C2\u9605\uFF1A",(0,a.jsx)(n.a,{href:"https://www.alibabacloud.com/help/zh/data-lake-formation/latest/regions-and-endpoints",children:"DLF Region \u548C Endpoint \u5BF9\u7167\u8868"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.uid"}),"\uFF1A\u963F\u91CC\u4E91\u8D26\u53F7\u3002\u5373\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u53F3\u4E0A\u89D2\u4E2A\u4EBA\u4FE1\u606F\u7684\u201C\u4E91\u8D26\u53F7 ID\u201D\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.catalog.id"}),"(\u53EF\u9009)\uFF1ACatalog Id\u3002\u7528\u4E8E\u6307\u5B9A\u6570\u636E\u76EE\u5F55\uFF0C\u5982\u679C\u4E0D\u586B\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7684 Catalog ID\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.access_key"}),"\uFF1AAccessKey\u3002\u53EF\u4EE5\u5728 ",(0,a.jsx)(n.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dlf.secret_key"}),"\uFF1ASecretKey\u3002\u53EF\u4EE5\u5728 ",(0,a.jsx)(n.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"\u963F\u91CC\u4E91\u63A7\u5236\u53F0"})," \u4E2D\u521B\u5EFA\u548C\u7BA1\u7406\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u4ED6\u914D\u7F6E\u9879\u4E3A\u56FA\u5B9A\u503C\uFF0C\u65E0\u9700\u6539\u52A8\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E4B\u540E\uFF0C\u53EF\u4EE5\u50CF\u6B63\u5E38\u7684 Hive MetaStore \u4E00\u6837\uFF0C\u8BBF\u95EE DLF \u4E0B\u7684\u5143\u6570\u636E\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u540C Hive Catalog \u4E00\u6837\uFF0C\u652F\u6301\u8BBF\u95EE DLF \u4E2D\u7684 Hive/Iceberg/Hudi \u7684\u5143\u6570\u636E\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4F7F\u7528\u5F00\u542F\u4E86-hdfs-\u670D\u52A1\u7684-oss-\u5B58\u50A8\u6570\u636E",children:"\u4F7F\u7528\u5F00\u542F\u4E86 HDFS \u670D\u52A1\u7684 OSS \u5B58\u50A8\u6570\u636E"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u786E\u8BA4 OSS \u5F00\u542F\u4E86 HDFS \u670D\u52A1\u3002",(0,a.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/419505.html?spm=a2c4g.2357115.0.i0",children:"\u5F00\u901A\u5E76\u6388\u6743\u8BBF\u95EE OSS-HDFS \u670D\u52A1"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4E0B\u8F7D SDK\u3002",(0,a.jsx)(n.a,{href:"https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/6.x/6.7.8/jindodata_download.md",children:"JindoData SDK \u4E0B\u8F7D"}),"\u3002\u5982\u679C\u96C6\u7FA4\u4E0A\u5DF2\u6709 SDK \u76EE\u5F55\uFF0C\u5FFD\u7565\u8FD9\u4E00\u6B65\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u89E3\u538B\u4E0B\u8F7D\u540E\u7684 jindosdk.tar.gz \u6216\u8005\u5728\u96C6\u7FA4\u4E0A\u627E\u5230 Jindo SDK \u7684\u76EE\u5F55\uFF0C\u5C06\u5176 lib \u76EE\u5F55\u4E0B\u7684",(0,a.jsx)(n.code,{children:"jindo-core.jar\u3001jindo-sdk.jar"}),"\u653E\u5230",(0,a.jsx)(n.code,{children:"${DORIS_HOME}/fe/lib"}),"\u548C",(0,a.jsx)(n.code,{children:"${DORIS_HOME}/be/lib/java_extensions/preload-extensions"}),"\u76EE\u5F55\u4E0B\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u521B\u5EFA DLF Catalog\uFF0C\u5E76\u914D\u7F6E",(0,a.jsx)(n.code,{children:"oss.hdfs.enabled"}),"\u4E3A",(0,a.jsx)(n.code,{children:"true"}),"\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG dlf_oss_hdfs PROPERTIES (\n   "type"="hms",\n   "hive.metastore.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53EF\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk",\n   "oss.hdfs.enabled" = "true"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5F53 Jindo SDK \u7248\u672C\u4E0E EMR \u96C6\u7FA4\u4E0A\u6240\u7528\u7684\u7248\u672C\u4E0D\u4E00\u81F4\u65F6\uFF0C\u4F1A\u51FA\u73B0",(0,a.jsx)(n.code,{children:"Plugin not found"}),"\u7684\u95EE\u9898\uFF0C\u9700\u66F4\u6362\u5230\u5BF9\u5E94\u7248\u672C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u8BBF\u95EE-dlf-iceberg-\u8868",children:"\u8BBF\u95EE DLF Iceberg \u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG dlf_iceberg PROPERTIES (\n   "type"="iceberg",\n   "iceberg.catalog.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53EF\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk"\n);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n",(0,a.jsxs)(n.p,{children:["\u548C Hive Catalog \u4E00\u81F4\uFF0C\u53EF\u53C2\u9605 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/lakehouse/datalake-analytics/hive",children:"Hive Catalog"})," \u4E2D ",(0,a.jsx)(n.strong,{children:"\u5217\u7C7B\u578B\u6620\u5C04"})," \u4E00\u8282\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return s}});var d=l(667294);let a={},i=d.createContext(a);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);