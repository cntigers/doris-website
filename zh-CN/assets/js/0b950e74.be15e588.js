"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["718001"],{981490:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>i,toc:()=>o,contentTitle:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-array","title":"JSON_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/json-functions/json-array.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-array","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_TYPE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-type"},"next":{"title":"JSON_OBJECT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-object"}}'),a=s("785893"),c=s("250065");let r={title:"JSON_ARRAY",language:"zh-CN"},t=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u751F\u6210\u4E00\u4E2A\u5305\u542B\u5236\u5B9A\u5143\u7D20\u7684 json \u6570\u7EC4\uFF0C\u672A\u6307\u5B9A\u65F6\u8FD4\u56DE\u7A7A\u6570\u7EC4"}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"JSON_ARRAY(<a>, ...)   \n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<a>, ..."})}),(0,a.jsxs)(e.td,{children:["\u8981\u5305\u542B\u5728 JSON \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u3002\u53EF\u4EE5\u662F\u5355\u4E2A\u6216\u8005\u591A\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u5305\u62EC",(0,a.jsx)(e.code,{children:"NULL"}),"\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002"]})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6307\u5B9A\u5143\u7D20\u7684 JSON \u6570\u7EC4\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5982\u679C\u6307\u5B9A\u7684\u5143\u7D20\u4E3A",(0,a.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5219\u8FD4\u56DE",(0,a.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select json_array();\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select json_array(null);\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| json_array('NULL') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------+\n| json_array(1, 'abc', 'NULL', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, \"abc\", NULL, TRUE, \"10:41:15\"]            |\n+-----------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select json_array("a", null, "c");\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| json_array('a', 'NULL', 'c') |\n+------------------------------+\n| [\"a\", NULL, \"c\"]             |\n+------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return r}});var l=s(667294);let a={},c=l.createContext(a);function r(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);