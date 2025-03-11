"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["627118"],{644:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-add","title":"SECONDS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-add","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-add","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SECONDS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"MINUTES_SUB","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-sub"},"next":{"title":"SECONDS_DIFF","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-diff"}}'),i=t("785893"),a=t("250065");let d={title:"SECONDS_ADD",language:"en"},r=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",datetime:"datetime",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The function adds or subtracts a specified number of seconds to/from a given datetime value and returns the resulting\ndatetime."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECONDS_ADD(<datetime>, <seconds>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"Required. The input datetime value. Supports the DATETIME and DATE type."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<seconds>"})}),(0,i.jsx)(n.td,{children:"Required. The number of seconds to add or subtract. Supports integers (INT). Positive numbers add seconds, while negative numbers subtract seconds."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns a datetime value of the same type as the input ",(0,i.jsx)(n.datetime,{children:"."})]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is NULL, the function returns NULL."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is an invalid date (e.g., 0000-00-00T00:00:00), the function returns NULL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SELECT SECONDS_ADD('2025-01-23 12:34:56', 30),SECONDS_ADD('2025-01-23 12:34:56', -30);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+----------------------------------------------------------------+\n| seconds_add(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 30) | seconds_add(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), -30) |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n| 2025-01-23 12:35:26                                           | 2025-01-23 12:34:26                                            |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let i={},a=s.createContext(i);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);