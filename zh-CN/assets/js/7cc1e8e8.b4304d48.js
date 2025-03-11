"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["442438"],{296456:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/max-by","title":"MAX_BY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/max-by.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/max-by","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/max-by","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MAX_BY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/max"},"next":{"title":"AVG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg"}}'),l=t("785893"),r=t("250065");let a={title:"MAX_BY",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",expr1:"expr1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"MAX_BY \u51FD\u6570\u7528\u4E8E\u6839\u636E\u6307\u5B9A\u5217\u7684\u6700\u5927\u503C\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u7684\u5173\u8054\u503C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MAX_BY(<expr1>, <expr2>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr1>"})}),(0,l.jsx)(n.td,{children:"\u7528\u4E8E\u6307\u5B9A\u5BF9\u5E94\u5173\u8054\u7684\u8868\u8FBE\u5F0F\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr2>"})}),(0,l.jsx)(n.td,{children:"\u7528\u4E8E\u6307\u5B9A\u6700\u5927\u503C\u7EDF\u8BA1\u7684\u8868\u8FBE\u5F0F\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E0E\u8F93\u5165\u8868\u8FBE\u5F0F ",(0,l.jsx)(n.expr1,{children:" \u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select * from tbl;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------+------+------+\n| k1   | k2   | k3   | k4   |\n+------+------+------+------+\n|    0 | 3    | 2    |  100 |\n|    1 | 2    | 3    |    4 |\n|    4 | 3    | 2    |    1 |\n|    3 | 4    | 2    |    1 |\n+------+------+------+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select max_by(k1, k4) from tbl;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------+\n| max_by(`k1`, `k4`) |\n+--------------------+\n|                  0 |\n+--------------------+ \n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);