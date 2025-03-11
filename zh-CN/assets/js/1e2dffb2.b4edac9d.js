"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["117211"],{350086:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min","title":"BITMAP_MIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_MIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_MAX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-max"},"next":{"title":"BITMAP_HASH64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64"}}'),i=t("785893"),l=t("250065");let a={title:"BITMAP_MIN",language:"zh-CN"},c=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u5E76\u8FD4\u56DE Bitmap \u4E2D\u7684\u6700\u5C0F\u503C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"bitmap_min(<bitmap>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<bitmap>"})}),(0,i.jsx)(e.td,{children:"Bitmap \u7C7B\u578B\u5217\u6216\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["Bitmap \u4E2D\u7684\u6700\u5C0F\u503C\u3002",(0,i.jsx)(e.br,{}),"\n\u82E5 Bitmap \u4E3A\u7A7A\u5219\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u4E00\u4E2A\u7A7A Bitmap \u7684\u6700\u5C0F\u503C\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_min(bitmap_from_string('')) value;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n|  NULL |\n+-------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u5305\u542B\u591A\u4E2A\u5143\u7D20\u7684 Bitmap \u7684\u6700\u5C0F\u503C\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_min(bitmap_from_string('1,9999999999')) value;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n|     1 |\n+-------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);