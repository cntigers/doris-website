"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["795057"],{833175:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/meta-info-action","title":"Meta Info Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/meta-info-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/meta-info-action","permalink":"/docs/admin-manual/open-api/fe-http/meta-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Meta Info Action","language":"en"},"sidebar":"docs","previous":{"title":"Health Action","permalink":"/docs/admin-manual/open-api/fe-http/health-action"},"next":{"title":"Meta Replay State Action","permalink":"/docs/admin-manual/open-api/fe-http/meta-replay-state-action"}}'),a=s("785893"),i=s("250065");let l={title:"Meta Info Action",language:"en"},r="Meta Action",d={},c=[{value:"List Database",id:"list-database",level:2},{value:"Request",id:"request",level:3},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"List Table",id:"list-table",level:2},{value:"Request",id:"request-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Schema Info",id:"schema-info",level:2},{value:"Request",id:"request-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3}];function o(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"meta-action",children:"Meta Action"})}),"\n",(0,a.jsx)(n.p,{children:"Meta Info Action is used to obtain metadata information in the cluster. Such as database list, table structure, etc."}),"\n",(0,a.jsx)(n.h2,{id:"list-database",children:"List Database"}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns_name>/databases\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get a list of all database names, arranged in alphabetical order."}),"\n",(0,a.jsx)(n.h3,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"limit"})}),"\n",(0,a.jsx)(n.p,{children:"Limit the number of result rows returned"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"offset"})}),"\n",(0,a.jsxs)(n.p,{children:["Pagination information, need to be used with ",(0,a.jsx)(n.code,{children:"limit"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": [\n	   "db1", "db2", "db3", ...  \n	],\n	"count": 3\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The data field returns a list of database names."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"list-table",children:"List Table"}),"\n",(0,a.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get a list of tables in the specified database, arranged in alphabetical order."}),"\n",(0,a.jsx)(n.h3,{id:"path-parameters-1",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db_name>"})}),"\n",(0,a.jsx)(n.p,{children:"Specify database"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"query-parameters-1",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"limit"})}),"\n",(0,a.jsx)(n.p,{children:"Limit the number of result rows returned"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"offset"})}),"\n",(0,a.jsxs)(n.p,{children:["Pagination information, need to be used with ",(0,a.jsx)(n.code,{children:"limit"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"request-body-1",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": [\n	   "tbl1", "tbl2", "tbl3", ...  \n	],\n	"count": 0\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The data field returns a list of table names."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"schema-info",children:"Schema Info"}),"\n",(0,a.jsx)(n.h3,{id:"request-2",children:"Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get the table structure information of the specified table in the specified database."}),"\n",(0,a.jsx)(n.h3,{id:"path-parameters-2",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db_name>"})}),"\n",(0,a.jsx)(n.p,{children:"Specify the database name"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<tbl_name>"})}),"\n",(0,a.jsx)(n.p,{children:"Specify table name"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"query-parameters-2",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"with_mv"})}),"\n",(0,a.jsx)(n.p,{children:"Optional. If not specified, the table structure of the base table is returned by default. If specified, all rollup index will also be returned."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"request-body-2",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h3,{id:"response-2",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl1": {\n			"schema": [{\n					"Field": "k1",\n					"Type": "INT",\n					"Null": "Yes",\n					"Extra": "",\n					"Default": null,\n					"Key": "true"\n				},\n				{\n					"Field": "k2",\n					"Type": "INT",\n					"Null": "Yes",\n					"Extra": "",\n					"Default": null,\n					"Key": "true"\n				}\n			],\n			"is_base": true\n		}\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl1": {\n			"schema": [{\n					"Field": "k1",\n					"Type": "INT",\n					"Null": "Yes",\n					"Extra": "",\n					"Default": null,\n					"Key": "true"\n				},\n				{\n					"Field": "k2",\n					"Type": "INT",\n					"Null": "Yes",\n					"Extra": "",\n					"Default": null,\n					"Key": "true"\n				}\n			],\n			"is_base": true\n		},\n		"rollup1": {\n			"schema": [{\n				"Field": "k1",\n				"Type": "INT",\n				"Null": "Yes",\n				"Extra": "",\n				"Default": null,\n				"Key": "true"\n			}],\n			"is_base": false\n		}\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The data field returns the table structure information of the base table or rollup table."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);