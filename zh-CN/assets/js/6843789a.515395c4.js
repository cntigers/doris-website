"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["736446"],{787054:function(n,e,s){s.r(e),s.d(e,{default:()=>_,frontMatter:()=>c,metadata:()=>d,assets:()=>t,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"query-data/multi-dimensional-analytics","title":"\u805A\u5408\u591A\u7EF4\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-data/multi-dimensional-analytics.md","sourceDirName":"query-data","slug":"/query-data/multi-dimensional-analytics","permalink":"/zh-CN/docs/dev/query-data/multi-dimensional-analytics","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u805A\u5408\u591A\u7EF4\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5B50\u67E5\u8BE2","permalink":"/zh-CN/docs/dev/query-data/subquery"},"next":{"title":"\u5206\u6790\u51FD\u6570\uFF08\u7A97\u53E3\u51FD\u6570\uFF09","permalink":"/zh-CN/docs/dev/query-data/window-function"}}'),r=s("785893"),a=s("250065");let c={title:"\u805A\u5408\u591A\u7EF4\u5206\u6790",language:"zh-CN"},i=void 0,t={},l=[{value:"ROLLUP",id:"rollup",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:3},{value:"\u8BED\u6CD5\u548C\u793A\u4F8B",id:"\u8BED\u6CD5\u548C\u793A\u4F8B",level:3},{value:"CUBE",id:"cube",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F-1",level:3},{value:"\u8BED\u6CD5\u548C\u793A\u4F8B",id:"\u8BED\u6CD5\u548C\u793A\u4F8B-1",level:3},{value:"GROUPING FUNCTION",id:"grouping-function",level:2},{value:"GROUPING",id:"grouping",level:3},{value:"GROUPING_ID",id:"grouping_id",level:3},{value:"GROUPING SETS",id:"grouping-sets",level:3},{value:"\u9644\u5F55",id:"\u9644\u5F55",level:2}];function o(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5728\u6570\u636E\u5E93\u4E2D\uFF0CROLLUP\u3001CUBE \u548C GROUPING SETS \u662F\u7528\u4E8E\u591A\u7EF4\u6570\u636E\u805A\u5408\u7684\u9AD8\u7EA7 SQL \u8BED\u53E5\u3002\u8FD9\u4E9B\u529F\u80FD\u663E\u8457\u589E\u5F3A\u4E86 GROUP BY \u5B50\u53E5\u7684\u80FD\u529B\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u5728\u5355\u4E00\u67E5\u8BE2\u4E2D\u83B7\u5F97\u591A\u79CD\u5C42\u6B21\u7684\u6C47\u603B\u7ED3\u679C\uFF0C\u8FD9\u5728\u8BED\u4E49\u4E0A\u7B49\u4EF7\u4E8E\u4F7F\u7528 UNION ALL \u8FDE\u63A5\u591A\u4E2A\u805A\u5408\u8BED\u53E5\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ROLLUP"}),"\uFF1AROLLUP \u662F\u4E00\u79CD\u7528\u4E8E\u751F\u6210\u5C42\u6B21\u5316\u6C47\u603B\u7684\u64CD\u4F5C\u3002\u5B83\u6309\u7167\u6307\u5B9A\u7684\u5217\u987A\u5E8F\u8FDB\u884C\u6C47\u603B\uFF0C\u4ECE\u6700\u7EC6\u7C92\u5EA6\u7684\u6570\u636E\u9010\u6B65\u6C47\u603B\u5230\u6700\u9AD8\u5C42\u6B21\u3002\u4F8B\u5982\uFF0C\u5728\u9500\u552E\u6570\u636E\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 ROLLUP \u6309\u5730\u533A\u3001\u65F6\u95F4\u8FDB\u884C\u6C47\u603B\uFF0C\u5F97\u5230\u6BCF\u4E2A\u5730\u533A\u6BCF\u4E2A\u6708\u7684\u9500\u552E\u989D\u3001\u6BCF\u4E2A\u5730\u533A\u7684\u603B\u9500\u552E\u989D\u4EE5\u53CA\u6574\u4F53\u603B\u9500\u552E\u989D\u3002ROLLUP \u9002\u7528\u4E8E\u9700\u8981\u9010\u7EA7\u6C47\u603B\u7684\u573A\u666F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"CUBE"}),"\uFF1ACUBE \u662F\u4E00\u79CD\u66F4\u4E3A\u5F3A\u5927\u7684\u805A\u5408\u64CD\u4F5C\uFF0C\u5B83\u751F\u6210\u6240\u6709\u53EF\u80FD\u7684\u6C47\u603B\u7EC4\u5408\u3002\u4E0E ROLLUP \u4E0D\u540C\uFF0CCUBE \u4F1A\u8BA1\u7B97\u6240\u6709\u7EF4\u5EA6\u7684\u5B50\u96C6\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u6309\u4EA7\u54C1\u548C\u5730\u533A\u8FDB\u884C\u7EDF\u8BA1\u7684\u9500\u552E\u6570\u636E\uFF0CCUBE \u4F1A\u8BA1\u7B97\u6BCF\u4E2A\u4EA7\u54C1\u5728\u6BCF\u4E2A\u5730\u533A\u7684\u9500\u552E\u989D\u3001\u6BCF\u4E2A\u4EA7\u54C1\u7684\u603B\u9500\u552E\u989D\u3001\u6BCF\u4E2A\u5730\u533A\u7684\u603B\u9500\u552E\u989D\u4EE5\u53CA\u6574\u4F53\u603B\u9500\u552E\u989D\u3002CUBE \u9002\u7528\u4E8E\u9700\u8981\u5168\u9762\u591A\u7EF4\u5206\u6790\u7684\u573A\u666F\uFF0C\u5982\u4E1A\u52A1\u5206\u6790\u548C\u5E02\u573A\u8C03\u67E5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"GROUPING SETS"}),"\uFF1AGROUPING SETS \u63D0\u4F9B\u4E86\u5BF9\u7279\u5B9A\u5206\u7EC4\u96C6\u8FDB\u884C\u805A\u5408\u7684\u7075\u6D3B\u6027\u3002\u5B83\u5141\u8BB8\u7528\u6237\u6307\u5B9A\u4E00\u7EC4\u5217\u7684\u7EC4\u5408\u8FDB\u884C\u72EC\u7ACB\u805A\u5408\uFF0C\u800C\u4E0D\u662F\u50CF ROLLUP \u548C CUBE \u90A3\u6837\u751F\u6210\u6240\u6709\u53EF\u80FD\u7684\u7EC4\u5408\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u6309\u5730\u533A\u548C\u65F6\u95F4\u7684\u7279\u5B9A\u7EC4\u5408\u8FDB\u884C\u6C47\u603B\uFF0C\u800C\u4E0D\u9700\u8981\u6BCF\u4E2A\u7EF4\u5EA6\u7684\u6240\u6709\u7EC4\u5408\u3002GROUPING SETS \u9002\u7528\u4E8E\u9700\u8981\u5B9A\u5236\u5316\u6C47\u603B\u7684\u573A\u666F\uFF0C\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u805A\u5408\u63A7\u5236\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"ROLLUP\u3001CUBE \u548C GROUPING SETS \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u591A\u7EF4\u6570\u636E\u6C47\u603B\u529F\u80FD\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u6570\u636E\u5206\u6790\u548C\u62A5\u544A\u9700\u6C42\uFF0C\u4F7F\u5F97\u590D\u6742\u7684\u805A\u5408\u8BA1\u7B97\u53D8\u5F97\u66F4\u52A0\u7B80\u4FBF\u548C\u9AD8\u6548\u3002\u63A5\u4E0B\u6765\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u4EE5\u4E0A\u529F\u80FD\u4F7F\u7528\u573A\u666F\u3001\u8BED\u6CD5\u4E0E\u793A\u4F8B\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"rollup",children:"ROLLUP"}),"\n",(0,r.jsx)(e.h3,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsxs)(e.p,{children:["ROLLUP \u5BF9\u4E8E\u6309\u7167\u65F6\u95F4\u3001\u5730\u7406\u3001\u7C7B\u522B\u7B49\u5C42\u6B21\u7EF4\u5EA6\u8FDB\u884C\u6C47\u603B\u65F6\u975E\u5E38\u6709\u7528\u3002\u4F8B\u5982\uFF0C\u67E5\u8BE2\u53EF\u4EE5\u6307\u5B9A ",(0,r.jsx)(e.code,{children:"ROLLUP(year, month, day)"})," \u6216\u8005 ",(0,r.jsx)(e.code,{children:"(country, Province, city)"}),"\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8BED\u6CD5\u548C\u793A\u4F8B",children:"\u8BED\u6CD5\u548C\u793A\u4F8B"}),"\n",(0,r.jsx)(e.p,{children:"ROLLUP \u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT \u2026 GROUP BY ROLLUP(grouping_column_reference_list)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4E0B\u9762\u8FD9\u4E2A\u67E5\u8BE2\u5BF9\u9500\u552E\u989D\u6309\u7167\u5E74\u6708\u8FDB\u884C\u6C47\u603B\u5206\u6790\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT  \n        YEAR(d_date),  \n        MONTH(d_date),  \n        SUM(ss_net_paid) AS total_sum  \nFROM  \n        store_sales,  \n        date_dim d1  \nWHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND YEAR(d_date) IN (2001, 2002)  \n        AND MONTH(d_date) IN (1, 2, 3)  \nGROUP BY  \n        ROLLUP(YEAR(d_date), MONTH(d_date))  \nORDER BY  \n        YEAR(d_date), MONTH(d_date);\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8FD9\u4E2A\u67E5\u8BE2\u6309\u7167\u65F6\u95F4\u8FDB\u884C\u6C47\u603B\uFF0C\u5206\u522B\u8BA1\u7B97\u4E86\u6BCF\u5E74\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3001\u6BCF\u5E74\u4E2D\u6BCF\u6708\u7684\u9500\u552E\u989D\u5C0F\u8BA1\uFF0C\u4EE5\u53CA\u603B\u4F53\u7684\u9500\u552E\u989D\u603B\u8BA1\u3002\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+--------------+---------------+-------------+  \n| YEAR(d_date) | MONTH(d_date) | total_sum   |  \n+--------------+---------------+-------------+  \n|         NULL |          NULL | 54262669.17 |  \n|         2001 |          NULL | 26640320.46 |  \n|         2001 |             1 |  9982165.83 |  \n|         2001 |             2 |  8454915.34 |  \n|         2001 |             3 |  8203239.29 |  \n|         2002 |          NULL | 27622348.71 |  \n|         2002 |             1 | 11260654.35 |  \n|         2002 |             2 |  7722750.61 |  \n|         2002 |             3 |  8638943.75 |  \n+--------------+---------------+-------------+  \n9 rows in set (0.08 sec)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"cube",children:"CUBE"}),"\n",(0,r.jsx)(e.h3,{id:"\u4F7F\u7528\u573A\u666F-1",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsx)(e.p,{children:"CUBE \u6700\u9002\u5408\u7528\u4E8E\u67E5\u8BE2\u6D89\u53CA\u591A\u4E2A\u72EC\u7ACB\u7EF4\u5EA6\u7684\u5217\uFF0C\u800C\u4E0D\u662F\u8868\u793A\u5355\u4E2A\u7EF4\u5EA6\u7684\u4E0D\u540C\u7EA7\u522B\u7684\u5217\u3002\u4F8B\u5982\uFF0C\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u662F\u5BF9\u6708\u4EFD\u3001\u5730\u533A\u548C\u4EA7\u54C1\u7684\u6240\u6709\u7EC4\u5408\u8FDB\u884C\u6C47\u603B\u3002\u8FD9\u662F\u4E09\u4E2A\u72EC\u7ACB\u7684\u7EF4\u5EA6\uFF0C\u5206\u6790\u6240\u6709\u53EF\u80FD\u7684\u5C0F\u8BA1\u7EC4\u5408\u662F\u5F88\u5E38\u89C1\u7684\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u663E\u793A\u5E74\u3001\u6708\u3001\u65E5\u6240\u6709\u53EF\u80FD\u7EC4\u5408\u7684\u4EA4\u53C9\u5236\u8868\u5C06\u5305\u542B\u51E0\u4E2A\u4E0D\u5FC5\u8981\u7684\u503C\uFF0C\u56E0\u4E3A\u65F6\u95F4\u7EF4\u5EA6\u4E2D\u5B58\u5728\u81EA\u7136\u7684\u5C42\u6B21\u7ED3\u6784\u3002\u5728\u5927\u591A\u6570\u5206\u6790\u4E2D\uFF0C\u8BF8\u5982\u6309\u6708\u65E5\u8BA1\u7B97\u7684\u5229\u6DA6\u4E4B\u7C7B\u7684\u5C0F\u8BA1\u90FD\u662F\u4E0D\u5FC5\u8981\u7684\u3002\u76F8\u5BF9\u8F83\u5C11\u7684\u7528\u6237\u9700\u8981\u8BE2\u95EE\u201C\u5168\u5E74\u6BCF\u6708 16 \u65E5\u7684\u603B\u9500\u552E\u989D\u662F\u591A\u5C11\u201D\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u8BED\u6CD5\u548C\u793A\u4F8B-1",children:"\u8BED\u6CD5\u548C\u793A\u4F8B"}),"\n",(0,r.jsx)(e.p,{children:"CUBE \u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT \u2026 GROUP BY CUBE(grouping_column_reference_list)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT  \n        YEAR(d_date),  \n        i_category,  \n        ca_state,  \n        SUM(ss_net_paid) AS total_sum  \nFROM  \n        store_sales,  \n        date_dim d1,  \n        item,  \n        customer_address ca   \nWHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND i_item_sk = ss_item_sk  \n        AND ss_addr_sk = ca_address_sk  \n        AND i_category IN ("Books", "Electronics")  \n        AND YEAR(d_date) IN (1998, 1999)  \n        AND ca_state IN ("LA", "AK")  \nGROUP BY CUBE(YEAR(d_date), i_category, ca_state)  \nORDER BY YEAR(d_date), i_category, ca_state;\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF0C\u5B83\u5206\u522B\u8BA1\u7B97\u4E86\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u603B\u8BA1\u7684\u9500\u552E\u989D\uFF1B"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5404\u5E74\u5EA6\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3001\u5404\u7C7B\u522B\u4E0B\u5546\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3001\u5404\u5DDE\u7684\u9500\u552E\u989D\u5C0F\u8BA1\uFF1B"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6BCF\u5E74\u6BCF\u7C7B\u4EA7\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3001\u6BCF\u4E2A\u5DDE\u6BCF\u4E2A\u4EA7\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3001\u6BCF\u5E74\u6BCF\u4E2A\u5DDE\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u548C\u6BCF\u5E74\u6BCF\u4E2A\u5DDE\u5404\u7C7B\u522B\u7684\u4EA7\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+--------------+-------------+----------+------------+  \n| YEAR(d_date) | i_category  | ca_state | total_sum  |  \n+--------------+-------------+----------+------------+  \n|         NULL | NULL        | NULL     | 8690374.60 |  \n|         NULL | NULL        | AK       | 2675198.33 |  \n|         NULL | NULL        | LA       | 6015176.27 |  \n|         NULL | Books       | NULL     | 4238177.69 |  \n|         NULL | Books       | AK       | 1310791.36 |  \n|         NULL | Books       | LA       | 2927386.33 |  \n|         NULL | Electronics | NULL     | 4452196.91 |  \n|         NULL | Electronics | AK       | 1364406.97 |  \n|         NULL | Electronics | LA       | 3087789.94 |  \n|         1998 | NULL        | NULL     | 4369656.14 |  \n|         1998 | NULL        | AK       | 1402539.19 |  \n|         1998 | NULL        | LA       | 2967116.95 |  \n|         1998 | Books       | NULL     | 2213703.82 |  \n|         1998 | Books       | AK       |  719911.29 |  \n|         1998 | Books       | LA       | 1493792.53 |  \n|         1998 | Electronics | NULL     | 2155952.32 |  \n|         1998 | Electronics | AK       |  682627.90 |  \n|         1998 | Electronics | LA       | 1473324.42 |  \n|         1999 | NULL        | NULL     | 4320718.46 |  \n|         1999 | NULL        | AK       | 1272659.14 |  \n|         1999 | NULL        | LA       | 3048059.32 |  \n|         1999 | Books       | NULL     | 2024473.87 |  \n|         1999 | Books       | AK       |  590880.07 |  \n|         1999 | Books       | LA       | 1433593.80 |  \n|         1999 | Electronics | NULL     | 2296244.59 |  \n|         1999 | Electronics | AK       |  681779.07 |  \n|         1999 | Electronics | LA       | 1614465.52 |  \n+--------------+-------------+----------+------------+  \n27 rows in set (0.21 sec)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"grouping-function",children:"GROUPING FUNCTION"}),"\n",(0,r.jsx)(e.p,{children:"\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u89E3\u51B3\u4F7F\u7528 ROLLUP \u548C CUBE \u65F6\u51FA\u73B0\u7684\u4E24\u4E2A\u6311\u6218\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u4F55\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u8BC6\u522B\u51FA\u54EA\u4E9B\u7ED3\u679C\u96C6\u884C\u4EE3\u8868\u5C0F\u8BA1\uFF0C\u4EE5\u53CA\u5982\u4F55\u51C6\u786E\u627E\u5230\u7ED9\u5B9A\u5C0F\u8BA1\u5BF9\u5E94\u7684\u805A\u5408\u5C42\u7EA7\u3002\u7531\u4E8E\u5728\u8BA1\u7B97\uFF08\u5982\u603B\u8BA1\u767E\u5206\u6BD4\uFF09\u65F6\u7ECF\u5E38\u9700\u8981\u4F7F\u7528\u5C0F\u8BA1\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u7B80\u4FBF\u7684\u65B9\u6CD5\u6765\u8BC6\u522B\u8FD9\u4E9B\u5C0F\u8BA1\u884C\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5F53\u67E5\u8BE2\u7ED3\u679C\u540C\u65F6\u5305\u542B\u5B9E\u9645\u5B58\u50A8\u7684 NULL \u503C\u548C\u7531 ROLLUP \u6216 CUBE \u64CD\u4F5C\u751F\u6210\u7684\u201CNULL\u201D\u503C\u65F6\uFF0C\u4F1A\u5F15\u53D1\u53E6\u4E00\u4E2A\u95EE\u9898\uFF1A\u5982\u4F55\u533A\u5206\u8FD9\u4E24\u79CD NULL \u503C\uFF1F"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u8FC7 GROUPING\u3001GROUPING_ID\u3001GROUPING SETS \u80FD\u591F\u6709\u6548\u89E3\u51B3\u4E0A\u8FF0\u7684\u4E24\u4E2A\u6311\u6218\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"grouping",children:"GROUPING"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. \u539F\u7406\u4ECB\u7ECD"})}),"\n",(0,r.jsx)(e.p,{children:"GROUPING \u4F7F\u7528\u5355\u4E2A\u5217\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5728\u9047\u5230\u7531 ROLLUP \u6216 CUBE \u64CD\u4F5C\u521B\u5EFA\u7684 NULL \u503C\u65F6\u8FD4\u56DE 1\uFF0C\u5373 NULL \u8868\u793A\u8BE5\u884C\u662F\u5C0F\u8BA1\uFF0C\u5219 GROUPING \u8FD4\u56DE 1\u3002\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u7684\u503C\uFF08\u5305\u62EC\u8868\u6570\u636E\u4E2D\u672C\u8EAB\u7684 NULL \u503C\uFF09\u90FD\u8FD4\u56DE 0\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"select  \n        year(d_date),  \n        month(d_date),  \n        sum(ss_net_paid) as total_sum,  \n        grouping(year(d_date)),  \n        grouping(month(d_date))  \nfrom  \n        store_sales,  \n        date_dim d1  \nwhere  \n        d1.d_date_sk = ss_sold_date_sk  \n        and year(d_date) in (2001, 2002)  \n        and month(d_date) in (1, 2, 3)  \ngroup by  \n        rollup(year(d_date), month(d_date))  \norder by  \n        year(d_date), month(d_date);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"(year(d_date), month(d_date)) \u7EC4\u7684 GROUPING \u51FD\u6570\u7ED3\u679C\u4E3A (0,0) \u4E3A\u6309\u7167\u5E74\u6708\u805A\u5408\u7684\u7ED3\u679C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"(year(d_date)) \u7EC4\u7684 GROUPING \u51FD\u6570\u7ED3\u679C\u4E3A (0,1)\uFF0C\u4E3A\u6309\u5E74\u805A\u5408\u7684\u7ED3\u679C\uFF1B"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"() \u7EC4\u7684 GROUPING \u51FD\u6570\u7ED3\u679C\u4E3A (1,1)\uFF0C\u4E3A\u603B\u8BA1\u7ED3\u679C\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+--------------+---------------+-------------+------------------------+-------------------------+  \n| year(d_date) | month(d_date) | total_sum   | Grouping(year(d_date)) | Grouping(month(d_date)) |  \n+--------------+---------------+-------------+------------------------+-------------------------+  \n|         NULL |          NULL | 54262669.17 |                      1 |                       1 |  \n|         2001 |          NULL | 26640320.46 |                      0 |                       1 |  \n|         2001 |             1 |  9982165.83 |                      0 |                       0 |  \n|         2001 |             2 |  8454915.34 |                      0 |                       0 |  \n|         2001 |             3 |  8203239.29 |                      0 |                       0 |  \n|         2002 |          NULL | 27622348.71 |                      0 |                       1 |  \n|         2002 |             1 | 11260654.35 |                      0 |                       0 |  \n|         2002 |             2 |  7722750.61 |                      0 |                       0 |  \n|         2002 |             3 |  8638943.75 |                      0 |                       0 |  \n+--------------+---------------+-------------+------------------------+-------------------------+  \n9 rows in set (0.06 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u4F7F\u7528\u573A\u666F\u3001\u8BED\u6CD5\u4E0E\u793A\u4F8B"})}),"\n",(0,r.jsx)(e.p,{children:"GROUPING \u51FD\u6570\u53EF\u4EE5\u7528\u6765\u8FC7\u6EE4\u7ED3\u679C\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select\n        year(d_date),\n        i_category,\n        ca_state,\n        sum(ss_net_paid) as total_sum\nfrom\n        store_sales,\n        date_dim d1,\n        item,\n        customer_address ca \nwhere\n        d1.d_date_sk = ss_sold_date_sk\n        and i_item_sk = ss_item_sk\n        and ss_addr_sk=ca_address_sk\n        and i_category in ("Books", "Electronics")\n        and year(d_date) in(1998, 1999)\n        and ca_state in ("LA", "AK")\ngroup by cube(year(d_date), i_category, ca_state)\nhaving grouping(year(d_date))=1 and grouping(i_category)=1 and grouping(ca_state)=1\nor grouping(year(d_date))=0 and grouping(i_category)=1 and grouping(ca_state)=1\nor grouping(year(d_date))=1 and grouping(i_category)=1 and grouping(ca_state)=0\norder by year(d_date), i_category, ca_state;   \n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5728 HAVING \u8FC7\u6EE4\u6761\u4EF6\u4E2D\u4F7F\u7528 GROUPING \u51FD\u6570\uFF0C\u4EC5\u4FDD\u7559\u603B\u8BA1\u9500\u552E\u989D\uFF0C\u6309\u5E74\u5EA6\u6C47\u603B\u7684\u9500\u552E\u989D\u548C\u6309\u5730\u533A\u6C47\u603B\u7684\u9500\u552E\u989D\u3002\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+---------------------+------------+----------+------------+  \n| year(`d1`.`d_date`) | i_category | ca_state | total_sum  |  \n+---------------------+------------+----------+------------+  \n|                NULL | NULL       | NULL     | 8690374.60 |  \n|                NULL | NULL       | AK       | 2675198.33 |  \n|                NULL | NULL       | LA       | 6015176.27 |  \n|                1998 | NULL       | NULL     | 4369656.14 |  \n|                1999 | NULL       | NULL     | 4320718.46 |  \n+---------------------+------------+----------+------------+  \n5 rows in set (0.13 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 GROUPING \u51FD\u6570\u548C IF \u51FD\u6570\u63D0\u9AD8\u67E5\u8BE2\u7684\u53EF\u8BFB\u6027\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'select  \n        if(grouping(year(d_date)) = 1, "Multi-year sum", year(d_date)) as year,  \n        if(grouping(i_category) = 1, "Multi-category sum", i_category) as category,  \n        sum(ss_net_paid) as total_sum  \nfrom  \n        store_sales,  \n        date_dim d1,  \n        item,  \n        customer_address ca  \nwhere  \n        d1.d_date_sk = ss_sold_date_sk  \n        and i_item_sk = ss_item_sk  \n        and ss_addr_sk = ca_address_sk  \n        and i_category in ("Books", "Electronics")  \n        and year(d_date) in (1998, 1999)  \n        and ca_state in ("LA", "AK")  \ngroup by cube(year(d_date), i_category)\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+----------------+--------------------+------------+  \n| year           | category           | total_sum  |  \n+----------------+--------------------+------------+  \n| 1998           | Books              | 2213703.82 |  \n| 1998           | Electronics        | 2155952.32 |  \n| 1999           | Electronics        | 2296244.59 |  \n| 1999           | Books              | 2024473.87 |  \n| 1998           | Multi-category sum | 4369656.14 |  \n| 1999           | Multi-category sum | 4320718.46 |  \n| Multi-year sum | Books              | 4238177.69 |  \n| Multi-year sum | Electronics        | 4452196.91 |  \n| Multi-year sum | Multi-category sum | 8690374.60 |  \n+----------------+--------------------+------------+  \n9 rows in set (0.09 sec)\n"})}),"\n",(0,r.jsx)(e.h3,{id:"grouping_id",children:"GROUPING_ID"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. \u4F7F\u7528\u573A\u666F"})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u6570\u636E\u5E93\u4E2D\uFF0CGROUPING_ID \u548C GROUPING \u51FD\u6570\u90FD\u662F\u7528\u4E8E\u5904\u7406\u591A\u7EF4\u6570\u636E\u805A\u5408\u67E5\u8BE2\uFF08\u5982 ROLLUP \u548C CUBE\uFF09\u65F6\u7684\u8F85\u52A9\u51FD\u6570\uFF0C\u5B83\u4EEC\u5E2E\u52A9\u7528\u6237\u533A\u5206\u4E0D\u540C\u5C42\u7EA7\u7684\u805A\u5408\u7ED3\u679C\u3002\u5982\u679C\u4F60\u60F3\u786E\u5B9A\u67D0\u4E00\u884C\u7684\u805A\u5408\u5C42\u7EA7\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 GROUPING \u51FD\u6570\u5BF9\u6240\u6709\u7684 GROUP BY \u5217\u8FDB\u884C\u8BA1\u7B97\uFF0C\u56E0\u4E3A\u5355\u5217\u7684\u8BA1\u7B97\u7ED3\u679C\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GROUPING_ID \u51FD\u6570\u6BD4 GROUPING \u66F4\u5F3A\u5927\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u540C\u65F6\u5BF9\u591A\u5217\u8FDB\u884C\u68C0\u6D4B\u3002GROUPING_ID \u51FD\u6570\u63A5\u53D7\u591A\u4E2A\u5217\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8BE5\u6574\u6570\u901A\u8FC7\u4E8C\u8FDB\u5236\u4F4D\u8868\u793A\u591A\u4E2A\u5217\u7684\u805A\u5408\u72B6\u6001\u3002\u5F53\u4F7F\u7528\u8868\u6216\u7269\u5316\u89C6\u56FE\u4FDD\u5B58\u8BA1\u7B97\u7ED3\u679C\u65F6\uFF0C\u4F7F\u7528 GROUPING \u51FD\u6570\u8868\u793A\u805A\u5408\u7684\u4E0D\u540C\u5C42\u7EA7\u4F1A\u5360\u7528\u8F83\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u4F7F\u7528 GROUPING_ID \u66F4\u52A0\u5408\u9002\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5 CUBE(a, b) \u4E3A\u4F8B\uFF0C\u5176 GROUPING_ID \u53EF\u4EE5\u8868\u793A\u4E3A\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u805A\u5408\u5C42\u7EA7"}),(0,r.jsx)(e.th,{children:"Bit Vector"}),(0,r.jsx)(e.th,{children:"GROUPING_ID"}),(0,r.jsx)(e.th,{children:"GROUPING(a)"}),(0,r.jsx)(e.th,{children:"GROUPING(b)"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"a,b"}),(0,r.jsx)(e.td,{children:"0 0"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"a"}),(0,r.jsx)(e.td,{children:"0 1"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"b"}),(0,r.jsx)(e.td,{children:"1 0"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Grand Total"}),(0,r.jsx)(e.td,{children:"1 1"}),(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u8BED\u6CD5\u548C\u793A\u4F8B"})}),"\n",(0,r.jsx)(e.p,{children:"\u793A\u4F8B SQL \u67E5\u8BE2\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT  \n    year(d_date),  \n    i_category,  \n    SUM(ss_net_paid) AS total_sum,  \n    GROUPING(year(d_date)),  \n    GROUPING(i_category),  \n    GROUPING_ID(year(d_date), i_category)  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND year(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY CUBE(year(d_date), i_category);\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n| year(d_date) | i_category  | total_sum  | GROUPING(year(d_date)) | GROUPING(i_category) | GROUPING_ID(year(d_date), i_category) |  \n+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n| 1998         | Electronics | 2155952.32 | 0                      | 0                    | 0                                     |  \n| 1998         | Books       | 2213703.82 | 0                      | 0                    | 0                                     |  \n| 1999         | Electronics | 2296244.59 | 0                      | 0                    | 0                                     |  \n| 1999         | Books       | 2024473.87 | 0                      | 0                    | 0                                     |  \n| 1998         | NULL        | 4369656.14 | 0                      | 1                    | 1                                     |  \n| 1999         | NULL        | 4320718.46 | 0                      | 1                    | 1                                     |  \n| NULL         | Electronics | 4452196.91 | 1                      | 0                    | 2                                     |  \n| NULL         | Books       | 4238177.69 | 1                      | 0                    | 2                                     |  \n| NULL         | NULL        | 8690374.60 | 1                      | 1                    | 3                                     |  \n+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n9 rows in set (0.12 sec)\n"})}),"\n",(0,r.jsx)(e.h3,{id:"grouping-sets",children:"GROUPING SETS"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. \u4F7F\u7528\u573A\u666F"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5F53\u9700\u8981\u6709\u9009\u62E9\u5730\u6307\u5B9A\u8981\u521B\u5EFA\u7684\u7EC4\u96C6\uFF0C\u53EF\u4EE5\u5728 ",(0,r.jsx)(e.code,{children:"GROUP BY"})," \u5B50\u53E5\u4E2D\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u8868\u8FBE\u5F0F\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u5141\u8BB8\u7528\u6237\u8DE8\u591A\u4E2A\u7EF4\u5EA6\u8FDB\u884C\u7CBE\u786E\u6307\u5B9A\uFF0C\u800C\u65E0\u9700\u8BA1\u7B97\u6574\u4E2A CUBE\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7531\u4E8E CUBE \u67E5\u8BE2\u901A\u5E38\u6D88\u8017\u8F83\u591A\u8D44\u6E90\uFF0C\u5F53\u4EC5\u5BF9\u5C11\u6570\u51E0\u4E2A\u7EF4\u5EA6\u611F\u5174\u8DA3\u65F6\uFF0C\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u53EF\u4EE5\u63D0\u5347\u67E5\u8BE2\u7684\u6267\u884C\u6548\u7387\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u8BED\u6CD5\u548C\u793A\u4F8B"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT \u2026 GROUP BY GROUPING SETS(grouping_column_reference_list)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u4F60\u9700\u8981\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6BCF\u5E74\u5EA6\u6BCF\u7C7B\u4EA7\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6BCF\u5E74\u5EA6\u5728\u6BCF\u4E2A\u5DDE\u7684\u9500\u552E\u989D\u5C0F\u8BA1"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6BCF\u5E74\u5EA6\u6BCF\u4E2A\u5DDE\u6BCF\u4E2A\u4EA7\u54C1\u7684\u9500\u552E\u989D\u5C0F\u8BA1"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u90A3\u4E48\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u6765\u6307\u5B9A\u8FD9\u4E9B\u7EF4\u5EA6\u5E76\u8FDB\u884C\u6C47\u603B\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT  \n    YEAR(d_date),  \n    i_category,  \n    ca_state,  \n    SUM(ss_net_paid) AS total_sum  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND YEAR(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY GROUPING SETS(  \n    (YEAR(d_date), i_category),   \n    (YEAR(d_date), ca_state),   \n    (YEAR(d_date), ca_state, i_category)  \n)  \nORDER BY YEAR(d_date), i_category, ca_state;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u67E5\u8BE2\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+--------------+-------------+----------+------------+  \n| YEAR(d_date) | i_category  | ca_state | total_sum  |  \n+--------------+-------------+----------+------------+  \n| 1998         | NULL        | AK       | 1402539.19 |  \n| 1998         | NULL        | LA       | 2967116.95 |  \n| 1998         | Books       | NULL     | 2213703.82 |  \n| 1998         | Books       | AK       |  719911.29 |  \n| 1998         | Books       | LA       | 1493792.53 |  \n| 1998         | Electronics | NULL     | 2155952.32 |  \n| 1998         | Electronics | AK       |  682627.90 |  \n| 1998         | Electronics | LA       | 1473324.42 |  \n| 1999         | NULL        | AK       | 1272659.14 |  \n| 1999         | NULL        | LA       | 3048059.32 |  \n| 1999         | Books       | NULL     | 2024473.87 |  \n| 1999         | Books       | AK       |  590880.07 |  \n| 1999         | Books       | LA       | 1433593.80 |  \n| 1999         | Electronics | NULL     | 2296244.59 |  \n| 1999         | Electronics | AK       |  681779.07 |  \n| 1999         | Electronics | LA       | 1614465.52 |  \n+--------------+-------------+----------+------------+  \n16 rows in set (0.11 sec)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4E0A\u9762\u7684\u5199\u6CD5\u7B49\u4EF7\u4E8E\u4F7F\u7528 CUBE\uFF0C\u4F46\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"grouping_id"})," \u6307\u5B9A\u4E86\u5177\u4F53\u7684\u805A\u5408\u7EC4\u5408\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT  \n    SUM(ss_net_paid) AS total_sum,  \n    YEAR(d_date),  \n    i_category,  \n    ca_state  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND YEAR(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY CUBE(YEAR(d_date), ca_state, i_category)  \nHAVING grouping_id(YEAR(d_date), ca_state, i_category) = 0  \n    OR grouping_id(YEAR(d_date), ca_state, i_category) = 2   \n    OR grouping_id(YEAR(d_date), ca_state, i_category) = 1;\n"})}),"\n",(0,r.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,r.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"CUBE"})," \u4F1A\u8BA1\u7B97\u6240\u6709\u53EF\u80FD\u7684\u805A\u5408\u5C42\u7EA7\uFF08\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u662F\u516B\u79CD\uFF09\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4F60\u53EF\u80FD\u53EA\u5BF9\u5176\u4E2D\u7684\u51E0\u79CD\u611F\u5174\u8DA3\u3002"]})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"3. \u8BED\u4E49\u7B49\u4EF7"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"GROUPING SETS \u4E0E GROUP BY UNION ALL"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u8BED\u53E5\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u67E5\u8BE2\u7ED3\u679C\u7B49\u4EF7\u4E8E\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"UNION ALL"})," \u8FDE\u63A5\u7684\u591A\u4E2A ",(0,r.jsx)(e.code,{children:"GROUP BY"})," \u67E5\u8BE2\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT k1, k2, SUM(k3) FROM t GROUP BY k1, k2  \nUNION ALL  \nSELECT k1, NULL, SUM(k3) FROM t GROUP BY k1  \nUNION ALL  \nSELECT NULL, k2, SUM(k3) FROM t GROUP BY k2  \nUNION ALL  \nSELECT NULL, NULL, SUM(k3) FROM t;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"UNION ALL"})," \u8FDE\u63A5\u7684\u67E5\u8BE2\u8F83\u957F\uFF0C\u540C\u65F6\u9700\u8981\u591A\u6B21\u626B\u63CF\u57FA\u8868\uFF0C\u56E0\u6B64\u5728\u4E66\u5199\u548C\u6267\u884C\u4E0A\u7684\u6548\u7387\u90FD\u8F83\u4F4E\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"GROUPING SETS \u4E0E ROLLUP"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ROLLUP"})," \u662F\u5BF9 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"})," \u7684\u6269\u5C55\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT a, b, c, SUM(d) FROM tab1 GROUP BY ROLLUP(a, b, c);\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD9\u4E2A ",(0,r.jsx)(e.code,{children:"ROLLUP"})," \u7B49\u4EF7\u4E8E\u4E0B\u9762\u7684 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GROUPING SETS (  \n    (a, b, c),  \n    (a, b),  \n    (a),  \n    ()  \n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"GROUPING SETS \u4E0E CUBE"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"CUBE(a, b, c)"})," \u7B49\u4EF7\u4E8E\u4E0B\u9762\u7684 ",(0,r.jsx)(e.code,{children:"GROUPING SETS"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GROUPING SETS (  \n    (a, b, c),  \n    (a, b),  \n    (a, c),  \n    (a),  \n    (b, c),  \n    (b),  \n    (c),  \n    ()  \n);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9644\u5F55",children:"\u9644\u5F55"}),"\n",(0,r.jsxs)(e.p,{children:["\u5EFA\u8868\u8BED\u53E5\u548C\u6570\u636E\u6587\u4EF6\u89C1",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/query-data/window-function",children:"\u5206\u6790\u51FD\u6570 (\u7A97\u53E3\u51FD\u6570\uFF09"}),"\u9644\u5F55\u3002"]})]})}function _(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var d=s(667294);let r={},a=d.createContext(r);function c(n){let e=d.useContext(a);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),d.createElement(a.Provider,{value:e},n.children)}}}]);