"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["333554"],{512308:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/ntile","title":"NTILE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/ntile.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/ntile","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/ntile","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NTILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ROW_NUMBER","permalink":"/zh-CN/docs/sql-manual/sql-functions/window-functions/row-number"},"next":{"title":"EXPLODE_JSON_ARRAY_INT","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array-int"}}'),s=t("785893"),l=t("250065");let r={title:"NTILE",language:"zh-CN"},o=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"NTILE() \u662F\u4E00\u4E2A\u7A97\u53E3\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u6709\u5E8F\u6570\u636E\u96C6\u5E73\u5747\u5206\u914D\u5230\u6307\u5B9A\u6570\u91CF\u7684\u6876\u4E2D\u3002\u6876\u7684\u7F16\u53F7\u4ECE 1 \u5F00\u59CB\u987A\u5E8F\u7F16\u53F7\uFF0C\u76F4\u5230\u6307\u5B9A\u7684\u6876\u6570\u3002\u5F53\u6570\u636E\u65E0\u6CD5\u5E73\u5747\u5206\u914D\u65F6\uFF0C\u4F18\u5148\u5C06\u591A\u51FA\u7684\u8BB0\u5F55\u5206\u914D\u7ED9\u7F16\u53F7\u8F83\u5C0F\u7684\u6876\uFF0C\u4F7F\u5F97\u5404\u4E2A\u6876\u4E2D\u7684\u884C\u6570\u6700\u591A\u76F8\u5DEE 1\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"NTILE( <constant_value> )\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"constant_value"}),(0,s.jsx)(e.td,{children:"\u5FC5\u9700\u3002\u6307\u5B9A\u8981\u5206\u914D\u7684\u6876\u6570\u91CF\uFF0C\u5FC5\u987B\u662F\u6B63\u6574\u6570"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE BIGINT \u7C7B\u578B\u7684\u6876\u7F16\u53F7\uFF0C\u8303\u56F4\u4ECE 1 \u5230\u6307\u5B9A\u7684\u6876\u6570\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u8BED\u53E5\u4E2D\u540C\u65F6\u5305\u542B NTILE \u51FD\u6570\u7684 ORDER BY \u5B50\u53E5\u548C\u8F93\u51FA\u7ED3\u679C\u7684 ORDER BY \u5B50\u53E5\uFF0C\u8FD9\u4E24\u4E2A\u6392\u5E8F\u662F\u72EC\u7ACB\u7684\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"NTILE \u51FD\u6570\u7684 ORDER BY \u51B3\u5B9A\u4E86\u884C\u88AB\u5206\u914D\u5230\u54EA\u4E2A\u6876\u4E2D"}),"\n",(0,s.jsx)(e.li,{children:"\u8F93\u51FA\u7684 ORDER BY \u51B3\u5B9A\u4E86\u7ED3\u679C\u7684\u663E\u793A\u987A\u5E8F"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT \n    name,\n    score,\n    NTILE(4) OVER (ORDER BY score DESC) as quarter\nFROM student_scores;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------+-------+---------+\n| name     | score | quarter |\n+----------+-------+---------+\n| Alice    | 98    | 1       |  -- \u524D 25% \u7684\u6210\u7EE9\n| Bob      | 95    | 1       |\n| Charlie  | 90    | 2       |  -- \u524D 25-50% \u7684\u6210\u7EE9\n| David    | 85    | 2       |\n| Eve      | 82    | 3       |  -- \u524D 50-75% \u7684\u6210\u7EE9\n| Frank    | 78    | 3       |\n| Grace    | 75    | 4       |  -- \u540E 25% \u7684\u6210\u7EE9\n| Henry    | 70    | 4       |\n+----------+-------+---------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);