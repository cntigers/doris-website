"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["899427"],{419156:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/lag","title":"LAG","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/lag.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/lag","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/lag","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"LAG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LEAD","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/lead"},"next":{"title":"ROW_NUMBER","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/row-number"}}'),i=t("785893"),l=t("250065");let o={title:"LAG",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function a(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"LAG() \u662F\u4E00\u4E2A\u7A97\u53E3\u51FD\u6570\uFF0C\u7528\u4E8E\u8BBF\u95EE\u5F53\u524D\u884C\u4E4B\u524D\u7684\u884C\u6570\u636E\uFF0C\u800C\u65E0\u9700\u8FDB\u884C\u81EA\u8FDE\u63A5\u3002\u5B83\u53EF\u4EE5\u83B7\u53D6\u5206\u533A\u5185\u5F53\u524D\u884C\u4E4B\u524D\u7B2C N \u884C\u7684\u503C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"LAG ( <expr> [, <offset> [, <default> ] ] )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"expr"}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u83B7\u53D6\u503C\u7684\u8868\u8FBE\u5F0F"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"offset"}),(0,i.jsx)(e.td,{children:"\u53EF\u9009\u3002\u5411\u524D\u504F\u79FB\u7684\u884C\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A 1\u3002\u8BBE\u7F6E\u4E3A\u8D1F\u6570\u65F6\u6548\u679C\u7B49\u540C\u4E8E\u4F7F\u7528 LEAD \u51FD\u6570"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"default"}),(0,i.jsx)(e.td,{children:"\u53EF\u9009\u3002\u5F53\u504F\u79FB\u8D85\u51FA\u7A97\u53E3\u8303\u56F4\u65F6\u8FD4\u56DE\u7684\u9ED8\u8BA4\u503C\u3002\u9ED8\u8BA4\u4E3A NULL"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u4E0E\u8F93\u5165\u8868\u8FBE\u5F0F\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u6BCF\u4E2A\u9500\u552E\u5458\u5F53\u524D\u9500\u552E\u989D\u4E0E\u524D\u4E00\u5929\u9500\u552E\u989D\u7684\u5DEE\u503C\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select stock_symbol, closing_date, closing_price,    \nlag(closing_price,1, 0) over (partition by stock_symbol order by closing_date) as "yesterday closing"   \nfrom stock_ticker   \norder by closing_date;\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+--------------+---------------------+---------------+-------------------+\n| stock_symbol | closing_date        | closing_price | yesterday closing |\n| ------------ | ------------------- | ------------- | ----------------- |\n| JDR          | 2014-09-13 00:00:00 | 12.86         | 0                 |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | 12.86             |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | 12.89             |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | 12.94             |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | 12.55             |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | 14.03             |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | 14.75             |\n+--------------+---------------------+---------------+-------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},l=s.createContext(i);function o(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);