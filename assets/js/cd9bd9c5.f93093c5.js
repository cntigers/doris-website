"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["739154"],{73396:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/mv_infos","title":"MV_INFOS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/mv_infos.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/mv_infos","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/mv_infos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MV_INFOS","language":"en"},"sidebar":"docs","previous":{"title":"NUMBERS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/numbers"},"next":{"title":"PARTITIONS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/partitions"}}'),r=t("785893"),s=t("250065");let a={title:"MV_INFOS",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Table function, generating temporary tables for asynchronous materialized views, which can view information about asynchronous materialized views created in a certain database."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'MV_INFOS("database"="<database>")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"<database>"})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the cluster database name to be queried"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Id"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"Materialized view ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Materialized view name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JobName"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Job name corresponding to the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"State"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"State of the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SchemaChangeDetail"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Reason for the state change to SchemaChange"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RefreshState"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Refresh state of the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RefreshInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Refresh strategy information defined for the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QuerySql"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"SQL query defined for the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EnvInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Environment information when the materialized view was created"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MvProperties"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Materialized view properties"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MvPartitionInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"Partition information of the materialized view"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SyncWithBaseTables"}),(0,r.jsx)(n.td,{children:"BOOLEAN"}),(0,r.jsxs)(n.td,{children:["Whether the data is synchronized with the base table. To check which partition is not synchronized, use ",(0,r.jsx)(n.a,{href:"../../sql-statements/table-and-view/table/SHOW-PARTITIONS",children:"SHOW PARTITIONS"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"View all materialized views under test"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from mv_infos("database"="test");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| Id    | Name                     | JobName          | State  | SchemaChangeDetail | RefreshState | RefreshInfo                           | QuerySql                                                                                                                                                         | MvProperties                                              | MvPartitionInfo                                                                                           | SyncWithBaseTables |\n+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| 19494 | mv1                      | inner_mtmv_19494 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`user`.`k2`, `internal`.`test`.`user`.`k3` FROM `internal`.`test`.`user`                                                                      | {partition_sync_limit=100, partition_sync_time_unit=YEAR} | MTMVPartitionInfo{partitionType=FOLLOW_BASE_TABLE, relatedTable=user, relatedCol='k2', partitionCol='k2'} |                  1 |\n| 21788 | test_tablet_type_mtmv_mv | inner_mtmv_21788 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`test_tablet_type_mtmv_table`.`k2`, `internal`.`test`.`test_tablet_type_mtmv_table`.`k3` from `internal`.`test`.`test_tablet_type_mtmv_table` | {}                                                        | MTMVPartitionInfo{partitionType=SELF_MANAGE}                                                              |                  0 |\n+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"View the materialized view named mv1 under test"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from mv_infos("database"="test") where Name = "mv1";\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| Id    | Name | JobName          | State  | SchemaChangeDetail | RefreshState | RefreshInfo                           | QuerySql                                                                                    | MvProperties                                              | MvPartitionInfo                                                                                           | SyncWithBaseTables |\n+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| 19494 | mv1  | inner_mtmv_19494 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`user`.`k2`, `internal`.`test`.`user`.`k3` FROM `internal`.`test`.`user` | {partition_sync_limit=100, partition_sync_time_unit=YEAR} | MTMVPartitionInfo{partitionType=FOLLOW_BASE_TABLE, relatedTable=user, relatedCol='k2', partitionCol='k2'} |                  1 |\n+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);