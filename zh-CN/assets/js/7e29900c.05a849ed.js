"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["799244"],{954447:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>h,contentTitle:()=>a});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.4","title":"Release 1.2.4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/v1.2/release-1.2.4.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.4","permalink":"/zh-CN/docs/releasenotes/v1.2/release-1.2.4","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 1.2.4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 1.2.5","permalink":"/zh-CN/docs/releasenotes/v1.2/release-1.2.5"},"next":{"title":"Release 1.2.3","permalink":"/zh-CN/docs/releasenotes/v1.2/release-1.2.3"}}'),l=i("785893"),r=i("250065");let c={title:"Release 1.2.4",language:"zh-CN"},a="Behavior Changed",d={},h=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Spark Load",id:"spark-load",level:3}];function t(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5728 1.2.4 \u7248\u672C\u4E2D\uFF0CDoris \u56E2\u961F\u5DF2\u7ECF\u4FEE\u590D\u4E86\u81EA 1.2.3 \u7248\u672C\u53D1\u5E03\u4EE5\u6765\u8FD1 150 \u4E2A\u95EE\u9898\u6216\u6027\u80FD\u6539\u8FDB\u9879\u3002\u540C\u65F6\uFF0C1.2.4 \u7248\u672C\u4E5F\u4F5C\u4E3A 1.2.3 \u7684\u8FED\u4EE3\u7248\u672C\uFF0C\u5177\u5907\u66F4\u9AD8\u7684\u7A33\u5B9A\u6027\uFF0C\u5EFA\u8BAE\u6240\u6709\u7528\u6237\u5347\u7EA7\u5230\u8FD9\u4E2A\u7248\u672C\u3002"}),"\n",(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"behavior-changed",children:"Behavior Changed"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9488\u5BF9 Date/DatetimeV2 \u548C DecimalV3 \u7C7B\u578B\uFF0C\u5728 ",(0,l.jsx)(n.code,{children:"DESCRIBLE"})," \u548C ",(0,l.jsx)(n.code,{children:"SHOW CREATE TABLE"})," \u8BED\u53E5\u7684\u7ED3\u679C\u4E2D\uFF0C\u5C06\u4E0D\u518D\u663E\u793A\u4E3A Date/DatetimeV2 \u6216 DecimalV3\uFF0C\u800C\u76F4\u63A5\u663E\u793A\u4E3A Date/Datetime \u6216 Decimal\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8FD9\u4E2A\u6539\u52A8\u7528\u4E8E\u517C\u5BB9\u90E8\u5206 BI \u7CFB\u7EDF\u3002\u5982\u679C\u60F3\u67E5\u770B\u5217\u7684\u5B9E\u9645\u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"DESCRIBE ALL"})," \u8BED\u53E5\u67E5\u770B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u67E5\u8BE2 ",(0,l.jsx)(n.code,{children:"information_schema"})," \u5E93\u4E2D\u7684\u8868\u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u518D\u8FD4\u56DE External Catalog \u4E2D\u7684\u5143\u4FE1\u606F\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8FD9\u4E2A\u6539\u52A8\u907F\u514D\u4E86\u56E0 External Catalog \u7684\u8FDE\u63A5\u95EE\u9898\u5BFC\u81F4\u7684 information_schema \u5E93\u4E0D\u53EF\u67E5\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u89E3\u51B3\u90E8\u5206 BI \u7CFB\u7EDF\u4E0E Doris \u914D\u5408\u4F7F\u7528\u7684\u95EE\u9898\u3002\u53EF\u4EE5\u901A\u8FC7 FE \u7684\u914D\u7F6E\u9879 ",(0,l.jsx)(n.code,{children:"infodb_support_ext_catalog "}),"\u63A7\u5236\uFF0C\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u4E0D\u8FD4\u56DE External Catalog \u4E2D\u7684\u5143\u4FE1\u606F\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"improvement",children:"Improvement"}),"\n",(0,l.jsx)(n.h3,{id:"jdbc-catalog",children:"JDBC Catalog"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u652F\u6301\u901A\u8FC7 JDBC Catalog \u8FDE\u63A5\u5176\u4ED6 Trino/Presto \u96C6\u7FA4"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u200B        \u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#trino",children:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#trino"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JDBC Catalog \u8FDE\u63A5 Clickhouse \u6570\u636E\u6E90\u652F\u6301 Array \u7C7B\u578B\u6620\u5C04"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u200B        \u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse",children:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse"})]}),"\n",(0,l.jsx)(n.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Spark Load \u652F\u6301 Resource Manager HA \u76F8\u5173\u914D\u7F6E"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u200B        \u53C2\u8003 PR\uFF1A ",(0,l.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15000",children:"https://github.com/apache/doris/pull/15000"})]}),"\n",(0,l.jsx)(n.h1,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D Hive Catalog \u7684\u82E5\u5E72\u8FDE\u901A\u6027\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D Hudi Catalog \u7684\u82E5\u5E72\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F18\u5316 JDBC Catalog \u7684\u8FDE\u63A5\u6C60\uFF0C\u907F\u514D\u8FC7\u591A\u7684\u8FDE\u63A5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u901A\u8FC7 JDBC Catalog \u4ECE\u53E6\u4E00\u4E2A Doris \u96C6\u7FA4\u5BFC\u5165\u6570\u636E\u662F\u4F1A\u53D1\u751F OOM \u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u82E5\u5E72\u67E5\u8BE2\u548C\u5BFC\u5165\u7684\u89C4\u5212\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D Unique Key Merge-On-Write \u8868\u7684\u82E5\u5E72\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u82E5\u5E72 BDBJE \u95EE\u9898\uFF0C\u89E3\u51B3\u67D0\u4E9B\u60C5\u51B5\u4E0B FE \u5143\u6570\u636E\u5F02\u5E38\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4FEE\u590D ",(0,l.jsx)(n.code,{children:"CREATE VIEW"})," \u8BED\u53E5\u4E0D\u652F\u6301 Table Valued Function \u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u82E5\u5E72\u5185\u5B58\u7EDF\u8BA1\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u8BFB\u53D6 Parquet/ORC \u8868\u7684\u82E5\u5E72\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D DecimalV3 \u7684\u82E5\u5E72\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4FEE\u590D ",(0,l.jsx)(n.code,{children:"SHOW QUERY/LOAD PROFILE"})," \u7684\u82E5\u5E72\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,l.jsx)(n.p,{children:"\u6709 47 \u4F4D\u8D21\u732E\u8005\u53C2\u4E0E\u5230 1.2.4 \u7684\u5B8C\u5584\u548C\u53D1\u5E03\u4E2D\uFF0C\u611F\u8C22\u4ED6\u4EEC\u7684\u8F9B\u52B3\u4ED8\u51FA\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"@zy-kkk"}),"\n",(0,l.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,l.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,l.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,l.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,l.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,l.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,l.jsx)(n.p,{children:"@wsjz"}),"\n",(0,l.jsx)(n.p,{children:"@wangbo"}),"\n",(0,l.jsx)(n.p,{children:"@starocean999"}),"\n",(0,l.jsx)(n.p,{children:"@sohardforaname"}),"\n",(0,l.jsx)(n.p,{children:"@siriume"}),"\n",(0,l.jsx)(n.p,{children:"@pingchunzhang"}),"\n",(0,l.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,l.jsx)(n.p,{children:"@mymeiyi"}),"\n",(0,l.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,l.jsx)(n.p,{children:"@morrySnow"}),"\n",(0,l.jsx)(n.p,{children:"@morningman"}),"\n",(0,l.jsx)(n.p,{children:"@luwei16"}),"\n",(0,l.jsx)(n.p,{children:"@luozenglin"}),"\n",(0,l.jsx)(n.p,{children:"@liujinhui1994"}),"\n",(0,l.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,l.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,l.jsx)(n.p,{children:"@jeffreys-cat"}),"\n",(0,l.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,l.jsx)(n.p,{children:"@gavinchou"}),"\n",(0,l.jsx)(n.p,{children:"@dutyu"}),"\n",(0,l.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,l.jsx)(n.p,{children:"@chenlinzhong"}),"\n",(0,l.jsx)(n.p,{children:"@caoliang-web"}),"\n",(0,l.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,l.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,l.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,l.jsx)(n.p,{children:"@Yukang-Lian"}),"\n",(0,l.jsx)(n.p,{children:"@SWJTU-ZhangLei"}),"\n",(0,l.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,l.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,l.jsx)(n.p,{children:"@JackDrogon"}),"\n",(0,l.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,l.jsx)(n.p,{children:"@GoGoWen"}),"\n",(0,l.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,l.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,l.jsx)(n.p,{children:"@CalvinKirs"}),"\n",(0,l.jsx)(n.p,{children:"@Cai-Yao"}),"\n",(0,l.jsx)(n.p,{children:"@ByteYue"}),"\n",(0,l.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,l.jsx)(n.p,{children:"@BePPPower"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return c}});var s=i(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);