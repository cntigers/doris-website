"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["491979"],{165141:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY","title":"SHOW ROW POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ROW POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP ROW POLICY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/DROP-ROW-POLICY"},"next":{"title":"CREATE JOB","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/job/CREATE-JOB"}}'),s=l("785893"),r=l("250065");let i={title:"SHOW ROW POLICY",language:"zh-CN"},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u884C\u5B89\u5168\u7B56\u7565\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ROW POLICY [ FOR { <user_name> | ROLE <role_name> } ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<user_name>"}),": \u7528\u6237\u540D\u79F0"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<role_name>"}),":\u89D2\u8272\u540D\u79F0"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u6240\u6709\u5B89\u5168\u7B56\u7565"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ROW POLICY;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7528\u6237\u540D\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ROW POLICY FOR user1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u89D2\u8272\u540D\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ROW POLICY for role role1;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return i}});var t=l(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);