"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["546111"],{299158:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"table-design/index/ngram-bloomfilter-index","title":"N-Gram BloomFilter Index","description":"\x3c!--","source":"@site/docs/table-design/index/ngram-bloomfilter-index.md","sourceDirName":"table-design/index","slug":"/table-design/index/ngram-bloomfilter-index","permalink":"/docs/dev/table-design/index/ngram-bloomfilter-index","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"N-Gram BloomFilter Index","language":"en"},"sidebar":"docs","previous":{"title":"BloomFilter Index","permalink":"/docs/dev/table-design/index/bloomfilter"},"next":{"title":"Schema Change","permalink":"/docs/dev/table-design/schema-change"}}'),t=i("785893"),r=i("250065");let s={title:"N-Gram BloomFilter Index",language:"en"},o=void 0,l={},d=[{value:"Indexing Principles",id:"indexing-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Managing Indexes",id:"managing-indexes",level:2},{value:"Creating an NGram BloomFilter Index",id:"creating-an-ngram-bloomfilter-index",level:3},{value:"Viewing NGram BloomFilter Index",id:"viewing-ngram-bloomfilter-index",level:3},{value:"Deleting an NGram BloomFilter Index",id:"deleting-an-ngram-bloomfilter-index",level:3},{value:"Modifying an NGram BloomFilter Index",id:"modifying-an-ngram-bloomfilter-index",level:3},{value:"Using Indexes",id:"using-indexes",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Table Creation",id:"table-creation",level:3},{value:"Data Import",id:"data-import",level:3},{value:"Querying",id:"querying",level:3}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"indexing-principles",children:"Indexing Principles"}),"\n",(0,t.jsx)(n.p,{children:"n-gram tokenization is a method of splitting a sentence or a piece of text into multiple adjacent word groups. The NGram BloomFilter index, similar to the BloomFilter index, is a skip index based on BloomFilter."}),"\n",(0,t.jsx)(n.p,{children:"Unlike the BloomFilter index, the NGram BloomFilter index is used to accelerate text LIKE queries. Instead of storing the original text values, it tokenizes the text using NGram and stores each token in the BloomFilter. For LIKE queries, the pattern in LIKE '%pattern%' is also tokenized using NGram. Each token is checked against the BloomFilter, and if any token is not found, the corresponding data block does not meet the LIKE condition and can be skipped, reducing IO and accelerating the query."}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsx)(n.p,{children:"The NGram BloomFilter index can only accelerate string LIKE queries, and the number of consecutive characters in the LIKE pattern must be greater than or equal to the N defined in the NGram index."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NGram BloomFilter only supports string columns and can only accelerate LIKE queries."}),"\n",(0,t.jsx)(n.li,{children:"NGram BloomFilter index and BloomFilter index are mutually exclusive, meaning a column can only have one or the other."}),"\n",(0,t.jsx)(n.li,{children:"The performance analysis of the NGram BloomFilter index is similar to that of the BloomFilter index."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"managing-indexes",children:"Managing Indexes"}),"\n",(0,t.jsx)(n.h3,{id:"creating-an-ngram-bloomfilter-index",children:"Creating an NGram BloomFilter Index"}),"\n",(0,t.jsx)(n.p,{children:"The index definition follows the COLUMN definition in the CREATE TABLE statement:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INDEX `idx_column_name` (`column_name`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Explanation of the syntax:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"idx_column_name(column_name)"})})," is mandatory. ",(0,t.jsx)(n.code,{children:"column_name"})," is the column to be indexed and must appear in the column definitions above. ",(0,t.jsx)(n.code,{children:"idx_column_name"})," is the index name, which must be unique at the table level. It is recommended to name it with a prefix ",(0,t.jsx)(n.code,{children:"idx_"})," followed by the column name."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"USING NGRAM_BF"})})," is mandatory and specifies that the index type is an NGram BloomFilter index."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"PROPERTIES"})})," is optional and is used to specify additional properties for the NGram BloomFilter index. The supported properties are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"gram_size"}),": The N in NGram, specifying the number of consecutive characters to form a token. For example, 'This is a simple ngram example' with N = 3 would be tokenized into 'This is a', 'is a simple', 'a simple ngram', 'simple ngram example' (4 tokens)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"bf_size"}),": The size of the BloomFilter in bits. bf_size determines the size of the index corresponding to each data block. The larger this value, the more storage space it occupies, but the lower the probability of hash collisions."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to set ",(0,t.jsx)(n.strong,{children:"gram_size"}),' to the minimum length of the string in LIKE queries but not less than 2. Generally, "gram_size"="3", "bf_size"="1024" is recommended, then adjust based on the Query Profile.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"COMMENT"})})," is optional and specifies an index comment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"viewing-ngram-bloomfilter-index",children:"Viewing NGram BloomFilter Index"}),"\n",(0,t.jsx)(n.p,{children:"-- Syntax 1: The INDEX section in the table schema with USING NGRAM_BF indicates an inverted index"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE table_name;\n"})}),"\n",(0,t.jsx)(n.p,{children:"-- Syntax 2: IndexType as NGRAM_BF indicates an inverted index"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW INDEX FROM idx_name;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deleting-an-ngram-bloomfilter-index",children:"Deleting an NGram BloomFilter Index"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table_ngrambf DROP INDEX idx_ngrambf;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"modifying-an-ngram-bloomfilter-index",children:"Modifying an NGram BloomFilter Index"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE INDEX idx_column_name2(column_name2) ON table_ngrambf USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n\nALTER TABLE table_ngrambf ADD INDEX idx_column_name2(column_name2) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-indexes",children:"Using Indexes"}),"\n",(0,t.jsx)(n.p,{children:"NGram BloomFilter index is used to accelerate LIKE queries, for example:\nSELECT count() FROM table1 WHERE message LIKE '%error%';"}),"\n",(0,t.jsx)(n.p,{children:"The acceleration effect of the BloomFilter index (including NGram) can be analyzed using the following metrics in the Query Profile:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RowsBloomFilterFiltered: The number of rows filtered by the BloomFilter index, which can be compared with other Rows values to analyze the filtering effect of the index."}),"\n",(0,t.jsx)(n.li,{children:"BlockConditionsFilteredBloomFilterTime: The time consumed by the BloomFilter inverted index."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsxs)(n.p,{children:["This section demonstrates the usage and effectiveness of the NGram BloomFilter index using a dataset of Amazon product reviews, ",(0,t.jsx)(n.code,{children:"amazon_reviews"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"table-creation",children:"Table Creation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `amazon_reviews` (  \n  `review_date` int(11) NULL,  \n  `marketplace` varchar(20) NULL,  \n  `customer_id` bigint(20) NULL,  \n  `review_id` varchar(40) NULL,\n  `product_id` varchar(10) NULL,\n  `product_parent` bigint(20) NULL,\n  `product_title` varchar(500) NULL,\n  `product_category` varchar(50) NULL,\n  `star_rating` smallint(6) NULL,\n  `helpful_votes` int(11) NULL,\n  `total_votes` int(11) NULL,\n  `vine` boolean NULL,\n  `verified_purchase` boolean NULL,\n  `review_headline` varchar(500) NULL,\n  `review_body` string NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`review_date`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`review_date`) BUCKETS 16\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "compression" = "ZSTD"\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"data-import",children:"Data Import"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Download the dataset using wget or other tools from the following URLs:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2010.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2011.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2012.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2013.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2014.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2015.snappy.parquet\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Import the data using stream load:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root: -T amazon_reviews_2010.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2011.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2012.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2013.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2014.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2015.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The data file may exceed 10 GB, and you may need to adjust the streaming_road_max_mb in be.conf to prevent exceeding the upload size limit of the stream load. You can dynamically adjust it by following the steps below:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST http://{be_ip}:{be_http_port}/api/update_config?streaming_load_max_mb=32768\n"})}),(0,t.jsx)(n.p,{children:"Every BE needs to execute the above command."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Run a count query to confirm successful data import:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT COUNT(*) FROM amazon_reviews;\n+-----------+\n| count(*)  |\n+-----------+\n| 135589433 |\n+-----------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"querying",children:"Querying"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"First, run the query without any index. The WHERE clause contains a LIKE condition, and the query takes 7.60 seconds:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    product_id,\n    any(product_title),\n    AVG(star_rating) AS rating,\n    COUNT(*) AS count\nFROM\n    amazon_reviews\nWHERE\n    review_body LIKE '%is super awesome%'\nGROUP BY\n    product_id\nORDER BY\n    count DESC,\n    rating DESC,\n    product_id\nLIMIT 5;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Results:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (7.60 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Next, add an NGram BloomFilter index and run the same query again. The query takes 0.93 seconds, an 8x performance improvement:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE amazon_reviews ADD INDEX review_body_ngram_idx(review_body) USING NGRAM_BF PROPERTIES("gram_size"="10", "bf_size"="10240");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (0.93 sec)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var a=i(667294);let t={},r=a.createContext(t);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);