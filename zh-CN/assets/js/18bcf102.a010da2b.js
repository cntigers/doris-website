"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["316343"],{844739:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"query-acceleration/tuning/parallelism-tuning","title":"\u5E76\u884C\u5EA6\u8C03\u4F18","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/tuning/parallelism-tuning.md","sourceDirName":"query-acceleration/tuning","slug":"/query-acceleration/tuning/parallelism-tuning","permalink":"/zh-CN/docs/query-acceleration/tuning/parallelism-tuning","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5E76\u884C\u5EA6\u8C03\u4F18","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5E38\u89C1\u8C03\u4F18\u53C2\u6570","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-parameters"},"next":{"title":"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD","permalink":"/zh-CN/docs/query-acceleration/optimization-technology-principle/query-optimizer"}}'),r=l("785893"),s=l("250065");let t={title:"\u5E76\u884C\u5EA6\u8C03\u4F18",language:"zh-CN"},a="\u5E76\u884C\u5EA6\u8C03\u4F18",c={},o=[{value:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u539F\u5219",id:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u539F\u5219",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u65B9\u6CD5",id:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u65B9\u6CD5",level:2},{value:"SQL \u7EA7\u522B\u8C03\u6574\uFF1A",id:"sql-\u7EA7\u522B\u8C03\u6574",level:3},{value:"\u4F1A\u8BDD\u7EA7\u522B\u8C03\u6574\uFF1A",id:"\u4F1A\u8BDD\u7EA7\u522B\u8C03\u6574",level:4},{value:"\u5168\u5C40\u8C03\u6574\uFF1A",id:"\u5168\u5C40\u8C03\u6574",level:4}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5E76\u884C\u5EA6\u8C03\u4F18",children:"\u5E76\u884C\u5EA6\u8C03\u4F18"})}),"\n",(0,r.jsx)(n.p,{children:"Doris \u7684\u67E5\u8BE2\u662F\u4E00\u4E2A MPP \u7684\u6267\u884C\u6846\u67B6\uFF0C\u6BCF\u4E00\u6761\u67E5\u8BE2\u90FD\u4F1A\u5728\u591A\u4E2A BE \u4E0A\u5E76\u884C\u6267\u884C\uFF1B\u540C\u65F6\uFF0C\u5728\u5355\u4E2A BE \u5185\u90E8\u4E5F\u4F1A\u91C7\u7528\u591A\u7EBF\u7A0B\u5E76\u884C\u7684\u65B9\u5F0F\u6765\u52A0\u901F\u67E5\u8BE2\u7684\u6267\u884C\u6548\u7387\uFF0C\u76EE\u524D\u6240\u6709\u7684\u8BED\u53E5\uFF08\u5305\u62EC Query\uFF0CDML\uFF0CDDL\uFF09\u5747\u652F\u6301\u5E76\u884C\u6267\u884C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5355\u4E2A BE \u5185\u5E76\u884C\u5EA6\u7684\u63A7\u5236\u53C2\u6570\u662F\uFF1Aparallel_pipeline_task_num\uFF0C\u662F\u6307\u5355\u4E2A Fragment \u5728\u6267\u884C\u65F6\u6240\u4F7F\u7528\u7684\u5DE5\u4F5C\u4EFB\u52A1\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u539F\u5219",children:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u539F\u5219"}),"\n",(0,r.jsx)(n.p,{children:"parallel_pipeline_task_num \u8BBE\u5B9A\u76EE\u7684\u662F\u4E3A\u4E86\u5145\u5206\u5229\u7528\u591A\u6838\u8D44\u6E90\uFF0C\u964D\u4F4E\u67E5\u8BE2\u7684\u5EF6\u8FDF\uFF1B\u4F46\u662F\uFF0C\u4E3A\u4E86\u591A\u6838\u5E76\u884C\u6267\u884C\uFF0C\u901A\u5E38\u4F1A\u5F15\u5165\u4E00\u4E9B\u6570\u636E Shuffle \u7B97\u5B50\uFF0C\u4EE5\u53CA\u591A\u7EBF\u7A0B\u4E4B\u95F4\u540C\u6B65\u7684\u903B\u8F91\uFF0C\u8FD9\u4E5F\u4F1A\u5E26\u6765\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\u6D6A\u8D39\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Doris \u4E2D\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u5373 BE \u7684 CPU \u6838\u6570\u76EE\u7684\u4E00\u534A\uFF0C\u8FD9\u4E2A\u503C\u8003\u8651\u4E86\u5355\u67E5\u8BE2\u548C\u5E76\u53D1\u7684\u8D44\u6E90\u5229\u7528\u7684\u60C5\u51B5\uFF0C\u901A\u5E38\u4E0D\u9700\u8981\u7528\u6237\u4ECB\u5165\u8C03\u6574\u3002\u5F53\u5B58\u5728\u6027\u80FD\u74F6\u9888\u65F6\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u793A\u4F8B\u8FDB\u884C\u5FC5\u8981\u7684\u8C03\u6574\u3002Doris \u5728\u6301\u7EED\u5B8C\u5584\u81EA\u9002\u5E94\u7684\u7B56\u7565\uFF0C\u901A\u5E38\u5EFA\u8BAE\u5728\u7279\u5B9A\u573A\u666F\u6216 SQL \u7EA7\u522B\u8FDB\u884C\u5FC5\u8981\u7684\u8C03\u6574\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8BBE BE \u7684 CPU \u6838\u6570\u4E3A 16\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5BF9\u4E8E\u5355\u8868\u7684\u7B80\u5355\u64CD\u4F5C\uFF08\u5982\u5355\u8868\u70B9\u5DEE\u3001where \u626B\u63CF\u83B7\u53D6\u5C11\u91CF\u6570\u636E\uFF0Climit \u5C11\u91CF\u6570\u636E\uFF0C\u547D\u4E2D\u7269\u5316\u89C6\u56FE) ",(0,r.jsx)(n.strong,{children:"\u5E76\u884C\u5EA6\u53EF\u8BBE\u7F6E\u4E3A 1"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A\u5355\u8868\u7684\u7B80\u5355\u64CD\u4F5C\uFF0C\u53EA\u6709\u4E00\u4E2A Fragment\uFF0C\u67E5\u8BE2\u7684\u74F6\u9888\u901A\u5E38\u5728\u6570\u636E\u626B\u63CF\u5904\u7406\u4E0A\uFF0C\u6570\u636E\u626B\u63CF\u7EBF\u7A0B\u548C\u67E5\u8BE2\u6267\u884C\u7684\u7EBF\u7A0B\u662F\u5206\u5F00\u7684\uFF0C\u6570\u636E\u626B\u63CF\u7EBF\u7A0B\u4F1A\u81EA\u9002\u5E94\u7684\u505A\u5E76\u884C\u7684\u626B\u63CF\uFF0C\u8FD9\u91CC\u7684\u74F6\u9888\u4E0D\u662F\u67E5\u8BE2\u7EBF\u7A0B\uFF0C\u5E76\u884C\u5EA6\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3A 1\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u5BF9\u4E8E\u4E24\u8868 ",(0,r.jsx)(n.code,{children:"JOIN"})," \u7684\u67E5\u8BE2/\u805A\u5408\u67E5\u8BE2\uFF0C\u5982\u679C\u6570\u636E\u91CF\u5F88\u5927\uFF0C\u786E\u8BA4\u662F CPU \u74F6\u9888\u578B\u67E5\u8BE2\uFF0C",(0,r.jsx)(n.strong,{children:"\u5E76\u884C\u5EA6\u53EF\u8BBE\u7F6E\u4E3A 16"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8BF4\u660E\uFF1A\u5BF9\u4E8E\u4E24\u8868 ",(0,r.jsx)(n.code,{children:"JOIN"}),"/\u805A\u5408\u67E5\u8BE2\uFF0C\u8FD9\u7C7B\u6570\u636E\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684\u67E5\u8BE2\uFF0C\u5982\u679C\u89C2\u5BDF CPU \u6CA1\u6709\u6253\u6EE1\uFF0C\u53EF\u4EE5\u8003\u8651\u5728\u9ED8\u8BA4\u503C\u7684\u57FA\u7840\u4E0A\uFF0C\u7EE7\u7EED\u8C03\u5927\u5E76\u884C\u5EA6\uFF0C\u5229\u7528 Pipeline \u6267\u884C\u5F15\u64CE\u7684\u5E76\u884C\u80FD\u529B\uFF0C\u5145\u5206\u5229\u7528 CPU \u8D44\u6E90\u53C2\u4E0E\u8BA1\u7B97\u3002\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6BCF\u4E2A PipelineTask \u90FD\u80FD\u5C06\u5206\u914D\u7ED9\u5B83\u7684 CPU \u8D44\u6E90\u4F7F\u7528\u5230\u6781\u9650\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u9002\u5F53\u8C03\u6574\u5E76\u884C\u5EA6\uFF0C\u6BD4\u5982\u8BBE\u4E3A 16\uFF0C\u4EE5\u66F4\u5145\u5206\u5730\u5229\u7528 CPU\u3002\u7136\u800C\uFF0C\u4E0D\u5E94\u65E0\u9650\u5236\u5730\u589E\u52A0\u5E76\u884C\u5EA6\uFF0C\u8BBE\u7F6E\u4E3A 48 \u6839\u672C\u4E0D\u4F1A\u5E26\u6765\u5B9E\u8D28\u6027\u7684\u6536\u76CA\uFF0C\u53CD\u800C\u4F1A\u589E\u52A0\u7EBF\u7A0B\u8C03\u5EA6\u5F00\u9500\u548C\u6846\u67B6\u8C03\u5EA6\u5F00\u9500\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\u5BF9\u4E8E\u538B\u529B\u6D4B\u8BD5\u573A\u666F\uFF0C\u538B\u6D4B\u7684\u591A\u4E2A\u67E5\u8BE2\u7684\u4EFB\u52A1\u672C\u8EAB\u5C31\u80FD\u591F\u5145\u5206\u5229\u7528 CPU\uFF0C\u53EF\u4EE5\u8003\u8651",(0,r.jsx)(n.strong,{children:"\u5E76\u884C\u5EA6\u8BBE\u7F6E\u4E3A 1"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A\u5BF9\u4E8E\u538B\u529B\u6D4B\u8BD5\u573A\u666F\uFF0C\u538B\u6D4B\u7684\u67E5\u8BE2\u7684\u4EFB\u52A1\u8DB3\u591F\u591A\u3002\u8FC7\u5927\u7684\u5E76\u884C\u5EA6\u540C\u6837\u5E26\u6765\u4E86\u7EBF\u7A0B\u8C03\u5EA6\u5F00\u9500\u548C\u6846\u67B6\u8C03\u5EA6\u5F00\u9500\uFF0C\u8FD9\u91CC\u9700\u8981\u8BBE\u7F6E\u4E3A 1 \u662F\u6BD4\u8F83\u5408\u7406\u7684\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u590D\u6742\u67E5\u8BE2\u7684\u60C5\u51B5\u8981\u6839\u636E Profile \u548C\u673A\u5668\u8D1F\u8F7D\uFF0C\u7075\u6D3B\u8C03\u6574\uFF0C\u8FD9\u91CC\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0D\u5408\u9002\u53EF\u4EE5\u5C1D\u8BD5 4-2-1 \u7684\u9636\u68AF\u65B9\u5F0F\u8C03\u6574\uFF0C\u89C2\u5BDF\u67E5\u8BE2\u8868\u73B0\u548C\u673A\u5668\u8D1F\u8F7D\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u65B9\u6CD5",children:"\u5E76\u884C\u5EA6\u8C03\u4F18\u7684\u65B9\u6CD5"}),"\n",(0,r.jsx)(n.p,{children:"Doris \u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u67E5\u8BE2\u7684\u5E76\u884C\u5EA6\uFF0C\u4EE5\u8C03\u6574\u67E5\u8BE2\u6267\u884C\u65F6\u5E76\u884C\u6267\u884C\u7684\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"sql-\u7EA7\u522B\u8C03\u6574",children:"SQL \u7EA7\u522B\u8C03\u6574\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 SQL HINT \u6765\u6307\u5B9A\u5355\u4E2A SQL \u7684\u5E76\u884C\u5EA6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7075\u6D3B\u63A7\u5236\u4E0D\u540C SQL \u7684\u5E76\u884C\u5EA6\u6765\u53D6\u5F97\u6700\u4F73\u7684\u6267\u884C\u6548\u679C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'select /*SET_VAR("parallel_pipeline_task_num=8")*/ * from nation, lineitem where lineitem.l_suppkey = nation.n_nationkey\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F1A\u8BDD\u7EA7\u522B\u8C03\u6574",children:"\u4F1A\u8BDD\u7EA7\u522B\u8C03\u6574\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 session variables \u6765\u8C03\u6574\u4F1A\u8BDD\u7EA7\u522B\u7684\u5E76\u884C\u5EA6\uFF0Csession \u4E2D\u7684\u6240\u6709\u67E5\u8BE2\u8BED\u53E5\u90FD\u5C06\u4EE5\u6307\u5B9A\u7684\u5E76\u884C\u5EA6\u6267\u884C\u3002\u8BF7\u6CE8\u610F\uFF0C\u5373\u4F7F\u662F\u5355\u884C\u67E5\u8BE2\u7684 SQL\uFF0C\u4E5F\u4F1A\u4F7F\u7528\u8BE5\u5E76\u884C\u5EA6\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"set parallel_pipeline_task_num = 8;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5168\u5C40\u8C03\u6574",children:"\u5168\u5C40\u8C03\u6574\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u5168\u5C40\u8C03\u6574\uFF0C\u901A\u5E38\u6D89\u53CA cpu \u5229\u7528\u7387\u7684\u8C03\u6574\uFF0C\u53EF\u4EE5 global \u8BBE\u7F6E\u5E76\u884C\u5EA6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"set global parallel_pipeline_task_num = 8;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return t}});var i=l(667294);let r={},s=i.createContext(r);function t(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);