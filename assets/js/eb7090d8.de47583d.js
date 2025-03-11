"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["811352"],{560027:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"install/deploy-on-kubernetes/separating-storage-compute/config-ms","title":"Config Metaservice","description":"\x3c!--","source":"@site/docs/install/deploy-on-kubernetes/separating-storage-compute/config-ms.md","sourceDirName":"install/deploy-on-kubernetes/separating-storage-compute","slug":"/install/deploy-on-kubernetes/separating-storage-compute/config-ms","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/config-ms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Config Metaservice","language":"en"},"sidebar":"docs","previous":{"title":"Install FoundationDB","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/install-fdb"},"next":{"title":"Config FE","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/config-fe"}}'),s=i("785893"),t=i("250065");let a={title:"Config Metaservice",language:"en"},r=void 0,c={},l=[{value:"Simplest configuration",id:"simplest-configuration",level:2},{value:"Configure resources",id:"configure-resources",level:2},{value:"Configure FDB",id:"configure-fdb",level:2},{value:"Customized configuration file",id:"customized-configuration-file",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["MS is the abbreviation of MetaService, the storage and computing separation component of Doris, which provides metadata management and query services. The configuration field in ",(0,s.jsx)(n.code,{children:"DorisDisaggregatedClulster"})," is metaService."]}),"\n",(0,s.jsx)(n.h2,{id:"simplest-configuration",children:"Simplest configuration"}),"\n",(0,s.jsx)(n.p,{children:"MS service is a stateless service and is usually deployed in active-standby mode. The simplest configuration is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"spec:\n  metaService:\n    image: {msImage}\n    fdb:\n      configMapNamespaceName:\n        name: {foundationdbConfigmap}\n        namespace: {namespace}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Among them, ",(0,s.jsx)(n.code,{children:"{msImage}"})," is the version of the MS service you want to deploy.\n",(0,s.jsx)(n.code,{children:"{foundationdbConfigmap}"})," is the access configmap provided by the FDB service deployed by K8s.\n",(0,s.jsx)(n.code,{children:"{namespace}"})," \u4E3A is the Namespace where the FDB service deployed in K8s is located."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-resources",children:"Configure resources"}),"\n",(0,s.jsx)(n.p,{children:"Add resource usage restrictions for the MS service. Take the 4c 4Gi configuration as an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"spec:\n  metaService:\n    image: {msImage}\n    replicas: 2\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Update the modified configuration to the ",(0,s.jsx)(n.a,{href:"install-quickstart.md#step-2-quickly-deploy-a-storage-and-computing-separation-cluster",children:"metadata management resources for storage and computing separation that need to be deployed"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-fdb",children:"Configure FDB"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use ConfigMap"}),"\n",(0,s.jsx)(n.p,{children:"The FDB cluster is built on the same K8s cluster and can obtain its namespace and configmap. Use the following configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"spec:\nmetaService:\n  image: {msImage}\n  fdb:\n    configMapNamespaceName:\n      name: {foundationdbConfigmap}\n      namespace: {namespace}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Directly Endpoint"}),"\n",(0,s.jsx)(n.p,{children:"The FDB is deployed on a physical machine, Please configure the FDB endpoint (FDB access string) for the metaService. The configuration is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"spec:\n  metaService:\n    image: {msImage}\n    fdb:\n      address: {fdb_endpoint}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customized-configuration-file",children:"Customized configuration file"}),"\n",(0,s.jsx)(n.p,{children:"ConfigMap is used to mount the configuration file on K8s. Doris-Operator automates add the configuration of mutual perception between storage and computing separation components. When deploying MS services using customized configuration files, please do not configure FDB related configuration."}),"\n",(0,s.jsx)(n.p,{children:"Use ConfigMap to mount the configuration file to deploy MS services:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ConfigMap"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\ndata:\n  doris_cloud.conf: |\n    # // meta_service\n    brpc_listen_port = 5000\n    brpc_num_threads = -1\n    brpc_idle_timeout_sec = 30\n    http_token = greedisgood9999\n\n    # // doris txn config\n    label_keep_max_second = 259200\n    expired_txn_scan_key_nums = 1000\n\n    # // logging\n    log_dir = ./log/\n    # info warn error\n    log_level = info\n    log_size_mb = 1024\n    log_filenum_quota = 10\n    log_immediate_flush = false\n    # log_verbose_modules = *\n\n    # //max stage num\n    max_num_stages = 40\nkind: ConfigMap\nmetadata:\n  name: doris-metaservice\n  namespace: default\n"})}),"\n",(0,s.jsx)(n.p,{children:"The MS configuration using the above ConfigMap is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"spec:\n  metaService:\n    image: {msImage}\n    configMaps:\n      - name: doris-metaservice\n        mountPath: /etc/doris\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In actual deployment, configure the name and namespace of ConfigMap as needed, and configure the configuration information in the ",(0,s.jsx)(n.a,{href:"install-quickstart#step-2-quickly-deploy-a-storage-and-computing-separation-cluster",children:"storage-and-computing-separation metadata management resource"})," to be deployed according to the above sample format. The startup configuration file used by the MS service is named ",(0,s.jsx)(n.code,{children:"doris_cloud.conf"}),", so the key of the ConfigMap for mounting the startup configuration must also be ",(0,s.jsx)(n.code,{children:"doris_cloud.conf"}),". The startup configuration must be mounted to the ",(0,s.jsx)(n.code,{children:"/etc/doris"})," directory, that is, the mountPath is ",(0,s.jsx)(n.code,{children:"/etc/doris"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,s.jsx)(n.p,{children:"MS services need to use FDB as the backend metadata storage. FDB services must be deployed when deploying MS services."})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var o=i(667294);let s={},t=o.createContext(s);function a(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);