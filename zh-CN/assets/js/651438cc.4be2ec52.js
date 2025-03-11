"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["220680"],{466491:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/overlay","title":"OVERLAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/overlay.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/overlay","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/overlay","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"OVERLAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LOCATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/locate"},"next":{"title":"FIND_IN_SET","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/find-in-set"}}'),t=s("785893"),c=s("250065");let r={title:"OVERLAY",language:"zh-CN"},i=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"OVERLAY \u51FD\u6570\u7528\u4E8E\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u66FF\u6362\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u90E8\u5206\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"OVERLAY(<str>, <pos>, <len>, <newstr>)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<str>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u88AB\u66FF\u6362\u7684\u5B57\u7B26\u4E32"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<pos>"})}),(0,t.jsxs)(e.td,{children:["\u9700\u8981\u88AB\u66FF\u6362\u7684\u5B57\u7B26\u4E32\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u4ECE 1 \u5F00\u59CB\u8BA1\u6570\uFF0C\u5982\u679C\u8F93\u5165\u7684\u4F4D\u7F6E\u4E0D\u5728",(0,t.jsx)(e.code,{children:"<str>"}),"\u7684\u957F\u5EA6\u8303\u56F4\u5185\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u66FF\u6362"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<len>"})}),(0,t.jsxs)(e.td,{children:["\u9700\u8981\u88AB\u66FF\u6362\u7684\u957F\u5EA6\uFF0C\u5F53",(0,t.jsx)(e.code,{children:"<len>"}),"\u5C0F\u4E8E 0 \u6216\u8D85\u8FC7\u5B57\u7B26\u4E32\u5176\u4F59\u90E8\u5206\u7684\u957F\u5EA6\u8303\u56F4\u65F6\uFF0C\u5219\u4F1A\u4ECE",(0,t.jsx)(e.code,{children:"<pos>"}),"\u5F00\u59CB\u66FF\u6362\u6389\u5176\u4F59\u5B57\u7B26\u4E32"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<newstr>"})}),(0,t.jsx)(e.td,{children:"\u7528\u4E8E\u66FF\u6362\u7684\u65B0\u5B57\u7B26\u4E32"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4ECE\u6307\u5B9A\u4F4D\u7F6E\u3001\u7528\u65B0\u5B57\u7B26\u4E32\u66FF\u6362\u6307\u5B9A\u957F\u5EA6\u540E\u7684\u5B57\u7B26\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"<pos>"}),"\u5982\u679C\u4E0D\u5728",(0,t.jsx)(e.code,{children:"<str>"}),"\u7684\u957F\u5EA6\u8303\u56F4\u5185\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u66FF\u6362"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5F53",(0,t.jsx)(e.code,{children:"<len>"}),"\u5C0F\u4E8E 0 \u6216\u8D85\u8FC7\u5B57\u7B26\u4E32\u5176\u4F59\u90E8\u5206\u7684\u957F\u5EA6\u8303\u56F4\u65F6\uFF0C\u5219\u4F1A\u4ECE",(0,t.jsx)(e.code,{children:"<pos>"}),"\u5F00\u59CB\u66FF\u6362\u6389\u5176\u4F59\u5B57\u7B26\u4E32"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select overlay('Quadratic', 3, 4, 'What');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------------------------+\n| overlay('Quadratic', 3, 4, 'What') |\n+------------------------------------+\n| QuWhattic                          |\n+------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select overlay('Quadratic', null, 4, 'What');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+---------------------------------------+\n| overlay('Quadratic', NULL, 4, 'What') |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select overlay('Quadratic', -1, 4, 'What');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------------------------+\n| overlay('Quadratic', -1, 4, 'What') |\n+-------------------------------------+\n| Quadratic                           |\n+-------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select overlay('Quadratic', 2, -4, 'What');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------------------------------+\n| overlay('Quadratic', 2, -4, 'What') |\n+-------------------------------------+\n| QWhat                               |\n+-------------------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var l=s(667294);let t={},c=l.createContext(t);function r(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);