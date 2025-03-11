"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["277252"],{195937:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/yearweek","title":"YEARWEEK","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/yearweek.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/yearweek","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/yearweek","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"YEARWEEK","language":"en"},"sidebar":"docs","previous":{"title":"WEEKOFYEAR","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weekofyear"},"next":{"title":"DAYNAME","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/dayname"}}'),s=n("785893"),i=n("250065");let r={title:"YEARWEEK",language:"en"},d=void 0,a={},c=[{value:"yearweek",id:"yearweek",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function h(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"yearweek",children:"yearweek"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"INT YEARWEEK(DATE date[, INT mode])"})}),"\n",(0,s.jsx)(t.p,{children:"Returns year and week for a date.The value of the mode argument defaults to 0.\nWhen the week of the date belongs to the previous year, the year and week of the previous year are returned;\nwhen the week of the date belongs to the next year, the year of the next year is returned and the week is 1."}),"\n",(0,s.jsx)(t.p,{children:"The following table describes how the mode argument works."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Mode"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"First day of week"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Range"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Week 1 is the first week \u2026"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Sunday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Sunday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Monday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Monday in this year"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The parameter is Date or Datetime type"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"YEARWEEK\n"})})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);