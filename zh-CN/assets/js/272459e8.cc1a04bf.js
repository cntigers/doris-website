"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["377167"],{659591:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","title":"CREATE STORAGE POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE STORAGE POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP WORKLOAD POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/DROP-WORKLOAD-POLICY"},"next":{"title":"ALTER STORAGE POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY"}}'),l=t("785893"),r=t("250065");let a={title:"CREATE STORAGE POLICY",language:"zh-CN"},c=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236\uFF08Access Control Requirements\uFF09",id:"\u6743\u9650\u63A7\u5236access-control-requirements",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5B58\u50A8\u7B56\u7565\uFF0C\u5FC5\u987B\u5148\u521B\u5EFA\u5B58\u50A8\u8D44\u6E90\uFF0C\u7136\u540E\u521B\u5EFA\u8FC1\u79FB\u7B56\u7565\u65F6\u5019\u5173\u8054\u521B\u5EFA\u7684\u5B58\u50A8\u8D44\u6E90\u540D\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 RESOURCE \u7AE0\u8282\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY <policy_name>\nPROPERTIES(\n    "storage_resource" = "<storage_resource_name>"\n    [{\uFF0C "cooldown_datetime" = "<cooldown_datetime>"\n    \uFF5C \uFF0C "cooldown_ttl" = "<cooldown_ttl>"}]\n);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<policy_name>"}),":\u5F85\u521B\u5EFA\u7684\u5B58\u50A8\u7B56\u7565\u540D\u5B57"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<storage_resource_name>"}),":\u5173\u8054\u7684\u5B58\u50A8\u8D44\u6E90\u540D\u5B57\uFF0C\u5177\u4F53\u5982\u4F55\u521B\u5EFA\u53EF\u53C2\u8003 RESOURCE \u7AE0\u8282"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<cooldown_datetime>"}),":\u6307\u5B9A\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565\u51B7\u5374\u7684\u65F6\u95F4"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<cooldown_ttl>"}),": \u6307\u5B9A\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565\u70ED\u6570\u636E\u6301\u7EED\u65F6\u95F4"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236access-control-requirements",children:"\u6743\u9650\u63A7\u5236\uFF08Access Control Requirements\uFF09"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u6210\u529F\u7684\u524D\u7F6E\u6761\u4EF6\u662F\uFF0C\u62E5\u6709 ADMIN_PRIV \u6743\u9650\uFF0C\u53C2\u8003\u6743\u9650\u6587\u6863\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6574\u4E2A\u96C6\u7FA4\u7BA1\u7406\u6743\u9650"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u9664 NODE_PRIV \u4EE5\u5916\u7684\u6240\u6709\u6743\u9650"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u51B7\u5374\u65F6\u95F4\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n"storage_resource" = "s3",\n"cooldown_datetime" = "2022-06-08 00:00:00"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u70ED\u6570\u636E\u6301\u7EED\u65F6\u95F4\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n"storage_resource" = "s3",\n"cooldown_ttl" = "1d"\n);\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);