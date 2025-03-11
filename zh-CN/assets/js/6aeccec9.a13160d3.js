"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["805048"],{3801:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","title":"CREATE ENCRYPTKEY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE ENCRYPTKEY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW FILE","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/SHOW-FILE"},"next":{"title":"DROP ENCRYPTKEY","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/DROP-ENCRYPTKEY"}}'),l=s("785893"),i=s("250065");let r={title:"CREATE ENCRYPTKEY",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u6B64\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY <key_name> AS "<key_string>"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<key_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8981\u521B\u5EFA\u5BC6\u94A5\u7684\u540D\u5B57\uFF0C\u53EF\u4EE5\u5305\u542B\u6570\u636E\u5E93\u7684\u540D\u5B57\u3002\u6BD4\u5982\uFF1A",(0,l.jsx)(n.code,{children:"db1.my_key"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<key_string>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8981\u521B\u5EFA\u5BC6\u94A5\u7684\u5B57\u7B26\u4E32\u3002\n\u5982\u679C ",(0,l.jsx)(n.code,{children:"key_name"})," \u4E2D\u5305\u542B\u4E86\u6570\u636E\u5E93\u540D\u5B57\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5\u4F1A\u521B\u5EFA\u5728\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u4E2D\uFF0C\u5426\u5219\u8FD9\u4E2A\u51FD\u6570\u5C06\u4F1A\u521B\u5EFA\u5728\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u7684\u6570\u636E\u5E93\u3002\u65B0\u5BC6\u94A5\u7684\u540D\u5B57\u4E0D\u80FD\u591F\u4E0E\u5BF9\u5E94\u6570\u636E\u5E93\u4E2D\u5DF2\u5B58\u5728\u7684\u5BC6\u94A5\u76F8\u540C\uFF0C\u5426\u5219\u4F1A\u521B\u5EFA\u5931\u8D25\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ADMIN_PRIV"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u9700\u5BF9\u76EE\u6807\u7528\u6237\u6216\u89D2\u8272\u6301\u6709 ",(0,l.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\u65B9\u53EF\u521B\u5EFA\u81EA\u5B9A\u4E49\u5BC6\u94A5"]})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728 testdb \u6570\u636E\u5E93\u4E0B\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY testdb.test_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5\u52A0\u5BC6"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5\u9700\u5728\u5BC6\u94A5\u524D\u6DFB\u52A0\u5173\u952E\u5B57 ",(0,l.jsx)(n.code,{children:"KEY"}),"/",(0,l.jsx)(n.code,{children:"key"}),"\uFF0C\u4E0E ",(0,l.jsx)(n.code,{children:"key_name"})," \u7A7A\u683C\u9694\u5F00\u3002"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT HEX(AES_ENCRYPT("Doris is Great", KEY my_key));\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +------------------------------------------------+\n | hex(aes_encrypt('Doris is Great', key my_key)) |\n +------------------------------------------------+\n | D26DB38579D6A343350EDDC6F2AD47C6               |\n +------------------------------------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5\u89E3\u5BC6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key)  |\n+------------------------------------------------- -------------------+\n| Doris is Great                                                      |\n+------------------------------------------------- -------------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);