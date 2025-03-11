"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["519160"],{685783:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","title":"ST_POINT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_POINT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_AREA_SQUARE_KM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km"},"next":{"title":"ST_POLYGON","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-polygon"}}'),l=t("785893"),i=t("250065");let a={title:"ST_POINT",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u901A\u8FC7\u7ED9\u5B9A\u7684 X \u5750\u6807\u503C\uFF0CY \u5750\u6807\u503C\u8FD4\u56DE\u5BF9\u5E94\u7684 Point\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5F53\u524D\u8FD9\u4E2A\u503C\u53EA\u662F\u5728\u7403\u9762\u96C6\u5408\u4E0A\u6709\u610F\u4E49\uFF0CX/Y \u5BF9\u5E94\u7684\u662F\u7ECF\u5EA6/\u7EAC\u5EA6 (longitude/latitude);"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ST_POINT( <x>, <y>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<x>"})}),(0,l.jsx)(e.td,{children:"\u6A2A\u5750\u6807"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<y>"})}),(0,l.jsx)(e.td,{children:"\u7EB5\u5750\u6807"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u7ED9\u5B9A\u6A2A\u5750\u6807\u4EE5\u53CA\u7EB5\u5750\u6807\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4FE1\u606F"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT ST_AsText(ST_Point(24.7, 56.7));\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);