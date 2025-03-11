"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["831523"],{630384:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-last","title":"ARRAY_LAST","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-last.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-last","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-last","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_LAST","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_FIRST","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-first"},"next":{"title":"ARRAYS_OVERLAP","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/arrays-overlap"}}'),t=a("785893"),s=a("250065");let l={title:"ARRAY_LAST",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Use a lambda bool expression and an array as the input parameters, the lambda expression is used to evaluate the internal data of other input ARRAY parameters.\nReturns the last element in the array for which lambda(arr1[i]) returns something other than 0."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_LAST(<lambda>, <arr>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<lambda>"})}),(0,t.jsx)(n.td,{children:"A lambda expression where the input parameters must match the number of columns in the given array. The expression can execute valid scalar functions but does not support aggregate functions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<arr>"})}),(0,t.jsx)(n.td,{children:"ARRAY array"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the index of the last non-zero value. If no such index is found, returns NULL."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select array_last(x->x>2, [1,2,3,0]) ;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select array_last(x->x>4, [1,2,3,0]) ; \n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var r=a(667294);let t={},s=r.createContext(t);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);