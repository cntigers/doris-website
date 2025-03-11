"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["243061"],{382809:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"query-acceleration/tuning/tuning-execution/data-skew-handling","title":"Data Skew Handling","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-execution/data-skew-handling.md","sourceDirName":"query-acceleration/tuning/tuning-execution","slug":"/query-acceleration/tuning/tuning-execution/data-skew-handling","permalink":"/docs/dev/query-acceleration/tuning/tuning-execution/data-skew-handling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Data Skew Handling","language":"en"},"sidebar":"docs","previous":{"title":"Adjustment of RuntimeFilter Wait Time","permalink":"/docs/dev/query-acceleration/tuning/tuning-execution/adjustment-of-runtimefilter-wait-time"},"next":{"title":"Parallelism Tuning","permalink":"/docs/dev/query-acceleration/tuning/tuning-execution/parallelism-tuning"}}'),a=t("785893"),i=t("250065");let s={title:"Data Skew Handling",language:"en"},r="Data Skew Handling",d={},l=[{value:"Overview",id:"overview",level:2},{value:"Case 1: Bucket Data Skew Leading to Suboptimal Shuffle Method",id:"case-1-bucket-data-skew-leading-to-suboptimal-shuffle-method",level:2},{value:"Case 2: Column Data Skew Leading to Reversed Join Sides",id:"case-2-column-data-skew-leading-to-reversed-join-sides",level:2},{value:"Summary",id:"summary",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"data-skew-handling",children:"Data Skew Handling"})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Doris is an MPP database that relies on data shuffle for parallel computing acceleration. However, in actual production scenarios, performance bottlenecks in single threads of query parallelism are often encountered due to data skew. The following sections introduce how to identify such problems and provide some general solutions."}),"\n",(0,a.jsx)(n.h2,{id:"case-1-bucket-data-skew-leading-to-suboptimal-shuffle-method",children:"Case 1: Bucket Data Skew Leading to Suboptimal Shuffle Method"}),"\n",(0,a.jsx)(n.p,{children:"When data skew occurs on the Join Key of a table, the data will be unevenly distributed among different BE instances, resulting in a single-point execution bottleneck and thus slowing down the overall query execution time."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"HASH_JOIN_OPERATOR  (id=27): \n      -  PlanInfo \n            -  join  op: INNER  JOIN(PARTITIONED)[] \n            -  equal  join  conjunct:  (customer_number  =  customer_number) \n            -  runtime  filters:  RF001[bloom]  <-  customer_number(200/256/2048) \n            -  cardinality=200         \n            -  vec  output  tuple  id:  28 \n            -  output  tuple  id:  28  \n            -  vIntermediate  tuple  ids:  27 \n            -  hash  output  slot  ids:  192  193  194  195  196  197  198  199  200  201  174  175  240  176  177  178  179  180  181  182  183  184  185  186  187  188  189  190  191 \n            -  project  output  tuple  id:  28 \n      -  BlocksProduced:  sum  4.883K  (4883),  avg  33,  max  39,  min  29 \n      -  CloseTime:  avg  37.28us,  max  132.653us,  min  13.945us  \n      -  ExecTime:  avg  166.206ms,  max  10s947.344ms,  min  8.845ms \n      -  InitTime:  avg  0ns,  max  0ns,  min  0ns  \n      -  MemoryUsage:  sum ,  avg ,  max ,  min \n          -  PeakMemoryUsage:  sum  11.81  MB,  avg  84.00  KB,  max  84.00  KB,  min  84.00  KB \n          -  ProbeKeyArena:  sum  11.81  MB,  avg  84.00  KB,  max  84.00  KB,  min  84.00  KB \n      -  OpenTime:  avg  194.970us,  max  497.685us,  min  93.738us  \n      -  ProbeRows:  sum  23.884018M  (23884018),  avg  165.861K  (165861),  max  219.346276M  (219346276),  min  1984  (1984) \n      -  ProjectionTime:  avg  7.336ms,  max  33.540ms,  min  3.760ms \n      -  RowsProduced:  sum  28.8K  (28800),  avg  200,  max  200,  min  200 \n"})}),"\n",(0,a.jsx)(n.p,{children:"From the max indicators in the above Join's Profile, there is an obvious skew in the execution time and ProbeRows."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Bash",children:"ExecTime:  avg  166.206ms,  max  10s947.344ms,  min  8.845ms \nProbeRows:  sum  23.884018M  (23884018),  avg  165.861K  (165861),  max  219.346276M  (219346276),  min  1984  (1984) \n"})}),"\n",(0,a.jsx)(n.p,{children:'However, due to the uneven distribution of data after shuffling based on the join key, one thread may process 200 million rows of data while another thread only processes a few thousand rows.\nIn the ideal case of the above scenario, each thread should process approximately the same amount of data. But due to the data skew problem of the Join column, a large amount of computational work may be completed by a single thread. To solve this performance bottleneck, refer to the tuning techniques mentioned in the "Using Hint to Control Join Shuffle Method" section and specify the broadcast join hint as follows to prevent the left table from shuffling data, thus effectively avoiding the performance bottleneck caused by data skew on the Join column.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SELECT COUNT(*) FROM orders o JOIN [broadcast] customer c ON o.customer_number = c.customer_number;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"case-2-column-data-skew-leading-to-reversed-join-sides",children:"Case 2: Column Data Skew Leading to Reversed Join Sides"}),"\n",(0,a.jsx)(n.p,{children:"The current Doris optimizer estimates the selectivity based on the assumption of uniform data distribution. Large deviations in the estimated number of rows after filtering can affect the operator's plan selection. Take the following SQL as an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select count(*) \nfrom orders, customer \nwhere o_custkey = c_custkey\nand o_orderdate < '1920-01-02';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Under the assumption of uniform distribution, the optimizer may think that the number of rows output after filtering by ",(0,a.jsx)(n.code,{children:"o_orderdate < '1920-01-02'"})," will be less than the number of rows in the ",(0,a.jsx)(n.code,{children:"customer"})," table. Therefore, it may choose the join order of ",(0,a.jsx)(n.code,{children:"customer"})," join ",(0,a.jsx)(n.code,{children:"orders"}),".\nHowever, if the actual data is skewed and the number of rows in the ",(0,a.jsx)(n.code,{children:"orders"})," table that satisfy the condition is greater than that in the ",(0,a.jsx)(n.code,{children:"customer"})," table, then a more reasonable join order should be ",(0,a.jsx)(n.code,{children:"orders"})," join ",(0,a.jsx)(n.code,{children:"customer"}),'. To solve this performance problem, refer to the tuning techniques mentioned in the "Using Leading Hint to Control Join Order" section and specify the leading hint as follows to force the generation of the join order of ',(0,a.jsx)(n.code,{children:"customer"})," join ",(0,a.jsx)(n.code,{children:"orders"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Rewrite the SQL as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select /*+leading(orders customer)*/ count(*) \nfrom orders, customer \nwhere o_custkey = c_custkey\nand o_orderdate < '1920-01-02'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"Data skew is a common performance problem in production scenarios. By observing the plan and execution bottlenecks through the EXPLAIN and PROFILE tool outputs, locating the cause of the skew, and then using the Hint tool to make corresponding plan adjustments, the impact of data skew on performance can be avoided."})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(667294);let a={},i=o.createContext(a);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);