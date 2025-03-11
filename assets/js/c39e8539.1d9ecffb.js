"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["559835"],{169250:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/DESC-TABLE","title":"DESCRIBE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/DESC-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/DESC-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/DESC-TABLE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DESCRIBE","language":"en"},"sidebar":"docs","previous":{"title":"CREATE TABLE AS SELECT","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT"},"next":{"title":"ALTER TABLE COLUMN","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN"}}'),l=s("785893"),i=s("250065");let r={title:"DESCRIBE",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to display the schema information of the specified table."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DESC[RIBE] [db_name.]table_name [ALL];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1.",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Specifies the table identifier (name), which must be unique within the database in which it is located."}),"\n",(0,l.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g. ",(0,l.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,l.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,l.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1.",(0,l.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Specifies the identifier (i.e., name) for the database."}),"\n",(0,l.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a given language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,l.jsx)(n.code,{children:"My Database"}),")."]}),"\n",(0,l.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,l.jsx)(n.p,{children:"See Identifier Requirements and Reserved Keywords for more details."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2.",(0,l.jsx)(n.code,{children:"RIBE"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Returns description information of all columns in a table"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3.",(0,l.jsx)(n.code,{children:"ALL"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Returns description information for all columns"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"column name"}),(0,l.jsx)(n.th,{children:"description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"IndexName"}),(0,l.jsx)(n.td,{children:"Table name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"IndexKeysType"}),(0,l.jsx)(n.td,{children:"Table Model"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Field"}),(0,l.jsx)(n.td,{children:"Column Name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Type"}),(0,l.jsx)(n.td,{children:"Data Types"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Null"}),(0,l.jsx)(n.td,{children:"Whether NULL values are allowed"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Key"}),(0,l.jsx)(n.td,{children:"Is it a key column"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Default"}),(0,l.jsx)(n.td,{children:"Default Value"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Extra"}),(0,l.jsx)(n.td,{children:"Display some additional information"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Visible"}),(0,l.jsx)(n.td,{children:"Visible"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DefineExpr"}),(0,l.jsx)(n.td,{children:"Defining Expressions"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"WhereClause"}),(0,l.jsx)(n.td,{children:"Filter Conditions Related Definitions"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"When executing DESC, you need to have the SELECT_PRIV privilege on the table being queried"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If ALL is specified, the schema of all indexes (rollup) of the table is displayed."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Display the Base table schema"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DESC test_table;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------+-------------+------+-------+---------+-------+\n| Field   | Type        | Null | Key   | Default | Extra |\n+---------+-------------+------+-------+---------+-------+\n| user_id | bigint      | No   | true  | NULL    |       |\n| name    | varchar(20) | Yes  | false | NULL    | NONE  |\n| age     | int         | Yes  | false | NULL    | NONE  |\n+---------+-------------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Display the schema of all indexes in the table"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DESC demo.test_table ALL;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------+---------------+---------+-------------+--------------+------+-------+---------+-------+---------+------------+-------------+\n| IndexName  | IndexKeysType | Field   | Type        | InternalType | Null | Key   | Default | Extra | Visible | DefineExpr | WhereClause |\n+------------+---------------+---------+-------------+--------------+------+-------+---------+-------+---------+------------+-------------+\n| test_table | DUP_KEYS      | user_id | bigint      | bigint       | No   | true  | NULL    |       | true    |            |             |\n|            |               | name    | varchar(20) | varchar(20)  | Yes  | false | NULL    | NONE  | true    |            |             |\n|            |               | age     | int         | int          | Yes  | false | NULL    | NONE  | true    |            |             |\n+------------+---------------+---------+-------------+--------------+------+-------+---------+-------+---------+------------+-------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);