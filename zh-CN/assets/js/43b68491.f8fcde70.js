"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913701"],{986966:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/combinators/merge","title":"MERGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/combinators/merge.md","sourceDirName":"sql-manual/sql-functions/combinators","slug":"/sql-manual/sql-functions/combinators/merge","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/merge","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MERGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/state"},"next":{"title":"UNION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/union"}}'),o=t("785893"),r=t("250065");let l={title:"MERGE",language:"zh-CN"},i=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsxs)(n.p,{children:["\u5C06\u805A\u5408\u4E2D\u95F4\u7ED3\u679C\u8FDB\u884C\u805A\u5408\u5E76\u8BA1\u7B97\u83B7\u5F97\u5B9E\u9645\u7ED3\u679C\u3002\n\u7ED3\u679C\u7684\u7C7B\u578B\u4E0E",(0,o.jsx)(n.code,{children:"AGGREGATE_FUNCTION"}),"\u4E00\u81F4\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"AGGREGATE_FUNCTION_MERGE(agg_state)"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql [test]>select avg_merge(avg_state(1)) from d_table;\n+-------------------------+\n| avg_merge(avg_state(1)) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,o.jsx)(n.p,{children:"AGG_STATE, MERGE"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let o={},r=s.createContext(o);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);