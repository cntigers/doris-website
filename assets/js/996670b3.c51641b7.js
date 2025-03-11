"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["847307"],{331898:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-split","title":"ARRAY_SPLIT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-split.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-split","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-split","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_SPLIT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_SORTBY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-sortby"},"next":{"title":"ARRAY_REVERSE_SPLIT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-reverse-split"}}'),r=a("785893"),t=a("250065");let l={title:"ARRAY_SPLIT",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["pass in two ",(0,r.jsx)(n.code,{children:"ARRAY"})," of equal length, the second of which is an ",(0,r.jsx)(n.code,{children:"Array<Boolean>"}),", and split the ",(0,r.jsx)(n.code,{children:"arr"})," according to the split point to the left of the position in the ",(0,r.jsx)(n.code,{children:"cond"})," where ",(0,r.jsx)(n.code,{children:"true"})," is found."]}),"\n",(0,r.jsxs)(n.li,{children:["Higher-order functions, passed a lambda expression and at least one ",(0,r.jsx)(n.code,{children:"ARRAY arr"}),", split ",(0,r.jsx)(n.code,{children:"arr"})," by the left-hand side of the ",(0,r.jsx)(n.code,{children:"true"})," position in the ",(0,r.jsx)(n.code,{children:"Array<Boolean>"})," result of the lambda expression operation."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ARRAY_SPLIT(<arr>, <cond>)\nARRAY_SPLIT(<lambda>, arr [, ...])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<lambda>"})}),(0,r.jsx)(n.td,{children:"A lambda expression where the input parameters must match the number of columns in the given array. The expression can execute valid scalar functions but does not support aggregate functions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<arr>"})}),(0,r.jsx)(n.td,{children:"ARRAY array"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns an ARRAY type result, where the array is split according to the specified condition."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select array_split([1,2,3,4,5], [1,0,1,0,0]);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast([1, 0, 1, 0, 0] as ARRAY<BOOLEAN>)) |\n+-----------------------------------------------------------------------+\n| [[1, 2], [3, 4, 5]]                                                   |\n+-----------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select array_split((x,y)->y, [1,2,3,4,5], [1,0,0,0,0]);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast(array_map((x, y) -> y, [1, 2, 3, 4, 5], [1, 0, 0, 0, 0]) as ARRAY<BOOLEAN>)) |\n+----------------------------------------------------------------------------------------------------------------+\n| [[1, 2, 3, 4, 5]]                                                                                              |\n+----------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select array_split((x,y)->(y+1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['a', 'b', 'c', 'd'], cast(array_map((x, y) -> (y + 1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]) as ARRAY<BOOLEAN>)) |\n+--------------------------------------------------------------------------------------------------------------------------------+\n| [[\"a\", \"b\"], [\"c\", \"d\"]]                                                                                                       |\n+--------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select array_split(x->(year(x)>2013),["2020-12-12", "2013-12-12", "2015-12-12", null]);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['2020-12-12', '2013-12-12', '2015-12-12', NULL], array_map(x -> (year(cast(x as DATEV2)) > 2013), ['2020-12-12', '2013-12-12', '2015-12-12', NULL])) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [[\"2020-12-12\", \"2013-12-12\"], [\"2015-12-12\"], [null]]                                                                                                            |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var s=a(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);