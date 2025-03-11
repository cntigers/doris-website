"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["139991"],{787789:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>l,assets:()=>r,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","title":"REBALANCE DISK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REBALANCE DISK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RESUME MATERIALIZED VIEW","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB"},"next":{"title":"CANCEL REBALANCE DISK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK"}}'),s=t("785893"),a=t("250065");let i={title:"REBALANCE DISK",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"REBALANCE DISK \u8BED\u53E5\u7528\u4E8E\u4F18\u5316 BE\uFF08Backend\uFF09\u8282\u70B9\u4E0A\u7684\u6570\u636E\u5206\u5E03\u3002\u8BE5\u8BED\u53E5\u5177\u6709\u4EE5\u4E0B\u529F\u80FD\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u9488\u5BF9\u6307\u5B9A\u7684 BE \u8282\u70B9\u8FDB\u884C\u6570\u636E\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"\u53EF\u4EE5\u5BF9\u6574\u4E2A\u96C6\u7FA4\u7684\u6240\u6709 BE \u8282\u70B9\u8FDB\u884C\u6570\u636E\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5148\u5747\u8861\u6307\u5B9A\u8282\u70B9\u7684\u6570\u636E\uFF0C\u4E0D\u53D7\u96C6\u7FA4\u6574\u4F53\u5747\u8861\u72B6\u6001\u7684\u9650\u5236"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN REBALANCE DISK [ ON ( "<host>:<port>" [, ... ] ) ];\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:'"<host>:<port>"'})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u9700\u8981\u8FDB\u884C\u6570\u636E\u5747\u8861\u7684 BE \u8282\u70B9\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6BCF\u4E2A\u8282\u70B9\u7531\u4E3B\u673A\u540D\uFF08\u6216 IP \u5730\u5740\uFF09\u548C\u5FC3\u8DF3\u7AEF\u53E3\u7EC4\u6210\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A\u6B64\u53C2\u6570\uFF0C\u5219\u5BF9\u6240\u6709 BE \u8282\u70B9\u8FDB\u884C\u5747\u8861\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7CFB\u7EDF"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u5FC5\u987B\u62E5\u6709 ADMIN \u6743\u9650\u624D\u80FD\u6267\u884C\u8BE5\u547D\u4EE4"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u547D\u4EE4\u7684\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A 24 \u5C0F\u65F6\u3002\u8D85\u65F6\u540E\uFF0C\u7CFB\u7EDF\u5C06\u4E0D\u518D\u4F18\u5148\u5747\u8861\u6307\u5B9A\u7684 BE \u78C1\u76D8\u6570\u636E\u3002\u5982\u9700\u7EE7\u7EED\u5747\u8861\uFF0C\u9700\u8981\u91CD\u65B0\u6267\u884C\u8BE5\u547D\u4EE4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5F53\u6307\u5B9A BE \u8282\u70B9\u7684\u78C1\u76D8\u6570\u636E\u5747\u8861\u5B8C\u6210\u540E\uFF0C\u8BE5\u8282\u70B9\u7684\u4F18\u5148\u5747\u8861\u8BBE\u7F6E\u5C06\u81EA\u52A8\u5931\u6548\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5728\u96C6\u7FA4\u975E\u5747\u8861\u72B6\u6001\u4E0B\u6267\u884C\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5BF9\u96C6\u7FA4\u5185\u6240\u6709 BE \u8282\u70B9\u8FDB\u884C\u6570\u636E\u5747\u8861\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN REBALANCE DISK;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5BF9\u6307\u5B9A\u7684\u4E24\u4E2A BE \u8282\u70B9\u8FDB\u884C\u6570\u636E\u5747\u8861\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);