"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["699134"],{410465:function(n,e,i){i.r(e),i.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>t});var l=JSON.parse('{"id":"admin-manual/data-admin/overview","title":"\u5BB9\u707E\u7BA1\u7406\u6982\u89C8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/data-admin/overview.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/overview","permalink":"/zh-CN/docs/admin-manual/data-admin/overview","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5BB9\u707E\u7BA1\u7406\u6982\u89C8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8C03\u5EA6\u7BA1\u7406","permalink":"/zh-CN/docs/admin-manual/workload-management/job-scheduler"},"next":{"title":"\u5907\u4EFD\u548C\u6062\u590D\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/data-admin/backup-restore/overview"}}'),s=i("785893"),r=i("250065");let d={title:"\u5BB9\u707E\u7BA1\u7406\u6982\u89C8",language:"zh-CN"},t=void 0,a={},o=[{value:"1. \u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65",id:"1-\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65",level:2},{value:"\u4E3B\u8981\u7279\u6027\uFF1A",id:"\u4E3B\u8981\u7279\u6027",level:3},{value:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A",id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B",level:3},{value:"2. \u5907\u4EFD\u4E0E\u6062\u590D",id:"2-\u5907\u4EFD\u4E0E\u6062\u590D",level:2},{value:"\u4E3B\u8981\u7279\u6027\uFF1A",id:"\u4E3B\u8981\u7279\u6027-1",level:3},{value:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A",id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B-1",level:3},{value:"3. \u56DE\u6536\u7AD9\u6062\u590D",id:"3-\u56DE\u6536\u7AD9\u6062\u590D",level:2},{value:"\u4E3B\u8981\u7279\u6027\uFF1A",id:"\u4E3B\u8981\u7279\u6027-2",level:3},{value:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A",id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B-2",level:3}];function c(n){let e={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E86\u5BB9\u707E\u7BA1\u7406\u80FD\u529B\uFF0C\u901A\u8FC7\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65\u3001\u5907\u4EFD\u4E0E\u6062\u590D\u548C\u56DE\u6536\u7AD9\u6062\u590D\u4E09\u5927\u529F\u80FD\uFF0C\u5E2E\u52A9\u7528\u6237\u6709\u6548\u5E94\u5BF9\u786C\u4EF6\u6545\u969C\u3001\u8F6F\u4EF6\u9519\u8BEF\u6216\u4EBA\u4E3A\u5931\u8BEF\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u95EE\u9898\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u9AD8\u53EF\u7528\u6027\u548C\u53EF\u9760\u6027\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"1-\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65",children:"1. \u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u7684\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65\u529F\u80FD\u652F\u6301\u5728\u4E0D\u540C\u7684 Doris \u96C6\u7FA4\u95F4\u8FDB\u884C\u6570\u636E\u7684\u5B9E\u65F6\u590D\u5236\uFF0C\u786E\u4FDD\u91CD\u8981\u6570\u636E\u5206\u5E03\u5728\u591A\u4E2A\u7269\u7406\u9694\u79BB\u7684\u96C6\u7FA4\u4E2D\uFF0C\u5B9E\u73B0\u5730\u57DF\u7EA7\u5BB9\u707E\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4E3B\u8981\u7279\u6027",children:"\u4E3B\u8981\u7279\u6027\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5B9E\u65F6\u540C\u6B65"}),"\uFF1A\u652F\u6301\u5168\u91CF\u548C\u589E\u91CF\u540C\u6B65\u3002\u5168\u91CF\u540C\u6B65\u5728\u521D\u59CB\u9636\u6BB5\u590D\u5236\u6240\u6709\u6570\u636E\uFF1B\u589E\u91CF\u540C\u6B65\u6301\u7EED\u6355\u83B7\u548C\u540C\u6B65\u6570\u636E\u53D8\u66F4\uFF0C\u5305\u62EC\u6570\u636E\uFF08\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\uFF09\u548C\u8868\u7ED3\u6784\u53D8\u66F4\uFF08DDL\uFF09\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u636E\u4E00\u81F4\u6027"}),"\uFF1A\u901A\u8FC7\u65E5\u5FD7\u673A\u5236\uFF08\u5982 Binlog\uFF09\u8BB0\u5F55\u6570\u636E\u53D8\u66F4\uFF0C\u786E\u4FDD\u76EE\u6807\u96C6\u7FA4\u4E0E\u6E90\u96C6\u7FA4\u6570\u636E\u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5730\u57DF\u7EA7\u5BB9\u707E"}),"\uFF1A\u652F\u6301\u4E0D\u540C\u5730\u7406\u4F4D\u7F6E\u96C6\u7FA4\u95F4\u7684\u540C\u6B65\uFF0C\u5F53\u4E00\u4E2A\u96C6\u7FA4\u53D1\u751F\u6545\u969C\u65F6\uFF0C\u5176\u4ED6\u96C6\u7FA4\u53EF\u4EE5\u5FEB\u901F\u63A5\u7BA1\u4E1A\u52A1\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u591A\u573A\u666F\u5E94\u7528"}),"\uFF1A\u9002\u7528\u4E8E\u5BB9\u707E\u5907\u4EFD\u3001\u4E1A\u52A1\u5206\u79BB\uFF08\u5982\u8BFB\u5199\u5206\u79BB\uFF09\u3001\u591A\u6D3B\u96C6\u7FA4\u7B49\u573A\u666F\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B",children:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:"\u67D0\u516C\u53F8\u5728\u4E0D\u540C\u57CE\u5E02\u90E8\u7F72\u4E86\u4E24\u4E2A Doris \u96C6\u7FA4\uFF0CA \u96C6\u7FA4\u4E3A\u4E3B\u96C6\u7FA4\uFF0CB \u96C6\u7FA4\u4E3A\u5907\u4EFD\u96C6\u7FA4\u3002\u901A\u8FC7\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65\uFF0C\u5F53 A \u96C6\u7FA4\u56E0\u81EA\u7136\u707E\u5BB3\u4E2D\u65AD\u670D\u52A1\u65F6\uFF0CB \u96C6\u7FA4\u53EF\u63A5\u7BA1\u4E1A\u52A1\uFF0C\u6700\u5927\u9650\u5EA6\u51CF\u5C11\u505C\u673A\u65F6\u95F4\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"2-\u5907\u4EFD\u4E0E\u6062\u590D",children:"2. \u5907\u4EFD\u4E0E\u6062\u590D"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E86\u5907\u4EFD\u4E0E\u6062\u590D\u529F\u80FD\uFF0C\u7528\u4E8E\u5B9A\u671F\u4FDD\u5B58\u6570\u636E\u5FEB\u7167\uFF0C\u9632\u6B62\u56E0\u610F\u5916\u4E8B\u4EF6\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4E3B\u8981\u7279\u6027-1",children:"\u4E3B\u8981\u7279\u6027\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5907\u4EFD"}),"\uFF1A\u652F\u6301\u5BF9\u6307\u5B9A\u6570\u636E\u5E93\u3001\u8868\u6216\u8005\u5206\u533A\u8FDB\u884C\u5168\u91CF\u5907\u4EFD\uFF0C\u4FDD\u5B58\u5B8C\u6574\u6570\u636E\u5FEB\u7167\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6062\u590D"}),"\uFF1A\u652F\u6301\u4ECE\u5FEB\u7167\u4E2D\u6062\u590D\u5E93\u3001\u8868\u6216\u8005\u5206\u533A\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B-1",children:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:"\u67D0\u516C\u53F8\u5B9A\u671F\u5BF9\u6570\u636E\u8FDB\u884C\u5907\u4EFD\uFF0C\u5E76\u5C06\u5907\u4EFD\u6587\u4EF6\u5B58\u50A8\u5728\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF08\u5982 Amazon S3\uFF09\u4E2D\u3002\u5F53\u8BEF\u64CD\u4F5C\u5BFC\u81F4\u67D0\u5F20\u91CD\u8981\u8868\u88AB\u5220\u9664\u65F6\uFF0C\u5229\u7528\u5907\u4EFD\u529F\u80FD\u5FEB\u901F\u6062\u590D\u4E22\u5931\u6570\u636E\uFF0C\u786E\u4FDD\u4E1A\u52A1\u6B63\u5E38\u8FD0\u884C\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"3-\u56DE\u6536\u7AD9\u6062\u590D",children:"3. \u56DE\u6536\u7AD9\u6062\u590D"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E86\u56DE\u6536\u7AD9\u529F\u80FD\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u4E00\u79CD\u5FEB\u901F\u6062\u590D\u6700\u8FD1\u5220\u9664\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u51CF\u5C11\u56E0\u64CD\u4F5C\u5931\u8BEF\u5E26\u6765\u7684\u5F71\u54CD\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4E3B\u8981\u7279\u6027-2",children:"\u4E3B\u8981\u7279\u6027\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4E34\u65F6\u5220\u9664"}),"\uFF1A\u8868\u6216\u6570\u636E\u5E93\u88AB\u5220\u9664\u540E\u4F1A\u5148\u79FB\u52A8\u5230\u56DE\u6536\u7AD9\uFF0C\u800C\u4E0D\u662F\u7ACB\u5373\u6C38\u4E45\u5220\u9664\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4FDD\u7559\u671F"}),"\uFF1A\u5220\u9664\u7684\u6570\u636E\u5728\u56DE\u6536\u7AD9\u4E2D\u4FDD\u7559\u4E00\u6BB5\u53EF\u914D\u7F6E\u7684\u65F6\u95F4\uFF0C\u7528\u6237\u53EF\u5728\u6B64\u671F\u95F4\u9009\u62E9\u6062\u590D\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5FEB\u901F\u6062\u590D"}),"\uFF1A\u65E0\u9700\u5B8C\u6574\u5907\u4EFD\u6062\u590D\uFF0C\u5373\u53EF\u8F7B\u677E\u4ECE\u56DE\u6536\u7AD9\u627E\u56DE\u8BEF\u5220\u7684\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u636E\u5B89\u5168"}),"\uFF1A\u5982\u679C\u4E0D\u9700\u8981\u6062\u590D\uFF0C\u56DE\u6536\u7AD9\u4E2D\u7684\u6570\u636E\u5C06\u5728\u4FDD\u7559\u671F\u540E\u81EA\u52A8\u6E05\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5E94\u7528\u573A\u666F\u793A\u4F8B-2",children:"\u5E94\u7528\u573A\u666F\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:"\u67D0\u56E2\u961F\u5728\u4F8B\u884C\u64CD\u4F5C\u4E2D\u8BEF\u5220\u9664\u4E86\u4E00\u5F20\u91CD\u8981\u8868\uFF0C\u901A\u8FC7\u56DE\u6536\u7AD9\u529F\u80FD\uFF0C\u4ED6\u4EEC\u5FEB\u901F\u6062\u590D\u4E86\u88AB\u5220\u9664\u7684\u6570\u636E\uFF0C\u907F\u514D\u4E86\u590D\u6742\u7684\u5907\u4EFD\u6062\u590D\u6D41\u7A0B\uFF0C\u540C\u65F6\u786E\u4FDD\u4E86\u4E1A\u52A1\u7684\u8FDE\u7EED\u6027\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return t},a:function(){return d}});var l=i(667294);let s={},r=l.createContext(s);function d(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);