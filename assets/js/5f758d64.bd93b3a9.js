"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["40513"],{166720:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>u,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/struct-functions/named-struct","title":"NAMED_STRUCT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/struct-functions/named-struct.md","sourceDirName":"sql-manual/sql-functions/struct-functions","slug":"/sql-manual/sql-functions/struct-functions/named-struct","permalink":"/docs/2.0/sql-manual/sql-functions/struct-functions/named-struct","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"NAMED_STRUCT","language":"en"},"sidebar":"docs","previous":{"title":"STRUCT","permalink":"/docs/2.0/sql-manual/sql-functions/struct-functions/struct"},"next":{"title":"STRUCT_ELEMENT","permalink":"/docs/2.0/sql-manual/sql-functions/struct-functions/struct-element"}}'),r=t("785893"),c=t("250065");let i={title:"NAMED_STRUCT",language:"en"},l=void 0,a={},u=[{value:"named_struct",id:"named_struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"named_struct",children:"named_struct"}),"\n",(0,r.jsx)(n.p,{children:"named_struct"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"STRUCT<T1, T2, T3, ...> named_struct({VARCHAR, T1}, {VARCHAR, T2}, ...)"})}),"\n",(0,r.jsx)(n.p,{children:"Construct a struct with the given field names and values."}),"\n",(0,r.jsx)(n.p,{children:"The number of parameters must be non zero and even. With odd digits being the name of the field and could be string literal, with even digits being the value of the field and could be column or literal."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\");\n+-----------------------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') |\n+-----------------------------------------------+\n| {1, 'a', 'abc'}                               |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('a', null, 'b', \"v\");\n+-----------------------------------+\n| named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------+\n| {NULL, 'v'}                       |\n+-----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('f1', k1, 'f2', k2, 'f3', null) from test_tb;\n+--------------------------------------------------+\n| named_struct('f1', `k1`, 'f2', `k2`, 'f3', NULL) |\n+--------------------------------------------------+\n| {1, 'a', NULL}                                   |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"NAMED, STRUCT, NAMED_STRUCT"})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},c=s.createContext(r);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);