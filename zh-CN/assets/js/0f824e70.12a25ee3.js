"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["971702"],{126216:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>c,assets:()=>a,toc:()=>r,contentTitle:()=>i});var c=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/concat","title":"CONCAT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/concat.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/concat","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/concat","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CONCAT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CHAR","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/char"},"next":{"title":"CONCAT_WS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/concat-ws"}}'),s=t("785893"),o=t("250065");let l={title:"CONCAT",language:"zh-CN"},i=void 0,a={},r=[{value:"concat",id:"concat",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"concat",children:"concat"}),"\n",(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR concat(VARCHAR,...)"})}),"\n",(0,s.jsx)(e.p,{children:"\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDE\u63A5\u8D77\u6765, \u5982\u679C\u53C2\u6570\u4E2D\u4EFB\u610F\u4E00\u4E2A\u503C\u662F NULL\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F NULL"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nmysql> select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nmysql> select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"CONCAT\n"})})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var c=t(667294);let s={},o=c.createContext(s);function l(n){let e=c.useContext(o);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),c.createElement(o.Provider,{value:e},n.children)}}}]);