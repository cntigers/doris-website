"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["613646"],{783832:function(n,e,r){r.r(e),r.d(e,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>i,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-popback","title":"ARRAY_POPBACK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-popback.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-popback","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-popback","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_POPBACK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE_UNIQ","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-enumerate-uniq"},"next":{"title":"ARRAY_POPFRONT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-popfront"}}'),t=r("785893"),s=r("250065");let o={title:"ARRAY_POPBACK",language:"zh-CN"},l=void 0,c={},i=[{value:"array_popback",id:"array_popback",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_popback",children:"array_popback"}),"\n",(0,t.jsx)(e.p,{children:"array_popback"}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"ARRAY<T> array_popback(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u79FB\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u540E\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array_popback(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popback(ARRAY('test', NULL, 'value'))         |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,POPBACK,ARRAY_POPBACK"})]})}function p(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return o}});var a=r(667294);let t={},s=a.createContext(t);function o(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);