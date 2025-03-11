"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["400730"],{206640:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>r,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/cume-dist","title":"CUME_DIST","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/cume-dist.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/cume-dist","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/cume-dist","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CUME_DIST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PERCENT_RANK","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/percent-rank"},"next":{"title":"FIRST_VALUE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/first-value"}}'),i=s("785893"),l=s("250065");let a={title:"CUME_DIST",language:"zh-CN"},o=void 0,c={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"CUME_DIST (Cumulative Distribution) \u662F\u4E00\u79CD\u7A97\u53E3\u51FD\u6570\uFF0C\u5B83\u8BA1\u7B97\u5F53\u524D\u884C\u503C\u5728\u6392\u5E8F\u540E\u7ED3\u679C\u96C6\u4E2D\u7684\u76F8\u5BF9\u6392\u540D\u3002\u5B83\u8FD4\u56DE\u7684\u662F\u5F53\u524D\u884C\u503C\u5728\u7ED3\u679C\u96C6\u4E2D\u7684\u7D2F\u79EF\u5206\u5E03\u503C\uFF0C\u8303\u56F4\u4ECE 0 \u5230 1\u3002\u5BF9\u4E8E\u7ED9\u5B9A\u7684\u884C\uFF0C\u5176\u7D2F\u79EF\u5206\u5E03\u503C\u7B49\u4E8E\uFF1A(\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5F53\u524D\u884C\u503C\u7684\u884C\u6570) / (\u7A97\u53E3\u5206\u533A\u4E2D\u7684\u603B\u884C\u6570)\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CUME_DIST()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE DOUBLE \u7C7B\u578B\u7684\u6570\u503C\uFF0C\u8303\u56F4\u4ECE 0 \u5230 1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u5047\u8BBE\u6709\u4E00\u4E2A\u8868\u683C sales \u5305\u542B\u9500\u552E\u6570\u636E\uFF0C\u5176\u4E2D\u5305\u62EC\u9500\u552E\u5458\u59D3\u540D (sales_person)\u3001\u9500\u552E\u989D (sales_amount) \u548C\u9500\u552E\u65E5\u671F (sales_date)\u3002\u6211\u4EEC\u60F3\u8981\u8BA1\u7B97\u6BCF\u4E2A\u9500\u552E\u5458\u5728\u6BCF\u4E2A\u9500\u552E\u65E5\u671F\u7684\u9500\u552E\u989D\u5360\u5F53\u65E5\u603B\u9500\u552E\u989D\u7684\u7D2F\u79EF\u767E\u5206\u6BD4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT \n    sales_person,\n    sales_date,\n    sales_amount,\n    CUME_DIST() OVER (PARTITION BY sales_date ORDER BY sales_amount ASC) AS cumulative_sales_percentage\nFROM \n    sales;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5047\u8BBE\u8868\u683C sales \u4E2D\u7684\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------+--------------+------------+--------------+\n| id   | sales_person | sales_date | sales_amount |\n+------+--------------+------------+--------------+\n|    1 | Alice        | 2024-02-01 |         2000 |\n|    2 | Bob          | 2024-02-01 |         1500 |\n|    3 | Alice        | 2024-02-02 |         1800 |\n|    4 | Bob          | 2024-02-02 |         1200 |\n|    5 | Alice        | 2024-02-03 |         2200 |\n|    6 | Bob          | 2024-02-03 |         1900 |\n|    7 | Tom          | 2024-02-03 |         2000 |\n|    8 | Jerry        | 2024-02-03 |         2000 |\n+------+--------------+------------+--------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u4E0A\u8FF0 SQL \u67E5\u8BE2\u540E\uFF0C\u7ED3\u679C\u5C06\u663E\u793A\u6BCF\u4E2A\u9500\u552E\u5458\u5728\u6BCF\u4E2A\u9500\u552E\u65E5\u671F\u7684\u9500\u552E\u989D\u4EE5\u53CA\u5176\u5728\u8BE5\u9500\u552E\u65E5\u671F\u7684\u7D2F\u79EF\u767E\u5206\u6BD4\u6392\u540D\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+------------+--------------+-----------------------------+\n| sales_person | sales_date | sales_amount | cumulative_sales_percentage |\n+--------------+------------+--------------+-----------------------------+\n| Bob          | 2024-02-01 |         1500 |                         0.5 |\n| Alice        | 2024-02-01 |         2000 |                           1 |\n| Bob          | 2024-02-02 |         1200 |                         0.5 |\n| Alice        | 2024-02-02 |         1800 |                           1 |\n| Bob          | 2024-02-03 |         1900 |                        0.25 |\n| Tom          | 2024-02-03 |         2000 |                        0.75 |\n| Jerry        | 2024-02-03 |         2000 |                        0.75 |\n| Alice        | 2024-02-03 |         2200 |                           1 |\n+--------------+------------+--------------+-----------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0CCUME_DIST() \u51FD\u6570\u6839\u636E\u6BCF\u4E2A\u9500\u552E\u65E5\u671F\u5BF9\u9500\u552E\u989D\u8FDB\u884C\u6392\u5E8F\uFF0C\u7136\u540E\u8BA1\u7B97\u6BCF\u4E2A\u9500\u552E\u5458\u5728\u8BE5\u9500\u552E\u65E5\u671F\u7684\u9500\u552E\u989D\u5360\u5F53\u65E5\u603B\u9500\u552E\u989D\u7684\u7D2F\u79EF\u767E\u5206\u6BD4\u3002\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528\u4E86 PARTITION BY sales_date\uFF0C\u6240\u4EE5\u8BA1\u7B97\u662F\u5728\u6BCF\u4E2A\u9500\u552E\u65E5\u671F\u5185\u8FDB\u884C\u7684\uFF0C\u9500\u552E\u5458\u5728\u4E0D\u540C\u65E5\u671F\u7684\u9500\u552E\u989D\u88AB\u5206\u522B\u8BA1\u7B97\u3002"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);