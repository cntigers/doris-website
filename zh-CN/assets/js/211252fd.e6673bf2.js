"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["243471"],{96894:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/types/SHOW-TYPECAST","title":"SHOW TYPECAST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/types/SHOW-TYPECAST.md","sourceDirName":"sql-manual/sql-statements/types","slug":"/sql-manual/sql-statements/types/SHOW-TYPECAST","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/types/SHOW-TYPECAST","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TYPECAST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW DATA TYPES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/types/SHOW-DATA-TYPES"},"next":{"title":"SHOW PROC","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/system-info-and-help/SHOW-PROC"}}'),l=t("785893"),i=t("250065");let r={title:"SHOW TYPECAST",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function T(n){let e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u7C7B\u578B\u8F6C\u6362\u3002"}),"\n",(0,l.jsx)(e.h1,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW TYPE_CAST [ IN | FROM <db>];\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<db>"})]})}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u540D\u79F0"}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Origin Type"}),(0,l.jsx)(e.td,{children:"\u539F\u59CB\u7C7B\u578B"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Cast Type"}),(0,l.jsx)(e.td,{children:"\u8F6C\u6362\u7C7B\u578B"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Select_priv"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5E93\uFF08DB\uFF09"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u5BF9\u4E8E DB \u62E5\u62A4 Select_Priv \u624D\u80FD\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7C7B\u578B\u7684\u8F6C\u6362"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u67E5\u770B\u5BF9\u5E94\u6570\u636E\u5E93\u7684\uFF0C\u5426\u5219\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u67E5\u770B\u6570\u636E\u5E93 TESTDB \u4E0B\u6240\u6709\u7684\u7C7B\u578B\u8F6C\u6362\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW TYPE_CAST IN TESTDB;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------------+----------------+\n| Origin Type    | Cast Type      |\n+----------------+----------------+\n| DATETIMEV2     | BOOLEAN        |\n| DATETIMEV2     | TINYINT        |\n| DATETIMEV2     | SMALLINT       |\n| DATETIMEV2     | INT            |\n| DATETIMEV2     | BIGINT         |\n| DATETIMEV2     | LARGEINT       |\n| DATETIMEV2     | FLOAT          |\n| DATETIMEV2     | DOUBLE         |\n| DATETIMEV2     | DATE           |\n| DATETIMEV2     | DATETIME       |\n| DATETIMEV2     | DATEV2         |\n| DATETIMEV2     | DATETIMEV2     |\n| DATETIMEV2     | DECIMALV2      |\n| DATETIMEV2     | DECIMAL32      |\n| DATETIMEV2     | DECIMAL64      |\n| DATETIMEV2     | DECIMAL128     |\n| DATETIMEV2     | DECIMAL256     |\n| DATETIMEV2     | VARCHAR        |\n| DATETIMEV2     | STRING         |\n| DECIMAL256     | DECIMAL128     |\n| DECIMAL256     | DECIMAL256     |\n| DECIMAL256     | VARCHAR        |\n| DECIMAL256     | STRING         |\n+----------------+----------------+\n"})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(T,{...n})}):T(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);