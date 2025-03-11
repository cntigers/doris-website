"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875964"],{194731:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/local","title":"LOCAL","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-valued-functions/local.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/local","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/local","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LOCAL","language":"en"},"sidebar":"docs","previous":{"title":"HDFS","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/hdfs"},"next":{"title":"QUERY","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/query"}}'),r=s("785893"),l=s("250065");let i={title:"LOCAL",language:"en"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Local table-valued-function(tvf), allows users to read and access local file contents on be node, just like accessing relational table. Currently supports ",(0,r.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})," file format."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'LOCAL(\n  "file_path" = "<file_path>", \n  "backend_id" = "<backend_id>",\n  "format" = "<format>"\n  [, "<optional_property_key>" = "<optional_property_value>" [, ...] ]\n  );\n'})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Remarks"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"file_path"})}),(0,r.jsxs)(n.td,{children:["The path of the file to be read, which is relative to the ",(0,r.jsx)(n.code,{children:"user_files_secure_path"})," directory. The ",(0,r.jsx)(n.code,{children:"user_files_secure_path"})," parameter is a ",(0,r.jsx)(n.a,{href:"/docs/3.0/admin-manual/config/be-config",children:"BE configuration item"}),". ",(0,r.jsx)(n.br,{})," The path cannot include ",(0,r.jsx)(n.code,{children:".."}),", and glob syntax can be used for pattern matching, such as ",(0,r.jsx)(n.code,{children:"logs/*.log"}),"."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"backend_id"})}),(0,r.jsxs)(n.td,{children:["The ID of the BE node where the file is located. It can be obtained via the ",(0,r.jsx)(n.code,{children:"show backends"})," command."]}),(0,r.jsx)(n.td,{children:"Before version 2.1.1, Doris only supports specifying a BE node to read local data files on that node."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"format"})}),(0,r.jsxs)(n.td,{children:["The file format, which is required. Supported formats are ",(0,r.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"}),"."]}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Remarks"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"shared_storage"})}),(0,r.jsxs)(n.td,{children:["Defaults to false. If true, the specified file is located on shared storage (e.g., NAS). The shared storage must support POSIX file interfaces and be mounted on all BE nodes. ",(0,r.jsx)(n.br,{})," When ",(0,r.jsx)(n.code,{children:"shared_storage"})," is true, ",(0,r.jsx)(n.code,{children:"backend_id"})," can be omitted. Doris may utilize all BE nodes to access the data. If ",(0,r.jsx)(n.code,{children:"backend_id"})," is set, the data will be accessed only on the specified BE node."]}),(0,r.jsx)(n.td,{children:"Supported starting from version 2.1.2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"column_separator"})}),(0,r.jsxs)(n.td,{children:["The column separator, optional, defaults to ",(0,r.jsx)(n.code,{children:"\\t"}),"."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"line_delimiter"})}),(0,r.jsxs)(n.td,{children:["The line delimiter, optional, defaults to ",(0,r.jsx)(n.code,{children:"\\n"}),"."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"compress_type"})}),(0,r.jsxs)(n.td,{children:["The compression type, optional. Supported types are ",(0,r.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),". Defaults to ",(0,r.jsx)(n.code,{children:"UNKNOWN"}),", and the type will be automatically inferred from the ",(0,r.jsx)(n.code,{children:"uri"})," suffix."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"read_json_by_line"})}),(0,r.jsxs)(n.td,{children:["For JSON format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"strip_outer_array"})}),(0,r.jsxs)(n.td,{children:["For JSON format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json_root"})}),(0,r.jsx)(n.td,{children:"For JSON format imports, optional, defaults to empty."}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json_paths"})}),(0,r.jsx)(n.td,{children:"For JSON format imports, optional, defaults to empty."}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"num_as_string"})}),(0,r.jsxs)(n.td,{children:["For JSON format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"fuzzy_parse"})}),(0,r.jsxs)(n.td,{children:["For JSON format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),(0,r.jsxs)(n.td,{children:["Refer to: ",(0,r.jsx)(n.a,{href:"../../../data-operate/import/file-format/json",children:"Json Load"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trim_double_quotes"})}),(0,r.jsxs)(n.td,{children:["For CSV format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"false"}),". If true, it will trim the outermost double quotes around each field in the CSV file."]}),(0,r.jsx)(n.td,{children:"For CSV format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"skip_lines"})}),(0,r.jsxs)(n.td,{children:["For CSV format imports, optional, defaults to ",(0,r.jsx)(n.code,{children:"0"}),", which means skipping the first few lines of the CSV file. When the format is ",(0,r.jsx)(n.code,{children:"csv_with_names"})," or ",(0,r.jsx)(n.code,{children:"csv_with_names_and_types"}),", this parameter is ignored."]}),(0,r.jsx)(n.td,{children:"For CSV format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"path_partition_keys"})}),(0,r.jsxs)(n.td,{children:["Optional, specifies the partition column names carried in the file path, e.g., ",(0,r.jsx)(n.code,{children:'/path/to/city=beijing/date="2023-07-09"'}),", then fill in ",(0,r.jsx)(n.code,{children:'path_partition_keys="city,date"'}),". This will automatically read the corresponding column names and values from the path for import."]}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"global"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For more detailed usage of local tvf, please refer to ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3",children:"S3"})," tvf, The only difference between them is the way of accessing the storage system."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Access data on NAS through local tvf"}),"\n",(0,r.jsx)(n.p,{children:"NAS shared storage allows to be mounted to multiple nodes at the same time. Each node can access files in the shared storage just like local files. Therefore, the NAS can be thought of as a local file system, accessed through local tvf."}),"\n",(0,r.jsxs)(n.p,{children:["When setting ",(0,r.jsx)(n.code,{children:'"shared_storage" = "true"'}),", Doris will think that the specified file can be accessed from any BE node. When a set of files is specified using wildcards, Doris will distribute requests to access files to multiple BE nodes, so that multiple nodes can be used to perform distributed file scanning and improve query performance."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Analyze the log file on specified BE:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from local(\n        "file_path" = "log/be.out",\n        "backend_id" = "10006",\n        "format" = "csv")\n       where c1 like "%start_time%" limit 10;\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------+\n| c1                                                     |\n+--------------------------------------------------------+\n| start time: 2023 \u5E74 08 \u6708 07 \u65E5 \u661F\u671F\u4E00 23:20:32 CST       |\n| start time: 2023 \u5E74 08 \u6708 07 \u65E5 \u661F\u671F\u4E00 23:32:10 CST       |\n| start time: 2023 \u5E74 08 \u6708 08 \u65E5 \u661F\u671F\u4E8C 00:20:50 CST       |\n| start time: 2023 \u5E74 08 \u6708 08 \u65E5 \u661F\u671F\u4E8C 00:29:15 CST       |\n+--------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Read and access csv format files located at path ",(0,r.jsx)(n.code,{children:"${DORIS_HOME}/student.csv"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+---------+--------+\n| c1   | c2      | c3     |\n+------+---------+--------+\n| 1    | alice   | 18     |\n| 2    | bob     | 20     |\n| 3    | jack    | 24     |\n| 4    | jackson | 19     |\n| 5    | liming  | d18    |\n+------+---------+--------+\n```--+---------+--------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Query files on NAS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'select * from local(\n        "file_path" = "/mnt/doris/prefix_*.txt",\n        "format" = "csv",\n        "column_separator" =",",\n        "shared_storage" = "true");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n+------+------+------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Can be used with ",(0,r.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'desc function local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);