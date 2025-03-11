"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["530866"],{779530:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>r,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/date-add","title":"DATE_ADD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/date-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/date-add","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/date-add","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DATE_ADD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/date"},"next":{"title":"DATE_SUB","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub"}}'),l=t("785893"),d=t("250065");let i={title:"DATE_ADD",language:"zh-CN"},a=void 0,c={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5411\u65E5\u671F\u6DFB\u52A0\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"date_add"}),"\n",(0,l.jsx)(e.li,{children:"days_add"}),"\n",(0,l.jsx)(e.li,{children:"adddate"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"DATE_ADD(<date>, <expr> <time_unit>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<date>"})}),(0,l.jsx)(e.td,{children:"\u5408\u6CD5\u7684\u65E5\u671F\u503C"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u5E0C\u671B\u6DFB\u52A0\u7684\u65F6\u95F4\u95F4\u9694"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<time_unit>"})}),(0,l.jsx)(e.td,{children:"\u679A\u4E3E\u503C\uFF1AYEAR, QUARTER, MONTH, DAY, HOUR, MINUTE, SECOND"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65E5\u671F\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return i}});var s=t(667294);let l={},d=s.createContext(l);function i(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);