"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["409568"],{118218:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/ntile","title":"NTILE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/ntile.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/ntile","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/ntile","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"NTILE","language":"en"},"sidebar":"docs","previous":{"title":"ROW_NUMBER","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/row-number"},"next":{"title":"EXPLODE_JSON_ARRAY_INT","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-json-array-int"}}'),i=t("785893"),r=t("250065");let a={title:"NTILE",language:"en"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"NTILE() is a window function that divides an ordered dataset into a specified number of approximately equal buckets. The buckets are numbered sequentially starting from 1 up to the specified number of buckets. When data cannot be divided equally, extra records are allocated to lower-numbered buckets, ensuring that the number of rows in each bucket differs by at most 1."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"NTILE( <constant_value> )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"constant_value"}),(0,i.jsx)(n.td,{children:"Required. Specifies the number of buckets to create, must be a positive integer"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a BIGINT bucket number, ranging from 1 to the specified number of buckets."}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(n.p,{children:"If a statement contains both an ORDER BY clause in the NTILE function and an ORDER BY clause for the output results, these two sorts are independent:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ORDER BY in the NTILE function determines which bucket each row is assigned to"}),"\n",(0,i.jsx)(n.li,{children:"The output ORDER BY determines the display order of the results"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT \n    name,\n    score,\n    NTILE(4) OVER (ORDER BY score DESC) as quarter\nFROM student_scores;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------+-------+---------+\n| name     | score | quarter |\n+----------+-------+---------+\n| Alice    | 98    | 1       |  -- Top 25% scores\n| Bob      | 95    | 1       |\n| Charlie  | 90    | 2       |  -- 25-50% scores\n| David    | 85    | 2       |\n| Eve      | 82    | 3       |  -- 50-75% scores\n| Frank    | 78    | 3       |\n| Grace    | 75    | 4       |  -- Bottom 25% scores\n| Henry    | 70    | 4       |\n+----------+-------+---------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);