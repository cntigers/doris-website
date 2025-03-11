"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["327494"],{471836:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/SET-VARIABLE","title":"SET VARIABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/session/variable/SET-VARIABLE.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/SET-VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/SET-VARIABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SET VARIABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"USE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/context/USE-DATABASE"},"next":{"title":"UNSET VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/UNSET-VARIABLE"}}'),t=s("785893"),i=s("250065");let r={title:"SET VARIABLE",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u4E3B\u8981\u662F\u7528\u6765\u4FEE\u6539 Doris \u7CFB\u7EDF\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u53EF\u4EE5\u5206\u4E3A\u5168\u5C40\u4EE5\u53CA\u4F1A\u8BDD\u7EA7\u522B\u5C42\u9762\u6765\u4FEE\u6539\uFF0C\u6709\u4E9B\u4E5F\u53EF\u4EE5\u8FDB\u884C\u52A8\u6001\u4FEE\u6539\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"SHOW VARIABLE"})," \u6765\u67E5\u770B\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET variable_assignment [, variable_assignment] [ ... ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4E2D"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"variable_assignment\n  : <user_var_name> = <expr>\n  | [ <effective_scope> ] <system_var_name> = <expr>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<user_var_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5B9A\u7528\u6237\u5C42\u7EA7\u7684\u53D8\u91CF\uFF0C\u6BD4\u5982\uFF1A@@your_variable_name \u7B49\u4EE5",(0,t.jsx)(n.code,{children:"@@"}),"\u5F00\u5934\u7684\u53D8\u91CF\u540D\u79F0"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<system_var_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u7CFB\u7EDF\u5C42\u7EA7\u7684\u53D8\u91CF\uFF0C\u6BD4\u5982 exec_mem_limit \u7B49"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<effective_scope>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u751F\u6548\u8303\u56F4\u7684\u53D6\u503C\u53EF\u4EE5\u662F",(0,t.jsx)(n.code,{children:"GLOBAL"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"SESSION"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"LOCAL"}),"\u4E4B\u4E00\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u8BE5\u503C\uFF0C\u9ED8\u8BA4\u4E3A",(0,t.jsx)(n.code,{children:"SESSION"}),"\u3002",(0,t.jsx)(n.code,{children:"LOCAL"}),"\u662F",(0,t.jsx)(n.code,{children:"SESSION"}),"\u7684\u4E00\u4E2A\u522B\u540D\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Session"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"set global variables \u9700\u8981 admin \u6743\u9650"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53EA\u6709 ADMIN \u7528\u6237\u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF\u7684\u5168\u5C40\u751F\u6548"}),"\n",(0,t.jsx)(n.li,{children:"\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u5F71\u54CD\u5F53\u524D\u4F1A\u8BDD\u548C\u6B64\u540E\u7684\u65B0\u4F1A\u8BDD\uFF0C\u4E0D\u5F71\u54CD\u5F53\u524D\u5DF2\u7ECF\u5B58\u5728\u7684\u5176\u4ED6\u4F1A\u8BDD\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E1C\u516B\u533A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'SET time_zone = "Asia/Shanghai";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5168\u5C40\u7684\u6267\u884C\u5185\u5B58\u5927\u5C0F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET GLOBAL exec_mem_limit = 137438953472\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237\u53D8\u91CF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET @@your_variable_name = your_variable_value;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);