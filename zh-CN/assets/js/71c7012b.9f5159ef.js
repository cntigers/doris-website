"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["229837"],{988274:function(n,e,i){i.r(e),i.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group"},"next":{"title":"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule"}}'),s=i("785893"),c=i("250065");let r={title:"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F",language:"zh-CN"},a=void 0,l={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B",id:"\u6848\u4F8B",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u652F\u6301\u4F7F\u7528 Hint \u6765\u8C03\u6574 Join \u64CD\u4F5C\u4E2D\u6570\u636E Shuffle \u7684\u7C7B\u578B\uFF0C\u4ECE\u800C\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002\u672C\u8282\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728 Doris \u4E2D\u5229\u7528 Hint \u6765\u6307\u5B9A Join Shuffle \u7684\u7C7B\u578B\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsx)(e.p,{children:"\u5F53\u524D Doris \u5DF2\u7ECF\u5177\u5907\u826F\u597D\u7684\u5F00\u7BB1\u5373\u7528\u7684\u80FD\u529B\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u5728\u7EDD\u5927\u591A\u6570\u573A\u666F\u4E0B\uFF0CDoris \u4F1A\u81EA\u9002\u5E94\u7684\u4F18\u5316\u5404\u79CD\u573A\u666F\u4E0B\u7684\u6027\u80FD\uFF0C\u65E0\u9700\u7528\u6237\u6765\u624B\u5DE5\u63A7\u5236 hint \u6765\u8FDB\u884C\u4E1A\u52A1\u8C03\u4F18\u3002\u672C\u7AE0\u4ECB\u7ECD\u7684\u5185\u5BB9\u4E3B\u8981\u9762\u5411\u4E13\u4E1A\u8C03\u4F18\u4EBA\u5458\uFF0C\u4E1A\u52A1\u4EBA\u5458\u4EC5\u505A\u7B80\u5355\u4E86\u89E3\u5373\u53EF\u3002"})}),"\n",(0,s.jsxs)(e.p,{children:["\u76EE\u524D\uFF0CDoris \u652F\u6301\u4E24\u79CD\u72EC\u7ACB\u7684 ",(0,s.jsx)(e.a,{href:"/zh-CN/docs/3.0/query-acceleration/hints/distribute-hint",children:"Distribute Hint"}),"\uFF0C",(0,s.jsx)(e.code,{children:"[shuffle] "})," \u548C ",(0,s.jsx)(e.code,{children:"[broadcast]"}),"\uFF0C\u7528\u6765\u6307\u5B9A Join \u53F3\u8868\u7684 Distribute Type\u3002Distribute Type \u9700\u7F6E\u4E8E Join \u53F3\u8868\u4E4B\u524D\uFF0C\u91C7\u7528\u4E2D\u62EC\u53F7 ",(0,s.jsx)(e.code,{children:"[]"})," \u7684\u65B9\u5F0F\u3002\u540C\u65F6\uFF0CDoris \u4E5F\u53EF\u4EE5\u901A\u8FC7 Leading Hint \u914D\u5408 Distribute Hint \u7684\u65B9\u5F0F\uFF0C\u6307\u5B9A shuffle \u65B9\u5F0F\uFF08\u8BE6\u89C1",(0,s.jsx)(e.a,{href:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint",children:"\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F"}),"\u7AE0\u8282\u76F8\u5173\u4ECB\u7ECD\uFF09\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT COUNT(*) FROM t2 JOIN [broadcast] t1 ON t1.c1 = t2.c2;\nSELECT COUNT(*) FROM t2 JOIN [shuffle] t1 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6848\u4F8B",children:"\u6848\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u4E0B\u6765\u5C06\u901A\u8FC7\u540C\u4E00\u4E2A\u4F8B\u5B50\u6765\u5C55\u793A Distribute Hint \u7684\u4F7F\u7528\u65B9\u6CD5\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"EXPLAIN SHAPE PLAN SELECT COUNT(*) FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u539F\u59CB SQL \u7684\u8BA1\u5212\u5982\u4E0B\uFF0C\u53EF\u89C1 t1 \u8FDE\u63A5 t2 \u4F7F\u7528\u4E86 hash distribute \u5373",(0,s.jsx)(e.code,{children:"DistributionSpecHash"}),"\u7684\u65B9\u5F0F\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+----------------------------------------------------------------------------------+  \n| Explain String (Nereids Planner)                                                 |  \n+----------------------------------------------------------------------------------+  \n| PhysicalResultSink                                                               |  \n| --hashAgg [GLOBAL]                                                               |  \n| ----PhysicalDistribute [DistributionSpecGather]                                  |  \n| ------hashAgg [LOCAL]                                                            |  \n| --------PhysicalProject                                                          |  \n| ----------hashJoin [INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()|  \n| ------------PhysicalProject                                                      |  \n| --------------PhysicalOlapScan [t1]                                              |  \n| ------------PhysicalDistribute [DistributionSpecHash]                            |  \n| --------------PhysicalProject                                                    |  \n| ----------------PhysicalOlapScan [t2]                                            |  \n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u52A0\u5165[broadcast] hint \u540E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"EXPLAIN SHAPE PLAN SELECT COUNT(*) FROM t1 JOIN [broadcast] t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53EF\u89C1 t1 \u8FDE\u63A5 t2 \u7684\u5206\u53D1\u65B9\u5F0F\u6539\u4E3A\u4E86 broadcast \u5373",(0,s.jsx)(e.code,{children:"DistributionSpecReplicated"}),"\u7684\u65B9\u5F0F\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+----------------------------------------------------------------------------------+  \n| Explain String (Nereids Planner)                                                 |  \n+----------------------------------------------------------------------------------+  \n| PhysicalResultSink                                                               |  \n| --hashAgg [GLOBAL]                                                               |  \n| ----PhysicalDistribute [DistributionSpecGather]                                  |  \n| ------hashAgg [LOCAL]                                                            |  \n| --------PhysicalProject                                                          |  \n| ----------hashJoin [INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()|  \n| ------------PhysicalProject                                                      |  \n| --------------PhysicalOlapScan [t1]                                              |  \n| ------------PhysicalDistribute [DistributionSpecReplicated]                      |  \n| --------------PhysicalProject                                                    |  \n| ----------------PhysicalOlapScan [t2]                                            | \n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u5408\u7406\u4F7F\u7528 Distribute Hint\uFF0C\u53EF\u4EE5\u4F18\u5316 Join \u64CD\u4F5C\u7684 Shuffle \u65B9\u5F0F\uFF0C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u5EFA\u8BAE\u5148\u901A\u8FC7 EXPLAIN \u5206\u6790\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\uFF0C\u518D\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6307\u5B9A\u5408\u9002\u7684 Shuffle \u7C7B\u578B\u3002"})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return r}});var t=i(667294);let s={},c=t.createContext(s);function r(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);