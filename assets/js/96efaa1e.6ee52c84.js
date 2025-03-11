"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["394069"],{246552:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/cut-to-first-significant-subdomain","title":"CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/cut-to-first-significant-subdomain.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/cut-to-first-significant-subdomain","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/cut-to-first-significant-subdomain","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN","language":"en"},"sidebar":"docs","previous":{"title":"tokenize","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/tokenize"},"next":{"title":"FIRST_SIGNIFICANT_SUBDOMAIN","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain"}}'),t=s("785893"),r=s("250065");let a={title:"CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:'The CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN function extracts the effective part of a domain from a URL, including the top-level domain up to the "first significant subdomain". If the input URL is invalid, it returns an empty string.'}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN(<url>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<url>"})}),(0,t.jsx)(e.td,{children:"The URL string to be processed. Type: VARCHAR"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(e.p,{children:"Returns VARCHAR type, representing the extracted domain part."}),"\n",(0,t.jsx)(e.p,{children:"Special cases:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"If url is NULL, returns NULL"}),"\n",(0,t.jsx)(e.li,{children:"If url is not a valid domain format, returns an empty string"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Basic domain processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT cut_to_first_significant_subdomain('www.baidu.com');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------+\n| cut_to_first_significant_subdomain('www.baidu.com') |\n+-----------------------------------------------------+\n| baidu.com                                           |\n+-----------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Multi-level domain processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT cut_to_first_significant_subdomain('www.google.com.cn');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------+\n| cut_to_first_significant_subdomain('www.google.com.cn') |\n+---------------------------------------------------------+\n| google.com.cn                                           |\n+---------------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Invalid domain processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT cut_to_first_significant_subdomain('wwwwwwww');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------+\n| cut_to_first_significant_subdomain('wwwwwwww') |\n+------------------------------------------------+\n|                                                |\n+------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);