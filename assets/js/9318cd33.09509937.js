"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["518397"],{50738:function(e,t,a){a.r(t),a.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>c,assets:()=>o,toc:()=>h,contentTitle:()=>r});var c=JSON.parse('{"id":"lakehouse/filecache","title":"Data Cache","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/filecache.md","sourceDirName":"lakehouse","slug":"/lakehouse/filecache","permalink":"/docs/lakehouse/filecache","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Data Cache","language":"en"},"sidebar":"docs","previous":{"title":"Querying Files on S3/HDFS","permalink":"/docs/lakehouse/file"},"next":{"title":"Metadata Cache","permalink":"/docs/lakehouse/metacache"}}'),n=a("785893"),s=a("250065");let i={title:"Data Cache",language:"en"},r=void 0,o={},h=[{value:"How it works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Configurations for FE",id:"configurations-for-fe",level:3},{value:"Configurations for BE",id:"configurations-for-be",level:3},{value:"Cache Observability",id:"cache-observability",level:2},{value:"Check whether a query hits cache",id:"check-whether-a-query-hits-cache",level:3},{value:"Metrics",id:"metrics",level:3}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Data cache accelerates queries that read the same data by caching the data files of recently accessed from remote storage system (HDFS or Object Storage). In Ad Hoc scenarios where the same data is frequently accessed, Data cache can avoid repeated remote data access costs and improve the query analysis performance and stability of hot data."}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsxs)(t.p,{children:["Data Cache caches the accessed remote data in the local BE node. The original data file will be divided into blocks according to the read IO size, and the block will be stored in file ",(0,n.jsx)(t.code,{children:"cache_path/hash(filepath).substr(0, 3)/hash(filepath)/offset"}),", and save the block meta information in the BE node. When accessing the same remote file, doris will check whether the cached data of the file exists in the local cache, and according to the offset and size of the block, confirm which data is read from the local block, which data is pulled from the remote, and cache the new data pulled from the remote. When the BE node restarts, scan ",(0,n.jsx)(t.code,{children:"cache_path"})," directory, recover the meta information of the block. When the cache size reaches the upper threshold, the blocks that have not been accessed for a long time shall be cleaned according to the LRU principle."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"Data cache is disabled by default. You need to set the relevant configuration in FE and BE to enable it."}),"\n",(0,n.jsx)(t.h3,{id:"configurations-for-fe",children:"Configurations for FE"}),"\n",(0,n.jsx)(t.p,{children:"Enable Data cache for a given session:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SET enable_file_cache = true;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Enable Data cache globally:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SET GLOBAL enable_file_cache = true;\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The Data cache is only applicable to external queries for files (such as Hive, Hudi). It has no effect on internal table queries, or non-file external queries (such as JDBC, Elasticsearch), etc."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"configurations-for-be",children:"Configurations for BE"}),"\n",(0,n.jsxs)(t.p,{children:["Add settings to the BE node's configuration file ",(0,n.jsx)(t.code,{children:"conf/be.conf"}),", and restart the BE node for the configuration to take effect."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"enable_file_cache"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Whether to enable Data cache, default false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"file_cache_path"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsxs)(t.td,{children:["Parameters about cache path, json format, for exmaple: ",(0,n.jsx)(t.code,{children:'[{"path": "/path/to/file_cache1", "total_size":53687091200},{"path": "/path/to/file_cache2", "total_size":53687091200},{"path": "/path/to/file_cache3", "total_size":53687091200}]'}),". ",(0,n.jsx)(t.code,{children:"path"})," is the path to save cached data; ",(0,n.jsx)(t.code,{children:"total_size"})," is the max size of cached data."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"clear_file_cache"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Whether to delete the previous cache data when the BE restarts, default false"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"cache-observability",children:"Cache Observability"}),"\n",(0,n.jsx)(t.h3,{id:"check-whether-a-query-hits-cache",children:"Check whether a query hits cache"}),"\n",(0,n.jsxs)(t.p,{children:["Execute ",(0,n.jsx)(t.code,{children:"set enable_profile = true"})," to enable the session variable, and you can view the query profile in the Queris tab of FE's web page. The metrics related to Data cache are as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"-  FileCache:  0ns\n    -  BytesScannedFromCache:  2.02  GB\n    -  BytesScannedFromRemote:  0.00  \n    -  BytesWriteIntoCache:  0.00  \n    -  LocalIOUseTimer:  2s723ms\n    -  NumLocalIOTotal:  444\n    -  NumRemoteIOTotal:  0\n    -  NumSkipCacheIOTotal:  0\n    -  RemoteIOUseTimer:  0ns\n    -  WriteCacheIOUseTimer:  0ns\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BytesScannedFromCache"}),": The amount of data read from the local cache."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BytesScannedFromRemote"}),": The amount of data read from the remote end."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BytesWriteIntoCache"}),": The amount of data written to the cache."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"LocalIOUseTimer"}),": Local cached IO time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"RemoteIOUseTimer"}),": IO time for remote reading."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"NumLocalIOTotal"}),": The number of locally cached IOs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"NumRemoteIOTotal"}),": Number of remote IOs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"WriteCacheIOUseTimer"}),": IO time to write cache."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"BytesScannedFromRemote"})," is 0, it means all caches are hit."]}),"\n",(0,n.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsxs)(t.p,{children:["User can query system table ",(0,n.jsx)(t.a,{href:"/docs/admin-manual/system-tables/information_schema/file_cache_statistics",children:"file_cache_statistics"})," to view the cache stats of each Backends."]})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return i}});var c=a(667294);let n={},s=c.createContext(n);function i(e){let t=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);