"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["300060"],{575035:function(e,t,n){n.r(t),n.d(t,{default:()=>E,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","title":"CREATE-TABLE-AS-SELECT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Create","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CREATE-TABLE-AS-SELECT","language":"en"},"sidebar":"docs","previous":{"title":"CREATE-TABLE-LIKE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},"next":{"title":"CREATE-EXTERNAL-TABLE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"}}'),i=n("785893"),a=n("250065");let r={title:"CREATE-TABLE-AS-SELECT",language:"en"},l=void 0,c={},o=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"create-table-as-select",children:"CREATE-TABLE-AS-SELECT"}),"\n",(0,i.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(t.p,{children:"CREATE TABLE AS SELECT"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This statement creates the table structure by returning the results from the Select statement and imports the data at the same time"}),"\n",(0,i.jsx)(t.p,{children:"grammar\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n"})}),"\n",(0,i.jsx)(t.p,{children:"illustrate:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The user needs to have",(0,i.jsx)(t.code,{children:"SELECT"}),"permission for the source table and",(0,i.jsx)(t.code,{children:"CREATE"}),"permission for the target database"]}),"\n",(0,i.jsx)(t.li,{children:"After a table is created, data is imported. If the import fails, the table is deleted"}),"\n",(0,i.jsxs)(t.li,{children:["You can specify the key type. The default key type is ",(0,i.jsx)(t.code,{children:"Duplicate Key"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Tips",type:"tip",children:(0,i.jsx)(t.p,{children:"This feature is supported since the Apache Doris 1.2 version"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'All columns of type string (varchar/var/string) are created as type "string".'}),"\n",(0,i.jsx)(t.li,{children:"If the created source is an external table and the first column is of type String, the first column is automatically set to VARCHAR(65533). Because of Doris internal table, String column is not allowed as first column."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Using the field names in the SELECT statement"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Custom field names (need to match the number of fields returned)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Specify table model, partitions, and buckets"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"CREATE, TABLE, AS, SELECT\n"})}),"\n",(0,i.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var s=n(667294);let i={},a=s.createContext(i);function r(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);