"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["649939"],{518791:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>r,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"admin-manual/auth/authorization/data","title":"Data Access Control","description":"\x3c!--","source":"@site/docs/admin-manual/auth/authorization/data.md","sourceDirName":"admin-manual/auth/authorization","slug":"/admin-manual/auth/authorization/data","permalink":"/docs/dev/admin-manual/auth/authorization/data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Data Access Control","language":"en"},"sidebar":"docs","previous":{"title":"Ranger Authorization","permalink":"/docs/dev/admin-manual/auth/authorization/ranger"},"next":{"title":"Audit Log","permalink":"/docs/dev/admin-manual/audit-plugin"}}'),s=i("785893"),t=i("250065");let o={title:"Data Access Control",language:"en"},l=void 0,r={},c=[{value:"Row Permissions",id:"row-permissions",level:2},{value:"Mechanism",id:"mechanism",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Related Commands",id:"related-commands",level:3},{value:"Row Permission Example",id:"row-permission-example",level:3},{value:"Column Permissions",id:"column-permissions",level:2},{value:"Related Commands",id:"related-commands-1",level:3},{value:"Column Permission Example",id:"column-permission-example",level:3},{value:"Data Masking",id:"data-masking",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"row-permissions",children:"Row Permissions"}),"\n",(0,s.jsx)(n.p,{children:"With row-level policies in Doris, you can achieve fine-grained access control over sensitive data. You can decide which users or roles can access specific records in a table based on security policies defined at the table level."}),"\n",(0,s.jsx)(n.h3,{id:"mechanism",children:"Mechanism"}),"\n",(0,s.jsx)(n.p,{children:"Equivalent to automatically adding the predicate set in the Row Policy for users configured with Row Policy when querying."}),"\n",(0,s.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(n.p,{children:"Row Policy cannot be set for default users root and admin."}),"\n",(0,s.jsx)(n.h3,{id:"related-commands",children:"Related Commands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["View Row Permission Policies ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY",children:"SHOW ROW POLICY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create Row Permission Policy ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY",children:"CREATE ROW POLICY"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"row-permission-example",children:"Row Permission Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Restrict the test user to only query data in table1 where c1='a'"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"column-permissions",children:"Column Permissions"}),"\n",(0,s.jsx)(n.p,{children:"With column permissions in Doris, you can achieve fine-grained access control over tables. You can grant permissions to specific columns in a table to decide which users or roles can access specific columns in a table."}),"\n",(0,s.jsx)(n.p,{children:"Currently, column permissions only support Select_priv."}),"\n",(0,s.jsx)(n.h3,{id:"related-commands-1",children:"Related Commands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Grant: ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Revoke: ",(0,s.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/account-management/REVOKE-FROM",children:"REVOKE"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"column-permission-example",children:"Column Permission Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Grant user1 the permission to query columns col1 and col2 in table tbl."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GRANT Select_priv(col1,col2) ON ctl.db.tbl TO user1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-masking",children:"Data Masking"}),"\n",(0,s.jsx)(n.p,{children:"Data masking is a method to protect sensitive data by modifying, replacing, or hiding the original data, making the masked data no longer contain sensitive information while maintaining certain formats and characteristics."}),"\n",(0,s.jsx)(n.p,{children:"For example, administrators can choose to replace part or all of the digits of sensitive fields such as credit card numbers or ID numbers with asterisks * or other characters, or replace real names with pseudonyms."}),"\n",(0,s.jsxs)(n.p,{children:["Starting from version 2.1.2, data masking is supported through Apache Ranger's Data Masking to set masking policies for certain columns, currently only through ",(0,s.jsx)(n.a,{href:"/docs/dev/admin-manual/auth/authorization/ranger",children:"Apache Ranger"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Data Masking settings for admin/root users will not take effect."}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var a=i(667294);let s={},t=a.createContext(s);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);