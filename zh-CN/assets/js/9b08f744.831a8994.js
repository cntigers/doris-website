"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["21193"],{421180:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>h,contentTitle:()=>d});var l=JSON.parse('{"id":"admin-manual/cluster-management/upgrade","title":"\u96C6\u7FA4\u5347\u7EA7","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/cluster-management/upgrade.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/upgrade","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/upgrade","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u96C6\u7FA4\u5347\u7EA7","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TPC-DS Benchmark","permalink":"/zh-CN/docs/dev/benchmark/tpcds"},"next":{"title":"\u5F39\u6027\u6269\u7F29\u5BB9","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/elastic-expansion"}}'),i=s("785893"),c=s("250065");let r={title:"\u96C6\u7FA4\u5347\u7EA7",language:"zh-CN"},d=void 0,a={},h=[{value:"\u7248\u672C\u517C\u5BB9\u6027\u8BF4\u660E",id:"\u7248\u672C\u517C\u5BB9\u6027\u8BF4\u660E",level:2},{value:"\u5347\u7EA7\u6CE8\u610F\u4E8B\u9879",id:"\u5347\u7EA7\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5",id:"\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5",level:2},{value:"\u5347\u7EA7\u6B65\u9AA4",id:"\u5347\u7EA7\u6B65\u9AA4",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",id:"\u7B2C-1-\u6B65\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5347\u7EA7 BE \u8282\u70B9",id:"\u7B2C-2-\u6B65\u5347\u7EA7-be-\u8282\u70B9",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5347\u7EA7 FE \u8282\u70B9",id:"\u7B2C-3-\u6B65\u5347\u7EA7-fe-\u8282\u70B9",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",id:"\u7B2C-4-\u6B65\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",level:3}];function t(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86\u6EDA\u52A8\u5347\u7EA7\u7684\u80FD\u529B\uFF0C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9010\u6B65\u5BF9 FE \u4E0E BE \u8282\u70B9\u8FDB\u884C\u5347\u7EA7\uFF0C\u51CF\u5C11\u505C\u673A\u65F6\u95F4\uFF0C\u786E\u4FDD\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u7CFB\u7EDF\u80FD\u591F\u4FDD\u6301\u6B63\u5E38\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7248\u672C\u517C\u5BB9\u6027\u8BF4\u660E",children:"\u7248\u672C\u517C\u5BB9\u6027\u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u7248\u672C\u53F7\u7531\u4E09\u7EF4\u7EC4\u6210\uFF0C\u7B2C\u4E00\u4F4D\u8868\u793A\u91CD\u5927\u91CC\u7A0B\u7891\u7248\u672C\uFF0C\u7B2C\u4E8C\u4F4D\u8868\u793A\u529F\u80FD\u7248\u672C\uFF0C\u7B2C\u4E09\u4F4D\u8868\u793A bug \u4FEE\u590D\uFF0C\u4E0D\u5728\u4E09\u4F4D\u7248\u672C\u4E2D\u53D1\u5E03\u65B0\u7684\u529F\u80FD\u3002\u5982 Doris 2.1.3 \u7248\u672C\uFF0C\u5176\u4E2D 2 \u8868\u793A\u7B2C 2 \u4E2A\u91CC\u7A0B\u7891\u7248\u672C\uFF0C1 \u8868\u793A\u8BE5\u91CC\u7A0B\u7891\u4E0B\u7684\u529F\u80FD\u7248\u672C\uFF0C3 \u8868\u793A\u8BE5\u529F\u80FD\u7248\u672C\u4E0B\u7684\u7B2C\u4E09\u4E2A bug fix \u7248\u672C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7248\u672C\u5347\u7EA7\u65F6\uFF0C\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E09\u4F4D\u7248\u672C\uFF1A\u4E8C\u4F4D\u7248\u672C\u76F8\u540C\u65F6\uFF0C\u53EF\u4EE5\u8DE8\u4E09\u4F4D\u7248\u672C\u5347\u7EA7\uFF0C\u5982 2.1.3 \u7248\u672C\u53EF\u4EE5\u76F4\u63A5\u5347\u7EA7\u5230 2.1.7 \u7248\u672C\uFF1B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E8C\u4F4D\u7248\u672C\u53CA\u4E00\u4F4D\u7248\u672C\uFF1A\u4E0D\u5EFA\u8BAE\u8DE8\u4E8C\u4F4D\u7248\u672C\u5347\u7EA7\uFF0C\u8003\u8651\u5230\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6309\u7167\u4E8C\u4F4D\u7248\u672C\u53F7\u4F9D\u6B21\u5347\u7EA7\uFF0C\u5982 3.0 \u7248\u672C\u5347\u7EA7\u5230 3.3 \u7248\u672C\uFF0C\u9700\u8981\u6309\u7167 3.0 -> 3.1 -> 3.2 -> 3.3 \u7684\u6267\u884C\u8DEF\u5F84\u5347\u7EA7\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u7248\u672C\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003",(0,i.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/community/release-versioning",children:"\u7248\u672C\u89C4\u5219"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5347\u7EA7\u6CE8\u610F\u4E8B\u9879",children:"\u5347\u7EA7\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5347\u7EA7\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7248\u672C\u95F4\u884C\u4E3A\u53D8\u66F4\uFF1A\u5728\u5347\u7EA7\u524D\u9700\u8981\u67E5\u770B Release Note \u4E2D\u7684\u884C\u4E3A\u53D8\u66F4\u4EE5\u786E\u5B9A\u7248\u672C\u95F4\u7684\u517C\u5BB9\u6027\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5BF9\u96C6\u7FA4\u5185\u7684\u4EFB\u52A1\u6DFB\u52A0\u91CD\u8BD5\u673A\u5236\uFF1A\u5347\u7EA7\u65F6\u8282\u70B9\u9700\u8981\u4F9D\u6B21\u91CD\u542F\uFF0C\u5BF9\u4E8E\u67E5\u8BE2\u4EFB\u52A1\uFF0CStream Load \u5BFC\u5165\u4F5C\u4E1A\u9700\u8981\u6DFB\u52A0\u91CD\u8BD5\u673A\u5236\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u4EFB\u52A1\u5931\u8D25\uFF1B\u5728 Routine Load \u4F5C\u4E1A\uFF0C\u901A\u8FC7 flink-doris-connector \u6216 spark-doris-connector \u5BFC\u5165\u7684\u4F5C\u4E1A\uFF0C\u5DF2\u7ECF\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0\u4E86\u91CD\u8BD5\u673A\u5236\uFF0C\u65E0\u9700\u6DFB\u52A0\u91CD\u8BD5\u903B\u8F91\uFF1B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD\uFF1A\u5728\u5347\u7EA7\u65F6\u9700\u8981\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD\uFF0C\u65E0\u8BBA\u5347\u7EA7\u662F\u5426\u6210\u529F\uFF0C\u5347\u7EA7\u540E\u90FD\u9700\u8981\u518D\u6B21\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5",children:"\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,i.jsx)(n.p,{children:"\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5EFA\u8BAE\u4FDD\u6301 3 \u4E2A\u4EE5\u4E0A\u7684 FE \u505A\u9AD8\u53EF\u7528\u914D\u7F6E\u3002\u5982\u679C\u53EA\u6709 1 \u4E2A FE \u8282\u70B9\uFF0C\u9700\u8981\u5148\u505A\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\u540E\uFF0C\u518D\u8FDB\u884C\u5347\u7EA7\u64CD\u4F5C\u3002\u5143\u6570\u636E\u517C\u5BB9\u975E\u5E38\u91CD\u8981\uFF0C\u5982\u679C\u56E0\u4E3A\u5143\u6570\u636E\u4E0D\u517C\u5BB9\u5BFC\u81F4\u7684\u5347\u7EA7\u5931\u8D25\uFF0C\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u3002\u5EFA\u8BAE\u6BCF\u6B21\u5347\u7EA7\u524D\u90FD\u8FDB\u884C\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\uFF0C\u5728\u505A\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\u65F6\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5EFA\u8BAE\u5728\u5F00\u53D1\u673A\u6216 BE \u8282\u70B9\u4E0A\u505A\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\uFF0C\u5C3D\u91CF\u907F\u514D\u5728 FE \u8282\u70B9\u4E0A\u505A\u517C\u5BB9\u6027\u6D4B\u8BD5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u53EA\u80FD\u5728 FE \u8282\u70B9\u4E0A\u505A\u517C\u5BB9\u6027\u6D4B\u8BD5\uFF0C\u5EFA\u8BAE\u9009\u62E9\u975E Master \u8282\u70B9\uFF0C\u5E76\u505C\u6B62\u539F\u6709 FE \u8FDB\u7A0B"}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5347\u7EA7\u524D\uFF0C\u5EFA\u8BAE\u8FDB\u884C\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\uFF0C\u9632\u6B62\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u5143\u6570\u636E\u4E0D\u517C\u5BB9\u5BFC\u81F4\u7684\u5347\u7EA7\u5931\u8D25\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5907\u4EFD\u5143\u6570\u636E\u4FE1\u606F\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5F00\u59CB\u5347\u7EA7\u5DE5\u4F5C\u524D\uFF0C\u9700\u8981\u5907\u4EFD Master FE \u8282\u70B9\u7684\u5143\u6570\u636E\u4FE1\u606F\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"show frontends"})," \u4E2D ",(0,i.jsx)(n.code,{children:"IsMaster"})," \u5217\u53EF\u4EE5\u5224\u65AD Master FE \u8282\u70B9\u3002\u5728\u5907\u4EFD FE \u5143\u4FE1\u606F\u65F6\uFF0C\u65E0\u9700\u505C\u6B62 FE \u8282\u70B9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u70ED\u5907\u4EFD\u5143\u4FE1\u606F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CFE \u5143\u6570\u636E\u5728 ",(0,i.jsx)(n.code,{children:"fe/doris-meta"})," \u76EE\u5F55\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"fe.conf"})," \u6587\u4EF6\u4E2D ",(0,i.jsx)(n.code,{children:"meta_dir"})," \u53C2\u6570\u786E\u5B9A\u5143\u6570\u636E\u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4FEE\u6539\u6D4B\u8BD5\u7528\u7684 FE \u7684\u914D\u7F6E\u6587\u4EF6 fe.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vi ${DORIS_NEW_HOME}/conf/fe.conf\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4FEE\u6539\u4EE5\u4E0B\u7AEF\u53E3\u4FE1\u606F\uFF0C\u5C06\u6240\u6709\u7AEF\u53E3\u8BBE\u7F6E\u4E3A\u4E0E\u7EBF\u4E0A\u4E0D\u540C\uFF0C\u540C\u65F6\u4FEE\u6539 clusterID \u53C2\u6570\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n## modify port\nhttp_port = 18030\nrpc_port = 19020\nquery_port = 19030\narrow_flight_sql_port = 19040\nedit_log_port = 19010\n\n## modify clusterIP\nclusterId=<a_new_clusterID, such as 123456>\n...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5C06\u5907\u4EFD\u7684 Master FE \u5143\u6570\u636E\u62F7\u8D1D\u5230\u65B0\u7684\u517C\u5BB9\u6027\u6D4B\u8BD5\u73AF\u5883\u4E2D"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp ${DORIS_OLD_HOME}/fe/doris-meta/* ${DORIS_NEW_HOME}/fe/doris-meta\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5C06\u62F7\u8D1D\u7684\u5143\u6570\u636E\u76EE\u6587\u4EF6\u4E2D\u7684 VERSION \u6587\u4EF6\u4E2D\u7684 cluster_id \u4FEE\u6539\u4E3A\u65B0\u7684 cluster ID\uFF0C\u5982\u5728\u4E0A\u4F8B\u4E2D\u4FEE\u6539\u4E3A 123456\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vi ${DORIS_NEW_HOME}/fe/doris-meta/image/VERSION\nclusterId=123456\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u542F\u52A8 FE \u8FDB\u7A0B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon --metadata_failure_recovery\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 2.0.2 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u9700\u8981\u5728 fe.conf \u6587\u4EF6\u4E2D\u52A0\u5165 ",(0,i.jsx)(n.code,{children:"metadata_failure_recovery"})," \u540E\u5728\u542F\u52A8 FE \u8FDB\u7A0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo "metadata_failure_recovery=true" >> ${DORIS_NEW_HOME}/conf/fe.conf\nsh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon \n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9A8C\u8BC1 FE \u542F\u52A8\u6210\u529F\uFF0C\u901A\u8FC7 mysql \u547D\u4EE4\u94FE\u63A5\u5F53\u524D FE\uFF0C\u5982\u4E0A\u6587\u4E2D\u4F7F\u7528 query port \u4E3A 19030\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql -uroot -P19030 -h127.0.0.1\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5347\u7EA7\u6B65\u9AA4",children:"\u5347\u7EA7\u6B65\u9AA4"}),"\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7\u8FC7\u7A0B\u5177\u4F53\u6D41\u7A0B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7 BE \u8282\u70B9"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7 FE \u8282\u70B9"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7\u8FC7\u7A0B\u4E2D\uFF0C\u8981\u9075\u5FAA\u5148\u5347\u7EA7 BE\u3001\u5728\u5347\u7EA7 FE \u7684\u539F\u5219\u3002\u5728\u5347\u7EA7 FE \u65F6\uFF0C\u5148\u5347\u7EA7 Observer FE \u4E0E Follower FE \u8282\u70B9\uFF0C\u518D\u5347\u7EA7 Master FE \u8282\u70B9\u3002"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,i.jsxs)(n.p,{children:["Doris \u53EA\u9700\u8981\u5347\u7EA7 FE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"})," \u548C ",(0,i.jsx)(n.code,{children:"/lib"})," \u4EE5\u53CA BE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"})," \u548C ",(0,i.jsx)(n.code,{children:"/lib"})]}),(0,i.jsxs)(n.p,{children:["\u5728 2.0.2 \u53CA\u4E4B\u540E\u7684\u7248\u672C\uFF0CFE \u548C BE \u90E8\u7F72\u8DEF\u5F84\u4E0B\u65B0\u589E\u4E86 ",(0,i.jsx)(n.code,{children:"custom_lib/"})," \u76EE\u5F55\uFF08\u5982\u6CA1\u6709\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\uFF09\u3002",(0,i.jsx)(n.code,{children:"custom_lib/"})," \u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u4E00\u4E9B\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u7B2C\u4E09\u65B9 jar \u5305\uFF0C\u5982 ",(0,i.jsx)(n.code,{children:"hadoop-lzo-*.jar"}),"\uFF0C",(0,i.jsx)(n.code,{children:"orai18n.jar"})," \u7B49\u3002\u8FD9\u4E2A\u76EE\u5F55\u5728\u5347\u7EA7\u65F6\u4E0D\u9700\u8981\u66FF\u6362\u3002"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",children:"\u7B2C 1 \u6B65\uFF1A\u5173\u95ED\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u8282\u70B9\u91CD\u542F\uFF0C\u53EF\u80FD\u4F1A\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u96C6\u7FA4\u5747\u8861\u548C\u526F\u672C\u4FEE\u590D\u903B\u8F91\uFF0C\u5148\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5173\u95ED\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5347\u7EA7-be-\u8282\u70B9",children:"\u7B2C 2 \u6B65\uFF1A\u5347\u7EA7 BE \u8282\u70B9"}),"\n",(0,i.jsx)(n.admonition,{title:"\u5907\u6CE8\uFF1A",type:"info",children:(0,i.jsx)(n.p,{children:"\u4E3A\u4E86\u4FDD\u8BC1\u60A8\u7684\u6570\u636E\u5B89\u5168\uFF0C\u8BF7\u4F7F\u7528 3 \u526F\u672C\u6765\u5B58\u50A8\u60A8\u7684\u6570\u636E\uFF0C\u4EE5\u907F\u514D\u5347\u7EA7\u8BEF\u64CD\u4F5C\u6216\u5931\u8D25\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u95EE\u9898\u3002"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u591A\u526F\u672C\u7684\u96C6\u7FA4\u4E2D\uFF0C\u53EF\u4EE5\u9009\u62E9\u4E00\u53F0 BE \u8282\u70B9\u505C\u6B62\u8FDB\u7A0B\uFF0C\u8FDB\u884C\u7070\u5EA6\u5347\u7EA7\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh ${DORIS_OLD_HOME}/be/bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u91CD\u547D\u540D BE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"})," \u76EE\u5F55\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mv ${DORIS_OLD_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin_back\nmv ${DORIS_OLD_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u590D\u5236\u65B0\u7248\u672C\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"})," \u76EE\u5F55\u5230\u539F BE \u76EE\u5F55\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp -r ${DORIS_NEW_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin\ncp -r ${DORIS_NEW_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u8BE5 BE \u8282\u70B9\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh ${DORIS_OLD_HOME}/be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u67E5\u770B\u8BE5\u8282\u70B9\u4FE1\u606F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"show backends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82E5\u8BE5 BE \u8282\u70B9 ",(0,i.jsx)(n.code,{children:"alive"})," \u72B6\u6001\u4E3A ",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u4E14 ",(0,i.jsx)(n.code,{children:"Version"})," \u503C\u4E3A\u65B0\u7248\u672C\uFF0C\u5219\u8BE5\u8282\u70B9\u5347\u7EA7\u6210\u529F\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u5347\u7EA7-fe-\u8282\u70B9",children:"\u7B2C 3 \u6B65\uFF1A\u5347\u7EA7 FE \u8282\u70B9"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u591A\u4E2A FE \u8282\u70B9\u60C5\u51B5\u4E0B\uFF0C\u9009\u62E9\u4E00\u4E2A\u975E Master \u8282\u70B9\u8FDB\u884C\u5347\u7EA7\uFF0C\u5148\u505C\u6B62\u8FD0\u884C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh ${DORIS_OLD_HOME}/fe/bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u91CD\u547D\u540D FE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/mysql_ssl_default_certificate"})," \u76EE\u5F55\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mv ${DORIS_OLD_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin_back\nmv ${DORIS_OLD_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib_back\nmv ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u590D\u5236\u65B0\u7248\u672C\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/mysql_ssl_default_certificate"})," \u76EE\u5F55\u5230\u539F FE \u76EE\u5F55\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp -r ${DORIS_NEW_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin\ncp -r ${DORIS_NEW_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib\ncp -r ${DORIS_NEW_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u8BE5 FE \u8282\u70B9\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"sh ${DORIS_OLD_HOME}/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u67E5\u770B\u8BE5\u8282\u70B9\u4FE1\u606F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"show frontends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82E5\u8BE5 FE \u8282\u70B9 ",(0,i.jsx)(n.code,{children:"alive"})," \u72B6\u6001\u4E3A ",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u4E14 ",(0,i.jsx)(n.code,{children:"Version"})," \u503C\u4E3A\u65B0\u7248\u672C\uFF0C\u5219\u8BE5\u8282\u70B9\u5347\u7EA7\u6210\u529F\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F9D\u6B21\u5B8C\u6210\u5176\u4ED6 FE \u8282\u70B9\u5347\u7EA7\uFF0C\u6700\u540E\u5B8C\u6210 Master \u8282\u70B9\u7684\u5347\u7EA7"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD",children:"\u7B2C 4 \u6B65\uFF1A\u6253\u5F00\u526F\u672C\u4FEE\u590D\u4E0E\u5747\u8861\u529F\u80FD"}),"\n",(0,i.jsxs)(n.p,{children:["\u5347\u7EA7\u5B8C\u6210\uFF0C\u5E76\u4E14\u6240\u6709 BE \u8282\u70B9\u72B6\u6001\u53D8\u4E3A ",(0,i.jsx)(n.code,{children:"Alive"})," \u540E\uFF0C\u6253\u5F00\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n'})})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var l=s(667294);let i={},c=l.createContext(i);function r(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);