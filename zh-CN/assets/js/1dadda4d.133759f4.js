"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403277"],{865040:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>t});var l=JSON.parse('{"id":"data-operate/import/min-load-replica-num","title":"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/import/min-load-replica-num.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/min-load-replica-num","permalink":"/zh-CN/docs/2.0/data-operate/import/min-load-replica-num","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u8F6C\u5316","permalink":"/zh-CN/docs/2.0/data-operate/import/load-data-convert"},"next":{"title":"\u4E25\u683C\u6A21\u5F0F","permalink":"/zh-CN/docs/2.0/data-operate/import/load-strict-mode"}}'),a=i("785893"),r=i("250065");let c={title:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",language:"zh-CN"},t=void 0,o={},d=[{value:"\u7528\u6CD5",id:"\u7528\u6CD5",level:2},{value:"\u5355\u4E2A\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",id:"\u5355\u4E2A\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",level:3},{value:"\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",id:"\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",level:3},{value:"\u5176\u4F59\u60C5\u51B5",id:"\u5176\u4F59\u60C5\u51B5",level:3}];function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5BFC\u5165\u8981\u6C42\u81F3\u5C11\u6709\u8D85\u8FC7\u534A\u6570\u7684\u526F\u672C\u5199\u5165\u6210\u529F\uFF0C\u5BFC\u5165\u624D\u7B97\u6210\u529F\u3002\u7136\u800C\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u591F\u7075\u6D3B\uFF0C\u5728\u67D0\u4E9B\u573A\u666F\u4F1A\u5E26\u6765\u4E0D\u4FBF\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5BF9\u4E8E\u4E24\u526F\u672C\u60C5\u51B5\uFF0C\u6309\u4E0A\u9762\u7684\u591A\u6570\u6D3E\u539F\u5219\uFF0C\u8981\u60F3\u5BFC\u5165\u6570\u636E\uFF0C\u5219\u9700\u8981\u8FD9\u4E24\u4E2A\u526F\u672C\u90FD\u5199\u5165\u6210\u529F\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5728\u5BFC\u5165\u6570\u636E\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u5141\u8BB8\u4EFB\u610F\u4E00\u4E2A\u526F\u672C\u4E0D\u53EF\u7528\u3002\u8FD9\u6781\u5927\u5F71\u54CD\u4E86\u96C6\u7FA4\u7684\u53EF\u7528\u6027\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0CDoris \u5141\u8BB8\u7528\u6237\u8BBE\u7F6E\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570 (Min Load Replica Num)\u3002\u5BF9\u5BFC\u5165\u6570\u636E\u4EFB\u52A1\uFF0C\u5F53\u5B83\u6210\u529F\u5199\u5165\u7684\u526F\u672C\u6570\u5927\u4E8E\u6216\u7B49\u4E8E\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u65F6\uFF0C\u5BFC\u5165\u5373\u6210\u529F\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7528\u6CD5",children:"\u7528\u6CD5"}),"\n",(0,a.jsx)(n.h3,{id:"\u5355\u4E2A\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",children:"\u5355\u4E2A\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u5BF9\u5355\u4E2A OLAP \u8868\uFF0C\u8BBE\u7F6E\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\uFF0C\u5E76\u7528\u8868\u5C5E\u6027 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"})," \u6765\u8868\u793A\u3002\u8BE5\u5C5E\u6027\u7684\u6709\u6548\u503C\u8981\u6C42\u5927\u4E8E 0 \u4E14\u4E0D\u8D85\u8FC7\u8868\u7684\u526F\u672C\u6570\u3002\u5176\u9ED8\u8BA4\u503C\u4E3A -1\uFF0C\u8868\u793A\u4E0D\u542F\u7528\u8BE5\u5C5E\u6027\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u5728\u521B\u5EFA\u8868\u65F6\u8BBE\u7F6E\u8868\u7684 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test_table1\n(\n    k1 INT,\n    k2 INT\n)\nDUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS 5\nPROPERTIES\n(\n    'replication_num' = '2',\n    'min_load_replica_num' = '1'\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u8868\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BED\u53E5 ",(0,a.jsx)(n.code,{children:"ALTER TABLE"})," \u6765\u4FEE\u6539\u5B83\u7684 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE test_table1\nSET ( 'min_load_replica_num' = '1');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528\u8BED\u53E5 ",(0,a.jsx)(n.code,{children:"SHOW CREATE TABLE"})," \u6765\u67E5\u770B\u8868\u7684\u5C5E\u6027 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE test_table1;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8F93\u51FA\u7ED3\u679C\u7684 PROPERTIES \u4E2D\u5C06\u5305\u542B ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'Create Table: CREATE TABLE `test_table1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 2",\n"min_load_replica_num" = "1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"enable_single_replica_compaction" = "false"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",children:"\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u5BF9\u6240\u6709 OLAP \u8868\uFF0C\u8BBE\u7F6E\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\uFF0C\u5E76\u7528 FE \u7684\u914D\u7F6E\u9879 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"})," \u6765\u8868\u793A\u3002\u8BE5\u914D\u7F6E\u9879\u7684\u6709\u6548\u503C\u8981\u6C42\u5927\u4E8E 0\u3002\u5176\u9ED8\u8BA4\u503C\u4E3A -1\uFF0C\u8868\u793A\u4E0D\u5F00\u542F\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5BF9\u4E00\u4E2A\u8868\uFF0C\u5982\u679C\u8868\u5C5E\u6027 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"})," \u6709\u6548\uFF08\u5373\u5927\u4E8E 0\uFF09\uFF0C\u90A3\u4E48\u8BE5\u8868\u5C06\u4F1A\u5FFD\u7565\u5168\u5C40\u914D\u7F6E",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\u3002\u5426\u5219\uFF0C\u5982\u679C\u5168\u5C40\u914D\u7F6E ",(0,a.jsx)(n.code,{children:"min_load_replica_num"})," \u6709\u6548\uFF08\u5373\u5927\u4E8E 0\uFF09\uFF0C\u90A3\u4E48\u8BE5\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u5C06\u7B49\u4E8E ",(0,a.jsx)(n.code,{children:"min(FE.conf.min_load_replica_num\uFF0Ctable.replication_num/2 + 1)"}),"\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5BF9\u4E8E FE \u914D\u7F6E\u9879\u7684\u67E5\u770B\u548C\u4FEE\u6539\uFF0C\u53EF\u4EE5\u53C2\u8003",(0,a.jsx)(n.a,{href:"../../admin-manual/config/fe-config",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5176\u4F59\u60C5\u51B5",children:"\u5176\u4F59\u60C5\u51B5"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u6CA1\u6709\u5F00\u542F\u8868\u5C5E\u6027 ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"\uFF08\u5373\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E 0\uFF09\uFF0C\u4E5F\u6CA1\u6709\u8BBE\u7F6E\u5168\u5C40\u914D\u7F6E ",(0,a.jsx)(n.code,{children:"min_load_replica_num"}),"(\u5373\u5C0F\u4E8E\u6216\u7B49\u4E8E 0)\uFF0C\u90A3\u4E48\u6570\u636E\u7684\u5BFC\u5165\u4ECD\u9700\u591A\u6570\u6D3E\u526F\u672C\u5199\u5165\u6210\u529F\u624D\u7B97\u6210\u529F\u3002\u6B64\u65F6\uFF0C\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u7B49\u4E8E ",(0,a.jsx)(n.code,{children:"table.replicatition_num/2 + 1"}),"\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return c}});var l=i(667294);let a={},r=l.createContext(a);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);