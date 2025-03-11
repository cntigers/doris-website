"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381869"],{593384:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-zip","title":"ARRAY_ZIP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-zip.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-zip","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-zip","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_ZIP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_CONCAT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-concat"},"next":{"title":"ARRAY_SHUFFLE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-shuffle"}}'),t=r("785893"),s=r("250065");let i={title:"ARRAY_ZIP",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Merges all arrays into a single array. The resulting array contains corresponding elements from the source arrays, grouped in the order of the argument list."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_ZIP(<array>[, <array> ])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<array>"})}),(0,t.jsx)(n.td,{children:"Input array"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an array with the elements from the source array grouped into a structure. The data types in the structure are the same as the input array and are in the order in which the array was passed."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT ARRAY_ZIP(['a', 'b', 'c'], [1, 2, 3]);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'+--------------------------------------------------------+\n| array_zip([\'a\', \'b\', \'c\'], [1, 2, 3])                  |\n+--------------------------------------------------------+\n| [{"1":"a", "2":1}, {"1":"b", "2":2}, {"1":"c", "2":3}] |\n+--------------------------------------------------------+\n'})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);