"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["599698"],{810810:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"ecosystem/dbt-doris-adapter","title":"DBT Doris Adapter","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/ecosystem/dbt-doris-adapter.md","sourceDirName":"ecosystem","slug":"/ecosystem/dbt-doris-adapter","permalink":"/zh-CN/docs/3.0/ecosystem/dbt-doris-adapter","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DBT Doris Adapter","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DataX Doriswriter","permalink":"/zh-CN/docs/3.0/ecosystem/datax"},"next":{"title":"Seatunnel Doris Sink","permalink":"/zh-CN/docs/3.0/ecosystem/seatunnel"}}'),r=d("785893"),t=d("250065");let s={title:"DBT Doris Adapter",language:"zh-CN"},l=void 0,c={},a=[{value:"\u7248\u672C\u652F\u6301",id:"\u7248\u672C\u652F\u6301",level:2},{value:"dbt-doris adapter \u4F7F\u7528",id:"dbt-doris-adapter-\u4F7F\u7528",level:2},{value:"dbt-doris adapter \u5B89\u88C5",id:"dbt-doris-adapter-\u5B89\u88C5",level:3},{value:"dbt-doris adapter \u521D\u59CB\u5316",id:"dbt-doris-adapter-\u521D\u59CB\u5316",level:3},{value:"dbt-doris adapter \u8FD0\u884C",id:"dbt-doris-adapter-\u8FD0\u884C",level:3},{value:"dbt-doris adapter \u7269\u5316\u65B9\u5F0F",id:"dbt-doris-adapter-\u7269\u5316\u65B9\u5F0F",level:3},{value:"dbt-doris adapter seed",id:"dbt-doris-adapter-seed",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u89C6\u56FE\u6A21\u578B\u6837\u4F8B\u53C2\u8003",id:"\u89C6\u56FE\u6A21\u578B\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u8868\u6A21\u578B\u6837\u4F8B\u53C2\u8003",id:"\u8868\u6A21\u578B\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003 (duplicate \u6A21\u5F0F)",id:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003-duplicate-\u6A21\u5F0F",level:3},{value:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003 (unique \u6A21\u5F0F)",id:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003-unique-\u6A21\u5F0F",level:3},{value:"\u589E\u91CF\u6A21\u578B\u5168\u91CF\u5237\u65B0\u6837\u4F8B\u53C2\u8003",id:"\u589E\u91CF\u6A21\u578B\u5168\u91CF\u5237\u65B0\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u8BBE\u7F6E\u5206\u6876\u89C4\u5219\u6837\u4F8B\u53C2\u8003",id:"\u8BBE\u7F6E\u5206\u6876\u89C4\u5219\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u8BBE\u7F6E\u526F\u672C\u6570\u6837\u4F8B\u53C2\u8003",id:"\u8BBE\u7F6E\u526F\u672C\u6570\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u52A8\u6001\u5206\u533A\u6837\u4F8B\u53C2\u8003",id:"\u52A8\u6001\u5206\u533A\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u5E38\u89C4\u5206\u533A\u6837\u4F8B\u53C2\u8003",id:"\u5E38\u89C4\u5206\u533A\u6837\u4F8B\u53C2\u8003",level:3},{value:"\u6279\u5904\u7406\u65E5\u671F\u8BBE\u7F6E\u53C2\u6570\u6837\u4F8B\u53C2\u8003",id:"\u6279\u5904\u7406\u65E5\u671F\u8BBE\u7F6E\u53C2\u6570\u6837\u4F8B\u53C2\u8003",level:3}];function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://docs.getdbt.com/docs/introduction",children:"DBT(Data Build Tool)"})," \u662F\u4E13\u6CE8\u4E8E\u505A ELT\uFF08\u63D0\u53D6\u3001\u52A0\u8F7D\u3001\u8F6C\u6362\uFF09\u4E2D\u7684 T\uFF08Transform\uFF09\u2014\u2014 \u201C\u8F6C\u6362\u6570\u636E\u201D\u73AF\u8282\u7684\u7EC4\u4EF6\n",(0,r.jsx)(e.code,{children:"dbt-doris"})," adapter \u662F\u57FA\u4E8E",(0,r.jsx)(e.code,{children:"dbt-core"})," 1.5.0 \u5F00\u53D1\uFF0C\u4F9D\u8D56\u4E8E",(0,r.jsx)(e.code,{children:"mysql-connector-python"}),"\u9A71\u52A8\u5BF9 doris \u8FDB\u884C\u6570\u636E\u8F6C\u6362\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4EE3\u7801\u4ED3\u5E93\uFF1A",(0,r.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/extension/dbt-doris",children:"https://github.com/apache/doris/tree/master/extension/dbt-doris"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u7248\u672C\u652F\u6301",children:"\u7248\u672C\u652F\u6301"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"doris"}),(0,r.jsx)(e.th,{children:"python"}),(0,r.jsx)(e.th,{children:"dbt-core"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:">=1.2.5"}),(0,r.jsx)(e.td,{children:">=3.8,<=3.10"}),(0,r.jsx)(e.td,{children:">=1.5.0"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"dbt-doris-adapter-\u4F7F\u7528",children:"dbt-doris adapter \u4F7F\u7528"}),"\n",(0,r.jsx)(e.h3,{id:"dbt-doris-adapter-\u5B89\u88C5",children:"dbt-doris adapter \u5B89\u88C5"}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528 pip \u5B89\u88C5\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"pip install dbt-doris\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5B89\u88C5\u884C\u4E3A\u4F1A\u9ED8\u8BA4\u5B89\u88C5\u6240\u6709 dbt \u8FD0\u884C\u7684\u4F9D\u8D56\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u67E5\u770B\u9A8C\u8BC1\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"dbt --version\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u7CFB\u7EDF\u672A\u8BC6\u522B dbt \u8FD9\u4E2A\u547D\u4EE4\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u6761\u8F6F\u8FDE\u63A5\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"ln -s /usr/local/python3/bin/dbt /usr/bin/dbt\n"})}),"\n",(0,r.jsx)(e.h3,{id:"dbt-doris-adapter-\u521D\u59CB\u5316",children:"dbt-doris adapter \u521D\u59CB\u5316"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"dbt init \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4F1A\u51FA\u73B0\u8BE2\u95EE\u5F0F\u547D\u4EE4\u884C\uFF0C\u8F93\u5165\u76F8\u5E94\u914D\u7F6E\u5982\u4E0B\u5373\u53EF\u521D\u59CB\u5316\u4E00\u4E2A dbt \u9879\u76EE\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u540D\u79F0"}),(0,r.jsx)(e.th,{children:"\u9ED8\u8BA4\u503C"}),(0,r.jsx)(e.th,{children:"\u542B\u4E49"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"project"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\u9879\u76EE\u540D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"database"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\u8F93\u5165\u5BF9\u5E94\u7F16\u53F7\u9009\u62E9\u9002\u914D\u5668"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"host"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"doris \u7684 host"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"port"}),(0,r.jsx)(e.td,{children:"9030"}),(0,r.jsx)(e.td,{children:"doris \u7684 MySQL Protocol Port"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"schema"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\u5728 dbt-doris \u4E2D\uFF0C\u7B49\u540C\u4E8E database\uFF0C\u5E93\u540D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"username"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"doris \u7684 username"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"password"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"doris \u7684 password"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"threads"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"dbt-doris \u4E2D\u5E76\u884C\u5EA6\uFF08\u8BBE\u7F6E\u4E0E\u96C6\u7FA4\u80FD\u529B\u4E0D\u5339\u914D\u7684\u5E76\u884C\u5EA6\u4F1A\u589E\u52A0 dbt \u8FD0\u884C\u5931\u8D25\u98CE\u9669\uFF09"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"dbt-doris-adapter-\u8FD0\u884C",children:"dbt-doris adapter \u8FD0\u884C"}),"\n",(0,r.jsxs)(e.p,{children:["\u76F8\u5173 dbt \u8FD0\u884C\u6587\u6863\uFF0C\u53EF\u53C2\u8003",(0,r.jsx)(e.a,{href:"https://docs.getdbt.com/docs/get-started/run-your-dbt-projects",children:"\u6B64\u5904"}),"\u3002\n\u8FDB\u5165\u5230\u521A\u521A\u521B\u5EFA\u7684\u9879\u76EE\u76EE\u5F55\u4E0B\u9762\uFF0C\u6267\u884C\u9ED8\u8BA4\u7684 dbt \u6A21\u578B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"dbt run \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u4EE5\u770B\u5230\u8FD0\u884C\u4E86\u4E24\u4E2A model\uFF1Amy_first_dbt_model \u548C my_second_dbt_model"}),"\n",(0,r.jsx)(e.p,{children:"\u4ED6\u4EEC\u5206\u522B\u662F\u7269\u5316\u8868 table \u548C\u89C6\u56FE view\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u4EE5\u767B\u9646 doris\uFF0C\u67E5\u770B my_first_dbt_model \u548C my_second_dbt_model \u7684\u6570\u636E\u7ED3\u679C\u53CA\u5EFA\u8868\u8BED\u53E5\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"dbt-doris-adapter-\u7269\u5316\u65B9\u5F0F",children:"dbt-doris adapter \u7269\u5316\u65B9\u5F0F"}),"\n",(0,r.jsx)(e.p,{children:"dbt-doris \u7684 \u7269\u5316\u65B9\u5F0F\uFF08Materialization\uFF09\u652F\u6301\u4EE5\u4E0B\u4E09\u79CD\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"view"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"table"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"incremental"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"View"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4F7F\u7528",(0,r.jsx)(e.code,{children:"view"}),"\u4F5C\u4E3A\u7269\u5316\u6A21\u5F0F\uFF0C\u5728 Models \u6BCF\u6B21\u8FD0\u884C\u65F6\u90FD\u4F1A\u901A\u8FC7 create view as \u8BED\u53E5\u91CD\u65B0\u6784\u5EFA\u4E3A\u89C6\u56FE\u3002(\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cdbt \u7684\u7269\u5316\u65B9\u5F0F\u4E3A view)"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u4F18\u70B9\uFF1A\u6CA1\u6709\u5B58\u50A8\u989D\u5916\u7684\u6570\u636E\uFF0C\u6E90\u6570\u636E\u4E4B\u4E0A\u7684\u89C6\u56FE\u5C06\u59CB\u7EC8\u5305\u542B\u6700\u65B0\u7684\u8BB0\u5F55\u3002\n\u7F3A\u70B9\uFF1A\u6267\u884C\u8F83\u5927\u8F6C\u6362\u6216\u5D4C\u5957\u5728\u5176\u4ED6view\u4E4B\u4E0A\u7684view\u67E5\u8BE2\u901F\u5EA6\u5F88\u6162\u3002\n\u5EFA\u8BAE\uFF1A\u901A\u5E38\u4ECE\u6A21\u578B\u7684\u89C6\u56FE\u5F00\u59CB\uFF0C\u53EA\u6709\u5F53\u5B58\u5728\u6027\u80FD\u95EE\u9898\u65F6\u624D\u66F4\u6539\u4E3A\u53E6\u4E00\u4E2A\u7269\u5316\u65B9\u5F0F\u3002view\u6700\u9002\u5408\u4E0D\u8FDB\u884C\u91CD\u5927\u8F6C\u6362\u7684\u6A21\u578B\uFF0C\u4F8B\u5982\u91CD\u547D\u540D\uFF0C\u5217\u53D8\u66F4\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u7F6E\u9879\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: view\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6216\u8005\u5728 model \u6587\u4EF6\u91CC\u9762\u5199"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jinja",children:'{{ config(materialized = "view") }}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Table"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"table"})," \u7269\u5316\u6A21\u5F0F\u65F6\uFF0C\u60A8\u7684\u6A21\u578B\u5728\u6BCF\u6B21\u8FD0\u884C\u65F6\u90FD\u4F1A\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"create table as select"})," \u8BED\u53E5\u91CD\u5EFA\u4E3A\u8868\u3002\n\u5BF9\u4E8E dbt \u7684 tablet \u7269\u5316\uFF0Cdbt-doris \u91C7\u7528\u4EE5\u4E0B\u6B65\u9AA4\u4FDD\u8BC1\u6570\u636E\u66F4\u8FED\u65F6\u5019\u7684\u539F\u5B50\u6027\uFF1A"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"create table this_table_temp as {{ model sql}}"}),"\uFF0C\u9996\u5148\u521B\u5EFA\u4E34\u65F6\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5224\u65AD ",(0,r.jsx)(e.code,{children:"this_table"})," \u662F\u5426\u4E0D\u5B58\u5728\uFF0C\u5373\u662F\u9996\u6B21\u521B\u5EFA\uFF0C\u6267\u884C",(0,r.jsx)(e.code,{children:"rename"}),"\uFF0C\u5C06\u4E34\u65F6\u8868\u53D8\u66F4\u4E3A\u6700\u7EC8\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u82E5\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219 ",(0,r.jsx)(e.code,{children:"alter table this_table REPLACE WITH TABLE this_table_temp PROPERTIES('swap' = 'False')"}),"\uFF0C\u6B64\u64CD\u4F5C\u53EF\u4EE5\u4EA4\u6362\u8868\u540D\u5E76\u4E14\u5220\u9664",(0,r.jsx)(e.code,{children:"this_table_temp"}),"\u4E34\u65F6\u8868\uFF0C",(0,r.jsx)(e.a,{href:"../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE",children:"\u6B64\u8FC7\u7A0B"}),"\u901A\u8FC7 Doris \u5185\u6838\u7684\u4E8B\u52A1\u673A\u5236\u4FDD\u8BC1\u672C\u6B21\u64CD\u4F5C\u539F\u5B50\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u4F18\u70B9\uFF1Atable\u67E5\u8BE2\u901F\u5EA6\u4F1A\u6BD4view\u5FEB\u3002\n\u7F3A\u70B9\uFF1Atable\u9700\u8981\u8F83\u957F\u65F6\u95F4\u624D\u80FD\u6784\u5EFA\u6216\u91CD\u5EFA\uFF0C\u4F1A\u989D\u5916\u5B58\u50A8\u6570\u636E\uFF0C\u800C\u4E14\u4E0D\u80FD\u591F\u505A\u589E\u91CF\u6570\u636E\u540C\u6B65\u3002\n\u5EFA\u8BAE\uFF1A\u5EFA\u8BAE\u5BF9 BI \u5DE5\u5177\u67E5\u8BE2\u7684model\u6216\u4E0B\u6E38\u67E5\u8BE2\u3001\u8F6C\u6362\u7B49\u64CD\u4F5C\u8F83\u6162\u7684model\u4F7F\u7528table\u7269\u5316\u65B9\u5F0F\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u7F6E\u9879\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: table\n    +duplicate_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6216\u8005\u5728 model \u6587\u4EF6\u91CC\u9762\u5199"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jinja",children:'{{ config(\n    materialized = "table",\n    duplicate_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4E0A\u8FF0\u914D\u7F6E\u9879\u8BE6\u60C5\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u914D\u7F6E\u9879"}),(0,r.jsx)(e.th,{children:"\u63CF\u8FF0"}),(0,r.jsx)(e.th,{children:"Required?"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"materialized"})}),(0,r.jsx)(e.td,{children:"\u8BE5\u8868\u7684\u7269\u5316\u5F62\u5F0F\uFF08\u5BF9\u5E94\u521B\u5EFA\u8868\u6A21\u578B\u4E3A\u660E\u7EC6\u6A21\u578B\uFF08Duplicate\uFF09\uFF09"}),(0,r.jsx)(e.td,{children:"Required"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"duplicate_key"})}),(0,r.jsx)(e.td,{children:"\u660E\u7EC6\u6A21\u578B\u7684\u6392\u5E8F\u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"replication_num"})}),(0,r.jsx)(e.td,{children:"\u8868\u526F\u672C\u6570"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_by"})}),(0,r.jsx)(e.td,{children:"\u8868\u5206\u533A\u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_type"})}),(0,r.jsxs)(e.td,{children:["\u8868\u5206\u533A\u7C7B\u578B\uFF0Crange \u6216 list .(default: ",(0,r.jsx)(e.code,{children:"RANGE"}),")"]}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_by_init"})}),(0,r.jsx)(e.td,{children:"\u521D\u59CB\u5316\u7684\u8868\u5206\u533A"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"distributed_by"})}),(0,r.jsx)(e.td,{children:"\u8868\u6876\u533A\u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"buckets"})}),(0,r.jsx)(e.td,{children:"\u5206\u6876\u6570\u91CF"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"properties"})}),(0,r.jsx)(e.td,{children:"\u5EFA\u8868\u7684\u5176\u4ED6\u914D\u7F6E"}),(0,r.jsx)(e.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Incremental"})}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0A\u6B21\u8FD0\u884C dbt \u7684 incremental model \u7ED3\u679C\u4E3A\u57FA\u51C6\uFF0C\u589E\u91CF\u7684\u5C06\u8BB0\u5F55\u63D2\u5165\u6216\u66F4\u65B0\u5230\u8868\u4E2D\u3002\ndoris \u7684\u589E\u91CF\u5B9E\u73B0\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u6B64\u9879\u8BBE\u8BA1\u4E24\u79CD\u589E\u91CF\uFF08incremental_strategy \u8BBE\u7F6E\uFF09\u7684\u7B56\u7565\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"insert_overwrite"}),"\uFF1A\u4F9D\u8D56\u4E8E unique \u6A21\u578B\uFF0C\u5982\u679C\u6709\u589E\u91CF\u9700\u6C42\uFF0C\u5728\u521D\u59CB\u5316\u8BE5\u6A21\u578B\u7684\u6570\u636E\u65F6\u5C31\u6307\u5B9A\u7269\u5316\u4E3A incremental\uFF0C\u901A\u8FC7\u6307\u5B9A\u805A\u5408\u5217\u8FDB\u884C\u805A\u5408\uFF0C\u5B9E\u73B0\u589E\u91CF\u6570\u636E\u7684\u8986\u76D6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"append"}),"\uFF1A\u4F9D\u8D56\u4E8E",(0,r.jsx)(e.code,{children:"duplicate"}),"\u6A21\u578B\uFF0C\u4EC5\u4EC5\u5BF9\u589E\u91CF\u6570\u636E\u505A\u8FFD\u52A0\uFF0C\u4E0D\u6D89\u53CA\u4FEE\u6539\u4EFB\u4F55\u5386\u53F2\u6570\u636E\u3002\u56E0\u6B64\u4E0D\u9700\u8981\u6307\u5B9A unique_key\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u4F18\u70B9\uFF1A\u53EA\u9700\u8F6C\u6362\u65B0\u8BB0\u5F55\uFF0C\u53EF\u663E\u8457\u51CF\u5C11\u6784\u5EFA\u65F6\u95F4\u3002\n\u7F3A\u70B9\uFF1Aincremental\u6A21\u5F0F\u9700\u8981\u989D\u5916\u7684\u914D\u7F6E\uFF0C\u662F dbt \u7684\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u9700\u8981\u590D\u6742\u573A\u666F\u7684\u652F\u6301\u548C\u5BF9\u5E94\u7EC4\u4EF6\u7684\u9002\u914D\u3002\n\u5EFA\u8BAE\uFF1A\u589E\u91CF\u6A21\u578B\u6700\u9002\u5408\u57FA\u4E8E\u4E8B\u4EF6\u76F8\u5173\u7684\u573A\u666F\u6216 dbt \u8FD0\u884C\u53D8\u5F97\u592A\u6162\u65F6\u4F7F\u7528\u589E\u91CF\u6A21\u578B\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u7F6E\u9879\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: incremental\n    +incremental_strategy: <strategy>\n    +unique_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6216\u8005\u5728 model \u6587\u4EF6\u91CC\u9762\u5199"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jinja",children:'{{ config(\n    materialized = "incremental",\n    incremental_strategy = "<strategy>"\n    unique_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    )\n}}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4E0A\u8FF0\u914D\u7F6E\u9879\u8BE6\u60C5\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u914D\u7F6E\u9879"}),(0,r.jsx)(e.th,{children:"\u63CF\u8FF0"}),(0,r.jsx)(e.th,{children:"Required?"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"materialized"})}),(0,r.jsx)(e.td,{children:"\u8BE5\u8868\u7684\u7269\u5316\u5F62\u5F0F"}),(0,r.jsx)(e.td,{children:"Required"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"incremental_strategy"})}),(0,r.jsx)(e.td,{children:"\u589E\u91CF\u7B56\u7565"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"unique_key"})}),(0,r.jsx)(e.td,{children:"unique \u8868\u7684 key \u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"replication_num"})}),(0,r.jsx)(e.td,{children:"\u8868\u526F\u672C\u6570"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_by"})}),(0,r.jsx)(e.td,{children:"\u8868\u5206\u533A\u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_type"})}),(0,r.jsxs)(e.td,{children:["\u8868\u5206\u533A\u7C7B\u578B\uFF0Crange \u6216 list .(default: ",(0,r.jsx)(e.code,{children:"RANGE"}),")"]}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"partition_by_init"})}),(0,r.jsx)(e.td,{children:"\u521D\u59CB\u5316\u7684\u8868\u5206\u533A"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"distributed_by"})}),(0,r.jsx)(e.td,{children:"\u8868\u6876\u533A\u5217"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"buckets"})}),(0,r.jsx)(e.td,{children:"\u5206\u6876\u6570\u91CF"}),(0,r.jsx)(e.td,{children:"Optional"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"properties"})}),(0,r.jsx)(e.td,{children:"\u5EFA\u8868\u7684\u5176\u4ED6\u914D\u7F6E"}),(0,r.jsx)(e.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"dbt-doris-adapter-seed",children:"dbt-doris adapter seed"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://docs.getdbt.com/faqs/seeds/build-one-seed",children:(0,r.jsx)(e.code,{children:"seed"})})," \u662F\u7528\u4E8E\u52A0\u8F7D csv \u7B49\u6570\u636E\u6587\u4EF6\u65F6\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u5B83\u662F\u4E00\u79CD\u52A0\u8F7D\u6587\u4EF6\u5165\u5E93\u53C2\u4E0E\u6A21\u578B\u6784\u5EFA\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4F46\u6709\u4EE5\u4E0B\u6CE8\u610F\u4E8B\u9879\uFF1A"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"seed \u4E0D\u5E94\u7528\u4E8E\u52A0\u8F7D\u539F\u59CB\u6570\u636E\uFF08\u4F8B\u5982\uFF0C\u4ECE\u751F\u4EA7\u6570\u636E\u5E93\u5BFC\u51FA\u5927\u578B CSV \u6587\u4EF6\uFF09\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7531\u4E8E seed \u662F\u53D7\u7248\u672C\u63A7\u5236\u7684\uFF0C\u56E0\u6B64\u5B83\u4EEC\u6700\u9002\u5408\u5305\u542B\u7279\u5B9A\u4E8E\u4E1A\u52A1\u7684\u903B\u8F91\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801\u5217\u8868\u6216\u5458\u5DE5\u7684\u7528\u6237 ID\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u4E8E\u5927\u6587\u4EF6\uFF0C\u4F7F\u7528 dbt \u7684 seed \u529F\u80FD\u52A0\u8F7D CSV \u7684\u6027\u80FD\u4E0D\u4F73\u3002\u5E94\u8BE5\u8003\u8651\u4F7F\u7528 streamload \u7B49\u65B9\u5F0F\u5C06\u8FD9\u4E9B CSV \u52A0\u8F7D\u5230 doris \u4E2D\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6237\u53EF\u4EE5\u5728 dbt project \u7684\u76EE\u5F55\u4E0B\u9762\u770B\u5230 seeds \u7684\u76EE\u5F55\uFF0C\u5728\u91CC\u9762\u4E0A\u4F20 csv \u6587\u4EF6\u548C seed \u914D\u7F6E\u6587\u4EF6\u5E76\u8FD0\u884C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:" dbt seed --select seed_name\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5E38\u89C1 seed \u914D\u7F6E\u6587\u4EF6\u5199\u6CD5\uFF0C\u652F\u6301\u5BF9\u5217\u7C7B\u578B\u7684\u5B9A\u4E49\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"seeds:\n  seed_name: # \u79CD\u5B50\u540D\u79F0\uFF0C\u5728 seed \u6784\u5EFA\u540E\uFF0C\u4F1A\u4F5C\u4E3A\u8868\u540D\n    config: \n      schema: demo_seed # \u5728 seed \u6784\u5EFA\u540E\uFF0C\u4F1A\u4F5C\u4E3A database \u7684\u4E00\u90E8\u5206\n      full_refresh: true\n      replication_num: 1\n      column_types:\n        id: bigint\n        phone: varchar(32)\n        ip: varchar(15)\n        name: varchar(20)\n        cost: DecimalV3(19,10)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(e.h3,{id:"\u89C6\u56FE\u6A21\u578B\u6837\u4F8B\u53C2\u8003",children:"\u89C6\u56FE\u6A21\u578B\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(materialized='view') }}\n\nselect\n    u.user_id,\n    max(o.create_time) as create_time,\n    sum (o.cost) as balance\nfrom {{ ref('sell_order') }} as o\nleft join {{ ref('sell_user') }} as u\non u.account_id=o.account_id\ngroup by u.user_id\norder by u.user_id\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u8868\u6A21\u578B\u6837\u4F8B\u53C2\u8003",children:"\u8868\u6A21\u578B\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(materialized='table') }}\n\nselect\n    u.user_id,\n    max(o.create_time) as create_time,\n    sum (o.cost) as balance\nfrom {{ ref('sell_order') }} as o\nleft join {{ ref('sell_user') }} as u\non u.account_id=o.account_id\ngroup by u.user_id\norder by u.user_id\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003-duplicate-\u6A21\u5F0F",children:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003 (duplicate \u6A21\u5F0F)"}),"\n",(0,r.jsx)(e.p,{children:"\u5EFA\u8868\u4E3A duplicate \u6A21\u5F0F\uFF0C\u65E0\u6570\u636E\u805A\u5408\uFF0C\u4E0D\u9700\u8981\u6307\u5B9A unique_key"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    replication_num=1\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003-unique-\u6A21\u5F0F",children:"\u589E\u91CF\u6A21\u578B\u6837\u4F8B\u53C2\u8003 (unique \u6A21\u5F0F)"}),"\n",(0,r.jsx)(e.p,{children:"\u5EFA\u8868\u4E3A unique \u6A21\u5F0F\uFF0C\u6570\u636E\u805A\u5408\uFF0C\u5FC5\u987B\u6307\u5B9A unique_key"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\nmaterialized='incremental', \nunique_key=['account_id','create_time']\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u589E\u91CF\u6A21\u578B\u5168\u91CF\u5237\u65B0\u6837\u4F8B\u53C2\u8003",children:"\u589E\u91CF\u6A21\u578B\u5168\u91CF\u5237\u65B0\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    full_refresh = true\n)}}\n\nselect * from\n {{ source('dbt_source', 'sell_user') }}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u8BBE\u7F6E\u5206\u6876\u89C4\u5219\u6837\u4F8B\u53C2\u8003",children:"\u8BBE\u7F6E\u5206\u6876\u89C4\u5219\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.p,{children:"\u6B64\u5904 buckets \u53EF\u4EE5\u586B auto \u6216\u8005\u6B63\u6574\u6570\uFF0C\u5206\u522B\u4EE3\u8868\u81EA\u52A8\u5206\u6876\u548C\u8BBE\u7F6E\u56FA\u5B9A\u5206\u6876\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    unique_key=['account_id',\"create_time\"], \n    distributed_by=['account_id'], \n    buckets='auto' \n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where\n    create_time > (select max(create_time) from {{this}})\n{% endif %}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u8BBE\u7F6E\u526F\u672C\u6570\u6837\u4F8B\u53C2\u8003",children:"\u8BBE\u7F6E\u526F\u672C\u6570\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\n    materialized='table', \n    replication_num=1\n)}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u52A8\u6001\u5206\u533A\u6837\u4F8B\u53C2\u8003",children:"\u52A8\u6001\u5206\u533A\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'{{ config(\n    materialized=\'incremental\', \n    partition_by = \'create_time\',\n    partition_type = \'range\', \n    -- \u8FD9\u91CC\u7684 properties \u662F create table \u8BED\u53E5\u4E2D\u7684 properties\uFF0C\u8FD9\u91CC\u9762\u5199\u4E86\u52A8\u6001\u5206\u533A\u7684\u76F8\u5173\u914D\u7F6E\n    properties = {\n        "dynamic_partition.time_unit":"DAY",\n        "dynamic_partition.end":"8",\n        "dynamic_partition.prefix":"p",\n        "dynamic_partition.buckets":"4",\n        "dynamic_partition.create_history_partition":"true",\n        "dynamic_partition.history_partition_num":"3"\n    }\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref(\'sell_order2\') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where    \n    create_time = DATE_SUB(CURDATE(), INTERVAL 1 DAY)\n{% endif %}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u5E38\u89C4\u5206\u533A\u6837\u4F8B\u53C2\u8003",children:"\u5E38\u89C4\u5206\u533A\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'{{ config(\n    materialized=\'incremental\', \n    partition_by = \'create_time\',\n    partition_type = \'range\',  \n    -- \u8FD9\u91CC\u7684 partition_by_init \u662F\u6307\u7684 \u521B\u5EFA\u5206\u533A\u8868\u7684\u5386\u53F2\u5206\u533A\uFF0C\u5F53\u524D doris \u7248\u672C\u7684\u5386\u53F2\u5206\u533A\u9700\u8981\u624B\u52A8\u6307\u5B9A\n    partition_by_init = [\n        "PARTITION `p20240601` VALUES [(\\"2024-06-01\\"),  (\\"2024-06-02\\"))",\n        "PARTITION `p20240602` VALUES [(\\"2024-06-02\\"),  (\\"2024-06-03\\"))"\n    ]\n )}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref(\'sell_order2\') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where    \n    -- \u5982\u679C\u63D0\u4F9B\u4E86 my_date \u53D8\u91CF\uFF0C\u5219\u4F7F\u7528\u8BE5\u901A\u8DEF\uFF08\u901A\u8FC7 dbt run --vars \'{"my_date": "\\"2024-06-03\\""}\' \u547D\u4EE4\uFF09\u5982\u679C\u6CA1\u6709\u63D0\u4F9B my_date \u53D8\u91CF (\u76F4\u63A5 dbt run )\uFF0C\u5219\u4F7F\u7528\u5F53\u524D\u65E5\u671F\u7684\u524D\u4E00\u5929 , \u8FD9\u91CC\u7684\u589E\u91CF\u9009\u62E9\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 doris \u7684 CURDATE() \u51FD\u6570\uFF0C\u8FD9\u4E2A\u901A\u8DEF\u4E5F\u662F\u751F\u4EA7\u73AF\u5883\u7ECF\u5E38\u8D70\u7684\u3002 \n    create_time = {{ var(\'my_date\' , \'DATE_SUB(CURDATE(), INTERVAL 1 DAY)\') }} \n\n{% endif %}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u6279\u5904\u7406\u65E5\u671F\u8BBE\u7F6E\u53C2\u6570\u6837\u4F8B\u53C2\u8003",children:"\u6279\u5904\u7406\u65E5\u671F\u8BBE\u7F6E\u53C2\u6570\u6837\u4F8B\u53C2\u8003"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    partition_by = 'create_time',\n    partition_type = 'range',\n    ...\n)}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where    \n    -- \u5982\u679C\u63D0\u4F9B\u4E86 my_date \u53D8\u91CF\uFF0C\u5219\u4F7F\u7528\u8BE5\u901A\u8DEF\uFF08\u901A\u8FC7 dbt run --vars '{\"my_date\": \"\\\"2024-06-03\\\"\"}' \u547D\u4EE4\uFF09\u5982\u679C\u6CA1\u6709\u63D0\u4F9B my_date \u53D8\u91CF (\u76F4\u63A5 dbt run )\uFF0C\u5219\u4F7F\u7528\u5F53\u524D\u65E5\u671F\u7684\u524D\u4E00\u5929 , \u8FD9\u91CC\u7684\u589E\u91CF\u9009\u62E9\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 doris \u7684 CURDATE() \u51FD\u6570\uFF0C\u8FD9\u4E2A\u901A\u8DEF\u4E5F\u662F\u751F\u4EA7\u73AF\u5883\u7ECF\u5E38\u8D70\u7684\u3002 \n    create_time = {{ var('my_date' , 'DATE_SUB(CURDATE(), INTERVAL 1 DAY)') }} \n\n{% endif %}\n"})})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return s}});var i=d(667294);let r={},t=i.createContext(r);function s(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);