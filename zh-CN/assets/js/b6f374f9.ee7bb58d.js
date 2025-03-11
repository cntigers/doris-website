"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["464946"],{128949:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>i});var d=JSON.parse('{"id":"lakehouse/database/ibm-db2","title":"IBM Db2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/database/ibm-db2.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/ibm-db2","permalink":"/zh-CN/docs/3.0/lakehouse/database/ibm-db2","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IBM Db2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SQL Server","permalink":"/zh-CN/docs/3.0/lakehouse/database/sqlserver"},"next":{"title":"ClickHouse","permalink":"/zh-CN/docs/3.0/lakehouse/database/clickhouse"}}'),t=s("785893"),l=s("250065");let r={title:"IBM Db2",language:"zh-CN"},i=void 0,c={},h=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u8FDE\u63A5 IBM Db2",id:"\u8FDE\u63A5-ibm-db2",level:2},{value:"\u5C42\u7EA7\u6620\u5C04",id:"\u5C42\u7EA7\u6620\u5C04",level:2},{value:"\u7C7B\u578B\u6620\u5C04",id:"\u7C7B\u578B\u6620\u5C04",level:2},{value:"IBM Db2 \u5230 Doris \u7C7B\u578B\u6620\u5C04",id:"ibm-db2-\u5230-doris-\u7C7B\u578B\u6620\u5C04",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"\u8C13\u8BCD\u4E0B\u63A8",id:"\u8C13\u8BCD\u4E0B\u63A8",level:3},{value:"\u884C\u6570\u9650\u5236",id:"\u884C\u6570\u9650\u5236",level:3},{value:"\u8F6C\u4E49\u5B57\u7B26",id:"\u8F6C\u4E49\u5B57\u7B26",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function x(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5 IBM Db2 \u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E IBM Db2 \u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,t.jsx)(e.p,{children:"\u8981\u8FDE\u63A5\u5230 IBM Db2 \u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"IBM Db2 11.5.x \u6216\u66F4\u9AD8\u7248\u672C"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["IBM Db2 \u6570\u636E\u5E93\u7684 JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u60A8\u53EF\u4EE5\u4ECE ",(0,t.jsx)(e.a,{href:"https://mvnrepository.com/artifact/com.ibm.db2/jcc",children:"Maven \u4ED3\u5E93"}),"\u4E0B\u8F7D\u6700\u65B0\u6216\u6307\u5B9A\u7248\u672C\u7684 IBM Db2 \u9A71\u52A8\u7A0B\u5E8F\u3002",(0,t.jsx)(e.strong,{children:"\u63A8\u8350\u4F7F\u7528 IBM db2 jcc 11.5.8.0 \u7248\u672C"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Doris \u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u548C IBM Db2 \u670D\u52A1\u5668\u4E4B\u95F4\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 51000\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FDE\u63A5-ibm-db2",children:"\u8FDE\u63A5 IBM Db2"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG db2 PROPERTIES (\n    "type"="jdbc",\n    "user"="USERNAME",\n    "password"="PASSWORD",\n    "jdbc_url" = "jdbc:db2://host:port/database",\n    "driver_url" = "jcc-11.5.8.0.jar",\n    "driver_class" = "com.ibm.db2.jcc.DB2Driver"\n)\n'})}),"\n",(0,t.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"jdbc_url"})," \u5B9A\u4E49\u8981\u4F20\u9012\u7ED9 IBM Db2 \u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u53C2\u6570\u3002\n\u652F\u6301\u7684 URL \u7684\u53C2\u6570\u53EF\u5728 ",(0,t.jsx)(e.a,{href:"https://www.ibm.com/docs/en/db2-big-sql/5.0?topic=drivers-jdbc-driver",children:"Db2 JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863"})," \u4E2D\u627E\u5230\u3002"]})}),"\n",(0,t.jsx)(e.h2,{id:"\u5C42\u7EA7\u6620\u5C04",children:"\u5C42\u7EA7\u6620\u5C04"}),"\n",(0,t.jsxs)(e.p,{children:["\u6620\u5C04 IBM Db2 \u65F6\uFF0CDoris \u7684 Database \u5BF9\u5E94\u4E8E DB2 \u4E2D\u6307\u5B9A DataBase\uFF08",(0,t.jsx)(e.code,{children:"jdbc_url"}),' \u53C2\u6570\u4E2D\u7684 "database"\uFF09\u4E0B\u7684\u4E00\u4E2A Schema\u3002\u800C Doris \u7684 Database \u4E0B\u7684 Table \u5219\u5BF9\u5E94\u4E8E DB2 \u4E2D Schema \u4E0B\u7684 Tables\u3002\u5373\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Doris"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"IBM Db2"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Catalog"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"DataBase"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Database"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Schema"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Table"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u7C7B\u578B\u6620\u5C04",children:"\u7C7B\u578B\u6620\u5C04"}),"\n",(0,t.jsx)(e.h3,{id:"ibm-db2-\u5230-doris-\u7C7B\u578B\u6620\u5C04",children:"IBM Db2 \u5230 Doris \u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"IBM Db2 Type"}),(0,t.jsx)(e.th,{children:"Doris Type"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SMALLINT"}),(0,t.jsx)(e.td,{children:"SMALLINT"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DOUBLE PRECISION"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"REAL"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"NUMERIC"}),(0,t.jsx)(e.td,{children:"DECIMAL"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DECIMAL"}),(0,t.jsx)(e.td,{children:"DECIMAL"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DECFLOAT"}),(0,t.jsx)(e.td,{children:"DECIMAL"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TIMESTAMP"}),(0,t.jsx)(e.td,{children:"DATETIME"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CHAR"}),(0,t.jsx)(e.td,{children:"CHAR"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CHAR VARYING"}),(0,t.jsx)(e.td,{children:"VARCHAR"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VARCHAR"}),(0,t.jsx)(e.td,{children:"VARCHAR"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"LONG VARCHAR"}),(0,t.jsx)(e.td,{children:"VARCHAR"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VARGRAPHIC"}),(0,t.jsx)(e.td,{children:"STRING"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"LONG VARGRAPHIC"}),(0,t.jsx)(e.td,{children:"STRING"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TIME"}),(0,t.jsx)(e.td,{children:"STRING"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CLOB"}),(0,t.jsx)(e.td,{children:"STRING"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"XML"}),(0,t.jsx)(e.td,{children:"STRING"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"OTHER"}),(0,t.jsx)(e.td,{children:"UNSUPPORTED"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,t.jsx)(e.h3,{id:"\u8C13\u8BCD\u4E0B\u63A8",children:"\u8C13\u8BCD\u4E0B\u63A8"}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53\u6267\u884C\u7C7B\u4F3C\u4E8E ",(0,t.jsx)(e.code,{children:"where dt = '2022-01-01'"})," \u8FD9\u6837\u7684\u67E5\u8BE2\u65F6\uFF0CDoris \u80FD\u591F\u5C06\u8FD9\u4E9B\u8FC7\u6EE4\u6761\u4EF6\u4E0B\u63A8\u5230\u5916\u90E8\u6570\u636E\u6E90\uFF0C\u4ECE\u800C\u76F4\u63A5\u5728\u6570\u636E\u6E90\u5C42\u9762\u6392\u9664\u4E0D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u83B7\u53D6\u548C\u4F20\u8F93\u3002\u8FD9\u5927\u5927\u63D0\u9AD8\u4E86\u67E5\u8BE2\u6027\u80FD\uFF0C\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u5BF9\u5916\u90E8\u6570\u636E\u6E90\u7684\u8D1F\u8F7D\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u884C\u6570\u9650\u5236",children:"\u884C\u6570\u9650\u5236"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C\u5728\u67E5\u8BE2\u4E2D\u5E26\u6709 limit \u5173\u952E\u5B57\uFF0CDoris \u4F1A\u5C06 limit \u4E0B\u63A8\u5230 IBM Db2 \u6570\u636E\u5E93\uFF0C\u4EE5\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u91CF\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u8F6C\u4E49\u5B57\u7B26",children:"\u8F6C\u4E49\u5B57\u7B26"}),"\n",(0,t.jsx)(e.p,{children:'Doris \u4F1A\u5728\u4E0B\u53D1\u5230 IBM Db2 \u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u81EA\u52A8\u5728\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0A\u52A0\u4E0A\u8F6C\u4E49\u7B26\uFF1A("")\uFF0C\u4EE5\u907F\u514D\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0E IBM Db2 \u5185\u90E8\u5173\u952E\u5B57\u51B2\u7A81\u3002'}),"\n",(0,t.jsx)(e.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u901A\u8FC7 JDBC Catalog \u8BFB\u53D6 IBM Db2 \u6570\u636E\u65F6\u51FA\u73B0 ",(0,t.jsx)(e.code,{children:"Invalid operation: result set is closed. ERRORCODE=-4470"})," \u5F02\u5E38"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u521B\u5EFA IBM Db2 Catalog \u7684 jdbc_url \u8FDE\u63A5\u4E32\u4E2D\u6DFB\u52A0\u8FDE\u63A5\u53C2\u6570\uFF1A",(0,t.jsx)(e.code,{children:"allowNextOnExhaustedResultSet=1;resultSetHoldability=1;"}),"\u3002\u5982\uFF1A\n",(0,t.jsx)(e.code,{children:"jdbc:db2://host:port/database:allowNextOnExhaustedResultSet=1;resultSetHoldability=1;"}),"\u3002"]}),"\n"]}),"\n"]})]})}function j(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var d=s(667294);let t={},l=d.createContext(t);function r(n){let e=d.useContext(l);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);