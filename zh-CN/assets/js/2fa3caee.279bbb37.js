"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["270809"],{538754:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/collect-list","title":"COLLECT_LIST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/collect-list.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/collect-list","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/collect-list","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"COLLECT_LIST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COLLECT_SET","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/collect-set"},"next":{"title":"RETENTION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/retention"}}'),s=l("785893"),c=l("250065");let i={title:"COLLECT_LIST",language:"zh-CN"},r=void 0,o={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u67D0\u4E00\u5217\u7684\u6240\u6709\u503C\u805A\u96C6\u6210\u4E00\u4E2A\u6570\u7EC4"}),"\n",(0,s.jsx)(n.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GROUP_ARRAY"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"COLLECT_LIST(<expr> [,<max_size>])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<expr>"})}),(0,s.jsx)(n.td,{children:"\u8981\u805A\u5408\u7684\u5217\u6216\u8868\u8FBE\u5F0F"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<max_size>"})}),(0,s.jsx)(n.td,{children:"\u53EF\u9009\u53C2\u6570\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u53C2\u6570\u80FD\u591F\u5C06\u7ED3\u679C\u6570\u7EC4\u7684\u5927\u5C0F\u9650\u5236\u4E3A max_size \u4E2A\u5143\u7D20"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u662F ARRAY\uFF0C\u8BE5\u6570\u7EC4\u5305\u542B\u6240\u6709\u503C\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u503C\u4E3A NULL\uFF0C\u5219\u4F1A\u8FC7\u6EE4"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select k1,k2,k3 from collect_list_test order by k1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-02 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | sql   |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select collect_list(k1),collect_list(k1,3) from collect_list_test;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------------+--------------------------+\n| collect_list(`k1`)      | collect_list(`k1`,3)     |\n+-------------------------+--------------------------+\n| [1,2,2,3,3,4,4]         | [1,2,2]                  |\n+-------------------------+--------------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select k1,collect_list(k2),collect_list(k3,1) from collect_list_test group by k1 order by k1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+-------------------------+--------------------------+\n| k1   | collect_list(`k2`)      | collect_list(`k3`,1)     |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-02,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var t=l(667294);let s={},c=t.createContext(s);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);