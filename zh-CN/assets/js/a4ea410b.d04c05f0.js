"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["302957"],{585850:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"release-and-verify/release-doris-sdk","title":"\u53D1\u5E03 Doris SDK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-doris-sdk.md","sourceDirName":"release-and-verify","slug":"/release-and-verify/release-doris-sdk","permalink":"/zh-CN/community/release-and-verify/release-doris-sdk","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u53D1\u5E03 Doris SDK","language":"zh-CN"},"sidebar":"community","previous":{"title":"\u53D1\u5E03 Doris Shade","permalink":"/zh-CN/community/release-and-verify/release-doris-shade"},"next":{"title":"\u5B8C\u6210\u53D1\u5E03","permalink":"/zh-CN/community/release-and-verify/release-complete"}}'),a=r("785893"),i=r("250065");let d={title:"\u53D1\u5E03 Doris SDK",language:"zh-CN"},c="\u53D1\u5E03 Doris SDK",o={},l=[{value:"\u51C6\u5907\u53D1\u5E03",id:"\u51C6\u5907\u53D1\u5E03",level:2},{value:"\u53D1\u5E03\u5230 Maven",id:"\u53D1\u5E03\u5230-maven",level:2},{value:"1. \u51C6\u5907\u5206\u652F",id:"1-\u51C6\u5907\u5206\u652F",level:3},{value:"2. \u53D1\u5E03\u5230 Maven staging",id:"2-\u53D1\u5E03\u5230-maven-staging",level:3},{value:"3. \u51C6\u5907 svn",id:"3-\u51C6\u5907-svn",level:3},{value:"4. \u6295\u7968",id:"4-\u6295\u7968",level:3},{value:"\u5B8C\u6210\u53D1\u5E03",id:"\u5B8C\u6210\u53D1\u5E03",level:2},{value:"\u9644\u5F55\uFF1A\u53D1\u5E03\u5230 SNAPSHOT",id:"\u9644\u5F55\u53D1\u5E03\u5230-snapshot",level:2}];function t(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"\u53D1\u5E03-doris-sdk",children:"\u53D1\u5E03 Doris SDK"})}),"\n",(0,a.jsx)(s.p,{children:"\u5176\u4EE3\u7801\u5E93\u72EC\u7ACB\u4E8E Doris \u4E3B\u4EE3\u7801\u5E93\uFF0C\u4F4D\u4E8E\uFF1A"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/apache/doris-sdk",children:"https://github.com/apache/doris-sdk"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\u51C6\u5907\u53D1\u5E03",children:"\u51C6\u5907\u53D1\u5E03"}),"\n",(0,a.jsxs)(s.p,{children:["\u9996\u5148\uFF0C\u8BF7\u53C2\u9605 ",(0,a.jsx)(s.a,{href:"/zh-CN/community/release-and-verify/release-prepare",children:"\u53D1\u7248\u51C6\u5907"})," \u6587\u6863\u8FDB\u884C\u53D1\u7248\u51C6\u5907\u3002"]}),"\n",(0,a.jsx)(s.h2,{id:"\u53D1\u5E03\u5230-maven",children:"\u53D1\u5E03\u5230 Maven"}),"\n",(0,a.jsx)(s.p,{children:"\u6211\u4EEC\u4EE5\u53D1\u5E03 Doris Sdk v1.0.0 \u4E3A\u4F8B\u3002"}),"\n",(0,a.jsx)(s.h3,{id:"1-\u51C6\u5907\u5206\u652F",children:"1. \u51C6\u5907\u5206\u652F"}),"\n",(0,a.jsx)(s.p,{children:"\u5728\u4EE3\u7801\u5E93\u4E2D\u521B\u5EFA\u5206\u652F\uFF1A1.0.0-release\uFF0C\u5E76 checkout \u5230\u8BE5\u5206\u652F\u3002"}),"\n",(0,a.jsx)(s.h3,{id:"2-\u53D1\u5E03\u5230-maven-staging",children:"2. \u53D1\u5E03\u5230 Maven staging"}),"\n",(0,a.jsx)(s.p,{children:"\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5F00\u59CB\u751F\u6210 release tag\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"mvn release:clean\nmvn release:prepare -DpushChanges=false\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u5176\u4E2D ",(0,a.jsx)(s.code,{children:"-DpushChanges=false"})," \u8868\u793A\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u5411\u4EE3\u7801\u5E93\u63A8\u9001\u65B0\u751F\u6210\u7684\u5206\u652F\u548C tag\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u5728\u6267\u884C ",(0,a.jsx)(s.code,{children:"release:prepare"})," \u547D\u4EE4\u540E\uFF0C\u4F1A\u8981\u6C42\u63D0\u4F9B\u4EE5\u4E0B\u4E09\u4E2A\u4FE1\u606F\uFF1A"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Doris Sdk \u7684\u7248\u672C\u4FE1\u606F\uFF1A\u6211\u4EEC\u9ED8\u8BA4\u5C31\u53EF\u4EE5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u56DE\u8F66\u6216\u8005\u8F93\u5165\u81EA\u5DF1\u60F3\u8981\u7684\u7248\u672C\u3002\u7248\u672C\u683C\u5F0F\u4E3A ",(0,a.jsx)(s.code,{children:"{sdk.version}"}),"\uFF0C\u5982 ",(0,a.jsx)(s.code,{children:"1.0.0"}),"\u3002"]}),"\n",(0,a.jsxs)(s.li,{children:["Doris Sdk \u7684 release tag\uFF1Arelease \u8FC7\u7A0B\u4F1A\u5728\u672C\u5730\u751F\u6210\u4E00\u4E2A tag\u3002\u6211\u4EEC\u4F7F\u7528\u9ED8\u8BA4\u7684 tag \u540D\u79F0\u5373\u53EF\uFF0C\u5982 ",(0,a.jsx)(s.code,{children:"1.0.0"}),"\u3002"]}),"\n",(0,a.jsxs)(s.li,{children:["Doris Sdk \u4E0B\u4E00\u4E2A\u7248\u672C\u7684\u7248\u672C\u53F7\uFF1A\u8FD9\u4E2A\u7248\u672C\u53F7\u53EA\u662F\u7528\u4E8E\u751F\u6210\u672C\u5730\u5206\u652F\u65F6\u4F7F\u7528\uFF0C\u65E0\u5B9E\u9645\u610F\u4E49\u3002\u6211\u4EEC\u6309\u89C4\u5219\u586B\u5199\u4E00\u4E2A\u5373\u53EF\uFF0C\u6BD4\u5982\u5F53\u524D\u8981\u53D1\u5E03\u7684\u7248\u672C\u662F\uFF1A",(0,a.jsx)(s.code,{children:"1.0.0"}),"\uFF0C\u90A3\u4E48\u4E0B\u4E00\u4E2A\u7248\u672C\u53F7\u586B\u5199 ",(0,a.jsx)(s.code,{children:"1.0.1-SNAPSHOT"})," \u5373\u53EF\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"mvn release:prepare"})," \u53EF\u80FD\u4F1A\u8981\u6C42\u8F93\u5165 GPG passphrase\u3002\u5982\u679C\u51FA\u73B0 ",(0,a.jsx)(s.code,{children:"gpg: no valid OpenPGP data found"})," \u9519\u8BEF\uFF0C\u5219\u53EF\u4EE5\u6267\u884C ",(0,a.jsx)(s.code,{children:"export GPG_TTY=$(tty)"})," \u540E\u5728\u5C1D\u8BD5\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"mvn release:prepare"})," \u6267\u884C\u6210\u529F\u540E\uFF0C\u4F1A\u5728\u672C\u5730\u751F\u6210\u4E00\u4E2A tag \u548C\u4E00\u4E2A branch\u3002\u5E76\u4E14\u5F53\u524D\u5206\u652F\u4F1A\u65B0\u589E\u4E24\u4E2A commit\u3002\u7B2C\u4E00\u4E2A commit \u5BF9\u5E94\u7684\u662F\u65B0\u751F\u6210\u7684 tag\uFF0C\u7B2C\u4E8C\u4E2A\u5219\u662F\u4E0B\u4E00\u4E2A\u7248\u672C\u7684 branch\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(s.code,{children:"git log"})," \u67E5\u770B\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u672C\u5730 tag \u786E\u8BA4\u65E0\u8BEF\u540E\uFF0C\u9700\u8981\u5C06 tag \u63A8\u9001\u5230\u4EE3\u7801\u5E93\uFF1A"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"git push upstream --tags"})}),"\n",(0,a.jsxs)(s.p,{children:["\u5176\u4E2D upstream \u6307\u5411 ",(0,a.jsx)(s.code,{children:"apache/doris-sdk"})," \u4EE3\u7801\u5E93\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u6700\u540E\uFF0C\u6267\u884C perform:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"mvn release:perform\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6267\u884C\u6210\u529F\u540E\uFF0C\u5728 ",(0,a.jsx)(s.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"})," \u91CC\u9762\u53EF\u4EE5\u627E\u5230\u521A\u521A\u53D1\u5E03\u7684\u7248\u672C\uFF1A"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:r(197249).Z+"",width:"1057",height:"955"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["\u6CE8\u610F\u9700\u8981\u5305\u542B ",(0,a.jsx)(s.code,{children:".asc"})," \u7B7E\u540D\u6587\u4EF6\u3002"]})}),"\n",(0,a.jsx)(s.p,{children:"\u5982\u679C\u64CD\u4F5C\u6709\u8BEF\u3002\u9700\u8981\u5C06\u672C\u5730 tag\uFF0C\u4EE3\u7801\u5E93\u4E2D\u7684 tag \u4EE5\u53CA\u672C\u5730\u65B0\u751F\u6210\u7684\u4E24\u4E2A commit \u5220\u9664\u3002\u5E76\u5C06 staging drop \u6389\u3002\u7136\u540E\u91CD\u65B0\u6267\u884C\u4E0A\u8FF0\u6B65\u9AA4\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u68C0\u67E5\u5B8C\u6BD5\u540E\uFF0C\u70B9\u51FB\u56FE\u4E2D\u7684 ",(0,a.jsx)(s.code,{children:"close"})," \u6309\u94AE\u5B8C\u6210 staging \u53D1\u5E03\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"3-\u51C6\u5907-svn",children:"3. \u51C6\u5907 svn"}),"\n",(0,a.jsx)(s.p,{children:"\u68C0\u51FA svn \u4ED3\u5E93\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"svn co https://dist.apache.org/repos/dist/dev/doris/\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6253\u5305 tag \u6E90\u7801\uFF0C\u5E76\u751F\u6210\u7B7E\u540D\u6587\u4EF6\u548Csha256\u6821\u9A8C\u6587\u4EF6\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5 ",(0,a.jsx)(s.code,{children:"1.0.0"})," \u4E3A\u4F8B\u3002\u5176\u4ED6 tag \u64CD\u4F5C\u76F8\u540C"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"git archive --format=tar 1.14_2.12-1.0.0 --prefix=apache-doris-sdk-1.0.0-src/ | gzip > apache-doris-sdk-1.0.0-src.tar.gz\ngpg -u xxx@apache.org --armor --output apache-doris-sdk-1.0.0-src.tar.gz.asc  --detach-sign apache-doris-sdk-1.0.0-src.tar.gz\nsha512sum apache-doris-sdk-1.14_2.12-1.0.0-src.tar.gz > apache-doris-sdk-1.0.0-src.tar.gz.sha512\n\nMac:\nshasum -a 512 apache-doris-sdk-1.0.0-src.tar.gz > apache-doris-sdk-1.0.0-src.tar.gz.sha512\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u6700\u7EC8\u5F97\u5230\u4E09\u4E2A\u6587\u4EF6\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"apache-doris-sdk-1.0.0-src.tar.gz\napache-doris-sdk-1.0.0-src.tar.gz.asc\napache-doris-sdk-1.0.0-src.tar.gz.sha512\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u5C06\u8FD9\u4E09\u4E2A\u6587\u4EF6\u79FB\u52A8\u5230 svn \u76EE\u5F55\u4E0B\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"doris/doris-sdk/1.0.0/\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u6700\u7EC8 svn \u76EE\u5F55\u7ED3\u6784\u7C7B\u4F3C\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"\u251C\u2500\u2500 1.2.3-rc01\n\u2502   \u251C\u2500\u2500 apache-doris-1.2.3-src.tar.gz\n\u2502   \u251C\u2500\u2500 apache-doris-1.2.3-src.tar.gz.asc\n\u2502   \u251C\u2500\u2500 apache-doris-1.2.3-src.tar.gz.sha512\n...\n\u251C\u2500\u2500 KEYS\n\u251C\u2500\u2500 doris-sdk\n\u2502   \u2514\u2500\u2500 1.0.0\n\u2502       \u251C\u2500\u2500 apache-doris-sdk-1.0.0-src.tar.gz\n\u2502       \u251C\u2500\u2500 apache-doris-sdk-1.0.0-src.tar.gz.asc\n\u2502       \u2514\u2500\u2500 apache-doris-sdk-1.0.0-src.tar.gz.sha512\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u5176\u4E2D 1.2.3-rc01 \u662F Doris \u4E3B\u4EE3\u7801\u7684\u76EE\u5F55\uFF0C\u800C ",(0,a.jsx)(s.code,{children:"doris-sdk/1.0.0"})," \u4E0B\u5C31\u662F\u672C\u6B21\u53D1\u5E03\u7684\u5185\u5BB9\u4E86\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u6CE8\u610F\uFF0CKEYS \u6587\u4EF6\u7684\u51C6\u5907\uFF0C\u53EF\u53C2\u9605 ",(0,a.jsx)(s.a,{href:"/zh-CN/community/release-and-verify/release-prepare",children:"\u53D1\u7248\u51C6\u5907"})," \u4E2D\u7684\u4ECB\u7ECD\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"4-\u6295\u7968",children:"4. \u6295\u7968"}),"\n",(0,a.jsx)(s.p,{children:"\u5728 dev@doris \u90AE\u4EF6\u7EC4\u53D1\u8D77\u6295\u7968\uFF0C\u6A21\u677F\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Hi All,\n\nThis is a call for the vote to release Apache Doris-SDK 1.0.0\n\nThe git tag for the release:\nhttps://github.com/apache/doris-sdk/releases/tag/1.0.0\n\nRelease Notes are here:\nhttps://github.com/apache/doris-sdk/blob/1.0.0/CHANGE-LOG.txt\n\nThanks to everyone who has contributed to this release.\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/doris/doris-sdk/1.0.0/\n\nKEYS file is available here:\nhttps://downloads.apache.org/doris/KEYS\n\nTo verify and build, you can refer to following link:\nhttps://doris.apache.org/community/release-and-verify/release-verify\n\nThe vote will be open for at least 72 hours.\n\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because \u2026\n"})}),"\n",(0,a.jsx)(s.h2,{id:"\u5B8C\u6210\u53D1\u5E03",children:"\u5B8C\u6210\u53D1\u5E03"}),"\n",(0,a.jsxs)(s.p,{children:["\u8BF7\u53C2\u9605 ",(0,a.jsx)(s.a,{href:"/zh-CN/community/release-and-verify/release-complete",children:"\u5B8C\u6210\u53D1\u5E03"})," \u6587\u6863\u5B8C\u6210\u6240\u6709\u53D1\u5E03\u6D41\u7A0B\u3002"]}),"\n",(0,a.jsx)(s.h2,{id:"\u9644\u5F55\u53D1\u5E03\u5230-snapshot",children:"\u9644\u5F55\uFF1A\u53D1\u5E03\u5230 SNAPSHOT"}),"\n",(0,a.jsx)(s.p,{children:"Snapshot \u5E76\u975E Apache Release \u7248\u672C\uFF0C\u4EC5\u7528\u4E8E\u53D1\u7248\u524D\u7684\u9884\u89C8\u3002\u5728\u7ECF\u8FC7 PMC \u8BA8\u8BBA\u901A\u8FC7\u540E\uFF0C\u53EF\u4EE5\u53D1\u5E03 Snapshot \u7248\u672C"}),"\n",(0,a.jsx)(s.p,{children:"\u5207\u6362\u5230 doris sdk \u76EE\u5F55"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"mvn deploy\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u4E4B\u540E\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u770B\u5230 snapshot \u7248\u672C\uFF1A"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"https://repository.apache.org/content/repositories/snapshots/org/apache/doris/doris-sdk/\n"})})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},197249:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/staging-repositories-4c394e1094a6aa8ac05d6bfea6b48627.png"},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return d}});var n=r(667294);let a={},i=n.createContext(a);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);