"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["156175"],{794320:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-small-file","title":"Get Small File Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/get-small-file.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-small-file","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-small-file","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get Small File Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Get FE log file","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-log-file-action"},"next":{"title":"Health Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/health-action"}}'),l=t("785893"),s=t("250065");let a={title:"Get Small File Action",language:"zh-CN"},r=void 0,o={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET /api/get_small_file"})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7\u6587\u4EF6 id\uFF0C\u4E0B\u8F7D\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u7684\u6587\u4EF6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,l.jsx)(n.p,{children:"\u65E0"}),"\n",(0,l.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"token"})}),"\n",(0,l.jsxs)(n.p,{children:["\u96C6\u7FA4\u7684 token\u3002\u53EF\u4EE5\u5728 ",(0,l.jsx)(n.code,{children:"doris-meta/image/VERSION"})," \u6587\u4EF6\u4E2D\u67E5\u770B\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"file_id"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A\u7684\u6587\u4EF6 id\u3002\u6587\u4EF6 id \u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SHOW FILE"})," \u547D\u4EE4\u67E5\u770B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,l.jsx)(n.p,{children:"\u65E0"}),"\n",(0,l.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u6709\u9519\u8BEF\uFF0C\u5219\u8FD4\u56DE\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n	"msg": "File not found or is not content",\n	"code": 1,\n	"data": null,\n	"count": 0\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4E0B\u8F7D\u6307\u5B9A id \u7684\u6587\u4EF6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GET /api/get_small_file?token=98e8c0a6-3a41-48b8-a72b-0432e42a7fe5&file_id=11002\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);