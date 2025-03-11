"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["316466"],{293674:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"admin-manual/open-api/be-http/meta","title":"\u67E5\u8BE2\u5143\u4FE1\u606F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/be-http/meta.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/meta","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/meta","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u67E5\u8BE2\u5143\u4FE1\u606F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u89E6\u53D1 Compaction","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/compaction-run"},"next":{"title":"\u505A\u5FEB\u7167","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/snapshot"}}'),i=t("785893"),s=t("250065");let r={title:"\u67E5\u8BE2\u5143\u4FE1\u606F",language:"zh-CN"},l=void 0,d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /api/meta/header/{tablet_id}?byte_to_base64={bool}"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"\u67E5\u8BE2 tablet \u5143\u4FE1\u606F"}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tablet_id"}),"\ntable \u7684 id"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"byte_to_base64"}),"\n\u662F\u5426\u6309 base64 \u7F16\u7801\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4",(0,i.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```json\n{\n    "table_id": 148107,\n    "partition_id": 148104,\n    "tablet_id": 148193,\n    "schema_hash": 2090621954,\n    "shard_id": 38,\n    "creation_time": 1673253868,\n    "cumulative_layer_point": -1,\n    "tablet_state": "PB_RUNNING",\n    ...\n}\n```\n'})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```shell\ncurl "http://127.0.0.1:8040/api/meta/header/148193&byte_to_base64=true"\n\n```\n'})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var a=t(667294);let i={},s=a.createContext(i);function r(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);