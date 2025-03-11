"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["868100"],{643350:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"query-acceleration/distinct-counts/hll-approximate-deduplication","title":"HLL Approximate Deduplication","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/distinct-counts/hll-approximate-deduplication.md","sourceDirName":"query-acceleration/distinct-counts","slug":"/query-acceleration/distinct-counts/hll-approximate-deduplication","permalink":"/docs/query-acceleration/distinct-counts/hll-approximate-deduplication","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HLL Approximate Deduplication","language":"en"}}'),l=i("785893"),a=i("250065");let s={title:"HLL Approximate Deduplication",language:"en"},r="HLL Approximate Deduplication",o={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"What is HyperLogLog",id:"what-is-hyperloglog",level:2},{value:"Explanation:",id:"explanation",level:3},{value:"Use HLL for Approximate Deduplication",id:"use-hll-for-approximate-deduplication",level:2},{value:"Creating a Table",id:"creating-a-table",level:3},{value:"Importing Data",id:"importing-data",level:3},{value:"Querying Data",id:"querying-data",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"hll-approximate-deduplication",children:"HLL Approximate Deduplication"})}),"\n",(0,l.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,l.jsxs)(n.p,{children:["In real-world business scenarios, as the volume of business data grows, the pressure of deduplication also increases. When the data reaches a certain scale, the cost of precise deduplication becomes increasingly high. ",(0,l.jsx)(n.strong,{children:"HLL"})," (HyperLogLog) stands out for its excellent space complexity of O(m\u22C5log\u2061log\u2061n) time complexity of O(n), and a controlled error rate of 1%\u20132%, depending on the dataset size and the hash function used."]}),"\n",(0,l.jsx)(n.p,{children:"When acceptable to the business, using approximate algorithms for fast deduplication is an effective way to reduce computational pressure."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"what-is-hyperloglog",children:"What is HyperLogLog"}),"\n",(0,l.jsxs)(n.p,{children:["HyperLogLog (HLL) is an enhanced version of the LogLog algorithm. It is used for approximate distinct counting and is mathematically based on ",(0,l.jsx)(n.strong,{children:"Bernoulli trials"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,l.jsx)(n.p,{children:"Imagine flipping a coin with heads and tails. Each flip has a 50% probability of landing on either side. Keep flipping the coin until it shows heads, and record the number of flips as one trial."}),"\n",(0,l.jsx)(n.p,{children:"For multiple Bernoulli trials:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Let n be the number of heads obtained after n trials."}),"\n",(0,l.jsx)(n.li,{children:"Let k be the number of flips required in each trial. For example, if it took 12 flips to get heads in a trial, k_max would be 12 for this set of trials."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Bernoulli trials yield the following conclusions:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"In n trials, no trial will require more than k_max flips."}),"\n",(0,l.jsx)(n.li,{children:"At least one trial will require exactly k_max flips."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"By applying maximum likelihood estimation, it can be derived that:"}),"\n",(0,l.jsx)(n.p,{children:"n = 2 ^ k_max"}),"\n",(0,l.jsx)(n.p,{children:"Thus, by recording only k_max, the total number of unique items (cardinality) can be estimated."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"use-hll-for-approximate-deduplication",children:"Use HLL for Approximate Deduplication"}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-table",children:"Creating a Table"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["When using HLL for deduplication:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The target column type must be set to ",(0,l.jsx)(n.code,{children:"HLL"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["The aggregation function must be set to ",(0,l.jsx)(n.code,{children:"HLL_UNION"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"HLL-type columns cannot be used as key columns."}),"\n",(0,l.jsx)(n.li,{children:"Users do not need to specify the length or default value. The system internally manages the length based on data aggregation levels."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example table creation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_hll(\n        dt DATE,\n        id INT,\n        name CHAR(10),\n        province CHAR(10),\n        os CHAR(10),\n        uv HLL HLL_UNION\n)\nAGGREGATE KEY (dt, id, name, province, os)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES(\n        "replication_num" = "1",\n        "in_memory"="false"\n);\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"importing-data",children:"Importing Data"}),"\n",(0,l.jsxs)(n.p,{children:["Here is sample data (",(0,l.jsx)(n.code,{children:"test_hll.csv"}),") that can be imported using Stream Load:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"2022-05-05,10001,Test 01,Beijing,windows \n2022-05-05,10002,Test 01,Beijing,linux \n2022-05-05,10003,Test 01,Beijing,macos \n2022-05-05,10004,Test 01,Hebei,windows \n2022-05-06,10001,Test 01,Shanghai,windows \n2022-05-06,10002,Test 01,Shanghai,linux \n2022-05-06,10003,Test 01,Jiangsu,macos \n2022-05-06,10004,Test 01,Shaanxi,windows\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Stream Load Command"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, uv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "TxnId": 693,\n    "Label": "label_test_hll_load",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 8,\n    "NumberLoadedRows": 8,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 320,\n    "LoadTimeMs": 23,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 9,\n    "CommitAndPublishTimeMs": 11\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"querying-data",children:"Querying Data"}),"\n",(0,l.jsx)(n.p,{children:"HLL columns cannot return raw values directly. Instead, HLL aggregate functions must be used for queries."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Total UV Calculation"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT HLL_UNION_AGG(uv) FROM test_hll;\n+---------------------+\n| hll_union_agg(`uv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"Equivalent to:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(DISTINCT id) FROM test_hll;\n+----------------------+\n| count(DISTINCT `id`) |\n+----------------------+\n|                    4 |\n+----------------------+\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Daily UV Calculation"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT dt, HLL_UNION_AGG(uv) FROM test_hll GROUP BY dt;\n+------------+---------------------+\n| dt         | hll_union_agg       |\n+------------+---------------------+\n| 2022-05-05 |                   4 |\n| 2022-05-06 |                   4 |\n+------------+---------------------+\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HLL_UNION_AGG(hll)"}),": An aggregate function to estimate the cardinality of all data meeting the conditions."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HLL_CARDINALITY(hll)"}),": A function to calculate the cardinality of a single HLL column."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HLL_HASH(column_name)"}),": Generates an HLL column type, used during insert or data import (as shown above)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"HLL_EMPTY()"}),": Generates an empty HLL column for default values during ",(0,l.jsx)(n.code,{children:"INSERT"})," or data import."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(667294);let l={},a=t.createContext(l);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);