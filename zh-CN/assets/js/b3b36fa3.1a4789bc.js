"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["460610"],{131926:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>c,metadata:()=>t,assets:()=>u,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/weeks-sub","title":"WEEKS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/weeks-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/weeks-sub","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/weeks-sub","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WEEKS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WEEKS_DIFF","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/weeks-diff"},"next":{"title":"WEEK_CEIL","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/week-ceil"}}'),i=s("785893"),l=s("250065");let c={title:"WEEKS_SUB",language:"zh-CN"},o=void 0,u={},a=[{value:"weeks_sub",id:"weeks_sub",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_sub",children:"weeks_sub"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME WEEKS_SUB(DATETIME date, INT weeks)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u661F\u671F\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E0E\u53C2\u6570 date \u7684\u7C7B\u578B\u4E00\u81F4\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| weeks_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-01-26 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WEEKS_SUB\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let i={},l=t.createContext(i);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);