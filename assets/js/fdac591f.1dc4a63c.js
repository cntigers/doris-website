"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["892257"],{548669:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-set","title":"JSON_SET","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/json-functions/json-set.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-set","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-set","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON_SET","language":"en"},"sidebar":"docs","previous":{"title":"JSON_REPLACE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-replace"},"next":{"title":"json_extract_bigint","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-extract-bigint"}}'),a=s("785893"),i=s("250065");let r={title:"JSON_SET",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The json_set function inserts or updates data in a JSON and returns the result."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"JSON_SET (<json_str>,  <path>,  <val> [, <path>,  <val>, ...])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<jsonStr>"})}),(0,a.jsx)(n.td,{children:"The JSON object to be inserted. It can be a JSON object with elements of any type, including NULL. If no elements are specified, an empty array is returned. If json_str is not a valid JSON or any path parameter is not a valid path expression or contains a * wildcard, an error is returned."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<jsonPath>"})}),(0,a.jsx)(n.td,{children:"The JSON path to be inserted. If it is NULL, then return NULL."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<val>"})}),(0,a.jsx)(n.td,{children:"The value to be inserted into the JSON. If it is NULL, then a NULL value will be inserted at the corresponding position."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,a.jsx)(n.p,{children:"Returns a JSON value."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"json_set"})," function inserts or updates data in a JSON and returns the result.Returns NULL if ",(0,a.jsx)(n.code,{children:"json_str"})," or ",(0,a.jsx)(n.code,{children:"path"})," is NULL. Otherwise, an error occurs if the ",(0,a.jsx)(n.code,{children:"json_str"})," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."]}),"\n",(0,a.jsx)(n.p,{children:"The path-value pairs are evaluated left to right."}),"\n",(0,a.jsx)(n.p,{children:"A path-value pair for an existing path in the json overwrites the existing json value with the new value. A path-value pair for a nonexisting path in the json adds the value to the json if the path identifies one of these types of values:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A member not present in an existing object. The member is added to the object and associated with the new value."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A position past the end of an existing array. The array is extended with the new value. If the existing value is not an array, it is autowrapped as an array, then extended with the new value."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select json_set(null, null, null);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select json_set(\'{"k": 1}\', "$.k", 2);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select json_set(\'{"k": 1}\', "$.j", 2);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let a={},i=t.createContext(a);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);