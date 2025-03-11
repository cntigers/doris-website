"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["702526"],{483265:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/row-number","title":"ROW_NUMBER","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/window-functions/row-number.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/row-number","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/row-number","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ROW_NUMBER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LAG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/lag"},"next":{"title":"NTILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/ntile"}}'),s=t("785893"),o=t("250065");let r={title:"ROW_NUMBER",language:"zh-CN"},l=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"ROW_NUMBER() \u662F\u4E00\u4E2A\u7A97\u53E3\u51FD\u6570\uFF0C\u7528\u4E8E\u4E3A\u5206\u533A\u5185\u7684\u6BCF\u4E00\u884C\u5206\u914D\u4E00\u4E2A\u552F\u4E00\u7684\u5E8F\u53F7\u3002\u5E8F\u53F7\u4ECE 1 \u5F00\u59CB\u8FDE\u7EED\u9012\u589E\u3002\u4E0E RANK() \u548C DENSE_RANK() \u4E0D\u540C\uFF0CROW_NUMBER() \u5373\u4F7F\u5BF9\u4E8E\u76F8\u540C\u7684\u503C\u4E5F\u4F1A\u5206\u914D\u4E0D\u540C\u7684\u5E8F\u53F7\uFF0C\u786E\u4FDD\u6BCF\u884C\u90FD\u6709\u552F\u4E00\u7684\u7F16\u53F7\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ROW_NUMBER()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE BIGINT \u7C7B\u578B\u7684\u5E8F\u53F7\uFF0C\u4ECE 1 \u5F00\u59CB\u8FDE\u7EED\u9012\u589E\u3002\u5728\u6BCF\u4E2A\u5206\u533A\u5185\uFF0C\u5E8F\u53F7\u90FD\u662F\u552F\u4E00\u7684\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select x, y, row_number() over(partition by x order by y) as rank from int_t;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----+-----+------+\n| x   | y   | rank |\n| --- | --- | ---- |\n| 1   | 1   | 1    |\n| 1   | 2   | 2    |\n| 1   | 2   | 3    |\n| 2   | 1   | 1    |\n| 2   | 2   | 2    |\n| 2   | 3   | 3    |\n| 3   | 1   | 1    |\n| 3   | 1   | 2    |\n| 3   | 2   | 3    |\n+-----+-----+------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);