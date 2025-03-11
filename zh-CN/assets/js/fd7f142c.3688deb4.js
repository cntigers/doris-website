"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["390554"],{977580:function(n,a,e){e.r(a),e.d(a,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-count","title":"ARRAY_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-count.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAYS_OVERLAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/arrays-overlap"},"next":{"title":"ARRAY_APPLY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-apply"}}'),s=e("785893"),l=e("250065");let c={title:"ARRAY_COUNT",language:"zh-CN"},t=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let a={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(a.p,{children:["\u4F7F\u7528 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u8FDB\u884C\u76F8\u5E94\u7684\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\u8FD4\u56DE\u4F7F\u5F97 ",(0,s.jsx)(a.code,{children:"lambda(array1[i], ...)"})," \u8FD4\u56DE\u503C\u4E0D\u4E3A 0 \u7684\u5143\u7D20\u6570\u91CF\u3002\u5982\u679C\u627E\u4E0D\u5230\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE 0\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u8F93\u5165\u7684\u6570\u7EC4\u5217\u6570\u4E00\u81F4\uFF0C\u4E14\u6240\u6709\u8F93\u5165\u7684 array \u7684\u5143\u7D20\u4E2A\u6570\u5FC5\u987B\u76F8\u540C\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"ARRAY_COUNT(<arr>),\nARRAY_COUNT(<lambda>, <arr> [ , <arr> ... ] )\n"})}),"\n",(0,s.jsx)(a.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"\u53C2\u6570"}),(0,s.jsx)(a.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"<lambda>"})}),(0,s.jsx)(a.td,{children:"lambda \u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"<arr>"})}),(0,s.jsx)(a.td,{children:"ARRAY \u6570\u7EC4"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(a.p,{children:"\u7ECF\u8FC7\u8868\u8FBE\u5F0F lambda \u8BA1\u7B97\u4E4B\u540E ARRAY\uFF0C\u4E0D\u4E3A 0 \u7684\u5143\u7D20\u6570\u91CF\u3002\u5982\u679C\u627E\u4E0D\u5230\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE 0\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"select array_count(x -> x, [0, 1, 2, 3]);\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"+--------------------------------------------------------+\n| array_count(array_map([x] -> x(0), ARRAY(0, 1, 2, 3))) |\n+--------------------------------------------------------+\n|                                                      3 |\n+--------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"select array_count(x -> x > 2, [0, 1, 2, 3]);\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"+------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) > 2, ARRAY(0, 1, 2, 3))) |\n+------------------------------------------------------------+\n|                                                          1 |\n+------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"select array_count(x -> x is null, [null, null, null, 1, 2]);\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) IS NULL, ARRAY(NULL, NULL, NULL, 1, 2))) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"select array_count(x -> power(x,2)>10, [1, 2, 3, 4, 5]);\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"+------------------------------------------------------------------------------+\n| array_count(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4, 5))) |\n+------------------------------------------------------------------------------+\n|                                                                            2 |\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"select *, array_count((x, y) -> x>y, c_array1, c_array2) from array_test;\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_count(array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`)) |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                     2 |\n|    2 | [6, 7, 8]       | [10, 12, 13]            |                                                                     0 |\n|    3 | [1]             | [-100]                  |                                                                     1 |\n|    4 | [1, NULL, 2]    | [NULL, 3, 1]            |                                                                     1 |\n|    5 | []              | []                      |                                                                     0 |\n|    6 | NULL            | NULL                    |                                                                     0 |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:a}={...(0,l.a)(),...n.components};return a?(0,s.jsx)(a,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,a,e){e.d(a,{Z:function(){return t},a:function(){return c}});var r=e(667294);let s={},l=r.createContext(s);function c(n){let a=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(a):{...a,...n}},[a,n])}function t(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(l.Provider,{value:a},n.children)}}}]);