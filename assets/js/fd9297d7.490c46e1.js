"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["152000"],{916585:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"table-design/index/index-overview","title":"Index Overview","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/table-design/index/index-overview.md","sourceDirName":"table-design/index","slug":"/table-design/index/index-overview","permalink":"/docs/table-design/index/index-overview","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Index Overview","language":"en"},"sidebar":"docs","previous":{"title":"Column Compression","permalink":"/docs/table-design/column-compression"},"next":{"title":"Sort Key and Prefix Index","permalink":"/docs/table-design/index/prefix-index"}}'),r=i("785893"),d=i("250065");let s={title:"Index Overview",language:"en"},l=void 0,o={},a=[{value:"Index Types and Principles",id:"index-types-and-principles",level:2},{value:"Index Design Guidelines",id:"index-design-guidelines",level:2}];function c(e){let n={br:"br",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Database indexes are used to accelerate queries. To speed up different query scenarios, Doris supports various rich indexes."}),"\n",(0,r.jsx)(n.h2,{id:"index-types-and-principles",children:"Index Types and Principles"}),"\n",(0,r.jsx)(n.p,{children:"From the perspective of accelerating queries and their principles, Doris indexes are categorized into two main types: point query indexes and skip indexes."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Point Query Indexes:"})," Commonly used to speed up point queries, the principle is to locate which rows satisfy the WHERE conditions through the index and directly read those rows. Point query indexes are very effective when the number of rows meeting the conditions is small. Doris's point query indexes include Prefix Index and Inverted Index."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Prefix Index:"})," Doris stores data in an ordered manner according to the sort key and creates a sparse prefix index every 1024 rows. The key in the index is the value of the sorted column in the first row of the current 1024 rows. If the query involves a sorted column, the system will find the first row of the relevant 1024-row group and start scanning from there."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inverted Index:"})," For columns with an inverted index, an posting list is created mapping each value to a set of row ids. For equality queries, it first finds the set of row ids from the posting list, then directly reads the data of those rows, avoiding row-by-row scanning. Inverted indexes can also accelerate range filtering and fulltext search. The algorithms are more complex, but the basic principles are similar. (Note: the previous BITMAP index has been replaced by the more powerful inverted index.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Skip Indexes:"})," Commonly used to accelerate analysis, the principle is to determine data blocks that do not satisfy the WHERE conditions through the index and skip these blocks, only reading the data blocks that may satisfy the conditions and then performing a row-by-row filter to finally get the rows that meet the conditions. Skip indexes are more effective when the number of rows meeting the conditions is large. Doris's skip indexes include ZoneMap indexes, BloomFilter indexes, and NGram BloomFilter indexes."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ZoneMap Index:"})," Automatically maintains statistics for each column, recording the maximum, minimum, and whether there are NULL values for each data file (Segment) and data block (Page). For equality queries, range queries, and IS NULL, it can determine whether the data file and data block can contain the data that meets the conditions based on the maximum value, minimum value, and whether there are NULL values. If not, Doris skips reading the corresponding file or data block, reducing IO and accelerating queries."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BloomFilter Index:"})," Stores values of the indexed column in a BloomFilter data structure, which can quickly determine whether a value is in the BloomFilter with very low storage space. For equality queries, if the value is not in the BloomFilter, the corresponding data file or data block can be skipped, reducing IO and accelerating queries."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NGram BloomFilter Index:"})," Used to accelerate text LIKE queries. The principle is similar to the BloomFilter index, but instead of storing the original text values, it performs NGram tokenization of the text and stores each token in the BloomFilter. For LIKE queries, the LIKE pattern is also tokenized using NGram. If any token is not in the BloomFilter, the corresponding data file or data block does not meet the LIKE condition and can be skipped."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Among the above indexes, the prefix index and ZoneMap index are built-in indexes automatically maintained by Doris, requiring no user management. Inverted indexes, BloomFilter indexes, and NGram BloomFilter indexes need to be manually created and managed by the user based on the scenario."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Comparison of characteristics of different types of indexes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Index"}),(0,r.jsx)(n.th,{children:"Advantages"}),(0,r.jsx)(n.th,{children:"Limitations"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Point Query"}),(0,r.jsx)(n.td,{children:"Prefix Index"}),(0,r.jsxs)(n.td,{children:["Built-in index, best performance.",(0,r.jsx)(n.br,{}),"Only one prefix index per table."]}),(0,r.jsx)(n.td,{children:"Only one prefix index per table."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Point Query"}),(0,r.jsx)(n.td,{children:"Inverted Index"}),(0,r.jsxs)(n.td,{children:["Supports tokenization and keyword matching.",(0,r.jsx)(n.br,{}),"Building index on any column.",(0,r.jsx)(n.br,{}),"Multi-condition combination and accelerating more functions."]}),(0,r.jsx)(n.td,{children:"Large index storage space, similar to raw data."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Skip"}),(0,r.jsx)(n.td,{children:"ZoneMap Index"}),(0,r.jsxs)(n.td,{children:["Built-in index, small index storage space.",(0,r.jsx)(n.br,{}),"Only one prefix index per table."]}),(0,r.jsx)(n.td,{children:"Only one prefix index per table."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Skip"}),(0,r.jsx)(n.td,{children:"BloomFilter Index"}),(0,r.jsx)(n.td,{children:"More precise than ZoneMap, medium index space."}),(0,r.jsxs)(n.td,{children:["Supports few query types.",(0,r.jsx)(n.br,{}),"Only supports equal (not others: not equal, range, LIKE, MATCH)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Skip"}),(0,r.jsx)(n.td,{children:"NGram BloomFilter"}),(0,r.jsx)(n.td,{children:"Supports LIKE acceleration, medium index space."}),(0,r.jsxs)(n.td,{children:["Supports few query types.",(0,r.jsx)(n.br,{}),"Only supports LIKE acceleration."]})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"List of operators and functions for index acceleration"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator or Function"}),(0,r.jsx)(n.th,{children:"Prefix Index"}),(0,r.jsx)(n.th,{children:"Inverted Index"}),(0,r.jsx)(n.th,{children:"ZoneMap Index"}),(0,r.jsx)(n.th,{children:"BloomFilter Index"}),(0,r.jsx)(n.th,{children:"NGram BloomFilter Index"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"="}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"!="}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IN"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NOT IN"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:">, >=, <, <=, BETWEEN"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IS NULL"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IS NOT NULL"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LIKE"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"YES"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MATCH, MATCH_*"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"array_contains"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"array_overlaps"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"is_ip_address_in_range"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"YES"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"NO"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"index-design-guidelines",children:"Index Design Guidelines"}),"\n",(0,r.jsx)(n.p,{children:'The design and optimization of database table indexes are closely related to data distribution and queries, requiring testing and optimization based on the actual scenario. Although there is no "silver bullet," Doris continuously strives to reduce the difficulty of using indexes. Users can follow these simple guidelines for index selection and testing.'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the most frequently used filter condition as the KEY to automatically create a prefix index, as it has the best filtering effect. However, only one prefix index can be created per table, so it should be used for the most frequent filter condition."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For non-key fields that require filter acceleration, the first choice is to create an inverted index due to its broad applicability and multi-condition combination. The second choice includes the following two indexes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If there is a need for string LIKE matching, add an NGram BloomFilter index."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If index storage space is critical, replace the inverted index with a BloomFilter index."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If performance is not as expected, analyze the amount of data filtered by the index and the time consumed through QueryProfile. Refer to the detailed documentation of each index for specifics."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var t=i(667294);let r={},d=t.createContext(r);function s(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);