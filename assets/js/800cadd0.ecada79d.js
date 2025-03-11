"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["164587"],{159330:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-json-array-double","title":"EXPLODE_JSON_ARRAY_DOUBLE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-functions/explode-json-array-double.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-json-array-double","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-json-array-double","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"EXPLODE_JSON_ARRAY_DOUBLE","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY_INT","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-json-array-int"},"next":{"title":"EXPLODE_JSON_ARRAY_STRING","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-json-array-string"}}'),r=s("785893"),l=s("250065");let t={title:"EXPLODE_JSON_ARRAY_DOUBLE",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"explode_json_array_double"})," table function accepts a JSON array, where each element is of double-precision floating-point type, and expands each floating-point number in the array into multiple rows, with each row containing one floating-point number. It is used in conjunction with LATERAL VIEW."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"explode_json_array_double_outer"})," is similar to ",(0,r.jsx)(n.code,{children:"explode_json_array_double"}),", but the handling of NULL values is different."]}),"\n",(0,r.jsxs)(n.p,{children:["If the JSON string itself is NULL, the ",(0,r.jsx)(n.code,{children:"OUTER"})," version will return one row, with the value as NULL. The normal version will completely ignore such records."]}),"\n",(0,r.jsxs)(n.p,{children:["If the JSON array is empty, the ",(0,r.jsx)(n.code,{children:"OUTER"})," version will return one row, with the value as NULL. The normal version will return no results."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"EXPLODE_JSON_ARRAY_DOUBLE(<json>)\nEXPLODE_JSON_ARRAY_DOUBLE_OUTER(<json>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<json>"})}),(0,r.jsx)(n.td,{children:"json type"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Expands the JSON array, creating a row for each element, returning a double-precision floating-point column."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE json_array_example (\n    id INT,\n    json_array STRING\n)DUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO json_array_example (id, json_array) VALUES\n(1, '[1, 2, 3, 4, 5]'),\n(2, '[1.1, 2.2, 3.3, 4.4]'),\n(3, '[\"apple\", \"banana\", \"cherry\"]'),\n(4, '[{\"a\": 1}, {\"b\": 2}, {\"c\": 3}]'),\n(5, '[]'),\n(6, 'NULL');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_DOUBLE(json_array) tmp1 AS e1\nWHERE id = 2;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+\n| id   | e1   |\n+------+------+\n|    2 |  1.1 |\n|    2 |  2.2 |\n|    2 |  3.3 |\n|    2 |  4.4 |\n+------+------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_DOUBLE(json_array) tmp1 AS e1\nWHERE id = 6;\nEmpty set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT id, e1\nFROM json_array_example\nLATERAL VIEW EXPLODE_JSON_ARRAY_DOUBLE_OUTER(json_array) tmp1 AS e1\nWHERE id = 6;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+\n| id   | e1   |\n+------+------+\n|    6 | NULL |\n+------+------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var a=s(667294);let r={},l=a.createContext(r);function t(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);