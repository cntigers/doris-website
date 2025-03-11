"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["446303"],{616188:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-default","title":"TO_IPV6_OR_DEFAULT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-default.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-default","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-default","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TO_IPV6_OR_DEFAULT","language":"en"},"sidebar":"docs","previous":{"title":"TO_IPV6","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6"},"next":{"title":"TO_IPV6_OR_NULL","permalink":"/docs/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-null"}}'),l=t("785893"),i=t("250065");let r={title:"TO_IPV6_OR_DEFAULT",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Convert a string form of IPv6 address to IPv6 type."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"TO_IPV6_OR_DEFAULT(<ipv6_str>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<ipv6_str>"})}),(0,l.jsx)(e.td,{children:"An IPv6 address of type String"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(e.p,{children:"Returns value of IPv6 type."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"If the IPv6 address has an invalid format, returns :: (0 as IPv6)."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT to_ipv6_or_default('.'), to_ipv6_or_default('2001:1b70:a1:610::b102:2');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+------------------------------------------------+\n| to_ipv6_or_default('.') | to_ipv6_or_default('2001:1b70:a1:610::b102:2') |\n+-------------------------+------------------------------------------------+\n| ::                      | 2001:1b70:a1:610::b102:2                       |\n+-------------------------+------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);