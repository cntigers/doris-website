"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["41329"],{895873:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/connection-action","title":"Connection Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/connection-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/connection-action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/connection-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Connection Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Check Storage Type Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/check-storage-type-action"},"next":{"title":"Extra Basepath Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/extra-basepath-action"}}'),o=t("785893"),c=t("250065");let a={title:"Connection Action",language:"zh-CN"},s=void 0,r={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /api/connection"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"\u7ED9\u5B9A\u4E00\u4E2A connection id\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u8FDE\u63A5\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\uFF0C\u6216\u6700\u540E\u4E00\u6B21\u6267\u884C\u5B8C\u6210\u7684 query id\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["connection id \u53EF\u4EE5\u901A\u8FC7 MySQL \u547D\u4EE4 ",(0,o.jsx)(n.code,{children:"show processlist;"})," \u4E2D\u7684 id \u5217\u67E5\u770B\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,o.jsx)(n.p,{children:"\u65E0"}),"\n",(0,o.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"connection_id"})}),"\n",(0,o.jsx)(n.p,{children:"\u6307\u5B9A\u7684 connection id"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,o.jsx)(n.p,{children:"\u65E0"}),"\n",(0,o.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n	},\n	"count": 0\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A connection id \u7684 query id"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'GET /api/connection?connection_id=101\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(667294);let o={},c=i.createContext(o);function a(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);