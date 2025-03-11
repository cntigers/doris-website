"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["803212"],{228835:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","title":"PAUSE SYNC JOB","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"PAUSE SYNC JOB","language":"en"},"sidebar":"docs","previous":{"title":"CREATE SYNC JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/CREATE-SYNC-JOB"},"next":{"title":"RESUME SYNC JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB"}}'),a=t("785893"),i=t("250065");let o={title:"PAUSE SYNC JOB",language:"en"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Pause a running resident data synchronization job in a database identified by ",(0,a.jsx)(n.code,{children:"job_name"}),". The suspended job will stop synchronizing data while retaining its latest consumption position until it is resumed by the user."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"PAUSE SYNC JOB [<db>.]<job_name>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.code,{children:"<job_name>"})]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Specifies the name of the synchronization job to be paused."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.code,{children:"<db>"})]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If a database is specified using the ",(0,a.jsx)(n.code,{children:"[<db>.]"})," prefix, the job is located in that database; otherwise, the current database is used."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(n.p,{children:"Any user or role can perform this operation."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Pause the data synchronization job named ",(0,a.jsx)(n.code,{children:"job_name"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"PAUSE SYNC JOB `job_name`;\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let a={},i=s.createContext(a);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);