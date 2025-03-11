"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["290036"],{434868:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>r,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"admin-manual/open-api/fe-http/cancel-load-action","title":"Cancel Load Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/cancel-load-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/cancel-load-action","permalink":"/docs/admin-manual/open-api/fe-http/cancel-load-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Cancel Load Action","language":"en"},"sidebar":"docs","previous":{"title":"Bootstrap Action","permalink":"/docs/admin-manual/open-api/fe-http/bootstrap-action"},"next":{"title":"Check Decommission Action","permalink":"/docs/admin-manual/open-api/fe-http/check-decommission-action"}}'),t=a("785893"),i=a("250065");let s={title:"Cancel Load Action",language:"en"},c="Cancel Load Action",r={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cancel-load-action",children:"Cancel Load Action"})}),"\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /api/<db>/_cancel"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Used to cancel the load transaction of the specified label.\nRETURN VALUES\nReturn a JSON format string:\nStatus:\nSuccess: cancel succeed\nOthers: cancel failed\nMessage: Error message if cancel failed"}),"\n",(0,t.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"<db>"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the database name"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"<label>"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the load label"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cancel success"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cancel failed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n	"msg": "Error msg...",\n	"code": 1,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cancel the load transaction of the specified label"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return s}});var l=a(667294);let t={},i=l.createContext(t);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);