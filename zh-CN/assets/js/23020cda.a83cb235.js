"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["591234"],{940569:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"query/query-data/cte","title":"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-data/cte.md","sourceDirName":"query/query-data","slug":"/query/query-data/cte","permalink":"/zh-CN/docs/2.0/query/query-data/cte","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5B50\u67E5\u8BE2","permalink":"/zh-CN/docs/2.0/query/query-data/subquery"},"next":{"title":"\u5217\u8F6C\u884C (Lateral View)","permalink":"/zh-CN/docs/2.0/query/query-data/lateral-view"}}'),c=t("785893"),s=t("250065");let i={title:"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09",language:"zh-CN"},a=void 0,d={},l=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u7B80\u5355\u793A\u4F8B",id:"\u7B80\u5355\u793A\u4F8B",level:3},{value:"\u5D4C\u5957 CTE",id:"\u5D4C\u5957-cte",level:3},{value:"\u9012\u5F52 CTE \uFF08Doris \u4E0D\u652F\u6301\uFF09",id:"\u9012\u5F52-cte-doris-\u4E0D\u652F\u6301",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(n.p,{children:"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08Common Table Expression\uFF09\u5B9A\u4E49\u4E00\u4E2A\u4E34\u65F6\u7ED3\u679C\u96C6\uFF0C\u4F60\u53EF\u4EE5\u5728 SQL \u8BED\u53E5\u7684\u8303\u56F4\u5185\u591A\u6B21\u5F15\u7528\u3002CTE \u4E3B\u8981\u7528\u4E8E SELECT \u8BED\u53E5\u4E2D\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u6307\u5B9A\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF0C\u8BF7\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"WITH"})," \u5177\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u9017\u53F7\u5206\u9694\u5B50\u53E5\u7684\u5B50\u53E5\u3002\u6BCF\u4E2A\u5B50\u53E5\u90FD\u63D0\u4F9B\u4E00\u4E2A\u5B50\u67E5\u8BE2\uFF0C\u7528\u4E8E\u751F\u6210\u7ED3\u679C\u96C6\uFF0C\u5E76\u5C06\u540D\u79F0\u4E0E\u5B50\u67E5\u8BE2\u76F8\u5173\u8054\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["Doris \u652F\u6301\u5D4C\u5957 CTE\u3002\u5728\u5305\u542B\u8BE5 ",(0,c.jsx)(n.code,{children:"WITH"}),"\u5B50\u53E5 \u7684\u8BED\u53E5\u4E2D\uFF0C\u53EF\u4EE5\u5F15\u7528\u6BCF\u4E2A CTE \u540D\u79F0\u4EE5\u8BBF\u95EE\u76F8\u5E94\u7684 CTE \u7ED3\u679C\u96C6\u3002CTE \u540D\u79F0\u53EF\u4EE5\u5728\u5176\u4ED6 CTE \u4E2D\u5F15\u7528\uFF0C\u4ECE\u800C\u53EF\u4EE5\u57FA\u4E8E\u5176\u4ED6 CTE \u5B9A\u4E49 CTE\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["Doris ",(0,c.jsx)(n.strong,{children:"\u4E0D\u652F\u6301"})," \u9012\u5F52 CTE\u3002\u6709\u5173\u9012\u5F52 CTE \u7684\u8BE6\u7EC6\u89E3\u91CA\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,c.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.4/en/with.html#common-table-expressions-recursive",children:"MySQL \u9012\u5F52 CTE \u624B\u518C"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsx)(n.h3,{id:"\u7B80\u5355\u793A\u4F8B",children:"\u7B80\u5355\u793A\u4F8B"}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0B\u9762\u7684\u793A\u4F8B\u5B9A\u4E49\u540D\u4E3A\u7684 CTE ",(0,c.jsx)(n.code,{children:"cte1"})," \u548C ",(0,c.jsx)(n.code,{children:"cte2"})," \u4E2D ",(0,c.jsx)(n.code,{children:"WITH"})," \u5B50\u53E5\uFF0C\u5E76\u4E14\u662F\u6307\u5728\u5B83\u4EEC\u7684\u9876\u5C42 ",(0,c.jsx)(n.code,{children:"SELECT"})," \u4E0B\u9762\u7684 ",(0,c.jsx)(n.code,{children:"WITH"})," \u5B50\u53E5\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"WITH\n  cte1 AS\uFF08SELECT a\uFF0Cb FROM table1\uFF09\uFF0C\n  cte2 AS\uFF08SELECT c\uFF0Cd FROM table2\uFF09\nSELECT b\uFF0Cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5D4C\u5957-cte",children:"\u5D4C\u5957 CTE"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"WITH\n  cte1 AS (SELECT a, b FROM table1),\n  cte2 AS (SELECT c, d FROM cte1)\nSELECT b, d FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u9012\u5F52-cte-doris-\u4E0D\u652F\u6301",children:"\u9012\u5F52 CTE \uFF08Doris \u4E0D\u652F\u6301\uFF09"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"WITH r_cte AS (\n  SELECT 1 AS user_id, 2 as manager_id\n  UNION ALL\n  SELECT user_id, manager_id FROM r_cte INNER JOIN (SELECT 1 AS user_id, 2 as manager_id) t ON r_cte.manager_id = t.user_id\n)\nSELECT * FROM r_cte\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let c={},s=r.createContext(c);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);