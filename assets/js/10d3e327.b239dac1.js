"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["199696"],{611028:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","title":"DROP CATALOG RECYCLE BIN","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP CATALOG RECYCLE BIN","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CATALOG RECYCLE BIN","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN"},"next":{"title":"RECOVER","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/RECOVER"}}'),l=t("785893"),i=t("250065");let d={title:"DROP CATALOG RECYCLE BIN",language:"en"},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to immediately delete databases, tables, or partitions in the recycle bin."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE { 'DbId' = <db_id> | 'TableId' = <table_id> | 'PartitionId' = <partition_id> }\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:"Delete a database by DbId"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<db_id>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The ID of the database to be immediately deleted."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Delete a table by TableId"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<table_id>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The ID of the table to be immediately deleted."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Delete a partition by PartitionId"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<partition_id>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The ID of the partition to be immediately deleted."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Privilege"}),(0,l.jsx)(n.th,{children:"Object"}),(0,l.jsx)(n.th,{children:"Note"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["When deleting databases, tables, or partitions, the recycle bin will delete them after ",(0,l.jsx)(n.code,{children:"catalog_trash_expire_second"})," seconds (set in ",(0,l.jsx)(n.code,{children:"fe.conf"}),"). This statement will delete them immediately."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'DbId'"}),", ",(0,l.jsx)(n.code,{children:"'TableId'"}),", and ",(0,l.jsx)(n.code,{children:"'PartitionId'"})," are case-insensitive and do not distinguish between single and double quotes."]}),"\n",(0,l.jsxs)(n.li,{children:["When deleting a database not in the recycle bin, all tables and partitions with the same ",(0,l.jsx)(n.code,{children:"DbId"})," in the recycle bin will also be deleted. It will only report an error if nothing (database, table, or partition) is deleted. The same applies when deleting a table not in the recycle bin."]}),"\n",(0,l.jsxs)(n.li,{children:["You can query the currently deletable metadata using ",(0,l.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Delete the database, tables, and partitions with DbId ",(0,l.jsx)(n.code,{children:"example_db_id"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'DbId' = example_db_id;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Delete the table and partitions with TableId ",(0,l.jsx)(n.code,{children:"example_tbl_id"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'TableId' = example_tbl_id;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Delete the partition with PartitionId ",(0,l.jsx)(n.code,{children:"p1_id"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'PartitionId' = p1_id;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);