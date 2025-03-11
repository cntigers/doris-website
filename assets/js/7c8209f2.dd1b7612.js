"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["601786"],{100244:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE","title":"RESTORE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RESTORE","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL BACKUP","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-BACKUP"},"next":{"title":"SHOW RESTORE","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE"}}'),a=n("785893"),i=n("250065");let r={title:"RESTORE",language:"en"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["This statement is used to restore the data backed up by the BACKUP command to the specified database. This command is an asynchronous operation. After the submission is successful, you need to check the progress through the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE",children:"SHOW RESTORE"})," command."]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'RESTORE SNAPSHOT [<db_name>.]<snapshot_name>\nFROM `<repository_name>`\n[ { ON | EXCLUDE } ] (\n    `<table_name>` [PARTITION (`<partition_name>`, ...)] [AS `<table_alias>`]\n    [, ...] ) ]\n)\n[ PROPERTIES ( "<key>" = "<value>" [ , ... ] )]\n'})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1.",(0,a.jsx)(t.code,{children:"<db_name>"})]})}),"\n",(0,a.jsx)(t.p,{children:"The name of the database to which the data to be restored belongs"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["2.",(0,a.jsx)(t.code,{children:"<snapshot_name>"})]})}),"\n",(0,a.jsx)(t.p,{children:"Data snapshot name"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["3.",(0,a.jsx)(t.code,{children:"<repository_name>"})]})}),"\n",(0,a.jsxs)(t.p,{children:["Warehouse name. You can create a repository via ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY",children:"CREATE REPOSITORY"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["4.",(0,a.jsx)(t.code,{children:'[ PROPERTIES ( "<key>" = "<value>" [ , ... ] ) ]'})]})}),"\n",(0,a.jsxs)(t.p,{children:["Restoration operation attributes, the format is ",(0,a.jsx)(t.code,{children:"<key>"})," = ",(0,a.jsx)(t.code,{children:"<value>"}),"\uFF0Ccurrently supports the following properties:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:['"backup_timestamp" = "2018-05-04-16-45-08": Specifies which time version of the corresponding backup to restore, required. This information can be obtained with the ',(0,a.jsx)(t.code,{children:"SHOW SNAPSHOT ON repo;"})," statement."]}),"\n",(0,a.jsx)(t.li,{children:'"replication_num" = "3": Specifies the number of replicas for the restored table or partition. Default is 3. If restoring an existing table or partition, the number of replicas must be the same as the number of replicas of the existing table or partition. At the same time, there must be enough hosts to accommodate multiple replicas.'}),"\n",(0,a.jsx)(t.li,{children:'"reserve_replica" = "true": Default is false. When this property is true, the replication_num property is ignored and the restored table or partition will have the same number of replication as before the backup. Supports multiple tables or multiple partitions within a table with different replication number.'}),"\n",(0,a.jsx)(t.li,{children:"\"reserve_dynamic_partition_enable\" = \"true\": Default is false. When this property is true, the restored table will have the same value of 'dynamic_partition_enable' as before the backup. if this property is not true, the restored table will set 'dynamic_partition_enable=false'."}),"\n",(0,a.jsx)(t.li,{children:'"timeout" = "3600": The task timeout period, the default is one day. in seconds.'}),"\n",(0,a.jsx)(t.li,{children:'"meta_version" = 40: Use the specified meta_version to read the previously backed up metadata. Note that this parameter is used as a temporary solution and is only used to restore the data backed up by the old version of Doris. The latest version of the backup data already contains the meta version, no need to specify it.'}),"\n",(0,a.jsxs)(t.li,{children:['"clean_tables" : Indicates whether to clean up tables that do not belong to the restore target. For example, if the target db before the restore has tables that are not present in the snapshot, specifying ',(0,a.jsx)(t.code,{children:"clean_tables"})," can drop these extra tables and move them into the recycle bin during the restore.\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This feature is supported since the Apache Doris 1.2.6  version"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:['"clean_partitions": Indicates whether to clean up partitions that do not belong to the restore target. For example, if the target table before the restore has partitions that are not present in the snapshot, specifying ',(0,a.jsx)(t.code,{children:"clean_partitions"})," can drop these extra partitions and move them into the recycle bin during the restore.\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This feature is supported since the Apache Doris 1.2.6  version"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1.",(0,a.jsx)(t.code,{children:"<table_name>"})]})}),"\n",(0,a.jsx)(t.p,{children:"The name of the table to be restored. If not specified, the entire database will be restored."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The tables and partitions that need to be restored are identified in the ON clause. If no partition is specified, all partitions of the table are restored by default. The specified table and partition must already exist in the warehouse backup."}),"\n",(0,a.jsx)(t.li,{children:"Tables and partitions that do not require recovery are identified in the EXCLUDE clause. All partitions of all other tables in the warehouse except the specified table or partition will be restored."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["2.",(0,a.jsx)(t.code,{children:"<partition_name>"})]})}),"\n",(0,a.jsx)(t.p,{children:"The name of the partition to be restored. If not specified, all partitions of the corresponding table will be restored."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["3.",(0,a.jsx)(t.code,{children:"<table_alias>"})]})}),"\n",(0,a.jsx)(t.p,{children:"table alias"}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"LOAD_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"This operation can only be performed by users or roles with LOAD_PRIV permissions"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Restoring tables of type OLAP is only supported."}),"\n",(0,a.jsx)(t.li,{children:"There can only be one executing BACKUP or RESTORE task under the same database."}),"\n",(0,a.jsx)(t.li,{children:"You can restore the backed up tables in the warehouse to replace the existing tables of the same name in the database, but you must ensure that the table structures of the two tables are exactly the same. The table structure includes: table name, column, partition, Rollup, etc."}),"\n",(0,a.jsx)(t.li,{children:"You can specify some partitions of the recovery table, and the system will check whether the partition Range or List can match."}),"\n",(0,a.jsx)(t.li,{children:"The table name backed up in the warehouse can be restored to a new table through the AS statement. But the new table name cannot already exist in the database. The partition name cannot be modified."}),"\n",(0,a.jsxs)(t.li,{children:["Efficiency of recovery operations:In the case of the same cluster size, the time-consuming of the restore operation is basically the same as the time-consuming of the backup operation. If you want to speed up the recovery operation, you can first restore only one copy by setting the ",(0,a.jsx)(t.code,{children:"replication_num"})," parameter, and then adjust the number of copies by ",(0,a.jsx)(t.a,{href:"../../../../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY",children:"ALTER TABLE PROPERTY"}),", complete the copy."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'Restore the table backup_tbl in backup snapshot_1 from example_repo to database example_db1, the time version is "2018-05-04-16-45-08". Revert to 1 copy:'}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:'Restore partitions p1, p2 of table backup_tbl in backup snapshot_2 from example_repo, and table backup_tbl2 to database example_db1, rename it to new_tbl, and the time version is "2018-05-04-17-11-01". The default reverts to 3 replicas:'}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:'Restore all tables except for table backup_tbl in backup snapshot_3 from example_repo to database example_db1, the time version is "2018-05-04-18-12-18".'}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_3`\nFROM `example_repo`\nEXCLUDE ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-18-12-18"\n);\n'})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var s=n(667294);let a={},i=s.createContext(a);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);