"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336670"],{379334:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","title":"ADMIN CLEAN TRASH","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ADMIN CLEAN TRASH","language":"en"},"sidebar":"docs","previous":{"title":"SHOW REPLICA DISTRIBUTION","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-DISTRIBUTION"},"next":{"title":"SHOW TRASH","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH"}}'),s=n("785893"),l=n("250065");let r={title:"ADMIN CLEAN TRASH",language:"en"},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to clear garbage data in backend."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'ADMIN CLEAN TRASH [ON ("<be_host>:<be_heartbeat_port>" [, ...])]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["1. ",(0,s.jsx)(t.code,{children:'[ON ("<be_host>:<be_heartbeat_port>" [, ...])]'})]})}),"\n",(0,s.jsx)(t.p,{children:"Specify the backend to be cleaned up. If you do not add ON, all backend is cleared by default."}),"\n",(0,s.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(t.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"User or Role"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Only users or roles with the ADMIN_PRIV privilege can perform the CLEAN TRASH  operation."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"-- Clean up the junk data of all be nodes.\nADMIN CLEAN TRASH;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"-- Clean up garbage data for '192.168.0.1:9050' and '192.168.0.2:9050'.\nADMIN CLEAN TRASH ON (\"192.168.0.1:9050\", \"192.168.0.2:9050\");\n"})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var a=n(667294);let s={},l=a.createContext(s);function r(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);