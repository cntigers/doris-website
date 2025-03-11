"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["153886"],{804997:function(n,e,t){t.r(e),t.d(e,{default:()=>c,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>L,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/last-value","title":"LAST_VALUE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/last-value.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/last-value","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/last-value","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LAST_VALUE","language":"en"},"sidebar":"docs","previous":{"title":"FIRST_VALUE","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/first-value"},"next":{"title":"LEAD","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/lead"}}'),l=t("785893"),i=t("250065");let a={title:"LAST_VALUE",language:"en"},r=void 0,o={},L=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"LAST_VALUE() is a window function that returns the last value within the window frame. The handling of null values can be controlled using the IGNORE NULLS options."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"LAST_VALUE(<expr>[, <ignore_null>])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"expr"}),(0,l.jsx)(e.td,{children:"The expression from which to get the last value"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ignore_null"}),(0,l.jsx)(e.td,{children:"Optional. When set, null values are ignored, returning the last non-null value"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(e.p,{children:"Returns the same data type as the input expression."}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"WITH example_data AS (\n    SELECT 1 as id, 21 as myday, '04-21-11' as time_col, NULL as state\n    UNION ALL\n    SELECT 2, 21, '04-21-12', 2\n    UNION ALL\n    SELECT 3, 21, '04-21-13', 3\n    UNION ALL\n    SELECT 4, 22, '04-22-10-21', NULL\n    UNION ALL\n    SELECT 5, 22, '04-22-10-22', NULL\n    UNION ALL\n    SELECT 6, 22, '04-22-10-23', 5\n    UNION ALL\n    SELECT 7, 22, '04-22-10-24', NULL\n    UNION ALL\n    SELECT 8, 22, '04-22-10-25', 9\n    UNION ALL\n    SELECT 9, 23, '04-23-11', NULL\n    UNION ALL\n    SELECT 10, 23, '04-23-12', 10\n    UNION ALL\n    SELECT 11, 23, '04-23-13', NULL\n    UNION ALL\n    SELECT 12, 24, '02-24-10-21', NULL\n)\nSELECT \n    *,\n    last_value(`state`, 1) OVER(\n        PARTITION BY `myday` \n        ORDER BY `time_col` DESC \n        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n    ) as ignore_null,\n    last_value(`state`, 0) OVER(\n        PARTITION BY `myday` \n        ORDER BY `time_col` DESC \n        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n    ) as not_ignore_null,\n    last_value(`state`) OVER(\n        PARTITION BY `myday` \n        ORDER BY `time_col` DESC \n        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n    ) as ignore_null_default\nFROM example_data \nORDER BY `id`, `myday`, `time_col`;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+-------+-------------+-------+-------------+-----------------+---------------------+\n| id   | myday | time_col    | state | ignore_null | not_ignore_null | ignore_null_default |\n+------+-------+-------------+-------+-------------+-----------------+---------------------+\n|    1 |    21 | 04-21-11    |  NULL |           2 |            NULL |                NULL |\n|    2 |    21 | 04-21-12    |     2 |           2 |            NULL |                NULL |\n|    3 |    21 | 04-21-13    |     3 |           2 |               2 |                   2 |\n|    4 |    22 | 04-22-10-21 |  NULL |        NULL |            NULL |                NULL |\n|    5 |    22 | 04-22-10-22 |  NULL |           5 |            NULL |                NULL |\n|    6 |    22 | 04-22-10-23 |     5 |           5 |            NULL |                NULL |\n|    7 |    22 | 04-22-10-24 |  NULL |           5 |               5 |                   5 |\n|    8 |    22 | 04-22-10-25 |     9 |           9 |            NULL |                NULL |\n|    9 |    23 | 04-23-11    |  NULL |          10 |            NULL |                NULL |\n|   10 |    23 | 04-23-12    |    10 |          10 |            NULL |                NULL |\n|   11 |    23 | 04-23-13    |  NULL |          10 |              10 |                  10 |\n|   12 |    24 | 02-24-10-21 |  NULL |        NULL |            NULL |                NULL |\n+------+-------+-------------+-------+-------------+-----------------+---------------------+\n"})})]})}function c(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);