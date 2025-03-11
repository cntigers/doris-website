"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["214220"],{90378:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/STOP-SYNC-JOB","title":"STOP SYNC JOB","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/STOP-SYNC-JOB.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/STOP-SYNC-JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/STOP-SYNC-JOB","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"STOP SYNC JOB","language":"en"},"sidebar":"docs","previous":{"title":"RESUME SYNC JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB"},"next":{"title":"SHOW SYNC JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-SYNC-JOB"}}'),s=t("785893"),i=t("250065");let o={title:"STOP SYNC JOB",language:"en"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Stop a running resident data synchronization job in a database by specifying its ",(0,s.jsx)(n.code,{children:"job_name"}),". Once stopped, the job will cease synchronizing data and release its occupied resources."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"STOP SYNC JOB [<db>.]<job_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<job_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the name of the data synchronization job to be stopped."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If a database is specified using the ",(0,s.jsx)(n.code,{children:"[<db>.]"})," prefix, the job is located in that database; otherwise, the current database is used."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Any user or role can perform this operation."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Stop the data synchronization job named ",(0,s.jsx)(n.code,{children:"job_name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"STOP SYNC JOB `job_name`;\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(667294);let s={},i=a.createContext(s);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);