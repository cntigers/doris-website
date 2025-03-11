"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["329428"],{396409:function(e,l,n){n.r(l),n.d(l,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>r,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE","title":"ALTER TABLE REPLACE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER TABLE REPLACE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER TABLE RENAME","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME"},"next":{"title":"ALTER TABLE PROPERTY","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PROPERTY"}}'),t=n("785893"),d=n("250065");let i={title:"ALTER TABLE REPLACE",language:"zh-CN"},c=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u539F\u7406",id:"\u539F\u7406",level:4},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:4},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function h(e){let l={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(l.p,{children:"\u5BF9\u4E24\u4E2A\u8868\u8FDB\u884C\u539F\u5B50\u7684\u66FF\u6362\u64CD\u4F5C\u3002\u8BE5\u64CD\u4F5C\u4EC5\u9002\u7528\u4E8E OLAP \u8868\u3002"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sql",children:"ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n"})}),"\n",(0,t.jsx)(l.p,{children:"\u5C06\u8868 tbl1 \u66FF\u6362\u4E3A\u8868 tbl2\u3002"}),"\n",(0,t.jsxs)(l.p,{children:["\u5982\u679C ",(0,t.jsx)(l.code,{children:"swap"})," \u53C2\u6570\u4E3A ",(0,t.jsx)(l.code,{children:"true"}),"\uFF0C\u5219\u66FF\u6362\u540E\uFF0C\u540D\u79F0\u4E3A ",(0,t.jsx)(l.code,{children:"tbl1"})," \u8868\u4E2D\u7684\u6570\u636E\u4E3A\u539F ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8868\u4E2D\u7684\u6570\u636E\u3002\u800C\u540D\u79F0\u4E3A ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8868\u4E2D\u7684\u6570\u636E\u4E3A\u539F ",(0,t.jsx)(l.code,{children:"tbl1"})," \u8868\u4E2D\u7684\u6570\u636E\u3002\u5373\u4E24\u5F20\u8868\u6570\u636E\u53D1\u751F\u4E86\u4E92\u6362\u3002"]}),"\n",(0,t.jsxs)(l.p,{children:["\u5982\u679C ",(0,t.jsx)(l.code,{children:"swap"})," \u53C2\u6570\u4E3A ",(0,t.jsx)(l.code,{children:"false"}),"\uFF0C\u5219\u66FF\u6362\u540E\uFF0C\u540D\u79F0\u4E3A ",(0,t.jsx)(l.code,{children:"tbl1"})," \u8868\u4E2D\u7684\u6570\u636E\u4E3A\u539F ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8868\u4E2D\u7684\u6570\u636E\u3002\u800C\u540D\u79F0\u4E3A ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8868\u88AB\u5220\u9664\u3002"]}),"\n",(0,t.jsx)(l.h4,{id:"\u539F\u7406",children:"\u539F\u7406"}),"\n",(0,t.jsx)(l.p,{children:"\u66FF\u6362\u8868\u529F\u80FD\uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u4EE5\u4E0B\u64CD\u4F5C\u96C6\u5408\u53D8\u6210\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\u3002"}),"\n",(0,t.jsxs)(l.p,{children:["\u5047\u8BBE\u8981\u5C06\u8868 A \u66FF\u6362\u4E3A\u8868 B\uFF0C\u4E14 ",(0,t.jsx)(l.code,{children:"swap"})," \u4E3A ",(0,t.jsx)(l.code,{children:"true"}),"\uFF0C\u5219\u64CD\u4F5C\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsx)(l.li,{children:"\u5C06\u8868 B \u91CD\u540D\u4E3A\u8868 A\u3002"}),"\n",(0,t.jsx)(l.li,{children:"\u5C06\u8868 A \u91CD\u540D\u4E3A\u8868 B\u3002"}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["\u5982\u679C ",(0,t.jsx)(l.code,{children:"swap"})," \u4E3A ",(0,t.jsx)(l.code,{children:"false"}),"\uFF0C\u5219\u64CD\u4F5C\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsx)(l.li,{children:"\u5220\u9664\u8868 A\u3002"}),"\n",(0,t.jsx)(l.li,{children:"\u5C06\u8868 B \u91CD\u540D\u4E3A\u8868 A\u3002"}),"\n"]}),"\n",(0,t.jsx)(l.h4,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"swap"})," \u53C2\u6570\u9ED8\u8BA4\u4E3A ",(0,t.jsx)(l.code,{children:"true"}),"\u3002\u5373\u66FF\u6362\u8868\u64CD\u4F5C\u76F8\u5F53\u4E8E\u5C06\u4E24\u5F20\u8868\u6570\u636E\u8FDB\u884C\u4EA4\u6362\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:["\u5982\u679C\u8BBE\u7F6E ",(0,t.jsx)(l.code,{children:"swap"})," \u53C2\u6570\u4E3A ",(0,t.jsx)(l.code,{children:"false"}),"\uFF0C\u5219\u88AB\u66FF\u6362\u7684\u8868\uFF08\u8868 A\uFF09\u5C06\u88AB\u5220\u9664\uFF0C\u4E14\u65E0\u6CD5\u6062\u590D\u3002"]}),"\n",(0,t.jsx)(l.li,{children:"\u66FF\u6362\u64CD\u4F5C\u4EC5\u80FD\u53D1\u751F\u5728\u4E24\u5F20 OLAP \u8868\u4E4B\u95F4\uFF0C\u4E14\u4E0D\u4F1A\u68C0\u67E5\u4E24\u5F20\u8868\u7684\u8868\u7ED3\u6784\u662F\u5426\u4E00\u81F4\u3002"}),"\n",(0,t.jsx)(l.li,{children:"\u66FF\u6362\u64CD\u4F5C\u4E0D\u4F1A\u6539\u53D8\u539F\u6709\u7684\u6743\u9650\u8BBE\u7F6E\u3002\u56E0\u4E3A\u6743\u9650\u68C0\u67E5\u4EE5\u8868\u540D\u79F0\u4E3A\u51C6\u3002"}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["\u5C06 ",(0,t.jsx)(l.code,{children:"tbl1"})," \u4E0E ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8FDB\u884C\u539F\u5B50\u4EA4\u6362\uFF0C\u4E0D\u5220\u9664\u4EFB\u4F55\u8868\uFF08\u6CE8\uFF1A\u5982\u679C\u5220\u9664\u7684\u8BDD\uFF0C\u5B9E\u9645\u4E0A\u5220\u9664\u7684\u662F tbl1\uFF0C\u53EA\u662F\u5C06 tbl2 \u91CD\u547D\u540D\u4E3A tbl1\u3002\uFF09"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2;\n"})}),"\n",(0,t.jsx)(l.p,{children:"\u6216"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2 PROPERTIES('swap' = 'true') ;\n"})}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["\u5C06 ",(0,t.jsx)(l.code,{children:"tbl1"})," \u4E0E ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8FDB\u884C\u4EA4\u6362\uFF0C\u5220\u9664 ",(0,t.jsx)(l.code,{children:"tbl2"})," \u8868\uFF08\u4FDD\u7559\u540D\u4E3A",(0,t.jsx)(l.code,{children:"tbl1"}),",\u6570\u636E\u4E3A",(0,t.jsx)(l.code,{children:"tbl2"}),"\u7684\u8868\uFF09"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2 PROPERTIES('swap' = 'false') ;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(l.p,{children:"ALTER, TABLE, REPLACE, ALTER TABLE"}),"\n",(0,t.jsx)(l.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"\u539F\u5B50\u7684\u8986\u76D6\u5199\u64CD\u4F5C"}),"\n",(0,t.jsxs)(l.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5E0C\u671B\u80FD\u591F\u91CD\u5199\u67D0\u5F20\u8868\u7684\u6570\u636E\uFF0C\u4F46\u5982\u679C\u91C7\u7528\u5148\u5220\u9664\u518D\u5BFC\u5165\u7684\u65B9\u5F0F\u8FDB\u884C\uFF0C\u5728\u4E2D\u95F4\u4F1A\u6709\u4E00\u6BB5\u65F6\u95F4\u65E0\u6CD5\u67E5\u770B\u6570\u636E\u3002\u8FD9\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5148\u4F7F\u7528 ",(0,t.jsx)(l.code,{children:"CREATE TABLE LIKE"})," \u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u76F8\u540C\u7ED3\u6784\u7684\u65B0\u8868\uFF0C\u5C06\u65B0\u7684\u6570\u636E\u5BFC\u5165\u5230\u65B0\u8868\u540E\uFF0C\u901A\u8FC7\u66FF\u6362\u64CD\u4F5C\uFF0C\u539F\u5B50\u7684\u66FF\u6362\u65E7\u8868\uFF0C\u4EE5\u8FBE\u5230\u76EE\u7684\u3002\u5206\u533A\u7EA7\u522B\u7684\u539F\u5B50\u8986\u76D6\u5199\u64CD\u4F5C\uFF0C\u8BF7\u53C2\u9605 ",(0,t.jsx)(l.a,{href:"../../../../data-operate/delete/table-temp-partition",children:"\u4E34\u65F6\u5206\u533A\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:l}={...(0,d.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,l,n){n.d(l,{Z:function(){return c},a:function(){return i}});var s=n(667294);let t={},d=s.createContext(t);function i(e){let l=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);