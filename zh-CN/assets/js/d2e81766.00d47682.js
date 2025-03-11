"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["639430"],{998303:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>i,metadata:()=>c,assets:()=>l,toc:()=>a,contentTitle:()=>s});var c=JSON.parse('{"id":"lakehouse/datalake-analytics/tpch","title":"TPCH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/tpch.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/tpch","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/tpch","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TPCH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u963F\u91CC\u4E91 DLF","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/dlf"},"next":{"title":"TPCDS","permalink":"/zh-CN/docs/3.0/lakehouse/datalake-analytics/tpcds"}}'),r=t("785893"),o=t("250065");let i={title:"TPCH",language:"zh-CN"},s=void 0,l={},a=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u7F16\u8BD1 TPCH Connector",id:"\u7F16\u8BD1-tpch-connector",level:2},{value:"\u90E8\u7F72 TPCH Connector",id:"\u90E8\u7F72-tpch-connector",level:2},{value:"\u521B\u5EFA TPCH Catalog",id:"\u521B\u5EFA-tpch-catalog",level:2},{value:"\u4F7F\u7528 TPCH Catalog",id:"\u4F7F\u7528-tpch-catalog",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3},{value:"\u5FEB\u901F\u6784\u5EFA TPCH \u6D4B\u8BD5\u6570\u636E\u96C6",id:"\u5FEB\u901F\u6784\u5EFA-tpch-\u6D4B\u8BD5\u6570\u636E\u96C6",level:4}];function h(n){let e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,r.jsxs)(e.p,{children:["TPCH Catalog \u901A\u8FC7 ",(0,r.jsx)(e.a,{href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide",children:"Trino Connector"})," \u517C\u5BB9\u6846\u67B6\uFF0C\u4F7F\u7528 ",(0,r.jsx)(e.a,{href:"https://trino.io/docs/current/connector/tpch.html",children:"TPCH Connector"})," \u6765\u5FEB\u901F\u6784\u5EFA TPCH \u6D4B\u8BD5\u96C6\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u8BE5\u529F\u80FD\u81EA Doris 3.0.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})}),"\n",(0,r.jsx)(e.h2,{id:"\u7F16\u8BD1-tpch-connector",children:"\u7F16\u8BD1 TPCH Connector"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u9700\u8981 JDK 17 \u7248\u672C\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpch\nmvn clean install -DskipTest\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5B8C\u6210\u7F16\u8BD1\u540E\uFF0C\u4F1A\u5728 ",(0,r.jsx)(e.code,{children:"trino/plugin/trino-tpch/target/"})," \u4E0B\u5F97\u5230 ",(0,r.jsx)(e.code,{children:"trino-tpch-435/"})," \u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u9884\u7F16\u8BD1\u7684 ",(0,r.jsx)(e.a,{href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpch-435.tar.gz",children:"trino-tpch-435.tar.gz"})," \u5E76\u89E3\u538B\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u90E8\u7F72-tpch-connector",children:"\u90E8\u7F72 TPCH Connector"}),"\n",(0,r.jsxs)(e.p,{children:["\u5C06 ",(0,r.jsx)(e.code,{children:"trino-tpch-435/"})," \u76EE\u5F55\u653E\u5230\u6240\u6709 FE \u548C BE \u90E8\u7F72\u8DEF\u5F84\u7684 ",(0,r.jsx)(e.code,{children:"connectors/"})," \u76EE\u5F55\u4E0B\u3002\uFF08\u5982\u679C\u6CA1\u6709\uFF0C\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\uFF09\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u251C\u2500\u2500 bin\n\u251C\u2500\u2500 conf\n\u251C\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251C\u2500\u2500 trino-tpch-435\n...\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u5EFA\u8BAE\u91CD\u542F FE\u3001BE \u8282\u70B9\u4EE5\u786E\u4FDD Connector \u53EF\u4EE5\u88AB\u6B63\u786E\u52A0\u8F7D\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u521B\u5EFA-tpch-catalog",children:"\u521B\u5EFA TPCH Catalog"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG `tpch` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpch",\n    "trino.tpch.column-naming" = "STANDARD",\n    "trino.tpch.splits-per-node" = "32"\n);\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,r.jsx)(e.code,{children:"tpch.splits-per-node"})," \u4E3A\u5E76\u53D1\u6570\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A BE \u5355\u673A\u6838\u6570\u7684 2 \u500D\uFF0C\u53EF\u4EE5\u83B7\u5F97\u6700\u4F18\u7684\u5E76\u53D1\u5EA6\u3002\u63D0\u5347\u6570\u636E\u751F\u6210\u6548\u7387\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:'"tpch.column-naming" = "STANDARD"'})," \u65F6\uFF0CTPCH \u8868\u4E2D\u7684\u5217\u540D\uFF0C\u90FD\u4F1A\u4EE5\u8868\u540D\u7F29\u5199\u5F00\u5934\uFF0C\u6BD4\u5982 ",(0,r.jsx)(e.code,{children:"l_orderkey"}),"\uFF0C\u5426\u5219\uFF0C\u662F ",(0,r.jsx)(e.code,{children:"orderkey"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528-tpch-catalog",children:"\u4F7F\u7528 TPCH Catalog"}),"\n",(0,r.jsxs)(e.p,{children:["TPCH Catalog \u4E2D\u9884\u5236\u4E86\u4E0D\u540C Scale Factor \u7684 TPCH \u6570\u636E\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"SHOW DATABASES"})," \u548C ",(0,r.jsx)(e.code,{children:"SHOW TABLES"})," \u547D\u4EE4\u67E5\u770B\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> SWITCH tpch;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n11 rows in set (0.00 sec)\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+---------------+\n| Tables_in_sf1 |\n+---------------+\n| customer      |\n| lineitem      |\n| nation        |\n| orders        |\n| part          |\n| partsupp      |\n| region        |\n| supplier      |\n+---------------+\n8 rows in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u8FC7 SELECT \u8BED\u53E5\u53EF\u4EE5\u76F4\u63A5\u67E5\u8BE2\u8FD9\u4E9B\u8868\u3002"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u8FD9\u4E9B\u9884\u5236\u6570\u636E\u96C6\u7684\u6570\u636E\uFF0C\u5E76\u6CA1\u6709\u5B9E\u9645\u5B58\u50A8\uFF0C\u800C\u662F\u5728\u67E5\u8BE2\u65F6\u5B9E\u65F6\u751F\u6210\u7684\u3002\u6240\u4EE5\u8FD9\u4E9B\u9884\u5236\u6570\u636E\u96C6\u4E0D\u9002\u5408\u7528\u6765\u76F4\u63A5\u8FDB\u884C Benchmark \u6D4B\u8BD5\u3002\u9002\u7528\u4E8E\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"INSERT INTO SELECT"})," \u5C06\u6570\u636E\u96C6\u5199\u5165\u5230\u5176\u4ED6\u76EE\u7684\u8868\uFF08\u5982 Doris \u5185\u8868\u3001Hive\u3001Iceberg \u7B49\u6240\u6709 Doris \u652F\u6301\u5199\u5165\u7684\u6570\u636E\u6E90\uFF09\u540E\uFF0C\u5BF9\u76EE\u7684\u8868\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\u3002"]})}),"\n",(0,r.jsx)(e.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,r.jsx)(e.h4,{id:"\u5FEB\u901F\u6784\u5EFA-tpch-\u6D4B\u8BD5\u6570\u636E\u96C6",children:"\u5FEB\u901F\u6784\u5EFA TPCH \u6D4B\u8BD5\u6570\u636E\u96C6"}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u4EE5\u901A\u8FC7 CTAS \u8BED\u53E5\u5FEB\u901F\u6784\u5EFA\u4E00\u4E2A TPCH \u6D4B\u8BD5\u6570\u636E\u96C6\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'CREATE TABLE hive.tpch100.customer PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.customer  ;\nCREATE TABLE hive.tpch100.lineitem PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.lineitem  ;\nCREATE TABLE hive.tpch100.nation   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.nation    ;\nCREATE TABLE hive.tpch100.orders   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.orders    ;\nCREATE TABLE hive.tpch100.part     PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.part      ;\nCREATE TABLE hive.tpch100.partsupp PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.partsupp  ;\nCREATE TABLE hive.tpch100.region   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.region    ;\nCREATE TABLE hive.tpch100.supplier PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpch.sf100.supplier  ;\n'})}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u5728\u5305\u542B 3 \u4E2A 16C BE \u8282\u70B9\u7684 Doris \u96C6\u7FA4\u4E0A\uFF0C\u521B\u5EFA\u4E00\u4E2A TPCH 1000 \u7684 Hive \u6570\u636E\u96C6\uFF0C\u5927\u7EA6\u9700\u8981 25 \u5206\u949F\uFF0CTPCH 10000 \u5927\u7EA6\u9700\u8981 4 \u5230 5 \u4E2A\u5C0F\u65F6\u3002"})})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return i}});var c=t(667294);let r={},o=c.createContext(r);function i(n){let e=c.useContext(o);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),c.createElement(o.Provider,{value:e},n.children)}}}]);