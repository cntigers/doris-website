"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["128815"],{393725:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-PASSWORD","title":"SET PASSWORD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/account-management/SET-PASSWORD.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-PASSWORD","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SET-PASSWORD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SET PASSWORD","language":"en"},"sidebar":"docs","previous":{"title":"DROP USER","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/DROP-USER"},"next":{"title":"CREATE ROLE","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/CREATE-ROLE"}}'),r=s("785893"),i=s("250065");let l={title:"SET PASSWORD",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SET PASSWORD"})," statement is used to modify a user's login password."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD [FOR <user_identity>] =\n    [PASSWORD(<plain_password>)]|[<hashed_password>]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<plain_password>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The input is a plaintext password. Taking the password ",(0,r.jsx)(n.code,{children:"123456"})," as an example, directly use the string ",(0,r.jsx)(n.code,{children:"123456"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<hashed_password>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The input is an encrypted password. Taking the password 123456 as an example, directly use the string ",(0,r.jsx)(n.code,{children:"*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9"}),", which is the return value of the function ",(0,r.jsx)(n.code,{children:"PASSWORD('123456')"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<user_identity>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The user_identity here must exactly match the user_identity specified when creating a user with CREATE USER, otherwise an error will be reported that the user does not exist. If user_identity is not specified, the current user is 'username'@'ip', which may not match any user_identity. Current users can be viewed through SHOW GRANTS."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"User or Role has the ADMIN_PRIV privilege to modify all user's password, otherwise only the current user's password can be modified."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"FOR user_identity"})," field does not exist, then change the current user's password."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Modify the current user's password"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Modify the specified user password"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);