"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["673450"],{245544:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"admin-manual/system-tables/information_schema/file_cache_statistics","title":"file_cache_statistics","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/system-tables/information_schema/file_cache_statistics.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/file_cache_statistics","permalink":"/docs/admin-manual/system-tables/information_schema/file_cache_statistics","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"file_cache_statistics","language":"en"},"sidebar":"docs","previous":{"title":"events","permalink":"/docs/admin-manual/system-tables/information_schema/events"},"next":{"title":"files","permalink":"/docs/admin-manual/system-tables/information_schema/files"}}'),s=i("785893"),l=i("250065");let r={title:"file_cache_statistics",language:"en"},c=void 0,a={},d=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2},{value:"2.1.x Metrics",id:"21x-metrics",level:3},{value:"Examples",id:"examples",level:2}];function o(e){let n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Used to view the metric information related to data cache on each BE node. The metric information is sourced from the monitoring metrics related to BE's data cache."}),"\n",(0,s.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,s.jsx)(n.p,{children:"This system table is supported from versions 2.1.6"})}),"\n",(0,s.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"information_schema"})}),"\n",(0,s.jsx)(n.h2,{id:"table-information",children:"Table Information"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Column Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BE_ID"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{children:"BE node ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BE_IP"}),(0,s.jsx)(n.td,{children:"VARCHAR(256)"}),(0,s.jsx)(n.td,{children:"BE node IP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CACHE_PATH"}),(0,s.jsx)(n.td,{children:"VARCHAR(256)"}),(0,s.jsx)(n.td,{children:"BE node cache path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"METRIC_NAME"}),(0,s.jsx)(n.td,{children:"VARCHAR(256)"}),(0,s.jsx)(n.td,{children:"Metric name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"METRIC_VALUE"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{children:"Metric value"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsx)(n.p,{children:"Doris different version may have different metrics"})}),"\n",(0,s.jsx)(n.h3,{id:"21x-metrics",children:"2.1.x Metrics"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Only important metrics are listed."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"normal_queue_curr_elements"})}),"\n",(0,s.jsx)(n.p,{children:"Number of File Blocks currently in the cache."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"normal_queue_max_elements"})}),"\n",(0,s.jsx)(n.p,{children:"Maximum number of File Blocks allowed in the cache."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"normal_queue_curr_size"})}),"\n",(0,s.jsx)(n.p,{children:"Current cache size."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"normal_queue_max_size"})}),"\n",(0,s.jsx)(n.p,{children:"Maximum cache size allowed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"hits_ratio"})}),"\n",(0,s.jsx)(n.p,{children:"Overall cache hit ratio since BE startup."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"hits_ratio_5m"})}),"\n",(0,s.jsx)(n.p,{children:"Cache hit ratio in the last 5 minutes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"hits_ratio_1h"})}),"\n",(0,s.jsx)(n.p,{children:"Cache hit ratio in the last 1 hour."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Query all cache metrics"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select * from information_schema.file_cache_statistics;\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| BE_ID | BE_IP         | CACHE_PATH                 | METRIC_NAME                | METRIC_VALUE       |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_elements |               1392 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_size     |          248922234 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_elements  |             102400 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_size      |        21474836480 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio                 | 0.8539634687001242 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_1h              |                  0 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_5m              |                  0 |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Query cache hit ratio and sort by hit ratio"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select * from information_schema.file_cache_statistics where METRIC_NAME = "hits_ratio" order by METRIC_VALUE desc;\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(667294);let s={},l=t.createContext(s);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);