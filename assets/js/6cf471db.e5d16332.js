"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["310775"],{614041:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-data-types/date-time/TIME","title":"TIME","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-data-types/date-time/TIME.md","sourceDirName":"sql-manual/sql-data-types/date-time","slug":"/sql-manual/sql-data-types/date-time/TIME","permalink":"/docs/sql-manual/sql-data-types/date-time/TIME","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TIME","language":"en"},"sidebar":"docs","previous":{"title":"DATE","permalink":"/docs/sql-manual/sql-data-types/date-time/DATE"},"next":{"title":"DATETIME","permalink":"/docs/sql-manual/sql-data-types/date-time/DATETIME"}}'),a=n("785893"),i=n("250065");let l={title:"TIME",language:"en"},r=void 0,o={},d=[{value:"TIME",id:"time",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"time",children:"TIME"}),"\n",(0,a.jsx)(t.h3,{id:"name",children:"name"}),"\n",(0,a.jsx)(t.p,{children:"TIME"}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,a.jsxs)(t.p,{children:["TIME type\nTime type, can appear as a query result, does not support table storage for the time being. The storage range is ",(0,a.jsx)(t.code,{children:"[-838:59:59, 838:59:59]"}),".\nCurrently in Doris, the correctness of TIME as a result of calculations is guaranteed (e.g., functions such as ",(0,a.jsx)(t.code,{children:"timediff"}),"), but ",(0,a.jsx)(t.strong,{children:"manual CAST generation of the TIME type is not recommended"}),".\nThe calculation of TIME type in constant folding is prohibited."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"mysql> select timediff('2020-01-01 12:05:03', '2020-01-01 08:02:15');\n+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01 12:05:03' as DATETIMEV2(0)), cast('2020-01-01 08:02:15' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 04:02:48                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select timediff('2020-01-01', '2000-01-01');\n+------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01' as DATETIMEV2(0)), cast('2000-01-01' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------+\n| 838:59:59                                                                          |\n+------------------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"TIME\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let a={},i=s.createContext(a);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);