"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["240403"],{242240:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/map-functions/map","title":"MAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/map-functions/map.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/map-functions","slug":"/sql-manual/sql-functions/scalar-functions/map-functions/map","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/map-functions/map","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MAP","language":"en"},"sidebar":"docs","previous":{"title":"COUNTEQUAL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/countequal"},"next":{"title":"MAP_KEYS","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/map-functions/map-keys"}}'),a=s("785893"),l=s("250065");let c={title:"MAP",language:"en"},r=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Constructs a ",(0,a.jsx)(n.code,{children:"Map<K, V>"})," of a specific type using some set of key-value pairs"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MAP( <key1> , <value1> [, <key2>,<value2> ... ])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<key>"})}),(0,a.jsx)(n.td,{children:"Constructing the key of the map"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<value>"})}),(0,a.jsx)(n.td,{children:"Constructing the value of the map"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["Returns a specific type ",(0,a.jsx)(n.code,{children:"Map<K, V>"})," constructed from a number of key-value pairs"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select map(1, "100", 0.1, 2),map(1, "100", 0.1, 2)[1];\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------+\n| map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)) | element_at(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)), cast(1 as DECIMALV3(2, 1))) |\n+---------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------+\n| {1.0:\"100\", 0.1:\"2\"}                                                                  | 100                                                                                                                           |\n+---------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var t=s(667294);let a={},l=t.createContext(a);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);