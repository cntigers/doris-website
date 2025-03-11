"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["83426"],{313719:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-circle","title":"ST_CIRCLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-circle.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-circle","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-circle","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ST_CIRCLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_Y","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-y"},"next":{"title":"ST_DISTANCE_SPHERE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-distance-sphere"}}'),l=s("785893"),i=s("250065");let c={title:"ST_CIRCLE",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5C06\u4E00\u4E2A WKT\uFF08Well Known Text\uFF09\u8F6C\u5316\u4E3A\u5730\u7403\u7403\u9762\u4E0A\u7684\u4E00\u4E2A\u5706\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ST_CIRCLE( <center_lng>, <center_lat>, <radius>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<center_lng>"})}),(0,l.jsx)(e.td,{children:"\u5706\u5FC3\u7684\u7ECF\u5EA6"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<center_lat>"})}),(0,l.jsx)(e.td,{children:"\u5706\u5FC3\u7684\u7EAC\u5EA6"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<radius>"})}),(0,l.jsx)(e.td,{children:"\u5706\u7684\u534A\u5F84"})]})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"radius \u5355\u4F4D\u662F\u7C73\uFF0C\u6700\u5927\u652F\u6301 9999999"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u5706\u7684\u57FA\u672C\u4FE1\u606F\u5F97\u5230\u7684\u7403\u9762\u4E0A\u7684\u4E00\u4E2A\u5706"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT ST_AsText(ST_Circle(111, 64, 10000));\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var t=s(667294);let l={},i=t.createContext(l);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);