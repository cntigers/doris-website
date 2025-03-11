"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["289290"],{480536:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range","title":"IS_IP_ADDRESS_IN_RANGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IS_IP_ADDRESS_IN_RANGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV6_CIDR_TO_RANGE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/ipv6-cidr-to-range"},"next":{"title":"IS_IPV4_STRING","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string"}}'),t=s("785893"),l=s("250065");let r={title:"IS_IP_ADDRESS_IN_RANGE",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5224\u65AD IP\uFF08IPv4 \u6216 IPv6\uFF09\u5730\u5740\u662F\u5426\u5305\u542B\u5728\u4EE5 CIDR \u8868\u793A\u6CD5\u8868\u793A\u7684\u7F51\u7EDC\u4E2D\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"IS_IP_ADDRESS_IN_RANGE(ip_str, cidr_prefix)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<ip_str>"})}),(0,t.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684 ipv4 \u6216\u8005 ipv6 \u5730\u5740"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<cidr_prefix>"})}),(0,t.jsx)(e.td,{children:"cidr \u524D\u7F00"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C IP\uFF08IPv4 \u6216 IPv6\uFF09\u5730\u5740\u662F\u5305\u542B\u5728\u4EE5 CIDR \u8868\u793A\u6CD5\u8868\u793A\u7684\u7F51\u7EDC\u4E2D\uFF0C\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u503C\u4E3A NULL, \u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT is_ip_address_in_range('127.0.0.1', '127.0.0.0/8') as v4, is_ip_address_in_range('::ffff:192.168.0.1', '::ffff:192.168.0.4/128') as v6, is_ip_address_in_range('127.0.0.1', NULL) as nil;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------+------+------+\n| v4   | v6   | nil  |\n+------+------+------+\n|    1 |    0 | NULL |\n+------+------+------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var i=s(667294);let t={},l=i.createContext(t);function r(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);