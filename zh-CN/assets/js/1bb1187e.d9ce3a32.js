"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["368762"],{499277:function(n,e,t){t.r(e),t.d(e,{default:()=>p,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>u,contentTitle:()=>a});var o=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","title":"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv"},"next":{"title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"}}'),i=t("785893"),c=t("250065");let r={title:"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join",language:"zh-CN"},a=void 0,l={},u=[];function s(n){let e={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",p:"p",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Colocate Group \u662F\u4E00\u79CD\u9AD8\u6548\u7684 Join \u65B9\u5F0F\uFF0C\u4F7F\u5F97\u6267\u884C\u5F15\u64CE\u80FD\u6709\u6548\u5730\u89C4\u907F Join \u64CD\u4F5C\u4E2D\u6570\u636E\u7684 shuffle \u5F00\u9500\u3002\u76F8\u5173\u539F\u7406\u4ECB\u7ECD\u548C\u6848\u4F8B\u53C2\u8003\u8BE6\u89C1 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/query-acceleration/colocation-join",children:"Colocation Join"}),"\u3002"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u5373\u4F7F\u5DF2\u7ECF\u6210\u529F\u5EFA\u7ACB\u4E86 Colocate Group\uFF0C\u6267\u884C\u8BA1\u5212\uFF08plan\uFF09\u4ECD\u7136\u53EF\u80FD\u4F1A\u663E\u793A\u4E3A ",(0,i.jsx)(e.code,{children:"Shuffle Join"})," \u6216 ",(0,i.jsx)(e.code,{children:"Bucket Shuffle Join"}),"\u3002\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u53D1\u751F\u5728 Doris \u6B63\u5728\u8FDB\u884C\u6570\u636E\u6574\u7406\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6BD4\u5982\uFF0C\u5B83\u53EF\u80FD\u5728 BE \u95F4\u8FC1\u79FB tablet\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5728\u591A\u4E2A BE \u4E4B\u95F4\u7684\u5206\u5E03\u8FBE\u5230\u66F4\u52A0\u5747\u8861\u7684\u72B6\u6001\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u901A\u8FC7\u547D\u4EE4",(0,i.jsx)(e.code,{children:'show proc "/colocation_group"'}),";\u53EF\u4EE5\u67E5\u770B Colocate Group \u72B6\u6001\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A",(0,i.jsx)(e.code,{children:"IsStable"})," \u51FA\u73B0 false\uFF0C\u8868\u793A\u6709 Colocate Group \u4E0D\u53EF\u7528\u7684\u60C5\u51B5\u3002"]}),"\n"]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join",src:t(824928).Z+"",width:"2560",height:"1068"})})]})}function p(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}},824928:function(n,e,t){t.d(e,{Z:function(){return o}});let o=t.p+"assets/images/use-colocate-group-cde9b3a3c4a0bf5eef5fcf46b51c9565.jpg"},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var o=t(667294);let i={},c=o.createContext(i);function r(n){let e=o.useContext(c);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);