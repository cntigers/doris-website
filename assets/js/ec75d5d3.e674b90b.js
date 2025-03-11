"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["551603"],{798364:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.6","title":"Release 1.2.6","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v1.2/release-1.2.6.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.6","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 1.2.6","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.2.7","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.7"},"next":{"title":"Release 1.2.5","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.5"}}'),t=i("785893"),r=i("250065");let l={title:"Release 1.2.6",language:"en"},a="Behavior Change",o={},c=[{value:"Multi Catalog",id:"multi-catalog",level:2}];function h(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"behavior-change",children:"Behavior Change"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add a BE configuration item ",(0,t.jsx)(n.code,{children:"allow_invalid_decimalv2_literal"})," to control whether can import data that exceeding the decimal's precision, for compatibility with previous logic."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"query",children:"Query"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix several query planning issues."}),"\n",(0,t.jsxs)(n.li,{children:["Support ",(0,t.jsx)(n.code,{children:"sql_select_limit"})," session variable."]}),"\n",(0,t.jsx)(n.li,{children:"Optimize query cold run performance."}),"\n",(0,t.jsx)(n.li,{children:"Fix expr context memory leak."}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that the ",(0,t.jsx)(n.code,{children:"explode_split"})," function was executed incorrectly in some cases."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"multi-catalog",children:"Multi Catalog"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix the issue that synchronizing hive metadata caused FE replay edit log to fail."}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"refresh catalog"})," operation causing FE OOM."]}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that jdbc catalog cannot handle ",(0,t.jsx)(n.code,{children:"0000-00-00"})," correctly."]}),"\n",(0,t.jsx)(n.li,{children:"Fixed the issue that the kerberos ticket cannot be refreshed automatically."}),"\n",(0,t.jsx)(n.li,{children:"Optimize the partition pruning performance of hive."}),"\n",(0,t.jsx)(n.li,{children:"Fix the inconsistent behavior of trino and presto in jdbc catalog."}),"\n",(0,t.jsx)(n.li,{children:"Fix the issue that hdfs short-circuit read could not be used to improve query efficiency in some environments."}),"\n",(0,t.jsx)(n.li,{children:"Fix the issue that the iceberg table on CHDFS could not be read."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix the wrong calculation of delete bitmap in MOW table."}),"\n",(0,t.jsx)(n.li,{children:"Fix several BE memory issues."}),"\n",(0,t.jsx)(n.li,{children:"Fix snappy compression issue."}),"\n",(0,t.jsx)(n.li,{children:"Fix the issue that jemalloc may cause BE to crash in some cases."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"others",children:"Others"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix several java udf related issues."}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that the ",(0,t.jsx)(n.code,{children:"recover table"})," operation incorrectly triggered the creation of dynamic partitions."]}),"\n",(0,t.jsx)(n.li,{children:"Fix timezone when importing orc files via broker load."}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that the newly added ",(0,t.jsx)(n.code,{children:"PERCENT"})," keyword caused the replay metadata of the routine load job to fail."]}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that the ",(0,t.jsx)(n.code,{children:"truncate"})," operation failed to acts on a non-partitioned table."]}),"\n",(0,t.jsxs)(n.li,{children:["Fix the issue that the mysql connection was lost due to the ",(0,t.jsx)(n.code,{children:"show snapshot"})," operation."]}),"\n",(0,t.jsx)(n.li,{children:"Optimize the lock logic to reduce the probability of lock timeout errors when creating tables."}),"\n",(0,t.jsxs)(n.li,{children:["Add session variable ",(0,t.jsx)(n.code,{children:"have_query_cache"})," to be compatible with some old mysql clients."]}),"\n",(0,t.jsx)(n.li,{children:"Optimize the error message when encountering an error of loading."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,t.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,t.jsx)(n.p,{children:"@amorynan"}),"\n",(0,t.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,t.jsx)(n.p,{children:"@caoliang-web"}),"\n",(0,t.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,t.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,t.jsx)(n.p,{children:"@dutyu"}),"\n",(0,t.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,t.jsx)(n.p,{children:"@HHoflittlefish777"}),"\n",(0,t.jsx)(n.p,{children:"@htyoung"}),"\n",(0,t.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,t.jsx)(n.p,{children:"@jeffreys-cat"}),"\n",(0,t.jsx)(n.p,{children:"@kaijchen"}),"\n",(0,t.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,t.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,t.jsx)(n.p,{children:"@KnightLiJunLong"}),"\n",(0,t.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,t.jsx)(n.p,{children:"@LiBinfeng-01"}),"\n",(0,t.jsx)(n.p,{children:"@morningman"}),"\n",(0,t.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,t.jsx)(n.p,{children:"@sohardforaname"}),"\n",(0,t.jsx)(n.p,{children:"@starocean999"}),"\n",(0,t.jsx)(n.p,{children:"@vinlee19"}),"\n",(0,t.jsx)(n.p,{children:"@wangbo"}),"\n",(0,t.jsx)(n.p,{children:"@wsjz"}),"\n",(0,t.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,t.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,t.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,t.jsx)(n.p,{children:"@yujun777"}),"\n",(0,t.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,t.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,t.jsx)(n.p,{children:"@zy-kkk"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(667294);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);