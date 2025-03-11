"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["420986"],{805643:function(e,o,n){n.r(o),n.d(o,{default:()=>d,frontMatter:()=>t,metadata:()=>r,assets:()=>s,toc:()=>m,contentTitle:()=>l});var r=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis","title":"Heap Profile \u5206\u6790\u5185\u5B58","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Heap Profile \u5206\u6790\u5185\u5B58","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5185\u5B58\u65E5\u5FD7\u5206\u6790","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/memory-log-analysis"},"next":{"title":"\u5185\u5B58\u8DDF\u8E2A\u5668","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker"}}'),a=n("785893"),i=n("250065");let t={title:"Heap Profile \u5206\u6790\u5185\u5B58",language:"zh-CN"},l=void 0,s={},m=[];function c(e){let o={a:"a",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Heap Profile \u652F\u6301\u5B9E\u65F6\u67E5\u770B\u8FDB\u7A0B\u5185\u5B58\u4F7F\u7528\uFF0C\u5E76\u53EF\u4EE5\u770B\u5230\u8C03\u7528\u6808\uFF0C\u6240\u4EE5\u8FD9\u901A\u5E38\u9700\u8981\u5BF9\u4EE3\u7801\u6709\u4E00\u4E9B\u4E86\u89E3\uFF0CDoris \u4F7F\u7528 Jemalloc \u4F5C\u4E3A\u9ED8\u8BA4\u7684 Allocator\uFF0C\u6709\u5173 Jemalloc Heap Profile \u7684\u4F7F\u7528\u65B9\u6CD5\u53C2\u8003 ",(0,a.jsx)(o.a,{href:"https://doris.apache.org/community/developer-guide/debug-tool/?_highlight=debug#jemalloc-1",children:"Jemalloc Heap Profile"}),"\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F Heap Profile \u8BB0\u5F55\u7684\u662F\u865A\u62DF\u5185\u5B58\uFF0C\u9700\u8981\u4FEE\u6539\u914D\u7F6E\u540E\u91CD\u542F Doris BE \u8FDB\u7A0B\uFF0C\u5E76\u4E14\u73B0\u8C61\u53EF\u4EE5\u88AB\u590D\u73B0\u3002"]}),"\n",(0,a.jsxs)(o.p,{children:["\u5982\u679C\u5728 Heap Profile \u5185\u5B58\u5360\u6BD4\u5927\u7684\u8C03\u7528\u6808\u4E2D\u770B\u5230 ",(0,a.jsx)(o.code,{children:"Segment"}),"\uFF0C",(0,a.jsx)(o.code,{children:"TabletSchema"}),"\u3001",(0,a.jsx)(o.code,{children:"ColumnReader"})," \u5B57\u6BB5\uFF0C\u8BF4\u660E\u5143\u6570\u636E\u5360\u7528\u5185\u5B58\u5927\u3002"]}),"\n",(0,a.jsxs)(o.p,{children:["\u5982\u679C\u96C6\u7FA4\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u540E\u9759\u7F6E\u65F6 BE \u5185\u5B58\u4E0D\u4E0B\u964D\uFF0C\u6B64\u65F6\u5728 Heap Profile \u5185\u5B58\u5360\u6BD4\u5927\u7684\u8C03\u7528\u6808\u4E2D\u770B\u5230 ",(0,a.jsx)(o.code,{children:"Agg"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Join"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Filter"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Sort"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Scan"})," \u7B49\u5B57\u6BB5\uFF0C\u67E5\u770B\u5BF9\u5E94\u65F6\u95F4\u6BB5\u7684 BE \u8FDB\u7A0B\u5185\u5B58\u76D1\u63A7\u82E5\u5448\u73B0\u6301\u7EED\u4E0A\u5347\u7684\u8D8B\u52BF\uFF0C\u90A3\u4E48\u6709\u7406\u7531\u6000\u7591\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\uFF0C\u4F9D\u636E\u8C03\u7528\u6808\u5BF9\u7167\u4EE3\u7801\u7EE7\u7EED\u5206\u6790\u3002"]}),"\n",(0,a.jsxs)(o.p,{children:["\u5982\u679C\u96C6\u7FA4\u4E0A\u4EFB\u52A1\u6267\u884C\u671F\u95F4\u5728 Heap Profile \u5185\u5B58\u5360\u6BD4\u5927\u7684\u8C03\u7528\u6808\u4E2D\u770B\u5230 ",(0,a.jsx)(o.code,{children:"Agg"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Join"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Filter"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Sort"}),"\uFF0C",(0,a.jsx)(o.code,{children:"Scan"})," \u7B49\u5B57\u6BB5\uFF0C\u4EFB\u52A1\u7ED3\u675F\u540E\u5185\u5B58\u6B63\u5E38\u91CA\u653E\uFF0C\u8BF4\u660E\u5927\u90E8\u5206\u5185\u5B58\u88AB\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u4F7F\u7528\uFF0C\u4E0D\u5B58\u5728\u6CC4\u6F0F\uFF0C\u5982\u679C\u6B64\u65F6 ",(0,a.jsx)(o.code,{children:"Label=query, Type=overview"})," Memory Tracker \u7684\u503C\u5360\u603B\u5185\u5B58\u7684\u6BD4\u4F8B\uFF0C\u5C0F\u4E8E Heap Profile \u4E2D\u5305\u542B\u4E0A\u8FF0\u5B57\u6BB5\u7684\u5185\u5B58\u8C03\u7528\u6808\u5360\u603B\u5185\u5B58\u7684\u6BD4\u4F8B\uFF0C\u8BF4\u660E ",(0,a.jsx)(o.code,{children:"Label=query, Type=overview"})," Memory Tracker \u7EDF\u8BA1\u7684\u4E0D\u51C6\u786E\uFF0C\u53EF\u4EE5\u5728\u793E\u533A\u53CA\u65F6\u53CD\u9988\u3002"]})]})}function d(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return l},a:function(){return t}});var r=n(667294);let a={},i=r.createContext(a);function t(e){let o=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);