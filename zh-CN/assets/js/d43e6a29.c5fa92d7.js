"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["761194"],{880693:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>l,assets:()=>r,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","title":"ADMIN CHECK TABLET","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ADMIN CHECK TABLET","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN COPY TABLET","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET"},"next":{"title":"SHOW TABLET","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET"}}'),s=t("785893"),a=t("250065");let d={title:"ADMIN CHECK TABLET",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5BF9\u4E00\u7EC4 tablet \u6267\u884C\u6307\u5B9A\u7684\u68C0\u67E5\u64CD\u4F5C"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN CHECK TABLET ( <tablet_id> [,...] ) PROPERTIES("type" = "<type_value>")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<tablet_id>"})]})}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u8FDB\u884C\u6267\u884C\u6307\u5B9A\u7684\u68C0\u67E5\u64CD\u4F5C\u7684 tablet ID\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<type_value>"})]}),"\n\u76EE\u524D\u53EA\u652F\u6301 ",(0,s.jsx)(n.code,{children:"consistency"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"consistency:"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9 tablet \u7684\u526F\u672C\u6570\u636E\u4E00\u81F4\u6027\u8FDB\u884C\u68C0\u67E5\u3002\u8BE5\u547D\u4EE4\u4E3A\u5F02\u6B65\u547D\u4EE4\uFF0C\u53D1\u9001\u540E\uFF0CDoris \u4F1A\u5F00\u59CB\u6267\u884C\u5BF9\u5E94 tablet \u7684\u4E00\u81F4\u6027\u68C0\u67E5\u4F5C\u4E1A\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u8BED\u53E5\u7684\u6700\u7EC8\u7684\u7ED3\u679C\uFF0C\u5C06\u4F53\u73B0\u5728",(0,s.jsx)(n.code,{children:'SHOW PROC "/cluster_health/tablet_health";'})," \u7ED3\u679C\u4E2D\u7684 InconsistentNum \u5217\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5217\u540D"}),(0,s.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"InconsistentNum"}),(0,s.jsx)(n.td,{children:"Int"}),(0,s.jsx)(n.td,{children:"\u4E0D\u4E00\u81F4\u7684\u7684 tablet \u6570\u91CF"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u62E5\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u6267\u884C\u6570\u636E\u5E93\u7BA1\u7406\u64CD\u4F5C\u6240\u9700\u7684\u6743\u9650\uFF0C\u5305\u62EC\u7BA1\u7406\u8868\u3001\u5206\u533A\u4EE5\u53CA\u7CFB\u7EDF\u7EA7\u547D\u4EE4\u7B49\u64CD\u4F5C\u3002"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5BF9\u6307\u5B9A\u7684\u4E00\u7EC4 tablet \u8FDB\u884C\u526F\u672C\u6570\u636E\u4E00\u81F4\u6027\u68C0\u67E5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'admin check tablet (10000, 10001) PROPERTIES("type" = "consistency");\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var l=t(667294);let s={},a=l.createContext(s);function d(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);