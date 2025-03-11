"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["888184"],{388191:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","title":"WINDOW_FUNCTION_SUM","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WINDOW_FUNCTION_SUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u7A97\u53E3\u51FD\u6570","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION"},"next":{"title":"WINDOW_FUNCTION_AVG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG"}}'),i=t("785893"),s=t("250065");let r={title:"WINDOW_FUNCTION_SUM",language:"zh-CN"},l=void 0,c={},d=[{value:"WINDOW FUNCTION SUM",id:"window-function-sum",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"window-function-sum",children:"WINDOW FUNCTION SUM"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u7A97\u53E3\u5185\u6570\u636E\u7684\u548C"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SUM([ALL] expression) [OVER (analytic_clause)]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167 property \u8FDB\u884C\u5206\u7EC4\uFF0C\u5728\u7EC4\u5185\u8BA1\u7B97\u5F53\u524D\u884C\u4EE5\u53CA\u524D\u540E\u5404\u4E00\u884C\u7684x\u5217\u7684\u548C\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select x, property,   \nsum(x) over    \n(   \npartition by property   \norder by x   \nrows between 1 preceding and 1 following    \n) as 'moving total'    \nfrom int_t where property in ('odd','even');\n\n| x  | property | moving total |\n|----|----------|--------------|\n| 2  | even     | 6            |\n| 4  | even     | 12           |\n| 6  | even     | 18           |\n| 8  | even     | 24           |\n| 10 | even     | 18           |\n| 1  | odd      | 4            |\n| 3  | odd      | 9            |\n| 5  | odd      | 15           |\n| 7  | odd      | 21           |\n| 9  | odd      | 16           |\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"WINDOW,FUNCTION,SUM\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var o=t(667294);let i={},s=o.createContext(i);function r(n){let e=o.useContext(s);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);