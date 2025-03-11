"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["453706"],{659803:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW","title":"SHOW CREATE ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/async-materialized-view/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/async-materialized-view/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW CREATE ASYNC MATERIALIZED VIEW","language":"zh-CN"}}'),s=t("785893"),i=t("250065");let a={title:"SHOW CREATE ASYNC MATERIALIZED VIEW",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE MATERIALIZED VIEW <materialized_view_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<materialized_view_new_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u540D\u79F0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"SHOW_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u62E5\u6709\u5F53\u524D\u7269\u5316\u89C6\u56FE\u7684 SHOW_PRIV \u6743\u9650"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE MATERIALIZED VIEW partition_mv;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B\u540C\u6B65\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE MATERIALIZED VIEW sync_agg_mv on lineitem;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var l=t(667294);let s={},i=l.createContext(s);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);