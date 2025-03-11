"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["417448"],{367922:function(e,n,s){s.r(n),s.d(n,{default:()=>_,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"query-data/window-function","title":"Window Function","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-data/window-function.md","sourceDirName":"query-data","slug":"/query-data/window-function","permalink":"/docs/3.0/query-data/window-function","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Window Function","language":"en"},"sidebar":"docs","previous":{"title":"Multi-Dimensional Analytics","permalink":"/docs/3.0/query-data/multi-dimensional-analytics"},"next":{"title":"Common Table Expression","permalink":"/docs/3.0/query-data/cte"}}'),i=s("785893"),a=s("250065");let r={title:"Window Function",language:"en"},o=void 0,d={},c=[{value:"Introduction to Basic Concepts",id:"introduction-to-basic-concepts",level:2},{value:"Processing Order",id:"processing-order",level:3},{value:"Result Set Partitioning",id:"result-set-partitioning",level:3},{value:"Window",id:"window",level:3},{value:"Current Row",id:"current-row",level:3},{value:"Sorting Function",id:"sorting-function",level:2},{value:"NTILE Function",id:"ntile-function",level:3},{value:"Analytic Functions",id:"analytic-functions",level:2},{value:"Using the Analytic Function SUM to Calculate Cumulative Values",id:"using-the-analytic-function-sum-to-calculate-cumulative-values",level:3},{value:"Using the Analytic Function AVG to Calculate Moving Averages",id:"using-the-analytic-function-avg-to-calculate-moving-averages",level:3},{value:"Reporting Function",id:"reporting-function",level:2},{value:"LAG / LEAD",id:"lag--lead",level:2},{value:"Unique Ordering for Analytic Function Data",id:"unique-ordering-for-analytic-function-data",level:2},{value:"Reference",id:"reference",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Analytic functions, also known as window functions, are functions in SQL queries that perform complex calculations on rows in a data set. The characteristic of window functions is that they do not reduce the number of rows in the query result, but instead add a new computed result for each row. Window functions are applicable to various analysis scenarios, such as calculating running totals, rankings, and moving averages."}),"\n",(0,i.jsx)(n.p,{children:"Below is an example of using a window function to calculate the three-day moving average of sales for each store before and after a given date:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE daily_sales\n(store_id INT, sales_date DATE, sales_amount DECIMAL(10, 2))\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\nINSERT INTO daily_sales (store_id, sales_date, sales_amount) VALUES (1, '2023-01-01', 100.00), (1, '2023-01-02', 150.00), (1, '2023-01-03', 200.00), (1, '2023-01-04', 250.00), (1, '2023-01-05', 300.00), (1, '2023-01-06', 350.00), (1, '2023-01-07', 400.00), (1, '2023-01-08', 450.00), (1, '2023-01-09', 500.00), (2, '2023-01-01', 110.00), (2, '2023-01-02', 160.00), (2, '2023-01-03', 210.00), (2, '2023-01-04', 260.00), (2, '2023-01-05', 310.00), (2, '2023-01-06', 360.00), (2, '2023-01-07', 410.00), (2, '2023-01-08', 460.00), (2, '2023-01-09', 510.00);\n\nSELECT\n        store_id,\n        sales_date,\n        sales_amount,\n        AVG(sales_amount) OVER ( PARTITION BY store_id ORDER BY sales_date \n        ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING ) AS moving_avg_sales\nFROM\n        daily_sales;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The query result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+------------+--------------+------------------+\n| store_id | sales_date | sales_amount | moving_avg_sales |\n+----------+------------+--------------+------------------+\n|        1 | 2023-01-01 |       100.00 |         175.0000 |\n|        1 | 2023-01-02 |       150.00 |         200.0000 |\n|        1 | 2023-01-03 |       200.00 |         225.0000 |\n|        1 | 2023-01-04 |       250.00 |         250.0000 |\n|        1 | 2023-01-05 |       300.00 |         300.0000 |\n|        1 | 2023-01-06 |       350.00 |         350.0000 |\n|        1 | 2023-01-07 |       400.00 |         375.0000 |\n|        1 | 2023-01-08 |       450.00 |         400.0000 |\n|        1 | 2023-01-09 |       500.00 |         425.0000 |\n|        2 | 2023-01-01 |       110.00 |         185.0000 |\n|        2 | 2023-01-02 |       160.00 |         210.0000 |\n|        2 | 2023-01-03 |       210.00 |         235.0000 |\n|        2 | 2023-01-04 |       260.00 |         260.0000 |\n|        2 | 2023-01-05 |       310.00 |         310.0000 |\n|        2 | 2023-01-06 |       360.00 |         360.0000 |\n|        2 | 2023-01-07 |       410.00 |         385.0000 |\n|        2 | 2023-01-08 |       460.00 |         410.0000 |\n|        2 | 2023-01-09 |       510.00 |         435.0000 |\n+----------+------------+--------------+------------------+\n18 rows in set (0.09 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-basic-concepts",children:"Introduction to Basic Concepts"}),"\n",(0,i.jsx)(n.h3,{id:"processing-order",children:"Processing Order"}),"\n",(0,i.jsx)(n.p,{children:"The processing of queries using analytic functions can be divided into three stages."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execute all joins, WHERE, GROUP BY, and HAVING clauses."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provide the result set to the analytic functions and perform all necessary calculations."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the query ends with an ORDER BY clause, process this clause to achieve precise output sorting."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The processing order of the query is illustrated as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"processing order",src:s(748660).Z+"",width:"2560",height:"1280"})}),"\n",(0,i.jsx)(n.h3,{id:"result-set-partitioning",children:"Result Set Partitioning"}),"\n",(0,i.jsx)(n.p,{children:"Partitions are created after defining groups using the PARTITION BY clause. Analytic functions allow users to divide the query result set into groups of rows called partitions."}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(n.p,{children:'The term "partition" used in analytic functions is unrelated to the table partitioning feature. In this chapter, the term "partition" refers only to its meaning related to analytic functions.'})}),"\n",(0,i.jsx)(n.h3,{id:"window",children:"Window"}),"\n",(0,i.jsx)(n.p,{children:"For each row in a partition, you can define a sliding data window. This window determines the range of rows involved in performing calculations for the current row. A window has a starting row and an ending row, and depending on its definition, the window can slide at one or both ends. For example, for a cumulative sum function, the starting row is fixed at the first row of its partition, while the ending row slides from the start to the last row of the partition. Conversely, for a moving average, both the start and end points slide."}),"\n",(0,i.jsx)(n.p,{children:"The size of the window can be set to be as large as all rows in the partition or as small as a sliding window that only includes one row within the partition. It should be noted that when the window is near the boundaries of the partition, due to boundary restrictions, the range of calculations may be reduced, and the function only returns the computed results of the available rows."}),"\n",(0,i.jsx)(n.p,{children:'When using window functions, the current row is included in the calculation. Therefore, when processing n items, it should be specified as (n-1). For example, if you need to calculate a five-day average, the window should be specified as "rows between 4 preceding and current row," which can also be abbreviated as "rows 4 preceding."'}),"\n",(0,i.jsx)(n.h3,{id:"current-row",children:"Current Row"}),"\n",(0,i.jsx)(n.p,{children:"Each calculation performed using analytic functions is based on the current row within the partition. The current row serves as the reference point for determining the start and end of the window, as illustrated below."}),"\n",(0,i.jsx)(n.p,{children:"For instance, a window can be used to define a centered moving average calculation that includes the current row, the 6 rows before the current row, and the 6 rows after the current row. This creates a sliding window containing 13 rows."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Current Row",src:s(406961).Z+"",width:"1280",height:"640"})}),"\n",(0,i.jsx)(n.h2,{id:"sorting-function",children:"Sorting Function"}),"\n",(0,i.jsx)(n.p,{children:"In a sorting function, query results are deterministic only when the specified sorting column is unique; if the sorting column contains duplicate values, the query results may vary each time."}),"\n",(0,i.jsx)(n.h3,{id:"ntile-function",children:"NTILE Function"}),"\n",(0,i.jsx)(n.p,{children:"NTILE is a window function in SQL used to divide a query result set into a specified number of buckets (groups) and assign a bucket number to each row. This is particularly useful in data analysis and reporting, especially when data needs to be grouped and sorted."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Function Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"NTILE(num_buckets) OVER ([PARTITION BY partition_expression] ORDER BY order_expression)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"num_buckets"}),": The number of buckets into which to divide the rows."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PARTITION BY partition_expression"})," (optional): Defines how to partition the data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ORDER BY order_expression"}),": Defines how to sort the data."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Using the NTILE Function"})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose there is a table ",(0,i.jsx)(n.code,{children:"class_student_scores"})," containing students' exam scores, and you want to divide the students into 4 groups based on their scores, with the number of students in each group being as uniform as possible."]}),"\n",(0,i.jsxs)(n.p,{children:["First, create the ",(0,i.jsx)(n.code,{children:"class_student_scores"})," table and insert data:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE class_student_scores (\n    class_id INT,\n    student_id INT,\n    student_name VARCHAR(50),\n    score INT\n)distributed by hash(student_id) properties('replication_num'=1);\n\nINSERT INTO class_student_scores VALUES\n(1, 1, 'Alice', 85),\n(1, 2, 'Bob', 92),\n(1, 3, 'Charlie', 87),\n(2, 4, 'David', 78),\n(2, 5, 'Eve', 95),\n(2, 6, 'Frank', 80),\n(2, 7, 'Grace', 90),\n(2, 8, 'Hannah', 84);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, use the NTILE function to divide the students into 4 groups based on their scores:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT  \n    student_id,  \n    student_name,  \n    score,  \n    NTILE(4) OVER (ORDER BY score DESC) AS bucket  \nFROM  \n    class_student_scores;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The results are as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------------+--------------+-------+--------+\n| student_id | student_name | score | bucket |\n+------------+--------------+-------+--------+\n|          5 | Eve          |    95 |      1 |\n|          2 | Bob          |    92 |      1 |\n|          7 | Grace        |    90 |      2 |\n|          3 | Charlie      |    87 |      2 |\n|          1 | Alice        |    85 |      3 |\n|          8 | Hannah       |    84 |      3 |\n|          6 | Frank        |    80 |      4 |\n|          4 | David        |    78 |      4 |\n+------------+--------------+-------+--------+\n8 rows in set (0.12 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"NTILE(4)"})," function divides the students into 4 groups (buckets) based on their scores, with the number of students in each group being as uniform as possible."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If rows cannot be evenly distributed into buckets, some buckets may have one extra row."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NTILE"})," function works within each partition. If the ",(0,i.jsx)(n.code,{children:"PARTITION BY"})," clause is used, data within each partition will be separately assigned to buckets."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Using NTILE with PARTITION BY"})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose you want to group students by class, and then divide them into 3 groups within each class based on their scores. You can use the ",(0,i.jsx)(n.code,{children:"PARTITION BY"})," and ",(0,i.jsx)(n.code,{children:"NTILE"})," functions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT  \n    class_id,  \n    student_id,  \n    student_name,  \n    score,  \n    NTILE(3) OVER (PARTITION BY class_id ORDER BY score DESC) AS bucket  \nFROM  \n    class_student_scores;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The results are as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+------------+--------------+-------+--------+\n| class_id | student_id | student_name | score | bucket |\n+----------+------------+--------------+-------+--------+\n|        1 |          2 | Bob          |    92 |      1 |\n|        1 |          3 | Charlie      |    87 |      2 |\n|        1 |          1 | Alice        |    85 |      3 |\n|        2 |          5 | Eve          |    95 |      1 |\n|        2 |          7 | Grace        |    90 |      1 |\n|        2 |          8 | Hannah       |    84 |      2 |\n|        2 |          6 | Frank        |    80 |      2 |\n|        2 |          4 | David        |    78 |      3 |\n+----------+------------+--------------+-------+--------+\n8 rows in set (0.05 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, students are partitioned by class, and then within each class, they are divided into 3 groups based on their scores. The number of students in each group is as uniform as possible."}),"\n",(0,i.jsx)(n.h2,{id:"analytic-functions",children:"Analytic Functions"}),"\n",(0,i.jsx)(n.h3,{id:"using-the-analytic-function-sum-to-calculate-cumulative-values",children:"Using the Analytic Function SUM to Calculate Cumulative Values"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n        i_category,\n        year(d_date),\n        month(d_date),\n        sum(ss_net_paid) as total_sales,\n        sum(sum(ss_net_paid)) over(partition by i_category order by year(d_date),month(d_date) ROWS UNBOUNDED PRECEDING) cum_sales\nFROM \n        store_sales,\n        date_dim d1,\n        item\nWHERE \n        d1.d_date_sk = ss_sold_date_sk\n        and i_item_sk = ss_item_sk\n        and year(d_date) =2000\n        and i_category in ('Books','Electronics')\nGROUP BY         \n        i_category,\n        year(d_date),\n        month(d_date)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The query result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+-------------+--------------+---------------+-------------+-------------+\n| i_category  | year(d_date) | month(d_date) | total_sales | cum_sales   |\n+-------------+--------------+---------------+-------------+-------------+\n| Books       |         2000 |             1 |  5348482.88 |  5348482.88 |\n| Books       |         2000 |             2 |  4353162.03 |  9701644.91 |\n| Books       |         2000 |             3 |  4466958.01 | 14168602.92 |\n| Books       |         2000 |             4 |  4495802.19 | 18664405.11 |\n| Books       |         2000 |             5 |  4589913.47 | 23254318.58 |\n| Books       |         2000 |             6 |  4384384.00 | 27638702.58 |\n| Books       |         2000 |             7 |  4488018.76 | 32126721.34 |\n| Books       |         2000 |             8 |  9909227.94 | 42035949.28 |\n| Books       |         2000 |             9 | 10366110.30 | 52402059.58 |\n| Books       |         2000 |            10 | 10445320.76 | 62847380.34 |\n| Books       |         2000 |            11 | 15246901.52 | 78094281.86 |\n| Books       |         2000 |            12 | 15526630.11 | 93620911.97 |\n| Electronics |         2000 |             1 |  5534568.17 |  5534568.17 |\n| Electronics |         2000 |             2 |  4472655.10 | 10007223.27 |\n| Electronics |         2000 |             3 |  4316942.60 | 14324165.87 |\n| Electronics |         2000 |             4 |  4211523.06 | 18535688.93 |\n| Electronics |         2000 |             5 |  4723661.00 | 23259349.93 |\n| Electronics |         2000 |             6 |  4127773.06 | 27387122.99 |\n| Electronics |         2000 |             7 |  4286523.05 | 31673646.04 |\n| Electronics |         2000 |             8 | 10004890.96 | 41678537.00 |\n| Electronics |         2000 |             9 | 10143665.77 | 51822202.77 |\n| Electronics |         2000 |            10 | 10312020.35 | 62134223.12 |\n| Electronics |         2000 |            11 | 14696000.54 | 76830223.66 |\n| Electronics |         2000 |            12 | 15344441.52 | 92174665.18 |\n+-------------+--------------+---------------+-------------+-------------+\n24 rows in set (0.13 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, the analytic function SUM defines a window for each row, starting from the beginning of the partition (UNBOUNDED PRECEDING) and ending at the current row by default. In this case, nested use of SUM is required because we need to perform SUM on the result that is itself a SUM. Nested aggregation is frequently used in analytic aggregation functions."}),"\n",(0,i.jsx)(n.h3,{id:"using-the-analytic-function-avg-to-calculate-moving-averages",children:"Using the Analytic Function AVG to Calculate Moving Averages"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n        i_category,\n        year(d_date),\n        month(d_date),\n        sum(ss_net_paid) as total_sales,\n        avg(sum(ss_net_paid)) over(order by year(d_date),month(d_date) ROWS 2 PRECEDING) avg\nFROM \n        store_sales,\n        date_dim d1,\n        item\nWHERE \n        d1.d_date_sk = ss_sold_date_sk\n        and i_item_sk = ss_item_sk\n        and year(d_date) =2000\n        and i_category='Books'\nGROUP BY         \n        i_category,\n        year(d_date),\n        month(d_date)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The query result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------------+--------------+---------------+-------------+---------------+\n| i_category | year(d_date) | month(d_date) | total_sales | avg           |\n+------------+--------------+---------------+-------------+---------------+\n| Books      |         2000 |             1 |  5348482.88 |  5348482.8800 |\n| Books      |         2000 |             2 |  4353162.03 |  4850822.4550 |\n| Books      |         2000 |             3 |  4466958.01 |  4722867.6400 |\n| Books      |         2000 |             4 |  4495802.19 |  4438640.7433 |\n| Books      |         2000 |             5 |  4589913.47 |  4517557.8900 |\n| Books      |         2000 |             6 |  4384384.00 |  4490033.2200 |\n| Books      |         2000 |             7 |  4488018.76 |  4487438.7433 |\n| Books      |         2000 |             8 |  9909227.94 |  6260543.5666 |\n| Books      |         2000 |             9 | 10366110.30 |  8254452.3333 |\n| Books      |         2000 |            10 | 10445320.76 | 10240219.6666 |\n| Books      |         2000 |            11 | 15246901.52 | 12019444.1933 |\n| Books      |         2000 |            12 | 15526630.11 | 13739617.4633 |\n+------------+--------------+---------------+-------------+---------------+\n12 rows in set (0.13 sec)\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(n.p,{children:"In the output data, the AVG column for the first two rows does not calculate a three-day moving average because there are not enough preceding rows for the boundary data (the number of rows specified in SQL is 3)."})}),"\n",(0,i.jsx)(n.p,{children:'Additionally, it is possible to calculate window aggregate functions centered on the current row. For instance, this example calculates the centered moving average of monthly sales for products in the "Books" category in the year 2000, specifically averaging the total sales of the month before the current row, the current row, and the month after the current row.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT  \n        i_category,  \n        YEAR(d_date) AS year,  \n        MONTH(d_date) AS month,  \n        SUM(ss_net_paid) AS total_sales,  \n        AVG(SUM(ss_net_paid)) OVER (ORDER BY YEAR(d_date), MONTH(d_date) ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS avg_sales  \nFROM   \n        store_sales,  \n        date_dim d1,  \n        item  \nWHERE   \n        d1.d_date_sk = ss_sold_date_sk  \n        AND i_item_sk = ss_item_sk  \n        AND YEAR(d_date) = 2000  \n        AND i_category = 'Books'  \nGROUP BY           \n        i_category,  \n        YEAR(d_date),  \n        MONTH(d_date)\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(n.p,{children:"The centered moving averages for the starting and ending rows in the output data are calculated based on only two days because there are not enough rows before and after the boundary data."})}),"\n",(0,i.jsx)(n.h2,{id:"reporting-function",children:"Reporting Function"}),"\n",(0,i.jsx)(n.p,{children:'A reporting function refers to a scenario where the window range for each row covers the entire Partition. The primary advantage of reporting functions is their ability to pass data multiple times within a single query block, thereby enhancing query performance. For example, queries such as "For each year, find the product category with the highest sales" do not require JOIN operations when using reporting functions. An example is provided below:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT year, category, total_sum FROM (  \n    SELECT  \n        YEAR(d_date) AS year,  \n        i_category AS category,  \n        SUM(ss_net_paid) AS total_sum,  \n        MAX(SUM(ss_net_paid)) OVER (PARTITION BY YEAR(d_date)) AS max_sales  \n    FROM  \n        store_sales,  \n        date_dim d1,  \n        item  \n    WHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND i_item_sk = ss_item_sk  \n        AND YEAR(d_date) IN (1998, 1999)  \n    GROUP BY  \n        YEAR(d_date), i_category   \n) t  \nWHERE total_sum = max_sales;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The inner query result for reporting ",(0,i.jsx)(n.code,{children:"MAX(SUM(ss_net_paid))"})," is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT year, category, total_sum FROM (  \n    SELECT  \n        YEAR(d_date) AS year,  \n        i_category AS category,  \n        SUM(ss_net_paid) AS total_sum,  \n        MAX(SUM(ss_net_paid)) OVER (PARTITION BY YEAR(d_date)) AS max_sales  \n    FROM  \n        store_sales,  \n        date_dim d1,  \n        item  \n    WHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND i_item_sk = ss_item_sk  \n        AND YEAR(d_date) IN (1998, 1999)  \n    GROUP BY  \n        YEAR(d_date), i_category   \n) t  \nWHERE total_sum = max_sales;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The complete query result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------+-------------+-------------+  \n| year | category    | total_sum   |  \n+------+-------------+-------------+  \n| 1998 | Electronics | 91723676.27 |  \n| 1999 | Electronics | 90310850.54 |  \n+------+-------------+-------------+  \n2 rows in set (0.12 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:'You can combine reporting aggregation with nested queries to solve some complex problems, such as finding the best-selling products within important product subcategories. For example, to "Find subcategories where product sales account for more than 20% of total sales in their product category, and select the top five products from these subcategories," the query statement is as follows:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT i_category AS categ, i_class AS sub_categ, i_item_id   \nFROM  \n    (  \n    SELECT   \n        i_item_id, i_class, i_category, SUM(ss_net_paid) AS sales,  \n        SUM(SUM(ss_net_paid)) OVER (PARTITION BY i_category) AS cat_sales,  \n        SUM(SUM(ss_net_paid)) OVER (PARTITION BY i_class) AS sub_cat_sales,  \n        RANK() OVER (PARTITION BY i_class ORDER BY SUM(ss_net_paid)) AS rank_in_line  \n    FROM   \n        store_sales,  \n        item  \n    WHERE  \n        i_item_sk = ss_item_sk  \n    GROUP BY i_class, i_category, i_item_id  \n    ) t  \nWHERE sub_cat_sales > 0.2 * cat_sales AND rank_in_line <= 5;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"lag--lead",children:"LAG / LEAD"}),"\n",(0,i.jsx)(n.p,{children:"The LAG and LEAD functions are suitable for comparisons between values. Both functions can access multiple rows in a table simultaneously without requiring self-joins, thereby enhancing the speed of query processing. Specifically, the LAG function provides access to a row at a given offset before the current row, while the LEAD function provides access to a row at a given offset after the current row."}),"\n",(0,i.jsx)(n.p,{children:"Below is an example of an SQL query using the LAG function. This query aims to select the total sales for each product category in specific years (1999, 2000, 2001, 2002), the total sales of the previous year, and the difference between them:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select year, category, total_sales, before_year_sales, total_sales - before_year_sales from\n(\nselect\n        sum(ss_net_paid) as total_sales,\n        year(d_date) year,\n        i_category category,\n        lag(sum(ss_net_paid), 1,0) over(PARTITION BY i_category ORDER BY YEAR(d_date)) AS before_year_sales\nfrom\n        store_sales,\n        date_dim d1,\n        item\nwhere\n        d1.d_date_sk = ss_sold_date_sk\n        and i_item_sk = ss_item_sk\nGROUP BY \n        YEAR(d_date), i_category\n) t\nwhere year in (1999, 2000, 2001, 2002)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The query results are as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------+-------------+-------------+-------------------+-----------------------------------+\n| year | category    | total_sales | before_year_sales | (total_sales - before_year_sales) |\n+------+-------------+-------------+-------------------+-----------------------------------+\n| 1999 | Books       | 88993351.11 |       91307909.84 |                       -2314558.73 |\n| 2000 | Books       | 93620911.97 |       88993351.11 |                        4627560.86 |\n| 2001 | Books       | 90640097.99 |       93620911.97 |                       -2980813.98 |\n| 2002 | Books       | 89585515.90 |       90640097.99 |                       -1054582.09 |\n| 1999 | Electronics | 90310850.54 |       91723676.27 |                       -1412825.73 |\n| 2000 | Electronics | 92174665.18 |       90310850.54 |                        1863814.64 |\n| 2001 | Electronics | 92598527.85 |       92174665.18 |                         423862.67 |\n| 2002 | Electronics | 94303831.84 |       92598527.85 |                        1705303.99 |\n+------+-------------+-------------+-------------------+-----------------------------------+\n8 rows in set (0.16 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"unique-ordering-for-analytic-function-data",children:"Unique Ordering for Analytic Function Data"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Issue of Inconsistent Return Results"})}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ORDER BY"})," clause of a window function fails to produce a unique ordering of the data, such as when the ",(0,i.jsx)(n.code,{children:"ORDER BY"})," expression results in duplicate values, the order of the rows becomes indeterminate. This means that the return order of these rows may vary across multiple query executions, leading to inconsistent results from the window function."]}),"\n",(0,i.jsxs)(n.p,{children:["The following example illustrates how the query returns different results on successive runs. The inconsistency arises primarily because ",(0,i.jsx)(n.code,{children:"ORDER BY dateid"})," does not provide a unique ordering for the ",(0,i.jsx)(n.code,{children:"SUM"})," window function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test_window_order \n    (item_id int,\n    date_time date,\n    sales double)\ndistributed BY hash(item_id)\nproperties(\"replication_num\" = 1);\n\nINSERT INTO test_window_order VALUES\n(1, '2024-07-01', 100),\n(2, '2024-07-01', 100),\n(3, '2024-07-01', 140);\n\nSELECT\n    item_id, date_time, sales,\n    sum(sales) OVER (ORDER BY date_time ROWS BETWEEN \n        UNBOUNDED PRECEDING AND CURRENT ROW) sum\nFROM\n    test_window_order;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Due to duplicate values in the sorting column ",(0,i.jsx)(n.code,{children:"date_time"}),", the following two query results may be observed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+---------+------------+-------+------+\n| item_id | date_time  | sales | sum  |\n+---------+------------+-------+------+\n|       1 | 2024-07-01 |   100 |  100 |\n|       3 | 2024-07-01 |   140 |  240 |\n|       2 | 2024-07-01 |   100 |  340 |\n+---------+------------+-------+------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Solution"})}),"\n",(0,i.jsxs)(n.p,{children:["To address this issue, you can add a unique value column, such as ",(0,i.jsx)(n.code,{children:"item_id"}),", to the ",(0,i.jsx)(n.code,{children:"ORDER BY"})," clause to ensure the uniqueness of the ordering."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n        item_id,\n        date_time,\n        sales,\n        sum(sales) OVER (\n        ORDER BY item_id,\n        date_time ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) sum\nFROM\n        test_window_order;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This results in a consistent query output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+---------+------------+-------+------+\n| item_id | date_time  | sales | sum  |\n+---------+------------+-------+------+\n|       1 | 2024-07-01 |   100 |  100 |\n|       2 | 2024-07-01 |   100 |  200 |\n|       3 | 2024-07-01 |   140 |  340 |\n+---------+------------+-------+------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on analytic functions, refer to the Oracle official documentation  ",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/dwhsg/sql-analysis-reporting-data-warehouses.html#GUID-20EFBF1E-F79D-4E4A-906C-6E496EECA684",children:"SQL for Analysis and Reporting"})]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.p,{children:"The table creation statement used in the example is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE IF NOT EXISTS doc_tpcds;\nUSE doc_tpcds;\n\nCREATE TABLE IF NOT EXISTS item (\n    i_item_sk bigint not null,\n    i_item_id char(16) not null,\n    i_rec_start_date date,\n    i_rec_end_date date,\n    i_item_desc varchar(200),\n    i_current_price decimal(7,2),\n    i_wholesale_cost decimal(7,2),\n    i_brand_id integer,\n    i_brand char(50),\n    i_class_id integer,\n    i_class char(50),\n    i_category_id integer,\n    i_category char(50),\n    i_manufact_id integer,\n    i_manufact char(50),\n    i_size char(20),\n    i_formulation char(20),\n    i_color char(20),\n    i_units char(10),\n    i_container char(10),\n    i_manager_id integer,\n    i_product_name char(50)\n)\nDUPLICATE KEY(i_item_sk)\nDISTRIBUTED BY HASH(i_item_sk) BUCKETS 12\nPROPERTIES (\n  "replication_num" = "1"\n);\n\nCREATE TABLE IF NOT EXISTS store_sales (\n    ss_item_sk bigint not null,\n    ss_ticket_number bigint not null,\n    ss_sold_date_sk bigint,\n    ss_sold_time_sk bigint,\n    ss_customer_sk bigint,\n    ss_cdemo_sk bigint,\n    ss_hdemo_sk bigint,\n    ss_addr_sk bigint,\n    ss_store_sk bigint,\n    ss_promo_sk bigint,\n    ss_quantity integer,\n    ss_wholesale_cost decimal(7,2),\n    ss_list_price decimal(7,2),\n    ss_sales_price decimal(7,2),\n    ss_ext_discount_amt decimal(7,2),\n    ss_ext_sales_price decimal(7,2),\n    ss_ext_wholesale_cost decimal(7,2),\n    ss_ext_list_price decimal(7,2),\n    ss_ext_tax decimal(7,2),\n    ss_coupon_amt decimal(7,2),\n    ss_net_paid decimal(7,2),\n    ss_net_paid_inc_tax decimal(7,2),\n    ss_net_profit decimal(7,2)\n)\nDUPLICATE KEY(ss_item_sk, ss_ticket_number)\nDISTRIBUTED BY HASH(ss_item_sk, ss_ticket_number) BUCKETS 32\nPROPERTIES (\n  "replication_num" = "1"\n);\n\nCREATE TABLE IF NOT EXISTS date_dim (\n    d_date_sk bigint not null,\n    d_date_id char(16) not null,\n    d_date date,\n    d_month_seq integer,\n    d_week_seq integer,\n    d_quarter_seq integer,\n    d_year integer,\n    d_dow integer,\n    d_moy integer,\n    d_dom integer,\n    d_qoy integer,\n    d_fy_year integer,\n    d_fy_quarter_seq integer,\n    d_fy_week_seq integer,\n    d_day_name char(9),\n    d_quarter_name char(6),\n    d_holiday char(1),\n    d_weekend char(1),\n    d_following_holiday char(1),\n    d_first_dom integer,\n    d_last_dom integer,\n    d_same_day_ly integer,\n    d_same_day_lq integer,\n    d_current_day char(1),\n    d_current_week char(1),\n    d_current_month char(1),\n    d_current_quarter char(1),\n    d_current_year char(1)\n)\nDUPLICATE KEY(d_date_sk)\nDISTRIBUTED BY HASH(d_date_sk) BUCKETS 12\nPROPERTIES (\n  "replication_num" = "1"\n);\n\nCREATE TABLE IF NOT EXISTS customer_address (\n    ca_address_sk bigint not null,\n    ca_address_id char(16) not null,\n    ca_street_number char(10),\n    ca_street_name varchar(60),\n    ca_street_type char(15),\n    ca_suite_number char(10),\n    ca_city varchar(60),\n    ca_county varchar(30),\n    ca_state char(2),\n    ca_zip char(10),\n    ca_country varchar(20),\n    ca_gmt_offset decimal(5,2),\n    ca_location_type char(20)\n)\nDUPLICATE KEY(ca_address_sk)\nDISTRIBUTED BY HASH(ca_address_sk) BUCKETS 12\nPROPERTIES (\n  "replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Execute the following command on the terminal to download the data to the local computer and load the data into the table using the Stream Load method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'curl -L https://cdn.selectdb.com/static/doc_ddl_dir_d27a752a7b.tar -o - | tar -Jxf -\n\ncurl --location-trusted \\\n-u "root:" \\\n-H "column_separator:|" \\\n-H "columns: i_item_sk, i_item_id, i_rec_start_date, i_rec_end_date, i_item_desc, i_current_price, i_wholesale_cost, i_brand_id, i_brand, i_class_id, i_class, i_category_id, i_category, i_manufact_id, i_manufact, i_size, i_formulation, i_color, i_units, i_container, i_manager_id, i_product_name" \\\n-T "doc_ddl_dir/item_1_10.dat" \\\nhttp://127.0.0.1:8030/api/doc_tpcds/item/_stream_load\n\ncurl --location-trusted \\\n-u "root:" \\\n-H "column_separator:|" \\\n-H "columns: d_date_sk, d_date_id, d_date, d_month_seq, d_week_seq, d_quarter_seq, d_year, d_dow, d_moy, d_dom, d_qoy, d_fy_year, d_fy_quarter_seq, d_fy_week_seq, d_day_name, d_quarter_name, d_holiday, d_weekend, d_following_holiday, d_first_dom, d_last_dom, d_same_day_ly, d_same_day_lq, d_current_day, d_current_week, d_current_month, d_current_quarter, d_current_year" \\\n-T "doc_ddl_dir/date_dim_1_10.dat" \\\nhttp://127.0.0.1:8030/api/doc_tpcds/date_dim/_stream_load\n\ncurl --location-trusted \\\n-u "root:" \\\n-H "column_separator:|" \\\n-H "columns: ss_sold_date_sk, ss_sold_time_sk, ss_item_sk, ss_customer_sk, ss_cdemo_sk, ss_hdemo_sk, ss_addr_sk, ss_store_sk, ss_promo_sk, ss_ticket_number, ss_quantity, ss_wholesale_cost, ss_list_price, ss_sales_price, ss_ext_discount_amt, ss_ext_sales_price, ss_ext_wholesale_cost, ss_ext_list_price, ss_ext_tax, ss_coupon_amt, ss_net_paid, ss_net_paid_inc_tax, ss_net_profit" \\\n-T "doc_ddl_dir/store_sales.csv" \\\nhttp://127.0.0.1:8030/api/doc_tpcds/store_sales/_stream_load\n\ncurl --location-trusted \\\n-u "root:" \\\n-H "column_separator:|" \\\n-H "ca_address_sk, ca_address_id, ca_street_number, ca_street_name, ca_street_type, ca_suite_number, ca_city, ca_county, ca_state, ca_zip, ca_country, ca_gmt_offset, ca_location_type" \\\n-T "doc_ddl_dir/customer_address_1_10.dat" \\\nhttp://127.0.0.1:8030/api/doc_tpcds/customer_address/_stream_load\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The data files ",(0,i.jsx)(n.code,{children:"item_1_10.dat"}),", ",(0,i.jsx)(n.code,{children:"date-dim_1_10.dat"}),", ",(0,i.jsx)(n.code,{children:"store_stales.csv"}),", and ",(0,i.jsx)(n.code,{children:"customer-address_1_10.dat"})," can be downloaded by clicking on the ",(0,i.jsx)(n.a,{href:"https://cdn.selectdb.com/static/doc_ddl_dir_d27a752a7b.tar",children:"link"}),"."]})]})}function _(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},748660:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/window-function-order-56d1969ee6d25b67878966313d4482c5.png"},406961:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/window-function-rows-0505d7225ee230aeac864b0754b88270.jpg"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);