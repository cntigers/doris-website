"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["487837"],{394909:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","title":"MILLISECONDS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-add","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MILLISECONDS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"MICROSECONDS_SUB","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/microseconds-sub"},"next":{"title":"MILLISECONDS_DIFF","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/milliseconds-diff"}}'),i=t("785893"),l=t("250065");let a={title:"MILLISECONDS_ADD",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Adds a specified number of milliseconds to a datetime value and returns a new datetime value."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MILLISECONDS_ADD(<basetime>, <delta>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<basetime>"})}),(0,i.jsx)(n.td,{children:"The input datetime value, of type DATETIMEV2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<delta>"})}),(0,i.jsx)(n.td,{children:"The number of milliseconds to add, of type INT; 1 second = 1,000 milliseconds = 1,000,000 microseconds"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of type DATETIMEV2, representing the time value after adding the specified number of milliseconds to the input datetime. The precision of the return value is the same as that of the input parameter basetime."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT MILLISECONDS_ADD('2023-09-08 16:02:08.435123', 1);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------------+\n| milliseconds_add(cast('2023-09-08 16:02:08.435123' as DATETIMEV2(6)), 1) |\n+--------------------------------------------------------------------------+\n| 2023-09-08 16:02:08.436123                                               |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In the example, after adding 1 millisecond, the time increases from .435123 to .436123."}),"\n",(0,i.jsx)(n.li,{children:"1 millisecond equals 1000 microseconds."}),"\n",(0,i.jsx)(n.li,{children:"The function's result is dependent on the precision of the input time; the example uses a precision of 6 decimal places."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);