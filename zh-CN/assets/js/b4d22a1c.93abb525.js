"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["159530"],{123465:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","title":"JSON_PARSE_NOTNULL_ERROR_TO_INVALID","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-invalid","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_PARSE_NOTNULL_ERROR_TO_INVALID","language":"zh-CN"},"sidebar":"docs","previous":{"title":"json_parse_notnull","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull"},"next":{"title":"JSON_PARSE_NOTNULL_ERROR_TO_VALUE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-parse-notnull-error-to-value"}}'),t=s("785893"),r=s("250065");let i={title:"JSON_PARSE_NOTNULL_ERROR_TO_INVALID",language:"zh-CN"},o=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:["\u7528\u4E8E\u89E3\u6790 JSON \u5B57\u7B26\u4E32\u3002\u5982\u679C JSON \u5B57\u7B26\u4E32\u683C\u5F0F\u65E0\u6548\u6216\u53D1\u751F\u89E3\u6790\u9519\u8BEF\uFF0C\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65E0\u6548\u7684 JSON \u5BF9\u8C61\uFF08\u901A\u5E38\u662F ",(0,t.jsx)(e.code,{children:"{}"}),"\uFF09\u3002\u8BE5\u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u786E\u4FDD\u5728\u51FA\u73B0 JSON \u683C\u5F0F\u9519\u8BEF\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B89\u5168\u7684\u9ED8\u8BA4\u503C\uFF0C\u907F\u514D\u7531\u4E8E\u89E3\u6790\u9519\u8BEF\u5BFC\u81F4\u7684\u67E5\u8BE2\u5931\u8D25\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"JSONB_PARSE_NOTNULL_ERROR_TO_INVALID"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"JSON_PARSE_NOTNULL_ERROR_TO_INVALID( <str> )\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<str>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u89E3\u6790\u7684 JSON \u5B57\u7B26\u4E32\u3002\u8BE5\u53C2\u6570\u5E94\u8BE5\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5305\u542B JSON \u683C\u5F0F\u7684\u6570\u636E\u3002\u5982\u679C JSON \u683C\u5F0F\u65E0\u6548\uFF0C\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65E0\u6548\u7684 JSON \u5BF9\u8C61\u3002"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD4\u56DE\u4E00\u4E2A\u65E0\u6548\u7684 JSON \u5BF9\u8C61\uFF08\u901A\u5E38\u662F ",(0,t.jsx)(e.code,{children:"{}"}),"\uFF09"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SELECT JSON_PARSE_NOTNULL_ERROR_TO_INVALID(\'{"name": "Alice", "age": 30}\') AS parsed_json;\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'+---------------------------+\n| parsed_json               |\n+---------------------------+\n| {"name":"Alice","age":30} |\n+---------------------------+\n\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);