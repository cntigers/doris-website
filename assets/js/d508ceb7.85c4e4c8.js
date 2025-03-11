"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["718048"],{465972:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-type","title":"JSON_TYPE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/json-functions/json-type.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-type","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-type","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON_TYPE","language":"en"},"sidebar":"docs","previous":{"title":"JSON_EXISTS_PATH","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-exists-path"},"next":{"title":"JSON_ARRAY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/json-functions/json-array"}}'),i=s("785893"),l=s("250065");let a={title:"JSON_TYPE",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Alias",id:"alias",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Used to determine the type of the field specified by ",(0,i.jsx)(n.code,{children:"json_path"})," in the JSONB data. If the field does not exist, it returns NULL. If the field exists, it returns one of the following types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"object"}),"\n",(0,i.jsx)(n.li,{children:"array"}),"\n",(0,i.jsx)(n.li,{children:"null"}),"\n",(0,i.jsx)(n.li,{children:"bool"}),"\n",(0,i.jsx)(n.li,{children:"int"}),"\n",(0,i.jsx)(n.li,{children:"bigint"}),"\n",(0,i.jsx)(n.li,{children:"largeint"}),"\n",(0,i.jsx)(n.li,{children:"double"}),"\n",(0,i.jsx)(n.li,{children:"string"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"JSON_TYPE( <json>, <json_path> )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JSONB_TYPE"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json>"})}),(0,i.jsx)(n.td,{children:"The JSON string to check the type of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_path>"})}),(0,i.jsx)(n.td,{children:"JSON path, which specifies the location of the field in JSON. The path is usually given in $. At the beginning, use. to represent the hierarchical structure."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns the type of the JSON string. Possible values include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"NULL": Indicates that the value in the JSON document is null.'}),"\n",(0,i.jsx)(n.li,{children:'"BOOLEAN": Indicates that the value in the JSON document is of boolean type (true or false).'}),"\n",(0,i.jsx)(n.li,{children:'"NUMBER": Indicates that the value in the JSON document is a number.'}),"\n",(0,i.jsx)(n.li,{children:'"STRING": Indicates that the value in the JSON document is a string.'}),"\n",(0,i.jsx)(n.li,{children:'"OBJECT": Indicates that the value in the JSON document is a JSON object.'}),"\n",(0,i.jsx)(n.li,{children:'"ARRAY": Indicates that the value in the JSON document is a JSON array.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.p,{children:["JSON_TYPE returns the type of the outermost value in the JSON document. If the JSON document contains multiple different types of values, it will return the type of the outermost value. For invalid JSON strings, JSON_TYPE returns NULL. Refer to ",(0,i.jsx)(n.a,{href:"../../../sql-data-types/semi-structured/JSON",children:"json tutorial"})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"JSON is of string type:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_TYPE(\'{"name": "John", "age": 30}\', \'$.name\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+-------------------------------------------------------------------+\n| jsonb_type(cast(\'{"name": "John", "age": 30}\' as JSON), \'$.name\') |\n+-------------------------------------------------------------------+\n| string                                                            |\n+-------------------------------------------------------------------+\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"JSON is of number type:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT JSON_TYPE(\'{"name": "John", "age": 30}\', \'$.age\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+------------------------------------------------------------------+\n| jsonb_type(cast(\'{"name": "John", "age": 30}\' as JSON), \'$.age\') |\n+------------------------------------------------------------------+\n| int                                                              |\n+------------------------------------------------------------------+\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);