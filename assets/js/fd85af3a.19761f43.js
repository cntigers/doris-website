"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["974152"],{74554:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE","title":"TRUNCATE-TABLE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TRUNCATE-TABLE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW ALTER","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE"},"next":{"title":"DROP-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/DROP-TABLE"}}'),i=t("785893"),a=t("250065");let l={title:"TRUNCATE-TABLE",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to clear the data of the specified table and partition."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE [<db_name>.]<table_name>[ PARTITION ( <partition_name1> [, <partition_name2> ... ] ) ];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1.",(0,i.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the identifier (name) for the database."}),"\n",(0,i.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a given language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,i.jsx)(n.code,{children:"My Database"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"See Identifier Requirements and Reserved Keywords for more details."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2.",(0,i.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the table identifier (name), which must be unique within the database in which it is located."}),"\n",(0,i.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a language if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g. ",(0,i.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1.",(0,i.jsx)(n.code,{children:"<partition_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Specifies the identifier (name) of the partition."}),"\n",(0,i.jsxs)(n.p,{children:["Identifiers must begin with an alphabetic character (or any character in a script if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g. ",(0,i.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Identifiers cannot use reserved keywords."}),"\n",(0,i.jsx)(n.p,{children:"See Identifier Requirements and Reserved Keywords for more details."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Drop_priv"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"TRUNCATE TABLE belongs to the table DROP operation"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This statement clears data but retains the table or partition."}),"\n",(0,i.jsx)(n.li,{children:"Unlike DELETE, this statement can only clear the specified table or partition as a whole and cannot add filtering conditions."}),"\n",(0,i.jsx)(n.li,{children:"Unlike DELETE, clearing data in this way will not affect query performance."}),"\n",(0,i.jsx)(n.li,{children:"The data deleted by this operation cannot be recovered."}),"\n",(0,i.jsx)(n.li,{children:"When using this command, the table status must be NORMAL, that is, operations such as SCHEMA CHANGE are not allowed."}),"\n",(0,i.jsx)(n.li,{children:"This command may cause the import in progress to fail."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clear the table tbl under example_db"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clear the p1 and p2 partitions of table tbl"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);