"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["859150"],{40690:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>u,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/round-bankers","title":"ROUND_BANKERS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/round-bankers.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/round-bankers","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/round-bankers","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ROUND_BANKERS","language":"en"},"sidebar":"docs","previous":{"title":"ROUND","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/round"},"next":{"title":"TRUNCATE","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/truncate"}}'),t=s("785893"),i=s("250065");let o={title:"ROUND_BANKERS",language:"en"},l=void 0,u={},d=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"round_bankers",children:"round_bankers"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"T round_bankers(T x[, d])"}),"\nRounds the argument ",(0,t.jsx)(e.code,{children:"x"})," to ",(0,t.jsx)(e.code,{children:"d"})," specified decimal places. ",(0,t.jsx)(e.code,{children:"d"})," defaults to 0 if not specified. If d is negative, the left d digits of the decimal point are 0. If x or d is null, null is returned."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"If the rounding number is halfway between two numbers, the function uses banker\u2019s rounding."}),"\n",(0,t.jsx)(e.li,{children:"In other cases, the function rounds numbers to the nearest integer."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"round_bankers\n"})})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);