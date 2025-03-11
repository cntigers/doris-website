"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["174001"],{114699:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/function/CREATE-FUNCTION","title":"CREATE FUNCTION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/function/CREATE-FUNCTION.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/CREATE-FUNCTION","permalink":"/docs/dev/sql-manual/sql-statements/function/CREATE-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE FUNCTION","language":"en"},"sidebar":"docs","previous":{"title":"RECOVER","permalink":"/docs/dev/sql-manual/sql-statements/recycle/RECOVER"},"next":{"title":"DROP FUNCTION","permalink":"/docs/dev/sql-manual/sql-statements/function/DROP-FUNCTION"}}'),i=t("785893"),a=t("250065");let r={title:"CREATE FUNCTION",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to create a custom function."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE [ GLOBAL ] \n    [{AGGREGATE | TABLES | ALIAS }] FUNCTION <function_name>\n    (<arg_type> [, ...])\n    [ RETURNS <ret_type> ]\n    [ INTERMEDIATE <inter_type> ]\n    [ WITH PARAMETER(<param> [,...]) AS <origin_function> ]\n    [ PROPERTIES ("<key>" = "<value>" [, ...]) ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<function_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"function_name"})," includes a database name, such as ",(0,i.jsx)(n.code,{children:"db1.my_func"}),", the custom function will be created in the corresponding database. Otherwise, the function will be created in the database of the current session. The name and parameters of the new function must not be identical to an existing function in the current namespace; otherwise, the creation will fail."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<arg_type>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The input parameter type of the function. For variable-length parameters, use ",(0,i.jsx)(n.code,{children:", ..."})," to indicate them. If it is a variable-length type, the type of the variable-length parameters must be consistent with the type of the last non-variable-length parameter."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"<ret_type>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The return parameter type of the function. This is a required parameter for creating a new function. If creating an alias for an existing function, this parameter is not necessary."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"GLOBAL"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If specified, the created function is effective globally."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"AGGREGATE"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If specified, the created function is an aggregate function."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"TABLES"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If specified, the created function is a table function."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["4. ",(0,i.jsx)(n.code,{children:"ALIAS"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If specified, the created function is an alias function."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If none of the above parameters representing the function type is selected, it indicates that the created function is a scalar function."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["5. ",(0,i.jsx)(n.code,{children:"<inter_type>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Used to indicate the data type during the intermediate stage of an aggregate function."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["6. ",(0,i.jsx)(n.code,{children:"<param>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Used to indicate the parameters of an alias function, with at least one parameter required."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["7. ",(0,i.jsx)(n.code,{children:"<origin_function>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Used to indicate the original function corresponding to the alias function."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["8. ",(0,i.jsx)(n.code,{children:"<properties>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"file"}),": Indicates the JAR package containing the user-defined function (UDF). In a multi-machine environment, it can also be downloaded via HTTP. This parameter is mandatory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"symbol"}),": Indicates the class name containing the UDF class. This parameter is mandatory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": Indicates the UDF call type. The default is Native. Use JAVA_UDF when using a Java UDF."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"always_nullable"}),": Indicates whether the UDF result may contain NULL values. This is an optional parameter with a default value of true."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["To execute this command, the user must have ",(0,i.jsx)(n.code,{children:"ADMIN_PRIV"})," privileges."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a custom UDF function. For more details, refer to ",(0,i.jsx)(n.a,{href:"../../../query-data/udf/java-user-defined-function",children:"JAVA-UDF"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a custom UDAF function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE AGGREGATE FUNCTION simple_sum(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a custom UDTF function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLES FUNCTION java_udtf(string, string) RETURNS array<string> PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.UDTFStringTest",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a custom alias function. For more information, refer to ",(0,i.jsx)(n.a,{href:"../../../query-data/udf/alias-function",children:"Alias Function"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a global custom alias function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE GLOBAL ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);