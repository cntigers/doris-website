"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["356374"],{494747:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"table-design/row-store","title":"Hybrid Row-Columnar Storage","description":"\x3c!--","source":"@site/docs/table-design/row-store.md","sourceDirName":"table-design","slug":"/table-design/row-store","permalink":"/docs/dev/table-design/row-store","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Hybrid Row-Columnar Storage","language":"en"},"sidebar":"docs","previous":{"title":"Remote Storage","permalink":"/docs/dev/table-design/tiered-storage/remote-storage"},"next":{"title":"Best Practices","permalink":"/docs/dev/table-design/best-practice"}}'),t=n("785893"),a=n("250065");let s={title:"Hybrid Row-Columnar Storage",language:"en"},i=void 0,l={},c=[{value:"Hybrid Row-Columnar Storage",id:"hybrid-row-columnar-storage",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Notice",id:"notice",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"hybrid-row-columnar-storage",children:"Hybrid Row-Columnar Storage"}),"\n",(0,t.jsxs)(r.p,{children:["Doris uses columnar storage by default, with each column stored contiguously. Columnar storage offers excellent performance for analytical scenarios (such as aggregation, filtering, sorting, etc.), as it only reads the necessary columns, reducing unnecessary IO. However, in point query scenarios (such as ",(0,t.jsx)(r.code,{children:"SELECT *"}),"), all columns need to be read, requiring an IO operation for each column, which can lead to IOPS becoming a bottleneck, especially for wide tables with many columns (e.g., hundreds of columns)."]}),"\n",(0,t.jsxs)(r.p,{children:["To address the IOPS bottleneck in point query scenarios, starting from version 2.0.0, Doris supports Hybrid Row-Columnar Storage. When users create tables, they can specify whether to enable row storage. With row storage enabled, each row only requires one IO operation for point queries (such as ",(0,t.jsx)(r.code,{children:"SELECT *"}),"), significantly improving performance."]}),"\n",(0,t.jsx)(r.p,{children:"The principle of row storage is that an additional column is added during storage. This column concatenates all the columns of the corresponding row and stores them using a special binary format."}),"\n",(0,t.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.p,{children:"When creating a table, specify whether to enable row storage, which columns to enable row storage for, and the storage compression unit size page_size in the table's PROPERTIES."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Whether to enable row storage: defaults to false (not enabled)."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"store_row_column" = "true"\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsxs)(r.li,{children:["Which columns to enable row storage for:if ",(0,t.jsx)(r.code,{children:'"store_row_column" = "true"'}),", all columns are enabled by default. If you need to specify that only some columns are enabled for row storage, set the row_store_columns parameter, formatted as a comma-separated list of column names."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"row_store_columns" = "column1,column2,column3"\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"Row storage page_size: defaults to 16KB."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"row_store_page_size" = "16384"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["A page is the smallest unit for storage read and write operations, and ",(0,t.jsx)(r.code,{children:"page_size"})," refers to the size of a row-store page. This means that reading a single row requires generating a page IO. The larger this value is, the better the compression effect and the lower the storage space usage. However, the IO overhead during point queries increases, resulting in lower performance (because each IO operation reads at least one page). Conversely, the smaller the value, the higher the storage space usage and the better the performance for point queries. The default value of 16KB is a balanced choice in most cases. If you prioritize query performance, you can configure a smaller value, such as 4KB or even lower. If you prioritize storage space, you can configure a larger value, such as 64KB or even higher."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:'The example below creates an 8-column table, where "key,v1,v3,v5,v7" are the 5 columns enabled for row storage. To optimize for high-concurrency point query performance, the page_size is configured to 4KB.'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'CREATE TABLE `tbl_point_query` (\n     `key` int(11) NULL,\n     `v1` decimal(27, 9) NULL,\n     `v2` varchar(30) NULL,\n     `v3` varchar(30) NULL,\n     `v4` date NULL,\n     `v5` datetime NULL,\n     `v6` float NULL,\n     `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n     "enable_unique_key_merge_on_write" = "true",\n     "light_schema_change" = "true",\n     "row_store_columns" = "key,v1,v3,v5,v7",\n     "row_store_page_size" = "4096"\n);\n'})}),"\n",(0,t.jsx)(r.p,{children:"Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"SELECT key, v1, v3, v5, v7 FROM tbl_point_query WHERE key = 100\uFF1B\n"})}),"\n",(0,t.jsxs)(r.p,{children:["For more information on point query usage, please refer to ",(0,t.jsx)(r.a,{href:"../query-acceleration/high-concurrent-point-query",children:"High-Concurrent Point Query"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"notice",children:"Notice"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Enabling row storage will increase the storage space used. The increase in storage space is related to the data characteristics and is generally 2 to 10 times the size of the original table. The exact space usage needs to be tested with actual data."}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"page_size"})," of row storage also affects the storage space. You can adjust it based on the previous table attribute parameter ",(0,t.jsx)(r.code,{children:"row_store_page_size"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return s}});var o=n(667294);let t={},a=o.createContext(t);function s(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);