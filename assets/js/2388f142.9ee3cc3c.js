"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["464073"],{525650:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>u,contentTitle:()=>r});var a=JSON.parse('{"id":"query-acceleration/tuning/tuning-execution/parallelism-tuning","title":"Parallelism Tuning","description":"Overview","source":"@site/docs/query-acceleration/tuning/tuning-execution/parallelism-tuning.md","sourceDirName":"query-acceleration/tuning/tuning-execution","slug":"/query-acceleration/tuning/tuning-execution/parallelism-tuning","permalink":"/docs/dev/query-acceleration/tuning/tuning-execution/parallelism-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Data Skew Handling","permalink":"/docs/dev/query-acceleration/tuning/tuning-execution/data-skew-handling"},"next":{"title":"Common Tuning Parameters","permalink":"/docs/dev/query-acceleration/tuning/tuning-parameters"}}'),t=i("785893"),l=i("250065");let s={},r="Parallelism Tuning",o={},u=[{value:"Overview",id:"overview",level:2},{value:"Principles of Parallelism Tuning",id:"principles-of-parallelism-tuning",level:2},{value:"Examples",id:"examples",level:3},{value:"Methods of Parallelism Tuning",id:"methods-of-parallelism-tuning",level:2},{value:"SQL Level Adjustment:",id:"sql-level-adjustment",level:3},{value:"Session Level Adjustment:",id:"session-level-adjustment",level:3},{value:"Global Adjustment:",id:"global-adjustment",level:3},{value:"Case 1: High Parallelism Leading to High CPU Usage in a High-Concurrency Pressure Scenario",id:"case-1-high-parallelism-leading-to-high-cpu-usage-in-a-high-concurrency-pressure-scenario",level:2},{value:"Case 2: Increasing Parallelism to Further Utilize the CPU for Query Acceleration",id:"case-2-increasing-parallelism-to-further-utilize-the-cpu-for-query-acceleration",level:2},{value:"Summary",id:"summary",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"parallelism-tuning",children:"Parallelism Tuning"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Doris queries are executed in an MPP (Massively Parallel Processing) framework, where each query is executed in parallel across multiple BEs (Backend Executors). Meanwhile, within a single BE, a multi-threaded parallel approach is adopted to enhance query execution efficiency. Currently, all types of statements, including queries, DML (Data Manipulation Language), and DDL (Data Definition Language), support parallel execution."}),"\n",(0,t.jsxs)(n.p,{children:["The control parameter for parallelism within a single BE is ",(0,t.jsx)(n.code,{children:"parallel_pipeline_task_num"}),", which refers to the number of working tasks used by a single Fragment during execution. In actual production scenarios, performance issues may arise due to improper parallelism settings. The following examples illustrate cases of optimizing parallelism."]}),"\n",(0,t.jsx)(n.h2,{id:"principles-of-parallelism-tuning",children:"Principles of Parallelism Tuning"}),"\n",(0,t.jsxs)(n.p,{children:["The purpose of setting ",(0,t.jsx)(n.code,{children:"parallel_pipeline_task_num"})," is to fully utilize multi-core resources and reduce query latency. However, to enable multi-core parallel execution, some data shuffle operators and synchronization logic between multiple threads are usually introduced, which may also lead to unnecessary resource wastage."]}),"\n",(0,t.jsx)(n.p,{children:"The default value in Doris is 0, which is half the number of CPU cores of the BE. This value takes into account the resource utilization of both single queries and concurrent operations, and usually does not require user intervention for adjustment. When there is a performance bottleneck, refer to the following examples for necessary adjustments. Doris is continuously improving its adaptive strategy, and it is usually recommended to make necessary adjustments in specific scenarios or at the SQL level."}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Suppose the BE has 16 CPU cores:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["For simple operations on a single table (such as single-table point queries, ",(0,t.jsx)(n.code,{children:"WHERE"})," clause scans to retrieve a small amount of data, ",(0,t.jsx)(n.code,{children:"LIMIT"})," a small amount of data, or hitting a materialized view), ",(0,t.jsx)(n.strong,{children:"the parallelism can be set to 1"}),".\nExplanation: Simple operations on a single table involve only one Fragment. The bottleneck of such queries usually lies in data scanning and processing. The data scanning thread and the query execution thread are separated, and the data scanning thread will perform parallel scanning adaptively. Here, the bottleneck is not the query thread, so the parallelism can be directly set to 1."]}),"\n",(0,t.jsxs)(n.li,{children:["For queries involving two-table ",(0,t.jsx)(n.code,{children:"JOIN"})," or aggregation queries, if the data volume is large and it is confirmed to be a CPU-bound query, ",(0,t.jsx)(n.strong,{children:"the parallelism can be set to 16"}),".\nExplanation: For two-table ",(0,t.jsx)(n.code,{children:"JOIN"})," or aggregation queries, which are data computation-intensive queries, if the CPU is not fully utilized, consider increasing the parallelism on the basis of the default value to take advantage of the parallel capabilities of the Pipeline execution engine and fully utilize CPU resources for computation. It cannot be guaranteed that each PipelineTask can utilize the allocated CPU resources to the fullest. Therefore, the parallelism can be adjusted appropriately, for example, set to 16, to make better use of the CPU. However, the parallelism should not be increased indefinitely. Setting it to 48 will not bring substantial benefits and will instead increase thread scheduling overhead and framework scheduling overhead."]}),"\n",(0,t.jsxs)(n.li,{children:["In a stress testing scenario, where the multiple queries in the stress test can fully utilize the CPU, ",(0,t.jsx)(n.strong,{children:"the parallelism can be set to 1"}),".\nExplanation: In a stress testing scenario, there are sufficient query tasks. Excessive parallelism also brings thread scheduling overhead and framework scheduling overhead. Setting it to 1 is more reasonable in this case."]}),"\n",(0,t.jsx)(n.li,{children:"For complex queries, the parallelism should be adjusted flexibly based on the Profile and machine load. Here, it is recommended to use the default value. If it is not suitable, a stepwise adjustment of 4-2-1 can be tried, and the query performance and machine load should be observed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods-of-parallelism-tuning",children:"Methods of Parallelism Tuning"}),"\n",(0,t.jsx)(n.p,{children:"Doris allows users to manually specify the parallelism of a query to adjust the parallel execution efficiency during query execution."}),"\n",(0,t.jsx)(n.h3,{id:"sql-level-adjustment",children:"SQL Level Adjustment:"}),"\n",(0,t.jsx)(n.p,{children:"Use SQL HINT to specify the parallelism of a single SQL statement. This allows for flexible control of the parallelism of different SQL statements to achieve the best execution results."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select /*SET_VAR("parallel_pipeline_task_num=8")*/ * from nation, lineitem where lineitem.l_suppkey = nation.n_nationkey\n'})}),"\n",(0,t.jsx)(n.h3,{id:"session-level-adjustment",children:"Session Level Adjustment:"}),"\n",(0,t.jsx)(n.p,{children:"Adjust the parallelism at the session level through session variables. All query statements in the session will be executed with the specified parallelism. Please note that even single-line SQL queries will use this parallelism, which may lead to performance degradation."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set parallel_pipeline_task_num = 8;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"global-adjustment",children:"Global Adjustment:"}),"\n",(0,t.jsx)(n.p,{children:"If global adjustment is required, usually involving CPU utilization adjustment, the parallelism can be set globally."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set global parallel_pipeline_task_num = 8;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"case-1-high-parallelism-leading-to-high-cpu-usage-in-a-high-concurrency-pressure-scenario",children:"Case 1: High Parallelism Leading to High CPU Usage in a High-Concurrency Pressure Scenario"}),"\n",(0,t.jsx)(n.p,{children:"When observing high CPU usage online, which affects the performance of some low-latency queries, consider adjusting the query parallelism to reduce CPU usage. Since Doris's design philosophy is to prioritize using more resources to obtain query results as quickly as possible, in some scenarios with tight online resources, this may lead to poor performance. Therefore, appropriate adjustment of parallelism can improve the overall stability and efficiency of queries under limited resources."}),"\n",(0,t.jsx)(n.p,{children:"Set the parallelism from the default value of 0 (half the number of CPU cores) to 4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set global parallel_pipeline_task_num = 4;\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the global setting, it takes effect for the current connection and new connections. Existing other connections are not affected. If immediate global effect is required, the FE (Frontend) can be restarted. After the adjustment, the CPU usage is reduced to 60% of the previous peak value, reducing the impact on some low-latency queries."}),"\n",(0,t.jsx)(n.h2,{id:"case-2-increasing-parallelism-to-further-utilize-the-cpu-for-query-acceleration",children:"Case 2: Increasing Parallelism to Further Utilize the CPU for Query Acceleration"}),"\n",(0,t.jsx)(n.p,{children:"The current default parallelism in Doris is half the number of CPU cores, and some computation-intensive scenarios cannot fully utilize the CPU for query acceleration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select sum(if(t2.value is null, 0, 1)) exist_value, sum(if(t2.value is null, 1, 0)) no_exist_value\nfrom  t1 left join  t2 on t1.key = t2.key;\n"})}),"\n",(0,t.jsx)(n.p,{children:"In a scenario with 2 billion rows in the left table and 5 million rows in the right table, the above SQL takes 28 seconds to execute. Observe the Profile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"HASH_JOIN_OPERATOR (id=3, nereids_id=448):\n                - PlanInfo\n                   - join op: LEFT OUTER JOIN(BROADCAST)[]\n                   - equal join conjunct: (value = value)\n                   - cardinality=2,462,330,332\n                   - vec output tuple id: 5\n                   - output tuple id: 5\n                   - vIntermediate tuple ids: 4 \n                   - hash output slot ids: 16 \n                   - projections: value\n                   - project output tuple id: 5\n                - BlocksProduced: sum 360.099K (360099), avg 45.012K (45012), max 45.014K (45014), min 45.011K (45011)\n                - CloseTime: avg 8.44us, max 13.327us, min 5.574us\n                - ExecTime: avg 26sec153ms, max 26sec261ms, min 26sec33ms\n                - InitTime: avg 7.122us, max 13.395us, min 4.541us\n                - MemoryUsage: sum, avg, max, min \n                  - PeakMemoryUsage: sum 1.16 MB, avg 148.00 KB, max 148.00 KB, min 148.00 KB\n                  - ProbeKeyArena: sum 1.16 MB, avg 148.00 KB, max 148.00 KB, min 148.00 KB\n                - OpenTime: avg 2.967us, max 4.120us, min 1.562us\n                - ProbeRows: sum 1.4662330332B (1462330332), avg 182.791291M (182791291), max 182.811875M (182811875), min 182.782658M (182782658)\n                - ProjectionTime: avg 165.392ms, max 169.762ms, min 161.727ms\n                - RowsProduced: sum 1.462330332B (1462330332), avg 182.791291M (182791291), max 182.811875M (182811875), min 182.782658M (182782658)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The main time-consuming part here: ",(0,t.jsx)(n.code,{children:"ExecTime: avg 26sec153ms, max 26sec261ms, min 26sec33ms"})," all occurs in the Join operator, and the total amount of data processed: ",(0,t.jsx)(n.code,{children:"ProbeRows: sum 1.4662330332B"})," is 1.4 billion, which is a typical CPU-intensive computation scenario. Observing the machine monitoring, it is found that the CPU resources are not fully utilized, with a CPU utilization rate of 60%. At this time, consider increasing the parallelism to further utilize the idle CPU resources for acceleration."]}),"\n",(0,t.jsx)(n.p,{children:"Set the parallelism as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set parallel_pipeline_task_num = 16;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The query execution time is reduced from 28 seconds to 19 seconds, and the CPU utilization rate is increased from 60% to 90%."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"Usually, users do not need to adjust the query parallelism. If adjustment is required, the following points should be noted:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"It is recommended to start from the CPU utilization. Observe whether it is a CPU bottleneck through the PROFILE tool output and try to make reasonable modifications to the parallelism."}),"\n",(0,t.jsx)(n.li,{children:"Adjusting a single SQL is relatively safe. Try not to make overly aggressive global modifications."}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var a=i(667294);let t={},l=a.createContext(t);function s(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);