"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["60842"],{433134:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/conditional-functions/null-or-empty","title":"NULL_OR_EMPTY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/conditional-functions/null-or-empty.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/conditional-functions","slug":"/sql-manual/sql-functions/scalar-functions/conditional-functions/null-or-empty","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/conditional-functions/null-or-empty","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NULL_OR_EMPTY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IF","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/conditional-functions/if"},"next":{"title":"NOT_NULL_OR_EMPTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/conditional-functions/not-null-or-empty"}}'),s=l("785893"),c=l("250065");let i={title:"NULL_OR_EMPTY",language:"zh-CN"},r=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"null_or_empty"})," \u51FD\u6570\u7528\u4E8E\u5224\u65AD\u7ED9\u5B9A\u7684\u503C\u662F\u5426\u4E3A NULL \u6216\u7A7A\u3002\u5982\u679C\u8F93\u5165\u503C\u4E3A NULL \u6216\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"NULL_OR_EMPTY (<str>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<str>"})}),(0,s.jsx)(e.td,{children:"\u5B57\u7B26\u4E32\u7C7B\u578B"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u5B57\u7B26\u4E32\u4E3A\u7A7A\u5B57\u7B26\u4E32\u6216\u8005 NULL\uFF0C\u8FD4\u56DE true\uFF1B\u5426\u5219\u8FD4\u56DE false\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select null_or_empty(null);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'select null_or_empty("");\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'select null_or_empty("a");\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return i}});var t=l(667294);let s={},c=t.createContext(s);function i(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);