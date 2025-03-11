"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["845269"],{563407:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/bootstrap-action","title":"Bootstrap Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/fe-http/bootstrap-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/bootstrap-action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/bootstrap-action","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Bootstrap Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Backends Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/backends-action"},"next":{"title":"Cancel Load Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/cancel-load-action"}}'),s=r("785893"),i=r("250065");let l={title:"Bootstrap Action",language:"zh-CN"},o=void 0,d={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function a(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/bootstrap"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u4E8E\u5224\u65AD FE \u662F\u5426\u542F\u52A8\u5B8C\u6210\u3002\u5F53\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u53C2\u6570\u65F6\uFF0C\u4EC5\u8FD4\u56DE\u662F\u5426\u542F\u52A8\u6210\u529F\u3002\u5982\u679C\u63D0\u4F9B\u4E86 ",(0,s.jsx)(n.code,{children:"token"})," \u548C ",(0,s.jsx)(n.code,{children:"cluster_id"}),"\uFF0C\u5219\u8FD4\u56DE\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cluster_id"})}),"\n",(0,s.jsxs)(n.p,{children:["\u96C6\u7FA4 id\u3002\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.code,{children:"doris-meta/image/VERSION"})," \u6587\u4EF6\u4E2D\u67E5\u770B\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"token"})}),"\n",(0,s.jsxs)(n.p,{children:["\u96C6\u7FA4 token\u3002\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.code,{children:"doris-meta/image/VERSION"})," \u6587\u4EF6\u4E2D\u67E5\u770B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4E0D\u63D0\u4F9B\u53C2\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"code \u4E3A 0 \u8868\u793A FE \u8282\u70B9\u542F\u52A8\u6210\u529F\u3002\u975E 0 \u7684\u9519\u8BEF\u7801\u8868\u793A\u5176\u4ED6\u9519\u8BEF\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u63D0\u4F9B ",(0,s.jsx)(n.code,{children:"token"})," \u548C ",(0,s.jsx)(n.code,{children:"cluster_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"queryPort": 9030,\n		"rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n		"maxReplayedJournal": 17287\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"queryPort"})," \u662F FE \u8282\u70B9\u7684 MySQL \u534F\u8BAE\u7AEF\u53E3\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rpcPort"})," \u662F FE \u8282\u70B9\u7684 thrift RPC \u7AEF\u53E3\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxReplayedJournal"})," \u8868\u793A FE \u8282\u70B9\u5F53\u524D\u56DE\u653E\u7684\u6700\u5927\u5143\u6570\u636E\u65E5\u5FD7 id\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arrowFlightSqlPort"})," \u662F FE \u8282\u70B9\u7684 Arrow Flight SQL \u534F\u8BAE\u7AEF\u53E3\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4E0D\u63D0\u4F9B\u53C2\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/bootstrap\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u63D0\u4F9B ",(0,s.jsx)(n.code,{children:"token"})," \u548C ",(0,s.jsx)(n.code,{children:"cluster_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"queryPort": 9030,\n		"rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n		"maxReplayedJournal": 17287\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var t=r(667294);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);