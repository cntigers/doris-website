"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["872499"],{659072:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp-replace-one","title":"REGEXP_REPLACE_ONE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"REGEXP_REPLACE_ONE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP_REPLACE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace"},"next":{"title":"STRUCT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/struct-functions/struct"}}'),r=s("785893"),l=s("250065");let i={title:"REGEXP_REPLACE_ONE",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u5B57\u7B26\u4E32 STR \u8FDB\u884C\u6B63\u5219\u5339\u914D, \u5C06\u547D\u4E2D pattern \u7684\u90E8\u5206\u4F7F\u7528 repl \u6765\u8FDB\u884C\u66FF\u6362\uFF0C\u4EC5\u66FF\u6362\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"\\p{Han}"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REGEXP_REPLACE_ONE(<str>, <pattern>, <repl>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u8FDB\u884C\u6B63\u5219\u5339\u914D\u7684\u5217\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pattern>"})}),(0,r.jsx)(n.td,{children:"\u76EE\u6807\u6A21\u5F0F\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<repl>"})}),(0,r.jsx)(n.td,{children:"\u7528\u4E8E\u66FF\u6362\u5339\u914D\u6A21\u5F0F\u7684\u5B57\u7B26\u4E32\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.p,{children:["\u66FF\u6362\u4E4B\u540E\u7684\u7ED3\u679C\uFF0C\u7C7B\u578B\u662F ",(0,r.jsx)(n.code,{children:"Varchar"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_replace_one('a b c', ' ', '-');\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b', '(b)', '<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n\nmysql> select regexp_replace_one('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\\\p{Han}', '123');\n+------------------------------------------------------------------------------------------------+\n| regexp_replace_one('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\p{Han}', '123')       |\n+------------------------------------------------------------------------------------------------+\n| 123\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567                                              |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);