"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["205308"],{713469:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"faq/correctness-faq","title":"\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/faq/correctness-faq.md","sourceDirName":"faq","slug":"/faq/correctness-faq","permalink":"/zh-CN/docs/2.0/faq/correctness-faq","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5E38\u89C1BI\u95EE\u9898","permalink":"/zh-CN/docs/2.0/faq/bi-faq"},"next":{"title":"\u6570\u636E\u7C7B\u578B\u6982\u89C8","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/data-type-overview"}}'),d=t("785893"),s=t("250065");let i={title:"\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898",language:"zh-CN"},c="\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898",l={},h=[];function a(e){let n={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898",children:"\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898"})}),"\n",(0,d.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u7528\u4E8E\u8BB0\u5F55 Doris \u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5173\u4E8E\u6570\u636E\u6B63\u786E\u6027\u7684\u5E38\u89C1\u95EE\u9898\u3002\u4F1A\u4E0D\u5B9A\u671F\u66F4\u65B0\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u8868\u683C\u4E2D\u7684\u201C\u8868\u51FA\u73B0\u91CD\u590D key \u6570\u636E\u201D\u5747\u6307\u5728 merge-on-write Unique \u8868\u4E2D\u51FA\u73B0\u91CD\u590D key \u6570\u636E\u3002merge-on-write Unique \u8868\u4E0A\u7684\u91CD\u590D key \u95EE\u9898\u90FD\u53EF\u4EE5\u901A\u8FC7",(0,d.jsx)(n.a,{href:"../admin-manual/data-admin/data-recovery",children:"\u89E6\u53D1full compaction"}),"\u6765\u8FDB\u884C\u4FEE\u590D\uFF0C\u5176\u4ED6\u7C7B\u578B\u7684\u6B63\u786E\u6027\u95EE\u9898\u53EF\u80FD\u9700\u8981\u6839\u636E\u60C5\u51B5\u6765\u786E\u5B9A\u4FEE\u590D\u65B9\u6848\uFF0C\u5982\u6709\u9700\u8981\uFF0C\u8BF7\u8054\u7CFB\u793E\u533A\u652F\u6301\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u95EE\u9898\u73B0\u8C61"}),(0,d.jsx)(n.th,{children:"\u53D1\u751F\u6761\u4EF6"}),(0,d.jsx)(n.th,{children:"\u5F71\u54CD\u7248\u672C"}),(0,d.jsx)(n.th,{children:"Fix \u7248\u672C"}),(0,d.jsx)(n.th,{children:"\u5F71\u54CD\u8303\u56F4"}),(0,d.jsx)(n.th,{children:"Fix PR"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\u4F7F\u7528 Stream Load \u5411 merge-on-write Unique \u5BFC\u5165\u6570\u636E\u65F6\uFF0C\u5BF9\u4E8E\u6EE1\u8DB3",(0,d.jsx)(n.code,{children:"delete"}),"\u53C2\u6570\u6240\u6307\u5B9A\u7684\u5220\u9664\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u5BFC\u5165\u540E\u6CA1\u6709\u88AB\u5220\u9664\u6389"]}),(0,d.jsxs)(n.td,{children:["\u4F7F\u7528 Stream Load \u5BFC\u5165\u6570\u636E\u65F6\uFF0C\u8BBE\u7F6E\u4E86",(0,d.jsx)(n.code,{children:"merge_type: MERGE"}),", ",(0,d.jsx)(n.code,{children:"partial_columns: true"}),"\u548C",(0,d.jsx)(n.code,{children:"delete"}),"\u53C2\u6570"]}),(0,d.jsx)(n.td,{children:"<2.0.15"}),(0,d.jsx)(n.td,{children:">=2.0.15"}),(0,d.jsx)(n.td,{children:"\u90E8\u5206\u5217\u66F4\u65B0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/40730",children:"#40730"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8868\u51FA\u73B0\u91CD\u590D key \u6570\u636E"}),(0,d.jsxs)(n.td,{children:["\u7528\u6237\u4F7F\u7528",(0,d.jsx)(n.code,{children:'ALTER TABLE tbl ENABLE FEATURE "SEQUENCE_LOAD" WITH ...'}),"\u8BED\u53E5\u7ED9\u4E00\u4E2A\u4E0D\u652F\u6301 sequence \u5217\u7684 merge-on-write Unique \u8868\u6DFB\u52A0\u4E86 sequence \u5217\u529F\u80FD\u5E76\u4E14\u4E4B\u540E\u6709\u65B0\u7684\u5BFC\u5165"]}),(0,d.jsx)(n.td,{children:"<2.0.15"}),(0,d.jsx)(n.td,{children:">=2.0.15"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39958",children:"#39958"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u4F7F\u7528\u90E8\u5206\u5217\u66F4\u65B0\u5BFC\u5165\u540E\uFF0Cmerge-on-write Unique \u8868\u4E2D\u90E8\u5206\u6570\u636E\u9519\u4E71"}),(0,d.jsx)(n.td,{children:"merge-on-write Unique \u8868\u4E0A\u6709\u5E76\u53D1\u7684\u90E8\u5206\u5217\u66F4\u65B0\u5BFC\u5165\uFF0C\u5E76\u4E14\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u6709 BE \u91CD\u542F"}),(0,d.jsx)(n.td,{children:"<2.0.15"}),(0,d.jsx)(n.td,{children:">=2.0.15"}),(0,d.jsx)(n.td,{children:"\u90E8\u5206\u5217\u66F4\u65B0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38331",children:"#38331"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8868\u51FA\u73B0\u91CD\u590D key \u6570\u636E"}),(0,d.jsx)(n.td,{children:"merge-on-write Unique \u8868\u4E0A\u6709 sequence \u5217\uFF0C\u8868\u4E0A\u5B58\u5728\u5355\u6B21\u6570\u636E\u91CF\u5F88\u5927\u7684\u5BFC\u5165\uFF0C\u4E14\u89E6\u53D1\u4E86 segment compaction"}),(0,d.jsx)(n.td,{children:"<2.0.15"}),(0,d.jsx)(n.td,{children:">=2.0.15"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38369",children:"#38369"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8868\u51FA\u73B0\u91CD\u590D key \u6570\u636E"}),(0,d.jsx)(n.td,{children:"\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u4E0B merge-on-write Unique \u8868\u4E0A\u6709\u5931\u8D25\u7684 full clone"}),(0,d.jsx)(n.td,{children:"<2.0.13"}),(0,d.jsx)(n.td,{children:">=2.0.13"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37001",children:"#37001"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"merge-on-write Unique \u8868\u4E0A\u591A\u526F\u672C\u6570\u636E\u4E0D\u4E00\u81F4"}),(0,d.jsxs)(n.td,{children:["merge-on-write Unique \u8868\u4E0A\u6709\u8FC7\u6307\u5B9A\u4E86",(0,d.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"}),"\u5217\u7684\u90E8\u5206\u5217\u66F4\u65B0\u5BFC\u5165\uFF0C\u4E14\u5728\u5BFC\u5165\u7684\u65F6\u5019\u4E0D\u540C\u526F\u672C\u4E0A Base Compaction \u8FDB\u5EA6\u4E0D\u4E00\u81F4"]}),(0,d.jsx)(n.td,{children:"<2.0.15"}),(0,d.jsx)(n.td,{children:">=2.0.15"}),(0,d.jsx)(n.td,{children:"\u90E8\u5206\u5217\u66F4\u65B0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36210",children:"#36210"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8868\u51FA\u73B0\u91CD\u590D key \u6570\u636E"}),(0,d.jsx)(n.td,{children:"merge-on-write Unique \u8868\u4E0A\u6709\u5E76\u53D1\u7684\u90E8\u5206\u5217\u66F4\u65B0\u5BFC\u5165\uFF0C\u5E76\u4E14\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u6709 BE \u91CD\u542F"}),(0,d.jsx)(n.td,{children:"<2.0.11"}),(0,d.jsx)(n.td,{children:">=2.0.11"}),(0,d.jsx)(n.td,{children:"\u90E8\u5206\u5217\u66F4\u65B0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35739",children:"#35739"})})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);