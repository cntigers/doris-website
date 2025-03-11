"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["620318"],{200789:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>r,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"lakehouse/compute-node","title":"Elastic Compute Node","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/compute-node.md","sourceDirName":"lakehouse","slug":"/lakehouse/compute-node","permalink":"/docs/lakehouse/compute-node","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Elastic Compute Node","language":"en"},"sidebar":"docs","previous":{"title":"Metadata Cache","permalink":"/docs/lakehouse/metacache"},"next":{"title":"External Table Statistics","permalink":"/docs/lakehouse/external-statistics"}}'),s=t("785893"),i=t("250065");let a={title:"Elastic Compute Node",language:"en"},d=void 0,r={},l=[{value:"Using Compute Nodes",id:"using-compute-nodes",level:2},{value:"Adding Compute Nodes",id:"adding-compute-nodes",level:3},{value:"Using Compute Nodes",id:"using-compute-nodes-1",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Load Isolation and Elastic Scaling for Federated Queries",id:"load-isolation-and-elastic-scaling-for-federated-queries",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Since version 1.2.1, Doris has supported the Compute Node feature."}),"\n",(0,s.jsx)(n.p,{children:"Starting from this version, BE nodes can be divided into two categories:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mix"}),"\n",(0,s.jsx)(n.p,{children:"A mixed node, which is the default type of BE node. This type of node can both participate in computation and be responsible for storing Doris data."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Computation"}),"\n",(0,s.jsx)(n.p,{children:"A computation node that is not responsible for data storage, only for data computation."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As a special type of BE node, the computation node does not have data storage capabilities and is only responsible for data computation. Therefore, the computation node can be seen as a stateless BE node, making it easy to add and remove nodes."}),"\n",(0,s.jsx)(n.p,{children:"In the Lakehouse solution, the computation node can serve as an elastic node for querying external data sources such as Hive, Iceberg, JDBC, etc. Doris does not store data from external data sources, so the computation node can easily expand the computational capabilities for external data sources. Additionally, the computation node can be configured with a cache directory to cache hot data from external data sources, further accelerating data retrieval."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"The computation node is suitable for the integrated storage and computation deployment mode in Doris, providing elastic resource control. In the storage-computation separation architecture of Doris 3.0, all BE nodes are stateless, eliminating the need for separate computation nodes."})}),"\n",(0,s.jsx)(n.h2,{id:"using-compute-nodes",children:"Using Compute Nodes"}),"\n",(0,s.jsx)(n.h3,{id:"adding-compute-nodes",children:"Adding Compute Nodes"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following configuration to the ",(0,s.jsx)(n.code,{children:"be.conf"})," file of the BE:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"be_node_role=computation"})}),"\n",(0,s.jsx)(n.p,{children:"After that, start the BE node, and it will run as a computation node type."}),"\n",(0,s.jsx)(n.p,{children:"You can then connect to Doris using a MySQL client and execute:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ALTER SYSTEM ADD BACKEND"})}),"\n",(0,s.jsxs)(n.p,{children:["This will add the BE node. After successful addition, in the ",(0,s.jsx)(n.code,{children:"NodeRole"})," column of ",(0,s.jsx)(n.code,{children:"SHOW BACKENDS"}),", you can see the node type as ",(0,s.jsx)(n.code,{children:"computation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-compute-nodes-1",children:"Using Compute Nodes"}),"\n",(0,s.jsx)(n.p,{children:"To use compute nodes, the following conditions must be met:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The cluster contains compute nodes."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"fe.conf"})," file has the configuration item: ",(0,s.jsx)(n.code,{children:"prefer_compute_node_for_external_table = true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, the following FE configuration items will affect the usage strategy of compute nodes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"min_backend_num_for_external_table"})}),"\n",(0,s.jsx)(n.p,{children:"Before Doris 2.0 (inclusive), the default value of this parameter was 3. After version 2.1, the default parameter is -1."}),"\n",(0,s.jsxs)(n.p,{children:["This parameter indicates the minimum number of BE nodes expected to participate in external table data queries. ",(0,s.jsx)(n.code,{children:"-1"})," indicates that this value is equivalent to the current number of compute nodes in the cluster."]}),"\n",(0,s.jsx)(n.p,{children:"For example, suppose there are 3 compute nodes and 5 mixed nodes in the cluster."}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"min_backend_num_for_external_table"})," is set to less than or equal to 3, external table queries will only use 3 compute nodes. If set to greater than 3, for example, 6, external table queries will use 3 compute nodes and additionally select 3 mixed nodes for computation."]}),"\n",(0,s.jsx)(n.p,{children:"In summary, this parameter is mainly used for the minimum number of BE nodes that can participate in external table calculations, and it will prioritize selecting compute nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After version 2.1, ",(0,s.jsx)(n.code,{children:"min_backend_num_for_external_table"})," can be set to ",(0,s.jsx)(n.code,{children:"-1"}),". In previous versions, this parameter must be a positive number. And this parameter only takes effect when ",(0,s.jsx)(n.code,{children:"prefer_compute_node_for_external_table = true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"prefer_compute_node_for_external_table"})," is ",(0,s.jsx)(n.code,{children:"false"}),", external table queries will select any BE node."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If there are no compute nodes in the cluster, the above parameters will not take effect."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the value of ",(0,s.jsx)(n.code,{children:"min_backend_num_for_external_table"})," is greater than the total number of BE nodes, at most all BE nodes will be selected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The above parameters can be dynamically modified using the ",(0,s.jsx)(n.code,{children:"ADMIN SET FRONTEND CONFIG"})," command without the need to restart FE nodes. All FE nodes need to be configured. Alternatively, add the configuration in ",(0,s.jsx)(n.code,{children:"fe.conf"})," and restart the FE nodes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"load-isolation-and-elastic-scaling-for-federated-queries",children:"Load Isolation and Elastic Scaling for Federated Queries"}),"\n",(0,s.jsx)(n.p,{children:"In federated query scenarios, users can deploy a dedicated set of compute nodes for querying external table data. This can isolate the query load of external tables (such as large-scale analysis on Hive) from the query load of internal tables (such as low-latency fast data analysis)."}),"\n",(0,s.jsx)(n.p,{children:"At the same time, compute nodes, as stateless BE nodes, can easily scale up and down. For example, you can deploy a cluster of elastic compute nodes using k8s, utilize more compute nodes for data lake analysis during business peak hours, and quickly scale down during off-peak hours to reduce costs."}),"\n",(0,s.jsx)(n.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Can mixed nodes and compute nodes be converted to each other"}),"\n",(0,s.jsx)(n.p,{children:"Compute nodes can be converted to mixed nodes. However, mixed nodes cannot be converted to compute nodes."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Convert compute nodes to mixed nodes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Stop the BE nodes."}),"\n",(0,s.jsxs)(n.li,{children:["Remove the ",(0,s.jsx)(n.code,{children:"be_node_role"})," configuration in ",(0,s.jsx)(n.code,{children:"be.conf"})," or configure it as ",(0,s.jsx)(n.code,{children:"be_node_role=mix"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Configure the correct ",(0,s.jsx)(n.code,{children:"storage_root_path"})," data storage directory."]}),"\n",(0,s.jsx)(n.li,{children:"Start the BE nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Convert mixed nodes to compute nodes"}),"\n",(0,s.jsx)(n.p,{children:"In principle, this operation is not supported because mixed nodes themselves store data. If conversion is needed, first perform node safe decommissioning, then set it as a compute node in the manner of a new node."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do compute nodes need to configure a data storage directory"}),"\n",(0,s.jsxs)(n.p,{children:["Yes. The data storage directory of compute nodes will not store user data, only some BE node's own information files like ",(0,s.jsx)(n.code,{children:"cluster_id"}),", and some temporary files during operation."]}),"\n",(0,s.jsx)(n.p,{children:"The storage directory of compute nodes only requires a small amount of disk space (in the MB range) and can be destroyed with the node at any time without affecting user data."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Can compute nodes and mixed nodes configure a file cache directory"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../lakehouse/filecache",children:"File cache"})," caches data files from remote storage systems (HDFS or object storage) that have been recently accessed, speeding up subsequent queries for the same data."]}),"\n",(0,s.jsx)(n.p,{children:"Both compute nodes and mixed nodes can set a file cache directory. The file cache directory needs to be created in advance."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, Doris also employs strategies like consistent hashing to minimize the probability of cache invalidation during node scaling operations."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do compute nodes need to be taken offline through DECOMMISION operation"}),"\n",(0,s.jsxs)(n.p,{children:["No. Compute nodes can be directly removed using the ",(0,s.jsx)(n.code,{children:"DROP BACKEND"})," operation."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var o=t(667294);let s={},i=o.createContext(s);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);