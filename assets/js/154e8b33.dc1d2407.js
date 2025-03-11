"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["851021"],{810339:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"lakehouse/sql-convertor/sql-convertor-overview","title":"SQL Dialect Conversion","description":"\x3c!--","source":"@site/docs/lakehouse/sql-convertor/sql-convertor-overview.md","sourceDirName":"lakehouse/sql-convertor","slug":"/lakehouse/sql-convertor/sql-convertor-overview","permalink":"/docs/dev/lakehouse/sql-convertor/sql-convertor-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SQL Dialect Conversion","language":"en"},"sidebar":"docs","previous":{"title":"Statistics","permalink":"/docs/dev/lakehouse/statistics"},"next":{"title":"Presto/Trino SQL Convertor Guide","permalink":"/docs/dev/lakehouse/sql-convertor/presto-trino-guide"}}'),s=r("785893"),o=r("250065");let i={title:"SQL Dialect Conversion",language:"en"},l=void 0,c={},a=[{value:"Deploy Service",id:"deploy-service",level:2},{value:"Use SQL Dialects",id:"use-sql-dialects",level:2},{value:"Presto",id:"presto",level:3},{value:"Clickhouse",id:"clickhouse",level:3},{value:"Release Notes",id:"release-notes",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Starting from version 2.1, Doris can support multiple SQL dialects, such as Presto, Trino, Hive, PostgreSQL, Spark, Clickhouse, etc. With this feature, users can directly use the corresponding SQL dialect to query data in Doris, making it convenient for users to smoothly migrate their existing business to Doris."}),"\n",(0,s.jsx)(n.div,{children:(0,s.jsxs)(n.p,{children:["This feature is currently experimental. If you encounter any issues during use, feel free to provide feedback via mailing lists, ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/issues",children:"GitHub Issue"}),", etc."]})}),"\n",(0,s.jsx)(n.h2,{id:"deploy-service",children:"Deploy Service"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the latest version of ",(0,s.jsx)(n.a,{href:"https://www.selectdb.com/tools/doris-sql-convertor",children:"SQL Convertor"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The SQL dialect conversion tool is based on the open-source ",(0,s.jsx)(n.a,{href:"https://github.com/tobymao/sqlglot",children:"SQLGlot"}),", and is further developed by SelectDB. For more information about SQLGlot, please refer to the ",(0,s.jsx)(n.a,{href:"https://sqlglot.com/sqlglot.html",children:"SQLGlot official website"}),"."]}),(0,s.jsx)(n.p,{children:"SQL Convertor is not maintained or endorsed by Apache Doris. These works are supervised by Committers and Doris PMC. Using these resources and services is entirely at your own discretion, and the community is not responsible for verifying the licensing or validity of these tools."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On any FE node, start the service with the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Configure service port\nvim apiserver/conf/config.conf\n\n# Start SQL Converter for Apache Doris conversion service\nsh apiserver/bin/start.sh\n\n# If a frontend interface is needed, configure the corresponding port in the webserver and start it. If no frontend is needed, you can ignore the following operations\nvim webserver/conf/config.conf\n\n# Start the frontend interface\nsh webserver/bin/start.sh\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This service is stateless and can be started or stopped at any time."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the port in ",(0,s.jsx)(n.code,{children:"apiserver/conf/config.conf"})," to specify any available port, and configure workers to specify the number of threads to start. In concurrent scenarios, you can adjust as needed, with a default of 1."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is recommended to start a separate service on each FE node."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need to start the frontend interface, you can configure the SQL Converter for Apache Doris conversion service address in ",(0,s.jsx)(n.code,{children:"webserver/conf/config.conf"}),", with the default being ",(0,s.jsx)(n.code,{children:"API_HOST=http://127.0.0.1:5001"})]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Doris cluster (version 2.1 or higher)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the URL of the SQL dialect conversion service in Doris with the following command:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"127.0.0.1:5001"})," is the IP and port of the SQL dialect conversion service deployment node."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-sql-dialects",children:"Use SQL Dialects"}),"\n",(0,s.jsx)(n.p,{children:"Currently supported dialect types include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"presto"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"trino"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"clickhouse"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"hive"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"spark"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"postgres"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.h3,{id:"presto",children:"Presto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE  test_sqlconvert (\n    id INT,\n    start_time DATETIME,\n    value STRING,\n    arr_int ARRAY<INT>,\n    arr_str ARRAY<STRING>\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT 'OLAP'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n  \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\nINSERT INTO test_sqlconvert VALUES(1, '2024-05-20 13:14:52', '2024-01-14',[1, 2, 3, 3], ['Hello', 'World']);\n\nSET sql_dialect = presto;\n\nSELECT CAST(start_time AS varchar(20)) AS col1,\n      array_distinct(arr_int) AS col2,\n      FILTER(arr_str, x -> x LIKE '%World%') AS col3,\n      to_date(value,'%Y-%m-%d') AS col4,\n      YEAR(start_time) AS col5,\n      date_add('month', 1, start_time) AS col6,\n      REGEXP_EXTRACT_ALL(value, '-.') AS col7,\n      JSON_EXTRACT('{\"id\": \"33\"}', '$.id')AS col8,\n      element_at(arr_int, 1) AS col9,\n      date_trunc('day',start_time) AS col10\n    FROM test_sqlconvert\n    WHERE date_trunc('day',start_time) = DATE '2024-05-20'     \nORDER BY id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"clickhouse",children:"Clickhouse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET sql_dialect = clickhouse;\n\nSELECT toString(start_time) AS col1,\n       arrayCompact(arr_int) AS col2,\n       arrayFilter(x -> x LIKE '%World%',arr_str) AS col3,\n       toDate(value) AS col4,\n       toYear(start_time) AS col5,\n       addMonths(start_time, 1) AS col6,\n       extractAll(value, '-.') AS col7,\n       JSONExtractString('{\"id\": \"33\"}' , 'id') AS col8,\n       arrayElement(arr_int, 1) AS col9,\n       date_trunc('day',start_time) AS col10\n    FROM test_sqlconvert\n    WHERE date_trunc('day',start_time)= '2024-05-20 00:00:00'     \nORDER BY id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"release-notes",children:"Release Notes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.selectdb.com/docs/ecosystem/sql-converter/sql-converter-release-node",children:"SQL Convertor Release Notes"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);