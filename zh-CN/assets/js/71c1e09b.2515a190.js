"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["893500"],{6526:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/digital-masking","title":"DIGITAL_MASKING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DIGITAL_MASKING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PARSE_DATA_SIZE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size"},"next":{"title":"CONVERT_TZ","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/convert-tz"}}'),i=t("785893"),l=t("250065");let a={title:"DIGITAL_MASKING",language:"zh-CN"},c=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"digital_masking"})," \u51FD\u6570\u7528\u4E8E\u5BF9\u6570\u5B57\u8FDB\u884C\u8131\u654F\u5904\u7406\u3002\u6839\u636E\u6307\u5B9A\u7684\u8131\u654F\u89C4\u5219\uFF0C\u5C06\u6570\u5B57\u7684\u90E8\u5206\u5B57\u7B26\u66FF\u6362\u4E3A * \u3002\u522B\u540D\u51FD\u6570\uFF0C\u539F\u59CB\u51FD\u6570\u4E3A ",(0,i.jsx)(e.code,{children:"concat(left(id,3),'****',right(id,4))"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DIGITAL_MASKING( <digital_number> )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<digital_number>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u8131\u654F\u7684\u6570\u5B57\u5B57\u7B26\u4E32"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u8131\u654F\u540E\u7684\u6570\u5B57\u5B57\u7B26\u4E32\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select digital_masking(13812345678);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);