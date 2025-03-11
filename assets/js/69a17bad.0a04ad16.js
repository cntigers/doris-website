"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["775834"],{754507:function(e,s,t){t.r(s),t.d(s,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>i});var n=JSON.parse('{"id":"install/deploy-on-kubernetes/separating-storage-compute/config-cg","title":"Config ComputeGroups","description":"\x3c!--","source":"@site/docs/install/deploy-on-kubernetes/separating-storage-compute/config-cg.md","sourceDirName":"install/deploy-on-kubernetes/separating-storage-compute","slug":"/install/deploy-on-kubernetes/separating-storage-compute/config-cg","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/config-cg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Config ComputeGroups","language":"en"},"sidebar":"docs","previous":{"title":"Config FE","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/config-fe"},"next":{"title":"Deploy Doris Cluster","permalink":"/docs/dev/install/deploy-on-kubernetes/separating-storage-compute/install-doris-cluster"}}'),a=t("785893"),o=t("250065");let r={title:"Config ComputeGroups",language:"en"},i=void 0,c={},u=[{value:"Specify compute group name",id:"specify-compute-group-name",level:2},{value:"Configure multiple compute groups",id:"configure-multiple-compute-groups",level:2},{value:"Configure compute resources",id:"configure-compute-resources",level:2},{value:"Configure Cache persistent",id:"configure-cache-persistent",level:2}];function l(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"In a storage-computation separation cluster, the compute group (Compute Group) is responsible for data import and caching data from object storage to improve query efficiency. Compute groups are isolated from one another."}),"\n",(0,a.jsx)(s.h2,{id:"specify-compute-group-name",children:"Specify compute group name"}),"\n",(0,a.jsx)(s.p,{children:"Each compute group must have a unique identifier, which cannot be changed once set. This unique identifier is used as the compute group name and is registered as a node attribute in the storage-computation separation cluster. Below is an example of a compute group configuration named cg1, with 1 replica:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n    - uniqueId: cg1\n      image: ${beImage}\n      replicas: 1\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Here, ",(0,a.jsx)(s.code,{children:"${beImage}"})," refers to the image address for deploying the BE service."]}),"\n",(0,a.jsx)(s.h2,{id:"configure-multiple-compute-groups",children:"Configure multiple compute groups"}),"\n",(0,a.jsxs)(s.p,{children:["A ",(0,a.jsx)(s.code,{children:"DorisDisaggregatedCluster"})," resource supports the deployment of multiple compute groups, with each group being independent of the others. Below is an example showing how to deploy two compute groups, ",(0,a.jsx)(s.code,{children:"cg1"})," and ",(0,a.jsx)(s.code,{children:"cg2"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n  - uniqueId: cg1\n    image: ${beImage}\n    replicas: 3\n  - uniqueId: cg2\n    image: ${beImage}\n    replicas: 2\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In this configuration, the compute group ",(0,a.jsx)(s.code,{children:"cg1"})," has 3 replicas, and ",(0,a.jsx)(s.code,{children:"cg2"})," has 2 replicas. ${beImage} represents the image address used for deploying the BE service."]}),"\n",(0,a.jsx)(s.p,{children:"It is recommended to use the same image across all compute groups."}),"\n",(0,a.jsx)(s.h2,{id:"configure-compute-resources",children:"Configure compute resources"}),"\n",(0,a.jsxs)(s.p,{children:["In the default storage-computation separation deployment, no specific limits are set for the compute resources (CPU and memory) used by each BE service. The DorisDisaggregatedCluster resource uses Kubernetes' ",(0,a.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits",children:"resources.requests and resources.limits"})," to specify CPU and memory usage. Below is an example of configuring each BE in the cg1 compute group to use 8 CPU cores and 8 Gi of memory:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n  - uniqueId: cg1\n    requests:\n      cpu: 8\n      memory: 8Gi\n    limits:\n      cpu: 8\n      memory: 8Gi\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Update the above configuration in the required ",(0,a.jsx)(s.a,{href:"install-quickstart.md#step-3-deploy-the-compute-storage-decoupled-cluster",children:"DorisDisaggregatedCluster resource"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"configure-cache-persistent",children:"Configure Cache persistent"}),"\n",(0,a.jsxs)(s.p,{children:["In the default deployment, BE services use Kubernetes' ",(0,a.jsx)(s.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#emptydir",children:"EmptyDir"})," as the cache storage. The EmptyDir mode is non-persistent, meaning that cached data will be lost after a service restart, leading to a drop in query efficiency. The steps to configure persistent storage for the cache are as follows:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Create a custom ConfigMap containing the startup information."}),"\n",(0,a.jsx)(s.p,{children:"In the default deployment, each compute group\u2019s BE service starts using the default configuration file from the image. To persist cache data, a custom startup configuration is needed. Doris Operator uses Kubernetes' ConfigMap to mount the startup configuration file."}),"\n",(0,a.jsx)(s.p,{children:"Below is an example of a ConfigMap that a BE service can use:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    # For JDK 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Xmx1024m -DlogPath=$LOG_DIR/jni.log -Xlog:gc*:$LOG_DIR/be.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.security.krb5.debug=true -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -XX:+IgnoreUnrecognizedVMOptions --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED --add-opens=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/sun.nio.cs=ALL-UNNAMED --add-opens=java.base/sun.security.action=ALL-UNNAMED --add-opens=java.base/sun.util.calendar=ALL-UNNAMED --add-opens=java.security.jgss/sun.security.krb5=ALL-UNNAMED --add-opens=java.management/sun.management=ALL-UNNAMED"\n    file_cache_path = [{"path":"/mnt/disk1/doris_cloud/file_cache","total_size":107374182400,"query_limit":107374182400}]\n'})}),"\n",(0,a.jsxs)(s.p,{children:["For decoupled compute-storage clusters, the BE service's startup configuration must include file_cache_path. For formatting details, refer to the ",(0,a.jsx)(s.a,{href:"../../../../compute-storage-decoupled/compilation-and-deployment.md#541-configure-beconf",children:"Decoupled Compute-Storage Configuration be.conf section"}),". In the example above, a persistent cache is configured at the directory ",(0,a.jsx)(s.code,{children:"/mnt/disk1/doris_cloud/file_cache"}),", with a total persistent capacity of 100Gi and a query cache limit of 100Gi."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Deploy the ConfigMap."}),"\n",(0,a.jsx)(s.p,{children:"To deploy the ConfigMap containing the custom startup configuration to the Kubernetes cluster, use the following command:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"kubectl -n ${namespace} -f ${beConfigMapFileName}.yaml \n"})}),"\n",(0,a.jsx)(s.p,{children:"Here, ${namespace} refers to the namespace where the DorisDisaggregatedCluster is deployed, and ${beConfigMapFileName} is the filename of the custom ConfigMap."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Configure the DorisDisaggregatedCluster Resource"}),"\n",(0,a.jsxs)(s.p,{children:["Persistent storage requires a storage template configuration. The DorisDisaggregatedCluster resource uses persistentVolume to describe the persistent storage template. The template is specified using Kubernetes' ",(0,a.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#PersistentVolumeClaimSpec",children:"PersistentVolumeClaimSpec"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Doris Operator will automatically parse the ",(0,a.jsx)(s.code,{children:"file_cache_path"})," in the startup configuration to identify the mount points, and use the template to automatically generate persistent storage. The annotations will be added into ",(0,a.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/",children:"PersistentVolumeClaim"}),". By default, Doris Operator creates persistent storage for logs, but this can be disabled by setting ",(0,a.jsx)(s.code,{children:"logNotStore: true"}),". Below is an example where a BE service uses a custom ConfigMap and specifies a storage template:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:'spec:\n  computeGroups:\n  - uniqueId: cg1\n    configMaps:\n    - name: be-configmap\n      mountPath: "/etc/doris"\n    persistentVolume:\n      annotations:\n        doris.computegroup/id: cg1\n        doris.deployment/mode: disaggregated\n      logNotStore: true\n      persistentVolumeClaimSpec:\n        #storageClassName: ${storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 500Gi\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Doris Operator will use the ",(0,a.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#default-storageclass",children:"default StorageClass"})," in the Kubernetes cluster to create persistent storage for the service. You can specify a custom StorageClass by setting the storageClassName field."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{title:"Tip",type:"tip",children:(0,a.jsx)(s.p,{children:'The startup configuration must be mounted to the "/etc/doris" directory.'})})]})}function p(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return r}});var n=t(667294);let a={},o=n.createContext(a);function r(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);