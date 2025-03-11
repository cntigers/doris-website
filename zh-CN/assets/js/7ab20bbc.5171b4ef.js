"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["322640"],{846350:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>l,assets:()=>i,toc:()=>a,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/numbers","title":"NUMBERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-valued-functions/numbers.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/numbers","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/numbers","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NUMBERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JOBS","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/jobs"},"next":{"title":"MV_INFOS","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/mv_infos"}}'),t=s("785893"),r=s("250065");let c={title:"NUMBERS",language:"zh-CN"},d=void 0,i={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570",id:"\u5FC5\u586B\u53C2\u6570",level:2},{value:"\u9009\u586B\u53C2\u6570",id:"\u9009\u586B\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(e.p,{children:["\u8868\u51FD\u6570\uFF0C\u751F\u6210\u4E00\u5F20\u53EA\u542B\u6709\u4E00\u5217\u7684\u4E34\u65F6\u8868\uFF0C\u5217\u540D\u4E3A",(0,t.jsx)(e.code,{children:"number"}),"\uFF0C\u5982\u679C\u6307\u5B9A\u4E86",(0,t.jsx)(e.code,{children:"const_value"}),"\uFF0C\u5219\u6240\u6709\u5143\u7D20\u503C\u5747\u4E3A",(0,t.jsx)(e.code,{children:"const_value"}),"\uFF0C\u5426\u5219\u4E3A[0,",(0,t.jsx)(e.code,{children:"number"}),") \u9012\u589E\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'NUMBERS(\n    "number" = "<number>"\n    [, "<const_value>" = "<const_value>" ]\n  );\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5FC5\u586B\u53C2\u6570",children:"\u5FC5\u586B\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B57\u6BB5"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"number"})}),(0,t.jsx)(e.td,{children:"\u884C\u6570"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u9009\u586B\u53C2\u6570",children:"\u9009\u586B\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B57\u6BB5"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"const_value"})}),(0,t.jsx)(e.td,{children:"\u5E38\u91CF\u503C"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B57\u6BB5\u540D"}),(0,t.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"number"})}),(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6BCF\u884C\u8FD4\u56DE\u7684\u503C"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select * from numbers("number" = "5");\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'select * from numbers("number" = "5", "const_value" = "-123");\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var l=s(667294);let t={},r=l.createContext(t);function c(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);