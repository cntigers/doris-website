"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381488"],{738471:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>t,metadata:()=>l,assets:()=>i,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/other-functions/field","title":"FIELD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/other-functions/field.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/other-functions","slug":"/sql-manual/sql-functions/scalar-functions/other-functions/field","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/other-functions/field","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FIELD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CONVERT_TO","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/other-functions/convert-to"},"next":{"title":"ESQUERY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/other-functions/esquery"}}'),c=s("785893"),r=s("250065");let t={title:"FIELD",language:"zh-CN"},a=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(e.p,{children:["\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"<expr>"})," \u5728\u53C2\u6570\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u57FA\u4E8E 1 \u7684\u7D22\u5F15\uFF09\uFF0C\u5E38\u7528\u4E8E ",(0,c.jsx)(e.code,{children:"ORDER BY"})," \u5B50\u53E5\u4E2D\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6392\u5E8F\u3002\u5982\u679C ",(0,c.jsx)(e.code,{children:"<expr>"})," \u4E0D\u5728\u53C2\u6570\u5217\u8868\u4E2D\uFF0C\u6216 ",(0,c.jsx)(e.code,{children:"<expr>"})," \u4E3A ",(0,c.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"0"}),"\u3002\u5728\u81EA\u5B9A\u4E49\u6392\u5E8F\u4E2D\uFF0C\u4E0D\u5728\u53C2\u6570\u5217\u8868\u4E2D\u7684\u6570\u636E\u4F1A\u88AB\u6392\u5230\u6700\u524D\u9762\uFF0C\u53EF\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"asc"})," \u6216 ",(0,c.jsx)(e.code,{children:"desc"})," \u63A7\u5236\u6574\u4F53\u6392\u5E8F\u987A\u5E8F\uFF1B\u5BF9\u4E8E ",(0,c.jsx)(e.code,{children:"NULL"})," \u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"nulls first"})," \u6216 ",(0,c.jsx)(e.code,{children:"nulls last"})," \u63A7\u5236\u6392\u5E8F\u987A\u5E8F\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"FIELD(<expr>, <param> [, ...])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<expr>"})}),(0,c.jsx)(e.td,{children:"\u8981\u641C\u7D22\u7684\u503C\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<param>"})}),(0,c.jsx)(e.td,{children:"\u7528\u4E8E\u6BD4\u8F83\u7684\u4E00\u7CFB\u5217\u503C\u3002"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(e.p,{children:["\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"<expr>"})," \u5728 ",(0,c.jsx)(e.code,{children:"<param>"})," \u53C2\u6570\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u57FA\u4E8E 1 \u7684\u7D22\u5F15\uFF09\u3002\u5982\u679C ",(0,c.jsx)(e.code,{children:"<expr>"})," \u4E0D\u5B58\u5728\u4E8E\u53C2\u6570\u5217\u8868\u4E2D\uFF0C\u6216\u8005 ",(0,c.jsx)(e.code,{children:"<expr>"})," \u4E3A ",(0,c.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE ",(0,c.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT k1, k7 FROM baseall WHERE k1 IN (1,2,3) ORDER BY FIELD(k1,2,1,3);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------+------------+\n| k1   | k7         |\n+------+------------+\n|    2 | wangyu14   |\n|    1 | wangjing04 |\n|    3 | yuanyuan06 |\n+------+------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT class_name FROM class_test ORDER BY FIELD(class_name, 'Suzi', 'Ben', 'Henry');\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------+\n| class_name |\n+------------+\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT class_name FROM class_test ORDER BY FIELD(class_name, 'Suzi', 'Ben', 'Henry') DESC;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------+\n| class_name |\n+------------+\n| Henry      |\n| Henry      |\n| Ben        |\n| Ben        |\n| Suzi       |\n| Suzi       |\n+------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT class_name FROM class_test ORDER BY FIELD(class_name, 'Suzi', 'Ben', 'Henry') NULLS FIRST;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+------------+\n| class_name |\n+------------+\n| NULL       |\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return t}});var l=s(667294);let c={},r=l.createContext(c);function t(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);