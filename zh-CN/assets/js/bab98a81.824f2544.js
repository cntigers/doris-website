"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["803449"],{653137:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"faq/sql-faq","title":"\u5E38\u89C1\u67E5\u8BE2\u95EE\u9898","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/faq/sql-faq.md","sourceDirName":"faq","slug":"/faq/sql-faq","permalink":"/zh-CN/docs/faq/sql-faq","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5E38\u89C1\u67E5\u8BE2\u95EE\u9898","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u64CD\u4F5C\u95EE\u9898","permalink":"/zh-CN/docs/faq/data-faq"},"next":{"title":"\u5E38\u89C1\u6570\u636E\u6E56\u95EE\u9898","permalink":"/zh-CN/docs/faq/lakehouse-faq"}}'),r=l("785893"),i=l("250065");let t={title:"\u5E38\u89C1\u67E5\u8BE2\u95EE\u9898",language:"zh-CN"},c="SQL \u95EE\u9898",a={},d=[{value:"Q1. \u67E5\u8BE2\u62A5\u9519\uFF1AFailed to get scan range, no queryable replica found in tablet: xxxx",id:"q1-\u67E5\u8BE2\u62A5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx",level:3},{value:"Q2. show backends/frontends \u67E5\u770B\u5230\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574",id:"q2-show-backendsfrontends-\u67E5\u770B\u5230\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574",level:3},{value:"Q3. invalid cluster id: xxxx",id:"q3-invalid-cluster-id-xxxx",level:3},{value:"Q4. Unique Key \u6A21\u578B\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4",id:"q4-unique-key-\u6A21\u578B\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4",level:3},{value:"Q5. \u67E5\u8BE2 bitmap/hll \u7C7B\u578B\u7684\u6570\u636E\u8FD4\u56DE NULL \u7684\u95EE\u9898",id:"q5-\u67E5\u8BE2-bitmaphll-\u7C7B\u578B\u7684\u6570\u636E\u8FD4\u56DE-null-\u7684\u95EE\u9898",level:3},{value:"Q6. \u8BBF\u95EE\u5BF9\u8C61\u5B58\u50A8\u65F6\u62A5\u9519\uFF1Acurl 77: Problem with the SSL CA cert",id:"q6-\u8BBF\u95EE\u5BF9\u8C61\u5B58\u50A8\u65F6\u62A5\u9519curl-77-problem-with-the-ssl-ca-cert",level:3},{value:"Q7. \u5BFC\u5165\u62A5\u9519\uFF1A&quot;Message&quot;: &quot;[INTERNAL_ERROR]single replica load is disabled on BE.&quot;",id:"q7-\u5BFC\u5165\u62A5\u9519message-internal_errorsingle-replica-load-is-disabled-on-be",level:3}];function o(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sql-\u95EE\u9898",children:"SQL \u95EE\u9898"})}),"\n",(0,r.jsx)(n.h3,{id:"q1-\u67E5\u8BE2\u62A5\u9519failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx",children:"Q1. \u67E5\u8BE2\u62A5\u9519\uFF1AFailed to get scan range, no queryable replica found in tablet: xxxx"}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u79CD\u60C5\u51B5\u662F\u56E0\u4E3A\u5BF9\u5E94\u7684 tablet \u6CA1\u6709\u627E\u5230\u53EF\u4EE5\u67E5\u8BE2\u7684\u526F\u672C\uFF0C\u901A\u5E38\u539F\u56E0\u53EF\u80FD\u662F BE \u5B95\u673A\u3001\u526F\u672C\u7F3A\u5931\u7B49\u3002\u53EF\u4EE5\u5148\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"show tablet tablet_id"})," \u8BED\u53E5\uFF0C\u7136\u540E\u6267\u884C\u540E\u9762\u7684 ",(0,r.jsx)(n.code,{children:"show proc"})," \u8BED\u53E5\uFF0C\u67E5\u770B\u8FD9\u4E2A tablet \u5BF9\u5E94\u7684\u526F\u672C\u4FE1\u606F\uFF0C\u68C0\u67E5\u526F\u672C\u662F\u5426\u5B8C\u6574\u3002\u540C\u65F6\u8FD8\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:'show proc "/cluster_balance"'})," \u4FE1\u606F\u6765\u67E5\u8BE2\u96C6\u7FA4\u5185\u526F\u672C\u8C03\u5EA6\u548C\u4FEE\u590D\u7684\u8FDB\u5EA6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E\u6570\u636E\u526F\u672C\u7BA1\u7406\u76F8\u5173\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u53C2\u9605 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/admin-manual/maint-monitor/tablet-repair-and-balance",children:"\u6570\u636E\u526F\u672C\u7BA1\u7406"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"q2-show-backendsfrontends-\u67E5\u770B\u5230\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574",children:"Q2. show backends/frontends \u67E5\u770B\u5230\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6267\u884C\u5982",(0,r.jsx)(n.code,{children:"show backends/frontends"})," \u7B49\u67D0\u4E9B\u8BED\u53E5\u540E\uFF0C\u7ED3\u679C\u4E2D\u53EF\u80FD\u4F1A\u53D1\u73B0\u6709\u90E8\u5206\u5217\u5185\u5BB9\u4E0D\u5168\u3002\u6BD4\u5982 show backends \u7ED3\u679C\u4E2D\u770B\u4E0D\u5230\u78C1\u76D8\u5BB9\u91CF\u4FE1\u606F\u7B49\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u5E38\u8FD9\u4E2A\u95EE\u9898\u4F1A\u51FA\u73B0\u5728\u96C6\u7FA4\u6709\u591A\u4E2A FE \u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u7528\u6237\u8FDE\u63A5\u5230\u975E Master FE \u8282\u70B9\u6267\u884C\u8FD9\u4E9B\u8BED\u53E5\uFF0C\u5C31\u4F1A\u770B\u5230\u4E0D\u5B8C\u6574\u7684\u4FE1\u606F\u3002\u8FD9\u662F\u56E0\u4E3A\uFF0C\u90E8\u5206\u4FE1\u606F\u4EC5\u5B58\u5728\u4E8E Master FE \u8282\u70B9\u3002\u6BD4\u5982 BE \u7684\u78C1\u76D8\u4F7F\u7528\u91CF\u4FE1\u606F\u7B49\u3002\u6240\u4EE5\u53EA\u6709\u5728\u76F4\u8FDE Master FE \u540E\uFF0C\u624D\u80FD\u83B7\u5F97\u5B8C\u6574\u4FE1\u606F\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u7136\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5\u5728\u6267\u884C\u8FD9\u4E9B\u8BED\u53E5\u524D\uFF0C\u5148\u6267\u884C ",(0,r.jsx)(n.code,{children:"set forward_to_master=true;"})," \u8FD9\u4E2A\u4F1A\u8BDD\u53D8\u91CF\u8BBE\u7F6E\u4E3A true \u540E\uFF0C\u540E\u7EED\u6267\u884C\u7684\u4E00\u4E9B\u4FE1\u606F\u67E5\u770B\u7C7B\u8BED\u53E5\u4F1A\u81EA\u52A8\u8F6C\u53D1\u5230 Master FE \u83B7\u53D6\u7ED3\u679C\u3002\u8FD9\u6837\uFF0C\u4E0D\u8BBA\u7528\u6237\u8FDE\u63A5\u7684\u662F\u54EA\u4E2A FE\uFF0C\u90FD\u53EF\u4EE5\u83B7\u53D6\u5230\u5B8C\u6574\u7ED3\u679C\u4E86\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"q3-invalid-cluster-id-xxxx",children:"Q3. invalid cluster id: xxxx"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u4E2A\u9519\u8BEF\u53EF\u80FD\u4F1A\u5728 show backends \u6216 show frontends \u547D\u4EE4\u7684\u7ED3\u679C\u4E2D\u51FA\u73B0\u3002\u901A\u5E38\u51FA\u73B0\u5728\u67D0\u4E2A FE \u6216 BE \u8282\u70B9\u7684\u9519\u8BEF\u4FE1\u606F\u5217\u4E2D\u3002\u8FD9\u4E2A\u9519\u8BEF\u7684\u542B\u4E49\u662F\uFF0CMaster FE \u5411\u8FD9\u4E2A\u8282\u70B9\u53D1\u9001\u5FC3\u8DF3\u4FE1\u606F\u540E\uFF0C\u8BE5\u8282\u70B9\u53D1\u73B0\u5FC3\u8DF3\u4FE1\u606F\u4E2D\u643A\u5E26\u7684 cluster id \u548C\u672C\u5730\u5B58\u50A8\u7684 cluster id \u4E0D\u540C\uFF0C\u6240\u4EE5\u62D2\u7EDD\u56DE\u5E94\u5FC3\u8DF3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Doris \u7684 Master FE \u8282\u70B9\u4F1A\u4E3B\u52A8\u53D1\u9001\u5FC3\u8DF3\u7ED9\u5404\u4E2A FE \u6216 BE \u8282\u70B9\uFF0C\u5E76\u4E14\u5728\u5FC3\u8DF3\u4FE1\u606F\u4E2D\u4F1A\u643A\u5E26\u4E00\u4E2A cluster_id\u3002cluster_id \u662F\u5728\u4E00\u4E2A\u96C6\u7FA4\u521D\u59CB\u5316\u65F6\uFF0C\u7531 Master FE \u751F\u6210\u7684\u552F\u4E00\u96C6\u7FA4\u6807\u8BC6\u3002\u5F53 FE \u6216 BE \u7B2C\u4E00\u6B21\u6536\u5230\u5FC3\u8DF3\u4FE1\u606F\u540E\uFF0C\u5219\u4F1A\u5C06 cluster_id \u4EE5\u6587\u4EF6\u7684\u5F62\u5F0F\u4FDD\u5B58\u5728\u672C\u5730\u3002FE \u7684\u8BE5\u6587\u4EF6\u5728\u5143\u6570\u636E\u76EE\u5F55\u7684 image/\u76EE\u5F55\u4E0B\uFF0CBE \u5219\u5728\u6240\u6709\u6570\u636E\u76EE\u5F55\u4E0B\u90FD\u6709\u4E00\u4E2A cluster_id \u6587\u4EF6\u3002\u4E4B\u540E\uFF0C\u6BCF\u6B21\u8282\u70B9\u6536\u5230\u5FC3\u8DF3\u540E\uFF0C\u90FD\u4F1A\u7528\u672C\u5730 cluster_id \u7684\u5185\u5BB9\u548C\u5FC3\u8DF3\u4E2D\u7684\u5185\u5BB9\u4F5C\u6BD4\u5BF9\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u5219\u62D2\u7EDD\u54CD\u5E94\u5FC3\u8DF3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u673A\u5236\u662F\u4E00\u4E2A\u8282\u70B9\u8BA4\u8BC1\u673A\u5236\uFF0C\u4EE5\u9632\u6B62\u63A5\u6536\u5230\u96C6\u7FA4\u5916\u7684\u8282\u70B9\u53D1\u9001\u6765\u7684\u9519\u8BEF\u7684\u5FC3\u8DF3\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u6062\u590D\u8FD9\u4E2A\u9519\u8BEF\u3002\u9996\u5148\u8981\u5148\u786E\u8BA4\u6240\u6709\u8282\u70B9\u662F\u5426\u90FD\u662F\u6B63\u786E\u7684\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u3002\u4E4B\u540E\uFF0C\u5BF9\u4E8E FE \u8282\u70B9\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539\u5143\u6570\u636E\u76EE\u5F55\u4E0B\u7684 image/VERSION \u6587\u4EF6\u4E2D\u7684 cluster_id \u503C\u540E\u91CD\u542F FE\u3002\u5BF9\u4E8E BE \u8282\u70B9\uFF0C\u5219\u53EF\u4EE5\u5220\u9664\u6240\u6709\u6570\u636E\u76EE\u5F55\u4E0B\u7684 cluster_id \u6587\u4EF6\u540E\u91CD\u542F BE\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"q4-unique-key-\u6A21\u578B\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4",children:"Q4. Unique Key \u6A21\u578B\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4"}),"\n",(0,r.jsx)(n.p,{children:"\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5F53\u7528\u6237\u4F7F\u7528\u76F8\u540C\u7684 SQL \u67E5\u8BE2\u4E00\u4E2A Unique Key \u6A21\u578B\u7684\u8868\u65F6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u591A\u6B21\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4\u7684\u73B0\u8C61\u3002\u5E76\u4E14\u67E5\u8BE2\u7ED3\u679C\u603B\u5728 2-3 \u79CD\u4E4B\u95F4\u53D8\u5316\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u53EF\u80FD\u662F\u56E0\u4E3A\uFF0C\u5728\u540C\u4E00\u6279\u5BFC\u5165\u6570\u636E\u4E2D\uFF0C\u51FA\u73B0\u4E86 key \u76F8\u540C\u4F46 value \u4E0D\u540C\u7684\u6570\u636E\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\uFF0C\u4E0D\u540C\u526F\u672C\u95F4\uFF0C\u56E0\u6570\u636E\u8986\u76D6\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u786E\u5B9A\u800C\u4EA7\u751F\u7684\u7ED3\u679C\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\u8868\u5B9A\u4E49\u4E3A k1, v1\u3002\u4E00\u6279\u6B21\u5BFC\u5165\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'1, "abc"\n1, "def"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u90A3\u4E48\u53EF\u80FD\u526F\u672C 1 \u7684\u7ED3\u679C\u662F ",(0,r.jsx)(n.code,{children:'1, "abc"'}),"\uFF0C\u800C\u526F\u672C 2 \u7684\u7ED3\u679C\u662F ",(0,r.jsx)(n.code,{children:'1, "def"'}),"\u3002\u4ECE\u800C\u5BFC\u81F4\u67E5\u8BE2\u7ED3\u679C\u4E0D\u4E00\u81F4\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E3A\u4E86\u786E\u4FDD\u4E0D\u540C\u526F\u672C\u4E4B\u95F4\u7684\u6570\u636E\u5148\u540E\u987A\u5E8F\u552F\u4E00\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"../data-operate/update/update-of-unique-model",children:"Sequence Column"})," \u529F\u80FD\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"q5-\u67E5\u8BE2-bitmaphll-\u7C7B\u578B\u7684\u6570\u636E\u8FD4\u56DE-null-\u7684\u95EE\u9898",children:"Q5. \u67E5\u8BE2 bitmap/hll \u7C7B\u578B\u7684\u6570\u636E\u8FD4\u56DE NULL \u7684\u95EE\u9898"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 1.1.x \u7248\u672C\u4E2D\uFF0C\u5728\u5F00\u542F\u5411\u91CF\u5316\u7684\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C\u67E5\u8BE2\u6570\u636E\u8868\u4E2D bitmap \u7C7B\u578B\u5B57\u6BB5\u8FD4\u56DE\u7ED3\u679C\u4E3A NULL \u7684\u60C5\u51B5\u4E0B\uFF0C"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u4F60\u8981 ",(0,r.jsx)(n.code,{children:"set return_object_data_as_binary=true;"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5173\u95ED\u5411\u91CF\u5316 ",(0,r.jsx)(n.code,{children:"set enable_vectorized_engine=false;"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5173\u95ED SQL \u7F13\u5B58 ",(0,r.jsx)(n.code,{children:"set [global] enable_sql_cache = false;"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u91CC\u662F\u56E0\u4E3A bitmap / hll \u7C7B\u578B\u5728\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u4E2D\uFF1A\u8F93\u5165\u5747\u4E3A NULL\uFF0C\u5219\u8F93\u51FA\u7684\u7ED3\u679C\u4E5F\u662F NULL \u800C\u4E0D\u662F 0"}),"\n",(0,r.jsx)(n.h3,{id:"q6-\u8BBF\u95EE\u5BF9\u8C61\u5B58\u50A8\u65F6\u62A5\u9519curl-77-problem-with-the-ssl-ca-cert",children:"Q6. \u8BBF\u95EE\u5BF9\u8C61\u5B58\u50A8\u65F6\u62A5\u9519\uFF1Acurl 77: Problem with the SSL CA cert"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C be.INFO \u65E5\u5FD7\u4E2D\u51FA\u73B0 ",(0,r.jsx)(n.code,{children:"curl 77: Problem with the SSL CA cert"})," \u9519\u8BEF\u3002\u53EF\u4EE5\u5C1D\u8BD5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.a,{href:"https://curl.se/docs/caextract.html",children:"https://curl.se/docs/caextract.html"})," \u4E0B\u8F7D\u8BC1\u4E66\uFF1Acacert.pem"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u62F7\u8D1D\u8BC1\u4E66\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF1A",(0,r.jsx)(n.code,{children:"sudo cp /tmp/cacert.pem /etc/ssl/certs/ca-certificates.crt"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u91CD\u542F BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"q7-\u5BFC\u5165\u62A5\u9519message-internal_errorsingle-replica-load-is-disabled-on-be",children:'Q7. \u5BFC\u5165\u62A5\u9519\uFF1A"Message": "[INTERNAL_ERROR]single replica load is disabled on BE."'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"be.conf \u4E2D\u589E\u52A0 enable_single_replica_load = true"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u91CD\u542F BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return t}});var s=l(667294);let r={},i=s.createContext(r);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);