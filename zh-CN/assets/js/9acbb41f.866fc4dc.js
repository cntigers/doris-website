"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["688101"],{658426:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"admin-manual/be/config","title":"BE \u7684\u914D\u7F6E\u4FE1\u606F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/be/config.md","sourceDirName":"admin-manual/be","slug":"/admin-manual/be/config","permalink":"/zh-CN/docs/2.0/admin-manual/be/config","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BE \u7684\u914D\u7F6E\u4FE1\u606F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u68C0\u67E5 tablet \u6587\u4EF6\u4E22\u5931","permalink":"/zh-CN/docs/2.0/admin-manual/be/check-tablet-segment"},"next":{"title":"metrics \u4FE1\u606F","permalink":"/zh-CN/docs/2.0/admin-manual/be/metrics"}}'),l=s("785893"),a=s("250065");let i={title:"BE \u7684\u914D\u7F6E\u4FE1\u606F",language:"zh-CN"},r=void 0,c={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u67E5\u8BE2",id:"\u67E5\u8BE2",level:3},{value:"\u66F4\u65B0",id:"\u66F4\u65B0",level:3},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GET /api/show_config"}),"\n",(0,l.jsx)(n.code,{children:"POST /api/update_config?{key}={val}"})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u8BE2/\u66F4\u65B0 BE \u7684\u914D\u7F6E\u4FE1\u606F"}),"\n",(0,l.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"persist"}),"\n\u662F\u5426\u6301\u4E45\u5316\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),"\n\u914D\u7F6E\u9879\u540D\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"val"}),"\n\u914D\u7F6E\u9879\u503C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,l.jsx)(n.p,{children:"\u65E0"}),"\n",(0,l.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,l.jsx)(n.h3,{id:"\u67E5\u8BE2",children:"\u67E5\u8BE2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[["agent_task_trace_threshold_sec","int32_t","2","true"], ...]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u66F4\u65B0",children:"\u66F4\u65B0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    }\n]\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    },\n    {\n        "config_name": "enable_segcompaction",\n        "status": "BAD",\n        "msg": "set enable_segcompaction=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_segcompaction\' is not support to modify."\n    },\n    {\n        "config_name": "enable_time_lut",\n        "status": "BAD",\n        "msg": "set enable_time_lut=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_time_lut\' is not support to modify."\n    }\n]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'curl "http://127.0.0.1:8040/api/show_config"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&persist=true"\n\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&enable_merge_on_write_correctness_check=true&persist=true"\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(667294);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);