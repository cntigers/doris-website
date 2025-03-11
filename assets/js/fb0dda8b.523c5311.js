"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["780346"],{965075:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/distance-functions/l2-distance","title":"l2_distance","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/distance-functions/l2-distance.md","sourceDirName":"sql-manual/sql-functions/distance-functions","slug":"/sql-manual/sql-functions/distance-functions/l2-distance","permalink":"/docs/2.0/sql-manual/sql-functions/distance-functions/l2-distance","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"l2_distance","language":"en"},"sidebar":"docs","previous":{"title":"l1_distance","permalink":"/docs/2.0/sql-manual/sql-functions/distance-functions/l1-distance"},"next":{"title":"CAST","permalink":"/docs/2.0/sql-manual/sql-functions/cast"}}'),i=t("785893"),l=t("250065");let a={title:"l2_distance",language:"en"},c=void 0,r={},d=[{value:"l2_distance",id:"l2_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"l2_distance",children:"l2_distance"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DOUBLE l2_distance(ARRAY<T> array1, ARRAY<T> array2)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Calculates the distance between two points (the values of the vectors are the coordinates) in Euclidean space.\nReturn NULL if input array is NULL or any element of array is NULL."}),"\n",(0,i.jsx)(n.h4,{id:"notice",children:"Notice"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nested type of input array support: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE"}),"\n",(0,i.jsx)(n.li,{children:"input array1 and array2 should have the same element size"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sql> SELECT l2_distance([1, 2], [2, 3]);\n+---------------------------------------+\n| l2_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+---------------------------------------+\n|                    1.4142135623730951 |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"L2_DISTANCE,DISTANCE,L2,ARRAY\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);