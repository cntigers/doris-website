"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["132970"],{349605:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>i,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","title":"SHOW BACKEND CONFIG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKEND-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW BACKEND CONFIG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW BACKENDS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS"},"next":{"title":"DECOMMISSION BACKEND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND"}}'),t=s("785893"),a=s("250065");let r={title:"SHOW BACKEND CONFIG",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C\uFF08Return Value\uFF09",id:"\u8FD4\u56DE\u503Creturn-value",level:2},{value:"\u6743\u9650\u63A7\u5236\uFF08Access Control Requirements\uFF09",id:"\u6743\u9650\u63A7\u5236access-control-requirements",level:2},{value:"\u793A\u4F8B\uFF08Examples\uFF09",id:"\u793A\u4F8Bexamples",level:2},{value:"\u67E5\u8BE2\u6240\u6709\u914D\u7F6E\u9879",id:"\u67E5\u8BE2\u6240\u6709\u914D\u7F6E\u9879",level:3},{value:"\u67E5\u8BE2\u6307\u5B9A ID \u7684 BE \u7684\u914D\u7F6E\u9879",id:"\u67E5\u8BE2\u6307\u5B9A-id-\u7684-be-\u7684\u914D\u7F6E\u9879",level:3},{value:"\u67E5\u8BE2\u7B26\u5408\u6307\u5B9A\u6A21\u5F0F\u7684\u914D\u7F6E\u9879",id:"\u67E5\u8BE2\u7B26\u5408\u6307\u5B9A\u6A21\u5F0F\u7684\u914D\u7F6E\u9879",level:3}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u5C55\u793A BACKEND\uFF08\u5373 BE\uFF09\u7684\u914D\u7F6E\u9879\u548C\u5176\u5F53\u524D\u503C\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"[ ADMIN ] SHOW BACKEND CONFIG [ LIKE <config_key_pattern> ] [ FROM <backend_id> ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"<config_key_pattern>"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u63D0\u4F9B\u4E00\u4E2A\u901A\u914D\u7B26\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5339\u914D BE \u914D\u7F6E\u9879\u3002\u5339\u914D\u89C4\u5219\u4E0E LIKE \u8868\u8FBE\u5F0F\u76F8\u540C\u3002\u4E66\u5199\u89C4\u5219\u8BF7\u53C2\u8003\u201C\u5339\u914D\u8868\u8FBE\u5F0F\u201D\u7AE0\u8282\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"<backend_id>"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"BE \u7684 ID\u3002\u7528\u4E8E\u67E5\u770B\u6307\u5B9A ID \u7684 BE \u7684\u914D\u7F6E\u3002BE \u7684 ID \u53EF\u4EE5\u901A\u8FC7 SHOW BACKENDS \u547D\u4EE4\u83B7\u5F97\u3002\u5177\u4F53\u8BF7\u53C2\u9605\u201CSHOW BACKENDS\u201D\u547D\u4EE4"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503Creturn-value",children:"\u8FD4\u56DE\u503C\uFF08Return Value\uFF09"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BackendId: BE \u7684 ID"}),"\n",(0,t.jsx)(n.li,{children:"Host: BE \u7684\u4E3B\u673A\u5730\u5740"}),"\n",(0,t.jsx)(n.li,{children:"Key: \u914D\u7F6E\u9879\u7684\u540D\u79F0"}),"\n",(0,t.jsx)(n.li,{children:"Value: \u914D\u7F6E\u9879\u5BF9\u5E94\u7684\u503C"}),"\n",(0,t.jsx)(n.li,{children:"Type: \u914D\u7F6E\u503C\u7684\u7C7B\u578B"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236access-control-requirements",children:"\u6743\u9650\u63A7\u5236\uFF08Access Control Requirements\uFF09"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709 ADMIN_PRIV \u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8Bexamples",children:"\u793A\u4F8B\uFF08Examples\uFF09"}),"\n",(0,t.jsx)(n.h3,{id:"\u67E5\u8BE2\u6240\u6709\u914D\u7F6E\u9879",children:"\u67E5\u8BE2\u6240\u6709\u914D\u7F6E\u9879"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| BackendId | Host         | Key                            | Value | Type                     | IsMutable |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level       | 9     | int64_t                  | true      |\n| 12793     | 172.16.123.1 | agent_task_trace_threshold_sec | 2     | int32_t                  | true      |\n...\n| 12794     | 172.16.123.2 | zone_map_row_num_threshold     | 20    | int32_t                  | true      |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67E5\u8BE2\u6307\u5B9A-id-\u7684-be-\u7684\u914D\u7F6E\u9879",children:"\u67E5\u8BE2\u6307\u5B9A ID \u7684 BE \u7684\u914D\u7F6E\u9879"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG FROM 12793\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| BackendId | Host         | Key                            | Value | Type                     | IsMutable |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level       | 9     | int64_t                  | true      |\n| 12793     | 172.16.123.1 | agent_task_trace_threshold_sec | 2     | int32_t                  | true      |\n...\n| 12793     | 172.16.123.1 | zone_map_row_num_threshold     | 20    | int32_t                  | true      |\n+-----------+--------------+--------------------------------+-------+--------------------------+-----------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67E5\u8BE2\u7B26\u5408\u6307\u5B9A\u6A21\u5F0F\u7684\u914D\u7F6E\u9879",children:"\u67E5\u8BE2\u7B26\u5408\u6307\u5B9A\u6A21\u5F0F\u7684\u914D\u7F6E\u9879"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW BACKEND CONFIG LIKE '%compression_level%'\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ED3\u679C\u4E3A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"+-----------+--------------+--------------------------+-------+---------+-----------+\n| BackendId | Host         | Key                      | Value | Type    | IsMutable |\n+-----------+--------------+--------------------------+-------+---------+-----------+\n| 12793     | 172.16.123.1 | LZ4_HC_compression_level | 9     | int64_t | true      |\n| 12794     | 172.16.123.2 | LZ4_HC_compression_level | 9     | int64_t | true      |\n+-----------+--------------+--------------------------+-------+---------+-----------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var l=s(667294);let t={},a=l.createContext(t);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);