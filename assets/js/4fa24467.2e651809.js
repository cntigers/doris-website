"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["794882"],{267357:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>r,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/days-add","title":"DAYS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/days-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/days-add","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/days-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DAYS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"HOURS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/hours-sub"},"next":{"title":"DAYS_DIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/days-diff"}}'),d=t("785893"),a=t("250065");let i={title:"DAYS_ADD",language:"en"},l=void 0,o={},r=[{value:"days_add",id:"days_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"days_add",children:"days_add"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,d.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"DATETIME DAYS_ADD(DATETIME date, INT days)"})}),"\n",(0,d.jsx)(n.p,{children:"From date time or date plus specified days"}),"\n",(0,d.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mysql> select days_add(to_date(\"2020-02-02 02:02:02\"), 1);\n+---------------------------------------------+\n| days_add(to_date('2020-02-02 02:02:02'), 1) |\n+---------------------------------------------+\n| 2020-02-03                                  |\n+---------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"DAYS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},a=s.createContext(d);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);