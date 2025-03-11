"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["197310"],{569862:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/years-diff","title":"YEARS_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/years-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/years-diff","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/years-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"YEARS_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"YEARS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/years-add"},"next":{"title":"YEARS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/years-sub"}}'),i=t("785893"),r=t("250065");let a={title:"YEARS_DIFF",language:"en"},d=void 0,l={},o=[{value:"years_diff",id:"years_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"years_diff",children:"years_diff"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT years_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,i.jsx)(n.p,{children:"The difference between the start time and the end time is several years"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select years_diff('2020-12-25','2019-10-25');\n+----------------------------------------------------------+\n| years_diff('2020-12-25 00:00:00', '2019-10-25 00:00:00') |\n+----------------------------------------------------------+\n|                                                        1 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"years_diff\n"})})]})}function f(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);