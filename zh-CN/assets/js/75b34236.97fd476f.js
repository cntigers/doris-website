"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["295760"],{417419:function(e,n,t){t.r(n),t.d(n,{default:()=>E,frontMatter:()=>s,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW","title":"CREATE-VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Create","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CREATE-VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-INDEX","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"},"next":{"title":"CREATE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"}}'),i=t("785893"),a=t("250065");let s={title:"CREATE-VIEW",language:"zh-CN"},r=void 0,c={},d=[{value:"CREATE-VIEW",id:"create-view",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"create-view",children:"CREATE-VIEW"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"CREATE VIEW"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u903B\u8F91\u89C6\u56FE\n\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u89C6\u56FE\u4E3A\u903B\u8F91\u89C6\u56FE\uFF0C\u6CA1\u6709\u7269\u7406\u5B58\u50A8\u3002\u6240\u6709\u5728\u89C6\u56FE\u4E0A\u7684\u67E5\u8BE2\u76F8\u5F53\u4E8E\u5728\u89C6\u56FE\u5BF9\u5E94\u7684\u5B50\u67E5\u8BE2\u4E0A\u8FDB\u884C\u3002"}),"\n",(0,i.jsx)(n.li,{children:"query_stmt \u4E3A\u4EFB\u610F\u652F\u6301\u7684 SQL"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728 example_db \u4E0A\u521B\u5EFA\u89C6\u56FE example_view"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5305\u542B comment \u7684 view"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CREATE, VIEW\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var l=t(667294);let i={},a=l.createContext(i);function s(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);