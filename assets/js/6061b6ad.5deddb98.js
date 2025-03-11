"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["340709"],{488256:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"gettingStarted/quick-start","title":"Quick Start","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/gettingStarted/quick-start.md","sourceDirName":"gettingStarted","slug":"/gettingStarted/quick-start","permalink":"/docs/3.0/gettingStarted/quick-start","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Quick Start","language":"en"},"sidebar":"docs","previous":{"title":"Introduction to Apache Doris","permalink":"/docs/3.0/gettingStarted/what-is-apache-doris"},"next":{"title":"Environment Checking","permalink":"/docs/3.0/install/preparation/env-checking"}}'),i=t("785893"),r=t("250065");let l={title:"Quick Start",language:"en"},a=void 0,o={},c=[{value:"Use Docker for Quick Deployment",id:"use-docker-for-quick-deployment",level:2},{value:"Step 1: Create the docker-compose.yaml File",id:"step-1-create-the-docker-composeyaml-file",level:3},{value:"Step 2: Start Cluster",id:"step-2-start-cluster",level:3},{value:"Step 3: Connect to the cluster using MySQL client and check the cluster status",id:"step-3-connect-to-the-cluster-using-mysql-client-and-check-the-cluster-status",level:3},{value:"Local Quick Deployment",id:"local-quick-deployment",level:2},{value:"Step 1: Download the Binary Package",id:"step-1-download-the-binary-package",level:3},{value:"Step 2: Modify the Environment Variables",id:"step-2-modify-the-environment-variables",level:3},{value:"Step 3: Install FE",id:"step-3-install-fe",level:3},{value:"Step 4: Install BE",id:"step-4-install-be",level:3},{value:"Run Queries",id:"run-queries",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"Warning:",type:"caution",children:[(0,i.jsx)(n.p,{children:"The following rapid deployment methods are intended solely for local development and testing, and should not be used in production environments. The reasons are as follows:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Vulnerability"}),": Data can be easily lost when using Docker deployment, as data is lost upon container destruction. Manual deployment of single-replica instances lacks data redundancy and backup capabilities, meaning machine failures could result in data loss."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Single-Replica Configuration"}),": The table creation statements in the examples are all single-replica. In a production environment, multi-replica storage should be used to ensure data reliability."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"use-docker-for-quick-deployment",children:"Use Docker for Quick Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Starting from Doris version 2.1.8, Docker can be used for rapid deployment."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-create-the-docker-composeyaml-file",children:"Step 1: Create the docker-compose.yaml File"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the following content into the docker-compose.yaml file, and replace the ",(0,i.jsx)(n.code,{children:"DORIS_QUICK_START_VERSION"})," parameter with the specified version, such as ",(0,i.jsx)(n.code,{children:"3.0.1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'version: "3"\nservices:\n  fe:\n    image: apache/doris.fe-ubuntu:${DORIS_QUICK_START_VERSION}\n    hostname: fe\n    environment:\n     - FE_SERVERS=fe1:127.0.0.1:9010\n     - FE_ID=1\n    network_mode: host\n  be:\n    image: apache/doris.be-ubuntu:${DORIS_QUICK_START_VERSION}\n    hostname: be\n    environment:\n     - FE_SERVERS=fe1:127.0.0.1:9010\n     - BE_ADDR=127.0.0.1:9050\n    depends_on:\n      - fe\n    network_mode: host\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-start-cluster",children:"Step 2: Start Cluster"}),"\n",(0,i.jsx)(n.p,{children:"Start the cluster using the docker-compose command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker-compose -f ./docker-compose.yaml up -d\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-connect-to-the-cluster-using-mysql-client-and-check-the-cluster-status",children:"Step 3: Connect to the cluster using MySQL client and check the cluster status"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"## Check the FE status to ensure that both the Join and Alive columns are true.\nmysql -uroot -P9030 -h127.0.0.1 -e 'SELECT `host`, `join`, `alive` FROM frontends()'\n+-----------+------+-------+\n| host      | join | alive |\n+-----------+------+-------+\n| 127.0.0.1 | true | true  |\n+-----------+------+-------+\n\n## Check the BE status to ensure that the Alive column is true.\nmysql -uroot -P9030 -h127.0.0.1 -e 'SELECT `host`, `alive` FROM backends()'\n+-----------+-------+\n| host      | alive |\n+-----------+-------+\n| 127.0.0.1 |     1 |\n+-----------+-------+\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"local-quick-deployment",children:"Local Quick Deployment"}),"\n",(0,i.jsx)(n.admonition,{title:"Environment Recommendations:",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Operating System"}),": It is recommended to use AMD/ARM mainstream Linux environments such as CentOS 7.1 or Ubuntu 16.04 and above."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Java Environment"}),": It is advised to use the Java 8 runtime environment. For non-Oracle JDK commercial license users, please use the free Oracle JDK 8u300 or later versions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User Permissions"}),": It is recommended to create a new Doris user on Linux and avoid using the root user for operations."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"step-1-download-the-binary-package",children:"Step 1: Download the Binary Package"}),"\n",(0,i.jsxs)(n.p,{children:["Download the corresponding binary installation package from the Apache Doris website ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/en-us/download",children:"here"}),", and extract it."]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-modify-the-environment-variables",children:"Step 2: Modify the Environment Variables"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Modify the system's maximum open file descriptor limit"})}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to adjust the maximum file descriptor limit. After making this change, you need to restart the session to apply the configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"vi /etc/security/limits.conf \n* soft nofile 1000000\n* hard nofile 1000000\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Modify Virtual Memory Area"})}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to permanently modify the virtual memory area to at least 2000000, and apply the change immediately:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nvm.max_map_count = 2000000\nEOF\n\n## Take effect immediately\nsysctl -p\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-install-fe",children:"Step 3: Install FE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure FE"})}),"\n",(0,i.jsxs)(n.p,{children:["Modify the following contents in the FE configuration file ",(0,i.jsx)(n.code,{children:"apache-doris/fe/conf/fe.conf"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"## Specify Java environment\nJAVA_HOME=/home/doris/jdk\n\n## Specify the CIDR block for FE listening IP\npriority_networks=127.0.0.1/32\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start FE"})}),"\n",(0,i.jsxs)(n.p,{children:["Run the FE process by executing the ",(0,i.jsx)(n.code,{children:"start_fe.sh"})," script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"apache-doris/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check FE Status"})}),"\n",(0,i.jsx)(n.p,{children:"Connect to the cluster using MySQL client and check the cluster status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'## Check FE Status to ensure that both the Join and Alive columns are true\nmysql -uroot -P9030 -h127.0.0.1 -e "show frontends;"\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n| Name                                    | Host      | EditLogPort | HttpPort | QueryPort | RpcPort | Role     | IsMaster | ClusterId | Join | Alive | ReplayedJournalId | LastHeartbeat       | IsHelper | ErrMsg | Version                 | CurrentConnected |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n| fe_9d0169c5_b01f_478c_96ab_7c4e8602ec57 | 127.0.0.1 | 9010        | 8030     | 9030      | 9020    | FOLLOWER | true     | 656872880 | true | true  | 276               | 2024-07-28 18:07:39 | true     |        | doris-2.0.12-2971efd194 | Yes              |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-install-be",children:"Step 4: Install BE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure BE"})}),"\n",(0,i.jsxs)(n.p,{children:["Modify the following contents in the BE configuration file ",(0,i.jsx)(n.code,{children:"apache-doris/be/conf/be.conf"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"## Specify Java environment\nJAVA_HOME=/home/doris/jdk\n\n## Specify the CIDR block for BE's listening IP\npriority_networks=127.0.0.1/32\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start BE"})}),"\n",(0,i.jsx)(n.p,{children:"Start the BE process with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"apache-doris/be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Register BE Node in the Cluster"})}),"\n",(0,i.jsx)(n.p,{children:"Connect to the cluster using MySQL client:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P9030 -h127.0.0.1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use the ADD BACKEND command to register the BE node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "127.0.0.1:9050";\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check BE Status"})}),"\n",(0,i.jsx)(n.p,{children:"Connect to the cluster using MySQL client and check the cluster status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'## Check BE Status to ensure that the Alive column is true\nmysql -uroot -P9030 -h127.0.0.1 -e "show backends;"\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| BackendId | Host      | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | TabletNum | DataUsedCapacity | TrashUsedCapcacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | RemoteUsedCapacity | Tag                      | ErrMsg | Version                 | Status                                                                                                                        | HeartbeatFailureCounter | NodeRole |\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| 10156     | 127.0.0.1 | 9050          | 9060   | 8040     | 8060     | 2024-07-28 17:59:14 | 2024-07-28 18:08:24 | true  | false                | 14        | 0.000            | 0.000              | 8.342 GB      | 19.560 GB     | 57.35 % | 57.35 %        | 0.000              | {"location" : "default"} |        | doris-2.0.12-2971efd194 | {"lastSuccessReportTabletsTime":"2024-07-28 18:08:14","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false} | 0                       | mix      |\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run-queries",children:"Run Queries"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Connect to the cluster using MySQL client:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P9030 -h127.0.0.1\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create database and test table:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'create database demo;\n\nuse demo; \ncreate table mytable\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.05",    \n    k3 CHAR(10) COMMENT "string column",    \n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n) \nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 1;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Import test data:"})}),"\n",(0,i.jsx)(n.p,{children:"Insert test data using the Insert Into statement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into mytable values\n(1,0.14,'a1',20),\n(2,1.04,'b2',21),\n(3,3.14,'c3',22),\n(4,4.35,'d4',23);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Execute the following SQL query in the MySQL client to view the imported data:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MySQL [demo]> select * from demo.mytable;\n+------+------+------+------+\n| k1   | k2   | k3   | k4   |\n+------+------+------+------+\n|    1 | 0.14 | a1   |   20 |\n|    2 | 1.04 | b2   |   21 |\n|    3 | 3.14 | c3   |   22 |\n|    4 | 4.35 | d4   |   23 |\n+------+------+------+------+\n4 rows in set (0.10 sec)\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);