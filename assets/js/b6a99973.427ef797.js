"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["998724"],{939679:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>u,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub","title":"QUARTERS_SUB","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"QUARTERS_SUB","language":"en"},"sidebar":"docs","previous":{"title":"MONTHS_SUB","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub"},"next":{"title":"QUARTERS_ADD","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add"}}'),r=t("785893"),a=t("250065");let i={title:"QUARTERS_SUB",language:"en"},l=void 0,d={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The function adds or subtracts a specified number of quarters to/from a given date or datetime value and returns the resulting date."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"QUARTERS_SUB(<date/datetime>, <quarters>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<date/datetime>"})}),(0,r.jsx)(n.td,{children:"The input date or datetime value, supports DATE or DATETIME types."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<quarters>"})}),(0,r.jsx)(n.td,{children:"The number of quarters to add or subtract. Positive integers add quarters, while negative integers subtract quarters."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns a date value consistent with the input date type."}),"\n",(0,r.jsx)(n.li,{children:"If <date/datetime> is NULL, the function returns NULL."}),"\n",(0,r.jsx)(n.li,{children:"If <date/datetime> is an invalid date (e.g., 0000-00-00), the function returns NULL."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:' select quarters_sub("2020-01-31 02:02:02", 1);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| quarters_sub(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) |\n+---------------------------------------------------------------+\n| 2019-10-31 02:02:02                                           |\n+---------------------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);