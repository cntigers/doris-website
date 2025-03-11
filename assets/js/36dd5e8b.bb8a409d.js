"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["781527"],{169702:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE","title":"ADMIN-REPAIR-TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ADMIN-REPAIR-TABLE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW REPLICA STATUS","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-STATUS"},"next":{"title":"ADMIN-CANCEL-REPAIR","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}}'),s=n("785893"),r=n("250065");let a={title:"ADMIN-REPAIR-TABLE",language:"en"},l=void 0,o={},c=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"admin-repair-table",children:"ADMIN-REPAIR-TABLE"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"ADMIN REPAIR TABLE"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"statement used to attempt to preferentially repair the specified table or partition"}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n"})}),"\n",(0,s.jsx)(t.p,{children:"illustrate:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"This statement only means to let the system try to repair the shard copy of the specified table or partition with high priority, and does not guarantee that the repair can be successful. Users can view the repair status through the ADMIN SHOW REPLICA STATUS command."}),"\n",(0,s.jsx)(t.li,{children:"The default timeout is 14400 seconds (4 hours). A timeout means that the system will no longer repair shard copies of the specified table or partition with high priority. Need to re-use this command to set"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Attempt to repair the specified table"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:" ADMIN REPAIR TABLE tbl1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Try to repair the specified partition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:" ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ADMIN, REPAIR, TABLE\n"})}),"\n",(0,s.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(667294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);