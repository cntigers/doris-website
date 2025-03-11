"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["429191"],{935960:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/get-json-int","title":"GET_JSON_INT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-int.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/get-json-int","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-int","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"GET_JSON_INT","language":"en"},"sidebar":"docs","previous":{"title":"GET_JSON_DOUBLE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-double"},"next":{"title":"GET_JSON_BIGINT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/get-json-bigint"}}'),i=t("785893"),o=t("250065");let a={title:"GET_JSON_INT",language:"en"},l=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Function is used to extract the value of a field from a JSON document and convert it to type INT. This function returns the value of the field on the specified path, or returns NULL if the value cannot be converted to type INT or the field pointed to by the path does not exist."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"GET_JSON_INT( <json_str>, <json_path>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameters"}),(0,i.jsx)(n.th,{children:"described"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_str>"})}),(0,i.jsx)(n.td,{children:"The JSON string from which to extract data is needed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<json_path>"})}),(0,i.jsx)(n.td,{children:"JSON path, specifying the location of the field. Paths can be denoted in dot notation."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.p,{children:["Parses and obtains the integer content of the specified path within the json string.\nWhere ",(0,i.jsx)(n.code,{children:"<json_path>"}),' `must start with the $symbol and use. As a path splitter. If the path contains. , you can use double quotes to enclose it.\nUse [ ] to represent the array index, starting from 0.\nThe content of path cannot contain ", [and].\nReturns NULL if the <json_str>format is incorrect, or the <json_path>format is incorrect, or a match cannot be found.\nIn addition, it is recommended to use the jsonb type and the jsonb_extract_XXX function to achieve the same functionality.\nSpecial circumstances will be handled as follows:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns <json_path>NULL if the specified field does not exist in JSON"}),"\n",(0,i.jsx)(n.li,{children:"If <json_path>the actual type of the specified field in JSON is inconsistent with the type specified by json_extract_t, the specified type t will be returned if it can be losslessly converted to the specified type, and NULL will be returned if it cannot."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Get the value with key as "k1"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'Gets the second element in the array with key "my.key"'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n\n3. Gets the first element in an array with secondary path k1.key -> k2\n\n```sql\n SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},o=s.createContext(i);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);