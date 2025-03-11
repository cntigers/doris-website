"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["130938"],{717301:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","title":"REGEXP_EXTRACT_ALL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP_EXTRACT_ALL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP_EXTRACT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract"},"next":{"title":"REGEXP_EXTRACT_OR_NULL","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-or-null"}}'),l=t("785893"),r=t("250065");let a={title:"REGEXP_EXTRACT_ALL",language:"zh-CN"},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u62BD\u53D6\u7B26\u5408 pattern \u7684\u6240\u6709\u5B50\u6A21\u5F0F\u5339\u914D\u90E8\u5206\u3002\u9700\u8981 pattern \u5B8C\u5168\u5339\u914D str \u4E2D\u7684\u67D0\u90E8\u5206\uFF0C\u8FD9\u6837\u624D\u80FD\u8FD4\u56DE pattern \u90E8\u5206\u4E2D\u9700\u5339\u914D\u90E8\u5206\u7684\u5B57\u7B26\u4E32\u6570\u7EC4\u3002\u5982\u679C\u6CA1\u6709\u5339\u914D\u6216\u8005 pattern \u6CA1\u6709\u5B50\u6A21\u5F0F\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"\\p{Han}"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"REGEXP_EXTRACT_ALL(<str>, <pattern>)"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u6709\u5339\u914D\u5B57\u7B26\u4E32\u7EC4\u6210\u7684\u6570\u7EC4\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)');\n+--------------------------------------------------------------+\n| regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)') |\n+--------------------------------------------------------------+\n| ['b']                                                        |\n+--------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)');\n+-----------------------------------------------------------------+\n| regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)') |\n+-----------------------------------------------------------------+\n| ['b','f']                                                       |\n+-----------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('abc=111, def=222, ghi=333','(\"[^\"]+\"|\\\\w+)=(\"[^\"]+\"|\\\\w+)');\n+--------------------------------------------------------------------------------+\n| regexp_extract_all('abc=111, def=222, ghi=333', '(\"[^\"]+\"|\\w+)=(\"[^\"]+\"|\\w+)') |\n+--------------------------------------------------------------------------------+\n| ['abc','def','ghi']                                                            |\n+--------------------------------------------------------------------------------+\n\nmysql> select regexp_extract_all('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '(\\\\p{Han}+)(.+)');\n+------------------------------------------------------------------------------------------------+\n| regexp_extract_all('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587 This is a passage in English 1234567', '(\\p{Han}+)(.+)')       |\n+------------------------------------------------------------------------------------------------+\n| ['\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587']                                                                               |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);