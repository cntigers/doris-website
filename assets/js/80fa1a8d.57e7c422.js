"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["671962"],{713188:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"data-operate/scheduler/job-scheduler","title":"Job Scheduler","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/scheduler/job-scheduler.md","sourceDirName":"data-operate/scheduler","slug":"/data-operate/scheduler/job-scheduler","permalink":"/docs/data-operate/scheduler/job-scheduler","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Job Scheduler","language":"en"}}'),t=s("785893"),r=s("250065");let a={title:"Job Scheduler",language:"en"},l=void 0,d={},c=[{value:"Background",id:"background",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"Features of Doris Job Scheduler",id:"features-of-doris-job-scheduler",level:2},{value:"Syntax Overview",id:"syntax-overview",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Automated Data Synchronization with Job Scheduler and Catalog",id:"automated-data-synchronization-with-job-scheduler-and-catalog",level:2},{value:"Design and Implementation",id:"design-and-implementation",level:2},{value:"Future Plans",id:"future-plans",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"In the context of increasingly refined data management needs, scheduled tasks play a crucial role. They are typically applied in the following scenarios:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Regular Data Updates:"})," Periodic data imports and ETL operations reduce manual intervention, improving efficiency and accuracy in data processing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Catalog Integration:"})," Regular synchronization of external data sources ensures efficient and accurate integration of multi-source data into the target system, meeting complex business analysis requirements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Cleanup:"})," Periodic cleaning of expired/invalid data frees up storage space and prevents performance issues caused by excessive outdated data."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In earlier versions of Apache Doris, meeting the above requirements often depended on external scheduling systems, such as business code-based scheduling or third-party scheduling tools and distributed scheduling platforms. However, these external systems might not meet Doris's flexible scheduling strategies and resource management needs. Additionally, failures in external scheduling systems can increase business risks and require extra maintenance time and effort."}),"\n",(0,t.jsx)(n.h2,{id:"job-scheduler",children:"Job Scheduler"}),"\n",(0,t.jsx)(n.p,{children:"To address these issues, Apache Doris introduced the Job Scheduler feature in version 2.1, enabling autonomous task scheduling with precision down to the second."}),"\n",(0,t.jsx)(n.p,{children:"This feature ensures data import completeness and consistency while allowing users to flexibly and conveniently adjust scheduling strategies. Reducing reliance on external systems also decreases system failure risks and maintenance costs, providing a more unified and reliable user experience."}),"\n",(0,t.jsx)(n.h2,{id:"features-of-doris-job-scheduler",children:"Features of Doris Job Scheduler"}),"\n",(0,t.jsx)(n.p,{children:"Doris Job Scheduler is a task management system that runs based on preset schedules, triggering predefined operations at specific times or intervals for automated task execution. Key features include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Efficient Scheduling:"})," Tasks and events can be scheduled within specified intervals, ensuring efficient data processing. The time wheel algorithm ensures precise second-level triggers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexible Scheduling:"})," Multiple scheduling options are available, such as scheduling by minutes, hours, days, or weeks. It supports one-time scheduling and recurring (cyclic) event scheduling, with customizable start and end times for cyclic schedules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Event Pool and High-Performance Processing Queue:"})," Implemented using Disruptor to achieve a high-performance producer-consumer model, minimizing task execution overload."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Traceable Scheduling Records:"})," Stores the latest task execution records (configurable), which can be viewed with simple commands to ensure traceability."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"High Availability:"})," Leveraging Doris\u2019s high-availability mechanisms, Job Scheduler can easily achieve self-recovery and high availability."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Related Documentation:"})," ",(0,t.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/job/CREATE-JOB",children:"CREATE-JOB"})]}),"\n",(0,t.jsx)(n.h2,{id:"syntax-overview",children:"Syntax Overview"}),"\n",(0,t.jsx)(n.p,{children:"A valid Job statement must include the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CREATE JOB:"})," Requires a job name, uniquely identifying the event in the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ON SCHEDULE Clause:"})," Specifies the job type, trigger time, and frequency.\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AT timestamp:"})," For one-time events. Executes the job once at the specified date and time. ",(0,t.jsx)(n.strong,{children:"AT current_timestamp"})," specifies the current date and time. The job runs immediately upon creation and can be used for asynchronous task creation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EVERY interval:"})," For periodic jobs, specifying the execution frequency. Keywords include ",(0,t.jsx)(n.strong,{children:"WEEK"}),", ",(0,t.jsx)(n.strong,{children:"DAY"}),", ",(0,t.jsx)(n.strong,{children:"HOUR"}),", and ",(0,t.jsx)(n.strong,{children:"MINUTE"}),".\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interval:"})," Defines the execution frequency, e.g., ",(0,t.jsx)(n.strong,{children:"1 DAY"})," for daily, ",(0,t.jsx)(n.strong,{children:"1 HOUR"})," for hourly, ",(0,t.jsx)(n.strong,{children:"1 MINUTE"})," for every minute, ",(0,t.jsx)(n.strong,{children:"1 WEEK"})," for weekly."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"STARTS Clause (optional):"})," Specifies the start time for the repeating interval. ",(0,t.jsx)(n.strong,{children:"CURRENT_TIMESTAMP"})," sets the current date and time. The job runs immediately upon creation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ENDS Clause (optional):"})," Specifies the end time for the job event."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DO Clause:"})," Specifies the operation to execute when the job triggers, currently supporting ",(0,t.jsx)(n.strong,{children:"INSERT"})," statements."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE\nJOB\n  job_name\n  ON SCHEDULE schedule\n  [COMMENT 'string']\n  DO execute_sql;\n\nschedule: {\n    AT timestamp\n    | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,t.jsx)(n.p,{children:'This creates a job named "my_job" that executes every minute, importing data from db2.tbl2 into db1.tbl1.'}),"\n",(0,t.jsx)(n.p,{children:"Creating a One-Time Job:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,t.jsx)(n.p,{children:'This creates a job named "my_job" that executes once at 2025-01-01 00:00:00, importing data from db2.tbl2 into db1.tbl1.'}),"\n",(0,t.jsx)(n.p,{children:"Creating a Periodic Job Without End Time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"\nCREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >= days_add(now(), -1);\n"})}),"\n",(0,t.jsx)(n.p,{children:'This creates a job named "my_job" that starts on 2025-01-01 00:00:00 and executes every day, importing data from db2.tbl2 into db1.tbl1.'}),"\n",(0,t.jsx)(n.p,{children:"Creating a Periodic Job With End Time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >= days_add(now(), -1);\n"})}),"\n",(0,t.jsx)(n.p,{children:'This creates a job named "my_job" that starts on 2025-01-01 00:00:00, executes every day, and ends on 2026-01-01 00:10:00, importing data from db2.tbl2 into db1.tbl1.'}),"\n",(0,t.jsx)(n.p,{children:"Using Job for Asynchronous Execution:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Since jobs in Doris are created as synchronous tasks but executed asynchronously, this example sets the job as a one-time task with the start time as the current time, suitable for asynchronous tasks like insert into select."}),"\n",(0,t.jsx)(n.h2,{id:"automated-data-synchronization-with-job-scheduler-and-catalog",children:"Automated Data Synchronization with Job Scheduler and Catalog"}),"\n",(0,t.jsx)(n.p,{children:"For instance, in an e-commerce scenario, users often need to extract business data from MySQL and synchronize it to Doris for data analysis, supporting precise marketing activities. The Job Scheduler, combined with Multi Catalog capabilities, can efficiently accomplish periodic data synchronization across data sources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS user.activity (\n     `user_id` INT NOT NULL,\n     `date` DATE NOT NULL,\n     `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `last_visit_date` DATETIME DEFAULT '1970-01-01 00:00:00',\n    `cost` BIGINT DEFAULT '0',\n    `max_dwell_time` INT DEFAULT '0',\n    `min_dwell_time` INT DEFAULT '99999'\n);\nINSERT INTO user.activity VALUES\n    (10000, '2017-10-01', 'Beijing', 20, 0, '2017-10-01 06:00:00', 20, 10, 10),\n    (10000, '2017-10-01', 'Beijing', 20, 0, '2017-10-01 07:00:00', 15, 2, 2),\n    (10001, '2017-10-01', 'Beijing', 30, 1, '2017-10-01 17:05:00', 2, 22, 22),\n    (10002, '2017-10-02', 'Shanghai', 20, 1, '2017-10-02 12:59:00', 200, 5, 5),\n    (10003, '2017-10-02', 'Guangzhou', 32, 0, '2017-10-02 11:20:00', 30, 11, 11),\n    (10004, '2017-10-01', 'Shenzhen', 35, 0, '2017-10-01 10:00:00', 100, 3, 3),\n    (10004, '2017-10-03', 'Shenzhen', 35, 0, '2017-10-03 10:20:00', 11, 6, 6);\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"user_id"}),(0,t.jsx)(n.th,{children:"date"}),(0,t.jsx)(n.th,{children:"city"}),(0,t.jsx)(n.th,{children:"age"}),(0,t.jsx)(n.th,{children:"sex"}),(0,t.jsx)(n.th,{children:"last_visit_date"}),(0,t.jsx)(n.th,{children:"cost"}),(0,t.jsx)(n.th,{children:"max_dwell_time"}),(0,t.jsx)(n.th,{children:"min_dwell_time"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10000"}),(0,t.jsx)(n.td,{children:"2017-10-01"}),(0,t.jsx)(n.td,{children:"Beijing"}),(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"2017-10-01 06:00"}),(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10000"}),(0,t.jsx)(n.td,{children:"2017-10-01"}),(0,t.jsx)(n.td,{children:"Beijing"}),(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"2017-10-01 07:00"}),(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10001"}),(0,t.jsx)(n.td,{children:"2017-10-01"}),(0,t.jsx)(n.td,{children:"Beijing"}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2017-10-01 17:05:45"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"22"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10002"}),(0,t.jsx)(n.td,{children:"2017-10-02"}),(0,t.jsx)(n.td,{children:"Shanghai"}),(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2017-10-02 12:59:12"}),(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10003"}),(0,t.jsx)(n.td,{children:"2017-10-02"}),(0,t.jsx)(n.td,{children:"Guangzhou"}),(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"2017-10-02 11:20:00"}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10004"}),(0,t.jsx)(n.td,{children:"2017-10-01"}),(0,t.jsx)(n.td,{children:"Shenzhen"}),(0,t.jsx)(n.td,{children:"35"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"2017-10-01 10:00:15"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10004"}),(0,t.jsx)(n.td,{children:"2017-10-03"}),(0,t.jsx)(n.td,{children:"Shenzhen"}),(0,t.jsx)(n.td,{children:"35"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"2017-10-03 10:20:22"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Example Workflow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Creating a Doris Table:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS user_activity (\n  `user_id` LARGEINT NOT NULL COMMENT "User ID",\n  `date` DATE NOT NULL COMMENT "Data import date",\n  `city` VARCHAR(20) COMMENT "User city",\n  `age` SMALLINT COMMENT "User age",\n  `sex` TINYINT COMMENT "User gender",\n  `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "Last visit date",\n  `cost` BIGINT SUM DEFAULT "0" COMMENT "Total spending",\n  `max_dwell_time` INT MAX DEFAULT "0" COMMENT "Max dwell time",\n  `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "Min dwell time"\n) AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Creating a Catalog for the MySQL Database:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG activity PROPERTIES (\n  "type"="jdbc",\n  "user"="root",\n  "password"="123456",\n  "jdbc_url" = "jdbc:mysql://127.0.0.1:3306/user?useSSL=false",\n  "driver_url" = "mysql-connector-java-5.1.49.jar",\n  "driver_class" = "com.mysql.jdbc.Driver"\n);\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Importing Data from MySQL to Doris:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One-Time Scheduling:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"\nCREATE JOB one_time_load_job ON SCHEDULE AT '2024-08-10 03:00:00' DO INSERT INTO user_activity SELECT * FROM activity.user_activity;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Periodic Scheduling:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE JOB schedule_load ON SCHEDULE EVERY 1 DAY DO INSERT INTO user_activity SELECT * FROM activity.user_activity WHERE last_visit_date >= days_add(now(), -1);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"design-and-implementation",children:"Design and Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Efficient scheduling often entails substantial resource consumption, especially with high-precision scheduling. Traditional implementations using Java's built-in scheduling capabilities or other libraries may have significant issues with precision and memory usage. To ensure performance while minimizing resource usage, the TimingWheel algorithm is combined with Disruptor to achieve second-level task scheduling.\nTechnical Details"}),"\n",(0,t.jsx)(n.p,{children:"Using Netty\u2019s HashedWheelTimer to implement the time wheel algorithm, the Job Manager periodically (default every ten minutes) schedules future events into the time wheel. Disruptor constructs a single-producer, multi-consumer model to ensure efficient task triggering without excessive resource usage. The time wheel only triggers tasks and does not execute them directly. For immediate tasks, they are submitted to the respective execution thread pool."}),"\n",(0,t.jsx)(n.p,{children:"For single-execution events, the event definition is deleted after scheduling. For periodic events, the time wheel\u2019s system events periodically pull the next cycle's execution tasks. This avoids clustering tasks in one bucket, reducing meaningless traversal and improving processing efficiency. For transactional tasks, the Job Scheduler ensures task execution results align with expectations through strong association and callback mechanisms, maintaining data integrity and consistency.\nConclusion"}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"Doris Job Scheduler is a powerful and flexible task scheduling tool essential for data processing. Beyond common scenarios like data lake analysis and internal ETL, it plays a crucial role in implementing asynchronous materialized views. Asynchronous materialized views store precomputed result sets, and their update frequency is closely tied to source table changes. Frequent updates to source table data necess"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);