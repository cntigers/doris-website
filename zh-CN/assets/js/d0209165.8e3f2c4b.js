"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529927"],{889877:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION","title":"SHOW PARTITION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PARTITION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW CONVERT LIGHT SCHEMA CHANGE PROCESS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"},"next":{"title":"SHOW PARTITION ID","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION-ID"}}'),s=t("785893"),a=t("250065");let i={title:"SHOW PARTITION",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"SHOW PARTITION \u7528\u4E8E\u5C55\u793A\u6307\u5B9A\u5206\u533A\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u5305\u62EC\u6240\u5C5E\u6570\u636E\u5E93\u540D\u5B57\u548C ID\uFF0C\u6240\u5C5E\u8868\u540D\u5B57\u548C ID \u4EE5\u53CA\u5206\u533A\u540D\u5B57\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITION <partition_id>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<partition_id>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5206\u533A\u7684 ID\u3002\u5206\u533A ID \u53EF\u4EE5\u901A\u8FC7 SHOW PARTITIONS \u7B49\u65B9\u5F0F\u83B7\u5F97\u3002\u66F4\u591A\u4FE1\u606F\u8BF7\u53C2\u9605\u201CSHOW PARTITIONS\u201D\u7AE0\u8282"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u81F3\u5C11\u5177\u6709",(0,s.jsx)(n.code,{children:"ADMIN_PRIV"}),"\u6743\u9650"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u8BE2\u5206\u533A ID \u4E3A 13004 \u7684\u5206\u533A\u4FE1\u606F\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITION 13004;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"+--------+-----------+---------------+-------+---------+\n| DbName | TableName | PartitionName | DbId  | TableId |\n+--------+-----------+---------------+-------+---------+\n| ods    | sales     | sales         | 13003 | 13005   |\n+--------+-----------+---------------+-------+---------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);