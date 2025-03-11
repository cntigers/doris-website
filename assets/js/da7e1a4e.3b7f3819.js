"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["228470"],{173557:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.13","title":"Release 2.0.13","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v2.0/release-2.0.13.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.13","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.13","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 2.0.13","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.14","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.14"},"next":{"title":"Release 2.0.12","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.12"}}'),r=i("785893"),t=i("250065");let a={title:"Release 2.0.13",language:"en"},l=void 0,o={},h=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Credits",id:"credits",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Quick Download"})}),"\n",(0,r.jsx)(n.h2,{id:"behavior-changes",children:"Behavior changes"}),"\n",(0,r.jsxs)(n.p,{children:["SQL input is treated as multiple statements only when the ",(0,r.jsx)(n.code,{children:"CLIENT_MULTI_STATEMENTS"})," setting is enabled on the client side, enhancing compatibility with MySQL. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36759",children:"#36759"})]}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A new BE configuration ",(0,r.jsx)(n.code,{children:"allow_zero_date"})," has been added, allowing dates with all zeros. When set to ",(0,r.jsx)(n.code,{children:"false"}),", ",(0,r.jsx)(n.code,{children:"0000-00-00"})," is parsed as ",(0,r.jsx)(n.code,{children:"NULL"}),", and when set to ",(0,r.jsx)(n.code,{children:"true"}),", it is parsed as ",(0,r.jsx)(n.code,{children:"0000-01-01"}),". The default value is ",(0,r.jsx)(n.code,{children:"false"})," to maintain consistency with previous behavior. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/34961",children:"#34961"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LogicalWindow"})," and ",(0,r.jsx)(n.code,{children:"LogicalPartitionTopN"})," support multi-field predicate pushdown to improve performance. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36828",children:"#36828"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ES Catalog now maps ES ",(0,r.jsx)(n.code,{children:"nested"})," or ",(0,r.jsx)(n.code,{children:"object"})," types to Doris ",(0,r.jsx)(n.code,{children:"JSON"})," types. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/37101",children:"#37101"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Queries with ",(0,r.jsx)(n.code,{children:"LIMIT"})," end reading data earlier to reduce resource consumption and improve performance. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36535",children:"#36535"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Special JSON data with empty keys is now supported. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36762",children:"#36762"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Stability and usability of routine load have been improved, including load balancing, automatic recovery, exception handling, and more user-friendly error messages. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36450",children:"#36450"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35376",children:"#35376"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35266",children:"#35266"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33372",children:" #33372"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32282",children:"#32282"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32046",children:"#32046"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32021",children:"#32021"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/31846",children:"#31846"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/31273",children:"#31273"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["BE load balancing selection of hard disk strategy and speed optimization. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36826",children:"#36826"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36795",children:"#36795"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36509",children:"#36509"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Stability and usability of the JDBC catalog have been improved, including encryption, thread pool connection count configuration, and more user-friendly error messages. ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36940",children:"#36940"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/36720",children:"#36720"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/30880",children:"#30880"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35692",children:"#35692"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can access the full list through the GitHub ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.12...2.0.13",children:"link"})," , with the key features and improvements highlighted below."]}),"\n",(0,r.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(n.p,{children:"Thanks to all who contributed to this release:"}),"\n",(0,r.jsx)(n.p,{children:"@Gabriel39, @Jibing-Li, @Johnnyssc, @Lchangliang, @LiBinfeng-01, @SWJTU-ZhangLei, @Thearas, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @bobhan1, @cambyzju, @csun5285, @dataroaring, @deardeng, @eldenmoon, @englefly, @feiniaofeiafei, @hello-stephen, @jacktengg, @kaijchen, @liutang123, @luwei16, @morningman, @morrySnow, @mrhhsg, @mymeiyi, @platoneko, @qidaye, @sollhui, @starocean999, @w41ter, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr"})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var s=i(667294);let r={},t=s.createContext(r);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);