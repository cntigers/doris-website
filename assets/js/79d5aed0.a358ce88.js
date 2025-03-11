"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["247554"],{825538:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.7","title":"Release 2.0.7","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v2.0/release-2.0.7.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.7","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.7","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 2.0.7","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.8","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.8"},"next":{"title":"Release 2.0.6","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.6"}}'),r=i("785893"),t=i("250065");let l={title:"Release 2.0.7",language:"en"},a=void 0,o={},d=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"3 Improvement and optimizations",id:"3-improvement-and-optimizations",level:2},{value:"4 Credits",id:"4-credits",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Thanks to our community users and developers, about 80 improvements and bug fixes have been made in Doris 2.0.7 version."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Quick Download:"})," ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub\uFF1A"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(n.h2,{id:"1-behavior-change",children:"1 Behavior change"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"round"})," function defaults to rounding normally as MySQL, eg. round(5/2) return 3 instead of 2."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/31583",children:"https://github.com/apache/doris/pull/31583"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"round"})," datetime with scale from string literal as MySQL, eg. round '2023-10-12 14:31:49.666' to '2023-10-12 14:31:50' ."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/27965",children:"https://github.com/apache/doris/pull/27965"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-new-features",children:"2 New features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Support make miss slot as null alias when converting outer join to anti join to speed up query"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/31854",children:"https://github.com/apache/doris/pull/31854"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable proxy protocol to support IP transparency for Nginx and HAProxy."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32338",children:"https://github.com/apache/doris/pull/32338"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-improvement-and-optimizations",children:"3 Improvement and optimizations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add DEFAULT_ENCRYPTION column in ",(0,r.jsx)(n.code,{children:"information_schema"})," table and add ",(0,r.jsx)(n.code,{children:"processlist"})," table for better compatibility for BI tools"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Automatically test connectivity by default when creating a JDBC Catalog."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enhance auto resume to keep routine load stable"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use lowercase by default for Chinese tokenizer in inverted index"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add error msg if exceeded maximum default value in repeat function"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Skip hidden file and dir in Hive table"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reduce file meta cache size and disable cache for some cases to avoid OOM"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reduce jvm heap memory consumed by profiles of BrokerLoadJob"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Remove sort which is under table sink to speed up query like ",(0,r.jsx)(n.code,{children:"INSERT INTO t1 SELECT * FROM t2 ORDER BY k"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.6...2.0.7",children:"github"})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"4-credits",children:"4 Credits"}),"\n",(0,r.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,r.jsx)(n.p,{children:"924060929,airborne12,amorynan,ByteYue,dataroaring,deardeng,feiniaofeiafei,felixwluo,freemandealer,gavinchou,hello-stephen,HHoflittlefish777,jacktengg,jackwener,jeffreys-cat,Jibing-Li,KassieZ,LiBinfeng-01,luwei16,morningman,mrhhsg,Mryange,nextdreamblue,platoneko,qidaye,rohitrs1983,seawinde,shuke987,starocean999,SWJTU-ZhangLei,w41ter,wsjz,wuwenchi,xiaokang,XieJiann,XuJianxu,yujun777,Yulei-Yang,zhangstar333,zhiqiang-hhhh,zy-kkk,zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);