"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["382104"],{973081:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/DROP-USER","title":"DROP USER","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/account-management/DROP-USER.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/DROP-USER","permalink":"/docs/dev/sql-manual/sql-statements/account-management/DROP-USER","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DROP USER","language":"en"},"sidebar":"docs","previous":{"title":"ALTER USER","permalink":"/docs/dev/sql-manual/sql-statements/account-management/ALTER-USER"},"next":{"title":"SET PASSWORD","permalink":"/docs/dev/sql-manual/sql-statements/account-management/SET-PASSWORD"}}'),l=n("785893"),r=n("250065");let i={title:"DROP USER",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"DROP USER"})," statement is used to delete a user."]}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"  DROP USER '<user_identity>'\n"})}),"\n",(0,l.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"<user_identity>"})]})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The specified user identity."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"This operation can only be performed by users or roles with ADMIN_PRIV permissions"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Delete user jack@'192.%'"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP USER 'jack'@'192.%'\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var s=n(667294);let l={},r=s.createContext(l);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);