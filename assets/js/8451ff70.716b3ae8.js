"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["279635"],{30813:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/DROP-STATS","title":"DROP STATS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/DROP-STATS.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/DROP-STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/DROP-STATS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP STATS","language":"en"},"sidebar":"docs","previous":{"title":"ALTER STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/ALTER-STATS"},"next":{"title":"SHOW TABLE STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS"}}'),l=t("785893"),i=t("250065");let a={title:"DROP STATS",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"## Required Parameters",id:"-required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Delete statistics information for the specified table and columns. If no column names are specified, the statistics information for all columns will be deleted."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP STATS <table_name> [ <column_names> ]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Where:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"column_names\n  :\n  (<column_name>, [ <column_name>... ])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"-required-parameters",children:"## Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"<table_name>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The identifier (name) of the table."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"<column_names>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"List of column identifiers (names)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"DROP_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete statistics information for all columns in table1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP STATS table1\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete statistics information for col1 and col2 in table1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP STATS table1 (col1, col2)\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);