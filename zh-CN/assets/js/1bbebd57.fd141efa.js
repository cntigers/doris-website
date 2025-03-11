"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["118848"],{88487:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-data-types/aggregate/BITMAP","title":"BITMAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-data-types/aggregate/BITMAP.md","sourceDirName":"sql-manual/sql-data-types/aggregate","slug":"/sql-manual/sql-data-types/aggregate/BITMAP","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/aggregate/BITMAP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL(HyperLogLog)","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/aggregate/HLL"},"next":{"title":"QUANTILE_STATE","permalink":"/zh-CN/docs/dev/sql-manual/sql-data-types/aggregate/QUANTILE-STATE"}}'),r=t("785893"),s=t("250065");let i={title:"BITMAP",language:"zh-CN"},l=void 0,d={},o=[{value:"BITMAP",id:"bitmap",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"bitmap",children:"BITMAP"}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"BITMAP"}),"\n",(0,r.jsx)(n.p,{children:"BITMAP \u7C7B\u578B\u7684\u5217\u53EF\u4EE5\u5728 Aggregate \u8868\u3001Unique \u8868\u6216 Duplicate \u8868\u4E2D\u4F7F\u7528\u3002\n\u5728 Unique \u8868\u6216 duplicate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5176\u5FC5\u987B\u4F5C\u4E3A\u975E key \u5217\u4F7F\u7528\u3002\n\u5728 Aggregate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5176\u5FC5\u987B\u4F5C\u4E3A\u975E key \u5217\u4F7F\u7528\uFF0C\u4E14\u5EFA\u8868\u65F6\u914D\u5408\u7684\u805A\u5408\u7C7B\u578B\u4E3A BITMAP_UNION\u3002\n\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002\n\u5E76\u4E14 BITMAP \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 bitmap_union_count\u3001bitmap_union\u3001bitmap_hash\u3001bitmap_hash64 \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u79BB\u7EBF\u573A\u666F\u4E0B\u4F7F\u7528 BITMAP \u4F1A\u5F71\u54CD\u5BFC\u5165\u901F\u5EA6\uFF0C\u5728\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u67E5\u8BE2\u901F\u5EA6\u4F1A\u6162\u4E8E HLL\uFF0C\u5E76\u4F18\u4E8E Count Distinct\u3002\n\u6CE8\u610F\uFF1A\u5B9E\u65F6\u573A\u666F\u4E0B BITMAP \u5982\u679C\u4E0D\u4F7F\u7528\u5168\u5C40\u5B57\u5178\uFF0C\u4F7F\u7528\u4E86 bitmap_hash() \u53EF\u80FD\u4F1A\u5BFC\u81F4\u6709\u5343\u5206\u4E4B\u4E00\u5DE6\u53F3\u7684\u8BEF\u5DEE\u3002\u5982\u679C\u8FD9\u4E2A\u8BEF\u5DEE\u4E0D\u53EF\u63A5\u53D7\uFF0C\u53EF\u4EE5\u4F7F\u7528 bitmap_hash64\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u5EFA\u8868\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'create table metric_table (\n  datekey int,\n  hour int,\n  device_id bitmap BITMAP_UNION\n)\naggregate key (datekey, hour)\ndistributed by hash(datekey, hour) buckets 1\nproperties(\n  "replication_num" = "1"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u63D2\u5165\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"insert into metric_table values\n(20200622, 1, to_bitmap(243)),\n(20200622, 2, bitmap_from_array([1,2,3,4,5,434543])),\n(20200622, 3, to_bitmap(287667876573));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- \u67E5\u8BE2\u6BCF\u5C0F\u65F6\u7684\u7D2F\u8BA1UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u67E5\u8BE2\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/session/variable/SET-VARIABLE",children:"\u4F1A\u8BDD\u53D8\u91CF"}),(0,r.jsx)(n.code,{children:"return_object_data_as_binary"}),"\u4E3A true\uFF0C\u8FD9\u6837 bitmap \u4F1A\u4EE5\u4E8C\u8FDB\u5236\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"BITMAP\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);