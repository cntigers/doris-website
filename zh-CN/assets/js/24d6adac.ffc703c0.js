"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["438945"],{845726:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>r,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/bin","title":"BIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/bin.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/bin","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/bin","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ATAN2","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/atan2"},"next":{"title":"SIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/sin"}}'),t=s("785893"),c=s("250065");let i={title:"BIN",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5C06\u5341\u8FDB\u5236\u6570\u5B57\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6587\u672C\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"bin(<a>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<a>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u8F6C\u6362\u7684\u5341\u8FDB\u5236\u503C"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:["\u53C2\u6570 ",(0,t.jsx)(e.code,{children:"<a>"})," \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u3002\u5F53 ",(0,t.jsx)(e.code,{children:"<a>"})," \u4E3A\u8D1F\u6570\u65F6\uFF0C\u7ED3\u679C\u4E3A\u5176 64 \u4F4D\u8865\u7801\u8868\u793A\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select bin(0);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------+\n| bin(0) |\n+--------+\n| 0      |\n+--------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select bin(-1);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------+\n| bin(-1)                                                          |\n+------------------------------------------------------------------+\n| 1111111111111111111111111111111111111111111111111111111111111111 |\n+------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select bin(123);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+----------+\n| bin(123) |\n+----------+\n| 1111011  |\n+----------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var l=s(667294);let t={},c=l.createContext(t);function i(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);