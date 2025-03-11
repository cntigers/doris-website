"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["355949"],{245303:function(n,e,t){t.r(e),t.d(e,{default:()=>g,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-agg","title":"BITMAP_AGG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/bitmap-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-agg","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/bitmap-agg","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_AGG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_AGG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/map-agg"},"next":{"title":"TO_BITMAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/to-bitmap"}}'),a=t("785893"),o=t("250065");let s={title:"BITMAP_AGG",language:"zh-CN"},r=void 0,l={},c=[{value:"BITMAP_AGG",id:"bitmap_agg",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"bitmap_agg",children:"BITMAP_AGG"}),"\n",(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"BITMAP_AGG(expr)"})}),"\n",(0,a.jsx)(e.p,{children:"\u805A\u5408 expr \u7684\u503C\uFF08\u4E0D\u5305\u62EC\u4EFB\u4F55\u7A7A\u503C\uFF09\u5F97\u5230 bitmap\u3002\nexpr \u7684\u7C7B\u578B\u9700\u8981\u4E3A TINYINT,SMALLINT,INT \u548C BIGINT \u7C7B\u578B\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select n_regionkey, bitmap_to_string(bitmap_agg(n_nationkey)) from nation group by n_regionkey;\n+-------------+---------------------------------------------+\n| n_regionkey | bitmap_to_string(bitmap_agg(`n_nationkey`)) |\n+-------------+---------------------------------------------+\n|           4 | 4,10,11,13,20                               |\n|           2 | 8,9,12,18,21                                |\n|           1 | 1,2,3,17,24                                 |\n|           0 | 0,5,14,15,16                                |\n|           3 | 6,7,19,22,23                                |\n+-------------+---------------------------------------------+\n\nMySQL > select bitmap_count(bitmap_agg(n_nationkey))  from nation;\n+-----------------------------------------+\n| bitmap_count(bitmap_agg(`n_nationkey`)) |\n+-----------------------------------------+\n|                                      25 |\n+-----------------------------------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"BITMAP_AGG"})]})}function g(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return s}});var i=t(667294);let a={},o=i.createContext(a);function s(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);