"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["469676"],{236175:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>o});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/workload_group_resource_usage","title":"workload_group_resource_usage","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/workload_group_resource_usage.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/workload_group_resource_usage","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/workload_group_resource_usage","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"workload_group_resource_usage","language":"zh-CN"},"sidebar":"docs","previous":{"title":"workload_group_privileges","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/workload_group_privileges"},"next":{"title":"workload_groups","permalink":"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/workload_groups"}}'),s=n("785893"),r=n("250065");let i={title:"workload_group_resource_usage",language:"zh-CN"},o=void 0,d={},a=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function c(e){let t={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u5B58\u50A8 Workload Group \u8D44\u6E90\u7684\u4F7F\u7528\u4FE1\u606F"}),"\n",(0,s.jsx)(t.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"information_schema"})}),"\n",(0,s.jsx)(t.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BE_ID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Backend \u7684 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"WORKLOAD_GROUP_ID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Workload Group \u7684 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MEMORY_USAGE_BYTES"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5185\u5B58\u5360\u7528\u5B57\u8282\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CPU_USAGE_PERCENT"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"double"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CPU \u4F7F\u7528\u767E\u5206\u6BD4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"LOCAL_SCAN_BYTES_PER_SECOND"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u672C\u5730\u6BCF\u79D2\u626B\u63CF\u6570\u636E\u5B57\u8282\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"REMOTE_SCAN_BYTES_PER_SECOND"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FDC\u7AEF\u6BCF\u79D2\u626B\u63CF\u6570\u636E\u5B57\u8282\u6570"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var l=n(667294);let s={},r=l.createContext(s);function i(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);