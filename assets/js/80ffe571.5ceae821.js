"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["680398"],{574147:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"data-operate/update/update-of-unique-model","title":"Updating Data on Unique Key Model","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/update/update-of-unique-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-unique-model","permalink":"/docs/3.0/data-operate/update/update-of-unique-model","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Updating Data on Unique Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Updating Data with UPDATE Command","permalink":"/docs/3.0/data-operate/update/unique-update"},"next":{"title":"Updating Data on Aggregate Key Model","permalink":"/docs/3.0/data-operate/update/update-of-aggregate-model"}}'),i=t("785893"),r=t("250065");let o={title:"Updating Data on Unique Key Model",language:"en"},s=void 0,l={},d=[{value:"Whole Row Update",id:"whole-row-update",level:2},{value:"Partial Column Update",id:"partial-column-update",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Partial Column Update Using Load Methods",id:"partial-column-update-using-load-methods",level:4},{value:"Update Result",id:"update-result",level:4},{value:"Usage Notes",id:"usage-notes",level:3}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document introduces how to update data in the Doris unique key model using various load methods."}),"\n",(0,i.jsx)(n.h2,{id:"whole-row-update",children:"Whole Row Update"}),"\n",(0,i.jsx)(n.p,{children:'When loading data into the unique key model using Doris-supported methods like Stream Load, Broker Load, Routine Load, Insert Into, etc., new data is inserted if there is no existing primary key data row. If there is an existing primary key data row, it is updated. This means the load operation in the Doris unique key model works in an "upsert" mode. The process of updating existing records is the same as loading new records by default, so you can refer to the data load documentation for more details.'}),"\n",(0,i.jsx)(n.h2,{id:"partial-column-update",children:"Partial Column Update"}),"\n",(0,i.jsx)(n.p,{children:"Partial column update allows you to update specific fields in a table without modifying all fields. You can use the Update statement to perform this operation, which typically involves reading the entire row, updating the desired fields, and writing it back. This read-write transaction is time-consuming and not suitable for large-scale data writing. Doris provides a feature to directly insert or update partial column data in the unique key model load update, bypassing the need to read the entire row first, thus significantly improving update efficiency."}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Version 2.0 only supports partial column updates in the Merge-on-Write implementation of the Unique Key."}),"\n",(0,i.jsx)(n.li,{children:"Starting from version 2.0.2, partial column updates are supported using INSERT INTO."}),"\n",(0,i.jsx)(n.li,{children:"Partial column updates are not supported on tables with synchronized materialized views."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Real-time dynamic column updates, requiring frequent updates of specific fields in the table. For example, updating fields related to the latest user behavior in a user tag table for real-time analysis and decision-making in advertising/recommendation systems."}),"\n",(0,i.jsx)(n.li,{children:"Merging multiple source tables into one large wide table."}),"\n",(0,i.jsx)(n.li,{children:"Data correction."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsxs)(n.p,{children:["Assume there is an order table ",(0,i.jsx)(n.code,{children:"order_tbl"})," in Doris, where the order id is the Key column, and the order status and order amount are the Value columns. The data status is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Order id"}),(0,i.jsx)(n.th,{children:"Order Amount"}),(0,i.jsx)(n.th,{children:"Order Status"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"Pending Payment"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | Pending Payment |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"After the user clicks to pay, the Doris system needs to change the order status of the order with order id '1' to 'Pending Shipment'."}),"\n",(0,i.jsx)(n.h4,{id:"partial-column-update-using-load-methods",children:"Partial Column Update Using Load Methods"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"StreamLoad/BrokerLoad/RoutineLoad"})}),"\n",(0,i.jsx)(n.p,{children:"Prepare the following CSV file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1,Pending Shipment\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following header during load:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"partial_columns:true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the columns to be loaded in ",(0,i.jsx)(n.code,{children:"columns"})," (must include all key columns). Below is an example of Stream Load:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"INSERT INTO"})}),"\n",(0,i.jsxs)(n.p,{children:["In all data models, the default behavior of ",(0,i.jsx)(n.code,{children:"INSERT INTO"})," when given partial columns is to write the entire row. To prevent misuse, in the Merge-on-Write implementation, ",(0,i.jsx)(n.code,{children:"INSERT INTO"})," maintains the semantics of whole row UPSERT by default. To enable partial column updates, set the following session variable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) VALUES (1, 'Pending Shipment');\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the session variable ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," defaults to true, enabling strict mode by default. In strict mode, partial column updates do not allow updating non-existent keys. To insert non-existent keys using the insert statement for partial column updates, set ",(0,i.jsx)(n.code,{children:"enable_unique_key_partial_update"})," to true and ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," to false."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flink Connector"})}),"\n",(0,i.jsx)(n.p,{children:"If using Flink Connector, add the following configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"'sink.properties.partial_columns' = 'true',\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the columns to be loaded in ",(0,i.jsx)(n.code,{children:"sink.properties.column"})," (must include all key columns)."]}),"\n",(0,i.jsx)(n.h4,{id:"update-result",children:"Update Result"}),"\n",(0,i.jsx)(n.p,{children:"The result after the update is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | Pending Shipment |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(n.p,{children:"Since the Merge-on-Write implementation needs to complete the entire row of data during writing to ensure optimal query performance, using it for partial column updates may decrease partial load performance."}),"\n",(0,i.jsx)(n.p,{children:"Performance optimization suggestions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use SSDs equipped with NVMe or high-speed SSD cloud disks, as completing data will read a large amount of historical data, generating high read IOPS and throughput."}),"\n",(0,i.jsx)(n.li,{children:"Enabling row storage can reduce the IOPS generated when completing data, significantly improving load performance. Enable row storage by setting the following property when creating a table:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'"store_row_column" = "true"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Currently, all rows in the same batch data writing task (whether a load task or ",(0,i.jsx)(n.code,{children:"INSERT INTO"}),") can only update the same columns. To update data with different columns, write in different batches."]}),"\n",(0,i.jsx)(n.p,{children:"Future versions will support flexible column updates, allowing users to update different columns for each row in the same batch load."})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(667294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);