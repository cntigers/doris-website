"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["123501"],{871498:function(n,e,t){t.r(e),t.d(e,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","title":"BITMAP_TO_BASE64","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_TO_BASE64","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_BASE64","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64"},"next":{"title":"BITMAP_REMOVE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-remove"}}'),a=t("785893"),i=t("250065");let l={title:"BITMAP_TO_BASE64",language:"zh-CN"},c=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u5C06\u4E00\u4E2A Bitmap \u8F6C\u5316\u6210\u4E00\u4E2A Base64 \u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"bitmap_to_base64(<bitmap>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<bitmap>"})}),(0,a.jsx)(e.td,{children:"Bitmap \u7C7B\u578B\u5217\u6216\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(e.p,{children:["Bitmap \u57FA\u4E8E Base64 \u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u3002",(0,a.jsx)(e.br,{}),"\n\u82E5 Bitmap \u4E3A ",(0,a.jsx)(e.code,{children:"NULL"})," \u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A ",(0,a.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"::: note"}),"\n",(0,a.jsxs)(e.p,{children:["BE \u914D\u7F6E\u9879 ",(0,a.jsx)(e.code,{children:"enable_set_in_bitmap_value"})," \u4F1A\u6539\u53D8 bitmap \u503C\u5728\u5185\u5B58\u4E2D\u7684\u5177\u4F53\u683C\u5F0F\uFF0C\u56E0\u6B64\u4F1A\u5F71\u54CD\u6B64\u51FD\u6570\u7684\u7ED3\u679C\u3002",(0,a.jsx)(e.br,{}),"\n\u7531\u4E8E\u4E0D\u80FD\u4FDD\u8BC1 bitmap \u4E2D\u5143\u7D20\u7684\u987A\u5E8F\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4FDD\u8BC1\u76F8\u540C\u5185\u5BB9\u7684 bitmap \u751F\u6210\u7684 base64 \u7ED3\u679C\u59CB\u7EC8\u76F8\u540C\uFF0C\u4F46\u53EF\u4EE5\u4FDD\u8BC1 bitmap_from_base64 \u89E3\u7801\u540E\u7684 bitmap \u76F8\u540C\u3002"]}),"\n",(0,a.jsx)(e.p,{children:":::"}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(e.p,{children:["\u5C06 ",(0,a.jsx)(e.code,{children:"NULL"})," Bitmap \u8F6C\u6362\u4E3A Base64 \u5B57\u7B26\u4E32\uFF1A"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_base64(null);\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| bitmap_to_base64(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5C06\u7A7A Bitmap \u8F6C\u6362\u4E3A Base64 \u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_base64(bitmap_empty());\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+----------------------------------+\n| bitmap_to_base64(bitmap_empty()) |\n+----------------------------------+\n| AA==                             |\n+----------------------------------+\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5C06\u5305\u542B\u5355\u4E2A\u5143\u7D20\u7684 Bitmap \u8F6C\u6362\u4E3A Base64 \u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_base64(to_bitmap(1));\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------------------------+\n| bitmap_to_base64(to_bitmap(1)) |\n+--------------------------------+\n| AQEAAAA=                       |\n+--------------------------------+\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5C06\u5305\u542B\u591A\u4E2A\u5143\u7D20\u7684 Bitmap \u8F6C\u6362\u4E3A Base64 \u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select bitmap_to_base64(bitmap_from_string("1,9999999"));\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:'+---------------------------------------------------------+\n| bitmap_to_base64(bitmap_from_string("1,9999999"))       |\n+---------------------------------------------------------+\n| AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=                |\n+---------------------------------------------------------+\n'})})]})}function p(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);