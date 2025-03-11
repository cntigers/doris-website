"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["153974"],{15719:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>u,contentTitle:()=>d});var o=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/round","title":"ROUND","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/round.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/round","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/round","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ROUND","language":"en"},"sidebar":"docs","previous":{"title":"PMOD","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod"},"next":{"title":"ROUND_BANKERS","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/round-bankers"}}'),s=t("785893"),i=t("250065");let r={title:"ROUND",language:"en"},d=void 0,l={},u=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"round",children:"round"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"T round(T x[, d])"}),"\nRounds the argument ",(0,s.jsx)(e.code,{children:"x"})," to ",(0,s.jsx)(e.code,{children:"d"})," decimal places. ",(0,s.jsx)(e.code,{children:"d"})," defaults to 0 if not specified. If d is negative, the left d digits of the decimal point are 0. If x or d is null, null is returned.\n2.5 will round up to 3. If you want to round down to 2, please use the round_bankers function."]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["Another alias for this function is ",(0,s.jsx)(e.code,{children:"dround"}),"."]})}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"ROUND, DROUND\n"})})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var o=t(667294);let s={},i=o.createContext(s);function r(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);