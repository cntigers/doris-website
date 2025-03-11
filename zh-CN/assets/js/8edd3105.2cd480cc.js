"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["857242"],{679635:function(e,n,c){c.r(n),c.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>h,contentTitle:()=>i});var t=JSON.parse('{"id":"query-data/subquery","title":"\u5B50\u67E5\u8BE2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-data/subquery.md","sourceDirName":"query-data","slug":"/query-data/subquery","permalink":"/zh-CN/docs/3.0/query-data/subquery","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5B50\u67E5\u8BE2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8FDE\u63A5\uFF08JOIN\uFF09","permalink":"/zh-CN/docs/3.0/query-data/join"},"next":{"title":"\u805A\u5408\u591A\u7EF4\u5206\u6790","permalink":"/zh-CN/docs/3.0/query-data/multi-dimensional-analytics"}}'),s=c("785893"),r=c("250065");let l={title:"\u5B50\u67E5\u8BE2",language:"zh-CN"},i=void 0,d={},h=[{value:"\u5B50\u67E5\u8BE2\u7684\u5206\u7C7B",id:"\u5B50\u67E5\u8BE2\u7684\u5206\u7C7B",level:2},{value:"\u6309\u7167\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\u7684\u7279\u6027\u5206\u7C7B",id:"\u6309\u7167\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\u7684\u7279\u6027\u5206\u7C7B",level:3},{value:"\u6309\u7167\u5B50\u67E5\u8BE2\u662F\u5426\u5F15\u7528\u4E86\u5916\u90E8\u67E5\u8BE2\u7684\u5217\u5206\u7C7B",id:"\u6309\u7167\u5B50\u67E5\u8BE2\u662F\u5426\u5F15\u7528\u4E86\u5916\u90E8\u67E5\u8BE2\u7684\u5217\u5206\u7C7B",level:3},{value:"Doris \u652F\u6301\u7684\u5B50\u67E5\u8BE2",id:"doris-\u652F\u6301\u7684\u5B50\u67E5\u8BE2",level:2},{value:"\u5173\u8054\u5B50\u67E5\u8BE2\u7684\u9650\u5236",id:"\u5173\u8054\u5B50\u67E5\u8BE2\u7684\u9650\u5236",level:2},{value:"\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u9650\u5236",id:"\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u9650\u5236",level:3},{value:"\u5173\u8054\u7684 (not) exists \u5B50\u67E5\u8BE2\u7684\u9650\u5236",id:"\u5173\u8054\u7684-not-exists-\u5B50\u67E5\u8BE2\u7684\u9650\u5236",level:3},{value:"\u5173\u8054\u7684 (not) in \u5B50\u67E5\u8BE2\u7684\u9650\u5236",id:"\u5173\u8054\u7684-not-in-\u5B50\u67E5\u8BE2\u7684\u9650\u5236",level:3},{value:"\u5D4C\u5957\u5B50\u67E5\u8BE2\u7684\u9650\u5236",id:"\u5D4C\u5957\u5B50\u67E5\u8BE2\u7684\u9650\u5236",level:3},{value:"Mark Join",id:"mark-join",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2},{value:"\u5BF9\u4E8E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",id:"\u5BF9\u4E8E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",level:3},{value:"\u5BF9\u4E8E\u975E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",id:"\u5BF9\u4E8E\u975E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",level:3}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\uFF08Subquery\uFF09\u662F\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u67E5\u8BE2\uFF08\u901A\u5E38\u662F SELECT \u8BED\u53E5\uFF09\u4E2D\u7684 SQL \u67E5\u8BE2\u3002\u5B83\u53EF\u4EE5\u7528\u5728 SELECT\u3001FROM\u3001WHERE \u6216 HAVING \u5B50\u53E5\u4E2D\uFF0C\u4E3A\u5916\u90E8\u67E5\u8BE2\u63D0\u4F9B\u6570\u636E\u6216\u6761\u4EF6\u3002\u5B50\u67E5\u8BE2\u7684\u4F7F\u7528\u4F7F\u5F97 SQL \u67E5\u8BE2\u53D8\u5F97\u66F4\u52A0\u7075\u6D3B\u548C\u5F3A\u5927\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5141\u8BB8\u6211\u4EEC\u5728\u5355\u4E2A\u67E5\u8BE2\u4E2D\u89E3\u51B3\u66F4\u590D\u6742\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u7684\u4E00\u4E9B\u91CD\u8981\u7279\u5F81\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5B50\u67E5\u8BE2\u7684\u4F4D\u7F6E"}),"\uFF1A\u5B50\u67E5\u8BE2\u53EF\u4EE5\u653E\u5728\u591A\u4E2A SQL \u5B50\u53E5\u4E2D\uFF0C\u5982 SELECT\u3001WHERE\u3001HAVING \u548C FROM \u5B50\u53E5\u3002\u5B83\u4EEC\u53EF\u4EE5\u4E0E SELECT\u3001UPDATE\u3001INSERT\u3001DELETE \u8BED\u53E5\u4EE5\u53CA\u8868\u8FBE\u5F0F\u8FD0\u7B97\u7B26\uFF08\u5982\u6BD4\u8F83\u8FD0\u7B97\u7B26 =\u3001>\u3001<\u3001<=\uFF0C\u4EE5\u53CA IN\u3001EXISTS \u7B49\uFF09\u4E00\u8D77\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4E3B\u67E5\u8BE2\u4E0E\u5B50\u67E5\u8BE2\u7684\u5173\u7CFB"}),"\uFF1A\u5B50\u67E5\u8BE2\u662F\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u67E5\u8BE2\u5185\u90E8\u7684\u67E5\u8BE2\u3002\u5916\u90E8\u67E5\u8BE2\u88AB\u79F0\u4E3A\u4E3B\u67E5\u8BE2\uFF0C\u800C\u5185\u90E8\u67E5\u8BE2\u5219\u88AB\u79F0\u4E3A\u5B50\u67E5\u8BE2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6267\u884C\u987A\u5E8F"}),"\uFF1A\u5F53\u5B50\u67E5\u8BE2\u662F\u72EC\u7ACB\u7684\uFF08\u5373\u4E0D\u4F9D\u8D56\u4E8E\u5916\u90E8\u67E5\u8BE2\u7684\u7ED3\u679C\uFF09\u65F6\uFF0C\u5B83\u901A\u5E38\u9996\u5148\u6267\u884C\u3002\u5F53\u5B58\u5728\u76F8\u5173\u6027\u65F6\uFF0C\u89E3\u6790\u5668\u4F1A\u6839\u636E\u9700\u8981\u5B9E\u65F6\u51B3\u5B9A\u5148\u6267\u884C\u54EA\u4E2A\u67E5\u8BE2\uFF0C\u5E76\u76F8\u5E94\u5730\u4F7F\u7528\u5B50\u67E5\u8BE2\u7684\u8F93\u51FA\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u62EC\u53F7\u7684\u4F7F\u7528"}),"\uFF1A\u5B50\u67E5\u8BE2\u5FC5\u987B\u7528\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u4EE5\u533A\u5206\u5B83\u4EEC\u662F\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u67E5\u8BE2\u4E2D\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u9762\u6211\u4EEC\u5206\u522B\u7528 t1 \u548C t2 \u8868\u4EE5\u53CA\u76F8\u5173 SQL\uFF0C\u4ECB\u7ECD\u5B50\u67E5\u8BE2\u7684\u57FA\u672C\u7279\u6027\u548C\u7528\u6CD5\u3002\u5EFA\u8868\u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table t1\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n\ncreate table t2\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5B50\u67E5\u8BE2\u7684\u5206\u7C7B",children:"\u5B50\u67E5\u8BE2\u7684\u5206\u7C7B"}),"\n",(0,s.jsx)(n.h3,{id:"\u6309\u7167\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\u7684\u7279\u6027\u5206\u7C7B",children:"\u6309\u7167\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\u7684\u7279\u6027\u5206\u7C7B"}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\u7684\u7279\u6027\uFF0C\u53EF\u5206\u4E3A\u6807\u91CF\u548C\u975E\u6807\u91CF\u5B50\u67E5\u8BE2\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. \u6807\u91CF\u5B50\u67E5\u8BE2"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u4E00\u5B9A\u8FD4\u56DE\u4E00\u4E2A\u5355\u4E00\u7684\u503C\uFF08\u672C\u8D28\u4E0A\u7B49\u4EF7\u4E8E\u4E00\u4E2A\u4E00\u884C\u4E00\u5217\u7684 Relation\uFF09\u3002\u5982\u679C\u5B50\u67E5\u8BE2\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u8FD4\u56DE\uFF0C\u5219\u8FD4\u56DE NULL \u503C\u3002\u6807\u91CF\u5B50\u67E5\u8BE2\u7406\u8BBA\u4E0A\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5141\u8BB8\u5355\u503C\u8868\u8FBE\u5F0F\u51FA\u73B0\u7684\u5730\u65B9\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. \u975E\u6807\u91CF\u5B50\u67E5\u8BE2"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u8FD4\u56DE\u4E00\u4E2A Relation\uFF08\u4E0D\u540C\u4E8E\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u8FD4\u56DE\u503C\uFF0C\u8BE5 Relation \u53EF\u5305\u542B\u591A\u884C\u591A\u5217\uFF09\u3002\u5982\u679C\u5B50\u67E5\u8BE2\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u8FD4\u56DE\uFF0C\u5219\u8FD4\u56DE\u7A7A\u96C6\uFF080 \u884C\uFF09\u3002\u975E\u6807\u91CF\u5B50\u67E5\u8BE2\u7406\u8BBA\u4E0A\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5141\u8BB8\u5173\u7CFB\uFF08\u96C6\u5408\uFF09\u51FA\u73B0\u7684\u5730\u65B9\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u5206\u522B\u5BF9\u6807\u91CF\u548C\u975E\u6807\u91CF\u5B50\u67E5\u8BE2\u4E3E\u4F8B\u8BF4\u660E\uFF08\u5BF9\u4E8E\u4E24\u4E2A\u62EC\u53F7\u5185\u7684\u5B50\u67E5\u8BE2\uFF0C\u5F53 t2 \u662F\u7A7A\u8868\u65F6\uFF0C\u4E24\u4E2A\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7ED3\u679C\u4E0D\u540C\uFF09\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u6807\u91CF\u5B50\u67E5\u8BE2\uFF0C\u5F53 t2 \u662F\u7A7A\u8868\u65F6\uFF0C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6807\u91CF\u503C null  \nselect * from t1 where t1.c1 > (select sum(t2.c1) from t2);  \n  \n-- \u975E\u6807\u91CF\u5B50\u67E5\u8BE2\uFF0C\u5F53 t2 \u662F\u7A7A\u8868\u65F6\uFF0C\u5B50\u67E5\u8BE2\u8FD4\u56DE empty set (0 rows)  \nselect * from t1 where t1.c1 in (select t2.c1 from t2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6309\u7167\u5B50\u67E5\u8BE2\u662F\u5426\u5F15\u7528\u4E86\u5916\u90E8\u67E5\u8BE2\u7684\u5217\u5206\u7C7B",children:"\u6309\u7167\u5B50\u67E5\u8BE2\u662F\u5426\u5F15\u7528\u4E86\u5916\u90E8\u67E5\u8BE2\u7684\u5217\u5206\u7C7B"}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u5B50\u67E5\u8BE2\u662F\u5426\u5F15\u7528\u4E86\u5916\u90E8\u67E5\u8BE2\u7684\u5217\uFF0C\u53EF\u5206\u4E3A\u5173\u8054\u5B50\u67E5\u8BE2\u548C\u975E\u5173\u8054\u5B50\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. \u975E\u5173\u8054\u5B50\u67E5\u8BE2"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u6CA1\u6709\u5F15\u7528\u5916\u90E8\u67E5\u8BE2\u7684\u4EFB\u4F55\u5217\u3002\u975E\u5173\u8054\u5B50\u67E5\u8BE2\u5E38\u5E38\u53EF\u4EE5\u72EC\u7ACB\u8FD0\u7B97\uFF0C\u5E76\u4E00\u6B21\u6027\u8FD4\u56DE\u76F8\u5E94\u7ED3\u679C\u4F9B\u5916\u90E8\u67E5\u8BE2\u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. \u5173\u8054\u5B50\u67E5\u8BE2"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u5F15\u7528\u4E86\u4E3B\u67E5\u8BE2\uFF08\u53C8\u79F0\u4E3A\u5916\u90E8\u67E5\u8BE2\uFF09\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5217\uFF08\u5F15\u7528\u7684\u5916\u90E8\u5217\u5E38\u5E38\u5728\u5B50\u67E5\u8BE2\u7684 WHERE \u6761\u4EF6\u4E2D\uFF09\u3002\u5173\u8054\u5B50\u67E5\u8BE2\u5E38\u5E38\u53EF\u4EE5\u770B\u505A\u662F\u5BF9\u5916\u90E8\u5173\u8054\u7684\u8868\u7684\u4E00\u4E2A\u8FC7\u6EE4\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u5916\u90E8\u8868\u7684\u6BCF\u4E00\u884C\u6570\u636E\uFF0C\u90FD\u4F1A\u5BF9\u5B50\u67E5\u8BE2\u8FDB\u884C\u8FD0\u7B97\uFF0C\u5E76\u8FD4\u56DE\u76F8\u5E94\u7ED3\u679C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u5206\u522B\u5BF9\u5173\u8054\u548C\u975E\u5173\u8054\u5B50\u67E5\u8BE2\u4E3E\u4F8B\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5173\u8054\u5B50\u67E5\u8BE2\uFF0C\u5B50\u67E5\u8BE2\u5185\u90E8\u4F7F\u7528\u4E86\u5916\u90E8\u8868\u7684\u5217 t1.c2  \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t2.c2 = t1.c2);  \n  \n-- \u975E\u5173\u8054\u5B50\u67E5\u8BE2\uFF0C\u5B50\u67E5\u8BE2\u5185\u90E8\u6CA1\u6709\u4F7F\u7528\u4EFB\u4F55\u5916\u90E8\u8868 t1 \u7684\u5217  \nselect * from t1 where t1.c1 in (select t2.c1 from t2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"doris-\u652F\u6301\u7684\u5B50\u67E5\u8BE2",children:"Doris \u652F\u6301\u7684\u5B50\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u652F\u6301\u6240\u6709\u7684\u975E\u5173\u8054\u5B50\u67E5\u8BE2\uFF0C\u5BF9\u5173\u8054\u5B50\u67E5\u8BE2\uFF08\u6709\u90E8\u5206\u9650\u5236\uFF09\u7684\u652F\u6301\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u652F\u6301\u5728 ",(0,s.jsx)(n.code,{children:"WHERE"}),"\u548C ",(0,s.jsx)(n.code,{children:"HAVING"}),"\u5B50\u53E5\u4E2D\u7684\u5173\u8054\u6807\u91CF\u5B50\u67E5\u8BE2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u652F\u6301\u5728 ",(0,s.jsx)(n.code,{children:"WHERE"}),"\u548C ",(0,s.jsx)(n.code,{children:"HAVING"}),"\u5B50\u53E5\u4E2D\u7684\u5173\u8054\u7684 ",(0,s.jsx)(n.code,{children:"IN"}),"\u3001",(0,s.jsx)(n.code,{children:"NOT IN"}),"\u3001",(0,s.jsx)(n.code,{children:"EXISTS"}),"\u3001",(0,s.jsx)(n.code,{children:"NOT EXISTS"})," \u975E\u6807\u91CF\u5B50\u67E5\u8BE2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u652F\u6301\u5728",(0,s.jsx)(n.code,{children:"SELECT"}),"\u5217\u8868\u4E2D\u7684\u5173\u8054\u6807\u91CF\u5B50\u67E5\u8BE2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u5D4C\u5957\u5B50\u67E5\u8BE2\uFF0CDoris \u53EA\u652F\u6301\u5B50\u67E5\u8BE2\u5173\u8054\u5230\u81EA\u5DF1\u7684\u76F4\u63A5\u7236\u67E5\u8BE2\uFF0C\u4E0D\u652F\u6301\u8DE8\u5C42\u7EA7\u5173\u8054\u5230\u7236\u67E5\u8BE2\u7684\u66F4\u5916\u5C42\u67E5\u8BE2\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u8054\u5B50\u67E5\u8BE2\u7684\u9650\u5236",children:"\u5173\u8054\u5B50\u67E5\u8BE2\u7684\u9650\u5236"}),"\n",(0,s.jsx)(n.h3,{id:"\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u9650\u5236",children:"\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u9650\u5236"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5173\u8054\u6761\u4EF6\u5FC5\u987B\u662F\u7B49\u503C\u6761\u4EF6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5B50\u67E5\u8BE2\u7684\u8F93\u51FA\u5FC5\u987B\u662F\u5355\u4E2A\u805A\u5408\u51FD\u6570\u7684\u7ED3\u679C\uFF0C\u4E14\u6CA1\u6709 ",(0,s.jsx)(n.code,{children:"group by"})," \u5B50\u53E5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5355\u4E2A\u805A\u5408\u51FD\u6570\uFF0C\u4E14\u65E0 group by\uFF0C\u652F\u6301  \nselect * from t1 where t1.c1 < (select max(t2.c1) from t2 where t1.c2 = t2.c2);  \n  \n-- \u7B49\u4EF7\u6539\u5199\u7684 SQL \u5982\u4E0B\uFF1A  \nselect t1.* from t1 inner join (select t2.c2 as c2, max(t2.c1) as c1 from t2 group by t2.c2) tx on t1.c1 < tx.c1 and t1.c2 = tx.c2;  \n  \n-- \u975E\u7B49\u503C\u6761\u4EF6\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 > t2.c2);  \n  \n-- \u6CA1\u6709\u805A\u5408\u51FD\u6570\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 = (select t2.c1 from t2 where t1.c2 = t2.c2);  \n  \n-- \u6709\u805A\u5408\u51FD\u6570\uFF0C\u4F46\u5305\u542B group by\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 = t2.c2 group by t2.c2);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5173\u8054\u7684-not-exists-\u5B50\u67E5\u8BE2\u7684\u9650\u5236",children:"\u5173\u8054\u7684 (not) exists \u5B50\u67E5\u8BE2\u7684\u9650\u5236"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5B50\u67E5\u8BE2\u4E0D\u80FD\u540C\u65F6\u6709",(0,s.jsx)(n.code,{children:"offset"}),"\u548C ",(0,s.jsx)(n.code,{children:"limit"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5E26 limit \u4F46\u65E0 offset\uFF0C\u652F\u6301  \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2);  \n  \n-- \u7B49\u4EF7\u6539\u5199 SQL \u5982\u4E0B\uFF1A  \nselect * from t1 left semi join t2 on t1.c2 = t2.c2;  \n  \n-- \u5E26 offset \u548C limit\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2, 3);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5173\u8054\u7684-not-in-\u5B50\u67E5\u8BE2\u7684\u9650\u5236",children:"\u5173\u8054\u7684 (not) in \u5B50\u67E5\u8BE2\u7684\u9650\u5236"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5B50\u67E5\u8BE2\u7684\u8F93\u51FA\u5FC5\u987B\u662F\u5355\u4E2A\u5217\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5B50\u67E5\u8BE2\u4E0D\u80FD\u5E26\u6709",(0,s.jsx)(n.code,{children:"limit"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5B50\u67E5\u8BE2\u4E0D\u80FD\u5E26\u6709\u805A\u5408\u51FD\u6570\u6216",(0,s.jsx)(n.code,{children:"group by"}),"\u5B50\u53E5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u652F\u6301\u7684\u5B50\u67E5\u8BE2  \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2);  \n  \n-- \u6539\u5199\u7684\u7B49\u4EF7 SQL \u5982\u4E0B\uFF1A  \nselect * from t1 left semi join t2 on t1.c1 = t2.c1 and t1.c2 = t2.c2;  \n  \n-- \u5B50\u67E5\u8BE2\u8F93\u51FA\u4E3A\u591A\u5217\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where (t1.a, t1.c) in (select t2.c1, t2.c from t2 where t1.c2 = t2.c2);  \n  \n-- \u5B50\u67E5\u8BE2\u5E26 limit\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 limit 3);  \n  \n-- \u5E26\u6709 group by \u5B50\u53E5\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 group by t2.c1);  \n  \n-- \u5E26\u6709\u805A\u5408\u51FD\u6570\uFF0C\u4E0D\u652F\u6301  \nselect * from t1 where t1.c1 in (select sum(t2.c1) from t2 where t1.c2 = t2.c2);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5D4C\u5957\u5B50\u67E5\u8BE2\u7684\u9650\u5236",children:"\u5D4C\u5957\u5B50\u67E5\u8BE2\u7684\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D\u53EA\u652F\u6301\u5B50\u67E5\u8BE2\u5173\u8054\u5230\u81EA\u5DF1\u76F4\u63A5\u7684\u7236\u67E5\u8BE2\uFF0C\u4E0D\u652F\u6301\u5173\u8054\u5230\u7236\u67E5\u8BE2\u7684\u66F4\u5916\u5C42\u67E5\u8BE2\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8BBE\u8FD8\u6709\u4E00\u4E2A",(0,s.jsx)(n.code,{children:"t3"}),"\u8868\uFF0C\u5176\u5EFA\u8868\u8BED\u53E5\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table t3  \n(  \n    c1 bigint,   \n    c2 bigint  \n)  \nDISTRIBUTED BY HASH(c1) BUCKETS 3  \nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53EF\u4EE5\u652F\u6301\u5F53\u5B50\u67E5\u8BE2\u53EA\u4F7F\u7528\u4E86\u81EA\u5DF1\u76F4\u63A5\u7236\u67E5\u8BE2\u7684\u5217"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select   \n    t1.c1   \nfrom   \n    t1   \nwhere not exists (  \n    select   \n        t2.c1   \n    from   \n        t2   \n    where not exists (  \n        select   \n            t3.c1   \n        from   \n            t3   \n        where   \n            t3.c2 = t2.c2  \n    ) and t2.c2 = t1.c2  \n);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4E0D\u652F\u6301\u5F53\u6700\u5185\u5C42\u7684\u5B50\u67E5\u8BE2\u4F7F\u7528\u4E86\u76F4\u63A5\u7236\u67E5\u8BE2\u7684\u5217",(0,s.jsx)(n.code,{children:"t2.c2"}),"\uFF0C\u5E76\u4F7F\u7528\u4E86\u6700\u5916\u5C42\u67E5\u8BE2\u7684\u5217",(0,s.jsx)(n.code,{children:"t1.c1"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select   \n    t1.c1   \nfrom   \n    t1   \nwhere not exists (  \n    select   \n        t2.c1   \n    from   \n        t2   \n    where not exists (  \n        select   \n            t3.c1   \n        from   \n            t3   \n        where   \n            t3.c2 = t2.c2 and t3.c1 = t1.c1  \n    )  \n);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mark-join",children:"Mark Join"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"where"})," \u6761\u4EF6\u4E2D\uFF0C\u4E00\u4E9B\u7531 ",(0,s.jsx)(n.code,{children:"(not) in"})," \u6216 ",(0,s.jsx)(n.code,{children:"(not) exists"})," \u7684\u5B50\u67E5\u8BE2\u548C\u5176\u4ED6\u8FC7\u6EE4\u6761\u4EF6\u7EC4\u6210\u7684 ",(0,s.jsx)(n.code,{children:"or"})," \u5173\u7CFB\u5B50\u53E5\uFF0C\u9700\u8981\u7279\u6B8A\u5904\u7406\u624D\u80FD\u751F\u6210\u6B63\u5E38\u7ED3\u679C\u3002\u4E3E\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select \n    t1.c1, \n    t1.c2 \nfrom t1 \nwhere exists (\n    select \n        t2.c1 \n    from t2 \n    where \n        t1.c2 = t2.c2\n    ) or t1.c1 > 0;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u4E2A SQL \u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"exists"})," \u5B50\u53E5\u90E8\u5206\u5982\u679C\u76F4\u63A5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"left semi join"}),"\uFF0C\u6839\u636E ",(0,s.jsx)(n.code,{children:"left semi join"})," \u7684\u8BED\u4E49\uFF0C\u5C06\u4F1A\u53EA\u8F93\u51FA ",(0,s.jsx)(n.code,{children:"t1"})," \u4E2D\u6EE1\u8DB3 ",(0,s.jsx)(n.code,{children:"t1.c2 = t2.c2"})," \u7684\u884C\u3002\u7136\u800C\uFF0C\u5B9E\u9645\u6EE1\u8DB3 ",(0,s.jsx)(n.code,{children:"t1.c1 > 0"})," \u8FD9\u4E2A\u6761\u4EF6\u7684\u884C\u4E5F\u5E94\u8BE5\u8F93\u51FA\u3002\u4E3A\u4E86\u8FBE\u5230\u8FD9\u4E2A\u76EE\u7684\uFF0C\u5F15\u5165\u4E86 ",(0,s.jsx)(n.code,{children:"Mark Join"})," \u7684\u673A\u5236\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"right semi join"})," \u7C7B\u4F3C\uFF0C\u53EA\u662F\u5DE6\u53F3\u8868\u4E0D\u540C\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u7528 ",(0,s.jsx)(n.code,{children:"left semi join"})," \u4F5C\u4E3A\u793A\u4F8B\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u793A\u4F8B SQL \u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u6B64 SQL \u4E0D\u80FD\u5B9E\u9645\u6267\u884C\uFF0C\u53EA\u4F5C\u4E3A\u6F14\u793A\u4F7F\u7528  \nselect   \n    tx.c1,   \n    tx.c2   \nfrom   \n    (  \n        select   \n            t1.c1,   \n            t1.c2,   \n            mark_join_flag   \n        from   \n            t1 left (mark) semi join t2 on t1.c2 = t2.c2  \n    ) tx  \nwhere   \n    tx.mark_join_flag or tx.c1 > 0;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Mark Join"})," \u76F8\u8F83\u4E8E\u666E\u901A\u7684 ",(0,s.jsx)(n.code,{children:"left semi join"}),"\uFF0C\u533A\u522B\u5728\u4E8E\u666E\u901A\u7684 ",(0,s.jsx)(n.code,{children:"left semi join"})," \u4F1A\u76F4\u63A5\u8F93\u51FA\u5DE6\u8868\u6EE1\u8DB3\u6761\u4EF6\u7684\u884C\uFF0C\u800C ",(0,s.jsx)(n.code,{children:"Mark Join"})," \u5219\u8F93\u51FA\u539F\u59CB\u7684\u5DE6\u8868\u52A0\u4E0A\u4E00\u4E2A\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"true"}),"\u3001",(0,s.jsx)(n.code,{children:"false"}),"\u6216 ",(0,s.jsx)(n.code,{children:"null"})," \u7684\u6807\u5FD7\u4F4D\u5217\uFF08\u793A\u4F8B\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"mark_join_flag"})," \u6807\u5FD7\uFF09\u3002\u6807\u5FD7\u4F4D\u7684\u503C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"join"})," \u6761\u4EF6\u8868\u8FBE\u5F0F ",(0,s.jsx)(n.code,{children:"t1.c2 = t2.c2"})," \u51B3\u5B9A\uFF0C\u6BCF\u4E00\u884C\u90FD\u5BF9\u5E94\u4E00\u4E2A\u6807\u5FD7\u4F4D\u503C\u3002\u6807\u5FD7\u4F4D\u503C\u7684\u8BA1\u7B97\u53C2\u89C1\u4E0B\u8868\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"t1.c2"}),(0,s.jsx)(n.th,{children:"t2.c2"}),(0,s.jsx)(n.th,{children:"mark_join_flag"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"TRUE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"FALSE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4E86\u8FD9\u4E2A\u6807\u5FD7\u4F4D\u4E4B\u540E\uFF0C",(0,s.jsx)(n.code,{children:"where"})," \u8FC7\u6EE4\u6761\u4EF6\u5C31\u53EF\u4EE5\u6539\u5199\u4E3A ",(0,s.jsx)(n.code,{children:"where mark_join_flag or t1.c1 > 0"}),"\uFF0C\u4ECE\u800C\u5F97\u5230\u6B63\u786E\u7ED3\u679C\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4E8E\u6807\u91CF\u5B50\u67E5\u8BE2\u7684\u8F93\u51FA\u5FC5\u987B\u662F\u4E00\u4E2A\u5355\u503C\uFF0C\u5982\u679C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u6570\u636E\u91CF\u8D85\u8FC7\u4E00\u6761\u8BB0\u5F55\uFF0C\u5C06\u4F1A\u62A5\u544A\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5BF9\u4E8E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",children:"\u5BF9\u4E8E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4F7F\u7528\u5173\u8054\u6807\u91CF\u5B50\u67E5\u8BE2\u65F6\uFF0C\u5982\u679C\u6EE1\u8DB3\u5173\u8054\u6761\u4EF6\u7684\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u6570\u636E\u91CF\u8D85\u8FC7\u4E00\u6761\u8BB0\u5F55\uFF0C\u5C06\u4F1A\u62A5\u544A\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BF7\u53C2\u8003\u4EE5\u4E0B SQL \u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\uFF0C\u5982\u679C t2 \u8868\u4E2D\u6EE1\u8DB3 t1.c2 = t2.c2 \u7684\u6570\u636E\u591A\u4E8E 1 \u6761\uFF0C\u5219\u4F1A\u62A5\u8FD0\u884C\u65F6\u9519\u8BEF\nselect t1.*, (select t2.c1 from t2 where t1.c2 = t2.c2) from t1;\n\n-- \u62A5\u9519\u4FE1\u606F\u6837\u4F8B\u5982\u4E0B \nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INVALID_ARGUMENT][E33] correlate scalar subquery must return only 1 row\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5BF9\u4E8E\u975E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2",children:"\u5BF9\u4E8E\u975E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2"}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u4F1A\u5728\u8FD0\u884C\u65F6\u6DFB\u52A0\u4E00\u4E2A",(0,s.jsx)(n.code,{children:"assert num rows"}),"\u7B97\u5B50\uFF0C\u5982\u679C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u6570\u636E\u91CF\u8D85\u8FC7\u4E00\u6761\u8BB0\u5F55\uFF0C\u5C06\u4F1A\u62A5\u544A\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BF7\u53C2\u8003\u4EE5\u4E0B SQL \u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u975E\u5173\u8054\u7684\u6807\u91CF\u5B50\u67E5\u8BE2\uFF0C\u5982\u679C t2 \u8868\u6709\u591A\u4E8E 1 \u6761\u7684\u6570\u636E\uFF0C\u5219\u53EF\u80FD\u62A5\u8FD0\u884C\u65F6\u9519\u8BEF  \nselect t1.*, (select t2.c1 from t2) from t1;  \n\n-- \u62A5\u9519\u4FE1\u606F\u6837\u4F8B\u5982\u4E0B  \nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[CANCELLED]Expected EQ 1 to be returned by expression\n"})})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return i},a:function(){return l}});var t=c(667294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);