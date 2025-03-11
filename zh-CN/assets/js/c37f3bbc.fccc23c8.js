"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["184723"],{384106:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>l,assets:()=>r,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","title":"CANCEL REBALANCE DISK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CANCEL REBALANCE DISK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REBALANCE DISK","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK"},"next":{"title":"SHOW DATA","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-DATA"}}'),s=t("785893"),a=t("250065");let d={title:"CANCEL REBALANCE DISK",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CANCEL REBALANCE DISK"})," \u8BED\u53E5\u7528\u4E8E\u53D6\u6D88\u4F18\u5148\u5747\u8861 BE\uFF08Backend\uFF09\u8282\u70B9\u7684\u78C1\u76D8\u6570\u636E\u3002\u8BE5\u8BED\u53E5\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u53D6\u6D88\u6307\u5B9A BE \u8282\u70B9\u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u53D6\u6D88\u6574\u4E2A\u96C6\u7FA4\u6240\u6709 BE \u8282\u70B9\u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"\u53D6\u6D88\u540E\u7CFB\u7EDF\u4ECD\u4F1A\u4EE5\u9ED8\u8BA4\u8C03\u5EA6\u65B9\u5F0F\u5747\u8861 BE \u7684\u78C1\u76D8\u6570\u636E"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN CANCEL REBALANCE DISK [ ON ( "<host>:<port>" [, ... ] ) ];\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:'"<host>:<port>"'})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u9700\u8981\u53D6\u6D88\u4F18\u5148\u78C1\u76D8\u5747\u8861\u7684 BE \u8282\u70B9\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6BCF\u4E2A\u8282\u70B9\u7531\u4E3B\u673A\u540D\uFF08\u6216 IP \u5730\u5740\uFF09\u548C\u5FC3\u8DF3\u7AEF\u53E3\u7EC4\u6210\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A\u6B64\u53C2\u6570\uFF0C\u5219\u53D6\u6D88\u6240\u6709 BE \u8282\u70B9\u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7CFB\u7EDF"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u5FC5\u987B\u62E5\u6709 ADMIN \u6743\u9650\u624D\u80FD\u6267\u884C\u8BE5\u547D\u4EE4"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BE5\u8BED\u53E5\u4EC5\u8868\u793A\u7CFB\u7EDF\u4E0D\u518D\u4F18\u5148\u5747\u8861\u6307\u5B9A BE \u7684\u78C1\u76D8\u6570\u636E\uFF0C\u7CFB\u7EDF\u4ECD\u4F1A\u4EE5\u9ED8\u8BA4\u8C03\u5EA6\u65B9\u5F0F\u5747\u8861 BE \u7684\u78C1\u76D8\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884C\u8BE5\u547D\u4EE4\u540E\uFF0C\u4E4B\u524D\u8BBE\u7F6E\u7684\u4F18\u5148\u5747\u8861\u7B56\u7565\u5C06\u7ACB\u5373\u5931\u6548\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53D6\u6D88\u96C6\u7FA4\u6240\u6709 BE \u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REBALANCE DISK;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53D6\u6D88\u6307\u5B9A BE \u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var l=t(667294);let s={},a=l.createContext(s);function d(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);