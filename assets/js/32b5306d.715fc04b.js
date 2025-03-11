"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["212178"],{317804:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"admin-manual/data-admin/ccr/overview","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/data-admin/ccr/overview.md","sourceDirName":"admin-manual/data-admin/ccr","slug":"/admin-manual/data-admin/ccr/overview","permalink":"/docs/3.0/admin-manual/data-admin/ccr/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview","language":"en"},"sidebar":"docs","previous":{"title":"Restore","permalink":"/docs/3.0/admin-manual/data-admin/backup-restore/restore"},"next":{"title":"Quick Start","permalink":"/docs/3.0/admin-manual/data-admin/ccr/quickstart"}}'),s=r("785893"),t=r("250065");let a={title:"Overview",language:"en"},c=void 0,l={},o=[{value:"Overview",id:"overview",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:3},{value:"Job Categories",id:"job-categories",level:3},{value:"Principles and Architecture",id:"principles-and-architecture",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Architecture Description",id:"architecture-description",level:3},{value:"Principles",id:"principles",level:3},{value:"Synchronization Methods",id:"synchronization-methods",level:3},{value:"Download",id:"download",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"CCR (Cross Cluster Replication) is a cross-cluster data synchronization mechanism that synchronizes data changes from the source cluster to the target cluster at the database or table level. It is mainly used to enhance the data availability of online services, isolate read and write loads, and build a dual-site, three-center architecture. CCR currently does not support the separation of computing and storage modes."}),"\n",(0,s.jsx)(n.h3,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,s.jsx)(n.p,{children:"CCR is suitable for the following common scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Disaster Recovery Backup"}),": Backing up enterprise data to another cluster and data center to ensure data recovery in case of business interruption or data loss. Industries such as finance, healthcare, and e-commerce typically require this high SLA disaster recovery backup."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read-Write Separation"}),": By separating data query operations from write operations, the mutual impact between reads and writes is reduced, enhancing service stability. In scenarios with high concurrency or heavy write pressure, adopting read-write separation can effectively distribute the load and improve database performance and stability."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Centralization"}),": The headquarters of a group needs to manage and analyze data from branch offices located in different regions to avoid management chaos and decision-making errors caused by data inconsistency, thereby improving group management efficiency and decision quality."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Isolated Upgrades"}),": When upgrading system clusters, using CCR allows for validation and testing in the new cluster, avoiding rollback difficulties caused by version compatibility issues. Users can gradually upgrade each cluster while ensuring data consistency."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cluster Migration"}),": When relocating a Doris cluster or replacing equipment, using CCR can synchronize data from the old cluster to the new cluster, ensuring data consistency during the migration process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"job-categories",children:"Job Categories"}),"\n",(0,s.jsx)(n.p,{children:"CCR supports two types of jobs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Database-Level jobs"}),": Synchronize data for the entire database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table-Level jobs"}),": Only synchronize data for specified tables. Note that table-level synchronization does not support renaming or replacing tables. Each database in Doris can only run one snapshot job at a time, so full synchronization jobs for table-level synchronization need to be queued."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"principles-and-architecture",children:"Principles and Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"terminology",children:"Terminology"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source Cluster"}),": The cluster where the data source resides, usually the cluster where business data is written."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Target Cluster"}),": The target cluster for cross-cluster synchronization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"binlog"}),": The change log of the source cluster, which includes schema and data changes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Syncer"}),": A lightweight process responsible for synchronizing data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Upstream"}),": Refers to the upstream database in database-level jobs and the upstream table in table-level jobs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Downstream"}),": Refers to the downstream database in database-level jobs and the downstream table in table-level jobs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"architecture-description",children:"Architecture Description"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CCR Architecture Description",src:r(561852).Z+"",width:"3488",height:"1064"})}),"\n",(0,s.jsxs)(n.p,{children:["CCR mainly relies on a lightweight process: ",(0,s.jsx)(n.code,{children:"Syncer"}),". The ",(0,s.jsx)(n.code,{children:"Syncer"})," is responsible for obtaining binlogs from the source cluster and applying metadata to the target cluster, notifying the target cluster to pull data from the source cluster, thus achieving full synchronization and incremental synchronization."]}),"\n",(0,s.jsx)(n.h3,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Full Synchronization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CCR jobs will first perform full synchronization, copying the upstream data completely to the downstream."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Incremental Synchronization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After full synchronization is complete, CCR jobs will continue with incremental synchronization to maintain data consistency between upstream and downstream."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Restarting Full Synchronization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When encountering DDL operations that do not support incremental synchronization, CCR jobs will restart full synchronization. For specific DDL operations that do not support incremental synchronization, please refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/admin-manual/data-admin/ccr/feature",children:"Feature Details"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the upstream binlog is interrupted due to expiration or other reasons, incremental synchronization will stop and restart full synchronization."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Restarting Full Synchronization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During full synchronization, incremental synchronization will be paused."}),"\n",(0,s.jsx)(n.li,{children:"After full synchronization is complete, the downstream data table will undergo atomic replacement to ensure data consistency."}),"\n",(0,s.jsx)(n.li,{children:"After full synchronization is complete, incremental synchronization will resume."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"synchronization-methods",children:"Synchronization Methods"}),"\n",(0,s.jsx)(n.p,{children:"CCR supports four synchronization methods:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Synchronization Method"}),(0,s.jsx)(n.th,{children:"Principle"}),(0,s.jsx)(n.th,{children:"Trigger Timing"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Full Sync"})}),(0,s.jsx)(n.td,{children:"The upstream performs a full backup, and the downstream performs a restore. DB-level jobs trigger DB backups, and table-level jobs trigger table backups."}),(0,s.jsxs)(n.td,{children:["First synchronization or triggered by specific operations. For trigger conditions, please refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/admin-manual/data-admin/ccr/feature",children:"Feature Details"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Partial Sync"})}),(0,s.jsx)(n.td,{children:"The upstream performs table or partition-level backups, and the downstream performs table or partition-level restores."}),(0,s.jsxs)(n.td,{children:["Triggered by specific operations, for trigger conditions, please refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/admin-manual/data-admin/ccr/feature",children:"Feature Details"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"TXN"})}),(0,s.jsx)(n.td,{children:"Incremental data synchronization, starting synchronization after the upstream commits."}),(0,s.jsxs)(n.td,{children:["Triggered by specific operations, for trigger conditions, please refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/admin-manual/data-admin/ccr/feature",children:"Feature Details"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"SQL"})}),(0,s.jsx)(n.td,{children:"Replaying upstream SQL operations on the downstream."}),(0,s.jsxs)(n.td,{children:["Triggered by specific operations, for trigger conditions, please refer to ",(0,s.jsx)(n.a,{href:"/docs/3.0/admin-manual/data-admin/ccr/feature",children:"Feature Details"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(n.p,{children:"requirement: glibc >= 2.28"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Arch"}),(0,s.jsx)(n.th,{children:"Tarball"}),(0,s.jsx)(n.th,{children:"SHA256"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.1"}),(0,s.jsx)(n.td,{children:"ARM64"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/ccr-release/ccr-syncer-2.1.8-rc03-arm64.tar.xz",children:"ccr-syncer-2.1.8-rc03-arm64.tar.xz"})}),(0,s.jsx)(n.td,{children:"28b8396a7c4f766f9da55c8bbad56de364c2d7ea674cefb5f51fe37d3ac07769"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.1"}),(0,s.jsx)(n.td,{children:"X64"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/ccr-release/ccr-syncer-2.1.8-rc03-x64.tar.xz",children:"ccr-syncer-2.1.8-rc03-x64.tar.xz"})}),(0,s.jsx)(n.td,{children:"ddf456e9fef9abfde482a5fc06d27606411fc6e2595ff83859529d607419c60e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3.0"}),(0,s.jsx)(n.td,{children:"ARM64"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/ccr-release/ccr-syncer-3.0.4-rc02-arm64.tar.xz",children:"ccr-syncer-3.0.4-rc02-arm64.tar.xz"})}),(0,s.jsx)(n.td,{children:"4756397ffcd96d294fa8b8620ed04e9b36ac289d314c9a641abcee8b1180d961"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3.0"}),(0,s.jsx)(n.td,{children:"X64"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/ccr-release/ccr-syncer-3.0.4-rc02-x64.tar.xz",children:"ccr-syncer-3.0.4-rc02-arm64.tar.xz"})}),(0,s.jsx)(n.td,{children:"14bdd838b525ea77d334152a5be1423086e24669065a2d74e34524f1e8bffb38"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},561852:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/ccr-architecture-description-555f71e6eddcf0a744f55c0e0b12eb4a.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var i=r(667294);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);