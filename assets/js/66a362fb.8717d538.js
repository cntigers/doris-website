"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["728813"],{205160:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"table-design/tiered-storage/remote-storage","title":"Remote Storage","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/table-design/tiered-storage/remote-storage.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/remote-storage","permalink":"/docs/3.0/table-design/tiered-storage/remote-storage","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Remote Storage","language":"en-US"},"sidebar":"docs","previous":{"title":"Tiered Storage of SSD and HDD","permalink":"/docs/3.0/table-design/tiered-storage/tiered-ssd-hdd"},"next":{"title":"Hybrid Row-Columnar Storage","permalink":"/docs/3.0/table-design/row-store"}}'),a=n("785893"),s=n("250065");let i={title:"Remote Storage",language:"en-US"},r=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Saving Cold Data to S3 Compatible Storage",id:"saving-cold-data-to-s3-compatible-storage",level:3},{value:"Saving Cold Data to HDFS",id:"saving-cold-data-to-hdfs",level:3},{value:"Cooling Existing Tables to Remote Storage",id:"cooling-existing-tables-to-remote-storage",level:3},{value:"Configuring Compaction",id:"configuring-compaction",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Cold Data Space",id:"cold-data-space",level:2},{value:"Viewing",id:"viewing",level:3},{value:"Garbage Collection",id:"garbage-collection",level:3},{value:"Query and Performance Optimization",id:"query-and-performance-optimization",level:2},{value:"FAQ",id:"faq",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Remote storage supports placing cold data in external storage (such as object storage, HDFS)."}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,a.jsx)(t.p,{children:"The data in remote storage has only one copy, and the reliability of the data depends on the reliability of the remote storage. You need to ensure that the remote storage has erasure coding (EC) or multi-replica technology to ensure data reliability."})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.h3,{id:"saving-cold-data-to-s3-compatible-storage",children:"Saving Cold Data to S3 Compatible Storage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 1:"})," Create S3 Resource."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"When creating the S3 RESOURCE, a link verification to the S3 remote will be performed to ensure the correctness of the RESOURCE creation."})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 2:"})," Create STORAGE POLICY."]}),"\n",(0,a.jsx)(t.p,{children:"Then create a STORAGE POLICY associated with the RESOURCE created above:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 3:"})," Use STORAGE POLICY when creating a table."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "enable_unique_key_merge_on_write" = "false",\n    "storage_policy" = "test_policy"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,a.jsxs)(t.p,{children:["If the UNIQUE table is set with ",(0,a.jsx)(t.code,{children:'"enable_unique_key_merge_on_write" = "true"'}),", this feature cannot be used."]})}),"\n",(0,a.jsx)(t.h3,{id:"saving-cold-data-to-hdfs",children:"Saving Cold Data to HDFS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 1:"})," Create HDFS RESOURCE:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n        "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 2:"})," Create STORAGE POLICY."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_policy PROPERTIES (\n    "storage_resource" = "remote_hdfs",\n    "cooldown_ttl" = "300"\n)\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Step 3:"})," Use STORAGE POLICY to create a table."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n"enable_unique_key_merge_on_write" = "false",\n"storage_policy" = "test_policy"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,a.jsxs)(t.p,{children:["If the UNIQUE table is set with ",(0,a.jsx)(t.code,{children:'"enable_unique_key_merge_on_write" = "true"'}),", this feature cannot be used."]})}),"\n",(0,a.jsx)(t.h3,{id:"cooling-existing-tables-to-remote-storage",children:"Cooling Existing Tables to Remote Storage"}),"\n",(0,a.jsx)(t.p,{children:"In addition to new tables supporting the setting of remote storage, Doris also supports setting remote storage for an existing table or PARTITION."}),"\n",(0,a.jsx)(t.p,{children:"For an existing table, set remote storage by associating the created STORAGE POLICY with the table:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n'})}),"\n",(0,a.jsx)(t.p,{children:"For an existing PARTITION, set remote storage by associating the created STORAGE POLICY with the PARTITION:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n'})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.p,{children:"Note that if the user specifies different Storage Policies for the entire Table and some Partitions when creating the table, the Storage Policy set for the Partition will be ignored, and all Partitions of the table will use the table's Policy. If you need a Partition's Policy to differ from others, you can modify it using the method described above for associating a Storage Policy with an existing Partition."}),(0,a.jsxs)(t.p,{children:["For more details, please refer to the Docs directory under ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"RESOURCE"}),", ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY",children:"POLICY"}),", ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE TABLE"}),", ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN",children:"ALTER TABLE"}),", etc."]})]}),"\n",(0,a.jsx)(t.h3,{id:"configuring-compaction",children:"Configuring Compaction"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The BE parameter ",(0,a.jsx)(t.code,{children:"cold_data_compaction_thread_num"})," can set the concurrency for executing remote storage Compaction, with a default of 2."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The BE parameter ",(0,a.jsx)(t.code,{children:"cold_data_compaction_interval_sec"})," can set the time interval for executing remote storage Compaction, with a default of 1800 seconds, which is half an hour."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Tables using remote storage do not support backup."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Modifying the location information of remote storage, such as endpoint, bucket, and path, is not supported."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Unique model tables do not support setting remote storage when the Merge-on-Write feature is enabled."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"cold-data-space",children:"Cold Data Space"}),"\n",(0,a.jsx)(t.h3,{id:"viewing",children:"Viewing"}),"\n",(0,a.jsxs)(t.p,{children:["Method 1: You can view the size uploaded to the object by each BE through ",(0,a.jsx)(t.code,{children:"show proc '/backends'"}),", in the RemoteUsedCapacity item, this method has a slight delay."]}),"\n",(0,a.jsxs)(t.p,{children:["Method 2: You can view the size of each tablet occupied by the table through ",(0,a.jsx)(t.code,{children:"show tablets from tableName"}),", in the RemoteDataSize item."]}),"\n",(0,a.jsx)(t.h3,{id:"garbage-collection",children:"Garbage Collection"}),"\n",(0,a.jsx)(t.p,{children:"There may be situations that generate garbage data on remote storage:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Rowset upload fails but some segments are successfully uploaded."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The uploaded rowset did not reach consensus in multiple replicas."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Rowsets participating in compaction after compaction is completed."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Garbage data will not be cleaned up immediately. The BE parameter ",(0,a.jsx)(t.code,{children:"remove_unused_remote_files_interval_sec"})," can set the time interval for garbage collection on remote storage, with a default of 21600 seconds, which is 6 hours."]}),"\n",(0,a.jsx)(t.h2,{id:"query-and-performance-optimization",children:"Query and Performance Optimization"}),"\n",(0,a.jsx)(t.p,{children:"To optimize query performance and save object storage resources, local Cache has been introduced. When querying data from remote storage for the first time, Doris will load the data from remote storage to the local disk of the BE for caching. The Cache has the following characteristics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Cache is actually stored on the local disk of the BE and does not occupy memory space."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Cache is managed through LRU and does not support TTL."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For specific configurations, please refer to (../../lakehouse/filecache)."}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null."})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The S3 SDK defaults to using the virtual-hosted style method. However, some object storage systems (such as MinIO) may not have virtual-hosted style access enabled or supported. In this case, we can add the ",(0,a.jsx)(t.code,{children:"use_path_style"})," parameter to force the use of the path style method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var o=n(667294);let a={},s=o.createContext(a);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);