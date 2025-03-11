"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["413070"],{733590:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","title":"SHOW CACHE HOTSPOT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW CACHE HOTSPOT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW WARM UP JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-WARM-UP-JOB"},"next":{"title":"CREATE FILE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/security/CREATE-FILE"}}'),l=t("785893"),a=t("250065");let r={title:"SHOW CACHE HOTSPOT",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u53C2\u8003",id:"\u53C2\u8003",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u663E\u793A\u6587\u4EF6\u7F13\u5B58\u7684\u70ED\u70B9\u4FE1\u606F\u3002"}),"\n",(0,l.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,l.jsxs)(n.p,{children:["\u5728 3.0.4 \u7248\u672C\u4E4B\u524D\u53EF\u4EE5\u4F7F\u7528",(0,l.jsx)(n.code,{children:"SHOW CACHE HOTSPOT"}),"\u8BED\u53E5\u8FDB\u884C\u7F13\u5B58\u70ED\u5EA6\u4FE1\u606F\u7EDF\u8BA1\u67E5\u8BE2\uFF0C\n\u4ECE 3.0.4 \u7248\u672C\u5F00\u59CB\u4E0D\u518D\u652F\u6301\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"SHOW CACHE HOTSPOT"})," \u8BED\u53E5\u8FDB\u884C\u7F13\u5B58\u70ED\u5EA6\u4FE1\u606F\u7EDF\u8BA1\u67E5\u8BE2\uFF0C\n\u8BF7\u76F4\u63A5\u8BBF\u95EE\u7CFB\u7EDF\u8868 ",(0,l.jsx)(n.code,{children:"__internal_schema.cloud_cache_hotspot"})," \u8FDB\u884C\u67E5\u8BE2\u3002\n\u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"../../../../compute-storage-decoupled/file-cache",children:"MANAGING FILE CACHE"})]})}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"   SHOW CACHE HOTSPOT '/[<compute_group_name>/<db.table_name>]';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D\u79F0"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"<compute_group_name>"}),(0,l.jsx)(n.td,{children:"\u8BA1\u7B97\u7EC4\u7684\u540D\u79F0\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"<table_name>"}),(0,l.jsx)(n.td,{children:"\u8868\u7684\u540D\u79F0\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u663E\u793A\u6574\u4E2A\u7CFB\u7EDF\u7684\u7F13\u5B58\u70ED\u70B9\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CACHE HOTSPOT '/';\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u663E\u793A\u7279\u5B9A\u8BA1\u7B97\u7EC4 my_compute_group \u7684\u7F13\u5B58\u70ED\u70B9\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CACHE HOTSPOT '/my_compute_group/';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u8003",children:"\u53C2\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../../../../compute-storage-decoupled/file-cache",children:"MANAGING FILE CACHE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./WARM-UP",children:"WARMUP CACHE"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);