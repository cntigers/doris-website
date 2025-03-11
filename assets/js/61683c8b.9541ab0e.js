"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["457756"],{817732:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"admin-manual/open-api/fe-http/check-decommission-action","title":"Check Decommission Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/check-decommission-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/check-decommission-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/check-decommission-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Check Decommission Action","language":"en"}}'),t=i("785893"),o=i("250065");let c={title:"Check Decommission Action",language:"en"},r="Check Decommission Action",a={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"check-decommission-action",children:"Check Decommission Action"})}),"\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/check_decommission"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Used to determine whether the specified BE can be decommissioned. For example, after the node being decommissioned, whether the remaining nodes can meet the space requirements and the number of replicas."}),"\n",(0,t.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"host_ports"})}),"\n",(0,t.jsxs)(n.p,{children:["Specify one or more BEs, separated by commas. Such as: ",(0,t.jsx)(n.code,{children:"ip1:port1,ip2:port2,..."}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Where port is the heartbeat port of BE."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.p,{children:"Return a list of nodes that can be decommissioned"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n	"count": 0\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check whether the specified BE node can be decommissioned"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": ["192.168.10.11:9050"],\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var s=i(667294);let t={},o=s.createContext(t);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);