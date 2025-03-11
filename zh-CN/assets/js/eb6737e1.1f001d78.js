"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["196435"],{859364:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-bitmap-xor","title":"GROUP_BITMAP_XOR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUP_BITMAP_XOR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GROUP_ARRAY_INTERSECT","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect"},"next":{"title":"GROUP_BIT_AND","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-and"}}'),r=t("785893"),i=t("250065");let a={title:"GROUP_BITMAP_XOR",language:"zh-CN"},l=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u4E3B\u8981\u7528\u4E8E\u5408\u5E76\u591A\u4E2A bitmap \u7684\u503C\uFF0C\u5E76\u5BF9\u7ED3\u679C\u8FDB\u884C\u6309\u4F4D xor \u8BA1\u7B97"}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GROUP_BITMAP_XOR(<expr>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<expr>"})}),(0,r.jsx)(n.td,{children:"\u652F\u6301 bitmap \u7684\u6570\u636E\u7C7B\u578B"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B\u4E3A BITMAP\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" select page, bitmap_to_string(user_id) from pv_bitmap;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+-----------------------------+\n| page | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| m    | 4,7,8                       |\n| m    | 1,3,6,15                    |\n| m    | 4,7                         |\n+------+-----------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select page, bitmap_to_string(group_bitmap_xor(user_id)) from pv_bitmap group by page;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+-----------------------------------------------+\n| page | bitmap_to_string(group_bitmap_xor(`user_id`)) |\n+------+-----------------------------------------------+\n| m    | 1,3,6,8,15                                    |\n+------+-----------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);