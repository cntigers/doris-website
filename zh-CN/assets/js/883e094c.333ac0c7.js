"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["834861"],{208307:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/locate","title":"LOCATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/locate.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/locate","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/locate","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"LOCATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INSTR","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/instr"},"next":{"title":"FIELD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/field"}}'),o=t("785893"),r=t("250065");let l={title:"LOCATE",language:"zh-CN"},i=void 0,a={},c=[{value:"locate",id:"locate",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"locate",children:"locate"}),"\n",(0,o.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"INT locate(VARCHAR substr, VARCHAR str[, INT pos])"})}),"\n",(0,o.jsx)(e.p,{children:"\u8FD4\u56DE substr \u5728 str \u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF08\u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF09\u3002\u5982\u679C\u6307\u5B9A\u7B2C3\u4E2A\u53C2\u6570 pos\uFF0C\u5219\u4ECE str \u4EE5 pos \u4E0B\u6807\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\u5904\u5F00\u59CB\u67E5\u627E substr \u51FA\u73B0\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE0"}),"\n",(0,o.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"mysql> SELECT LOCATE('bar', 'foobarbar');\n+----------------------------+\n| locate('bar', 'foobarbar') |\n+----------------------------+\n|                          4 |\n+----------------------------+\n\nmysql> SELECT LOCATE('xbar', 'foobar');\n+--------------------------+\n| locate('xbar', 'foobar') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nmysql> SELECT LOCATE('bar', 'foobarbar', 5);\n+-------------------------------+\n| locate('bar', 'foobarbar', 5) |\n+-------------------------------+\n|                             7 |\n+-------------------------------+\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"LOCATE\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let o={},r=s.createContext(o);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);