"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["465060"],{970583:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/query/SHOW-QUERY-STATS","title":"SHOW QUERY STATS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/session/query/SHOW-QUERY-STATS.md","sourceDirName":"sql-manual/sql-statements/session/query","slug":"/sql-manual/sql-statements/session/query/SHOW-QUERY-STATS","permalink":"/docs/sql-manual/sql-statements/session/query/SHOW-QUERY-STATS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW QUERY STATS","language":"en"},"sidebar":"docs","previous":{"title":"CLEAN ALL PROFILE","permalink":"/docs/sql-manual/sql-statements/session/query/CLEAN-ALL-PROFILE"},"next":{"title":"CLEAN ALL QUERY STATS","permalink":"/docs/sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS"}}'),l=s("785893"),a=s("250065");let r={title:"SHOW QUERY STATS",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to display the database table columns hit by the historical query"}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW QUERY STATS [ { [FOR <db_name>] | [FROM <table_name>] } ] [ALL] [VERBOSE]];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"If this parameter is set, the matching information of the database is displayed"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"If this parameter is set, the matching status of a table is queried"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"ALL"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"ALL Specifies whether to display the matching information of all indexes"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["4. ",(0,l.jsx)(n.code,{children:"VERBOSE"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"VERBOSE displays detailed matching information"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user who executes this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"DATABASE"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"You must have the SELECT permission on the queried database"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Query the historical query matching status of databases and tables. Data is reset after fe is restarted, and statistics are collected for each fe."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"You can use FOR DATABASE and FROM TABLE to specify the matching information of the database or table to be queried, followed by the database name or table name."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The ALL and VERBOSE parameters can be used alone or together, but they must be used last and only for table queries."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If no databases are being used, then simply executing 'SHOW QUERY STATS' will show the hits of all databases."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"There may be two columns in the hit result: QueryCount indicates the number of times the column has been queried, and FilterCount indicates the number of times the column has been queried as the where condition."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 0          | 0           |\n | k1    | 0          | 0           |\n | k2    | 0          | 0           |\n | k3    | 0          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 0          | 0           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select k0, k1,k2, sum(k3) from baseall  where k9 > 1 group by k0,k1,k2\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +------+------+--------+-------------+\n | k0   | k1   | k2     | sum(`k3`)   |\n +------+------+--------+-------------+\n |    0 |    6 |  32767 |        3021 |\n |    1 |   12 |  32767 | -2147483647 |\n |    0 |    3 |   1989 |        1002 |\n |    0 |    7 | -32767 |        1002 |\n |    1 |    8 |    255 |  2147483647 |\n |    1 |    9 |   1991 | -2147483647 |\n |    1 |   11 |   1989 |       25699 |\n |    1 |   13 | -32767 |  2147483647 |\n |    1 |   14 |    255 |         103 |\n |    0 |    1 |   1989 |        1001 |\n |    0 |    2 |   1986 |        1001 |\n |    1 |   15 |   1992 |        3021 |\n +------+------+--------+-------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 1          | 0           |\n | k1    | 1          | 0           |\n | k2    | 1          | 0           |\n | k3    | 1          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 1          | 1           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall all\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +-----------+------------+\n | IndexName | QueryCount |\n +-----------+------------+\n | baseall   | 1          |\n +-----------+------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats from baseall all verbose\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +-----------+-------+------------+-------------+\n | IndexName | Field | QueryCount | FilterCount |\n +-----------+-------+------------+-------------+\n | baseall   | k0    | 1          | 0           |\n |           | k1    | 1          | 0           |\n |           | k2    | 1          | 0           |\n |           | k3    | 1          | 0           |\n |           | k4    | 0          | 0           |\n |           | k5    | 0          | 0           |\n |           | k6    | 0          | 0           |\n |           | k10   | 0          | 0           |\n |           | k11   | 0          | 0           |\n |           | k7    | 0          | 0           |\n |           | k8    | 0          | 0           |\n |           | k9    | 1          | 1           |\n |           | k12   | 0          | 0           |\n |           | k13   | 0          | 0           |\n +-----------+-------+------------+-------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats for test_query_db\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +----------------------------+------------+\n | TableName                  | QueryCount |\n +----------------------------+------------+\n | compaction_tbl             | 0          |\n | bigtable                   | 0          |\n | empty                      | 0          |\n | tempbaseall                | 0          |\n | test                       | 0          |\n | test_data_type             | 0          |\n | test_string_function_field | 0          |\n | baseall                    | 1          |\n | nullable                   | 0          |\n +----------------------------+------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show query stats\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:" +-----------------+------------+\n | Database        | QueryCount |\n +-----------------+------------+\n | test_query_db   | 1          |\n +-----------------+------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let l={},a=t.createContext(l);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);