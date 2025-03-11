"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["678410"],{62509:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>u,contentTitle:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/row-number","title":"ROW_NUMBER","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/docs/sql-manual/sql-functions/window-functions/row-number.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/row-number","permalink":"/docs/dev/sql-manual/sql-functions/window-functions/row-number","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ROW_NUMBER","language":"en"},"sidebar":"docs","previous":{"title":"LAG","permalink":"/docs/dev/sql-manual/sql-functions/window-functions/lag"},"next":{"title":"NTILE","permalink":"/docs/dev/sql-manual/sql-functions/window-functions/ntile"}}'),s=t("785893"),r=t("250065");let o={title:"ROW_NUMBER",language:"en"},a=void 0,l={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"ROW_NUMBER() is a window function that assigns a unique sequential number to each row within a partition. Numbers start at 1 and increment continuously. Unlike RANK() and DENSE_RANK(), ROW_NUMBER() assigns different numbers even for identical values, ensuring each row has a unique number."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ROW_NUMBER()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"Returns a BIGINT sequence number, starting from 1 and incrementing continuously. Numbers are unique within each partition."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select x, y, row_number() over(partition by x order by y) as rank from int_t;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----+-----+------+\n| x   | y   | rank |\n| --- | --- | ---- |\n| 1   | 1   | 1    |\n| 1   | 2   | 2    |\n| 1   | 2   | 3    |\n| 2   | 1   | 1    |\n| 2   | 2   | 2    |\n| 2   | 3   | 3    |\n| 3   | 1   | 1    |\n| 3   | 1   | 2    |\n| 3   | 2   | 3    |\n+-----+-----+------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);