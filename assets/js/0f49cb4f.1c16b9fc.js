"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["714459"],{113163:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub","title":"MICROSECONDS_SUB","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MICROSECONDS_SUB","language":"en"},"sidebar":"docs","previous":{"title":"MICROSECONDS_DIFF","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-diff"},"next":{"title":"MILLISECONDS_ADD","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add"}}'),i=t("785893"),r=t("250065");let c={title:"MICROSECONDS_SUB",language:"en"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Subtracts a specified number of microseconds from a datetime value and returns a new datetime value."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MICROSECONDS_SUB(<basetime>, <delta>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<basetime>"})}),(0,i.jsx)(n.td,{children:"The input datetime value, of type DATETIMEV2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<delta>"})}),(0,i.jsx)(n.td,{children:"The number of microseconds to subtract, of type INT; 1 second = 1,000,000 microseconds"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of type DATETIMEV2, representing the time value after subtracting the specified number of microseconds from the input datetime. The precision of the return value is the same as that of the input parameter basetime."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT NOW(3) AS current_time, MICROSECONDS_SUB(NOW(3), 100000) AS after_sub;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------+----------------------------+\n| current_time            | after_sub                  |\n+-------------------------+----------------------------+\n| 2025-01-16 11:52:22.296 | 2025-01-16 11:52:22.196000 |\n+-------------------------+----------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOW(3)"})," returns the current time with a precision of 3 decimal places."]}),"\n",(0,i.jsx)(n.li,{children:"After subtracting 100000 microseconds (0.1 seconds), the time decreases by 0.1 seconds."}),"\n",(0,i.jsx)(n.li,{children:"The function's result is dependent on the precision of the input time."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);