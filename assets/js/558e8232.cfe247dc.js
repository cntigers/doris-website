"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["531372"],{721385:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/hudi-meta","title":"HUDI_META","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/hudi-meta.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/hudi-meta","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/hudi-meta","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HUDI_META","language":"en"},"sidebar":"docs","previous":{"title":"QUERY","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/query"},"next":{"title":"ICEBERG_META","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta"}}'),l=n("785893"),s=n("250065");let a={title:"HUDI_META",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"hudi_meta table-valued-function(tvf), using for read hudi metadata, operation history, timeline of table, instant state etc."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'HUDI_META(\n    "table" = "<table>", \n    "query_type" = "<query_type>"\n  );\n'})}),"\n",(0,l.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsxs)(t.p,{children:["Each parameter in the ",(0,l.jsx)(t.code,{children:"hudi_meta"})," table function (tvf) is a ",(0,l.jsx)(t.code,{children:'"key"="value"'})," pair."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"<table>"})}),(0,l.jsxs)(t.td,{children:["The full table name, which must be specified in the format of ",(0,l.jsx)(t.code,{children:"database_name.table_name"})," for the hudi table that you want to view."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"<query_type>"})}),(0,l.jsxs)(t.td,{children:["The type of metadata you want to view. Currently, only ",(0,l.jsx)(t.code,{children:"timeline"})," is supported."]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Read and access the hudi tabular metadata for timeline."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'select * from hudi_meta("table" = "ctl.db.tbl", "query_type" = "timeline");\n'})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Can be used with ",(0,l.jsx)(t.code,{children:"desc function"})," :"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'desc function hudi_meta("table" = "ctl.db.tbl", "query_type" = "timeline");\n'})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Inspect the hudi table timeline"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'select * from hudi_meta("table" = "hudi_ctl.test_db.test_tbl", "query_type" = "timeline");\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"+-------------------+--------+--------------------------+-----------+-----------------------+\n| timestamp         | action | file_name                | state     | state_transition_time |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n| 20240724195843565 | commit | 20240724195843565.commit | COMPLETED | 20240724195844269     |\n| 20240724195845718 | commit | 20240724195845718.commit | COMPLETED | 20240724195846653     |\n| 20240724195848377 | commit | 20240724195848377.commit | COMPLETED | 20240724195849337     |\n| 20240724195850799 | commit | 20240724195850799.commit | COMPLETED | 20240724195851676     |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Filtered by timestamp"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'select * from hudi_meta("table" = "hudi_ctl.test_db.test_tbl", "query_type" = "timeline") where timestamp = 20240724195843565;\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"+-------------------+--------+--------------------------+-----------+-----------------------+\n| timestamp         | action | file_name                | state     | state_transition_time |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n| 20240724195843565 | commit | 20240724195843565.commit | COMPLETED | 20240724195844269     |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var i=n(667294);let l={},s=i.createContext(l);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);