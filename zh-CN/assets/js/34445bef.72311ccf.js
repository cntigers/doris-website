"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["782724"],{508663:function(h,i,l){l.r(i),l.d(i,{default:()=>o,frontMatter:()=>c,metadata:()=>e,assets:()=>r,toc:()=>p,contentTitle:()=>a});var e=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.1","title":"Release 2.0.1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v2.0/release-2.0.1.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.1","permalink":"/zh-CN/docs/3.0/releasenotes/v2.0/release-2.0.1","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 2.0.1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.0.2","permalink":"/zh-CN/docs/3.0/releasenotes/v2.0/release-2.0.2"},"next":{"title":"Release 2.0.0","permalink":"/zh-CN/docs/3.0/releasenotes/v2.0/release-2.0.0"}}'),s=l("785893"),t=l("250065");let c={title:"Release 2.0.1",language:"zh-CN"},a="\u884C\u4E3A\u53D8\u66F4",r={},p=[{value:"Array \u548C Map \u6570\u636E\u7C7B\u578B\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",id:"array-\u548C-map-\u6570\u636E\u7C7B\u578B\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",level:3},{value:"\u5012\u6392\u7D22\u5F15\u7684\u67E5\u8BE2\u6027\u80FD\u4F18\u5316",id:"\u5012\u6392\u7D22\u5F15\u7684\u67E5\u8BE2\u6027\u80FD\u4F18\u5316",level:3},{value:"bitmap\u3001like\u3001scan\u3001agg \u7B49\u6267\u884C\u6027\u80FD\u4F18\u5316",id:"bitmaplikescanagg-\u7B49\u6267\u884C\u6027\u80FD\u4F18\u5316",level:3},{value:"CCR \u7684\u529F\u80FD\u4F18\u5316\u4E0E\u7A33\u5B9A\u6027\u63D0\u5347",id:"ccr-\u7684\u529F\u80FD\u4F18\u5316\u4E0E\u7A33\u5B9A\u6027\u63D0\u5347",level:3},{value:"Merge-on-Write \u4E3B\u952E\u8868\u7684\u80FD\u529B\u589E\u5F3A",id:"merge-on-write-\u4E3B\u952E\u8868\u7684\u80FD\u529B\u589E\u5F3A",level:3},{value:"\u8868\u72B6\u6001\u548C\u7EDF\u8BA1\u4FE1\u606F\u7684\u529F\u80FD\u4F18\u5316",id:"\u8868\u72B6\u6001\u548C\u7EDF\u8BA1\u4FE1\u606F\u7684\u529F\u80FD\u4F18\u5316",level:3},{value:"Multi-Catalog \u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",id:"multi-catalog-\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",level:3}];function n(h){let i={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...h.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C\u6211\u4EEC\u5F88\u9AD8\u5174\u5730\u5411\u5927\u5BB6\u5BA3\u5E03\uFF0CApache Doris 2.0.1 Release \u7248\u672C\u5DF2\u4E8E 2023 \u5E74 9 \u6708 4 \u65E5\u6B63\u5F0F\u53D1\u5E03\uFF0C\u6709\u8D85\u8FC7 71 \u4F4D\u8D21\u732E\u8005\u4E3A Apache Doris \u63D0\u4EA4\u4E86\u8D85\u8FC7 380 \u4E2A\u4F18\u5316\u4E0E\u4FEE\u590D\u3002"}),"\n",(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u884C\u4E3A\u53D8\u66F4",children:"\u884C\u4E3A\u53D8\u66F4"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5C06 varchar \u9ED8\u8BA4\u957F\u5EA6 1 \u4FEE\u6539\u4E3A 65533"}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"\u529F\u80FD\u6539\u8FDB",children:"\u529F\u80FD\u6539\u8FDB"}),"\n",(0,s.jsx)(i.h3,{id:"array-\u548C-map-\u6570\u636E\u7C7B\u578B\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",children:"Array \u548C Map \u6570\u636E\u7C7B\u578B\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22793",children:"https://github.com/apache/doris/pull/22793"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22927",children:"https://github.com/apache/doris/pull/22927"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22738",children:"https://github.com/apache/doris/pull/22738"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22347",children:"https://github.com/apache/doris/pull/22347"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23250",children:"https://github.com/apache/doris/pull/23250"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22300",children:"https://github.com/apache/doris/pull/22300"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5012\u6392\u7D22\u5F15\u7684\u67E5\u8BE2\u6027\u80FD\u4F18\u5316",children:"\u5012\u6392\u7D22\u5F15\u7684\u67E5\u8BE2\u6027\u80FD\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22836",children:"https://github.com/apache/doris/pull/22836"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23381",children:"https://github.com/apache/doris/pull/23381"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23389",children:"https://github.com/apache/doris/pull/23389"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22570",children:"https://github.com/apache/doris/pull/22570"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"bitmaplikescanagg-\u7B49\u6267\u884C\u6027\u80FD\u4F18\u5316",children:"bitmap\u3001like\u3001scan\u3001agg \u7B49\u6267\u884C\u6027\u80FD\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23172",children:"https://github.com/apache/doris/pull/23172"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23495",children:"https://github.com/apache/doris/pull/23495"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23476",children:"https://github.com/apache/doris/pull/23476"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23396",children:"https://github.com/apache/doris/pull/23396"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23182",children:"https://github.com/apache/doris/pull/23182"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22216",children:"https://github.com/apache/doris/pull/22216"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"ccr-\u7684\u529F\u80FD\u4F18\u5316\u4E0E\u7A33\u5B9A\u6027\u63D0\u5347",children:"CCR \u7684\u529F\u80FD\u4F18\u5316\u4E0E\u7A33\u5B9A\u6027\u63D0\u5347"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22447",children:"https://github.com/apache/doris/pull/22447"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22559",children:"https://github.com/apache/doris/pull/22559"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22173",children:"https://github.com/apache/doris/pull/22173"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22678",children:"https://github.com/apache/doris/pull/22678"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"merge-on-write-\u4E3B\u952E\u8868\u7684\u80FD\u529B\u589E\u5F3A",children:"Merge-on-Write \u4E3B\u952E\u8868\u7684\u80FD\u529B\u589E\u5F3A"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22282",children:"https://github.com/apache/doris/pull/22282"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22984",children:"https://github.com/apache/doris/pull/22984"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/21933",children:"https://github.com/apache/doris/pull/21933"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22874",children:"https://github.com/apache/doris/pull/22874"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u8868\u72B6\u6001\u548C\u7EDF\u8BA1\u4FE1\u606F\u7684\u529F\u80FD\u4F18\u5316",children:"\u8868\u72B6\u6001\u548C\u7EDF\u8BA1\u4FE1\u606F\u7684\u529F\u80FD\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22658",children:"https://github.com/apache/doris/pull/22658"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22211",children:"https://github.com/apache/doris/pull/22211"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22775",children:"https://github.com/apache/doris/pull/22775"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22896",children:"https://github.com/apache/doris/pull/22896"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22788",children:"https://github.com/apache/doris/pull/22788"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22882",children:"https://github.com/apache/doris/pull/22882"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"multi-catalog-\u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB",children:"Multi-Catalog \u7684\u529F\u80FD\u4F18\u5316\u53CA\u7A33\u5B9A\u6027\u6539\u8FDB"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22949",children:"https://github.com/apache/doris/pull/22949"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22923",children:"https://github.com/apache/doris/pull/22923"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22336",children:"https://github.com/apache/doris/pull/22336"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22915",children:"https://github.com/apache/doris/pull/22915"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23056",children:"https://github.com/apache/doris/pull/23056"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23297",children:"https://github.com/apache/doris/pull/23297"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23279",children:"https://github.com/apache/doris/pull/23279"})}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"\u95EE\u9898\u4FEE\u590D",children:"\u95EE\u9898\u4FEE\u590D"}),"\n",(0,s.jsx)(i.p,{children:"\u4FEE\u590D\u4E86\u82E5\u5E72\u4E2A 2.0.0 \u7248\u672C\u4E2D\u7684\u95EE\u9898\uFF0C\u4F7F\u7CFB\u7EDF\u7A33\u5B9A\u6027\u5F97\u5230\u8FDB\u4E00\u6B65\u63D0\u5347"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22673",children:"https://github.com/apache/doris/pull/22673"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22656",children:"https://github.com/apache/doris/pull/22656"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22892",children:"https://github.com/apache/doris/pull/22892"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22959",children:"https://github.com/apache/doris/pull/22959"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22902",children:"https://github.com/apache/doris/pull/22902"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22976",children:"https://github.com/apache/doris/pull/22976"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22734",children:"https://github.com/apache/doris/pull/22734"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22840",children:"https://github.com/apache/doris/pull/22840"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23008",children:"https://github.com/apache/doris/pull/23008"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23003",children:"https://github.com/apache/doris/pull/23003"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22966",children:"https://github.com/apache/doris/pull/22966"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22965",children:"https://github.com/apache/doris/pull/22965"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22784",children:"https://github.com/apache/doris/pull/22784"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23049",children:"https://github.com/apache/doris/pull/23049"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23084",children:"https://github.com/apache/doris/pull/23084"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22947",children:"https://github.com/apache/doris/pull/22947"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22919",children:"https://github.com/apache/doris/pull/22919"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22979",children:"https://github.com/apache/doris/pull/22979"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23096",children:"https://github.com/apache/doris/pull/23096"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23113",children:"https://github.com/apache/doris/pull/23113"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23062",children:"https://github.com/apache/doris/pull/23062"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22918",children:"https://github.com/apache/doris/pull/22918"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23026",children:"https://github.com/apache/doris/pull/23026"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23175",children:"https://github.com/apache/doris/pull/23175"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23167",children:"https://github.com/apache/doris/pull/23167"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23015",children:"https://github.com/apache/doris/pull/23015"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23165",children:"https://github.com/apache/doris/pull/23165"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23264",children:"https://github.com/apache/doris/pull/23264"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23246",children:"https://github.com/apache/doris/pull/23246"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23198",children:"https://github.com/apache/doris/pull/23198"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23221",children:"https://github.com/apache/doris/pull/23221"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23277",children:"https://github.com/apache/doris/pull/23277"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23249",children:"https://github.com/apache/doris/pull/23249"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23272",children:"https://github.com/apache/doris/pull/23272"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23383",children:"https://github.com/apache/doris/pull/23383"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23372",children:"https://github.com/apache/doris/pull/23372"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23399",children:"https://github.com/apache/doris/pull/23399"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23295",children:"https://github.com/apache/doris/pull/23295"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23446",children:"https://github.com/apache/doris/pull/23446"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23406",children:"https://github.com/apache/doris/pull/23406"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23387",children:"https://github.com/apache/doris/pull/23387"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23421",children:"https://github.com/apache/doris/pull/23421"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23456",children:"https://github.com/apache/doris/pull/23456"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23361",children:"https://github.com/apache/doris/pull/23361"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23402",children:"https://github.com/apache/doris/pull/23402"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23369",children:"https://github.com/apache/doris/pull/23369"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23245",children:"https://github.com/apache/doris/pull/23245"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23532",children:"https://github.com/apache/doris/pull/23532"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23529",children:"https://github.com/apache/doris/pull/23529"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23601",children:"https://github.com/apache/doris/pull/23601"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F18\u5316\u6539\u8FDB\u53CA\u4FEE\u590D\u95EE\u9898\u7684\u5B8C\u6574\u5217\u8868\u8BF7\u5728 GitHub \u6309\u7167\u6807\u7B7E dev/2.0.1-merged \u8FDB\u884C\u7B5B\u9009\u5373\u53EF\u3002"}),"\n",(0,s.jsx)(i.h1,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,s.jsx)(i.p,{children:"\u5411\u6240\u6709\u53C2\u4E0E Apache Doris 2.0.1 \u7248\u672C\u5F00\u53D1\u548C\u6D4B\u8BD5\u7684\u8D21\u732E\u8005\u4EEC\u8868\u793A\u6700\u8877\u5FC3\u7684\u611F\u8C22\uFF0C\u4ED6\u4EEC\u5206\u522B\u662F\uFF1A"}),"\n",(0,s.jsx)(i.p,{children:"adonis0147\u3001airborne12\u3001amorynan\u3001AshinGau\u3001BePPPower\u3001BiteTheDDDDt\u3001bobhan1\u3001ByteYue\u3001caiconghui\u3001CalvinKirs\u3001csun5285\u3001DarvenDuan\u3001deadlinefen\u3001DongLiang-0\u3001Doris-Extras\u3001dutyu\u3001englefly\u3001freemandealer\u3001Gabriel39\u3001GoGoWen\u3001HappenLee\u3001hello-stephen\u3001HHoflittlefish777\u3001hubgeter\u3001hust-hhb\u3001JackDrogon\u3001jacktengg\u3001jackwener\u3001Jibing-Li\u3001kaijchen\u3001kaka11chen\u3001Kikyou1997\u3001Lchangliang\u3001LemonLiTree\u3001liaoxin01\u3001LiBinfeng-01\u3001lsy3993\u3001luozenglin\u3001morningman\u3001morrySnow\u3001mrhhsg\u3001Mryange\u3001mymeiyi\u3001shuke987\u3001sohardforaname\u3001starocean999\u3001TangSiyang2001\u3001Tanya-W\u3001ucasfl\u3001vinlee19\u3001wangbo\nwsjz\u3001wuwenchi\u3001xiaokang\u3001XieJiann\u3001xinyiZzz\u3001yujun777\u3001Yukang-Lian\u3001Yulei-Yang\u3001zclllyybb\u3001zddr\u3001zenoyang\u3001zgxme\u3001zhangguoqiang666\u3001zhangstar333\u3001zhannngchen\u3001zhiqiang-hhhh\u3001zxealous\u3001zy-kkk\u3001zzzxl1993\u3001zzzzzzzs"})]})}function o(h={}){let{wrapper:i}={...(0,t.a)(),...h.components};return i?(0,s.jsx)(i,{...h,children:(0,s.jsx)(n,{...h})}):n(h)}},250065:function(h,i,l){l.d(i,{Z:function(){return a},a:function(){return c}});var e=l(667294);let s={},t=e.createContext(s);function c(h){let i=e.useContext(t);return e.useMemo(function(){return"function"==typeof h?h(i):{...i,...h}},[i,h])}function a(h){let i;return i=h.disableParentContext?"function"==typeof h.components?h.components(s):h.components||s:c(h.components),e.createElement(t.Provider,{value:i},h.children)}}}]);