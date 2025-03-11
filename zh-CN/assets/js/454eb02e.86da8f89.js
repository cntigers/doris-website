"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["469319"],{514428:function(n,e,s){s.r(e),s.d(e,{default:()=>c,frontMatter:()=>u,metadata:()=>r,assets:()=>h,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-functions/hash-functions/murmur-hash3-32","title":"MURMUR_HASH3_32","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-32.md","sourceDirName":"sql-manual/sql-functions/hash-functions","slug":"/sql-manual/sql-functions/hash-functions/murmur-hash3-32","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-32","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MURMUR_HASH3_32","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_CONTAINS_VALUE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/map-functions/map-contains-value"},"next":{"title":"MURMUR_HASH3_64","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-64"}}'),l=s("785893"),t=s("250065");let u={title:"MURMUR_HASH3_32",language:"zh-CN"},a=void 0,h={},i=[{value:"murmur_hash3_32",id:"murmur_hash3_32",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"murmur_hash3_32",children:"murmur_hash3_32"}),"\n",(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"INT MURMUR_HASH3_32(VARCHAR input, ...)"})}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u8F93\u5165\u5B57\u7B26\u4E32\u768432\u4F4Dmurmur3 hash\u503C"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select murmur_hash3_32(null);\n+-----------------------+\n| murmur_hash3_32(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_32(\"hello\");\n+--------------------------+\n| murmur_hash3_32('hello') |\n+--------------------------+\n|               1321743225 |\n+--------------------------+\n\nmysql> select murmur_hash3_32(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_32('hello', 'world') |\n+-----------------------------------+\n|                         984713481 |\n+-----------------------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MURMUR_HASH3_32,HASH\n"})})]})}function c(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return u}});var r=s(667294);let l={},t=r.createContext(l);function u(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:u(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);