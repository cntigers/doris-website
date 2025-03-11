"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["312273"],{213865:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/ANALYZE","title":"ANALYZE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/statistics/ANALYZE.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/ANALYZE","permalink":"/docs/dev/sql-manual/sql-statements/statistics/ANALYZE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ANALYZE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW FUNCTIONS","permalink":"/docs/dev/sql-manual/sql-statements/function/SHOW-FUNCTIONS"},"next":{"title":"ALTER STATS","permalink":"/docs/dev/sql-manual/sql-statements/statistics/ALTER-STATS"}}'),l=t("785893"),i=t("250065");let a={title:"ANALYZE",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to collect column statistics. Statistics of columns can be collected for a table (specific columns can be specified) or for the entire database."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ANALYZE {TABLE <table_name> [ (<column_name> [, ...]) ] | DATABASE <database_name>}\n    [ [ WITH SYNC ] [ WITH SAMPLE {PERCENT | ROWS} <sample_rate> ] ];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The specified target table. This parameter and the <database_name> parameter must have and can only have one of them specified."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<database_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The specified target database. This parameter and the <table_name> parameter must have and can only have one of them specified."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<column_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["The specified target column. It must be an existing column in ",(0,l.jsx)(n.code,{children:"table_name"}),". You can specify multiple column names separated by commas."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"WITH SYNC"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Collect statistics synchronously. Returns after collection. If not specified, it executes asynchronously."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"WITH SAMPLE {PERCENT | ROWS} <sample_rate>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Specify to use the sampling method for collection. When not specified, full collection is the default. <sample_rate> is the sampling parameter. When using PERCENT sampling, it specifies the sampling percentage; when using ROWS sampling, it specifies the number of sampled rows."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column"}),(0,l.jsx)(n.th,{children:"Note"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Job_Id"}),(0,l.jsx)(n.td,{children:"Unique Job Id"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Catalog_Name"}),(0,l.jsx)(n.td,{children:"Catalog name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DB_Name"}),(0,l.jsx)(n.td,{children:"database name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Columns"}),(0,l.jsx)(n.td,{children:"column name list"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"When executing ANALYZE, the SELECT_PRIV privilege for the queried table is required."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Collect statistics by sampling 10% of table lineitem."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Collect statistics by sampling 100,000 rows from table lineitem."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);