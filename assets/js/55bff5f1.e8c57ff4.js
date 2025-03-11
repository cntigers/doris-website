"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["104738"],{612963:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/backends","title":"BACKENDS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/backends.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/backends","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/backends","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BACKENDS","language":"en"},"sidebar":"docs","previous":{"title":"ICEBERG_META","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta"},"next":{"title":"FRONTENDS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/frontends"}}'),r=t("785893"),d=t("250065");let i={title:"BACKENDS",language:"en"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The table function generates the backends temporary table, and you can view the BE node information in the current doris cluster."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"BACKENDS()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"global"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"BackendId"})}),(0,r.jsx)(n.td,{children:"The unique identifier for each backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Host"})}),(0,r.jsx)(n.td,{children:"The IP address or hostname of the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"HeartbeatPort"})}),(0,r.jsx)(n.td,{children:"The port used for health checks (heartbeat)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"BePort"})}),(0,r.jsx)(n.td,{children:"The port used for communication between the backend node and the cluster for query execution."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"HttpPort"})}),(0,r.jsx)(n.td,{children:"The HTTP port of the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"BrpcPort"})}),(0,r.jsx)(n.td,{children:"The port used for BRPC communication."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"ArrowFlightSqlPort"})}),(0,r.jsx)(n.td,{children:"The Arrow Flight SQL port (used for integration with Apache Arrow for high-performance data transport)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"LastStartTime"})}),(0,r.jsx)(n.td,{children:"The timestamp for the last start time of the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"LastHeartbeat"})}),(0,r.jsx)(n.td,{children:"The timestamp for the last heartbeat received from the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Alive"})}),(0,r.jsx)(n.td,{children:"Whether the backend node is alive (true/false)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"SystemDecommissioned"})}),(0,r.jsx)(n.td,{children:"Whether the backend node has been decommissioned."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"TabletNum"})}),(0,r.jsx)(n.td,{children:"The number of tablets managed by the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"DataUsedCapacity"})}),(0,r.jsx)(n.td,{children:"The amount of disk space used by the backend node (in MB)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"TrashUsedCapacity"})}),(0,r.jsx)(n.td,{children:"The amount of disk space used by trash (in MB)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"AvailCapacity"})}),(0,r.jsx)(n.td,{children:"The available disk space on the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"TotalCapacity"})}),(0,r.jsx)(n.td,{children:"The total disk capacity of the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"UsedPct"})}),(0,r.jsx)(n.td,{children:"The percentage of disk capacity used by the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"MaxDiskUsedPct"})}),(0,r.jsx)(n.td,{children:"The maximum disk usage percentage across all tablets."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"RemoteUsedCapacity"})}),(0,r.jsx)(n.td,{children:"The disk space used by remote storage (if applicable)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Tag"})}),(0,r.jsx)(n.td,{children:"Tags associated with the backend node, typically used for categorization (e.g., location)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"ErrMsg"})}),(0,r.jsx)(n.td,{children:"Error messages reported by the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Version"})}),(0,r.jsx)(n.td,{children:"The version of the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Status"})}),(0,r.jsx)(n.td,{children:"The current status of the backend node, including success/failure reports for tablets, load times, and query statuses."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"HeartbeatFailureCounter"})}),(0,r.jsx)(n.td,{children:"The count of heartbeat failures, if any."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"NodeRole"})}),(0,r.jsxs)(n.td,{children:["The role of the backend node, such as ",(0,r.jsx)(n.code,{children:"mix"}),", which means the node handles both storage and query processing."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CpuCores"})}),(0,r.jsx)(n.td,{children:"The number of CPU cores on the backend node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Memory"})}),(0,r.jsx)(n.td,{children:"The amount of memory on the backend node."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"show backends cluster information"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select * from backends();\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+----------+-----------+\n| BackendId | Host      | HeartbeatPort | BePort | HttpPort | BrpcPort | ArrowFlightSqlPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | TabletNum | DataUsedCapacity | TrashUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | RemoteUsedCapacity | Tag                      | ErrMsg | Version                 | Status                                                                                                                                                                                                                 | HeartbeatFailureCounter | NodeRole | CpuCores | Memory    |\n+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+----------+-----------+\n| 10020     | 10.xx.xx.90 | 9050          | 9060   | 8040     | 8060     | -1               | 2025-01-13 14:11:31 | 2025-01-16 13:24:55 | true  | false                | 359       | 295.328 MB       | 0.000             | 231.236 GB    | 3.437 TB      | 93.43 % | 93.43 %        | 0.000              | {"location" : "default"} |        | doris-0.0.0--83f899b32b | {"lastSuccessReportTabletsTime":"2025-01-16 13:24:07","lastStreamLoadTime":1737004982210,"isQueryDisabled":false,"isLoadDisabled":false,"isActive":true,"currentFragmentNum":0,"lastFragmentUpdateTime":1737004982195} | 0                       | mix      | 96       | 375.81 GB |\n+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+----------+-----------+\n'})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);