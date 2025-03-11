"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["109639"],{512864:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"faq/lakehouse-faq","title":"Data Lakehouse FAQ","description":"\x3c!--","source":"@site/docs/faq/lakehouse-faq.md","sourceDirName":"faq","slug":"/faq/lakehouse-faq","permalink":"/docs/dev/faq/lakehouse-faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Data Lakehouse FAQ","language":"en"},"sidebar":"docs","previous":{"title":"SQL Error","permalink":"/docs/dev/faq/sql-faq"},"next":{"title":"BI FAQ","permalink":"/docs/dev/faq/bi-faq"}}'),i=r("785893"),s=r("250065");let o={title:"Data Lakehouse FAQ",language:"en"},a=void 0,c={},l=[{value:"Certificate Issues",id:"certificate-issues",level:2},{value:"Kerberos",id:"kerberos",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:2},{value:"Hive Catalog",id:"hive-catalog",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"DLF Catalog",id:"dlf-catalog",level:2},{value:"Other Issues",id:"other-issues",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"certificate-issues",children:"Certificate Issues"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying, an error ",(0,i.jsx)(n.code,{children:"curl 77: Problem with the SSL CA cert."})," occurs. This indicates that the current system certificate is too old and needs to be updated locally."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can download the latest CA certificate from ",(0,i.jsx)(n.code,{children:"https://curl.haxx.se/docs/caextract.html"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Place the downloaded ",(0,i.jsx)(n.code,{children:"cacert-xxx.pem"})," into the ",(0,i.jsx)(n.code,{children:"/etc/ssl/certs/"})," directory, for example: ",(0,i.jsx)(n.code,{children:"sudo cp cacert-xxx.pem /etc/ssl/certs/ca-certificates.crt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying, an error occurs: ",(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (x.x.x.x)[CANCELLED][INTERNAL_ERROR]error setting certificate verify locations: CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"yum install -y ca-certificates\nln -s /etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt /etc/ssl/certs/ca-certificates.crt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"kerberos",children:"Kerberos"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When connecting to a Hive Metastore authenticated with Kerberos, an error ",(0,i.jsx)(n.code,{children:"GSS initiate failed"})," is encountered."]}),"\n",(0,i.jsx)(n.p,{children:"This is usually due to incorrect Kerberos authentication information. You can troubleshoot by following these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In versions prior to 1.2.1, the libhdfs3 library that Doris depends on did not enable gsasl. Please update to versions 1.2.2 and later."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ensure that correct keytab and principal are set for each component and verify that the keytab file exists on all FE and BE nodes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),"/",(0,i.jsx)(n.code,{children:"hadoop.kerberos.principal"}),": Used for Hadoop hdfs access, fill in the corresponding values for hdfs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hive.metastore.kerberos.principal"}),": Used for hive metastore."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Try replacing the IP in the principal with a domain name (do not use the default ",(0,i.jsx)(n.code,{children:"_HOST"})," placeholder)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure that the ",(0,i.jsx)(n.code,{children:"/etc/krb5.conf"})," file exists on all FE and BE nodes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When connecting to a Hive database through the Hive Catalog, an error occurs: ",(0,i.jsx)(n.code,{children:"RemoteException: SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the error occurs during the query when there are no issues with ",(0,i.jsx)(n.code,{children:"show databases"})," and ",(0,i.jsx)(n.code,{children:"show tables"}),", follow these two steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Place core-site.xml and hdfs-site.xml in the fe/conf and be/conf directories."}),"\n",(0,i.jsx)(n.li,{children:"Execute Kerberos kinit on the BE node, restart BE, and then proceed with the query."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When encountering the error ",(0,i.jsx)(n.code,{children:"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"})," while querying a table configured with Kerberos, restarting FE and BE nodes usually resolves the issue."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before restarting all nodes, configure ",(0,i.jsx)(n.code,{children:"-Djavax.security.auth.useSubjectCredsOnly=false"})," in the JAVA_OPTS parameter in ",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/be/conf/be.conf"'})," to obtain JAAS credentials information through the underlying mechanism rather than the application."]}),"\n",(0,i.jsxs)(n.li,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html",children:"JAAS Troubleshooting"})," for solutions to common JAAS errors."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To resolve the error ",(0,i.jsx)(n.code,{children:"Unable to obtain password from user"})," when configuring Kerberos in the Catalog:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the principal used is listed in klist by checking with ",(0,i.jsx)(n.code,{children:"klist -kt your.keytab"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Verify the catalog configuration for any missing settings such as ",(0,i.jsx)(n.code,{children:"yarn.resourcemanager.principal"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the above checks are fine, it may be due to the JDK version installed by the system's package manager not supporting certain encryption algorithms. Consider installing JDK manually and setting the ",(0,i.jsx)(n.code,{children:"JAVA_HOME"})," environment variable."]}),"\n",(0,i.jsx)(n.li,{children:"Kerberos typically uses AES-256 for encryption. For Oracle JDK, JCE must be installed. Some distributions of OpenJDK automatically provide unlimited strength JCE, eliminating the need for separate installation."}),"\n",(0,i.jsxs)(n.li,{children:["JCE versions correspond to JDK versions; download the appropriate JCE zip package and extract it to the ",(0,i.jsx)(n.code,{children:"$JAVA_HOME/jre/lib/security"})," directory based on the JDK version:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["JDK6: ",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html",children:"JCE6"})]}),"\n",(0,i.jsxs)(n.li,{children:["JDK7: ",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/jce-7-download-432124.html",children:"JCE7"})]}),"\n",(0,i.jsxs)(n.li,{children:["JDK8: ",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",children:"JCE8"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When encountering the error ",(0,i.jsx)(n.code,{children:"java.security.InvalidKeyException: Illegal key size"})," while accessing HDFS with KMS, upgrade the JDK version to >= Java 8 u162 or install the corresponding JCE Unlimited Strength Jurisdiction Policy Files."]}),"\n",(0,i.jsxs)(n.p,{children:["If configuring Kerberos in the Catalog results in the error ",(0,i.jsx)(n.code,{children:"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"}),", place the ",(0,i.jsx)(n.code,{children:"core-site.xml"})," file in the ",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/be/conf"'})," directory."]}),"\n",(0,i.jsxs)(n.p,{children:["If accessing HDFS results in the error ",(0,i.jsx)(n.code,{children:"No common protection layer between client and server"}),", ensure that the ",(0,i.jsx)(n.code,{children:"hadoop.rpc.protection"})," properties on the client and server are consistent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n\n    <property>\n        <name>hadoop.security.authentication</name>\n        <value>kerberos</value>\n    </property>\n    \n</configuration>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When using Broker Load with Kerberos configured and encountering the error ",(0,i.jsx)(n.code,{children:"Cannot locate default realm."}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Add the configuration item ",(0,i.jsx)(n.code,{children:"-Djava.security.krb5.conf=/your-path"})," to the ",(0,i.jsx)(n.code,{children:"JAVA_OPTS"})," in the ",(0,i.jsx)(n.code,{children:"start_broker.sh"})," script for Broker Load."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When using Kerberos configuration in the Catalog, the ",(0,i.jsx)(n.code,{children:"hadoop.username"})," property cannot be used simultaneously."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Accessing Kerberos with JDK 17"}),"\n",(0,i.jsxs)(n.p,{children:["When running Doris with JDK 17 and accessing Kerberos services, you may encounter issues accessing due to the use of deprecated encryption algorithms. You need to add the ",(0,i.jsx)(n.code,{children:"allow_weak_crypto=true"})," property in krb5.conf or upgrade the encryption algorithm in Kerberos."]}),"\n",(0,i.jsxs)(n.p,{children:["For more details, refer to: ",(0,i.jsx)(n.a,{href:"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos",children:"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"jdbc-catalog",children:"JDBC Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error connecting to SQLServer via JDBC Catalog: ",(0,i.jsx)(n.code,{children:"unable to find valid certification path to requested target"})]}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"trustServerCertificate=true"})," option in the ",(0,i.jsx)(n.code,{children:"jdbc_url"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connecting to MySQL database via JDBC Catalog results in Chinese character garbling or incorrect Chinese character query conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"useUnicode=true&characterEncoding=utf-8"})," in the ",(0,i.jsx)(n.code,{children:"jdbc_url"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: Starting from version 1.2.3, when connecting to MySQL database via JDBC Catalog, these parameters will be automatically added."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error connecting to MySQL database via JDBC Catalog: ",(0,i.jsx)(n.code,{children:"Establishing SSL connection without server's identity verification is not recommended"})]}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"useSSL=true"})," in the ",(0,i.jsx)(n.code,{children:"jdbc_url"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When synchronizing MySQL data to Doris using JDBC Catalog, date data synchronization error occurs. Verify if the MySQL version matches the MySQL driver package, for example, MySQL 8 and above require the driver com.mysql.cj.jdbc.Driver."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hive-catalog",children:"Hive Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error accessing Iceberg table via Hive Metastore: ",(0,i.jsx)(n.code,{children:"failed to get schema"})," or ",(0,i.jsx)(n.code,{children:"Storage schema reading not supported"})]}),"\n",(0,i.jsxs)(n.p,{children:["Place the relevant ",(0,i.jsx)(n.code,{children:"iceberg"})," runtime jar files in Hive's lib/ directory."]}),"\n",(0,i.jsxs)(n.p,{children:["Configure in ",(0,i.jsx)(n.code,{children:"hive-site.xml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n"})}),"\n",(0,i.jsx)(n.p,{children:"After configuration, restart the Hive Metastore."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error connecting to Hive Catalog: ",(0,i.jsx)(n.code,{children:"Caused by: java.lang.NullPointerException"})]}),"\n",(0,i.jsx)(n.p,{children:"If the fe.log contains the following stack trace:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Try adding ",(0,i.jsx)(n.code,{children:'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"'})," in the ",(0,i.jsx)(n.code,{children:"create catalog"})," statement to resolve."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If after creating Hive Catalog, ",(0,i.jsx)(n.code,{children:"show tables"})," works fine but querying results in ",(0,i.jsx)(n.code,{children:"java.net.UnknownHostException: xxxxx"})]}),"\n",(0,i.jsx)(n.p,{children:"Add the following in the CATALOG's PROPERTIES:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Tables in orc format in Hive 1.x may encounter system column names in the underlying orc file schema as ",(0,i.jsx)(n.code,{children:"_col0"}),", ",(0,i.jsx)(n.code,{children:"_col1"}),", ",(0,i.jsx)(n.code,{children:"_col2"}),", etc. In this case, add ",(0,i.jsx)(n.code,{children:"hive.version"})," as 1.x.x in the catalog configuration to map with the column names in the hive table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying table data using Catalog, errors related to Hive Metastore such as ",(0,i.jsx)(n.code,{children:"Invalid method name"})," are encountered, set the ",(0,i.jsx)(n.code,{children:"hive.version"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying a table in ORC format, if the FE reports ",(0,i.jsx)(n.code,{children:"Could not obtain block"})," or ",(0,i.jsx)(n.code,{children:"Caused by: java.lang.NoSuchFieldError: types"}),", it may be due to the FE accessing HDFS to retrieve file information and perform file splitting by default. In some cases, the FE may not be able to access HDFS. This can be resolved by adding the following parameter: ",(0,i.jsx)(n.code,{children:'"hive.exec.orc.split.strategy" = "BI"'}),". Other options include HYBRID (default) and ETL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Hive, you can find the partition field values of a Hudi table, but in Doris, you cannot. Doris and Hive currently have different ways of querying Hudi. In Doris, you need to add the partition fields in the avsc file structure of the Hudi table. If not added, Doris will query with partition_val being empty (even if ",(0,i.jsx)(n.code,{children:"hoodie.datasource.hive_sync.partition_fields=partition_val"})," is set)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "Name"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "Creation time"\n        }\n    ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When querying a Hive external table, if you encounter the error ",(0,i.jsx)(n.code,{children:"java.lang.ClassNotFoundException: Class com.hadoop.compression.lzo.LzoCodec not found"}),", search for ",(0,i.jsx)(n.code,{children:"hadoop-lzo-*.jar"})," in the Hadoop environment, place it in the ",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/fe/lib/"'})," directory, and restart the FE. Starting from version 2.0.2, you can place this file in the ",(0,i.jsx)(n.code,{children:"custom_lib/"})," directory of the FE (if it does not exist, create it manually) to prevent file loss when upgrading the cluster due to the lib directory being replaced."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When creating a Hive table specifying the serde as ",(0,i.jsx)(n.code,{children:"org.apache.hadoop.hive.contrib.serde2.MultiDelimitserDe"}),", and encountering the error ",(0,i.jsx)(n.code,{children:"storage schema reading not supported"})," when accessing the table, add the following configuration to the hive-site.xml file and restart the HMS service:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<property>\n  <name>metastore.storage.schema.reader.impl</name>\n  <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>\n</property> \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error: ",(0,i.jsx)(n.code,{children:"java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty"}),". The complete error message in the FE log is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"org.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path exception. path=s3://bucket/part-*, err: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.hadoop.fs.s3a.AWSClientIOException: listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: javax.net.ssl.SSLException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.lang.RuntimeException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Try updating the CA certificate on the FE node using ",(0,i.jsx)(n.code,{children:"update-ca-trust (CentOS/RockyLinux)"}),", and then restart the FE process."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BE error: ",(0,i.jsx)(n.code,{children:"java.lang.InternalError"}),". If you see an error similar to the following in ",(0,i.jsx)(n.code,{children:"be.INFO"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"W20240506 15:19:57.553396 266457 jni-util.cpp:259] java.lang.InternalError\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.init(Native Method)\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.<init>(ZlibDecompressor.java:114)\n        at org.apache.hadoop.io.compress.GzipCodec$GzipZlibDecompressor.<init>(GzipCodec.java:229)\n        at org.apache.hadoop.io.compress.GzipCodec.createDecompressor(GzipCodec.java:188)\n        at org.apache.hadoop.io.compress.CodecPool.getDecompressor(CodecPool.java:183)\n        at org.apache.parquet.hadoop.CodecFactory$HeapBytesDecompressor.<init>(CodecFactory.java:99)\n        at org.apache.parquet.hadoop.CodecFactory.createDecompressor(CodecFactory.java:223)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:212)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:43)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It is because the Doris built-in ",(0,i.jsx)(n.code,{children:"libz.a"})," conflicts with the system environment's ",(0,i.jsx)(n.code,{children:"libz.so"}),". To resolve this issue, first execute ",(0,i.jsx)(n.code,{children:"export LD_LIBRARY_PATH=/path/to/be/lib:$LD_LIBRARY_PATH"}),", and then restart the BE process."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hdfs",children:"HDFS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When accessing HDFS 3.x, if you encounter the error ",(0,i.jsx)(n.code,{children:"java.lang.VerifyError: xxx"}),", in versions prior to 1.2.1, Doris depends on Hadoop version 2.8. You need to update to 2.10.2 or upgrade Doris to versions after 1.2.2."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Using Hedged Read to optimize slow HDFS reads. In some cases, high load on HDFS may lead to longer read times for data replicas on a specific HDFS, thereby slowing down overall query efficiency. The HDFS Client provides the Hedged Read feature. This feature initiates another read thread to read the same data if a read request exceeds a certain threshold without returning, and the result returned first is used."}),"\n",(0,i.jsx)(n.p,{children:"Note: This feature may increase the load on the HDFS cluster, so use it judiciously."}),"\n",(0,i.jsx)(n.p,{children:"You can enable this feature in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Specify it in the parameters when creating the Catalog:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"create catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dfs.client.hedged.read.threadpool.size"})," represents the number of threads used for Hedged Read, which are shared by an HDFS Client. Typically, for an HDFS cluster, BE nodes will share an HDFS Client."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dfs.client.hedged.read.threshold.millis"})," is the read threshold in milliseconds. When a read request exceeds this threshold without returning, a Hedged Read is triggered."]}),"\n",(0,i.jsx)(n.p,{children:"When enabled, you can see the related parameters in the Query Profile:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TotalHedgedRead"}),": Number of times Hedged Read was initiated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HedgedReadWins"}),": Number of successful Hedged Reads (times when the request was initiated and returned faster than the original request)"]}),"\n",(0,i.jsx)(n.p,{children:"Note that these values are cumulative for a single HDFS Client, not for a single query. The same HDFS Client can be reused by multiple queries."}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Couldn't create proxy provider class org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"})}),"\n",(0,i.jsxs)(n.p,{children:["In the start scripts of FE and BE, the environment variable ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," is added to the CLASSPATH. If ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," is set incorrectly, such as pointing to a non-existent or incorrect path, it may load the wrong xxx-site.xml file, resulting in reading incorrect information."]}),"\n",(0,i.jsxs)(n.p,{children:["Check if ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," is configured correctly or remove this environment variable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BlockMissingExcetpion: Could not obtain block: BP-XXXXXXXXX No live nodes contain current block"})}),"\n",(0,i.jsx)(n.p,{children:"Possible solutions include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"hdfs fsck file -files -blocks -locations"})," to check if the file is healthy."]}),"\n",(0,i.jsxs)(n.li,{children:["Check connectivity with datanodes using ",(0,i.jsx)(n.code,{children:"telnet"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Check datanode logs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you encounter the following error:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"org.apache.hadoop.hdfs.server.datanode.DataNode: Failed to read expected SASL data transfer protection handshake from client at /XXX.XXX.XXX.XXX:XXXXX. Perhaps the client is running an older version of Hadoop which does not support SASL data transfer protection"}),"\nit means that the current hdfs has enabled encrypted transmission, but the client has not, causing the error."]}),"\n",(0,i.jsx)(n.p,{children:"Use any of the following solutions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Copy hdfs-site.xml and core-site.xml to be/conf and fe/conf directories. (Recommended)"}),"\n",(0,i.jsxs)(n.li,{children:["In hdfs-site.xml, find the corresponding configuration ",(0,i.jsx)(n.code,{children:"dfs.data.transfer.protection"})," and set this parameter in the catalog."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dlf-catalog",children:"DLF Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When using the DLF Catalog, if ",(0,i.jsx)(n.code,{children:"Invalid address"})," occurs during BE reading JindoFS data, add the domain name appearing in the logs to IP mapping in ",(0,i.jsx)(n.code,{children:"/etc/hosts"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If there is no permission to read data, use the ",(0,i.jsx)(n.code,{children:"hadoop.username"})," property to specify a user with permission."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The metadata in the DLF Catalog should be consistent with DLF. When managing metadata using DLF, newly imported partitions in Hive may not be synchronized by DLF, leading to inconsistencies between DLF and Hive metadata. To address this, ensure that Hive metadata is fully synchronized by DLF."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"other-issues",children:"Other Issues"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Query results in garbled characters after mapping Binary type to Doris"}),"\n",(0,i.jsxs)(n.p,{children:["Doris natively does not support the Binary type, so when mapping Binary types from various data lakes or databases to Doris, it is usually done using the String type. The String type can only display printable characters. If you need to query the content of Binary data, you can use the ",(0,i.jsx)(n.code,{children:"TO_BASE64()"})," function to convert it to Base64 encoding before further processing."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analyzing Parquet files"}),"\n",(0,i.jsx)(n.p,{children:"When querying Parquet files, due to potential differences in the format of Parquet files generated by different systems, such as the number of RowGroups, index values, etc., sometimes it is necessary to check the metadata of Parquet files for issue identification or performance analysis. Here is a tool provided to help users analyze Parquet files more conveniently:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download and unzip ",(0,i.jsx)(n.a,{href:"https://github.com/morningman/tools/releases/download/apache-parquet-cli-1.14.0/apache-parquet-cli-1.14.0.tar.xz",children:"Apache Parquet Cli 1.14.0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download the Parquet file to be analyzed to your local machine, assuming the path is ",(0,i.jsx)(n.code,{children:"/path/to/file.parquet"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use the following command to analyze the metadata of the Parquet file:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"./parquet-tools meta /path/to/file.parquet"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more functionalities, refer to ",(0,i.jsx)(n.a,{href:"https://github.com/apache/parquet-java/tree/apache-parquet-1.14.0/parquet-cli",children:"Apache Parquet Cli documentation"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);