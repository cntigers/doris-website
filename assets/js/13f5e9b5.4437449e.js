"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["451259"],{660405:function(e,n,a){a.r(n),a.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-sum","title":"ARRAY_SUM","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-sum.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-sum","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-sum","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_SUM","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_AVG","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-avg"},"next":{"title":"ARRAY_SIZE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-size"}}'),s=a("785893"),t=a("250065");let l={title:"ARRAY_SUM",language:"en"},i=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calculates the sum of all elements in an array"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ARRAY_SUM(<src>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<src>"})}),(0,s.jsx)(n.td,{children:"Corresponding array"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the sum of all elements in the array. NULL values in the array will be skipped. For an empty array or an array with all NULL values, the result returns a NULL value."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT ARRAY_SUM([1, 2, 3, 6]),ARRAY_SUM([1, 4, 3, 5, NULL]),ARRAY_SUM([NULL]);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------------+-------------------------------+-------------------------------------------+\n| array_sum([1, 2, 3, 6]) | array_sum([1, 4, 3, 5, NULL]) | array_sum(cast([NULL] as ARRAY<BOOLEAN>)) |\n+-------------------------+-------------------------------+-------------------------------------------+\n|                      12 |                            13 |                                      NULL |\n+-------------------------+-------------------------------+-------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var r=a(667294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);