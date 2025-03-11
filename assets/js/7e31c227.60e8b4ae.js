"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["589707"],{56362:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>r,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/year-ceil","title":"year_ceil","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/year-ceil.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/year-ceil","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/year-ceil","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"year_ceil","language":"en"},"sidebar":"docs","previous":{"title":"MONTH_CEIL","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/month-ceil"},"next":{"title":"MICROSECOND","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond"}}'),s=i("785893"),l=i("250065");let a={title:"year_ceil",language:"en"},c=void 0,r={},o=[{value:"year_ceil",id:"year_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"year_ceil",children:"year_ceil"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DATETIME YEAR_CEIL(DATETIME datetime)\nDATETIME YEAR_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME YEAR_CEIL(DATETIME datetime, INT period)\nDATETIME YEAR_CEIL(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert the date to the nearest rounding up time of the specified time interval period."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,s.jsx)(n.li,{children:"period: specifies how many years each cycle consists of."}),"\n",(0,s.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select year_ceil(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| year_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2025-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"YEAR_CEIL, YEAR, CEIL\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date-ceil",children:"date_ceil"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var t=i(667294);let s={},l=t.createContext(s);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);