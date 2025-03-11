"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["55032"],{365528:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-intersect","title":"BITMAP_INTERSECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/bitmap-intersect.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-intersect","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/bitmap-intersect","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_INTERSECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW_FUNNEL","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/window-funnel"},"next":{"title":"BITMAP_UNION","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/bitmap-union"}}'),s=t("785893"),a=t("250065");let r={title:"BITMAP_INTERSECT",language:"zh-CN"},l=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u540E\u7684 bitmap \u4EA4\u96C6\u3002\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u8BA1\u7B97\u7528\u6237\u7559\u5B58\u7387\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BITMAP_INTERSECT(BITMAP <value>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<value>"})}),(0,s.jsx)(n.td,{children:"\u652F\u6301 bitmap \u7684\u6570\u636E\u7C7B\u578B"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B\u4E3A BITMAP\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u7ED3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u6C42\u4ECA\u5929\u548C\u6628\u5929\u4E0D\u540C tag \u4E0B\u7684\u7528\u6237\u7559\u5B58\nselect tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u548C bitmap_to_string \u51FD\u6570\u7EC4\u5408\u4F7F\u7528\u53EF\u4EE5\u83B7\u53D6\u4EA4\u96C6\u7684\u5177\u4F53\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u6C42\u4ECA\u5929\u548C\u6628\u5929\u4E0D\u540C tag \u4E0B\u7559\u5B58\u7684\u7528\u6237\u90FD\u662F\u54EA\u4E9B\nselect tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);