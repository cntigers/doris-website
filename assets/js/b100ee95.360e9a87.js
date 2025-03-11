"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["95381"],{662102:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"query/udf/remote-user-defined-function","title":"Remote User Defined Function Service","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/udf/remote-user-defined-function.md","sourceDirName":"query/udf","slug":"/query/udf/remote-user-defined-function","permalink":"/docs/2.0/query/udf/remote-user-defined-function","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Remote User Defined Function Service","language":"en"},"sidebar":"docs","previous":{"title":"Java UDF","permalink":"/docs/2.0/query/udf/java-user-defined-function"},"next":{"title":"Lakehouse Overview","permalink":"/docs/2.0/lakehouse/lakehouse-overview"}}'),r=i("785893"),t=i("250065");let c={title:"Remote User Defined Function Service",language:"en"},o=void 0,l={},d=[{value:"Remote UDF",id:"remote-udf",level:2},{value:"Writing UDF Functions",id:"writing-udf-functions",level:2},{value:"Copying the Proto Files",id:"copying-the-proto-files",level:3},{value:"Generating Interfaces",id:"generating-interfaces",level:3},{value:"Implementing Interfaces",id:"implementing-interfaces",level:3},{value:"Creating UDF",id:"creating-udf",level:2},{value:"Using UDF",id:"using-udf",level:2},{value:"Deleting UDF",id:"deleting-udf",level:2},{value:"Example",id:"example",level:2}];function a(e){let n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"remote-udf",children:"Remote UDF"}),"\n",(0,r.jsx)(n.p,{children:"Remote UDF Service supports accessing user-provided UDF Services via RPC to execute user-defined functions. Compared to native UDF implementation, Remote UDF Service has the following advantages and limitations:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Advantages"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cross-language: UDF Services can be written in various languages supported by Protobuf."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Security: UDF failures or crashes only affect the UDF Service itself and do not cause Doris process crashes."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Flexibility: UDF Services can invoke any other services or library classes to meet diverse business requirements."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Usage Limitations"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Performance: Compared to native UDFs, UDF Service introduces additional network overhead, resulting in lower performance. Additionally, the UDF Service implementation itself can impact function execution efficiency, and users need to handle issues like high concurrency and thread safety."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Single-row mode and batch processing mode: In Doris' original row-based query execution framework, UDF RPC calls are made for each row of data, resulting in poor performance. However, in the new vectorized execution framework, UDF RPC calls are made for each batch of data (default: 2048 rows), leading to significant performance improvements. In actual testing, the performance of Remote UDF based on vectorization and batch processing is comparable to that of native UDF based on row storage."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"writing-udf-functions",children:"Writing UDF Functions"}),"\n",(0,r.jsxs)(n.p,{children:["This section provides instructions on how to develop a Remote RPC service. A Java version example is provided in ",(0,r.jsx)(n.code,{children:"samples/doris-demo/udf-demo/"})," for reference."]}),"\n",(0,r.jsx)(n.h3,{id:"copying-the-proto-files",children:"Copying the Proto Files"}),"\n",(0,r.jsxs)(n.p,{children:["Copy ",(0,r.jsx)(n.code,{children:"gensrc/proto/function_service.proto"})," and ",(0,r.jsx)(n.code,{children:"gensrc/proto/types.proto"})," to the RPC service."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"function_service.proto"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PFunctionCallRequest"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"function_name: Function name, corresponding to the symbol specified during function creation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"args: Arguments passed to the method."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"context: Query context information."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PFunctionCallResponse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"result: Result."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"status: Status, where 0 represents normal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PCheckFunctionRequest"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"function: Function-related information."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"match_type: Matching type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PCheckFunctionResponse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"status: Status, where 0 represents normal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generating-interfaces",children:"Generating Interfaces"}),"\n",(0,r.jsxs)(n.p,{children:["Generate code using protoc. Refer to ",(0,r.jsx)(n.code,{children:"protoc -h"})," for specific parameters."]}),"\n",(0,r.jsx)(n.h3,{id:"implementing-interfaces",children:"Implementing Interfaces"}),"\n",(0,r.jsx)(n.p,{children:"The following three methods need to be implemented:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"fnCall: Used to write the calculation logic."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"checkFn: Used for UDF creation validation, checking if the function name, parameters, return values, etc., are valid."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"handShake: Used for interface probing."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"creating-udf",children:"Creating UDF"}),"\n",(0,r.jsx)(n.p,{children:"Currently, UDTF is not supported."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])	\n'})}),"\n",(0,r.jsx)(n.p,{children:"Note:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"symbol"})," in the PROPERTIES represents the method name passed in the RPC call, and this parameter must be set."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"object_file"})," in the PROPERTIES represents the RPC service address. Currently, it supports a single address and cluster addresses in the brpc-compatible format."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"type"})," in the PROPERTIES represents the UDF invocation type, which is set to Native by default. Use RPC to pass when using RPC UDF."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"}),": A function belongs to a specific database. The name is in the form of ",(0,r.jsx)(n.code,{children:"dbName"}),".",(0,r.jsx)(n.code,{children:"funcName"}),". When ",(0,r.jsx)(n.code,{children:"dbName"})," is not explicitly specified, the current session's database is used as ",(0,r.jsx)(n.code,{children:"dbName"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE FUNCTION rpc_add_two(INT,INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int_two",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\nCREATE FUNCTION rpc_add_one(INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int_one",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\nCREATE FUNCTION rpc_add_string(varchar(30)) RETURNS varchar(30) PROPERTIES (\n  "SYMBOL"="add_string",\n  "OBJECT_FILE"="127.0.0.1:9114",\n  "TYPE"="RPC"\n);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"using-udf",children:"Using UDF"}),"\n",(0,r.jsxs)(n.p,{children:["Users must have the ",(0,r.jsx)(n.code,{children:"SELECT"})," privilege on the corresponding database to use UDF."]}),"\n",(0,r.jsxs)(n.p,{children:["The usage of UDF is similar to regular functions, with the only difference being that the scope of built-in functions is global, while the scope of UDF is within the database. When the session is connected to a database, simply use the UDF name to search for the corresponding UDF within the current database. Otherwise, the user needs to explicitly specify the database name of the UDF, such as ",(0,r.jsx)(n.code,{children:"dbName"}),".",(0,r.jsx)(n.code,{children:"funcName"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"deleting-udf",children:"Deleting UDF"}),"\n",(0,r.jsxs)(n.p,{children:["When you no longer need a UDF function, you can delete it using the ",(0,r.jsx)(n.code,{children:"DROP FUNCTION"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"samples/doris-demo/"})," directory provides examples of RPC server implementations in CPP, Java, and Python languages. Please refer to the ",(0,r.jsx)(n.code,{children:"README.md"})," file in each directory for specific usage instructions.\nFor example, ",(0,r.jsx)(n.code,{children:"rpc_add_string"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql >select rpc_add_string('doris');\n+-------------------------+\n| rpc_add_string('doris') |\n+-------------------------+\n| doris_rpc_test          |\n+-------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"The log will display:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'INFO: fnCall request=function_name: "add_string"\nargs {\n  type {\n    id: STRING\n  }\n  has_null: false\n  string_value: "doris"\n}\nINFO: fnCall res=result {\n  type {\n    id: STRING\n  }\n  has_null: false\n  string_value: "doris_rpc_test"\n}\nstatus {\n  status_code: 0\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return c}});var s=i(667294);let r={},t=s.createContext(r);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);