"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["630505"],{117305:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/minute-floor","title":"MINUTE_FLOOR","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-floor.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-floor","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-floor","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MINUTE_FLOOR","language":"en"},"sidebar":"docs","previous":{"title":"SECOND_FLOOR","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor"},"next":{"title":"HOUR_FLOOR","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/hour-floor"}}'),s=t("785893"),r=t("250065");let l={title:"MINUTE_FLOOR",language:"en"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2},{value:"Best Practices",id:"best-practices",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Rounds down a datetime value to the nearest specified minute interval. If a starting time (origin) is provided, it uses that time as the reference for calculating the interval."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"MINUTE_FLOOR(<datetime>)\nMINUTE_FLOOR(<datetime>, <origin>)\nMINUTE_FLOOR(<datetime>, <period>)\nMINUTE_FLOOR(<datetime>, <period>, <origin>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<datetime>"})}),(0,s.jsx)(n.td,{children:"The datetime value to round down, of type DATETIME or DATETIMEV2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<period>"})}),(0,s.jsx)(n.td,{children:"The minute interval value, of type INT, representing the number of minutes in each interval"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<origin>"})}),(0,s.jsx)(n.td,{children:"The starting point for the interval, of type DATETIME or DATETIMEV2; defaults to 0001-01-01 00:00:00"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of type DATETIMEV2, representing the rounded-down datetime value."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SELECT MINUTE_FLOOR("2023-07-13 22:28:18", 5);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| minute_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If no period is specified, it defaults to a 1-minute interval."}),"\n",(0,s.jsx)(n.li,{children:"The period must be a positive integer."}),"\n",(0,s.jsx)(n.li,{children:"The result is always rounded down to a past time."}),"\n",(0,s.jsx)(n.li,{children:"Unlike MINUTE_CEIL, MINUTE_FLOOR always discards the portion that exceeds the interval."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date-floor",children:"date_floor"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);