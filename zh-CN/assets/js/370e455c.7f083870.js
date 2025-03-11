"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328897"],{702370:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/ends-with","title":"ENDS_WITH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/ends-with.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/ends-with","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/ends-with","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ENDS_WITH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"APPEND_TRAILING_CHAR_IF_ABSENT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent"},"next":{"title":"STARTS_WITH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/starts-with"}}'),i=s("785893"),l=s("250065");let r={title:"ENDS_WITH",language:"zh-CN"},o=void 0,d={},c=[{value:"ends_with",id:"ends_with",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"ends_with",children:"ends_with"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BOOLEAN ENDS_WITH(VARCHAR str, VARCHAR suffix)"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u5B57\u7B26\u4E32\u4EE5\u6307\u5B9A\u540E\u7F00\u7ED3\u5C3E\uFF0C\u8FD4\u56DEtrue\u3002\u5426\u5219\uFF0C\u8FD4\u56DEfalse\u3002\u4EFB\u610F\u53C2\u6570\u4E3ANULL\uFF0C\u8FD4\u56DENULL\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select ends_with(\"Hello doris\", \"doris\");\n+-----------------------------------+\n| ends_with('Hello doris', 'doris') |\n+-----------------------------------+\n|                                 1 | \n+-----------------------------------+\n\nmysql> select ends_with(\"Hello doris\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello doris', 'Hello') |\n+-----------------------------------+\n|                                 0 | \n+-----------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"ENDS_WITH\n"})})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);