"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["121879"],{689142:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"admin-manual/workload-management/sql-blocking","title":"Query Circuit Breaker","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/workload-management/sql-blocking.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/sql-blocking","permalink":"/docs/3.0/admin-manual/workload-management/sql-blocking","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Query Circuit Breaker","language":"en"},"sidebar":"docs","previous":{"title":"Concurrency Control and Queuing","permalink":"/docs/3.0/admin-manual/workload-management/concurrency-control-and-queuing"},"next":{"title":"Kill Query","permalink":"/docs/3.0/admin-manual/workload-management/kill-query"}}'),r=i("785893"),s=i("250065");let l={title:"Query Circuit Breaker",language:"en"},o=void 0,a={},c=[{value:"SQL Block Rule",id:"sql-block-rule",level:2},{value:"Usage",id:"usage",level:3},{value:"Global-level blocking rules",id:"global-level-blocking-rules",level:4},{value:"User-level Blocking Rule",id:"user-level-blocking-rule",level:4},{value:"Other Operations",id:"other-operations",level:4},{value:"Use Cases",id:"use-cases",level:3},{value:"Blocking Scans that Exceed a Specified Number of Rows",id:"blocking-scans-that-exceed-a-specified-number-of-rows",level:4},{value:"Prevent Scanning Data from Exceeding the Specified Number of Partitions",id:"prevent-scanning-data-from-exceeding-the-specified-number-of-partitions",level:4},{value:"Prevent Scanning Data with Excessive Bucket Counts",id:"prevent-scanning-data-with-excessive-bucket-counts",level:4},{value:"Blocking Queries with Specific Patterns",id:"blocking-queries-with-specific-patterns",level:4},{value:"FAQ",id:"faq",level:3},{value:"Q: Will regular expression blocking rules have side effects on the cluster?",id:"q-will-regular-expression-blocking-rules-have-side-effects-on-the-cluster",level:4},{value:"Q: Can a blocking rule be temporarily disabled?",id:"q-can-a-blocking-rule-be-temporarily-disabled",level:4},{value:"Q: What standard do the regular expressions in blocking rules use?",id:"q-what-standard-do-the-regular-expressions-in-blocking-rules-use",level:4},{value:"Workload Policy",id:"workload-policy",level:2},{value:"Version Notes",id:"version-notes",level:3},{value:"Creating Workload Policy",id:"creating-workload-policy",level:3},{value:"Binding Workload Policy to Workload Group",id:"binding-workload-policy-to-workload-group",level:3},{value:"Important Notes",id:"important-notes",level:3},{value:"Workload Policy Demonstration",id:"workload-policy-demonstration",level:3},{value:"1. Session Variable Modification Test",id:"1-session-variable-modification-test",level:4},{value:"2. Big Query Circuit Breaker Test",id:"2-big-query-circuit-breaker-test",level:4}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Query circuit breaking is a protective mechanism used to prevent long-running or resource-consuming queries from having a negative impact on the system. When a query exceeds predefined resource or time limits, the circuit breaker mechanism automatically terminates the query to avoid adverse effects on system performance, resource usage, and other queries. This mechanism ensures the stability of the cluster in a multi-user environment, preventing a single query from exhausting system resources or slowing down responses, thereby improving overall availability and efficiency."}),"\n",(0,r.jsx)(n.p,{children:"In Doris, there are two types of circuit breaker strategies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Planning-time circuit breaking"}),", namely ",(0,r.jsx)(n.strong,{children:"SQL Block Rule"}),", which is used to prevent the execution of statements that match specific patterns. Block rules apply to any statements, including DDL and DML. Typically, block rules are configured by database administrators (DBAs) to enhance cluster stability. For example,"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Preventing a query from scanning too many rows of data"}),"\n",(0,r.jsx)(n.li,{children:"Preventing a query from scanning too many partitions"}),"\n",(0,r.jsx)(n.li,{children:"Preventing a statement that modifies global variables to avoid accidental changes to cluster configurations."}),"\n",(0,r.jsx)(n.li,{children:"Preventing a query pattern that typically consumes excessive resources"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Runtime circuit breaking"}),", namely ",(0,r.jsx)(n.strong,{children:"Workload Policy"}),", which monitors in real-time during runtime the execution time of queries, the amount of data scanned, and memory consumption to implement rule-based query circuit breaking."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sql-block-rule",children:"SQL Block Rule"}),"\n",(0,r.jsx)(n.p,{children:"According to the block pattern, it can be divided into:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Scan row count block rule"}),"\n",(0,r.jsx)(n.li,{children:"Scan partition count block rule"}),"\n",(0,r.jsx)(n.li,{children:"Scan bucket count block rule"}),"\n",(0,r.jsx)(n.li,{children:"Query statement regex matching block rule"}),"\n",(0,r.jsx)(n.li,{children:"Query statement hash value matching block rule"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blocking rules can be categorized according to the scope of blocking into:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Global-level blocking rules"}),"\n",(0,r.jsx)(n.li,{children:"User-level blocking rules"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h4,{id:"global-level-blocking-rules",children:"Global-level blocking rules"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_001\nPROPERTIES (\n  "SQL"="select \\\\* from t",\n  "global" = "true",\n  "enable" = "true"\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this way, we have created a global-level blocking rule. The rule is named rule_001. A query statement regex matching rule has been configured to block all query statements that match the regex ",(0,r.jsx)(n.code,{children:"select \\\\* from t"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Since this is a global-level blocking rule, any user executing statements that match the above regex will be blocked. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL root@127.0.0.1:test> select * from t;\n(1105, 'errCode = 2, detailMessage = errCode = 2, detailMessage = SQL match regex SQL block rule: rule_001')\n"})}),"\n",(0,r.jsx)(n.h4,{id:"user-level-blocking-rule",children:"User-level Blocking Rule"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_001\nPROPERTIES (\n  "SQL"="select * from t",\n  "global" = "false",\n  "enable" = "true"\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:'Unlike global-level blocking rules, user-level blocking rules only apply to specified users. When we create a blocking rule, set the property "global" to "false". Then, this blocking rule will be considered a user-level blocking rule.'}),"\n",(0,r.jsx)(n.p,{children:"To make user-level blocking rules effective, you also need to set the corresponding properties for the users who need to use this rule. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set property for 'root' 'SQL_block_rules' = 'rule_001';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Thus, after the above configuration, when the root user executes a query, the blocking rule named rule_001 will be applied."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL root@127.0.0.1:test> set property for 'root' 'SQL_block_rules' = '';\nQuery OK, 0 rows affected\nTime: 0.018s\nMySQL root@127.0.0.1:test> select * from t;\n+----+----+\n| id | c1 |\n+----+----+\n| 1  | 1  |\n+----+----+\n\n1 row in set\nTime: 0.027s\nMySQL root@127.0.0.1:test> set property for 'root' 'SQL_block_rules' = 'rule_001';\nQuery OK, 0 rows affected\nTime: 0.008s\nMySQL root@127.0.0.1:test> select * from t;\n(1105, 'errCode = 2, detailMessage = errCode = 2, detailMessage = SQL match regex SQL block rule: rule_001')\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you want to add multiple user-level blocking rules for a user, list all the rule names in the rule list, separated by commas."}),"\n",(0,r.jsx)(n.li,{children:"If you want to remove all user-level blocking rules for a user, set the rule list to an empty string."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"other-operations",children:"Other Operations"}),"\n",(0,r.jsx)(n.p,{children:"If you need to modify or delete blocking rules, refer to the SQL manual for blocking rules."}),"\n",(0,r.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(n.p,{children:"You can use the following scenarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Blocking scans that exceed a specified number of rows"}),"\n",(0,r.jsx)(n.li,{children:"Blocking scans that exceed a specified number of partitions"}),"\n",(0,r.jsx)(n.li,{children:"Blocking scans that exceed a specified number of buckets"}),"\n",(0,r.jsx)(n.li,{children:"Blocking queries with specific patterns"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"blocking-scans-that-exceed-a-specified-number-of-rows",children:"Blocking Scans that Exceed a Specified Number of Rows"}),"\n",(0,r.jsxs)(n.p,{children:["Scanning data significantly consumes BE's IO and CPU resources. Therefore, unnecessary data scans pose a substantial challenge to cluster stability. In daily use, blind full table scan operations often occur, such as ",(0,r.jsx)(n.code,{children:"SELECT * FROM t"}),". To prevent such queries from damaging the cluster, you can set an upper limit on the number of rows scanned by a single query on a single table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_card \nPROPERTIES\n(\n   "cardinality" = "1000",\n   "global" = "true",\n   "enable" = "true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"When the above rules are set, if a single table scan exceeds 1000 rows, the execution of the query is prohibited.\nIt should be noted that since the calculation of the number of rows scanned is done during the planning phase, not the execution phase. Therefore, when calculating the number of rows, only partition and bucket pruning are considered, and the impact of other filtering conditions on the number of rows scanned is not taken into account. In other words, the worst-case scenario is considered. Therefore, queries where the actual number of rows scanned is less than the set value may also be blocked."}),"\n",(0,r.jsx)(n.h4,{id:"prevent-scanning-data-from-exceeding-the-specified-number-of-partitions",children:"Prevent Scanning Data from Exceeding the Specified Number of Partitions"}),"\n",(0,r.jsx)(n.p,{children:"Scanning too many partitions can significantly increase the CPU consumption of BE. Additionally, if the query is on an external table, it is more likely to incur significant network overhead and metadata retrieval overhead. In daily use, this is often due to forgetting to write filtering conditions on partition columns or writing them incorrectly. To prevent such queries from damaging the cluster, you can set an upper limit on the number of partitions scanned by a single query on a single table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_part_num \nPROPERTIES\n(\n   "partition_num" = "30",\n   "global" = "true",\n   "enable" = "true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"When the above rules are set, if the number of partitions scanned for a single table exceeds 30, the execution of the query is prohibited.\nIt should be noted that the calculation of the number of scanned partitions is completed during the planning phase, not the execution phase. Therefore, there may be cases where more partitions are retained due to incomplete partition pruning. Thus, queries where the actual number of scanned partitions is less than the set value may also be blocked."}),"\n",(0,r.jsx)(n.h4,{id:"prevent-scanning-data-with-excessive-bucket-counts",children:"Prevent Scanning Data with Excessive Bucket Counts"}),"\n",(0,r.jsx)(n.p,{children:"Scanning too many buckets can significantly increase the BE's CPU consumption. To prevent such queries from harming the cluster, you can set an upper limit on the number of partitions a single query can scan on a single table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_teblet_num \nPROPERTIES\n(\n   "tablet_num" = "200",\n   "global" = "true",\n   "enable" = "true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"When the above rules are set, if the number of buckets scanned in a single table exceeds 200, the execution of the query is prohibited."}),"\n",(0,r.jsx)(n.p,{children:"It is important to note that the calculation of the number of scanned buckets is done during the planning phase, not the execution phase. Therefore, it is possible that due to incomplete bucket pruning, more partitions are retained. As a result, queries with an actual number of scanned buckets less than the set value may also be blocked."}),"\n",(0,r.jsx)(n.h4,{id:"blocking-queries-with-specific-patterns",children:"Blocking Queries with Specific Patterns"}),"\n",(0,r.jsx)(n.p,{children:"For various reasons, such as high computational complexity or long planning time, you may want to block queries that use certain patterns."}),"\n",(0,r.jsxs)(n.p,{children:["For example, to block the ",(0,r.jsx)(n.code,{children:"abs"})," function. You can use the following regular expression block rule to achieve this purpose."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_abs\nPROPERTIES(\n  "SQL"="(?i)abs\\\\s*\\\\(.+\\\\)",\n  "global"="true",\n  "enable"="true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the above regular expressions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"(?i)"})," indicates case-insensitive matching."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"abs"})," is the target function to be blocked."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\\s*"})," signifies that any amount of whitespace is allowed between ",(0,r.jsx)(n.code,{children:"abs"})," and the left parenthesis."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\\(.+\\)"})," matches the function parameters."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, similar methods can be used to block ",(0,r.jsx)(n.code,{children:"set global"})," to prevent unintended variable changes, or block ",(0,r.jsx)(n.code,{children:"truncate table"})," to prevent unintended data deletions."]}),"\n",(0,r.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h4,{id:"q-will-regular-expression-blocking-rules-have-side-effects-on-the-cluster",children:"Q: Will regular expression blocking rules have side effects on the cluster?"}),"\n",(0,r.jsx)(n.p,{children:"A: Yes. Regular expression matching is computationally intensive. When using complex regular expressions or too many regex blocking rules, it can significantly increase the CPU load on the FE. Therefore, add regex blocking rules cautiously. Avoid using complex regular expressions unless necessary."}),"\n",(0,r.jsx)(n.h4,{id:"q-can-a-blocking-rule-be-temporarily-disabled",children:"Q: Can a blocking rule be temporarily disabled?"}),"\n",(0,r.jsx)(n.p,{children:'A: Yes. Modify the blocking rule by setting its "enable" property to "false".'}),"\n",(0,r.jsx)(n.h4,{id:"q-what-standard-do-the-regular-expressions-in-blocking-rules-use",children:"Q: What standard do the regular expressions in blocking rules use?"}),"\n",(0,r.jsxs)(n.p,{children:["A: The regular expressions in blocking rules use Java's regular expression syntax. Common expressions can refer to the SQL syntax manual. The complete manual can be found at ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",children:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html"})]}),"\n",(0,r.jsx)(n.h2,{id:"workload-policy",children:"Workload Policy"}),"\n",(0,r.jsx)(n.p,{children:"SQL Block Rule is a configuration for circuit breaking during planning, but because the cost calculation during planning may be inaccurate (especially for very complex queries, making it difficult to estimate accurately), it can lead to rules not being effective or false positives. Workload Policy addresses this limitation by allowing real-time monitoring of certain metrics during query execution, and circuit breaking queries whose runtime state does not meet expectations. This prevents unexpected large queries from consuming excessive resources and affecting cluster stability. Common runtime monitoring metrics include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Query execution time"}),"\n",(0,r.jsx)(n.li,{children:"Number of rows scanned per BE"}),"\n",(0,r.jsx)(n.li,{children:"Number of bytes scanned per BE"}),"\n",(0,r.jsx)(n.li,{children:"Memory usage per BE"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"version-notes",children:"Version Notes"}),"\n",(0,r.jsx)(n.p,{children:"Since Doris version 2.1, Workload Policy can be used to implement circuit breaking for large queries."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"2.1"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"select"}),(0,r.jsx)(n.td,{children:"\u221A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insert into select"}),(0,r.jsx)(n.td,{children:"\u221A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insert into values"}),(0,r.jsx)(n.td,{children:"X"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stream load"}),(0,r.jsx)(n.td,{children:"\u221A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"routine load"}),(0,r.jsx)(n.td,{children:"\u221A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"backup"}),(0,r.jsx)(n.td,{children:"X"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compaction"}),(0,r.jsx)(n.td,{children:"X"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"creating-workload-policy",children:"Creating Workload Policy"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"CREATE WORKLOAD Policy"})," command to create a resource management policy."]}),"\n",(0,r.jsxs)(n.p,{children:["In the example below, create a Policy named ",(0,r.jsx)(n.code,{children:"test_cancel_Policy"}),", which will cancel queries running in the cluster for more than 1000ms. The current status is enabled. Creating a Workload Policy requires ",(0,r.jsx)(n.code,{children:"admin_priv"})," privileges."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create workload policy test_cancel_Policy\nConditions(query_time > 1000)\nActions(cancel_query) \nproperties('enabled'='true'); \n"})}),"\n",(0,r.jsx)(n.p,{children:"When creating a Workload Policy, the following must be specified:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Condition"}),' represents the policy trigger condition. Multiple Conditions can be linked using commas "," to represent an "AND" relationship. In the example above, ',(0,r.jsx)(n.code,{children:"query_time > 1000"})," indicates that the Policy is triggered when the query time exceeds 1 second. Currently supported Conditions are:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Conditions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsxs)(n.td,{children:["The username carried by the query, only triggers the ",(0,r.jsx)(n.code,{children:"set_session_variable"})," Action in FE."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"be_scan_rows"}),(0,r.jsx)(n.td,{children:"The number of rows scanned by a SQL in a single BE process. If the SQL is executed concurrently on BE, it is the cumulative value of multiple concurrent executions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"be_scan_bytes"}),(0,r.jsx)(n.td,{children:"The number of bytes scanned by a SQL in a single BE process. If the SQL is executed concurrently on BE, it is the cumulative value of multiple concurrent executions, in bytes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_time"}),(0,r.jsx)(n.td,{children:"The runtime of a SQL in a single BE process, in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_be_memory_bytes"}),(0,r.jsx)(n.td,{children:"The memory usage of a SQL in a single BE process. If the SQL is executed concurrently on BE, it is the cumulative value of multiple concurrent executions, in bytes."})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Action"})," represents the action taken when the condition is triggered. Currently, a Policy can only define one Action (except for ",(0,r.jsx)(n.code,{children:"set_session_variable"}),"). In the example above, ",(0,r.jsx)(n.code,{children:"cancel_query"})," indicates cancelling the query. Currently supported Actions are:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Actions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cancel_query"}),(0,r.jsx)(n.td,{children:"Cancel the query."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set_session_variable"}),(0,r.jsxs)(n.td,{children:["Triggers the ",(0,r.jsx)(n.code,{children:"set session variable"})," statement. A single policy can have multiple ",(0,r.jsx)(n.code,{children:"set_session_variable"})," options, currently only triggered in FE by the ",(0,r.jsx)(n.code,{children:"username"})," Condition."]})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties"})," define the attributes of the current Policy, including whether it is enabled and its priority."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Properties"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enabled"}),(0,r.jsxs)(n.td,{children:["Can be ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"}),", default is ",(0,r.jsx)(n.code,{children:"true"}),", indicating the Policy is enabled. ",(0,r.jsx)(n.code,{children:"false"})," indicates the Policy is disabled."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priority"}),(0,r.jsx)(n.td,{children:"An integer ranging from 0 to 100, default is 0, representing the Policy's priority. The higher the value, the higher the priority. This attribute mainly ensures that when a query matches multiple Policies, only the Policy with the highest priority is selected."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"workload_group"}),(0,r.jsx)(n.td,{children:"Currently, a Policy can bind to one workload group, meaning this Policy only applies to queries from a specific Workload Group. The default is empty, meaning it applies to all queries."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"binding-workload-policy-to-workload-group",children:"Binding Workload Policy to Workload Group"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Workload Policies apply to all supported queries. If you want to specify that a Policy only targets a specific Workload Group, you need to bind the Workload Group through the ",(0,r.jsx)(n.code,{children:"workload_group"})," option. The statement is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create workload policy test_cancel_big_query\nConditions(query_time > 1000)\nActions(cancel_query) \nproperties('workload_group'='normal')\n"})}),"\n",(0,r.jsx)(n.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Conditions and Actions of the same Policy must either both be FE or both be BE. For example, ",(0,r.jsx)(n.code,{children:"set_session_variable"})," and ",(0,r.jsx)(n.code,{children:"cancel_query"})," cannot be configured within the same Policy. Conditions ",(0,r.jsx)(n.code,{children:"be_scan_rows"})," and ",(0,r.jsx)(n.code,{children:"username"})," cannot be configured within the same Policy."]}),"\n",(0,r.jsx)(n.li,{children:"Currently, Policies are executed by asynchronous threads at fixed time intervals, which introduces a certain latency in policy enforcement. For example, if a user configures a policy to cancel a query when the number of scanned rows exceeds 1,000,000, and the cluster resources are relatively idle at that time, the query may finish before the cancellation policy takes effect. The current interval is 500ms, meaning that queries with run times shorter than this interval may bypass the policy check."}),"\n",(0,r.jsx)(n.li,{children:"Currently supported load types include select/insert, select/stream load, broker load, and routine load."}),"\n",(0,r.jsx)(n.li,{children:"A single query may match multiple Policies, but only the Policy with the highest priority will take effect."}),"\n",(0,r.jsx)(n.li,{children:"Modifications to Actions and Conditions are currently not supported; they can only be modified by deleting and recreating them."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"workload-policy-demonstration",children:"Workload Policy Demonstration"}),"\n",(0,r.jsx)(n.h4,{id:"1-session-variable-modification-test",children:"1. Session Variable Modification Test"}),"\n",(0,r.jsx)(n.p,{children:"Attempt to modify concurrency-related parameters in the session variables of the Admin account."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- log on admin to check variables\nshow variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 8     | 8             | 0       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n\n-- Create a Policy to modify the concurrency parameters of the admin account.\ncreate workload Policy test_set_var_Policy\nConditions(username='admin')\nActions(set_session_variable 'parallel_fragment_exec_instance_num=1') \n\n-- After some time, check the admin account's parameters again.\nshow variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 1     | 8             | 1       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-big-query-circuit-breaker-test",children:"2. Big Query Circuit Breaker Test"}),"\n",(0,r.jsx)(n.p,{children:"Test to circuit break queries that run longer than 3s. Below is an audit log of a successful run of ckbench's q29, showing that this SQL took 4.5s to complete."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mySQL [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| k                                                                     | l                | c        | min(Referer)                                                                                                        |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| 1                                                                     | 85.4611926713085 | 67259319 | http://%26ad%3D1%25EA%25D0%26utm_source=web&cd=19590&input_onlist/\u0431\u0438-2 \u043C\u0435\u0441\u0442\u043E \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043D                       |\n| http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE |               69 |   207347 | http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE                                               |\n| http://\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u0430\u0448\u043D\u0430\u044F                                                   |               31 |   740277 | http://\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u0430\u0448\u043D\u0430\u044F                                                                                                 |\n| http://loveche.html?ctid                                              |               24 |   144901 | http://loveche.html?ctid                                                                                            |\n| http://rukodeliveresult                                               |               23 |   226135 | http://rukodeliveresult                                                                                             |\n| http://holodilnik.ru                                                  |               20 |   133893 | http://holodilnik.ru                                                                                                |\n| http://smeshariki.ru                                                  |               20 |   210736 | http://smeshariki.ru                                                                                                |\n| http:%2F%2Fviewtopic                                                  |               20 |   391115 | http:%2F%2Fviewtopic                                                                                                |\n| http:%2F%2Fwwww.ukr                                                   |               19 |   655178 | http:%2F%2Fwwww.ukr                                                                                                 |\n| http:%2F%2FviewType                                                   |               19 |   148907 | http:%2F%2FviewType                                                                                                 |\n| http://state=2008                                                     |               17 |   139630 | http://state=2008                                                                                                   |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n11 rows in set (4.50 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a Policy that cancels a query if it runs longer than 3 seconds."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create workload Policy test_cancel_3s_query\nConditions(query_time > 3000)\nActions(cancel_query) \n"})}),"\n",(0,r.jsx)(n.p,{children:"Upon re-executing the SQL, you can see that the SQL execution will directly report an error."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mySQL [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[CANCELLED]query cancelled by workload Policy,id:12345\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var t=i(667294);let r={},s=t.createContext(r);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);