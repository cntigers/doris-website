"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["896942"],{118453:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"lakehouse/file-formats/text","title":"Text/CSV/JSON","description":"\x3c!--","source":"@site/docs/lakehouse/file-formats/text.md","sourceDirName":"lakehouse/file-formats","slug":"/lakehouse/file-formats/text","permalink":"/docs/dev/lakehouse/file-formats/text","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Text/CSV/JSON","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ORC","permalink":"/docs/dev/lakehouse/file-formats/orc"},"next":{"title":"Data Cache","permalink":"/docs/dev/lakehouse/data-cache"}}'),r=t("785893"),i=t("250065");let o={title:"Text/CSV/JSON",language:"zh-CN"},l=void 0,a={},c=[{value:"Text/CSV",id:"textcsv",level:2},{value:"Supported Compression Formats",id:"supported-compression-formats",level:3},{value:"JSON",id:"json",level:2},{value:"Character Set",id:"character-set",level:2}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document introduces the support for reading and writing text file formats in Doris."}),"\n",(0,r.jsx)(n.h2,{id:"textcsv",children:"Text/CSV"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Catalog"}),"\n",(0,r.jsxs)(n.p,{children:["Supports reading Hive tables in the ",(0,r.jsx)(n.code,{children:"org.apache.hadoop.mapred.TextInputFormat"})," format."]}),"\n",(0,r.jsxs)(n.p,{children:["Supports reading Hive tables in the ",(0,r.jsx)(n.code,{children:"org.apache.hadoop.hive.serde2.OpenCSVSerde"})," format. (Supported from version 2.1.7)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Table Valued Function"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Import"}),"\n",(0,r.jsx)(n.p,{children:"Import functionality supports Text/CSV formats. See the import documentation for details."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Export"}),"\n",(0,r.jsx)(n.p,{children:"Export functionality supports Text/CSV formats. See the export documentation for details."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"supported-compression-formats",children:"Supported Compression Formats"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"uncompressed"}),"\n",(0,r.jsx)(n.li,{children:"gzip"}),"\n",(0,r.jsx)(n.li,{children:"deflate"}),"\n",(0,r.jsx)(n.li,{children:"bzip2"}),"\n",(0,r.jsx)(n.li,{children:"zstd"}),"\n",(0,r.jsx)(n.li,{children:"lz4"}),"\n",(0,r.jsx)(n.li,{children:"snappy"}),"\n",(0,r.jsx)(n.li,{children:"lzo"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Catalog"}),"\n",(0,r.jsxs)(n.p,{children:["Supports reading Hive tables in the ",(0,r.jsx)(n.code,{children:"org.apache.hive.hcatalog.data.JsonSerDe"})," format. (Supported from version 3.0.4)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Import"}),"\n",(0,r.jsx)(n.p,{children:"Import functionality supports JSON formats. See the import documentation for details."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"character-set",children:"Character Set"}),"\n",(0,r.jsx)(n.p,{children:"Currently, Doris only supports the UTF-8 character set encoding. However, some data, such as the data in Hive Text-formatted tables, may contain content encoded in non-UTF-8 encoding, which will cause reading failures and result in the following error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Only support csv data in utf8 codec\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this case, you can set the session variable as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"SET enable_text_validate_utf8 = false\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will ignore the UTF-8 encoding check, allowing you to read this content. Note that this parameter is only used to skip the check, and non-UTF-8 encoded content will still be displayed as garbled text."}),"\n",(0,r.jsx)(n.p,{children:"This parameter has been supported since version 3.0.4."})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);