"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["686684"],{302125:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>t,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/hdfs","title":"HDFS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/table-valued-functions/hdfs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/hdfs","permalink":"/docs/2.0/sql-manual/sql-functions/table-valued-functions/hdfs","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"HDFS","language":"en"},"sidebar":"docs","previous":{"title":"S3","permalink":"/docs/2.0/sql-manual/sql-functions/table-valued-functions/s3"},"next":{"title":"LOCAL","permalink":"/docs/2.0/sql-manual/sql-functions/table-valued-functions/local"}}'),r=s("785893"),l=s("250065");let d={title:"HDFS",language:"en"},o=void 0,t={},a=[{value:"HDFS",id:"hdfs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"hdfs",children:"HDFS"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"hdfs"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["HDFS table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,r.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})," file format."]}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'hdfs(\n  "uri" = "..",\n  "fs.defaultFS" = "...",\n  "hadoop.username" = "...",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"parameter description"})}),"\n",(0,r.jsx)(n.p,{children:"Related parameters for accessing hdfs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uri"}),": (required) hdfs uri. If the uri path does not exist or the files are empty files, hdfs tvf will return an empty result set."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fs.defaultFS"}),": (required)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.username"}),": (required) Can be any string, but cannot be empty."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.security.authentication"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.username"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.kerberos.principal"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.client.read.shortcircuit"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.domain.socket.path"}),": (optional)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Related parameters for accessing HDFS in HA mode:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.nameservices"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.ha.namenodes.your-nameservices"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.namenode.rpc-address.your-nameservices.your-namenode"}),": (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dfs.client.failover.proxy.provider.your-nameservices"}),": (optional)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"File format parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"format"}),": (required) Currently support ",(0,r.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc/avro"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"column_separator"}),": (optional) default ",(0,r.jsx)(n.code,{children:"\\t"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"line_delimiter"}),": (optional) default ",(0,r.jsx)(n.code,{children:"\\n"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"compress_type"}),": (optional) Currently support ",(0,r.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),". Default value is ",(0,r.jsx)(n.code,{children:"UNKNOWN"}),", it will automatically infer the type based on the suffix of ",(0,r.jsx)(n.code,{children:"uri"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"read_json_by_line"}),": (optional) default ",(0,r.jsx)(n.code,{children:'"true"'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"strip_outer_array"}),": (optional) default ",(0,r.jsx)(n.code,{children:'"false"'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"json_root"}),": (optional) default ",(0,r.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"json_paths"}),": (optional) default ",(0,r.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"num_as_string"}),": (optional) default ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fuzzy_parse"}),": (optional) default ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"The following 2 parameters are used for loading in csv format:"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"trim_double_quotes"}),": Boolean type (optional), the default value is ",(0,r.jsx)(n.code,{children:"false"}),". True means that the outermost double quotes of each field in the csv file are trimmed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"skip_lines"}),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,r.jsx)(n.code,{children:"csv_with_names"})," or ",(0,r.jsx)(n.code,{children:"csv_with_names_and_types"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"other kinds of parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path_partition_keys"}),': (optional) Specifies the column names carried in the file path. For example, if the file path is /path/to/city=beijing/date="2023-07-09", you should fill in ',(0,r.jsx)(n.code,{children:'path_partition_keys="city,date"'}),". It will automatically read the corresponding column names and values from the path during load process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"resource"}),"\uFF1A\uFF08optional\uFF09Specify the resource name. Hdfs Tvf can use the existing Hdfs resource to directly access Hdfs. You can refer to the method for creating an Hdfs resource: ",(0,r.jsx)(n.a,{href:"../../sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE.md",children:"CREATE-RESOURCE"}),". This property is supported starting from version 2.1.4."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,r.jsx)(n.p,{children:"To directly query a TVF or create a VIEW based on that TVF, you need to have usage permission for that resource. To query a VIEW created based on TVF, you only need select permission for that VIEW."})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Read and access csv format files on hdfs storage."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"Read and access csv format files on hdfs storage in HA mode."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv",\n            "dfs.nameservices" = "my_hdfs",\n            "dfs.ha.namenodes.my_hdfs" = "nn1,nn2",\n            "dfs.namenode.rpc-address.my_hdfs.nn1" = "nanmenode01:8020",\n            "dfs.namenode.rpc-address.my_hdfs.nn2" = "nanmenode02:8020",\n            "dfs.client.failover.proxy.provider.my_hdfs" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Can be used with ",(0,r.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"hdfs, table-valued-function, tvf\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed usage of HDFS tvf, please refer to ",(0,r.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-functions/table-valued-functions/s3",children:"S3"})," tvf, The only difference between them is the way of accessing the storage system."]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var i=s(667294);let r={},l=i.createContext(r);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);