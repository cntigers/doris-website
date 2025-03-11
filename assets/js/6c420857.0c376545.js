"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["845384"],{715146:function(e,t,a){a.r(t),a.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>s,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"data-operate/update/update-of-aggregate-model","title":"Updating Data on Aggregate Key Model","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/update/update-of-aggregate-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-aggregate-model","permalink":"/docs/3.0/data-operate/update/update-of-aggregate-model","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Updating Data on Aggregate Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Updating Data on Unique Key Model","permalink":"/docs/3.0/data-operate/update/update-of-unique-model"},"next":{"title":"Concurrency Control for Updates in the Primary Key Model","permalink":"/docs/3.0/data-operate/update/unique-update-concurrent-control"}}'),o=a("785893"),r=a("250065");let d={title:"Updating Data on Aggregate Key Model",language:"en"},i=void 0,s={},l=[{value:"Whole Row Update",id:"whole-row-update",level:2},{value:"Partial Column Update of Aggregate Model",id:"partial-column-update-of-aggregate-model",level:2},{value:"Notes on Partial Column Updates",id:"notes-on-partial-column-updates",level:2}];function c(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This document primarily introduces how to update the Doris Aggregate model based on data load."}),"\n",(0,o.jsx)(t.h2,{id:"whole-row-update",children:"Whole Row Update"}),"\n",(0,o.jsx)(t.p,{children:"When loading data into the Aggregate model table using Doris-supported methods such as Stream Load, Broker Load, Routine Load, Insert Into, etc., the new values will be aggregated with the old values according to the column's aggregation function to produce new aggregated values.  This value may be generated at the time of insertion or during asynchronous compaction, but users will get the same return value when querying."}),"\n",(0,o.jsx)(t.h2,{id:"partial-column-update-of-aggregate-model",children:"Partial Column Update of Aggregate Model"}),"\n",(0,o.jsx)(t.p,{children:"The Aggregate table is mainly used in pre-aggregation scenarios rather than data update scenarios, but partial column updates can be achieved by setting the aggregation function to REPLACE_IF_NOT_NULL."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Create Table"})}),"\n",(0,o.jsxs)(t.p,{children:["Set the aggregation function of the fields that need to be updated to ",(0,o.jsx)(t.code,{children:"REPLACE_IF_NOT_NULL"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE order_tbl (\n  order_id int(11) NULL,\n  order_amount int(11) REPLACE_IF_NOT_NULL NULL,\n  order_status varchar(100) REPLACE_IF_NOT_NULL NULL\n) ENGINE=OLAP\nAGGREGATE KEY(order_id)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(order_id) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Data Insertion"})}),"\n",(0,o.jsxs)(t.p,{children:["Whether it is Stream Load, Broker Load, Routine Load, or ",(0,o.jsx)(t.code,{children:"INSERT INTO"}),", directly write the data of the fields to be updated."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example"})}),"\n",(0,o.jsx)(t.p,{children:"Similar to the previous examples, the corresponding Stream Load command is (no additional header required):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'$ cat update.csv\n\n1,To be shipped\n\ncurl  --location-trusted -u root: -H "column_separator:," -H "columns:order_id,order_status" -T ./update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The corresponding ",(0,o.jsx)(t.code,{children:"INSERT INTO"})," statement is (no additional session variable settings required):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"INSERT INTO order_tbl (order_id, order_status) values (1,'Shipped');\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes-on-partial-column-updates",children:"Notes on Partial Column Updates"}),"\n",(0,o.jsx)(t.p,{children:"The Aggregate Key model does not perform any additional processing during the write process, so the write performance is not affected and is the same as normal data load. However, the cost of aggregation during query is relatively high, and the typical aggregation query performance is 5-10 times lower than the Merge-on-Write implementation of the Unique Key model."}),"\n",(0,o.jsxs)(t.p,{children:["Since the ",(0,o.jsx)(t.code,{children:"REPLACE_IF_NOT_NULL"})," aggregation function only takes effect when the value is not NULL, users cannot change a field value to NULL."]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return i},a:function(){return d}});var n=a(667294);let o={},r=n.createContext(o);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);