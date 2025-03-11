"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["9892"],{779252:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/frontends","title":"FRONTENDS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-valued-functions/frontends.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/frontends","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/frontends","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FRONTENDS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BACKENDS","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/backends"},"next":{"title":"FRONTENDS_DISKS","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/frontends_disks"}}'),s=t("785893"),d=t("250065");let l={title:"FRONTENDS",language:"zh-CN"},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210 frontends \u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u5F53\u524D doris \u96C6\u7FA4\u4E2D\u7684 FE \u8282\u70B9\u4FE1\u606F\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"FRONTENDS()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Field"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Name"})}),(0,s.jsx)(e.td,{children:"Frontend \u8282\u70B9\u7684\u552F\u4E00\u540D\u79F0\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Host"})}),(0,s.jsx)(e.td,{children:"Frontend \u8282\u70B9\u7684 IP \u5730\u5740\u6216\u4E3B\u673A\u540D\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"EditLogPort"})}),(0,s.jsx)(e.td,{children:"\u7528\u4E8E\u7F16\u8F91\u65E5\u5FD7\u901A\u4FE1\u7684\u7AEF\u53E3\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"HttpPort"})}),(0,s.jsx)(e.td,{children:"Frontend \u8282\u70B9\u7684 HTTP \u7AEF\u53E3\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"QueryPort"})}),(0,s.jsx)(e.td,{children:"Frontend \u8282\u70B9\u7528\u4E8E\u6267\u884C\u67E5\u8BE2\u7684\u7AEF\u53E3\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"RpcPort"})}),(0,s.jsx)(e.td,{children:"\u7528\u4E8E RPC \u901A\u4FE1\u7684\u7AEF\u53E3\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"ArrowFlightSqlPort"})}),(0,s.jsx)(e.td,{children:"Arrow Flight SQL \u7AEF\u53E3\uFF08\u7528\u4E8E\u4E0E Apache Arrow \u96C6\u6210\uFF0C\u8FDB\u884C\u9AD8\u6027\u80FD\u6570\u636E\u4F20\u8F93\uFF09\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Role"})}),(0,s.jsxs)(e.td,{children:["Frontend \u8282\u70B9\u7684\u89D2\u8272\uFF08\u4F8B\u5982\uFF1A",(0,s.jsx)(e.code,{children:"FOLLOWER"}),"\uFF09\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"IsMaster"})}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8BE5\u8282\u70B9\u662F\u5426\u662F\u4E3B\u8282\u70B9\uFF08True/False\uFF09\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"ClusterId"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u6240\u5C5E\u96C6\u7FA4\u7684\u6807\u8BC6\u7B26\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Join"})}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8BE5 Frontend \u8282\u70B9\u662F\u5426\u5DF2\u7ECF\u52A0\u5165\u96C6\u7FA4\uFF08True/False\uFF09\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Alive"})}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8BE5 Frontend \u8282\u70B9\u662F\u5426\u5B58\u6D3B\uFF08True/False\uFF09\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"ReplayedJournalId"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u6700\u540E\u91CD\u653E\u7684\u65E5\u5FD7 ID\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"LastStartTime"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u6700\u540E\u4E00\u6B21\u542F\u52A8\u7684\u65F6\u95F4\u6233\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"LastHeartbeat"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u63A5\u6536\u5230\u7684\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u65F6\u95F4\u6233\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"IsHelper"})}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8BE5 Frontend \u8282\u70B9\u662F\u5426\u662F\u8F85\u52A9\u8282\u70B9\uFF08True/False\uFF09\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"ErrMsg"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u7684\u9519\u8BEF\u4FE1\u606F\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Version"})}),(0,s.jsx)(e.td,{children:"\u8BE5 Frontend \u8282\u70B9\u7684\u7248\u672C\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"CurrentConnected"})}),(0,s.jsx)(e.td,{children:"\u8868\u793A\u8BE5 Frontend \u8282\u70B9\u5F53\u524D\u662F\u5426\u8FDE\u63A5\u5230\u96C6\u7FA4\uFF08Yes/No\uFF09\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u770B frontends \u96C6\u7FA4\u4FE1\u606F"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select * from frontends();\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------+------------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-------------------------+------------------+\n| Name                                    | Host       | EditLogPort | HttpPort | QueryPort | RpcPort | ArrowFlightSqlPort | Role     | IsMaster | ClusterId | Join | Alive | ReplayedJournalId | LastStartTime       | LastHeartbeat       | IsHelper | ErrMsg | Version                 | CurrentConnected |\n+-----------------------------------------+------------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-------------------------+------------------+\n| fe_f4642d47_62a2_44a2_b79d_3259050ab9de | 10.xx.xx.90 | 9010        | 8030     | 9030      | 9020    | -1               | FOLLOWER | true     | 917153130 | true | true  | 555248            | 2025-01-13 14:11:31 | 2025-01-16 14:27:56 | true     |        | doris-0.0.0--83f899b32b | Yes              |\n+-----------------------------------------+------------+-------------+----------+-----------+---------+--------------------+----------+----------+-----------+------+-------+-------------------+---------------------+---------------------+----------+--------+-------------------------+------------------+\n"})})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);