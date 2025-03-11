"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328673"],{200385:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/meta-info-action-V2","title":"Meta Info Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/meta-info-action-V2.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/meta-info-action-V2","permalink":"/docs/admin-manual/open-api/fe-http/meta-info-action-V2","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Meta Info Action","language":"en"},"sidebar":"docs","previous":{"title":"Import Action","permalink":"/docs/admin-manual/open-api/fe-http/import-action"},"next":{"title":"Debug Point","permalink":"/docs/admin-manual/open-api/fe-http/debug-point-action"}}'),i=t("785893"),s=t("250065");let r={title:"Meta Info Action",language:"en"},o="Meta Info Action",l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"meta-info-action",children:"Meta Info Action"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns>/databases"}),"\n",(0,i.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns>/databases/<db>/tables"}),"\n",(0,i.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns>/databases/<db>/tables/<tbl>/schema"})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Used to obtain metadata information about the cluster, including the database list, table list, and table schema."}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ns"})}),"\n",(0,i.jsx)(n.p,{children:"Specify cluster name."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"db"})}),"\n",(0,i.jsx)(n.p,{children:"Specify database name."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tbl"})}),"\n",(0,i.jsx)(n.p,{children:"Specify table name."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "msg":"success",\n    "code":0,\n    "data":["database list" / "table list" / "table schema"],\n    "count":0\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var a=t(667294);let i={},s=a.createContext(i);function r(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);