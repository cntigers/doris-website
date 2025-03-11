"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["753439"],{406473:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/backend_active_tasks","title":"backend_active_tasks","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/backend_active_tasks.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/backend_active_tasks","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/backend_active_tasks","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"backend_active_tasks","language":"zh-CN"},"sidebar":"docs","previous":{"title":"active_queries","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/active_queries"},"next":{"title":"catalog_meta_cache_statistics","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/catalog_meta_cache_statistics"}}'),s=n("785893"),i=n("250065");let d={title:"backend_active_tasks",language:"zh-CN"},r=void 0,c={},a=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function x(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u770B\u5F53\u524D Backend \u6B63\u5728\u8FD0\u884C\u7684 Pipeline \u7684\u4EFB\u52A1"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"BE_ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6267\u884C\u4EFB\u52A1\u7684 Backend \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FE_HOST"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4E0B\u53D1\u4EFB\u52A1\u7684 Frontend \u5730\u5740"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TASK_TIME_MS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4EFB\u52A1\u8FD0\u884C\u65F6\u95F4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TASK_CPU_TIME_MS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4EFB\u52A1\u8FD0\u884C\u7684 CPU \u65F6\u95F4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SCAN_ROWS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u626B\u63CF\u6570\u636E\u884C\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SCAN_BYTES"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u626B\u63CF\u6570\u636E\u5B57\u8282\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"BE_PEAK_MEMORY_BYTES"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4F7F\u7528\u7684\u5185\u5B58\u5CF0\u503C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_USED_MEMORY_BYTES"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5F53\u524D\u4F7F\u7528\u7684\u5185\u5B58"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SHUFFLE_SEND_BYTES"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Shuffle \u6570\u636E\u5B57\u8282\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SHUFFLE_SEND_ROWS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Shuffle \u6570\u636E\u884C\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_TYPE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u7C7B\u578B"})]})]})]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(x,{...t})}):x(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);