"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["180608"],{443054:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>u,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/sum0","title":"SUM0","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/sum0.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/sum0","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/sum0","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SUM0","language":"en"},"sidebar":"docs","previous":{"title":"REGR_SLOPE","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/regr-slope"},"next":{"title":"WINDOW_FUNNEL","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/window-funnel"}}'),l=t("785893"),a=t("250065");let r={title:"SUM0",language:"en"},i=void 0,u={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Used to return the sum of all values of the selected field. Unlike the SUM function, when all input values are NULL, SUM0 returns 0 instead of NULL."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SUM0(<expr>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"The field to calculate the sum of"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns the sum of all values of the selected field. If all values are NULL, returns 0."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'-- Create example table\nCREATE TABLE sales_table (\n    product_id INT,\n    price DECIMAL(10,2),\n    quantity INT,\n    discount DECIMAL(10,2)\n) DISTRIBUTED BY HASH(product_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- Insert test data\nINSERT INTO sales_table VALUES\n(1, 99.99, 2, NULL),\n(2, 159.99, 1, NULL),\n(3, 49.99, 5, NULL),\n(4, 299.99, 1, NULL),\n(5, 79.99, 3, NULL);\n\n-- Compare SUM and SUM0\nSELECT \n    SUM(discount) as sum_discount,    -- Returns NULL\n    SUM0(discount) as sum0_discount   -- Returns 0\nFROM sales_table;\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------+---------------+\n| sum_discount | sum0_discount |\n+--------------+---------------+\n|         NULL |          0.00 |\n+--------------+---------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);