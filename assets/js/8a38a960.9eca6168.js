"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["609250"],{273229:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>u,contentTitle:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/truncate","title":"TRUNCATE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/numeric-functions/truncate.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/truncate","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/truncate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TRUNCATE","language":"en"},"sidebar":"docs","previous":{"title":"XOR","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/xor"},"next":{"title":"SQRT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/numeric-functions/sqrt"}}'),s=t("785893"),a=t("250065");let l={title:"TRUNCATE",language:"en"},c=void 0,i={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Perform numerical truncation on x to the number of decimal places d"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TRUNCATE(<x>, <d>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<x>"})}),(0,s.jsx)(n.td,{children:"The value that needs to be numerically truncated"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<d>"})}),(0,s.jsx)(n.td,{children:"The number of decimal places to retain"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Perform numerical truncation on x to the number of decimal places d. Truncation rules:"}),"\n",(0,s.jsx)(n.p,{children:"If d is a literal:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When d > 0: Keep d decimal places of x."}),"\n",(0,s.jsx)(n.li,{children:"When d = 0: Remove the decimal part of x and retain only the integer part."}),"\n",(0,s.jsx)(n.li,{children:"When d < 0: Remove the decimal part of x and replace the integer part with the number of digits specified by d, using the digit 0."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If d is a column, and the first argument is of type Decimal, then the resulting Decimal will have the same number of decimal places as the input Decimal"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"d is a litera"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select truncate(124.3867, 2),truncate(124.3867, 0),truncate(124.3867, -2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------------+-----------------------+------------------------+\n| truncate(124.3867, 2) | truncate(124.3867, 0) | truncate(124.3867, -2) |\n+-----------------------+-----------------------+------------------------+\n|                124.38 |                   124 |                    100 |\n+-----------------------+-----------------------+------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"d is a column"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select cast("123.123456" as Decimal(9,6)), number, truncate(cast ("123.123456" as Decimal(9,6)), number) from numbers("number"="5");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------------+--------+----------------------------------------------------------------------+\n| cast('123.123456' as DECIMALV3(9, 6)) | number | truncate(cast('123.123456' as DECIMALV3(9, 6)), cast(number as INT)) |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n|                            123.123456 |      0 |                                                           123.000000 |\n|                            123.123456 |      1 |                                                           123.100000 |\n|                            123.123456 |      2 |                                                           123.120000 |\n|                            123.123456 |      3 |                                                           123.123000 |\n|                            123.123456 |      4 |                                                           123.123400 |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(667294);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);