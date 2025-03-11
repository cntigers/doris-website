"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["623404"],{979496:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/get-json-string","title":"GET_JSON_STRING","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-string","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"GET_JSON_STRING","language":"en"},"sidebar":"docs","previous":{"title":"GET_JSON_BIGINT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint"},"next":{"title":"JSON_INSERT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-insert"}}'),i=t("785893"),r=t("250065");let l={title:"GET_JSON_STRING",language:"en"},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function a(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["This function is used to extract a field's value from a JSON document and convert it to ",(0,i.jsx)(n.code,{children:"STRING"})," type. It returns the field value at the specified path. If the value cannot be converted to a string, or if the field at the specified path does not exist, it returns ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"GET_JSON_STRING( <json_str>, <json_path>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_str>"})}),(0,i.jsx)(n.td,{children:"The JSON string from which data needs to be extracted."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_path>"})}),(0,i.jsx)(n.td,{children:"JSON path that specifies the field's location. The path can use dot notation."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.p,{children:["It returns the ",(0,i.jsx)(n.code,{children:"STRING"})," value of the field at the specified path.\nIf the specified path does not point to a valid field or the field value cannot be converted to a ",(0,i.jsx)(n.code,{children:"STRING"})," type, it returns ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.p,{children:["Parses and retrieves the string content of the specified path in the JSON string.\nThe ",(0,i.jsx)(n.code,{children:"<json_path>"})," must start with the ",(0,i.jsx)(n.code,{children:"$"})," symbol, using ",(0,i.jsx)(n.code,{children:"."})," as the path delimiter. If the path contains a ",(0,i.jsx)(n.code,{children:"."}),", it should be enclosed in double quotes.\nUse ",(0,i.jsx)(n.code,{children:"[ ]"})," to indicate array indices, starting from 0.\nThe path should not contain ",(0,i.jsx)(n.code,{children:'", ['}),", and ",(0,i.jsx)(n.code,{children:"]"}),".\nIf the ",(0,i.jsx)(n.code,{children:"<json_str>"})," format is incorrect, or if the ",(0,i.jsx)(n.code,{children:"<json_path>"})," format is invalid, or if no matching field is found, ",(0,i.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, it is recommended to use the ",(0,i.jsx)(n.code,{children:"jsonb"})," type and ",(0,i.jsx)(n.code,{children:"jsonb_extract_XXX"})," functions to achieve the same functionality."]}),"\n",(0,i.jsx)(n.p,{children:"Special case handling as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the field specified by ",(0,i.jsx)(n.code,{children:"<json_path>"})," does not exist in the JSON, return ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the actual type of the field specified by ",(0,i.jsx)(n.code,{children:"<json_path>"})," differs from the type expected by ",(0,i.jsx)(n.code,{children:"json_extract_t"}),", if it can be losslessly converted to the expected type, it will return the specified type. Otherwise, it will return ",(0,i.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Get the value for key "k1"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'\nSELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+---------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "k2":"v2"}\', \'$.k1\') |\n+---------------------------------------------------+\n| v1                                                |\n+---------------------------------------------------+\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'Get the second element of the array for key "my.key"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\');\n\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+------------------------------------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------------------+\n| e2                                                                           |\n+------------------------------------------------------------------------------+\n\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Get the first element of the array in the secondary path k1.key -> k2"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:' SELECT get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\');\n\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'\n+-----------------------------------------------------------------------+\n| get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------+\n| v1                                                                    |\n+-----------------------------------------------------------------------+\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);