"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["939370"],{94038:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/quarter","title":"QUARTER","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/quarter.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/quarter","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/quarter","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"QUARTER","language":"en"},"sidebar":"docs","previous":{"title":"YEAR","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/year"},"next":{"title":"MONTH","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/month"}}'),i=t("785893"),s=t("250065");let l={title:"QUARTER",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The function returns the quarter (1 to 4) of the given date. Each quarter includes three months:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Q1: January to March"}),"\n",(0,i.jsx)(n.li,{children:"Q2: April to June"}),"\n",(0,i.jsx)(n.li,{children:"Q3: July to September"}),"\n",(0,i.jsx)(n.li,{children:"Q4: October to December"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"QUARTER(<datetime>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"A valid DATE or DATETIME value to determine the quarter."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns an integer representing the quarter of the input date, ranging from 1 to 4."}),"\n",(0,i.jsx)(n.li,{children:"If the input is NULL, the function returns NULL."}),"\n",(0,i.jsx)(n.li,{children:"If the input is an invalid date (e.g., 0000-00-00), the function returns NULL."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT QUARTER('2025-01-16'),QUARTER('2025-01-16 01:11:10');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+--------------------------------------------------+\n| quarter(cast('2025-01-16' as DATETIME)) | quarter(cast('2025-01-16 01:11:10' as DATETIME)) |\n+-----------------------------------------+--------------------------------------------------+\n|                                       1 |                                                1 |\n+-----------------------------------------+--------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(667294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);