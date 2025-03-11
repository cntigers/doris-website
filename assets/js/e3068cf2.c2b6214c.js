"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816438"],{449184:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>t,metadata:()=>l,assets:()=>i,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/pow","title":"POW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/numeric-functions/pow.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/pow","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/pow","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"POW","language":"en"},"sidebar":"docs","previous":{"title":"SQRT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/sqrt"},"next":{"title":"RADIANS","permalink":"/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/radians"}}'),a=s("785893"),c=s("250065");let t={title:"POW",language:"en"},r=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Returns the value of the first argument raised to the power of the second argument."}),"\n",(0,a.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"POWER"}),"\n",(0,a.jsx)(e.li,{children:"FPOW"}),"\n",(0,a.jsx)(e.li,{children:"DPOW"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"POW(<a>, <b>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameter"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<a>"})}),(0,a.jsx)(e.td,{children:"Base"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<b>"})}),(0,a.jsx)(e.td,{children:"Power"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(e.p,{children:"Return an integer type or a floating-point type."}),"\n",(0,a.jsx)(e.p,{children:"Special cases:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["If a ",(0,a.jsx)(e.code,{children:"IS NULL"})," or b ",(0,a.jsx)(e.code,{children:"IS NULL"}),", return ",(0,a.jsx)(e.code,{children:"NULL"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["If ",(0,a.jsx)(e.code,{children:"b = 0"})," and a ",(0,a.jsx)(e.code,{children:"IS NOT NULL"}),", it will always return ",(0,a.jsx)(e.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(2, 0);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------+\n| pow(cast(2 as DOUBLE), cast(0 as DOUBLE)) |\n+-------------------------------------------+\n|                                         1 |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(2, 10);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------+\n| pow(cast(2 as DOUBLE), cast(10 as DOUBLE)) |\n+--------------------------------------------+\n|                                       1024 |\n+--------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(1.2, 2);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------+\n| pow(cast(1.2 as DOUBLE), cast(2 as DOUBLE)) |\n+---------------------------------------------+\n|                                        1.44 |\n+---------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(1.2, 2.1);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------+\n| pow(cast(1.2 as DOUBLE), cast(2.1 as DOUBLE)) |\n+-----------------------------------------------+\n|                            1.4664951016517147 |\n+-----------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(2, null);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| pow(cast(2 as DOUBLE), NULL) |\n+------------------------------+\n|                         NULL |\n+------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select pow(null, 2);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| pow(NULL, cast(2 as DOUBLE)) |\n+------------------------------+\n|                         NULL |\n+------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return t}});var l=s(667294);let a={},c=l.createContext(a);function t(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);