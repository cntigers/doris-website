"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["287727"],{554876:function(n,t,e){e.r(t),e.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","title":"BITMAP_OR","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_OR","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_EMPTY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-empty"},"next":{"title":"BITMAP_AND","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and"}}'),s=e("785893"),a=e("250065");let l={title:"BITMAP_OR",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function p(n){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Computes the union of two or more Bitmaps and returns a new Bitmap."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"BITMAP_OR(<bitmap1>, <bitmap2>, ..., <bitmapN>)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmap1>"})}),(0,s.jsx)(t.td,{children:"The first Bitmap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmap2>"})}),(0,s.jsx)(t.td,{children:"The second Bitmap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"..."}),(0,s.jsx)(t.td,{children:"..."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmapN>"})}),(0,s.jsx)(t.td,{children:"The N-th Bitmap"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(t.p,{children:"A Bitmap that represents the union of multiple Bitmaps."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"To compute the union of two identical Bitmaps:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"To convert the union of two identical Bitmaps to a string:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1)));\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"To compute the union of two different Bitmaps:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"To convert the union of two different Bitmaps to a string:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To compute the union of multiple Bitmaps, including a ",(0,s.jsx)(t.code,{children:"NULL"})," value:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                   |\n+--------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"To compute the union of multiple Bitmaps, including an empty Bitmap:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty()));\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"To compute the union of Bitmaps created from strings and individual values:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return r},a:function(){return l}});var i=e(667294);let s={},a=i.createContext(s);function l(n){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);