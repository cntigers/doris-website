"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["885582"],{300039:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright","title":"BIT_SHIFT_RIGHT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitwise-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftright","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BIT_SHIFT_RIGHT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BIT_SHIFT_LEFT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitshiftleft"},"next":{"title":"ARRAY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array"}}'),i=t("785893"),l=t("250065");let c={title:"BIT_SHIFT_RIGHT",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4E8E \u53F3\u79FB \u4F4D\u8FD0\u7B97\uFF0C\u901A\u5E38\u7528\u4E8E\u5C06\u4E8C\u8FDB\u5236\u6570\u5B57\u7684\u6240\u6709\u4F4D\u5411\u53F3\u79FB\u52A8\u6307\u5B9A\u7684\u4F4D\u6570\u3002\u8FD9\u79CD\u64CD\u4F5C\u901A\u5E38\u7528\u4E8E\u5904\u7406\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u6216\u8005\u7528\u4E8E\u4E00\u4E9B\u6570\u5B66\u8BA1\u7B97\uFF08\u5982\u9664\u6CD5\u7684\u9AD8\u6548\u5B9E\u73B0\uFF09\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9 -1 \u903B\u8F91\u53F3\u79FB\u4E00\u4F4D\u5F97\u5230\u7684\u7ED3\u679C\u662F BIGINT_MAX(9223372036854775807)\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9\u6570\u5B57\u53F3\u79FB\u8D1F\u6570\u4E3A\u5F97\u5230\u5BF9\u7ED3\u679C\u59CB\u7EC8\u4E3A 0\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"BIT_SHIFT_RIGHT( <x>, <bits>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<x>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u8FDB\u884C\u4F4D\u79FB\u7684\u6570\u5B57"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<bits>"})}),(0,i.jsxs)(e.td,{children:["\u9700\u8981\u53F3\u79FB\u7684\u4F4D\u6570\u3002\u5B83\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u51B3\u5B9A\u4E86 ",(0,i.jsx)(e.code,{children:"<x>"})," \u5C06\u88AB\u53F3\u79FB\u591A\u5C11\u4F4D"]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u53F3\u79FB\u64CD\u4F5C\u540E\u7684\u7ED3\u679C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select BIT_SHIFT_RIGHT(1024,3), BIT_SHIFT_RIGHT(-1,1), BIT_SHIFT_RIGHT(100, -1);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------------------------+------------------------+--------------------------+\n| bit_shift_right(1024, 3) | bit_shift_right(-1, 1) | bit_shift_right(100, -1) |\n+--------------------------+------------------------+--------------------------+\n|                      128 |    9223372036854775807 |                        0 |\n+--------------------------+------------------------+--------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var s=t(667294);let i={},l=s.createContext(i);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);