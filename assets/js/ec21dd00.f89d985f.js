"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["252879"],{302987:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND","title":"DECOMMISSION BACKEND","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DECOMMISSION BACKEND","language":"en"},"sidebar":"docs","previous":{"title":"SHOW BACKEND CONFIG","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG"},"next":{"title":"CANCEL DECOMMISSION BACKEND","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND"}}'),a=n("785893"),l=n("250065");let i={title:"DECOMMISSION BACKEND",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to safely decommission a BE node from the cluster. This operation is asynchronous."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER SYSTEM DECOMMISSION BACKEND "<be_identifier>" [, "<be_identifier>" ... ]\n'})}),"\n",(0,a.jsx)(t.p,{children:"Where:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'be_identifier\n  : "<be_host>:<be_heartbeat_port>"\n  | "<backend_id>"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. <be_host>"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"It can be the hostname or IP address of the BE node."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. <heartbeat_port>"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The heartbeat port of the BE node, the default is 9050."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. <backend_id>"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The ID of the BE node."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"<be_host>"}),", ",(0,a.jsx)(t.code,{children:"<be_heartbeat_port>"}),", and ",(0,a.jsx)(t.code,{children:"<backend_id>"})," can all be obtained by querying with the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"})," statement."]})}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Privilege"}),(0,a.jsx)(t.th,{children:"Object"}),(0,a.jsx)(t.th,{children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"NODE_PRIV"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["After executing this command, you can use the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"})," statement to view the decommissioning status (the value of the ",(0,a.jsx)(t.code,{children:"SystemDecommissioned"})," column is ",(0,a.jsx)(t.code,{children:"true"}),") and the decommissioning progress (the value of the ",(0,a.jsx)(t.code,{children:"TabletNum"})," column will slowly drop to 0)."]}),"\n",(0,a.jsxs)(t.li,{children:["Under normal circumstances, after the value of the ",(0,a.jsx)(t.code,{children:"TabletNum"})," column drops to 0, this BE node will be deleted. If you do not want Doris to automatically delete the BE, you can change the configuration ",(0,a.jsx)(t.code,{children:"drop_backend_after_decommission"})," of the FE Master to false."]}),"\n",(0,a.jsx)(t.li,{children:"If the current BE stores a relatively large amount of data, the DECOMMISSION operation may last for several hours or even days."}),"\n",(0,a.jsxs)(t.li,{children:["If the progress of the DECOMMISSION operation gets stuck, specifically, the ",(0,a.jsx)(t.code,{children:"TabletNum"})," column in the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"})," statement remains fixed at a certain value, it may be due to the following situations:\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"There is no suitable other BE to migrate the tablets on the current BE. For example, in a 3-node cluster with a table having 3 replicas, if one of the nodes is to be decommissioned, this node cannot find other BEs to migrate the data (the other two BEs already have one replica each)."}),"\n",(0,a.jsxs)(t.li,{children:["The tablets on the current BE are still in the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN",children:"Recycle Bin"}),". You can ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN",children:"empty the recycle bin"})," and then wait for decommission."]}),"\n",(0,a.jsxs)(t.li,{children:["The tablet on the current BE is too large, causing the migration of a single tablet to always timeout and unable to migrate this tablet away. You can adjust the configuration ",(0,a.jsx)(t.code,{children:"max_clone_task_timeout_sec"})," of the FE Master to a larger value (the default is 7200 seconds)."]}),"\n",(0,a.jsx)(t.li,{children:"There are unfinished transactions on the tablets of the current BE. You can wait for the transactions to complete or manually abort the transactions."}),"\n",(0,a.jsxs)(t.li,{children:["In other cases, you can filter the keyword ",(0,a.jsx)(t.code,{children:"replicas to decommission"})," in the logs of the FE Master to find the abnormal tablet, use the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET",children:"SHOW TABLET"})," statement to find the table to which this tablet belongs, then create a new table, migrate the data from the old table to the new table, and finally use the ",(0,a.jsx)(t.a,{href:"/docs/dev/sql-manual/sql-statements/table-and-view/table/DROP-TABLE",children:"DROP TABLE FORCE"})," to delete the old table."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Safely decommission two nodes from the cluster according to the Host and HeartbeatPort of the BE."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER SYSTEM DECOMMISSION BACKEND "192.168.0.1:9050", "192.168.0.2:9050";\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Safely decommission a node from the cluster according to the ID of the BE."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER SYSTEM DECOMMISSION BACKEND "10002";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);