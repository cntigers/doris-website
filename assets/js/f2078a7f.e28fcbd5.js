"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["244977"],{156089:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"lakehouse/lakehouse-best-practices/doris-lakesoul","title":"Using Doris and LakeSoul","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/lakehouse-best-practices/doris-lakesoul.md","sourceDirName":"lakehouse/lakehouse-best-practices","slug":"/lakehouse/lakehouse-best-practices/doris-lakesoul","permalink":"/docs/lakehouse/lakehouse-best-practices/doris-lakesoul","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Using Doris and LakeSoul","language":"en"},"sidebar":"docs","previous":{"title":"Using Doris and Iceberg","permalink":"/docs/lakehouse/lakehouse-best-practices/doris-iceberg"},"next":{"title":"Log Storage and Analysis","permalink":"/docs/log-storage-analysis"}}'),a=s("785893"),l=s("250065");let o={title:"Using Doris and LakeSoul",language:"en"},i="Apache Doris & LakeSoul",r={},c=[{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Data Query",id:"03-data-query",level:3},{value:"04 CDC Table Support",id:"04-cdc-table-support",level:3}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of data warehouses with the low cost and flexibility of data lakes, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."}),"\n",(0,a.jsx)(n.p,{children:"In recent versions, Apache Doris has deepened its integration with data lakes and has evolved a mature Data Lakehouse solution."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."}),"\n",(0,a.jsx)(n.li,{children:"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, enabling automatic metadata mapping and data access for various data sources, along with numerous performance optimizations for external data reading and query execution. It now fully possesses the ability to build a high-speed and user-friendly Lakehouse architecture."}),"\n",(0,a.jsx)(n.li,{children:"In version 2.1, Apache Doris' Data Lakehouse architecture was significantly enhanced, improving the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100-fold increase in data transfer efficiency."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Building lakehouse using doris and lakesoul",src:s(285993).Z+"",width:"2560",height:"1280"})}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"apache-doris--lakesoul",children:"Apache Doris & LakeSoul"})}),"\n",(0,a.jsx)(n.p,{children:"LakeSoul is a cloud-native lakehouse framework developed by DMetaSoul and donated to the Linux Foundation AI & Data Foundation in May 2023. It features high scalability in metadata management, ACID transactions, efficient and flexible upsert operations, schema evolution, and batch-stream integrated processing ."}),"\n",(0,a.jsx)(n.p,{children:"With Apache Doris' high-performance query engine and LakeSoul's efficient data management, users can achieve:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Real-time data ingestion into the lake: Leveraging LakeSoul's architecture, data can be ingested into the lake with high efficiency and low latency, supporting various data update capabilities including aggregation, deduplication, and partial column updates."}),"\n",(0,a.jsx)(n.li,{children:"High-performance data processing and analysis: LakeSoul's capabilities such as batch-stream integrated processing and schema evolution can be seamlessly integrated with Doris' powerful query engine, enabling fast querying and analysis responses for lake data."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In the future, Apache Doris will gradually support more advanced features of LakeSoul, such as CDC stream synchronization and automatic schema evolution, to jointly build a unified, high-performance, real-time lakehouse platform."}),"\n",(0,a.jsx)(n.p,{children:"This article will explain how to quickly set up an Apache Doris + LakeSoul testing & demonstration environment and demonstrate the usage of various features, showcasing the integration and benefits of using both systems in a lakehouse architecture ."}),"\n",(0,a.jsxs)(n.p,{children:["For more information, please refer to ",(0,a.jsx)(n.a,{href:"../../../lakehouse/datalake-analytics/lakesoul",children:"LakeSoul Catalog"})]}),"\n",(0,a.jsx)(n.h2,{id:"user-guide",children:"User Guide"}),"\n",(0,a.jsxs)(n.p,{children:["All scripts and code mentioned in this article can be obtained from this address: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/lakesoul",children:"https://github.com/apache/doris/tree/master/samples/datalake/lakesoul"})]}),"\n",(0,a.jsx)(n.h3,{id:"01-environment-preparation",children:"01 Environment Preparation"}),"\n",(0,a.jsx)(n.p,{children:"This article uses Docker Compose for deployment, with the following components and versions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Component"}),(0,a.jsx)(n.th,{children:"Version"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Apache Doris"}),(0,a.jsx)(n.td,{children:"Default 3.0.2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"LakeSoul"}),(0,a.jsx)(n.td,{children:"2.6.1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Postgres"}),(0,a.jsx)(n.td,{children:"14.5"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Apache Spark"}),(0,a.jsx)(n.td,{children:"3.3.1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Apache Flink"}),(0,a.jsx)(n.td,{children:"1.17"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"MinIO"}),(0,a.jsx)(n.td,{children:"RELEASE.2024-04-29T09-56-05Z"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"02-environment-deployment",children:"02 Environment Deployment"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start all components"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"bash ./start_all.sh\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"After starting, you can use the following script to log in to the Doris command line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- login doris\nbash ./start_doris_client.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"03-data-query",children:"03 Data Query"}),"\n",(0,a.jsxs)(n.p,{children:["As shown below, a Catalog named ",(0,a.jsx)(n.code,{children:"lakesoul"})," has been created in the Doris cluster (can be viewed using ",(0,a.jsx)(n.code,{children:"SHOW CATALOGS"}),"). The following is the creation statement for this Catalog:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  -- Already created\n  CREATE CATALOG `lakesoul` PROPERTIES (\n    'type'='lakesoul',\n    'lakesoul.pg.username'='lakesoul_test',\n    'lakesoul.pg.password'='lakesoul_test',\n    'lakesoul.pg.url'='jdbc:postgresql://lakesoul-meta-pg:5432/lakesoul_test?stringtype=unspecified',\n    'minio.endpoint'='http://minio:9000',\n    'minio.access_key'='admin',\n    'minio.secret_key'='password'\n  );\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The LakeSoul Table ",(0,a.jsx)(n.code,{children:"lakesoul.tpch.customer"})," has already been loaded into Doris. Query the data in Doris."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Simple query"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Doris> use `lakesoul`.`tpch`;\nDatabase changed\n\nDoris> show tables;\n+---------------------+\n| Tables_in_tpch      |\n+---------------------+\n| customer_from_spark |\n+---------------------+\n1 row in set (0.00 sec)\n\nDoris> select * from customer_from_spark where c_nationkey = 1 order by c_custkey limit 4;\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                               | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         3 | Customer#000000003 | MG9kdTD2WBHm                            |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|        14 | Customer#000000014 | KXkletMlL2JQEA                          |           1 | 11-845-129-3851 |   5266.30 | FURNITURE    | , ironic packages across the unus                                                                      |\n|        30 | Customer#000000030 | nJDsELGAavU63Jl0c5NKsKfL8rIJQQkQnYL2QJY |           1 | 11-764-165-5076 |   9321.01 | BUILDING     | lithely final requests. furiously unusual account                                                      |\n|        59 | Customer#000000059 | zLOCP0wh92OtBihgspOGl4                  |           1 | 11-355-584-3112 |   3458.60 | MACHINERY    | ously final packages haggle blithely after the express deposits. furiou                                |\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n4 rows in set (3.14 sec)\n\nDoris> select * from customer_from_spark where c_nationkey = 1 order by c_custkey desc limit 4;\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                               | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                       |\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------+\n|     14983 | Customer#000014983 | ERN3vq5Fvt4DL                           |           1 | 11-424-279-1846 |    841.22 | AUTOMOBILE   | furiously slyly special foxes. express theodolites cajole carefully. special dinos haggle pinto |\n|     14968 | Customer#000014968 | ,sykKTZBzVFl7ito1750v2TRYwmkRl2nvqGHwmx |           1 | 11-669-222-9657 |   6106.77 | HOUSEHOLD    | ts above the furiously even deposits haggle across                                              |\n|     14961 | Customer#000014961 | JEIORcsBp6RpLYH 9gNdDyWJ                |           1 | 11-490-251-5554 |   4006.35 | HOUSEHOLD    | quests detect carefully final platelets! quickly final frays haggle slyly blithely final acc    |\n|     14940 | Customer#000014940 | bNoyCxPuqSwPLjbqjEUNGN d0mSP            |           1 | 11-242-677-1085 |   8829.48 | HOUSEHOLD    | ver the quickly express braids. regular dependencies haggle fluffily quickly i                  |\n+-----------+--------------------+-----------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------+\n4 rows in set (0.10 sec)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Partition pruning\nDoris can perform partition pruning on LakeSoul and speed up the query process through native reading. We can check this through ",(0,a.jsx)(n.code,{children:"explain verbose"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Doris> explain verbose select * from customer_from_spark where c_nationkey < 3;\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Explain String(Old Planner)                                                                                                                                          |\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                                                                                                                      |\n|   OUTPUT EXPRS:                                                                                                                                                      |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_custkey`                                                                                                              |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_name`                                                                                                                 |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_address`                                                                                                              |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_nationkey`                                                                                                            |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_phone`                                                                                                                |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_acctbal`                                                                                                              |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_mktsegment`                                                                                                           |\n|     `lakesoul`.`tpch`.`customer_from_spark`.`c_comment`                                                                                                              |\n|   PARTITION: UNPARTITIONED                                                                                                                                           |\n|                                                                                                                                                                      |\n|   HAS_COLO_PLAN_NODE: false                                                                                                                                          |\n|                                                                                                                                                                      |\n|   VRESULT SINK                                                                                                                                                       |\n|      MYSQL_PROTOCAL                                                                                                                                                  |\n|                                                                                                                                                                      |\n|   1:VEXCHANGE                                                                                                                                                        |\n|      offset: 0                                                                                                                                                       |\n|      tuple ids: 0                                                                                                                                                    |\n|                                                                                                                                                                      |\n| PLAN FRAGMENT 1                                                                                                                                                      |\n|                                                                                                                                                                      |\n|   PARTITION: RANDOM                                                                                                                                                  |\n|                                                                                                                                                                      |\n|   HAS_COLO_PLAN_NODE: false                                                                                                                                          |\n|                                                                                                                                                                      |\n|   STREAM DATA SINK                                                                                                                                                   |\n|     EXCHANGE ID: 01                                                                                                                                                  |\n|     UNPARTITIONED                                                                                                                                                    |\n|                                                                                                                                                                      |\n|   0:VplanNodeName                                                                                                                                                    |\n|      table: customer_from_spark                                                                                                                                      |\n|      predicates: (`c_nationkey` < 3)                                                                                                                                 |\n|      inputSplitNum=12, totalFileSize=0, scanRanges=12                                                                                                                |\n|      partition=0/0                                                                                                                                                   |\n|      backends:                                                                                                                                                       |\n|        10002                                                                                                                                                         |\n|          s3://lakesoul-test-bucket/data/tpch/customer_from_spark/c_nationkey=1/part-00000-0568c817-d6bc-4fa1-bb9e-b311069b131c_00000.c000.parquet start: 0 length: 0 |\n|          s3://lakesoul-test-bucket/data/tpch/customer_from_spark/c_nationkey=1/part-00001-d99a8fe6-61ab-4285-94da-2f84f8746a8a_00001.c000.parquet start: 0 length: 0 |\n|          s3://lakesoul-test-bucket/data/tpch/customer_from_spark/c_nationkey=1/part-00002-8a8e396f-685f-4b0f-87fa-e2a3fe5be87e_00002.c000.parquet start: 0 length: 0 |\n|          ... other 8 files ...                                                                                                                                       |\n|          s3://lakesoul-test-bucket/data/tpch/customer_from_spark/c_nationkey=0/part-00003-d5b598cd-5bed-412c-a26f-bb4bc9c937bc_00003.c000.parquet start: 0 length: 0 |\n|      numNodes=1                                                                                                                                                      |\n|      pushdown agg=NONE                                                                                                                                               |\n|      tuple ids: 0                                                                                                                                                    |\n|                                                                                                                                                                      |\n| Tuples:                                                                                                                                                              |\n| TupleDescriptor{id=0, tbl=customer_from_spark}                                                                                                                       |\n|   SlotDescriptor{id=0, col=c_custkey, colUniqueId=0, type=int, nullable=false, isAutoIncrement=false, subColPath=null}                                               |\n|   SlotDescriptor{id=1, col=c_name, colUniqueId=1, type=text, nullable=true, isAutoIncrement=false, subColPath=null}                                                  |\n|   SlotDescriptor{id=2, col=c_address, colUniqueId=2, type=text, nullable=true, isAutoIncrement=false, subColPath=null}                                               |\n|   SlotDescriptor{id=3, col=c_nationkey, colUniqueId=3, type=int, nullable=false, isAutoIncrement=false, subColPath=null}                                             |\n|   SlotDescriptor{id=4, col=c_phone, colUniqueId=4, type=text, nullable=true, isAutoIncrement=false, subColPath=null}                                                 |\n|   SlotDescriptor{id=5, col=c_acctbal, colUniqueId=5, type=decimalv3(15,2), nullable=true, isAutoIncrement=false, subColPath=null}                                    |\n|   SlotDescriptor{id=6, col=c_mktsegment, colUniqueId=6, type=text, nullable=true, isAutoIncrement=false, subColPath=null}                                            |\n|   SlotDescriptor{id=7, col=c_comment, colUniqueId=7, type=text, nullable=true, isAutoIncrement=false, subColPath=null}                                               |\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n57 rows in set (0.03 sec)\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By examining the result of the ",(0,a.jsx)(n.code,{children:"EXPLAIN VERBOSE"})," statement, it can be seen that the predicate condition ",(0,a.jsx)(n.code,{children:"c_nationkey < 3"})," ultimately only hits one partition (",(0,a.jsx)(n.code,{children:"partition=0/0"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"04-cdc-table-support",children:"04 CDC Table Support"}),"\n",(0,a.jsx)(n.p,{children:"Launch Flink CDC Job to sync mysql table. The mysql table is loaded when launching docker compose."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"bash start_flink_cdc_job.sh\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Start flink-cdc job...\nSLF4J: Class path contains multiple SLF4J bindings.\nSLF4J: Found binding in [jar:file:/opt/flink/lib/log4j-slf4j-impl-2.17.1.jar!/org/slf4j/impl/StaticLoggerBinder.class]\nSLF4J: Found binding in [jar:file:/opt/hadoop/share/hadoop/common/lib/slf4j-reload4j-1.7.36.jar!/org/slf4j/impl/StaticLoggerBinder.class]\nSLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.\nSLF4J: Actual binding is of type [org.apache.logging.slf4j.Log4jLoggerFactory]\nLoading class `com.mysql.jdbc.Driver'. This is deprecated. The new driver class is `com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.\nJob has been submitted with JobID d1b3641dcd1ad85c6b373d49b1867e68\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Flink CDC Job will be launched. We can check the process of launching at ",(0,a.jsx)(n.code,{children:"doris client"})," by recreate the lakesoul catalog. After the Flink CDC Job has been launched, we can see the syncing LakeSoul CDC table at ",(0,a.jsx)(n.code,{children:"doris client"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Doris> show tables;\n+---------------------+\n| Tables_in_tpch      |\n+---------------------+\n| customer_from_spark |\n+---------------------+\n2 rows in set (0.00 sec)\n\n\nDoris> drop catalog if exists lakesoul;\nQuery OK, 0 rows affected (0.00 sec)\n\nDoris> create catalog `lakesoul`  properties ('type'='lakesoul', 'lakesoul.pg.username'='lakesoul_test', 'lakesoul.pg.password'='lakesoul_test', 'lakesoul.pg.url'='jdbc:postgresql://lakesoul-meta-pg:5432/lakesoul_test?stringtype=unspecified', 'minio.endpoint'='http://minio:9000', 'minio.access_key'='admin', 'minio.secret_key'='password');\nQuery OK, 0 rows affected (0.01 sec)\n\nDoris> show tables;\n+---------------------+\n| Tables_in_tpch      |\n+---------------------+\n| customer            |\n| customer_from_spark |\n+---------------------+\n2 rows in set (0.00 sec)\n\nDoris> select c_custkey, c_name, c_address, c_nationkey , c_phone, c_acctbal , c_mktsegment , c_comment from lakesoul.tpch.customer where c_custkey < 10;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                                         |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |    711.56 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                                    |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov            |\n|         7 | Customer#000000007 | TcGe5gaZNgVePxU5kRrvXBfkasDTea        |          18 | 28-190-982-9759 |   9561.95 | AUTOMOBILE   | ainst the ironic, express theodolites. express, even pinto beans among the exp                                    |\n|         8 | Customer#000000008 | I0B10bB0AymmC, 0PrRYBCP1yGJ8xcBPmWhl5 |          17 | 27-147-574-9335 |   6819.74 | BUILDING     | among the slyly regular theodolites kindle blithely courts. carefully even theodolites haggle slyly along the ide |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                                   |\n|         4 | Customer#000000004 | XxVSJsLAGtn                           |           4 | 14-128-190-5944 |   2866.83 | MACHINERY    |  requests. final, regular ideas sleep final accou                                                                 |\n|         5 | Customer#000000005 | KvpyuHCplrB84WgAiGV6sYpZq7Tj          |           3 | 13-750-942-6364 |    794.47 | HOUSEHOLD    | n accounts will have to unwind. foxes cajole accor                                                                |\n|         6 | Customer#000000006 | sKZz0CsnMD7mp4Xd0YrBvx,LREYKUWAh yVn  |          20 | 30-114-968-4951 |   7638.57 | AUTOMOBILE   | tions. even deposits boost according to the slyly bold packages. final accounts cajole requests. furious          |\n|         9 | Customer#000000009 | xKiAFTjUsCuxfeleNqefumTrjS            |           8 | 18-338-906-3675 |   8324.07 | FURNITURE    | r theodolites according to the requests wake thinly excuses: pending requests haggle furiousl                     |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n9 rows in set (1.09 sec)\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Enter the ",(0,a.jsx)(n.code,{children:"mysql client"})," and try to modify data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"bash start_mysql_client.sh\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Try update row from ",(0,a.jsx)(n.code,{children:"mysql client"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> update customer set c_acctbal=2211.26 where c_custkey=1;\nQuery OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Back to ",(0,a.jsx)(n.code,{children:"doris client"})," and check the data changing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Doris> select c_custkey, c_name, c_address, c_nationkey , c_phone, c_acctbal , c_mktsegment , c_comment from lakesoul.tpch.customer where c_custkey < 10;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                                         |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                                   |\n|         4 | Customer#000000004 | XxVSJsLAGtn                           |           4 | 14-128-190-5944 |   2866.83 | MACHINERY    |  requests. final, regular ideas sleep final accou                                                                 |\n|         5 | Customer#000000005 | KvpyuHCplrB84WgAiGV6sYpZq7Tj          |           3 | 13-750-942-6364 |    794.47 | HOUSEHOLD    | n accounts will have to unwind. foxes cajole accor                                                                |\n|         6 | Customer#000000006 | sKZz0CsnMD7mp4Xd0YrBvx,LREYKUWAh yVn  |          20 | 30-114-968-4951 |   7638.57 | AUTOMOBILE   | tions. even deposits boost according to the slyly bold packages. final accounts cajole requests. furious          |\n|         9 | Customer#000000009 | xKiAFTjUsCuxfeleNqefumTrjS            |           8 | 18-338-906-3675 |   8324.07 | FURNITURE    | r theodolites according to the requests wake thinly excuses: pending requests haggle furiousl                     |\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |   2211.26 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                                    |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov            |\n|         7 | Customer#000000007 | TcGe5gaZNgVePxU5kRrvXBfkasDTea        |          18 | 28-190-982-9759 |   9561.95 | AUTOMOBILE   | ainst the ironic, express theodolites. express, even pinto beans among the exp                                    |\n|         8 | Customer#000000008 | I0B10bB0AymmC, 0PrRYBCP1yGJ8xcBPmWhl5 |          17 | 27-147-574-9335 |   6819.74 | BUILDING     | among the slyly regular theodolites kindle blithely courts. carefully even theodolites haggle slyly along the ide |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n9 rows in set (0.11 sec)\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Try delete row from ",(0,a.jsx)(n.code,{children:"mysql client"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> delete from customer where c_custkey = 2;\nQuery OK, 1 row affected (0.01 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Back to ",(0,a.jsx)(n.code,{children:"doris client"})," and check the data changing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Doris> select c_custkey, c_name, c_address, c_nationkey , c_phone, c_acctbal , c_mktsegment , c_comment from lakesoul.tpch.customer where c_custkey < 10;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                                         |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n|         6 | Customer#000000006 | sKZz0CsnMD7mp4Xd0YrBvx,LREYKUWAh yVn  |          20 | 30-114-968-4951 |   7638.57 | AUTOMOBILE   | tions. even deposits boost according to the slyly bold packages. final accounts cajole requests. furious          |\n|         9 | Customer#000000009 | xKiAFTjUsCuxfeleNqefumTrjS            |           8 | 18-338-906-3675 |   8324.07 | FURNITURE    | r theodolites according to the requests wake thinly excuses: pending requests haggle furiousl                     |\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |   2211.26 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                                    |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov            |\n|         7 | Customer#000000007 | TcGe5gaZNgVePxU5kRrvXBfkasDTea        |          18 | 28-190-982-9759 |   9561.95 | AUTOMOBILE   | ainst the ironic, express theodolites. express, even pinto beans among the exp                                    |\n|         8 | Customer#000000008 | I0B10bB0AymmC, 0PrRYBCP1yGJ8xcBPmWhl5 |          17 | 27-147-574-9335 |   6819.74 | BUILDING     | among the slyly regular theodolites kindle blithely courts. carefully even theodolites haggle slyly along the ide |\n|         4 | Customer#000000004 | XxVSJsLAGtn                           |           4 | 14-128-190-5944 |   2866.83 | MACHINERY    |  requests. final, regular ideas sleep final accou                                                                 |\n|         5 | Customer#000000005 | KvpyuHCplrB84WgAiGV6sYpZq7Tj          |           3 | 13-750-942-6364 |    794.47 | HOUSEHOLD    | n accounts will have to unwind. foxes cajole accor                                                                |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+-------------------------------------------------------------------------------------------------------------------+\n8 rows in set (0.11 sec)\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},285993:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/lakehouse-architecture-for-doris-and-lakesoul-ef021d8b6de64a42b7c2ffdb3387114c.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let a={},l=t.createContext(a);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);