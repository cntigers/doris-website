"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["744391"],{983217:function(n,e,r){r.r(e),r.d(e,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/percent-rank","title":"PERCENT_RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/percent-rank.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/percent-rank","permalink":"/docs/sql-manual/sql-functions/window-functions/percent-rank","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"PERCENT_RANK","language":"en"},"sidebar":"docs","previous":{"title":"DENSE_RANK","permalink":"/docs/sql-manual/sql-functions/window-functions/dense-rank"},"next":{"title":"CUME_DIST","permalink":"/docs/sql-manual/sql-functions/window-functions/cume-dist"}}'),t=r("785893"),a=r("250065");let i={title:"PERCENT_RANK",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"PERCENT_RANK() is a window function that calculates the relative rank of a row within a partition or result set, returning values from 0.0 to 1.0. For a given row, it is calculated as: (rank - 1) / (total_rows - 1), where rank is the current row's rank and total_rows is the total number of rows in the partition."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"PERCENT_RANK()\n"})}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(e.p,{children:"Returns a DOUBLE value ranging from 0.0 to 1.0:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Always returns 0 for the first row in the partition"}),"\n",(0,t.jsx)(e.li,{children:"Always returns 1 for the last row in the partition"}),"\n",(0,t.jsx)(e.li,{children:"Returns the same percentage rank for identical values"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE test_percent_rank (\n    productLine VARCHAR,\n    orderYear INT,\n    orderValue DOUBLE,\n    percentile_rank DOUBLE\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`orderYear`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"INSERT INTO test_percent_rank (productLine, orderYear, orderValue, percentile_rank) VALUES\n('Motorcycles', 2003, 2440.50, 0.00),\n('Trains', 2003, 2770.95, 0.17),\n('Trucks and Buses', 2003, 3284.28, 0.33),\n('Vintage Cars', 2003, 4080.00, 0.50),\n('Planes', 2003, 4825.44, 0.67),\n('Ships', 2003, 5072.71, 0.83),\n('Classic Cars', 2003, 5571.80, 1.00),\n('Motorcycles', 2004, 2598.77, 0.00),\n('Vintage Cars', 2004, 2819.28, 0.17),\n('Planes', 2004, 2857.35, 0.33),\n('Ships', 2004, 4301.15, 0.50),\n('Trucks and Buses', 2004, 4615.64, 0.67),\n('Trains', 2004, 4646.88, 0.83),\n('Classic Cars', 2004, 8124.98, 1.00),\n('Ships', 2005, 1603.20, 0.00),\n('Motorcycles', 2005, 3774.00, 0.17),\n('Planes', 2005, 4018.00, 0.50),\n('Vintage Cars', 2005, 5346.50, 0.67),\n('Classic Cars', 2005, 5971.35, 0.83),\n('Trucks and Buses', 2005, 6295.03, 1.00);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT\n    productLine,\n    orderYear,\n    orderValue,\n    ROUND(\n    PERCENT_RANK()\n    OVER (\n        PARTITION BY orderYear\n        ORDER BY orderValue\n    ),2) percentile_rank\nFROM\n    test_percent_rank\nORDER BY\n    orderYear;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------+-----------+------------+-----------------+\n| productLine      | orderYear | orderValue | percentile_rank |\n+------------------+-----------+------------+-----------------+\n| Motorcycles      |      2003 |     2440.5 |               0 |\n| Trains           |      2003 |    2770.95 |            0.17 |\n| Trucks and Buses |      2003 |    3284.28 |            0.33 |\n| Vintage Cars     |      2003 |       4080 |             0.5 |\n| Planes           |      2003 |    4825.44 |            0.67 |\n| Ships            |      2003 |    5072.71 |            0.83 |\n| Classic Cars     |      2003 |     5571.8 |               1 |\n| Motorcycles      |      2004 |    2598.77 |               0 |\n| Vintage Cars     |      2004 |    2819.28 |            0.17 |\n| Planes           |      2004 |    2857.35 |            0.33 |\n| Ships            |      2004 |    4301.15 |             0.5 |\n| Trucks and Buses |      2004 |    4615.64 |            0.67 |\n| Trains           |      2004 |    4646.88 |            0.83 |\n| Classic Cars     |      2004 |    8124.98 |               1 |\n| Ships            |      2005 |     1603.2 |               0 |\n| Motorcycles      |      2005 |       3774 |             0.2 |\n| Planes           |      2005 |       4018 |             0.4 |\n| Vintage Cars     |      2005 |     5346.5 |             0.6 |\n| Classic Cars     |      2005 |    5971.35 |             0.8 |\n| Trucks and Buses |      2005 |    6295.03 |               1 |\n+------------------+-----------+------------+-----------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);