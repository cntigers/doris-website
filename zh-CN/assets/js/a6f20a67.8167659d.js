"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["609357"],{387124:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/collations","title":"collations","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/information_schema/collations.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/collations","permalink":"/zh-CN/docs/admin-manual/system-tables/information_schema/collations","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"collations","language":"zh-CN"},"sidebar":"docs","previous":{"title":"character_sets","permalink":"/zh-CN/docs/admin-manual/system-tables/information_schema/character_sets"},"next":{"title":"column_privileges","permalink":"/zh-CN/docs/admin-manual/system-tables/information_schema/column_privileges"}}'),s=n("785893"),i=n("250065");let r={title:"collations",language:"zh-CN"},a=void 0,d={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function o(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u770B\u6240\u6709\u5B57\u7B26\u96C6\u7684\u6392\u5E8F\u65B9\u6CD5\u3002\u6B64\u8868\u4EC5\u7528\u4E8E\u517C\u5BB9 MySQL \u884C\u4E3A\u3002\u6CA1\u6709\u5B9E\u9645\u7684\u610F\u4E49\u3002\u4E0D\u80FD\u771F\u5B9E\u53CD\u6620 Doris \u6240\u4F7F\u7528\u7684\u5B57\u7B26\u6392\u5E8F\u65B9\u6CD5\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"COLLATION_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(512)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5B57\u7B26\u96C6\u6392\u5E8F\u65B9\u6CD5\u540D\u79F0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CHARACTER_SET_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6240\u5C5E\u7684\u5B57\u7B26\u96C6\u540D\u79F0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6392\u5E8F\u65B9\u6CD5 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"IS_DEFAULT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662F\u5426\u4E3A\u5F53\u524D\u9ED8\u8BA4\u7684\u6392\u5E8F\u65B9\u6CD5\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"IS_COMPILED"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662F\u5426\u7F16\u8BD1\u5230\u670D\u52A1\u4E2D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SORTLEN"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4E0E\u4F7F\u7528\u6B64\u79CD\u6392\u5E8F\u7B97\u6CD5\u4F7F\u7528\u7684\u5185\u5B58\u76F8\u5173"})]})]})]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(o,{...t})}):o(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return a},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);