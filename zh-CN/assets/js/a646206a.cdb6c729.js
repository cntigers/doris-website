"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["442046"],{105844:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/mv_infos","title":"MV_INFOS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-valued-functions/mv_infos.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/mv_infos","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/mv_infos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MV_INFOS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NUMBERS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/numbers"},"next":{"title":"PARTITIONS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/partitions"}}'),r=t("785893"),l=t("250065");let i={title:"MV_INFOS",language:"zh-CN"},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)",id:"\u5FC5\u586B\u53C2\u6570-required-parameters",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u67D0\u4E2A db \u4E2D\u521B\u5EFA\u7684\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'MV_INFOS("database"="<database>")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5FC5\u586B\u53C2\u6570-required-parameters",children:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"<database>"})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4\u6570\u636E\u5E93\u540D"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B57\u6BB5\u540D\u79F0"}),(0,r.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Id"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE id"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE Name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JobName"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u5BF9\u5E94\u7684 job \u540D\u79F0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"State"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u72B6\u6001"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SchemaChangeDetail"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE State \u53D8\u4E3A SchemaChange \u7684\u539F\u56E0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RefreshState"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u5237\u65B0\u72B6\u6001"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RefreshInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49\u7684\u5237\u65B0\u7B56\u7565\u4FE1\u606F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QuerySql"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u5B9A\u4E49\u7684\u67E5\u8BE2\u8BED\u53E5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EnvInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u65F6\u7684\u73AF\u5883\u4FE1\u606F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MvProperties"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u5C5E\u6027"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MvPartitionInfo"}),(0,r.jsx)(n.td,{children:"TEXT"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89C6\u56FE\u7684\u5206\u533A\u4FE1\u606F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SyncWithBaseTables"}),(0,r.jsx)(n.td,{children:"BOOLEAN"}),(0,r.jsxs)(n.td,{children:["\u662F\u5426\u548C base \u8868\u6570\u636E\u540C\u6B65\uFF0C\u5982\u9700\u67E5\u770B\u54EA\u4E2A\u5206\u533A\u4E0D\u540C\u6B65\uFF0C\u8BF7\u4F7F\u7528",(0,r.jsx)(n.a,{href:"../../sql-statements/table-and-view/table/SHOW-PARTITIONS",children:"SHOW PARTITIONS"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B test \u4E0B\u7684\u6240\u6709\u7269\u5316\u89C6\u56FE"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from mv_infos("database"="test");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| Id    | Name                     | JobName          | State  | SchemaChangeDetail | RefreshState | RefreshInfo                           | QuerySql                                                                                                                                                         | MvProperties                                              | MvPartitionInfo                                                                                           | SyncWithBaseTables |\n+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| 19494 | mv1                      | inner_mtmv_19494 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`user`.`k2`, `internal`.`test`.`user`.`k3` FROM `internal`.`test`.`user`                                                                      | {partition_sync_limit=100, partition_sync_time_unit=YEAR} | MTMVPartitionInfo{partitionType=FOLLOW_BASE_TABLE, relatedTable=user, relatedCol='k2', partitionCol='k2'} |                  1 |\n| 21788 | test_tablet_type_mtmv_mv | inner_mtmv_21788 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`test_tablet_type_mtmv_table`.`k2`, `internal`.`test`.`test_tablet_type_mtmv_table`.`k3` from `internal`.`test`.`test_tablet_type_mtmv_table` | {}                                                        | MTMVPartitionInfo{partitionType=SELF_MANAGE}                                                              |                  0 |\n+-------+--------------------------+------------------+--------+--------------------+--------------+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B test \u4E0B\u7684\u7269\u5316\u89C6\u56FE\u540D\u79F0\u4E3A mv1 \u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from mv_infos("database"="test") where Name = "mv1";\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| Id    | Name | JobName          | State  | SchemaChangeDetail | RefreshState | RefreshInfo                           | QuerySql                                                                                    | MvProperties                                              | MvPartitionInfo                                                                                           | SyncWithBaseTables |\n+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n| 19494 | mv1  | inner_mtmv_19494 | NORMAL |                    | SUCCESS      | BUILD DEFERRED REFRESH AUTO ON MANUAL | SELECT `internal`.`test`.`user`.`k2`, `internal`.`test`.`user`.`k3` FROM `internal`.`test`.`user` | {partition_sync_limit=100, partition_sync_time_unit=YEAR} | MTMVPartitionInfo{partitionType=FOLLOW_BASE_TABLE, relatedTable=user, relatedCol='k2', partitionCol='k2'} |                  1 |\n+-------+------+------------------+--------+--------------------+--------------+---------------------------------------+---------------------------------------------------------------------------------------------+-----------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+--------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);