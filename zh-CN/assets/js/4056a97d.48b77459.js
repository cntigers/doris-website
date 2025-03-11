"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["587368"],{399851:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","title":"SHOW ROUTINE LOAD TASK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW ROUTINE LOAD TASK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW ROUTINE LOAD","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD"},"next":{"title":"SHOW CREATE ROUTINE LOAD","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-CREATE-ROUTINE-LOAD"}}'),s=n("785893"),i=n("250065");let d={title:"SHOW ROUTINE LOAD TASK",language:"zh-CN"},r=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u7ED3\u679C",id:"\u8FD4\u56DE\u7ED3\u679C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u8BE5\u8BED\u6CD5\u7528\u4E8E\u67E5\u770B\u4E00\u4E2A\u6307\u5B9A\u7684 Routine Load \u4F5C\u4E1A\u7684\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5B50\u4EFB\u52A1\u60C5\u51B5\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW ROUTINE LOAD TASK WHERE JobName = <job_name>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["1. ",(0,s.jsx)(t.code,{children:"<job_name>"})]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u8981\u67E5\u770B\u7684\u4F8B\u884C\u5BFC\u5165\u4F5C\u4E1A\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8FD4\u56DE\u7ED3\u679C",children:"\u8FD4\u56DE\u7ED3\u679C"}),"\n",(0,s.jsx)(t.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5B57\u6BB5\u540D"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TaskId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u7684\u552F\u4E00 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TxnId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u5BFC\u5165\u4E8B\u52A1 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TxnStatus"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u5BFC\u5165\u4E8B\u52A1\u72B6\u6001\u3002\u4E3A null \u65F6\u8868\u793A\u5B50\u4EFB\u52A1\u8FD8\u672A\u5F00\u59CB\u8C03\u5EA6"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"JobId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u4F5C\u4E1A ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CreateTime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u7684\u521B\u5EFA\u65F6\u95F4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ExecuteStartTime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u88AB\u8C03\u5EA6\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u901A\u5E38\u665A\u4E8E\u521B\u5EFA\u65F6\u95F4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5B50\u4EFB\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u901A\u5E38\u662F\u4F5C\u4E1A\u8BBE\u7F6E\u7684 ",(0,s.jsx)(t.code,{children:"max_batch_interval"})," \u7684\u4E24\u500D"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BeId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6267\u884C\u8FD9\u4E2A\u5B50\u4EFB\u52A1\u7684 BE \u8282\u70B9 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DataSourceProperties"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B50\u4EFB\u52A1\u51C6\u5907\u6D88\u8D39\u7684 Kafka Partition \u7684\u8D77\u59CB offset\u3002\u662F\u4E00\u4E2A Json \u683C\u5F0F\u5B57\u7B26\u4E32\u3002Key \u4E3A Partition Id\uFF0CValue \u4E3A\u6D88\u8D39\u7684\u8D77\u59CB offset"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"LOAD_PRIV"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SHOW ROUTINE LOAD TASK \u9700\u8981\u5BF9\u8868\u6709LOAD\u6743\u9650"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"TxnStatus \u4E3A null \u4E0D\u4EE3\u8868\u4EFB\u52A1\u51FA\u9519\uFF0C\u53EF\u80FD\u662F\u4EFB\u52A1\u8FD8\u672A\u5F00\u59CB\u8C03\u5EA6"}),"\n",(0,s.jsx)(t.li,{children:"DataSourceProperties \u4E2D\u7684 offset \u4FE1\u606F\u53EF\u7528\u4E8E\u8FFD\u8E2A\u6570\u636E\u6D88\u8D39\u8FDB\u5EA6"}),"\n",(0,s.jsx)(t.li,{children:"Timeout \u65F6\u95F4\u5230\u8FBE\u540E\uFF0C\u4EFB\u52A1\u4F1A\u81EA\u52A8\u7ED3\u675F\uFF0C\u65E0\u8BBA\u662F\u5426\u5B8C\u6210\u6570\u636E\u6D88\u8D39"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u5C55\u793A\u540D\u4E3A test1 \u7684\u4F8B\u884C\u5BFC\u5165\u4EFB\u52A1\u7684\u5B50\u4EFB\u52A1\u4FE1\u606F\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n'})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);