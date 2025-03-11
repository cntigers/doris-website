"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["451031"],{141182:function(e,n,l){l.r(n),l.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/DROP-TABLE","title":"DROP TABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/table/DROP-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/DROP-TABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/DROP-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP TABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TRUNCATE TABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE"},"next":{"title":"SHOW CREATE TABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/SHOW-CREATE-TABLE"}}'),t=l("785893"),i=l("250065");let d={title:"DROP TABLE",language:"zh-CN"},a=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5220\u9664 Table\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] [<db_name>.]<table_name> [FORCE];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1.",(0,t.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u8868\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\uFF08Database\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1.",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My Database"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2.",(0,t.jsx)(n.code,{children:"FORCE"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u7CFB\u7EDF\u4E0D\u4F1A\u68C0\u67E5\u8BE5\u8868\u662F\u5426\u5B58\u5728\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\uFF0C\u8868\u5C06\u76F4\u63A5\u88AB\u5220\u9664\u5E76\u4E14\u4E0D\u80FD\u88AB\u6062\u590D\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u6267\u884C\u6B64\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Drop_priv"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"DROP TABLE \u5C5E\u4E8E\u8868 DROP \u64CD\u4F5C"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6267\u884C ",(0,t.jsx)(n.code,{children:"DROP TABLE"})," \u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u53EF\u4EE5\u901A\u8FC7 RECOVER \u8BED\u53E5\u6062\u590D\u88AB\u5220\u9664\u7684\u8868\u3002\u8BE6\u89C1 ",(0,t.jsx)(n.a,{href:"../../recycle/RECOVER",children:"RECOVER"})," \u8BED\u53E5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679C\u6267\u884C ",(0,t.jsx)(n.code,{children:"DROP TABLE FORCE"}),"\uFF0C\u5219\u7CFB\u7EDF\u4E0D\u4F1A\u68C0\u67E5\u8BE5\u8868\u662F\u5426\u5B58\u5728\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\uFF0C\u8868\u5C06\u76F4\u63A5\u88AB\u5220\u9664\u5E76\u4E14\u4E0D\u80FD\u88AB\u6062\u590D\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u6267\u884C\u6B64\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u4E00\u4E2A Table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u5B58\u5728\uFF0C\u5220\u9664\u6307\u5B9A Database \u7684 Table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u5B58\u5728\uFF0C\u5220\u9664\u6307\u5B9A Database \u7684 Table\uFF0C\u5F3A\u5236\u5220\u9664"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table FORCE;\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return d}});var s=l(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);