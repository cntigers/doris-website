"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["70521"],{391018:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.15","title":"Release 2.0.15","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/releasenotes/v2.0/release-2.0.15.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.15","permalink":"/docs/releasenotes/v2.0/release-2.0.15","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.15","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.1.0","permalink":"/docs/releasenotes/v2.1/release-2.1.0"},"next":{"title":"Release 2.0.14","permalink":"/docs/releasenotes/v2.0/release-2.0.14"}}'),t=s("785893"),r=s("250065");let a={title:"Release 2.0.15",language:"en"},l=void 0,o={},c=[{value:"1 Behavior Change",id:"1-behavior-change",level:2},{value:"2 New Features",id:"2-new-features",level:2},{value:"3 Improvement and Optimizations",id:"3-improvement-and-optimizations",level:2},{value:"Stability",id:"stability",level:3},{value:"Performance",id:"performance",level:3},{value:"Optimizer and Statistics",id:"optimizer-and-statistics",level:3},{value:"Multi Catalog and Others",id:"multi-catalog-and-others",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Quick Download: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/download",children:"https://doris.apache.org/download"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GitHub: ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/releases/tag/2.0.15",children:"https://github.com/apache/doris/releases/tag/2.0.15"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-behavior-change",children:"1 Behavior Change"}),"\n",(0,t.jsx)(n.p,{children:"NA"}),"\n",(0,t.jsx)(n.h2,{id:"2-new-features",children:"2 New Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restore now supports deleting redundant tablets and partition options. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39028",children:"#39028"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support JSON function ",(0,t.jsx)(n.code,{children:"json_search"}),".",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/40948",children:"#40948"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-improvement-and-optimizations",children:"3 Improvement and Optimizations"}),"\n",(0,t.jsx)(n.h3,{id:"stability",children:"Stability"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a FE configuration ",(0,t.jsx)(n.code,{children:"abort_txn_after_lost_heartbeat_time_second"})," for transaction abort time. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/28662",children:"#28662"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Abort transactions after a BE loses heartbeat for over 1 minute instead of 5 seconds, to avoid overly sensitive transaction aborts. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/22781",children:"#22781"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Delay scheduling EOF tasks of routine load to avoid an excessive number of small transactions. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39975",children:"#39975"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Prefer querying from online disk services to be more robust. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39467",children:"#39467"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Skip checking newly inserted rows in non-strict mode partial updates if the row's delete sign is marked. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/40322",children:"#40322"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To prevent FE OOM, limit the number of tablets in backup tasks, with a default value of 300,000. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39987",children:"#39987"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optimize slow column updates caused by concurrent column updates and compactions. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38487",children:"#38487"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When a NullLiteral exists in a filter condition, it can now be folded into False and further converted to an EmptySet to reduce unnecessary data scanning and computation. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38135",children:"#38135"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Improve performance of ",(0,t.jsx)(n.code,{children:"ORDER BY"})," permutation. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38985",children:"#38985"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Improve the performance of string processing in inverted indexes. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37395",children:"#37395"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optimizer-and-statistics",children:"Optimizer and Statistics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added support for statements beginning with a semicolon. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39399",children:"#39399"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Polish aggregate function signature matching. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39352",children:"#39352"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Drop column statistics and trigger auto analysis after schema change. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39101",children:"#39101"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support dropping cached stats using ",(0,t.jsx)(n.code,{children:"DROP CACHED STATS table_name"}),". ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39367",children:"#39367"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"multi-catalog-and-others",children:"Multi Catalog and Others"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optimize JDBC Catalog refresh to reduce the frequency of client creation. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/40261",children:"#40261"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fix thread leaks in JDBC Catalog under certain conditions. ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/39423",children:"#39423"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["ARRAY MAP STRUCT types now support ",(0,t.jsx)(n.code,{children:"REPLACE_IF_NOT_NULL"}),". ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38304",children:"#38304"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Retry delete jobs for failures that are not ",(0,t.jsx)(n.code,{children:"DELETE_INVALID_XXX"}),". ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37834",children:"#37834"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Credits"})}),"\n",(0,t.jsx)(n.p,{children:"@924060929, @BePPPower, @BiteTheDDDDt, @CalvinKirs, @GoGoWen, @HappenLee, @Jibing-Li, @Johnnyssc, @LiBinfeng-01, @Mryange, @SWJTU-ZhangLei, @TangSiyang2001, @Toms1999, @Vallishp, @Yukang-Lian, @airborne12, @amorynan, @bobhan1, @cambyzju, @csun5285, @dataroaring, @eldenmoon, @englefly, @feiniaofeiafei, @hello-stephen, @htyoung, @hubgeter, @justfortaste, @liaoxin01, @liugddx, @liutang123, @luwei16, @mongo360, @morrySnow, @qidaye, @smallx, @sollhui, @starocean999, @w41ter, @xiaokang, @xzj7019, @yujun777, @zclllyybb, @zddr, @zhangstar333, @zhannngchen, @zy-kkk, @zzzxl1993"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);