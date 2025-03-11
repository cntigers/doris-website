"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["124369"],{999659:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/space","title":"SPACE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/space.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/space","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/space","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SPACE","language":"en"},"sidebar":"docs","previous":{"title":"UUID","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/uuid"},"next":{"title":"RANDOM_BYTES","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/random_bytes"}}'),l=s("785893"),i=s("250065");let r={title:"SPACE",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Generate a string consisting of a specified number of spaces."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SPACE ( <len> )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<len>"})}),(0,l.jsx)(e.td,{children:"The number of spaces to generate"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(e.p,{children:"Returns a string consisting of the specified number of spaces. Special cases:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n",(0,l.jsxs)(e.li,{children:["When ",(0,l.jsx)(e.code,{children:"<len>"})," is less than 0, an empty string is returned."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT space(10);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------+\n| space(10)  |\n+------------+\n|            |\n+------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT space(null);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| space(NULL) |\n+-------------+\n| NULL        |\n+-------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);