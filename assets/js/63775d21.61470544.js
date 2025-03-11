"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["151076"],{454440:function(n,e,i){i.r(e),i.d(e,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"query-acceleration/hints/leading-hint","title":"Leading Hint","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/hints/leading-hint.md","sourceDirName":"query-acceleration/hints","slug":"/query-acceleration/hints/leading-hint","permalink":"/docs/query-acceleration/hints/leading-hint","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Leading Hint","language":"en"},"sidebar":"docs","previous":{"title":"Overview of Hints","permalink":"/docs/query-acceleration/hints/hints-overview"},"next":{"title":"Distribute Hint","permalink":"/docs/query-acceleration/hints/distribute-hint"}}'),r=i("785893"),a=i("250065");let s={title:"Leading Hint",language:"en"},l=void 0,c={},o=[{value:"Regular Leading Hint",id:"regular-leading-hint",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Case",id:"case",level:3},{value:"Basic Scenario",id:"basic-scenario",level:4},{value:"Extended Scenario",id:"extended-scenario",level:4},{value:"Ordered Hint",id:"ordered-hint",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Case",id:"case-1",level:3},{value:"Summary",id:"summary",level:2}];function h(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Leading Hint is a powerful query optimization technique that allows users to guide the Doris optimizer to determine the table join order in the query plan. Correct use of Leading Hint can significantly improve the performance of complex queries. This article will describe in detail how to use Leading Hint to control the join order in Doris."}),"\n",(0,r.jsx)(e.h2,{id:"regular-leading-hint",children:"Regular Leading Hint"}),"\n",(0,r.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:"Leading Hint allows specifying the table join order that the optimizer should follow. In Doris, the basic syntax of Leading Hint is as follows:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(tablespec [tablespec]...) */ ...\n"})}),"\n",(0,r.jsx)(e.p,{children:"It should be noted that:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Leading Hint is surrounded by ",(0,r.jsx)(e.code,{children:"/*+"})," and ",(0,r.jsx)(e.code,{children:"*/"})," and placed after the SELECT keyword in the SQL statement."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"tablespec"})," is the table name or table alias, and at least two tables need to be specified."]}),"\n",(0,r.jsx)(e.li,{children:"Multiple tables are separated by spaces or ','."}),"\n",(0,r.jsxs)(e.li,{children:["You can use curly braces ",(0,r.jsx)(e.code,{children:"{}"})," to explicitly specify the shape of the Join Tree."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"For example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t2 t1) */ * from t1 join t2 on c1 = c2;\r\n+------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                              |\r\n+------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                           |\r\n| --PhysicalDistribute[DistributionSpecGather]                                 |\r\n| ----PhysicalProject                                                          |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| --------PhysicalOlapScan[t2]                                                 |\r\n| --------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ----------PhysicalOlapScan[t1]                                               |\r\n|                                                                              |\r\n| Hint log:                                                                    |\r\n| Used: leading(t2 t1)                                                         |\r\n| UnUsed:                                                                      |\r\n| SyntaxError:                                                                 |\r\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"When Leading Hint is not effective, the normal process will be used to generate the plan. EXPLAIN will display whether the used Hint is effective, mainly divided into three types:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Used"}),"\uFF1ALeading Hint is effective normally."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Unused"}),"\uFF1AThe unsupported cases here include that the join order specified by Leading Hint is not equivalent to the original SQL or the feature is not supported in this version (see limitations for details)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SyntaxError"}),"\uFF1A Indicates a syntax error in Leading Hint, such as the inability to find the corresponding table."]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"The default syntax of Leading Hint constructs a left-deep tree:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 t2 t3) */ * from t1 join t2 on c1 = c2 join t3 on c2=c3;\r\n+--------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                |\r\n+--------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                             |\r\n| --PhysicalDistribute[DistributionSpecGather]                                   |\r\n| ----PhysicalProject                                                            |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n| --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| ----------PhysicalOlapScan[t1]                                                 |\r\n| ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------PhysicalOlapScan[t2]                                               |\r\n| --------PhysicalDistribute[DistributionSpecHash]                               |\r\n| ----------PhysicalOlapScan[t3]                                                 |\r\n|                                                                                |\r\n| Hint log:                                                                      |\r\n| Used: leading(t1 t2 t3)                                                        |\r\n| UnUsed:                                                                        |\r\n| SyntaxError:                                                                   |\r\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"At the same time, curly braces can be used to specify the shape of the Join tree:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 join t2 on c1 = c2 join t3 on c2=c3;\r\n+----------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                  |\r\n+----------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                               |\r\n| --PhysicalDistribute[DistributionSpecGather]                                     |\r\n| ----PhysicalProject                                                              |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()     |\r\n| --------PhysicalOlapScan[t1]                                                     |\r\n| --------PhysicalDistribute[DistributionSpecHash]                                 |\r\n| ----------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n| ------------PhysicalOlapScan[t2]                                                 |\r\n| ------------PhysicalDistribute[DistributionSpecHash]                             |\r\n| --------------PhysicalOlapScan[t3]                                               |\r\n|                                                                                  |\r\n| Hint log:                                                                        |\r\n| Used: leading(t1 { t2 t3 })                                                      |\r\n| UnUsed:                                                                          |\r\n| SyntaxError:                                                                     |\r\n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"When a View is used as an alias to participate in JoinReorder, the corresponding View can be specified as a parameter of Leading Hint. For example:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(alias t1) */ count(*) from t1 join (select c2 from t2 join t3 on t2.c2 = t3.c3) as alias on t1.c1 = alias.c2;\r\n  +--------------------------------------------------------------------------------------+\r\n  | Explain String(Nereids Planner)                                                      |\r\n  +--------------------------------------------------------------------------------------+\r\n  | PhysicalResultSink                                                                   |\r\n  | --hashAgg[GLOBAL]                                                                    |\r\n  | ----PhysicalDistribute[DistributionSpecGather]                                       |\r\n  | ------hashAgg[LOCAL]                                                                 |\r\n  | --------PhysicalProject                                                              |\r\n  | ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = alias.c2)) otherCondition=()  |\r\n  | ------------PhysicalProject                                                          |\r\n  | --------------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n  | ----------------PhysicalProject                                                      |\r\n  | ------------------PhysicalOlapScan[t2]                                               |\r\n  | ----------------PhysicalDistribute[DistributionSpecHash]                             |\r\n  | ------------------PhysicalProject                                                    |\r\n  | --------------------PhysicalOlapScan[t3]                                             |\r\n  | ------------PhysicalDistribute[DistributionSpecHash]                                 |\r\n  | --------------PhysicalProject                                                        |\r\n  | ----------------PhysicalOlapScan[t1]                                                 |\r\n  |                                                                                      |\r\n  | Hint log:                                                                            |\r\n  | Used: leading(alias t1)                                                              |\r\n  | UnUsed:                                                                              |\r\n  | SyntaxError:                                                                         |\r\n  +--------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"case",children:"Case"}),"\n",(0,r.jsx)(e.h4,{id:"basic-scenario",children:"Basic Scenario"}),"\n",(0,r.jsx)(e.p,{children:"The table creation statements are as follows:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE DATABASE testleading;\r\nUSE testleading;\r\n\r\ncreate table t1 (c1 int, c11 int) distributed by hash(c1) buckets 3 properties('replication_num' = '1');\r\ncreate table t2 (c2 int, c22 int) distributed by hash(c2) buckets 3 properties('replication_num' = '1');\r\ncreate table t3 (c3 int, c33 int) distributed by hash(c3) buckets 3 properties('replication_num' = '1');\r\ncreate table t4 (c4 int, c44 int) distributed by hash(c4) buckets 3 properties('replication_num' = '1');\n"})}),"\n",(0,r.jsx)(e.p,{children:"The original plan:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select * from t1 join t2 on t1.c1 = c2;\r\n+-------------------------------------------+\r\n| Explain String                            |\r\n+-------------------------------------------+\r\n| PhysicalResultSink                        |\r\n| --PhysicalDistribute                      |\r\n| ----PhysicalProject                       |\r\n| ------hashJoin[INNER_JOIN](t1.c1 = t2.c2) |\r\n| --------PhysicalOlapScan[t2]              |\r\n| --------PhysicalDistribute                |\r\n| ----------PhysicalOlapScan[t1]            |\r\n+-------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["When we need to exchange the join order of t1 and t2, we only need to add ",(0,r.jsx)(e.code,{children:"leading(t2 t1)"})," in front. When executing ",(0,r.jsx)(e.code,{children:"explain"}),", it will show whether this hint is used. The following is the Leading plan: ",(0,r.jsx)(e.code,{children:"Used"})," indicates that the Hint is effective normally."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t2 t1) */ * from t1 join t2 on c1 = c2;\r\n+------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                              |\r\n+------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                           |\r\n| --PhysicalDistribute[DistributionSpecGather]                                 |\r\n| ----PhysicalProject                                                          |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| --------PhysicalOlapScan[t2]                                                 |\r\n| --------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ----------PhysicalOlapScan[t1]                                               |\r\n|                                                                              |\r\n| Hint log:                                                                    |\r\n| Used: leading(t2 t1)                                                         |\r\n| UnUsed:                                                                      |\r\n| SyntaxError:                                                                 |\r\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["If there is a syntax error in Leading Hint, when executing ",(0,r.jsx)(e.code,{children:"explain"}),", the corresponding information will be displayed in ",(0,r.jsx)(e.code,{children:"SyntaxError"}),", but the plan can still be generated normally, just without using Leading. For example:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t2 t3) */ * from t1 join t2 on t1.c1 = c2;\r\n+--------------------------------------------------------+\r\n| Explain String                                         |\r\n+--------------------------------------------------------+\r\n| PhysicalResultSink                                     |\r\n| --PhysicalDistribute                                   |\r\n| ----PhysicalProject                                    |\r\n| ------hashJoin[INNER_JOIN](t1.c1 = t2.c2)              |\r\n| --------PhysicalOlapScan[t1]                           |\r\n| --------PhysicalDistribute                             |\r\n| ----------PhysicalOlapScan[t2]                         |\r\n|                                                        |\r\n| Used:                                                  |\r\n| UnUsed:                                                |\r\n| SyntaxError: leading(t2 t3) Msg:can not find table: t3 |\r\n+--------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h4,{id:"extended-scenario",children:"Extended Scenario"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Left-Deep Tree"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"As mentioned above, when the query statement in Doris does not use any parentheses, Leading will default to generating a left-deep tree."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 t2 t3) */ * from t1 join t2 on t1.c1 = c2 join t3 on c2 = c3;\r\n+--------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                |\r\n+--------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                             |\r\n| --PhysicalDistribute[DistributionSpecGather]                                   |\r\n| ----PhysicalProject                                                            |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n| --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| ----------PhysicalOlapScan[t1]                                                 |\r\n| ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------PhysicalOlapScan[t2]                                               |\r\n| --------PhysicalDistribute[DistributionSpecHash]                               |\r\n| ----------PhysicalOlapScan[t3]                                                 |\r\n|                                                                                |\r\n| Hint log:                                                                      |\r\n| Used: leading(t1 t2 t3)                                                        |\r\n| UnUsed:                                                                        |\r\n| SyntaxError:                                                                   |\r\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"Right-Deep Tree"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"When you need to make the shape of the plan a right-deep tree, Bushy tree, or zig-zag tree, you only need to add curly braces to limit the shape of the plan, without the need to use swap like Oracle to adjust step by step from the left-deep tree."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 join t2 on t1.c1 = c2 join t3 on c2 = c3;\r\n+-----------------------------------------------+\r\n| Explain String                                |\r\n+-----------------------------------------------+\r\n| PhysicalResultSink                            |\r\n| --PhysicalDistribute                          |\r\n| ----PhysicalProject                           |\r\n| ------hashJoin[INNER_JOIN](t1.c1 = t2.c2)     |\r\n| --------PhysicalOlapScan[t1]                  |\r\n| --------PhysicalDistribute                    |\r\n| ----------hashJoin[INNER_JOIN](t2.c2 = t3.c3) |\r\n| ------------PhysicalOlapScan[t2]              |\r\n| ------------PhysicalDistribute                |\r\n| --------------PhysicalOlapScan[t3]            |\r\n|                                               |\r\n| Used: leading(t1 { t2 t3 })                   |\r\n| UnUsed:                                       |\r\n| SyntaxError:                                  |\r\n+-----------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"Bushy Tree"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading({t1 t2} {t3 t4}) */ * from t1 join t2 on t1.c1 = c2 join t3 on c2 = c3 join t4 on c3 = c4;\r\n+-----------------------------------------------+\r\n| Explain String                                |\r\n+-----------------------------------------------+\r\n| PhysicalResultSink                            |\r\n| --PhysicalDistribute                          |\r\n| ----PhysicalProject                           |\r\n| ------hashJoin[INNER_JOIN](t2.c2 = t3.c3)     |\r\n| --------hashJoin[INNER_JOIN](t1.c1 = t2.c2)   |\r\n| ----------PhysicalOlapScan[t1]                |\r\n| ----------PhysicalDistribute                  |\r\n| ------------PhysicalOlapScan[t2]              |\r\n| --------PhysicalDistribute                    |\r\n| ----------hashJoin[INNER_JOIN](t3.c3 = t4.c4) |\r\n| ------------PhysicalOlapScan[t3]              |\r\n| ------------PhysicalDistribute                |\r\n| --------------PhysicalOlapScan[t4]            |\r\n|                                               |\r\n| Used: leading({ t1 t2 } { t3 t4 })            |\r\n| UnUsed:                                       |\r\n| SyntaxError:                                  |\r\n+-----------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:"zig-zag tree"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 {t2 t3} t4) */ * from t1 join t2 on t1.c1 = c2 join t3 on c2 = c3 join t4 on c3 = c4;\r\n+--------------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                      |\r\n+--------------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                                   |\r\n| --PhysicalDistribute[DistributionSpecGather]                                         |\r\n| ----PhysicalProject                                                                  |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t3.c3 = t4.c4)) otherCondition=()         |\r\n| --------PhysicalDistribute[DistributionSpecHash]                                     |\r\n| ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()     |\r\n| ------------PhysicalOlapScan[t1]                                                     |\r\n| ------------PhysicalDistribute[DistributionSpecHash]                                 |\r\n| --------------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n| ----------------PhysicalOlapScan[t2]                                                 |\r\n| ----------------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------------PhysicalOlapScan[t3]                                               |\r\n| --------PhysicalDistribute[DistributionSpecHash]                                     |\r\n| ----------PhysicalOlapScan[t4]                                                       |\r\n|                                                                                      |\r\n| Hint log:                                                                            |\r\n| Used: leading(t1 { t2 t3 } t4)                                                       |\r\n| UnUsed:                                                                              |\r\n| SyntaxError:                                                                         |\r\n+--------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsx)(e.li,{children:"Non-inner Join"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"When encountering a non-inner join (such as Outer Join or Semi/Anti Join), Leading Hint will automatically derive the join method of each join according to the original SQL semantics. If Leading Hint is different from the original SQL semantics or cannot be generated, it will be placed in UnUsed, but this does not affect the normal generation of the plan.\r\nThe following is an example that cannot be swapped:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-------- test outer join which can not swap\r\n-- t1 leftjoin (t2 join t3 on (P23)) on (P12) != (t1 leftjoin t2 on (P12)) join t3 on (P23)\r\nmysql> explain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 left join t2 on c1 = c2 join t3 on c2 = c3;\r\n+--------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                |\r\n+--------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                             |\r\n| --PhysicalDistribute[DistributionSpecGather]                                   |\r\n| ----PhysicalProject                                                            |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n| --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| ----------PhysicalOlapScan[t1]                                                 |\r\n| ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------PhysicalOlapScan[t2]                                               |\r\n| --------PhysicalDistribute[DistributionSpecHash]                               |\r\n| ----------PhysicalOlapScan[t3]                                                 |\r\n|                                                                                |\r\n| Hint log:                                                                      |\r\n| Used:                                                                          |\r\n| UnUsed: leading(t1 { t2 t3 })                                                  |\r\n| SyntaxError:                                                                   |\r\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"Here are some examples of Outer, Semi, and Anti Joins with Leading Hint for readers to verify on their own."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-------- test outer join which can swap\r\n-- (t1 leftjoin t2  on (P12)) innerjoin t3 on (P13) = (t1 innerjoin t3 on (P13)) leftjoin t2  on (P12)\r\nexplain shape plan select * from t1 left join t2 on c1 = c2 join t3 on c1 = c3;\r\nexplain shape plan select /*+ leading(t1 t3 t2) */ * from t1 left join t2 on c1 = c2 join t3 on c1 = c3;\r\n\r\n-- (t1 leftjoin t2  on (P12)) leftjoin t3 on (P13) = (t1 leftjoin t3 on (P13)) leftjoin t2  on (P12)\r\nexplain shape plan select * from t1 left join t2 on c1 = c2 left join t3 on c1 = c3;\r\nexplain shape plan select /*+ leading(t1 t3 t2) */ * from t1 left join t2 on c1 = c2 left join t3 on c1 = c3;\r\n\r\n-- (t1 leftjoin t2  on (P12)) leftjoin t3 on (P23) = t1 leftjoin (t2  leftjoin t3 on (P23)) on (P12)\r\nselect /*+ leading(t2 t3 t1) SWAP_INPUT(t1) */ * from t1 left join t2 on c1 = c2 left join t3 on c2 = c3;\r\nexplain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 left join t2 on c1 = c2 left join t3 on c2 = c3;\r\nexplain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 left join t2 on c1 = c2 left join t3 on c2 = c3;\r\n\r\n-------- test outer join which can not swap\r\n--  t1 leftjoin (t2  join t3 on (P23)) on (P12) != (t1 leftjoin t2  on (P12)) join t3 on (P23)\r\n-- eliminated to inner join\r\nexplain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 left join t2 on c1 = c2 join t3 on c2 = c3;\r\nexplain graph select /*+ leading(t1 t2 t3) */ * from t1 left join (select * from t2 join t3 on c2 = c3) on c1 = c2;\r\n\r\n-- test semi join\r\nexplain shape plan select * from t1 where c1 in (select c2 from t2);\r\nexplain shape plan select /*+ leading(t2 t1) */ * from t1 where c1 in (select c2 from t2);\r\n\r\n-- test anti join\r\nexplain shape plan select * from t1 where exists (select c2 from t2);\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"6",children:["\n",(0,r.jsx)(e.li,{children:"View"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"In the case of involving aliases (Alias), the alias can be specified as a complete and independent subtree, and the join order is generated according to the text order"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql>  explain shape plan select /*+ leading(alias t1) */ count(*) from t1 join (select c2 from t2 join t3 on t2.c2 = t3.c3) as alias on t1.c1 = alias.c2;\r\n+--------------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                      |\r\n+--------------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                                   |\r\n| --hashAgg[GLOBAL]                                                                    |\r\n| ----PhysicalDistribute[DistributionSpecGather]                                       |\r\n| ------hashAgg[LOCAL]                                                                 |\r\n| --------PhysicalProject                                                              |\r\n| ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = alias.c2)) otherCondition=()  |\r\n| ------------PhysicalProject                                                          |\r\n| --------------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n| ----------------PhysicalProject                                                      |\r\n| ------------------PhysicalOlapScan[t2]                                               |\r\n| ----------------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------------PhysicalProject                                                    |\r\n| --------------------PhysicalOlapScan[t3]                                             |\r\n| ------------PhysicalDistribute[DistributionSpecHash]                                 |\r\n| --------------PhysicalProject                                                        |\r\n| ----------------PhysicalOlapScan[t1]                                                 |\r\n|                                                                                      |\r\n| Hint log:                                                                            |\r\n| Used: leading(alias t1)                                                              |\r\n| UnUsed:                                                                              |\r\n| SyntaxError:                                                                         |\r\n+--------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h2,{id:"ordered-hint",children:"Ordered Hint"}),"\n",(0,r.jsx)(e.p,{children:"Ordered hint can be regarded as a special case of leading hint and is used to control the join order as the text order."}),"\n",(0,r.jsx)(e.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,r.jsxs)(e.p,{children:["The syntax of Ordered Hint is ",(0,r.jsx)(e.code,{children:"/*+ ORDERED */"}),", which is placed after the ",(0,r.jsx)(e.code,{children:"SELECT"})," keyword in the ",(0,r.jsx)(e.code,{children:"SELECT"})," statement, followed immediately by the rest of the query."]}),"\n",(0,r.jsx)(e.h3,{id:"case-1",children:"Case"}),"\n",(0,r.jsx)(e.p,{children:"The following is an example of using Ordered Hint:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ ORDERED */ t1.c1 from t2 join t1 on t1.c1 = t2.c2 join t3 on c2 = c3;\r\n+--------------------------------------------------------------------------------+\r\n| Explain String(Nereids Planner)                                                |\r\n+--------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                             |\r\n| --PhysicalDistribute[DistributionSpecGather]                                   |\r\n| ----PhysicalProject                                                            |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n| --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| ----------PhysicalProject                                                      |\r\n| ------------PhysicalOlapScan[t2]                                               |\r\n| ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------PhysicalProject                                                    |\r\n| --------------PhysicalOlapScan[t1]                                             |\r\n| --------PhysicalDistribute[DistributionSpecHash]                               |\r\n| ----------PhysicalProject                                                      |\r\n| ------------PhysicalOlapScan[t3]                                               |\r\n|                                                                                |\r\n| Hint log:                                                                      |\r\n| Used: ORDERED                                                                  |\r\n| UnUsed:                                                                        |\r\n| SyntaxError:                                                                   |\r\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"Relationship with Leading Hint"}),"\n",(0,r.jsx)(e.p,{children:"When Ordered Hint and Leading Hint are used simultaneously, Ordered Hint will take precedence over Leading Hint. This means that even if Leading Hint is specified, if Ordered Hint also exists, the query plan will be executed according to the rules of Ordered Hint, and Leading Hint will be ignored. The following is an example showing the situation when both are used simultaneously:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ ORDERED LEADING(t1 t2 t3) */ t1.c1 from t2 join t1 on t1.c1 = t2.c2 join t3 on c2 = c3;\r\n  +--------------------------------------------------------------------------------+\r\n  | Explain String(Nereids Planner)                                                |\r\n  +--------------------------------------------------------------------------------+\r\n  | PhysicalResultSink                                                             |\r\n  | --PhysicalDistribute[DistributionSpecGather]                                   |\r\n  | ----PhysicalProject                                                            |\r\n  | ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n  | --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n  | ----------PhysicalProject                                                      |\r\n  | ------------PhysicalOlapScan[t2]                                               |\r\n  | ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n  | ------------PhysicalProject                                                    |\r\n  | --------------PhysicalOlapScan[t1]                                             |\r\n  | --------PhysicalDistribute[DistributionSpecHash]                               |\r\n  | ----------PhysicalProject                                                      |\r\n  | ------------PhysicalOlapScan[t3]                                               |\r\n  |                                                                                |\r\n  | Hint log:                                                                      |\r\n  | Used: ORDERED                                                                  |\r\n  | UnUsed: leading(t1 t2 t3)                                                      |\r\n  | SyntaxError:                                                                   |\r\n  +--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(e.p,{children:"Leading Hint is a powerful feature for manually controlling the join order and is widely used in production business tuning. Using leading hint well can meet the tuning requirements for the join order on site and increase the flexibility of system control"})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return s}});var t=i(667294);let r={},a=t.createContext(r);function s(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);