"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["261945"],{436915:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","title":"SET-PROPERTY","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md","sourceDirName":"sql-manual/sql-reference/Account-Management-Statements","slug":"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SET-PROPERTY","language":"en"},"sidebar":"docs","previous":{"title":"SET-PASSWORD","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},"next":{"title":"LDAP","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP"}}'),r=s("785893"),i=s("250065");let c={title:"SET-PROPERTY",language:"en"},l=void 0,a={},o=[{value:"SET-PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"set-property",children:"SET-PROPERTY"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"SET PROPERTY"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Set user attributes, including resources assigned to users, importing clusters, etc."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n"})}),"\n",(0,r.jsx)(n.p,{children:"The user attribute set here is for user, not user_identity. That is, if two users 'jack'@'%' and 'jack'@'192.%' are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the user jack, not 'jack'@'% ' or 'jack'@'192.%'"}),"\n",(0,r.jsx)(n.p,{children:"key:"}),"\n",(0,r.jsx)(n.p,{children:"Super user privileges:"}),"\n",(0,r.jsx)(n.p,{children:"max_user_connections: The maximum number of connections."}),"\n",(0,r.jsx)(n.p,{children:"max_query_instances: The number of instances that a user can use to execute a query at the same time."}),"\n",(0,r.jsx)(n.p,{children:"sql_block_rules: Set sql block rules. Once set, queries sent by this user will be rejected if they match the rules."}),"\n",(0,r.jsxs)(n.p,{children:["cpu_resource_limit: Limit the cpu resources for queries. See the introduction to the session variable ",(0,r.jsx)(n.code,{children:"cpu_resource_limit"})," for details. -1 means not set."]}),"\n",(0,r.jsxs)(n.p,{children:["exec_mem_limit: Limit the memory usage of the query. See the introduction to the session variable ",(0,r.jsx)(n.code,{children:"exec_mem_limit"})," for details. -1 means not set."]}),"\n",(0,r.jsx)(n.p,{children:"resource_tags: Specifies the user's resource tag permissions."}),"\n",(0,r.jsx)(n.p,{children:"query_timeout: Specifies the user's query timeout permissions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Note: If the attributes `cpu_resource_limit`, `exec_mem_limit` are not set, the value in the session variable will be used by default.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the maximum number of user jack connections to 1000"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the number of available instances for user jack's query to 3000"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the sql block rule of user jack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the cpu usage limit of user jack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the user's resource tag permissions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the user's query memory usage limit, in bytes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the user's query timeout limit, in second"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SET, PROPERTY\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);