"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["242662"],{101877:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>l,assets:()=>h,toc:()=>t,contentTitle:()=>d});var l=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.6","title":"Release 1.2.6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v1.2/release-1.2.6.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.6","permalink":"/zh-CN/docs/3.0/releasenotes/v1.2/release-1.2.6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 1.2.6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 1.2.7","permalink":"/zh-CN/docs/3.0/releasenotes/v1.2/release-1.2.7"},"next":{"title":"Release 1.2.5","permalink":"/zh-CN/docs/3.0/releasenotes/v1.2/release-1.2.5"}}'),s=i("785893"),r=i("250065");let c={title:"Release 1.2.6",language:"zh-CN"},d="Behavior Changed",h={},t=[{value:"\u67E5\u8BE2",id:"\u67E5\u8BE2",level:2},{value:"Multi Catalog",id:"multi-catalog",level:2},{value:"\u5B58\u50A8",id:"\u5B58\u50A8",level:2},{value:"\u5176\u4ED6",id:"\u5176\u4ED6",level:2}];function a(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"behavior-changed",children:"Behavior Changed"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E BE \u914D\u7F6E\u9879 ",(0,s.jsx)(n.code,{children:"allow_invalid_decimalv2_triteral"})," \u4EE5\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u5BFC\u5165\u8D85\u8FC7\u5C0F\u6570\u7CBE\u5EA6\u7684 Decimal \u7C7B\u578B\u6570\u636E\uFF0C\u7528\u4E8E\u517C\u5BB9\u4E4B\u524D\u7684\u903B\u8F91\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsx)(n.h2,{id:"\u67E5\u8BE2",children:"\u67E5\u8BE2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u90E8\u5206\u67E5\u8BE2\u8BA1\u5212\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u4F1A\u8BDD\u53D8\u91CF ",(0,s.jsx)(n.code,{children:"sql_select_limit"})," \u548C ",(0,s.jsx)(n.code,{children:"have_query_cache"})," \u7528\u4E8E\u4E0E\u8001\u7248\u672C\u7684 MySQL \u5BA2\u6237\u7AEF\u517C\u5BB9\uFF1B"]}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316 Cold Run \u67E5\u8BE2\u6027\u80FD\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D Expr Context \u7C7B\u5185\u5B58\u6CC4\u6F0F\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,s.jsx)(n.code,{children:"explode_split"})," \u51FD\u6570\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6267\u884C\u9519\u8BEF\u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"multi-catalog",children:"Multi Catalog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u540C\u6B65 Hive \u5143\u6570\u636E\u65F6 FE \u56DE\u653E\u5143\u6570\u636E\u65E5\u5FD7\u5931\u8D25\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u4E86 ",(0,s.jsx)(n.code,{children:"refresh catalog"})," \u64CD\u4F5C\u53EF\u80FD\u5BFC\u81F4 FE OOM \u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u4E86 JDBC Catalog \u65E0\u6CD5\u6B63\u786E\u5904\u7406 ",(0,s.jsx)(n.code,{children:"0000-00-00"})," \u65E5\u671F\u683C\u5F0F\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86 kerberos ticket \u65E0\u6CD5\u81EA\u52A8\u5237\u65B0\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316\u4E86 Hive Partition \u88C1\u526A\u6027\u80FD\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D JDBC Catalog \u4E2D Trino \u548C Presto \u4E0D\u4E00\u81F4\u7684\u884C\u4E3A\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u5728\u67D0\u4E9B\u73AF\u5883\u4E2D\u65E0\u6CD5\u4F7F\u7528 HDFS \u77ED\u8DEF\u8BFB\u53D6\u6765\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u65E0\u6CD5\u8BFB\u53D6 CHDFS Iceberg \u8868\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B58\u50A8",children:"\u5B58\u50A8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D Merge-on-Write \u8868\u4E2D\u5220\u9664 bitmap \u903B\u8F91\u8BA1\u7B97\u9519\u8BEF\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u82E5\u5E72 BE \u5185\u5B58\u95EE\u9898\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u8868\u6570\u636E Snappy \u538B\u7F29\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D jemalloc \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u5BFC\u81F4 BE \u5D29\u6E83\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ED6",children:"\u5176\u4ED6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u90E8\u5206 Java UDF \u76F8\u5173\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u4E86 ",(0,s.jsx)(n.code,{children:"recover table"})," \u64CD\u4F5C\u9519\u8BEF\u5730\u89E6\u53D1\u52A8\u6001\u5206\u533A\u521B\u5EFA\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsx)(n.li,{children:"\u4FEE\u590D\u4E86\u901A\u8FC7 Broker Load \u5BFC\u5165 orc \u6587\u4EF6\u65F6\u7684\u65F6\u533A\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u65B0\u6DFB\u52A0\u7684 ",(0,s.jsx)(n.code,{children:"PERCENT"})," \u5173\u952E\u5B57\u5BFC\u81F4 Routine Load \u4F5C\u4E1A\u7684\u56DE\u653E\u5143\u6570\u636E\u5931\u8D25\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u4E86 ",(0,s.jsx)(n.code,{children:"truncate"})," \u64CD\u4F5C\u65E0\u6CD5\u4F5C\u7528\u4E8E\u975E\u5206\u533A\u8868\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D\u4E86\u7531\u4E8E ",(0,s.jsx)(n.code,{children:"show snapshot"})," \u64CD\u4F5C\u5BFC\u81F4 MySQL \u8FDE\u63A5\u4E22\u5931\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316\u9501\u903B\u8F91\u4EE5\u964D\u4F4E\u521B\u5EFA\u8868\u65F6\u53D1\u751F\u9501\u8D85\u65F6\u9519\u8BEF\u7684\u6982\u7387\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316\u4E86\u5BFC\u5165\u53D1\u751F\u9519\u8BEF\u65F6\u7684\u62A5\u9519\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,s.jsx)(n.p,{children:"\u611F\u8C22\u4EE5\u4E0B\u5F00\u53D1\u8005\u5728 Apache Doris 1.2.6 \u7248\u672C\u4E2D\u6240\u505A\u7684\u8D21\u732E\uFF1B"}),"\n",(0,s.jsx)(n.p,{children:"@amorynan"}),"\n",(0,s.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,s.jsx)(n.p,{children:"@caoliang-web"}),"\n",(0,s.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,s.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,s.jsx)(n.p,{children:"@dutyu"}),"\n",(0,s.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,s.jsx)(n.p,{children:"@HHoflittlefish777"}),"\n",(0,s.jsx)(n.p,{children:"@htyoung"}),"\n",(0,s.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,s.jsx)(n.p,{children:"@jeffreys-cat"}),"\n",(0,s.jsx)(n.p,{children:"@kaijchen"}),"\n",(0,s.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,s.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,s.jsx)(n.p,{children:"@KnightLiJunLong"}),"\n",(0,s.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,s.jsx)(n.p,{children:"@LiBinfeng-01"}),"\n",(0,s.jsx)(n.p,{children:"@morningman"}),"\n",(0,s.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,s.jsx)(n.p,{children:"@sohardforaname"}),"\n",(0,s.jsx)(n.p,{children:"@starocean999"}),"\n",(0,s.jsx)(n.p,{children:"@vinlee19"}),"\n",(0,s.jsx)(n.p,{children:"@wangbo"}),"\n",(0,s.jsx)(n.p,{children:"@wsjz"}),"\n",(0,s.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,s.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,s.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,s.jsx)(n.p,{children:"@yujun777"}),"\n",(0,s.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,s.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,s.jsx)(n.p,{children:"@zy-kkk"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return c}});var l=i(667294);let s={},r=l.createContext(s);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);