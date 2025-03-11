"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["556955"],{864025:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-size","title":"ARRAY_SIZE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-size.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-size","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-size","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_SIZE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_SUM","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-sum"},"next":{"title":"ARRAY_REMOVE","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-remove"}}'),s=r("785893"),i=r("250065");let t={title:"ARRAY_SIZE",language:"en"},l=void 0,c={},o=[{value:"array_size (size, cardinality)",id:"array_size-size-cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"array_size-size-cardinality",children:"array_size (size, cardinality)"}),"\n",(0,s.jsx)(n.p,{children:"array_size (size, cardinality)"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BIGINT size(ARRAY<T> arr) \nBIGINT array_size(ARRAY<T> arr) \nBIGINT cardinality(ARRAY<T> arr)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the size of the array, returns NULL for NULL input."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select k1,k2,size(k2) from array_test;\n+------+-----------+------------+\n| k1   | k2        | size(`k2`) |\n+------+-----------+------------+\n|    1 | [1, 2, 3] |          3 |\n|    2 | []        |          0 |\n|    3 | NULL      |       NULL |\n+------+-----------+------------+\n\nmysql> select k1,k2,array_size(k2) from array_test;\n+------+-----------+------------------+\n| k1   | k2        | array_size(`k2`) |\n+------+-----------+------------------+\n|    1 | [1, 2, 3] |                3 |\n|    2 | []        |                0 |\n|    3 | NULL      |             NULL |\n+------+-----------+------------------+\n\nmysql> select k1,k2,cardinality(k2) from array_test;\n+------+-----------+-------------------+\n| k1   | k2        | cardinality(`k2`) |\n+------+-----------+-------------------+\n|    1 | [1, 2, 3] |                 3 |\n|    2 | []        |                 0 |\n|    3 | NULL      |              NULL |\n+------+-----------+-------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY_SIZE, SIZE, CARDINALITY"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var a=r(667294);let s={},i=a.createContext(s);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);