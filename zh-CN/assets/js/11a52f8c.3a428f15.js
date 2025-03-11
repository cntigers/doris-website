"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["972128"],{833640:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>c,assets:()=>a,toc:()=>d,contentTitle:()=>r});var c=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/conv","title":"CONV","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/conv.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/conv","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/conv","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CONV","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COSH","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/cosh"},"next":{"title":"DEGREES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/degrees"}}'),t=s("785893"),l=s("250065");let i={title:"CONV",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5BF9\u8F93\u5165\u7684\u6570\u5B57\u8FDB\u884C\u8FDB\u5236\u8F6C\u6362"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CONV(<input>, <from_base>, <to_base>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<input>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u8FDB\u884C\u8FDB\u5236\u8F6C\u6362\u7684\u53C2\u6570\uFF0C\u53EF\u4E3A\u5B57\u7B26\u4E32\u6216\u6574\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<from_base>"})}),(0,t.jsxs)(e.td,{children:["\u6570\u5B57\uFF0C\u539F\u59CB\u8FDB\u5236\uFF0C\u8303\u56F4\u5E94\u5728 ",(0,t.jsx)(e.code,{children:"[2,36]"})," \u4EE5\u5185"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<to_base>"})}),(0,t.jsxs)(e.td,{children:["\u6570\u5B57\uFF0C\u76EE\u6807\u8FDB\u5236\uFF0C\u8303\u56F4\u5E94\u5728 ",(0,t.jsx)(e.code,{children:"[2,36]"})," \u4EE5\u5185"]})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:["\u8F6C\u6362\u540E\u76EE\u6807\u8FDB\u5236 ",(0,t.jsx)(e.code,{children:"<to_base>"})," \u4E0B\u7684\u6570\u5B57\uFF0C\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT CONV(15,10,2);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------+\n| conv(15, 10, 2) |\n+-----------------+\n| 1111            |\n+-----------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT CONV('ff',16,10);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| conv('ff', 16, 10) |\n+--------------------+\n| 255                |\n+--------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT CONV(230,10,16);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------+\n| conv(230, 10, 16) |\n+-------------------+\n| E6                |\n+-------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var c=s(667294);let t={},l=c.createContext(t);function i(n){let e=c.useContext(l);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);