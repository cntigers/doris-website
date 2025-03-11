"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["471333"],{739354:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/parse-url","title":"PARSE_URL","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/parse-url.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/parse-url","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/parse-url","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"PARSE_URL","language":"en"},"sidebar":"docs","previous":{"title":"NGRAM_SEARCH","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/ngram-search"},"next":{"title":"PROTOCOL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/protocol"}}'),t=s("785893"),l=s("250065");let a={title:"PARSE_URL",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"\u76F8\u5173\u547D\u4EE4",id:"\u76F8\u5173\u547D\u4EE4",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The PARSE_URL function is mainly used to parse URL strings and extract various components from them, such as protocols, hosts, paths, query parameters, etc."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"PARSE_URL( <url>, <name> )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<url>"})}),(0,t.jsx)(n.td,{children:"URL that need to be parsed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<name>"})}),(0,t.jsxs)(n.td,{children:["The parts to be extracted, and the optional values include ",(0,t.jsx)(n.code,{children:"PROTOCOL"}),", ",(0,t.jsx)(n.code,{children:"HOST"}),", ",(0,t.jsx)(n.code,{children:"PATH"}),", ",(0,t.jsx)(n.code,{children:"REF"}),", ",(0,t.jsx)(n.code,{children:"AUTHORITY"}),", ",(0,t.jsx)(n.code,{children:"FILE"}),", ",(0,t.jsx)(n.code,{children:"USERINFO"}),", ",(0,t.jsx)(n.code,{children:"PORT"}),", ",(0,t.jsx)(n.code,{children:"QUERY"})," (case insensitive)."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a specified part of ",(0,t.jsx)(n.code,{children:"<url>"}),". Special cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"<name>"})," is passed with other illegal values, an error will be occurred."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT parse_url ('https://doris.apache.org/', 'HOST');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------+\n| parse_url('https://doris.apache.org/', 'HOST') |\n+------------------------------------------------+\n| doris.apache.org                               |\n+------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT parse_url ('https://doris.apache.org/', null);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------+\n| parse_url('https://doris.apache.org/', NULL) |\n+----------------------------------------------+\n| NULL                                         |\n+----------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u547D\u4EE4",children:"\u76F8\u5173\u547D\u4EE4"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u60F3\u83B7\u53D6 QUERY \u4E2D\u7684\u7279\u5B9A Parameter\uFF0C\u53EF\u4F7F\u7528",(0,t.jsx)(n.a,{href:"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/extract-url-parameter",children:"extract_url_parameter"}),"\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},l=r.createContext(t);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);