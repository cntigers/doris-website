"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["185081"],{386205:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/mask-first-n","title":"MASK_FIRST_N","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/mask-first-n.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/mask-first-n","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/mask-first-n","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MASK_FIRST_N","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MASK","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/mask"},"next":{"title":"MASK_LAST_N","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/mask-last-n"}}'),l=s("785893"),i=s("250065");let r={title:"MASK_FIRST_N",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["MASK_FIRST_N \u51FD\u6570\u4E3B\u8981\u4F5C\u7528\u662F\u5BF9\u6570\u636E\u7684\u524D N \u4E2A\u5B57\u8282\u8FDB\u884C\u5C4F\u853D\uFF0C\u4EE5\u4FDD\u62A4\u654F\u611F\u4FE1\u606F\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u8131\u654F\u573A\u666F\u3002\u5176\u884C\u4E3A\u662F\u5C06\u524D N \u4E2A\u5B57\u8282\u4E2D\u7684\u5927\u5199\u5B57\u6BCD\u66FF\u6362\u4E3A",(0,l.jsx)(e.code,{children:"X"}),"\uFF0C\u5C0F\u5199\u5B57\u6BCD\u66FF\u6362\u4E3A",(0,l.jsx)(e.code,{children:"x"}),"\uFF0C\u6570\u5B57\u66FF\u6362\u4E3A",(0,l.jsx)(e.code,{children:"n"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MASK_FIRST_N( <str> [, <n> ])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8131\u654F\u7684\u6570\u636E"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<n>"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\u53C2\u6570\uFF0C\u9650\u5236\u53EA\u8BA9\u524D N \u4E2A\u5B57\u8282\u8FDB\u884C\u6570\u636E\u5C4F\u853D\uFF0C\u9ED8\u8BA4\u662F\u5BF9\u6574\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u6570\u636E\u5C4F\u853D"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u524D N \u4E2A\u5B57\u8282\u4E2D\uFF0C\u5B57\u6BCD\u548C\u6570\u5B57\u88AB\u66FF\u6362\u540E\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,l.jsx)(e.li,{children:"\u975E\u5B57\u6BCD\u548C\u6570\u5B57\u4F1A\u539F\u6837\u8FD4\u56DE"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select mask_first_n("1234-5678-8765-4321", 4);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------------------------+\n| mask_first_n('1234-5678-8765-4321', 4) |\n+----------------------------------------+\n| nnnn-5678-8765-4321                    |\n+----------------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select mask_first_n("1234-5678-8765-4321", null);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------+\n| mask_first_n('1234-5678-8765-4321', NULL) |\n+-------------------------------------------+\n| NULL                                      |\n+-------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);