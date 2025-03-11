"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["77786"],{271634:function(e,n,l){l.r(n),l.d(n,{default:()=>j,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-PROPERTY","title":"SET PROPERTY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/account-management/SET-PROPERTY.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-PROPERTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SET-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SET PROPERTY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SET LDAP_ADMIN_PASSWORD","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD"},"next":{"title":"SHOW PROPERTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SHOW-PROPERTY"}}'),c=l("785893"),i=l("250065");let r={title:"SET PROPERTY",language:"zh-CN"},d=void 0,t={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"SET PROPERTY"})," \u8BED\u53E5\u7528\u4E8E\u8BBE\u7F6E\u7528\u6237\u5C5E\u6027\uFF0C\u5305\u62EC\u5206\u914D\u7ED9\u7528\u6237\u7684\u8D44\u6E90\u548C\u5BFC\u5165\u96C6\u7FA4\u8BBE\u7F6E\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u76F8\u5173\u547D\u4EE4"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/CREATE-USER",children:"CREATE USER"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SHOW-PROPERTY",children:"SHOW PROPERTY"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [ FOR '<user_name>' ] '<key_1>' = '<value_1>' [, '<key_2>' = '<value_2>', ...];\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["1. ",(0,c.jsx)(n.code,{children:"<key_n>"})]})}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u8BBE\u7F6E\u7684\u5C5E\u6027\u952E\u3002\u53EF\u7528\u7684\u952E\u5305\u62EC\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"max_user_connections"}),"\uFF1A\u6700\u5927\u8FDE\u63A5\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"max_query_instances"}),"\uFF1A\u7528\u6237\u540C\u4E00\u65F6\u95F4\u70B9\u6267\u884C\u67E5\u8BE2\u53EF\u4EE5\u4F7F\u7528\u7684 instance \u4E2A\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"sql_block_rules"}),"\uFF1A\u8BBE\u7F6E SQL \u963B\u6B62\u89C4\u5219\u3002\u8BBE\u7F6E\u540E\uFF0C\u8BE5\u7528\u6237\u53D1\u9001\u7684\u67E5\u8BE2\u5982\u679C\u5339\u914D\u89C4\u5219\uFF0C\u5219\u4F1A\u88AB\u62D2\u7EDD\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cpu_resource_limit"}),"\uFF1A\u9650\u5236\u67E5\u8BE2\u7684 CPU \u8D44\u6E90\u3002\u8BE6\u89C1\u4F1A\u8BDD\u53D8\u91CF ",(0,c.jsx)(n.code,{children:"cpu_resource_limit"})," \u7684\u4ECB\u7ECD\u3002-1 \u8868\u793A\u672A\u8BBE\u7F6E\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"exec_mem_limit"}),"\uFF1A\u9650\u5236\u67E5\u8BE2\u7684\u5185\u5B58\u4F7F\u7528\u3002\u8BE6\u89C1\u4F1A\u8BDD\u53D8\u91CF ",(0,c.jsx)(n.code,{children:"exec_mem_limit"})," \u7684\u4ECB\u7ECD\u3002-1 \u8868\u793A\u672A\u8BBE\u7F6E\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"resource_tags"}),"\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"query_timeout"}),"\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u67E5\u8BE2\u8D85\u65F6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default_workload_group"}),"\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u9ED8\u8BA4\u5DE5\u4F5C\u8D1F\u8F7D\u7EC4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default_compute_group"}),"\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u9ED8\u8BA4\u8BA1\u7B97\u7EC4\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6CE8\uFF1A\u5982\u679C\u672A\u8BBE\u7F6E ",(0,c.jsx)(n.code,{children:"cpu_resource_limit"})," \u548C ",(0,c.jsx)(n.code,{children:"exec_mem_limit"}),"\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u4F1A\u8BDD\u53D8\u91CF\u4E2D\u7684\u503C\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["2. ",(0,c.jsx)(n.code,{children:"<value_n>"})]})}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u6307\u5B9A\u952E\u8BBE\u7F6E\u7684\u503C\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["1. ",(0,c.jsx)(n.code,{children:"<user_name>"})]})}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u8BBE\u7F6E\u5C5E\u6027\u7684\u7528\u6237\u540D\u3002\u5982\u679C\u7701\u7565\uFF0C\u5219\u4E3A\u5F53\u524D\u7528\u6237\u8BBE\u7F6E\u5C5E\u6027\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,c.jsxs)(n.td,{style:{textAlign:"left"},children:["\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 ",(0,c.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\u624D\u80FD\u8FDB\u884C ",(0,c.jsx)(n.code,{children:"SET PROPERTY"})," \u64CD\u4F5C"]})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7528\u6237\u5C5E\u6027\u662F\u9488\u5BF9\u7528\u6237\u7684\uFF0C\u800C\u4E0D\u662F\u9488\u5BF9 ",(0,c.jsx)(n.code,{children:"user_identity"}),"\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"CREATE USER"})," \u8BED\u53E5\u521B\u5EFA\u4E86\u4E24\u4E2A\u7528\u6237 ",(0,c.jsx)(n.code,{children:"'jack'@'%'"})," \u548C ",(0,c.jsx)(n.code,{children:"'jack'@'192.%'"}),"\uFF0C\u5219\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"SET PROPERTY"})," \u8BED\u53E5\u53EA\u80FD\u9488\u5BF9\u7528\u6237 ",(0,c.jsx)(n.code,{children:"'jack'"}),"\uFF0C\u800C\u4E0D\u662F ",(0,c.jsx)(n.code,{children:"'jack'@'%'"})," \u6216 ",(0,c.jsx)(n.code,{children:"'jack'@'192.%'"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3A 1000\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u6700\u5927\u67E5\u8BE2\u5B9E\u4F8B\u6570\u4E3A 3000\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4E3A\u7528\u6237 'jack' \u8BBE\u7F6E SQL \u963B\u6B62\u89C4\u5219\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684 CPU \u8D44\u6E90\u9650\u5236\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u5185\u5B58\u4F7F\u7528\u9650\u5236\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u67E5\u8BE2\u8D85\u65F6\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u9ED8\u8BA4\u5DE5\u4F5C\u8D1F\u8F7D\u7EC4\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'default_workload_group' = 'group1';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237 'jack' \u7684\u9ED8\u8BA4\u8BA1\u7B97\u7EC4\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'default_compute_group' = 'compute_group1';\n"})}),"\n"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return r}});var s=l(667294);let c={},i=s.createContext(c);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);