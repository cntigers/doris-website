"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["165441"],{929317:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","title":"REPLACE_EMPTY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace-empty","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REPLACE_EMPTY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REPLACE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/replace"},"next":{"title":"STRLEFT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/strleft"}}'),c=s("785893"),r=s("250065");let t={title:"REPLACE_EMPTY",language:"zh-CN"},i=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(e.p,{children:["REPLACE_EMPTY \u51FD\u6570\u7528\u4E8E\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u90E8\u5206\u5B57\u7B26\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\u3002\u548C ",(0,c.jsx)(e.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/repeat",children:"REPLACE"})," \u51FD\u6570\u4E0D\u540C\u7684\u662F\uFF0C\u5F53 ",(0,c.jsx)(e.code,{children:"old"})," \u4E3A\u7A7A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F1A\u5C06 ",(0,c.jsx)(e.code,{children:"new"})," \u5B57\u7B26\u4E32\u63D2\u5165\u5230 ",(0,c.jsx)(e.code,{children:"str"})," \u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\u524D\uFF0C\u4EE5\u53CA ",(0,c.jsx)(e.code,{children:"str"})," \u5B57\u7B26\u4E32\u7684\u6700\u540E\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u9664\u6B64\u4E4B\u5916\uFF0C\u5176\u4ED6\u884C\u4E3A\u548C ",(0,c.jsx)(e.code,{children:"REPLACE()"})," \u51FD\u6570\u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8BE5\u51FD\u6570\u4E3B\u8981\u7528\u4E8E\u517C\u5BB9 Presto\u3001Trino\uFF0C\u5176\u884C\u4E3A\u4E86 Presto\u3001Trino \u4E2D\u7684 ",(0,c.jsx)(e.code,{children:"REPLACE()"})," \u51FD\u6570\u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u81EA 2.1.5 \u7248\u672C\u652F\u6301\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"REPLACE_EMPTY ( <str>, <old>, <new> )\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<str>"})}),(0,c.jsx)(e.td,{children:"\u9700\u8981\u88AB\u66FF\u6362\u7684\u5B57\u7B26\u4E32"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<old>"})}),(0,c.jsxs)(e.td,{children:["\u9700\u8981\u88AB\u66FF\u6362\u6389\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u5982\u679C",(0,c.jsx)(e.code,{children:"<old>"}),"\u4E0D\u5728",(0,c.jsx)(e.code,{children:"<str>"}),"\u4E2D\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u66FF\u6362\uFF0C\u5982\u679C ",(0,c.jsx)(e.code,{children:"<old>"})," \u4E3A\u7A7A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F1A\u5C06 ",(0,c.jsx)(e.code,{children:"<new>"})," \u5B57\u7B26\u4E32\u63D2\u5165\u5230 ",(0,c.jsx)(e.code,{children:"<str>"})," \u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\u524D"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<new>"})}),(0,c.jsxs)(e.td,{children:["\u7528\u4E8E\u66FF\u6362 ",(0,c.jsx)(e.code,{children:"<old>"})," \u7684\u65B0\u5B50\u5B57\u7B26\u4E32"]})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u8FD4\u56DE\u66FF\u6362\u6389\u5B50\u5B57\u7B26\u4E32\u540E\u7684\u65B0\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679C ",(0,c.jsx)(e.code,{children:"old"})," \u4E3A\u7A7A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5219\u8FD4\u56DE\u5C06 ",(0,c.jsx)(e.code,{children:"new"})," \u5B57\u7B26\u4E32\u63D2\u5165\u5230 ",(0,c.jsx)(e.code,{children:"str"})," \u5B57\u7B26\u4E32\u7684\u6BCF\u4E2A\u5B57\u7B26\u524D\u7684\u5B57\u7B26\u4E32"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT replace('hello world', 'world', 'universe');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------+\n| replace('hello world', 'world', 'universe') |\n+---------------------------------------------+\n| hello universe                              |\n+---------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT replace_empty(\"abc\", '', 'xyz');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| replace_empty('abc', '', 'xyz') |\n+---------------------------------+\n| xyzaxyzbxyzcxyz                 |\n+---------------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'SELECT replace_empty("", "", "xyz");\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| replace_empty('', '', 'xyz') |\n+------------------------------+\n| xyz                          |\n+------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return t}});var l=s(667294);let c={},r=l.createContext(c);function t(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);