"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["725727"],{347779:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE","title":"TRUNCATE-TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Drop","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TRUNCATE-TABLE","language":"en"},"sidebar":"docs","previous":{"title":"DROP-DATABASE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"},"next":{"title":"CREATE-REPOSITORY","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"}}'),l=t("785893"),i=t("250065");let s={title:"TRUNCATE-TABLE",language:"en"},r=void 0,o={},c=[{value:"TRUNCATE-TABLE",id:"truncate-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"truncate-table",children:"TRUNCATE-TABLE"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"TRUNCATE TABLE"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to clear the data of the specified table and partition\ngrammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n"})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The statement clears the data, but leaves the table or partition."}),"\n",(0,l.jsx)(n.li,{children:"Unlike DELETE, this statement can only clear the specified table or partition as a whole, and cannot add filter conditions."}),"\n",(0,l.jsx)(n.li,{children:"Unlike DELETE, using this method to clear data will not affect query performance."}),"\n",(0,l.jsx)(n.li,{children:"The data deleted by this operation cannot be recovered."}),"\n",(0,l.jsx)(n.li,{children:"When using this command, the table status needs to be NORMAL, that is, operations such as SCHEMA CHANGE are not allowed."}),"\n",(0,l.jsx)(n.li,{children:"This command may cause the ongoing load to fail"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Clear the table tbl under example_db"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Empty p1 and p2 partitions of table tbl"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:" TRUNCATE, TABLE\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(667294);let l={},i=a.createContext(l);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);