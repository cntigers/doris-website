"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["271029"],{562999:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftleft","title":"BIT_SHIFT_LEFT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftleft.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitwise-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftleft","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftleft","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BIT_SHIFT_LEFT","language":"en"},"sidebar":"docs","previous":{"title":"BIT_COUNT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitcount"},"next":{"title":"BIT_SHIFT_RIGHT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright"}}'),i=n("785893"),l=n("250065");let r={title:"BIT_SHIFT_LEFT",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Functions for left shift operations are usually used to perform bit shift operations, which shift all bits of a binary number to the left by a specified number of bits. It is a form of bitwise operation that is often used to process binary data or perform efficient mathematical calculations."}),"\n",(0,i.jsx)(t.p,{children:"For the maximum value of BIGINT type, 9223372036854775807, a one-bit left shift results in -2."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"BIT_SHIFT_LEFT( <x>, <bits>)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"parameter"}),(0,i.jsx)(t.th,{children:"description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<x>"})}),(0,i.jsx)(t.td,{children:"The number to be shifted"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<bits>"})}),(0,i.jsxs)(t.td,{children:["The number of bits to shift left. It is an integer that determines how many bits ",(0,i.jsx)(t.code,{children:"<x>"})," will be shifted left"]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(t.p,{children:"Returns an integer representing the result of a left shift operation."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select BIT_SHIFT_LEFT(5, 2), BIT_SHIFT_LEFT(-5, 2), BIT_SHIFT_LEFT(9223372036854775807, 1);\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+----------------------+-----------------------+----------------------------------------+\n| bit_shift_left(5, 2) | bit_shift_left(-5, 2) | bit_shift_left(9223372036854775807, 1) |\n+----------------------+-----------------------+----------------------------------------+\n|                   20 |                   -20 |                                     -2 |\n+----------------------+-----------------------+----------------------------------------+\n"})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let i={},l=s.createContext(i);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);