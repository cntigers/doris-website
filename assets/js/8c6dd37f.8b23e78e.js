"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["565851"],{53442:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"install/preparation/cluster-planning","title":"Cluster Planning","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/install/preparation/cluster-planning.md","sourceDirName":"install/preparation","slug":"/install/preparation/cluster-planning","permalink":"/docs/install/preparation/cluster-planning","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Cluster Planning","language":"en"},"sidebar":"docs","previous":{"title":"Environment Checking","permalink":"/docs/install/preparation/env-checking"},"next":{"title":"OS Checking","permalink":"/docs/install/preparation/os-checking"}}'),i=t("785893"),o=t("250065");let s={title:"Cluster Planning",language:"en"},d=void 0,l={},a=[{value:"Port Planning",id:"port-planning",level:2},{value:"Node Count Planning",id:"node-count-planning",level:2},{value:"FE Node Count",id:"fe-node-count",level:3},{value:"BE Node Count",id:"be-node-count",level:3}];function c(n){let e={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"port-planning",children:"Port Planning"}),"\n",(0,i.jsx)(e.p,{children:"Doris instances communicate over the network, and their proper functioning requires the following ports to be available. Administrators can adjust Doris' port configuration based on the actual environment:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Instance Name"}),(0,i.jsx)(e.th,{children:"Port Name"}),(0,i.jsx)(e.th,{children:"Default Port"}),(0,i.jsx)(e.th,{children:"Communication Direction"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BE"}),(0,i.jsx)(e.td,{children:"be_port"}),(0,i.jsx)(e.td,{children:"9060"}),(0,i.jsx)(e.td,{children:"FE -> BE"}),(0,i.jsx)(e.td,{children:"Thrift Server port on BE, used to receive requests from FE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BE"}),(0,i.jsx)(e.td,{children:"webserver_port"}),(0,i.jsx)(e.td,{children:"8040"}),(0,i.jsx)(e.td,{children:"BE <-> BE"}),(0,i.jsx)(e.td,{children:"HTTP Server port on BE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BE"}),(0,i.jsx)(e.td,{children:"heartbeat_service_port"}),(0,i.jsx)(e.td,{children:"9050"}),(0,i.jsx)(e.td,{children:"FE -> BE"}),(0,i.jsx)(e.td,{children:"Heartbeat service port (Thrift) on BE, used to receive heartbeats from FE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BE"}),(0,i.jsx)(e.td,{children:"brpc_port"}),(0,i.jsx)(e.td,{children:"8060"}),(0,i.jsx)(e.td,{children:"FE <-> BE, BE <-> BE"}),(0,i.jsx)(e.td,{children:"BRPC port on BE, used for communication between BEs"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FE"}),(0,i.jsx)(e.td,{children:"http_port"}),(0,i.jsx)(e.td,{children:"8030"}),(0,i.jsx)(e.td,{children:"FE <-> FE, Client <-> FE"}),(0,i.jsx)(e.td,{children:"HTTP Server port on FE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FE"}),(0,i.jsx)(e.td,{children:"rpc_port"}),(0,i.jsx)(e.td,{children:"9020"}),(0,i.jsx)(e.td,{children:"BE -> FE, FE <-> FE"}),(0,i.jsx)(e.td,{children:"Thrift Server port on FE, each FE should have the same configuration"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FE"}),(0,i.jsx)(e.td,{children:"query_port"}),(0,i.jsx)(e.td,{children:"9030"}),(0,i.jsx)(e.td,{children:"Client <-> FE"}),(0,i.jsx)(e.td,{children:"MySQL Server port on FE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FE"}),(0,i.jsx)(e.td,{children:"edit_log_port"}),(0,i.jsx)(e.td,{children:"9010"}),(0,i.jsx)(e.td,{children:"FE <-> FE"}),(0,i.jsx)(e.td,{children:"bdbje communication port on FE"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"node-count-planning",children:"Node Count Planning"}),"\n",(0,i.jsx)(e.h3,{id:"fe-node-count",children:"FE Node Count"}),"\n",(0,i.jsx)(e.p,{children:"FE nodes are primarily responsible for user request handling, query parsing and planning, metadata management, and node management."}),"\n",(0,i.jsx)(e.p,{children:"For production clusters, it is generally recommended to deploy at least 3 FE nodes to achieve a high-availability environment. FE nodes are divided into the following two roles:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Follower nodes"}),": Participate in election operations. When the Master node fails, a Follower node will be selected as the new Master."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Observer nodes"}),": Only sync metadata from the Leader node and do not participate in the election. These nodes can be used for horizontal scaling to improve the read service capacity of metadata."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"In general, it is recommended to deploy at least 3 Follower nodes. In high-concurrency scenarios, increasing the number of Observer nodes can help improve the cluster's connection capacity."}),"\n",(0,i.jsx)(e.h3,{id:"be-node-count",children:"BE Node Count"}),"\n",(0,i.jsx)(e.p,{children:"BE nodes are responsible for data storage and computation. In production environments, to ensure data reliability and fault tolerance, 3 copies of data are usually stored. Therefore, it is recommended to deploy at least 3 BE nodes."}),"\n",(0,i.jsx)(e.p,{children:"BE nodes support horizontal scaling, and by increasing the number of BE nodes, the query performance and concurrent processing capabilities of the cluster can be effectively improved."})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);