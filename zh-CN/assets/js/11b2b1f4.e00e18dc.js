"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["148914"],{200109:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"ecosystem/hive-bitmap-udf","title":"Hive Bitmap UDF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/hive-bitmap-udf.md","sourceDirName":"ecosystem","slug":"/ecosystem/hive-bitmap-udf","permalink":"/zh-CN/docs/ecosystem/hive-bitmap-udf","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Hive Bitmap UDF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"AutoMQ Load","permalink":"/zh-CN/docs/ecosystem/automq-load"},"next":{"title":"\u5E38\u89C1\u8FD0\u7EF4\u95EE\u9898","permalink":"/zh-CN/docs/faq/install-faq"}}'),a=n("785893"),r=n("250065");let s={title:"Hive Bitmap UDF",language:"zh-CN"},d=void 0,o={},l=[{value:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u5728 Hive \u4E2D\u521B\u5EFA Bitmap \u7C7B\u578B\u8868",id:"\u5728-hive-\u4E2D\u521B\u5EFA-bitmap-\u7C7B\u578B\u8868",level:3},{value:"Hive Bitmap UDF \u4F7F\u7528\uFF1A",id:"hive-bitmap-udf-\u4F7F\u7528",level:3},{value:"Hive bitmap \u5BFC\u5165 doris",id:"hive-bitmap-\u5BFC\u5165-doris",level:2}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Hive Bitmap UDF \u63D0\u4F9B\u4E86\u5728 Hive \u8868\u4E2D\u751F\u6210 bitmap\u3001bitmap \u8FD0\u7B97\u7B49 UDF\uFF0CHive \u4E2D\u7684 bitmap \u4E0E Doris bitmap \u5B8C\u5168\u4E00\u81F4\uFF0CHive \u4E2D\u7684 bitmap \u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165 doris\u3002"}),"\n",(0,a.jsx)(i.p,{children:"\u4E3B\u8981\u76EE\u7684\uFF1A"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"\u51CF\u5C11\u6570\u636E\u5BFC\u5165 doris \u65F6\u95F4 , \u9664\u53BB\u4E86\u6784\u5EFA\u5B57\u5178\u3001bitmap \u9884\u805A\u5408\u7B49\u6D41\u7A0B\uFF1B"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"\u8282\u7701 Hive \u5B58\u50A8\uFF0C\u4F7F\u7528 bitmap \u5BF9\u6570\u636E\u538B\u7F29\uFF0C\u51CF\u5C11\u4E86\u5B58\u50A8\u6210\u672C\uFF1B"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"\u63D0\u4F9B\u5728 Hive \u4E2D bitmap \u7684\u7075\u6D3B\u8FD0\u7B97\uFF0C\u6BD4\u5982\uFF1A\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u8FD0\u7B97\uFF0C\u8BA1\u7B97\u540E\u7684 bitmap \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165 doris\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,a.jsx)(i.h3,{id:"\u5728-hive-\u4E2D\u521B\u5EFA-bitmap-\u7C7B\u578B\u8868",children:"\u5728 Hive \u4E2D\u521B\u5EFA Bitmap \u7C7B\u578B\u8868"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"\n-- \u4F8B\u5B50\uFF1A\u521B\u5EFA Hive Bitmap \u8868\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- \u4F8B\u5B50\uFF1A\u521B\u5EFA\u666E\u901A Hive \u8868\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n"})}),"\n",(0,a.jsx)(i.h3,{id:"hive-bitmap-udf-\u4F7F\u7528",children:"Hive Bitmap UDF \u4F7F\u7528\uFF1A"}),"\n",(0,a.jsxs)(i.p,{children:["Hive Bitmap UDF \u9700\u8981\u5728 Hive/Spark \u4E2D\u4F7F\u7528\uFF0C\u9996\u5148\u9700\u8981\u7F16\u8BD1 fe \u5F97\u5230 hive-udf-jar-with-dependencies.jar\u3002\n\u7F16\u8BD1\u51C6\u5907\u5DE5\u4F5C\uFF1A\u5982\u679C\u8FDB\u884C\u8FC7 ldb \u6E90\u7801\u7F16\u8BD1\u53EF\u76F4\u63A5\u7F16\u8BD1 fe\uFF0C\u5982\u679C\u6CA1\u6709\u8FDB\u884C\u8FC7 ldb \u6E90\u7801\u7F16\u8BD1\uFF0C\u5219\u9700\u8981\u624B\u52A8\u5B89\u88C5 thrift\uFF0C\u53EF\u53C2\u8003\uFF1A",(0,a.jsx)(i.a,{href:"https://doris.apache.org/zh-CN/community/developer-guide/fe-idea-dev/",children:"FE \u5F00\u53D1\u73AF\u5883\u642D\u5EFA"})," \u4E2D\u7684\u7F16\u8BD1\u4E0E\u5B89\u88C5"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"--clone doris \u6E90\u7801\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n--\u5B89\u88C5 thrift\n--\u8FDB\u5165 fe \u76EE\u5F55\ncd fe\n--\u6267\u884C maven \u6253\u5305\u547D\u4EE4\uFF08fe \u7684\u5B50 module \u4F1A\u5168\u90E8\u6253\u5305\uFF09\nmvn package -Dmaven.test.skip=true\n--\u4E5F\u53EF\u4EE5\u53EA\u6253 hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n"})}),"\n",(0,a.jsx)(i.p,{children:"\u6253\u5305\u7F16\u8BD1\u5B8C\u6210\u8FDB\u5165 hive-udf \u76EE\u5F55\u4F1A\u6709 target \u76EE\u5F55\uFF0C\u91CC\u9762\u5C31\u4F1A\u6709\u6253\u5305\u5B8C\u6210\u7684 hive-udf.jar \u5305"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"\n-- \u52A0\u8F7D hive bitmap udf jar \u5305  (\u9700\u8981\u5C06\u7F16\u8BD1\u597D\u7684 hive-udf jar \u5305\u4E0A\u4F20\u81F3 HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n\n-- \u521B\u5EFA UDAF \u51FD\u6570\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u521B\u5EFA UDF \u51FD\u6570\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u4F8B\u5B50\uFF1A\u901A\u8FC7 to_bitmap \u751F\u6210 bitmap \u5199\u5165 Hive Bitmap \u8868\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- \u4F8B\u5B50\uFF1Abitmap_count \u8BA1\u7B97 bitmap \u4E2D\u5143\u7D20\u4E2A\u6570\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n\n-- \u4F8B\u5B50\uFF1Abitmap_union \u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u540E\u7684 bitmap \u5E76\u96C6\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n\n"})}),"\n",(0,a.jsx)(i.h2,{id:"hive-bitmap-\u5BFC\u5165-doris",children:"Hive bitmap \u5BFC\u5165 doris"}),"\n",(0,a.jsx)(i.p,{children:"\u521B\u5EFA Hive \u8868\u6307\u5B9A\u4E3A TEXT \u683C\u5F0F\uFF0C\u6B64\u65F6\uFF0C\u5BF9\u4E8E Binary \u7C7B\u578B\uFF0CHive \u4F1A\u4EE5 bash64 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u4FDD\u5B58\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7 Hive Catalog \u7684\u5F62\u5F0F\uFF0C\u76F4\u63A5\u5C06\u4F4D\u56FE\u6570\u636E\u901A\u8FC7 bitmap_from_bash64 \u51FD\u6570\u63D2\u5165\u5230 Doris \u5185\u90E8\u3002"}),"\n",(0,a.jsx)(i.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"\u5728 Hive \u4E2D\u521B\u5EFA Hive \u8868"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS `test`.`hive_bitmap_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'bitmap'\n) stored as textfile \n"})}),"\n",(0,a.jsxs)(i.ol,{start:"2",children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/zh-CN/docs/lakehouse/datalake-analytics/hive",children:"\u5728 Doris \u4E2D\u521B\u5EFA Catalog"})}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n"})}),"\n",(0,a.jsxs)(i.ol,{start:"3",children:["\n",(0,a.jsx)(i.li,{children:"\u521B\u5EFA Doris \u5185\u8868"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS `test`.`doris_bitmap_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   String                COMMENT '',\n    `k3`   String                COMMENT '',\n    `uuid` BITMAP  BITMAP_UNION  COMMENT 'bitmap'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n"})}),"\n",(0,a.jsxs)(i.ol,{start:"4",children:["\n",(0,a.jsx)(i.li,{children:"\u4ECE Hive \u63D2\u5165\u6570\u636E\u5230 Doris \u4E2D"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sql",children:"insert into doris_bitmap_table select k1, k2, k3, bitmap_from_base64(uuid) from hive.test.hive_bitmap_table;\n"})})]})}function p(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return s}});var t=n(667294);let a={},r=t.createContext(a);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);