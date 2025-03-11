"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["324178"],{21730:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"table-design/column-compression","title":"Column Compression","description":"\x3c!--","source":"@site/docs/table-design/column-compression.md","sourceDirName":"table-design","slug":"/table-design/column-compression","permalink":"/docs/dev/table-design/column-compression","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Column Compression","language":"en_US"},"sidebar":"docs","previous":{"title":"Data Types","permalink":"/docs/dev/table-design/data-type"},"next":{"title":"Index Overview","permalink":"/docs/dev/table-design/index/index-overview"}}'),o=n("785893"),r=n("250065");let t={title:"Column Compression",language:"en_US"},a=void 0,c={},d=[{value:"Why Compression is Needed",id:"why-compression-is-needed",level:2},{value:"Supported Compression Algorithms",id:"supported-compression-algorithms",level:2},{value:"Compression Principles",id:"compression-principles",level:2},{value:"Factors Affecting Compression Effectiveness",id:"factors-affecting-compression-effectiveness",level:2},{value:"Order of Data",id:"order-of-data",level:3},{value:"Data Redundancy",id:"data-redundancy",level:3},{value:"Data Type",id:"data-type",level:3},{value:"Column Length",id:"column-length",level:3},{value:"Nulls",id:"nulls",level:3},{value:"How to Choose the Right Compression Algorithm",id:"how-to-choose-the-right-compression-algorithm",level:2},{value:"Setting Compression in Doris",id:"setting-compression-in-doris",level:2}];function l(e){let s={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Doris adopts a ",(0,o.jsx)(s.strong,{children:"columnar storage"})," model to organize and store data, which is particularly suitable for analytical workloads and can significantly improve query efficiency. In columnar storage, each column of the table is stored independently, facilitating the application of compression techniques and thus improving storage efficiency. Doris provides various compression algorithms, allowing users to choose the appropriate compression method based on workload requirements to optimize storage and query performance."]}),"\n",(0,o.jsx)(s.h2,{id:"why-compression-is-needed",children:"Why Compression is Needed"}),"\n",(0,o.jsx)(s.p,{children:"In Doris, data compression mainly has the following two core objectives:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Improve Storage Efficiency"}),"\nCompression can significantly reduce the disk space required for data storage, allowing more data to be stored on the same physical resources."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Optimize Performance"}),"\nThe volume of compressed data is smaller, requiring fewer I/O operations during queries, thereby accelerating query response times. Modern compression algorithms typically have very fast decompression speeds, which can enhance read efficiency while reducing storage space."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"supported-compression-algorithms",children:"Supported Compression Algorithms"}),"\n",(0,o.jsx)(s.p,{children:"Doris supports various compression algorithms, each with different trade-offs between compression ratio and decompression speed, allowing users to choose the appropriate algorithm based on their needs:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"Compression Type"})}),(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"Characteristics"})}),(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"Applicable Scenarios"})})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"No Compression"})}),(0,o.jsx)(s.td,{children:"- No compression applied to data."}),(0,o.jsx)(s.td,{children:"Suitable for scenarios where compression is not needed, such as when the data is already compressed or storage space is not an issue."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"LZ4"})}),(0,o.jsxs)(s.td,{children:["- Very fast compression and decompression speeds. ",(0,o.jsx)(s.br,{})," - Moderate compression ratio."]}),(0,o.jsx)(s.td,{children:"Suitable for scenarios with high decompression speed requirements, such as real-time queries or high-concurrency loads."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"LZ4F (LZ4 Frame)"})}),(0,o.jsxs)(s.td,{children:["- Extended version of LZ4 supporting more flexible compression configurations. ",(0,o.jsx)(s.br,{})," - Fast speed with moderate compression ratio."]}),(0,o.jsx)(s.td,{children:"Needed when fast compression is required with fine control over configurations."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"LZ4HC (LZ4 High Compression)"})}),(0,o.jsxs)(s.td,{children:["- Higher compression ratio compared to LZ4, but slower compression speed. ",(0,o.jsx)(s.br,{})," - Decompression speed is comparable to LZ4."]}),(0,o.jsx)(s.td,{children:"Needed when a higher compression ratio is required, while still focusing on decompression speed."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"ZSTD (Zstandard)"})}),(0,o.jsxs)(s.td,{children:["- High compression ratio with flexible compression level adjustments. ",(0,o.jsx)(s.br,{})," - Decompression speed remains fast even at high compression ratios."]}),(0,o.jsx)(s.td,{children:"Required for high storage efficiency demands, while balancing query performance."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Snappy"})}),(0,o.jsxs)(s.td,{children:["- Designed for fast decompression. ",(0,o.jsx)(s.br,{})," - Moderate compression ratio."]}),(0,o.jsx)(s.td,{children:"Required for scenarios with high decompression speed and low CPU overhead demands."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Zlib"})}),(0,o.jsxs)(s.td,{children:["- Good balance between compression ratio and speed. ",(0,o.jsx)(s.br,{})," - Slower compression and decompression speeds compared to other algorithms, but higher compression ratio."]}),(0,o.jsx)(s.td,{children:"Required for scenarios with high storage efficiency demands and insensitivity to decompression speed, such as archiving and cold data storage."})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"compression-principles",children:"Compression Principles"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Column Compression"}),"\nDue to the adoption of columnar storage, Doris can independently compress each column in the table. This method enhances compression efficiency because the data in the same column often has similar distribution characteristics."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Encoding Before Compression"}),"\nBefore compressing data, Doris encodes the column data (e.g., ",(0,o.jsx)(s.strong,{children:"dictionary encoding"}),", ",(0,o.jsx)(s.strong,{children:"run-length encoding"}),", etc.) to transform the data into a form more suitable for compression, further enhancing compression efficiency."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Page Compression"}),"\nDoris adopts a ",(0,o.jsx)(s.strong,{children:"page"}),"-level compression strategy. The data in each column is divided into multiple pages, and the data within each page is compressed independently. By compressing by page, Doris can efficiently handle large-scale datasets while ensuring high compression ratios and decompression performance."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Configurable Compression Strategies"}),"\nUsers can specify the compression algorithm to be used when creating a table. This flexibility allows users to make the best choice between compression efficiency and performance based on specific workloads."]}),"\n",(0,o.jsx)(s.h2,{id:"factors-affecting-compression-effectiveness",children:"Factors Affecting Compression Effectiveness"}),"\n",(0,o.jsx)(s.p,{children:"Although different compression algorithms have their own advantages and disadvantages, the effectiveness of compression depends not only on the chosen algorithm but also on the following factors:"}),"\n",(0,o.jsx)(s.h3,{id:"order-of-data",children:"Order of Data"}),"\n",(0,o.jsx)(s.p,{children:"The order of data has a significant impact on compression effectiveness. For columns with high sequentiality (e.g., timestamps or continuous numeric columns), compression algorithms can typically achieve better results. The more regular the order of the data, the more repetitive patterns the compression algorithm can identify during compression, thus improving the compression ratio."}),"\n",(0,o.jsx)(s.h3,{id:"data-redundancy",children:"Data Redundancy"}),"\n",(0,o.jsx)(s.p,{children:"The more duplicate values in a data column, the more pronounced the compression effect. For example, using dictionary encoding on duplicate values can significantly reduce storage space. However, for data columns without obvious duplicates, the compression effect may not meet expectations."}),"\n",(0,o.jsx)(s.h3,{id:"data-type",children:"Data Type"}),"\n",(0,o.jsx)(s.p,{children:"The type of data can also affect compression effectiveness. Generally, numeric data types (such as integers and floating-point numbers) are easier to compress than string data types. For data types with a wide range of values, the effectiveness of the compression algorithm may be impacted."}),"\n",(0,o.jsx)(s.h3,{id:"column-length",children:"Column Length"}),"\n",(0,o.jsx)(s.p,{children:"The length of data in a column can also affect compression effectiveness. Shorter columns are usually easier to compress than longer columns because compression algorithms can more efficiently find repetitive patterns in shorter data blocks."}),"\n",(0,o.jsx)(s.h3,{id:"nulls",children:"Nulls"}),"\n",(0,o.jsx)(s.p,{children:"When the proportion of null values in a column is high, the compression algorithm may be more effective because it can encode these null values as a special pattern, reducing storage space."}),"\n",(0,o.jsx)(s.h2,{id:"how-to-choose-the-right-compression-algorithm",children:"How to Choose the Right Compression Algorithm"}),"\n",(0,o.jsx)(s.p,{children:"Choosing the right compression algorithm should be based on workload characteristics:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["For ",(0,o.jsx)(s.strong,{children:"high-performance real-time analysis"})," scenarios, it is recommended to use ",(0,o.jsx)(s.strong,{children:"LZ4"})," or ",(0,o.jsx)(s.strong,{children:"Snappy"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["For scenarios prioritizing ",(0,o.jsx)(s.strong,{children:"storage efficiency"}),", it is recommended to use ",(0,o.jsx)(s.strong,{children:"ZSTD"})," or ",(0,o.jsx)(s.strong,{children:"Zlib"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["For scenarios that need to balance speed and compression ratio, ",(0,o.jsx)(s.strong,{children:"LZ4F"})," can be chosen."]}),"\n",(0,o.jsxs)(s.li,{children:["For ",(0,o.jsx)(s.strong,{children:"archiving or cold data storage"})," scenarios, it is advisable to use ",(0,o.jsx)(s.strong,{children:"Zlib"})," or ",(0,o.jsx)(s.strong,{children:"LZ4HC"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"setting-compression-in-doris",children:"Setting Compression in Doris"}),"\n",(0,o.jsx)(s.p,{children:"When creating a table, you can specify the compression algorithm to determine how the data is stored:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sql",children:'CREATE TABLE example_table (\n    id INT,\n    name STRING,\n    age INT\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "compression" = "zstd"\n);\n'})})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var i=n(667294);let o={},r=i.createContext(o);function t(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);