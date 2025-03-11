"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["164095"],{166889:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/translate","title":"TRANSLATE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/translate.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/translate","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/translate","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TRANSLATE","language":"en"},"sidebar":"docs","previous":{"title":"PROTOCOL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/protocol"},"next":{"title":"tokenize","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/tokenize"}}'),r=s("785893"),a=s("250065");let l={title:"TRANSLATE",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The TRANSLATE function is used for string replacement, converting characters in the source string according to mapping rules. It replaces characters in the source string that appear in the 'from' string with corresponding characters in the 'to' string."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRANSLATE(<source>, <from>, <to>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<source>"})}),(0,r.jsx)(n.td,{children:"The source string to be converted. Type: VARCHAR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<from>"})}),(0,r.jsx)(n.td,{children:"The set of characters to be replaced. Type: VARCHAR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<to>"})}),(0,r.jsx)(n.td,{children:"The set of replacement characters. Type: VARCHAR"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns VARCHAR type, representing the transformed string."}),"\n",(0,r.jsx)(n.p,{children:"Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns NULL if any parameter is NULL"}),"\n",(0,r.jsx)(n.li,{children:"If there are duplicate characters in the 'from' string, only the first occurrence is used"}),"\n",(0,r.jsx)(n.li,{children:"If a source character is not in the 'from' string, it remains unchanged"}),"\n",(0,r.jsx)(n.li,{children:"If a character's position in the 'from' string exceeds the length of the 'to' string, the corresponding source character will be deleted"}),"\n",(0,r.jsx)(n.li,{children:"If both 'from' and 'to' are empty strings, returns the original string"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Basic character replacement"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT translate('abcd', 'a', 'z');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------------------------+\n| translate('abcd', 'a', 'z') |\n+---------------------------+\n| zbcd                      |\n+---------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Multiple replacements of the same character"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT translate('abcda', 'a', 'z');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| translate('abcda', 'a', 'z') |\n+----------------------------+\n| zbcdz                      |\n+----------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Special character replacement"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT translate('Palho\xe7a', '\xe7', 'c');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------------------+\n| translate('Palho\xe7a', '\xe7', 'c') |\n+--------------------------------+\n| Palhoca                        |\n+--------------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Character deletion (empty 'to' string)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT translate('abcd', 'a', '');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| translate('abcd', 'a', '') |\n+----------------------------+\n| bcd                        |\n+----------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Duplicate characters in 'from' string"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT translate('abcd', 'aac', 'zq');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------------------+\n| translate('abcd', 'aac', 'zq') |\n+--------------------------------+\n| zbd                            |\n+--------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);