"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["248875"],{234402:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/sec-to-time","title":"SEC_TO_TIME","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/sec-to-time.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/sec-to-time","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/sec-to-time","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SEC_TO_TIME","language":"en"},"sidebar":"docs","previous":{"title":"TIME_TO_SEC","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/time-to-sec"},"next":{"title":"EXTRACT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/extract"}}'),i=t("785893"),r=t("250065");let a={title:"SEC_TO_TIME",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SEC_TO_TIME"})," function converts a value in seconds into a ",(0,i.jsx)(n.code,{children:"TIME"})," type, returning the result in the format ",(0,i.jsx)(n.code,{children:"HH:MM:SS"}),".",(0,i.jsx)(n.br,{}),"\nThe input seconds represent the time elapsed since the start of a day (",(0,i.jsx)(n.code,{children:"00:00:00"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SEC_TO_TIME(<seconds>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<seconds>"})}),(0,i.jsx)(n.td,{children:"Required. The input number of seconds, representing the time elapsed since the start of a day (00:00:00). Supports positive or negative integers."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns a TIME value in the format ",(0,i.jsx)(n.code,{children:"HH:MM:SS"}),", representing the time calculated from the start of a day (00:00:00)."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<seconds>"}),"  is NULL, the function returns NULL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SEC_TO_TIME(59738);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| sec_to_time(59738) |\n+--------------------+\n| 16:35:38           |\n+--------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);