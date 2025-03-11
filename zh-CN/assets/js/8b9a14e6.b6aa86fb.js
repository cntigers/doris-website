"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["155233"],{345300:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace-one","title":"REGEXP_REPLACE_ONE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace-one.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace-one","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace-one","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP_REPLACE_ONE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP_REPLACE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace"},"next":{"title":"DIGITAL_MASKING","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking"}}'),t=s("785893"),r=s("250065");let i={title:"REGEXP_REPLACE_ONE",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5BF9\u5B57\u7B26\u4E32 STR \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u5C06\u547D\u4E2D pattern \u7684\u90E8\u5206\u4F7F\u7528 repl \u6765\u8FDB\u884C\u66FF\u6362\uFF0C\u4EC5\u66FF\u6362\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"\\p{Han}"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"REGEXP_REPLACE_ONE(<str>, <pattern>, <repl>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<str>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u8FDB\u884C\u6B63\u5219\u5339\u914D\u7684\u5217\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<pattern>"})}),(0,t.jsx)(e.td,{children:"\u76EE\u6807\u6A21\u5F0F\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<repl>"})}),(0,t.jsx)(e.td,{children:"\u7528\u4E8E\u66FF\u6362\u5339\u914D\u6A21\u5F0F\u7684\u5B57\u7B26\u4E32\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:["\u66FF\u6362\u4E4B\u540E\u7684\u7ED3\u679C\uFF0C\u7C7B\u578B\u662F ",(0,t.jsx)(e.code,{children:"Varchar"}),"\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT regexp_replace_one('a b c', ' ', '-');\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b', '(b)', '<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n\nmysql> select regexp_replace_one('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '\\\\p{Han}', '123');\n+------------------------------------------------------------------------------------------------+\n| regexp_replace_one('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '\\p{Han}', '123')       |\n+------------------------------------------------------------------------------------------------+\n| 123\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567                                              |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);