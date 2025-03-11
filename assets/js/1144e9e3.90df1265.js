"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["449664"],{714369:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","title":"APPEND_TRAILING_CHAR_IF_ABSENT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"APPEND_TRAILING_CHAR_IF_ABSENT","language":"en"},"sidebar":"docs","previous":{"title":"SUB_REPLACE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace"},"next":{"title":"ENDS_WITH","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/ends-with"}}'),a=t("785893"),i=t("250065");let r={title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"en"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Used to add a specific character (such as a space, a specific symbol, etc.) to the end of a string if the character does not exist at the end of the string. The function is to ensure that the string ends with a specific character."}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"APPEND_TRAILING_CHAR_IF_ABSENT ( <str> , <trailing_char> )\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameters"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<str>"})}),(0,a.jsx)(e.td,{children:"Target string to be judged"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<trailing_char>"})}),(0,a.jsx)(e.td,{children:"Character to be added to the end of the string (if the character does not exist)"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(e.p,{children:["Parameters The string after concatenation of ",(0,a.jsx)(e.code,{children:"<str>"})," and ",(0,a.jsx)(e.code,{children:"<trailing_char>"})," (if ",(0,a.jsx)(e.code,{children:"<trailing_char>"})," does not exist in ",(0,a.jsx)(e.code,{children:"<str>"}),")"]}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT APPEND_TRAILING_CHAR_IF_ABSENT('a','c'),APPEND_TRAILING_CHAR_IF_ABSENT('ac', 'c'),APPEND_TRAILING_CHAR_IF_ABSENT('ac', 'cd')\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------------------------------+-------------------------------------------+--------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') | append_trailing_char_if_absent('ac', 'c') | append_trailing_char_if_absent('ac', 'cd') |\n+------------------------------------------+-------------------------------------------+--------------------------------------------+\n| ac                                       | ac                                        | accd                                       |\n+------------------------------------------+-------------------------------------------+--------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);