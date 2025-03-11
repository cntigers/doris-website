"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["108445"],{847807:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-azimuth","title":"ST_AZIMUTH","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/spatial-functions/st-azimuth.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-azimuth","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-azimuth","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ST_AZIMUTH","language":"en"},"sidebar":"docs","previous":{"title":"ST_ANGLE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle"},"next":{"title":"ST_ANGLE_SPHERE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere"}}'),i=t("785893"),l=t("250065");let a={title:"ST_AZIMUTH",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Enter two points and return the azimuth of the line segment formed by points 1 and 2. Azimuth is the arc of the Angle between the true north line of point 1 and the line segment formed by points 1 and 2."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ST_AZIMUTH( <point1>, <point2>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameters"}),(0,i.jsx)(e.th,{children:"Instructions"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<point1>"})}),(0,i.jsx)(e.td,{children:"The first point used to calculate the azimuth"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<point2>"})}),(0,i.jsx)(e.td,{children:"The second point used to calculate the azimuth"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Positive angles are measured clockwise on the sphere. For example, the azimuth of a line segment:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"North is 0"}),"\n",(0,i.jsx)(e.li,{children:"East is PI/2"}),"\n",(0,i.jsx)(e.li,{children:"The guide is PI"}),"\n",(0,i.jsx)(e.li,{children:"The west is 3PI/2"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"ST_Azimuth has the following edge cases:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Return NULL if both input points are the same."}),"\n",(0,i.jsx)(e.li,{children:"NULL is returned if the two input points are perfect mapping points."}),"\n",(0,i.jsx)(e.li,{children:"An error is thrown if any of the input geographies are not a single point or are empty geographies"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT st_azimuth(ST_Point(1, 0),ST_Point(0, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------+\n| st_azimuth(st_point(1.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------+\n|                                   4.71238898038469 |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT st_azimuth(ST_Point(0, 0),ST_Point(1, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------+\n|                                 1.5707963267948966 |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT st_azimuth(ST_Point(0, 0),ST_Point(0, 1));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------+\n|                                                  0 |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT st_azimuth(ST_Point(-30, 0),ST_Point(150, 0));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------+\n| st_azimuth(st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------+\n|                                                   NULL |\n+--------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);