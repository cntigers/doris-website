"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["395634"],{424093:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","title":"IPV6_CIDR_TO_RANGE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV6_CIDR_TO_RANGE","language":"en"},"sidebar":"docs","previous":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-cidr-to-range"},"next":{"title":"IS_IP_ADDRESS_IN_RANGE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range"}}'),s=t("785893"),r=t("250065");let a={title:"IPV6_CIDR_TO_RANGE",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Receive an IPv6 and an Int16 value containing CIDR. Returns a struct that contains two IPv6 fields representing the lower range (min) and higher range (max) of the subnet, respectively."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"IPV6_CIDR_TO_RANGE(ip_v6, cidr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<ip_v6>"})}),(0,s.jsx)(e.td,{children:"An IPv6 address of type String"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<cidr>"})}),(0,s.jsx)(e.td,{children:"The cidr value"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"Returns a struct that contains two IPv6 fields representing the lower range (min) and higher range (max) of the subnet, respectively."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"If input is NULL, the function returns NULL."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT ipv6_cidr_to_range(to_ipv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32), ipv6_cidr_to_range(NULL, NULL);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'+----------------------------------------------------------------------------+--------------------------------+\n| ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) | ipv6_cidr_to_range(NULL, NULL) |\n+----------------------------------------------------------------------------+--------------------------------+\n| {"min":"2001:db8::", "max":"2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}       | NULL                           |\n+----------------------------------------------------------------------------+--------------------------------+\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);