"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["700664"],{24256:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>i,contentTitle:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/query","title":"QUERY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-valued-functions/query.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/query","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/query","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"QUERY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LOCAL","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/local"},"next":{"title":"ICEBERG_META","permalink":"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/iceberg-meta"}}'),s=l("785893"),c=l("250065");let a={title:"QUERY",language:"zh-CN"},r=void 0,d={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570",id:"\u5FC5\u586B\u53C2\u6570",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"query \u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u7528\u4E8E\u5C06\u67E5\u8BE2\u8BED\u53E5\u76F4\u63A5\u900F\u4F20\u5230\u67D0\u4E2A catalog \u8FDB\u884C\u6570\u636E\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.p,{children:"Doris 2.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF0C\u5F53\u524D\u4EC5\u652F\u6301\u900F\u4F20\u67E5\u8BE2 jdbc catalog\u3002\n\u9700\u8981\u5148\u5728 Doris \u4E2D\u521B\u5EFA\u5BF9\u5E94\u7684 catalog\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'QUERY(\n    "catalog" = "<catalog>", \n    "query" = "<query_sql>"\n  );\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u586B\u53C2\u6570",children:"\u5FC5\u586B\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:["query \u8868\u51FD\u6570 tvf \u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:'"key"="value"'})," \u5BF9"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5B57\u6BB5"}),(0,s.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"catalog"})}),(0,s.jsx)(n.td,{children:"catalog \u540D\u79F0\uFF0C\u9700\u8981\u6309\u7167 catalog \u7684\u540D\u79F0\u586B\u5199"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"query"})}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u6267\u884C\u7684\u67E5\u8BE2\u8BED\u53E5"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408",(0,s.jsx)(n.code,{children:"desc function"}),"\u4F7F\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'desc function query("catalog" = "jdbc", "query" = "select * from test.student");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | int  | Yes  | true  | NULL    |       |\n| name  | text | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u900F\u4F20\u67E5\u8BE2 jdbc catalog \u6570\u636E\u6E90\u4E2D\u7684\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select * from test.student");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+---------+\n| id   | name    |\n+------+---------+\n| 1    | alice   |\n| 2    | bob     |\n| 3    | jack    |\n+------+---------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select * from test.score");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+---------+\n| id   | score   |\n+------+---------+\n| 1    | 100     |\n| 2    | 90      |\n| 3    | 80      |\n+------+---------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u900F\u4F20\u5173\u8054\u67E5\u8BE2 jdbc catalog \u6570\u636E\u6E90\u4E2D\u7684\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select * from query("catalog" = "jdbc", "query" = "select a.id, a.name, b.score from test.student a join test.score b on a.id = b.id");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"+------+---------+---------+\n| id   | name    | score   |\n+------+---------+---------+\n| 1    | alice   | 100     |\n| 2    | bob     | 90      |\n| 3    | jack    | 80      |\n+------+---------+---------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return a}});var t=l(667294);let s={},c=t.createContext(s);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);