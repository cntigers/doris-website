"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["536957"],{650801:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-angle","title":"ST_ANGLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-angle.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-angle","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_ANGLE","language":"en"},"sidebar":"docs","previous":{"title":"ST_DISTANCE_SPHERE","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere"},"next":{"title":"ST_AZIMUTH","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-azimuth"}}'),i=t("785893"),l=t("250065");let r={title:"ST_ANGLE",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Enter three points that represent two intersecting lines. Return the Angle between these lines."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ST_ANGLE( <point1>, <point2>, <point3>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameters"}),(0,i.jsx)(e.th,{children:"Instructions"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<point1>"})}),(0,i.jsx)(e.td,{children:"The first point of the first line"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<point2>"})}),(0,i.jsx)(e.td,{children:"The second point of the first line and the first point of the second line"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<point3>"})}),(0,i.jsx)(e.td,{children:"The second point of the second line"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"The Angle between these lines is expressed in radians and ranges from [0, 2pi]. The Angle is measured clockwise from the first line to the second line."}),"\n",(0,i.jsx)(e.p,{children:"ST_ANGLE has the following edge cases:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"If point 2 and point 3 are the same, NULL is returned"}),"\n",(0,i.jsx)(e.li,{children:"If point 2 and point 1 are the same, NULL is returned"}),"\n",(0,i.jsx)(e.li,{children:"NULL is returned if points 2 and 3 are perfect Antipodes"}),"\n",(0,i.jsx)(e.li,{children:"NULL is returned if points 2 and 1 are perfect AntipodesL"}),"\n",(0,i.jsx)(e.li,{children:"If any input geography is not a single point or is an empty geography, an error is thrown"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 1));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                     4.71238898038469 |\n+----------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_Angle(ST_Point(0, 0),ST_Point(1, 0),ST_Point(0, 1));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(1.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                  0.78547432161873854 |\n+----------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(1, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                    0 |\n+----------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                 NULL |\n+----------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_Angle(ST_Point(0, 0),ST_Point(-30, 0),ST_Point(150, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------------------------+\n|                                                                     NULL |\n+--------------------------------------------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);