"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["558001"],{744675:function(e,n,d){d.r(n),d.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"admin-manual/log-management/be-log","title":"BE \u65E5\u5FD7\u7BA1\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/log-management/be-log.md","sourceDirName":"admin-manual/log-management","slug":"/admin-manual/log-management/be-log","permalink":"/zh-CN/docs/3.0/admin-manual/log-management/be-log","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BE \u65E5\u5FD7\u7BA1\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FE \u65E5\u5FD7\u7BA1\u7406","permalink":"/zh-CN/docs/3.0/admin-manual/log-management/fe-log"},"next":{"title":"\u76D1\u63A7\u6307\u6807","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/metrics"}}'),l=d("785893"),r=d("250065");let c={title:"BE \u65E5\u5FD7\u7BA1\u7406",language:"zh-CN"},i=void 0,t={},o=[{value:"\u65E5\u5FD7\u5206\u7C7B",id:"\u65E5\u5FD7\u5206\u7C7B",level:2},{value:"\u65E5\u5FD7\u914D\u7F6E",id:"\u65E5\u5FD7\u914D\u7F6E",level:2},{value:"\u5F00\u542F DEBUG \u65E5\u5FD7",id:"\u5F00\u542F-debug-\u65E5\u5FD7",level:2},{value:"\u9759\u6001\u914D\u7F6E",id:"\u9759\u6001\u914D\u7F6E",level:3},{value:"\u52A8\u6001\u8C03\u6574",id:"\u52A8\u6001\u8C03\u6574",level:3},{value:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",id:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD Backend(BE) \u8FDB\u7A0B\u7684\u65E5\u5FD7\u7BA1\u7406\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u6587\u6863\u9002\u7528\u4E8E 2.1.4 \u53CA\u4E4B\u540E\u7684 Doris \u7248\u672C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u65E5\u5FD7\u5206\u7C7B",children:"\u65E5\u5FD7\u5206\u7C7B"}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"sh bin/start_be.sh --daemon"})," \u65B9\u5F0F\u542F\u52A8 BE \u8FDB\u7A0B\u540E\uFF0CBE \u65E5\u5FD7\u76EE\u5F55\u4E0B\u4F1A\u4EA7\u751F\u4EE5\u4E0B\u7C7B\u578B\u7684\u65E5\u5FD7\u6587\u4EF6\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"be.INFO"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"BE \u8FDB\u7A0B\u8FD0\u884C\u65E5\u5FD7\u3002BE \u7684\u4E3B\u65E5\u5FD7\u6587\u4EF6\u3002BE \u8FDB\u7A0B\u6240\u6709\u7B49\u7EA7\uFF08DEBUG\u3001INFO\u3001WARN\u3001ERROR \u7B49\uFF09\u7684\u8FD0\u884C\u65E5\u5FD7\u90FD\u4F1A\u6253\u5370\u5230\u8FD9\u4E2A\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6CE8\u610F\u8FD9\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u8F6F\u94FE\uFF0C\u4ED6\u6307\u5411\u7684\u662F\u5F53\u524D\u6700\u65B0\u7684 BE \u8FD0\u884C\u65E5\u5FD7\u6587\u4EF6\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"be.WARNING"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"BE \u8FDB\u7A0B\u8FD0\u884C\u65E5\u5FD7\u3002\u4F46\u53EA\u4F1A\u6253\u5370 WARN \u7EA7\u522B\u4EE5\u4E0A\u7684\u8FD0\u884C\u65E5\u5FD7\u3002be.WARNING \u4E2D\u7684\u5185\u5BB9\u662F be.INFO \u65E5\u5FD7\u5185\u5BB9\u7684\u5B50\u96C6\u3002\u4E3B\u8981\u7528\u4E8E\u5FEB\u901F\u67E5\u770B\u544A\u8B66\u6216\u9519\u8BEF\u7EA7\u522B\u65E5\u5FD7\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6CE8\u610F\u8FD9\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u8F6F\u94FE\uFF0C\u4ED6\u6307\u5411\u7684\u662F\u5F53\u524D\u6700\u65B0\u7684 BE \u544A\u8B66\u65E5\u5FD7\u6587\u4EF6\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"be.out"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u4E8E\u63A5\u6536\u6807\u51C6\u8F93\u51FA\u6D41\u548C\u9519\u8BEF\u6570\u636E\u6D41\u7684\u65E5\u5FD7\u3002\u6BD4\u5982 start \u811A\u672C\u4E2D\u7684 ",(0,l.jsx)(n.code,{children:"echo"})," \u547D\u4EE4\u8F93\u51FA\u7B49\uFF0C\u6216\u5176\u4ED6\u672A\u88AB glog \u6846\u67B6\u6355\u83B7\u5230\u7684\u65E5\u5FD7\u4FE1\u606F\u3002\u901A\u5E38\u4F5C\u4E3A\u8FD0\u884C\u65E5\u5FD7\u7684\u8865\u5145\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u5E38\u5728 BE \u5F02\u5E38\u5B95\u673A\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u67E5\u770B\u8FD9\u4E2A\u65E5\u5FD7\u6765\u83B7\u53D6\u5F02\u5E38\u5806\u6808\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"jni.log"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"BE \u8FDB\u7A0B\u901A\u8FC7 JNI \u8C03\u7528 Java \u7A0B\u5E8F\u65F6\uFF0CJava \u7A0B\u5E8F\u6253\u5370\u7684\u65E5\u5FD7\u3002"}),"\n",(0,l.jsx)(n.p,{children:"TODO\uFF1A\u672A\u6765\u7248\u672C\u4E2D\uFF0C\u8FD9\u90E8\u5206\u65E5\u5FD7\u4F1A\u7EDF\u4E00\u5230 be.INFO \u65E5\u5FD7\u4E2D\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"be.gc.log"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["BE JVM \u7684 GC \u65E5\u5FD7\u3002\u8BE5\u65E5\u5FD7\u7684\u884C\u4E3A\u7531 be.conf \u4E2D\u7684 JVM \u542F\u52A8\u9879 ",(0,l.jsx)(n.code,{children:"JAVA_OPTS"})," \u63A7\u5236\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65E5\u5FD7\u914D\u7F6E",children:"\u65E5\u5FD7\u914D\u7F6E"}),"\n",(0,l.jsx)(n.p,{children:"\u5305\u62EC\u914D\u7F6E\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u5F84\u3001\u4FDD\u7559\u65F6\u95F4\u3001\u4FDD\u7559\u6570\u76EE\u3001\u5927\u5C0F\u7B49\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4EE5\u4E0B\u914D\u7F6E\u9879\u5747\u5728 ",(0,l.jsx)(n.code,{children:"be.conf"})," \u6587\u4EF6\u4E2D\u914D\u7F6E\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u914D\u7F6E\u9879"}),(0,l.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,l.jsx)(n.th,{children:"\u53EF\u9009\u9879"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"LOG_DIR"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"ENV(DORIS_HOME)/log"})}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u6240\u6709\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A BE \u90E8\u7F72\u8DEF\u5F84\u7684 ",(0,l.jsx)(n.code,{children:"log/"})," \u76EE\u5F55\u4E0B\u3002\u6CE8\u610F\u8FD9\u662F\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u914D\u7F6E\u540D\u9700\u5927\u5199\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_level"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"INFO"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"INFO"}),", ",(0,l.jsx)(n.code,{children:"WARNING"}),", ",(0,l.jsx)(n.code,{children:"ERROR"}),", ",(0,l.jsx)(n.code,{children:"FATAL"})]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"be.INFO"})," \u7684\u65E5\u5FD7\u7B49\u7EA7\u3002\u9ED8\u8BA4\u4E3A INFO\u3002\u4E0D\u5EFA\u8BAE\u4FEE\u6539\uFF0CINFO \u7B49\u7EA7\u5305\u542B\u8BB8\u591A\u5173\u952E\u65E5\u5FD7\u4FE1\u606F\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_roll_num"})}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"be.INFO"})," \u548C ",(0,l.jsx)(n.code,{children:"be.WARNING"})," \u6700\u5927\u6587\u4EF6\u6570\u91CF\u3002\u9ED8\u8BA4 10\u3002\u5F53\u56E0\u4E3A\u65E5\u5FD7\u6EDA\u52A8\u6216\u5207\u5206\u540E\uFF0C\u65E5\u5FD7\u6587\u4EF6\u6570\u91CF\u5927\u4E8E\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u8001\u7684\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u5220\u9664"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_verbose_modules"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:'\u53EF\u4EE5\u8BBE\u7F6E\u6307\u5B9A\u4EE3\u7801\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5F00\u542F DEBUG \u7EA7\u522B\u65E5\u5FD7\u3002\u8BF7\u53C2\u9605 "\u5F00\u542F DEBUG \u65E5\u5FD7" \u7AE0\u8282'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_verbose_level"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:'\u8BF7\u53C2\u9605 "\u5F00\u542F DEBUG \u65E5\u5FD7" \u7AE0\u8282'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_verbose_flags_v"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:'\u8BF7\u53C2\u9605 "\u5F00\u542F DEBUG \u65E5\u5FD7" \u7AE0\u8282'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_roll_mode"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"SIZE-MB-1024"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"TIME-DAY"}),", ",(0,l.jsx)(n.code,{children:"TIME-HOUR"}),", ",(0,l.jsx)(n.code,{children:"SIZE-MB-nnn"})]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"be.INFO"})," \u548C ",(0,l.jsx)(n.code,{children:"be.WARNING"})," \u65E5\u5FD7\u7684\u6EDA\u52A8\u7B56\u7565\u3002\u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"SIZE-MB-1024"}),"\uFF0C\u5373\u6BCF\u4E2A\u65E5\u5FD7\u8FBE\u5230 1024MB \u5927\u5C0F\u540E\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u65E5\u5FD7\u6587\u4EF6\u3002\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6309\u5929\u6216\u6309\u5C0F\u65F6\u6EDA\u52A8"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"log_buffer_level"})}),(0,l.jsx)(n.td,{children:"\u7A7A"}),(0,l.jsxs)(n.td,{children:["\u7A7A \u6216 ",(0,l.jsx)(n.code,{children:"-1"})]}),(0,l.jsx)(n.td,{children:"BE \u65E5\u5FD7\u8F93\u51FA\u6A21\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBE \u65E5\u5FD7\u4F1A\u5F02\u6B65\u4E0B\u5237\u5230\u78C1\u76D8\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A -1\uFF0C\u5219\u65E5\u5FD7\u5185\u5BB9\u4F1A\u5B9E\u65F6\u4E0B\u5237\u3002\u5B9E\u65F6\u4E0B\u5237\u4F1A\u5F71\u54CD\u65E5\u5FD7\u6027\u80FD\uFF0C\u4F46\u53EF\u4EE5\u5C3D\u53EF\u80FD\u591A\u7684\u4FDD\u7559\u6700\u65B0\u7684\u65E5\u5FD7\u3002\u5982\u5728 BE \u5F02\u5E38\u5B95\u673A\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u6700\u540E\u7684\u65E5\u5FD7\u4FE1\u606F\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"disable_compaction_trace_log"})}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:"true, false"}),(0,l.jsx)(n.td,{children:"\u9ED8\u8BA4\u4E3A true\uFF0C\u5373\u5173\u95ED compaction \u64CD\u4F5C\u7684 tracing \u65E5\u5FD7\u3002\u5982\u679C\u4E3A false\uFF0C\u5219\u4F1A\u6253\u5370\u548C Compaction \u64CD\u4F5C\u76F8\u5173\u7684 tracing \u65E5\u5FD7\uFF0C\u7528\u4E8E\u6392\u67E5\u95EE\u9898\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"aws_log_level"})}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u7528\u4E8E\u63A7\u5236 aws sdk \u7684\u65E5\u5FD7\u7B49\u7EA7\u3002\u9ED8\u8BA4\u4E3A 0\uFF0C\u8868\u793A\u5173\u95ED aws sdk \u65E5\u5FD7\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Caws sdk \u65E5\u5FD7\u5DF2\u7ECF\u88AB glog \u4E3B\u52A8\u6355\u83B7\uFF0C\u5E76\u4F1A\u6B63\u5E38\u6253\u5370\u4E3B\u52A8\u6355\u83B7\u7684\u65E5\u5FD7\u3002\u4E2A\u522B\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u5F00\u542F aws sdk \u65E5\u5FD7\u4EE5\u67E5\u770B\u66F4\u591A\u672A\u88AB\u6355\u83B7\u7684\u65E5\u5FD7\u3002\u4E0D\u540C\u6570\u5B57\u4EE3\u8868\u4E0D\u540C\u65E5\u5FD7\u7B49\u7EA7\uFF1AOff = 0, Fatal = 1, Error = 2, Warn = 3, Info = 4, Debug = 5, Trace = 6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"s3_file_writer_log_interval_second"})}),(0,l.jsx)(n.td,{children:"60"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u5F53\u6267\u884C S3 Upload \u64CD\u4F5C\u65F6\uFF0C\u4F1A\u6BCF\u9694 60 \u79D2\uFF08\u9ED8\u8BA4\uFF09\u6253\u5370\u64CD\u4F5C\u8FDB\u5EA6\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"enable_debug_log_timeout_secs"})}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u5F53\u503C\u5927\u4E8E 0 \u65F6\uFF0C\u4F1A\u6253\u5370 pipeline \u6267\u884C\u5F15\u64CE\u7684\u4E00\u4E9B\u8BE6\u7EC6\u6267\u884C\u65E5\u5FD7\u3002\u4E3B\u8981\u7528\u4E8E\u6392\u67E5\u95EE\u9898\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5173\u95ED"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_enable_custom_date_time_format"})}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u662F\u5426\u5141\u8BB8\u81EA\u5B9A\u4E49\u65E5\u5FD7\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\uFF08\u81EA 2.1.7 \u7248\u672C\u652F\u6301\uFF09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_custom_date_time_format"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"%Y-%m-%d %H:%M:%S"})}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u9ED8\u8BA4\u7684\u65E5\u5FD7\u65E5\u671F\u81EA\u5B9A\u4E49\u683C\u5F0F\uFF0C\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"sys_log_enable_custom_date_time_format"})," \u4E3A ",(0,l.jsx)(n.code,{children:"true"})," \u65F6\u751F\u6548\uFF08\u81EA 2.1.7 \u7248\u672C\u652F\u6301\uFF09"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_custom_date_time_ms_format"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:",{:03d}"})}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u9ED8\u8BA4\u7684\u65E5\u5FD7\u65E5\u671F\u4E2D\u7684\u65F6\u95F4\u7CBE\u5EA6\uFF0C\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"sys_log_enable_custom_date_time_format"})," \u4E3A ",(0,l.jsx)(n.code,{children:"true"})," \u65F6\u751F\u6548\uFF08\u81EA 2.1.7 \u7248\u672C\u652F\u6301\uFF09"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5F00\u542F-debug-\u65E5\u5FD7",children:"\u5F00\u542F DEBUG \u65E5\u5FD7"}),"\n",(0,l.jsx)(n.h3,{id:"\u9759\u6001\u914D\u7F6E",children:"\u9759\u6001\u914D\u7F6E"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"be.conf"})," \u4E2D\u8BBE\u7F6E ",(0,l.jsx)(n.code,{children:"sys_log_verbose_modules"})," \u4E0E ",(0,l.jsx)(n.code,{children:"sys_log_verbose_level"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sys_log_verbose_modules"})," \u6307\u5B9A\u8981\u5F00\u542F\u7684\u6587\u4EF6\u540D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u901A\u914D\u7B26 ",(0,l.jsx)(n.code,{children:"*"})," \u6307\u5B9A\u3002\u6BD4\u5982\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"sys_log_verbose_modules=*\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u793A\u5F00\u542F\u6240\u6709 DEBUG \u65E5\u5FD7\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sys_log_verbose_level"})," \u8868\u793A DEBUG \u7684\u7EA7\u522B\u3002\u6570\u5B57\u8D8A\u5927\uFF0C\u5219 DEBUG \u65E5\u5FD7\u8D8A\u8BE6\u7EC6\u3002\u53D6\u503C\u8303\u56F4\u5728 1-10\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u52A8\u6001\u8C03\u6574",children:"\u52A8\u6001\u8C03\u6574"}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B RESTful API \u5373\u53EF\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://<be_host>:<webport>/api/glog/adjust?module=<module_name>&level=<level_number>"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u52A8\u6001\u8C03\u6574\u65B9\u5F0F\u540C\u6837\u652F\u6301\u901A\u914D\u7B26\uFF0C\u4F8B\u5982\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"module=*&level=10"})," \u5C06\u6253\u5F00\u6240\u6709 BE vlog\u3002\u4F46\u901A\u914D\u7B26\u4E0E\u5355\u72EC\u7684\u6A21\u5757\u540D\u4E92\u4E0D\u96B6\u5C5E\uFF0C\u4F8B\u5982\u5C06 ",(0,l.jsx)(n.code,{children:"moduleA"})," \u7684 vlog \u7EA7\u522B\u8C03\u6574\u4E3A ",(0,l.jsx)(n.code,{children:"10"}),"\uFF0C\u518D\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"module=*&level=-1"}),"\uFF0C\u5E76",(0,l.jsx)(n.strong,{children:"\u4E0D\u4F1A"}),"\u5173\u95ED ",(0,l.jsx)(n.code,{children:"moduleA"})," \u7684 vlog\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u52A8\u6001\u8C03\u6574\u7684\u914D\u7F6E\u4E0D\u4F1A\u88AB\u6301\u4E45\u5316\uFF0CBE \u91CD\u542F\u540E\u5C06\u4F1A\u5931\u6548\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53E6\u5916\u65E0\u8BBA\u901A\u8FC7\u4F55\u79CD\u65B9\u5F0F\uFF0C\u53EA\u8981\u6A21\u5757\u4E0D\u5B58\u5728\uFF0CGLOG \u5C06\u4F1A\u521B\u5EFA\u5BF9\u5E94\u65E5\u5FD7\u6A21\u5757\uFF08\u6CA1\u6709\u5B9E\u9645\u5F71\u54CD\uFF09\uFF0C\u5E76\u4E0D\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",children:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u5BB9\u5668\u73AF\u5883\uFF08\u5982 k8s\uFF09\u90E8\u7F72 FE \u8FDB\u7A0B\u3002\u6240\u6709\u65E5\u5FD7\u9700\u8981\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\u6D41\u800C\u4E0D\u662F\u6587\u4EF6\u8FDB\u884C\u8F93\u51FA\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u6B64\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"sh bin/start_be.sh --console"})," \u547D\u4EE4\u524D\u53F0\u542F\u52A8 BE \u8FDB\u7A0B\uFF0C\u5E76\u5C06\u6240\u6709\u65E5\u5FD7\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4E3A\u4E86\u5728\u540C\u4E00\u6807\u51C6\u8F93\u51FA\u6D41\u4E2D\u533A\u5206\u4E0D\u540C\u65E5\u5FD7\u7C7B\u578B\uFF0C\u4F1A\u5728\u6BCF\u6761\u65E5\u5FD7\u524D\u6DFB\u52A0\u4E0D\u540C\u7684\u524D\u7F00\u4EE5\u793A\u533A\u5206\u3002\u5982\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"RuntimeLogger W20240624 00:36:46.325274 1460943 olap_server.cpp:710] Have not get FE Master heartbeat yet\nRuntimeLogger I20240624 00:36:46.325999 1459644 olap_server.cpp:208] tablet checkpoint tasks producer thread started\nRuntimeLogger I20240624 00:36:46.326066 1460954 olap_server.cpp:448] begin to produce tablet meta checkpoint tasks.\nRuntimeLogger I20240624 00:36:46.326093 1459644 olap_server.cpp:213] tablet path check thread started\nRuntimeLogger I20240624 00:36:46.326190 1459644 olap_server.cpp:219] cache clean thread started\nRuntimeLogger I20240624 00:36:46.326336 1459644 olap_server.cpp:231] path gc threads started. number:1\nRuntimeLogger I20240624 00:36:46.326643 1460958 olap_server.cpp:424] try to start path gc thread!\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4E0D\u540C\u7684\u524D\u7F00\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"RuntimeLogger"}),"\uFF1A\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u4E2D\u7684\u65E5\u5FD7\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u540E\u7EED\u7248\u672C\u4F1A\u589E\u52A0\u5BF9 jni.log \u7684\u652F\u6301\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u9488\u5BF9\u5BB9\u5668\u73AF\u5883\u8FD8\u6709\u4E00\u4E2A\u989D\u5916\u914D\u7F6E\u53C2\u6570\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u914D\u7F6E\u9879"}),(0,l.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,l.jsx)(n.th,{children:"\u53EF\u9009\u9879"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"enable_file_logger"})}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:"true, false"}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u542F\u7528\u6587\u4EF6\u65E5\u5FD7\u3002\u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"true"}),"\u3002\u5F53\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"--console"})," \u547D\u4EE4\u542F\u52A8 BE \u8FDB\u7A0B\u65F6\uFF0C\u65E5\u5FD7\u4F1A\u540C\u65F6\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C\u4EE5\u53CA\u6B63\u5E38\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002\u5F53\u4E3A ",(0,l.jsx)(n.code,{children:"false"})," \u65F6\uFF0C\u65E5\u5FD7\u53EA\u4F1A\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C\u4E0D\u4F1A\u518D\u4EA7\u751F\u65E5\u5FD7\u6587\u4EF6"]})]})})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return c}});var s=d(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);