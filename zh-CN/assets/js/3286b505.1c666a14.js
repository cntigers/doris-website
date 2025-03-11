"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["77422"],{159253:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"lakehouse/best-practices/doris-paimon","title":"\u4F7F\u7528 Doris \u548C Paimon","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/best-practices/doris-paimon.md","sourceDirName":"lakehouse/best-practices","slug":"/lakehouse/best-practices/doris-paimon","permalink":"/zh-CN/docs/dev/lakehouse/best-practices/doris-paimon","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528 Doris \u548C Paimon","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Doris \u548C Hudi","permalink":"/zh-CN/docs/dev/lakehouse/best-practices/doris-hudi"},"next":{"title":"\u4F7F\u7528 Doris \u548C Iceberg","permalink":"/zh-CN/docs/dev/lakehouse/best-practices/doris-iceberg"}}'),i=s("785893"),a=s("250065");let c={title:"\u4F7F\u7528 Doris \u548C Paimon",language:"zh-CN"},r=void 0,o={},l=[{value:"Apache Doris &amp; Paimon",id:"apache-doris--paimon",level:2},{value:"\u4F7F\u7528\u6307\u5357",id:"\u4F7F\u7528\u6307\u5357",level:2},{value:"01 \u73AF\u5883\u51C6\u5907",id:"01-\u73AF\u5883\u51C6\u5907",level:3},{value:"02 \u73AF\u5883\u90E8\u7F72",id:"02-\u73AF\u5883\u90E8\u7F72",level:3},{value:"03 \u6570\u636E\u51C6\u5907",id:"03-\u6570\u636E\u51C6\u5907",level:3},{value:"04 \u6570\u636E\u67E5\u8BE2",id:"04-\u6570\u636E\u67E5\u8BE2",level:3},{value:"05 \u8BFB\u53D6\u589E\u91CF\u6570\u636E",id:"05-\u8BFB\u53D6\u589E\u91CF\u6570\u636E",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u4F5C\u4E3A\u4E00\u79CD\u5168\u65B0\u7684\u5F00\u653E\u5F0F\u7684\u6570\u636E\u7BA1\u7406\u67B6\u6784\uFF0C\u6E56\u4ED3\u4E00\u4F53\uFF08Data Lakehouse\uFF09\u878D\u5408\u4E86\u6570\u636E\u4ED3\u5E93\u7684\u9AD8\u6027\u80FD\u3001\u5B9E\u65F6\u6027\u4EE5\u53CA\u6570\u636E\u6E56\u7684\u4F4E\u6210\u672C\u3001\u7075\u6D3B\u6027\u7B49\u4F18\u52BF\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u52A0\u4FBF\u6377\u5730\u6EE1\u8DB3\u5404\u79CD\u6570\u636E\u5904\u7406\u5206\u6790\u7684\u9700\u6C42\uFF0C\u5728\u4F01\u4E1A\u7684\u5927\u6570\u636E\u4F53\u7CFB\u4E2D\u5DF2\u7ECF\u5F97\u5230\u8D8A\u6765\u8D8A\u591A\u7684\u5E94\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8FC7\u53BB\u591A\u4E2A\u7248\u672C\u4E2D\uFF0CApache Doris \u6301\u7EED\u52A0\u6DF1\u4E0E\u6570\u636E\u6E56\u7684\u878D\u5408\uFF0C\u5F53\u524D\u5DF2\u6F14\u8FDB\u51FA\u4E00\u5957\u6210\u719F\u7684\u6E56\u4ED3\u4E00\u4F53\u89E3\u51B3\u65B9\u6848\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u81EA 0.15 \u7248\u672C\u8D77\uFF0CApache Doris \u5F15\u5165 Hive \u548C Iceberg \u5916\u90E8\u8868\uFF0C\u5C1D\u8BD5\u5728 Apache Iceberg \u4E4B\u4E0A\u63A2\u7D22\u4E0E\u6570\u636E\u6E56\u7684\u80FD\u529B\u7ED3\u5408\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u81EA 1.2 \u7248\u672C\u8D77\uFF0CApache Doris \u6B63\u5F0F\u5F15\u5165 Multi-Catalog \u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u591A\u79CD\u6570\u636E\u6E90\u7684\u81EA\u52A8\u5143\u6570\u636E\u6620\u5C04\u548C\u6570\u636E\u8BBF\u95EE\u3001\u5E76\u5BF9\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u548C\u67E5\u8BE2\u6267\u884C\u7B49\u65B9\u9762\u505A\u4E86\u8BF8\u591A\u6027\u80FD\u4F18\u5316\uFF0C\u5B8C\u5168\u5177\u5907\u4E86\u6784\u5EFA\u6781\u901F\u6613\u7528 Lakehouse \u67B6\u6784\u7684\u80FD\u529B\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 2.1 \u7248\u672C\u4E2D\uFF0CApache Doris \u6E56\u4ED3\u4E00\u4F53\u67B6\u6784\u5F97\u5230\u5168\u9762\u52A0\u5F3A\uFF0C\u4E0D\u4EC5\u589E\u5F3A\u4E86\u4E3B\u6D41\u6570\u636E\u6E56\u683C\u5F0F\uFF08Hudi\u3001Iceberg\u3001Paimon \u7B49\uFF09\u7684\u8BFB\u53D6\u548C\u5199\u5165\u80FD\u529B\uFF0C\u8FD8\u5F15\u5165\u4E86\u591A SQL \u65B9\u8A00\u517C\u5BB9\u3001\u53EF\u4ECE\u539F\u6709\u7CFB\u7EDF\u65E0\u7F1D\u5207\u6362\u81F3 Apache Doris\u3002\u5728\u6570\u636E\u79D1\u5B66\u53CA\u5927\u89C4\u6A21\u6570\u636E\u8BFB\u53D6\u573A\u666F\u4E0A\uFF0CDoris \u96C6\u6210\u4E86 Arrow Flight \u9AD8\u901F\u8BFB\u53D6\u63A5\u53E3\uFF0C\u4F7F\u5F97\u6570\u636E\u4F20\u8F93\u6548\u7387\u5B9E\u73B0 100 \u500D\u7684\u63D0\u5347\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u4F7F\u7528 Doris \u548C Paimon \u6784\u5EFA Lakehouse",src:s(855237).Z+"",width:"2560",height:"1280"})}),"\n",(0,i.jsx)(n.h2,{id:"apache-doris--paimon",children:"Apache Doris & Paimon"}),"\n",(0,i.jsx)(n.p,{children:"Apache Paimon \u662F\u4E00\u79CD\u6570\u636E\u6E56\u683C\u5F0F\uFF0C\u5E76\u521B\u65B0\u6027\u5730\u5C06\u6570\u636E\u6E56\u683C\u5F0F\u548C LSM \u7ED3\u6784\u7684\u4F18\u52BF\u76F8\u7ED3\u5408\uFF0C\u6210\u529F\u5C06\u9AD8\u6548\u7684\u5B9E\u65F6\u6D41\u66F4\u65B0\u80FD\u529B\u5F15\u5165\u6570\u636E\u6E56\u67B6\u6784\u4E2D\uFF0C\u8FD9\u4F7F\u5F97 Paimon \u80FD\u591F\u5B9E\u73B0\u6570\u636E\u7684\u9AD8\u6548\u7BA1\u7406\u548C\u5B9E\u65F6\u5206\u6790\uFF0C\u4E3A\u6784\u5EFA\u5B9E\u65F6\u6E56\u4ED3\u67B6\u6784\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u652F\u6491\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4E3A\u4E86\u5145\u5206\u53D1\u6325 Paimon \u7684\u80FD\u529B\uFF0C\u63D0\u9AD8\u5BF9 Paimon \u6570\u636E\u7684\u67E5\u8BE2\u6548\u7387\uFF0CApache Doris \u5BF9 Paimon \u7684\u591A\u9879\u6700\u65B0\u7279\u6027\u63D0\u4F9B\u4E86\u539F\u751F\u652F\u6301\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652F\u6301 Hive Metastore\u3001FileSystem \u7B49\u591A\u79CD\u7C7B\u578B\u7684 Paimon Catalog\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u539F\u751F\u652F\u6301 Paimon 0.6 \u7248\u672C\u53D1\u5E03\u7684 Primary Key Table Read Optimized \u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u539F\u751F\u652F\u6301 Paimon 0.8 \u7248\u672C\u53D1\u5E03\u7684 Primary Key Table Deletion Vector \u529F\u80FD\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u57FA\u4E8E Apache Doris \u7684\u9AD8\u6027\u80FD\u67E5\u8BE2\u5F15\u64CE\u548C Apache Paimon \u9AD8\u6548\u7684\u5B9E\u65F6\u6D41\u66F4\u65B0\u80FD\u529B\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9E\u73B0\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6570\u636E\u5B9E\u65F6\u5165\u6E56\uFF1A\u501F\u52A9 Paimon \u7684 LSM-Tree \u6A21\u578B\uFF0C\u6570\u636E\u5165\u6E56\u7684\u65F6\u6548\u6027\u53EF\u4EE5\u964D\u4F4E\u5230\u5206\u949F\u7EA7\uFF1B\u540C\u65F6\uFF0CPaimon \u652F\u6301\u5305\u62EC\u805A\u5408\u3001\u53BB\u91CD\u3001\u90E8\u5206\u5217\u66F4\u65B0\u5728\u5185\u7684\u591A\u79CD\u6570\u636E\u66F4\u65B0\u80FD\u529B\uFF0C\u4F7F\u5F97\u6570\u636E\u6D41\u52A8\u66F4\u52A0\u7075\u6D3B\u9AD8\u6548\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9AD8\u6027\u80FD\u6570\u636E\u5904\u7406\u5206\u6790\uFF1APaimon \u6240\u63D0\u4F9B\u7684 Append Only Table\u3001Read Optimized\u3001Deletion Vector \u7B49\u6280\u672F\uFF0C\u53EF\u4E0E Doris \u5F3A\u5927\u7684\u67E5\u8BE2\u5F15\u64CE\u5BF9\u63A5\uFF0C\u5B9E\u73B0\u6E56\u4E0A\u6570\u636E\u7684\u5FEB\u901F\u67E5\u8BE2\u53CA\u5206\u6790\u54CD\u5E94\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672A\u6765 Apache Doris \u5C06\u4F1A\u9010\u6B65\u652F\u6301\u5305\u62EC Time Travel\u3001\u589E\u91CF\u6570\u636E\u8BFB\u53D6\u5728\u5185\u7684 Apache Paimon \u66F4\u591A\u9AD8\u7EA7\u7279\u6027\uFF0C\u5171\u540C\u6784\u5EFA\u7EDF\u4E00\u3001\u9AD8\u6027\u80FD\u3001\u5B9E\u65F6\u7684\u6E56\u4ED3\u5E73\u53F0\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u5C06\u4F1A\u518D Docker \u73AF\u5883\u4E2D\uFF0C\u4E3A\u8BFB\u8005\u8BB2\u89E3\u5982\u4F55\u5FEB\u901F\u642D\u5EFA Apache Doris + Apache Paimon \u6D4B\u8BD5 & \u6F14\u793A\u73AF\u5883\uFF0C\u5E76\u5C55\u793A\u5404\u529F\u80FD\u7684\u4F7F\u7528\u64CD\u4F5C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4E8E\u66F4\u591A\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/lakehouse/catalogs/paimon-catalog",children:"Paimon Catalog"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u6307\u5357",children:"\u4F7F\u7528\u6307\u5357"}),"\n",(0,i.jsxs)(n.p,{children:["\u672C\u6587\u6D89\u53CA\u6240\u6709\u811A\u672C\u548C\u4EE3\u7801\u53EF\u4EE5\u4ECE\u8BE5\u5730\u5740\u83B7\u53D6\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon",children:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"})]}),"\n",(0,i.jsx)(n.h3,{id:"01-\u73AF\u5883\u51C6\u5907",children:"01 \u73AF\u5883\u51C6\u5907"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u793A\u4F8B\u91C7\u7528 Docker Compose \u90E8\u7F72\uFF0C\u7EC4\u4EF6\u53CA\u7248\u672C\u53F7\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7EC4\u4EF6\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u7248\u672C"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Doris"}),(0,i.jsx)(n.td,{children:"\u9ED8\u8BA4 2.1.5\uFF0C\u53EF\u4FEE\u6539"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Paimon"}),(0,i.jsx)(n.td,{children:"0.8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Flink"}),(0,i.jsx)(n.td,{children:"1.18"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MinIO"}),(0,i.jsx)(n.td,{children:"RELEASE.2024-04-29T09-56-05Z"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"02-\u73AF\u5883\u90E8\u7F72",children:"02 \u73AF\u5883\u90E8\u7F72"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u6240\u6709\u7EC4\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bash ./start_all.sh"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u811A\u672C\uFF0C\u767B\u9646 Flink \u547D\u4EE4\u884C\u6216 Doris \u547D\u4EE4\u884C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- login flink\nbash ./start_flink_client.sh\n\n-- login doris\nbash ./start_doris_client.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"03-\u6570\u636E\u51C6\u5907",children:"03 \u6570\u636E\u51C6\u5907"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u767B\u9646 Flink \u547D\u4EE4\u884C\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u4E00\u5F20\u9884\u6784\u5EFA\u7684\u8868\u3002\u8868\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E00\u4E9B\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Flink SQL \u8FDB\u884C\u67E5\u770B\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"Flink SQL> use paimon.db_paimon;\n[INFO] Execute statement succeed.\n\nFlink SQL> show tables;\n+------------+\n| table name |\n+------------+\n|   customer |\n+------------+\n1 row in set\n\nFlink SQL> show create table customer;\n+------------------------------------------------------------------------+\n|                                                                 result |\n+------------------------------------------------------------------------+\n| CREATE TABLE `paimon`.`db_paimon`.`customer` (\n  `c_custkey` INT NOT NULL,\n  `c_name` VARCHAR(25),\n  `c_address` VARCHAR(40),\n  `c_nationkey` INT NOT NULL,\n  `c_phone` CHAR(15),\n  `c_acctbal` DECIMAL(12, 2),\n  `c_mktsegment` CHAR(10),\n  `c_comment` VARCHAR(117),\n  CONSTRAINT `PK_c_custkey_c_nationkey` PRIMARY KEY (`c_custkey`, `c_nationkey`) NOT ENFORCED\n) PARTITIONED BY (`c_nationkey`)\nWITH (\n  'bucket' = '1',\n  'path' = 's3://warehouse/wh/db_paimon.db/customer',\n  'deletion-vectors.enabled' = 'true'\n)\n |\n+-------------------------------------------------------------------------+\n1 row in set\n\nFlink SQL> desc customer;\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|         name |           type |  null |                         key | extras | watermark |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|    c_custkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|       c_name |    VARCHAR(25) |  TRUE |                             |        |           |\n|    c_address |    VARCHAR(40) |  TRUE |                             |        |           |\n|  c_nationkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|      c_phone |       CHAR(15) |  TRUE |                             |        |           |\n|    c_acctbal | DECIMAL(12, 2) |  TRUE |                             |        |           |\n| c_mktsegment |       CHAR(10) |  TRUE |                             |        |           |\n|    c_comment |   VARCHAR(117) |  TRUE |                             |        |           |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n8 rows in set\n\nFlink SQL> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n| c_custkey |             c_name |                      c_address | c_nationkey |         c_phone | c_acctbal | c_mktsegment |                      c_comment |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n|         1 | Customer#000000001 |              IVhzIApeRb ot,c,E |          15 | 25-989-741-2988 |    711.56 |     BUILDING | to the even, regular platel... |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak |          13 | 23-768-687-3665 |    121.65 |   AUTOMOBILE | l accounts. blithely ironic... |\n|         3 | Customer#000000003 |                   MG9kdTD2WBHm |           1 | 11-719-748-3364 |   7498.12 |   AUTOMOBILE |  deposits eat slyly ironic,... |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tl... |          15 | 25-430-914-2194 |   3471.53 |     BUILDING | cial ideas. final, furious ... |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n4 rows in set\n"})}),"\n",(0,i.jsx)(n.h3,{id:"04-\u6570\u636E\u67E5\u8BE2",children:"04 \u6570\u636E\u67E5\u8BE2"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u4E0B\u6240\u793A\uFF0CDoris \u96C6\u7FA4\u4E2D\u5DF2\u7ECF\u521B\u5EFA\u4E86\u540D\u4E3A ",(0,i.jsx)(n.code,{children:"paimon"})," \u7684 Catalog\uFF08\u53EF\u901A\u8FC7 SHOW CATALOGS \u67E5\u770B\uFF09\u3002\u4EE5\u4E0B\u4E3A\u8BE5 Catalog \u7684\u521B\u5EFA\u8BED\u53E5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- \u5DF2\u521B\u5EFA\uFF0C\u65E0\u9700\u6267\u884C\nCREATE CATALOG `paimon` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://warehouse/wh/",\n    "s3.endpoint"="http://minio:9000",\n    "s3.access_key"="admin",\n    "s3.secret_key"="password",\n    "s3.region"="us-east-1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4F60\u53EF\u767B\u5F55\u5230 Doris \u4E2D\u67E5\u8BE2 Paimon \u7684\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> use paimon.db_paimon;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+---------------------+\n| Tables_in_db_paimon |\n+---------------------+\n| customer            |\n+---------------------+\n1 row in set (0.00 sec)\n\nmysql> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |    711.56 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                         |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                        |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J |          15 | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e                                                       |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n4 rows in set (1.89 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"05-\u8BFB\u53D6\u589E\u91CF\u6570\u636E",children:"05 \u8BFB\u53D6\u589E\u91CF\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Flink SQL \u66F4\u65B0 Paimon \u8868\u4E2D\u7684\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"Flink SQL> update customer set c_address='c_address_update' where c_nationkey = 1;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: ff838b7b778a94396b332b0d93c8f7ac\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7B49 Flink SQL \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5728 Doris \u4E2D\u53EF\u76F4\u63A5\u67E5\u770B\u5230\u6700\u65B0\u7684\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> select * from customer where c_nationkey=1 limit 2;\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address       | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         3 | Customer#000000003 | c_address_update |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|       513 | Customer#000000513 | c_address_update |           1 | 11-861-303-6887 |    955.37 | HOUSEHOLD    | press along the quickly regular instructions. regular requests against the carefully ironic s          |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n2 rows in set (0.19 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"benchmark",children:"Benchmark"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u5728 Paimon\uFF080.8\uFF09\u7248\u672C\u7684 TPCDS 1000 \u6570\u636E\u96C6\u4E0A\u8FDB\u884C\u4E86\u7B80\u5355\u7684\u6D4B\u8BD5\uFF0C\u5206\u522B\u4F7F\u7528\u4E86 Apache Doris 2.1.5 \u7248\u672C\u548C Trino 422 \u7248\u672C\uFF0C\u5747\u5F00\u542F Primary Key Table Read Optimized \u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(895453).Z+"",width:"1280",height:"591"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u6D4B\u8BD5\u7ED3\u679C\u53EF\u4EE5\u770B\u5230\uFF0CDoris \u5728\u6807\u51C6\u9759\u6001\u6D4B\u8BD5\u96C6\u4E0A\u7684\u5E73\u5747\u67E5\u8BE2\u6027\u80FD\u662F Trino \u7684 3~5 \u500D\u3002\u540E\u7EED\u6211\u4EEC\u5C06\u9488\u5BF9 Deletion Vector \u8FDB\u884C\u4F18\u5316\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u771F\u5B9E\u4E1A\u52A1\u573A\u666F\u4E0B\u7684\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E\u57FA\u7EBF\u6570\u636E\u6765\u8BF4\uFF0CApache Paimon \u5728 0.6 \u7248\u672C\u4E2D\u5F15\u5165 Primary Key Table Read Optimized \u529F\u80FD\u540E\uFF0C\u4F7F\u5F97\u67E5\u8BE2\u5F15\u64CE\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5E95\u5C42\u7684 Parquet/ORC \u6587\u4EF6\uFF0C\u5927\u5E45\u63D0\u5347\u4E86\u57FA\u7EBF\u6570\u636E\u7684\u8BFB\u53D6\u6548\u7387\u3002\u5BF9\u4E8E\u5C1A\u672A\u5408\u5E76\u7684\u589E\u91CF\u6570\u636E\uFF08INSERT\u3001UPDATE \u6216 DELETE \u6240\u4EA7\u751F\u7684\u6570\u636E\u589E\u91CF\uFF09\u6765\u8BF4\uFF0C\u53EF\u4EE5\u901A\u8FC7 Merge-on-Read \u7684\u65B9\u5F0F\u8FDB\u884C\u8BFB\u53D6\u3002\u6B64\u5916\uFF0CPaimon \u5728 0.8 \u7248\u672C\u4E2D\u8FD8\u5F15\u5165\u7684 Deletion Vector \u529F\u80FD\uFF0C\u80FD\u591F\u8FDB\u4E00\u6B65\u63D0\u5347\u67E5\u8BE2\u5F15\u64CE\u5BF9\u589E\u91CF\u6570\u636E\u7684\u8BFB\u53D6\u6548\u7387\u3002\nApache Doris \u652F\u6301\u901A\u8FC7\u539F\u751F\u7684 Reader \u8BFB\u53D6 Deletion Vector \u5E76\u8FDB\u884C Merge on Read\uFF0C\u6211\u4EEC\u901A\u8FC7 Doris \u7684 EXPLAIN \u8BED\u53E5\uFF0C\u6765\u6F14\u793A\u5728\u4E00\u4E2A\u67E5\u8BE2\u4E2D\uFF0C\u57FA\u7EBF\u6570\u636E\u548C\u589E\u91CF\u6570\u636E\u7684\u67E5\u8BE2\u65B9\u5F0F\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> explain verbose select * from customer where c_nationkey < 3;\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                                                                |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| ...............                                                                                                                                |\n|                                                                                                                                                |\n|   0:VPAIMON_SCAN_NODE(68)                                                                                                                      |\n|      table: customer                                                                                                                           |\n|      predicates: (c_nationkey[#3] < 3)                                                                                                         |\n|      inputSplitNum=4, totalFileSize=238324, scanRanges=4                                                                                       |\n|      partition=3/0                                                                                                                             |\n|      backends:                                                                                                                                 |\n|        10002                                                                                                                                   |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-15cee5b7-1bd7-42ca-9314-56d92c62c03b-0.orc start: 0 length: 66600 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-5d50255a-2215-4010-b976-d5dc656f3444-0.orc start: 0 length: 44501 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=2/bucket-0/data-e98fb7ef-ec2b-4ad5-a496-713cb9481d56-0.orc start: 0 length: 64059 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=0/bucket-0/data-431be05d-50fa-401f-9680-d646757d0f95-0.orc start: 0 length: 63164 |\n|      cardinality=18751, numNodes=1                                                                                                             |\n|      pushdown agg=NONE                                                                                                                         |\n|      paimonNativeReadSplits=4/4                                                                                                                |\n|      PaimonSplitStats:                                                                                                                         |\n|        SplitStat [type=NATIVE, rowCount=1542, rawFileConvertable=true, hasDeletionVector=true]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|      tuple ids: 0\n| ...............                                                                                                           |                                                                                                  |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n67 rows in set (0.23 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5BF9\u4E8E\u521A\u624D\u901A\u8FC7 Flink SQL \u66F4\u65B0\u7684\u8868\uFF0C\u5305\u542B 4 \u4E2A\u5206\u7247\uFF0C\u5E76\u4E14\u5168\u90E8\u5206\u7247\u90FD\u53EF\u4EE5\u901A\u8FC7 Native Reader \u8FDB\u884C\u8BBF\u95EE\uFF08",(0,i.jsx)(n.code,{children:"paimonNativeReadSplits=4/4"}),"\uFF09\u3002\u5E76\u4E14\u7B2C\u4E00\u4E2A\u5206\u7247\u7684",(0,i.jsx)(n.code,{children:"hasDeletionVector"}),"\u7684\u5C5E\u6027\u4E3A",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u8868\u793A\u8BE5\u5206\u7247\u6709\u5BF9\u5E94\u7684 Deletion Vector\uFF0C\u8BFB\u53D6\u65F6\u4F1A\u6839\u636E Deletion Vector \u8FDB\u884C\u6570\u636E\u8FC7\u6EE4\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},855237:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/lakehouse-architecture-for-doris-and-paimon-c3b290691e3b669dcb3c28d1dd269de4.png"},895453:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/lakehouse-paimon-benchmark-e541bdf261a3a2061218e99665173249.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var t=s(667294);let i={},a=t.createContext(i);function c(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);