"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["620505"],{527875:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6","title":"TO_IPV6","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TO_IPV6","language":"en"},"sidebar":"docs","previous":{"title":"TO_IPV4_OR_NULL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv4-or-null"},"next":{"title":"TO_IPV6_OR_DEFAULT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-default"}}'),i=t("785893"),l=t("250065");let r={title:"TO_IPV6",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Convert a string form of IPv6 address to IPv6 type, which is binary equal to value returned by ipv6_string_to_num."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"TO_IPV6(<ipv6_str>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv6_str>"})}),(0,i.jsx)(e.td,{children:"An IPv6 address of type String"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Returns value of IPv6 type."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"If the IPv6 address has an invalid format, throw an exception"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT to_ipv6('::'),to_ipv6('2001:1b70:a1:610::b102:2');\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------+-------------------------------------+\n| to_ipv6('::') | to_ipv6('2001:1b70:a1:610::b102:2') |\n+---------------+-------------------------------------+\n| ::            | 2001:1b70:a1:610::b102:2            |\n+---------------+-------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);