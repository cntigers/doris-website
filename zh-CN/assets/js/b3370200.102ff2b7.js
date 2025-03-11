"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["779530"],{618029:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"ecosystem/doris-operator/on-alibaba","title":"\u5728\u963F\u91CC\u4E91\u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/doris-operator/on-alibaba.md","sourceDirName":"ecosystem/doris-operator","slug":"/ecosystem/doris-operator/on-alibaba","permalink":"/zh-CN/docs/dev/ecosystem/doris-operator/on-alibaba","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5728\u963F\u91CC\u4E91\u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Doris Kubernetes Operator","permalink":"/zh-CN/docs/dev/ecosystem/doris-operator/doris-operator-overview"},"next":{"title":"\u5728 AWS \u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","permalink":"/zh-CN/docs/dev/ecosystem/doris-operator/on-aws"}}'),i=s("785893"),c=s("250065");let l={title:"\u5728\u963F\u91CC\u4E91\u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE",language:"zh-CN"},a=void 0,t={},o=[{value:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1 ACK",id:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1-ack",level:2},{value:"\u5DF2\u5B58\u5728\u96C6\u7FA4",id:"\u5DF2\u5B58\u5728\u96C6\u7FA4",level:3},{value:"\u65B0\u5EFA\u96C6\u7FA4",id:"\u65B0\u5EFA\u96C6\u7FA4",level:3},{value:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1 ACS",id:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1-acs",level:2},{value:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",id:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",level:3},{value:"Be systemInitialization",id:"be-systeminitialization",level:3},{value:"Service \u9650\u5236",id:"service-\u9650\u5236",level:3}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1-ack",children:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1 ACK"}),"\n",(0,i.jsxs)(n.p,{children:["\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1 ACK \u5C5E\u4E8E \u8D2D\u4E70 ECS \u5B9E\u4F8B\u540E\uFF0C\u6258\u7BA1\u5BB9\u5668\u5316\u670D\u52A1\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u83B7\u5F97\u5B8C\u5168\u8BBF\u95EE\u63A7\u5236\u6743\u9650\u6765\u8FDB\u884C\u76F8\u5173\u7CFB\u7EDF\u53C2\u6570\u8C03\u6574\uFF0C\u4F7F\u7528\u5B9E\u4F8B\u955C\u50CF\uFF1AAlibaba Cloud Linux 3 \u5F53\u524D\u7CFB\u7EDF\u53C2\u6570\u5B8C\u5168\u6EE1\u8DB3\u8FD0\u884C Doris \u9700\u6C42\u3002\u4E0D\u7B26\u5408\u8981\u6C42\u7684\u4E5F\u80FD\u591F\u901A\u8FC7 K8s \u7279\u6743\u6A21\u5F0F\u5728\u5BB9\u5668\u5185\u8FDB\u884C\u4FEE\u6B63\uFF0C\u4EE5\u4FDD\u8BC1\u7A33\u5B9A\u8FD0\u884C\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"\u963F\u91CC\u4E91 ACK \u96C6\u7FA4\uFF0C\u4F7F\u7528 Doris Operator \u90E8\u7F72\uFF0C\u5927\u90E8\u5206\u73AF\u5883\u8981\u6C42\uFF0CECS \u9ED8\u8BA4\u914D\u7F6E\u5373\u53EF\u6EE1\u8DB3\uFF0C\u672A\u6EE1\u8DB3\u7684\uFF0CDoris Operator \u53EF\u81EA\u884C\u4FEE\u6B63"}),"\u3002\u7528\u6237\u4EA6\u53EF\u624B\u52A8\u4FEE\u6B63\uFF0C\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5DF2\u5B58\u5728\u96C6\u7FA4",children:"\u5DF2\u5B58\u5728\u96C6\u7FA4"}),"\n",(0,i.jsxs)(n.p,{children:["\u82E5\u5BB9\u5668\u670D\u52A1\u96C6\u7FA4\u5DF2\u7ECF\u521B\u5EFA\uFF0C\u5219\u53EF\u4EE5\u53C2\u8003\u6B64\u6587\u6863\u8FDB\u884C\u4FEE\u6539\uFF1A",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/install/preparation/os-checking",children:"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5"}),(0,i.jsx)(n.br,{}),"\n\u91CD\u70B9\u5173\u6CE8 BE \u542F\u52A8\u53C2\u6570\u8981\u6C42\uFF1A"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7981\u7528\u548C\u5173\u95ED swap\uFF1A ",(0,i.jsx)(n.code,{children:"swapon --show"}),"  \u672A\u5F00\u542F\u5219\u65E0\u8F93\u51FA"]}),"\n",(0,i.jsxs)(n.li,{children:["\u67E5\u770B\u7CFB\u7EDF\u6700\u5927\u6253\u5F00\u6587\u4EF6\u53E5\u67C4\u6570 ",(0,i.jsx)(n.code,{children:"ulimit -n"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u67E5\u770B\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF\u6570\u91CF  ",(0,i.jsx)(n.code,{children:"sysctl vm.max_map_count"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u900F\u660E\u5927\u9875\u662F\u5426\u5173\u95ED  ",(0,i.jsx)(n.code,{children:"cat /sys/kernel/mm/transparent_hugepage/enabled"}),"  \u662F\u5426\u5305\u542B never",(0,i.jsx)(n.br,{}),"\n\u5BF9\u5E94\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u5982\u4E0B\uFF1A"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[root@iZj6c12a1czxk5oer9rbp8Z ~]# swapon --show\n[root@iZj6c12a1czxk5oer9rbp8Z ~]# ulimit -n\n65535\n[root@iZj6c12a1czxk5oer9rbp8Z ~]# sysctl vm.max_map_count\nvm.max_map_count = 262144\n[root@iZj6c12a1czxk5oer9rbp8Z ~]# cat /sys/kernel/mm/transparent_hugepage/enabled\n[always] madvise never\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u65B0\u5EFA\u96C6\u7FA4",children:"\u65B0\u5EFA\u96C6\u7FA4"}),"\n",(0,i.jsx)(n.p,{children:"\u82E5\u96C6\u7FA4\u672A\u8D2D\u4E70\u548C\u521B\u5EFA\uFF0C\u5219\u53EF\u4EE5\u5728\u963F\u91CC\u4E91 \u5BB9\u5668\u670D\u52A1 ACK \u63A7\u5236\u53F0 \u70B9\u51FB\u201C\u521B\u5EFA\u96C6\u7FA4\u201D\u8D2D\u4E70\uFF0C\u53EF\u4EE5\u6309\u9700\u8C03\u6574\u914D\u7F6E\uFF0C\u4E0A\u8FF0\u53C2\u6570\u53EF\u4EE5\u5728 \u521B\u5EFA\u96C6\u7FA4\u7684\u201C\u8282\u70B9\u6C60\u914D\u7F6E\u201D\u6B65\u9AA4\u4E2D\u5728\u201C\u5B9E\u4F8B\u9884\u81EA\u5B9A\u4E49\u6570\u636E\u201D\u6DFB\u52A0\u7CFB\u7EDF\u8C03\u6574\u811A\u672C\u3002\n\u5728\u96C6\u7FA4\u542F\u52A8\u540E\uFF0C\u91CD\u542F\u8282\u70B9\u5373\u53EF\u5B9E\u73B0\u914D\u7F6E\u5B8C\u6210\u3002\u53C2\u8003\u811A\u672C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\nchmod +x /etc/rc.d/rc.local\necho "sudo systemctl stop firewalld.service" >> /etc/rc.d/rc.local\necho "sudo systemctl disable firewalld.service" >> /etc/rc.d/rc.local\necho "sysctl -w vm.max_map_count=2000000" >> /etc/rc.d/rc.local\necho "swapoff -a" >> /etc/rc.d/rc.local\ncurrent_limit=$(ulimit -n)\ndesired_limit=1000000\nconfig_file="/etc/security/limits.conf"\n if [ "$current_limit" -ne "$desired_limit" ]; then\n    echo "* soft nofile 1000000" >> "$config_file"\n    echo "* hard nofile 1000000" >> "$config_file"\nfi\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1-acs",children:"\u963F\u91CC\u4E91\u5BB9\u5668\u670D\u52A1 ACS"}),"\n",(0,i.jsx)(n.p,{children:"ACS \u670D\u52A1\u662F\u4EE5 K8s \u4E3A\u4F7F\u7528\u754C\u9762\u4F9B\u7ED9\u5BB9\u5668\u7B97\u529B\u8D44\u6E90\u7684\u4E91\u8BA1\u7B97\u670D\u52A1\uFF0C\u63D0\u4F9B\u6309\u9700\u8BA1\u8D39\u7684\u5F39\u6027\u7B97\u529B\u8D44\u6E90\u3002\u548C\u4E0A\u8FF0 ACK \u4E0D\u540C\u7684\u662F\u4E0D\u9700\u8981\u5173\u6CE8\u5177\u4F53\u4F7F\u7528 ECS\u3002\n\u9700\u8981\u6CE8\u610F\u4F7F\u7528 ACS \u7684\u4E8B\u9879\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.h3,{id:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",children:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE"}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ACS \u63A8\u8350\u4F7F\u7528\u914D\u5957\u7684\u963F\u91CC\u4E91\u955C\u50CF ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/en/product/container-registry",children:"Container Registry"}),"(ACR) \u4E2A\u4EBA\u7248\u548C\u4F01\u4E1A\u7248\u6309\u9700\u5F00\u542F\u3002",(0,i.jsx)(n.br,{}),"\n\u5728\u914D\u7F6E\u597D\u955C\u50CF\u4ED3\u5E93\u548C\u955C\u50CF\u4E2D\u8F6C\u7684\u73AF\u5883\u540E\uFF0C\u9700\u8981\u628A Doris \u63D0\u4F9B\u7684\u5B98\u65B9\u955C\u50CF\u8FC1\u79FB\u5230\u5BF9\u5E94\u7684\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\u4E2D\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u82E5\u4F7F\u7528\u79C1\u6709\u955C\u50CF\u4ED3\u5E93\u5F00\u542F\u4E86\u9274\u6743\uFF0C\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u6B65\u9AA4\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9700\u8981\u63D0\u524D\u8BBE\u7F6E\u7C7B\u578B\u4E3A ",(0,i.jsx)(n.code,{children:"docker-registry"})," \u7684 ",(0,i.jsx)(n.code,{children:"secret"})," \u7528\u4EE5\u914D\u7F6E\u8BBF\u95EE\u955C\u50CF\u4ED3\u5E93\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl create secret docker-registry image-hub-secret --docker-server={your-server} --docker-username={your-username} --docker-password={your-pwd}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u5728 DCR \u4E0A\u914D\u7F6E\u4F7F\u7528\u4E0A\u8FF0\u6B65\u9AA4\u7684 secret\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spec:\n  feSpec:\n    replicas: 1\n    image: crpi-4q6quaxa0ta96k7h-vpc.cn-hongkong.personal.cr.aliyuncs.com/selectdb-test/doris.fe-ubuntu:3.0.3\n    imagePullSecrets:\n    - name: image-hub-secret\n  beSpec:\n    replicas: 3\n    image: crpi-4q6quaxa0ta96k7h-vpc.cn-hongkong.personal.cr.aliyuncs.com/selectdb-test/doris.be-ubuntu:3.0.3\n    imagePullSecrets:\n    - name: image-hub-secret\n    systemInitialization:\n      initImage: crpi-4q6quaxa0ta96k7h-vpc.cn-hongkong.personal.cr.aliyuncs.com/selectdb-test/alpine:latest\n"})}),"\n",(0,i.jsx)(n.h3,{id:"be-systeminitialization",children:"Be systemInitialization"}),"\n",(0,i.jsxs)(n.p,{children:["\u76EE\u524D\u963F\u91CC\u4E91\u9010\u6B65\u63A8\u9001 \u5728\u5B8C\u5168\u6258\u7BA1\u7684 ACS \u670D\u52A1\u4E0A \u63D0\u4F9B\u5F00\u542F\u7279\u6743\u6A21\u5F0F \u7684\u80FD\u529B\uFF08\u90E8\u5206\u5730\u57DF\u53EF\u80FD\u6682\u672A\u5F00\u542F\uFF0C\u53EF\u63D0\u4EA4\u5DE5\u5355\u7533\u8BF7\u5F00\u542F\u80FD\u529B\u52A0\u767D\uFF09\u3002",(0,i.jsx)(n.br,{}),"\nDoris BE \u8282\u70B9\u542F\u52A8\u9700\u8981\u4F9D\u8D56\u4E00\u4E9B\u7279\u6B8A\u73AF\u5883\u53C2\u6570 \u6BD4\u5982\uFF0C\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF\u6570\u91CF ",(0,i.jsx)(n.code,{children:"sysctl -w vm.max_map_count=2000000"}),(0,i.jsx)(n.br,{}),"\n\u5728\u5BB9\u5668\u5185\u90E8\u8BBE\u7F6E\u6B64\u53C2\u6570\u9700\u8981 \u4FEE\u6539\u5BBF\u4E3B\u673A\u914D\u7F6E\uFF0C\u56E0\u6B64\u5E38\u89C4\u7684 K8s \u96C6\u7FA4\u9700\u8981\u5728 pod \u5185\u5F00\u542F\u7279\u6743\u6A21\u5F0F\u3002Operator \u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"systemInitialization"})," \u4E3A BE pod \u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"InitContainer"})," \u6765\u6267\u884C\u6B64\u7C7B\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5982\u679C\u5F53\u524D\u96C6\u7FA4\u65E0\u6CD5\u4F7F\u7528\u7279\u6743\u6A21\u5F0F\uFF0C\u5219\u65E0\u6CD5\u542F\u52A8 BE \u8282\u70B9"}),"\u3002\u53EF\u4EE5\u9009\u62E9 ACK \u5BB9\u5668\u670D\u52A1 + \u5BBF\u4E3B\u673A\u7684\u5F62\u5F0F\u6765\u90E8\u7F72\u96C6\u7FA4\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"service-\u9650\u5236",children:"Service \u9650\u5236"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4E8E ACS \u670D\u52A1\u662F\u4EE5 K8s \u4E3A\u4F7F\u7528\u754C\u9762\u4F9B\u7ED9\u5BB9\u5668\u7B97\u529B\u8D44\u6E90\u7684\u4E91\u8BA1\u7B97\u670D\u52A1\uFF0C\u63D0\u4F9B\u7B97\u529B\u8D44\u6E90\u3002\u5176 node \u662F\u865A\u62DF\u8BA1\u7B97\u8D44\u6E90\uFF0C\u7528\u6237\u65E0\u9700\u5173\u6CE8\uFF0C\u6309\u4F7F\u7528\u8D44\u6E90\u91CF\u6536\u8D39\uFF0C\u53EF\u4EE5\u65E0\u9650\u62D3\u5C55\uFF0C\u5373\uFF0C\u4E0D\u5B58\u5728\u5E38\u89C4\u7684 node \u8FD9\u4E2A\u7269\u7406\u6982\u5FF5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get nodes\nNAME                            STATUS   ROLES   AGE   VERSION\nvirtual-kubelet-cn-hongkong-d   Ready    agent   27h   v1.31.1-aliyun.1\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u56E0\u6B64\uFF0C\u90E8\u7F72 Doris \u96C6\u7FA4\u65F6 serviceType \u7981\u7528 NodePort \u6A21\u5F0F\uFF0C\u5141\u8BB8\u4F7F\u7528 ClusterIP \u548C LB \u6A21\u5F0F\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ClusterIP \u6A21\u5F0F\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["Operator \u9ED8\u8BA4\u7684\u7F51\u7EDC\u6A21\u5F0F\uFF0C\u5177\u4F53\u4F7F\u7528\u548C\u8BBF\u95EE\u65B9\u5F0F\u53EF\u53C2\u8003",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip",children:"\u6B64\u6587\u6863"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8D1F\u8F7D\u5747\u8861\u6A21\u5F0F\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528\u65F6\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6765\u914D\u7F6E\uFF08\u6CE8\u610F\u4E8B\u9879\uFF1A",(0,i.jsx)(n.a,{href:"https://help.aliyun.com/zh/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1%EF%BC%89%EF%BC%9A",children:"https://help.aliyun.com/zh/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1\uFF09\uFF1A"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7 Operator \u63D0\u4F9B\u7684 DCR \u7684 service annotations \u6765\u914D\u7F6E LB \u63A5\u5165\uFF0C\u6B65\u9AA4\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5DF2\u901A\u8FC7\u8D1F\u8F7D\u5747\u8861\u63A7\u5236\u53F0\u521B\u5EFA CLB \u6216 NLB \u5B9E\u4F8B\uFF0C\u4E14\u8BE5\u5B9E\u4F8B\u4E0E ACK \u96C6\u7FA4\u5904\u4E8E\u540C\u4E00\u5730\u57DF\u3002\u5982\u679C\u5C1A\u672A\u521B\u5EFA\uFF0C\u8BF7\u53C2\u89C1",(0,i.jsx)(n.a,{href:"https://help.aliyun.com/zh/slb/classic-load-balancer/user-guide/create-and-manage-a-clb-instance#task-ctx-xsm-vdb",children:"\u521B\u5EFA\u548C\u7BA1\u7406 CLB \u5B9E\u4F8B"}),"\u548C",(0,i.jsx)(n.a,{href:"https://help.aliyun.com/zh/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance",children:"\u521B\u5EFA\u548C\u7BA1\u7406 NLB \u5B9E\u4F8B"}),"\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u901A\u8FC7 DCR \u914D\u7F6E\uFF0C\u4E0A\u8FF0 LB \u7684\u8BBF\u95EE annotations\uFF0C\u53C2\u8003\u683C\u5F0F\u5982\u4E0B\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'  feSpec:\n    replicas: 3\n    image: crpi-4q6quaxa0ta96k7h-vpc.cn-hongkong.personal.cr.aliyuncs.com/selectdb-test/doris.fe-ubuntu:3.0.3\n    service:\n      type: LoadBalancer\n      annotations:\n        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7 ACS \u63A7\u5236\u53F0\u6258\u7BA1 LB \u670D\u52A1\uFF0C\u751F\u6210\u7ED1\u5B9A FE \u6216 BE \u5BF9\u5E94\u8D44\u6E90\u7BA1\u63A7\u7684 statefulset \u7684 service\n\u6B65\u9AA4\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"serviceType \u4E3A ClusterIP\uFF08\u9ED8\u8BA4\u7B56\u7565\uFF09"}),"\n",(0,i.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u754C\u9762\uFF1A\u5BB9\u5668\u8BA1\u7B97\u670D\u52A1 ACS -> \u96C6\u7FA4\u5217\u8868 -> \u96C6\u7FA4 -> \u670D\u52A1\uFF0C\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"\u521B\u5EFA"})," \u6309\u94AE\u521B\u5EFA\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"\u670D\u52A1"})," \u7684\u754C\u9762 \u9009\u62E9\u65B0\u5EFA\u7684 LB\uFF0C\u4F1A\u548C ",(0,i.jsx)(n.code,{children:"service"})," \u7ED1\u5B9A\uFF0C\u4E5F\u4F1A\u968F\u7740 \u8BE5 ",(0,i.jsx)(n.code,{children:"service"})," \u7684\u6CE8\u9500\u800C\u6CE8\u9500\u3002\u4F46\u662F\u6B64 ",(0,i.jsx)(n.code,{children:"service"})," \u4E0D\u53D7 Doris Operator \u7BA1\u63A7\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(667294);let i={},c=r.createContext(i);function l(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);