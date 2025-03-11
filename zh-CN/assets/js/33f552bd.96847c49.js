"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["725758"],{886509:function(n,e,i){i.r(e),i.d(e,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"query-acceleration/hints/distribute-hint","title":"Distribute Hint","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/hints/distribute-hint.md","sourceDirName":"query-acceleration/hints","slug":"/query-acceleration/hints/distribute-hint","permalink":"/zh-CN/docs/query-acceleration/hints/distribute-hint","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Distribute Hint","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Leading Hint","permalink":"/zh-CN/docs/query-acceleration/hints/leading-hint"},"next":{"title":"\u4F18\u5316\u8868 Schema \u8BBE\u8BA1","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/optimizing-table-schema"}}'),s=i("785893"),r=i("250065");let a={title:"Distribute Hint",language:"zh-CN"},l=void 0,c={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6848\u4F8B",id:"\u6848\u4F8B",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"Distribute hint \u7528\u6765\u63A7\u5236 join \u7684 shuffle \u65B9\u5F0F\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u652F\u6301\u6307\u5B9A\u53F3\u8868\u7684 Distribute Type\uFF0C\u5206\u4E3A ",(0,s.jsx)(e.code,{children:"[shuffle]"})," \u548C ",(0,s.jsx)(e.code,{children:"[broadcast]"})," \u4E24\u79CD\uFF0C\u9700\u5199\u5728 Join \u53F3\u8868\u524D\u9762\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u652F\u6301\u4EFB\u610F\u4E2A Distribute Hint\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5F53\u9047\u5230\u65E0\u6CD5\u6B63\u786E\u751F\u6210\u8BA1\u5212\u7684 Distribute Hint \u65F6\uFF0C\u7CFB\u7EDF\u4E0D\u4F1A\u663E\u793A\u9519\u8BEF\uFF0C\u4F1A\u6309\u6700\u5927\u52AA\u529B\u539F\u5219\u751F\u6548\uFF0C\u6700\u7EC8\u4EE5 EXPLAIN \u663E\u793A\u7684 Distribute \u65B9\u5F0F\u4E3A\u51C6\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6848\u4F8B",children:"\u6848\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4E0E Ordered Hint \u6DF7\u7528"})}),"\n",(0,s.jsx)(e.p,{children:"\u628A Join \u987A\u5E8F\u56FA\u5B9A\u4E3A\u6587\u672C\u5E8F\uFF0C\u7136\u540E\u518D\u6307\u5B9A\u76F8\u5E94\u7684 Join \u9884\u671F\u4F7F\u7528\u7684 Distribute \u65B9\u5F0F\u3002\u4F8B\u5982\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528\u524D\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select count(*) from t1 join t2 on t1.c1 = t2.c2;\n  +----------------------------------------------------------------------------------+\n  | Explain String(Nereids Planner)                                                  |\n  +----------------------------------------------------------------------------------+\n  | PhysicalResultSink                                                               |\n  | --hashAgg[GLOBAL]                                                                |\n  | ----PhysicalDistribute[DistributionSpecGather]                                   |\n  | ------hashAgg[LOCAL]                                                             |\n  | --------PhysicalProject                                                          |\n  | ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\n  | ------------PhysicalProject                                                      |\n  | --------------PhysicalOlapScan[t1]                                               |\n  | ------------PhysicalDistribute[DistributionSpecHash]                             |\n  | --------------PhysicalProject                                                    |\n  | ----------------PhysicalOlapScan[t2]                                             |\n  +----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528\u540E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ ordered */ count(*) from t2 join[broadcast] t1 on t1.c1 = t2.c2;\n+----------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                  |\n+----------------------------------------------------------------------------------+\n| PhysicalResultSink                                                               |\n| --hashAgg[GLOBAL]                                                                |\n| ----PhysicalDistribute[DistributionSpecGather]                                   |\n| ------hashAgg[LOCAL]                                                             |\n| --------PhysicalProject                                                          |\n| ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\n| ------------PhysicalProject                                                      |\n| --------------PhysicalOlapScan[t2]                                               |\n| ------------PhysicalDistribute[DistributionSpecReplicated]                       |\n| --------------PhysicalProject                                                    |\n| ----------------PhysicalOlapScan[t1]                                             |\n|                                                                                  |\n| Hint log:                                                                        |\n| Used: ORDERED                                                                    |\n| UnUsed:                                                                          |\n| SyntaxError:                                                                     |\n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"Explain Shape Plan \u91CC\u9762\u4F1A\u663E\u793A Distribute \u7B97\u5B50\u76F8\u5173\u7684\u4FE1\u606F\u3002\u5176\u4E2D\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"DistributionSpecReplicated"})," \u8868\u793A\u8BE5\u7B97\u5B50\u5C06\u5BF9\u5E94\u7684\u6570\u636E\u590D\u5236\u5230\u6240\u6709 BE \u8282\u70B9\uFF1B"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"DistributionSpecGather"})," \u8868\u793A\u5C06\u6570\u636E Gather \u5230 FE \u8282\u70B9\uFF1B"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"DistributionSpecHash"})," \u8868\u793A\u5C06\u6570\u636E\u6309\u7167\u7279\u5B9A\u7684 hashKey \u4EE5\u53CA\u7B97\u6CD5\u6253\u6563\u5230\u4E0D\u540C\u7684 BE \u8282\u70B9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4E0E Leading Hint \u6DF7\u7528"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u7F16\u5199 SQL \u67E5\u8BE2\u65F6\uFF0C\u53EF\u4EE5\u5728\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"LEADING"})," \u63D0\u793A\u7684\u540C\u65F6\uFF0C\u4E3A\u6BCF\u4E2A ",(0,s.jsx)(e.code,{children:"JOIN"})," \u64CD\u4F5C\u6307\u5B9A\u76F8\u5E94\u7684 ",(0,s.jsx)(e.code,{children:"DISTRIBUTE"})," \u65B9\u5F0F\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5728 SQL \u67E5\u8BE2\u4E2D\u6DF7\u5408\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"Distribute Hint"})," \u548C ",(0,s.jsx)(e.code,{children:"Leading Hint"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain shape plan\n    select \n        nation,\n        o_year,\n        sum(amount) as sum_profit\n    from\n        (\n            select\n                /*+ leading(orders shuffle {lineitem shuffle part} shuffle {supplier broadcast nation} shuffle partsupp) */\n                n_name as nation,\n                extract(year from o_orderdate) as o_year,\n                l_extendedprice * (1 - l_discount) - ps_supplycost * l_quantity as amount\n            from\n                part,\n                supplier,\n                lineitem,\n                partsupp,\n                orders,\n                nation\n            where\n                s_suppkey = l_suppkey\n                and ps_suppkey = l_suppkey\n                and ps_partkey = l_partkey\n                and p_partkey = l_partkey\n                and o_orderkey = l_orderkey\n                and s_nationkey = n_nationkey\n                and p_name like '%green%'\n        ) as profit\n    group by\n        nation,\n        o_year\n    order by\n        nation,\n        o_year desc;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(e.p,{children:"Distribute hint \u662F\u5E38\u7528\u7684\u63A7\u5236 join shuffle \u65B9\u5F0F\u7684 hint\uFF0C\u7528\u4E8E\u624B\u5DE5\u6307\u5B9A shuffle \u6216\u8005 broadcast \u5206\u53D1\u65B9\u5F0F\u3002\u4F7F\u7528\u597D Distribute hint \u80FD\u591F\u6EE1\u8DB3\u73B0\u573A\u9488\u5BF9 join shuffle \u65B9\u5F0F\u7684\u8C03\u4F18\u9700\u6C42\uFF0C\u589E\u52A0\u7CFB\u7EDF\u63A7\u5236\u7684\u7075\u6D3B\u6027\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return a}});var t=i(667294);let s={},r=t.createContext(s);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);