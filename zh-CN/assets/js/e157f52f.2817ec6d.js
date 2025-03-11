"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["233890"],{457338:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64","title":"BITMAP_HASH64","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_HASH64","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_MIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min"},"next":{"title":"BITMAP_FROM_BASE64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64"}}'),i=t("785893"),a=t("250065");let l={title:"BITMAP_HASH64",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9\u4EFB\u610F\u7C7B\u578B\u7684\u8F93\u5165\u8BA1\u7B97 64 \u4F4D\u7684\u54C8\u5E0C\u503C\uFF0C\u8FD4\u56DE\u5305\u542B\u8BE5\u54C8\u5E0C\u503C\u7684 Bitmap\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"bitmap_hash64(<expr>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<expr>"})}),(0,i.jsx)(e.td,{children:"\u4EFB\u4F55\u503C\u6216\u5B57\u6BB5\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u5305\u542B\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"<expr>"})," \u7684 64 \u4F4D hash \u503C\u7684 Bitmap\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u4E00\u4E2A\u503C\u7684 64 \u4F4D\u54C8\u5E0C\u503C\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_hash64('hello'));\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------------------------------------+\n| bitmap_to_string(bitmap_hash64('hello')) |\n+------------------------------------------+\n| 15231136565543391023                     |\n+------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);