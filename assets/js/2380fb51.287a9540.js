"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["66407"],{24556:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-length","title":"JSON_LENGTH","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-length.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-length","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-length","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_LENGTH","language":"en"},"sidebar":"docs","previous":{"title":"JSON_CONTAINS","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/json-contains"},"next":{"title":"GET_JSON_DOUBLE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-double"}}'),l=s("785893"),r=s("250065");let a={title:"JSON_LENGTH",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The JSON_LENGTH function returns the length or number of elements of a given JSON document. If the JSON document is an array, the number of elements in the array is returned; if the JSON document is an object, the number of key-value pairs in the object is returned. Returns NULL if the JSON document is empty or invalid."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"JSON_LENGTH(<json_str> [ , <json_path> ])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"parameters"}),(0,l.jsx)(n.th,{children:"described"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<json_str>"})}),(0,l.jsx)(n.td,{children:"The length of the JSON string needs to be checked."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"parameters"}),(0,l.jsx)(n.th,{children:"described"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<json_path>"})}),(0,l.jsx)(n.td,{children:"If a path is specified, the JSON_LENGTH() function returns the length of the data that matches the path in the JSON document, otherwise it returns the length of the JSON document"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsx)(n.p,{children:"This function calculates the length of a JSON document based on the following rules:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The length of the scalar is 1. For example: '1','\"x \"','true',' false', and 'null' are all of length 1."}),"\n",(0,l.jsx)(n.li,{children:"The length of an array is the number of array elements. For example: '[1,2]' has length 2."}),"\n",(0,l.jsx)(n.li,{children:"The length of an object is the number of object members. For example: '{\"x\": 1}' has length 1"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For a JSON array, returns the number of elements in the array."}),"\n",(0,l.jsx)(n.li,{children:"For JSON objects, returns the number of key-value pairs in the object."}),"\n",(0,l.jsx)(n.li,{children:"Returns NULL for invalid JSON strings."}),"\n",(0,l.jsx)(n.li,{children:"For other types (such as strings, numbers, booleans, null, etc.), NULL is returned."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT json_length(\'{"k1":"v31","k2":300}\');\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'+--------------------------------------+\n| json_length(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n| 2                                    |\n+--------------------------------------+\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT json_length('\"abc\"');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+----------------------+\n| json_length('\"abc\"') |\n+----------------------+\n| 1                    |\n+----------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+---------------------------------------------+\n| json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y') |\n+---------------------------------------------+\n| 2                                           |\n+---------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let l={},r=t.createContext(l);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);