"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["29339"],{610631:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>u,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/count_substrings","title":"COUNT_SUBSTRINGS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/count_substrings.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/count_substrings","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/count_substrings","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"COUNT_SUBSTRINGS","language":"en"},"sidebar":"docs","previous":{"title":"SUBSTRING","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/substring"},"next":{"title":"SUB_REPLACE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace"}}'),r=s("785893"),i=s("250065");let c={title:"COUNT_SUBSTRINGS",language:"en"},l=void 0,a={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"The COUNT_SUBSTRINGS function counts the number of occurrences of a specified substring within a string. Note: The current implementation continues searching after shifting by the length of the substring when a match is found. For example, when str='ccc' and pattern='cc', the result returned is 1."}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"COUNT_SUBSTRINGS(<str>, <pattern>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"The string to be searched. Type: STRING"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<pattern>"})}),(0,r.jsx)(e.td,{children:"The substring to match. Type: STRING"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(e.p,{children:"Returns an INT type, representing the number of times the substring appears in the string."}),"\n",(0,r.jsx)(e.p,{children:"Special cases:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If str is NULL, returns NULL"}),"\n",(0,r.jsx)(e.li,{children:"If pattern is an empty string, returns 0"}),"\n",(0,r.jsx)(e.li,{children:"If str is an empty string, returns 0"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Basic usage"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT count_substrings('a1b1c1d', '1');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+----------------------------------+\n| count_substrings('a1b1c1d', '1') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"Case with consecutive commas"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT count_substrings(',,a,b,c,', ',');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------------------+\n| count_substrings(',,a,b,c,', ',') |\n+-----------------------------------+\n|                                 5 |\n+-----------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"Case with overlapping substrings"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT count_substrings('ccc', 'cc');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------------------+\n| count_substrings('ccc', 'cc')  |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:"NULL value handling"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT count_substrings(NULL, ',');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| count_substrings(NULL, ',') |\n+-----------------------------+\n|                        NULL |\n+-----------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsx)(e.li,{children:"Empty string handling"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT count_substrings('a,b,c,abcde', '');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-------------------------------------+\n| count_substrings('a,b,c,abcde', '') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);