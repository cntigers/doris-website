"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["523528"],{835622:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/function/DROP-FUNCTION","title":"DROP FUNCTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/function/DROP-FUNCTION.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/DROP-FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/DROP-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DROP FUNCTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/CREATE-FUNCTION"},"next":{"title":"SHOW CREATE FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION"}}'),s=t("785893"),i=t("250065");let r={title:"DROP FUNCTION",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u4E00\u4E2A\u81EA\u5B9A\u4E49\u51FD\u6570\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP [ GLOBAL ] <function_name> ( <arg_type> )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<function_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u5220\u9664\u7684\u51FD\u6570\u7684\u540D\u5B57\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u540D\u79F0\u9700\u8981\u4E0E\u5EFA\u7ACB\u51FD\u6570\u65F6\u7684\u51FD\u6570\u540D\u79F0\u5B8C\u5168\u4E00\u81F4"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<arg_type>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u5220\u9664\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53C2\u6570\u5217\u8868\u5BF9\u5E94\u4F4D\u7F6E\u9700\u8981\u586B\u5199\u5BF9\u5E94\u4F4D\u7F6E\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1.",(0,s.jsx)(n.code,{children:"GLOBAL"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"GLOBAL \u4E3A\u9009\u586B\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u82E5\u586B\u5199 GLOBAL \u5219\u4E3A\u5168\u5C40\u641C\u7D22\u8BE5\u51FD\u6570\u5E76\u5220\u9664"}),"\n",(0,s.jsx)(n.p,{children:"\u82E5\u4E0D\u586B\u5199 GLOABL \u5219\u53EA\u5728\u5F53\u524D\u6570\u636E\u5E93\u4E0B\u641C\u7D22\u8BE5\u51FD\u6570\u5E76\u5220\u9664"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u51FD\u6570\uFF08\u81EA\u5B9A\u4E49\u51FD\u6570\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"DROP \u5C5E\u4E8E\u7BA1\u7406\u64CD\u4F5C"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u51FD\u6570\u7684\u540D\u5B57\u3001\u53C2\u6570\u7C7B\u578B\u5B8C\u5168\u4E00\u81F4\u624D\u80FD\u591F\u88AB\u5220\u9664"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION my_add(INT, INT)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP GLOBAL FUNCTION my_add(INT, INT)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);