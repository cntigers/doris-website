"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["350945"],{464638:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/config-action","title":"Config Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/config-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/config-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/config-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Config Action","language":"en"}}'),r=t("785893"),a=t("250065");let s={title:"Config Action",language:"en"},o="Config Action",c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"config-action",children:"Config Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/config/fe/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Config Action is used to obtain current FE configuration information."}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"conf_item"})}),"\n",(0,r.jsx)(n.p,{children:"Optional parameters. Return specified item in FE configuration."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["Name", "Value"],\n		"rows": [{\n			"Value": "DAY",\n			"Name": "sys_log_roll_interval"\n		}, {\n			"Value": "23",\n			"Name": "consistency_check_start_time"\n		}, {\n			"Value": "4096",\n			"Name": "max_mysql_service_task_threads_num"\n		}, {\n			"Value": "1000",\n			"Name": "max_unfinished_load_job"\n		}, {\n			"Value": "100",\n			"Name": "max_routine_load_job_num"\n		}, {\n			"Value": "SYNC",\n			"Name": "master_sync_policy"\n		}]\n	},\n	"count": 0\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The returned result is the same as ",(0,r.jsx)(n.code,{children:"System Action"}),". Is a description of the table."]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(667294);let r={},a=i.createContext(r);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);