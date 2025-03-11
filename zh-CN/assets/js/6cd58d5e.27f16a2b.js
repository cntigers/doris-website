"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["312271"],{460071:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/avg-weighted","title":"AVG_WEIGHTED","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/avg-weighted","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"AVG_WEIGHTED","language":"zh-CN"},"sidebar":"docs","previous":{"title":"AVG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg"},"next":{"title":"SUM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/sum"}}'),l=t("785893"),i=t("250065");let a={title:"AVG_WEIGHTED",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BA1\u7B97\u52A0\u6743\u7B97\u672F\u5E73\u5747\u503C\uFF0C\u5373\u8FD4\u56DE\u7ED3\u679C\u4E3A\uFF1A\u6240\u6709\u5BF9\u5E94\u6570\u503C\u548C\u6743\u91CD\u7684\u4E58\u79EF\u76F8\u7D2F\u52A0\uFF0C\u9664\u603B\u7684\u6743\u91CD\u548C\u3002\u5982\u679C\u6240\u6709\u7684\u6743\u91CD\u548C\u7B49\u4E8E 0, \u5C06\u8FD4\u56DE NaN\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"AVG_WEIGHTED(<x>, <weight>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<x>"})}),(0,l.jsx)(n.td,{children:"\u662F\u9700\u8981\u8BA1\u7B97\u5E73\u5747\u503C\u7684\u6570\u503C\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5217\u540D\u3001\u5E38\u91CF\u6216\u590D\u6742\u7684\u6570\u503C\u8868\u8FBE\u5F0F"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<weight>"})}),(0,l.jsx)(n.td,{children:"\u662F\u4E00\u4E2A\u6570\u503C\u8868\u8FBE\u5F0F\uFF0C\u901A\u5E38\u53EF\u4EE5\u662F\u4E00\u4E2A\u5217\u540D\u3001\u5E38\u91CF\u6216\u5176\u4ED6\u6570\u503C\u8BA1\u7B97\u7ED3\u679C"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u6709\u5BF9\u5E94\u6570\u503C\u548C\u6743\u91CD\u7684\u4E58\u79EF\u76F8\u7D2F\u52A0\uFF0C\u9664\u603B\u7684\u6743\u91CD\u548C\uFF0C\u5982\u679C\u6240\u6709\u7684\u6743\u91CD\u548C\u7B49\u4E8E 0, \u5C06\u8FD4\u56DE NaN\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select k1,k2 from test_doris_avg_weighted;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1   | k2   |\n+------+------+\n|   10 |  100 |\n|   20 |  200 |\n|   30 |  300 |\n|   40 |  400 |\n+------+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select avg_weighted(k2,k1) from test_doris_avg_weighted;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------------------------+\n| avg_weighted(k2, cast(k1 as DOUBLE)) |\n+--------------------------------------+\n|                                  300 |\n+--------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);