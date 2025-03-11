"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["868745"],{443156:function(n,e,l){l.r(e),l.d(e,{default:()=>t,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>h,contentTitle:()=>r});var s=JSON.parse('{"id":"table-design/schema-change","title":"Schema \u53D8\u66F4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/schema-change.md","sourceDirName":"table-design","slug":"/table-design/schema-change","permalink":"/zh-CN/docs/table-design/schema-change","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Schema \u53D8\u66F4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"N-Gram \u7D22\u5F15","permalink":"/zh-CN/docs/table-design/index/ngram-bloomfilter-index"},"next":{"title":"\u81EA\u589E\u5217","permalink":"/zh-CN/docs/table-design/auto-increment"}}'),c=l("785893"),i=l("250065");let d={title:"Schema \u53D8\u66F4",language:"zh-CN"},r=void 0,a={},h=[{value:"\u539F\u7406\u4ECB\u7ECD",id:"\u539F\u7406\u4ECB\u7ECD",level:2},{value:"\u8F7B\u91CF\u7EA7 Schema Change",id:"\u8F7B\u91CF\u7EA7-schema-change",level:3},{value:"\u91CD\u91CF\u7EA7 Schema Change",id:"\u91CD\u91CF\u7EA7-schema-change",level:3},{value:"\u4F5C\u4E1A\u7BA1\u7406",id:"\u4F5C\u4E1A\u7BA1\u7406",level:2},{value:"\u67E5\u770B\u4F5C\u4E1A",id:"\u67E5\u770B\u4F5C\u4E1A",level:3},{value:"\u53D6\u6D88\u4F5C\u4E1A",id:"\u53D6\u6D88\u4F5C\u4E1A",level:3},{value:"\u4F7F\u7528\u4E3E\u4F8B",id:"\u4F7F\u7528\u4E3E\u4F8B",level:2},{value:"\u4FEE\u6539\u5217\u540D\u79F0",id:"\u4FEE\u6539\u5217\u540D\u79F0",level:3},{value:"\u6DFB\u52A0\u4E00\u5217",id:"\u6DFB\u52A0\u4E00\u5217",level:3},{value:"\u6DFB\u52A0\u591A\u5217",id:"\u6DFB\u52A0\u591A\u5217",level:3},{value:"\u5220\u9664\u5217",id:"\u5220\u9664\u5217",level:3},{value:"\u4FEE\u6539\u5217\u7C7B\u578B\u548C\u5217\u4F4D\u7F6E",id:"\u4FEE\u6539\u5217\u7C7B\u578B\u548C\u5217\u4F4D\u7F6E",level:3},{value:"\u91CD\u65B0\u6392\u5E8F",id:"\u91CD\u65B0\u6392\u5E8F",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u76F8\u5173\u914D\u7F6E",id:"\u76F8\u5173\u914D\u7F6E",level:2},{value:"FE \u914D\u7F6E",id:"fe-\u914D\u7F6E",level:3},{value:"BE \u914D\u7F6E",id:"be-\u914D\u7F6E",level:3}];function x(n){let e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7",(0,c.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN",children:"Alter Table"})," \u64CD\u4F5C\u6765\u4FEE\u6539 Doris \u8868\u7684 Schema\u3002Schema \u53D8\u66F4\u4E3B\u8981\u6D89\u53CA\u5217\u7684\u4FEE\u6539\u548C\u7D22\u5F15\u7684\u53D8\u5316\u3002\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u5217\u76F8\u5173\u7684 Schema \u53D8\u66F4\uFF0C\u5173\u4E8E\u7D22\u5F15\u76F8\u5173\u7684\u53D8\u66F4\uFF0C\u8BF7\u53C2\u8003",(0,c.jsx)(e.a,{href:"/zh-CN/docs/table-design/index/index-overview",children:"\u8868\u7D22\u5F15"})," \u4E86\u89E3\u4E0D\u540C\u7D22\u5F15\u7684\u53D8\u66F4\u65B9\u6CD5\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u539F\u7406\u4ECB\u7ECD",children:"\u539F\u7406\u4ECB\u7ECD"}),"\n",(0,c.jsx)(e.p,{children:"Doris \u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684 Schema Change \u64CD\u4F5C\uFF1A\u8F7B\u91CF\u7EA7 Schema Change \u548C\u91CD\u91CF\u7EA7 Schema Change\u3002\u5B83\u4EEC\u7684\u533A\u522B\u4E3B\u8981\u4F53\u73B0\u5728\u6267\u884C\u8FC7\u7A0B\u7684\u590D\u6742\u6027\u3001\u6267\u884C\u901F\u5EA6\u548C\u8D44\u6E90\u6D88\u8017\u4E0A\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u7279\u6027"}),(0,c.jsx)(e.th,{children:"\u8F7B\u91CF\u7EA7 Schema Change"}),(0,c.jsx)(e.th,{children:"\u91CD\u91CF\u7EA7 Schema Change"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6267\u884C\u901F\u5EA6"}),(0,c.jsx)(e.td,{children:"\u79D2\u7EA7\uFF08\u51E0\u4E4E\u5B9E\u65F6\uFF09"}),(0,c.jsx)(e.td,{children:"\u5206\u949F\u7EA7\u3001\u5C0F\u65F6\u7EA7\u3001\u5929\u7EA7\uFF08\u4F9D\u8D56\u8868\u7684\u6570\u636E\u91CF\uFF0C\u6570\u636E\u91CF\u8D8A\u5927\uFF0C\u6267\u884C\u8D8A\u6162\uFF09"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u662F\u5426\u9700\u8981\u6570\u636E\u91CD\u5199"}),(0,c.jsx)(e.td,{children:"\u4E0D\u9700\u8981"}),(0,c.jsx)(e.td,{children:"\u9700\u8981\uFF0C\u6D89\u53CA\u6570\u636E\u6587\u4EF6\u7684\u91CD\u5199"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u7CFB\u7EDF\u6027\u80FD\u5F71\u54CD"}),(0,c.jsx)(e.td,{children:"\u5F71\u54CD\u8F83\u5C0F"}),(0,c.jsx)(e.td,{children:"\u53EF\u80FD\u5F71\u54CD\u7CFB\u7EDF\u6027\u80FD\uFF0C\u5C24\u5176\u662F\u5728\u6570\u636E\u8F6C\u6362\u8FC7\u7A0B\u4E2D"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u8D44\u6E90\u6D88\u8017"}),(0,c.jsx)(e.td,{children:"\u8F83\u4F4E"}),(0,c.jsx)(e.td,{children:"\u8F83\u9AD8\uFF0C\u4F1A\u5360\u7528\u8BA1\u7B97\u8D44\u6E90\u91CD\u65B0\u7EC4\u7EC7\u6570\u636E\uFF0C\u8FC7\u7A0B\u4E2D\u6D89\u53CA\u5230\u7684\u8868\u7684\u6570\u636E\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u7FFB\u500D\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u64CD\u4F5C\u7C7B\u578B"}),(0,c.jsx)(e.td,{children:"\u589E\u52A0\u3001\u5220\u9664 Value \u5217\uFF0C\u4FEE\u6539\u5217\u540D\uFF0C\u4FEE\u6539 VARCHAR \u957F\u5EA6"}),(0,c.jsx)(e.td,{children:"\u4FEE\u6539\u5217\u7684\u6570\u636E\u7C7B\u578B\u3001\u66F4\u6539\u4E3B\u952E\u3001\u4FEE\u6539\u5217\u7684\u987A\u5E8F\u7B49"})]})]})]}),"\n",(0,c.jsx)(e.h3,{id:"\u8F7B\u91CF\u7EA7-schema-change",children:"\u8F7B\u91CF\u7EA7 Schema Change"}),"\n",(0,c.jsx)(e.p,{children:"\u8F7B\u91CF\u7EA7 Schema Change \u662F\u6307\u4E0D\u6D89\u53CA\u6570\u636E\u91CD\u5199\u7684\u7B80\u5355\u6A21\u5F0F\u66F4\u6539\u64CD\u4F5C\u3002\u8FD9\u4E9B\u64CD\u4F5C\u901A\u5E38\u5728\u5143\u6570\u636E\u7EA7\u522B\u8FDB\u884C\uFF0C\u4EC5\u9700\u8981\u4FEE\u6539\u8868\u7684\u5143\u6570\u636E\uFF0C\u800C\u4E0D\u6D89\u53CA\u6570\u636E\u6587\u4EF6\u7684\u7269\u7406\u4FEE\u6539\u3002\u8F7B\u91CF\u7EA7 Schema Change \u64CD\u4F5C\u901A\u5E38\u80FD\u591F\u5728\u79D2\u7EA7\u522B\u5B8C\u6210\uFF0C\u4E0D\u4F1A\u5BF9\u7CFB\u7EDF\u6027\u80FD\u9020\u6210\u663E\u8457\u5F71\u54CD\u3002\u8F7B\u91CF\u7EA7 Schema Change \u5305\u62EC\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u589E\u52A0\u6216\u5220\u9664 value \u5217"}),"\n",(0,c.jsx)(e.li,{children:"\u66F4\u6539\u5217\u540D"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 VARCHAR \u5217\u7684\u957F\u5EA6\uFF08UNIQUE \u548C DUP \u8868 Key \u5217\u9664\u5916\uFF09\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u91CD\u91CF\u7EA7-schema-change",children:"\u91CD\u91CF\u7EA7 Schema Change"}),"\n",(0,c.jsx)(e.p,{children:"\u91CD\u91CF\u7EA7 Schema Change \u6D89\u53CA\u5230\u6570\u636E\u6587\u4EF6\u7684\u91CD\u5199\u6216\u8F6C\u6362\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u76F8\u5BF9\u590D\u6742\uFF0C\u901A\u5E38\u9700\u8981\u501F\u52A9 Doris \u7684 Backend\uFF08BE\uFF09\u8FDB\u884C\u6570\u636E\u7684\u5B9E\u9645\u4FEE\u6539\u6216\u91CD\u65B0\u7EC4\u7EC7\u3002\u91CD\u91CF\u7EA7 Schema Change \u64CD\u4F5C\u901A\u5E38\u6D89\u53CA\u5BF9\u8868\u6570\u636E\u7ED3\u6784\u7684\u6DF1\u5EA6\u53D8\u66F4\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u5B58\u50A8\u7684\u7269\u7406\u5E03\u5C40\u3002\u6240\u6709\u4E0D\u652F\u6301\u8F7B\u91CF\u7EA7 Schema Change \u7684\u64CD\u4F5C\uFF0C\u5747\u5C5E\u4E8E\u91CD\u91CF\u7EA7 Schema Change\uFF0C\u6BD4\u5982\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u66F4\u6539\u5217\u7684\u6570\u636E\u7C7B\u578B"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u5217\u7684\u6392\u5E8F\u987A\u5E8F"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:'\u91CD\u91CF\u7EA7\u64CD\u4F5C\u4F1A\u5728\u540E\u53F0\u542F\u52A8\u4E00\u4E2A\u4EFB\u52A1\u8FDB\u884C\u6570\u636E\u8F6C\u6362\u3002\u540E\u53F0\u4EFB\u52A1\u4F1A\u5BF9\u8868\u7684\u6BCF\u4E2A tablet \u8FDB\u884C\u8F6C\u6362\uFF0C\u6309 tablet \u4E3A\u5355\u4F4D\uFF0C\u5C06\u539F\u59CB\u6570\u636E\u91CD\u5199\u5230\u65B0\u7684\u6570\u636E\u6587\u4EF6\u4E2D\u3002\u6570\u636E\u8F6C\u6362\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u6570\u636E"\u53CC\u5199"\u73B0\u8C61\uFF0C\u5373\u5728\u8F6C\u6362\u671F\u95F4\uFF0C\u65B0\u6570\u636E\u540C\u65F6\u5199\u5165\u65B0 tablet \u65E7 tablet \u4E2D\u3002\u5B8C\u6210\u6570\u636E\u8F6C\u6362\u540E\uFF0C\u65E7 tablet \u4F1A\u88AB\u5220\u9664\uFF0C\u65B0 tablet \u5C06\u53D6\u800C\u4EE3\u4E4B\u3002'}),"\n",(0,c.jsx)(e.h2,{id:"\u4F5C\u4E1A\u7BA1\u7406",children:"\u4F5C\u4E1A\u7BA1\u7406"}),"\n",(0,c.jsx)(e.h3,{id:"\u67E5\u770B\u4F5C\u4E1A",children:"\u67E5\u770B\u4F5C\u4E1A"}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE",children:(0,c.jsx)(e.code,{children:"SHOW ALTER TABLE COLUMN"})})," \u547D\u4EE4\u67E5\u770B Schema Change \u4F5C\u4E1A\u8FDB\u5EA6\u3002\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u6B63\u5728\u6267\u884C\u6216\u5DF2\u7ECF\u5B8C\u6210\u7684 Schema Change \u4F5C\u4E1A\u3002\u5F53\u4E00\u6B21 Schema Change \u4F5C\u4E1A\u6D89\u53CA\u5230\u7269\u5316\u89C6\u56FE\u65F6\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u663E\u793A\u591A\u884C\uFF0C\u6BCF\u884C\u5BF9\u5E94\u4E00\u4E2A\u7269\u5316\u89C6\u56FE\u3002\u4E3E\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"mysql > SHOW ALTER TABLE COLUMN\\G;\n*************************** 1. row ***************************\n        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg:\n     Progress: NULL\n      Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u53D6\u6D88\u4F5C\u4E1A",children:"\u53D6\u6D88\u4F5C\u4E1A"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u4F5C\u4E1A\u72B6\u6001\u4E0D\u4E3A FINISHED \u6216 CANCELLED \u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53D6\u6D88 Schema Change \u4F5C\u4E1A\uFF1A"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CANCEL ALTER TABLE COLUMN FROM tbl_name;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4F7F\u7528\u4E3E\u4F8B",children:"\u4F7F\u7528\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.h3,{id:"\u4FEE\u6539\u5217\u540D\u79F0",children:"\u4FEE\u6539\u5217\u540D\u79F0"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE [database.]table RENAME COLUMN old_column_name new_column_name;\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5177\u4F53\u8BED\u6CD5\u53C2\u8003",(0,c.jsx)(e.a,{href:"../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME",children:"ALTER TABLE RENAME"}),"\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u6DFB\u52A0\u4E00\u5217",children:"\u6DFB\u52A0\u4E00\u5217"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 Value \u5217\uFF0C\u9700\u8981\u6307\u5B9A ",(0,c.jsx)(e.code,{children:"agg_type"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u975E\u805A\u5408\u6A21\u578B\uFF08\u5982 DUPLICATE KEY\uFF09\u5982\u679C\u589E\u52A0 Key \u5217\uFF0C\u9700\u8981\u6307\u5B9A KEY \u5173\u952E\u5B57\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.em,{children:"\u5F80\u975E\u805A\u5408\u8868\u6DFB\u52A0\u5217"})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS example_db.my_table(\n    col1 int,\n    col2 int,\n    col3 int,\n    col4 int,\n    col5 int\n) DUPLICATE KEY(col1, col2, col3)\nDISTRIBUTED BY RANDOM BUCKETS 10;\n"})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsxs)(e.li,{children:["\u5411 ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u7684 col1 \u540E\u6DFB\u52A0\u4E00\u4E2A Key \u5217 ",(0,c.jsx)(e.code,{children:"key_col"})]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ADD COLUMN key_col INT KEY DEFAULT "0" AFTER col1;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsxs)(e.li,{children:["\u5411 ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u7684 col4 \u540E\u6DFB\u52A0\u4E00\u4E2A Value \u5217 ",(0,c.jsx)(e.code,{children:"value_col"})]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ADD COLUMN value_col INT DEFAULT "0" AFTER col4;\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.em,{children:"\u5F80\u805A\u5408\u8868\u6DFB\u52A0\u5217"})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_db.my_table(\n    col1 int,\n    col2 int,\n    col3 int,\n    col4 int SUM,\n    col5 varchar(32) REPLACE DEFAULT "abc"\n) AGGREGATE KEY(col1, col2, col3)\nDISTRIBUTED BY HASH(col1) BUCKETS 10;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsxs)(e.li,{children:["\u5411 ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u7684 col1 \u540E\u6DFB\u52A0\u4E00\u4E2A Key \u5217 ",(0,c.jsx)(e.code,{children:"key_col"})]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ADD COLUMN key_col INT DEFAULT "0" AFTER col1;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsxs)(e.li,{children:["\u5411 ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u7684 col4 \u540E\u6DFB\u52A0\u4E00\u4E2A Value \u5217 ",(0,c.jsx)(e.code,{children:"value_col"})," SUM \u805A\u5408\u7C7B\u578B"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table ADD COLUMN value_col INT SUM DEFAULT "0" AFTER col4;\n'})}),"\n",(0,c.jsx)(e.h3,{id:"\u6DFB\u52A0\u591A\u5217",children:"\u6DFB\u52A0\u591A\u5217"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 Value \u5217\uFF0C\u9700\u8981\u6307\u5B9A ",(0,c.jsx)(e.code,{children:"agg_type"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u805A\u5408\u6A21\u578B\u5982\u679C\u589E\u52A0 Key \u5217\uFF0C\u9700\u8981\u6307\u5B9A KEY \u5173\u952E\u5B57"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.em,{children:"\u5411\u805A\u5408\u8868\u6DFB\u52A0\u591A\u5217"})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_db.my_table(\n    col1 int,\n    col2 int,\n    col3 int,\n    col4 int SUM,\n    col5 varchar(32) REPLACE DEFAULT "abc"\n) AGGREGATE KEY(col1, col2, col3)\nDISTRIBUTED BY HASH(col1) BUCKETS 10;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsxs)(e.li,{children:["\u5411 ",(0,c.jsx)(e.code,{children:"example_db.my_table"}),"\u6DFB\u52A0\u591A\u5217 (\u805A\u5408\u6A21\u578B)"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN (c1 INT DEFAULT "1", c2 FLOAT SUM DEFAULT "0");\n'})}),"\n",(0,c.jsx)(e.h3,{id:"\u5220\u9664\u5217",children:"\u5220\u9664\u5217"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E0D\u80FD\u5220\u9664\u5206\u533A\u5217"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E0D\u80FD\u5220\u9664 UNIQUE \u7684 KEY \u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4ECE ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u5220\u9664\u4E00\u5217"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_db.my_table(\n    col1 int,\n    col2 int,\n    col3 int,\n    col4 int SUM,\n    col5 varchar(32) REPLACE DEFAULT "abc"\n) AGGREGATE KEY(col1, col2, col3)\nDISTRIBUTED BY HASH(col1) BUCKETS 10;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsxs)(e.li,{children:["\u4ECE ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u5220\u9664",(0,c.jsx)(e.code,{children:"col3"}),"\u5217"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table DROP COLUMN col4;\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u4FEE\u6539\u5217\u7C7B\u578B\u548C\u5217\u4F4D\u7F6E",children:"\u4FEE\u6539\u5217\u7C7B\u578B\u548C\u5217\u4F4D\u7F6E"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u805A\u5408\u6A21\u578B\u5982\u679C\u4FEE\u6539 Value \u5217\uFF0C\u9700\u8981\u6307\u5B9A ",(0,c.jsx)(e.code,{children:"agg_type"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u975E\u805A\u5408\u7C7B\u578B\u5982\u679C\u4FEE\u6539 Key \u5217\uFF0C\u9700\u8981\u6307\u5B9A ",(0,c.jsx)(e.strong,{children:"KEY"})," \u5173\u952E\u5B57"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u53EA\u80FD\u4FEE\u6539\u5217\u7684\u7C7B\u578B\uFF0C\u5217\u7684\u5176\u4ED6\u5C5E\u6027\u7EF4\u6301\u539F\u6837"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5206\u533A\u5217\u548C\u5206\u6876\u5217\u4E0D\u80FD\u505A\u4EFB\u4F55\u4FEE\u6539"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u7C7B\u578B\u7684\u8F6C\u6362\uFF08\u7528\u6237\u9700\u8981\u6CE8\u610F\u7CBE\u5EA6\u635F\u5931\uFF09"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE \u7C7B\u578B\u5411\u8303\u56F4\u66F4\u5927\u7684\u6570\u5B57\u7C7B\u578B\u8F6C\u6362"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL \u8F6C\u6362\u6210 VARCHAR"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"VARCHAR \u652F\u6301\u4FEE\u6539\u6700\u5927\u957F\u5EA6"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"VARCHAR/CHAR \u8F6C\u6362\u6210 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:'VARCHAR/CHAR \u8F6C\u6362\u6210 DATE (\u76EE\u524D\u652F\u6301"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d" \u516D\u79CD\u683C\u5F0F\u5316\u683C\u5F0F)'}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["DATETIME \u8F6C\u6362\u6210 DATE (\u4EC5\u4FDD\u7559\u5E74 - \u6708 - \u65E5\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A ",(0,c.jsx)(e.code,{children:"2019-12-09 21:47:05"})," <--\x3e ",(0,c.jsx)(e.code,{children:"2019-12-09"}),")"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["DATE \u8F6C\u6362\u6210 DATETIME (\u65F6\u5206\u79D2\u81EA\u52A8\u8865\u96F6\uFF0C\u4F8B\u5982\uFF1A ",(0,c.jsx)(e.code,{children:"2019-12-09"})," <--\x3e ",(0,c.jsx)(e.code,{children:"2019-12-09 00:00:00"}),")"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"FLOAT \u8F6C\u6362\u6210 DOUBLE"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"INT \u8F6C\u6362\u6210 DATE (\u5982\u679C INT \u7C7B\u578B\u6570\u636E\u4E0D\u5408\u6CD5\u5219\u8F6C\u6362\u5931\u8D25\uFF0C\u539F\u59CB\u6570\u636E\u4E0D\u53D8)"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u9664 DATE \u4E0E DATETIME \u4EE5\u5916\u90FD\u53EF\u4EE5\u8F6C\u6362\u6210 STRING\uFF0C\u4F46\u662F STRING \u4E0D\u80FD\u8F6C\u6362\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_db.my_table(\n    col0 int,\n    col1 int DEFAULT "1",\n    col2 int,\n    col3 varchar(32),\n    col4 int SUM,\n    col5 varchar(32) REPLACE DEFAULT "abc"\n) AGGREGATE KEY(col0, col1, col2, col3)\nDISTRIBUTED BY HASH(col0) BUCKETS 10;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 Key \u5217 col1 \u7684\u7C7B\u578B\u4E3A BIGINT\uFF0C\u5E76\u79FB\u52A8\u5230 col2 \u5217\u540E\u9762"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u65E0\u8BBA\u662F\u4FEE\u6539 Key \u5217\u8FD8\u662F Value \u5217\u90FD\u9700\u8981\u58F0\u660E\u5B8C\u6574\u7684 Column \u4FE1\u606F"}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsx)(e.li,{children:'\u4FEE\u6539 Base Table \u7684 val1 \u5217\u6700\u5927\u957F\u5EA6\u3002\u539F val1 \u4E3A (val1 VARCHAR(32) REPLACE DEFAULT "abc")'}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table \nMODIFY COLUMN col5 VARCHAR(64) REPLACE DEFAULT "abc";\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u53EA\u80FD\u4FEE\u6539\u5217\u7684\u7C7B\u578B\uFF0C\u5217\u7684\u5176\u4ED6\u5C5E\u6027\u9700\u8981\u7EF4\u6301\u539F\u6837"}),"\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539 Key \u5217\u7684\u67D0\u4E2A\u5B57\u6BB5\u7684\u957F\u5EA6"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nMODIFY COLUMN col3 varchar(50) KEY NULL comment 'to 50';\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u91CD\u65B0\u6392\u5E8F",children:"\u91CD\u65B0\u6392\u5E8F"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u6240\u6709\u5217\u90FD\u8981\u5199\u51FA\u6765"}),"\n",(0,c.jsx)(e.li,{children:"Value \u5217\u5728 Key \u5217\u4E4B\u540E"}),"\n"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u5EFA\u8868\u8BED\u53E5"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_db.my_table(\n    k1 int DEFAULT "1",\n    k2 int,\n    k3 varchar(32),\n    k4 date,\n    v1 int SUM,\n    v2 int MAX,\n) AGGREGATE KEY(k1, k2, k3, k4)\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsxs)(e.li,{children:["\u91CD\u65B0\u6392\u5E8F ",(0,c.jsx)(e.code,{children:"example_db.my_table"})," \u4E2D\u7684\u5217"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,k4,v2,v1);\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E00\u5F20\u8868\u5728\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u6709\u4E00\u4E2A Schema Change \u4F5C\u4E1A\u5728\u8FD0\u884C\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5206\u533A\u5217\u548C\u5206\u6876\u5217\u4E0D\u80FD\u4FEE\u6539\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u805A\u5408\u8868\u4E2D\u6709 REPLACE \u65B9\u5F0F\u805A\u5408\u7684 Value \u5217\uFF0C\u5219\u4E0D\u5141\u8BB8\u5220\u9664 Key \u5217\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"Unique \u8868\u4E0D\u5141\u8BB8\u5220\u9664 Key \u5217\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5728\u65B0\u589E\u805A\u5408\u7C7B\u578B\u4E3A SUM \u6216\u8005 REPLACE \u7684 Value \u5217\u65F6\uFF0C\u8BE5\u5217\u7684\u9ED8\u8BA4\u503C\u5BF9\u5386\u53F2\u6570\u636E\u6CA1\u6709\u542B\u4E49\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u56E0\u4E3A\u5386\u53F2\u6570\u636E\u5DF2\u7ECF\u5931\u53BB\u660E\u7EC6\u4FE1\u606F\uFF0C\u6240\u4EE5\u9ED8\u8BA4\u503C\u7684\u53D6\u503C\u5E76\u4E0D\u80FD\u5B9E\u9645\u53CD\u6620\u805A\u5408\u540E\u7684\u53D6\u503C\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5F53\u4FEE\u6539\u5217\u7C7B\u578B\u65F6\uFF0C\u9664 Type \u4EE5\u5916\u7684\u5B57\u6BB5\u90FD\u9700\u8981\u6309\u539F\u5217\u4E0A\u7684\u4FE1\u606F\u8865\u5168\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6CE8\u610F\uFF0C\u9664\u65B0\u7684\u5217\u7C7B\u578B\u5916\uFF0C\u5982\u805A\u5408\u65B9\u5F0F\uFF0CNullable \u5C5E\u6027\uFF0C\u4EE5\u53CA\u9ED8\u8BA4\u503C\u90FD\u8981\u6309\u7167\u539F\u4FE1\u606F\u8865\u5168\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u4FEE\u6539\u805A\u5408\u7C7B\u578B\u3001Nullable \u5C5E\u6027\u548C\u9ED8\u8BA4\u503C\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u76F8\u5173\u914D\u7F6E",children:"\u76F8\u5173\u914D\u7F6E"}),"\n",(0,c.jsx)(e.h3,{id:"fe-\u914D\u7F6E",children:"FE \u914D\u7F6E"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"alter_table_timeout_second"}),"\uFF1A\u4F5C\u4E1A\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\uFF0C86400 \u79D2\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"be-\u914D\u7F6E",children:"BE \u914D\u7F6E"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"alter_tablet_worker_count"}),"\uFF1A\u5728 BE \u7AEF\u7528\u4E8E\u6267\u884C\u5386\u53F2\u6570\u636E\u8F6C\u6362\u7684\u7EBF\u7A0B\u6570\u3002\u9ED8\u8BA4\u4E3A 3\u3002\u5982\u679C\u5E0C\u671B\u52A0\u5FEB Schema Change \u4F5C\u4E1A\u7684\u901F\u5EA6\uFF0C\u53EF\u4EE5\u9002\u5F53\u8C03\u5927\u8FD9\u4E2A\u53C2\u6570\u540E\u91CD\u542F BE\u3002\u4F46\u8FC7\u591A\u7684\u8F6C\u6362\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u5BFC\u81F4 IO \u538B\u529B\u589E\u52A0\uFF0C\u5F71\u54CD\u5176\u4ED6\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"alter_index_worker_count"}),"\uFF1A\u5728 BE \u7AEF\u7528\u4E8E\u6267\u884C\u5386\u53F2\u6570\u636E\u6784\u5EFA\u7D22\u5F15\u7684\u7EBF\u7A0B\u6570\uFF08\u6CE8\uFF1A\u5F53\u524D\u53EA\u652F\u6301\u5012\u6392\u7D22\u5F15\uFF09\u3002\u9ED8\u8BA4\u4E3A 3\u3002\u5982\u679C\u5E0C\u671B\u52A0\u5FEB Index Change \u4F5C\u4E1A\u7684\u901F\u5EA6\uFF0C\u53EF\u4EE5\u9002\u5F53\u8C03\u5927\u8FD9\u4E2A\u53C2\u6570\u540E\u91CD\u542F BE\u3002\u4F46\u8FC7\u591A\u7684\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u5BFC\u81F4 IO \u538B\u529B\u589E\u52A0\uFF0C\u5F71\u54CD\u5176\u4ED6\u64CD\u4F5C\u3002"]}),"\n"]}),"\n"]})]})}function t(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return d}});var s=l(667294);let c={},i=s.createContext(c);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);