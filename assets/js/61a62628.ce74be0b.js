"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["722198"],{201046:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/date-floor","title":"DATE_FLOOR","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-floor.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/date-floor","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-floor","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DATE_FLOOR","language":"en"},"sidebar":"docs","previous":{"title":"DATEDIFF","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/datediff"},"next":{"title":"SECOND_FLOOR","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor"}}'),l=t("785893"),r=t("250065");let a={title:"DATE_FLOOR",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"date_floor"})," rounds a given date to the closest lower boundary of the specified time interval."]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATE_FLOOR(<datetime>, INTERVAL <period> <type>)"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"datetime"})}),(0,l.jsx)(n.td,{children:"The argument is a valid date expression"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"period"})}),(0,l.jsx)(n.td,{children:"The argument specifies how many units make up each period, with the start time being 0001-01-01T00:00:00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"type"})}),(0,l.jsx)(n.td,{children:"The argument can be: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"The return value is a date or time, representing the result of rounding the input value down to the specified unit."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("0001-01-01 00:00:16",interval 5 second);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:16', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("0001-01-01 00:00:18",interval 5 second);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("2023-07-13 22:28:18",interval 5 minute);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| minute_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("2023-07-13 22:28:18",interval 5 hour);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| hour_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-07-13 18:00:00                                         |\n+-------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("2023-07-13 22:28:18",interval 5 day);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------+\n| day_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-10 00:00:00                                        |\n+------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("2023-07-13 22:28:18",interval 5 month);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------+\n| month_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-01 00:00:00                                          |\n+--------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select date_floor("2023-07-13 22:28:18",interval 5 year);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| year_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2021-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);