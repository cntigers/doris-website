"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["545202"],{840551:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/first-value","title":"FIRST_VALUE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/first-value.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/first-value","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/first-value","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FIRST_VALUE","language":"en"},"sidebar":"docs","previous":{"title":"CUME_DIST","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/cume-dist"},"next":{"title":"LAST_VALUE","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/last-value"}}'),i=t("785893"),l=t("250065");let r={title:"FIRST_VALUE",language:"en"},a=void 0,o={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"FIRST_VALUE() is a window function that returns the first value in an ordered set of values within a window partition. The handling of null values can be controlled using the IGNORE NULLS options."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"FIRST_VALUE(expr[, ignore_null])\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"expr"}),(0,i.jsx)(e.td,{children:"The expression from which to get the first value"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ignore_null"}),(0,i.jsx)(e.td,{children:"Optional. When set, null values are ignored, returning the first non-null value"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Returns the same data type as the input expression."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"WITH example_data AS (\n    SELECT 1 as column1, NULL as column2, 'A' as group_name\n    UNION ALL\n    SELECT 1, 10, 'A'\n    UNION ALL\n    SELECT 1, NULL, 'A'\n    UNION ALL\n    SELECT 1, 20, 'A'\n    UNION ALL\n    SELECT 2, NULL, 'B'\n    UNION ALL\n    SELECT 2, 30, 'B'\n    UNION ALL\n    SELECT 2, 40, 'B'\n)\nSELECT \n    group_name,\n    column1,\n    column2,\n    FIRST_VALUE(column2) OVER (\n        PARTITION BY column1 \n        ORDER BY column2 NULLS LAST\n    ) AS first_value_default,\n    FIRST_VALUE(column2, true) OVER (\n        PARTITION BY column1 \n        ORDER BY column2\n    ) AS first_value_ignore_null\nFROM example_data\nORDER BY column1, column2;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------+---------+---------+---------------------+-------------------------+\n| group_name | column1 | column2 | first_value_default | first_value_ignore_null |\n+------------+---------+---------+---------------------+-------------------------+\n| A          |       1 |    NULL |                  10 |                    NULL |\n| A          |       1 |    NULL |                  10 |                    NULL |\n| A          |       1 |      10 |                  10 |                      10 |\n| A          |       1 |      20 |                  10 |                      10 |\n| B          |       2 |    NULL |                  30 |                    NULL |\n| B          |       2 |      30 |                  30 |                      30 |\n| B          |       2 |      40 |                  30 |                      30 |\n+------------+---------+---------+---------------------+-------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);