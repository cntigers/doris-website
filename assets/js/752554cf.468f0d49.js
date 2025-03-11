"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["280743"],{572258:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/from-microsecond","title":"FROM_MICROSECOND","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/from-microsecond.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/from-microsecond","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/from-microsecond","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FROM_MICROSECOND","language":"en"},"sidebar":"docs","previous":{"title":"MILLISECONDS_SUB","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-sub"},"next":{"title":"FROM_MILLISECOND","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/from-millisecond"}}'),i=t("785893"),r=t("250065");let l={title:"FROM_MICROSECOND",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The function converts a Unix timestamp (in microseconds) into a ",(0,i.jsx)(n.code,{children:"DATETIME"})," value."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"FROM_MICROSECOND(<unix_timestamp>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<unix_timestamp>"})}),(0,i.jsx)(n.td,{children:"Required. The Unix timestamp representing the number of microseconds elapsed since 1970-01-01 00:00:00 UTC."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns a DATETIME value representing the date and time corresponding to the given Unix timestamp."}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<unix_timestamp>"})," is NULL, the function returns NULL."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<unix_timestamp>"})," is out of valid range, the function returns an error."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT FROM_MICROSECOND(1700000000000000);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------------------------+\n| from_microsecond(1700000000000000) |\n+------------------------------------+\n| 2023-11-15 06:13:20                |\n+------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);