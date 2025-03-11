"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["137801"],{18384:function(e,n,i){i.r(n),i.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>u,contentTitle:()=>c});var s=JSON.parse('{"id":"query-acceleration/tuning/tuning-execution/data-skew-handling","title":"\u6570\u636E\u503E\u659C\u5904\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/tuning/tuning-execution/data-skew-handling.md","sourceDirName":"query-acceleration/tuning/tuning-execution","slug":"/query-acceleration/tuning/tuning-execution/data-skew-handling","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-execution/data-skew-handling","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6570\u636E\u503E\u659C\u5904\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RuntimeFilter \u7684\u7B49\u5F85\u65F6\u95F4\u8C03\u6574","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-execution/adjustment-of-runtimefilter-wait-time"},"next":{"title":"\u5E76\u884C\u5EA6\u8C03\u6574","permalink":"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-execution/parallelism-adjustment"}}'),t=i("785893"),r=i("250065");let o={title:"\u6570\u636E\u503E\u659C\u5904\u7406",language:"zh-CN"},c="\u6570\u636E\u503E\u659C\u5904\u7406",a={},u=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B 1\uFF1ABucket \u6570\u636E\u503E\u659C\u5BFC\u81F4 shuffle \u65B9\u5F0F\u4E0D\u4F18",id:"\u6848\u4F8B-1bucket-\u6570\u636E\u503E\u659C\u5BFC\u81F4-shuffle-\u65B9\u5F0F\u4E0D\u4F18",level:2},{value:"\u6848\u4F8B 2\uFF1A\u5217\u6570\u636E\u503E\u659C\u5BFC\u81F4 join \u5DE6\u53F3\u8FB9\u98A0\u5012",id:"\u6848\u4F8B-2\u5217\u6570\u636E\u503E\u659C\u5BFC\u81F4-join-\u5DE6\u53F3\u8FB9\u98A0\u5012",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6570\u636E\u503E\u659C\u5904\u7406",children:"\u6570\u636E\u503E\u659C\u5904\u7406"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"Doris \u662F\u4E00\u4E2A MPP \u6570\u636E\u5E93\uFF0C\u4F9D\u8D56\u6570\u636E shuffle \u8FDB\u884C\u5E76\u884C\u7684\u8BA1\u7B97\u52A0\u901F\u3002\u4F46\u662F\u5B9E\u9645\u751F\u4EA7\u573A\u666F\u7ECF\u5E38\u4F1A\u9047\u5230\u56E0\u4E3A\u6570\u636E\u503E\u659C\u5BFC\u81F4\u67E5\u8BE2\u5E76\u884C\u7684\u5355\u7EBF\u7A0B\u7684\u6267\u884C\u74F6\u9888\u3002\u4E0B\u8282\u4ECB\u7ECD\u5982\u4F55\u53D1\u73B0\u8FD9\u7C7B\u95EE\u9898\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u901A\u7528\u7684\u89E3\u51B3\u65B9\u6CD5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4F8B-1bucket-\u6570\u636E\u503E\u659C\u5BFC\u81F4-shuffle-\u65B9\u5F0F\u4E0D\u4F18",children:"\u6848\u4F8B 1\uFF1ABucket \u6570\u636E\u503E\u659C\u5BFC\u81F4 shuffle \u65B9\u5F0F\u4E0D\u4F18"}),"\n",(0,t.jsx)(n.p,{children:"\u5F53 Table \u5728 Join Key \u4E0A\u51FA\u73B0\u6570\u636E\u503E\u659C\u65F6\uFF0C\u6570\u636E\u4F1A\u5728\u4E0D\u540C\u7684 BE instance \u95F4\u4F1A\u5206\u5E03\u4E0D\u5747\uFF0C\u5BFC\u81F4\u5355\u70B9\u7684\u6267\u884C\u74F6\u9888\uFF0C\u8FDB\u800C\u62D6\u6162\u6574\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u65F6\u95F4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"HASH_JOIN_OPERATOR  (id=27): \n      -  PlanInfo \n            -  join  op: INNER  JOIN(PARTITIONED)[] \n            -  equal  join  conjunct:  (customer_number  =  customer_number) \n            -  runtime  filters:  RF001[bloom]  <-  customer_number(200/256/2048) \n            -  cardinality=200         \n            -  vec  output  tuple  id:  28 \n            -  output  tuple  id:  28  \n            -  vIntermediate  tuple  ids:  27 \n            -  hash  output  slot  ids:  192  193  194  195  196  197  198  199  200  201  174  175  240  176  177  178  179  180  181  182  183  184  185  186  187  188  189  190  191 \n            -  project  output  tuple  id:  28 \n      -  BlocksProduced:  sum  4.883K  (4883),  avg  33,  max  39,  min  29 \n      -  CloseTime:  avg  37.28us,  max  132.653us,  min  13.945us  \n      -  ExecTime:  avg  166.206ms,  max  10s947.344ms,  min  8.845ms \n      -  InitTime:  avg  0ns,  max  0ns,  min  0ns  \n      -  MemoryUsage:  sum  ,  avg  ,  max  ,  min \n          -  PeakMemoryUsage:  sum  11.81  MB,  avg  84.00  KB,  max  84.00  KB,  min  84.00  KB \n          -  ProbeKeyArena:  sum  11.81  MB,  avg  84.00  KB,  max  84.00  KB,  min  84.00  KB \n      -  OpenTime:  avg  194.970us,  max  497.685us,  min  93.738us  \n      -  ProbeRows:  sum  23.884018M  (23884018),  avg  165.861K  (165861),  max  219.346276M  (219346276),  min  1984  (1984) \n      -  ProjectionTime:  avg  7.336ms,  max  33.540ms,  min  3.760ms \n      -  RowsProduced:  sum  28.8K  (28800),  avg  200,  max  200,  min  200 \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ECE\u4E0A\u9762\u7684 Join \u7684 Profile \u4E0A max \u6307\u6807\u4E0A\u6765\u770B\uFF0C\u6267\u884C\u65F6\u95F4\u548C ProbeRows \u7684\u6709\u660E\u663E\u7684\u503E\u659C\u60C5\u51B5\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"ExecTime:  avg  166.206ms,  max  10s947.344ms,  min  8.845ms \nProbeRows:  sum  23.884018M  (23884018),  avg  165.861K  (165861),  max  219.346276M  (219346276),  min  1984  (1984) \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u800C\uFF0C\u7531\u4E8E\u6570\u636E\u57FA\u4E8E join key shuffle \u4E4B\u540E\u5206\u5E03\u4E0D\u5747\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4E2D\u4E00\u4E2A\u7EBF\u7A0B\u5904\u7406\u4E86 2 \u4EBF\u884C\u6570\u636E\uFF0C\u800C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u53EA\u5904\u7406\u4E86 \u51E0\u5343\u884C\u6570\u636E\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4E0A\u8FF0 case \u5728\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u5404\u5904\u7406\u7684\u6570\u636E\u662F\u63A5\u8FD1\u7684\u3002\u4F46\u56E0\u4E3A Join \u5217\u6570\u636E\u503E\u659C\u7684\u95EE\u9898\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684\u8BA1\u7B97\u5DE5\u4F5C\u7531\u4E00\u4E2A\u7EBF\u7A0B\u5B8C\u6210\u7684\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u6027\u80FD\u74F6\u9888\uFF0C\u53EF\u4EE5\u53C2\u8003\u201C\u4F7F\u7528 Hint \u63A7\u5236 Join Shuffle \u65B9\u5F0F\u201D\u7AE0\u8282\u4E2D\u63D0\u5230\u7684\u8C03\u4F18\u6280\u5DE7\uFF0C\u6307\u5B9A broadcast join hint \u5982\u4E0B\uFF0C\u8BA9\u5DE6\u8868\u4E0D\u8FDB\u884C\u6570\u636E\u7684 shuffle\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6709\u6548\u907F\u514D\u56E0\u4E3A Join \u5217\u6570\u636E\u503E\u659C\u5BFC\u81F4\u7684\u6027\u80FD\u74F6\u9888\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT COUNT(*) FROM orders o JOIN [broadcast] customer c ON o.customer_number = c.customer_number;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4F8B-2\u5217\u6570\u636E\u503E\u659C\u5BFC\u81F4-join-\u5DE6\u53F3\u8FB9\u98A0\u5012",children:"\u6848\u4F8B 2\uFF1A\u5217\u6570\u636E\u503E\u659C\u5BFC\u81F4 join \u5DE6\u53F3\u8FB9\u98A0\u5012"}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u524D Doris \u4F18\u5316\u5668\u57FA\u4E8E\u6570\u636E\u5747\u5300\u5047\u8BBE\u4F30\u7B97\u9009\u62E9\u7387\uFF0C\u8FC7\u6EE4\u4F30\u884C\u504F\u5DEE\u5927\u4F1A\u5F71\u54CD\u7B97\u5B50\u7684\u8BA1\u5212\u9009\u62E9\u3002\u4EE5\u5982\u4E0B SQL \u4E3A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select count(*) \nfrom orders, customer \nwhere o_custkey = c_custkey\nand o_orderdate < '1920-01-02';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5747\u5300\u5206\u5E03\u7684\u5047\u8BBE\u4E0B\uFF0C\u4F18\u5316\u5668\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u7ECF\u8FC7",(0,t.jsx)(n.code,{children:"o_orderdate < '1920-01-02'"}),"\u8FC7\u6EE4\u540E\u8F93\u51FA\u7684\u884C\u6570\u4F1A\u5C11\u4E8E ",(0,t.jsx)(n.code,{children:"customer"})," \u8868\u7684\u884C\u6570\uFF0C\u56E0\u6B64\u53EF\u80FD\u9009\u62E9",(0,t.jsx)(n.code,{children:"customer"}),"join ",(0,t.jsx)(n.code,{children:"orders"})," \u7684\u8FDE\u63A5\u987A\u5E8F\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4F46\u662F\u5982\u679C\u5B9E\u9645\u6570\u636E\u5B58\u5728\u503E\u659C\uFF0C\u5BFC\u81F4\u6EE1\u8DB3\u6761\u4EF6\u7684 ",(0,t.jsx)(n.code,{children:"orders"})," \u8868\u7684\u6761\u6570\u591A\u4E8E ",(0,t.jsx)(n.code,{children:"customer"})," \uFF0C\u90A3\u4E48\u66F4\u5408\u7406\u7684\u8FDE\u63A5\u987A\u5E8F\u5E94\u8BE5\u662F",(0,t.jsx)(n.code,{children:"orders"}),"join",(0,t.jsx)(n.code,{children:"customer"})," \u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u6027\u80FD\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u201C\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F\u201D\u7AE0\u8282\u4E2D\u63D0\u5230\u7684\u8C03\u4F18\u6280\u5DE7\uFF0C\u6307\u5B9A leading hint \u5982\u4E0B\uFF0C\u5F3A\u5236\u751F\u6210",(0,t.jsx)(n.code,{children:"customer"}),"join ",(0,t.jsx)(n.code,{children:"orders"})," \u7684\u8FDE\u63A5\u987A\u5E8F\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6539\u5199 SQL \u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select /*+leading(orders customer)*/ count(*) \nfrom orders, customer \nwhere o_custkey = c_custkey\nand o_orderdate < '1920-01-02'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636E\u503E\u659C\u662F\u5E38\u89C1\u7684\u751F\u4EA7\u573A\u666F\u6027\u80FD\u95EE\u9898\u3002\u901A\u8FC7 EXPLAIN \u548C PROFILE \u5DE5\u5177\u8F93\u51FA\u89C2\u5BDF\u8BA1\u5212\u548C\u6267\u884C\u74F6\u9888\uFF0C\u5B9A\u4F4D\u503E\u659C\u539F\u56E0\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528 Hint \u5DE5\u5177\u8FDB\u884C\u76F8\u5E94\u7684\u8BA1\u5212\u8C03\u6574\uFF0C\u89C4\u907F\u6570\u636E\u503E\u659C\u5BF9\u6027\u80FD\u7684\u5F71\u54CD\u4E86\u3002"})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var s=i(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);