"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["668447"],{580443:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-ceil","title":"date_ceil","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/date-ceil.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/date-ceil","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"date_ceil","language":"en"},"sidebar":"docs","previous":{"title":"year_floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/year-floor"},"next":{"title":"SECOND_CEIL","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/second-ceil"}}'),l=i("785893"),s=i("250065");let c={title:"date_ceil",language:"en"},r=void 0,a={},d=[{value:"date_ceil",id:"date_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"date_ceil",children:"date_ceil"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)"})}),"\n",(0,l.jsx)(n.p,{children:"Convert the date to the nearest rounding up time of the specified time interval period."}),"\n",(0,l.jsx)(n.p,{children:"The datetime parameter is a valid date expression."}),"\n",(0,l.jsx)(n.p,{children:"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"}),"\n",(0,l.jsx)(n.p,{children:"type \uFF1AYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"DATE_CEIL,DATE,CEIL\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,l.jsx)(n.p,{children:"See also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./second_ceil",children:"second_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./minute_ceil",children:"minute_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./hour_ceil",children:"hour_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./day_ceil",children:"day_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./month_ceil",children:"month_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./year_ceil",children:"year_ceil"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var t=i(667294);let l={},s=t.createContext(l);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);