"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["16877"],{795388:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>r,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/connection/KILL-CONNECTION","title":"KILL CONNECTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/session/connection/KILL-CONNECTION.md","sourceDirName":"sql-manual/sql-statements/session/connection","slug":"/sql-manual/sql-statements/session/connection/KILL-CONNECTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/connection/KILL-CONNECTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"KILL CONNECTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PLAN REPLAYER PLAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/PLAN-REPLAYER-PLAY"},"next":{"title":"BEGIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/transaction/BEGIN"}}'),l=s("785893"),c=s("250065");let i={title:"KILL CONNECTION",language:"zh-CN"},o=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u6740\u6B7B\u4E00\u4E2A\u6307\u5B9A\u8FDE\u63A5 ID \u7684\u8FDE\u63A5\u3002\u8FDB\u800C\u4F1A\u6740\u6B7B\u6B64\u8FDE\u63A5\u5BF9\u5E94\u7684\u67E5\u8BE2\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"KILL [ CONNECTION ] <connection_id>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"<connection_id>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u94FE\u63A5\u7684 ID\u3002\u53EF\u4EE5\u901A\u8FC7 SHOW PROCESSLIST \u8BED\u53E5\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u662F\u6B64\u8FDE\u63A5\u6240\u5C5E\u7684\u7528\u6237\uFF0C\u6216\u8005\u81F3\u5C11\u5177\u6709",(0,l.jsx)(n.code,{children:"ADMIN_PRIV"}),"\u6743\u9650"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.p,{children:["\u67E5\u8BE2 ",(0,l.jsx)(n.code,{children:"connection_id"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show processlist;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n| CurrentConnected | Id | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info             | FE           | CloudCluster |\n+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n| Yes              | 16 | root | 127.0.0.1:63746 | 2024-11-04 20:18:07 | internal | test | Query   | 0    | OK    | e4d69a1cce81468d-91c9ae32b17540e9 | show processlist | 172.16.123.1 | NULL         |\n+------------------+----+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+------------------+--------------+--------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53D1\u9001 KILL \u547D\u4EE4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"KILL CONNECTION 16;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let l={},c=t.createContext(l);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);