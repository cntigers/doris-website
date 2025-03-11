"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["105893"],{474565:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","title":"SHOW ENCRYPTKEY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW ENCRYPTKEY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP ENCRYPTKEY","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/DROP-ENCRYPTKEY"},"next":{"title":"CREATE SQL_BLOCK_RULE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE"}}'),s=t("785893"),r=t("250065");let i={title:"SHOW ENCRYPTKEY",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u81EA\u5B9A\u4E49\u7684\u5BC6\u94A5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ENCRYPTKEYS [ { IN | FROM } <db> ] [ LIKE '<key_pattern>']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8981\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u540D\u5B57\u3002\u6BD4\u5982\uFF1A",(0,s.jsx)(n.code,{children:"db1.my_key"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<key_pattern>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6765\u8FC7\u6EE4\u5BC6\u94A5\u540D\u79F0\u7684\u53C2\u6570\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5217\u540D"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"EncryptKey Name"}),(0,s.jsx)(n.td,{children:"\u5BC6\u94A5\u540D\u79F0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"EncryptKey String"}),(0,s.jsx)(n.td,{children:"\u5BC6\u94A5\u7684\u503C"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"ADMIN_PRIV"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\u9700\u5BF9\u76EE\u6807\u7528\u6237\u6216\u89D2\u8272\u6301\u6709 ",(0,s.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\u624D\u80FD\u67E5\u770B\u5BC6\u94A5"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u67E5\u770B\u5BF9\u5E94\u6570\u636E\u5E93\u7684\uFF0C\u5426\u5219\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u5BC6\u94A5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ENCRYPTKEYS;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------+-------------------+\n| EncryptKey Name | EncryptKey String |\n+-----------------+-------------------+\n| testdb.test_key | ABCD123456789     |\n+-----------------+-------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u5BC6\u94A5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ENCRYPTKEYS FROM example_db ;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------+-------------------+\n| EncryptKey Name     | EncryptKey String |\n+---------------------+-------------------+\n| example_db.my_key   | ABCD123456789     |\n| example_db.test_key | ABCD123456789     |\n+---------------------+-------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u5339\u914D\u6307\u5B9A\u5BC6\u94A5\u540D\u79F0\u7684\u5BC6\u94A5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n"})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);