"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["258014"],{637624:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/trim","title":"TRIM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/trim.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/trim","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/trim","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TRIM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STARTS_WITH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/starts-with"},"next":{"title":"LTRIM","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/ltrim"}}'),i=t("785893"),r=t("250065");let l={title:"TRIM",language:"zh-CN"},o=void 0,c={},a=[{value:"trim",id:"trim",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"trim",children:"trim"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR trim(VARCHAR str[, VARCHAR rhs])"})}),"\n",(0,i.jsx)(e.p,{children:"\u5F53\u6CA1\u6709rhs\u53C2\u6570\u65F6\uFF0C\u5C06\u53C2\u6570 str \u4E2D\u53F3\u4FA7\u548C\u5DE6\u4FA7\u5F00\u59CB\u90E8\u5206\u8FDE\u7EED\u51FA\u73B0\u7684\u7A7A\u683C\u53BB\u6389\uFF0C\u5426\u5219\u53BB\u6389rhs"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT trim('   ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT trim('ababccaab','ab') str;\n+------+\n| str  |\n+------+\n| cca  |\n+------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"TRIM\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);