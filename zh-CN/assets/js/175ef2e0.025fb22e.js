"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["337693"],{141125:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/extract-url-parameter","title":"EXTRACT_URL_PARAMETER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/extract-url-parameter.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/extract-url-parameter","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/extract-url-parameter","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"EXTRACT_URL_PARAMETER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CONVERT_TO","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/convert-to"},"next":{"title":"UUID","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/uuid"}}'),s=t("785893"),a=t("250065");let l={title:"EXTRACT_URL_PARAMETER",language:"zh-CN"},i=void 0,c={},o=[{value:"extract_url_parameter",id:"extract_url_parameter",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"keywords",id:"keywords",level:3}];function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"extract_url_parameter",children:"extract_url_parameter"}),"\n",(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR  extract_url_parameter(VARCHAR url, VARCHAR  name)"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE URL \u4E2D\u201Cname\u201D\u53C2\u6570\u7684\u503C\uFF08\u5982\u679C\u5B58\u5728\uFF09\u3002\u5426\u5219\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002\n\u5982\u679C\u6709\u8BB8\u591A\u5177\u6709\u6B64\u540D\u79F0\u7684\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684\u53C2\u6570\u3002\n\u6B64\u51FD\u6570\u7684\u5DE5\u4F5C\u5047\u8BBE\u53C2\u6570\u540D\u79F0\u5728 URL \u4E2D\u7684\u7F16\u7801\u65B9\u5F0F\u4E0E\u5728\u4F20\u9012\u53C2\u6570\u4E2D\u7684\u7F16\u7801\u65B9\u5F0F\u5B8C\u5168\u76F8\u540C\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> SELECT extract_url_parameter (\"http://doris.apache.org?k1=aa&k2=bb&test=cc#999\", \"k2\");\n+--------------------------------------------------------------------------------+\n| extract_url_parameter('http://doris.apache.org?k1=aa&k2=bb&test=cc#999', 'k2') |\n+--------------------------------------------------------------------------------+\n| bb                                                                             |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u60F3\u83B7\u53D6 URL \u4E2D\u7684\u5176\u4ED6\u90E8\u5206\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,s.jsx)(n.a,{href:"../string-functions/parse-url",children:"parse_url"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"EXTRACT URL PARAMETER\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);