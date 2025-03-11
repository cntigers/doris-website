"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["168791"],{208453:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/transaction/COMMIT","title":"COMMIT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/transaction/COMMIT.md","sourceDirName":"sql-manual/sql-statements/transaction","slug":"/sql-manual/sql-statements/transaction/COMMIT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/transaction/COMMIT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"COMMIT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BEGIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/transaction/BEGIN"},"next":{"title":"ROLLBACK","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/transaction/ROLLBACK"}}'),l=t("785893"),a=t("250065");let i={title:"COMMIT",language:"zh-CN"},r=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:["\u63D0\u4EA4\u4E00\u4E2A\u663E\u5F0F\u4E8B\u52A1\u3002\u4E0E ",(0,l.jsx)(n.a,{href:"./BEGIN",children:"BEGIN"})," \u6210\u5BF9\u4F7F\u7528\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"COMMIT\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679C\u6CA1\u6709\u5F00\u542F\u663E\u5F0F\u4E8B\u52A1\uFF0C\u6267\u884C\u8BE5\u547D\u4EE4\u4E0D\u751F\u6548"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u793A\u4F8B\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A test \u7684\u8868\uFF0C\u5F00\u542F\u4E8B\u52A1\uFF0C\u5199\u5165\u4E24\u884C\u6570\u636E\u540E\uFF0C\u63D0\u4EA4\u4E8B\u52A1\u3002\u7136\u540E\u6267\u884C\u67E5\u8BE2\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `test` (\n  `ID` int NOT NULL,\n  `NAME` varchar(100) NULL,\n  `SCORE` int NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`ID`)\nDISTRIBUTED BY HASH(`ID`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n\nBEGIN;\nINSERT INTO test VALUES(1, 'Alice', 100);\nINSERT INTO test VALUES(2, 'Bob', 100);\nCOMMIT;\nSELECT * FROM test;\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);