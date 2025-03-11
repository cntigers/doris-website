"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["388480"],{46130:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/month-floor","title":"month_floor","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/month-floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/month-floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/month-floor","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"month_floor","language":"en"},"sidebar":"docs","previous":{"title":"day_floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/day-floor"},"next":{"title":"year_floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/year-floor"}}'),i=t("785893"),s=t("250065");let l={title:"month_floor",language:"en"},r=void 0,a={},c=[{value:"month_floor",id:"month_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"month_floor",children:"month_floor"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DATETIME MONTH_FLOOR(DATETIME datetime)\nDATETIME MONTH_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME MONTH_FLOOR(DATETIME datetime, INT period)\nDATETIME MONTH_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Convert the date to the nearest rounding down time of the specified time interval period."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,i.jsx)(n.li,{children:"period: specifies how many months each cycle consists of."}),"\n",(0,i.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select month_floor(\"2023-07-13 22:28:18\", 5);\n+--------------------------------------------------------------+\n| month_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-05-01 00:00:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.12 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MONTH_FLOOR, MONTH, FLOOR\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"./date_floor",children:"date_floor"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var o=t(667294);let i={},s=o.createContext(i);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);