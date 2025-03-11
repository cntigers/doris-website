"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["414702"],{220191:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"admin-manual/trouble-shooting/repairing-data","title":"Repairing Data","description":"\x3c!--","source":"@site/docs/admin-manual/trouble-shooting/repairing-data.md","sourceDirName":"admin-manual/trouble-shooting","slug":"/admin-manual/trouble-shooting/repairing-data","permalink":"/docs/dev/admin-manual/trouble-shooting/repairing-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Repairing Data","language":"en"},"sidebar":"docs","previous":{"title":"Tablet metadata management tool","permalink":"/docs/dev/admin-manual/trouble-shooting/tablet-meta-tool"},"next":{"title":"Spark Doris Connector","permalink":"/docs/dev/ecosystem/spark-doris-connector"}}'),a=n("785893"),r=n("250065");let o={title:"Repairing Data",language:"en"},l="Repairing Data",s={},c=[{value:"Brief principle explanation",id:"brief-principle-explanation",level:2},{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Example of use",id:"example-of-use",level:2}];function d(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"repairing-data",children:"Repairing Data"})}),"\n",(0,a.jsx)(t.p,{children:"For the Unique Key Merge on Write table, there are bugs in some Doris versions, which may cause errors when the system calculates the delete bitmap, resulting in duplicate primary keys. At this time, the full compaction function can be used to repair the data. This function is invalid for non-Unique Key Merge on Write tables."}),"\n",(0,a.jsx)(t.p,{children:"This feature requires Doris version 2.0+."}),"\n",(0,a.jsx)(t.p,{children:"To use this function, it is necessary to stop the import as much as possible, otherwise problems such as import timeout may occur."}),"\n",(0,a.jsx)(t.h2,{id:"brief-principle-explanation",children:"Brief principle explanation"}),"\n",(0,a.jsx)(t.p,{children:"After the full compaction is executed, the delete bitmap will be recalculated, and the wrong delete bitmap data will be deleted to complete the data restoration."}),"\n",(0,a.jsx)(t.h2,{id:"instructions-for-use",children:"Instructions for use"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"POST /api/compaction/run?tablet_id={int}&compact_type=full"})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"POST /api/compaction/run?table_id={int}&compact_type=full"})}),"\n",(0,a.jsx)(t.p,{children:"Note that only one tablet_id and table_id can be specified, and cannot be specified at the same time. After specifying table_id, full_compaction will be automatically executed for all tablets under this table."}),"\n",(0,a.jsx)(t.h2,{id:"example-of-use",children:"Example of use"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=full"\ncurl -X POST "http://127.0.0.1:8040/api/compaction/run?table_id=10104&compact_type=full"\n'})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(667294);let a={},r=i.createContext(a);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);