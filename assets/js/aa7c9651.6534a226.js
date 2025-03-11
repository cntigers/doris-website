"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["805659"],{394968:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/ha-action","title":"HA Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/ha-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/ha-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/ha-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HA Action","language":"en"}}'),r=t("785893"),o=t("250065");let s={title:"HA Action",language:"en"},i="HA Action",l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ha-action",children:"HA Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/ha\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"HA Action is used to obtain the high availability group information of the FE cluster."}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"Observernodes": [],\n		"CurrentJournalId": [{\n			"Value": 433648,\n			"Name": "FrontendRole"\n		}],\n		"Electablenodes": [{\n			"Value": "host1",\n			"Name": "host1"\n		}],\n		"allowedFrontends": [{\n			"Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n			"Name": "192.168.1.1_9213_1597652404352"\n		}],\n		"removedFrontends": [],\n		"CanRead": [{\n			"Value": true,\n			"Name": "Status"\n		}],\n		"databaseNames": [{\n			"Value": "433436 ",\n			"Name": "DatabaseNames"\n		}],\n		"FrontendRole": [{\n			"Value": "MASTER",\n			"Name": "FrontendRole"\n		}],\n		"CheckpointInfo": [{\n			"Value": 433435,\n			"Name": "Version"\n		}, {\n			"Value": "2020-09-03T02:07:37.000+0000",\n			"Name": "lastCheckPointTime"\n		}]\n	},\n	"count": 0\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var a=t(667294);let r={},o=a.createContext(r);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);