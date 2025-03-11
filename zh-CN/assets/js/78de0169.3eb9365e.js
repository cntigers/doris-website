"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["723481"],{16155:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE","title":"CREATE-SQL-BLOCK-RULE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Create","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CREATE-SQL-BLOCK-RULE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-WORKLOAD-GROUP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},"next":{"title":"ALTER-CATALOG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG"}}'),r=l("785893"),t=l("250065");let a={title:"CREATE-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,c={},d=[{value:"CREATE-SQL-BLOCK-RULE",id:"create-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u9644\u5F55",id:"\u9644\u5F55",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-sql-block-rule",children:"CREATE-SQL-BLOCK-RULE"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"CREATE SQL BLOCK RULE"}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u521B\u5EFA SQL \u963B\u6B62\u89C4\u5219\uFF0C\u8BE5\u529F\u80FD\u53EF\u7528\u4E8E\u9650\u5236\u4EFB\u4F55 sql \u8BED\u53E5\uFF08\u5305\u62EC DDL \u548C DML \u8BED\u53E5\uFF09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u652F\u6301\u6309\u7528\u6237\u914D\u7F6E SQL \u9ED1\u540D\u5355\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u901A\u8FC7\u6B63\u5219\u5339\u914D\u7684\u65B9\u5F0F\u62D2\u7EDD\u6307\u5B9A SQL"}),"\n",(0,r.jsxs)(n.li,{children:["\u901A\u8FC7\u8BBE\u7F6E partition_num, tablet_num, cardinality, \u68C0\u67E5\u4E00\u4E2A\u67E5\u8BE2\u662F\u5426\u8FBE\u5230\u5176\u4E2D\u4E00\u4E2A\u9650\u5236\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"partition_num, tablet_num, cardinality \u53EF\u4EE5\u4E00\u8D77\u8BBE\u7F6E\uFF0C\u4E00\u65E6\u4E00\u4E2A\u67E5\u8BE2\u8FBE\u5230\u5176\u4E2D\u4E00\u4E2A\u9650\u5236\uFF0C\u67E5\u8BE2\u5C06\u4F1A\u88AB\u62E6\u622A"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE rule_name \n[PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["sql\uFF1A\u5339\u914D\u89C4\u5219 (\u57FA\u4E8E\u6B63\u5219\u5339\u914D\uFF0C\u7279\u6B8A\u5B57\u7B26\u9700\u8981\u8F6C\u8BD1\uFF0C\u5982",(0,r.jsx)(n.code,{children:"select *"}),"\u4F7F\u7528",(0,r.jsx)(n.code,{children:"select \\\\*"}),')\uFF0C\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3A "NULL", \u6700\u540E\u4E0D\u8981\u5E26\u5206\u53F7']}),"\n",(0,r.jsxs)(n.li,{children:["sqlHash: sql hash \u503C\uFF0C\u7528\u4E8E\u5B8C\u5168\u5339\u914D\uFF0C\u6211\u4EEC\u4F1A\u5728",(0,r.jsx)(n.code,{children:"fe.audit.log"}),'\u6253\u5370\u8FD9\u4E2A\u503C\uFF0C\u53EF\u9009\uFF0C\u8FD9\u4E2A\u53C2\u6570\u548C sql \u53EA\u80FD\u4E8C\u9009\u4E00\uFF0C\u9ED8\u8BA4\u503C\u4E3A "NULL"']}),"\n",(0,r.jsx)(n.li,{children:"partition_num: \u4E00\u4E2A\u626B\u63CF\u8282\u70B9\u4F1A\u626B\u63CF\u7684\u6700\u5927 partition \u6570\u91CF\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0L"}),"\n",(0,r.jsx)(n.li,{children:"tablet_num: \u4E00\u4E2A\u626B\u63CF\u8282\u70B9\u4F1A\u626B\u63CF\u7684\u6700\u5927 tablet \u6570\u91CF\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0L"}),"\n",(0,r.jsx)(n.li,{children:"cardinality: \u4E00\u4E2A\u626B\u63CF\u8282\u70B9\u7C97\u7565\u7684\u626B\u63CF\u884C\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0L"}),"\n",(0,r.jsx)(n.li,{children:"global\uFF1A\u662F\u5426\u5168\u5C40 (\u6240\u6709\u7528\u6237) \u751F\u6548\uFF0C\u9ED8\u8BA4\u4E3A false"}),"\n",(0,r.jsx)(n.li,{children:"enable\uFF1A\u662F\u5426\u5F00\u542F\u963B\u6B62\u89C4\u5219\uFF0C\u9ED8\u8BA4\u4E3A true"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3A test_rule \u7684\u963B\u6B62\u89C4\u5219"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u53BB\u6267\u884C\u521A\u624D\u6211\u4EEC\u5B9A\u4E49\u5728\u89C4\u5219\u91CC\u7684 sql \u65F6\u5C31\u4F1A\u8FD4\u56DE\u5F02\u5E38\u9519\u8BEF\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA test_rule2\uFF0C\u5C06\u6700\u5927\u626B\u63CF\u7684\u5206\u533A\u6570\u91CF\u9650\u5236\u5728 30 \u4E2A\uFF0C\u6700\u5927\u626B\u63CF\u57FA\u6570\u9650\u5236\u5728 100 \u4EBF\u884C\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule2 \nPROPERTIES\n(\n   "partition_num" = "30",\n   "cardinality" = "10000000000",\n   "global" = "false",\n   "enable" = "true"\n);\nQuery OK, 0 rows affected (0.01 sec)\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u7684 SQL BLOCK RULE\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D ( \u548C ) \u7B26\u53F7\u662F\u7279\u6B8A\u7B26\u53F7\uFF0C\u6240\u4EE5\u9700\u8981\u8F6C\u4E49\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES\n( \n"sql" = "select count\\\\(1\\\\) from db1.tbl1"\n);\nCREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES\n( \n"sql" = "select \\\\* from db1.tbl1"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SQL_BLCOK_RULE \u4E2D\uFF0CSQL \u7684\u5339\u914D\u662F\u57FA\u4E8E\u6B63\u5219\u7684\uFF0C\u5982\u679C\u60F3\u5339\u914D\u66F4\u591A\u6A21\u5F0F\u7684 SQL \u9700\u8981\u5199\u76F8\u5E94\u7684\u6B63\u5219\uFF0C\u6BD4\u5982\u5FFD\u7565 SQL\n\u4E2D\u7A7A\u683C\uFF0C\u8FD8\u6709 order_ \u5F00\u5934\u7684\u8868\u90FD\u4E0D\u80FD\u67E5\u8BE2\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  CREATE SQL_BLOCK_RULE test_rule4 \n  PROPERTIES(\n    "sql"="\\\\s*select\\\\s*\\\\*\\\\s*from order_\\\\w*\\\\s*",\n    "global"="false",\n    "enable"="true"\n  );\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9644\u5F55",children:"\u9644\u5F55"}),"\n",(0,r.jsx)(n.p,{children:"\u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:". \uFF1A\u5339\u914D\u4EFB\u4F55\u5355\u4E2A\u5B57\u7B26\uFF0C\u9664\u4E86\u6362\u884C\u7B26 `\\n`\u3002\n\n* \uFF1A\u5339\u914D\u524D\u9762\u7684\u5143\u7D20\u96F6\u6B21\u6216\u591A\u6B21\u3002\u4F8B\u5982\uFF0Ca* \u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A 'a'\u3002\n\n+ \uFF1A\u5339\u914D\u524D\u9762\u7684\u5143\u7D20\u4E00\u6B21\u6216\u591A\u6B21\u3002\u4F8B\u5982\uFF0Ca+ \u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A 'a'\u3002\n\n? \uFF1A\u5339\u914D\u524D\u9762\u7684\u5143\u7D20\u96F6\u6B21\u6216\u4E00\u6B21\u3002\u4F8B\u5982\uFF0Ca? \u5339\u914D\u96F6\u4E2A\u6216\u4E00\u4E2A 'a'\u3002\n\n[] \uFF1A\u7528\u4E8E\u5B9A\u4E49\u5B57\u7B26\u96C6\u5408\u3002\u4F8B\u5982\uFF0C[aeiou] \u5339\u914D\u4EFB\u4F55\u4E00\u4E2A\u5143\u97F3\u5B57\u6BCD\u3002\n\n[^] \uFF1A\u5728\u5B57\u7B26\u96C6\u5408\u4E2D\u4F7F\u7528 ^ \u8868\u793A\u5426\u5B9A\uFF0C\u5339\u914D\u4E0D\u5728\u96C6\u5408\u5185\u7684\u5B57\u7B26\u3002\u4F8B\u5982\uFF0C[^0-9] \u5339\u914D\u4EFB\u4F55\u975E\u6570\u5B57\u5B57\u7B26\u3002\n\n() \uFF1A\u7528\u4E8E\u5206\u7EC4\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u5BF9\u5176\u5E94\u7528\u91CF\u8BCD\u3002\u4F8B\u5982\uFF0C(ab)+ \u5339\u914D\u8FDE\u7EED\u7684 'ab'\u3002\n\n| \uFF1A\u7528\u4E8E\u8868\u793A\u6216\u903B\u8F91\u3002\u4F8B\u5982\uFF0Ca|b \u5339\u914D 'a' \u6216 'b'\u3002\n\n^ \uFF1A\u5339\u914D\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u3002\u4F8B\u5982\uFF0C^abc \u5339\u914D\u4EE5 'abc' \u5F00\u5934\u7684\u5B57\u7B26\u4E32\u3002\n\n$ \uFF1A\u5339\u914D\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u3002\u4F8B\u5982\uFF0Cxyz$ \u5339\u914D\u4EE5 'xyz' \u7ED3\u5C3E\u7684\u5B57\u7B26\u4E32\u3002\n\n\\ \uFF1A\u7528\u4E8E\u8F6C\u4E49\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F7F\u5176\u53D8\u6210\u666E\u901A\u5B57\u7B26\u3002\u4F8B\u5982\uFF0C\\\\. \u5339\u914D\u53E5\u70B9\u5B57\u7B26 '.'\u3002\n\n\\s\uFF1A\u5339\u914D\u4EFB\u4F55\u7A7A\u767D\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\u7B49\u3002\n\n\\d\uFF1A\u5339\u914D\u4EFB\u4F55\u6570\u5B57\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E [0-9]\u3002\n\n\\w\uFF1A\u5339\u914D\u4EFB\u4F55\u5355\u8BCD\u5B57\u7B26\uFF0C\u5305\u62EC\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\uFF0C\u76F8\u5F53\u4E8E [a-zA-Z0-9_]\u3002\n"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"CREATE, SQL_BLCOK_RULE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return a}});var s=l(667294);let r={},t=s.createContext(r);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);