"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["671125"],{959244:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-to-ipv6","title":"IPV4_TO_IPV6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-to-ipv6.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-to-ipv6","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-to-ipv6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV4_TO_IPV6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_NUM_TO_STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-num-to-string"},"next":{"title":"IPV4_STRING_TO_NUM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num"}}'),s=t("785893"),l=t("250065");let c={title:"IPV4_TO_IPV6",language:"zh-CN"},r=void 0,o={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u53D7\u4E00\u4E2A\u7C7B\u578B\u4E3A IPv4 \u7684\u5730\u5740\uFF0C\u8FD4\u56DE\u76F8\u5E94 IPv6 \u7684\u5F62\u5F0F\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"IPV4_TO_IPV6(<ipv4>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<ipv4>"})}),(0,s.jsx)(e.td,{children:"ipv4 \u7C7B\u578B\u7684\u5730\u5740"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u8F6C\u5316\u540E\u7684 ipv6 \u5730\u5740"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select ipv6_num_to_string(ipv4_to_ipv6(to_ipv4('192.168.0.1')));\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------+\n| ipv6_num_to_string(ipv4_to_ipv6(to_ipv4('192.168.0.1'))) |\n+----------------------------------------------------------+\n| ::ffff:192.168.0.1                                       |\n+----------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var i=t(667294);let s={},l=i.createContext(s);function c(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);