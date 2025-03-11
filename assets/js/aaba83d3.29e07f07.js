"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["227154"],{52307:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/max-by","title":"MAX_BY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/max-by.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/max-by","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/max-by","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MAX_BY","language":"en"},"sidebar":"docs","previous":{"title":"MAX","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/max"},"next":{"title":"AVG","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg"}}'),r=t("785893"),a=t("250065");let l={title:"MAX_BY",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",expr1:"expr1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The MAX_BY function is used to return the corresponding associated value based on the maximum value of the specified column."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MAX_BY(<expr1>, <expr2>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameters"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr1>"})}),(0,r.jsx)(n.td,{children:"The expression used to specify the corresponding association."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr2>"})}),(0,r.jsx)(n.td,{children:"The expression used to specify the maximum value for statistics."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the same data type as the input expression ",(0,r.jsx)(n.expr1,{children:"."})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select * from tbl;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+------+------+\n| k1   | k2   | k3   | k4   |\n+------+------+------+------+\n|    0 | 3    | 2    |  100 |\n|    1 | 2    | 3    |    4 |\n|    4 | 3    | 2    |    1 |\n|    3 | 4    | 2    |    1 |\n+------+------+------+------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select max_by(k1, k4) from tbl;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| max_by(`k1`, `k4`) |\n+--------------------+\n|                  0 |\n+--------------------+ \n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);