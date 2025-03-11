"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["717996"],{380113:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"data-operate/update/unique-update","title":"Updating Data with UPDATE Command","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/update/unique-update.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/unique-update","permalink":"/docs/data-operate/update/unique-update","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Updating Data with UPDATE Command","language":"en"},"sidebar":"docs","previous":{"title":"Updating Overview","permalink":"/docs/data-operate/update/update-overview"},"next":{"title":"Updating Data on Unique Key Model","permalink":"/docs/data-operate/update/update-of-unique-model"}}'),i=t("785893"),s=t("250065");let o={title:"Updating Data with UPDATE Command",language:"en"},r=void 0,l={},d=[{value:"Applicable Scenarios",id:"applicable-scenarios",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Synchronization",id:"synchronization",level:3},{value:"Performance",id:"performance",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"More Help",id:"more-help",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This document explains how to use the ",(0,i.jsx)(n.code,{children:"UPDATE"})," command to modify data in Doris. The ",(0,i.jsx)(n.code,{children:"UPDATE"})," command is only applicable to tables with a Unique data model."]}),"\n",(0,i.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Small-scale data updates: Ideal for scenarios where a small amount of data needs to be corrected, such as fixing erroneous fields in certain records or updating the status of specific fields (e.g., order status updates)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ETL batch processing of certain fields: Suitable for large-scale updates of a specific field, commonly seen in ETL processing scenarios. Note: Large-scale data updates should be infrequent."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsx)(n.p,{children:"The query engine uses its own filtering logic to identify the rows that need to be updated. Then, using the Unique model's Value column logic to replace old data with new data. The rows to be updated are modified and reinserted into the table to achieve row-level updates."}),"\n",(0,i.jsx)(n.h3,{id:"synchronization",children:"Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"UPDATE"})," syntax in Doris is synchronous, meaning that once the ",(0,i.jsx)(n.code,{children:"UPDATE"})," statement is successfully executed, the update operation is completed and the data is immediately visible."]}),"\n",(0,i.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,i.jsxs)(n.p,{children:["The performance of the ",(0,i.jsx)(n.code,{children:"UPDATE"})," statement is closely related to the number of rows to be updated and the efficiency of the query conditions."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Number of rows to be updated: The more rows that need to be updated, the slower the ",(0,i.jsx)(n.code,{children:"UPDATE"})," statement will be. For small-scale updates, Doris supports a frequency similar to ",(0,i.jsx)(n.code,{children:"INSERT INTO"})," statements. For large-scale updates, due to the long execution time, it is only suitable for infrequent calls."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Efficiency of query conditions: The ",(0,i.jsx)(n.code,{children:"UPDATE"})," implementation first reads the rows that meet the query conditions. Therefore, if the query conditions are efficient, the ",(0,i.jsx)(n.code,{children:"UPDATE"})," speed will be fast. Ideally, the condition columns should hit the index or partition bucket pruning, so Doris does not need to scan the entire table and can quickly locate the rows that need to be updated, thereby improving update efficiency. It is strongly recommended not to include value columns in the condition columns."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsx)(n.p,{children:"Assume there is a transaction details table with the following structure in a financial risk control scenario:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE transaction_details (\n  transaction_id BIGINT NOT NULL,        -- Unique transaction ID\n  user_id BIGINT NOT NULL,               -- User ID\n  transaction_date DATE NOT NULL,        -- Transaction date\n  transaction_time DATETIME NOT NULL,    -- Transaction time\n  transaction_amount DECIMAL(18, 2),     -- Transaction amount\n  transaction_device STRING,             -- Transaction device\n  transaction_region STRING,             -- Transaction region\n  average_daily_amount DECIMAL(18, 2),   -- Average daily transaction amount over the last 3 months\n  recent_transaction_count INT,          -- Number of transactions in the last 7 days\n  has_dispute_history BOOLEAN,           -- Whether there is a dispute history\n  risk_level STRING                      -- Risk level\n)\nUNIQUE KEY(transaction_id)\nDISTRIBUTED BY HASH(transaction_id) BUCKETS 16\nPROPERTIES (\n  "replication_num" = "3",               -- Number of replicas, default is 3\n  "enable_unique_key_merge_on_write" = "true"  -- Enable MOW mode, support merge updates\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following transaction data exists:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | NULL       |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | NULL       |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | NULL       |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | NULL       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | NULL       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Update the risk level of all daily transaction records according to the following risk control rules:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Transactions with a dispute history have a risk level of high."}),"\n",(0,i.jsx)(n.li,{children:"Transactions in high-risk regions have a risk level of high."}),"\n",(0,i.jsx)(n.li,{children:"Transactions with abnormal amounts (exceeding 5 times the daily average) have a risk level of high."}),"\n",(0,i.jsx)(n.li,{children:"Frequent transactions in the last 7 days:\na. Transactions > 50 times have a risk level of high.\nb. Transactions between 20 and 50 times have a risk level of medium."}),"\n",(0,i.jsx)(n.li,{children:"Transactions during non-working hours (2 AM to 4 AM) have a risk level of medium."}),"\n",(0,i.jsx)(n.li,{children:"The default risk level is low."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE transaction_details\nSET risk_level = CASE\n  -- Transactions with a dispute history or in high-risk regions\n  WHEN has_dispute_history = TRUE THEN 'high'\n  WHEN transaction_region IN ('high_risk_region1', 'high_risk_region2') THEN 'high'\n\n  -- Abnormal transaction amount\n  WHEN transaction_amount > 5 * average_daily_amount THEN 'high'\n\n  -- High transaction frequency in the last 7 days\n  WHEN recent_transaction_count > 50 THEN 'high'\n  WHEN recent_transaction_count BETWEEN 20 AND 50 THEN 'medium'\n\n  -- Transactions during non-working hours\n  WHEN HOUR(transaction_time) BETWEEN 2 AND 4 THEN 'medium'\n\n  -- Default risk level\n  ELSE 'low'\nEND\nWHERE transaction_date = '2024-11-24';\n"})}),"\n",(0,i.jsx)(n.p,{children:"The updated data is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | low        |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | medium     |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | medium     |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | high       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | high       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"more-help",children:"More Help"}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed syntax on data updates, please refer to the ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-modification/DML/UPDATE",children:"UPDATE"})," command manual. You can also enter ",(0,i.jsx)(n.code,{children:"HELP UPDATE"})," in the MySQL client command line for more help."]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(667294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);