"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["95780"],{922329:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","title":"GET_JSON_BIGINT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GET_JSON_BIGINT","language":"en"},"sidebar":"docs","previous":{"title":"GET_JSON_INT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-int"},"next":{"title":"GET_JSON_STRING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string"}}'),i=t("785893"),l=t("250065");let r={title:"GET_JSON_BIGINT",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Parses and obtains the integer (BIGINT) content of the specified path within the json string."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"GET_JSON_BIGINT( <json_str>, <json_path>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameters"}),(0,i.jsx)(n.th,{children:"described"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_str>"})}),(0,i.jsx)(n.td,{children:"The JSON string from which to extract data is needed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_path>"})}),(0,i.jsx)(n.td,{children:"JSON path, specifying the location of the field. Paths can be denoted in dot notation."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns the BIGINT value of the field pointed to by the path."}),"\n",(0,i.jsx)(n.li,{children:"Returns NULL if no corresponding field is found in the specified path, or the field value cannot be converted to type BIGINT."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"<json_str>"}),' `must start with the $symbol and use. As a path splitter. If the path contains. , you can use double quotes to enclose it.\nUse [ ] to represent the array index, starting from 0.\nThe content of path cannot contain ", [and].\nReturns NULL if the <json_str>format is incorrect, or the <json_path>format is incorrect, or a match cannot be found.\nIn addition, it is recommended to use the jsonb type and the jsonb_extract_XXX function to achieve the same functionality.\nSpecial circumstances will be handled as follows:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns <json_path>NULL if the specified field does not exist in JSON"}),"\n",(0,i.jsx)(n.li,{children:"If <json_path>the actual type of the specified field in JSON is inconsistent with the type specified by json_extract_t, the specified type t will be returned if it can be losslessly converted to the specified type, and NULL will be returned if it cannot."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Get the value with key as "k1"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_bigint(\'{"k1":1, "k2":"2"}\', "$.k1");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+-----------------------------------------------+\n| get_json_bigint(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+-----------------------------------------------+\n|                                             1 |\n+-----------------------------------------------+\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'Gets the second element in the array with key "my.key"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$. "my.key"[1]\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+---------------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$. "my.key"[1]\') |\n+---------------------------------------------------------------------------------+\n|                                                                   1678708107000 |\n+---------------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Gets the first element in an array with secondary path k1.key -> k2"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$. "k1.key".k2[0]\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'\n+-----------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------------+\n|                                                               1678708107000 |\n+-----------------------------------------------------------------------------+\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);