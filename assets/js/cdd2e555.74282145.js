"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["795638"],{580366:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"admin-manual/cluster-management/load-balancing","title":"Load Balancing","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/cluster-management/load-balancing.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/load-balancing","permalink":"/docs/3.0/admin-manual/cluster-management/load-balancing","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Load Balancing","language":"en"},"sidebar":"docs","previous":{"title":"Elastic Scaling","permalink":"/docs/3.0/admin-manual/cluster-management/elastic-expansion"},"next":{"title":"Time Zone","permalink":"/docs/3.0/admin-manual/cluster-management/time-zone"}}'),o=s("785893"),i=s("250065");let l={title:"Load Balancing",language:"en"},t=void 0,a={},c=[{value:"Load Balancing",id:"load-balancing",level:2},{value:"01 JDBC URL",id:"01-jdbc-url",level:3},{value:"02 Nginx",id:"02-nginx",level:3},{value:"Install Nginx",id:"install-nginx",level:4},{value:"Configure Reverse Proxy",id:"configure-reverse-proxy",level:4},{value:"Start Nginx",id:"start-nginx",level:4},{value:"Verify",id:"verify",level:4},{value:"03 HAProxy",id:"03-haproxy",level:3},{value:"Install HAProxy",id:"install-haproxy",level:4},{value:"Configure HAProxy",id:"configure-haproxy",level:4},{value:"Start HAProxy",id:"start-haproxy",level:4},{value:"Verify",id:"verify-1",level:4},{value:"04 ProxySQL",id:"04-proxysql",level:3},{value:"Install ProxySQL",id:"install-proxysql",level:4},{value:"Configure ProxySQL",id:"configure-proxysql",level:4},{value:"Connect to ProxySQL Admin Database",id:"connect-to-proxysql-admin-database",level:4},{value:"Configure Backend Doris FE in ProxySQL",id:"configure-backend-doris-fe-in-proxysql",level:4},{value:"Configure Monitoring for Doris FE Nodes",id:"configure-monitoring-for-doris-fe-nodes",level:4},{value:"Client IP Passthrough",id:"client-ip-passthrough",level:2},{value:"Enable Proxy Protocol Support in Doris",id:"enable-proxy-protocol-support-in-doris",level:3},{value:"01 Nginx",id:"01-nginx",level:3},{value:"02 HAProxy",id:"02-haproxy",level:3},{value:"Verify IP Passthrough Success",id:"verify-ip-passthrough-success",level:3}];function d(e){let n={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Users connect to Doris through FE's query port (",(0,o.jsx)(n.code,{children:"query_port"}),", default 9030) using the MySQL protocol. When deploying multiple FE nodes, users can deploy a load balancing layer on top of multiple FEs to achieve high availability for Doris queries."]}),"\n",(0,o.jsx)(n.p,{children:"This document introduces various load balancing solutions suitable for Doris and explains how to implement client IP passthrough using the Proxy Protocol."}),"\n",(0,o.jsx)(n.h2,{id:"load-balancing",children:"Load Balancing"}),"\n",(0,o.jsx)(n.p,{children:"This article uses the following three FE nodes as examples for demonstrating the steps:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"192.168.1.101:9030\n192.168.1.102:9030\n192.168.1.103:9030\n"})}),"\n",(0,o.jsx)(n.p,{children:"Proxy server node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"192.168.1.100\n"})}),"\n",(0,o.jsx)(n.h3,{id:"01-jdbc-url",children:"01 JDBC URL"}),"\n",(0,o.jsx)(n.p,{children:"Use the built-in load balancing configuration in JDBC URL."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"jdbc:mysql:loadbalance://192.168.1.101:9030,192.168.1.102:9030,192.168.1.103:9030/test_db\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For details, please refer to ",(0,o.jsx)(n.a,{href:"https://dev.mysql.com/doc/connector-j/en/connector-j-usagenotes-j2ee-concepts-managing-load-balanced-connections.html",children:"MySQL Official Documentation"})]}),"\n",(0,o.jsx)(n.h3,{id:"02-nginx",children:"02 Nginx"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"https://nginx.org/",children:"Nginx"})," TCP reverse proxy to implement Doris load balancing."]}),"\n",(0,o.jsx)(n.h4,{id:"install-nginx",children:"Install Nginx"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"https://nginx.org/en/docs/install.html",children:"Nginx"})," official website to install Nginx correctly. Here we demonstrate the Nginx compilation and installation steps using Ubuntu system with Nginx 1.18.0 version as an example."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install compilation dependencies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install build-essential\nsudo apt-get install libpcre3 libpcre3-dev \nsudo apt-get install zlib1g-dev\nsudo apt-get install openssl libssl-dev\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install Nginx"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo wget http://nginx.org/download/nginx-1.18.0.tar.gz\nsudo tar zxvf nginx-1.18.0.tar.gz\ncd nginx-1.18.0\nsudo ./configure --prefix=/usr/local/nginx --with-stream --with-http_ssl_module --with-http_gzip_static_module --with-http_stub_status_module\nsudo make && make install\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"configure-reverse-proxy",children:"Configure Reverse Proxy"}),"\n",(0,o.jsx)(n.p,{children:"Create a new configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"vim /usr/local/nginx/conf/default.conf\n"})}),"\n",(0,o.jsx)(n.p,{children:"Content as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"events {\nworker_connections 1024;\n}\nstream {\n  upstream mysqld {\n      hash $remote_addr consistent;\n      server 192.168.1.101:9030 weight=1 max_fails=2 fail_timeout=60s;\n      server 192.168.1.102:9030 weight=1 max_fails=2 fail_timeout=60s;\n      server 192.168.1.103:9030 weight=1 max_fails=2 fail_timeout=60s;\n  }\n  server {\n   # Proxy port\n      listen 6030;\n      proxy_connect_timeout 300s;\n      proxy_timeout 300s;\n      proxy_pass mysqld;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"start-nginx",children:"Start Nginx"}),"\n",(0,o.jsx)(n.p,{children:"Start with specified configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd /usr/local/nginx\n/usr/local/nginx/sbin/nginx -c conf.d/default.conf\n"})}),"\n",(0,o.jsx)(n.h4,{id:"verify",children:"Verify"}),"\n",(0,o.jsx)(n.p,{children:"Connect using the proxy port:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -uroot -P6030 -h192.168.1.100\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| test               |\n+--------------------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"03-haproxy",children:"03 HAProxy"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.haproxy.org/",children:"HAProxy"})," is a high-performance TCP/HTTP load balancer written in C language."]}),"\n",(0,o.jsx)(n.h4,{id:"install-haproxy",children:"Install HAProxy"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Download HAProxy"}),"\n",(0,o.jsxs)(n.p,{children:["Download link: ",(0,o.jsx)(n.a,{href:"https://src.fedoraproject.org/repo/pkgs/haproxy/",children:"https://src.fedoraproject.org/repo/pkgs/haproxy/"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Extract"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"tar -zxvf haproxy-2.6.15.tar.gz -C /opt/\nmv haproxy-2.6.15 haproxy\ncd haproxy\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Compile"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"yum install gcc gcc-c++ -y\nmake TARGET=linux-glibc PREFIX=/usr/local/haproxy\nmake install PREFIX=/usr/local/haproxy\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"configure-haproxy",children:"Configure HAProxy"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure haproxy.conf file"}),"\n",(0,o.jsx)(n.p,{children:"Open configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"vim /etc/rsyslog.d/haproxy.conf\n"})}),"\n",(0,o.jsx)(n.p,{children:"Content as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"$ModLoad imudp \n$UDPServerRun 514\nlocal0.* /usr/local/haproxy/logs/haproxy.log\n&~\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Enable remote logging"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"vim /etc/sysconfig/rsyslog\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'SYSLOGD_OPTIONS="-c 2 -r -m 0"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-c 2"}),": Use compatibility mode, default is ",(0,o.jsx)(n.code,{children:"-c 5"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-r"}),": Enable remote logging."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-m 0"}),": Mark timestamps. In minutes, when 0, indicates this feature is disabled."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Apply changes:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"systemctl restart rsyslog"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Edit load balancing file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"vim /usr/local/haproxy/haproxy.cfg\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"global\n    maxconn         2000\n    ulimit-n        40075\n    log             127.0.0.1 local0 info\n    uid             200\n    gid             200\n    chroot          /var/empty\n    daemon\n    group           haproxy\n    user            haproxy\n\ndefaults\n    log global\n    mode http\n    retries 3\n    option redispatch\n\n    timeout connect 5000\n    timeout client 5000\n    timeout server 5000\n    timeout check 2000\n\nfrontend agent-front\n    bind *:6030\n    mode tcp\n    default_backend forward-fe\n\nbackend forward-fe\n    mode tcp\n    balance roundrobin\n    server fe-1 192.168.1.101:9030 weight 1 check inter 3000 rise 2 fall 3\n    server fe-2 192.168.1.102:9030 weight 1 check inter 3000 rise 2 fall 3\n    server fe-3 192.168.1.103:9030 weight 1 check inter 3000 rise 2 fall 3\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"start-haproxy",children:"Start HAProxy"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start service"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"/opt/haproxy/haproxy -f /usr/local/haproxy/haproxy.cfg"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check service status"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"netstat -lnatp | grep -i haproxy"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"verify-1",children:"Verify"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"mysql -h 192.168.1.100 -uroot -P6030 -p"})}),"\n",(0,o.jsx)(n.h3,{id:"04-proxysql",children:"04 ProxySQL"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://proxysql.com/",children:"ProxySQL"})," is an open-source MySQL database proxy software written in C language. It can implement connection management, read-write splitting, load balancing, failover, and other functions. It has advantages such as high performance, configurability, and dynamic management, and is commonly used in Web services, big data platforms, cloud databases, and other scenarios."]}),"\n",(0,o.jsx)(n.h4,{id:"install-proxysql",children:"Install ProxySQL"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to the ",(0,o.jsx)(n.a,{href:"https://proxysql.com/documentation/installing-proxysql/",children:"official documentation"})," to install ProxySQL correctly."]}),"\n",(0,o.jsx)(n.h4,{id:"configure-proxysql",children:"Configure ProxySQL"}),"\n",(0,o.jsxs)(n.p,{children:["ProxySQL includes configuration file ",(0,o.jsx)(n.code,{children:"/etc/proxysql.cnf"})," and configuration database file ",(0,o.jsx)(n.code,{children:"/var/lib/proxysql/proxysql.db"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Special attention should be paid that if there is a "proxysql.db" file in the ',(0,o.jsx)(n.code,{children:"/var/lib/proxysql"})," directory, the ProxySQL service only reads and parses ",(0,o.jsx)(n.code,{children:"proxysql.cnf"})," during the first startup, and subsequent startups will no longer read it."]}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"proxysql.cnf"})," configuration take effect after restart, you need to delete ",(0,o.jsx)(n.code,{children:"/var/lib/proxysql/proxysql.db"})," before restarting the service, which is equivalent to initialization startup and will generate a new ",(0,o.jsx)(n.code,{children:"proxysql.db"})," file, and the original configuration rules will be cleared."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is the main content of the configuration file ",(0,o.jsx)(n.code,{children:"proxysql.cnf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'datadir="/var/lib/proxysql"         #Data directory\nadmin_variables=\n{\n    admin_credentials="admin:admin"  # Admin databse username and password.\n    mysql_ifaces="0.0.0.0:6032"    # Admin database port, used for connecting admin database of ProxySQL\n}\nmysql_variables=\n{\n    threads=4\n    max_connections=2048\n    default_query_delay=0\n    default_query_timeout=36000000\n    have_compress=true\n    poll_timeout=2000\n    interfaces="0.0.0.0:6030"\n    default_schema="information_schema"\n    stacksize=1048576\n    server_version="5.7.99"\n    connect_timeout_server=3000\n    monitor_username="monitor"\n    monitor_password="monitor"\n    monitor_history=600000\n    monitor_connect_interval=60000\n    monitor_ping_interval=10000\n    monitor_read_only_interval=1500\n    monitor_read_only_timeout=500\n    ping_interval_server_msec=120000\n    ping_timeout_server=500\n    commands_stats=true\n    sessions_sort=true\n    connect_retries_on_failure=10\n}\nmysql_servers =\n(\n)\nmysql_users:\n(\n)\nmysql_query_rules:\n(\n)\nscheduler=\n(\n)\nmysql_replication_hostgroups=\n(\n)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"connect-to-proxysql-admin-database",children:"Connect to ProxySQL Admin Database"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -uadmin -padmin -P6032 -hdoris01\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > show databases;\n+-----+---------------+-------------------------------------+\n| seq | name          | file                                |\n+-----+---------------+-------------------------------------+\n| 0   | main          |                                     |\n| 2   | disk          | /var/lib/proxysql/proxysql.db       |\n| 3   | stats         |                                     |\n| 4   | monitor       |                                     |\n| 5   | stats_history | /var/lib/proxysql/proxysql_stats.db |\n+-----+---------------+-------------------------------------+\n5 rows in set (0.000 sec)\nProxySQL > use main;\n\nProxySQL > show tables;\n+--------------------------------------------+\n| tables                                     |\n+--------------------------------------------+\n| global_variables                           |\n| mysql_collations                           |\n| mysql_group_replication_hostgroups         |\n| mysql_query_rules                          |\n| mysql_query_rules_fast_routing             |\n| mysql_replication_hostgroups               |\n| mysql_servers                              |\n| mysql_users                                |\n| proxysql_servers                           |\n| runtime_checksums_values                   |\n| runtime_global_variables                   |\n| runtime_mysql_group_replication_hostgroups |\n| runtime_mysql_query_rules                  |\n| runtime_mysql_query_rules_fast_routing     |\n| runtime_mysql_replication_hostgroups       |\n| runtime_mysql_servers                      |\n| runtime_mysql_users                        |\n| runtime_proxysql_servers                   |\n| runtime_scheduler                          |\n| scheduler                                  |\n+--------------------------------------------+\n20 rows in set (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"configure-backend-doris-fe-in-proxysql",children:"Configure Backend Doris FE in ProxySQL"}),"\n",(0,o.jsxs)(n.p,{children:["Use INSERT statements to add the FE nodes and ports that need to be proxied to the ",(0,o.jsx)(n.code,{children:"mysql_servers"})," table."]}),"\n",(0,o.jsxs)(n.p,{children:["Where: ",(0,o.jsx)(n.code,{children:"hostgroup_id"})," of ",(0,o.jsx)(n.code,{children:"10"})," indicates write group, ",(0,o.jsx)(n.code,{children:"20"})," indicates read group. We don't need read-write splitting here, so it can be set arbitrarily."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -uadmin -padmin -P6032 -h127.0.0.1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.0.101',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nProxySQL > insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.0.102',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nProxySQL > insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.0.103',9030);\nQuery OK, 1 row affected (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Check results:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > select hostgroup_id,hostname,port,status,weight from mysql_servers;\n+--------------+---------------+------+--------+--------+\n| hostgroup_id | hostname      | port | status | weight |\n+--------------+---------------+------+--------+--------+\n| 10           | 192.168.0.101 | 9030 | ONLINE | 1      |\n| 20           | 192.168.0.102 | 9030 | ONLINE | 1      |\n| 20           | 192.168.0.103 | 9030 | ONLINE | 1      |\n+--------------+---------------+------+--------+--------+\n3 rows in set (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you encounter an error during insertion:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"ERROR 1045 (#2800): UNIQUE constraint failed: mysql_servers.hostgroup_id, mysql_servers.hostname, mysql_servers.port\n"})}),"\n",(0,o.jsx)(n.p,{children:"This indicates that other configurations may have been defined previously. You can empty this table or delete the configuration for the corresponding host:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > select * from mysql_servers;\nProxySQL > delete from mysql_servers;\nQuery OK, 6 rows affected (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Save information:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > load mysql servers to runtime;\nQuery OK, 0 rows affected (0.006 sec)\n  \nProxySQL > save mysql servers to disk;\nQuery OK, 0 rows affected (0.348 sec)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"configure-monitoring-for-doris-fe-nodes",children:"Configure Monitoring for Doris FE Nodes"}),"\n",(0,o.jsx)(n.p,{children:"After adding Doris FE nodes, these backend nodes need to be monitored."}),"\n",(0,o.jsx)(n.p,{children:"First, create a user for monitoring in Doris:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -uroot -P9030 -h192.168.0.101\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"Doris > create user monitor@'192.168.0.100' identified by 'P@ssword1!';\nQuery OK, 0 rows affected (0.03 sec)\n\nDoris > grant ADMIN_PRIV on *.* to monitor@'192.168.0.100';\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then go back to the mysql-proxy proxy layer node to configure monitoring"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mysql -uadmin -padmin -P6032 -h127.0.0.1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > set mysql-monitor_username='monitor';\nQuery OK, 1 row affected (0.000 sec)\n \nProxySQL > set mysql-monitor_password='P@ssword1!';\nQuery OK, 1 row affected (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Save configuration and exit:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > load mysql servers to runtime;\nQuery OK, 0 rows affected (0.006 sec)\n  \nProxySQL > save mysql servers to disk;\nQuery OK, 0 rows affected (0.348 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Verify monitoring results."}),"\n",(0,o.jsxs)(n.p,{children:["The metrics of the ProxySQL monitoring module are all saved in the ",(0,o.jsx)(n.code,{children:"monitor.log"})," table."]}),"\n",(0,o.jsx)(n.p,{children:"Connection monitoring:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > select * from mysql_server_connect_log;\n+---------------+------+------------------+-------------------------+---------------+\n| hostname      | port | time_start_us    | connect_success_time_us | connect_error |\n+---------------+------+------------------+-------------------------+---------------+\n| 192.168.0.101 | 9030 | 1548665195883957 | 762                     | NULL          |\n| 192.168.0.102 | 9030 | 1548665195894099 | 399                     | NULL          |\n| 192.168.0.103 | 9030 | 1548665195904266 | 483                     | NULL          |\n| 192.168.0.101 | 9030 | 1548665255883715 | 824                     | NULL          |\n| 192.168.0.102 | 9030 | 1548665255893942 | 656                     | NULL          |\n| 192.168.0.101 | 9030 | 1548665495884125 | 615                     | NULL          |\n| 192.168.0.102 | 9030 | 1548665495894254 | 441                     | NULL          |\n| 192.168.0.103 | 9030 | 1548665495904479 | 638                     | NULL          |\n| 192.168.0.101 | 9030 | 1548665512917846 | 487                     | NULL          |\n| 192.168.0.102 | 9030 | 1548665512928071 | 994                     | NULL          |\n| 192.168.0.103 | 9030 | 1548665512938268 | 613                     | NULL          |\n+---------------+------+------------------+-------------------------+---------------+\n20 rows in set (0.000 sec)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Heartbeat monitoring:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ProxySQL > select * from mysql_server_ping_log;\n+---------------+------+------------------+----------------------+------------+\n| hostname      | port | time_start_us    | ping_success_time_us | ping_error |\n+---------------+------+------------------+----------------------+------------+\n| 192.168.0.101 | 9030 | 1548665195883407 | 98                   | NULL       |\n| 192.168.0.102 | 9030 | 1548665195885128 | 119                  | NULL       |\n...........\n| 192.168.0.102 | 9030 | 1548665415889362 | 106                  | NULL       |\n| 192.168.0.103 | 9030 | 1548665562898295 | 97                   | NULL       |\n+---------------+------+------------------+----------------------+------------+\n110 rows in set (0.001 sec)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"client-ip-passthrough",children:"Client IP Passthrough"}),"\n",(0,o.jsx)(n.p,{children:"In most cases, when connecting to the backend Doris service through a proxy service, client IP information will be lost, and the Doris server can only obtain the IP address information of the proxy server."}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version 2.1.1, Doris supports the ",(0,o.jsx)(n.a,{href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt",children:"Proxy Protocol"})," protocol. Using this protocol, client IP passthrough can be implemented, so that after going through load balancing, Doris can still obtain the client's real IP to implement whitelist and other permission controls."]}),"\n",(0,o.jsx)(n.p,{children:"Below we introduce how to enable Proxy Protocol in Nginx and Haproxy respectively."}),"\n",(0,o.jsx)(n.h3,{id:"enable-proxy-protocol-support-in-doris",children:"Enable Proxy Protocol Support in Doris"}),"\n",(0,o.jsxs)(n.p,{children:["Add to ",(0,o.jsx)(n.code,{children:"fe.conf"})," in FE:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"enable_proxy_protocol = true\n"})}),"\n",(0,o.jsx)(n.div,{children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Only supports Proxy Protocol V1."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Only supports and affects MySQL protocol ports, does not support or affect HTTP, ADBC, and other protocol ports."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Before Doris 3.1 version, after enabling, you must use the Proxy Protocol protocol to connect, otherwise the connection will fail. Starting from version 3.1, after enabling Proxy Protocol, you can still connect using the standard MySQL connection protocol."}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"01-nginx",children:"01 Nginx"}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"proxy_protocol on;"})," to the ",(0,o.jsx)(n.code,{children:"server"})," section in the configuration file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"events {\nworker_connections 1024;\n}\nstream {\n  upstream mysqld {\n      hash $remote_addr consistent;\n      server 192.168.1.101:9030 weight=1 max_fails=2 fail_timeout=60s;\n      server 192.168.1.102:9030 weight=1 max_fails=2 fail_timeout=60s;\n      server 192.168.1.103:9030 weight=1 max_fails=2 fail_timeout=60s;\n  }\n  server {\n   # Proxy port\n      listen 6030;\n      proxy_connect_timeout 300s;\n      proxy_timeout 300s;\n      proxy_pass mysqld;\n      # Enable Proxy Protocol to the upstream server\n      proxy_protocol on;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"02-haproxy",children:"02 HAProxy"}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"send-proxy"})," parameter to the ",(0,o.jsx)(n.code,{children:"backend"})," section in ",(0,o.jsx)(n.code,{children:"haproxy.cfg"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"backend forward-fe\n    mode tcp\n    balance roundrobin\n    server fe-1 192.168.1.101:9030 weight 1 check inter 3000 rise 2 fall 3 send-proxy\n    server fe-2 192.168.1.102:9030 weight 1 check inter 3000 rise 2 fall 3 send-proxy\n    server fe-3 192.168.1.103:9030 weight 1 check inter 3000 rise 2 fall 3 send-proxy\n"})}),"\n",(0,o.jsx)(n.h3,{id:"verify-ip-passthrough-success",children:"Verify IP Passthrough Success"}),"\n",(0,o.jsx)(n.p,{children:"Connect to Doris through proxy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P6030 -h192.168.1.100\n"})}),"\n",(0,o.jsx)(n.p,{children:"Verify"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"mysql> show processlist;\n+------------------+------+------+-------------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+\n| CurrentConnected | Id   | User | Host              | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info             |\n+------------------+------+------+-------------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+\n| Yes              |    1 | root | 192.168.1.101:34390 | 2024-03-17 16:32:22 | internal |      | Query   |    0 | OK    | 82edc460d93f4e28-8bbed058a068e259 | show processlist |\n+------------------+------+------+-------------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you see the real client IP in the ",(0,o.jsx)(n.code,{children:"Host"})," column, the verification is successful. Otherwise, you can only see the IP address of the proxy service."]}),"\n",(0,o.jsx)(n.p,{children:"At the same time, the real client IP will also be recorded in fe.audit.log."})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let o={},i=r.createContext(o);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);