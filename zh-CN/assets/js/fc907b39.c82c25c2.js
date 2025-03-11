"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["374114"],{192921:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/queries/SHOW-QUERY-STATS","title":"SHOW QUERY STATS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/session/queries/SHOW-QUERY-STATS.md","sourceDirName":"sql-manual/sql-statements/session/queries","slug":"/sql-manual/sql-statements/session/queries/SHOW-QUERY-STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/SHOW-QUERY-STATS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW QUERY STATS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CLEAN PROFILE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/CLEAN-ALL-PROFILE"},"next":{"title":"CLEAN QUERY STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/CLEAN-ALL-QUERY-STATS"}}'),t=s("785893"),r=s("250065");let i={title:"SHOW QUERY STATS",language:"zh-CN"},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u6570\u636E\u5E93\u4E2D\u5386\u53F2\u67E5\u8BE2\u547D\u4E2D\u7684\u5E93\u8868\u5217\u7684\u60C5\u51B5"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW QUERY STATS [ { [FOR <db_name>] | [FROM <table_name>] } ] [ALL] [VERBOSE]];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u5C55\u793A\u6570\u636E\u5E93\u7684\u547D\u4E2D\u60C5\u51B5"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u67E5\u8BE2\u67D0\u8868\u7684\u67E5\u8BE2\u547D\u4E2D\u60C5\u51B5"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"ALL"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"ALL \u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u5C55\u793A\u6240\u6709 index \u7684\u67E5\u8BE2\u547D\u4E2D\u60C5\u51B5"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["4. ",(0,t.jsx)(n.code,{children:"VERBOSE"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"VERBOSE \u53EF\u4EE5\u5C55\u793A\u66F4\u8BE6\u7EC6\u7684\u547D\u4E2D\u60C5\u51B5"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"DATABASE"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u6709 SELECT \u6743\u9650"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u652F\u6301\u67E5\u8BE2\u6570\u636E\u5E93\u548C\u8868\u7684\u5386\u53F2\u67E5\u8BE2\u547D\u4E2D\u60C5\u51B5\uFF0C\u91CD\u542F fe \u540E\u6570\u636E\u4F1A\u91CD\u7F6E\uFF0C\u6BCF\u4E2A fe \u5355\u72EC\u7EDF\u8BA1\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7 FOR DATABASE \u548C FROM TABLE \u53EF\u4EE5\u6307\u5B9A\u67E5\u8BE2\u6570\u636E\u5E93\u6216\u8005\u8868\u7684\u547D\u4E2D\u60C5\u51B5\uFF0C\u540E\u9762\u5206\u522B\u63A5\u6570\u636E\u5E93\u540D\u6216\u8005\u8868\u540D\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ALL \u548C VERBOSE \u53EF\u4EE5\u5C55\u793A\u66F4\u8BE6\u7EC6\u7684\u547D\u4E2D\u60C5\u51B5\uFF0C\u8FD9\u4E24\u4E2A\u53C2\u6570\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4E00\u8D77\u4F7F\u7528\uFF0C\u4F46\u662F\u5FC5\u987B\u653E\u5728\u6700\u540E \u800C\u4E14\u53EA\u80FD\u7528\u5728\u8868\u7684\u67E5\u8BE2\u4E0A\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u6CA1\u6709 use \u4EFB\u4F55\u6570\u636E\u5E93\u90A3\u4E48\u76F4\u63A5\u6267\u884C",(0,t.jsx)(n.code,{children:"SHOW QUERY STATS"})," \u5C06\u5C55\u793A\u6240\u6709\u6570\u636E\u5E93\u7684\u547D\u4E2D\u60C5\u51B5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u547D\u4E2D\u7ED3\u679C\u4E2D\u53EF\u80FD\u6709\u4E24\u5217\uFF1AQueryCount \u8868\u793A\u8BE5\u5217\u88AB\u67E5\u8BE2\u6B21\u6570\uFF0CFilterCount \u8868\u793A\u8BE5\u5217\u4F5C\u4E3A where \u6761\u4EF6\u88AB\u67E5\u8BE2\u7684\u6B21\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 0          | 0           |\n | k1    | 0          | 0           |\n | k2    | 0          | 0           |\n | k3    | 0          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 0          | 0           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select k0, k1,k2, sum(k3) from baseall  where k9 > 1 group by k0,k1,k2\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +------+------+--------+-------------+\n | k0   | k1   | k2     | sum(`k3`)   |\n +------+------+--------+-------------+\n |    0 |    6 |  32767 |        3021 |\n |    1 |   12 |  32767 | -2147483647 |\n |    0 |    3 |   1989 |        1002 |\n |    0 |    7 | -32767 |        1002 |\n |    1 |    8 |    255 |  2147483647 |\n |    1 |    9 |   1991 | -2147483647 |\n |    1 |   11 |   1989 |       25699 |\n |    1 |   13 | -32767 |  2147483647 |\n |    1 |   14 |    255 |         103 |\n |    0 |    1 |   1989 |        1001 |\n |    0 |    2 |   1986 |        1001 |\n |    1 |   15 |   1992 |        3021 |\n +------+------+--------+-------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 1          | 0           |\n | k1    | 1          | 0           |\n | k2    | 1          | 0           |\n | k3    | 1          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 1          | 1           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall all\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +-----------+------------+\n | IndexName | QueryCount |\n +-----------+------------+\n | baseall   | 1          |\n +-----------+------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall all verbose\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +-----------+-------+------------+-------------+\n | IndexName | Field | QueryCount | FilterCount |\n +-----------+-------+------------+-------------+\n | baseall   | k0    | 1          | 0           |\n |           | k1    | 1          | 0           |\n |           | k2    | 1          | 0           |\n |           | k3    | 1          | 0           |\n |           | k4    | 0          | 0           |\n |           | k5    | 0          | 0           |\n |           | k6    | 0          | 0           |\n |           | k10   | 0          | 0           |\n |           | k11   | 0          | 0           |\n |           | k7    | 0          | 0           |\n |           | k8    | 0          | 0           |\n |           | k9    | 1          | 1           |\n |           | k12   | 0          | 0           |\n |           | k13   | 0          | 0           |\n +-----------+-------+------------+-------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats for test_query_db\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +----------------------------+------------+\n | TableName                  | QueryCount |\n +----------------------------+------------+\n | compaction_tbl             | 0          |\n | bigtable                   | 0          |\n | empty                      | 0          |\n | tempbaseall                | 0          |\n | test                       | 0          |\n | test_data_type             | 0          |\n | test_string_function_field | 0          |\n | baseall                    | 1          |\n | nullable                   | 0          |\n +----------------------------+------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show query stats\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" +-----------------+------------+\n | Database        | QueryCount |\n +-----------------+------------+\n | test_query_db   | 1          |\n +-----------------+------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);