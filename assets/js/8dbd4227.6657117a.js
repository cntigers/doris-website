"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["727257"],{819894:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-compact","title":"ARRAY_COMPACT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-compact.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-compact","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-compact","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_COMPACT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHBACK","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-pushback"},"next":{"title":"ARRAY_CONCAT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-concat"}}'),c=a("785893"),t=a("250065");let s={title:"ARRAY_COMPACT",language:"en"},l=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Removes consecutive duplicate elements from an array. The order of result values is determined by the order in the source array."}),"\n",(0,c.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ARRAY_COMPACT(<arr>)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<arr>"})}),(0,c.jsx)(n.td,{children:"The array to remove consecutive duplicate elements from"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,c.jsx)(n.p,{children:"An array without consecutive duplicate elements."}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select array_compact(['2015-03-13','2015-03-13']);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return s}});var r=a(667294);let c={},t=r.createContext(c);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);