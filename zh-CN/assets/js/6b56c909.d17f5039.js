"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["499578"],{950498:function(n,e,d){d.r(e),d.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"admin-manual/data-admin/ccr/config","title":"\u914D\u7F6E\u8BF4\u660E","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/ccr/config.md","sourceDirName":"admin-manual/data-admin/ccr","slug":"/admin-manual/data-admin/ccr/config","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/ccr/config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u914D\u7F6E\u8BF4\u660E","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u529F\u80FD\u8BE6\u60C5","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/ccr/feature"},"next":{"title":"\u6027\u80FD\u6D4B\u8BD5","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/ccr/performance"}}'),s=d("785893"),t=d("250065");let i={title:"\u914D\u7F6E\u8BF4\u660E",language:"zh-CN"},c=void 0,l={},h=[{value:"FE \u914D\u7F6E",id:"fe-\u914D\u7F6E",level:2},{value:"BE",id:"be",level:2},{value:"\u5E93\u8868\u5C5E\u6027",id:"\u5E93\u8868\u5C5E\u6027",level:2}];function x(n){let e={br:"br",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u672C\u6587\u7ED9\u51FA\u4F7F\u7528 CCR \u9700\u8981\u8C03\u6574\u6216\u8005\u5173\u6CE8\u7684\u914D\u7F6E\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"fe-\u914D\u7F6E",children:"FE \u914D\u7F6E"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 fe.conf \u4E2D\u914D\u7F6E\uFF0C\u4F8B\u5982 ",(0,s.jsx)(e.code,{children:"restore_reset_index_id = true"}),"\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u540D\u79F0"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u8BF4\u660E"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u7248\u672C"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"restore_reset_index_id"})}),(0,s.jsxs)(e.td,{children:["\u5982\u679C\u540C\u6B65\u7684\u8868\u4E2D\u4F7F\u7528 inverted index \u6216\u8005 bitmap \u7D22\u5F15\uFF0C\u9700\u8BBE\u7F6E\u4E3A ",(0,s.jsx)(e.code,{children:"false"}),"\u3002"]}),(0,s.jsx)(e.td,{children:"false"}),(0,s.jsx)(e.td,{children:"\u4ECE 2.1.8 \u53CA 3.0.4 \u5F00\u59CB\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ignore_backup_tmp_partitions"})}),(0,s.jsxs)(e.td,{children:["\u907F\u514D\u56E0\u4E0A\u6E38\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"tmp partition"})," \u5BFC\u81F4\u540C\u6B65\u4E2D\u65AD\uFF0C\u9700\u8BBE\u7F6E\u4E3A ",(0,s.jsx)(e.code,{children:"true"}),"\u3002"]}),(0,s.jsx)(e.td,{children:"false"}),(0,s.jsx)(e.td,{children:"\u4ECE 2.1.8 \u53CA 3.0.4 \u5F00\u59CB\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"max_backup_restore_job_num_per_db"})}),(0,s.jsx)(e.td,{children:"\u5185\u5B58\u4E2D\u6BCF\u4E2A DB \u7684 backup/restore job \u6570\u91CF\u9650\u5236\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A 2\u3002"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"label_num_threshold"})}),(0,s.jsx)(e.td,{children:"\u63A7\u5236 TXN Label \u6570\u91CF\uFF0C\u9632\u6B62\u4E8B\u52A1\u56DE\u6536\u8FC7\u5FEB\uFF0C\u8FC7\u5927\u4F1A\u5360\u7528\u8F83\u591A\u5185\u5B58\uFF0C\u8FC7\u5C0F\u53EF\u80FD\u5BFC\u81F4\u5F02\u5E38\u60C5\u51B5\u4E0B\u6570\u636E\u91CD\u590D\uFF0C\u9ED8\u8BA4\u503C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u591F\u7528\u3002"}),(0,s.jsx)(e.td,{children:"2000"}),(0,s.jsx)(e.td,{children:"2.1 \u5F00\u59CB\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"restore_job_compressed_serialization"})}),(0,s.jsxs)(e.td,{children:["tablet \u6570\u76EE\u8D85\u8FC7 10w \u65F6\u5EFA\u8BAE\u914D\u7F6E\u4E3A true\u3002",(0,s.jsx)(e.br,{})," \u964D\u7EA7\u524D\u5173\u95ED\u914D\u7F6E\u5E76\u786E\u4FDD FE \u5B8C\u6210\u4E00\u6B21 checkpoint\u3002",(0,s.jsx)(e.br,{})," 2.1 \u5347\u7EA7 3.0 \u65F6\uFF0C\u81F3\u5C11\u5347\u7EA7\u5230 3.0.3\u3002"]}),(0,s.jsx)(e.td,{children:"false"}),(0,s.jsx)(e.td,{children:"\u4ECE 2.1.8 \u548C 3.0.3 \u5F00\u59CB\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"backup_job_compressed_serialization"})}),(0,s.jsxs)(e.td,{children:["tablet \u6570\u76EE\u8D85\u8FC7 10w \u65F6\u5EFA\u8BAE\u914D\u7F6E\u4E3A true\u3002",(0,s.jsx)(e.br,{})," \u964D\u7EA7\u524D\u5173\u95ED\u914D\u7F6E\u5E76\u786E\u4FDD FE \u5B8C\u6210\u4E00\u6B21 checkpoint\u3002",(0,s.jsx)(e.br,{})," 2.1 \u5347\u7EA7 3.0 \u65F6\uFF0C\u81F3\u5C11\u5347\u7EA7\u5230 3.0.3\u3002"]}),(0,s.jsx)(e.td,{children:"false"}),(0,s.jsx)(e.td,{children:"\u4ECE 2.1.8 \u548C 3.0.3 \u5F00\u59CB\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"backup_job_default_timeout_ms"})}),(0,s.jsx)(e.td,{children:"\u5907\u4EFD/\u6062\u590D\u4EFB\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u6E90\u3001\u76EE\u6807\u96C6\u7FA4\u7684 FE \u90FD\u9700\u8981\u914D\u7F6E\u3002"}),(0,s.jsx)(e.td,{children:"\u65E0"}),(0,s.jsx)(e.td,{children:"\u6839\u636E\u9700\u6C42\u8BBE\u7F6E"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"enable_restore_snapshot_rpc_compression"})}),(0,s.jsx)(e.td,{children:"\u5F00\u542F snapshot info \u538B\u7F29\uFF0C\u964D\u4F4E RPC \u6D88\u606F\u5927\u5C0F\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A true\u3002"}),(0,s.jsx)(e.td,{children:"true"}),(0,s.jsx)(e.td,{children:"\u4ECE 2.1.8 \u548C 3.0.3 \u5F00\u59CB\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"be",children:"BE"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 be.conf \u4E2D\u914D\u7F6E\uFF0C\u4F8B\u5982 ",(0,s.jsx)(e.code,{children:"thrift_max_message_size = 2000000000"}),"\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u540D\u79F0"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u8BF4\u660E"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u7248\u672C"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"thrift_max_message_size"})}),(0,s.jsx)(e.td,{children:"BE thrift server \u5355\u6B21 RPC packet \u4E0A\u9650\uFF0CCCR \u4EFB\u52A1\u6D89\u53CA\u7684 tablet \u6570\u76EE\u5927\u65F6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A 2000000000"}),(0,s.jsx)(e.td,{children:"100MB"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"be_thrift_max_pkg_bytes"})}),(0,s.jsx)(e.td,{children:"BE Thrift RPC \u6D88\u606F\u5305\u5927\u5C0F\u9650\u5236\u3002"}),(0,s.jsx)(e.td,{children:"20MB"}),(0,s.jsx)(e.td,{children:"2.0 \u7279\u6709\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"max_download_speed_kbps"})}),(0,s.jsx)(e.td,{children:"\u4E0B\u6E38 BE \u6BCF\u4E2A download worker \u7684\u4E0B\u8F7D\u9650\u901F\uFF0C\u9ED8\u8BA4\u6BCF\u7EBF\u7A0B 50MB/s\u3002"}),(0,s.jsx)(e.td,{children:"50MB/s"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"download_worker_count"})}),(0,s.jsx)(e.td,{children:"\u4E0B\u8F7D\u4EFB\u52A1\u7684\u7EBF\u7A0B\u6570\uFF0C\u7ED3\u5408\u7F51\u5361\u3001\u78C1\u76D8\u548C\u8D1F\u8F7D\u8BBE\u7F6E\u3002"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u5E93\u8868\u5C5E\u6027",children:"\u5E93\u8868\u5C5E\u6027"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Create Table"})," \u6216\u8005 ",(0,s.jsx)(e.code,{children:"Alter Table"})," \u8BBE\u7F6E\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u540D\u79F0"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u8BF4\u660E"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u7248\u672C"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"binlog.max_bytes"})}),(0,s.jsx)(e.td,{children:"binlog \u6700\u5927\u5185\u5B58\u5360\u7528\uFF0C\u5EFA\u8BAE\u81F3\u5C11\u4FDD\u7559 4GB\u3002"}),(0,s.jsx)(e.td,{children:"\u65E0\u9650\u5236"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"binlog.ttl_seconds"})}),(0,s.jsx)(e.td,{children:"binlog \u4FDD\u7559\u65F6\u95F4\u3002"}),(0,s.jsx)(e.td,{children:"2.0.5 \u4E4B\u524D\u65E0\u9650\u5236\uFF0C2.0.5 \u5F00\u59CB 1 \u5929\uFF0886400\uFF09"}),(0,s.jsx)(e.td,{children:"\u6240\u6709\u7248\u672C"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return c},a:function(){return i}});var r=d(667294);let s={},t=r.createContext(s);function i(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);