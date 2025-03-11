"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["230358"],{197351:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/connection/KILL-CONNECTION","title":"KILL CONNECTION","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/session/connection/KILL-CONNECTION.md","sourceDirName":"sql-manual/sql-statements/session/connection","slug":"/sql-manual/sql-statements/session/connection/KILL-CONNECTION","permalink":"/docs/sql-manual/sql-statements/session/connection/KILL-CONNECTION","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"KILL CONNECTION","language":"en"},"sidebar":"docs","previous":{"title":"CLEAN ALL QUERY STATS","permalink":"/docs/sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS"},"next":{"title":"BEGIN","permalink":"/docs/sql-manual/sql-statements/transaction/BEGIN"}}'),i=s("785893"),o=s("250065");let r={title:"KILL CONNECTION",language:"en"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Kill a connection with a specified connection ID. This will also kill the query associated with this connection."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"KILL [ CONNECTION ] <connection_id>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"<connection_id>"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The ID of the connection. It can be queried through the SHOW PROCESSLIST statement."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["The user executing this SQL command must be the user who owns the connection or have at least ",(0,i.jsx)(n.code,{children:"ADMIN_PRIV"})," permission."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Query ",(0,i.jsx)(n.code,{children:"connection_id"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"show processlist;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n| CurrentConnected | Id | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info             | FE           | CloudCluster |\n+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n| Yes              | 16 | root | 127.0.0.1:63746 | 2024-11-04 20:18:07 | internal | test | Query   | 0    | OK    | e4d69a1cce81468d-91c9ae32b17540e9 | show processlist | 172.16.123.1 | NULL         |\n+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Send KILL command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"KILL CONNECTION 16;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);