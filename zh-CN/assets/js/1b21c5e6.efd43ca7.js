"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["895717"],{226685:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","title":"APPEND_TRAILING_CHAR_IF_ABSENT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/append-trailing-char-if-absent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"APPEND_TRAILING_CHAR_IF_ABSENT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUB_REPLACE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/sub-replace"},"next":{"title":"ENDS_WITH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/ends-with"}}'),i=t("785893"),c=t("250065");let r={title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"zh-CN"},a=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4E8E\u5728\u5B57\u7B26\u4E32\u672B\u5C3E\u6DFB\u52A0\u7279\u5B9A\u5B57\u7B26\uFF08\u5982\u7A7A\u683C\u3001\u7279\u5B9A\u7B26\u53F7\u7B49\uFF09\uFF0C\u5982\u679C\u8BE5\u5B57\u7B26\u4E0D\u5B58\u5728\u4E8E\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u65F6\u8FDB\u884C\u6DFB\u52A0\u3002\u51FD\u6570\u7684\u4F5C\u7528\u662F\u786E\u4FDD\u5B57\u7B26\u4E32\u4EE5\u7279\u5B9A\u5B57\u7B26\u7ED3\u5C3E\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"APPEND_TRAILING_CHAR_IF_ABSENT ( <str> , <trailing_char> )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<str>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u5224\u65AD\u7684\u76EE\u6807\u5B57\u7B26\u4E32"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<trailing_char>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u6DFB\u52A0\u5230\u5B57\u7B26\u4E32\u672B\u5C3E\u7684\u5B57\u7B26\uFF08\u5982\u679C\u8BE5\u5B57\u7B26\u4E0D\u5B58\u5728\u7684\u8BDD\uFF09"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"<str>"})," \u4E0E ",(0,i.jsx)(e.code,{children:"<trailing_char>"})," \u62FC\u63A5\u540E\u7684\u5B57\u7B26\u4E32\uFF08\u5982\u679C ",(0,i.jsx)(e.code,{children:"<trailing_char>"})," \u4E0D\u5B58\u5728\u4E8E ",(0,i.jsx)(e.code,{children:"<str>"})," \uFF09"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT APPEND_TRAILING_CHAR_IF_ABSENT('a','c'),APPEND_TRAILING_CHAR_IF_ABSENT('ac', 'c'),APPEND_TRAILING_CHAR_IF_ABSENT('ac', 'cd')\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+------------------------------------------+-------------------------------------------+--------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') | append_trailing_char_if_absent('ac', 'c') | append_trailing_char_if_absent('ac', 'cd') |\n+------------------------------------------+-------------------------------------------+--------------------------------------------+\n| ac                                       | ac                                        | accd                                       |\n+------------------------------------------+-------------------------------------------+--------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},c=s.createContext(i);function r(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);