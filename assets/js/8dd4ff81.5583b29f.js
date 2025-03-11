"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["661622"],{872596:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"admin-manual/maint-monitor/automatic-service-start","title":"Automated Service Startup","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/maint-monitor/automatic-service-start.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/automatic-service-start","permalink":"/docs/3.0/admin-manual/maint-monitor/automatic-service-start","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Automated Service Startup","language":"en"},"sidebar":"docs","previous":{"title":"Data Replica Management","permalink":"/docs/3.0/admin-manual/maint-monitor/tablet-repair-and-balance"},"next":{"title":"Config Dir","permalink":"/docs/3.0/admin-manual/config/config-dir"}}'),s=r("785893"),i=r("250065");let o={title:"Automated Service Startup",language:"en"},a="Automatic service start",l={},d=[{value:"Systemd Configures the Doris service",id:"systemd-configures-the-doris-service",level:2},{value:"sudo permission control",id:"sudo-permission-control",level:3},{value:"Configuration procedure",id:"configuration-procedure",level:3},{value:"Matters needing attention",id:"matters-needing-attention",level:4},{value:"Matters needing attention",id:"matters-needing-attention-1",level:4},{value:"Supervisor configures the Doris service",id:"supervisor-configures-the-doris-service",level:2},{value:"Configuration procedure",id:"configuration-procedure-1",level:3},{value:"Matters needing attention:",id:"matters-needing-attention-2",level:4}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"automatic-service-start",children:"Automatic service start"})}),"\n",(0,s.jsx)(n.p,{children:"This document describes how to configure the automatic pull-up of the Doris cluster to ensure that services are not pulled up in time after service breaks down due to special circumstances in the production environment."}),"\n",(0,s.jsx)(n.p,{children:"The automatic pull-up service of FE and BE must be configured after the Doris cluster is completely set up."}),"\n",(0,s.jsx)(n.h2,{id:"systemd-configures-the-doris-service",children:"Systemd Configures the Doris service"}),"\n",(0,s.jsxs)(n.p,{children:["For details about systemd usage and parameter parsing, see ",(0,s.jsx)(n.a,{href:"https://systemd.io/",children:"here"})]}),"\n",(0,s.jsx)(n.h3,{id:"sudo-permission-control",children:"sudo permission control"}),"\n",(0,s.jsx)(n.p,{children:"sudo permissions are required to control the doris service using systemd. To ensure the minimum granularity of sudo permission assignment, you can assign the systemd control permission of doris-fe and doris-be services to specified non-root users. Configure the systemctl management permission for doris-fe and doris-be in visudo."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Cmnd_Alias DORISCTL=/usr/bin/systemctl start doris-fe,/usr/bin/systemctl stop doris-fe,/usr/bin/systemctl start doris-be,/usr/bin/systemctl stop doris-be\n\n## Allow root to run any commands anywhere\nroot    ALL=(ALL)       ALL\ndoris   ALL=(ALL)       NOPASSWD:DORISCTL\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuration-procedure",children:"Configuration procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'You should config the "JAVA_HOME" variable in the config file, both fe.conf and be.conf, or you can\'t use the command "systemctl start" to start doris'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'echo "JAVA_HOME=your_java_home" >> /home/doris/fe/conf/fe.conf\necho "JAVA_HOME=your_java_home" >> /home/doris/be/conf/be.conf\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the doris-fe.service file: ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-fe.service",children:"doris-fe.service"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The details of doris-fe.service are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris FE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/fe/bin/start_fe.sh --daemon \nExecStop=/home/doris/fe/bin/stop_fe.sh\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"matters-needing-attention",children:"Matters needing attention"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ExecStart and ExecStop are configured based on actual fe paths"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the doris-be.service file : ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-be.service",children:"doris-be.service"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The details of doris-be.service are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris BE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/be/bin/start_be.sh --daemon\nExecStop=/home/doris/be/bin/stop_be.sh\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"matters-needing-attention-1",children:"Matters needing attention"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ExecStart and ExecStop are configured based on actual be paths"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Service configuration"}),"\n",(0,s.jsx)(n.p,{children:"Place doris-fe.service and doris-be.service in the /usr/lib/systemd/system directory"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set self-start"}),"\n",(0,s.jsx)(n.p,{children:"After you add or modify the configuration file, you need to reload it"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the start, the essence is in the/etc/systemd/system/multi - user. Target. Wants/add service file link"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"systemctl enable doris-fe\nsystemctl enable doris-be\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Service initiation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"systemctl start doris-fe\nsystemctl start doris-be\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supervisor-configures-the-doris-service",children:"Supervisor configures the Doris service"}),"\n",(0,s.jsxs)(n.p,{children:["Supervisor Specific use and parameter analysis can be referred to ",(0,s.jsx)(n.a,{href:"http://supervisord.org/",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["Supervisor configuration automatically pulls up the supervisor configuration. You can install the supervisor directly using the yum command or manually using pip. The pip manual installation process is complicated, and only the yum deployment mode is displayed.Manual deployment refer to [here] (",(0,s.jsx)(n.a,{href:"http://supervisord.org/installing.html",children:"http://supervisord.org/installing.html"}),") for installation deployment."]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-procedure-1",children:"Configuration procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"yum Install supervisor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"yum install epel-release\nyum install -y supervisor\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the service and view the status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"systemctl enable supervisord # bootstrap\nsystemctl start supervisord # Start the supervisord service\nsystemctl status supervisord # Check the supervisord service status\nps -ef|grep supervisord # Check whether the supervisord process exists\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure BE process management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Modify the start_be.sh script remove the last symbol &\n\nvim /path/doris/be/bin/start_be.sh\nTake this code : nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null\n'})}),"\n",(0,s.jsx)(n.p,{children:"Create a supervisor process management configuration file for the BE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vim /etc/supervisord.d/doris-be.ini\n\n[program:doris_be]      \nprocess_name=%(program_name)s      \ndirectory=/path/doris/be/be\ncommand=sh /path/doris/be/bin/start_be.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr = true\n#stdout_logfile_maxbytes = 20MB\n#stdout_logfile_backups = 10\n#stdout_logfile=/var/log/supervisor-palo_be.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure FE process management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Modify the start_fe.sh script remove the last symbol &\n\nvim /path/doris/fe/bin/start_fe.sh \nTake this code : nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null\n'})}),"\n",(0,s.jsx)(n.p,{children:"Create a supervisor process management configuration file for FE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'vim /etc/supervisord.d/doris-fe.ini\n\n[program:PaloFe]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=PaloFe\ndirectory=/path/doris/fe\ncommand=sh /path/doris/fe/bin/start_fe.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=10\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-PaloFe.log\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure Broker process management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Modify the start_broker.sh script remove the last symbol &\n\nvim /path/apache_hdfs_broker/bin/start_broker.sh\nTake this code : nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null\n'})}),"\n",(0,s.jsx)(n.p,{children:"Create the supervisor process management profile for the Broker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'vim /etc/supervisord.d/doris-broker.ini\n\n[program:BrokerBootstrap]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=%(program_name)s\ndirectory=/path/apache_hdfs_broker\ncommand=sh /path/apache_hdfs_broker/bin/start_broker.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-BrokerBootstrap.log\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First determine whether the Doris service is stopped, then use supervisor to automatically pull up Doris, and then determine whether the process starts normally"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"supervisorctl reload # Reload all the Supervisor configuration files\nsupervisorctl status # Check the supervisor status and verify that the Doris service process starts normally\n\n\u5176\u4ED6\u547D\u4EE4 : \nsupervisorctl start all # supervisorctl start It is capable of opening processes\nsupervisorctl stop doris-be # The process is supervisorctl stop\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"matters-needing-attention-2",children:"Matters needing attention:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the supervisor installed using yum starts, an error occurs:  pkg_resources.DistributionNotFound: The 'supervisor==3.4.0' distribution was not found"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"supervisor installed directly using the yum command only supports python2,Therefore, the file contents in /usr/bin/supervisorctl and /usr/bin/supervisorctl should be changed at the beginning Change #! /usr/bin/python to #! /usr/bin/python2, python2 must be installed\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the supervisor is configured to automatically pull up the Doris process, if the BE node breaks down due to abnormal factors on Doris, the error stack information that should be output to be.out will be intercepted by the supervisor. We need to look it up in supervisor's log for further analysis."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);