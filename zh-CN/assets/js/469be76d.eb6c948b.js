"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["493586"],{195331:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>t,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers","title":"ROUND_BANKERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round-bankers","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ROUND_BANKERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ROUND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/round"},"next":{"title":"XOR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/xor"}}'),r=s("785893"),c=s("250065");let d={title:"ROUND_BANKERS",language:"zh-CN"},i=void 0,a={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(e.p,{children:["\u5C06",(0,r.jsx)(e.code,{children:"x"}),"\u4F7F\u7528\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u540E\uFF0C\u4FDD\u7559 d \u4F4D\u5C0F\u6570\uFF0C",(0,r.jsx)(e.code,{children:"d"}),"\u9ED8\u8BA4\u4E3A 0\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C",(0,r.jsx)(e.code,{children:"d"}),"\u4E3A\u8D1F\u6570\uFF0C\u5219\u5C0F\u6570\u70B9\u5DE6\u8FB9",(0,r.jsx)(e.code,{children:"d"}),"\u4F4D\u4E3A 0\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C",(0,r.jsx)(e.code,{children:"x"}),"\u6216",(0,r.jsx)(e.code,{children:"d"}),"\u4E3A null\uFF0C\u8FD4\u56DE null\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C d \u4E3A\u4E00\u4E2A\u5217\uFF0C\u5E76\u4E14\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A Decimal \u7C7B\u578B\uFF0C\u90A3\u4E48\u7ED3\u679C Decimal \u4F1A\u8DDF\u5165\u53C2 Decimal \u5177\u6709\u76F8\u540C\u7684\u5C0F\u6570\u90E8\u5206\u957F\u5EA6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636E\u94F6\u884C\u5BB6\u820D\u5165\u7B97\u6CD5\u7684\u89C4\u5219\uFF0C\u5F53\u9700\u8981\u820D\u5165\u5230\u6307\u5B9A\u7684\u5C0F\u6570\u4F4D\u65F6\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u8981\u820D\u5165\u7684\u6570\u5B57\u662F 5\uFF0C\u4E14\u540E\u9762\u6CA1\u6709\u5176\u4ED6\u975E\u96F6\u6570\u5B57\uFF0C\u5219\u4F1A\u68C0\u67E5\u524D\u4E00\u4F4D\u6570\u5B57\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5982\u679C\u524D\u4E00\u4F4D\u6570\u5B57\u662F\u5076\u6570\uFF0C\u5219\u76F4\u63A5\u820D\u53BB\uFF1B"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679C\u524D\u4E00\u4F4D\u6570\u5B57\u662F\u5947\u6570\uFF0C\u5219\u5411\u4E0A\u8FDB\u4E00\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u8981\u820D\u5165\u7684\u6570\u5B57\u5927\u4E8E 5 \u6216\u8005\u5176\u540E\u6709\u975E 0 \u7684\u6570\u5B57\uFF0C\u5219\u6309\u7167\u4F20\u7EDF\u7684\u56DB\u820D\u4E94\u5165\u89C4\u5219\u8FDB\u884C\uFF1A\u5373\u5927\u4E8E\u7B49\u4E8E 5 \u5219\u8FDB\u4F4D\uFF0C\u5426\u5219\u820D\u53BB\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u4E8E\u6570\u503C 2.5\uFF0C\u7531\u4E8E 5 \u524D\u9762\u7684\u6570\u5B57 2 \u662F\u5076\u6570\uFF0C\u56E0\u6B64\u7ED3\u679C\u5C06\u820D\u5165\u4E3A 2\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u4E8E\u6570\u503C 3.5\uFF0C\u7531\u4E8E 5 \u524D\u9762\u7684\u6570\u5B57 3 \u662F\u5947\u6570\uFF0C\u56E0\u6B64\u7ED3\u679C\u5C06\u820D\u5165\u4E3A 4\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u4E8E\u6570\u503C 2.51\uFF0C\u56E0\u4E3A 5 \u540E\u9762\u7684\u6570\u5B57\u4E0D\u662F 0\uFF0C\u6240\u4EE5\u76F4\u63A5\u8FDB\u4F4D\uFF0C\u7ED3\u679C\u4E3A 3\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ROUND_BANKERS(<x> [ , <d>])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<x>"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u56DB\u820D\u4E94\u5165\u7684\u6570\u503C"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<d>"})}),(0,r.jsx)(e.td,{children:"\u53EF\u9009\uFF0C\u56DB\u820D\u4E94\u5165\u9700\u8981\u4FDD\u7559\u7684\u5C0F\u6570\u4F4D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 0"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\u6216\u8005\u6D6E\u70B9\u6570\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u53C2\u6570 d = 0 , \u8FD4\u56DE ",(0,r.jsx)(e.code,{children:"x"})," \u6839\u636E\u94F6\u884C\u5BB6\u820D\u5165\u7B97\u6CD5\u8BA1\u7B97\u8FC7\u7684\u6574\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"d \u4E3A \u8D1F\u6570 , \u8FD4\u56DE\u5C0F\u6570\u70B9\u5DE6\u8FB9\u7B2C\u4E00\u4F4D\u4E3A 0 \u7684\u6574\u6570\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"x \u548C d is NULL , \u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["d \u4E3A\u4E00\u4E2A\u5217\u65F6 , \u4E14 ",(0,r.jsx)(e.code,{children:"x"})," \u4E3A Decimal \u7C7B\u578B , \u8FD4\u56DE\u76F8\u540C\u7CBE\u5EA6\u7684\u6D6E\u70B9\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(0.4);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(-3.5);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(-3.4);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(10.755, 2);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(10.745, 2);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| round_bankers(10.745, 2) |\n+--------------------------+\n|                    10.74 |\n+--------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select round_bankers(1667.2725, -2);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT number\n, round_bankers(number * 2.5, number - 1) AS rb_decimal_column\n, round_bankers(number * 2.5, 0) AS rb_decimal_literal\n, round_bankers(cast(number * 2.5 AS DOUBLE), number - 1) AS rb_double_column\n, round_bankers(cast(number * 2.5 AS DOUBLE), 0) AS rb_double_literal\nFROM test_enhanced_round\nWHERE rid = 1;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------+-------------------+--------------------+------------------+-------------------+\n| number | rb_decimal_column | rb_decimal_literal | rb_double_column | rb_double_literal |\n+--------+-------------------+--------------------+------------------+-------------------+\n|      1 |               2.0 |                  2 |                2 |                 2 |\n+--------+-------------------+--------------------+------------------+-------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return d}});var l=s(667294);let r={},c=l.createContext(r);function d(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);