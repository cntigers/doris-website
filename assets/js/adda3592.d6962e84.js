"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["952576"],{809026:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"admin-manual/workload-management/analysis-diagnosis","title":"Workload Analysis Diagnosis","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/workload-management/analysis-diagnosis.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/analysis-diagnosis","permalink":"/docs/3.0/admin-manual/workload-management/analysis-diagnosis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Workload Analysis Diagnosis","language":"en"},"sidebar":"docs","previous":{"title":"Workload Group","permalink":"/docs/3.0/admin-manual/workload-management/workload-group"},"next":{"title":"Concurrency Control and Queuing","permalink":"/docs/3.0/admin-manual/workload-management/concurrency-control-and-queuing"}}'),s=t("785893"),i=t("250065");let a={title:"Workload Analysis Diagnosis",language:"en"},o=void 0,l={},u=[{value:"Runtime Workload Analysis",id:"runtime-workload-analysis",level:2},{value:"Workload Analysis Through Historical Data",id:"workload-analysis-through-historical-data",level:2},{value:"Commonly Used SQL",id:"commonly-used-sql",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The workload analysis for clusters is primarily divided into two stages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first stage is runtime workload analysis, when the cluster's availability declines, queries with significant resource consumption can be identified through monitoring and downgraded accordingly."}),"\n",(0,s.jsx)(n.li,{children:"The second stage involves analyzing historical data, such as audit logs, to identify unreasonable workloads and optimize them."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"runtime-workload-analysis",children:"Runtime Workload Analysis"}),"\n",(0,s.jsx)(n.p,{children:"When the cluster's availability decreases, as detected through monitoring, the following process can be followed:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Initially, use monitoring to roughly determine the current cluster's bottleneck, such as excessive memory usage, high CPU usage, or high IO. If all are high, it may be advisable to prioritize addressing the memory issue."}),"\n",(0,s.jsx)(n.li,{children:"Once the cluster's bottleneck is identified, the workload_group_resource_usage table can be consulted to find the Group with the highest current resource usage. For example, if there is a memory bottleneck, the top N Groups with the highest memory usage can be identified."}),"\n",(0,s.jsx)(n.li,{children:"After determining the Group with the highest resource usage, the first step can be to reduce the query concurrency for this Group, as cluster resources are already tight at this point, and new queries should be avoided to prevent exhausting cluster resources."}),"\n",(0,s.jsx)(n.li,{children:"Downgrade the queries for the current Group. Depending on the bottleneck, different approaches can be taken:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If it's a CPU bottleneck, consider setting the Group's CPU to a hard limit and adjusting the cpu_hard_limit to a lower value to voluntarily yield CPU resources."}),"\n",(0,s.jsx)(n.li,{children:"For an IO bottleneck, limit the Group's maximum IO through the read_bytes_per_second parameter."}),"\n",(0,s.jsx)(n.li,{children:"In case of a memory bottleneck, set the Group's memory to a hard limit and decrease the memory_limit value to release some memory. Note that this may result in numerous query failures within the current Group."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"After completing the above steps, the cluster's availability usually recovers to some extent. At this point, further analysis can be conducted to determine the primary cause of the increased resource usage in this Group, whether it's due to an overall increase in query concurrency in this Group or specific large queries. If it's caused by specific large queries, these queries can be quickly killed to restore cluster functionality."}),"\n",(0,s.jsx)(n.li,{children:"The backend_active_tasks table can be used in conjunction with active_queries to identify SQL queries with abnormal resource usage in the cluster and then kill these queries using the kill statement to free up resources."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"workload-analysis-through-historical-data",children:"Workload Analysis Through Historical Data"}),"\n",(0,s.jsx)(n.p,{children:"Currently, Doris's audit logs retain brief information about SQL execution, which can be used to identify unreasonable queries executed in the past and make adjustments. The specific process is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Review monitoring to confirm the cluster's historical resource usage and identify the cluster's bottleneck, whether it's CPU, memory, or IO."}),"\n",(0,s.jsxs)(n.li,{children:["Once the cluster's bottleneck is identified, the audit logs can be consulted to find SQL queries with abnormal resource usage during the corresponding period. There are two ways to define abnormal SQL:\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"If users have certain expectations regarding the resource usage of SQL in the cluster, such as most delays being in seconds and scan row counts in the tens of millions, then SQL queries with scan row counts in the hundreds of millions or billions are considered abnormal and require manual intervention."}),"\n",(0,s.jsx)(n.li,{children:"If users do not have expectations regarding SQL resource usage in the cluster, percentile functions can be used to calculate resource usage and identify SQL queries with abnormal resource usage. Taking a CPU bottleneck as an example, first calculate the tp50/tp75/tp99/tp999 for query CPU time over a historical period and use these values as normal. Compare these with the percentile functions for query CPU time during the same period in the current cluster. For instance, if the tp999 for the historical period is 1 minute but the tp50 for the current cluster during the same period is already 1 minute, it indicates that there are numerous SQL queries with CPU times exceeding 1 minute compared to historical data. Therefore, SQL queries with CPU times greater than 1 minute can be defined as abnormal. The same logic applies to other metrics."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Optimize SQL queries with abnormal resource usage, such as rewriting SQL, optimizing table structures, adjusting parallelism to reduce the resource usage per SQL query."}),"\n",(0,s.jsx)(n.li,{children:"If the audit logs reveal that SQL resource usage is normal, monitoring and auditing can be used to check if the number of SQL queries executed during that time has increased compared to historical periods. If so, confirm with upstream businesses whether there has been an increase in upstream access traffic during the corresponding time periods, and decide whether to scale the cluster or implement queuing and rate limiting."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"commonly-used-sql",children:"Commonly Used SQL"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Note that the active_queries table records queries running on the FE, while the backend_active_tasks table records queries running on the BE. Not all queries are registered with the FE during execution; for example, stream loads are not registered with the FE. Therefore, it is normal to get no matching results when performing a LEFT JOIN between backend_active_tasks and active_queries."}),(0,s.jsx)(n.p,{children:"When a query is a SELECT query, the queryId recorded in both active_queries and backend_active_tasks is the same. When a query is a stream load, the queryId in the active_queries table is empty, while the queryId in backend_active_tasks is the ID of the stream load."})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"View all current Workload Groups and display them in descending order of memory/CPU/I/O usage."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select be_id,workload_group_id,memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second \n   from workload_group_resource_usage\norder by  memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second desc\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cpu usage TopN Sql."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, query_type,sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Memory usage TopN Sql."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, query_type, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Scan bytes/rows TopN Sql."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, query_type, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id,query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Show workload group's scan rows/bytes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Show workload group's query queue details."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n"})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);