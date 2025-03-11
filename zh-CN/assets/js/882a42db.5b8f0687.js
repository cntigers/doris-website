"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["13526"],{309633:function(n,e,a){a.r(e),a.d(e,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-last","title":"ARRAY_LAST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-last.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-last","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-last","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_LAST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_FIRST","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-first"},"next":{"title":"ARRAYS_OVERLAP","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/arrays-overlap"}}'),s=a("785893"),l=a("250065");let t={title:"ARRAY_LAST",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528\u4E00\u4E2A lambda \u8868\u8FBE\u5F0F\u548C\u4E00\u4E2A ARRAY \u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0Clambda \u8868\u8FBE\u5F0F\u4E3A\u5E03\u5C14\u578B\uFF0C\u7528\u4E8E\u5BF9 ARRAY \u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u5224\u65AD\u8FD4\u56DE\u503C\u3002\n\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7684\u6700\u540E\u4E00\u4E2A lambda(arr1[i]) \u503C\u4E0D\u4E3A 0 \u7684\u5143\u7D20\u3002\u5F53\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u8FDB\u884C lambda(arr1[i]) \u90FD\u4E3A 0 \u65F6\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,s.jsx)(e.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ARRAY_LAST(<lambda>, <arr>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<lambda>"})}),(0,s.jsx)(e.td,{children:"lambda \u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<arr>"})}),(0,s.jsx)(e.td,{children:"ARRAY \u6570\u7EC4"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u503C\u6700\u540E\u4E0D\u4E3A 0 \u7684\u7D22\u5F15\u3002\u5982\u679C\u6CA1\u627E\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u7D22\u5F15\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array_last(x->x>2, [1,2,3,0]) ;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array_last(x->x>4, [1,2,3,0]) ; \n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return t}});var r=a(667294);let s={},l=r.createContext(s);function t(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);