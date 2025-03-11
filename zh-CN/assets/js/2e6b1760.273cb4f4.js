"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["635740"],{583715:function(n,t,e){e.r(t),e.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>u,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/struct-functions/struct","title":"STRUCT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/struct-functions/struct.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/struct-functions","slug":"/sql-manual/sql-functions/scalar-functions/struct-functions/struct","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/struct","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STRUCT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_CONTAINS_VALUE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value"},"next":{"title":"NAMED_STRUCT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct"}}'),c=e("785893"),l=e("250065");let r={title:"STRUCT",language:"zh-CN"},a=void 0,u={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(t.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u503C\u6784\u9020\u5E76\u8FD4\u56DE struct\uFF0C\u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"}),"\n",(0,c.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"STRUCT( <expr1> [ , <expr2> ... ] )\n"})}),"\n",(0,c.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"\u53C2\u6570"}),(0,c.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"<expr>"})}),(0,c.jsx)(t.td,{children:"\u6784\u9020 struct \u7684\u8F93\u5165\u5185\u5BB9"})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(t.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u503C\u6784\u9020\u5E76\u8FD4\u56DE struct\uFF0C\u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"}),"\n",(0,c.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"select struct(1, 'a', \"abc\"),struct(null, 1, null),struct(cast('2023-03-16' as datetime));\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-text",children:'+--------------------------------------+--------------------------------------+---------------------------------------------+\n| struct(1, \'a\', \'abc\')                | struct(NULL, 1, NULL)                | struct(cast(\'2023-03-16\' as DATETIMEV2(0))) |\n+--------------------------------------+--------------------------------------+---------------------------------------------+\n| {"col1":1, "col2":"a", "col3":"abc"} | {"col1":null, "col2":1, "col3":null} | {"col1":"2023-03-16 00:00:00"}              |\n+--------------------------------------+--------------------------------------+---------------------------------------------+\n'})})]})}function d(n={}){let{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return r}});var s=e(667294);let c={},l=s.createContext(c);function r(n){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:t},n.children)}}}]);