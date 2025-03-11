"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["211102"],{161620:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"admin-manual/workload-management/resource-group","title":"Resource Group","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/workload-management/resource-group.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/resource-group","permalink":"/docs/admin-manual/workload-management/resource-group","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Resource Group","language":"en"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/admin-manual/workload-management/workload-management-summary"},"next":{"title":"Workload Group","permalink":"/docs/admin-manual/workload-management/workload-group"}}'),o=r("785893"),t=r("250065");let a={title:"Resource Group",language:"en"},i=void 0,l={},c=[{value:"Typical Use Cases",id:"typical-use-cases",level:2},{value:"Configure Resource Group",id:"configure-resource-group",level:2},{value:"Setting Tags for BEs",id:"setting-tags-for-bes",level:3},{value:"Redistribution data by Resource Group",id:"redistribution-data-by-resource-group",level:3},{value:"Setting Resource Groups for Users",id:"setting-resource-groups-for-users",level:2},{value:"Resource Group Allocation for Data Loading Jobs",id:"resource-group-allocation-for-data-loading-jobs",level:2}];function u(e){let n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Resource Group is a mechanism under the compute-storage integration architecture that achieves physical isolation between different workloads. Its basic principle is illustrated in this diagram:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Resource Group",src:r(701845).Z+"",width:"918",height:"492"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"By using tags, BEs are divided into different groups, each identified by the tag's name. For example, in the diagram above, host1, host2, and host3 are all set to group a, while host4 and host5 are set to group b."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Different replicas of a table are placed in different groups. For instance, in the diagram above, table1 has 3 replicas, all located in group a, while table2 has 4 replicas, with 2 in group a and 2 in group b."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"During queries, different Resource Groups are used based on the user. For example, online users can only access data on host1, host2, and host3, so they can access both table1 and table2. However, offline users can only access host4 and host5, so they can only access data from table2. Since table1 does not have corresponding replicas in group b, accessing it would result in an error."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Essentially, a Resource Group is a placement strategy for table replicas, so it has the following advantages and limitations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Different Resource Groups use different BEs, so they are completely isolated from each other. Even if a BE within a group fails, it will not affect queries in other groups. Since data loading require multiple replicas to succeed, if the remaining number of replicas does not meet the quorum, the data loading will still fail."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Each Resource Group must have at least one replica of each table. For example, if you want to establish 5 Resource Groups and each group may access all tables, then each table needs 5 replicas, which can result in significant storage costs."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"typical-use-cases",children:"Typical Use Cases"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Read-write isolation: A cluster can be divided into two Resource Groups, with an Offline Resource Group for executing ETL jobs and an Online Resource Group for handling online queries. Data is stored with 3 replicas, with 2 replicas in the Online Resource Group and 1 replica in the Offline Resource Group. The Online Resource Group is primarily used for high-concurrency, low-latency online data services, while large queries or offline ETL operations can be executed using nodes in the Offline Resource Group. This allows for the provision of both online and offline services within a unified cluster."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Isolation between different businesses: When data is not shared between multiple businesses, a Resource Group can be assigned to each business, ensuring no interference between them. This effectively consolidates multiple physical clusters into a single large cluster for management."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Isolation between different users: For example, if there is a business table within a cluster that needs to be shared among all three users, but it is desirable to minimize resource contention between them, we can create 3 replicas of the table, stored in 3 different Resource Groups, and bind each user to a specific Resource Group."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-resource-group",children:"Configure Resource Group"}),"\n",(0,o.jsx)(n.h3,{id:"setting-tags-for-bes",children:"Setting Tags for BEs"}),"\n",(0,o.jsx)(n.p,{children:"Assuming the current Doris cluster has 6 BE nodes, named host[1-6]. Initially, all BE nodes belong to a default resource group (Default)."}),"\n",(0,o.jsx)(n.p,{children:"We can use the following commands to divide these 6 nodes into 3 resource groups: group_a, group_b, and group_c."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter system modify backend "host2:9050" set ("tag.location" = "group_a");\nalter system modify backend "host3:9050" set ("tag.location" = "group_b");\nalter system modify backend "host4:9050" set ("tag.location" = "group_b");\nalter system modify backend "host5:9050" set ("tag.location" = "group_c");\nalter system modify backend "host6:9050" set ("tag.location" = "group_c");\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Here, we will form Resource Group group_a with host[1-2], Resource Group group_b with host[3-4], and Resource Group group_c with host[5-6].\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: A BE can only belong to one Resource Group."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"redistribution-data-by-resource-group",children:"Redistribution data by Resource Group"}),"\n",(0,o.jsx)(n.p,{children:"After dividing the resource groups, you can distribute different replicas of user data across different resource groups. Assuming we have a user table named UserTable, and we want to store one replica in each of the three resource groups. This can be achieved through the following table creation statement:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'create table UserTable\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this way, the data in the UserTable will be stored in three replicas, each located on nodes within the resource groups group_a, group_b, and group_c, respectively."}),"\n",(0,o.jsx)(n.p,{children:"The following diagram demonstrates the current division of nodes and data distribution:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:" \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host1            \u2502  \u2502 host2            \u2502 \u2502\n \u2502         \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502                  \u2502 \u2502\n \u2502 group_a \u2502  \u2502   replica1  \u2502 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host3            \u2502  \u2502 host4            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_b \u2502                  \u2502  \u2502  \u2502   replica2  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host5            \u2502  \u2502 host6            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_c \u2502                  \u2502  \u2502  \u2502   replica3  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,o.jsx)(n.p,{children:"When a database contains a very large number of tables, modifying the distribution strategy for each table can be cumbersome. Therefore, Doris also supports setting a unified data distribution strategy at the database level, but the settings for individual tables have higher priority than those at the database level. For example, consider a database db1 with four tables: table1 requires a replica distribution strategy of group_a:1,group_b:2, while table2, table3, and table4 require a strategy of group_c:1,group_b:2."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"To create db1 with a default distribution strategy, you can use the following statement:\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE db1 PROPERTIES (\n"replication_allocation" = "tag.location.group_c:1, tag.location.group_b:2"\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Create table1 with a specific distribution strategy:\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n"replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"For table2, table3, and table4, you do not need to specify replication_allocation in their creation statements, as they will inherit the database-level default strategy."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Changing the replica distribution strategy at the database level will not affect existing tables."})}),"\n",(0,o.jsx)(n.h2,{id:"setting-resource-groups-for-users",children:"Setting Resource Groups for Users"}),"\n",(0,o.jsx)(n.p,{children:"You can use the following statements to restrict users' access to specific resource groups. For example, user1 can only use nodes in the group_a resource group, user2 can only use group_b, and user3 can use all three resource groups:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"set property for 'user1' 'resource_tags.location' = 'group_a';\nset property for 'user2' 'resource_tags.location' = 'group_b';\nset property for 'user3' 'resource_tags.location' = 'group_a, group_b, group_c';\n"})}),"\n",(0,o.jsx)(n.p,{children:"After setting, when user1 queries the UserTable, it will only access data replicas on nodes in the group_a resource group and use computing resources from this group. User3's queries can use replicas and computing resources from any resource group."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: By default, the resource_tags.location property for users is empty. In versions before 2.0.2, users are not restricted by tags and can use any resource group. In versions 2.0.3 and later, ordinary users can only use the default resource group by default. Root and admin users can use any resource group."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Caution:",type:"caution",children:(0,o.jsx)(n.p,{children:"After modifying the resource_tags.location property, users need to re-establish connections for the changes to take effect."})}),"\n",(0,o.jsx)(n.h2,{id:"resource-group-allocation-for-data-loading-jobs",children:"Resource Group Allocation for Data Loading Jobs"}),"\n",(0,o.jsx)(n.p,{children:"The resource usage for data loading jobs (including insert, broker load, routine load, stream load, etc.) can be divided into two parts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Computing Part: responsible for reading data sources, data transformation, and distribution."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Writing Part: responsible for data encoding, compression, and writing to disk."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Since writing resources must be on nodes where data replicas are located, and computing resources can be allocated from any node, Resource Groups can only restrict the resources used for the computing part in data loading scenarios."})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},701845:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/resource_group-520201e8a83fd62e502a16bc4ce4e01b.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let o={},t=s.createContext(o);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);