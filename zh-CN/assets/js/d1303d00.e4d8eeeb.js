"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["576027"],{44334:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE","title":"RESTORE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"RESTORE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL-BACKUP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"},"next":{"title":"CANCEL-RESTORE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE"}}'),i=l("785893"),a=l("250065");let t={title:"RESTORE",language:"zh-CN"},r=void 0,c={},d=[{value:"RESTORE",id:"restore",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"restore",children:"RESTORE"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"RESTORE"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C06\u4E4B\u524D\u901A\u8FC7 BACKUP \u547D\u4EE4\u5907\u4EFD\u7684\u6570\u636E\uFF0C\u6062\u590D\u5230\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u3002\u8BE5\u547D\u4EE4\u4E3A\u5F02\u6B65\u64CD\u4F5C\u3002\u63D0\u4EA4\u6210\u529F\u540E\uFF0C\u9700\u901A\u8FC7 SHOW RESTORE \u547D\u4EE4\u67E5\u770B\u8FDB\u5EA6\u3002\u4EC5\u652F\u6301\u6062\u590D OLAP \u7C7B\u578B\u7684\u8868\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT [db_name].{snapshot_name}\nFROM `repository_name`\n[ON|EXCLUDE] (\n    `table_name` [PARTITION (`p1`, ...)] [AS `tbl_alias`],\n    ...\n)\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u540C\u4E00\u6570\u636E\u5E93\u4E0B\u53EA\u80FD\u6709\u4E00\u4E2A\u6B63\u5728\u6267\u884C\u7684 BACKUP \u6216 RESTORE \u4EFB\u52A1\u3002"}),"\n",(0,i.jsx)(n.li,{children:"ON \u5B50\u53E5\u4E2D\u6807\u8BC6\u9700\u8981\u6062\u590D\u7684\u8868\u548C\u5206\u533A\u3002\u5982\u679C\u4E0D\u6307\u5B9A\u5206\u533A\uFF0C\u5219\u9ED8\u8BA4\u6062\u590D\u8BE5\u8868\u7684\u6240\u6709\u5206\u533A\u3002\u6240\u6307\u5B9A\u7684\u8868\u548C\u5206\u533A\u5FC5\u987B\u5DF2\u5B58\u5728\u4E8E\u4ED3\u5E93\u5907\u4EFD\u4E2D\u3002"}),"\n",(0,i.jsx)(n.li,{children:"EXCLUDE \u5B50\u53E5\u4E2D\u6807\u8BC6\u4E0D\u9700\u8981\u6062\u590D\u7684\u8868\u548C\u5206\u533A\u3002\u9664\u4E86\u6240\u6307\u5B9A\u7684\u8868\u6216\u5206\u533A\u4E4B\u5916\u4ED3\u5E93\u4E2D\u6240\u6709\u5176\u4ED6\u8868\u7684\u6240\u6709\u5206\u533A\u5C06\u88AB\u6062\u590D\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53EF\u4EE5\u901A\u8FC7 AS \u8BED\u53E5\u5C06\u4ED3\u5E93\u4E2D\u5907\u4EFD\u7684\u8868\u540D\u6062\u590D\u4E3A\u65B0\u7684\u8868\u3002\u4F46\u65B0\u8868\u540D\u4E0D\u80FD\u5DF2\u5B58\u5728\u4E8E\u6570\u636E\u5E93\u4E2D\u3002\u5206\u533A\u540D\u79F0\u4E0D\u80FD\u4FEE\u6539\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53EF\u4EE5\u5C06\u4ED3\u5E93\u4E2D\u5907\u4EFD\u7684\u8868\u6062\u590D\u66FF\u6362\u6570\u636E\u5E93\u4E2D\u5DF2\u6709\u7684\u540C\u540D\u8868\uFF0C\u4F46\u987B\u4FDD\u8BC1\u4E24\u5F20\u8868\u7684\u8868\u7ED3\u6784\u5B8C\u5168\u4E00\u81F4\u3002\u8868\u7ED3\u6784\u5305\u62EC\uFF1A\u8868\u540D\u3001\u5217\u3001\u5206\u533A\u3001Rollup \u7B49\u7B49\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53EF\u4EE5\u6307\u5B9A\u6062\u590D\u8868\u7684\u90E8\u5206\u5206\u533A\uFF0C\u7CFB\u7EDF\u4F1A\u68C0\u67E5\u5206\u533A Range \u6216\u8005 List \u662F\u5426\u80FD\u591F\u5339\u914D\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["PROPERTIES \u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u5C5E\u6027\uFF1A\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['"backup_timestamp" = "2018-05-04-16-45-08"\uFF1A\u6307\u5B9A\u4E86\u6062\u590D\u5BF9\u5E94\u5907\u4EFD\u7684\u54EA\u4E2A\u65F6\u95F4\u7248\u672C\uFF0C\u5FC5\u586B\u3002\u8BE5\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 ',(0,i.jsx)(n.code,{children:"SHOW SNAPSHOT ON repo;"})," \u8BED\u53E5\u83B7\u5F97\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'"replication_num" = "3"\uFF1A\u6307\u5B9A\u6062\u590D\u7684\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u6570\u3002\u9ED8\u8BA4\u4E3A 3\u3002\u82E5\u6062\u590D\u5DF2\u5B58\u5728\u7684\u8868\u6216\u5206\u533A\uFF0C\u5219\u526F\u672C\u6570\u5FC5\u987B\u548C\u5DF2\u5B58\u5728\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u6570\u76F8\u540C\u3002\u540C\u65F6\uFF0C\u5FC5\u987B\u6709\u8DB3\u591F\u7684 host \u5BB9\u7EB3\u591A\u4E2A\u526F\u672C\u3002\u8BE5\u529F\u80FD\u81EA Apache Doris  1.2 \u7248\u672C\u8D77\u652F\u6301\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'<"reserve_replica" = "true"\uFF1A\u9ED8\u8BA4\u4E3A false\u3002\u5F53\u8BE5\u5C5E\u6027\u4E3A true \u65F6\uFF0C\u4F1A\u5FFD\u7565 replication_num \u5C5E\u6027\uFF0C\u6062\u590D\u7684\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u6570\u5C06\u4E0E\u5907\u4EFD\u4E4B\u524D\u4E00\u6837\u3002\u652F\u6301\u591A\u4E2A\u8868\u6216\u8868\u5185\u591A\u4E2A\u5206\u533A\u6709\u4E0D\u540C\u7684\u526F\u672C\u6570\u3002\u8BE5\u529F\u80FD\u81EA Apache Doris  1.2 \u7248\u672C\u8D77\u652F\u6301\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\"reserve_dynamic_partition_enable\" = \"true\"\uFF1A\u9ED8\u8BA4\u4E3A false\u3002\u5F53\u8BE5\u5C5E\u6027\u4E3A true \u65F6\uFF0C\u6062\u590D\u7684\u8868\u4F1A\u4FDD\u7559\u8BE5\u8868\u5907\u4EFD\u4E4B\u524D\u7684'dynamic_partition_enable'\u5C5E\u6027\u503C\u3002\u8BE5\u503C\u4E0D\u4E3A true \u65F6\uFF0C\u5219\u6062\u590D\u51FA\u6765\u7684\u8868\u7684'dynamic_partition_enable'\u5C5E\u6027\u503C\u4F1A\u8BBE\u7F6E\u4E3A false\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'"timeout" = "3600"\uFF1A\u4EFB\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u5929\u3002\u5355\u4F4D\u79D2\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'"meta_version" = 40\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684 meta_version \u6765\u8BFB\u53D6\u4E4B\u524D\u5907\u4EFD\u7684\u5143\u6570\u636E\u3002\u6CE8\u610F\uFF0C\u8BE5\u53C2\u6570\u4F5C\u4E3A\u4E34\u65F6\u65B9\u6848\uFF0C\u4EC5\u7528\u4E8E\u6062\u590D\u8001\u7248\u672C Doris \u5907\u4EFD\u7684\u6570\u636E\u3002\u6700\u65B0\u7248\u672C\u7684\u5907\u4EFD\u6570\u636E\u4E2D\u5DF2\u7ECF\u5305\u542B meta version\uFF0C\u65E0\u9700\u518D\u6307\u5B9A\u3002\u8BE5\u529F\u80FD\u81EA Apache Doris 2.0.15 \u7248\u672C\u8D77\u652F\u6301'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['"clean_tables" : \u8868\u793A\u662F\u5426\u6E05\u7406\u4E0D\u5C5E\u4E8E\u6062\u590D\u76EE\u6807\u7684\u8868\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6062\u590D\u4E4B\u524D\u7684\u76EE\u6807\u6570\u636E\u5E93\u6709\u5907\u4EFD\u4E2D\u4E0D\u5B58\u5728\u7684\u8868\uFF0C\u6307\u5B9A ',(0,i.jsx)(n.code,{children:"clean_tables"})," \u5C31\u53EF\u4EE5\u5728\u6062\u590D\u671F\u95F4\u5220\u9664\u8FD9\u4E9B\u989D\u5916\u7684\u8868\u5E76\u5C06\u5176\u79FB\u5165\u56DE\u6536\u7AD9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['"clean_partitions" \uFF1A\u8868\u793A\u662F\u5426\u6E05\u7406\u4E0D\u5C5E\u4E8E\u6062\u590D\u76EE\u6807\u7684\u5206\u533A\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6062\u590D\u4E4B\u524D\u7684\u76EE\u6807\u8868\u6709\u5907\u4EFD\u4E2D\u4E0D\u5B58\u5728\u7684\u5206\u533A\uFF0C\u6307\u5B9A ',(0,i.jsx)(n.code,{children:"clean_partitions"})," \u5C31\u53EF\u4EE5\u5728\u6062\u590D\u671F\u95F4\u5220\u9664\u8FD9\u4E9B\u989D\u5916\u7684\u5206\u533A\u5E76\u5C06\u5176\u79FB\u5165\u56DE\u6536\u7AD9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'\u4ECE example_repo \u4E2D\u6062\u590D\u5907\u4EFD snapshot_1 \u4E2D\u7684\u8868 backup_tbl \u5230\u6570\u636E\u5E93 example_db1\uFF0C\u65F6\u95F4\u7248\u672C\u4E3A "2018-05-04-16-45-08"\u3002\u6062\u590D\u4E3A 1 \u4E2A\u526F\u672C\uFF1A'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'\u4ECE example_repo \u4E2D\u6062\u590D\u5907\u4EFD snapshot_2 \u4E2D\u7684\u8868 backup_tbl \u7684\u5206\u533A p1,p2\uFF0C\u4EE5\u53CA\u8868 backup_tbl2 \u5230\u6570\u636E\u5E93 example_db1\uFF0C\u5E76\u91CD\u547D\u540D\u4E3A new_tbl\uFF0C\u65F6\u95F4\u7248\u672C\u4E3A "2018-05-04-17-11-01"\u3002\u9ED8\u8BA4\u6062\u590D\u4E3A 3 \u4E2A\u526F\u672C\uFF1A'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:'\u4ECE example_repo \u4E2D\u6062\u590D\u5907\u4EFD snapshot_3 \u4E2D\u9664\u4E86\u8868 backup_tbl \u7684\u5176\u4ED6\u6240\u6709\u8868\u5230\u6570\u636E\u5E93 example_db1\uFF0C\u65F6\u95F4\u7248\u672C\u4E3A "2018-05-04-18-12-18"\u3002'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_3`\nFROM `example_repo`\nEXCLUDE ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-18-12-18"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"RESTORE\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u540C\u4E00\u6570\u636E\u5E93\u4E0B\u53EA\u80FD\u6709\u4E00\u4E2A\u6B63\u5728\u6267\u884C\u7684\u6062\u590D\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u5C06\u4ED3\u5E93\u4E2D\u5907\u4EFD\u7684\u8868\u6062\u590D\u66FF\u6362\u6570\u636E\u5E93\u4E2D\u5DF2\u6709\u7684\u540C\u540D\u8868\uFF0C\u4F46\u987B\u4FDD\u8BC1\u4E24\u5F20\u8868\u7684\u8868\u7ED3\u6784\u5B8C\u5168\u4E00\u81F4\u3002\u8868\u7ED3\u6784\u5305\u62EC\uFF1A\u8868\u540D\u3001\u5217\u3001\u5206\u533A\u3001\u7269\u5316\u89C6\u56FE\u7B49\u7B49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5F53\u6307\u5B9A\u6062\u590D\u8868\u7684\u90E8\u5206\u5206\u533A\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u68C0\u67E5\u5206\u533A\u8303\u56F4\u662F\u5426\u80FD\u591F\u5339\u914D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6062\u590D\u64CD\u4F5C\u7684\u6548\u7387\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u96C6\u7FA4\u89C4\u6A21\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6062\u590D\u64CD\u4F5C\u7684\u8017\u65F6\u57FA\u672C\u7B49\u540C\u4E8E\u5907\u4EFD\u64CD\u4F5C\u7684\u8017\u65F6\u3002\u5982\u679C\u60F3\u52A0\u901F\u6062\u590D\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5148\u901A\u8FC7\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"replication_num"})," \u53C2\u6570\uFF0C\u4EC5\u6062\u590D\u4E00\u4E2A\u526F\u672C\uFF0C\u4E4B\u540E\u5728\u901A\u8FC7\u8C03\u6574\u526F\u672C\u6570 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",children:"ALTER TABLE PROPERTY"}),"\uFF0C\u5C06\u526F\u672C\u8865\u9F50\u3002"]}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return t}});var s=l(667294);let i={},a=s.createContext(i);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);