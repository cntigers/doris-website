"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["103642"],{549855:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/set-config-action","title":"Set Config Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/set-config-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/set-config-action","permalink":"/docs/admin-manual/open-api/fe-http/set-config-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Set Config Action","language":"en"},"sidebar":"docs","previous":{"title":"Row Count Action","permalink":"/docs/admin-manual/open-api/fe-http/row-count-action"},"next":{"title":"Show Data Action","permalink":"/docs/admin-manual/open-api/fe-http/show-data-action"}}'),s=t("785893"),r=t("250065");let o={title:"Set Config Action",language:"en"},a="Set Config Action",c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"set-config-action",children:"Set Config Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/_set_config"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Used to dynamically set the configuration of FE. This command is passed through the ",(0,s.jsx)(n.code,{children:"ADMIN SET FRONTEND CONFIG"})," command. But this command will only set the configuration of the corresponding FE node. And it will not automatically forward the ",(0,s.jsx)(n.code,{children:"MasterOnly"})," configuration item to the Master FE node."]}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"confkey1=confvalue1"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the configuration name to be set, and its value is the configuration value to be modified."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"persist"})}),"\n",(0,s.jsxs)(n.p,{children:["Whether to persist the modified configuration. The default is false, which means it is not persisted. If it is true, the modified configuration item will be written into the ",(0,s.jsx)(n.code,{children:"fe_custom.conf"})," file and will still take effect after FE is restarted."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"reset_persist"}),"\nWhether or not to clear the original persist configuration only takes effect when the persist parameter is true. For compatibility with the original version, reset_persist defaults to true.",(0,s.jsx)(n.br,{}),"\nIf persist is set to true and reset_persist is not set or reset_persist is true, the configuration in the ",(0,s.jsx)(n.code,{children:"fe_custom.conf"})," file will be cleared before this modified configuration is written to ",(0,s.jsx)(n.code,{children:"fe_custom.conf"}),".",(0,s.jsx)(n.br,{}),"\nIf persist is set to true and reset_persist is false, this modified configuration item will be incrementally added to ",(0,s.jsx)(n.code,{children:"fe_custom.conf"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"set": {\n			"key": "value"\n		},\n		"err": [\n			{\n		       "config_name": "",\n		       "config_value": "",\n		       "err_info": ""\n		    }\n		],\n		"persist":""\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"set"})," field indicates the successfully set configuration. The ",(0,s.jsx)(n.code,{children:"err"})," field indicates the configuration that failed to be set. The ",(0,s.jsx)(n.code,{children:"persist"})," field indicates persistent information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the values of ",(0,s.jsx)(n.code,{children:"storage_min_left_capacity_bytes"}),", ",(0,s.jsx)(n.code,{children:"replica_ack_policy"})," and ",(0,s.jsx)(n.code,{children:"agent_task_resend_wait_time_ms"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes  Successfully;    \nreplica_ack_policy  Failed, because the configuration item does not support dynamic modification.  \nagent_task_resend_wait_time_ms  Failed, failed to set the boolean type because the configuration item is of type long.\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"max_bytes_per_broker_scanner"})," and persist it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The fe/conf directory generates the fe_custom.conf file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);