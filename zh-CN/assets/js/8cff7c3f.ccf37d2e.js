"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["965445"],{209148:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/split-part","title":"SPLIT_PART","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/split-part.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/split-part","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/split-part","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SPLIT_PART","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRRIGHT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/strright"},"next":{"title":"SPLIT_BY_STRING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/split-by-string"}}'),l=s("785893"),r=s("250065");let i={title:"SPLIT_PART",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u7528\u4E8E\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u6309\u7167\u6307\u5B9A\u7684\u5206\u9694\u7B26\u62C6\u5206\u6210\u591A\u4E2A\u90E8\u5206\uFF0C\u5E76\u8FD4\u56DE\u5176\u4E2D\u7684\u4E00\u4E2A\u90E8\u5206\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SPLIT_PART ( <str>, <separator>, <part_index> )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u5206\u5272\u7684\u5B57\u7B26\u4E32"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<separator>"})}),(0,l.jsx)(e.td,{children:"\u7528\u4E8E\u5206\u5272\u7684\u5B57\u7B26\u4E32"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<part_index>"})}),(0,l.jsx)(e.td,{children:"\u8981\u8FD4\u56DE\u7684\u90E8\u5206\u7684\u7D22\u5F15\uFF0C\u4ECE 1 \u5F00\u59CB\u8BA1\u6570"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u6839\u636E\u5206\u5272\u7B26\u62C6\u5206\u540E\u7684\u5B57\u7B26\u4E32\u7684\u6307\u5B9A\u90E8\u5206\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,l.jsxs)(e.li,{children:["\u5F53",(0,l.jsx)(e.code,{children:"<part_index>"}),"\u4E3A 0 \u65F6\uFF0C\u8FD4\u56DE NULL"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select split_part("hello world", " ", 1);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT split_part('apple,banana,cherry', ',', 0);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------+\n| split_part('apple,banana,cherry', ',', 0) |\n+-------------------------------------------+\n| NULL                                      |\n+-------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);