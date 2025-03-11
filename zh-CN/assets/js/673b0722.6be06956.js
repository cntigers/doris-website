"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["720806"],{830990:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-keys","title":"JSON_KEYS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/json-functions/json-keys.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-keys","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-keys","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_KEYS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_SET","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-set"},"next":{"title":"json_extract_bigint","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-extract-bigint"}}'),c=s("785893"),t=s("250065");let i={title:"JSON_KEYS",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u7528\u4E8E\u4ECE JSON \u5BF9\u8C61\u7684\u9876\u7EA7\u503C\u4E2D\u8FD4\u56DE\u952E\u3002\u8FD9\u4E9B\u952E\u4F5C\u4E3A\u6570\u7EC4\u8FD4\u56DE\uFF0C\u6216\u8005\u5982\u679C\u7ED9\u5B9A\u4E86\u8DEF\u5F84\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u6240\u9009\u8DEF\u5F84\u7684\u9876\u7EA7\u952E\u3002\u60A8\u9700\u8981\u5C06 JSON \u6587\u6863\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u63D0\u4F9B\u3002\u60A8\u8FD8\u53EF\u4EE5\uFF08\u53EF\u9009\u5730\uFF09\u63D0\u4F9B\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE5\u6307\u5B9A JSON \u6587\u6863\u4E2D\u201C\u9876\u7EA7\u201D\u8DEF\u5F84\u4ECE\u4F55\u5904\u5F00\u59CB\u3002\n\u5176\u4E2D\uFF0Cjson_doc \u662F JSON \u6587\u6863\uFF0Cpath \u662F\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u786E\u5B9A JSON \u6587\u6863\u4E2D\u201C\u9876\u7EA7\u201D\u8DEF\u5F84\u4ECE\u4F55\u5904\u5F00\u59CB\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"JSON_KEYS(<str> [, <path>])"})}),"\n",(0,c.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"JSONB_KEYS"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<str>"})}),(0,c.jsx)(e.td,{children:"\u9700\u8981\u63D0\u53D6\u952E\u7684 JSON \u5B57\u7B26\u4E32\u3002"})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<path>"})}),(0,c.jsx)(e.td,{children:"\u53EF\u9009\u7684 JSON \u8DEF\u5F84\uFF0C\u6307\u5B9A\u68C0\u67E5\u7684 JSON \u5B50\u6587\u6863\u3002\u5982\u679C\u4E0D\u63D0\u4F9B\uFF0C\u9ED8\u8BA4\u4E3A\u6839\u6587\u6863\u3002"})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8FD4\u56DE JSON \u6587\u6863\u7684\u952E\u540D\u5217\u8868\uFF08\u4E00\u4E2A JSON \u6570\u7EC4\uFF09\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u5982\u679C str \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684 JSON \u5BF9\u8C61\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u5982\u679C JSON \u5BF9\u8C61\u6CA1\u6709\u952E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5982\u679C\u6240\u9009\u5BF9\u8C61\u4E3A\u7A7A\uFF0C\u5219\u7ED3\u679C\u6570\u7EC4\u4E3A\u7A7A\u3002\u5982\u679C\u9876\u7EA7\u503C\u5305\u542B\u5D4C\u5957\u7684\u5B50\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u503C\u4E0D\u5305\u62EC\u8FD9\u4E9B\u5B50\u5BF9\u8C61\u7684\u952E\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'\nSELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\');\n\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'\n+-----------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON)) |\n+-----------------------------------------------------+\n| ["a", "b"]                                          |\n+-----------------------------------------------------+\n\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'\nSELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\', \'$.b\');\n\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'+------------------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON), \'$.b\') |\n+------------------------------------------------------------+\n| ["c"]                                                      |\n+------------------------------------------------------------+\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\nSELECT JSON_KEYS('{}');\n\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\n+-------------------------------+\n| json_keys(cast('{}' as JSON)) |\n+-------------------------------+\n| []                            |\n+-------------------------------+\n\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\nSELECT JSON_KEYS('[1,2]');\n\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\n+----------------------------------+\n| json_keys(cast('[1,2]' as JSON)) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\n SELECT JSON_KEYS('[]');\n\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"\n+-------------------------------+\n| json_keys(cast('[]' as JSON)) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n\n"})})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let c={},t=l.createContext(c);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);