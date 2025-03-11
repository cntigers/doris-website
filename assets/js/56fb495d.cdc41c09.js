"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["427196"],{332289:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/char","title":"CHAR","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/string-functions/char.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/char","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/char","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CHAR","language":"en"},"sidebar":"docs","previous":{"title":"REVERSE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/reverse"},"next":{"title":"CONCAT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/concat"}}'),t=s("785893"),i=s("250065");let l={title:"CHAR",language:"en"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Description",id:"description-1",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Interpret each argument as an integer and return a string consisting of the characters given by the code values \u200B\u200Bof those integers. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the result string is illegal for the given character set, the corresponding conversion result is NULL."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Arguments greater than ",(0,t.jsx)(n.code,{children:"255"})," are converted to multiple result bytes. For example, ",(0,t.jsx)(n.code,{children:"char(15049882)"})," is equivalent to ",(0,t.jsx)(n.code,{children:"char(229, 164, 154)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description-1",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Interpret each argument as an integer and return a string consisting of the characters given by the code values \u200B\u200Bof those integers. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the result string is illegal for the given character set, the corresponding conversion results in the value NULL."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Arguments greater than ",(0,t.jsx)(n.code,{children:"255"})," are converted to multiple result bytes. For example, ",(0,t.jsx)(n.code,{children:"char(15049882)"})," is equivalent to ",(0,t.jsx)(n.code,{children:"char(229, 164, 154)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CHAR ( <expr> [ , <expr> ... ] [ USING <charset_name> ] )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameters"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<expr>"})}),(0,t.jsx)(n.td,{children:"Integer to be calculated as a character"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<charset_name>"})}),(0,t.jsxs)(n.td,{children:["Encoding of the return value, currently only supports ",(0,t.jsx)(n.code,{children:"utf8"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Parameter list ",(0,t.jsx)(n.code,{children:"<expr>"})," A string consisting of the corresponding characters. Special cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the result string is illegal for the given character set, the corresponding conversion result is NULL."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Parameters greater than ",(0,t.jsx)(n.code,{children:"255"})," will be converted to multiple result bytes. For example, ",(0,t.jsx)(n.code,{children:"CHAR(15049882)"})," is equivalent to ",(0,t.jsx)(n.code,{children:"CHAR(229, 164, 154)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT CHAR(68, 111, 114, 105, 115),CHAR(15049882, 15179199, 14989469),CHAR(255)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------------------------------------+--------------------------------------------+-------------------+\n| char('utf8', 68, 111, 114, 105, 115) | char('utf8', 15049882, 15179199, 14989469) | char('utf8', 255) |\n+--------------------------------------+--------------------------------------------+-------------------+\n| Doris                                | \u591A\u777F\u4E1D                                     | NULL              |\n+--------------------------------------+--------------------------------------------+-------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);