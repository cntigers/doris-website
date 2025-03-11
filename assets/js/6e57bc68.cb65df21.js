"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["196075"],{794970:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/query-profile-action-controller","title":"Query Profile Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/query-profile-action-controller.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/query-profile-action-controller","permalink":"/docs/admin-manual/open-api/fe-http/query-profile-action-controller","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Query Profile Action","language":"en"},"sidebar":"docs","previous":{"title":"Logout Action","permalink":"/docs/admin-manual/open-api/fe-http/logout-action"},"next":{"title":"Session Action","permalink":"/docs/admin-manual/open-api/fe-http/session-action"}}'),i=r("785893"),s=r("250065");let o={title:"Query Profile Action",language:"en"},l="Query Profile Action",a={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"query-profile-action",children:"Query Profile Action"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/query_profile/<query_id>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The Query Profile Action is used to obtain the Query profile."}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<query_id>"})}),"\n",(0,i.jsx)(n.p,{children:"Optional parameters. When not specified, the latest query list is returned. When specified, return the profile of the specified query."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Not specify ",(0,i.jsx)(n.code,{children:"<query_id>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /rest/v1/query_profile/\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"href_column": ["Query ID"],\n		"column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n		"rows": [{\n			"User": "root",\n			"__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n			"Query Type": "Query",\n			"Total": "5ms",\n			"Default Db": "default_cluster:db1",\n			"Sql Statement": "select * from tbl1",\n			"Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n			"Start Time": "2020-09-03 10:07:54",\n			"Query State": "EOF",\n			"End Time": "2020-09-03 10:07:54"\n		}, {\n			"User": "root",\n			"__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n			"Query Type": "Query",\n			"Total": "6ms",\n			"Default Db": "default_cluster:db1",\n			"Sql Statement": "select * from tbl1",\n			"Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n			"Start Time": "2020-09-03 10:07:54",\n			"Query State": "EOF",\n			"End Time": "2020-09-03 10:07:54"\n		}]\n	},\n	"count": 3\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The returned result is the same as ",(0,i.jsx)(n.code,{children:"System Action"}),", which is a table description."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Specify ",(0,i.jsx)(n.code,{children:"<query_id>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /rest/v1/query_profile/<query_id>\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n	"count": 0\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"data"})," is the text content of the profile."]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);