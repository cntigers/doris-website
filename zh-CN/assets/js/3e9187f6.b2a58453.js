"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["9253"],{165812:function(t,e,n){n.r(e),n.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>l,assets:()=>x,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/partitions","title":"partitions","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/partitions.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/partitions","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/partitions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"partitions","language":"zh-CN"},"sidebar":"docs","previous":{"title":"parameters","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/parameters"},"next":{"title":"processlist","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/processlist"}}'),s=n("785893"),i=n("250065");let r={title:"partitions",language:"zh-CN"},d=void 0,x={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function h(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E2D\u6240\u6709\u8868\u7684 Partition \u60C5\u51B5\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TABLE_CATALOG"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Catalog \u540D\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TABLE_SCHEMA"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Database \u540D\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TABLE_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Table \u540D\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Partition \u540D\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBPARTITION_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6C38\u8FDC\u4E3A\u7A7A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_ORDINAL_POSITION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Partition \u7684\u5E8F\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBPARTITION_ORDINAL_POSITION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6C38\u8FDC\u4E3A\u7A7A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_METHOD"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(13)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Partition \u7684\u5206\u533A\u65B9\u6CD5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBPARTITION_METHOD"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(13)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6C38\u8FDC\u4E3A\u7A7A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_EXPRESSION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(2048)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Partition \u7684\u8868\u8FBE\u5F0F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBPARTITION_EXPRESSION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(2048)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6C38\u8FDC\u4E3A\u7A7A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_DESCRIPTION"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Parititon \u7684\u63CF\u8FF0\u4FE1\u606F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TABLE_ROWS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"AVG_ROW_LENGTH"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATA_LENGTH"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX_DATA_LENGTH"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"INDEX_LENGTH"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATA_FREE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CREATE_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"UPDATE_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"datetime"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CHECK_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"datetime"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CHECKSUM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"PARTITION_COMMENT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NODEGROUP"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TABLESPACE_NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(268)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}})]})]})]})]})}function a(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return d},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);