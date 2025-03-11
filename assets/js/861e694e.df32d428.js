"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["461500"],{973629:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/seconds-diff","title":"SECONDS_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/seconds-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/seconds-diff","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SECONDS_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"SECONDS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-add"},"next":{"title":"SECONDS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-sub"}}'),i=t("785893"),r=t("250065");let d={title:"SECONDS_DIFF",language:"en"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The function calculates the time difference between two datetime values and returns the difference in seconds."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECONDS_DIFF(<end_datetime>, <start_datetime>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<end_datetime>"})}),(0,i.jsx)(n.td,{children:"Required. The ending datetime value. Supports the DATETIME and DATE type."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<start_datetime>"})}),(0,i.jsx)(n.td,{children:"Required. The starting datetime value. Supports the DATETIME and DATE type."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns an integer representing the difference in seconds between two datetime values:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," is later than ",(0,i.jsx)(n.code,{children:"<start_datetime>"}),", returns a positive value."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," is earlier than ",(0,i.jsx)(n.code,{children:"<start_datetime>"}),", returns a negative value."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<end_datetime>"})," and ",(0,i.jsx)(n.code,{children:"<start_datetime>"})," are equal, returns 0."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If either parameter is NULL, the function returns NULL."}),"\n",(0,i.jsx)(n.li,{children:"If the input datetime values are invalid (e.g., 0000-00-00T00:00:00), the function returns NULL."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECONDS_DIFF('2025-01-23 12:35:56', '2025-01-23 12:34:56');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------------------------------------+\n| seconds_diff(cast('2025-01-23 12:35:56' as DATETIMEV2(0)), cast('2025-01-23 12:34:56' as DATETIMEV2(0))) |\n+----------------------------------------------------------------------------------------------------------+\n|                                                                                                       60 |\n+----------------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);