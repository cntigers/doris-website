"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["731240"],{698387:function(e,r,i){i.r(r),i.d(r,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.2","title":"Release 1.1.2","description":"\x3c!--","source":"@site/docs/releasenotes/v1.1/release-1.1.2.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.2","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.2","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 1.1.2","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.1.3","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.3"},"next":{"title":"Release 1.1.1","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.1"}}'),a=i("785893"),n=i("250065");let t={title:"Release 1.1.2",language:"en"},l="Features",o={},c=[{value:"New MemTracker",id:"new-memtracker",level:3},{value:"Add API for showing current queries and kill query",id:"add-api-for-showing-current-queries-and-kill-query",level:3},{value:"Support read/write emoji of UTF16 via ODBC Table",id:"support-readwrite-emoji-of-utf16-via-odbc-table",level:3},{value:"Data Lake related improvements",id:"data-lake-related-improvements",level:3},{value:"Add support for string and text type in Spark Load",id:"add-support-for-string-and-text-type-in-spark-load",level:3},{value:"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. #11392",id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392",level:3},{value:"Improve like or regex performance",id:"improve-like-or-regex-performance",level:3},{value:"Disable tcmalloc&#39;s aggressive_memory_decommit",id:"disable-tcmallocs-aggressive_memory_decommit",level:3},{value:"Some issues about FE that will cause FE failure or data corrupt.",id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt",level:3},{value:"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios.",id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios",level:3},{value:"A fatal issue in vectorized storage engine which will cause wrong result. <strong>(Serious)</strong>",id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious",level:3},{value:"Lots of planner related issues that will cause BE core or in abnormal state.",id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state",level:3}];function d(e){let r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"In this release, Doris Team has fixed more than 170 issues or performance improvement since 1.1.1. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."}),"\n",(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"features",children:"Features"})}),"\n",(0,a.jsx)(r.h3,{id:"new-memtracker",children:"New MemTracker"}),"\n",(0,a.jsx)(r.p,{children:"Introduced new MemTracker for both vectorized engine and non-vectorized engine which is more accurate."}),"\n",(0,a.jsx)(r.h3,{id:"add-api-for-showing-current-queries-and-kill-query",children:"Add API for showing current queries and kill query"}),"\n",(0,a.jsx)(r.h3,{id:"support-readwrite-emoji-of-utf16-via-odbc-table",children:"Support read/write emoji of UTF16 via ODBC Table"}),"\n",(0,a.jsx)(r.h1,{id:"improvements",children:"Improvements"}),"\n",(0,a.jsx)(r.h3,{id:"data-lake-related-improvements",children:"Data Lake related improvements"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Improved HDFS ORC File scan performance about 300%. ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11501",children:"#11501"})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Support HDFS HA mode when query Iceberg table."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Support query Hive data created by ",(0,a.jsx)(r.a,{href:"https://tez.apache.org/",children:"Apache Tez"})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Add Ali OSS as Hive external support."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"add-support-for-string-and-text-type-in-spark-load",children:"Add support for string and text type in Spark Load"}),"\n",(0,a.jsxs)(r.h3,{id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392",children:["Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11392",children:"#11392"})]}),"\n",(0,a.jsx)(r.h3,{id:"improve-like-or-regex-performance",children:"Improve like or regex performance"}),"\n",(0,a.jsx)(r.h3,{id:"disable-tcmallocs-aggressive_memory_decommit",children:"Disable tcmalloc's aggressive_memory_decommit"}),"\n",(0,a.jsx)(r.p,{children:"It will have 40% performance gains in load or query."}),"\n",(0,a.jsxs)(r.p,{children:["Currently it is a config, you can change it by set config ",(0,a.jsx)(r.code,{children:"tc_enable_aggressive_memory_decommit"}),"."]}),"\n",(0,a.jsx)(r.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,a.jsx)(r.h3,{id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt",children:"Some issues about FE that will cause FE failure or data corrupt."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Add reserved disk config to avoid too many reserved BDB-JE files.",(0,a.jsx)(r.strong,{children:"(Serious)"}),"   In an HA environment, BDB JE will retains as many reserved files. The BDB-je log doesn't delete until approaching a disk limit."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Fix fatal bug in BDB-JE which will cause FE replica could not start correctly or data corrupted.",(0,a.jsx)(r.strong,{children:" (Serious)"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios",children:"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12459",children:"#12459"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12458",children:"#12458"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12392",children:"#12392"})]}),"\n",(0,a.jsxs)(r.h3,{id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious",children:["A fatal issue in vectorized storage engine which will cause wrong result. ",(0,a.jsx)(r.strong,{children:"(Serious)"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11754",children:"#11754"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11694",children:"#11694"})]}),"\n",(0,a.jsx)(r.h3,{id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state",children:"Lots of planner related issues that will cause BE core or in abnormal state."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12080",children:"#12080"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12075",children:"#12075"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12040",children:"#12040"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12003",children:"#12003"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12007",children:"#12007"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11971",children:"#11971"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11933",children:"#11933"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11861",children:"#11861"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11859",children:"#11859"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11855",children:"#11855"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11837",children:"#11837"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11834",children:"#11834"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11821",children:"#11821"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11782",children:"#11782"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11723",children:"#11723"})," ",(0,a.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11569",children:"#11569"})]})]})}function h(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,r,i){i.d(r,{Z:function(){return l},a:function(){return t}});var s=i(667294);let a={},n=s.createContext(a);function t(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);