"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["401803"],{933166:function(e,n,l){l.r(n),l.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP","title":"ALTER TABLE ROLLUP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER TABLE ROLLUP","language":"en"},"sidebar":"docs","previous":{"title":"ALTER TABLE PARTITION","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION"},"next":{"title":"ALTER TABLE RENAME","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME"}}'),a=l("785893"),t=l("250065");let i={title:"ALTER TABLE ROLLUP",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This statement is used to perform a rollup modification operation on an existing table. The rollup is an asynchronous operation, and the task is returned when the task is submitted successfully. After that, you can use the ",(0,a.jsx)(n.a,{href:"../../../../sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE",children:"SHOW ALTER"})," command to view the progress."]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The alter_clause of rollup supports the following creation methods"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create a rollup index"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,a.jsx)(n.p,{children:"properties: Support setting timeout time, the default timeout time is 1 day."}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Create rollup indexes in batches"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Notice:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If from_index_name is not specified, it will be created from base index by default"}),"\n",(0,a.jsx)(n.li,{children:"Columns in rollup table must be columns already in from_index"}),"\n",(0,a.jsxs)(n.li,{children:["In properties, the storage format can be specified. For details, see ",(0,a.jsx)(n.a,{href:"./CREATE-TABLE",children:"CREATE TABLE"})]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Delete rollup index"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Batch delete rollup index"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Notice:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"cannot delete base index"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create index: example_rollup_index, based on base index (k1,k2,k3,v1,v2). Columnar storage."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Create index: example_rollup_index2, based on example_rollup_index (k1,k3,v1,v2)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Create index: example_rollup_index3, based on base index (k1,k2,k3,v1), with a custom rollup timeout of one hour."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Delete index: example_rollup_index2"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Batch Delete rollup index"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n"})}),"\n",(0,a.jsx)(n.h3,{id:""}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Keywords"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, ROLLUP, ALTER TABLE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var s=l(667294);let a={},t=s.createContext(a);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);