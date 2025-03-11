"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["179518"],{242782:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/transaction/ROLLBACK","title":"ROLLBACK","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/transaction/ROLLBACK.md","sourceDirName":"sql-manual/sql-statements/transaction","slug":"/sql-manual/sql-statements/transaction/ROLLBACK","permalink":"/docs/sql-manual/sql-statements/transaction/ROLLBACK","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ROLLBACK","language":"en"},"sidebar":"docs","previous":{"title":"COMMIT","permalink":"/docs/sql-manual/sql-statements/transaction/COMMIT"},"next":{"title":"SHOW TRANSACTION","permalink":"/docs/sql-manual/sql-statements/transaction/SHOW-TRANSACTION"}}'),a=t("785893"),l=t("250065");let i={title:"ROLLBACK",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax\uFF08Syntax\uFF09",id:"syntaxsyntax",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Rollback an explicit transaction. It is used in pairs with ",(0,a.jsx)(n.a,{href:"./BEGIN",children:"BEGIN"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"syntaxsyntax",children:"Syntax\uFF08Syntax\uFF09"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ROLLBACK\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If an explicit transaction is not started, executing this command will not take effect."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["The following example creates a table named ",(0,a.jsx)(n.code,{children:"test"}),", starts a transaction, inserts two rows of data, rolls back the transaction, and then executes a query."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `test` (\n  `ID` int NOT NULL,\n  `NAME` varchar(100) NULL,\n  `SCORE` int NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`ID`)\nDISTRIBUTED BY HASH(`ID`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n\nBEGIN;\nINSERT INTO test VALUES(1, 'Bob', 100);\nINSERT INTO test VALUES(2, 'Bob', 100);\nROLLBACK;\nSELECT * FROM test;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);