"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["10913"],{58467:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","title":"IS_IPV4_MAPPED","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IS_IPV4_MAPPED","language":"en"},"sidebar":"docs","previous":{"title":"IS_IPV4_COMPAT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-compat"},"next":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-cidr-to-range"}}'),i=s("785893"),r=s("250065");let a={title:"IS_IPV4_MAPPED",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This function takes an IPv6 address represented in numeric form as a binary string, as returned by INET6_ATON().INET6_ATON is also named IPV6_STRING_TO_NUM_OR_NULL."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IPv4-mapped addresses have the form ",(0,i.jsx)(n.code,{children:"::ffff:ipv4_address"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"IS_IPV4_MAPPED(INET6_ATON(<ipv4_addr>))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<ipv4_addr>"})}),(0,i.jsx)(n.td,{children:"An IPv4-compatible addresses, it is like '::ipv4_address'"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns 1 if the argument is a valid IPv4-mapped IPv6 address, 0 otherwise."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If input is NULL, the function returns NULL."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT IS_IPV4_MAPPED(INET6_ATON('::ffff:10.0.5.9')) AS re1, IS_IPV4_MAPPED(INET6_ATON('::10.0.5.9')) AS re2;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------+------+\n| re1  | re2  |\n+------+------+\n|    1 |    0 |\n+------+------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);