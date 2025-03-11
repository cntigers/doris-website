"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["160451"],{621197:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>o,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/first-value","title":"FIRST_VALUE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/first-value.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/first-value","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/first-value","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FIRST_VALUE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CUME_DIST","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/cume-dist"},"next":{"title":"LAST_VALUE","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/last-value"}}'),i=t("785893"),s=t("250065");let o={title:"FIRST_VALUE",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"FIRST_VALUE() \u662F\u4E00\u4E2A\u7A97\u53E3\u51FD\u6570\uFF0C\u7528\u4E8E\u8FD4\u56DE\u7A97\u53E3\u5206\u533A\u4E2D\u6709\u5E8F\u6570\u636E\u96C6\u7684\u7B2C\u4E00\u4E2A\u503C\u3002\u53EF\u4EE5\u901A\u8FC7 IGNORE NULLS \u9009\u9879\u6765\u63A7\u5236\u662F\u5426\u5FFD\u7565\u7A7A\u503C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"FIRST_VALUE(<expr>[, <ignore_null>])\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"expr"}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u83B7\u53D6\u7B2C\u4E00\u4E2A\u503C\u7684\u8868\u8FBE\u5F0F"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ignore_null"}),(0,i.jsx)(e.td,{children:"\u53EF\u9009\u3002\u53C2\u6570 ignore_null \u9ED8\u8BA4\u503C\u4E3A false, \u8BBE\u7F6E\u540E\u4F1A\u5FFD\u7565\u7A7A\u503C"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E0E\u8F93\u5165\u8868\u8FBE\u5F0F\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"WITH example_data AS (\n    SELECT 1 as column1, NULL as column2, 'A' as group_name\n    UNION ALL\n    SELECT 1, 10, 'A'\n    UNION ALL\n    SELECT 1, NULL, 'A'\n    UNION ALL\n    SELECT 1, 20, 'A'\n    UNION ALL\n    SELECT 2, NULL, 'B'\n    UNION ALL\n    SELECT 2, 30, 'B'\n    UNION ALL\n    SELECT 2, 40, 'B'\n)\nSELECT \n    group_name,\n    column1,\n    column2,\n    FIRST_VALUE(column2) OVER (\n        PARTITION BY column1 \n        ORDER BY column2 NULLS LAST\n    ) AS first_value_default,\n    FIRST_VALUE(column2, true) OVER (\n        PARTITION BY column1 \n        ORDER BY column2\n    ) AS first_value_ignore_null\nFROM example_data\nORDER BY column1, column2;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------+---------+---------+---------------------+-------------------------+\n| group_name | column1 | column2 | first_value_default | first_value_ignore_null |\n+------------+---------+---------+---------------------+-------------------------+\n| A          |       1 |    NULL |                  10 |                    NULL |\n| A          |       1 |    NULL |                  10 |                    NULL |\n| A          |       1 |      10 |                  10 |                      10 |\n| A          |       1 |      20 |                  10 |                      10 |\n| B          |       2 |    NULL |                  30 |                    NULL |\n| B          |       2 |      30 |                  30 |                      30 |\n| B          |       2 |      40 |                  30 |                      30 |\n+------------+---------+---------+---------------------+-------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return o}});var l=t(667294);let i={},s=l.createContext(i);function o(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);