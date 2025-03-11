"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["562624"],{406422:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/sync-materialized-view/DROP-MATERIALIZED-VIEW","title":"DROP MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/sync-materialized-view/DROP-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/sync-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/sync-materialized-view/DROP-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/sync-materialized-view/DROP-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CREATE SYNC MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/sync-materialized-view/CREATE-MATERIALIZED-VIEW"},"next":{"title":"SHOW ALTER TABLE MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}}'),i=t("785893"),l=t("250065");let a={title:"DROP MATERIALIZED VIEW",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Drop a synchronized materialized view."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW \n[ IF EXISTS ] <materialized_view_name>\nON <table_name>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<materialized_view_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The name of the materialized view to be dropped."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The table to which the materialized view belongs."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Privilege"}),(0,i.jsx)(n.th,{children:"Object"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ALTER_PRIV"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"Requires ALTER_PRIV permission on the table to which the materialized view to be deleted belongs"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Drop the synchronized materialized view ",(0,i.jsx)(n.code,{children:"sync_agg_mv"})," on the ",(0,i.jsx)(n.code,{children:"lineitem"})," table"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW sync_agg_mv on lineitem;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);