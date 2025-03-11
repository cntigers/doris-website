"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["910367"],{679304:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/top-level-domain","title":"TOP_LEVEL_DOMAIN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/string-functions/top-level-domain.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/top-level-domain","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/top-level-domain","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TOP_LEVEL_DOMAIN","language":"en"},"sidebar":"docs","previous":{"title":"FIRST_SIGNIFICANT_SUBDOMAIN","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain"},"next":{"title":"QUOTE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/quote"}}'),t=l("785893"),i=l("250065");let r={title:"TOP_LEVEL_DOMAIN",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"The TOP_LEVEL_DOMAIN function is used to extract the top-level domain from a URL. If the input URL is invalid, it returns an empty string."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"TOP_LEVEL_DOMAIN(<url>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<url>"})}),(0,t.jsx)(e.td,{children:"The URL string from which to extract the top-level domain. Type: VARCHAR"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(e.p,{children:"Returns VARCHAR type, representing the extracted top-level domain."}),"\n",(0,t.jsx)(e.p,{children:"Special cases:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Returns NULL if url is NULL"}),"\n",(0,t.jsx)(e.li,{children:"Returns an empty string if url is not a valid URL format"}),"\n",(0,t.jsx)(e.li,{children:"For multi-level domains (e.g., .com.cn), returns the last level domain"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Basic domain processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT top_level_domain('www.baidu.com');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------------+\n| top_level_domain('www.baidu.com') |\n+-----------------------------------+\n| com                               |\n+-----------------------------------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Multi-level domain processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT top_level_domain('www.google.com.cn');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+\n| top_level_domain('www.google.com.cn') |\n+---------------------------------------+\n| cn                                    |\n+---------------------------------------+\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Invalid URL processing"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT top_level_domain('wwwwwwww');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| top_level_domain('wwwwwwww') |\n+------------------------------+\n|                              |\n+------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return a},a:function(){return r}});var s=l(667294);let t={},i=s.createContext(t);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);