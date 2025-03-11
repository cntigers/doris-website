"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["906827"],{841524:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"install/deploy-on-kubernetes/helm-chart-deploy","title":"Deploy Doris on Helm Chart","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/install/deploy-on-kubernetes/helm-chart-deploy.md","sourceDirName":"install/deploy-on-kubernetes","slug":"/install/deploy-on-kubernetes/helm-chart-deploy","permalink":"/docs/install/deploy-on-kubernetes/helm-chart-deploy","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Deploy Doris on Helm Chart","language":"en"}}'),r=n("785893"),t=n("250065");let o={title:"Deploy Doris on Helm Chart",language:"en"},i=void 0,a={},d=[{value:"Add Helm repository of Doris-Operator",id:"add-helm-repository-of-doris-operator",level:2},{value:"Install doris-operator",id:"install-doris-operator",level:2},{value:"1. Install",id:"1-install",level:3},{value:"2. Validate installation Status",id:"2-validate-installation-status",level:3},{value:"Install doriscluster",id:"install-doriscluster",level:2},{value:"1. Install",id:"1-install-1",level:3},{value:"2. Validate installation Status",id:"2-validate-installation-status-1",level:3},{value:"Uninstall Doris by Helm",id:"uninstall-doris-by-helm",level:2},{value:"Uninstall doriscluster",id:"uninstall-doriscluster",level:3},{value:"Uninstall doris-operator",id:"uninstall-doris-operator",level:3}];function c(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://helm.sh/",children:"Helm"})," is the best way to find, share, and use software built for Kubernetes. Helm Charts help to define, install, and upgrade even the most complex Kubernetes application.\nHelm Chart makes it easy to deploy Doris clusters and skip difficult configuration steps."]}),"\n",(0,r.jsx)(s.h2,{id:"add-helm-repository-of-doris-operator",children:"Add Helm repository of Doris-Operator"}),"\n",(0,r.jsxs)(s.p,{children:["This ",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/search?ts_query_web=doris&sort=relevance&page=1",children:"Doris repository"})," have resources about RBAC , deployment ...etc for doris-operator running."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Add the Doris repository"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm repo add doris-repo https://charts.selectdb.com\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsx)(s.li,{children:"Update the Chart to the latest version"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm repo update doris-repo\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:"Check the Helm Chart Repo is the latest version"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm search repo doris-repo\nNAME                          CHART VERSION    APP VERSION   DESCRIPTION\ndoris-repo/doris-operator     1.3.1            1.3.1         Doris-operator for doris creat ...\ndoris-repo/doris              1.3.1            2.0.3         Apache Doris is an easy-to-use ...\n"})}),"\n",(0,r.jsx)(s.h2,{id:"install-doris-operator",children:"Install doris-operator"}),"\n",(0,r.jsx)(s.h3,{id:"1-install",children:"1. Install"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Install ",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/doris/doris-operator",children:"doris-operator"}),"\uFF0Cwith default config  in a namespace named ",(0,r.jsx)(s.code,{children:"doris"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm install operator doris-repo/doris-operator\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The repo defines the basic function for running doris-operator, Please use next command to deploy operator, when you have completed customization of ",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values",children:"values.yaml"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm install -f values.yaml operator doris-repo/doris-operator \n"})}),"\n",(0,r.jsx)(s.h3,{id:"2-validate-installation-status",children:"2. Validate installation Status"}),"\n",(0,r.jsxs)(s.p,{children:["Check the deployment status of Pods through the ",(0,r.jsx)(s.code,{children:"kubectl get pods"})," command.\nObserve that the Pod of doris-operator is in the Running state and all containers in the Pod are ready, that means, the deployment is successful."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ kubectl get pod --namespace doris\nNAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n"})}),"\n",(0,r.jsx)(s.h2,{id:"install-doriscluster",children:"Install doriscluster"}),"\n",(0,r.jsx)(s.h3,{id:"1-install-1",children:"1. Install"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Use default config for deploying ",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/doris/doris",children:"doriscluster"}),". This only deploys 3 FE and 3 BE components and using default ",(0,r.jsx)(s.code,{children:"storageClass"})," for providing persistent volume."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm install doriscluster doris-repo/doris\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Custom Doris deploying, specify resources or different deployment type, please customize the resource configuration according to the annotations of each resource configuration in ",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/doris/doris?modal=values",children:"values.yaml"})," and use next command for deploying."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm install -f values.yaml doriscluster doris-repo/doris \n"})}),"\n",(0,r.jsx)(s.h3,{id:"2-validate-installation-status-1",children:"2. Validate installation Status"}),"\n",(0,r.jsxs)(s.p,{children:["After executing the installation command, deployment and distribution, service deployment scheduling and startup will take a certain amount of time.\nCheck the deployment status of Pods through the ",(0,r.jsx)(s.code,{children:"kubectl get pods"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["Observe that the Pod of ",(0,r.jsx)(s.code,{children:"doriscluster"})," is in the ",(0,r.jsx)(s.code,{children:"Running"})," state and all containers in the Pod are ready, that means, the deployment is successful."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$  kubectl get pod --namespace doris\nNAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n"})}),"\n",(0,r.jsx)(s.h2,{id:"uninstall-doris-by-helm",children:"Uninstall Doris by Helm"}),"\n",(0,r.jsx)(s.h3,{id:"uninstall-doriscluster",children:"Uninstall doriscluster"}),"\n",(0,r.jsxs)(s.p,{children:["Please confirm the Doris is not used, when using next command to uninstall ",(0,r.jsx)(s.code,{children:"doriscluster"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm uninstall doriscluster\n"})}),"\n",(0,r.jsx)(s.h3,{id:"uninstall-doris-operator",children:"Uninstall doris-operator"}),"\n",(0,r.jsxs)(s.p,{children:["Please confirm that Doris is not running in Kubernetes, use next command to uninstall ",(0,r.jsx)(s.code,{children:"doris-operator"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ helm uninstall operator\n"})})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var l=n(667294);let r={},t=l.createContext(r);function o(e){let s=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);