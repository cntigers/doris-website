"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["311538"],{443231:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-value","title":"json_parse_nullable_error_to_value","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-value.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-value","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-value","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"json_parse_nullable_error_to_value","language":"zh-CN"},"sidebar":"docs","previous":{"title":"json_parse_nullable_error_to_null","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-nullable-error-to-null"},"next":{"title":"json_search","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-search"}}'),r=l("785893"),a=l("250065");let t={title:"json_parse_nullable_error_to_value",language:"zh-CN"},c=void 0,o={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"JSON_PARSE_NULLABLE_ERROR_TO_VALUE"})," \u51FD\u6570\u7528\u4E8E\u89E3\u6790\u4E00\u4E2A JSON \u5B57\u7B26\u4E32\u4E3A\u6709\u6548\u7684 JSON \u5BF9\u8C61\u3002\u5982\u679C\u8F93\u5165\u7684 JSON \u5B57\u7B26\u4E32\u65E0\u6548\uFF0C\u5B83\u5C06\u8FD4\u56DE\u7528\u6237\u6307\u5B9A\u7684\u9ED8\u8BA4\u503C\uFF0C\u800C\u4E0D\u662F\u629B\u51FA\u9519\u8BEF\u3002\u5982\u679C\u8F93\u5165\u4E3A ",(0,r.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE\u9ED8\u8BA4\u503C\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"JSON_PARSE_NULLABLE_ERROR_TO_VALUE( <str> , <default_value>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"JSONB_PARSE_NULLABLE_ERROR_TO_VALUE"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u89E3\u6790\u7684 JSON \u683C\u5F0F\u7684\u8F93\u5165\u5B57\u7B26\u4E32\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<default_value>"})}),(0,r.jsx)(e.td,{children:"\u89E3\u6790\u5931\u8D25\u65F6\u8FD4\u56DE\u7684\u9ED8\u8BA4\u503C\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u662F\u6709\u6548\u7684 JSON\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684 JSON \u5BF9\u8C61\u3002\n\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u65E0\u6548\u6216\u4E3A NULL\uFF0C\u8FD4\u56DE default_value \u53C2\u6570\u6307\u5B9A\u7684\u9ED8\u8BA4\u503C\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u6709\u6548\u7684 JSON \u5B57\u7B26\u4E32\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_PARSE_NULLABLE_ERROR_TO_VALUE(\'{"name": "John", "age": 30}\', \'default\');\n\n\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'+---------------------------------------------------------------+\n| JSON_PARSE_NULLABLE_ERROR_TO_VALUE(\'{"name": "John", "age": 30}\', \'default\') |\n+---------------------------------------------------------------+\n| {"name": "John", "age": 30}                                    |\n+---------------------------------------------------------------+\n\n\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u65E0\u6548\u7684 JSON \u5B57\u7B26\u4E32\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_PARSE_NULLABLE_ERROR_TO_VALUE(\'{"name": "John", "age": }\', \'default\');\n\n\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'+---------------------------------------------------------------+\n| JSON_PARSE_NULLABLE_ERROR_TO_VALUE(\'{"name": "John", "age": }\', \'default\') |\n+---------------------------------------------------------------+\n| default                                                       |\n+---------------------------------------------------------------+\n\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"\u8F93\u5165\u4E3A NULL\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT JSON_PARSE_NULLABLE_ERROR_TO_VALUE(NULL, 'default');\n\n\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"+---------------------------------------------------------------+\n| JSON_PARSE_NULLABLE_ERROR_TO_VALUE(NULL, 'default')           |\n+---------------------------------------------------------------+\n| default                                                       |\n+---------------------------------------------------------------+\n\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return t}});var s=l(667294);let r={},a=s.createContext(r);function t(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);