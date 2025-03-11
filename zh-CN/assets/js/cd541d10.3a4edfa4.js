"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["51503"],{757279:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/concat","title":"CONCAT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/concat.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/concat","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/concat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CONCAT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CHAR","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/char"},"next":{"title":"COMPRESS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/compress"}}'),c=t("785893"),l=t("250065");let i={title:"CONCAT",language:"zh-CN"},r=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u5C06\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDE\u63A5\u8D77\u6765\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5982\u679C\u53C2\u6570\u4E2D\u4EFB\u610F\u4E00\u4E2A\u503C\u662F NULL\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F NULL"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CONCAT ( <expr> [ , <expr> ... ] )\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<expr>"})}),(0,c.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8FDE\u63A5\u5230\u4E00\u8D77\u7684\u5B57\u7B26\u4E32"})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(e.p,{children:["\u53C2\u6570\u5217\u8868 ",(0,c.jsx)(e.code,{children:"<expr>"})," \u8FDE\u63A5\u5230\u4E00\u8D77\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5982\u679C\u53C2\u6570\u4E2D\u4EFB\u610F\u4E00\u4E2A\u503C\u662F NULL\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F NULL"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'SELECT  CONCAT("a", "b"),CONCAT("a", "b", "c"),CONCAT("a", null, "c")\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------------+-----------------------+------------------------+\n| concat('a', 'b') | concat('a', 'b', 'c') | concat('a', NULL, 'c') |\n+------------------+-----------------------+------------------------+\n| ab               | abc                   | NULL                   |\n+------------------+-----------------------+------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var s=t(667294);let c={},l=s.createContext(c);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);