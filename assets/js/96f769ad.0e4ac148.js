"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["863127"],{275598:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.14","title":"Release 2.0.14","description":"\x3c!--","source":"@site/docs/releasenotes/v2.0/release-2.0.14.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.14","permalink":"/docs/dev/releasenotes/v2.0/release-2.0.14","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 2.0.14","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.15","permalink":"/docs/dev/releasenotes/v2.0/release-2.0.15"},"next":{"title":"Release 2.0.13","permalink":"/docs/dev/releasenotes/v2.0/release-2.0.13"}}'),s=i("785893"),r=i("250065");let l={title:"Release 2.0.14",language:"en"},a=void 0,o={},c=[{value:"1 New features",id:"1-new-features",level:2},{value:"2 Improvements",id:"2-improvements",level:2},{value:"Credits",id:"credits",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version"}),"\n",(0,s.jsx)(n.h2,{id:"1-new-features",children:"1 New features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Adds a REST interface to retrieve the most recent query profile: ",(0,s.jsx)(n.code,{children:"curl http://user:password@127.0.0.1:8030/api/profile/text"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38268",children:"#38268"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-improvements",children:"2 Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optimizes the primary key point query performance for MOW tables with sequence columns ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38287",children:"#38287"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enhances the performance of inverted index queries with many conditions  ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35346",children:"#35346"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Automatically enables the   ",(0,s.jsx)(n.code,{children:"support_phrase"})," option when creating a tokenized inverted index to accelerate  ",(0,s.jsx)(n.code,{children:"match_phrase"})," phrase queries ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37949",children:"#37949"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supports simplified SQL hints, for example: ",(0,s.jsx)(n.code,{children:"SELECT /*+ query_timeout(3000) */ * FROM t;"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37720",children:"#37720"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Automatically retries reading from object storage when encountering a   ",(0,s.jsx)(n.code,{children:"429"})," error to improve stability ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35396",children:"#35396"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["LEFT SEMI / ANTI JOIN terminates subsequent matching execution upon matching a qualifying data row to enhance performance. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/34703",children:"#34703"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Prevents coredump when returning illegal data to MySQL results. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/28069",children:"#28069"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Unifies the output of type names in lowercase to maintain compatibility with MySQL and be more friendly to BI tools. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/38521",children:"#38521"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can access the full list through the GitHub ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.13...2.0.14",children:"link"})," , with the key features and improvements highlighted below."]}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,s.jsx)(n.p,{children:"@ByteYue, @CalvinKirs, @GoGoWen, @HappenLee, @Jibing-Li, @Lchangliang, @LiBinfeng-01, @Mryange, @XieJiann, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @biohazard4321, @cambyzju, @csun5285, @eldenmoon, @englefly, @freemandealer, @hello-stephen, @hubgeter, @kaijchen, @liaoxin01, @luwei16, @morningman, @morrySnow, @mymeiyi, @qidaye, @sollhui, @starocean999, @w41ter, @wuwenchi, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr, @zhangstar333, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var t=i(667294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);