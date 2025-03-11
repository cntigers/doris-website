"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336807"],{497159:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/iceberg-meta","title":"ICEBERG_META","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/iceberg-meta.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/iceberg-meta","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ICEBERG_META","language":"en"},"sidebar":"docs","previous":{"title":"HUDI_META","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/hudi-meta"},"next":{"title":"BACKENDS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/backends"}}'),a=t("785893"),l=t("250065");let i={title:"ICEBERG_META",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"iceberg_meta table-valued-function(tvf), Use for read iceberg metadata, operation history, snapshots of table, file metadata etc."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ICEBERG_META(\n    "table" = "<table>", \n    "query_type" = "<query_type>"\n  );\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Each parameter in the ",(0,a.jsx)(n.code,{children:"iceberg_meta"})," table function (tvf) is a ",(0,a.jsx)(n.code,{children:'"key"="value"'})," pair."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<table>"})}),(0,a.jsxs)(n.td,{children:["The full table name, which must be specified in the format of ",(0,a.jsx)(n.code,{children:"database_name.table_name"})," for the Iceberg table that you want to view."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<query_type>"})}),(0,a.jsxs)(n.td,{children:["The type of metadata you want to view. Currently, only ",(0,a.jsx)(n.code,{children:"snapshots"})," is supported."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Read and access the iceberg tabular metadata for snapshots."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Can be used with ",(0,a.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Inspect the iceberg table snapshots :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  | {"flink.job-id":"xxm1", ...} |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  | {"flink.job-id":"xxm3", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Filtered by snapshot_id :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") where snapshot_id = 98865735822;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);