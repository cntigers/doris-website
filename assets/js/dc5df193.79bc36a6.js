"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["260472"],{573699:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE","title":"CREATE SQL_BLOCK_RULE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE SQL_BLOCK_RULE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW ENCRYPTKEY","permalink":"/docs/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY"},"next":{"title":"ALTER SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE"}}'),r=t("785893"),a=t("250065");let l={title:"CREATE SQL_BLOCK_RULE",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2},{value:"Others",id:"others",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to create an SQL block rule."}),"\n",(0,r.jsx)(n.p,{children:"SQL_BLOCK_RULE can be used to restrict users from performing certain operations, such as avoiding scanning large amounts of data."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE SQL_BLOCK_RULE <rule_name>\nPROPERTIES (\n          -- property\n          <property>\n          -- Additional properties\n          [ , ... ]\n          ) \n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<rule_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the rule."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<property>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The properties of the rule can be divided into three categories: SQL execution, scan limitation, and switch."}),"\n",(0,r.jsx)(n.p,{children:"The SQL execution and scan limitation categories are mutually exclusive, meaning that an SQL block rule can only restrict one of them."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SQL Execution Category"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"There are two types, representing regular expression matching and exact matching, respectively. Only one of them can be chosen."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["sql: The matching rule (based on regular expression matching, special characters need to be escaped, for example, ",(0,r.jsx)(n.code,{children:"select *"})," should be written as ",(0,r.jsx)(n.code,{children:"select \\\\*"}),"). When a user executes an SQL statement, the system will use the SQL set here as a regular expression to match the SQL submitted by the user. If it matches, the execution of the SQL will be blocked."]}),"\n",(0,r.jsxs)(n.li,{children:["sqlHash: The MD5 hash value of the SQL. This is mainly used in conjunction with slow logs. Users do not need to calculate the hash value themselves. For example, if a slow log shows that a particular SQL is running slowly, you can copy the ",(0,r.jsx)(n.code,{children:"SqlHash"})," from ",(0,r.jsx)(n.code,{children:"fe.audit.log"})," and create an SQL_BLOCK_RULE to restrict the execution of this SQL."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Scan Limitation Category"}),"\nWhen a user initiates a query, the query optimizer will calculate the number of partitions, tablets, and rows of data that need to be scanned for each table. The following properties can be used to limit these three numbers, either all at once or just some of them."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"partition_num: The maximum number of partitions that a table will scan."}),"\n",(0,r.jsx)(n.li,{children:"tablet_num: The maximum number of tablets that a table will scan."}),"\n",(0,r.jsx)(n.li,{children:"cardinality: The number of rows of data that a table will scan."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Switch Category"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["global: Whether the rule is effective for all users. The default is false. If it is not set to true, the rule needs to be applied to a specific user through the ",(0,r.jsx)(n.code,{children:"set property"})," command."]}),"\n",(0,r.jsx)(n.li,{children:"enable: Whether the blocking rule is enabled. The default is true."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{children:"Global"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a rule that prevents all users from executing ",(0,r.jsx)(n.code,{children:"select * from order_analysis"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n"sql"="select \\\\* from order_analysis",\n"global"="true",\n"enable"="true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"When we execute the SQL defined in the rule, it will return an exception error, as shown below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a rule that prevents scanning more than 30 partitions of the same table and restricts the query data volume to no more than 10 billion rows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule2 \nPROPERTIES\n(\n    "partition_num" = "30",\n    "cardinality" = "10000000000",\n    "global" = "true",\n    "enable" = "true"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'SQL matching is based on regular expressions. If you want to match more patterns of SQL, you need to write the corresponding regular expressions. For example, ignoring spaces in SQL and preventing queries on tables starting with "order", as shown below:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES(\n  "sql"="\\\\s*select\\\\s*\\\\*\\\\s*from order_\\\\w*\\\\s*",\n  "global"="true",\n  "enable"="true"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a rule that is only applicable to specific users"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES(\n    "sql"="select \\\\* from order_analysis",\n    "global"="false",\n    "enable"="true"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"Apply the rule to user jack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'test_rule4';\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,r.jsx)(n.p,{children:"Common regular expressions are as follows:"}),"\n",(0,r.jsx)(n.p,{children:"TextCopy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:". : Matches any single character except the newline character `\\n`.\n\n* : Matches the preceding element zero or more times. For example, a* matches zero or more 'a's.\n\n+ : Matches the preceding element one or more times. For example, a+ matches one or more 'a's.\n\n? : Matches the preceding element zero or one time. For example, a? matches zero or one 'a'.\n\n[] : Defines a character set. For example, [aeiou] matches any vowel.\n\n[^] : When used in a character set, ^ indicates negation, matching characters not in the set. For example, [^0-9] matches any non-digit character.\n\n() : Groups expressions, allowing quantifiers to be applied to them. For example, (ab)+ matches consecutive 'ab's.\n\n| : Indicates logical OR. For example, a|b matches 'a' or 'b'.\n\n^ : Matches the beginning of a string. For example, ^abc matches strings starting with 'abc'.\n\n$ : Matches the end of a string. For example, xyz$ matches strings ending with 'xyz'.\n\n\\ : Escapes special characters, making them ordinary characters. For example, \\\\. matches the period character '.'.\n\n\\s : Matches any whitespace character, including spaces, tabs, newlines, etc.\n\n\\d : Matches any digit character, equivalent to [0-9].\n\n\\w : Matches any word character, including letters, digits, and underscores, equivalent to [a-zA-Z0-9_].\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);