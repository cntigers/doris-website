"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["786497"],{126302:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-max","title":"ARRAY_MAX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/array-functions/array-max.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-max","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-max","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_MAX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array"},"next":{"title":"ARRAY_MIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-min"}}'),a=r("785893"),s=r("250065");let l={title:"ARRAY_MAX",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u5143\u7D20\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"ARRAY_MAX(<arr>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<arr>"})}),(0,a.jsx)(e.td,{children:"ARRAY \u6570\u7EC4"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u5143\u7D20\uFF0C\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u6570\u7EC4\u4E2D\u7684",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:["\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,a.jsx)(e.code,{children:"NULL"}),"\u503C\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"create table array_type_table(\n    k1 INT, \n    k2 Array<int>\n        ) \nduplicate key (k1)\ndistributed by hash(k1) buckets 1 \nproperties(\n    'replication_num' = '1'\n    );\ninsert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nselect k2, array_max(k2) from array_type_table;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------+-----------------+\n| k2           | array_max(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               3 |\n| [1, NULL, 3] |               3 |\n+--------------+-----------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);