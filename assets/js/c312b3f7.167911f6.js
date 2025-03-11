"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["871732"],{207482:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","title":"CREATE ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE ASYNC MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL MATERIALIZED VIEW TASK","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/CANCEL-MATERIALIZED-VIEW-TASK"},"next":{"title":"PAUSE MATERIALIZED VIEW JOB","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/PAUSE-MATERIALIZED-VIEW-JOB"}}'),r=n("785893"),s=n("250065");let a={title:"CREATE ASYNC MATERIALIZED VIEW",language:"en"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Notes",id:"notes",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Statement for creating an asynchronous materialized view. The column names and types are derived from the materialized view SQL statement. Custom column names are allowed, but column types cannot be defined."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW \n[ IF NOT EXISTS ] <materialized_view_name>\n    [ (<columns_definition>) ] \n    [ BUILD <build_mode> ]\n    [ REFRESH <refresh_method> [<refresh_trigger>]]\n    [ [DUPLICATE] KEY (<key_cols>) ]\n    [ COMMENT '<table_comment>' ]\n    [ PARTITION BY (\n        { <partition_col> \n            | DATE_TRUNC(<partition_col>, <partition_unit>) }\n        )]\n    [ DISTRIBUTED BY { HASH (<distribute_cols>) | RANDOM }\n        [ BUCKETS { <bucket_count> | AUTO } ]\n    ]               \n    [ PROPERTIES (\n          -- Table property\n          <table_property>\n          -- Additional table properties\n          [ , ... ]) \n    ]\n    AS <query>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Where:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"columns_definition\n  : -- Column definition\n    <col_name> \n      [ COMMENT '<col_comment>' ]\nrefresh_trigger\n  : ON MANUAL\n  | ON SCHEDULE EVERY <int_value> <refresh_unit> [ STARTS '<start_time>']\n  | ON COMMIT\n"})}),"\n",(0,r.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"<materialized_view_name>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Specifies the identifier (i.e., name) of the materialized view; it must be unique within the database where the table is created."}),"\n",(0,r.jsxs)(t.p,{children:["The identifier must start with a letter character (if Unicode name support is enabled, it can be any character from any language) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,r.jsx)(t.code,{children:"My Object"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"The identifier cannot be a reserved keyword."}),"\n",(0,r.jsx)(t.p,{children:"For more details, refer to the requirements for identifiers and reserved keywords."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. ",(0,r.jsx)(t.code,{children:"<query>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"A required parameter when creating a materialized view. Specifies the SELECT statement that populates the data."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"<key_cols>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:'The key columns of the table. In Doris, key columns must be the first K columns of the table. For more information on key restrictions and how to choose key columns, refer to the respective sections in the "Data Model" chapter.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. ",(0,r.jsx)(t.code,{children:"<build_mode>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Refresh timing: whether the materialized view should be refreshed immediately after creation."}),"\n",(0,r.jsx)(t.p,{children:"IMMEDIATE: Refresh immediately. Default is IMMEDIATE."}),"\n",(0,r.jsx)(t.p,{children:"DEFERRED: Delayed refresh."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["3. ",(0,r.jsx)(t.code,{children:"<refresh_method>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Refresh method:"}),"\n",(0,r.jsx)(t.p,{children:"COMPLETE: Refresh all partitions."}),"\n",(0,r.jsx)(t.p,{children:"AUTO: Try to refresh incrementally, only refreshing partitions that have changed since the last materialized view refresh. If incremental refresh is not possible, all partitions will be refreshed."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["4. ",(0,r.jsx)(t.code,{children:"<refresh_trigger>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Trigger method:"}),"\n",(0,r.jsx)(t.p,{children:"MANUAL: Manual refresh."}),"\n",(0,r.jsx)(t.p,{children:"ON SCHEDULE: Scheduled refresh."}),"\n",(0,r.jsx)(t.p,{children:"ON COMMIT: Triggered refresh, where changes to the base table data trigger a refresh of the materialized view."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["5. ",(0,r.jsx)(t.code,{children:"<refresh_unit>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The time unit for periodic refreshes. Currently supported units are MINUTE, HOUR, DAY, and WEEK."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["6. ",(0,r.jsx)(t.code,{children:"<partition_col>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"If PARTITION BY is not specified, there will be only one partition by default."}),"\n",(0,r.jsx)(t.p,{children:"If a partition field is specified, it will automatically infer which base table the field comes from and synchronize the base table (currently supports internal tables and Hive tables). For internal tables, only one partition field is allowed."}),"\n",(0,r.jsxs)(t.p,{children:["Materialized views can also reduce the number of partitions through partition roll-up. Currently, the partition roll-up function supports ",(0,r.jsx)(t.code,{children:"date_trunc"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["7. ",(0,r.jsx)(t.code,{children:"<partition_unit>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The aggregation granularity for partition roll-up. Currently supported units are HOUR, DAY, WEEK, QUARTER, MONTH, and YEAR."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["8. ",(0,r.jsx)(t.code,{children:"<start_time>"})]})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The scheduled start time must be in the future, i.e., later than the current time."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["9. ",(0,r.jsx)(t.code,{children:"<table_property>"})]})}),"\n",(0,r.jsx)(t.p,{children:"Properties used by internal tables, most of which can be used by materialized views, along with some properties specific to materialized views, as listed below:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"grace_period"}),(0,r.jsxs)(t.td,{children:["The maximum allowed delay in seconds for materialized view data during query rewriting. If partition A of the materialized view and the base table data are inconsistent, and the last refresh time of partition A was 10:15:00, with the current system time being 10:15:08, the partition will not be transparently rewritten. However, if ",(0,r.jsx)(t.code,{children:"grace_period"})," is set to 10, the partition will be used for transparent rewriting."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"excluded_trigger_tables"}),(0,r.jsxs)(t.td,{children:["Comma-separated table names to be ignored during data refresh. For example, ",(0,r.jsx)(t.code,{children:"table1,table2"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"refresh_partition_num"}),(0,r.jsx)(t.td,{children:"The number of partitions refreshed by a single INSERT statement, defaulting to 1. When refreshing a materialized view, it first calculates the list of partitions to be refreshed and then splits them into multiple INSERT statements for sequential execution. If an INSERT statement fails, the entire task will stop. The materialized view ensures the atomicity of a single INSERT statement, and a failed INSERT will not affect partitions that have already been refreshed successfully."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"workload_group"}),(0,r.jsxs)(t.td,{children:["The name of the ",(0,r.jsx)(t.code,{children:"workload_group"})," used when the materialized view executes refresh tasks. This is used to limit the resources used by the materialized view during data refresh to avoid impacting other business operations. For more information on creating and using ",(0,r.jsx)(t.code,{children:"workload_group"}),", refer to the ",(0,r.jsx)(t.a,{href:"https://doris.apache.org/zh-CN/docs/admin-manual/workload-group.md",children:"WORKLOAD-GROUP"})," documentation."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"partition_sync_limit"}),(0,r.jsxs)(t.td,{children:["When the base table's partition field is of type time, this property can be used to configure the range of partitions to synchronize with the base table, in conjunction with ",(0,r.jsx)(t.code,{children:"partition_sync_time_unit"}),". For example, setting it to 2 with ",(0,r.jsx)(t.code,{children:"partition_sync_time_unit"})," set to ",(0,r.jsx)(t.code,{children:"MONTH"})," means that only the partitions and data from the last 2 months of the base table will be synchronized. The minimum value is ",(0,r.jsx)(t.code,{children:"1"}),". As time progresses, the materialized view will automatically add and remove partitions during each refresh. For example, if the materialized view currently has data for months 2 and 3, next month it will automatically remove the data for month 2 and add data for month 4."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"partition_sync_time_unit"}),(0,r.jsx)(t.td,{children:"The time unit for partition refresh, supporting DAY/MONTH/YEAR (default is DAY)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"partition_date_format"}),(0,r.jsxs)(t.td,{children:["When the base table's partition field is of type string, if you want to use the ",(0,r.jsx)(t.code,{children:"partition_sync_limit"})," capability, you can set the date format to parse the partition time according to the ",(0,r.jsx)(t.code,{children:"partition_date_format"})," setting."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enable_nondeterministic_function"}),(0,r.jsx)(t.td,{children:"Whether the materialized view definition SQL is allowed to contain nondeterministic functions, such as current_date(), now(), random(), etc. If set to true, it allows the inclusion; otherwise, it does not. The default is not to allow."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"use_for_rewrite"}),(0,r.jsx)(t.td,{children:"Indicates whether this materialized view participates in transparent rewriting. If set to false, it does not participate in transparent rewriting. The default is true. In data modeling scenarios, if the materialized view is only used for direct queries, this property can be set so that the materialized view does not participate in transparent rewriting, thereby improving query response speed."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(t.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Privilege"}),(0,r.jsx)(t.th,{children:"Object"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CREATE_PRIV"}),(0,r.jsx)(t.td,{children:"Database"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SELECT_PRIV"}),(0,r.jsx)(t.td,{children:"Table, View"}),(0,r.jsxs)(t.td,{children:["Requires SELECT_PRIV permission on the tables or views queried in ",(0,r.jsx)(t.code,{children:"<query>"})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Materialized view DML and DDL limitations:"}),"\n",(0,r.jsx)(t.p,{children:"Materialized views do not support schema change operations such as modifying column types, adding, or deleting columns, as the columns are derived from the materialized view definition SQL."}),"\n",(0,r.jsx)(t.p,{children:"Materialized views do not support manual insert into or insert overwrite operations."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Conditions for creating partitioned materialized views:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The SQL definition of the materialized view and the partition field must meet the following conditions to perform partitioned incremental updates:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"At least one of the base tables used by the materialized view must be a partitioned table."}),"\n",(0,r.jsx)(t.li,{children:"The partitioned base table used by the materialized view must use a List or Range partitioning strategy."}),"\n",(0,r.jsx)(t.li,{children:"The materialized view definition SQL can only have one partition field in the Partition By clause."}),"\n",(0,r.jsx)(t.li,{children:"The partition field in the Partition By clause of the materialized view SQL must appear after the Select clause."}),"\n",(0,r.jsx)(t.li,{children:"If the materialized view definition SQL uses Group By, the partition field must appear after the Group By clause."}),"\n",(0,r.jsx)(t.li,{children:"If the materialized view definition SQL uses a Window function, the partition field must appear after the Partition By clause."}),"\n",(0,r.jsx)(t.li,{children:"Data changes should occur on the partitioned table; if they occur on a non-partitioned table, the materialized view requires a full build."}),"\n",(0,r.jsx)(t.li,{children:"If the materialized view uses a field from the NULL-generating side of a Join as a partition field, it cannot perform partitioned incremental updates. For example, for a LEFT OUTER JOIN, the partition field must be on the left side, not"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(667294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);