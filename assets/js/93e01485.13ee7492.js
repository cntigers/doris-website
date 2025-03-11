"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["984644"],{270708:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>r,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/map-functions/map-contains-key","title":"MAP_CONTAINS_KEY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-key.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/map-functions","slug":"/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-key","permalink":"/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-key","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAP_CONTAINS_KEY","language":"en"},"sidebar":"docs","previous":{"title":"MAP_SIZE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-size"},"next":{"title":"MAP_CONTAINS_VALUE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value"}}'),a=s("785893"),i=s("250065");let c={title:"MAP_CONTAINS_KEY",language:"en"},l=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Determines whether the given ",(0,a.jsx)(n.code,{children:"map"})," contains a specific key ",(0,a.jsx)(n.code,{children:"key"})]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MAP_CONTAINS_KEY(<map>, <key>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<map>"})}),(0,a.jsx)(n.td,{children:"Input map content"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<key>"})}),(0,a.jsx)(n.td,{children:"The key to be retrieved"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["Determines whether the given ",(0,a.jsx)(n.code,{children:"map"})," contains a specific key ",(0,a.jsx)(n.code,{children:"key"}),", and returns 1 if it exists, otherwise returns 0."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select map_contains_key(map(null, 1, 2, null), null),map_contains_key(map(1, "100", 0.1, 2), 0.11);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_key(map(NULL, 1, 2, NULL), NULL) | map_contains_key(cast(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)) as MAP<DECIMALV3(3, 2),VARCHAR(3)>), cast(0.11 as DECIMALV3(3, 2))) |\n+-----------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n|                                             1 |                                                                                                                                                                               0 |\n+-----------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let a={},i=t.createContext(a);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);