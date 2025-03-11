"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["647384"],{538106:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"admin-manual/fe/query-detail-action","title":"Query Detail Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/fe/query-detail-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/query-detail-action","permalink":"/docs/2.0/admin-manual/fe/query-detail-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Query Detail Action","language":"en"},"sidebar":"docs","previous":{"title":"Profile Action","permalink":"/docs/2.0/admin-manual/fe/profile-action"},"next":{"title":"Query Schema Action","permalink":"/docs/2.0/admin-manual/fe/query-schema-action"}}'),a=t("785893"),r=t("250065");let s={title:"Query Detail Action",language:"en"},l="Query Detail Action",d={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"query-detail-action",children:"Query Detail Action"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/query_detail"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Used to obtain information about all queries after a specified time point"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"event_time"})}),"\n",(0,a.jsx)(n.p,{children:"At the specified time point (Unix timestamp, in milliseconds), obtain query information after that time point."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"query_details": [{\n			"eventTime": 1596462699216,\n			"queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n			"startTime": 1596462698969,\n			"endTime": 1596462699216,\n			"latency": 247,\n			"state": "FINISHED",\n			"database": "db1",\n			"sql": "select * from tbl1"\n		}, {\n			"eventTime": 1596463013929,\n			"queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n			"startTime": 1596463013913,\n			"endTime": 1596463013929,\n			"latency": 16,\n			"state": "FINISHED",\n			"database": "db1",\n			"sql": "select k1 from tbl1"\n		}]\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Get query details after the specified time point."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"query_details": [{\n			"eventTime": 1596462699216,\n			"queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n			"startTime": 1596462698969,\n			"endTime": 1596462699216,\n			"latency": 247,\n			"state": "FINISHED",\n			"database": "db1",\n			"sql": "select * from tbl1"\n		}, {\n			"eventTime": 1596463013929,\n			"queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n			"startTime": 1596463013913,\n			"endTime": 1596463013929,\n			"latency": 16,\n			"state": "FINISHED",\n			"database": "db1",\n			"sql": "select k1 from tbl1"\n		}]\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(667294);let a={},r=i.createContext(a);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);