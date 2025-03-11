"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["713308"],{900940:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER","title":"DROP BROKER","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP BROKER","language":"en"},"sidebar":"docs","previous":{"title":"ADD BROKER","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER"},"next":{"title":"SHOW BROKER","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BROKER"}}'),r=s("785893"),l=s("250065");let a={title:"DROP BROKER",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to delete BROKER nodes."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop all Brokers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SYSTEM DROP ALL BROKER broker_name;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop one or more Broker nodes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP BROKER <broker_name> "<host>:<ipc_port>"[, "<host>:<ipc_port>" [, ...] ];\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<broker_name>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The name of the broker process to be deleted."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<host>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The IP of the node where the broker process to be deleted is located. If FQDN is enabled, use the FQDN of the node."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["3. ",(0,r.jsx)(n.code,{children:"<ipc_port>"})]}),"\nThe PORT of the node where the broker process to be deleted is located, and the default value of this port is 8000."]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user who executes this operation needs to have the NODE_PRIV permission."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete all Brokers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SYSTEM DROP ALL BROKER broker_name.\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete a specific Broker node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP BROKER broker_name "10.10.10.1:8000";\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},l=t.createContext(r);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);