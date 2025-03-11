"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["795003"],{374680:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/UNSET-VARIABLE","title":"UNSET VARIABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/session/variable/UNSET-VARIABLE.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/UNSET-VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/UNSET-VARIABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"UNSET VARIABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SET VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/SET-VARIABLE"},"next":{"title":"SHOW VARIABLES","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/SHOW-VARIABLES"}}'),t=s("785893"),i=s("250065");let r={title:"UNSET VARIABLE",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u4E3B\u8981\u662F\u7528\u6765\u6062\u590D Doris \u7CFB\u7EDF\u53D8\u91CF\u4E3A\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u662F\u5168\u5C40\u4E5F\u53EF\u4EE5\u662F\u4F1A\u8BDD\u7EA7\u522B\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UNSET [<effective_scope>] VARIABLE (<variable_name>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<variable_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5B9A\u53D8\u91CF\u540D\u79F0\uFF0C\u5982\u679C\u9700\u8981 unset \u5168\u90E8\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5199\u4E00\u4E2A",(0,t.jsx)(n.code,{children:"ALL"}),"\u5173\u952E\u5B57"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<effective_scope>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u751F\u6548\u8303\u56F4\u7684\u53D6\u503C\u53EF\u4EE5\u662F",(0,t.jsx)(n.code,{children:"GLOBAL"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"SESSION"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"LOCAL"}),"\u4E4B\u4E00\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u8BE5\u503C\uFF0C\u9ED8\u8BA4\u4E3A",(0,t.jsx)(n.code,{children:"SESSION"}),"\u3002",(0,t.jsx)(n.code,{children:"LOCAL"}),"\u662F",(0,t.jsx)(n.code,{children:"SESSION"}),"\u7684\u4E00\u4E2A\u522B\u540D\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Session"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"unset global variables \u9700\u8981 admin \u6743\u9650"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53EA\u6709 ADMIN \u7528\u6237\u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF\u7684\u5168\u5C40\u751F\u6548"}),"\n",(0,t.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"GLOBAL"})," \u6062\u590D\u53D8\u91CF\u503C\u65F6\u4EC5\u5728\u6267\u884C\u547D\u4EE4\u7684\u5F53\u524D\u4F1A\u8BDD\u548C\u4E4B\u540E\u6253\u5F00\u7684\u4F1A\u8BDD\u4E2D\u751F\u6548\uFF0C\u4E0D\u4F1A\u6062\u590D\u5F53\u524D\u5DF2\u6709\u7684\u5176\u5B83\u4F1A\u8BDD\u4E2D\u7684\u503C\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6062\u590D\u65F6\u533A\u4E3A\u9ED8\u8BA4\u503C\u4E1C\u516B\u533A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"UNSET VARIABLE time_zone;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6062\u590D\u5168\u5C40\u7684\u6267\u884C\u5185\u5B58\u5927\u5C0F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"UNSET GLOBAL VARIABLE exec_mem_limit;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4ECE\u5168\u5C40\u8303\u56F4\u6062\u590D\u6240\u6709\u53D8\u91CF\u7684\u503C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"UNSET GLOBAL VARIABLE ALL;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);