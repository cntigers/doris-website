"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["873961"],{380343:function(n,a,e){e.r(a),e.d(a,{default:()=>u,frontMatter:()=>l,metadata:()=>c,assets:()=>o,toc:()=>i,contentTitle:()=>s});var c=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-compact","title":"ARRAY_COMPACY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-compact.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-compact","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-compact","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_COMPACY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHBACK","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback"},"next":{"title":"ARRAY_CONCAT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-concat"}}'),r=e("785893"),t=e("250065");let l={title:"ARRAY_COMPACY",language:"zh-CN"},s=void 0,o={},i=[{value:"array_compact",id:"array_compact",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function d(n){let a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"array_compact",children:"array_compact"}),"\n",(0,r.jsx)(a.p,{children:"array_compact"}),"\n",(0,r.jsx)(a.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(a.p,{children:"\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u8FDE\u7EED\u7684\u91CD\u590D\u5143\u7D20\uFF0C\u7ED3\u679C\u503C\u7684\u987A\u5E8F\u7531\u6E90\u6570\u7EC4\u4E2D\u7684\u987A\u5E8F\u51B3\u5B9A\u3002"}),"\n",(0,r.jsx)(a.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"Array<T> array_compact(arr)"})}),"\n",(0,r.jsx)(a.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"arr"})," \u2014 \u9700\u8981\u5904\u7406\u7684\u6570\u7EC4\u3002"]}),"\n",(0,r.jsx)(a.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(a.p,{children:"\u4E0D\u5B58\u5728\u8FDE\u7EED\u91CD\u590D\u5143\u7D20\u7684\u6570\u7EC4\u3002"}),"\n",(0,r.jsx)(a.p,{children:"Type: Array."}),"\n",(0,r.jsx)(a.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n"})}),"\n",(0,r.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(a.p,{children:"ARRAY,COMPACT,ARRAY_COMPACT"})]})}function u(n={}){let{wrapper:a}={...(0,t.a)(),...n.components};return a?(0,r.jsx)(a,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,a,e){e.d(a,{Z:function(){return s},a:function(){return l}});var c=e(667294);let r={},t=c.createContext(r);function l(n){let a=c.useContext(t);return c.useMemo(function(){return"function"==typeof n?n(a):{...a,...n}},[a,n])}function s(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),c.createElement(t.Provider,{value:a},n.children)}}}]);