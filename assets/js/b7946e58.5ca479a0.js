"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["668915"],{443431:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/mask/mask-last-n","title":"MASK_LAST_N","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/mask/mask-last-n.md","sourceDirName":"sql-manual/sql-functions/string-functions/mask","slug":"/sql-manual/sql-functions/string-functions/mask/mask-last-n","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/mask/mask-last-n","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MASK_LAST_N","language":"en"},"sidebar":"docs","previous":{"title":"MASK_FIRST_N","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/mask/mask-first-n"},"next":{"title":"LIKE","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/like/"}}'),a=s("785893"),l=s("250065");let r={title:"MASK_LAST_N",language:"en"},i=void 0,o={},c=[{value:"mask_last_n",id:"mask_last_n",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"mask_last_n",children:"mask_last_n"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"VARCHAR mask_last_n(VARCHAR str[, INT n])"})}),"\n",(0,a.jsx)(e.p,{children:'Returns a masked version of str with the last n values masked. Upper case letters are converted to "X", lower case letters are converted to "x" and numbers are converted to "n". For example, mask_last_n("1234-5678-8765-4321", 4) results in 1234-5678-8765-nnnn.'}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask_last_n(name, 5) from test;\n+------------------------+\n| mask_last_n(`name`, 5) |\n+------------------------+\n| abc1nnXXX              |\n| NULL                   |\n| 456AxXxXx              |\n+------------------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mask_last_n\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var t=s(667294);let a={},l=t.createContext(a);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);