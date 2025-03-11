"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["820371"],{368316:function(e,n,l){l.r(n),l.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","title":"REPAIR TABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"REPAIR TABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COMPACT TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/COMPACT-TABLE"},"next":{"title":"CANCEL REPAIR TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE"}}'),s=l("785893"),i=l("250065");let a={title:"REPAIR TABLE",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"REPAIR TABLE"})," \u8BED\u53E5\u7528\u4E8E\u4F18\u5148\u4FEE\u590D\u6307\u5B9A\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u3002\u8BE5\u8BED\u53E5\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u4FEE\u590D\u6574\u4E2A\u8868\u7684\u6240\u6709\u526F\u672C"}),"\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u4FEE\u590D\u6307\u5B9A\u5206\u533A\u7684\u526F\u672C"}),"\n",(0,s.jsx)(n.li,{children:"\u4EE5\u9AD8\u4F18\u5148\u7EA7\u8FDB\u884C\u526F\u672C\u4FEE\u590D"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u8BBE\u7F6E\u4FEE\u590D\u8D85\u65F6\u65F6\u95F4"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN REPAIR TABLE <table_name> [ PARTITION (<partition_name> [, ...]) ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u9700\u8981\u4FEE\u590D\u7684\u8868\u540D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u540D\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"PARTITION (<partition_name> [, ...])"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u9700\u8981\u4FEE\u590D\u7684\u5206\u533A\u540D\u79F0\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A\u6B64\u53C2\u6570\uFF0C\u5219\u4FEE\u590D\u6574\u4E2A\u8868\u7684\u6240\u6709\u5206\u533A\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7CFB\u7EDF"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u5FC5\u987B\u62E5\u6709 ADMIN \u6743\u9650\u624D\u80FD\u6267\u884C\u8BE5\u547D\u4EE4"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BE5\u8BED\u53E5\u4EC5\u8868\u793A\u7CFB\u7EDF\u4F1A\u5C1D\u8BD5\u4EE5\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\u6307\u5B9A\u7684\u526F\u672C\uFF0C\u4E0D\u4FDD\u8BC1\u4E00\u5B9A\u80FD\u4FEE\u590D\u6210\u529F"}),"\n",(0,s.jsx)(n.li,{children:"\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A 14400 \u79D2\uFF084 \u5C0F\u65F6\uFF09"}),"\n",(0,s.jsx)(n.li,{children:"\u8D85\u65F6\u540E\u7CFB\u7EDF\u5C06\u4E0D\u518D\u4EE5\u9AD8\u4F18\u5148\u7EA7\u4FEE\u590D\u6307\u5B9A\u7684\u526F\u672C"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u4FEE\u590D\u8D85\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u6267\u884C\u8BE5\u547D\u4EE4\u6765\u7EE7\u7EED\u4FEE\u590D"}),"\n",(0,s.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"SHOW REPLICA STATUS"})," \u547D\u4EE4\u67E5\u770B\u4FEE\u590D\u8FDB\u5EA6"]}),"\n",(0,s.jsx)(n.li,{children:"\u8BE5\u547D\u4EE4\u4E0D\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u7684\u6B63\u5E38\u526F\u672C\u4FEE\u590D\u673A\u5236\uFF0C\u4EC5\u63D0\u5347\u6307\u5B9A\u8868\u6216\u5206\u533A\u7684\u4FEE\u590D\u4F18\u5148\u7EA7"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4FEE\u590D\u6574\u4E2A\u8868\u7684\u526F\u672C\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4FEE\u590D\u6307\u5B9A\u5206\u533A\u7684\u526F\u672C\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u4FEE\u590D\u8FDB\u5EA6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM tbl1;\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return a}});var t=l(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);