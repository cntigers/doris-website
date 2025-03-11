"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["428437"],{26563:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor","title":"SECOND_FLOOR","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-floor","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SECOND_FLOOR","language":"en"},"sidebar":"docs","previous":{"title":"DATE_FLOOR","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-floor"},"next":{"title":"MINUTE_FLOOR","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-floor"}}'),i=t("785893"),l=t("250065");let a={title:"SECOND_FLOOR",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The function aligns the input datetime value upwards to the nearest second boundary based on the specified period and returns the aligned datetime value."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECOND_FLOOR(<datetime>[, <period>][, <origin_datetime>])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"Required. The input datetime value. Supports the DATETIME type."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<period>"})}),(0,i.jsx)(n.td,{children:"Optional. Specifies the number of seconds in each period. Supports positive integers (INT). Defaults to 1 second."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<origin_datetime>"})}),(0,i.jsx)(n.td,{children:"Optional. The starting point for alignment. Supports the DATETIME type. Defaults to 0001-01-01T00:00:00 if not specified."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns a datetime value representing the input datetime aligned upwards to the nearest specified second boundary."}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is NULL, the function returns NULL."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is an invalid date (e.g., 0000-00-00T00:00:00), the function returns NULL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Only specifying ",(0,i.jsx)(n.code,{children:"<datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_FLOOR('2025-01-23 12:34:56');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------+\n| second_floor(cast('2025-01-23 12:34:56' as DATETIMEV2(0))) |\n+------------------------------------------------------------+\n| 2025-01-23 12:34:56                                        |\n+------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying ",(0,i.jsx)(n.code,{children:"<datetime>"})," and ",(0,i.jsx)(n.code,{children:"<origin_datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_FLOOR('2025-01-23 12:34:56', '2025-01-01 00:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------------------------------------+\n| second_floor(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), cast('2025-01-01 00:00:00' as DATETIMEV2(0))) |\n+----------------------------------------------------------------------------------------------------------+\n| 2025-01-23 12:34:56                                                                                      |\n+----------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying ",(0,i.jsx)(n.code,{children:"<datetime>"})," and ",(0,i.jsx)(n.code,{children:"<period>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_FLOOR('2025-01-23 12:34:56', 5)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| second_floor(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2025-01-23 12:34:55                                           |\n+---------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying ",(0,i.jsx)(n.code,{children:"<datetime>"}),"\uFF0C",(0,i.jsx)(n.code,{children:"<period>"})," and ",(0,i.jsx)(n.code,{children:"<origin_datetime>"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_FLOOR('2025-01-23 12:34:56', 10, '2025-01-23 12:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------------------------+\n| second_floor(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 10, cast('2025-01-23 12:00:00' as DATETIMEV2(0))) |\n+--------------------------------------------------------------------------------------------------------------+\n| 2025-01-23 12:34:50                                                                                          |\n+--------------------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);