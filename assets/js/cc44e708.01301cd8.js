"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["282786"],{775185:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-unquote","title":"JSON_UNQUOTE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_UNQUOTE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_QUOTE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-quote"},"next":{"title":"JSON_VALID","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-valid"}}'),l=s("785893"),r=s("250065");let a={title:"JSON_UNQUOTE",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"This function unquotes a JSON value and returns the result as a utf8mb4 string. If the argument is NULL, it will return NULL."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"JSON_UNQUOTE (<a>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameters"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<a>"})}),(0,l.jsx)(e.td,{children:"The element to be unquoted."})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsx)(e.p,{children:"Returns a utf8mb4 string. Special cases are as follows:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"If the passed parameter is NULL, return NULL."}),"\n",(0,l.jsx)(e.li,{children:"If the passed parameter is not a value with double quotes, the value itself will be returned."}),"\n",(0,l.jsx)(e.li,{children:"If the passed parameter is not a string, it will be automatically converted to a string and then the value itself will be returned."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Escape sequences within a string as shown in the following table will be recognized. Backslashes will be ignored for all other escape sequences."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Escape Sequence"}),(0,l.jsx)(e.th,{children:"Character Represented by Sequence"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:'"'}),(0,l.jsx)(e.td,{children:'A double quote (") character'})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\b"}),(0,l.jsx)(e.td,{children:"A backspace character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\f"}),(0,l.jsx)(e.td,{children:"A formfeed character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\n"}),(0,l.jsx)(e.td,{children:"A newline (linefeed) character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\r"}),(0,l.jsx)(e.td,{children:"A carriage return character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\t"}),(0,l.jsx)(e.td,{children:"A tab character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\"}),(0,l.jsx)(e.td,{children:"A backslash () character"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\\uxxxx"}),(0,l.jsx)(e.td,{children:"UTF-8 bytes for Unicode value XXXX"})]})]})]}),"\n",(0,l.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_unquote('\"doris\"');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_unquote('[1, 2, 3]');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_unquote(null);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT json_unquote('\"\\\\ttest\"');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select json_unquote('\"doris');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| json_unquote('\"doris') |\n+------------------------+\n| \"doris                 |\n+------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select json_unquote('doris');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------+\n| json_unquote('doris') |\n+-----------------------+\n| doris                 |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select json_unquote(1);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------+\n| json_unquote(cast(1 as VARCHAR(65533))) |\n+-----------------------------------------+\n| 1                                       |\n+-----------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return a}});var t=s(667294);let l={},r=t.createContext(l);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);