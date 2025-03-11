"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["848936"],{564008:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp","title":"REGEXP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REGEXP","language":"en"},"sidebar":"docs","previous":{"title":"MASK_LAST_N","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/mask-last-n"},"next":{"title":"REGEXP_EXTRACT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract"}}'),r=s("785893"),i=s("250065");let l={title:"REGEXP",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Perform regular matching on the string str, return true if it matches, return false or not. Pattern is a regular expression."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,r.jsx)(n.code,{children:"\\p{Han}"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REGEXP(<str>, <pattern>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"The column need to do regular matching."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pattern>"})}),(0,r.jsx)(n.td,{children:"Target pattern."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"BOOLEAN"})," value indicating whether the match was successful"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Lets prepare some data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test ( k1 VARCHAR(255) ) properties(\"replication_num\"=\"1\")\n\nINSERT INTO test (k1) VALUES ('billie eillish'), ('It\\'s ok'), ('billie jean'), ('hello world');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Do ",(0,r.jsx)(n.code,{children:"REGEXP"})," now"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"--- Find all data starting with 'billie' in the k1 field\nSELECT k1 FROM test WHERE k1 REGEXP '^billie'\n--------------\n\n+----------------+\n| k1             |\n+----------------+\n| billie eillish |\n| billie jean    |\n+----------------+\n2 rows in set (0.02 sec)\n\n--- Find all data ending with 'ok' in the k1 field:\nSELECT k1 FROM test WHERE k1 REGEXP 'ok$'\n--------------\n\n+---------+\n| k1      |\n+---------+\n| It's ok |\n+---------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example for Chinese character"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> select regexp('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '\\\\p{Han}');\n+-----------------------------------------------------------------------------+\n| ('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567' regexp '\\p{Han}')         |\n+-----------------------------------------------------------------------------+\n|                                                                           1 |\n+-----------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);