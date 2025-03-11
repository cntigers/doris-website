"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["107726"],{461237:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-set","title":"JSON_SET","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-set.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-set","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-set","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_SET","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_REPLACE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-replace"},"next":{"title":"JSON_KEYS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-keys"}}'),t=s("785893"),c=s("250065");let i={title:"JSON_SET",language:"zh-CN"},r=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function a(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"json_set"})," \u51FD\u6570\u5728 JSON \u4E2D\u63D2\u5165\u6216\u66F4\u65B0\u6570\u636E\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"JSON_SET (<json_str>,  <path>,  <val> [, <path>,  <val>, ...])\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<jsonStr>"})}),(0,t.jsxs)(e.td,{children:["\u8981\u63D2\u5165\u7684 JSON \u5BF9\u8C61\u3002\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u5143\u7D20\u7684 JSON \u5BF9\u8C61\uFF0C\u5305\u62EC",(0,t.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002\u5982\u679C ",(0,t.jsx)(e.code,{children:"json_str"})," \u4E0D\u662F\u6709\u6548\u7684 JSON \u6216\u4EFB\u4F55 ",(0,t.jsx)(e.code,{children:"path"})," \u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u8DEF\u5F84\u8868\u8FBE\u5F0F\u6216\u5305\u542B\u4E86 * \u901A\u914D\u7B26\uFF0C\u5219\u4F1A\u8FD4\u56DE\u9519\u8BEF"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<jsonPath>"})}),(0,t.jsxs)(e.td,{children:["\u8981\u63D2\u5165\u7684 JSON \u8DEF\u5F84\u3002\u5982\u679C\u662F ",(0,t.jsx)(e.code,{children:"NULL"})," \uFF0C\u5219\u8FD4\u56DE NULL"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<val>"})}),(0,t.jsxs)(e.td,{children:["\u8981\u63D2\u5165 JSON \u7684\u503C\u3002\u5982\u679C\u662F ",(0,t.jsx)(e.code,{children:"NULL"})," \uFF0C\u5219\u4F1A\u5728\u5BF9\u5E94\u7684\u4F4D\u7F6E\u63D2\u5165 ",(0,t.jsx)(e.code,{children:"NULL"})," \u7684 value \u503C\u3002"]})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"json_set"})," \u51FD\u6570\u5728 JSON \u4E2D\u63D2\u5165\u6216\u66F4\u65B0\u6570\u636E\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u5982\u679C ",(0,t.jsx)(e.code,{children:"json_str"})," \u6216 ",(0,t.jsx)(e.code,{children:"path"})," \u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\u5426\u5219\uFF0C\u5982\u679C ",(0,t.jsx)(e.code,{children:"json_str"})," \u4E0D\u662F\u6709\u6548\u7684 JSON \u6216\u4EFB\u4F55 ",(0,t.jsx)(e.code,{children:"path"})," \u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u8DEF\u5F84\u8868\u8FBE\u5F0F\u6216\u5305\u542B\u4E86 * \u901A\u914D\u7B26\uFF0C\u5219\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u8DEF\u5F84\u503C\u5BF9\u6309\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u8FDB\u884C\u8BC4\u4F30\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C JSON \u4E2D\u5DF2\u5B58\u5728\u67D0\u4E2A\u8DEF\u5F84\uFF0C\u5219\u8DEF\u5F84\u503C\u5BF9\u4F1A\u5C06\u73B0\u6709 JSON \u503C\u8986\u76D6\u4E3A\u65B0\u503C\u3002\u5982\u679C JSON \u4E2D\u4E0D\u5B58\u5728\u8BE5\u8DEF\u5F84\uFF0C\u5219\u8DEF\u5F84\u503C\u5BF9\u4F1A\u6DFB\u52A0\u8BE5\u503C\u5230 JSON \u4E2D\uFF0C\u5982\u679C\u8DEF\u5F84\u6807\u8BC6\u67D0\u4E2A\u7C7B\u578B\u7684\u503C\uFF0C\u5219\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5BF9\u4E8E\u73B0\u6709\u5BF9\u8C61\u4E2D\u4E0D\u5B58\u5728\u7684\u6210\u5458\uFF0C\u4F1A\u5C06\u65B0\u6210\u5458\u6DFB\u52A0\u5230\u8BE5\u5BF9\u8C61\u4E2D\u5E76\u4E0E\u65B0\u503C\u76F8\u5173\u8054\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5BF9\u4E8E\u73B0\u6709\u6570\u7EC4\u7ED3\u675F\u540E\u7684\u4F4D\u7F6E\uFF0C\u8BE5\u6570\u7EC4\u5C06\u6269\u5C55\u4E3A\u5305\u542B\u65B0\u503C\u3002\u5982\u679C\u73B0\u6709\u503C\u4E0D\u662F\u6570\u7EC4\uFF0C\u5219\u81EA\u52A8\u8F6C\u6362\u4E3A\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u6269\u5C55\u4E3A\u5305\u542B\u65B0\u503C\u7684\u6570\u7EC4\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5426\u5219\uFF0C\u5BF9\u4E8E JSON \u4E2D\u4E0D\u5B58\u5728\u7684\u67D0\u4E2A\u8DEF\u5F84\u7684\u8DEF\u5F84\u503C\u5BF9\u5C06\u88AB\u5FFD\u7565\u4E14\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u5F71\u54CD\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select json_set(null, null, null);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select json_set(\'{"k": 1}\', "$.k", 2);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select json_set(\'{"k": 1}\', "$.j", 2);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n"})})]})}function j(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},c=l.createContext(t);function i(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);