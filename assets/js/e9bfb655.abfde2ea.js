"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["740914"],{65052:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>E,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","title":"ALTER ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/async-materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/async-materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER ASYNC MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CREATE SYNC MATERIALIZED VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-CREATE-MATERIALIZED-VIEW"},"next":{"title":"CANCEL MATERIALIZED VIEW TASK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/async-materialized-view/CANCEL-MATERIALIZED-VIEW-TASK"}}'),a=i("785893"),t=i("250065");let r={title:"ALTER ASYNC MATERIALIZED VIEW",language:"en"},l=void 0,d={},E=[{value:"Description",id:"description",level:2},{value:"syntax",id:"syntax",level:4},{value:"illustrate",id:"illustrate",level:4},{value:"RENAME",id:"rename",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"SET",id:"set",level:5},{value:"REPLACE",id:"replace",level:5},{value:"Keywords",id:"keywords",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to modify asynchronous materialized views."}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW mvName=multipartIdentifier ((RENAME newName=identifier)\n       | (REFRESH (refreshMethod | refreshTrigger | refreshMethod refreshTrigger))\n       | REPLACE WITH MATERIALIZED VIEW newName=identifier propertyClause?\n       | (SET  LEFT_PAREN fileProperties=propertyItemList RIGHT_PAREN))\n"})}),"\n",(0,a.jsx)(n.h4,{id:"illustrate",children:"illustrate"}),"\n",(0,a.jsx)(n.h5,{id:"rename",children:"RENAME"}),"\n",(0,a.jsx)(n.p,{children:"Used to change the name of the materialized view"}),"\n",(0,a.jsx)(n.p,{children:"For example, changing the name of mv1 to mv2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW mv1 rename mv2;\n"})}),"\n",(0,a.jsx)(n.h5,{id:"refreshmethod",children:"refreshMethod"}),"\n",(0,a.jsxs)(n.p,{children:["Same as ",(0,a.jsx)(n.a,{href:"./CREATE-ASYNC-MATERIALIZED-VIEW",children:"creating asynchronous materialized views"})]}),"\n",(0,a.jsx)(n.h5,{id:"refreshtrigger",children:"refreshTrigger"}),"\n",(0,a.jsxs)(n.p,{children:["Same as ",(0,a.jsx)(n.a,{href:"./CREATE-ASYNC-MATERIALIZED-VIEW",children:"creating asynchronous materialized views"})]}),"\n",(0,a.jsx)(n.h5,{id:"set",children:"SET"}),"\n",(0,a.jsx)(n.p,{children:"Modify properties unique to materialized views"}),"\n",(0,a.jsx)(n.p,{children:"For example, modifying the grace_period of mv1 to 3000ms"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER MATERIALIZED VIEW mv1 set("grace_period"="3000");\n'})}),"\n",(0,a.jsx)(n.h5,{id:"replace",children:"REPLACE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW [db.]mv1 REPLACE WITH MATERIALIZED VIEW mv2\n[PROPERTIES('swap' = 'true')];\n"})}),"\n",(0,a.jsx)(n.p,{children:"Replacing atoms with two materialized views"}),"\n",(0,a.jsx)(n.p,{children:"swap default is TRUE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the swap parameter is set to TRUE, it is equivalent to renaming the materialized view mv1 to mv2, and renaming mv2 to mv1 at the same time"}),"\n",(0,a.jsx)(n.li,{children:"If the swap parameter is set to FALSE, it is equivalent to renaming mv2 to mv1 and deleting the original mv1"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example, if you want to swap the names of mv1 and mv2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"For example, if you want to rename mv2 to mv1 and delete the original mv1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2\nPROPERTIES('swap' = 'false');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ALTER, ASYNC, MATERIALIZED, VIEW\n"})})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(667294);let a={},t=s.createContext(a);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);