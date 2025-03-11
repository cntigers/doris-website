"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["80352"],{807548:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/network","title":"Access the Doris cluster","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/install/cluster-deployment/k8s-deploy/network.md","sourceDirName":"install/cluster-deployment/k8s-deploy","slug":"/install/cluster-deployment/k8s-deploy/network","permalink":"/docs/2.0/install/cluster-deployment/k8s-deploy/network","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Access the Doris cluster","language":"en"}}'),o=r("785893"),t=r("250065");let a={title:"Access the Doris cluster",language:"en"},i=void 0,c={},l=[{value:"Access within the Kubernetes cluster",id:"access-within-the-kubernetes-cluster",level:2},{value:"ClusterIP mode",id:"clusterip-mode",level:3},{value:"Access outside the Kubernetes cluster",id:"access-outside-the-kubernetes-cluster",level:2},{value:"LoadBalancer Mode",id:"loadbalancer-mode",level:3},{value:"NodePort Mode",id:"nodeport-mode",level:3},{value:"Doris data exchange",id:"doris-data-exchange",level:2},{value:"Stream load",id:"stream-load",level:3},{value:"ErrorURL",id:"errorurl",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Kubernetes, a Service is a resource that defines a set of pods and provides stable access to this set of pods, so it can be associated with a set of pods.\nDeploying a cluster through Doris-Operator will automatically generate corresponding Service resources according to the ",(0,o.jsx)(n.code,{children:"spec.*Spec.service"})," configuration. Currently, ClusterIP, LoadBalancer and NodePort modes are supported. Support users\u2019 access needs in different scenarios."]}),"\n",(0,o.jsx)(n.h2,{id:"access-within-the-kubernetes-cluster",children:"Access within the Kubernetes cluster"}),"\n",(0,o.jsx)(n.h3,{id:"clusterip-mode",children:"ClusterIP mode"}),"\n",(0,o.jsxs)(n.p,{children:["Doris provides ",(0,o.jsx)(n.code,{children:"ClusterIP"})," access within the kubernetes cluster by default on kubernetes. For FE and BE components, we provide corresponding Service resources for users to use on demand on kubernetes. Use the following command to view the Service of the corresponding component. The Service naming rule provided by Doris-Operator is ",(0,o.jsx)(n.code,{children:"{clusterName}-{fe/be}-service"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl -n {namespace} get service\n"})}),"\n",(0,o.jsx)(n.p,{children:"During use, please replace {namespace} with the namespace specified during deployment. Take our default sample deployed Doris cluster as an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n    app.kubernetes.io/instance: doriscluster-sample\n    app.kubernetes.io/part-of: doris-operator\n  name: doriscluster-sample\nspec:\n  feSpec:\n    replicas: 3\n    limits:\n      cpu: 6\n      memory: 12Gi\n    requests:\n      cpu: 6\n      memory: 12Gi\n    image: selectdb/doris.fe-ubuntu:2.0.2\n  beSpec:\n    replicas: 3\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    image: selectdb/doris.be-ubuntu:2.0.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We view ",(0,o.jsx)(n.code,{children:"kubectl get service"})," through the command as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service\nNAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                               AGE\ndoriscluster-sample-be-internal   ClusterIP   None             <none>        9050/TCP                              12h\ndoriscluster-sample-be-service    ClusterIP   172.20.217.234   <none>        9060/TCP,8040/TCP,9050/TCP,8060/TCP   12h\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>        9030/TCP                              12h\ndoriscluster-sample-fe-service    ClusterIP   172.20.183.136   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   12h\n"})}),"\n",(0,o.jsxs)(n.p,{children:["There are two types of services, FE and BE, displayed through the command. The service with the suffix ",(0,o.jsx)(n.code,{children:"internal"})," is the service used by Doris for internal communication and is not available externally. The suffix ",(0,o.jsx)(n.code,{children:"-service"})," is a Service for users to use.\nIn this example, the ",(0,o.jsx)(n.code,{children:"CLUSTER-IP"})," corresponding to ",(0,o.jsx)(n.code,{children:"doriscluster-sample-fe-service"})," and the corresponding ",(0,o.jsx)(n.code,{children:"PORT"})," can be used on the K8s cluster to access different port services of FE. Using ",(0,o.jsx)(n.code,{children:"doriscluster-sample-be-service"})," Service\nAnd the corresponding ",(0,o.jsx)(n.code,{children:"PORT"})," port to access BE's services."]}),"\n",(0,o.jsx)(n.h2,{id:"access-outside-the-kubernetes-cluster",children:"Access outside the Kubernetes cluster"}),"\n",(0,o.jsx)(n.h3,{id:"loadbalancer-mode",children:"LoadBalancer Mode"}),"\n",(0,o.jsxs)(n.p,{children:["If the cluster is created on a relevant cloud platform, it is recommended to use the ",(0,o.jsx)(n.code,{children:"LoadBalancer"})," mode to access the FE and BE services within the cluster. The ",(0,o.jsx)(n.code,{children:"ClusterIP"})," mode is used by default. If you want to use the ",(0,o.jsx)(n.code,{children:"LoadBalancer"})," mode, please configure the following configuration in the spec of each component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"service:\n  type: LoadBalancer\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Taking the default configuration as a modification blueprint for example, we use ",(0,o.jsx)(n.code,{children:"LoadBalancer"})," as the access mode of FE and BE on the cloud platform. The deployment configuration is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n    app.kubernetes.io/instance: doriscluster-sample\n    app.kubernetes.io/part-of: doris-operator\n  name: doriscluster-sample\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: LoadBalancer\n    limits:\n      cpu: 6\n      memory: 12Gi\n    requests:\n      cpu: 6\n      memory: 12Gi\n    image: selectdb/doris.fe-ubuntu:2.0.2\n  beSpec:\n    replicas: 3\n    service:\n      type: LoadBalancer\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    image: selectdb/doris.be-ubuntu:2.0.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By viewing the ",(0,o.jsx)(n.code,{children:"kubectl get service"})," command, view the corresponding Service display as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service\nNAME                              TYPE           CLUSTER-IP       EXTERNAL-IP                                                               PORT(S)                                                       AGE\ndoriscluster-sample-be-internal   ClusterIP      None             <none>                                                                    9050/TCP                                                      14h\ndoriscluster-sample-be-service    LoadBalancer   172.20.217.234   a46bbcd6998c7436bab8ee8fba9f5e81-808549982.us-east-1.elb.amazonaws.com    9060:32060/TCP,8040:30615/TCP,9050:31742/TCP,8060:31127/TCP   14h\ndoriscluster-sample-fe-internal   ClusterIP      None             <none>                                                                    9030/TCP                                                      14h\ndoriscluster-sample-fe-service    LoadBalancer   172.20.183.136   ac48284932b044251bfac389b453118f-1412731848.us-east-1.elb.amazonaws.com   8030:32213/TCP,9020:31080/TCP,9030:31433/TCP,9010:30585/TCP   14h\n"})}),"\n",(0,o.jsxs)(n.p,{children:["External ports corresponding to ",(0,o.jsx)(n.code,{children:"EXTERNAL-IP"})," and ",(0,o.jsx)(n.code,{children:"PORT"})," can be used outside K8s to access the services of various components within K8s. For example, to access the ",(0,o.jsx)(n.code,{children:"mysql"})," client service corresponding to FE's 9030, you can use the following command to connect:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -h ac48284932b044251bfac389b453118f-1412731848.us-east-1.elb.amazonaws.com -P 9030 -uroot\n"})}),"\n",(0,o.jsx)(n.h3,{id:"nodeport-mode",children:"NodePort Mode"}),"\n",(0,o.jsxs)(n.p,{children:["In a private network environment, to access internal services outside K8s, it is recommended to use the ",(0,o.jsx)(n.code,{children:"NodePort"})," mode of K8s. Use the default configuration as a blueprint to configure the ",(0,o.jsx)(n.code,{children:"NodePort"})," access mode in the private network as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n    app.kubernetes.io/instance: doriscluster-sample\n    app.kubernetes.io/part-of: doris-operator\n  name: doriscluster-sample\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: NodePort\n    limits:\n      cpu: 6\n      memory: 12Gi\n    requests:\n      cpu: 6\n      memory: 12Gi\n    image: selectdb/doris.fe-ubuntu:2.0.2\n  beSpec:\n    replicas: 3\n    service:\n      type: NodePort\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    image: selectdb/doris.be-ubuntu:2.0.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After deployment, view the corresponding Service by viewing the ",(0,o.jsx)(n.code,{children:"kubectl get service"})," command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service\nNAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                       AGE\nkubernetes                        ClusterIP   10.152.183.1     <none>        443/TCP                                                       169d\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>        9030/TCP                                                      2d\ndoriscluster-sample-fe-service    NodePort    10.152.183.58    <none>        8030:31041/TCP,9020:30783/TCP,9030:31545/TCP,9010:31610/TCP   2d\ndoriscluster-sample-be-internal   ClusterIP   None             <none>        9050/TCP                                                      2d\ndoriscluster-sample-be-service    NodePort    10.152.183.244   <none>        9060:30940/TCP,8040:32713/TCP,9050:30621/TCP,8060:30926/TCP   2d\n"})}),"\n",(0,o.jsx)(n.p,{children:"The above command obtains the port that can be used outside K8s, and obtains the host managed by K8s through the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get nodes -owide\nNAME             STATUS   ROLES    AGE    VERSION                     INTERNAL-IP   EXTERNAL-IP   OS-IMAGE                       KERNEL-VERSION       CONTAINER-RUNTIME\nvm-10-7-centos   Ready    <none>   88d    v1.23.17-2+40cc20cc310518   10.16.10.7    <none>        TencentOS Server 3.1 (Final)   5.4.119-19.0009.25   containerd://1.5.13\nvm-10-8-centos   Ready    <none>   169d   v1.23.17-2+40cc20cc310518   10.16.10.8    <none>        TencentOS Server 3.1 (Final)   5.4.119-19-0009.3    containerd://1.5.13\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In a private network environment, use the K8s host and mapped ports to access K8s internal services. For example, we use the host's IP and FE's 9030 mapped port (31545) to connect to ",(0,o.jsx)(n.code,{children:"mysql"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ mysql -h 10.16.10.8 -P 31545 -uroot\n"})}),"\n",(0,o.jsx)(n.p,{children:"In addition, you can specify the nodePort you need according to your own platform needs.\nThe Kubernetes master will allocate a port from the given configuration range (general default: 30000-32767) and each Node will proxy to the Service from that port (the same port on each Node). Like the example above, a random port will be automatically generated if not specified."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n    app.kubernetes.io/instance: doriscluster-sample\n    app.kubernetes.io/part-of: doris-operator\n  name: doriscluster-sample\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31001\n          targetPort: 8030\n        - nodePort: 31002\n          targetPort: 9020\n        - nodePort: 31003\n          targetPort: 9030\n        - nodePort: 31004\n          targetPort: 9010\n    limits:\n      cpu: 6\n      memory: 12Gi\n    requests:\n      cpu: 6\n      memory: 12Gi\n    image: selectdb/doris.fe-ubuntu:2.0.2\n  beSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31005\n          targetPort: 9060\n        - nodePort: 31006\n          targetPort: 8040\n        - nodePort: 31007\n          targetPort: 9050\n        - nodePort: 31008\n          targetPort: 8060\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    image: selectdb/doris.be-ubuntu:2.0.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After deployment, check the corresponding Service by viewing the ",(0,o.jsx)(n.code,{children:"kubectl get service"})," command. For access methods, please refer to the above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service\nNAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                       AGE\nkubernetes                        ClusterIP   10.152.183.1     <none>        443/TCP                                                       169d\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>        9030/TCP                                                      2d\ndoriscluster-sample-fe-service    NodePort    10.152.183.67    <none>        8030:31001/TCP,9020:31002/TCP,9030:31003/TCP,9010:31004/TCP   2d\ndoriscluster-sample-be-internal   ClusterIP   None             <none>        9050/TCP                                                      2d\ndoriscluster-sample-be-service    NodePort    10.152.183.24    <none>        9060:31005/TCP,8040:31006/TCP,9050:31007/TCP,8060:31008/TCP   2d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"doris-data-exchange",children:"Doris data exchange"}),"\n",(0,o.jsx)(n.h3,{id:"stream-load",children:"Stream load"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/stream-load-manual",children:"Stream load"})," is a synchronous import method. Users send requests to import local files or data streams into Doris by sending HTTP protocol.\nIn a regular deployment, users submit import commands via the HTTP protocol. Generally, users will submit the request to FE, and FE will forward the request to a certain BE through the HTTP redirect command. However, in a Kubernetes-based deployment scenario, it is recommended that users ",(0,o.jsx)(n.strong,{children:"directly submit the import command to BE's Srevice"}),", and then the Service will be load balanced to a certain BE pod based on Kubernetes rules.\nThe actual effects of these two operations are the same. When Flink or Spark uses the official connector to submit, the write request can also be submitted to the BE Service."]}),"\n",(0,o.jsx)(n.h3,{id:"errorurl",children:"ErrorURL"}),"\n",(0,o.jsxs)(n.p,{children:["When import methods such as ",(0,o.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/stream-load-manual",children:"Stream load"})," and ",(0,o.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine load"}),"\nThese import methods will print ",(0,o.jsx)(n.code,{children:"errorURL"})," or ",(0,o.jsx)(n.code,{children:"tracking_url"})," in the return structure or log when encountering errors such as incorrect data format. You can locate the cause of the import error by visiting this link.\nHowever, this URL is only accessible within the internal environment of a specific BE node container in a Kubernetes deployed cluster."]}),"\n",(0,o.jsxs)(n.p,{children:["The following scenario takes the errorURL returned by Doris as an example:\n",(0,o.jsx)(n.code,{children:"http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Kubernetes cluster internal access"})}),"\n",(0,o.jsxs)(n.p,{children:["You need to obtain the access method of BE's Service or pod through the ",(0,o.jsx)(n.code,{children:"kubectl get service"})," or ",(0,o.jsx)(n.code,{children:"kubectl get pod -o wide"})," command, replace the domain name and port of the original URL, and then access again."]}),"\n",(0,o.jsx)(n.p,{children:"for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -o wide\nNAME                       READY   STATUS    RESTARTS     AGE   IP           NODE                      NOMINATED NODE   READINESS GATES\ndoriscluster-sample-be-0   1/1     Running   0            9h    10.0.2.105   10-0-2-47.ec2.internal    <none>           <none>\ndoriscluster-sample-be-1   1/1     Running   0            9h    10.0.2.104   10-0-2-5.ec2.internal     <none>           <none>\ndoriscluster-sample-be-2   1/1     Running   0            9h    10.0.2.103   10-0-2-6.ec2.internal     <none>           <none>\ndoriscluster-sample-fe-0   1/1     Running   0            9h    10.0.2.102   10-0-2-47.ec2.internal    <none>           <none>\ndoriscluster-sample-fe-1   1/1     Running   0            9h    10.0.2.101   10-0-2-5.ec2.internal     <none>           <none>\ndoriscluster-sample-fe-2   1/1     Running   0            9h    10.0.2.100   10-0-2-6.ec2.internal     <none>           <none>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The above errorURL is changed to:\n",(0,o.jsx)(n.code,{children:"http://10.0.2.103:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. NodePort mode for external access to Kubernetes cluster"})}),"\n",(0,o.jsx)(n.p,{children:"Obtaining error report details from outside Kubernetes requires additional bridging means. The following are the processing steps for using NodePort mode Service when deploying Doris. Obtain error report details by creating a new Service:\nHandle Service template be_streamload_errror_service.yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.doris.service/role: debug\n    app.kubernetes.io/component: be\n  name: doriscluster-detail-error\nspec:\n  externalTrafficPolicy: Cluster\n  internalTrafficPolicy: Cluster\n  ipFamilies:\n    - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n    - name: webserver-port\n      port: 8040\n      protocol: TCP\n      targetPort: 8040\n  selector:\n    app.kubernetes.io/component: be\n    statefulset.kubernetes.io/pod-name: ${podName}\n  sessionAffinity: None\n  type: NodePort\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use the following command to view the mapping of Service 8040 port on the host machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service -n doris doriscluster-detail-error\nNAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE\ndoriscluster-detail-error NodePort 10.152.183.35 <none> 8040:31201/TCP 32s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the IP of any host and the NodePort (31201) port obtained above to access and replace errorURL to obtain a detailed error report.\nThe above errorURL is changed to:\n",(0,o.jsx)(n.code,{children:"http://10.152.183.35:31201/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. Access LoadBalancer mode from outside the Kubernetes cluster"})}),"\n",(0,o.jsx)(n.p,{children:"Obtaining error report details from outside Kubernetes requires additional bridging means. The following are the processing steps for using the LoadBalancer mode Service when deploying Doris. Obtain error report details by creating a new Service:\nHandle Service template be_streamload_errror_service.yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.doris.service/role: debug\n    app.kubernetes.io/component: be\n  name: doriscluster-detail-error\nspec:\n  externalTrafficPolicy: Cluster\n  internalTrafficPolicy: Cluster\n  ipFamilies:\n    - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n    - name: webserver-port\n      port: 8040\n      protocol: TCP\n      targetPort: 8040\n  selector:\n    app.kubernetes.io/component: be\n    statefulset.kubernetes.io/pod-name: ${podName}\n  sessionAffinity: None\n  type: LoadBalancer\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"podName"})," is replaced with the highest-level domain name of errorURL: ",(0,o.jsx)(n.code,{children:"doriscluster-sample-be-2"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"namespace"})," deployed by Doris (generally the default is ",(0,o.jsx)(n.code,{children:"doris"}),", use ",(0,o.jsx)(n.code,{children:"doris"})," for the following operations), use the following command to deploy the service processed above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -n doris -f be_streamload_errror_service.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use the following command to view the mapping of Service 8040 port on the host machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get service -n doris doriscluster-detail-error\nNAME                         TYPE          CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)           AGE\ndoriscluster-detail-error    LoadBalancer  172.20.183.136   ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com  8040:32003/TCP    14s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"EXTERNAL-IP"})," and Port (8040) port access to replace errorURL to obtain a detailed error report.\nThe above errorURL is changed to:\n",(0,o.jsx)(n.code,{children:"http://ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968 e_af474190276a2e9c_49bb9d175b8e968e"})]}),"\n",(0,o.jsx)(n.p,{children:"Note: For the above method of setting up access outside the cluster, it is recommended to clear the current Service after use. The reference command is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete service -n doris doriscluster-detail-error\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let o={},t=s.createContext(o);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);