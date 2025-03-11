"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["39740"],{454279:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>s});var l=JSON.parse('{"id":"data-operate/delete/delete-overview","title":"\u5220\u9664\u64CD\u4F5C\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/delete/delete-overview.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/delete-overview","permalink":"/zh-CN/docs/dev/data-operate/delete/delete-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5220\u9664\u64CD\u4F5C\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u5E76\u53D1\u63A7\u5236","permalink":"/zh-CN/docs/dev/data-operate/update/unique-update-concurrent-control"},"next":{"title":"Delete \u64CD\u4F5C","permalink":"/zh-CN/docs/dev/data-operate/delete/delete-manual"}}'),r=t("785893"),i=t("250065");let d={title:"\u5220\u9664\u64CD\u4F5C\u6982\u8FF0",language:"zh-CN"},s=void 0,a={},c=[{value:"DELETE \u8BED\u53E5",id:"delete-\u8BED\u53E5",level:3},{value:"\u5206\u533A\u5220\u9664",id:"\u5206\u533A\u5220\u9664",level:3},{value:"\u6574\u8868\u5220\u9664",id:"\u6574\u8868\u5220\u9664",level:3},{value:"\u5220\u9664\u6807\u8BB0\uFF08Delete Sign\uFF09",id:"\u5220\u9664\u6807\u8BB0delete-sign",level:3},{value:"\u4F7F\u7528\u4E34\u65F6\u5206\u533A\u5B9E\u73B0\u539F\u5B50\u8986\u76D6\u5199",id:"\u4F7F\u7528\u4E34\u65F6\u5206\u533A\u5B9E\u73B0\u539F\u5B50\u8986\u76D6\u5199",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728 Apache Doris \u4E2D\uFF0C\u5220\u9664\u64CD\u4F5C\uFF08Delete\uFF09\u662F\u4E00\u9879\u5173\u952E\u529F\u80FD\uFF0C\u7528\u4E8E\u7BA1\u7406\u548C\u6E05\u7406\u6570\u636E\uFF0C\u4EE5\u6EE1\u8DB3\u7528\u6237\u5728\u5927\u89C4\u6A21\u6570\u636E\u5206\u6790\u573A\u666F\u4E2D\u7684\u7075\u6D3B\u6027\u9700\u6C42\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86\u4E30\u5BCC\u591A\u6837\u7684\u5220\u9664\u529F\u80FD\u652F\u6301\uFF0C\u5305\u62EC\uFF1ADELETE \u8BED\u53E5\u3001\u5220\u9664\u6807\u8BB0\uFF08delete sign\uFF09\u3001\u5206\u533A\u5220\u9664\u3001\u5168\u8868\u5220\u9664\u4EE5\u53CA\u4F7F\u7528\u4E34\u65F6\u5206\u533A\u5B9E\u73B0\u539F\u5B50\u8986\u76D6\u5199\u7B49\u529F\u80FD\u3002\u4E0B\u9762\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u6BCF\u4E00\u9879\u529F\u80FD\uFF1A"}),"\n",(0,r.jsx)(n.h3,{id:"delete-\u8BED\u53E5",children:"DELETE \u8BED\u53E5"}),"\n",(0,r.jsx)(n.p,{children:"\u5220\u9664\u6570\u636E\u65F6\u6700\u5E38\u7528\u7684\u662F DELETE \u8BED\u53E5\uFF0C\u8BE5\u529F\u80FD\u652F\u6301\u6240\u6709\u8868\u6A21\u578B\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u5B83\u5220\u9664\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.p,{children:"DELETE \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name WHERE condition;\n"})}),"\n",(0,r.jsx)(n.p,{children:"DELETE \u8BED\u53E5\u57FA\u672C\u80FD\u6EE1\u8DB3\u5927\u90E8\u5206\u7528\u6237\u5728\u4F7F\u7528 Doris \u8FC7\u7A0B\u4E2D\u7684\u5220\u9664\u9700\u6C42\uFF0C\u4F46\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u5B83\u5E76\u4E0D\u662F\u6700\u9AD8\u6548\u7684\u3002\u4E3A\u4E86\u7075\u6D3B\u9AD8\u6548\u5730\u6EE1\u8DB3\u7528\u6237\u5728\u5404\u7C7B\u573A\u666F\u7684\u5220\u9664\u9700\u6C42\uFF0CDoris \u8FD8\u63D0\u4F9B\u4E86\u5982\u4E0B\u51E0\u79CD\u5220\u9664\u65B9\u5F0F\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u533A\u5220\u9664",children:"\u5206\u533A\u5220\u9664"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u901A\u8FC7\u65E5\u671F\u5206\u533A\u7B49\u65B9\u5F0F\u6765\u7BA1\u7406\u6570\u636E\u662F\u5F88\u5E38\u89C1\u7684\u5B9E\u8DF5\u3002\u5F88\u591A\u7528\u6237\u53EA\u9700\u8981\u4FDD\u7559\u6700\u8FD1\u4E00\u6BB5\u65F6\u95F4\u7684\u6570\u636E\uFF08\u4F8B\u5982 7 \u5929\uFF09\uFF0C\u5BF9\u4E8E\u8FC7\u671F\u7684\u6570\u636E\u5206\u533A\uFF0C\u53EF\u4EE5\u91C7\u7528\u5206\u533A\u5220\u9664\uFF08truncate partition\uFF09\u529F\u80FD\u6765\u8FDB\u884C\u9AD8\u6548\u7684\u5220\u9664\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u6BD4 DELETE \u8BED\u53E5\uFF0C\u5206\u533A\u5220\u9664\u53EA\u9700\u8981\u4FEE\u6539\u4E00\u4E9B\u5206\u533A\u5143\u6570\u636E\u5373\u53EF\u5B8C\u6210\u5220\u9664\uFF0C\u662F\u8FD9\u79CD\u573A\u666F\u4E0B\u6700\u4F73\u7684\u5220\u9664\u65B9\u5F0F\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u533A\u5220\u9664\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6574\u8868\u5220\u9664",children:"\u6574\u8868\u5220\u9664"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u8868\u5220\u9664\u9002\u7528\u4E8E\u5FEB\u901F\u6E05\u7A7A\u8868\u4E14\u4FDD\u7559\u8868\u7ED3\u6784\u7684\u573A\u666F\uFF0C\u4F8B\u5982\u5728\u79BB\u7EBF\u5206\u6790\u573A\u666F\u4E2D\u9700\u8981\u91CD\u505A\u6570\u636E\u65F6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u8868\u5220\u9664\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE table_name;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5220\u9664\u6807\u8BB0delete-sign",children:"\u5220\u9664\u6807\u8BB0\uFF08Delete Sign\uFF09"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636E\u5220\u9664\u53EF\u4EE5\u89C6\u4F5C\u6570\u636E\u66F4\u65B0\u7684\u4E00\u79CD\u60C5\u51B5\u3002\u56E0\u6B64\uFF0C\u5728\u5177\u6709\u66F4\u65B0\u80FD\u529B\u7684\u4E3B\u952E\u6A21\u578B\uFF08Unique Key\uFF09\u4E0A\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5220\u9664\u6807\u8BB0\u529F\u80FD\uFF0C\u4F7F\u7528\u6570\u636E\u66F4\u65B0\u7684\u65B9\u5F0F\u5B9E\u73B0\u5220\u9664\u64CD\u4F5C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u5982\u5728 CDC \u6570\u636E\u540C\u6B65\u573A\u666F\u4E2D\uFF0CCDC \u7A0B\u5E8F\u53EF\u4EE5\u5C06\u4E00\u6761 DELETE \u64CD\u4F5C\u7684 binlog \u6253\u4E0A\u5220\u9664\u6807\u8BB0\uFF0C\u5F53\u8FD9\u6761\u6570\u636E\u5199\u5165 Doris \u65F6\uFF0C\u5C31\u4F1A\u5220\u9664\u6389\u5BF9\u5E94\u7684\u4E3B\u952E\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u76F8\u5BF9\u4E8E DELETE \u8BED\u53E5\u6765\u8BF4\uFF0C\u53EF\u4EE5\u6279\u91CF\u8FDB\u884C\u5927\u91CF\u4E3B\u952E\u7684\u5220\u9664\u64CD\u4F5C\uFF0C\u6548\u7387\u8F83\u9AD8\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664\u6807\u8BB0\u5C5E\u4E8E\u9AD8\u7EA7\u529F\u80FD\uFF0C\u4F7F\u7528\u8D77\u6765\u76F8\u6BD4\u524D\u51E0\u79CD\u8981\u66F4\u590D\u6742\u4E00\u4E9B\uFF0C\u8BE6\u7EC6\u7684\u7528\u6CD5\u8BF7\u53C2\u8003\u6587\u6863",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/data-operate/delete/delete-overview",children:"\u6279\u91CF\u5220\u9664"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528\u4E34\u65F6\u5206\u533A\u5B9E\u73B0\u539F\u5B50\u8986\u76D6\u5199",children:"\u4F7F\u7528\u4E34\u65F6\u5206\u533A\u5B9E\u73B0\u539F\u5B50\u8986\u76D6\u5199"}),"\n",(0,r.jsxs)(n.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5E0C\u671B\u80FD\u591F\u91CD\u5199\u67D0\u4E00\u5206\u533A\u7684\u6570\u636E\uFF0C\u4F46\u5982\u679C\u91C7\u7528\u5148\u5220\u9664\u518D\u5BFC\u5165\u7684\u65B9\u5F0F\u8FDB\u884C\uFF0C\u5728\u4E2D\u95F4\u4F1A\u6709\u4E00\u6BB5\u65F6\u95F4\u65E0\u6CD5\u67E5\u770B\u6570\u636E\u3002\u8FD9\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684\u4E34\u65F6\u5206\u533A\uFF0C\u5C06\u65B0\u7684\u6570\u636E\u5BFC\u5165\u5230\u4E34\u65F6\u5206\u533A\u540E\uFF0C\u901A\u8FC7\u66FF\u6362\u64CD\u4F5C\uFF0C\u539F\u5B50\u6027\u5730\u66FF\u6362\u539F\u6709\u5206\u533A\uFF0C\u4EE5\u8FBE\u5230\u76EE\u7684\u3002\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u53C2\u8003\u6587\u6863",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/data-operate/delete/atomicity-replace",children:"\u8868\u539F\u5B50\u66FF\u6362"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5220\u9664\u64CD\u4F5C\u4F1A\u751F\u6210\u65B0\u7684\u6570\u636E\u7248\u672C\uFF0C\u56E0\u6B64\u9891\u7E41\u6267\u884C\u5220\u9664\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7248\u672C\u6570\u91CF\u589E\u52A0\uFF0C\u4ECE\u800C\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5220\u9664\u540E\u7684\u6570\u636E\u5728\u5408\u5E76\u538B\u7F29\u5B8C\u6210\u4E4B\u524D\u4ECD\u4F1A\u5360\u7528\u5B58\u50A8\uFF0C\u56E0\u6B64\u5220\u9664\u64CD\u4F5C\u672C\u8EAB\u4E0D\u4F1A\u7ACB\u5373\u964D\u4F4E\u5B58\u50A8\u4F7F\u7528\u3002"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var l=t(667294);let r={},i=l.createContext(r);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);