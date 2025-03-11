"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["859772"],{129495:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","title":"FIND_IN_SET","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FIND_IN_SET","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LOCATE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/locate"},"next":{"title":"REPLACE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/replace"}}'),i=s("785893"),l=s("250065");let r={title:"FIND_IN_SET",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE strlist \u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0 str \u7684\u4F4D\u7F6E\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u6570\uFF09\u3002"}),"\n",(0,i.jsx)(e.p,{children:"strlist \u662F\u7528\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE 0\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4EFB\u4E00\u53C2\u6570\u4E3A NULL\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"FIND_IN_SET ( <str> , <strlist> )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<str>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u67E5\u627E\u7684\u5B57\u7B26\u4E32"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<strlist>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u88AB\u67E5\u627E\u7684\u5B57\u7B26\u4E32"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"<str>"})," \u5728\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"<strlist>"})," \u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE 0\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4EFB\u4E00\u53C2\u6570\u4E3A NULL\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT FIND_IN_SET("b", "a,b,c")\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);