"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["161555"],{508777:function(n,e,a){a.r(e),a.d(e,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-contains","title":"ARRAY_CONTAINS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-contains.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-contains","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-contains","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_CONTAINS","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_POSITION","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-position"},"next":{"title":"ARRAY_EXCEPT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-except"}}'),s=a("785893"),t=a("250065");let i={title:"ARRAY_CONTAINS",language:"en"},l=void 0,o={},c=[{value:"array_contains",id:"array_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"array_contains",children:"array_contains"}),"\n",(0,s.jsx)(e.p,{children:"array_contains"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BOOLEAN array_contains(ARRAY<T> arr, T value)"})}),"\n",(0,s.jsx)(e.p,{children:"Check if a value presents in an array column. Return below values:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"1    - if value presents in an array;\n0    - if value does not present in an array;\nNULL - when array is NULL;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_contains([null, 1], null);\n+--------------------------------------+\n| array_contains(ARRAY(NULL, 1), NULL) |\n+--------------------------------------+\n|                                    1 |\n+--------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"ARRAY,CONTAIN,CONTAINS,ARRAY_CONTAINS"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return i}});var r=a(667294);let s={},t=r.createContext(s);function i(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);