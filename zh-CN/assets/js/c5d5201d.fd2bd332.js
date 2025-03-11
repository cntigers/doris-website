"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["949058"],{540720:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","title":"IS_IPV4_MAPPED","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-mapped","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IS_IPV4_MAPPED","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IS_IPV4_COMPAT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-compat"},"next":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-cidr-to-range"}}'),t=s("785893"),l=s("250065");let c={title:"IS_IPV4_MAPPED",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u51FD\u6570\u91C7\u7528\u4EE5\u6570\u5B57\u5F62\u5F0F\u8868\u793A\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684 lPv6 \u5730\u5740\uFF0C\u7531 INET6_ATON \u8FD4\u56DE\u3002INET6_ATON \u662F IPV6_STRING_TO_NUM_OR_NULL \u7684\u522B\u540D"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["IPv4 \u6620\u5C04\u5730\u5740\u7684\u683C\u5F0F\u4E3A",(0,t.jsx)(e.code,{children:"::ffff:ipv4_address"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"IS_IPV4_MAPPED(INET6_ATON(<ipv4_addr>))\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<ipv4_addr>"})}),(0,t.jsx)(e.td,{children:"\u517C\u5BB9 ipv4 \u7684\u5730\u5740\uFF0C\u4F8B\u5982 '::ipv4_address'"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C\u53C2\u6570\u662F\u6709\u6548\u7684 IPv4 \u6620\u5C04 IPv6 \u5730\u5740\uFF0C\u5219\u8FD4\u56DE 1\uFF0C\u5426\u5219\u8FD4\u56DE 0\uFF0C"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u4E3A NULL, \u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT IS_IPV4_MAPPED(INET6_ATON('::ffff:10.0.5.9')) AS re1, IS_IPV4_MAPPED(INET6_ATON('::10.0.5.9')) AS re2;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------+------+\n| re1  | re2  |\n+------+------+\n|    1 |    0 |\n+------+------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var i=s(667294);let t={},l=i.createContext(t);function c(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);