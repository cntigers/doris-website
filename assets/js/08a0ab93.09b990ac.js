"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["495603"],{210342:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/stddev-samp","title":"STDDEV_SAMP","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/stddev-samp.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/stddev-samp","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STDDEV_SAMP","language":"en"},"sidebar":"docs","previous":{"title":"STDDEV,STDDEV_POP","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev"},"next":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/variance"}}'),a=t("785893"),r=t("250065");let l={title:"STDDEV_SAMP",language:"en"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns the sample standard deviation of the expr expression"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"STDDEV_SAMP(<expr>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<expr>"})}),(0,a.jsx)(n.td,{children:"The value to be calculated standard deviation"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Return the sample standard deviation of the expr expression"}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Create sample tables\nCREATE TABLE score_table (\n    student_id INT,\n    score DOUBLE\n) DISTRIBUTED BY HASH(student_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- Insert test data\nINSERT INTO score_table VALUES\n(1, 85),\n(2, 90),\n(3, 82),\n(4, 88),\n(5, 95);\n\n-- Calculate the sample standard deviation of all students\' scores\nSELECT STDDEV_SAMP(score) as score_stddev\nFROM score_table;\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| score_stddev      |\n+-------------------+\n| 4.949747468305831 |\n+-------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);