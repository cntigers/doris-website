"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["874288"],{1936:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","title":"SHOW DYNAMIC PARTITION","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW DYNAMIC PARTITION","language":"en"},"sidebar":"docs","previous":{"title":"SHOW PARTITIONS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS"},"next":{"title":"SHOW COLUMNS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-COLUMNS"}}'),r=n("785893"),s=n("250065");let a={title:"SHOW DYNAMIC PARTITION",language:"en"},d=void 0,l={},c=[{value:"Descriptions",id:"descriptions",level:2},{value:"Syntax\uFF1A",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"descriptions",children:"Descriptions"}),"\n",(0,r.jsx)(t.p,{children:"This statement is used to display the status of all dynamic partition tables in the current database."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax\uFF1A"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES [FROM <db_name>];\n"})}),"\n",(0,r.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"<db_name>"})]})}),"\n",(0,r.jsxs)(t.p,{children:["pecify the ",(0,r.jsx)(t.code,{children:"DB"})," name to display the status of dynamic partition tables. If not specified, the status of all dynamic partition tables in the current ",(0,r.jsx)(t.code,{children:"DB"})," will be displayed by default."]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Column"}),(0,r.jsx)(t.th,{children:"DataType"}),(0,r.jsx)(t.th,{children:"Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TableName"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The name of the table in the current DB or the specified DB."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Enable"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"Whether the dynamic partition property of the table is enabled"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TimeUnit"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsxs)(t.td,{children:["The partition granularity of the dynamic partition table, including ",(0,r.jsx)(t.code,{children:"HOUR"}),", ",(0,r.jsx)(t.code,{children:"DAY"}),", ",(0,r.jsx)(t.code,{children:"WEEK"}),", ",(0,r.jsx)(t.code,{children:"MONTH"}),", ",(0,r.jsx)(t.code,{children:"YEAR"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Start"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The starting offset of the dynamic partition, which is a negative number. The default value is -2147483648, which means that historical partitions will not be deleted. Depending on the time_unit attribute, partitions with a range before this offset will be deleted based on the current day (week/month)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"End"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The ending offset of the dynamic partition, which is a positive number. Depending on the time_unit attribute, partitions within the corresponding range are created in advance based on the current day (week/month)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Prefix"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The prefix of the dynamically created partition name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Buckets"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The number of buckets corresponding to the dynamically created partition."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReplicationNum"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The number of replicas corresponding to the dynamically created partition. If not specified, it defaults to the number of replicas specified when the table was created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReplicaAllocation"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The replica distribution strategy corresponding to the dynamically created partition. If not specified, it defaults to the replica distribution strategy specified when the table was created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"StartOf"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The starting point of each partition granularity for dynamic partitioning. When time_unit is WEEK, this field represents the starting point of each week, with values ranging from MONDAY to SUNDAY. When time_unit is MONTH, it represents the starting date of each month, with values ranging from 1rd to 28rd. When time_unit is MONTH, this value defaults to NULL."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastUpdateTime"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"The last update time of the dynamic partition, which defaults to NULL."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastSchedulerTime"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"The last scheduling time of the dynamic partition."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"State"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The state of the dynamic partition."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastCreatePartitionMsg"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The error message from the last execution of the dynamic partition addition scheduling."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastDropPartitionMsg"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The error message from the last execution of the dynamic partition deletion scheduling."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReservedHistoryPeriods"}),(0,r.jsx)(t.td,{children:"varchar"}),(0,r.jsx)(t.td,{children:"The partition range of the historical partitions retained by the dynamic partition, which indicates which historical partitions should be retained in the dynamic partition table instead of being automatically deleted."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["If the parameter db_name is not specified, the status of all dynamic partition tables in the current DB will be displayed, and it is assumed that the user has the ",(0,r.jsx)(t.code,{children:"SHOW_PRIV"})," privilege for the current DB by default."]}),"\n",(0,r.jsxs)(t.li,{children:["If the parameter db_name is specified, the status of all dynamic partition tables in the specified DB will be displayed, and the user needs to have the ",(0,r.jsx)(t.code,{children:"SHOW_PRIV"})," privilege for that DB."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"View the status of all dynamic partition tables in the current database:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES;\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"View the status of all dynamic partition tables in the specified database:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES FROM test;\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| test1     | true   | WEEK     | -30          | 3    | p      | 8       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| test2     | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| test3     | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n"})})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var i=n(667294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);