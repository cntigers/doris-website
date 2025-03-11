"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["363523"],{6338:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","title":"ADMIN CHECK TABLET","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ADMIN CHECK TABLET","language":"en"},"sidebar":"docs","previous":{"title":"ADMIN COPY TABLET","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET"},"next":{"title":"SHOW TABLETS","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET"}}'),a=n("785893"),l=n("250065");let i={title:"ADMIN CHECK TABLET",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to perform the specified check operation on a set of tablets."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN CHECK TABLET ( <tablet_id> [,...] ) PROPERTIES("type" = "<type_value>")\n'})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:"<tablet_id>"})]})}),"\n",(0,a.jsx)(t.p,{children:"The ID of the tablet on which the specified check operation will be performed."}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["1. ",(0,a.jsx)(t.code,{children:"<type_value>"})]})}),"\n",(0,a.jsx)(t.p,{children:"Currently, only consistency is supported."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"consistency:"}),"\n",(0,a.jsx)(t.p,{children:"Checks the replica data consistency of the tablet. This command is asynchronous, meaning that after sending it, Doris will start executing the consistency check job for the corresponding tablet."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(t.p,{children:["The final result of the statement will be reflected in the InconsistentNum column of the result from ",(0,a.jsx)(t.code,{children:'SHOW PROC "/cluster_health/tablet_health";'}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Column"}),(0,a.jsx)(t.th,{children:"DataType"}),(0,a.jsx)(t.th,{children:"Note"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"InconsistentNum"}),(0,a.jsx)(t.td,{children:"Int"}),(0,a.jsx)(t.td,{children:"Number of tablets with inconsistency"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Required to execute administrative operations on the database, including managing tables, partitions, and system-level commands."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Perform a replica data consistency check on a specified set of tablets"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'admin check tablet (10000, 10001) PROPERTIES("type" = "consistency");\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);