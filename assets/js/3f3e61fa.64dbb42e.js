"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["890102"],{158572:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/table-row-count-action","title":"Table Row Count Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/table-row-count-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/table-row-count-action","permalink":"/docs/admin-manual/open-api/fe-http/table-row-count-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Table Row Count Action","language":"en"},"sidebar":"docs","previous":{"title":"Table Query Plan Action","permalink":"/docs/admin-manual/open-api/fe-http/table-query-plan-action"},"next":{"title":"Table Schema Action","permalink":"/docs/admin-manual/open-api/fe-http/table-schema-action"}}'),s=t("785893"),a=t("250065");let r={title:"Table Row Count Action",language:"en"},o="Table Row Count Action",l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"table-row-count-action",children:"Table Row Count Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/<db>/<table>/_count"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Used to obtain statistics about the number of rows in a specified table. This interface is currently used in Spark-Doris-Connector. Spark obtains Doris table statistics."}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<db>"})}),"\n",(0,s.jsx)(n.p,{children:"Specify database"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<table>"})}),"\n",(0,s.jsx)(n.p,{children:"Specify table"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"data.size"})," field indicates the number of rows in the specified table."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the number of rows in the specified table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/db1/tbl1/_count\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);