"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["34020"],{701588:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"install/deploy-on-kubernetes/integrated-storage-compute/install-doris-cluster","title":"\u90E8\u7F72 Doris \u96C6\u7FA4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/deploy-on-kubernetes/integrated-storage-compute/install-doris-cluster.md","sourceDirName":"install/deploy-on-kubernetes/integrated-storage-compute","slug":"/install/deploy-on-kubernetes/integrated-storage-compute/install-doris-cluster","permalink":"/zh-CN/docs/dev/install/deploy-on-kubernetes/integrated-storage-compute/install-doris-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u90E8\u7F72 Doris \u96C6\u7FA4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u914D\u7F6E Doris \u96C6\u7FA4","permalink":"/zh-CN/docs/dev/install/deploy-on-kubernetes/integrated-storage-compute/install-config-cluster"},"next":{"title":"\u8BBF\u95EE Doris \u96C6\u7FA4","permalink":"/zh-CN/docs/dev/install/deploy-on-kubernetes/integrated-storage-compute/access-cluster"}}'),r=s("785893"),l=s("250065");let o={title:"\u90E8\u7F72 Doris \u96C6\u7FA4",language:"zh-CN"},i=void 0,a={},c=[{value:"\u7B2C 1 \u6B65\uFF1A\u4E0B\u8F7D Doris \u90E8\u7F72\u6A21\u677F",id:"\u7B2C-1-\u6B65\u4E0B\u8F7D-doris-\u90E8\u7F72\u6A21\u677F",level:2},{value:"\u7B2C 2 \u6B65\uFF1A\u5B89\u88C5\u81EA\u5B9A\u4E49\u90E8\u7F72\u6A21\u677F",id:"\u7B2C-2-\u6B65\u5B89\u88C5\u81EA\u5B9A\u4E49\u90E8\u7F72\u6A21\u677F",level:2},{value:"\u7B2C 3 \u6B65\uFF1A\u68C0\u67E5\u96C6\u7FA4\u90E8\u7F72\u72B6\u6001",id:"\u7B2C-3-\u6B65\u68C0\u67E5\u96C6\u7FA4\u90E8\u7F72\u72B6\u6001",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728 Kubernetes \u4E0A\u90E8\u7F72 Doris \u96C6\u7FA4\u65F6\uFF0C\u8BF7\u63D0\u524D",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/install/deploy-on-kubernetes/integrated-storage-compute/install-doris-operator",children:"\u90E8\u7F72 Doris Operator"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u90E8\u7F72 Doris \u96C6\u7FA4\u7684\u8FC7\u7A0B\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF1A\u4E0B\u8F7D Doris \u90E8\u7F72\u6A21\u677F\u3001\u914D\u7F6E\u5E76\u5B89\u88C5\u81EA\u5B9A\u4E49\u90E8\u7F72\u6A21\u677F\u3001\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7B2C-1-\u6B65\u4E0B\u8F7D-doris-\u90E8\u7F72\u6A21\u677F",children:"\u7B2C 1 \u6B65\uFF1A\u4E0B\u8F7D Doris \u90E8\u7F72\u6A21\u677F"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl -O https://raw.githubusercontent.com/apache/doris-operator/master/doc/examples/doriscluster-sample.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7B2C-2-\u6B65\u5B89\u88C5\u81EA\u5B9A\u4E49\u90E8\u7F72\u6A21\u677F",children:"\u7B2C 2 \u6B65\uFF1A\u5B89\u88C5\u81EA\u5B9A\u4E49\u90E8\u7F72\u6A21\u677F"}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636E",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/install/deploy-on-kubernetes/integrated-storage-compute/install-config-cluster",children:"\u96C6\u7FA4\u914D\u7F6E\u7AE0\u8282"}),"\u6309\u9700\u8FDB\u884C\u5B9A\u5236\u5316\u914D\u7F6E\uFF0C\u914D\u7F6E\u5B8C\u6210\u540E\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u90E8\u7F72\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f doriscluster-sample.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7B2C-3-\u6B65\u68C0\u67E5\u96C6\u7FA4\u90E8\u7F72\u72B6\u6001",children:"\u7B2C 3 \u6B65\uFF1A\u68C0\u67E5\u96C6\u7FA4\u90E8\u7F72\u72B6\u6001"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u67E5\u770B pods \u7684\u72B6\u6001"}),"\uFF1A"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get pods\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u671F\u671B\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-0   1/1     Running   0          2m\ndoriscluster-sample-be-0   1/1     Running   0          3m\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u67E5\u770B\u90E8\u7F72\u8D44\u6E90\u7684\u72B6\u6001"}),"\uFF1A"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get dcr -n doris\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u671F\u671B\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},l=t.createContext(r);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);