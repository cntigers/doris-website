"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["119835"],{507650:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/locate","title":"LOCATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/locate.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/locate","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/locate","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LOCATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INT_TO_UUID","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/int-to-uuid"},"next":{"title":"OVERLAY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/overlay"}}'),r=s("785893"),l=s("250065");let c={title:"LOCATE",language:"zh-CN"},a=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE substr \u5728 str \u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u6570\uFF09\u3002\u5982\u679C\u6307\u5B9A\u7B2C 3 \u4E2A\u53C2\u6570 pos\uFF0C\u5219\u4ECE str \u4EE5 pos \u4E0B\u6807\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\u5904\u5F00\u59CB\u67E5\u627E substr \u51FA\u73B0\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE 0"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"LOCATE ( <substr> , <str> [, <pos> ] )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"substr"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u67E5\u627E\u7684\u5B50\u5B57\u7B26\u4E32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"str"})}),(0,r.jsx)(e.td,{children:"\u9700\u8981\u88AB\u67E5\u627E\u7684\u5B57\u7B26\u4E32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"pos"})}),(0,r.jsx)(e.td,{children:"\u5982\u679C\u6307\u5B9A\u4E86\u6B64\u53C2\u6570\uFF0C\u5219 str \u4EE5 pos \u4E0B\u6807\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\u5904\u5F00\u59CB\u67E5\u627E substr \u51FA\u73B0\u7684\u4F4D\u7F6E"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"substr \u5728 str \u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u6570\uFF09"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT locate('bar', 'foobarbar'),locate('xbar', 'foobar'),locate('bar', 'foobarbar', 5)\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+----------------------------+--------------------------+-------------------------------+\n| locate('bar', 'foobarbar') | locate('xbar', 'foobar') | locate('bar', 'foobarbar', 5) |\n+----------------------------+--------------------------+-------------------------------+\n|                          4 |                        0 |                             7 |\n+----------------------------+--------------------------+-------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return c}});var t=s(667294);let r={},l=t.createContext(r);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);