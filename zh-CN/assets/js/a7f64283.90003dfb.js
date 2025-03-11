"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["714633"],{838890:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters","title":"ST_AREA_SQUARE_METERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_AREA_SQUARE_METERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_ANGLE_SPHERE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere"},"next":{"title":"ST_AREA_SQUARE_KM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km"}}'),a=s("785893"),r=s("250065");let l={title:"ST_AREA_SQUARE_METERS",language:"zh-CN"},c=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(e){let n={code:"code",geo:"geo",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BA1\u7B97\u5730\u7403\u7403\u9762\u4E0A\u533A\u57DF\u7684\u9762\u79EF"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ST_AREA_SQUARE_METERS( <geo>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570"}),(0,a.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<geo>"})}),(0,a.jsx)(n.td,{children:"\u5730\u7403\u7403\u9762\u4F4D\u7F6E"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(n.p,{children:["ST_Area_Square_Meters( ",(0,a.jsx)(n.geo,{children:") \u8FD4\u56DE\u7684\u5355\u4F4D\u662F\u5E73\u65B9\u7C73"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT ST_Area_Square_Meters(ST_LineFromText("LINESTRING (1 1, 2 2)"));\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let a={},r=t.createContext(a);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);