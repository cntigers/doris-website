"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["302361"],{560400:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"admin-manual/fe/show-runtime-info-action","title":"Show Runtime Info Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/show-runtime-info-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/show-runtime-info-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-runtime-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Show Runtime Info Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Show Proc Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-proc-action"},"next":{"title":"Show Table Data Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-table-data-action"}}'),s=t("785893"),r=t("250065");let a={title:"Show Runtime Info Action",language:"zh-CN"},o=void 0,l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/show_runtime_info"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6 FE JVM \u7684 Runtime \u4FE1\u606F"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"free_mem": "855642056",\n		"total_mem": "1037959168",\n		"thread_cnt": "98",\n		"max_mem": "1037959168"\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u5F53\u524D FE \u8282\u70B9\u7684 JVM \u4FE1\u606F"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/show_runtime_info\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"free_mem": "855642056",\n		"total_mem": "1037959168",\n		"thread_cnt": "98",\n		"max_mem": "1037959168"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);