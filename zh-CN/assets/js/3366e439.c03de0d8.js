"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["411741"],{118505:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/distance-functions/inner-product","title":"inner_product","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/distance-functions/inner-product.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/distance-functions","slug":"/sql-manual/sql-functions/scalar-functions/distance-functions/inner-product","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/distance-functions/inner-product","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"inner_product","language":"zh-CN"},"sidebar":"docs","previous":{"title":"cosine_distance","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/distance-functions/cosine-distance"},"next":{"title":"l1_distance","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/distance-functions/l1-distance"}}'),r=t("785893"),c=t("250065");let i={title:"inner_product",language:"zh-CN"},a=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u5411\u91CF\u7684\u6807\u91CF\u79EF"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"INNER_PRODUCT(<array1>, <array2>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<array1>"})}),(0,r.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u5411\u91CF\uFF0C\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4E0E array2 \u4FDD\u6301\u4E00\u81F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<array2>"})}),(0,r.jsx)(e.td,{children:"\u7B2C\u4E8C\u4E2A\u5411\u91CF\uFF0C\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4E0E array1 \u4FDD\u6301\u4E00\u81F4"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E24\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u5411\u91CF\u7684\u6807\u91CF\u79EF\u3002\u5982\u679C\u8F93\u5165 array \u4E3A NULL\uFF0C\u6216\u8005 array \u4E2D\u4EFB\u4F55\u5143\u7D20\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT INNER_PRODUCT([1, 2], [2, 3]),INNER_PRODUCT([3, 6], [4, 7]);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-------------------------------+-------------------------------+\n| inner_product([1, 2], [2, 3]) | inner_product([3, 6], [4, 7]) |\n+-------------------------------+-------------------------------+\n|                             8 |                            54 |\n+-------------------------------+-------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},c=s.createContext(r);function i(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);