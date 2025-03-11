"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["664563"],{982444:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/security/CREATE-FILE","title":"CREATE FILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/security/CREATE-FILE.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/CREATE-FILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/security/CREATE-FILE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE FILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW CACHE HOTSPOT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT"},"next":{"title":"DROP FILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/security/DROP-FILE"}}'),t=l("785893"),c=l("250065");let a={title:"CREATE FILE",language:"zh-CN"},i=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u5E76\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5230 Doris \u96C6\u7FA4\u3002\n\u8BE5\u529F\u80FD\u901A\u5E38\u7528\u4E8E\u7BA1\u7406\u4E00\u4E9B\u5176\u4ED6\u547D\u4EE4\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u7684\u6587\u4EF6\uFF0C\u5982\u8BC1\u4E66\u3001\u516C\u94A5\u79C1\u94A5\u7B49\u7B49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE FILE <file_name>\n        [ { FROM | IN } <database_name>] PROPERTIES ("<key>"="<value>" [ , ... ]);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<file_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<key>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6587\u4EF6\u7684\u5C5E\u6027\u540D\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"url\uFF1A\u5FC5\u987B\u3002\u6307\u5B9A\u4E00\u4E2A\u6587\u4EF6\u7684\u4E0B\u8F7D\u8DEF\u5F84\u3002\u5F53\u524D\u4EC5\u652F\u6301\u65E0\u8BA4\u8BC1\u7684 http \u4E0B\u8F7D\u8DEF\u5F84\u3002\u547D\u4EE4\u6267\u884C\u6210\u529F\u540E\uFF0C\u6587\u4EF6\u5C06\u88AB\u4FDD\u5B58\u5728 doris \u4E2D\uFF0C\u8BE5 url\n\u5C06\u4E0D\u518D\u9700\u8981\u3002"}),"\n",(0,t.jsx)(n.li,{children:"catalog\uFF1A\u5FC5\u987B\u3002\u5BF9\u6587\u4EF6\u7684\u5206\u7C7B\u540D\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002\u4F46\u5728\u67D0\u4E9B\u547D\u4EE4\u4E2D\uFF0C\u4F1A\u67E5\u627E\u6307\u5B9A catalog \u4E2D\u7684\u6587\u4EF6\u3002\u6BD4\u5982\u4F8B\u884C\u5BFC\u5165\u4E2D\u7684\uFF0C\u6570\u636E\u6E90\u4E3A kafka\n\u65F6\uFF0C\u4F1A\u67E5\u627E catalog \u540D\u4E3A kafka \u4E0B\u7684\u6587\u4EF6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"md5: \u53EF\u9009\u3002\u6587\u4EF6\u7684 md5\u3002\u5982\u679C\u6307\u5B9A\uFF0C\u4F1A\u5728\u4E0B\u8F7D\u6587\u4EF6\u540E\u8FDB\u884C\u6821\u9A8C\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<value>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6587\u4EF6\u7684\u5C5E\u6027\u503C\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<database_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6587\u4EF6\u5F52\u5C5E\u4E8E\u67D0\u4E00\u4E2A database\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u5F53\u524D session \u7684 database\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"ADMIN_PRIV"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 ",(0,t.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\u624D\u80FD\u6267\u884C"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6587\u4EF6\u7684\u8BBF\u95EE\u89C4\u5219"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u67D0\u4E2A\u6587\u4EF6\u90FD\u5F52\u5C5E\u4E8E\u67D0\u4E00\u4E2A\u7279\u5B9A\u7684 database\uFF0C\u5BF9 database \u62E5\u6709\u8BBF\u95EE\u6743\u9650\u7684\u7528\u6237\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5\u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6587\u4EF6\u5927\u5C0F\u548C\u6570\u91CF\u9650\u5236"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8FD9\u4E2A\u529F\u80FD\u4E3B\u8981\u7528\u4E8E\u7BA1\u7406\u4E00\u4E9B\u8BC1\u4E66\u7B49\u5C0F\u6587\u4EF6\u3002\u56E0\u6B64\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u9650\u5236\u4E3A 1MB\u3002\u4E00\u4E2A Doris \u96C6\u7FA4\u6700\u591A\u4E0A\u4F20 100 \u4E2A\u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u6587\u4EF6 ca.pem\uFF0C\u5206\u7C7B\u4E3A kafka"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE FILE "ca.pem"\nPROPERTIES\n(\n   "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n   "catalog" = "kafka"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u6587\u4EF6 client.key\uFF0C\u5206\u7C7B\u4E3A my_catalog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE FILE "client.key"\nIN my_database\nPROPERTIES\n(\n   "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n   "catalog" = "my_catalog",\n   "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u6587\u4EF6 client_1.key\uFF0C\u5206\u7C7B\u4E3A my_catalog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE FILE "client_1.key"\nFROM my_database\nPROPERTIES\n(\n   "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n   "catalog" = "my_catalog",\n   "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return a}});var s=l(667294);let t={},c=s.createContext(t);function a(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);