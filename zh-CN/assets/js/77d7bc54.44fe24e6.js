"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["111048"],{546323:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-bitmap","title":"EXPLODE_BITMAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-bitmap.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-bitmap","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXPLODE_BITMAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_OBJECT","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-object"},"next":{"title":"EXPLODE_SPLIT","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-split"}}'),s=l("785893"),t=l("250065");let i={title:"EXPLODE_BITMAP",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"explode_bitmap"})," \u8868\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A\u4F4D\u56FE\uFF08bitmap\uFF09\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5C06\u4F4D\u56FE\u4E2D\u7684\u6BCF\u4E2A bit\uFF08\u4F4D\uFF09\u6620\u5C04\u4E3A\u5355\u72EC\u7684\u884C\u3002\u901A\u5E38\u7528\u4E8E\u5904\u7406\u4F4D\u56FE\u6570\u636E\uFF0C\u5C06\u4F4D\u56FE\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u5C55\u5F00\u6210\u5355\u72EC\u7684\u8BB0\u5F55\u3002\u9700\u914D\u5408 Lateral View \u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"explode_bitmap_outer"})," \u4E0E ",(0,s.jsx)(n.code,{children:"explode_bitmap"})," \u7C7B\u4F3C\uFF0C\u4F46\u5728\u5904\u7406\u7A7A\u503C\u6216 NULL \u65F6\uFF0C\u884C\u4E3A\u6709\u6240\u4E0D\u540C\u3002\u5B83\u5141\u8BB8\u7A7A\u4F4D\u56FE\u6216 NULL \u4F4D\u56FE\u7684\u8BB0\u5F55\u5B58\u5728\uFF0C\u5E76\u5728\u8FD4\u56DE\u7ED3\u679C\u4E2D\u5C06\u7A7A\u4F4D\u56FE\u6216\u8005 NULL \u4F4D\u56FE\u5C55\u5F00\u4E3A NULL \u884C\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLODE_BITMAP(<bitmap>)\nEXPLODE_BITMAP_OUTER(<bitmap>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<bitmap>"})}),(0,s.jsx)(n.td,{children:"bitmap \u7C7B\u578B"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u4F4D\u56FE\u4E2D\u6BCF\u4E00\u4F4D\u5BF9\u5E94\u7684\u884C\uFF0C\u5176\u4E2D\u6BCF\u4E00\u884C\u5305\u542B\u4E00\u4E2A\u4F4D\u503C\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example1 (\n    k1 INT\n)DUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into example1 values(1),(2),(3),(4),(5),(6);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select k1 from example1 order by k1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select k1, e1 from example1 lateral view explode_bitmap(bitmap_empty()) tmp1 as e1 order by k1, e1;\nEmpty set\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    2 |    1 |\n|    3 |    1 |\n|    4 |    1 |\n|    5 |    1 |\n|    6 |    1 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,2")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    2 |    1 |\n|    2 |    2 |\n|    3 |    1 |\n|    3 |    2 |\n|    4 |    1 |\n|    4 |    2 |\n|    5 |    1 |\n|    5 |    2 |\n|    6 |    1 |\n|    6 |    2 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1 order by k1, e1;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 | 1000 |\n|    2 |    1 |\n|    2 | 1000 |\n|    3 |    1 |\n|    3 | 1000 |\n|    4 |    1 |\n|    4 | 1000 |\n|    5 |    1 |\n|    5 | 1000 |\n|    6 |    1 |\n|    6 | 1000 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select k1, e1, e2 from example1\nlateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1\nlateral view explode_split("a,b", ",") tmp2 as e2 order by k1, e1, e2;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+------+\n| k1   | e1   | e2   |\n+------+------+------+\n|    1 |    1 | a    |\n|    1 |    1 | b    |\n|    1 | 1000 | a    |\n|    1 | 1000 | b    |\n|    2 |    1 | a    |\n|    2 |    1 | b    |\n|    2 | 1000 | a    |\n|    2 | 1000 | b    |\n|    3 |    1 | a    |\n|    3 |    1 | b    |\n|    3 | 1000 | a    |\n|    3 | 1000 | b    |\n|    4 |    1 | a    |\n|    4 |    1 | b    |\n|    4 | 1000 | a    |\n|    4 | 1000 | b    |\n|    5 |    1 | a    |\n|    5 |    1 | b    |\n|    5 | 1000 | a    |\n|    5 | 1000 | b    |\n|    6 |    1 | a    |\n|    6 |    1 | b    |\n|    6 | 1000 | a    |\n|    6 | 1000 | b    |\n+------+------+------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE example (\n    k1 INT,\n    v1 bitmap\n)DUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS AUTO\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into example values(1,to_bitmap('10101')),(2,to_bitmap('0')),(3,to_bitmap(NULL));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT id, k, v\nFROM example\nLATERAL VIEW explode_json_object(value_json) exploded_table AS k , v;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+-------+\n| k1   | bit   |\n+------+-------+\n|    2 |     0 |\n|    1 | 10101 |\n+------+-------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT id, k, v\nFROM example\nLATERAL VIEW explode_json_object_outer(value_json) exploded_table AS k, v;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+-------+\n| k1   | bit   |\n+------+-------+\n|    2 |     0 |\n|    1 | 10101 |\n|    3 |  NULL |\n+------+-------+\n"})})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var a=l(667294);let s={},t=a.createContext(s);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);