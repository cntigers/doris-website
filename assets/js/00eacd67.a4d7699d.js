"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["723665"],{150396:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>s,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/connection-action","title":"Connection Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/connection-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/connection-action","permalink":"/docs/admin-manual/open-api/fe-http/connection-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Connection Action","language":"en"},"sidebar":"docs","previous":{"title":"Check Storage Type Action","permalink":"/docs/admin-manual/open-api/fe-http/check-storage-type-action"},"next":{"title":"Extra Basepath Action","permalink":"/docs/admin-manual/open-api/fe-http/extra-basepath-action"}}'),o=t("785893"),c=t("250065");let a={title:"Connection Action",language:"en"},r="Connection Action",s={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"connection-action",children:"Connection Action"})}),"\n",(0,o.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /api/connection"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Given a connection id, return the query id that is currently being executed for this connection or the last execution completed."}),"\n",(0,o.jsxs)(n.p,{children:["The connection id can be viewed through the id column in the MySQL command ",(0,o.jsx)(n.code,{children:"show processlist;"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,o.jsx)(n.p,{children:"\u65E0"}),"\n",(0,o.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"connection_id"})}),"\n",(0,o.jsx)(n.p,{children:"Specified connection id"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n	},\n	"count": 0\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Get the query id of the specified connection id"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'GET /api/connection?connection_id=101\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let o={},c=i.createContext(o);function a(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);