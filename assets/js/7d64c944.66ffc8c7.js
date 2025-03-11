"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["471904"],{483960:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"db-connect/database-connect","title":"Connecting by MySQL Protocol","description":"\x3c!--","source":"@site/docs/db-connect/database-connect.md","sourceDirName":"db-connect","slug":"/db-connect/database-connect","permalink":"/docs/dev/db-connect/database-connect","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Connecting by MySQL Protocol","language":"en"},"sidebar":"docs","previous":{"title":"Deploying on AWS","permalink":"/docs/dev/install/deploy-on-cloud/doris-on-aws"},"next":{"title":"Connecting by Arrow Flight SQL Protocol","permalink":"/docs/dev/db-connect/arrow-flight-sql-connect"}}'),i=t("785893"),r=t("250065");let s={title:"Connecting by MySQL Protocol",language:"en"},a=void 0,l={},c=[{value:"MySQL Client",id:"mysql-client",level:2},{value:"MySQL JDBC Connector",id:"mysql-jdbc-connector",level:2},{value:"DBeaver",id:"dbeaver",level:2},{value:"Built-in Web UI of Doris",id:"built-in-web-ui-of-doris",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Apache Doris adopts the MySQL network connection protocol. It is compatible with command-line tools, JDBC/ODBC drivers, and various visualization tools within the MySQL ecosystem. Additionally, Apache Doris comes with a built-in, easy-to-use Web UI. This guide is about how to connect to Doris using MySQL Client, MySQL JDBC Connector, DBeaver, and the built-in Doris Web UI."}),"\n",(0,i.jsx)(n.h2,{id:"mysql-client",children:"MySQL Client"}),"\n",(0,i.jsxs)(n.p,{children:["Download MySQL Client from the MySQL official website or use the pre-installed ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/downloads/mysql/",children:"MySQL client"})," for Linux provided by the Apache Doris community. Currently, Doris is primarily compatible with MySQL 5.7 and later clients."]}),"\n",(0,i.jsxs)(n.p,{children:["Extract the downloaded MySQL client. In the ",(0,i.jsx)(n.code,{children:"bin/"})," directory, find the ",(0,i.jsx)(n.code,{children:"mysql"})," command-line tool. Execute the following command to connect to Doris:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# FE_IP represents the listening address of the FE node, while FE_QUERY_PORT represents the port of the MySQL protocol service of the FE. This corresponds to the query_port parameter in fe.conf and it defaults to 9030.\nmysql -h FE_IP -P FE_QUERY_PORT -u USER_NAME \n"})}),"\n",(0,i.jsx)(n.p,{children:"After login, the following message will be displayed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Welcome to the MySQL monitor.  Commands end with ; or \\g.                               \nYour MySQL connection id is 236                                                         \nServer version: 5.7.99 Doris version doris-2.0.3-rc06-37d31a5                           \nCopyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.            \nOracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.                                     Type 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.          mysql> \n"})}),"\n",(0,i.jsx)(n.h2,{id:"mysql-jdbc-connector",children:"MySQL JDBC Connector"}),"\n",(0,i.jsx)(n.p,{children:"Download the corresponding JDBC Connector from the official MySQL website."}),"\n",(0,i.jsx)(n.p,{children:"Example of connection code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'String user = "user_name";\nString password = "user_password";\nString newUrl = "jdbc:mysql://FE_IP:FE_PORT/demo\uFF1FuseUnicode=true&characterEncoding=utf8&useTimezone=true&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true";\ntry {\n    Connection myCon = DriverManager.getConnection(newUrl, user, password);\n    Statement stmt = myCon.createStatement();\n    ResultSet result = stmt.executeQuery("show databases");\n    ResultSetMetaData metaData = result.getMetaData();\n    int columnCount = metaData.getColumnCount();\n    while (result.next()) {\n        for (int i = 1; i <= columnCount; i++) {\n            System.out.println(result.getObject(i));\n        }\n    }\n} catch (SQLException e) {\n    log.error("get JDBC connection exception.", e);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dbeaver",children:"DBeaver"}),"\n",(0,i.jsx)(n.p,{children:"Create a MySQL connection to Apache Doris:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"database-connect-dbeaver",src:t(893822).Z+"",width:"1280",height:"1083"})}),"\n",(0,i.jsx)(n.p,{children:"Query in DBeaver:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"query-in-dbeaver",src:t(812449).Z+"",width:"1280",height:"946"})}),"\n",(0,i.jsx)(n.h2,{id:"built-in-web-ui-of-doris",children:"Built-in Web UI of Doris"}),"\n",(0,i.jsx)(n.p,{children:"Doris FE has a built-in Web UI. It allows users to perform SQL queries and view other related information without the need to install the MySQL client"}),"\n",(0,i.jsxs)(n.p,{children:["To access the Web UI, simply enter the URL in a web browser: http://fe_ip:fe_port, for example, ",(0,i.jsx)(n.a,{href:"http://172.20.63.118:8030/",children:"http://172.20.63.118:8030"}),". This will open the built-in Web console of Doris."]}),"\n",(0,i.jsx)(n.p,{children:"The built-in Web console is primarily intended for use by the root account of the cluster. By default, the root account password is empty after installation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"web-login-username-password",src:t(159846).Z+"",width:"1280",height:"724"})}),"\n",(0,i.jsx)(n.p,{children:"For example, you can execute the following command in the Playground to add a BE node."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Doris-Web-UI-Playground-en",src:t(219928).Z+"",width:"1280",height:"653"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxadmonitiontitle,{}),(0,i.jsx)(n.p,{children:"For successful execution of statements that are not related to specific databases/tables in the Playground, it is necessary to randomly select a database from the left-hand database panel. This limitation will be removed later."}),(0,i.jsx)(n.p,{children:"The current built-in web console cannot execute SET type SQL statements. Therefore, the web console does not support statements like SET PASSWORD FOR 'user' = PASSWORD('user_password')."})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},219928:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/Doris-Web-UI-Playground-en-ce00cb539e0dc6a110a17e5bd057a10b.png"},893822:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/database-connect-dbeaver-e74120612bdbc9d4a14b79a5819ba6d5.png"},812449:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/query-in-dbeaver-11f3e80e04942de7bd200a685655da3c.png"},159846:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/web-login-username-password-0e96b0a7f82ba3609666352a6f56b26a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var o=t(667294);let i={},r=o.createContext(i);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);