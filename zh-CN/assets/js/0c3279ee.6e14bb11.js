"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["435423"],{96310:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>c,assets:()=>l,toc:()=>o,contentTitle:()=>a});var c=JSON.parse('{"id":"admin-manual/open-api/be-http/check-rpc-channel","title":"\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/be-http/check-rpc-channel.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/check-rpc-channel","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/check-rpc-channel","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Statistic Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/statistic-action"},"next":{"title":"\u91CD\u7F6E\u8FDE\u63A5\u7F13\u5B58","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/reset-rpc-channel"}}'),r=t("785893"),s=t("250065");let i={title:"\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58",language:"zh-CN"},a="\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58",l={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58",children:"\u68C0\u67E5\u8FDE\u63A5\u7F13\u5B58"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u7528\u4E8E\u68C0\u67E5 brpc \u7684\u8FDE\u63A5\u7F13\u5B58\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"host_to_check"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u67E5\u68C0\u7684 IP\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"remot_brpc_port"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u67E5\u68C0\u7684\u7AEF\u53E3\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"payload_size"})}),"\n",(0,r.jsx)(n.p,{children:"\u8D1F\u8F7D\u5927\u5C0F\uFF0C\u5355\u4F4D B\uFF0C\u53D6\u503C\u8303\u56F4 1~1024000\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\n{\n    "msg":"success",\n    "code":0,\n    "data": "open brpc connection to {host_to_check}:{remot_brpc_port} success.",\n    "count":0\n}\n```\n'})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"```\ncurl http://127.0.0.1:8040/api/check_rpc_channel/127.0.0.1/8060/1024000\n```\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var c=t(667294);let r={},s=c.createContext(r);function i(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);