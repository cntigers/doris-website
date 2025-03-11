"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["494011"],{46415:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>i,toc:()=>c,contentTitle:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-statements/recycle/RECOVER","title":"RECOVER","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/recycle/RECOVER.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/RECOVER","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/RECOVER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RECOVER","language":"en"},"sidebar":"docs","previous":{"title":"DROP CATALOG RECYCLE BIN","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN"},"next":{"title":"CREATE FUNCTION","permalink":"/docs/3.0/sql-manual/sql-statements/function/CREATE-FUNCTION"}}'),r=s("785893"),a=s("250065");let d={title:"RECOVER",language:"en"},t=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Syntax:",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to recover previously deleted databases, tables, or partitions."}),"\n",(0,r.jsx)(n.p,{children:"It supports recovering specified metadata by name or ID and allows renaming the recovered metadata."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER { DATABASE <db_name> [<db_id>] [AS <new_db_name>] \n        | TABLE [<db_name>.]<table_name> [<table_id>] [AS <new_table_name>] \n        | PARTITION <partition_name> [<partition_id>] FROM [<db_name>.]<table_name> [AS <new_partition_name>] }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Recover a database"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the database to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recover a table"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the table to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recover a partition"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<partition_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the partition to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the table where the partition resides."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Recover a database"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<db_id>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The ID of the database to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<new_db_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The new name of the recovered database."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recover a table"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the database where the table resides."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<table_id>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The ID of the table to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["3. ",(0,r.jsx)(n.code,{children:"<new_table_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The new name of the recovered table."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recover a partition"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<partition_id>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The ID of the partition to recover."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the database where the table resides."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["3. ",(0,r.jsx)(n.code,{children:"<new_partition_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The new name of the recovered partition."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Note"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This operation can only recover metadata deleted within a certain period. The default is 1 day (configurable via the ",(0,r.jsx)(n.code,{children:"catalog_trash_expire_second"})," parameter in ",(0,r.jsx)(n.code,{children:"fe.conf"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"If no ID is specified when recovering metadata, the last deleted metadata with the same name is recovered by default."}),"\n",(0,r.jsxs)(n.li,{children:["You can query the currently recoverable metadata using ",(0,r.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a database named ",(0,r.jsx)(n.code,{children:"example_db"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a table named ",(0,r.jsx)(n.code,{children:"example_tbl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a partition named ",(0,r.jsx)(n.code,{children:"p1"})," from the table ",(0,r.jsx)(n.code,{children:"example_tbl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a database with ID ",(0,r.jsx)(n.code,{children:"example_db_id"})," and name ",(0,r.jsx)(n.code,{children:"example_db"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a table with ID ",(0,r.jsx)(n.code,{children:"example_tbl_id"})," and name ",(0,r.jsx)(n.code,{children:"example_tbl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl example_tbl_id;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a partition with ID ",(0,r.jsx)(n.code,{children:"p1_id"})," and name ",(0,r.jsx)(n.code,{children:"p1"})," from the table ",(0,r.jsx)(n.code,{children:"example_tbl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id FROM example_tbl;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a database with ID ",(0,r.jsx)(n.code,{children:"example_db_id"})," and name ",(0,r.jsx)(n.code,{children:"example_db"}),", and rename it to ",(0,r.jsx)(n.code,{children:"new_example_db"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db example_db_id AS new_example_db;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a table named ",(0,r.jsx)(n.code,{children:"example_tbl"})," and rename it to ",(0,r.jsx)(n.code,{children:"new_example_tbl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Recover a partition with ID ",(0,r.jsx)(n.code,{children:"p1_id"})," and name ",(0,r.jsx)(n.code,{children:"p1"})," from the table ",(0,r.jsx)(n.code,{children:"example_tbl"}),", and rename it to ",(0,r.jsx)(n.code,{children:"new_p1"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var l=s(667294);let r={},a=l.createContext(r);function d(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);