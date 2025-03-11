"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["921454"],{483883:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION","title":"SHOW REPLICA DISTRIBUTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW REPLICA DISTRIBUTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN SET REPLICA STATUS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS"},"next":{"title":"SHOW REPLICA STATUS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-STATUS"}}'),l=s("785893"),r=s("250065");let i={title:"SHOW REPLICA DISTRIBUTION",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8868\u6216\u5206\u533A\u526F\u672C\u5206\u5E03\u72B6\u6001"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW REPLICA DISTRIBUTION FROM [ <database_name>.]<table_name> [<partition_list>] \n[where_clause]\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"partition_list\n  : PARTITION (<partition_name>[ , ... ])\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"where_clause\n: WHERE <output_column_name> = <value>\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6307\u5B9A\u8868\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\uFF08Database\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982My Object\uFF09\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<db_name>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u96C6\u7FA4\uFF08Cluster\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982My Object\uFF09\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["2. ",(0,l.jsx)(e.code,{children:"<partition_list>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6307\u5B9A\u5206\u533A\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u5272\uFF0C\u5728\u5176\u6240\u5728\u7684\u8868\uFF08Table\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,l.jsx)(e.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"BackendId"}),(0,l.jsx)(e.td,{children:"Int"}),(0,l.jsx)(e.td,{children:"BE\uFF08Backend\uFF09\u8282\u70B9\u7684 ID\uFF0C\u8868\u793A\u8BE5\u526F\u672C\u6240\u5728\u7684\u8282\u70B9\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaNum"}),(0,l.jsx)(e.td,{children:"Int"}),(0,l.jsx)(e.td,{children:"\u8BE5 BE \u8282\u70B9\u4E0A\u7684\u526F\u672C\u6570\u91CF\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ReplicaSize"}),(0,l.jsx)(e.td,{children:"Int"}),(0,l.jsx)(e.td,{children:"\u8BE5 BE \u8282\u70B9\u4E0A\u6240\u6709\u526F\u672C\u5360\u7528\u7684\u5B58\u50A8\u5927\u5C0F\uFF08\u5355\u4F4D\uFF1Abytes\uFF09\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"NumGraph"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u4EE5\u53EF\u89C6\u5316\u65B9\u5F0F\uFF08> \u7B26\u53F7\uFF09\u8868\u793A\u526F\u672C\u6570\u91CF\u7684\u6BD4\u4F8B\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"NumPercent"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u4EE5\u767E\u5206\u6BD4\u8868\u793A\u526F\u672C\u6570\u91CF\u7684\u5360\u6BD4\uFF0C\u4F8B\u5982 100.00%\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"SizeGraph"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u4EE5\u53EF\u89C6\u5316\u65B9\u5F0F\uFF08> \u7B26\u53F7\uFF09\u8868\u793A\u526F\u672C\u5B58\u50A8\u5927\u5C0F\u7684\u6BD4\u4F8B\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"SizePercent"}),(0,l.jsx)(e.td,{children:"String"}),(0,l.jsx)(e.td,{children:"\u4EE5\u767E\u5206\u6BD4\u8868\u793A\u526F\u672C\u5B58\u50A8\u5927\u5C0F\u7684\u5360\u6BD4\uFF0C\u4F8B\u5982 100.00%\u3002"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u67E5\u770B\u8868\u7684\u526F\u672C\u5206\u5E03"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW REPLICA DISTRIBUTION FROM sell_user;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"*************************** 1. row ***************************\nBackendId: 10009\n ReplicaNum: 4\nReplicaSize: 8857\n   NumGraph: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n NumPercent: 100.00%\n  SizeGraph: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nSizePercent: 100.00%\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u67E5\u770B\u8868\u7684\u5206\u533A\u7684\u526F\u672C\u5206\u5E03"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);