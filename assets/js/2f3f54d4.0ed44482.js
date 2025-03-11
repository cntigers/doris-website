"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["18732"],{815056:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS","title":"SHOW-COLUMN-STATS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-COLUMN-STATS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-COLUMNS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMNS"},"next":{"title":"SHOW-COLLATION","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW-COLUMN-STATS",language:"en"},r=void 0,c={},o=[{value:"SHOW-COLUMN-STATS",id:"show-column-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-column-stats",children:"SHOW-COLUMN-STATS"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW COLUMN STATS"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Use ",(0,l.jsx)(n.code,{children:"SHOW COLUMN STATS"})," to view various statistics data for columns."]}),"\n",(0,l.jsx)(n.p,{children:"Syntax:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n"})}),"\n",(0,l.jsx)(n.p,{children:"Where:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cached: Show statistics information in the current FE memory cache."}),"\n",(0,l.jsxs)(n.li,{children:["table_name: The target table for collecting statistics. It can be in the format ",(0,l.jsx)(n.code,{children:"db_name.table_name"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["column_name: Specifies the target column, which must be an existing column in ",(0,l.jsx)(n.code,{children:"table_name"}),". You can specify multiple column names separated by commas."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.p,{children:"SHOW, TABLE, STATS"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);