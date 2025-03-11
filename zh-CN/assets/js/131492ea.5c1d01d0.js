"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["400152"],{459691:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-STATUS","title":"ADMIN SET REPLICA STATUS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-STATUS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ADMIN SET REPLICA STATUS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW TABLET DIAGNOSIS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS"},"next":{"title":"ADMIN SET REPLICA VERSION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-VERSION"}}'),l=t("785893"),a=t("250065");let d={title:"ADMIN SET REPLICA STATUS",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BBE\u7F6E\u6307\u5B9A\u526F\u672C\u7684\u72B6\u6001\uFF0C\u76EE\u524D\u4EC5\u7528\u4E8E\u624B\u52A8\u5C06\u67D0\u4E9B\u526F\u672C\u72B6\u6001\u8BBE\u7F6E\u4E3A ",(0,l.jsx)(n.code,{children:"BAD"}),"\u3001",(0,l.jsx)(n.code,{children:"DROP"})," \u548C ",(0,l.jsx)(n.code,{children:"OK"}),"\uFF0C\u4ECE\u800C\u4F7F\u5F97\u7CFB\u7EDF\u80FD\u591F\u81EA\u52A8\u4FEE\u590D\u8FD9\u4E9B\u526F\u672C\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS \nPROPERTIES ("tablet_id"="<tablet_id>","backend_id"="<backend_id>","status"="<status>")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<tablet_id>"})]})}),"\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u8BBE\u7F6E\u526F\u672C\u72B6\u6001\u7684 tablet ID\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<backend_id>"})]})}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u526F\u672C\u6240\u5728\u7684 BE \u8282\u70B9 ID"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"<status>"})]})}),"\n",(0,l.jsx)(n.p,{children:'\u5F53\u524D\u4EC5\u652F\u6301 "drop"\u3001"bad"\u3001 "ok"\n\u5982\u679C\u6307\u5B9A\u7684\u526F\u672C\u4E0D\u5B58\u5728\uFF0C\u6216\u72B6\u6001\u5DF2\u7ECF\u662F bad\uFF0C\u5219\u4F1A\u88AB\u5FFD\u7565'}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8\u610F"}),"\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E\u4E3A Bad \u72B6\u6001\u7684\u526F\u672C"}),"\n",(0,l.jsx)(n.p,{children:"\u5B83\u5C06\u4E0D\u80FD\u8BFB\u5199\u3002\u53E6\u5916\uFF0C\u8BBE\u7F6E Bad \u6709\u65F6\u662F\u4E0D\u751F\u6548\u7684\u3002\u5982\u679C\u8BE5\u526F\u672C\u5B9E\u9645\u6570\u636E\u662F\u6B63\u786E\u7684\uFF0C\u5F53 BE \u4E0A\u62A5\u8BE5\u526F\u672C\u72B6\u6001\u662F ok \u7684\uFF0Cfe \u5C06\u628A\u526F\u672C\u81EA\u52A8\u6062\u590D\u56DE ok \u72B6\u6001\u3002\u64CD\u4F5C\u53EF\u80FD\u7ACB\u523B\u5220\u9664\u8BE5\u526F\u672C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E\u4E3A Drop \u72B6\u6001\u7684\u526F\u672C"}),"\n",(0,l.jsx)(n.p,{children:"\u5B83\u4ECD\u7136\u53EF\u4EE5\u8BFB\u5199\u3002\u4F1A\u5728\u5176\u4ED6\u673A\u5668\u5148\u589E\u52A0\u4E00\u4E2A\u5065\u5EB7\u526F\u672C\uFF0C\u518D\u5220\u9664\u8BE5\u526F\u672C\u3002\u76F8\u6BD4\u8BBE\u7F6E Bad\uFF0C\u8BBE\u7F6E Drop \u7684\u64CD\u4F5C\u662F\u5B89\u5168\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u62E5\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6267\u884C\u6570\u636E\u5E93\u7BA1\u7406\u64CD\u4F5C\u6240\u9700\u7684\u6743\u9650\uFF0C\u5305\u62EC\u7BA1\u7406\u8868\u3001\u5206\u533A\u4EE5\u53CA\u7CFB\u7EDF\u7EA7\u547D\u4EE4\u7B49\u64CD\u4F5C\u3002"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E tablet 10003 \u5728 BE 10001 \u4E0A\u7684\u526F\u672C\u72B6\u6001\u4E3A bad\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E tablet 10003 \u5728 BE 10001 \u4E0A\u7684\u526F\u672C\u72B6\u6001\u4E3A drop\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "drop");\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E tablet 10003 \u5728 BE 10001 \u4E0A\u7684\u526F\u672C\u72B6\u6001\u4E3A ok\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let l={},a=s.createContext(l);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);