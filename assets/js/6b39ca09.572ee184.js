"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["170567"],{450225:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"ecosystem/doris-operator/doris-operator-overview","title":"Doris Kubernetes Operator","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/ecosystem/doris-operator/doris-operator-overview.md","sourceDirName":"ecosystem/doris-operator","slug":"/ecosystem/doris-operator/doris-operator-overview","permalink":"/docs/3.0/ecosystem/doris-operator/doris-operator-overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Doris Kubernetes Operator","language":"en"},"sidebar":"docs","previous":{"title":"Doris Kafka Connector","permalink":"/docs/3.0/ecosystem/doris-kafka-connector"},"next":{"title":"Recommendations on Alibaba Cloud","permalink":"/docs/3.0/ecosystem/doris-operator/on-alibaba"}}'),o=r("785893"),i=r("250065");let s={title:"Doris Kubernetes Operator",language:"en"},a=void 0,l={},c=[{value:"Doris Operator Architecture",id:"doris-operator-architecture",level:2},{value:"Key capabilities",id:"key-capabilities",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Cloud vendor compatibility",id:"cloud-vendor-compatibility",level:3},{value:"Installation and management",id:"installation-and-management",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy Doris Operator",id:"deploy-doris-operator",level:3},{value:"Deploy Doris cluster",id:"deploy-doris-cluster",level:3},{value:"Cluster operation and maintenance",id:"cluster-operation-and-maintenance",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/apache/doris-operator",children:"Kubernetes Operator"})," (referred to as Doris Operator) was born to meet the user's demand for efficient deployment and operation of Doris on the Kubernetes platform.\nIt integrates the complex management capabilities of native Kubernetes resources, and integrates the distributed collaboration between Doris components, on-demand customization of user cluster forms, and other experiences, providing users with a more concise, efficient and easy-to-use containerized deployment solution.\nIt aims to achieve efficient management and control of Doris on Kubernetes, helping users reduce operation and maintenance management and learning costs while providing powerful functions and flexible configuration capabilities."]}),"\n",(0,o.jsx)(t.p,{children:"Doris Operator implements the configuration, management and scheduling of Doris on the Kubernetes platform based on Kubernetes CustomResourceDefinitions (CRD). Doris Operator can automatically create Pods and other resources to start services according to the user-defined desired state. Through the automatic registration mechanism, all started services can be integrated into a complete Doris cluster. This implementation significantly reduces the complexity and learning cost of processing configuration information, node discovery and registration, access communication and health checks in the Doris cluster, which are essential operations in the production environment."}),"\n",(0,o.jsx)(t.h2,{id:"doris-operator-architecture",children:"Doris Operator Architecture"}),"\n",(0,o.jsx)(t.p,{children:"The design of Doris Operator is based on the principle of a two-layer scheduler. The first-layer scheduling of each component uses native StatefulSet and Service resources to directly manage the corresponding Pod service, which makes it fully compatible with open source Kubernetes clusters, including public clouds, private clouds, and self-built Kubernetes platforms."}),"\n",(0,o.jsx)(t.p,{children:"Based on the deployment definition provided by Doris Operator, users can customize the Doris deployment state and send it to the Kubernetes cluster through the kubectl management command of Kubernetes. Doris Operator converts the deployment of each service into StatefulSet and its affiliated resources (such as Service) according to the customized state, and then schedules the desired Pods through StatefulSet. It simplifies unnecessary configuration in the StatefulSet specification by abstracting the final state of the Doris cluster, thereby reducing the user's learning cost."}),"\n",(0,o.jsx)(t.h2,{id:"key-capabilities",children:"Key capabilities"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Final state deployment"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"Kubernetes uses the final state operation and maintenance mode to manage services, and Doris Operator defines a resource type that can describe the Doris cluster - DorisCluster. Users can refer to relevant documents and usage examples to easily configure the required cluster.\nUsers can send the configuration to the Kubernetes cluster through the Kubernetes command line tool kubectl. Doris Operator automatically builds the required cluster and updates the cluster status to the corresponding resources in real time. This process ensures efficient management and monitoring of the cluster and greatly simplifies operation and maintenance operations."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Easy to expand"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"Doris Operator supports concurrent real-time horizontal expansion in a cloud disk-based environment. All component services of Doris are deployed and managed through Kubernetes' StatefulSet. When deploying or expanding, Pods are created using StatefulSet's Parallel mode, so that in theory all replicas can be started within the time it takes to start a node. The startup of each replica does not interfere with each other, and when a service fails to start, the startup of other services will not be affected.\nDoris Operator uses concurrent mode to start services and has a built-in distributed architecture, which greatly simplifies the process of service expansion. Users only need to set the number of replicas to easily complete the expansion, completely freeing up the complexity of operation and maintenance operations."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Unnoticeable changes"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"In a distributed environment, service restarts may cause temporary instability of services. Especially for services such as databases that have extremely high requirements for stability, how to ensure the stability of services during the restart process is a very important topic. Doris uses the following three mechanisms on Kubernetes to ensure the stability of the service restart process, thereby achieving an imperceptible experience for the business during the restart and upgrade process."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Graceful exit"}),"\n",(0,o.jsx)(t.li,{children:"Rolling restart"}),"\n",(0,o.jsx)(t.li,{children:"Actively stop query allocation"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Host system configuration"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"In some scenarios, it is necessary to configure the host system parameters to achieve the ideal performance of Apache Doris. In the containerized scenario, the uncertainty of host deployment and the difficulty of parameter modification bring challenges to users. To solve this problem, Doris Operator uses Kubernetes's initialization container to make the host parameters configurable.\nDoris Operator allows users to configure commands executed on the host and make them effective by initializing containers. To improve availability, Doris Operator abstracts the configuration method of Kubernetes initialization containers, making the setting of host commands simpler and more intuitive."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Persistent configuration"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"Doris Operator uses the Kubernetes StorageClass mode to provide storage configuration for each service. It allows users to customize the mount directory. When customizing the startup configuration, if the storage directory is modified, the directory can be set as a persistent location in the custom resource, so that the service uses the specified directory in the container to store data."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Runtime debugging"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:["One of the biggest challenges for Trouble Shooting with containerized services is how to debug at runtime. While pursuing availability and ease of use, Doris Operator also provides more convenient conditions for problem location. In the basic image of Doris, a variety of tools for problem location are pre-set. When you need to view the status in real time, you can enter the container through the exec command provided by kubectl and use the built-in tools for troubleshooting.\nWhen the service cannot be started for unknown reasons, Doris Operator provides a Debug running mode. When a Pod is set to Debug startup mode, the container will automatically enter the running state. At this time, you can enter the container through the ",(0,o.jsx)(t.code,{children:"exec"})," command, manually start the service and locate the problem. For details, please refer to ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/compute-storage-coupled/cluster-operation.md#How-to-enter-the-container-when-the-pod-crashes",children:"this document"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,o.jsx)(t.p,{children:"Doris Operator is developed in accordance with standard K8s specifications and is compatible with all standard K8s platforms, including those provided by mainstream cloud vendors, self-built K8s platforms based on standards, and user-built platforms."}),"\n",(0,o.jsx)(t.h3,{id:"cloud-vendor-compatibility",children:"Cloud vendor compatibility"}),"\n",(0,o.jsx)(t.p,{children:"Fully compatible with the containerized service platforms of mainstream cloud vendors. For environment preparation and usage suggestions for Doris Operator, please refer to the following documents:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"./on-alibaba",children:"Alibaba Cloud"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"./on-aws",children:"AWS"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"installation-and-management",children:"Installation and management"}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["Before deployment, you need to check the host system. Refer to ",(0,o.jsx)(t.a,{href:"/docs/3.0/install/preparation/os-checking",children:"Operating System Check"})]}),"\n",(0,o.jsx)(t.h3,{id:"deploy-doris-operator",children:"Deploy Doris Operator"}),"\n",(0,o.jsx)(t.p,{children:"Before deploying Doris Operator on Kubernetes, you need to install Doris Operator CRD."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["For detailed installation documents, please refer to: ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/integrated-storage-compute/install-doris-operator",children:"Doris Operator Installation"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"deploy-doris-cluster",children:"Deploy Doris cluster"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["For cluster configuration documents, please refer to: ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/integrated-storage-compute/install-config-cluster",children:"Doris Operator Cluster Configuration"})]}),"\n",(0,o.jsxs)(t.li,{children:["For installation documents, please refer to: ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/integrated-storage-compute/install-doris-cluster",children:"Doris Cluster Installation"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"cluster-operation-and-maintenance",children:"Cluster operation and maintenance"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["For cluster operation and maintenance documents, please refer to: ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/integrated-storage-compute/cluster-operation",children:"Doris Operator Cluster Operation"})]}),"\n",(0,o.jsxs)(t.li,{children:["For cluster access documents, please refer to: ",(0,o.jsx)(t.a,{href:"../../install/deploy-on-kubernetes/integrated-storage-compute/access-cluster",children:"Doris Operator Cluster Access"})]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);