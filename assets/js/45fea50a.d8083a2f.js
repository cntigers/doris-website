"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328514"],{948969:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-range","title":"ARRAY_RANGE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-range.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-range","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-range","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_RANGE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_INTERSECT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-intersect"},"next":{"title":"ARRAY_DISTINCT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-distinct"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_RANGE",language:"en"},i=void 0,o={},c=[{value:"array_range",id:"array_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_range",children:"array_range"}),"\n",(0,t.jsx)(e.p,{children:"array_range"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"ARRAY<Int> array_range(Int end)\nARRAY<Int> array_range(Int start, Int end)\nARRAY<Int> array_range(Int start, Int end, Int step)\n"})}),"\n",(0,t.jsx)(e.p,{children:"The parameters are all positive integers.\nstart default value is 0, and step default value is 1.\nReturn the array which numbers from start to end - 1 by step."}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array_range(10);\n+--------------------------------+\n| array_range(10)                |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select array_range(10,20);\n+------------------------------------------+\n| array_range(10, 20)                      |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select array_range(0,20,2);\n+-------------------------------------+\n| array_range(0, 20, 2)               |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY, RANGE, ARRAY_RANGE"})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);