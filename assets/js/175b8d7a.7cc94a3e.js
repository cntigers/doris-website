"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["596203"],{270007:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/substring-index","title":"SUBSTRING_INDEX","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/string-functions/substring-index.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/substring-index","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/substring-index","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SUBSTRING_INDEX","language":"en"},"sidebar":"docs","previous":{"title":"SPLIT_BY_REGEXP","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/split-by-regexp"},"next":{"title":"NGRAM_SEARCH","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/ngram-search"}}'),r=t("785893"),l=t("250065");let i={title:"SUBSTRING_INDEX",language:"en"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The SUBSTRING_INDEX function is used to extract a substring from a string based on a specified delimiter and occurrence count. This function supports counting from either left or right."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SUBSTRING_INDEX(<content>, <delimiter>, <field>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<content>"})}),(0,r.jsx)(n.td,{children:"The string to be extracted from. Type: VARCHAR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<delimiter>"})}),(0,r.jsx)(n.td,{children:"The delimiter string, case-sensitive and multi-byte safe. Type: VARCHAR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<field>"})}),(0,r.jsx)(n.td,{children:"Number of delimiter occurrences. Positive numbers count from left, negative numbers count from right. Type: INT"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Note: The delimiter and field parameters must be constants, variables are not supported."}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns VARCHAR type, representing the extracted substring."}),"\n",(0,r.jsx)(n.p,{children:"Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If field > 0, returns the substring before the field-th delimiter from the left"}),"\n",(0,r.jsx)(n.li,{children:"If field < 0, returns the substring after the |field|-th delimiter from the right"}),"\n",(0,r.jsx)(n.li,{children:"If field = 0, returns empty string when content is not NULL, returns NULL when content is NULL"}),"\n",(0,r.jsx)(n.li,{children:"If any parameter is NULL, returns NULL"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Extract content before the first space from the left"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT substring_index('hello world', ' ', 1);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| substring_index('hello world', ' ', 1) |\n+----------------------------------------+\n| hello                                  |\n+----------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Extract all content from the left (delimiter count greater than actual occurrences)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT substring_index('hello world', ' ', 2);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| substring_index('hello world', ' ', 2) |\n+----------------------------------------+\n| hello world                            |\n+----------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Extract content after the last space from the right"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT substring_index('hello world', ' ', -1);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+\n| substring_index('hello world', ' ', -1) |\n+-----------------------------------------+\n| world                                   |\n+-----------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Case when field is 0"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT substring_index('hello world', ' ', 0);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| substring_index('hello world', ' ', 0) |\n+----------------------------------------+\n|                                        |\n+----------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);