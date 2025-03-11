"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["998077"],{878920:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/job/PAUSE-JOB","title":"PAUSE JOB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/job/PAUSE-JOB.md","sourceDirName":"sql-manual/sql-statements/job","slug":"/sql-manual/sql-statements/job/PAUSE-JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/job/PAUSE-JOB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PAUSE JOB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/job/CREATE-JOB"},"next":{"title":"DROP JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/job/DROP-JOB"}}'),s=t("785893"),r=t("250065");let i={title:"PAUSE JOB",language:"zh-CN"},d=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u6682\u505C\u4E00\u4E2A\u6B63\u5728 RUNNING \u72B6\u6001\u7684 JOB\uFF0C\u6B63\u5728\u8FD0\u884C\u7684 TASK \u4F1A\u88AB\u4E2D\u65AD\uFF0CJOB \u72B6\u6001\u53D8\u66F4\u4E3A PAUSED\u3002\u88AB\u505C\u6B62\u7684 JOB \u53EF\u4EE5\u901A\u8FC7 RESUME \u64CD\u4F5C\u6062\u590D\u8FD0\u884C\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PAUSE JOB WHERE jobname = <job_name> ;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<job_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6682\u505C\u4EFB\u52A1\u7684\u4F5C\u4E1A\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u6570\u636E\u5E93\uFF08DB\uFF09"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["\u76EE\u524D\u4EC5\u652F\u6301 ",(0,s.jsx)(n.strong,{children:"ADMIN"})," \u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6682\u505C\u540D\u79F0\u4E3A example \u7684 JOB\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"   PAUSE JOB where jobname='example';\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);