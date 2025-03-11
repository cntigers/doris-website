"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["813751"],{461166:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"data-operate/import/data-source/migrate-data-from-other-oltp","title":"Migrating Data from Other OLTP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/data-source/migrate-data-from-other-oltp.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/migrate-data-from-other-oltp","permalink":"/docs/3.0/data-operate/import/data-source/migrate-data-from-other-oltp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Migrating Data from Other OLTP","language":"en"},"sidebar":"docs","previous":{"title":"Migrating Data from Other OLAP","permalink":"/docs/3.0/data-operate/import/data-source/migrate-data-from-other-olap"},"next":{"title":"Stream Load","permalink":"/docs/3.0/data-operate/import/import-way/stream-load-manual"}}'),o=a("785893"),r=a("250065");let s={title:"Migrating Data from Other OLTP",language:"en"},i=void 0,l={},d=[{value:"Multi-Catalog",id:"multi-catalog",level:2},{value:"Flink Doris Connector",id:"flink-doris-connector",level:2},{value:"Spark Connector",id:"spark-connector",level:2},{value:"DataX / Seatunnel / CloudCanal and other third-party tools.",id:"datax--seatunnel--cloudcanal-and-other-third-party-tools",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"There are various ways to migrate data from other TP systems, such as MySQL/SqlServer/Oracle, to Doris."}),"\n",(0,o.jsx)(n.h2,{id:"multi-catalog",children:"Multi-Catalog"}),"\n",(0,o.jsx)(n.p,{children:"Use the Catalog to map as an external table, and then use the INSERT INTO or CREATE-TABLE-AS-SELECT statements to complete the data load."}),"\n",(0,o.jsx)(n.p,{children:"For example, with MySQL:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG mysql_catalog properties(\n    'type' = 'jdbc',\n    'user' = 'root',\n    'password' = '123456',\n    'jdbc_url' = 'jdbc:mysql://host:3306/mysql_db',\n    'driver_url' = 'mysql-connector-java-8.0.25.jar',\n    'driver_class' = 'com.mysql.cj.jdbc.Driver'\n);\n\n-- Load via INSERT\nINSERT INTO internal.doris_db.tbl1\nSELECT * FROM iceberg_catalog.iceberg_db.table1;\n\n-- Load via CTAS\nCREATE TABLE internal.doris_db.tbl1\nPROPERTIES('replication_num' = '1')\nAS\nSELECT * FROM iceberg_catalog.iceberg_db.table1;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, refer to ",(0,o.jsx)(n.a,{href:"../../../data-operate/import/import-way/insert-into-manual",children:"Catalog Data Load"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"flink-doris-connector",children:"Flink Doris Connector"}),"\n",(0,o.jsx)(n.p,{children:"You can leverage Flink to achieve offline and real-time synchronization for TP systems."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Offline synchronization can be done using Flink's JDBC Source and Doris Sink to complete the data load. For example, using FlinkSQL:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE student_source (\n    id INT,\n    name STRING,\n    age INT\n  PRIMARY KEY (id) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://localhost:3306/mydatabase',\n  'table-name' = 'students',\n  'username' = 'username',\n  'password' = 'password',\n);\n\nCREATE TABLE student_sink (\n    id INT,\n    name STRING,\n    age INT\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '127.0.0.1:8030',\n      'table.identifier' = 'test.students',\n      'username' = 'root',\n      'password' = 'password',\n      'sink.label-prefix' = 'doris_label'\n);\n\nINSERT into student_sink select * from student_source;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, refer to ",(0,o.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/zh/docs/connectors/table/jdbc/#%e5%a6%82%e4%bd%95%e5%88%9b%e5%bb%ba-jdbc-%e8%a1%a8",children:"Flink JDBC"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Real-time synchronization can be achieved using FlinkCDC to read both full and incremental data. For example, using FlinkSQL:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SET 'execution.checkpointing.interval' = '10s';\n\nCREATE TABLE cdc_mysql_source (\n  id int\n  ,name VARCHAR\n  ,PRIMARY KEY (id) NOT ENFORCED\n) WITH (\n'connector' = 'mysql-cdc',\n'hostname' = '127.0.0.1',\n'port' = '3306',\n'username' = 'root',\n'password' = 'password',\n'database-name' = 'database',\n'table-name' = 'table'\n);\n\n-- Supports synchronization of insert/update/delete events.\nCREATE TABLE doris_sink (\nid INT,\nname STRING\n) \nWITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'table.identifier' = 'database.table',\n  'username' = 'root',\n  'password' = '',\n  'sink.properties.format' = 'json',\n  'sink.properties.read_json_by_line' = 'true',\n  'sink.enable-delete' = 'true',  -- Synchronize delete events.\n  'sink.label-prefix' = 'doris_label'\n);\n\ninsert into doris_sink select id,name from cdc_mysql_source;\n"})}),"\n",(0,o.jsx)(n.p,{children:"For synchronizing an entire database or multiple tables in a TP database, you can use the full-database synchronization feature provided by the Flink Doris Connector to complete the TP database write with a single click, as shown below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'<FLINK_HOME>bin/flink run \\\n    -Dexecution.checkpointing.interval=10s \\\n    -Dparallelism.default=1 \\\n    -c org.apache.doris.flink.tools.cdc.CdcTools \\\n    lib/flink-doris-connector-1.16-24.0.1.jar \\\n    mysql-sync-database \\\n    --database test_db \\\n    --mysql-conf hostname=127.0.0.1 \\\n    --mysql-conf port=3306 \\\n    --mysql-conf username=root \\\n    --mysql-conf password=123456 \\\n    --mysql-conf database-name=mysql_db \\\n    --including-tables "tbl1|test.*" \\\n    --sink-conf fenodes=127.0.0.1:8030 \\\n    --sink-conf username=root \\\n    --sink-conf password=123456 \\\n    --sink-conf jdbc-url=jdbc:mysql://127.0.0.1:9030 \\\n    --sink-conf sink.label-prefix=label \\\n    --table-conf replication_num=1 \n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, refer to ",(0,o.jsx)(n.a,{href:"/docs/3.0/ecosystem/flink-doris-connector#full-database-synchronization",children:"Full Database Synchronization"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"spark-connector",children:"Spark Connector"}),"\n",(0,o.jsx)(n.p,{children:"You can use the JDBC Source and Doris Sink of the Spark Connector to complete the data write."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'val jdbcDF = spark.read\n  .format("jdbc")\n  .option("url", "jdbc:postgresql:dbserver")\n  .option("dbtable", "schema.tablename")\n  .option("user", "username")\n  .option("password", "password")\n  .load()\n  \n jdbcDF.write.format("doris")\n  .option("doris.table.identifier", "db.table")\n  .option("doris.fenodes", "127.0.0.1:8030")\n  .option("user", "root")\n  .option("password", "")\n  .save() \n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, refer to ",(0,o.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html",children:"JDBC To Other Databases"}),"\uFF0C",(0,o.jsx)(n.a,{href:"/docs/3.0/ecosystem/spark-doris-connector#batch-write",children:"Spark Doris Connector"})]}),"\n",(0,o.jsx)(n.h2,{id:"datax--seatunnel--cloudcanal-and-other-third-party-tools",children:"DataX / Seatunnel / CloudCanal and other third-party tools."}),"\n",(0,o.jsx)(n.p,{children:"In addition, you can also use third-party synchronization tools for data synchronization. For more details, please refer to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../../ecosystem/datax",children:"DataX"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../../ecosystem/seatunnel",children:"Seatunnel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../../ecosystem/cloudcanal",children:"CloudCanal"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var t=a(667294);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);