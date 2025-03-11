"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["88497"],{704394:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/grouping-id","title":"GROUPING_ID","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/grouping-id.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/grouping-id","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/grouping-id","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"GROUPING_ID","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GROUPING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/grouping"},"next":{"title":"ANY_VALUE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/any-value"}}'),r=t("785893"),a=t("250065");let i={title:"GROUPING_ID",language:"zh-CN"},s=void 0,o={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u793A\u4F8B A: \u8BC6\u522B\u5206\u7EC4\u5C42\u7EA7",id:"\u793A\u4F8B-a-\u8BC6\u522B\u5206\u7EC4\u5C42\u7EA7",level:3},{value:"\u793A\u4F8B B: \u8FC7\u6EE4\u7ED3\u679C\u96C6",id:"\u793A\u4F8B-b-\u8FC7\u6EE4\u7ED3\u679C\u96C6",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"GROUPING_ID \u662F\u4E00\u4E2A\u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u5C42\u7EA7\u7684\u51FD\u6570\u3002\u5F53 SQL \u8BED\u53E5\u4E2D\u4F7F\u7528\u4E86 GROUP BY \u5B50\u53E5\u65F6\uFF0C\u8BE5\u51FD\u6570\u53EF\u4EE5\u5728 SELECT\u3001HAVING \u6216 ORDER BY \u5B50\u53E5\u4E2D\u4F7F\u7528\uFF0C\u8FD4\u56DE\u4E00\u4E2A BIGINT \u503C\uFF0C\u8BE5\u503C\u8868\u793A\u5404\u5206\u7EC4\u5217\u805A\u5408\u60C5\u51B5\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u4F4D\u56FE\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u540E\u7684\u7ED3\u679C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GROUPING_ID ( <column_expression>[ ,...n ] )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<column_expression>"})}),(0,r.jsx)(n.td,{children:"\u5728 GROUP BY \u5B50\u53E5\u4E2D\u5305\u542B\u7684\u5217\u6216\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u53C2\u6570\u3002"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DE\u4E00\u4E2A BIGINT \u503C\uFF0C\u8868\u793A\u5404\u5206\u7EC4\u5217\u7684\u805A\u5408\u60C5\u51B5\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u4F4D\u56FE\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u540E\u7684\u7ED3\u679C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B-a-\u8BC6\u522B\u5206\u7EC4\u5C42\u7EA7",children:"\u793A\u4F8B A: \u8BC6\u522B\u5206\u7EC4\u5C42\u7EA7"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u7684\u4F8B\u5B50\u6309\u90E8\u95E8\u548C\u804C\u7EA7\u7EDF\u8BA1\u96C7\u5458\u4EBA\u6570\uFF0C\u5E76\u4F7F\u7528 GROUPING_ID \u51FD\u6570\u8BA1\u7B97\u6BCF\u4E00\u884C\u7684\u805A\u5408\u7A0B\u5EA6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid) AS 'Employee Count'\nFROM employee \nGROUP BY ROLLUP(department, level)\nORDER BY GROUPING_ID(department, level) ASC;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------+---------------------------+----------------+\n| department         | Job Title                 | Employee Count |\n+--------------------+---------------------------+----------------+\n| Board of Directors | Senior                    |              2 |\n| Technology         | Senior                    |              3 |\n| Sales              | Senior                    |              1 |\n| Sales              | Assistant                 |              2 |\n| Sales              | Trainee                   |              1 |\n| Marketing          | Senior                    |              1 |\n| Marketing          | Trainee                   |              2 |\n| Marketing          | Assistant                 |              1 |\n| Board of Directors | Total: Board of Directors |              2 |\n| Technology         | Total: Technology         |              3 |\n| Sales              | Total: Sales              |              4 |\n| Marketing          | Total: Marketing          |              4 |\n| NULL               | Total: Company            |             13 |\n+--------------------+---------------------------+----------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B-b-\u8FC7\u6EE4\u7ED3\u679C\u96C6",children:"\u793A\u4F8B B: \u8FC7\u6EE4\u7ED3\u679C\u96C6"}),"\n",(0,r.jsx)(n.p,{children:'\u4E0B\u9762\u7684\u4F8B\u5B50\u8FD4\u56DE\u90E8\u95E8\u4E2D\u7EA7\u522B\u4E3A "Senior" \u7684\u96C7\u5458\u7EDF\u8BA1\u6570\u636E\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid)\nFROM employee \nGROUP BY ROLLUP(department, level)\nHAVING `Job Title` IN ('Senior');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------+-----------+--------------+\n| department         | Job Title | count(`uid`) |\n+--------------------+-----------+--------------+\n| Board of Directors | Senior    |            2 |\n| Technology         | Senior    |            3 |\n| Sales              | Senior    |            1 |\n| Marketing          | Senior    |            1 |\n+--------------------+-----------+--------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var l=t(667294);let r={},a=l.createContext(r);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);