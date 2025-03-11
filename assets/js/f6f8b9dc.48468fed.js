"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["306611"],{331149:function(n,e,s){s.r(e),s.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-null","title":"IPV6_STRING_TO_NUM_OR_NULL","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-null.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-null","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-null","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV6_STRING_TO_NUM_OR_NULL","language":"en"},"sidebar":"docs","previous":{"title":"IPV6_STRING_TO_NUM_OR_DEFAULT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-string-to-num-or-default"},"next":{"title":"IS_IPV4_COMPAT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-compat"}}'),i=s("785893"),r=s("250065");let l={title:"IPV6_STRING_TO_NUM_OR_NULL",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"The reverse function of IPv6NumToString, it takes an IP address String and returns an IPv6 address in binary format."}),"\n",(0,i.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"INET6_ATON"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IPV6_STRING_TO_NUM_OR_NULL(<ipv6_string>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv6_string>"})}),(0,i.jsx)(e.td,{children:"An IPv6 address of type String"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Returns an IPv6 address in binary format."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If an illegal IP address is entered, ",(0,i.jsx)(e.code,{children:"NULL"})," is returned."]}),"\n",(0,i.jsx)(e.li,{children:"If the input string contains a valid IPv4 address, returns its IPv6 equivalent."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select hex(ipv6_string_to_num_or_null('1111::ffff')) as r1, hex(ipv6_string_to_num_or_null('192.168.0.1')) as r2, hex(ipv6_string_to_num_or_null('notaaddress')) as r3;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------+----------------------------------+------+\n| r1                               | r2                               | r3   |\n+----------------------------------+----------------------------------+------+\n| 1111000000000000000000000000FFFF | 00000000000000000000FFFFC0A80001 | NULL |\n+----------------------------------+----------------------------------+------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);