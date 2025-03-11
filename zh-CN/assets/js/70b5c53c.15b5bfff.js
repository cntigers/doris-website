"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["185508"],{623632:function(n,e,r){r.r(e),r.d(e,{default:()=>d,frontMatter:()=>t,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-position","title":"ARRAY_POSITION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-position.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-position","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-position","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_POSITION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_SORTBY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-sortby"},"next":{"title":"ARRAY_CONTAINS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-contains"}}'),s=r("785893"),i=r("250065");let t={title:"ARRAY_POSITION",language:"zh-CN"},o=void 0,l={},c=[{value:"array_position",id:"array_position",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"array_position",children:"array_position"}),"\n",(0,s.jsx)(e.p,{children:"array_position"}),"\n",(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BIGINT array_position(ARRAY<T> arr, T value)"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,s.jsx)(e.code,{children:"value"}),"\u5728\u6570\u7EC4\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E/\u7D22\u5F15\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"position - value\u5728array\u4E2D\u7684\u4F4D\u7F6E\uFF08\u4ECE1\u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B\n0        - \u5982\u679Cvalue\u5728array\u4E2D\u4E0D\u5B58\u5728\uFF1B\nNULL     - \u5982\u679C\u6570\u7EC4\u4E3ANULL\u3002\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_position(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_position(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            5 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_position([1, null], null);\n+--------------------------------------+\n| array_position(ARRAY(1, NULL), NULL) |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"ARRAY,POSITION,ARRAY_POSITION"})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return t}});var a=r(667294);let s={},i=a.createContext(s);function t(n){let e=a.useContext(i);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);