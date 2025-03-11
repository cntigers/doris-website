"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["208549"],{278084:function(n,t,e){e.r(t),e.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-string","title":"BITMAP_TO_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-string.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-string","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-string","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_TO_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-string"},"next":{"title":"BITMAP_TO_ARRAY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-array"}}'),i=e("785893"),a=e("250065");let l={title:"BITMAP_TO_STRING",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let t={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u4E00\u4E2A Bitmap \u8F6C\u5316\u6210\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u6240\u6709\u8BBE\u7F6E\u7684 Bit \u4F4D\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"bitmap_to_string(<bitmap>)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570"}),(0,i.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<bitmap>"})}),(0,i.jsx)(t.td,{children:"Bitmap \u7C7B\u578B\u5217\u6216\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(t.p,{children:["\u5305\u542B Bitmap \u6240\u6709 Bit \u4F4D\u7684\u5B57\u7B26\u4E32\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002",(0,i.jsx)(t.br,{}),"\n\u82E5 Bitmap \u4E3A ",(0,i.jsx)(t.code,{children:"NULL"})," \u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A ",(0,i.jsx)(t.code,{children:"NULL"}),"\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(t.p,{children:["\u5C06 ",(0,i.jsx)(t.code,{children:"NULL"})," Bitmap \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(null);\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u7A7A Bitmap \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_empty());\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u5305\u542B\u5355\u4E2A\u5143\u7D20\u7684 Bitmap \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(to_bitmap(1));\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u5305\u542B\u591A\u4E2A\u5143\u7D20\u7684 Bitmap \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n"})})]})}function p(n={}){let{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return l}});var s=e(667294);let i={},a=s.createContext(i);function l(n){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(a.Provider,{value:t},n.children)}}}]);