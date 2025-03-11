"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["567053"],{110818:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>o,toc:()=>i,contentTitle:()=>m});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","title":"SHOW WORKLOAD GROUPS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW WORKLOAD GROUPS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP WORKLOAD GROUP","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/DROP-WORKLOAD-GROUP"},"next":{"title":"CREATE WORKLOAD POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY"}}'),a=t("785893"),s=t("250065");let r={title:"SHOW WORKLOAD GROUPS",language:"zh-CN"},m=void 0,o={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5F53\u524D\u7528\u6237\u5177\u6709 usage_priv \u6743\u9650\u7684\u8D44\u6E90\u7EC4\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW WORKLOAD GROUPS [LIKE "<pattern>"];\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u4EC5\u505A\u8D44\u6E90\u7EC4\u7B80\u5355\u5C55\u793A\uFF0C\u66F4\u590D\u6742\u7684\u5C55\u793A\u53EF\u53C2\u8003 tvf workload_groups()."}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6240\u6709\u8D44\u6E90\u7EC4\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> show workload groups;\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n| 10352416 | g1     | memory_limit             | 20%     |\n| 10352416 | g1     | cpu_share                | 10      |\n+----------+--------+--------------------------+---------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4F7F\u7528 LIKE \u6A21\u7CCA\u5339\u914D\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'mysql> show workload groups like "normal%"\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n+----------+--------+--------------------------+---------+\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return r}});var l=t(667294);let a={},s=l.createContext(a);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);