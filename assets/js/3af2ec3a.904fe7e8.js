"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["421951"],{835570:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"table-design/index/bitmap-index","title":"Bitmap Index","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/table-design/index/bitmap-index.md","sourceDirName":"table-design/index","slug":"/table-design/index/bitmap-index","permalink":"/docs/2.0/table-design/index/bitmap-index","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Bitmap Index","language":"en"}}'),a=i("785893"),l=i("250065");let s={title:"Bitmap Index",language:"en"},d=void 0,r={},c=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Inapplicable scenarios",id:"inapplicable-scenarios",level:3},{value:"Creating bitmap index",id:"creating-bitmap-index",level:3},{value:"Viewing bitmap index",id:"viewing-bitmap-index",level:2},{value:"Deleting index",id:"deleting-index",level:3},{value:"Notes:",id:"notes",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Bitmap Index is an index represented by bitmaps, where a bitmap is created for each key value in a column. Compared to other indexes, it occupies very little storage space and is very fast to create and use. However, it has a disadvantage of having a large lock granularity for modification operations, making it unsuitable for frequent updates."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"bitmap index",src:i(443574).Z+"",width:"2560",height:"896"})}),"\n",(0,a.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Columns with high value repetition, recommended to be between 100 and 100,000, such as occupation, city, etc. If the repetition is too high, there is no significant advantage compared to other types of indexes; if the repetition is too low, space efficiency and performance will be greatly reduced."}),"\n",(0,a.jsxs)(n.li,{children:["Specific types of queries such as ",(0,a.jsx)(n.code,{children:"count"}),", ",(0,a.jsx)(n.code,{children:"or"}),", ",(0,a.jsx)(n.code,{children:"and"})," logical operations that only require bitwise operations. For example: querying with multiple conditions combined, ",(0,a.jsx)(n.code,{children:"select count(*) from table where city = 'Nanjing' and job = 'Doctor' and phonetype = 'iphone' and gender = 'Male'."})," If bitmap indexes are established on each query condition column, the database can perform efficient bit operations, accurately locate the required data, reduce disk IO, and the smaller the filtered result set, the more obvious the advantage of bitmap indexes."]}),"\n",(0,a.jsx)(n.li,{children:"Suitable for ad-hoc queries, multi-dimensional analysis, and other analytical scenarios. If a table has 100 columns and users use 20 of them as query conditions (arbitrarily using several columns from these 20 columns), creating 20 bitmap indexes on these columns will allow all queries to utilize the indexes."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"inapplicable-scenarios",children:"Inapplicable scenarios"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Columns with low value repetition, such as ID cards, phone numbers, etc."}),"\n",(0,a.jsx)(n.li,{children:"Columns with excessively high repetition, such as gender. Although bitmap indexes can be established, it is not recommended to use them as query conditions alone. It is recommended to filter them together with other conditions."}),"\n",(0,a.jsx)(n.li,{children:"Columns that often need to be updated."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"creating-bitmap-index",children:"Creating bitmap index"}),"\n",(0,a.jsx)(n.p,{children:"Creating a bitmap index named index_name on the column siteid in the table named table_name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"viewing-bitmap-index",children:"Viewing bitmap index"}),"\n",(0,a.jsx)(n.p,{children:"Displaying indexes under the specified table_name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW INDEX FROM table_name;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deleting-index",children:"Deleting index"}),"\n",(0,a.jsx)(n.p,{children:"Deleting the index named index_name under the specified table_name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"DROP INDEX [IF EXISTS] index_name ON table_name;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"notes",children:"Notes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Bitmap indexes are only created on single columns."}),"\n",(0,a.jsx)(n.li,{children:"Bitmap indexes can be applied to all columns in Duplicate and Uniq data models and key columns in the Aggregate model."}),"\n",(0,a.jsxs)(n.li,{children:["The data types supported by bitmap indexes are as follows:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"TINYINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SMALLINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"INT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"BIGINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"CHAR"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"VARCHAR"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DATE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DATETIME"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"LARGEINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DECIMAL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"BOOL"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},443574:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bitmap-index-example-692794948b22e3105c1171ed819766fc.png"},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var t=i(667294);let a={},l=t.createContext(a);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);