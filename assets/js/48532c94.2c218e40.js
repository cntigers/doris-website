"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["8933"],{443435:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>l,assets:()=>r,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT","title":"ALTER TABLE COMMENT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER TABLE COMMENT","language":"en"},"sidebar":"docs","previous":{"title":"ALTER TABLE PROPERTY","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY"},"next":{"title":"ALTER TABLE AND GENERATED COLUMN","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-AND-GENERATED-COLUMN"}}'),s=t("785893"),a=t("250065");let i={title:"ALTER TABLE COMMENT",language:"en"},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to modify the comment of an existing table. The operation is synchronous, and the command returns to indicate completion."}),"\n",(0,s.jsx)(n.p,{children:"grammar\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Modify table comment"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"grammar\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MODIFY COMMENT "new table comment";\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Modify column comment"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"grammar\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MODIFY COLUMN col1 COMMENT "new column comment";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Change the table1's comment to table1_comment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE table1 MODIFY COMMENT "table1_comment";\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Change the table1's col1 comment to table1_comment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE table1 MODIFY COLUMN col1 COMMENT "table1_col1_comment";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, COMMENT, ALTER TABLE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);