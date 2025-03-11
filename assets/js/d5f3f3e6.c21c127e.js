"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["819138"],{68218:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-popfront","title":"ARRAY_POPFRONT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-popfront.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-popfront","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-popfront","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_POPFRONT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_POPBACK","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-popback"},"next":{"title":"ARRAY_PUSHFRONT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-pushfront"}}'),a=r("785893"),o=r("250065");let s={title:"ARRAY_POPFRONT",language:"en"},l=void 0,i={},c=[{value:"array_popfront",id:"array_popfront",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"array_popfront",children:"array_popfront"}),"\n",(0,a.jsx)(e.p,{children:"array_popfront"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"ARRAY<T> array_popfront(ARRAY<T> arr)"})}),"\n",(0,a.jsx)(e.p,{children:"Remove the first element from array."}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select array_popfront(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popfront(ARRAY('test', NULL, 'value'))        |\n+-----------------------------------------------------+\n| [NULL, value]                                       |\n+-----------------------------------------------------+\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"ARRAY,POPFRONT,ARRAY_POPFRONT"})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return s}});var t=r(667294);let a={},o=t.createContext(a);function s(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);