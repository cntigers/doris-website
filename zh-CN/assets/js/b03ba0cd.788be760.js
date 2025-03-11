"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["779775"],{232123:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/greatest","title":"GREATEST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/greatest.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/greatest","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/greatest","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"GREATEST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NEGATIVE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/negative"},"next":{"title":"LEAST","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/least"}}'),c=s("785893"),t=s("250065");let i={title:"GREATEST",language:"zh-CN"},r=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(n.p,{children:["\u6BD4\u8F83\u591A\u4E2A\u8868\u8FBE\u5F0F\u7684\u5927\u5C0F\uFF0C\u5E76\u8FD4\u56DE\u5176\u4E2D\u7684\u6700\u5927\u503C\u3002\u5982\u679C\u4EFB\u610F\u53C2\u6570\u4E3A ",(0,c.jsx)(n.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE ",(0,c.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"GREATEST(<expr> [, ...])\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53C2\u6570"}),(0,c.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<expr>"})}),(0,c.jsxs)(n.td,{children:["\u9700\u8981\u6BD4\u8F83\u7684\u591A\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u652F\u6301 ",(0,c.jsx)(n.code,{children:"TINYINT"}),"\u3001",(0,c.jsx)(n.code,{children:"SMALLINT"}),"\u3001",(0,c.jsx)(n.code,{children:"INT"}),"\u3001",(0,c.jsx)(n.code,{children:"BIGINT"}),"\u3001",(0,c.jsx)(n.code,{children:"LARGEINT"}),"\u3001",(0,c.jsx)(n.code,{children:"FLOAT"}),"\u3001",(0,c.jsx)(n.code,{children:"DOUBLE"}),"\u3001",(0,c.jsx)(n.code,{children:"STRING"}),"\u3001",(0,c.jsx)(n.code,{children:"DATETIME"})," \u548C ",(0,c.jsx)(n.code,{children:"DECIMAL"})," \u7C7B\u578B\u3002"]})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u8FD4\u56DE\u7ED9\u5B9A\u8868\u8FBE\u5F0F\u4E2D\u7684\u6700\u5927\u503C\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679C\u4EFB\u610F\u53C2\u6570\u4E3A ",(0,c.jsx)(n.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE ",(0,c.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(-1, 0, 5, 8);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GREATEST(-1, 0, 5, 8) |\n+-----------------------+\n|                     8 |\n+-----------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(-1, 0, 5, NULL);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+--------------------------+\n| GREATEST(-1, 0, 5, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST(6.3, 4.29, 7.6876);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-----------------------------+\n| GREATEST(6.3, 4.29, 7.6876) |\n+-----------------------------+\n|                      7.6876 |\n+-----------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT GREATEST('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------------------+\n| GREATEST('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+-------------------------------------------------------------------------------+\n| 2022-02-26 20:02:11                                                           |\n+-------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);