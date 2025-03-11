"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["214196"],{278003:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/rank","title":"RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/rank.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/rank","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/rank","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RANK","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/window-function"},"next":{"title":"DENSE_RANK","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/dense-rank"}}'),s=t("785893"),i=t("250065");let r={title:"RANK",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"RANK() is a window function that returns the rank of values in an ordered dataset. Rankings start at 1 and increment sequentially. When identical values occur, they receive the same rank, but this creates gaps in the ranking sequence. For example, if the first two rows are tied for rank 1, the next different value will be ranked 3 (not 2)."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RANK()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a BIGINT rank value. Returns the same rank for identical values, but creates gaps in the sequence."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT \n    department,\n    employee_name,\n    salary,\n    RANK() OVER (\n        PARTITION BY department \n        ORDER BY salary DESC\n    ) as salary_rank\nFROM employees;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------+---------------+--------+-------------+\n| department | employee_name | salary | salary_rank |\n+------------+---------------+--------+-------------+\n| Sales      | Alice        | 10000  | 1           |\n| Sales      | Bob          | 10000  | 1           |\n| Sales      | Charlie      | 8000   | 3           |  -- Note this is 3, not 2\n| IT         | David        | 12000  | 1           |\n| IT         | Eve          | 11000  | 2           |\n| IT         | Frank        | 11000  | 2           |\n| IT         | Grace        | 9000   | 4           |  -- Note this is 4, not 3\n+------------+---------------+--------+-------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this example, the data is partitioned by department and ranked by salary within each department. When identical salaries occur (like Alice and Bob, Eve and Frank), they receive the same rank, but this creates gaps in subsequent rankings."})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var a=t(667294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);