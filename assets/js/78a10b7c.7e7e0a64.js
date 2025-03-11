"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["730382"],{774875:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km","title":"ST_AREA_SQUARE_KM","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ST_AREA_SQUARE_KM","language":"en"},"sidebar":"docs","previous":{"title":"ST_AREA_SQUARE_METERS","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters"},"next":{"title":"ST_POINT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point"}}'),a=t("785893"),r=t("250065");let l={title:"ST_AREA_SQUARE_KM",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",geo:"geo",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculate the area of the region on the sphere of the Earth"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ST_AREA_SQUARE_KM( <geo>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameters"}),(0,a.jsx)(n.th,{children:"Instructions"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<geo>"})}),(0,a.jsx)(n.td,{children:"The spherical position of the earth"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["ST_Area_Square_Km( ",(0,a.jsx)(n.geo,{children:"):  the units returned are square kilometers"})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT ST_Area_Square_Km(ST_Polygon("POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))"));\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);