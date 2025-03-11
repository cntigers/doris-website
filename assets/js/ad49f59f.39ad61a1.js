"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["814989"],{378463:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"data-operate/import/load-manual","title":"Loading Overview","description":"\x3c!--","source":"@site/docs/data-operate/import/load-manual.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-manual","permalink":"/docs/dev/data-operate/import/load-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Loading Overview","language":"en"},"sidebar":"docs","previous":{"title":"Best Practices","permalink":"/docs/dev/table-design/best-practice"},"next":{"title":"local file","permalink":"/docs/dev/data-operate/import/data-source/local-file"}}'),a=n("785893"),o=n("250065");let s={title:"Loading Overview",language:"en"},i=void 0,l={},d=[{value:"Quick Overview of Import Methods",id:"quick-overview-of-import-methods",level:3}];function c(e){let t={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Apache Doris offers various methods for importing and integrating data, allowing you to import data from various sources into the database. These methods can be categorized into four types:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Real-Time Writing"}),": Data is written into Doris tables in real-time via HTTP or JDBC, suitable for scenarios requiring immediate analysis and querying."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For small amounts of data (once every 5 minutes), you can use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"JDBC INSERT"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For higher concurrency or frequency (more than 20 concurrent writes or multiple writes per minute), you can enable ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/group-commit-manual",children:"Group Commit"})," and use JDBC INSERT or Stream Load."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For high throughput, you can use ",(0,a.jsx)(t.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," via HTTP."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Streaming Synchronization"}),": Real-time data streams (e.g., Flink, Kafka, transactional databases) are imported into Doris tables, ideal for real-time analysis and querying."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/ecosystem/flink-doris-connector",children:"Flink Doris Connector"})," to write Flink\u2019s real-time data streams into Doris."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})," or ",(0,a.jsx)(t.a,{href:"/docs/dev/ecosystem/doris-kafka-connector",children:"Doris Kafka Connector"})," for Kafka\u2019s real-time data streams. Routine Load pulls data from Kafka to Doris and supports CSV and JSON formats, while Kafka Connector writes data to Doris, supporting Avro, JSON, CSV, and Protobuf formats."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/ecosystem/flink-doris-connector",children:"Flink CDC"})," or ",(0,a.jsx)(t.a,{href:"/docs/dev/ecosystem/datax",children:"Datax"})," to write transactional database CDC data streams into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Batch Import"}),": Data is batch-loaded from external storage systems (e.g., Object Storage, HDFS, local files, NAS) into Doris tables, suitable for non-real-time data import needs."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})," to write files from Object Storage and HDFS into Doris."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," to synchronously load files from Object Storage, HDFS, and NAS into Doris, and you can perform the operation asynchronously using a ",(0,a.jsx)(t.a,{href:"../../admin-manual/workload-management/job-scheduler",children:"JOB"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," or ",(0,a.jsx)(t.a,{href:"/docs/dev/ecosystem/doris-streamloader",children:"Doris Streamloader"})," to write local files into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"External Data Source Integration"}),": Query and partially import data from external sources (e.g., Hive, JDBC, Iceberg) into Doris tables."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can create a ",(0,a.jsx)(t.a,{href:"/docs/dev/lakehouse/lakehouse-overview",children:"Catalog"})," to read data from external sources and use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," to synchronize this data into Doris, with asynchronous execution via ",(0,a.jsx)(t.a,{href:"../../admin-manual/workload-management/job-scheduler",children:"JOB"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/data-source/migrate-data-from-other-olap",children:"X2Doris"})," to migrate data from other AP systems into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Each import method in Doris is an implicit transaction by default. For more information on transactions, refer to ",(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/transaction",children:"Transactions"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"quick-overview-of-import-methods",children:"Quick Overview of Import Methods"}),"\n",(0,a.jsx)(t.p,{children:"Doris import process mainly involves various aspects such as data sources, data formats, import methods, error handling, data transformation, and transactions. You can quickly browse the scenarios suitable for each import method and the supported file formats in the table below."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Import Method"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Use Case"}),(0,a.jsx)(t.th,{children:"Supported File Formats"}),(0,a.jsx)(t.th,{children:"Import Mode"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Importing local files or push data in applications via HTTP."}),(0,a.jsx)(t.td,{children:"csv, json, parquet, orc"}),(0,a.jsx)(t.td,{children:"Synchronous"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Importing from object storage, HDFS, etc."}),(0,a.jsx)(t.td,{children:"csv, json, parquet, orc"}),(0,a.jsx)(t.td,{children:"Asynchronous"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO VALUES"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Writing data via JDBC."}),(0,a.jsx)(t.td,{children:"SQL"}),(0,a.jsx)(t.td,{children:"Synchronous"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Importing from an external source like a table in a catalog or files in Object Storage, HDFS."}),(0,a.jsx)(t.td,{children:"SQL"}),(0,a.jsx)(t.td,{children:"Synchronous, Asynchronous via Job"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Real-time import from Kafka"}),(0,a.jsx)(t.td,{children:"csv, json"}),(0,a.jsx)(t.td,{children:"Asynchronous"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/import-way/mysql-load-manual",children:"MySQL Load"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Importing from local files."}),(0,a.jsx)(t.td,{children:"csv"}),(0,a.jsx)(t.td,{children:"Synchronous"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.a,{href:"/docs/dev/data-operate/import/group-commit-manual",children:"Group Commit"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Writing with high frequency."}),(0,a.jsx)(t.td,{children:"Depending on the import method used"}),(0,a.jsx)(t.td,{children:"-"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(667294);let a={},o=r.createContext(a);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);