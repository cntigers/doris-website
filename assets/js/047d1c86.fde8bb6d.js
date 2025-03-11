"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["574840"],{117964:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/other-functions/field","title":"FIELD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/other-functions/field.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/other-functions","slug":"/sql-manual/sql-functions/scalar-functions/other-functions/field","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/other-functions/field","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FIELD","language":"en"},"sidebar":"docs","previous":{"title":"CONVERT_TO","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/other-functions/convert-to"},"next":{"title":"ESQUERY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/other-functions/esquery"}}'),r=s("785893"),l=s("250065");let i={title:"FIELD",language:"en"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the position of the first occurrence of ",(0,r.jsx)(n.code,{children:"<expr>"})," in the list of values ",(0,r.jsx)(n.code,{children:"<param> [, ...]"}),".",(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.code,{children:"<expr>"})," is not found, the function returns ",(0,r.jsx)(n.code,{children:"0"}),". This function is commonly used in ",(0,r.jsx)(n.code,{children:"ORDER BY"})," to implement custom sorting."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"FIELD(<expr>, <param> [, ...])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr>"})}),(0,r.jsx)(n.td,{children:"The value to be searched in the list of parameters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<param>"})}),(0,r.jsxs)(n.td,{children:["A sequence of values to compare against ",(0,r.jsx)(n.code,{children:"<expr>"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Returns the position (1-based index) of ",(0,r.jsx)(n.code,{children:"<expr>"})," in the list of ",(0,r.jsx)(n.code,{children:"<param>"})," values."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"<expr>"})," is not found, returns ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"<expr>"})," is ",(0,r.jsx)(n.code,{children:"NULL"}),", returns ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT FIELD(2, 3, 1, 2, 5);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------+\n| FIELD(2, 3, 1, 2, 5) |\n+----------------------+\n|                    3 |\n+----------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT k1, k7 FROM baseall WHERE k1 IN (1,2,3) ORDER BY FIELD(k1, 2, 1, 3);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------------+\n| k1   | k7         |\n+------+------------+\n|    2 | wangyu14   |\n|    1 | wangjing04 |\n|    3 | yuanyuan06 |\n+------+------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT class_name FROM class_test ORDER BY FIELD(class_name, 'Suzi', 'Ben', 'Henry');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------------+\n| class_name |\n+------------+\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);