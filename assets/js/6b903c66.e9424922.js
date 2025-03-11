"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["624849"],{816939:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","title":"SHOW PARTITIONS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PARTITIONS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW PARTITION ID","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION-ID"},"next":{"title":"SHOW DYNAMIC PARTITION TABLES","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES"}}'),s=t("785893"),r=t("250065");let a={title:"SHOW PARTITIONS",language:"en"},l=void 0,d={},o=[{value:"Descriptions",id:"descriptions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"descriptions",children:"Descriptions"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to display partition information. It supports both Internal catalog and Hive Catalog."}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Hive Catalog"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"It supports returning all partitions, including multi-level partitions."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [ TEMPORARY ] PARTITIONS\n    FROM [ <db_name>. ] <table_name>\n    [ <where_clause> ]\n    [ ORDER BY <order_by_key> ]\n    [ LIMIT <limit_rows> ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,s.jsx)(n.p,{children:"The name of the table for which partition information needs to be viewed must be specified."}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"TEMPORARY"})]})}),"\n",(0,s.jsx)(n.p,{children:"Whether to query the information of temporary partitions."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,s.jsx)(n.p,{children:"The name of the database for which partition information needs to be viewed must be specified."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. ",(0,s.jsx)(n.code,{children:"<where_clause>"})]})}),"\n",(0,s.jsx)(n.p,{children:"Filter conditions, supporting filtering on columns such as PartitionId, PartitionName, State, Buckets, ReplicationNum, LastConsistencyCheckTime, etc."}),"\n",(0,s.jsx)(n.p,{children:"Please note that:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Currently, the where clause only supports the = operator and does not support operators such as >, <, >=, <=, etc."}),"\n",(0,s.jsx)(n.li,{children:"When using the = operator in the where clause, the column name needs to be on the left side."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["4. ",(0,s.jsx)(n.code,{children:"<order_by_key>"})]})}),"\n",(0,s.jsx)(n.p,{children:"Sorting conditions, supporting sorting on columns such as PartitionId, PartitionName, State, Buckets, ReplicationNum, LastConsistencyCheckTime, etc."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["5. ",(0,s.jsx)(n.code,{children:"<limit_rows>"})]})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of rows returned."}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Columns"}),(0,s.jsx)(n.th,{children:"DataType"}),(0,s.jsx)(n.th,{children:"Note"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PartitionId"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"Partition ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PartitionName"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"Partition Name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VisibleVersion"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The maximum VisibleVersion of the tablets in this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VisibleVersionTime"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The time of the most recent VisibleVersion in this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"State"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"The State of this partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PartitionKey"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The partition key of this  partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Range"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The Range of this partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DistributionKey"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"The distribution key of this  partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Buckets"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The bucket num of this partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicationNum"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The replica num of this partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"StorageMedium"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"The storage medium of this partition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CooldownTime"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The cooldown time of this partition. If there is no hot-cold separation, the value of this field is [9999-12-31 23:59:59], which means it is always hot data."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RemoteStoragePolicy"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"The remote storage policy of this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LastConsistencyCheckTime"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The time of the last partition consistency check for this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DataSize"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The data size under this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IsInMemory"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether it is an in-memory partition, the default is false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicaAllocation"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"The replica distribution strategy of this partition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IsMutable"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether the partition is mutable, the default is true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SyncWithBaseTables"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether the partition is synchronized with the data of the base table."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UnsyncTables"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"Whether the partition is a partition of an unsynchronized table."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The SHOW permission for the table to be viewed is required."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Show all non-temporary partition information for a specified table in a specified database."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM t_agg;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+--------------+-------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize  | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+--------------+-------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n| 170307      | t_agg         | 4              | 2024-11-05 16:13:40 | NORMAL |              |       | k1              | 1       | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 806.000 B | false      | tag.location.default: 1 | true      | true               | NULL         |\n+-------------+---------------+----------------+---------------------+--------+--------------+-------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Show all temporary partition information for a specified table in a specified database."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TEMPORARY PARTITIONS FROM t_temp;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+--------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                                                    | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+--------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| 828863      | tp2020        | 1              | 2025-01-22 16:19:50 | NORMAL | create_time  | [types: [DATETIMEV2]; keys: [2020-01-01 00:00:00]; ..types: [DATETIMEV2]; keys: [2021-01-01 00:00:00]; ) | reference_no    | 1       | 1              | SSD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      | true               | NULL         |\n+-------------+---------------+----------------+---------------------+--------+--------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Show the information of a specified non-temporary partition for a specified table in a specified database, and filter the results."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW PARTITIONS FROM t_agg WHERE PartitionName = "p2024";\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey    | Range                                                                                                    | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize  | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n| 169851      | p2024         | 2              | 2024-11-05 14:14:29 | NORMAL | idp_create_time | [types: [DATETIMEV2]; keys: [2024-01-01 00:00:00]; ..types: [DATETIMEV2]; keys: [2025-01-01 00:00:00]; ) | idp_es_id       | 3       | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 27.396 KB | false      | tag.location.default: 1 | true      | true               | NULL         |\n+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Show the information of the latest non-temporary partition for a specified table in a specified database."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM t_agg ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey    | Range                                                                                                    | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| 169866      | p2025         | 1              | 2024-11-05 14:13:56 | NORMAL | idp_create_time | [types: [DATETIMEV2]; keys: [2025-01-01 00:00:00]; ..types: [DATETIMEV2]; keys: [2026-01-01 00:00:00]; ) | idp_es_id       | 3       | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      | true               | NULL         |\n+-------------+---------------+----------------+---------------------+--------+-----------------+----------------------------------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);