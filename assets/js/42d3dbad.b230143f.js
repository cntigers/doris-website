"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["962969"],{16287:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>h,contentTitle:()=>a});var i=JSON.parse('{"id":"admin-manual/system-tables/information_schema/rowsets","title":"rowsets","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/system-tables/information_schema/rowsets.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/rowsets","permalink":"/docs/admin-manual/system-tables/information_schema/rowsets","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"rowsets","language":"en"},"sidebar":"docs","previous":{"title":"routines","permalink":"/docs/admin-manual/system-tables/information_schema/routines"},"next":{"title":"schema_privileges","permalink":"/docs/admin-manual/system-tables/information_schema/schema_privileges"}}'),s=t("785893"),r=t("250065");let d={title:"rowsets",language:"en"},a=void 0,o={},h=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Returns basic information about the Rowset."}),"\n",(0,s.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"information_schema"})}),"\n",(0,s.jsx)(n.h2,{id:"table-information",children:"Table Information"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Column Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BACKEND_ID"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The ID of the Backend, which is a unique identifier for the Backend."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ROWSET_ID"}),(0,s.jsx)(n.td,{children:"varchar(64)"}),(0,s.jsx)(n.td,{children:"The ID of the Rowset, which is a unique identifier for the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLET_ID"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The ID of the Tablet, which is a unique identifier for the Tablet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ROWSET_NUM_ROWS"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The number of data rows contained in the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TXN_ID"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The transaction ID that wrote to the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NUM_SEGMENTS"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The number of Segments contained in the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"START_VERSION"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The starting version number of the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"END_VERSION"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The ending version number of the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_DISK_SIZE"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The storage space for indexes within the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DATA_DISK_SIZE"}),(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"The storage space for data within the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CREATION_TIME"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The creation time of the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NEWEST_WRITE_TIMESTAMP"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"The most recent write time of the Rowset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SCHEMA_VERSION"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The Schema version number of the table corresponding to the Rowset data."})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);