"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["740137"],{895271:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","title":"SHOW TRASH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW TRASH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN CLEAN TRASH","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/CLEAN-TRASH"},"next":{"title":"SHOW CATALOG RECYCLE BIN","permalink":"/zh-CN/docs/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN"}}'),l=n("785893"),a=n("250065");let d={title:"SHOW TRASH",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B backend \u5185\u7684\u5783\u573E\u6570\u636E\u5360\u7528\u7A7A\u95F4\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'SHOW TRASH [ON ("<be_host>:<be_heartbeat_port>" [, ...])];\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:'[ON ("<be_host>:<be_heartbeat_port>" [, ...])]'})]})}),"\n",(0,l.jsx)(t.p,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u770B\u7684 backend\u3002\u5982\u679C\u4E0D\u52A0 ON\uFF0C\u9ED8\u8BA4\u67E5\u770B\u6240\u6709 backend\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(t.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV \u6216 NODE_PRIV"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 ADMIN_PRIV \u6216 NODE_PRIV \u6743\u9650\u624D\u80FD\u8FDB\u884C SHOW TRASH \u64CD\u4F5C"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"\u67E5\u770B\u6240\u6709 be \u8282\u70B9\u7684\u5783\u573E\u6570\u636E\u5360\u7528\u7A7A\u95F4\u3002"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW TRASH;\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsx)(t.li,{children:"\u67E5\u770B'192.168.0.1:9050'\u7684\u5783\u573E\u6570\u636E\u5360\u7528\u7A7A\u95F4 (\u4F1A\u663E\u793A\u5177\u4F53\u78C1\u76D8\u4FE1\u606F)\u3002"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'SHOW TRASH ON "192.168.0.1:9050";\n'})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let l={},a=s.createContext(l);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);