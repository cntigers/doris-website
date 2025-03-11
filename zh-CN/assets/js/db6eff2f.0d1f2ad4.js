"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["765331"],{615332:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/stddev-samp","title":"STDDEV_SAMP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/stddev-samp.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/stddev-samp","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STDDEV_SAMP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STDDEV,STDDEV_POP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev"},"next":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/variance"}}'),l=t("785893"),r=t("250065");let a={title:"STDDEV_SAMP",language:"zh-CN"},c=void 0,d={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE expr \u8868\u8FBE\u5F0F\u7684\u6837\u672C\u6807\u51C6\u5DEE"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"STDDEV_SAMP(<expr>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B97\u6807\u51C6\u5DEE\u7684\u503C"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u53C2\u6570 expr \u7684\u6837\u672C\u6807\u51C6\u5DEE"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE score_table (\n    student_id INT,\n    score DOUBLE\n) DISTRIBUTED BY HASH(student_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO score_table VALUES\n(1, 85),\n(2, 90),\n(3, 82),\n(4, 88),\n(5, 95);\n\n-- \u8BA1\u7B97\u6240\u6709\u5B66\u751F\u5206\u6570\u7684\u6837\u672C\u6807\u51C6\u5DEE\nSELECT STDDEV_SAMP(score) as score_stddev\nFROM score_table;\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| score_stddev      |\n+-------------------+\n| 4.949747468305831 |\n+-------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);