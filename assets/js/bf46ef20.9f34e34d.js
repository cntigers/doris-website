"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["342321"],{584291:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"lakehouse/datalake-analytics/hudi","title":"Hudi Catalog","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/datalake-analytics/hudi.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/hudi","permalink":"/docs/lakehouse/datalake-analytics/hudi","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Hudi Catalog","language":"en"},"sidebar":"docs","previous":{"title":"Hive Catalog","permalink":"/docs/lakehouse/datalake-analytics/hive"},"next":{"title":"Iceberg Catalog","permalink":"/docs/lakehouse/datalake-analytics/iceberg"}}'),t=i("785893"),r=i("250065");let s={title:"Hudi Catalog",language:"en"},d=void 0,l={},o=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Skip Merge",id:"skip-merge",level:2},{value:"Query Optimization",id:"query-optimization",level:2},{value:"Time Travel",id:"time-travel",level:2},{value:"Incremental Read",id:"incremental-read",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-hudi",children:"Apache Doris & Hudi Quick Start"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The query types supported by the Hudi table are as follows, and the Incremental Query will be supported in the future."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Table Type"}),(0,t.jsx)(n.th,{children:"Supported Query types"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Copy On Write"}),(0,t.jsx)(n.td,{children:"Snapshot Query + Time Travel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Merge On Read"}),(0,t.jsx)(n.td,{children:"Snapshot Queries + Read Optimized Queries + Time Travel"})]})]})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Doris supports Hive Metastore(Including catalogs compatible with Hive MetaStore, like ",(0,t.jsx)(n.a,{href:"/docs/lakehouse/datalake-analytics/hive",children:"AWS Glue"}),"/",(0,t.jsx)(n.a,{href:"/docs/lakehouse/datalake-analytics/dlf",children:"Alibaba DLF"}),") Catalogs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-catalog",children:"Create Catalog"}),"\n",(0,t.jsxs)(n.p,{children:["Same as creating Hive Catalogs. A simple example is provided here. See ",(0,t.jsx)(n.a,{href:"/docs/lakehouse/datalake-analytics/hive",children:"Hive"})," for more information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optional configuration parameters:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"name"}),(0,t.jsx)(n.th,{children:"description"}),(0,t.jsx)(n.th,{children:"default"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"use_hive_sync_partition"}),(0,t.jsx)(n.td,{children:"Use hms synchronized partition data"}),(0,t.jsx)(n.td,{children:"false"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"column-type-mapping",children:"Column Type Mapping"}),"\n",(0,t.jsxs)(n.p,{children:["Same as that in Hive Catalogs. See the relevant section in ",(0,t.jsx)(n.a,{href:"/docs/lakehouse/datalake-analytics/hive",children:"Hive"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"skip-merge",children:"Skip Merge"}),"\n",(0,t.jsxs)(n.p,{children:["Spark will create the read optimize table with ",(0,t.jsx)(n.code,{children:"_ro"})," suffix when generating hudi mor table. Doris will skip the log files when reading optimize table. Doris does not determine whether a table is read optimize by the ",(0,t.jsx)(n.code,{children:"_ro"})," suffix instead of the hive inputformat. Users can observe whether the inputformat of the 'cow/mor/read optimize' table is the same through the ",(0,t.jsx)(n.code,{children:"SHOW CREATE TABLE"})," command. In addition, Doris supports adding hoodie related configurations to catalog properties, which are compatible with ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#Read-Options",children:"Spark Datasource Configs"}),", so users can add ",(0,t.jsx)(n.code,{children:"hoodie.datasource.merge.type=skip_merge"})," in catalog properties to skip merge logs files."]}),"\n",(0,t.jsx)(n.h2,{id:"query-optimization",children:"Query Optimization"}),"\n",(0,t.jsxs)(n.p,{children:["Doris uses the parquet native reader to read the data files of the COW table, and uses the Java SDK (By calling hudi-bundle through JNI) to read the data files of the MOR table. In ",(0,t.jsx)(n.code,{children:"upsert"})," scenario, there may still remains base files that have not been updated in the MOR table, which can be read through the parquet native reader. Users can view the execution plan of hudi scan through the ",(0,t.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-query/EXPLAIN",children:"explain"})," command, where ",(0,t.jsx)(n.code,{children:"hudiNativeReadSplits"})," indicates how many split files are read through the parquet native reader."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"|0:VHUDI_SCAN_NODE                                                             |\n|      table: minbatch_mor_rt                                                  |\n|      predicates: `o_orderkey` = 100030752                                    |\n|      inputSplitNum=810, totalFileSize=5645053056, scanRanges=810             |\n|      partition=80/80                                                         |\n|      numNodes=6                                                              |\n|      hudiNativeReadSplits=717/810                                            |\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Users can view the perfomace of Java SDK through ",(0,t.jsx)(n.a,{href:"../../admin-manual/open-api/fe-http/profile-action",children:"profile"}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-  HudiJniScanner:  0ns\n  -  FillBlockTime:  31.29ms\n  -  GetRecordReaderTime:  1m5s\n  -  JavaScanTime:  35s991ms\n  -  OpenScannerTime:  1m6s\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"OpenScannerTime"}),": Time to create and initialize JNI reader"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JavaScanTime"}),": Time to read data by Java SDK"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FillBlockTime"}),": Time co convert Java column data into C++ column data"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GetRecordReaderTime"}),": Time to create and initialize Hudi Record Reader"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"time-travel",children:"Time Travel"}),"\n",(0,t.jsx)(n.p,{children:"Supports reading snapshots specified in Hudi table."}),"\n",(0,t.jsx)(n.p,{children:"Every write operation to the Hudi table will generate a new snapshot."}),"\n",(0,t.jsx)(n.p,{children:"By default, query requests will only read the latest version of the snapshot."}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"FOR TIME AS OF"})," statement, based on the time of the snapshot to read historical version data. Examples are as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'SELECT * FROM hudi_tbl FOR TIME AS OF "2022-10-07 17:20:37";'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'SELECT * FROM hudi_tbl FOR TIME AS OF "20221007172037";'})}),"\n",(0,t.jsxs)(n.p,{children:["Hudi table does not support the ",(0,t.jsx)(n.code,{children:"FOR VERSION AS OF"})," statement. Using this syntax to query the Hudi table will throw an error."]}),"\n",(0,t.jsx)(n.h2,{id:"incremental-read",children:"Incremental Read"}),"\n",(0,t.jsx)(n.p,{children:"Incremental Read can query the data changed between startTime and endTime, and the returned result set is the final state of the data at endTime."}),"\n",(0,t.jsxs)(n.p,{children:["Doris provides ",(0,t.jsx)(n.code,{children:"@incr"})," syntax support Incremental Read:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SELECT * from hudi_table@incr('beginTime'='xxx', ['endTime'='xxx'], ['hoodie.read.timeline.holes.resolution.policy'='FAIL'], ...);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"beginTime"})," is required, and the time format is consistent with the hudi official website ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/0.14.0/quick-start-guide/#incremental-query",children:"hudi_table_changes"}),', and supports "earliest". ',(0,t.jsx)(n.code,{children:"endTime"})," is optional, and the default is the latest commitTime. Compatible with ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/0.14.0/configurations#Read-Options",children:"Spark Read Options"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To support Incremental Read, you need to enable the ",(0,t.jsx)(n.a,{href:"../../query/nereids/nereids-new",children:"new optimizer"}),", which is enabled by default. By viewing the execution plan through ",(0,t.jsx)(n.code,{children:"desc"}),", we can find that Doris converts ",(0,t.jsx)(n.code,{children:"@incr"})," into ",(0,t.jsx)(n.code,{children:"predicates"})," and pushes it down to ",(0,t.jsx)(n.code,{children:"VHUDI_SCAN_NODE"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"| 0:VHUDI_SCAN_NODE(113) |\n| table: lineitem_mor |\n| predicates: (_hoodie_commit_time[#0] >= '20240311151019723'), (_hoodie_commit_time[#0] <= '20240311151606605') |\n| inputSplitNum=1, totalFileSize=13099711, scanRanges=1 |\n"})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var a=i(667294);let t={},r=a.createContext(t);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);