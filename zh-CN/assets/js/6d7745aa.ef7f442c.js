"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["420101"],{299395:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>x,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/triggers","title":"triggers","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/triggers.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/triggers","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/triggers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"triggers","language":"zh-CN"},"sidebar":"docs","previous":{"title":"tables","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/tables"},"next":{"title":"user_privileges","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/user_privileges"}}'),s=n("785893"),i=n("250065");let r={title:"triggers",language:"zh-CN"},d=void 0,x={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function a(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u6B64\u8868\u4EC5\u7528\u4E8E\u517C\u5BB9 MySQL \u884C\u4E3A\u3002\u6C38\u8FDC\u4E3A\u7A7A\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TRIGGER_CATALOG"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(512)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TRIGGER_SCHEMA"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TRIGGER_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EVENT_MANIPULATION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(6)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EVENT_OBJECT_CATALOG"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(512)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EVENT_OBJECT_SCHEMA"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EVENT_OBJECT_TABLE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_ORDER"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(4)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_CONDITION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(512)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_STATEMENT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(512)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_ORIENTATION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(9)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_TIMING"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(6)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_REFERENCE_OLD_TABLE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_REFERENCE_NEW_TABLE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_REFERENCE_OLD_ROW"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(3)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ACTION_REFERENCE_NEW_ROW"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(3)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CREATED"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"datetime"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SQL_MODE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(8192)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DEFINER"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(77)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CHARACTER_SET_CLIENT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(32)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"COLLATION_CONNECTION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(32)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATABASE_COLLATION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(32)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]})]})]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return d},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);