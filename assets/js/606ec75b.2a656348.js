"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["745288"],{467727:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","title":"SHOW TABLETS BELONG","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TABLETS BELONG","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLETS","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET"},"next":{"title":"SHOW TABLET STORAGE FORMAT","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-STORAGE-FORMAT"}}'),s=n("785893"),l=n("250065");let i={title:"SHOW TABLETS BELONG",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Used to show tablets and information of their belonging table"}),"\n",(0,s.jsx)(t.p,{children:"grammar\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW TABLETS BELONG tablet-ids;\n"})}),"\n",(0,s.jsx)(t.p,{children:"illustrate\uFF1A"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"tablet-ids: one or more tablet-ids, with comma separated"}),"\n",(0,s.jsxs)(t.li,{children:["Columns of result keep same with result of ",(0,s.jsx)(t.code,{children:"SHOW-DATA"})," for the same table"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"show information of four tablet-ids (actually, three tablet-ids. Result will be deduplicated)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW TABLETS BELONG 27028,78880,78382,27028;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| DbName              | TableName | TableSize | PartitionNum | BucketNum | ReplicaCount | TabletIds      |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| default_cluster:db1 | kec       | 613.000 B | 379          | 604       | 604          | [78880, 78382] |\n| default_cluster:db1 | test      | 1.874 KB  | 1            | 1         | 1            | [27028]        |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n```"}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SHOW, TABLETS, BELONG\n"})}),"\n",(0,s.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var a=n(667294);let s={},l=a.createContext(s);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);