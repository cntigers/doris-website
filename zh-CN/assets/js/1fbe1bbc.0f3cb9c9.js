"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["120992"],{207002:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>t});var d=JSON.parse('{"id":"table-design/index/prefix-index","title":"\u524D\u7F00\u7D22\u5F15\u4E0E\u6392\u5E8F\u952E","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/index/prefix-index.md","sourceDirName":"table-design/index","slug":"/table-design/index/prefix-index","permalink":"/zh-CN/docs/dev/table-design/index/prefix-index","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u524D\u7F00\u7D22\u5F15\u4E0E\u6392\u5E8F\u952E","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u7D22\u5F15\u6982\u8FF0","permalink":"/zh-CN/docs/dev/table-design/index/index-overview"},"next":{"title":"\u5012\u6392\u7D22\u5F15","permalink":"/zh-CN/docs/dev/table-design/index/inverted-index"}}'),l=i("785893"),s=i("250065");let r={title:"\u524D\u7F00\u7D22\u5F15\u4E0E\u6392\u5E8F\u952E",language:"zh-CN"},t=void 0,c={},h=[{value:"\u7D22\u5F15\u539F\u7406",id:"\u7D22\u5F15\u539F\u7406",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u7BA1\u7406\u7D22\u5F15",id:"\u7BA1\u7406\u7D22\u5F15",level:2},{value:"\u524D\u7F00\u7D22\u5F15\u9009\u62E9\u5EFA\u8BAE",id:"\u524D\u7F00\u7D22\u5F15\u9009\u62E9\u5EFA\u8BAE",level:3},{value:"\u4F7F\u7528\u7D22\u5F15",id:"\u4F7F\u7528\u7D22\u5F15",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function x(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u7D22\u5F15\u539F\u7406",children:"\u7D22\u5F15\u539F\u7406"}),"\n",(0,l.jsx)(n.p,{children:"Doris \u7684\u6570\u636E\u5B58\u50A8\u5728\u7C7B\u4F3C SSTable\uFF08Sorted String Table\uFF09\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u3002\u8BE5\u7ED3\u6784\u662F\u4E00\u79CD\u6709\u5E8F\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u53EF\u4EE5\u6309\u7167\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5217\u8FDB\u884C\u6392\u5E8F\u5B58\u50A8\u3002\u5728\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u4E0A\uFF0C\u4EE5\u6392\u5E8F\u5217\u7684\u5168\u90E8\u6216\u8005\u524D\u9762\u51E0\u4E2A\u4F5C\u4E3A\u6761\u4EF6\u8FDB\u884C\u67E5\u627E\uFF0C\u4F1A\u975E\u5E38\u7684\u9AD8\u6548\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Aggregate\u3001Unique \u548C Duplicate \u4E09\u79CD\u6570\u636E\u6A21\u578B\u4E2D\u3002\u5E95\u5C42\u7684\u6570\u636E\u5B58\u50A8\uFF0C\u662F\u6309\u7167\u5404\u81EA\u5EFA\u8868\u8BED\u53E5\u4E2D\uFF0CAggregate Key\u3001Unique Key \u548C Duplicate Key \u4E2D\u6307\u5B9A\u7684\u5217\u8FDB\u884C\u6392\u5E8F\u5B58\u50A8\u7684\u3002\u8FD9\u4E9B Key\uFF0C\u79F0\u4E3A\u6392\u5E8F\u952E\uFF08Sort Key\uFF09\u3002\u501F\u52A9\u6392\u5E8F\u952E\uFF0C\u5728\u67E5\u8BE2\u65F6\uFF0C\u901A\u8FC7\u7ED9\u6392\u5E8F\u5217\u6307\u5B9A\u6761\u4EF6\uFF0CDoris \u4E0D\u9700\u8981\u626B\u63CF\u5168\u8868\u5373\u53EF\u5FEB\u901F\u627E\u5230\u9700\u8981\u5904\u7406\u7684\u6570\u636E\uFF0C\u964D\u4F4E\u641C\u7D22\u7684\u590D\u6742\u5EA6\uFF0C\u4ECE\u800C\u52A0\u901F\u67E5\u8BE2\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6392\u5E8F\u952E\u7684\u57FA\u7840\u4E0A\uFF0C\u53C8\u5F15\u5165\u4E86\u524D\u7F00\u7D22\u5F15\uFF08Prefix Index\uFF09\u3002\u524D\u7F00\u7D22\u5F15\u662F\u4E00\u79CD\u7A00\u758F\u7D22\u5F15\u3002\u8868\u4E2D\u6309\u7167\u76F8\u5E94\u7684\u884C\u6570\u7684\u6570\u636E\u6784\u6210\u4E00\u4E2A\u903B\u8F91\u6570\u636E\u5757 (Data Block)\u3002\u6BCF\u4E2A\u903B\u8F91\u6570\u636E\u5757\u5728\u524D\u7F00\u7D22\u5F15\u8868\u4E2D\u5B58\u50A8\u4E00\u4E2A\u7D22\u5F15\u9879\uFF0C\u7D22\u5F15\u9879\u7684\u957F\u5EA6\u4E0D\u8D85\u8FC7 36 \u5B57\u8282\uFF0C\u5176\u5185\u5BB9\u4E3A\u6570\u636E\u5757\u4E2D\u7B2C\u4E00\u884C\u6570\u636E\u7684\u6392\u5E8F\u5217\u7EC4\u6210\u7684\u524D\u7F00\uFF0C\u5728\u67E5\u627E\u524D\u7F00\u7D22\u5F15\u8868\u65F6\u53EF\u4EE5\u5E2E\u52A9\u786E\u5B9A\u8BE5\u884C\u6570\u636E\u6240\u5728\u903B\u8F91\u6570\u636E\u5757\u7684\u8D77\u59CB\u884C\u53F7\u3002\u7531\u4E8E\u524D\u7F00\u7D22\u5F15\u6BD4\u8F83\u5C0F\uFF0C\u6240\u4EE5\uFF0C\u53EF\u4EE5\u5168\u91CF\u5728\u5185\u5B58\u7F13\u5B58\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u6570\u636E\u5757\uFF0C\u5927\u5927\u63D0\u5347\u4E86\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u6570\u636E\u5757\u4E00\u884C\u6570\u636E\u7684\u524D 36 \u4E2A\u5B57\u8282\u4F5C\u4E3A\u8FD9\u884C\u6570\u636E\u7684\u524D\u7F00\u7D22\u5F15\u3002\u5F53\u9047\u5230 VARCHAR \u7C7B\u578B\u65F6\uFF0C\u524D\u7F00\u7D22\u5F15\u4F1A\u76F4\u63A5\u622A\u65AD\u3002\u5982\u679C\u7B2C\u4E00\u5217\u5373\u4E3A VARCHAR\uFF0C\u90A3\u4E48\u5373\u4F7F\u6CA1\u6709\u8FBE\u5230 36 \u5B57\u8282\uFF0C\u4E5F\u4F1A\u76F4\u63A5\u622A\u65AD\uFF0C\u540E\u9762\u7684\u5217\u4E0D\u518D\u52A0\u5165\u524D\u7F00\u7D22\u5F15\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,l.jsx)(n.p,{children:"\u524D\u7F00\u7D22\u5F15\u53EF\u4EE5\u52A0\u901F\u7B49\u503C\u67E5\u8BE2\u548C\u8303\u56F4\u67E5\u8BE2\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7BA1\u7406\u7D22\u5F15",children:"\u7BA1\u7406\u7D22\u5F15"}),"\n",(0,l.jsx)(n.p,{children:"\u524D\u7F00\u7D22\u5F15\u6CA1\u6709\u4E13\u95E8\u7684\u8BED\u6CD5\u53BB\u5B9A\u4E49\uFF0C\u5EFA\u8868\u65F6\u81EA\u52A8\u53D6\u8868\u7684 Key \u7684\u524D 36 \u5B57\u8282\u4F5C\u4E3A\u524D\u7F00\u7D22\u5F15\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u524D\u7F00\u7D22\u5F15\u9009\u62E9\u5EFA\u8BAE",children:"\u524D\u7F00\u7D22\u5F15\u9009\u62E9\u5EFA\u8BAE"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsx)(n.p,{children:"\u56E0\u4E3A\u4E00\u4E2A\u8868\u7684 Key \u5B9A\u4E49\u662F\u552F\u4E00\u7684\uFF0C\u6240\u4EE5\u4E00\u4E2A\u8868\u53EA\u6709\u4E00\u7EC4\u524D\u7F00\u7D22\u5F15\uFF0C\u56E0\u6B64\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\u9009\u62E9\u5408\u9002\u7684\u524D\u7F00\u7D22\u5F15\u5F88\u91CD\u8981\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u5EFA\u8BAE\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u9009\u62E9\u67E5\u8BE2\u4E2D\u6700\u5E38\u7528\u4E8E WHERE \u8FC7\u6EE4\u6761\u4EF6\u7684\u5B57\u6BB5\u4F5C\u4E3A Key\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u7EA6\u5E38\u7528\u7684\u5B57\u6BB5\u8D8A\u653E\u5728\u524D\u9762\uFF0C\u56E0\u4E3A\u524D\u7F00\u7D22\u5F15\u53EA\u5BF9 WHERE \u6761\u4EF6\u4E2D\u5B57\u6BB5\u5728 Key \u7684\u524D\u7F00\u4E2D\u624D\u6709\u6548\u3002"}),"\n"]}),(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u5176\u4ED6\u4E0D\u80FD\u547D\u4E2D\u524D\u7F00\u7D22\u5F15\u7684\u5217\u4F5C\u4E3A\u6761\u4EF6\u8FDB\u884C\u7684\u67E5\u8BE2\u6765\u8BF4\uFF0C\u6548\u7387\u4E0A\u53EF\u80FD\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5BF9\u9700\u8981\u52A0\u901F\u67E5\u8BE2\u7684\u6761\u4EF6\u5217\u521B\u5EFA\u5012\u6392\u7D22\u5F15\uFF0C\u7531\u4E8E\u4E00\u4E2A\u8868\u7684\u5012\u6392\u7D22\u5F15\u53EF\u4EE5\u6709\u5F88\u591A\u4E2A\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5BF9\u4E8E Duplicate \u8868\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u76F8\u5E94\u7684\u8C03\u6574\u4E86\u5217\u987A\u5E8F\u7684\u5355\u8868\u5F3A\u4E00\u81F4\u7269\u5316\u89C6\u56FE\u6765\u95F4\u63A5\u5B9E\u73B0\u591A\u79CD\u524D\u7F00\u7D22\u5F15\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003\u67E5\u8BE2\u52A0\u901F/\u7269\u5316\u89C6\u56FE\u3002"}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F7F\u7528\u7D22\u5F15",children:"\u4F7F\u7528\u7D22\u5F15"}),"\n",(0,l.jsx)(n.p,{children:"\u524D\u7F00\u7D22\u5F15\u7528\u4E8E\u52A0\u901F WHERE \u6761\u4EF6\u4E2D\u7684\u7B49\u503C\u548C\u8303\u56F4\u67E5\u8BE2\uFF0C\u80FD\u52A0\u901F\u65F6\u81EA\u52A8\u751F\u6548\uFF0C\u6CA1\u6709\u7279\u6B8A\u8BED\u6CD5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 Query Profile \u4E2D\u7684\u4E0B\u9762\u51E0\u4E2A\u6307\u6807\u5206\u6790\u524D\u7F00\u7D22\u5F15\u7684\u52A0\u901F\u6548\u679C\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"RowsKeyRangeFiltered \u524D\u7F00\u7D22\u5F15\u8FC7\u6EE4\u6389\u7684\u884C\u6570\uFF0C\u53EF\u4EE5\u4E0E\u5176\u4ED6\u51E0\u4E2A Rows \u503C\u5BF9\u6BD4\u5206\u6790\u7D22\u5F15\u8FC7\u6EE4\u6548\u679C"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5047\u5982\u8868\u7684\u6392\u5E8F\u5217\u4E3A\u5982\u4E0B 5 \u5217\uFF0C\u90A3\u4E48\u524D\u7F00\u7D22\u5F15\u4E3A\uFF1Auser_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)\u3002"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"ColumnName"}),(0,l.jsx)(n.th,{children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"user_id"}),(0,l.jsx)(n.td,{children:"BIGINT"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"age"}),(0,l.jsx)(n.td,{children:"INT"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"message"}),(0,l.jsx)(n.td,{children:"VARCHAR(100)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"max_dwell_time"}),(0,l.jsx)(n.td,{children:"DATETIME"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"min_dwell_time"}),(0,l.jsx)(n.td,{children:"DATETIME"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5047\u5982\u8868\u7684\u6392\u5E8F\u5217\u4E3A\u5982\u4E0B 5 \u5217\uFF0C\u5219\u524D\u7F00\u7D22\u5F15\u4E3A user_name(20 Bytes)\u3002\u5373\u4F7F\u6CA1\u6709\u8FBE\u5230 36 \u4E2A\u5B57\u8282\uFF0C\u56E0\u4E3A\u9047\u5230 VARCHAR\uFF0C\u6240\u4EE5\u76F4\u63A5\u622A\u65AD\uFF0C\u4E0D\u518D\u5F80\u540E\u7EE7\u7EED\u3002"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"ColumnName"}),(0,l.jsx)(n.th,{children:"Type"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"user_name"}),(0,l.jsx)(n.td,{children:"VARCHAR(20)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"age"}),(0,l.jsx)(n.td,{children:"INT"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"message"}),(0,l.jsx)(n.td,{children:"VARCHAR(100)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"max_dwell_time"}),(0,l.jsx)(n.td,{children:"DATETIME"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"min_dwell_time"}),(0,l.jsx)(n.td,{children:"DATETIME"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5F53\u6211\u4EEC\u7684\u67E5\u8BE2\u6761\u4EF6\uFF0C\u662F\u524D\u7F00\u7D22\u5F15\u7684\u524D\u7F00\u65F6\uFF0C\u53EF\u4EE5\u6781\u5927\u5730\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6\u3002\u6BD4\u5982\u5728\u7B2C\u4E00\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6267\u884C\u5982\u4E0B\u67E5\u8BE2\uFF1A"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table WHERE user_id=1829239 and age=20;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u67E5\u8BE2\u7684\u6548\u7387\u4F1A\u8FDC\u9AD8\u4E8E\u5982\u4E0B\u67E5\u8BE2\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table WHERE age=20;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4EE5\u5728\u5EFA\u8868\u65F6\uFF0C\u6B63\u786E\u9009\u62E9\u5217\u987A\u5E8F\uFF0C\u80FD\u591F\u6781\u5927\u5730\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var d=i(667294);let l={},s=d.createContext(l);function r(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);