"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["174260"],{988851:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","title":"PARSE_DATA_SIZE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PARSE_DATA_SIZE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FORMAT_NUMBER","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/format-number"},"next":{"title":"DIGITAL_MASKING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking"}}'),r=s("785893"),l=s("250065");let d={title:"PARSE_DATA_SIZE",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u89E3\u6790\u683C\u5F0F\u4E3A\u201C\u6570\u503C + \u5355\u4F4D\u201D\u7684\u5B57\u7B26\u4E32\uFF0C\u5C06\u5176\u4E2D\u7684\u503C\u89E3\u6790\u4E3A\u6570\u5B57\uFF0C\u5176\u4E2D\u503C\u662F\u5355\u4F4D\u503C\u7684\u5206\u6570\u3002\n\u5F53\u8F93\u5165\u53C2\u6570\u4E0D\u5408\u6CD5\u65F6\uFF0C\u4F1A\u8FDB\u884C\u62A5\u9519\uFF0C\u8FD4\u56DE\u503C\u7684\u6700\u5927\u503C\u4E3A Int128 Max."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6570\u636E\u5B58\u50A8\u5355\u4F4D\u5BF9\u7167\u8868"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5355\u4F4D"}),(0,r.jsx)(e.th,{children:"\u63CF\u8FF0"}),(0,r.jsx)(e.th,{children:"\u503C"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"B"}),(0,r.jsx)(e.td,{children:"Bytes"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"kB"}),(0,r.jsx)(e.td,{children:"Kilobytes"}),(0,r.jsx)(e.td,{children:"1024"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MB"}),(0,r.jsx)(e.td,{children:"Megabytes"}),(0,r.jsx)(e.td,{children:"1024\xb2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GB"}),(0,r.jsx)(e.td,{children:"Gigabytes"}),(0,r.jsx)(e.td,{children:"1024\xb3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TB"}),(0,r.jsx)(e.td,{children:"Terabytes"}),(0,r.jsx)(e.td,{children:"1024\u2074"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PB"}),(0,r.jsx)(e.td,{children:"Petabytes"}),(0,r.jsx)(e.td,{children:"1024\u2075"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"EB"}),(0,r.jsx)(e.td,{children:"Exabytes"}),(0,r.jsx)(e.td,{children:"1024\u2076"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ZB"}),(0,r.jsx)(e.td,{children:"Zettabytes"}),(0,r.jsx)(e.td,{children:"1024\u2077"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"YB"}),(0,r.jsx)(e.td,{children:"Yottabytes"}),(0,r.jsx)(e.td,{children:"1024\u2078"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"PARSE_DATA_SIZE(<str>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"\u5E26\u5355\u4F4D\u7684\u5B57\u7B26\u4E32\u6570\u503C"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u5C06\u5E26\u5355\u4F4D\u7684\u5B57\u7B26\u4E32\u7684\u503C\u89E3\u6790\u4E3A\u6570\u5B57"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('1B');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------+\n| parse_data_size('1B') |\n+-----------------------+\n| 1                     |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('1kB');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| parse_data_size('1kB') |\n+------------------------+\n| 1024                   |\n+------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('2.3MB');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| parse_data_size('2.3MB') |\n+--------------------------+\n| 2411724                  |\n+--------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},l=t.createContext(r);function d(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);