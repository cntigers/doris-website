"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["159675"],{727563:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/from-iso8601-date","title":"FROM_ISO8601_DATE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/from-iso8601-date.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/from-iso8601-date","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/from-iso8601-date","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FROM_ISO8601_DATE","language":"en"}}'),r=t("785893"),a=t("250065");let i={title:"FROM_ISO8601_DATE",language:"en"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Converts an ISO8601 formatted date expression to a DATE type date expression."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"from_iso8601_date(<dt>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<dt>"})}),(0,r.jsx)(n.td,{children:"An ISO8601 formatted date"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"A DATE type date expression."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT from_iso8601_date('0000-01'),from_iso8601_date('0000-W01'),from_iso8601_date('0000-059');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------------------------------+-------------------------------+-------------------------------+\n| from_iso8601_date('0000-01') | from_iso8601_date('0000-W01') | from_iso8601_date('0000-059') |\n+------------------------------+-------------------------------+-------------------------------+\n| 0000-01-01                   | 0000-01-03                    | 0000-02-28                    |\n+------------------------------+-------------------------------+-------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);