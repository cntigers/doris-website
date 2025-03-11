"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["820579"],{880164:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromwkb","title":"ST_GEOMETRYFROMWKB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromwkb.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromwkb","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromwkb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_GEOMETRYFROMWKB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_ASBINARY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-asbinary"},"next":{"title":"AES_ENCRYPT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt"}}'),l=s("785893"),r=s("250065");let a={title:"ST_GEOMETRYFROMWKB",language:"zh-CN"},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5C06\u4E00\u4E2A\u6807\u51C6\u56FE\u5F62 WKB\uFF08Well-known binary\uFF09\u8F6C\u5316\u4E3A\u5BF9\u5E94\u7684\u5185\u5B58\u7684\u51E0\u4F55\u5F62\u5F0F"}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"ST_GEOMFROMWKB"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ST_GEOMETRYFROMWKB( <WKB>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<WKB>"})}),(0,l.jsx)(e.td,{children:"\u56FE\u5F62\u7684\u5185\u5B58\u5F62\u5F0F"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"WKB \u7684\u5BF9\u5E94\u7684\u51E0\u4F55\u5B58\u50A8\u5F62\u5F0F"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+------------------------------------------------------------------+\n| POINT (24.7 56.7)                                                |\n+------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Point(24.7, 56.7))));\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_point(24.7, 56.7)))) |\n+--------------------------------------------------------------+\n| POINT (24.7 56.7)                                            |\n+--------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_GeometryFromText("LINESTRING (1 1, 2 2)"))));\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_geometryfromtext('LINESTRING (1 1, 2 2)')))) |\n+------------------------------------------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                                                    |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select ST_AsText(ST_GeometryFromWKB(ST_AsBinary(ST_Polygon("POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))"))));\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geometryfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                       |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select ST_AsText(ST_GeomFromWKB(ST_AsBinary(ST_Polygon("POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))"))));\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_astext(st_geomfromwkb(st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))')))) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| POLYGON ((114.104486 22.547119, 114.093758 22.547753, 114.096504 22.532057, 114.104229 22.539826, 114.106203 22.54268, 114.104486 22.547119))                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return a}});var t=s(667294);let l={},r=t.createContext(l);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);