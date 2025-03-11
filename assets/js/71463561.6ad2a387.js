"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875653"],{43180:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/int-to-uuid","title":"INT_TO_UUID","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/string-functions/int-to-uuid.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/int-to-uuid","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/int-to-uuid","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"INT_TO_UUID","language":"en"},"sidebar":"docs","previous":{"title":"INSTR","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/instr"},"next":{"title":"LOCATE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/locate"}}'),i=t("785893"),r=t("250065");let l={title:"INT_TO_UUID",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"For an encoded LARGEINT input, convert it to a raw uuid string."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"INT_TO_UUID ( <int128> )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<int128>"})}),(0,i.jsx)(e.td,{children:"Encoded LARGEINT value"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(e.p,{children:["Parameter ",(0,i.jsx)(e.code,{children:"<int128>"})," Raw uuid string."]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT INT_TO_UUID(95721955514869408091759290071393952876)\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------+\n| int_to_uuid(95721955514869408091759290071393952876) |\n+-----------------------------------------------------+\n| 6ce4766f-6783-4b30-b357-bba1c7600348                |\n+-----------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);