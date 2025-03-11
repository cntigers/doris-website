"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["405959"],{82222:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>o,toc:()=>r,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","title":"SHOW LOAD WARNINGS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW LOAD WARNINGS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD"},"next":{"title":"CREATE ROUTINE LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CREATE-ROUTINE-LOAD"}}'),s=t("785893"),d=t("250065");let i={title:"SHOW LOAD WARNINGS",language:"zh-CN"},a=void 0,o={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u5BFC\u5165\u4EFB\u52A1\u5931\u8D25\u4E14\u9519\u8BEF\u4FE1\u606F\u4E3A ",(0,s.jsx)(n.code,{children:"ETL_QUALITY_UNSATISFIED"}),"\uFF0C\u5219\u8BF4\u660E\u5B58\u5728\u5BFC\u5165\u8D28\u91CF\u95EE\u9898\uFF0C\u5982\u679C\u60F3\u770B\u5230\u8FD9\u4E9B\u6709\u8D28\u91CF\u95EE\u9898\u7684\u5BFC\u5165\u4EFB\u52A1\uFF0C\u8BE5\u8BED\u53E5\u5C31\u662F\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS\n[FROM <db_name>]\n[\n   WHERE\n   [LABEL  = [ "<your_label>" ]]\n   [LOAD_JOB_ID = ["<job_id>"]]\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<your_label>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"LABEL = <your_label>"}),"\uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 label\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. ",(0,s.jsx)(n.code,{children:"<job_id>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u6307\u5B9A\u4E86 ",(0,s.jsx)(n.code,{children:"LOAD_JOB_ID = <job_id>"}),"\uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 JOB_ID\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"LOAD_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u5E93\u8868\u7684\u5BFC\u5165\u6743\u9650"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\u4E2D\u5B58\u5728\u8D28\u91CF\u95EE\u9898\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\u4E2D\u5B58\u5728\u8D28\u91CF\u95EE\u9898\u7684\u6570\u636E\uFF0C\u6307\u5B9A label \u4E3A "load_demo_20210112"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112" \n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},d=l.createContext(s);function i(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);