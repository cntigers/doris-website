"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["73362"],{517604:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","title":"BITMAP_HASH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_HASH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_BITMAP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap"},"next":{"title":"BITMAP_FROM_STRING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-string"}}'),i=t("785893"),a=t("250065");let r={title:"BITMAP_HASH",language:"zh-CN"},l=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9\u4EFB\u610F\u7C7B\u578B\u7684\u8F93\u5165\uFF0C\u8BA1\u7B97\u5176 32 \u4F4D\u7684\u54C8\u5E0C\u503C\uFF0C\u5E76\u8FD4\u56DE\u5305\u542B\u8BE5\u54C8\u5E0C\u503C\u7684 Bitmap\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"bitmap_hash(<expr>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<expr>"})}),(0,i.jsx)(e.td,{children:"\u4EFB\u4F55\u503C\u6216\u5B57\u6BB5\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u5305\u542B\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"<expr>"})," \u7684 64 \u4F4D hash \u503C\u7684 Bitmap\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"::: note"}),"\n",(0,i.jsxs)(e.p,{children:["\u8BE5\u51FD\u6570\u4F7F\u7528\u7684\u54C8\u5E0C\u7B97\u6CD5\u4E3A MurMur3\u3002",(0,i.jsx)(e.br,{}),"\nMurMur3 \u7B97\u6CD5\u662F\u4E00\u79CD\u9AD8\u6027\u80FD\u7684\u3001\u4F4E\u78B0\u649E\u7387\u7684\u6563\u5217\u7B97\u6CD5\uFF0C\u5176\u8BA1\u7B97\u51FA\u6765\u7684\u503C\u63A5\u8FD1\u4E8E\u968F\u673A\u5206\u5E03\uFF0C\u5E76\u4E14\u80FD\u901A\u8FC7\u5361\u65B9\u5206\u5E03\u6D4B\u8BD5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u540C\u786C\u4EF6\u5E73\u53F0\u3001\u4E0D\u540C Seed \u503C\u8BA1\u7B97\u51FA\u6765\u7684\u6563\u5217\u503C\u53EF\u80FD\u4E0D\u540C\u3002",(0,i.jsx)(e.br,{}),"\n\u5173\u4E8E\u6B64\u7B97\u6CD5\u7684\u6027\u80FD\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(e.a,{href:"http://rurban.github.io/smhasher/",children:"Smhasher"})," \u6392\u884C\u699C\u3002"]}),"\n",(0,i.jsx)(e.p,{children:":::"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u4F60\u60F3\u8BA1\u7B97\u67D0\u4E2A\u503C\u7684 MurMur3\uFF0C\u4F60\u53EF\u4EE5\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"select bitmap_to_array(bitmap_hash('hello'))[1];\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C\u4F60\u60F3\u7EDF\u8BA1\u67D0\u4E00\u5217\u53BB\u91CD\u540E\u7684\u4E2A\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4F4D\u56FE\u7684\u65B9\u5F0F\uFF0C\u67D0\u4E9B\u573A\u666F\u4E0B\u6027\u80FD\u6BD4 ",(0,i.jsx)(e.code,{children:"count distinct"})," \u597D\u5F88\u591A\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);