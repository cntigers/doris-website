"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["373716"],{798624:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","title":"ARRAY_WITH_CONSTANT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_WITH_CONSTANT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_JOIN","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-join"},"next":{"title":"ARRAY_ENUMERATE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate"}}'),r=t("785893"),s=t("250065");let l={title:"ARRAY_WITH_CONSTANT",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Generates an array containing n repeated elements"}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ARRAY_WITH_CONSTANT(<n>, <element>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<n>"})}),(0,r.jsx)(e.td,{children:"Number of digits"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<element>"})}),(0,r.jsx)(e.td,{children:"Specifying Elements"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(e.p,{children:"Returns an array containing n repeated elements. array_repeat has the same function as array_with_constant and is used to be compatible with the hive syntax format."}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT ARRAY_WITH_CONSTANT(2, "hello"),ARRAY_WITH_CONSTANT(3, 12345);\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:'+---------------------------------+-------------------------------+\n| array_with_constant(2, \'hello\') | array_with_constant(3, 12345) |\n+---------------------------------+-------------------------------+\n| ["hello", "hello"]              | [12345, 12345, 12345]         |\n+---------------------------------+-------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var a=t(667294);let r={},s=a.createContext(r);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);