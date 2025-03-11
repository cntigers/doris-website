"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["970307"],{530095:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>r,contentTitle:()=>i});var s=JSON.parse('{"id":"data-operate/import/complex-types/json","title":"JSON","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/complex-types/json.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/json","permalink":"/zh-CN/docs/data-operate/import/complex-types/json","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRUCT","permalink":"/zh-CN/docs/data-operate/import/complex-types/struct"},"next":{"title":"Bitmap","permalink":"/zh-CN/docs/data-operate/import/complex-types/bitmap"}}'),t=l("785893"),a=l("250065");let o={title:"JSON",language:"zh-CN"},i=void 0,c={},r=[{value:"CSV \u683C\u5F0F\u5BFC\u5165",id:"csv-\u683C\u5F0F\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"JSON \u683C\u5F0F\u5BFC\u5165",id:"json-\u683C\u5F0F\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E-1",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3}];function d(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"JSON"})," \u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u9AD8\u6548\u5B58\u50A8 JSON \u6570\u636E\uFF0C\u901A\u8FC7 JSON \u51FD\u6570\u8BBF\u95EE\u5176\u5185\u90E8\u5B57\u6BB5\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u9ED8\u8BA4\u652F\u6301 1048576 \u5B57\u8282\uFF081 MB\uFF09\uFF0C\u53EF\u8C03\u5927\u5230 2147483643 \u5B57\u8282\uFF082 GB\uFF09\uFF0C\u53EF\u901A\u8FC7 BE \u914D\u7F6E",(0,t.jsx)(e.code,{children:"string_type_length_soft_limit_bytes"})," \u8C03\u6574\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4E0E\u666E\u901A String \u7C7B\u578B\u5B58\u50A8\u7684 JSON \u5B57\u7B26\u4E32\u76F8\u6BD4\uFF0CJSON \u7C7B\u578B\u6709\u4E24\u70B9\u4F18\u52BF"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u6570\u636E\u5199\u5165\u65F6\u8FDB\u884C JSON \u683C\u5F0F\u6821\u9A8C"}),"\n",(0,t.jsx)(e.li,{children:"\u4E8C\u8FDB\u5236\u5B58\u50A8\u683C\u5F0F\u66F4\u52A0\u9AD8\u6548\uFF0C\u901A\u8FC7 json_extract \u7B49\u51FD\u6570\u53EF\u4EE5\u9AD8\u6548\u8BBF\u95EE JSON \u5185\u90E8\u5B57\u6BB5\uFF0C\u6BD4 get_json_xx \u51FD\u6570\u5FEB\u51E0\u500D"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,t.jsx)(e.p,{children:"\u5728 1.2.x \u7248\u672C\u4E2D\uFF0CJSON \u7C7B\u578B\u7684\u540D\u5B57\u662F JSONB\uFF0C\u4E3A\u4E86\u5C3D\u91CF\u8DDF MySQL \u517C\u5BB9\uFF0C\u4ECE 2.0.0 \u7248\u672C\u5F00\u59CB\u6539\u540D\u4E3A JSON\uFF0C\u8001\u7684\u8868\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"csv-\u683C\u5F0F\u5BFC\u5165",children:"CSV \u683C\u5F0F\u5BFC\u5165"}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,t.jsxs)(e.p,{children:["\u521B\u5EFA\u5982\u4E0B\u7684 csv \u6587\u4EF6\uFF1A",(0,t.jsx)(e.code,{children:"test_json.csv"}),"\n\u5176\u4E2D\u5206\u9694\u7B26\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"|"})," \u800C\u4E0D\u662F\u9017\u53F7\uFF0C\u4EE5\u4FBF\u548C json \u4E2D\u7684\u9017\u53F7\u533A\u5206\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'1|{"name": "tom", "age": 35}\n2|{"name": null, "age": 28}\n3|{"name": "micheal", "age": null}\n4|{"name": null, "age": null}\n5|null\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-2-\u6B65\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE json_test (\n    id          INT     NOT NULL,\n    c_json      JSON    NULL\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "column_separator:|" \\\n        -H "columns: id, c_json" \\\n        -T "test_json.csv" \\\n        http://localhost:8040/api/testdb/json_test/_stream_load\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SELECT * FROM json_test;\n+------+-------------------------------+\n| id   | c_json                        |\n+------+-------------------------------+\n|    1 | {"name":"tom","age":35}       |\n|    2 | {"name":null,"age":28}        |\n|    3 | {"name":"micheal","age":null} |\n|    4 | {"name":null,"age":null}      |\n|    5 | null                          |\n+------+-------------------------------+\n5 rows in set (0.01 sec)\n'})}),"\n",(0,t.jsx)(e.h2,{id:"json-\u683C\u5F0F\u5BFC\u5165",children:"JSON \u683C\u5F0F\u5BFC\u5165"}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,t.jsxs)(e.p,{children:["\u521B\u5EFA\u5982\u4E0B\u7684 JSON \u6587\u4EF6\uFF0C",(0,t.jsx)(e.code,{children:"test_json.json"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'[\n    {"id": 1, "c_json": {"name": "tom", "age": 35}},\n    {"id": 2, "c_json": {"name": null, "age": 28}},\n    {"id": 3, "c_json": {"name": "micheal", "age": null}},\n    {"id": 4, "c_json": {"name": null, "age": null}},\n    {"id": 5, "c_json": null}\n]\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-2-\u6B65\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE json_test (\n    id          INT     NOT NULL,\n    c_json      JSON    NULL\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-3-\u6B65\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 3 \u6B65\uFF1A\u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "format:json" \\\n        -H "columns: id, c_json" \\\n        -H "strip_outer_array:true" \\\n        -T "test_json.json" \\\n        http://localhost:8040/api/testdb/json_test/_stream_load\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> SELECT * FROM json_test;\n+------+-------------------------------+\n| id   | c_json                        |\n+------+-------------------------------+\n|    1 | {"name":"tom","age":35}       |\n|    2 | {"name":null,"age":28}        |\n|    3 | {"name":"micheal","age":null} |\n|    4 | {"name":null,"age":null}      |\n|    5 | NULL                          |\n+------+-------------------------------+\n5 rows in set (0.01 sec)\n'})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return o}});var s=l(667294);let t={},a=s.createContext(t);function o(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);