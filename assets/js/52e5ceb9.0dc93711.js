"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["847470"],{193316:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-statements/account-management/ALTER-USER","title":"ALTER USER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/account-management/ALTER-USER.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/ALTER-USER","permalink":"/docs/sql-manual/sql-statements/account-management/ALTER-USER","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER USER","language":"en"},"sidebar":"docs","previous":{"title":"CREATE USER","permalink":"/docs/sql-manual/sql-statements/account-management/CREATE-USER"},"next":{"title":"DROP USER","permalink":"/docs/sql-manual/sql-statements/account-management/DROP-USER"}}'),i=n("785893"),l=n("250065");let r={title:"ALTER USER",language:"en"},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function d(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"ALTER USER"})," statement is used to modify a user's account attributes, including passwords, and password policies, etc."]}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"ALTER USER [IF EXISTS] <user_identity> [IDENTIFIED BY <password>]\n[<password_policy>]\n[<comment>]\n\npassword_policy:\n    1. PASSWORD_HISTORY { <n> | DEFAULT }\n    2. PASSWORD_EXPIRE { DEFAULT | NEVER | INTERVAL <n> { DAY | HOUR | SECOND }}\n    3. FAILED_LOGIN_ATTEMPTS <n>\n    4. PASSWORD_LOCK_TIME { UNBOUNDED \uFF5C <n> { DAY | HOUR | SECOND }}\n    5. ACCOUNT_UNLOCK\n"})}),"\n",(0,i.jsx)(s.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["1. ",(0,i.jsx)(s.code,{children:"<user_identity"}),">"]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["A user_identity uniquely identifies a user.The syntax is:'user_name'@'host'.\n",(0,i.jsx)(s.code,{children:"user_identity"})," consists of two parts, user_name and host, where username is the username. Host identifies the host address where the client connects. The host part can use % for fuzzy matching. If no host is specified, it defaults to '%', which means the user can connect to Doris from any host.\nThe host part can also be specified as a domain, the syntax is: 'user_name'@['domain'], even if it is surrounded by square brackets, Doris will think this is a domain and try to resolve its ip address."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["1. ",(0,i.jsx)(s.code,{children:"<password>"})]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Specify the user password."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["2. ",(0,i.jsx)(s.code,{children:"<password_policy>"})]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"password_policy"})," is a clause used to specify policies related to password authentication login. Currently, the following policies are supported:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"PASSWORD_HISTORY { <n> | DEFAULT}"})}),"\n",(0,i.jsxs)(s.p,{children:["Whether to allow the current user to use historical passwords when resetting their passwords. For example, ",(0,i.jsx)(s.code,{children:"PASSWORD_HISTORY 10"})," means that it is forbidden to use the password set in the past 10 times as a new password. If set to ",(0,i.jsx)(s.code,{children:"PASSWORD_HISTORY DEFAULT"}),", the value in the global variable ",(0,i.jsx)(s.code,{children:"password_history"})," will be used. ",(0,i.jsx)(s.code,{children:"0"})," means do not enable this feature. Default is 0."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"PASSWORD_EXPIRE { DEFAULT | NEVER | INTERVAL <n> { DAY | HOUR | SECOND }}"})}),"\n",(0,i.jsxs)(s.p,{children:["Set the expiration time of the current user's password. For example ",(0,i.jsx)(s.code,{children:"PASSWORD_EXPIRE INTERVAL 10 DAY"})," means the password will expire in 10 days. ",(0,i.jsx)(s.code,{children:"PASSWORD_EXPIRE NEVER"})," means that the password does not expire. If set to ",(0,i.jsx)(s.code,{children:"PASSWORD_EXPIRE DEFAULT"}),", the value in the global variable ",(0,i.jsx)(s.code,{children:"default_password_lifetime"})," is used. Defaults to NEVER (or 0), which means it will not expire."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"FAILED_LOGIN_ATTEMPTS <n>"})}),"\n",(0,i.jsxs)(s.p,{children:["When the current user logs in, if the user logs in with the wrong password for n times, the account will be locked.For example, ",(0,i.jsx)(s.code,{children:"FAILED_LOGIN_ATTEMPTS 3"})," means that if you log in wrongly for 3 times, the account will be locked."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"PASSWORD_LOCK_TIME { UNBOUNDED \uFF5C <n> { DAY | HOUR | SECOND }}"})}),"\n",(0,i.jsxs)(s.p,{children:["When the account is locked, the lock time is set. For example, ",(0,i.jsx)(s.code,{children:"PASSWORD_LOCK_TIME 1 DAY"})," means that the account will be locked for one day."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"ACCOUNT_UNLOCK"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ACCOUNT_UNLOCK"})," is used to unlock a locked user."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["3. ",(0,i.jsx)(s.code,{children:"<comment>"})]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Specify the user comment."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(s.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"This operation can only be performed by users or roles with ADMIN_PRIV permissions"})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["This command give over supports modifying user roles from versions 2.0. Please use ",(0,i.jsx)(s.a,{href:"/docs/sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANT"})," and ",(0,i.jsx)(s.a,{href:"/docs/sql-manual/sql-statements/account-management/REVOKE-FROM",children:"REVOKE"})," for related operations"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"In an ALTER USER command, only one of the following account attributes can be modified at the same time:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Change password"}),"\n",(0,i.jsxs)(s.li,{children:["Modify ",(0,i.jsx)(s.code,{children:"PASSWORD_HISTORY"})]}),"\n",(0,i.jsxs)(s.li,{children:["Modify ",(0,i.jsx)(s.code,{children:"PASSWORD_EXPIRE"})]}),"\n",(0,i.jsxs)(s.li,{children:["Modify ",(0,i.jsx)(s.code,{children:"FAILED_LOGIN_ATTEMPTS"})," and ",(0,i.jsx)(s.code,{children:"PASSWORD_LOCK_TIME"})]}),"\n",(0,i.jsx)(s.li,{children:"Unlock users"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Change the user's password"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"ALTER USER jack@'%' IDENTIFIED BY \"12345\";\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Modify the user's password policy"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"ALTER USER jack@'%' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Unlock a user"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"ALTER USER jack@'%' ACCOUNT_UNLOCK\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Modify the user's comment"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"ALTER USER jack@'%' COMMENT \"this is my first user\"\n"})})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return r}});var t=n(667294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);