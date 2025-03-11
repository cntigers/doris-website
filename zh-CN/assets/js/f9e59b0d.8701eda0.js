"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["769469"],{569610:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.12","title":"Release 2.0.12","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/v2.0/release-2.0.12.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.12","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.12","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.12","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.0.13","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.13"},"next":{"title":"Release 2.0.11","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.11"}}'),r=s("785893"),l=s("250065");let t={title:"Release 2.0.12",language:"zh-CN"},a=void 0,o={},c=[{value:"\u884C\u4E3A\u53D8\u66F4",id:"\u884C\u4E3A\u53D8\u66F4",level:2},{value:"\u6539\u8FDB\u4F18\u5316",id:"\u6539\u8FDB\u4F18\u5316",level:2},{value:"\u81F4\u8C22",id:"\u81F4\u8C22",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C",(0,r.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 2.0.12"})," \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 6 \u6708 27 \u65E5\u6B63\u5F0F\u4E0E\u5927\u5BB6\u89C1\u9762\uFF0C\u8BE5\u7248\u672C\u63D0\u4EA4\u4E86 99 \u4E2A\u6539\u8FDB\u9879\u4EE5\u53CA\u95EE\u9898\u4FEE\u590D\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u884C\u4E3A\u53D8\u66F4",children:"\u884C\u4E3A\u53D8\u66F4"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4E0D\u518D\u5C06\u5EFA\u8868\u7684\u9ED8\u8BA4\u6CE8\u91CA\u8BBE\u7F6E\u4E3A\u8868\u7684\u7C7B\u578B\uFF0C\u800C\u662F\u6539\u6210\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u6BD4\u5982 COMMENT 'OLAP' \u53D8\u6210 COMMENT ''\uFF0C\u8FD9\u6837\u5BF9\u4E8E\u4F9D\u8D56\u6CE8\u91CA\u7684 BI \u8F6F\u4EF6\u66F4\u52A0\u53CB\u597D\u3002 ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35855",children:"#35855"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5C06 ",(0,r.jsx)(n.code,{children:"@@autocommit"})," \u53D8\u91CF\u7684\u7C7B\u578B\u4ECE ",(0,r.jsx)(n.code,{children:"BOOLEAN"})," \u6539\u6210 ",(0,r.jsx)(n.code,{children:"BIGINT"}),"\uFF0C\u4EE5\u514D\u6709\u4E9B MySQL \u5BA2\u6237\u7AEF\uFF08\u6BD4\u5982.NET MySQL.Data\uFF09\u62A5\u9519\u3002 ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33282",children:"#33282"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6539\u8FDB\u4F18\u5316",children:"\u6539\u8FDB\u4F18\u5316"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664 ",(0,r.jsx)(n.code,{children:"disable_nested_complex_type"})," \u53C2\u6570\uFF0C\u9ED8\u8BA4\u5141\u8BB8\u521B\u5EFA\u5D4C\u5957\u7684 ",(0,r.jsx)(n.code,{children:"ARRAY"})," ",(0,r.jsx)(n.code,{children:"MAP"})," ",(0,r.jsx)(n.code,{children:"STRUCT"})," \u7C7B\u578B\u3002",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36255",children:"#36255"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["HMS Catalog \u652F\u6301 ",(0,r.jsx)(n.code,{children:"SHOW CREATE DATABASE"})," \u547D\u4EE4\u3002",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/28145",children:" #28145"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 Query Profile \u4E2D\u589E\u52A0\u66F4\u591A\u5012\u6392\u7D22\u5F15\u7684\u6307\u6807\u3002",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36545",children:"#36545"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8DE8\u96C6\u7FA4\u6570\u636E\u590D\u5236\uFF08CCR\uFF09\u652F\u6301\u5012\u6392\u7D22\u5F15 ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/31743",children:"#31743"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,r.jsx)(n.p,{children:"@amorynan\u3001@BiteTheDDDDt\u3001@cambyzju\u3001@caoliang-web\u3001@dataroaring\u3001@eldenmoon\u3001@feiniaofeiafei\u3001@felixwluo\u3001@gavinchou\u3001@HappenLee\u3001@hello-stephen\u3001@jacktengg\u3001@Jibing-Li\u3001@Johnnyssc\u3001@liaoxin01\u3001@LiBinfeng-01\u3001@luwei16\u3001@mongo360\u3001@morningman\u3001@morrySnow\u3001@mrhhsg\u3001@Mryange\u3001@mymeiyi\u3001@qidaye\u3001@qzsee\u3001@starocean999\u3001@w41ter\u3001@wangbo\u3001@wsjz\u3001@wuwenchi\u3001@xiaokang\u3001@XuPengfei-1020\u3001@xy720\u3001@yongjinhou\u3001@yujun777\u3001@Yukang-Lian\u3001@Yulei-Yang\u3001@zclllyybb\u3001@zddr\u3001@zhannngchen\u3001@zhiqiang-hhhh\u3001@zy-kkk\u3001@zzzxl1993"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(667294);let r={},l=i.createContext(r);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);