"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["66536"],{503549:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES","title":"SHOW REPOSITORIES","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW REPOSITORIES","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CREATE REPOSITORY","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-CREATE-REPOSITORY"},"next":{"title":"BACKUP","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP"}}'),s=t("785893"),i=t("250065");let d={title:"SHOW REPOSITORIES",language:"en"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to view the currently created warehouse"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW REPOSITORIES;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"RepoId"})}),(0,s.jsx)(n.td,{children:"The unique identifier (ID) of the repository"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"RepoName"})}),(0,s.jsx)(n.td,{children:"The name of the repository"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CreateTime"})}),(0,s.jsx)(n.td,{children:"The creation time of the repository"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"IsReadOnly"})}),(0,s.jsxs)(n.td,{children:["Whether the repository is read-only. ",(0,s.jsx)(n.code,{children:"false"})," means not read-only, ",(0,s.jsx)(n.code,{children:"true"})," means read-only"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Location"})}),(0,s.jsx)(n.td,{children:"The root directory used for backing up data in the repository"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Broker"})}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.td,{children:"The repository type, currently supporting S3 and HDFS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"ErrMsg"})}),(0,s.jsxs)(n.td,{children:["The error message of the repository. Typically ",(0,s.jsx)(n.code,{children:"NULL"})," if no error occurs"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"View the created repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW REPOSITORIES;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------+--------------+---------------------+------------+----------+--------+------+--------+\n| RepoId | RepoName     | CreateTime          | IsReadOnly | Location | Broker | Type | ErrMsg |\n+--------+--------------+---------------------+------------+----------+--------+------+--------+\n| 43411  | example_repo | 2025-01-17 18:50:47 | false      | s3://rep1  | -      | S3   | NULL   |\n+--------+--------------+---------------------+------------+----------+--------+------+--------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);