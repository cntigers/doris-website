"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["914943"],{930599:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/optimizing-table-scanning","title":"Optimizing Table Scanning","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/tuning/tuning-plan/optimizing-table-scanning.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/optimizing-table-scanning","permalink":"/docs/query-acceleration/tuning/tuning-plan/optimizing-table-scanning","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Optimizing Table Scanning","language":"en"},"sidebar":"docs","previous":{"title":"Optimizing Table Index Design","permalink":"/docs/query-acceleration/tuning/tuning-plan/optimizing-table-index"},"next":{"title":"Transparent Rewriting with Sync-Materialized View","permalink":"/docs/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv"}}'),a=i("785893"),r=i("250065");let s={title:"Optimizing Table Scanning",language:"en"},o=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Case",id:"case",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Doris, as a high-performance real-time analytic data warehouse, offers a powerful partition pruning feature that can significantly enhance query performance."}),"\n",(0,a.jsx)(n.p,{children:"Partition pruning is a query optimization technique that intelligently identifies partitions relevant to a query by analyzing its conditions, and scans only the data within these partitions, thereby avoiding unnecessary scans of irrelevant partitions. This approach can greatly reduce I/O operations and computational load, thus accelerating query execution."}),"\n",(0,a.jsx)(n.h2,{id:"case",children:"Case"}),"\n",(0,a.jsx)(n.p,{children:"Here is a usage case to demonstrate Doris's partition pruning feature."}),"\n",(0,a.jsxs)(n.p,{children:["Suppose we have a sales data table named ",(0,a.jsx)(n.code,{children:"sales"}),", which is partitioned by date, with each day's data stored in a separate partition. The table structure is defined as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sales (\n    date DATE,\n    product VARCHAR(50),\n    amount DECIMAL(10, 2)\n)\nPARTITION BY RANGE(date) (\n    PARTITION p1 VALUES LESS THAN ('2023-01-01'),\n    PARTITION p2 VALUES LESS THAN ('2023-02-01'),\n    PARTITION p3 VALUES LESS THAN ('2023-03-01'),\n    PARTITION p4 VALUES LESS THAN ('2023-04-01')\n)\nDISTRIBUTED BY HASH(date) BUCKETS 16\nPROPERTIES\n(\n    \"replication_num\" = \"1\"\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, we need to query the total sales amount between January 15, 2023 and February 15, 2023. The query statement is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT SUM(amount) AS total_amount\nFROM sales\nWHERE date BETWEEN '2023-01-15' AND '2023-02-15';\n"})}),"\n",(0,a.jsx)(n.p,{children:"For the above query, Doris's partition pruning optimization process is as follows:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Doris intelligently analyzes the partition column ",(0,a.jsx)(n.code,{children:"date"})," in the query conditions and identifies the date range of the query as being between '2023-01-15' and '2023-02-15'."]}),"\n",(0,a.jsxs)(n.li,{children:["By comparing the query conditions with the partition definitions, Doris precisely locates the range of partitions that need to be scanned. In this example, only partitions ",(0,a.jsx)(n.code,{children:"p2"})," and ",(0,a.jsx)(n.code,{children:"p3"})," need to be scanned, as their date ranges fully cover the query conditions."]}),"\n",(0,a.jsxs)(n.li,{children:["Doris automatically skips partitions unrelated to the query conditions, such as ",(0,a.jsx)(n.code,{children:"p1"})," and ",(0,a.jsx)(n.code,{children:"p4"}),", avoiding unnecessary data scans and thereby reducing I/O overhead."]}),"\n",(0,a.jsxs)(n.li,{children:["Finally, Doris performs data scanning and aggregation computations only within partitions ",(0,a.jsx)(n.code,{children:"p2"})," and ",(0,a.jsx)(n.code,{children:"p3"}),", quickly obtaining the query results."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["By using the ",(0,a.jsx)(n.code,{children:"EXPLAIN"})," command, we can view the query execution plan and confirm that Doris's partition pruning optimization has taken effect. In the execution plan, the ",(0,a.jsx)(n.code,{children:"partition"})," attribute of the ",(0,a.jsx)(n.code,{children:"OlapScanNode"})," node will display the actually scanned partitions as ",(0,a.jsx)(n.code,{children:"p2"})," and ",(0,a.jsx)(n.code,{children:"p3"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"|   0:VOlapScanNode(212)                                                     |\n|      TABLE: cir.sales(sales), PREAGGREGATION: ON                           |\n|      PREDICATES: (date[#0] >= '2023-01-15') AND (date[#0] <= '2023-02-15') |\n|      partitions=2/4 (p2,p3)                                                |\n"})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"In summary, Doris's partition pruning feature can intelligently identify the relevance between query conditions and partitions, automatically prune irrelevant partitions, and scan only necessary data, thereby significantly enhancing query performance. Reasonable utilization of the partition pruning feature can help users build efficient real-time analytics systems and easily handle massive data query demands."})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(667294);let a={},r=t.createContext(a);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);