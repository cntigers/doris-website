"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["395589"],{33285:function(n,e,t){t.r(e),t.d(e,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/append-trailing-char-if-absent","title":"APPEND_TRAILING_CHAR_IF_ABSENT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"APPEND_TRAILING_CHAR_IF_ABSENT","language":"en"},"sidebar":"docs","previous":{"title":"SUB_REPLACE","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/sub-replace"},"next":{"title":"ENDS_WITH","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/ends-with"}}'),a=t("785893"),s=t("250065");let r={title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"en"},c=void 0,l={},o=[{value:"append_trailing_char_if_absent",id:"append_trailing_char_if_absent",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"append_trailing_char_if_absent",children:"append_trailing_char_if_absent"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)"})}),"\n",(0,a.jsx)(e.p,{children:"If the @str string is non-empty and does not contain the @trailing_char character at the end, it appends the @trailing_char character to the end.\n@trailing_char contains only one character, and it will return NULL if contains more than one character"}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n| append_trailing_char_if_absent('ac', 'c') |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"APPEND_TRAILING_CHAR_IF_ABSENT\n"})})]})}function p(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var i=t(667294);let a={},s=i.createContext(a);function r(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);