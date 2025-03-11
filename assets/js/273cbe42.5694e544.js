"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["858734"],{491578:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitwise-functions/bitnot","title":"BITNOT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitnot.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitwise-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitnot","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitnot","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITNOT","language":"en"},"sidebar":"docs","previous":{"title":"XOR","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/xor"},"next":{"title":"BIT_COUNT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitcount"}}'),i=t("785893"),r=t("250065");let l={title:"BITNOT",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Used to perform a bitwise inversion operation on an integer."}),"\n",(0,i.jsx)(n.p,{children:"Integer range: TINYINT, SMALLINT, INT, BIGINT, LARGEINT"}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"BITNOT( <x>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameter"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<x>"})}),(0,i.jsx)(n.td,{children:"Integer operations"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns the result of the NOT operation of one integer."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select BITNOT(7), BITNOT(-127);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------+----------+\n| (~ 7) | (~ -127) |\n+-------+----------+\n|    -8 |      126 |\n+-------+----------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);