"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["518281"],{682601:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","title":"SHOW LAST INSERT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW LAST INSERT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INSERT OVERWRITE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE"},"next":{"title":"UPDATE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/UPDATE"}}'),i=t("785893"),l=t("250065");let a={title:"SHOW LAST INSERT",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u6CD5\u7528\u4E8E\u67E5\u770B\u5728\u5F53\u524D session \u8FDE\u63A5\u4E2D\uFF0C\u6700\u8FD1\u4E00\u6B21 insert \u64CD\u4F5C\u7684\u7ED3\u679C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW LAST INSERT\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TransactionId\uFF1A\u4E8B\u52A1 id"}),"\n",(0,i.jsx)(n.li,{children:"Label\uFF1Ainsert \u4EFB\u52A1\u5BF9\u5E94\u7684 label"}),"\n",(0,i.jsx)(n.li,{children:"Database\uFF1Ainsert \u5BF9\u5E94\u7684\u6570\u636E\u5E93"}),"\n",(0,i.jsx)(n.li,{children:"Table\uFF1Ainsert \u5BF9\u5E94\u7684\u8868"}),"\n",(0,i.jsxs)(n.li,{children:["TransactionStatus\uFF1A\u4E8B\u52A1\u72B6\u6001\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PREPARE\uFF1A\u51C6\u5907\u9636\u6BB5"}),"\n",(0,i.jsx)(n.li,{children:"PRECOMMITTED\uFF1A\u9884\u63D0\u4EA4\u9636\u6BB5"}),"\n",(0,i.jsx)(n.li,{children:"COMMITTED\uFF1A\u4E8B\u52A1\u6210\u529F\uFF0C\u4F46\u6570\u636E\u4E0D\u53EF\u89C1"}),"\n",(0,i.jsx)(n.li,{children:"VISIBLE\uFF1A\u4E8B\u52A1\u6210\u529F\u4E14\u6570\u636E\u53EF\u89C1"}),"\n",(0,i.jsx)(n.li,{children:"ABORTED\uFF1A\u4E8B\u52A1\u5931\u8D25"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"LoadedRows\uFF1A\u5BFC\u5165\u7684\u884C\u6570"}),"\n",(0,i.jsx)(n.li,{children:"FilteredRows\uFF1A\u88AB\u8FC7\u6EE4\u7684\u884C\u6570"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, LAST, INSERT\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);