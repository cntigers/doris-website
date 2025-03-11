"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["380712"],{423988:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.10","title":"Release 2.0.10","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v2.0/release-2.0.10.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.10","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.10","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 2.0.10","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.11","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.11"},"next":{"title":"Release 2.0.9","permalink":"/docs/2.0/releasenotes/v2.0/release-2.0.9"}}'),i=s("785893"),r=s("250065");let o={title:"Release 2.0.10",language:"en"},a=void 0,l={},d=[{value:"Improvement and Optimizations",id:"improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Quick Download:"})," ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GitHub\uFF1A"})," ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,i.jsx)(n.h2,{id:"improvement-and-optimizations",children:"Improvement and Optimizations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This enhancement introduces the ",(0,i.jsx)(n.code,{children:"read_only"})," and ",(0,i.jsx)(n.code,{children:"super_read_only"})," variables to the database system, ensuring compatibility with MySQL's read-only modes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When the check status is not IO_ERROR, the disk path should not be added to the broken list. This ensures that only disks with actual I/O errors are marked as broken."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When performing a Create Table As Select (CTAS) operation from an external table, convert the ",(0,i.jsx)(n.code,{children:"VARCHAR"})," column to ",(0,i.jsx)(n.code,{children:"STRING"})," type."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Support mapping Paimon column type "ROW" to Doris type "STRUCT"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose disk tolerate with little skew when creating tablet"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Write editlog to ",(0,i.jsx)(n.code,{children:"set replica drop"})," to avoid confusing status on follower FE"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make the schema change memory space adaptive to avoid memory over limit"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Inverted index 'unicode' tokenizer supports configuration to exclude stop words"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.9...2.0.10",children:"GitHub"})," ."]}),"\n",(0,i.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,i.jsx)(n.p,{children:"Thanks to all who contributed to this release:"}),"\n",(0,i.jsx)(n.p,{children:"@airborne12, @BePPPower, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @deardeng, @DongLiang-0, @eldenmoon, @felixwluo, @HappenLee, @hubgeter, @jackwener, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @luennng, @morningman, @morrySnow, @Mryange, @nextdreamblue, @qidaye, @starocean999, @suxiaogang223, @SWJTU-ZhangLei, @w41ter, @xiaokang, @xy720, @yujun777, @Yukang-Lian, @zhangstar333, @zxealous, @zy-kkk, @zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);