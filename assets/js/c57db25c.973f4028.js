"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["249386"],{188599:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace","title":"REGEXP_REPLACE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP_REPLACE","language":"en"},"sidebar":"docs","previous":{"title":"REGEXP_EXTRACT_OR_NULL","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-or-null"},"next":{"title":"REGEXP_REPLACE_ONE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-replace-one"}}'),r=t("785893"),a=t("250065");let l={title:"REGEXP_REPLACE",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Regular matching of STR strings, replacing the part hitting pattern with a new string."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,r.jsx)(n.code,{children:"\\p{Han}"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REGEXP_REPLACE(<str>, <pattern>, <repl>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"The column need to do regular matching."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pattern>"})}),(0,r.jsx)(n.td,{children:"Target pattern."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<repl>"})}),(0,r.jsx)(n.td,{children:"The string to replace the matched pattern."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Result after doing replacement. It is ",(0,r.jsx)(n.code,{children:"Varchar"})," type."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_replace('a b c', ' ', '-');\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace('a b c', '(b)', '<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n\nmysql> select regexp_replace('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '\\\\p{Han}+', '123');\n+---------------------------------------------------------------------------------------------+\n| regexp_replace('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '\\p{Han}+', '123')       |\n+---------------------------------------------------------------------------------------------+\n| 123This is a passage in English 1234567                                                     |\n+---------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);