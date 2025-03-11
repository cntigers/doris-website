"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["177184"],{337575:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","title":"ALTER SQL_BLOCK_RULE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER SQL_BLOCK_RULE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE SQL_BLOCK_RULE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE"},"next":{"title":"DROP SQL_BLOCK_RULE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE"}}'),s=t("785893"),r=t("250065");let a={title:"ALTER SQL_BLOCK_RULE",language:"zh-CN"},i=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539 SQL \u963B\u6B62\u89C4\u5219"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER SQL_BLOCK_RULE <rule_name>\nPROPERTIES (\n          -- property\n          <property>\n          -- Additional properties\n          [ , ... ]\n          ) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<rule_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u89C4\u5219\u7684\u540D\u5B57"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<property>"})]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u4F53\u89C1",(0,s.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE",children:"CREATE SQL_BLOCK_RULE"})," \u7684\u4ECB\u7ECD"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539 sql \u5E76\u5F00\u542F\u89C4\u5219"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var l=t(667294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);