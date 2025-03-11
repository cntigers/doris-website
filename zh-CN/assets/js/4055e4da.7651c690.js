"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["990858"],{448090:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>r});var l=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-load-info-action","title":"Get Load Info Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/get-load-info-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-load-info-action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-load-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get Load Info Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Get DDL Statement Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-ddl-stmt-action"},"next":{"title":"Get Load State","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-load-state"}}'),a=t("785893"),s=t("250065");let i={title:"Get Load Info Action",language:"zh-CN"},r=void 0,d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/<db>/_load_info"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A label \u7684\u5BFC\u5165\u4F5C\u4E1A\u7684\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db>"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"label"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u5165 Label"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"dbName": "default_cluster:db1",\n		"tblNames": ["tbl1"],\n		"label": "my_label",\n		"clusterName": "default_cluster",\n		"state": "FINISHED",\n		"failMsg": "",\n		"trackingUrl": ""\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A label \u7684\u5BFC\u5165\u4F5C\u4E1A\u4FE1\u606F"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/example_db/_load_info?label=my_label\n\nResponse\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"dbName": "default_cluster:db1",\n		"tblNames": ["tbl1"],\n		"label": "my_label",\n		"clusterName": "default_cluster",\n		"state": "FINISHED",\n		"failMsg": "",\n		"trackingUrl": ""\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let a={},s=l.createContext(a);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);