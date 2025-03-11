"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12800"],{435260:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB","title":"RESUME MATERIALIZED VIEW","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RESUME MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"REFRESH MATERIALIZED VIEW","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/REFRESH-MATERIALIZED-VIEW"},"next":{"title":"REBALANCE DISK","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK"}}'),i=n("785893"),a=n("250065");let l={title:"RESUME MATERIALIZED VIEW",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This statement is used to temporarily restore the scheduled scheduling of materialized views"}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"RESUME MATERIALIZED VIEW JOB ON <mv_name>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"<mv_name>"})]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specifies the materialized view name."}),"\n",(0,i.jsxs)(t.p,{children:["The materialized view name must start with a letter character (or any language character if unicode name support is enabled) and cannot contain spaces or special characters unless the entire materialized view name string is enclosed in backticks (e.g., ",(0,i.jsx)(t.code,{children:"My Object"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"The materialized view name cannot use reserved keywords."}),"\n",(0,i.jsx)(t.p,{children:"For more details, see Reserved Keywords."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Materialized View"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RESUME is an ALTER operation on a materialized view"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This statement is generally used after the pause materialized view statement"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Timed scheduling for restoring materialized view mv1"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"RESUME MATERIALIZED VIEW JOB ON mv1;\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let i={},a=s.createContext(i);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);