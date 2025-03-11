"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["402684"],{755601:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","title":"SHOW-CATALOG-RECYCLE-BIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-CATALOG-RECYCLE-BIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-STORAGE-POLICY-USING","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-STORAGE-POLICY-USING"},"next":{"title":"SHOW-QUERY-STATS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS"}}'),s=t("785893"),r=t("250065");let i={title:"SHOW-CATALOG-RECYCLE-BIN",language:"zh-CN"},a=void 0,c={},o=[{value:"SHOW-CATALOG-RECYCLE-BIN",id:"show-catalog-recycle-bin",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"show-catalog-recycle-bin",children:"SHOW-CATALOG-RECYCLE-BIN"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,s.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u81EA Apache Doris  1.2 \u7248\u672C\u8D77\u652F\u6301"})}),"\n",(0,s.jsx)(n.p,{children:"SHOW CATALOG RECYCLE BIN"}),"\n",(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u56DE\u6536\u7AD9\u4E2D\u53EF\u56DE\u6536\u7684\u5E93\uFF0C\u8868\u6216\u5206\u533A\u5143\u6570\u636E\u4FE1\u606F"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u5404\u5217\u542B\u4E49\u5982\u4E0B\uFF1A\n        Type\uFF1A                \u5143\u6570\u636E\u7C7B\u578B:Database\u3001Table\u3001Partition\n        Name\uFF1A                \u5143\u6570\u636E\u540D\u79F0		\n        DbId\uFF1A                database\u5BF9\u5E94\u7684id\n        TableId\uFF1A             table\u5BF9\u5E94\u7684id\n        PartitionId\uFF1A         partition\u5BF9\u5E94\u7684id\n        DropTime\uFF1A            \u5143\u6570\u636E\u653E\u5165\u56DE\u6536\u7AD9\u7684\u65F6\u95F4\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C55\u793A\u6240\u6709\u56DE\u6536\u7AD9\u5143\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C55\u793A\u56DE\u6536\u7AD9\u4E2D\u540D\u79F0'test'\u7684\u5143\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, CATALOG RECYCLE BIN\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);