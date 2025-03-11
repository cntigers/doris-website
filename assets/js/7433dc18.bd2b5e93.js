"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["798382"],{52555:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","title":"STR_TO_DATE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STR_TO_DATE","language":"en"},"sidebar":"docs","previous":{"title":"MAKEDATE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/makedate"},"next":{"title":"TIMEDIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff"}}'),i=t("785893"),r=t("250065");let a={title:"STR_TO_DATE",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The function converts the input datetime string into a DATETIME value based on the specified format."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"STR_TO_DATE(<datetime_str>, <format>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime_str>"})}),(0,i.jsx)(n.td,{children:"Required. The input datetime string to be converted."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<format>"})}),(0,i.jsx)(n.td,{children:"Required. The format string specifying the datetime structure, such as %Y-%m-%d %H:%i:%s or yyyy-MM-dd HH:mm:ss."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns a DATETIME value representing the converted datetime."}),"\n",(0,i.jsxs)(n.li,{children:["If the input ",(0,i.jsx)(n.code,{children:"<datetime_str>"})," or ",(0,i.jsx)(n.code,{children:"<format>"})," is invalid, the function returns NULL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Convert common datetime strings to DATETIME"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT STR_TO_DATE('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s'),STR_TO_DATE('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------+-----------------------------------------------------------+\n| str_to_date('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s') | str_to_date('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss') |\n+---------------------------------------------------------+-----------------------------------------------------------+\n| 2025-01-23 12:34:56.000000                              | 2025-01-23 12:34:56.000000                                |\n+---------------------------------------------------------+-----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Others"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select STR_TO_DATE('200442 Monday', '%X%V %W'),STR_TO_DATE('2023','%Y');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+---------------------------+\n| str_to_date('200442 Monday', '%X%V %W') | str_to_date('2023', '%Y') |\n+-----------------------------------------+---------------------------+\n| 2004-10-18                              | 2023-01-01                |\n+-----------------------------------------+---------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);