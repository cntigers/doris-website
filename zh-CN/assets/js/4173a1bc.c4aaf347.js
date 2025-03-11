"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["170767"],{447946:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"admin-manual/open-api/fe-http/cluster-action","title":"Cluster Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/fe-http/cluster-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/cluster-action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/cluster-action","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Cluster Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Meta Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/meta-action"},"next":{"title":"Node Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/node-action"}}'),r=t("785893"),i=t("250065");let a={title:"Cluster Action",language:"zh-CN"},o=void 0,l={},c=[{value:"Request",id:"request",level:2},{value:"\u96C6\u7FA4\u8FDE\u63A5\u4FE1\u606F",id:"\u96C6\u7FA4\u8FDE\u63A5\u4FE1\u606F",level:2},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v2/manager/cluster/cluster_info/conn_info"})}),"\n",(0,r.jsx)(n.h2,{id:"\u96C6\u7FA4\u8FDE\u63A5\u4FE1\u606F",children:"\u96C6\u7FA4\u8FDE\u63A5\u4FE1\u606F"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/v2/manager/cluster/cluster_info/conn_info"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u96C6\u7FA4 http\u3001mysql \u8FDE\u63A5\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);