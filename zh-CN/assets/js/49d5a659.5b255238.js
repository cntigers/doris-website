"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["130505"],{829199:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>l,assets:()=>o,toc:()=>u,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/numbers","title":"NUMBERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/numbers.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/numbers","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/numbers","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"NUMBERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_BITMAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/explode-bitmap"},"next":{"title":"EXPLODE_NUMBERS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/explode-numbers"}}'),t=s("785893"),r=s("250065");let c={title:"NUMBERS",language:"zh-CN"},i=void 0,o={},u=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"numbers",children:(0,t.jsx)(e.code,{children:"numbers"})}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:["\u8868\u51FD\u6570\uFF0C\u751F\u6210\u4E00\u5F20\u53EA\u542B\u6709\u4E00\u5217\u7684\u4E34\u65F6\u8868\uFF0C\u5217\u540D\u4E3A",(0,t.jsx)(e.code,{children:"number"}),"\uFF0C\u5982\u679C\u6307\u5B9A\u4E86",(0,t.jsx)(e.code,{children:"const_value"}),"\uFF0C\u5219\u6240\u6709\u5143\u7D20\u503C\u5747\u4E3A",(0,t.jsx)(e.code,{children:"const_value"}),"\uFF0C\u5426\u5219\u4E3A[0,",(0,t.jsx)(e.code,{children:"number"}),")\u9012\u589E\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'numbers(\n  "number" = "n"\n  <, "const_value" = "x">\n  );\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u53C2\u6570\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"number"}),": \u884C\u6570\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"const_value"})," : \u5E38\u91CF\u503C\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'mysql> select * from numbers("number" = "5");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n5 rows in set (0.11 sec)\n\nmysql> select * from numbers("number" = "5", "const_value" = "-123");\n+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n5 rows in set (0.12 sec)\n'})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"numbers, const_value\n"})})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var l=s(667294);let t={},r=l.createContext(t);function c(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);