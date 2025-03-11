"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["893719"],{235664:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-distance-sphere","title":"ST_DISTANCE_SPHERE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-distance-sphere","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_DISTANCE_SPHERE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_CIRCLE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-circle"},"next":{"title":"ST_ANGLE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle"}}'),l=s("785893"),i=s("250065");let c={title:"ST_DISTANCE_SPHERE",language:"zh-CN"},r=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BA1\u7B97\u5730\u7403\u4E24\u70B9\u4E4B\u95F4\u7684\u7403\u9762\u8DDD\u79BB\uFF0C\u5355\u4F4D\u4E3A \u7C73\u3002\u4F20\u5165\u7684\u53C2\u6570\u5206\u522B\u4E3A X \u70B9\u7684\u7ECF\u5EA6\uFF0CX \u70B9\u7684\u7EAC\u5EA6\uFF0CY \u70B9\u7684\u7ECF\u5EA6\uFF0CY \u70B9\u7684\u7EAC\u5EA6\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ST_DISTANCE_SPHERE( <x_lng>, <x_lat>, <y_lng>, <y_lat>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<x_lng>"})}),(0,l.jsx)(e.td,{children:"\u7ECF\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-180, 180]"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<y_lng>"})}),(0,l.jsx)(e.td,{children:"\u7ECF\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-180, 180]"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<x_lat>"})}),(0,l.jsx)(e.td,{children:"\u7EAC\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-90, 90]"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<y_lat>"})}),(0,l.jsx)(e.td,{children:"\u7EAC\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-90, 90]"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u4E24\u70B9\u4E4B\u95F4\u7684\u7403\u9762\u8DDD\u79BB"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var t=s(667294);let l={},i=t.createContext(l);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);