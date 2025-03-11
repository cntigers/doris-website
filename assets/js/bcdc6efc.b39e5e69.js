"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["943337"],{493825:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/EXPORT","title":"EXPORT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/data-modification/load-and-export/EXPORT.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/EXPORT","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/EXPORT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPORT","language":"en"},"sidebar":"docs","previous":{"title":"SYNC","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/SYNC"},"next":{"title":"CANCEL EXPORT","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT"}}'),i=n("785893"),r=n("250065");let l={title:"EXPORT",language:"en"},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Concurrent Export",id:"concurrent-export",level:3},{value:"memory limit",id:"memory-limit",level:3},{value:"Precautions",id:"precautions",level:3},{value:"Examples",id:"examples",level:2},{value:"Export to local",id:"export-to-local",level:3},{value:"Export with S3",id:"export-with-s3",level:3},{value:"export with HDFS",id:"export-with-hdfs",level:3},{value:"Export with Broker",id:"export-with-broker",level:3}];function c(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"EXPORT"})," command is used to export the data of the specified table as a file to the specified location. Currently, it supports exporting to remote storage such as HDFS, S3, BOS, and COS (Tencent Cloud) through the Broker process, S3 protocol, or HDFS protocol."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"EXPORT"})," is an asynchronous operation. This command will submit an ",(0,i.jsx)(t.code,{children:"EXPORT JOB"})," to Doris, and the task will be returned immediately after successful submission. After execution, you can use the ",(0,i.jsx)(t.a,{href:"./SHOW-EXPORT",children:"SHOW EXPORT"})," command to view the progress."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"EXPORT TABLE <table_name>\n[ PARTITION ( <partation_name> [ , ... ] ) ]\n[ <where_clause> ]\nTO <export_path>\n[ <properties> ]\nWITH <target_storage>\n[ <broker_properties> ];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"<table_name>"})]})}),"\n",(0,i.jsx)(t.p,{children:"The name of the table to be exported. Supports export of Doris local table, view, and catalog external table data."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["2. ",(0,i.jsx)(t.code,{children:"<export_path>"})]})}),"\n",(0,i.jsxs)(t.p,{children:["The exported file path. It can be a directory or a file directory plus a file prefix, such as ",(0,i.jsx)(t.code,{children:"hdfs://path/to/my_file_"})]}),"\n",(0,i.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"<where_clause>"})]})}),"\n",(0,i.jsx)(t.p,{children:"Optional parameter to specify filter conditions for exporting data."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["2. ",(0,i.jsx)(t.code,{children:"<partition_name>"})]})}),"\n",(0,i.jsx)(t.p,{children:"Optional parameter to export specific partitions of a table, applicable only to Doris local tables."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["3. ",(0,i.jsx)(t.code,{children:"<properties>"})]})}),"\n",(0,i.jsx)(t.p,{children:"Used to specify additional export parameters."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'[ PROPERTIES ("<key>"="<value>" [, ... ]) ]\n'})}),"\n",(0,i.jsx)(t.p,{children:"The following parameters can be specified:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"label"}),": This parameter is optional, specifies the label of the export task. If this parameter is not specified, the system randomly assigns a label to the export task."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"column_separator"}),": Specifies the exported column separator, default is ",(0,i.jsx)(t.code,{children:"\\t"}),", mulit-bytes is supported. This parameter is only used for ",(0,i.jsx)(t.code,{children:"CSV"})," file format."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"line_delimiter"}),": Specifies the line delimiter for export, the default is ",(0,i.jsx)(t.code,{children:"\\n"}),", mulit-bytes is supported. This parameter is only used for ",(0,i.jsx)(t.code,{children:"CSV"})," file format."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"timeout"}),": The timeout period of the export job, the default is 2 hours, the unit is seconds."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"columns"}),": Specifies certain columns of the export job table"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"format"}),": Specifies the file format, support: parquet, orc, csv, csv_with_names, csv_with_names_and_types.The default is csv format."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"parallelism"}),": The concurrency degree of the ",(0,i.jsx)(t.code,{children:"export"})," job, the default is ",(0,i.jsx)(t.code,{children:"1"}),". The export job will be divided into ",(0,i.jsx)(t.code,{children:"select..outfile.."})," statements of the number of ",(0,i.jsx)(t.code,{children:"parallelism"})," to execute concurrently. (If the value of ",(0,i.jsx)(t.code,{children:"parallelism"})," is greater than the number of tablets in the table, the system will automatically set ",(0,i.jsx)(t.code,{children:"parallelism"})," to the number of tablets, that is, each ",(0,i.jsx)(t.code,{children:"select..outfile.."})," statement is responsible for one tablet)"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"delete_existing_files"}),": default ",(0,i.jsx)(t.code,{children:"false"}),'. If it is specified as true, you will first delete all files specified in the directory specified by the file_path, and then export the data to the directory.For example: "file_path" = "/user/tmp", then delete all files and directory under "/user/"; "file_path" = "/user/tmp/", then delete all files and directory under "/user/tmp/"']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"max_file_size"}),": it is the limit for the size of a single file in the export job. If the result file exceeds this value, it will be split into multiple files. The valid range for ",(0,i.jsx)(t.code,{children:"max_file_size"})," is [5MB, 2GB], with a default value of 1GB. (When exporting to the ORC file format, the actual size of the split files will be multiples of 64MB, for example, if max_file_size is specified as 5MB, the actual split size will be 64MB; if max_file_size is specified as 65MB, the actual split size will be 128MB.)"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"with_bom"}),": The default is false. If it is set to true, the exported file is encoded in UTF8 with BOM (valid only for CSV-related file format)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"timeout"}),": This is the timeout parameter of the export job, the default timeout is 2 hours, and the unit is seconds."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"compress_type"}),": (since 2.1.5) When specifying the export file format as Parquet or ORC, you can choose the compression method for the Parquet or ORC files. For Parquet file format, you can specify the compression method as SNAPPY, GZIP, BROTLI, ZSTD, LZ4, or PLAIN, with the default being SNAPPY. For ORC file format, you can specify the compression method as PLAIN, SNAPPY, ZLIB, or ZSTD, with the default being ZLIB. This parameter is supported starting from version 2.1.5. (PLAIN means no compression is used.)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"caution",children:(0,i.jsxs)(t.p,{children:["Note that to use the ",(0,i.jsx)(t.code,{children:"delete_existing_files"})," parameter, you also need to add the configuration ",(0,i.jsx)(t.code,{children:"enable_delete_existing_files = true"})," to the fe.conf file and restart the FE. Only then will the ",(0,i.jsx)(t.code,{children:"delete_existing_files"})," parameter take effect. Setting ",(0,i.jsx)(t.code,{children:"delete_existing_files = true"})," is a dangerous operation and it is recommended to only use it in a testing environment."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["4. ",(0,i.jsx)(t.code,{children:"<target_storage>"})]}),"\nStorage medium, optional BROKER, S3, HDFS."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["5. ",(0,i.jsx)(t.code,{children:"<broker_properties>"})]}),"\nDepending on the storage medium of ",(0,i.jsx)(t.code,{children:"<target_storage>"}),", different properties need to be specified."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"BROKER"})}),"\n",(0,i.jsx)(t.p,{children:"The export function needs to write data to the remote storage through the Broker process. Here you need to define the relevant connection information for the broker to use."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'WITH BROKER "broker_name"\n("<key>"="<value>" [,...])\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Broker properties:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"username"}),": user name"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"password"}),": password"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"hadoop.security.authentication"}),": specify the authentication method as kerberos"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"kerberos_principal"}),": specifies the principal of kerberos"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"kerberos_keytab"}),": specifies the path to the keytab file of kerberos. The file must be the absolute path to the file on the server where the broker process is located. and can be accessed by the Broker process"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"HDFS"})}),"\n",(0,i.jsx)(t.p,{children:"You can directly write data to the remote HDFS."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'WITH HDFS ("key"="value" [,...])\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"HDFS properties: "})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fs.defaultFS"}),": namenode address and port"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"hadoop.username"}),": hdfs username"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dfs.nameservices"}),": if hadoop enable HA, please set fs nameservice. See hdfs-site.xml"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dfs.ha.namenodes.[nameservice ID]"}),": unique identifiers for each NameNode in the nameservice. See hdfs-site.xml"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dfs.namenode.rpc-address.[nameservice ID].[name node ID]"}),": the fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"For a kerberos-authentication enabled Hadoop cluster, additional properties need to be set:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dfs.namenode.kerberos.principal"}),": HDFS namenode service principal"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"hadoop.security.authentication"}),": set the value as ",(0,i.jsx)(t.code,{children:"kerberos"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"hadoop.kerberos.principal"}),": the Kerberos pincipal that Doris will use when connectiong to HDFS."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"hadoop.kerberos.keytab"}),": HDFS client keytab location."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"S3"})}),"\n",(0,i.jsx)(t.p,{children:"You can directly write data to a remote S3 object store"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'WITH S3 ("key"="value" [,...])\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"S3 properties:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"s3.endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"s3.region"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"s3.secret_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"s3.access_key"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"use_path_style"}),": (optional) default false . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the use_path_style parameter to force the use of path style access method."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column"}),(0,i.jsx)(t.th,{children:"DataType"}),(0,i.jsx)(t.th,{children:"Note"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jobId"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"The unique identifier of the export job."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"label"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The label of the export job."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dbId"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"The identifier of the database."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tableId"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"The identifier of the table."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"state"}),(0,i.jsx)(t.td,{children:"ExportJobState"}),(0,i.jsx)(t.td,{children:"The current state of the export job."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"path"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The path of the export file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"partitions"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The list of partition names being exported, separated by commas."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"progress"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The current progress of the export job (in percentage)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"createTimeMs"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The creation time of the job in milliseconds, formatted as a date/time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exportStartTimeMs"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The start time of the export job in milliseconds, formatted as a date/time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exportFinishTimeMs"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The finish time of the export job in milliseconds, formatted as a date/time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"failMsg"}),(0,i.jsx)(t.td,{children:"ExportFailMsg"}),(0,i.jsx)(t.td,{children:"The error message if the export job failed."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Requires read access to the database and table."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(t.h3,{id:"concurrent-export",children:"Concurrent Export"}),"\n",(0,i.jsxs)(t.p,{children:["An Export job can be configured with the ",(0,i.jsx)(t.code,{children:"parallelism"})," parameter to concurrently export data. The ",(0,i.jsx)(t.code,{children:"parallelism"})," parameter specifies the number of threads to execute the ",(0,i.jsx)(t.code,{children:"EXPORT Job"}),". Each thread is responsible for exporting a subset of the total tablets."]}),"\n",(0,i.jsxs)(t.p,{children:["The underlying execution logic of an ",(0,i.jsx)(t.code,{children:"Export Job "}),"is actually the ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statement. Each thread specified by the ",(0,i.jsx)(t.code,{children:"parallelism"})," parameter executes independent ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statements."]}),"\n",(0,i.jsxs)(t.p,{children:["The specific logic for splitting an ",(0,i.jsx)(t.code,{children:"Export Job"})," into multiple ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," is, to evenly distribute all the tablets of the table among all parallel threads. For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If num(tablets) = 40 and parallelism = 3, then the three threads will be responsible for 14, 13, and 13 tablets, respectively."}),"\n",(0,i.jsx)(t.li,{children:"If num(tablets) = 2 and parallelism = 3, then Doris automatically sets the parallelism to 2, and each thread is responsible for one tablet."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When the number of tablets responsible for a thread exceeds the ",(0,i.jsx)(t.code,{children:"maximum_tablets_of_outfile_in_export"})," value (default is 10, and can be modified by adding the ",(0,i.jsx)(t.code,{children:"maximum_tablets_of_outfile_in_export"})," parameter in fe.conf), the thread will split the tablets which are responsibled for this thread into multiple ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statements. For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If a thread is responsible for 14 tablets and ",(0,i.jsx)(t.code,{children:"maximum_tablets_of_outfile_in_export = 10"}),", then the thread will be responsible for two ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statements. The first ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statement exports 10 tablets, and the second ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statement exports 4 tablets. The two ",(0,i.jsx)(t.code,{children:"SELECT INTO OUTFILE"})," statements are executed serially by this thread."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"memory-limit",children:"memory limit"}),"\n",(0,i.jsxs)(t.p,{children:["The query plan for an ",(0,i.jsx)(t.code,{children:"Export Job"})," typically involves only ",(0,i.jsx)(t.code,{children:"scanning and exporting"}),", and does not involve compute logic that requires a lot of memory. Therefore, the default memory limit of 2GB is usually sufficient to meet the requirements."]}),"\n",(0,i.jsxs)(t.p,{children:["However, in certain scenarios, such as a query plan that requires scanning too many tablets on the same BE, or when there are too many data versions of tablets, it may result in insufficient memory. In these cases, you can adjust the session variable ",(0,i.jsx)(t.code,{children:"exec_mem_limit"})," to increase the memory usage limit."]}),"\n",(0,i.jsx)(t.h3,{id:"precautions",children:"Precautions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Exporting a large amount of data at one time is not recommended. The maximum recommended export data volume for an Export job is several tens of GB. An overly large export results in more junk files and higher retry costs. If the amount of table data is too large, it is recommended to export by partition."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If the Export job fails, the generated files will not be deleted, and the user needs to delete it manually."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Export job only exports the data of the Base table / View / External table, not the data of the materialized view."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The export job scans data and occupies IO resources, which may affect the query latency of the system."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Currently, The ",(0,i.jsx)(t.code,{children:"Export Job"})," is simply check whether the ",(0,i.jsx)(t.code,{children:"Tablets version"})," is the same, it is recommended not to import data during the execution of the ",(0,i.jsx)(t.code,{children:"Export Job"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The maximum number of partitions that an ",(0,i.jsx)(t.code,{children:"Export job"})," allows is 2000. You can add a parameter to the fe.conf ",(0,i.jsx)(t.code,{children:"maximum_number_of_export_partitions"})," and restart FE to modify the setting."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"export-to-local",children:"Export to local"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Export data to the local file system needs to add ",(0,i.jsx)(t.code,{children:"enable_outfile_to_local = true"})," to the fe.conf and restart the Fe."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can export the ",(0,i.jsx)(t.code,{children:"test"})," table to a local store. Export csv format file by default."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/";\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can export the k1 and k2 columns in ",(0,i.jsx)(t.code,{children:"test"})," table to a local store, and set export label. Export csv format file by default."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "label" = "label1",\n  "columns" = "k1,k2"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can export the rows where ",(0,i.jsx)(t.code,{children:"k1 < 50"})," in ",(0,i.jsx)(t.code,{children:"test"})," table to a local store, and set column_separator to ",(0,i.jsx)(t.code,{children:","}),". Export csv format file by default."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test WHERE k1 < 50 TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "column_separator"=","\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Export partitions p1 and p2 from the test table to local storage, with the default exported file format being csv."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test PARTITION (p1,p2) TO "file:///home/user/tmp/" \nPROPERTIES ("columns" = "k1,k2");\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Export all data in the test table to local storage with a non-default file format."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'-- parquet\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "parquet"\n);\n\n-- orc\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "orc"\n);\n\n-- csv(csv_with_names) , Use \'AA\' as the column separator and \'zz\' as the row separator\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names",\n  "column_separator"="AA",\n  "line_delimiter" = "zz"\n);\n\n-- csv(csv_with_names_and_types) \nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names_and_types"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["set ",(0,i.jsx)(t.code,{children:"max_file_sizes"}),"\nWhen the exported file is larger than 5MB, the data will be split into multiple files, with each file having a maximum size of 5MB."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["set ",(0,i.jsx)(t.code,{children:"parallelism"})]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "parallelism" = "5"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["set ",(0,i.jsx)(t.code,{children:"delete_existing_files"}),(0,i.jsx)(t.br,{}),"\nBefore exporting data, all files and directories in the ",(0,i.jsx)(t.code,{children:"/home/user/"})," directory will be deleted, and then the data will be exported to that directory."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'-- When exporting data, all files and directories under the `/home/user/` directory will be deleted first, and then the data will be exported to this directory.\nEXPORT TABLE test TO "file:///home/user/tmp"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "delete_existing_files" = "true"\n);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"export-with-s3",children:"Export with S3"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Export all data from the ",(0,i.jsx)(t.code,{children:"testTbl"})," table to S3 using invisible character '\\x07' as a delimiter for columns and rows.If you want to export data to minio, you also need to specify use_path_style=true."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE s3_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH S3 (\n  "s3.endpoint" = "xxxxx",\n  "s3.region" = "xxxxx",\n  "s3.secret_key"="xxxx",\n  "s3.access_key" = "xxxxx"\n)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"export-with-hdfs",children:"export with HDFS"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Export all data from the ",(0,i.jsx)(t.code,{children:"test"})," table to HDFS in ",(0,i.jsx)(t.code,{children:"Parquet"})," format, with a limit of 512MB for the size of a single file in the export job, and retain all files under the specified directory."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c/" \nPROPERTIES(\n    "format" = "parquet",\n    "max_file_size" = "512MB",\n    "delete_existing_files" = "false"\n)\nwith HDFS (\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"export-with-broker",children:"Export with Broker"}),"\n",(0,i.jsx)(t.p,{children:"You need to first start the broker process and add it to the FE before proceeding."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Export the ",(0,i.jsx)(t.code,{children:"test"})," table to hdfs"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Export partitions 'p1' and 'p2' from the 'testTbl' table to HDFS using ',' as the column delimiter and specifying a label."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "label" = "mylabel",\n  "column_separator"=","\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Export all data from the 'testTbl' table to HDFS using the non-visible character '\\x07' as the column and row delimiter."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n'})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var s=n(667294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);