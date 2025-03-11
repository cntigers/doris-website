"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["504780"],{878944:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"lakehouse/best-practices/tpcds","title":"Generating TPC-DS on Hive/Iceberg","description":"\x3c!--","source":"@site/docs/lakehouse/best-practices/tpcds.md","sourceDirName":"lakehouse/best-practices","slug":"/lakehouse/best-practices/tpcds","permalink":"/docs/dev/lakehouse/best-practices/tpcds","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Generating TPC-DS on Hive/Iceberg","language":"en"},"sidebar":"docs","previous":{"title":"Generating TPC-H on Hive/Iceberg","permalink":"/docs/dev/lakehouse/best-practices/tpch"},"next":{"title":"Log Storage and Analysis","permalink":"/docs/dev/log-storage-analysis"}}'),r=n("785893"),o=n("250065");let i={title:"Generating TPC-DS on Hive/Iceberg",language:"en"},c=void 0,a={},d=[{value:"Compile TPCDS Connector",id:"compile-tpcds-connector",level:2},{value:"Deploy TPCDS Connector",id:"deploy-tpcds-connector",level:2},{value:"Create TPCDS Catalog",id:"create-tpcds-catalog",level:2},{value:"Use TPCDS Catalog",id:"use-tpcds-catalog",level:2},{value:"Build TPCDS Test Data Set",id:"build-tpcds-test-data-set",level:2}];function l(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Doris supports using the ",(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/connector/tpcds.html",children:"TPCDS Connector"})," to quickly build TPCDS test sets through the ",(0,r.jsx)(t.a,{href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide",children:"Trino Connector"})," compatible framework."]}),"\n",(0,r.jsx)(t.p,{children:"Combined with the data write-back function of Hive/Iceberg tables, you can quickly build TPCDS test data sets for Doris, Hive, and Iceberg tables through Doris."}),"\n",(0,r.jsx)(t.p,{children:"This document mainly introduces how to deploy and use the TPCDS Connector to build test data sets."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"This feature is supported starting from Doris version 3.0.0."})}),"\n",(0,r.jsx)(t.h2,{id:"compile-tpcds-connector",children:"Compile TPCDS Connector"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Requires JDK version 17."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpcds\nmvn clean install -DskipTest\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After compilation, you will get the ",(0,r.jsx)(t.code,{children:"trino-tpcds-435/"})," directory under ",(0,r.jsx)(t.code,{children:"trino/plugin/trino-tpcds/target/"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also directly download the precompiled ",(0,r.jsx)(t.a,{href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpcds-435.tar.gz",children:"trino-tpcds-435.tar.gz"})," and extract it."]}),"\n",(0,r.jsx)(t.h2,{id:"deploy-tpcds-connector",children:"Deploy TPCDS Connector"}),"\n",(0,r.jsxs)(t.p,{children:["Place the ",(0,r.jsx)(t.code,{children:"trino-tpcds-435/"})," directory under the ",(0,r.jsx)(t.code,{children:"connectors/"})," directory of all FE and BE deployment paths. (If not present, you can create it manually)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"\u251C\u2500\u2500 bin\n\u251C\u2500\u2500 conf\n\u251C\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251C\u2500\u2500 trino-tpcds-435\n...\n"})}),"\n",(0,r.jsx)(t.p,{children:"After deployment, it is recommended to restart the FE and BE nodes to ensure the Connector can be loaded correctly."}),"\n",(0,r.jsx)(t.h2,{id:"create-tpcds-catalog",children:"Create TPCDS Catalog"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'CREATE CATALOG `tpcds` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpcds",\n    "trino.tpcds.split-count" = "32"\n);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"tpcds.split-count"})," is the concurrency number, which is recommended to be set to 2 times the number of cores per BE machine to achieve optimal concurrency. Improve data generation efficiency."]}),"\n",(0,r.jsx)(t.h2,{id:"use-tpcds-catalog",children:"Use TPCDS Catalog"}),"\n",(0,r.jsxs)(t.p,{children:["The TPCDS Catalog has pre-built TPCDS datasets of different Scale Factors, which can be viewed using the ",(0,r.jsx)(t.code,{children:"SHOW DATABASES"})," and ",(0,r.jsx)(t.code,{children:"SHOW TABLES"})," commands."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"mysql> SWITCH tpcds;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+------------------------+\n| Tables_in_sf1          |\n+------------------------+\n| call_center            |\n| catalog_page           |\n| catalog_returns        |\n| catalog_sales          |\n| customer               |\n| customer_address       |\n| customer_demographics  |\n| date_dim               |\n| dbgen_version          |\n| household_demographics |\n| income_band            |\n| inventory              |\n| item                   |\n| promotion              |\n| reason                 |\n| ship_mode              |\n| store                  |\n| store_returns          |\n| store_sales            |\n| time_dim               |\n| warehouse              |\n| web_page               |\n| web_returns            |\n| web_sales              |\n| web_site               |\n+------------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can directly query these tables using the SELECT statement."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The data of these pre-built datasets is not actually stored but is generated in real-time during queries. Therefore, these pre-built datasets are not suitable for direct Benchmark testing. They are suitable for writing datasets into other target tables (such as Doris internal tables, Hive, Iceberg, and other data sources that Doris supports writing to) through ",(0,r.jsx)(t.code,{children:"INSERT INTO SELECT"}),", and then performing performance testing on the target tables."]})}),"\n",(0,r.jsx)(t.h2,{id:"build-tpcds-test-data-set",children:"Build TPCDS Test Data Set"}),"\n",(0,r.jsx)(t.p,{children:"The following example quickly builds a TPCDS test data set on Hive using the CTAS statement:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE hive.tpcds100.call_center            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.call_center           ;\nCREATE TABLE hive.tpcds100.catalog_page           PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_page          ;\nCREATE TABLE hive.tpcds100.catalog_returns        PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_returns       ;\nCREATE TABLE hive.tpcds100.catalog_sales          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_sales         ;\nCREATE TABLE hive.tpcds100.customer               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer              ;\nCREATE TABLE hive.tpcds100.customer_address       PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_address      ;\nCREATE TABLE hive.tpcds100.customer_demographics  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_demographics ;\nCREATE TABLE hive.tpcds100.date_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.date_dim              ;\nCREATE TABLE hive.tpcds100.dbgen_version          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.dbgen_version         ;\nCREATE TABLE hive.tpcds100.household_demographics PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.household_demographics;\nCREATE TABLE hive.tpcds100.income_band            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.income_band           ;\nCREATE TABLE hive.tpcds100.inventory              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.inventory             ;\nCREATE TABLE hive.tpcds100.item                   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.item                  ;\nCREATE TABLE hive.tpcds100.promotion              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.promotion             ;\nCREATE TABLE hive.tpcds100.reason                 PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.reason                ;\nCREATE TABLE hive.tpcds100.ship_mode              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.ship_mode             ;\nCREATE TABLE hive.tpcds100.store                  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store                 ;\nCREATE TABLE hive.tpcds100.store_returns          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_returns         ;\nCREATE TABLE hive.tpcds100.store_sales            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_sales           ;\nCREATE TABLE hive.tpcds100.time_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.time_dim              ;\nCREATE TABLE hive.tpcds100.warehouse              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.warehouse             ;\nCREATE TABLE hive.tpcds100.web_page               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_page              ;\nCREATE TABLE hive.tpcds100.web_returns            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_returns           ;\nCREATE TABLE hive.tpcds100.web_sales              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_sales             ;\nCREATE TABLE hive.tpcds100.web_site               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_site              ;\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"In a Doris cluster with 3 16C BE nodes, creating a TPCDS 1000 Hive dataset takes about 3 to 4 hours."})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var s=n(667294);let r={},o=s.createContext(r);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);