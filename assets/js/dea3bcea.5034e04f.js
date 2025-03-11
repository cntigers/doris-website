"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["29053"],{963811:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.5","title":"Release 2.0.5","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v2.0/release-2.0.5.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.5","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.5","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 2.0.5","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.6","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.6"},"next":{"title":"Release 2.0.4","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.4"}}'),s=i("785893"),a=i("250065");let l={title:"Release 2.0.5",language:"en"},r=void 0,o={},c=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvement and optimizations",id:"improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Thanks to our community users and developers, about 217 improvements and bug fixes have been made in Doris 2.0.5 version."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Quick Download\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GitHub\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,s.jsx)(n.h2,{id:"behavior-change",children:"Behavior change"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change char function behaviour: ",(0,s.jsx)(n.code,{children:"select char(0) = '\\0'"})," return true as MySQL\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/30034",children:"https://github.com/apache/doris/pull/30034"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Allow exporting empty data\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/30703",children:"https://github.com/apache/doris/pull/30703"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eliminate left outer join with ",(0,s.jsx)(n.code,{children:"is null"})," condition"]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"show-tablets-belong"})," stmt for analyzing a batch of tablet-ids"]}),"\n",(0,s.jsxs)(n.li,{children:["InferPredicates support In, such as ",(0,s.jsx)(n.code,{children:"a = b & a in [1, 2] -> b in [1, 2]"})]}),"\n",(0,s.jsx)(n.li,{children:"Optimize plan when column stats are unavailable"}),"\n",(0,s.jsx)(n.li,{children:"Optimize plan using rollup column stats"}),"\n",(0,s.jsx)(n.li,{children:"Support analyze materialized view"}),"\n",(0,s.jsx)(n.li,{children:"Support ShowProcessStmt Show all FE connection"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"improvement-and-optimizations",children:"Improvement and optimizations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optimize query plan when column stats are unaviable"}),"\n",(0,s.jsx)(n.li,{children:"Optimize query plan using rollup column stats"}),"\n",(0,s.jsx)(n.li,{children:"Stop analyze quickly after user close auto analyze"}),"\n",(0,s.jsx)(n.li,{children:"Catch load column stats exception, avoid print too much stack info to fe.out"}),"\n",(0,s.jsx)(n.li,{children:"Select materialized view by specify the view name in SQL"}),"\n",(0,s.jsx)(n.li,{children:"Change auto analyze max table width default value to 100"}),"\n",(0,s.jsx)(n.li,{children:"Escape characters for columns in recovery predicate pushdown in JDBC Catalog"}),"\n",(0,s.jsxs)(n.li,{children:["Fix JDBC MYSQL Catalog ",(0,s.jsx)(n.code,{children:"to_date"})," fun pushdown"]}),"\n",(0,s.jsx)(n.li,{children:"Optimize the close logic of JDBC client"}),"\n",(0,s.jsx)(n.li,{children:"Optimize JDBC connection pool parameter settings"}),"\n",(0,s.jsx)(n.li,{children:"Obtain hudi partition information through HMS's API"}),"\n",(0,s.jsx)(n.li,{children:"Optimize routine load job error msg and memory"}),"\n",(0,s.jsx)(n.li,{children:"Skip all backup/restore jobs if max allowd option is set to 0"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.4-rc06...2.0.5-rc02",children:"github"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,s.jsx)(n.p,{children:"airborne12, alexxing662, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, ByteYue, caiconghui, cambyzju, catpineapple, dataroaring, eldenmoon, Emor-nj, englefly, felixwluo, GoGoWen, HappenLee, hello-stephen, HHoflittlefish777, HowardQin, JackDrogon, jacktengg, jackwener, Jibing-Li, KassieZ, LemonLiTree, liaoxin01, liugddx, LuGuangming, morningman, morrySnow, mrhhsg, Mryange, mymeiyi, nextdreamblue, qidaye, ryanzryu, seawinde,starocean999, TangSiyang2001, vinlee19, w41ter, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xingyingone, xy720,xzj7019, yujun777, zclllyybb, zhangstar333, zhannngchen, zhiqiang-hhhh, zxealous, zy-kkk, zzzxl1993"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return l}});var t=i(667294);let s={},a=t.createContext(s);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);