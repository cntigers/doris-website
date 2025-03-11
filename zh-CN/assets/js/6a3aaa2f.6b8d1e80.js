"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["134136"],{191455:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/skew","title":"SKEW,SKEW_POP,SKEWNESS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/skew.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/skew","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/skew","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SKEW,SKEW_POP,SKEWNESS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"KURT,KURT_POP,KURTOSIS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/kurt"},"next":{"title":"approx_top_k","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/approx-top-k"}}'),l=s("785893"),i=s("250065");let a={title:"SKEW,SKEW_POP,SKEWNESS",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD4\u56DE\u8868\u8FBE\u5F0F\u7684 ",(0,l.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Skewness",children:"\u659C\u5EA6"}),"\u3002\n\u7528\u6765\u8BA1\u7B97\u659C\u5EA6\u7684\u516C\u5F0F\u662F ",(0,l.jsx)(e.code,{children:"3\u9636\u4E2D\u5FC3\u77E9 / ((\u65B9\u5DEE)^{1.5})"}),", \u5F53\u65B9\u5DEE\u4E3A\u96F6\u65F6\uFF0C",(0,l.jsx)(e.code,{children:"SKEWNESS"})," \u4F1A\u8FD4\u56DE ",(0,l.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u76F8\u5173\u547D\u4EE4"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/kurt",children:"kurt"})}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"SKEW"}),"\n",(0,l.jsx)(e.li,{children:"SKEW_POP"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SKEWNESS(<col>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<col>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B97\u659C\u5EA6\u7684\u5217"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD4\u56DE\u8868\u8FBE\u5F0F\u7684\u659C\u5EA6\uFF0C ",(0,l.jsx)(e.code,{children:"Double"})," \u7C7B\u578B\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE statistic_test(\n    tag int, \n    val1 double not null, \n    val2 double null\n) DISTRIBUTED BY HASH(tag)\nPROPERTIES (\n    "replication_num"="1"\n);\n\nINSERT INTO statistic_test VALUES\n(1, -10, -10),\n(2, -20, NULL),\n(3, 100, NULL),\n(4, 100, NULL),\n(5, 1000,1000);\n\n-- NULL \u503C\u4F1A\u88AB\u5FFD\u7565\nSELECT \n  skew(val1), \n  skew(val2)\nFROM statistic_test;\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------+------------+\n| skew(val1)         | skew(val2) |\n+--------------------+------------+\n| 1.4337199628825619 |          0 |\n+--------------------+------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"-- \u6BCF\u7EC4\u4EC5\u5305\u542B\u4E00\u884C\uFF0C\u7ED3\u679C\u4E3A NULL\u3002\nSELECT \n  skew(val1), \n  skew(val2) \nFROM statistic_test\nGROUP BY tag;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------+------------+\n| skew(val1) | skew(val2) |\n+------------+------------+\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n+------------+------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return a}});var t=s(667294);let l={},i=t.createContext(l);function a(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);