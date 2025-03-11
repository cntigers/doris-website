"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["266080"],{137483:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"data-operate/export/export-manual","title":"Exporting Overview","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/data-operate/export/export-manual.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/export-manual","permalink":"/docs/2.0/data-operate/export/export-manual","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Exporting Overview","language":"en"},"sidebar":"docs","previous":{"title":"Temporary Partition","permalink":"/docs/2.0/data-operate/delete/table-temp-partition"},"next":{"title":"Exporting Query Result","permalink":"/docs/2.0/data-operate/export/outfile"}}'),r=t("785893"),i=t("250065");let l={title:"Exporting Overview",language:"en"},o=void 0,a={},c=[{value:"Principles",id:"principles",level:2},{value:"Start Export",id:"start-export",level:2},{value:"Export to HDFS",id:"export-to-hdfs",level:3},{value:"Export to Object Storage (Supports S3 Protocol)",id:"export-to-object-storage-supports-s3-protocol",level:3},{value:"View Export Status",id:"view-export-status",level:3},{value:"Cancel Export Job",id:"cancel-export-job",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Concurrent Export",id:"concurrent-export",level:3},{value:"exec_mem_limit",id:"exec_mem_limit",level:3},{value:"Notes",id:"notes",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2},{value:"FE",id:"fe",level:3},{value:"More Help",id:"more-help",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Export"})," is a feature provided by Doris that allows for the asynchronous export of data. This feature allows the user to export the data of specified tables or partitions in a specified file format through the Broker process or S3 protocol/ HDFS protocol, to remote storage such as object storage or HDFS."]}),"\n",(0,r.jsxs)(n.p,{children:["Currently, ",(0,r.jsx)(n.code,{children:"EXPORT"})," supports exporting Doris local tables / views / external tables and supports exporting to file formats including parquet, orc, csv, csv_with_names, and csv_with_names_and_types."]}),"\n",(0,r.jsx)(n.p,{children:"This document mainly introduces the basic principles, usage, best practices and precautions of Export."}),"\n",(0,r.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,r.jsxs)(n.p,{children:["After a user submits an ",(0,r.jsx)(n.code,{children:"Export Job"}),", Doris will calculate all the Tablets involved in this job. Then, based on the ",(0,r.jsx)(n.code,{children:"parallelism"})," parameter specified by the user, these tablets will be grouped. Each thread is responsible for a group of tablets, generating multiple ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," query plans. The query plan will read the data from the included tablets and then write the data to the specified path in remote storage through S3 protocol/ HDFS protocol/ Broker."]}),"\n",(0,r.jsx)(n.p,{children:"The overall execution process is as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The user submits an Export job to FE."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["FE calculates all the tablets to be exported and groups them based on the ",(0,r.jsx)(n.code,{children:"parallelism"})," parameter. Each group generates multiple ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," query plans based on the ",(0,r.jsx)(n.code,{children:"maximum_number_of_export_partitions"})," parameter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Based on the parallelism parameter, an equal number of ",(0,r.jsx)(n.code,{children:"ExportTaskExecutor"})," are generated, and each ",(0,r.jsx)(n.code,{children:"ExportTaskExecutor"})," is responsible for a thread, which is scheduled and executed by FE's ",(0,r.jsx)(n.code,{children:"Job scheduler"})," framework."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["FE's ",(0,r.jsx)(n.code,{children:"Job scheduler"})," schedules and executes the ",(0,r.jsx)(n.code,{children:"ExportTaskExecutor"}),", and each ",(0,r.jsx)(n.code,{children:"ExportTaskExecutor"})," serially executes the multiple ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," query plans it is responsible for."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"start-export",children:"Start Export"}),"\n",(0,r.jsxs)(n.p,{children:["For detailed usage of Export, please refer to ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",children:"EXPORT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Export's detailed commands can be passed through ",(0,r.jsx)(n.code,{children:"HELP EXPORT;"})," in mysql client. Examples are as follows:"]}),"\n",(0,r.jsx)(n.h3,{id:"export-to-hdfs",children:"Export to HDFS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n    "label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "parallelusm" = "3"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"label"}),": The identifier of this export job. You can use this identifier to view the job status later."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"column_separator"}),": Column separator. The default is ",(0,r.jsx)(n.code,{children:"\\t"}),". Supports invisible characters, such as'\\x07'."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"column"}),": columns to be exported, separated by commas, if this parameter is not filled in, all columns of the table will be exported by default."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"line_delimiter"}),": Line separator. The default is ",(0,r.jsx)(n.code,{children:"\\n"}),". Supports invisible characters, such as'\\x07'."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parallelusm"}),"\uFF1AExporting with 3 concurrent threads."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"export-to-object-storage-supports-s3-protocol",children:"Export to Object Storage (Supports S3 Protocol)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE test TO "s3://bucket/path/to/export/dir/"\nWITH S3 (\n    "s3.endpoint" = "http://host",\n    "s3.access_key" = "AK",\n    "s3.secret_key"="SK",\n    "s3.region" = "region"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"s3.access_key"}),"/",(0,r.jsx)(n.code,{children:"s3.secret_key"}),"\uFF1AIs your key to access the object storage API."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"s3.endpoint"}),"\uFF1AEndpoint indicates the access domain name of object storage external services."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"s3.region"}),"\uFF1ARegion indicates the region where the object storage data center is located."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"view-export-status",children:"View Export Status"}),"\n",(0,r.jsxs)(n.p,{children:["After submitting a job, the job status can be viewed by querying the ",(0,r.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",children:"SHOW EXPORT"}),"  command. The results are as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show EXPORT\\G;\n*************************** 1. row ***************************\n     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":[],"max_file_size":"","delete_existing_files":"","columns":"","format":"csv","column_separator":"\\t","line_delimiter":"\\n","db":"default_cluster:demo","tbl":"student4","tablet_num":30}\n      Path: hdfs://host/path/to/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: NULL\n  OutfileInfo: [\n  [\n    {\n      "fileNumber": "1",\n      "totalRows": "4",\n      "fileSize": "34bytes",\n      "url": "file:///127.0.0.1/Users/fangtiewei/tmp_data/export/f1ab7dcc31744152-bbb4cda2f5c88eac_"\n    }\n  ]\n]\n1 row in set (0.01 sec)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JobId: The unique ID of the job"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"State: Job status:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PENDING: Jobs to be Scheduled"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"EXPORTING: Data Export"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"FINISHED: Operation Successful"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CANCELLED: Job Failure"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Progress: Work progress. The schedule is based on the query plan. Assuming there are 10 threads in total and 3 have been completed, the progress will be 30%."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TaskInfo: Job information in Json format:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"db: database name"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"tbl: Table name"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["partitions: Specify the exported partition. ",(0,r.jsx)(n.code,{children:"empty"})," Represents all partitions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"column separator: The column separator for the exported file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"line delimiter: The line separator for the exported file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"tablet num: The total number of tablets involved."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Broker: The name of the broker used."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"max_file_size: The maximum size of an export file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"delete_existing_files: Whether to delete existing files and directories in the specified export directory."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"columns: Specifies the column names to be exported. Empty values represent exporting all columns."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"format: The file format for export."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Path: Export path on remote storage."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CreateTime/StartTime/FinishTime: Creation time, start scheduling time and end time of jobs."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Timeout: Job timeout. The unit is seconds. This time is calculated from CreateTime."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Error Msg: If there is an error in the job, the cause of the error is shown here."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["OutfileInfo: If the export job is successful, specific ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," result information will be displayed here."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cancel-export-job",children:"Cancel Export Job"}),"\n",(0,r.jsxs)(n.p,{children:["After submitting a job, the job can be canceled by using the  ",(0,r.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",children:"CANCEL EXPORT"}),"  command. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n'})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(n.h3,{id:"concurrent-export",children:"Concurrent Export"}),"\n",(0,r.jsxs)(n.p,{children:["An Export job can be configured with the ",(0,r.jsx)(n.code,{children:"parallelism"})," parameter to concurrently export data. The ",(0,r.jsx)(n.code,{children:"parallelism"})," parameter specifies the number of threads to execute the ",(0,r.jsx)(n.code,{children:"EXPORT Job"}),". Each thread is responsible for exporting a subset of the total tablets."]}),"\n",(0,r.jsxs)(n.p,{children:["The underlying execution logic of an ",(0,r.jsx)(n.code,{children:"Export Job "}),"is actually the ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statement. Each thread specified by the ",(0,r.jsx)(n.code,{children:"parallelism"})," parameter executes independent ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statements."]}),"\n",(0,r.jsxs)(n.p,{children:["The specific logic for splitting an ",(0,r.jsx)(n.code,{children:"Export Job"})," into multiple ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," is, to evenly distribute all the tablets of the table among all parallel threads. For example:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If num(tablets) = 40 and parallelism = 3, then the three threads will be responsible for 14, 13, and 13 tablets, respectively."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If num(tablets) = 2 and parallelism = 3, then Doris automatically sets the parallelism to 2, and each thread is responsible for one tablet."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the number of tablets responsible for a thread exceeds the ",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"})," value (default is 10, and can be modified by adding the ",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"})," parameter in fe.conf), the thread will split the tablets which are responsibled for this thread into multiple ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statements. For example:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If a thread is responsible for 14 tablets and ",(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export = 10"}),", then the thread will be responsible for two ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statements. The first ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statement exports 10 tablets, and the second ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statement exports 4 tablets. The two ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statements are executed serially by this thread."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"exec_mem_limit",children:"exec_mem_limit"}),"\n",(0,r.jsxs)(n.p,{children:["The query plan for an ",(0,r.jsx)(n.code,{children:"Export Job"})," typically involves only ",(0,r.jsx)(n.code,{children:"scanning and exporting"}),", and does not involve compute logic that requires a lot of memory. Therefore, the default memory limit of 2GB is usually sufficient to meet the requirements."]}),"\n",(0,r.jsxs)(n.p,{children:["However, in certain scenarios, such as a query plan that requires scanning too many tablets on the same BE, or when there are too many data versions of tablets, it may result in insufficient memory. In these cases, you can adjust the session variable ",(0,r.jsx)(n.code,{children:"exec_mem_limit"})," to increase the memory usage limit."]}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It is not recommended to export large amounts of data at one time. The maximum amount of exported data recommended by an Export job is tens of GB. Excessive export results in more junk files and higher retry costs."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the amount of table data is too large, it is recommended to export it by partition."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"During the operation of the Export job, if FE restarts or cuts the master, the Export job will fail, requiring the user to resubmit."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the Export job fails, the temporary files and directory generated in the remote storage will not be deleted, requiring the user to delete them manually."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Export jobs scan data and occupy IO resources, which may affect the query latency of the system."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The Export job can export data from  ",(0,r.jsx)(n.code,{children:"Doris Base tables"}),", ",(0,r.jsx)(n.code,{children:"View"}),", and ",(0,r.jsx)(n.code,{children:"External tables"}),", but not from ",(0,r.jsx)(n.code,{children:"Rollup Index"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When using the EXPORT command, please ensure that the target path exists, otherwise the export may fail."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When concurrent export is enabled, please configure the thread count and parallelism appropriately to fully utilize system resources and avoid performance bottlenecks."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When exporting to a local file, pay attention to file permissions and the path, ensure that you have sufficient permissions to write, and follow the appropriate file system path."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It is possible to monitor progress and performance metrics in real-time during the export process to identify issues promptly and make optimal adjustments."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It is recommended to verify the integrity and accuracy of the exported data after the export operation is completed to ensure the quality and integrity of the data."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"relevant-configuration",children:"Relevant configuration"}),"\n",(0,r.jsx)(n.h3,{id:"fe",children:"FE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maximum_tablets_of_outfile_in_export"}),": The maximum number of tablets allowed for an OutFile statement in an ExportExecutorTask."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"more-help",children:"More Help"}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed syntax and best practices used by Export, please refer to the ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",children:"Export"})," command manual, You can also enter ",(0,r.jsx)(n.code,{children:"HELP EXPORT"})," at the command line of the MySql client for more help."]}),"\n",(0,r.jsxs)(n.p,{children:["The underlying implementation of the ",(0,r.jsx)(n.code,{children:"EXPORT"})," command is the ",(0,r.jsx)(n.code,{children:"SELECT INTO OUTFILE"})," statement. For more information about SELECT INTO OUTFILE, please refer to ",(0,r.jsx)(n.a,{href:"../export/outfile",children:"Export Query Result"})," and ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",children:"SELECT INTO OUTFILE"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);