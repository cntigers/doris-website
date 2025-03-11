"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["32051"],{711629:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-QUEUED-ANZLYZE-JOBS","title":"SHOW QUEUED ANALYZE JOBS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/statistics/SHOW-QUEUED-ANZLYZE-JOBS.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-QUEUED-ANZLYZE-JOBS","permalink":"/docs/dev/sql-manual/sql-statements/statistics/SHOW-QUEUED-ANZLYZE-JOBS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW QUEUED ANALYZE JOBS","language":"en"}}'),l=t("785893"),i=t("250065");let r={title:"SHOW QUEUED ANALYZE JOBS",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to view the queue of statistics collection jobs waiting to be executed."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SHOW QUEUED ANALYZE JOBS [ <table_name> ]\n    [ WHERE PRIORITY = {"HIGH" | "MID" | "LOW" | "VERY_LOW"} ];\n'})}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Table name. If specified, you can view the job queue information corresponding to the table. If not specified, the job queue information of all tables will be returned by default."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:'WHERE PRIORITY = {"HIGH" | "MID" | "LOW" | "VERY_LOW"}'})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Filter conditions of job priority. If not specified, information about jobs of all priority will be displayed by default."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column"}),(0,l.jsx)(n.th,{children:"Note"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"catalog_name"}),(0,l.jsx)(n.td,{children:"Catalog name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"db_name"}),(0,l.jsx)(n.td,{children:"database name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tbl_name"}),(0,l.jsx)(n.td,{children:"table name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"col_list"}),(0,l.jsx)(n.td,{children:"column name list"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"priority"}),(0,l.jsx)(n.td,{children:"job priority"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"When executing SHOW, the SELECT_PRIV privilege for the queried table is required."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Show jobs by table name."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW QUEUED ANALYZE JOBS REGION;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------+---------+----------+---------------------------------------------------+----------+\n| catalog_name | db_name | tbl_name | col_list                                          | priority |\n+--------------+---------+----------+---------------------------------------------------+----------+\n| internal     | test    | region   | region:r_regionkey                                | HIGH     |\n| internal     | test    | region   | region:r_name                                     | MID      |\n| internal     | test    | region   | region:r_comment,region:r_name,region:r_regionkey | LOW      |\n+--------------+---------+----------+---------------------------------------------------+----------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Show job by job priority."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW QUEUED ANALYZE JOBS WHERE PRIORITY="HIGH";\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------+---------+----------+--------------------+----------+\n| catalog_name | db_name | tbl_name | col_list           | priority |\n+--------------+---------+----------+--------------------+----------+\n| internal     | test    | region   | region:r_regionkey | HIGH     |\n+--------------+---------+----------+--------------------+----------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);