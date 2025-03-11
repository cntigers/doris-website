"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["59263"],{396777:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/retention","title":"RETENTION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/retention.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/retention","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/retention","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RETENTION","language":"en"},"sidebar":"docs","previous":{"title":"COLLECT_LIST","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-list"},"next":{"title":"SEQUENCE_MATCH","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/sequence-match"}}'),r=t("785893"),s=t("250065");let a={title:"RETENTION",language:"en"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returned value",id:"returned-value",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"retention"})," function takes as arguments a set of conditions from 1 to 32 arguments of type ",(0,r.jsx)(n.code,{children:"UInt8"})," that indicate whether a certain condition was met for the event. Any condition can be specified as an argument."]}),"\n",(0,r.jsx)(n.p,{children:"The conditions, except the first, apply in pairs: the result of the second will be true if the first and second are true, of the third if the first and third are true, etc."}),"\n",(0,r.jsxs)(n.p,{children:["To put it simply, the first digit of the return value array indicates whether ",(0,r.jsx)(n.code,{children:"event_1"})," is true or false, the second digit represents the truth and falseness of ",(0,r.jsx)(n.code,{children:"event_1"})," and ",(0,r.jsx)(n.code,{children:"event_2"}),", and the third digit represents whether ",(0,r.jsx)(n.code,{children:"event_1"})," is true or false and ",(0,r.jsx)(n.code,{children:"event_3"})," is true False and, and so on. If ",(0,r.jsx)(n.code,{children:"event_1"})," is false, return an array full of zeros."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RETENTION(<event_1> [, <event_2>, ... , <event_n>]);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<event_n>"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"n"}),"th event condition, of type ",(0,r.jsx)(n.code,{children:"UInt8"})," and value 1 or 0."]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returned-value",children:"Returned value"}),"\n",(0,r.jsx)(n.p,{children:"An array of 1 and 0 with a maximum length of 32, where the final output array length matches the input parameter length."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1: Condition is met."}),"\n",(0,r.jsx)(n.li,{children:"0: Condition is not met."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Create sample table\nCREATE TABLE retention_test(\n    `uid` int COMMENT 'user id', \n    `date` datetime COMMENT 'date time' \n) DUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS AUTO\nPROPERTIES ( \n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\n-- Insert sample data\nINSERT into retention_test values \n(0, '2022-10-12'),\n(0, '2022-10-13'),\n(0, '2022-10-14'),\n(1, '2022-10-12'),\n(1, '2022-10-13'),\n(2, '2022-10-12');\n\n-- Calculate user retention\nSELECT \n    uid,     \n    RETENTION(date = '2022-10-12') AS r,\n    RETENTION(date = '2022-10-12', date = '2022-10-13') AS r2,\n    RETENTION(date = '2022-10-12', date = '2022-10-13', date = '2022-10-14') AS r3 \nFROM retention_test \nGROUP BY uid \nORDER BY uid ASC;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+------+--------+-----------+\n| uid  | r    | r2     | r3        |\n+------+------+--------+-----------+\n|    0 | [1]  | [1, 1] | [1, 1, 1] |\n|    1 | [1]  | [1, 1] | [1, 1, 0] |\n|    2 | [1]  | [1, 0] | [1, 0, 0] |\n+------+------+--------+-----------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);