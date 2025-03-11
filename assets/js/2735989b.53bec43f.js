"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["719832"],{349617:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","title":"SHOW TRASH","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW TRASH","language":"en"},"sidebar":"docs","previous":{"title":"ADMIN CLEAN TRASH","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH"},"next":{"title":"SHOW CATALOG RECYCLE BIN","permalink":"/docs/dev/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN"}}'),a=n("785893"),l=n("250065");let i={title:"SHOW TRASH",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to view the space occupied by garbage data in backend."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'SHOW TRASH [ON ("<be_host>:<be_heartbeat_port>" [, ...])];\n'})}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:'[ON ("<be_host>:<be_heartbeat_port>" [, ...])]'})]})}),"\n",(0,a.jsx)(t.p,{children:"Specify the backend that you want to view. If you do not add ON, all backend is displayed by default."}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV or NODE_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"User or Role"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Only users or roles with the ADMIN_PRIV or NODE_PRIV privilege can perform the SHOW TRASH operation."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"View the garbage data usage of all be nodes."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW TRASH;\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"View the junk data usage of '192.168.0.1:9050' (disk information is displayed)."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'SHOW TRASH ON "192.168.0.1:9050";\n'})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);