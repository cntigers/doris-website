"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["981048"],{607314:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-union-int","title":"bitmap-union-int","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/bitmap-union-int.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-union-int","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap-union-int","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"bitmap-union-int","language":"zh-CN"},"sidebar":"docs","previous":{"title":"bitmap_union_count","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap-union-count"},"next":{"title":"HLL_RAW_AGG","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/hll-raw-agg"}}'),s=t("785893"),l=t("250065");let a={title:"bitmap-union-int",language:"zh-CN"},r=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u8BA1\u7B97 TINYINT,SMALLINT \u548C INT \u7C7B\u578B\u7684\u5217\u4E2D\u4E0D\u540C\u503C\u7684\u4E2A\u6570\uFF0C\u8FD4\u56DE\u503C\u548C COUNT(DISTINCT expr) \u76F8\u540C"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"BITMAP_UNION_INT(<expr>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<expr>"})}),(0,s.jsx)(e.td,{children:"\u652F\u6301 TINYINT\uFF0CSMALLINT \u548C INT \u7C7B\u578B\u7684\u5217\u6216\u5217\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u5217\u4E2D\u4E0D\u540C\u503C\u7684\u4E2A\u6570"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select dt,page,bitmap_to_string(user_id) from pv_bitmap;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------+------+---------------------------+\n| dt   | page | bitmap_to_string(user_id) |\n+------+------+---------------------------+\n|    1 | 100  | 100,200,300               |\n|    1 | 300  | 300                       |\n|    2 | 200  | 300                       |\n+------+------+---------------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"select bitmap_union_int(dt) from pv_bitmap;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------------------+\n| bitmap_union_int(dt) |\n+----------------------+\n|                    2 |\n+----------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);