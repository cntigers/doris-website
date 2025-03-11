"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["702062"],{442e3:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default","title":"IPV4_STRING_TO_NUM_OR_DEFAULT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/ip-functions","slug":"/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-default","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV4_STRING_TO_NUM_OR_DEFAULT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num"},"next":{"title":"IPV4_STRING_TO_NUM_OR_NULL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/ip-functions/ipv4-string-to-num-or-null"}}'),i=t("785893"),l=t("250065");let r={title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u83B7\u53D6\u5305\u542B IPv4 \u5730\u5740\u7684\u5B57\u7B26\u4E32\uFF0C\u683C\u5F0F\u4E3A A.B.C.D\uFF08\u70B9\u5206\u9694\u7684\u5341\u8FDB\u5236\u6570\u5B57\uFF09\u3002\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"IPV4_STRING_TO_NUM_OR_DEFAULT(<ipv4_string>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<ipv4_string>"})}),(0,i.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B\u7684 ipv4 \u5730\u5740\uFF0C\u4F8B\u5982 'A.B.C.D'"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u662F\u6709\u6548\u7684 IPv4 \u5730\u5740\u6216\u8005 ",(0,i.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5C06\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select ipv4_string_to_num_or_default('192.168.0.1');\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------+ \n| ipv4_string_to_num_or_default('192.168.0.1') | \n+----------------------------------------------+ \n| 3232235521                                   | \n+----------------------------------------------+ \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select str, ipv4_string_to_num_or_default(str) from ipv4_str; \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------------+------------------------------------+ \n|str              | ipv4_string_to_num_or_default(str) | \n+-----------------+------------------------------------+ \n| 0.0.0.0         | 0                                  | \n| 127.0.0.1       | 2130706433                         | \n| 255.255.255.255 | 4294967295                         | \n| invalid         | 0                                  | \n+-----------------+------------------------------------+ \n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);