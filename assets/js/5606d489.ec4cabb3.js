"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["745262"],{426950:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/conditional-functions/greatest","title":"GREATEST","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/conditional-functions/greatest.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/conditional-functions","slug":"/sql-manual/sql-functions/scalar-functions/conditional-functions/greatest","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/greatest","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GREATEST","language":"en"},"sidebar":"docs","previous":{"title":"NULLIF","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/nullif"},"next":{"title":"LEAST","permalink":"/docs/sql-manual/sql-functions/scalar-functions/conditional-functions/least"}}'),t=s("785893"),r=s("250065");let c={title:"GREATEST",language:"en"},i=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Compares multiple expressions and returns the greatest value among them. If any argument is ",(0,t.jsx)(n.code,{children:"NULL"}),", the function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GREATEST(<expr> [, ...])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<expr>"})}),(0,t.jsxs)(n.td,{children:["A list of expressions to compare. Supports ",(0,t.jsx)(n.code,{children:"TINYINT"}),", ",(0,t.jsx)(n.code,{children:"SMALLINT"}),", ",(0,t.jsx)(n.code,{children:"INT"}),", ",(0,t.jsx)(n.code,{children:"BIGINT"}),", ",(0,t.jsx)(n.code,{children:"LARGEINT"}),", ",(0,t.jsx)(n.code,{children:"FLOAT"}),", ",(0,t.jsx)(n.code,{children:"DOUBLE"}),", ",(0,t.jsx)(n.code,{children:"STRING"}),", ",(0,t.jsx)(n.code,{children:"DATETIME"}),", and ",(0,t.jsx)(n.code,{children:"DECIMAL"})," types."]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Returns the largest value among the given expressions."}),"\n",(0,t.jsxs)(n.li,{children:["If any argument is ",(0,t.jsx)(n.code,{children:"NULL"}),", returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(-1, 0, 5, 8);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GREATEST(-1, 0, 5, 8) |\n+-----------------------+\n|                     8 |\n+-----------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(-1, 0, 5, NULL);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------------------------+\n| GREATEST(-1, 0, 5, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(6.3, 4.29, 7.6876);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-----------------------------+\n| GREATEST(6.3, 4.29, 7.6876) |\n+-----------------------------+\n|                      7.6876 |\n+-----------------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------+\n| GREATEST('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+-------------------------------------------------------------------------------+\n| 2022-02-26 20:02:11                                                           |\n+-------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var l=s(667294);let t={},r=l.createContext(t);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);