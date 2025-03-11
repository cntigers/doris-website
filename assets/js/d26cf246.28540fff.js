"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675689"],{976554:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/random","title":"RANDOM","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/random.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/random","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/random","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RANDOM","language":"en"},"sidebar":"docs","previous":{"title":"NEGATIVE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/negative"},"next":{"title":"MOD","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/mod"}}'),a=s("785893"),t=s("250065");let l={title:"RANDOM",language:"en"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns a random number between 0 and 1, or returns the required random number according to the parameters."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Note: All parameters must be constants."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"RAND"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RANDOM() -- Generates a random number between 0 and 1\n\nRANDOM(<seed>) -- Generates a fixed sequence of random numbers between 0 and 1 based on the seed value\n\nRANDOM(<a> , <b>) -- Generates a random number between a and b\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<seed>"})}),(0,a.jsx)(n.td,{children:"random number generator seed. Returns a fixed sequence of random numbers between 0 and 1."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<a>"})}),(0,a.jsx)(n.td,{children:"The lower bound of a random number."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<b>"})}),(0,a.jsx)(n.td,{children:"The upper bound of a random number. It must be less than the lower bound."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If no parameters are passed: Returns a random number between 0 and 1."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If a single parameter seed is passed: Returns a fixed sequence of random numbers between 0 and 1."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If two parameters a and b are passed: Returns a random integer between a and b."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select random();\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| random()           |\n+--------------------+\n| 0.8047437125910604 |\n+--------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select rand(1.2);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------+\n| rand(1)             |\n+---------------------+\n| 0.13387664401253274 |\n+---------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select rand(-20, -10);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------+\n| random(-20, -10) |\n+------------------+\n|              -10 |\n+------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let a={},t=r.createContext(a);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);