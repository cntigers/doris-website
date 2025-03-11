"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["577019"],{804822:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"admin-manual/data-admin/recyclebin","title":"Recover from Recycle Bin","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/data-admin/recyclebin.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/recyclebin","permalink":"/docs/3.0/admin-manual/data-admin/recyclebin","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Recover from Recycle Bin","language":"en"},"sidebar":"docs","previous":{"title":"Performance","permalink":"/docs/3.0/admin-manual/data-admin/ccr/performance"},"next":{"title":"FE Log Management","permalink":"/docs/3.0/admin-manual/log-management/fe-log"}}'),l=a("785893"),r=a("250065");let c={title:"Recover from Recycle Bin",language:"en"},i=void 0,s={},o=[{value:"Recover from Recycle Bin",id:"recover-from-recycle-bin",level:2},{value:"Query Recycle Bin",id:"query-recycle-bin",level:3},{value:"Start Data Recovery",id:"start-data-recovery",level:3}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"recover-from-recycle-bin",children:"Recover from Recycle Bin"}),"\n",(0,l.jsxs)(n.p,{children:["To avoid disasters caused by accidental operations, Doris supports the recovery of accidentally deleted databases, tables, and partitions. After deleting a table or database, Doris does not immediately physically delete the data. When the user executes the ",(0,l.jsx)(n.code,{children:"DROP DATABASE/TABLE/PARTITION"})," command without using ",(0,l.jsx)(n.code,{children:"FORCE"}),", Doris moves the deleted database, table, or partition to the recycle bin. The ",(0,l.jsx)(n.code,{children:"RECOVER"})," command can be used to restore all data of the deleted database, table, or partition from the recycle bin, making it visible again."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," If the deletion was performed using ",(0,l.jsx)(n.code,{children:"DROP FORCE"}),", the data will be immediately deleted and cannot be recovered."]}),"\n",(0,l.jsx)(n.h3,{id:"query-recycle-bin",children:"Query Recycle Bin"}),"\n",(0,l.jsx)(n.p,{children:"You can query the Recycle Bin with the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [WHERE NAME [= "name" | LIKE "name_matcher"]];\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For more detailed syntax and best practices, please refer to the ",(0,l.jsx)(n.a,{href:"../../sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN",children:"SHOW-CATALOG-RECYCLE-BIN"})," command manual, You can also type ",(0,l.jsx)(n.code,{children:"help SHOW CATALOG RECYCLE BIN"})," on the MySql client command line for more help."]}),"\n",(0,l.jsx)(n.h3,{id:"start-data-recovery",children:"Start Data Recovery"}),"\n",(0,l.jsx)(n.p,{children:"To recover deleted data, you can use the following commands:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"Recover the database"})," named ",(0,l.jsx)(n.code,{children:"example_db"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"Recover the table"})," named ",(0,l.jsx)(n.code,{children:"example_tbl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"Recover partition"})," named p1 in table example_tbl:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For more detailed syntax and best practices used by RECOVER, please refer to the ",(0,l.jsx)(n.a,{href:"../../sql-manual/sql-statements/recycle/RECOVER",children:"RECOVER"})," command manual, You can also type ",(0,l.jsx)(n.code,{children:"HELP RECOVER"})," on the MySql client command line for more help."]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return c}});var t=a(667294);let l={},r=t.createContext(l);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);