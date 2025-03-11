"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["247583"],{2779:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","title":"SHOW ALTER TABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW ALTER TABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL-ALTER-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/CANCEL-ALTER-TABLE"},"next":{"title":"TRUNCATE-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE"}}'),t=s("785893"),d=s("250065");let r={title:"SHOW ALTER TABLE",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"Result",id:"result",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function h(n){let e={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u5404\u7C7B\u4FEE\u6539\u4EFB\u52A1\u7684\u6267\u884C\u60C5\u51B5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SHOW ALTER [TABLE [COLUMN | ROLLUP] [FROM db_name]];\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"TABLE COLUMN\uFF1A\u5C55\u793A\u4FEE\u6539\u5217\u7684 ALTER \u4EFB\u52A1"}),"\n",(0,t.jsx)(e.li,{children:"\u652F\u6301\u8BED\u6CD5[WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]"}),"\n",(0,t.jsx)(e.li,{children:"TABLE ROLLUP\uFF1A\u5C55\u793A\u521B\u5EFA\u6216\u5220\u9664 ROLLUP \u7684\u4EFB\u52A1"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4 db"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"result",children:"Result"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"SHOW ALTER TABLE COLUMN"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B57\u6BB5\u540D"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"JobId"}),(0,t.jsx)(e.td,{children:"\u6BCF\u4E2A Schema Change \u4F5C\u4E1A\u7684\u552F\u4E00 ID\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TableName"}),(0,t.jsx)(e.td,{children:"\u5BF9\u5E94 Schema Change \u7684\u57FA\u8868\u7684\u8868\u540D\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CreateTime"}),(0,t.jsx)(e.td,{children:"\u4F5C\u4E1A\u521B\u5EFA\u65F6\u95F4\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"FinishedTime"}),(0,t.jsx)(e.td,{children:'\u4F5C\u4E1A\u5B8C\u6210\u65F6\u95F4\u3002\u5982\u679C\u672A\u5B8C\u6210\uFF0C\u663E\u793A "N/A"\u3002'})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IndexName"}),(0,t.jsx)(e.td,{children:"\u6B64\u4FEE\u6539\u4E2D\u6D89\u53CA\u7684\u4E00\u4E2A\u57FA\u8868/\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684\u540D\u79F0\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IndexId"}),(0,t.jsx)(e.td,{children:"\u65B0\u57FA\u8868/\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684 ID\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"OriginIndexId"}),(0,t.jsx)(e.td,{children:"\u6B64\u4FEE\u6539\u4E2D\u6D89\u53CA\u7684\u4E00\u4E2A\u57FA\u8868/\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684 ID\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SchemaVersion"}),(0,t.jsx)(e.td,{children:"\u4EE5 M:N \u7684\u683C\u5F0F\u663E\u793A\u3002M \u4EE3\u8868 Schema Change \u7684\u7248\u672C\uFF0CN \u4EE3\u8868\u5BF9\u5E94\u7684 Hash \u503C\u3002\u6BCF\u6B21 Schema Change \u90FD\u4F1A\u589E\u52A0\u7248\u672C\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TransactionId"}),(0,t.jsx)(e.td,{children:"\u7528\u4E8E\u8F6C\u6362\u5386\u53F2\u6570\u636E\u7684\u4E8B\u52A1 ID\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"State"}),(0,t.jsx)(e.td,{children:"\u4F5C\u4E1A\u7684\u9636\u6BB5\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"- PENDING: \u4F5C\u4E1A\u6B63\u5728\u7B49\u5F85\u5728\u961F\u5217\u4E2D\u8C03\u5EA6\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"- WAITING_TXN: \u7B49\u5F85\u5206\u754C\u4E8B\u52A1 ID \u524D\u7684\u5BFC\u5165\u4EFB\u52A1\u5B8C\u6210\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"- RUNNING: \u6B63\u5728\u8FDB\u884C\u5386\u53F2\u6570\u636E\u8F6C\u6362\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"- FINISHED: \u4F5C\u4E1A\u6210\u529F\u5B8C\u6210\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"- CANCELLED: \u4F5C\u4E1A\u5931\u8D25\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Msg"}),(0,t.jsx)(e.td,{children:"\u5982\u679C\u4F5C\u4E1A\u5931\u8D25\uFF0C\u663E\u793A\u5931\u8D25\u4FE1\u606F\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Progress"}),(0,t.jsx)(e.td,{children:"\u4F5C\u4E1A\u8FDB\u5EA6\u3002\u4EC5\u5728 RUNNING \u72B6\u6001\u4E0B\u663E\u793A\u3002\u8FDB\u5EA6\u4EE5 M/N \u7684\u5F62\u5F0F\u663E\u793A\u3002N \u662F Schema Change \u4E2D\u6D89\u53CA\u7684\u526F\u672C\u7684\u603B\u6570\u3002M \u662F\u5DF2\u5B8C\u6210\u5386\u53F2\u6570\u636E\u8F6C\u6362\u7684\u526F\u672C\u6570\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Timeout"}),(0,t.jsx)(e.td,{children:"\u4F5C\u4E1A\u8D85\u65F6\u65F6\u95F4\uFF0C\u4EE5\u79D2\u4E3A\u5355\u4F4D\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5C55\u793A\u9ED8\u8BA4 db \u7684\u6240\u6709\u4FEE\u6539\u5217\u7684\u4EFB\u52A1\u6267\u884C\u60C5\u51B5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN;\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5C55\u793A\u67D0\u4E2A\u8868\u6700\u8FD1\u4E00\u6B21\u4FEE\u6539\u5217\u7684\u4EFB\u52A1\u6267\u884C\u60C5\u51B5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5C55\u793A\u6307\u5B9A db \u7684\u521B\u5EFA\u6216\u5220\u9664 ROLLUP \u7684\u4EFB\u52A1\u6267\u884C\u60C5\u51B5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SHOW ALTER TABLE ROLLUP FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"SHOW, ALTER\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var l=s(667294);let t={},d=l.createContext(t);function r(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);