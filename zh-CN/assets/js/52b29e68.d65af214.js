"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["491058"],{23065:function(n,t,e){e.r(t),e.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","title":"BITMAP_OR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_OR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_EMPTY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-empty"},"next":{"title":"BITMAP_AND","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and"}}'),a=e("785893"),s=e("250065");let l={title:"BITMAP_OR",language:"zh-CN"},r=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function p(n){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u7684 Bitmap \u7684\u5E76\u96C6\uFF0C\u8FD4\u56DE\u65B0\u7684 Bitmap\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"bitmap_or(<bitmap1>, <bitmap2>, ..., <bitmapN>)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"\u53C2\u6570"}),(0,a.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"<bitmap1>"})}),(0,a.jsx)(t.td,{children:"\u7B2C\u4E00\u4E2A Bitmap"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"<bitmap2>"})}),(0,a.jsx)(t.td,{children:"\u7B2C\u4E8C\u4E2A Bitmap"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"..."}),(0,a.jsx)(t.td,{children:"..."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"<bitmapN>"})}),(0,a.jsx)(t.td,{children:"\u7B2C N \u4E2A Bitmap"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(t.p,{children:"\u591A\u4E2A Bitmap \u5E76\u96C6\u7684 Bitmap\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u76F8\u540C Bitmap \u7684\u5E76\u96C6\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u5C06\u4E24\u4E2A\u76F8\u540C Bitmap \u7684\u5E76\u96C6\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1)));\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u4E0D\u540C Bitmap \u7684\u5E76\u96C6\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u5C06\u4E24\u4E2A\u4E0D\u540C Bitmap \u7684\u5E76\u96C6\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u8BA1\u7B97\u591A\u4E2A Bitmap\uFF08\u5305\u62EC ",(0,a.jsx)(t.code,{children:"NULL"})," \u503C\uFF09\u7684\u5E76\u96C6\uFF1A"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                   |\n+--------------------------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8BA1\u7B97\u591A\u4E2A Bitmap\uFF08\u5305\u62EC\u7A7A Bitmap\uFF09\u7684\u5E76\u96C6\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty()));\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8BA1\u7B97\u7531\u5B57\u7B26\u4E32\u548C\u5355\u4E2A\u503C\u521B\u5EFA\u7684 Bitmap \u7684\u5E76\u96C6\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return r},a:function(){return l}});var i=e(667294);let a={},s=i.createContext(a);function l(n){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);