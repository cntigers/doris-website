"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["854978"],{631001:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT","title":"CANCEL EXPORT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CANCEL EXPORT","language":"en"},"sidebar":"docs","previous":{"title":"EXPORT","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/EXPORT"},"next":{"title":"SHOW EXPORT","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT"}}'),l=n("785893"),a=n("250065");let i={title:"CANCEL EXPORT",language:"en"},o=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This statement is used to undo an export job for the specified label. Or batch undo export jobs via fuzzy matching."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'CANCEL EXPORT\n[ FROM <db_name> ]\nWHERE [ LABEL = "<export_label>" | LABEL like "<label_pattern>" | STATE = "<state>" ]\n'})}),"\n",(0,l.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"<db_name>"})]})}),"\n",(0,l.jsx)(t.p,{children:"The name of the database to which the exported data task belongs. If omitted, the default is the current database."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["2. ",(0,l.jsx)(t.code,{children:"<export_label>"})]})}),"\n",(0,l.jsx)(t.p,{children:"Each import needs to be assigned a unique Label. Stopping this task requires specifying the label."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["3. ",(0,l.jsx)(t.code,{children:"<label_pattern>"})]})}),"\n",(0,l.jsxs)(t.p,{children:["A label expression for fuzzy matching. If you want to undo multiple EXPORT jobs, you can use ",(0,l.jsx)(t.code,{children:"LIKE"})," for fuzzy matching."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["4. ",(0,l.jsx)(t.code,{children:"<state>"})]})}),"\n",(0,l.jsxs)(t.p,{children:["state options: ",(0,l.jsx)(t.code,{children:"PENDING"}),",",(0,l.jsx)(t.code,{children:"IN_QUEUE"}),",",(0,l.jsx)(t.code,{children:"EXPORTING"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Requires modification access to the database."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Only pending export jobs in PENDING, IN_QUEUE,EXPORTING state can be canceled."}),"\n",(0,l.jsx)(t.li,{children:"When performing batch undo, Doris does not guarantee the atomic undo of all corresponding export jobs. That is, it is possible that only some of the export jobs were successfully undone. The user can view the job status through the SHOW EXPORT statement and try to execute the CANCEL EXPORT statement repeatedly."}),"\n",(0,l.jsxs)(t.li,{children:["When the job of the ",(0,l.jsx)(t.code,{children:"EXPORTING"})," state is revoked, part of the data may have been exported to the storage system, and the user needs to process (delete) this section to export data."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Cancel the export job whose label is ",(0,l.jsx)(t.code,{children:"example_db_test_export_label"})," on the database example_db."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'CANCEL EXPORT\nFROM example_db\nWHERE LABEL = "example_db_test_export_label" and STATE = "EXPORTING";\n'})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Cancel all export jobs containing example* on the database example*db."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n'})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'Cancel all export jobs which state are "PENDING"'}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'CANCEL EXPORT\nFROM example_db\nWHERE STATE = "PENDING";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(667294);let l={},a=s.createContext(l);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);