"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["481117"],{494341:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>d,assets:()=>t,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"developer-guide/java-format-code","title":"Java \u4EE3\u7801\u683C\u5F0F\u5316","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/java-format-code.md","sourceDirName":"developer-guide","slug":"/developer-guide/java-format-code","permalink":"/zh-CN/community/developer-guide/java-format-code","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Java \u4EE3\u7801\u683C\u5F0F\u5316","language":"zh-CN"},"sidebar":"community","previous":{"title":"Doris FE Mac \u5F00\u53D1\u73AF\u5883\u642D\u5EFA - IntelliJ IDEA","permalink":"/zh-CN/community/developer-guide/mac-dev/fe-idea-dev"},"next":{"title":"C++ \u4EE3\u7801\u683C\u5F0F\u5316","permalink":"/zh-CN/community/developer-guide/cpp-format-code"}}'),c=r("785893"),i=r("250065");let s={title:"Java \u4EE3\u7801\u683C\u5F0F\u5316",language:"zh-CN"},l="Java \u4EE3\u7801\u683C\u5F0F\u5316",t={},o=[{value:"Import Order",id:"import-order",level:2},{value:"\u7F16\u8BD1\u65F6\u68C0\u67E5",id:"\u7F16\u8BD1\u65F6\u68C0\u67E5",level:2},{value:"Checkstyle \u63D2\u4EF6",id:"checkstyle-\u63D2\u4EF6",level:2},{value:"IDEA",id:"idea",level:3},{value:"VS Code",id:"vs-code",level:3},{value:"IDEA",id:"idea-1",level:2},{value:"\u81EA\u52A8\u683C\u5F0F\u5316",id:"\u81EA\u52A8\u683C\u5F0F\u5316",level:3},{value:"Rearrange Code",id:"rearrange-code",level:3},{value:"Remove unused header",id:"remove-unused-header",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"java-\u4EE3\u7801\u683C\u5F0F\u5316",children:"Java \u4EE3\u7801\u683C\u5F0F\u5316"})}),"\n",(0,c.jsx)(n.p,{children:"Doris \u4E2D Java \u90E8\u5206\u4EE3\u7801\u7684\u683C\u5F0F\u5316\u5DE5\u4F5C\u901A\u5E38\u6709 IDE \u6765\u81EA\u52A8\u5B8C\u6210\u3002\u8FD9\u91CC\u4EC5\u5217\u4E3E\u901A\u7528\u683C\u5F0F\u89C4\u5219\uFF0C\u5F00\u53D1\u8FD9\u9700\u8981\u6839\u636E\u683C\u5F0F\u89C4\u5219\uFF0C\u5728\u4E0D\u540C IDE \u4E2D\u8BBE\u7F6E\u5BF9\u5E94\u7684\u4EE3\u7801\u98CE\u683C\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"import-order",children:"Import Order"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7981\u6B62\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"import *"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u7981\u6B62\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"import static"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7F16\u8BD1\u65F6\u68C0\u67E5",children:"\u7F16\u8BD1\u65F6\u68C0\u67E5"}),"\n",(0,c.jsxs)(n.p,{children:["\u73B0\u5728\uFF0C\u5728\u4F7F\u7528",(0,c.jsx)(n.code,{children:"maven"}),"\u8FDB\u884C\u7F16\u8BD1\u65F6\uFF0C\u4F1A\u9ED8\u8BA4\u8FDB\u884C",(0,c.jsx)(n.code,{children:"CheckStyle"}),"\u68C0\u67E5\u3002\u6B64\u68C0\u67E5\u4F1A\u7565\u5FAE\u964D\u4F4E\u7F16\u8BD1\u901F\u5EA6\u3002\u5982\u679C\u60F3\u8DF3\u8FC7\u6B64\u68C0\u67E5\uFF0C\u8BF7\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"mvn clean install -DskipTests -Dcheckstyle.skip\n"})}),"\n",(0,c.jsx)(n.h2,{id:"checkstyle-\u63D2\u4EF6",children:"Checkstyle \u63D2\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:["\u73B0\u5728\u7684 ",(0,c.jsx)(n.code,{children:"CI"})," \u4E4B\u4E2D\u4F1A\u6709 ",(0,c.jsx)(n.code,{children:"formatter-check"})," \u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316\u68C0\u6D4B\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"idea",children:"IDEA"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"IDEA"})," \u8FDB\u884C Java \u5F00\u53D1\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u5B89\u88C5 ",(0,c.jsx)(n.code,{children:"Checkstyle-IDEA"})," \u63D2\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"Tools->Checkstyle"})," \u7684 ",(0,c.jsx)(n.code,{children:"Configuration File"})," \u91CC\u70B9\u51FB ",(0,c.jsx)(n.code,{children:"Use a local Checkstyle file"}),"\uFF0C\u9009\u62E9\u9879\u76EE\u7684 ",(0,c.jsx)(n.code,{children:"fe/check/checkstyle/checkstyle.xml"})," \u6587\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A"})," \u4FDD\u8BC1",(0,c.jsx)(n.code,{children:"Checkstyle"}),"\u7684\u7248\u672C\u57289.3\u53CA\u4EE5\u4E0A\uFF08\u63A8\u8350\u4F7F\u7528\u6700\u65B0\u7248\u672C\uFF09\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(758663).Z+"",width:"753",height:"146"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Checkstyle-IDEA"})," \u63D2\u4EF6\u6765\u5BF9\u4EE3\u7801\u8FDB\u884C ",(0,c.jsx)(n.code,{children:"Checkstyle"})," \u68C0\u6D4B"]}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(544078).Z+"",width:"870",height:"527"})}),"\n",(0,c.jsx)(n.h3,{id:"vs-code",children:"VS Code"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528 VS Code \u8FDB\u884C Java \u5F00\u53D1\uFF0C\u8BF7\u5B89\u88C5 ",(0,c.jsx)(n.code,{children:"Checkstyle for Java"})," \u63D2\u4EF6\uFF0C\u6309\u7167",(0,c.jsx)(n.a,{href:"https://code.visualstudio.com/docs/java/java-linting",children:"\u6587\u6863"}),"\u91CC\u7684\u8BF4\u660E\u548C\u52A8\u56FE\u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"idea-1",children:"IDEA"}),"\n",(0,c.jsx)(n.h3,{id:"\u81EA\u52A8\u683C\u5F0F\u5316",children:"\u81EA\u52A8\u683C\u5F0F\u5316"}),"\n",(0,c.jsxs)(n.p,{children:["\u63A8\u8350\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"IDEA"})," \u7684\u81EA\u52A8\u683C\u5F0F\u5316\u529F\u80FD\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"Preferences->Editor->Code Style->Java"})," \u7684\u914D\u7F6E\u6807\u8BC6\u70B9\u51FB ",(0,c.jsx)(n.code,{children:"Import Scheme"}),"\uFF0C\u70B9\u51FB ",(0,c.jsx)(n.code,{children:"IntelliJ IDEA code style XML"}),"\uFF0C\u9009\u62E9\u9879\u76EE\u7684 ",(0,c.jsx)(n.code,{children:"build-support/IntelliJ-code-format.xml"})," \u6587\u4EF6\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"rearrange-code",children:"Rearrange Code"}),"\n",(0,c.jsxs)(n.p,{children:["Checkstyle \u4F1A\u6309\u7167 ",(0,c.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852",children:"Class and Interface Declarations"})," \u68C0\u6D4B\u4EE3\u7801\u7684 declarations \u987A\u5E8F\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5BFC\u5165\u4E0A\u9762\u7684 ",(0,c.jsx)(n.code,{children:"build-support/IntelliJ-code-format.xml"})," \u6587\u4EF6\u540E\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Code/Rearrange Code"})," \u81EA\u52A8\u5B8C\u6210\u6392\u5E8F"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(296813).Z+"",width:"808",height:"862"})}),"\n",(0,c.jsx)(n.h2,{id:"remove-unused-header",children:"Remove unused header"}),"\n",(0,c.jsxs)(n.p,{children:["\u9ED8\u8BA4\u5FEB\u6377\u952E ",(0,c.jsx)(n.strong,{children:"CTRL + ALT + O ---\x3e"})," \u4EC5\u4EC5\u5220\u9664\u672A\u4F7F\u7528\u7684\u5BFC\u5165\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u81EA\u52A8\u79FB\u9664\u5E76\u4E14 Reorder \uFF1A"}),"\n",(0,c.jsxs)(n.p,{children:["\u70B9\u51FB ",(0,c.jsx)(n.code,{children:"Preferences->Editor->General->Auto Import->Optimize Imports on the Fly"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},544078:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/idea-checkstyle-plugin-cn-2898885f5fce33c971ab075a70919f0a.png"},758663:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/idea-checkstyle-version-8dd2c11f9b1ff58b36f42a13985e86d9.png"},296813:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/idea-rearrange-code-84eb3793733a97939b36cf0a30678101.png"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var d=r(667294);let c={},i=d.createContext(c);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);