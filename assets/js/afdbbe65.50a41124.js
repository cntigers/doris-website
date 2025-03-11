"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["497420"],{245777:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitwise-functions/bitand","title":"BITAND","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitand.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitwise-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitand","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitand","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITAND","language":"en"},"sidebar":"docs","previous":{"title":"l2_distance","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/distance-functions/l2-distance"},"next":{"title":"BIT_TEST","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitwise-functions/bit_test"}}'),i=t("785893"),r=t("250065");let l={title:"BITAND",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Used to perform a bitwise AND operation. The bitwise AND operation compares each bit of two integers. The result is 1 only when both corresponding binary bits are 1, otherwise it is 0."}),"\n",(0,i.jsx)(n.p,{children:"Integer range: TINYINT, SMALLINT, INT, BIGINT, LARGEINT"}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"BITAND( <lhs>, <rhs>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameter"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<lhs>"})}),(0,i.jsx)(n.td,{children:"The first number involved in the bitwise AND operation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<rhs>"})}),(0,i.jsx)(n.td,{children:"The second number to be included in the bitwise AND operation"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns the result of the AND operation on two integers."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select BITAND(3,5), BITAND(4,7);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------+---------+\n| (3 & 5) | (4 & 7) |\n+---------+---------+\n|       1 |       4 |\n+---------+---------+\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);