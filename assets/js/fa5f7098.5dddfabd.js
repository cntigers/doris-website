"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["34529"],{563279:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","title":"PARSE_DATA_SIZE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/parse-data-size","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PARSE_DATA_SIZE","language":"en"},"sidebar":"docs","previous":{"title":"FORMAT_NUMBER","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/format-number"},"next":{"title":"DIGITAL_MASKING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking"}}'),r=s("785893"),i=s("250065");let a={title:"PARSE_DATA_SIZE",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:'Parse a string in the format of "value + unit" and convert the value into a number, where the value represents a fractional amount of the unit.'}),"\n",(0,r.jsx)(e.p,{children:"If the input parameter is invalid, an error will be raised. The maximum return value is Int128 Max."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Data Storage Unit Table"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Unit"}),(0,r.jsx)(e.th,{children:"Description"}),(0,r.jsx)(e.th,{children:"Value"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"B"}),(0,r.jsx)(e.td,{children:"Bytes"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"kB"}),(0,r.jsx)(e.td,{children:"Kilobytes"}),(0,r.jsx)(e.td,{children:"1024"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MB"}),(0,r.jsx)(e.td,{children:"Megabytes"}),(0,r.jsx)(e.td,{children:"1024\xb2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GB"}),(0,r.jsx)(e.td,{children:"Gigabytes"}),(0,r.jsx)(e.td,{children:"1024\xb3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TB"}),(0,r.jsx)(e.td,{children:"Terabytes"}),(0,r.jsx)(e.td,{children:"1024\u2074"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PB"}),(0,r.jsx)(e.td,{children:"Petabytes"}),(0,r.jsx)(e.td,{children:"1024\u2075"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"EB"}),(0,r.jsx)(e.td,{children:"Exabytes"}),(0,r.jsx)(e.td,{children:"1024\u2076"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ZB"}),(0,r.jsx)(e.td,{children:"Zettabytes"}),(0,r.jsx)(e.td,{children:"1024\u2077"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"YB"}),(0,r.jsx)(e.td,{children:"Yottabytes"}),(0,r.jsx)(e.td,{children:"1024\u2078"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"PARSE_DATA_SIZE(<str>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<str>"})}),(0,r.jsx)(e.td,{children:"The value is to be calculated"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(e.p,{children:"The return number value represents a fractional amount of the unit."}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('1B');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-----------------------+\n| parse_data_size('1B') |\n+-----------------------+\n| 1                     |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('1kB');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| parse_data_size('1kB') |\n+------------------------+\n| 1024                   |\n+------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT parse_data_size('2.3MB');\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------------------+\n| parse_data_size('2.3MB') |\n+--------------------------+\n| 2411724                  |\n+--------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);