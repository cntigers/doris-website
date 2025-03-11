"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["390322"],{625614:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/WARM-UP","title":"WARM UP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/storage-management/WARM-UP.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/WARM-UP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/WARM-UP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WARM UP","language":"zh_CN"},"sidebar":"docs","previous":{"title":"SHOW STORAGE POLICY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY"},"next":{"title":"CANCEL WARM UP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/CANCEL-WARM-UP"}}'),a=t("785893"),l=t("250065");let r={title:"WARM UP",language:"zh_CN"},i=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"WARM UP COMPUTE GROUP \u8BED\u53E5\u7528\u4E8E\u9884\u70ED\u8BA1\u7B97\u7EC4\u4E2D\u7684\u6570\u636E\uFF0C\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u3002\u9884\u70ED\u64CD\u4F5C\u53EF\u4EE5\u4ECE\u53E6\u4E00\u4E2A\u8BA1\u7B97\u7EC4\u4E2D\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7279\u5B9A\u7684\u8868\u548C\u5206\u533A\u8FDB\u884C\u9884\u70ED\u3002\u9884\u70ED\u64CD\u4F5C\u8FD4\u56DE\u4E00\u4E2A\u4F5C\u4E1A ID\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8FFD\u8E2A\u9884\u70ED\u4F5C\u4E1A\u7684\u72B6\u6001\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"WARM UP COMPUTE GROUP <destination_compute_group_name> WITH COMPUTE GROUP <source_compute_group_name> FORCE;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"WARM UP COMPUTE GROUP <destination_compute_group_name> WITH <warm_up_list>;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"warm_up_list ::= warm_up_item [AND warm_up_item...];\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"warm_up_item ::= TABLE <table_name> [PARTITION <partition_name>];\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570"}),(0,a.jsx)(n.th,{children:"\u63CF\u8BF4\u660E\u8FF0"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"destination_compute_group_name"}),(0,a.jsx)(n.td,{children:"\u8981\u9884\u70ED\u7684\u76EE\u6807\u8BA1\u7B97\u7EC4\u7684\u540D\u79F0\u3002"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"source_compute_group_name"}),(0,a.jsx)(n.td,{children:"\u4ECE\u4E2D\u83B7\u53D6\u8D44\u6E90\u7684\u6E90\u96C6\u7FA4\u7684\u540D\u79F0\u3002"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"warm_up_list"}),(0,a.jsx)(n.td,{children:"\u8981\u9884\u70ED\u7684\u7279\u5B9A\u9879\u76EE\u7684\u5217\u8868\uFF0C\u53EF\u4EE5\u5305\u62EC\u8868\u548C\u5206\u533A\u3002"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"table_name"}),(0,a.jsx)(n.td,{children:"\u7528\u4E8E\u9884\u70ED\u7684\u8868\u7684\u540D\u79F0\u3002"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"partition_name"}),(0,a.jsx)(n.td,{children:"\u7528\u4E8E\u9884\u70ED\u7684\u5206\u533A\u7684\u540D\u79F0\u3002"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JobId: \u9884\u70ED\u4F5C\u4E1A\u7684 ID\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u4F7F\u7528\u540D\u4E3A source_group_name \u7684\u8BA1\u7B97\u7EC4\u9884\u70ED\u540D\u4E3A destination_group_name \u7684\u8BA1\u7B97\u7EC4\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"   WARM UP COMPUTE GROUP destination_group_name WITH COMPUTE GROUP source_group_name;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"\u4F7F\u7528\u540D\u4E3A destination_group \u7684\u8BA1\u7B97\u7EC4\u9884\u70ED\u8868 sales_data \u548C customer_info \u4EE5\u53CA\u8868 orders \u7684\u5206\u533A q1_2024\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"    WARM UP COMPUTE GROUP destination_group WITH \n        TABLE sales_data \n        AND TABLE customer_info \n        AND TABLE orders PARTITION q1_2024;\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);