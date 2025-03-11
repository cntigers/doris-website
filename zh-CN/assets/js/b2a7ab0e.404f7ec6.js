"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["169841"],{405097:function(n,e,i){i.r(e),i.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string","title":"IS_IPV4_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv4-string","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IS_IPV4_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IS_IP_ADDRESS_IN_RANGE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ip-address-in-range"},"next":{"title":"IS_IPV6_STRING","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/is-ipv6-string"}}'),t=i("785893"),l=i("250065");let r={title:"IS_IPV4_STRING",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u63A5\u6536\u4E00\u4E2A\u8868\u793A\u5F62\u5F0F\u4E3A\u5B57\u7B26\u4E32\u7684 IPv4 \u5730\u5740\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u4E3A\u683C\u5F0F\u6B63\u786E\u4E14\u5408\u6CD5\u7684 IPv4 \u5730\u5740\uFF0C\u8FD4\u56DE true\uFF1B\u53CD\u4E4B\uFF0C\u8FD4\u56DE false\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"IS_IPV4_STRING(<ipv4_str>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<ipv4_str>"})}),(0,t.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684 ipv4 \u5730\u5740"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C\u4E3A\u683C\u5F0F\u6B63\u786E\u4E14\u5408\u6CD5\u7684 IPv4 \u5730\u5740\uFF0C\u8FD4\u56DE true\uFF1B\u53CD\u4E4B\uFF0C\u8FD4\u56DE false\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u4E3A NULL, \u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `test_is_ipv4_string` (\n      `id` int,\n      `ip_v4` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n\ninsert into test_is_ipv4_string values(0, NULL), (1, '0.0.0.'), (2, ''), (3, '.'), (4, '255.255.255.255');\n\nselect id, ip_v4, is_ipv4_string(ip_v4) from test_is_ipv4_string order by id;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------+-----------------+-----------------------+\n| id   | ip_v4           | is_ipv4_string(ip_v4) |\n+------+-----------------+-----------------------+\n|    0 | NULL            |                  NULL |\n|    1 | 0.0.0.          |                     0 |\n|    2 |                 |                     0 |\n|    3 | .               |                     0 |\n|    4 | 255.255.255.255 |                     1 |\n+------+-----------------+-----------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return r}});var s=i(667294);let t={},l=s.createContext(t);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);