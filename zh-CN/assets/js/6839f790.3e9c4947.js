"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875457"],{720659:function(e,n,l){l.r(n),l.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/plugin/INSTALL-PLUGIN","title":"INSTALL PLUGIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/plugin/INSTALL-PLUGIN.md","sourceDirName":"sql-manual/sql-statements/plugin","slug":"/sql-manual/sql-statements/plugin/INSTALL-PLUGIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/plugin/INSTALL-PLUGIN","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"INSTALL PLUGIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL TASK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/job/CANCEL-TASK"},"next":{"title":"UNINSTALL PLUGIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN"}}'),t=l("785893"),i=l("250065");let d={title:"INSTALL PLUGIN",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM <source> [PROPERTIES ("<key>"="<value>", ...)]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["** 1. ",(0,t.jsx)(n.code,{children:"<source>"}),"**"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5F85\u5B89\u88C5\u63D2\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6307\u5411\u4E00\u4E2A zip \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6307\u5411\u4E00\u4E2A\u63D2\u4EF6\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6307\u5411\u4E00\u4E2A http \u6216 https \u534F\u8BAE\u7684 zip \u6587\u4EF6\u4E0B\u8F7D\u8DEF\u5F84"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["** 1. ",(0,t.jsx)(n.code,{children:'[PROPERTIES ("<key>"="<value>", ...)]'}),"**"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u7528\u4E8E\u6307\u5B9A\u5B89\u88C5\u63D2\u4EF6\u65F6\u7684\u5C5E\u6027\u6216\u53C2\u6570"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u6574\u4E2A\u96C6\u7FA4"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6574\u4E2A\u96C6\u7FA4\u5177\u6709\u7BA1\u7406\u6743\u9650"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u6CE8\u610F\u9700\u8981\u653E\u7F6E\u4E00\u4E2A\u548C .zip \u6587\u4EF6\u540C\u540D\u7684 md5 \u6587\u4EF6\uFF0C\u5982 ",(0,t.jsx)(n.a,{href:"http://mywebsite.com/plugin.zip.md5%E3%80%82%E5%85%B6%E4%B8%AD%E5%86%85%E5%AE%B9%E4%B8%BA",children:"http://mywebsite.com/plugin.zip.md5\u3002\u5176\u4E2D\u5185\u5BB9\u4E3A"})," .zip \u6587\u4EF6\u7684 MD5 \u503C\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5B89\u88C5\u4E00\u4E2A\u672C\u5730 zip \u6587\u4EF6\u63D2\u4EF6\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5B89\u88C5\u4E00\u4E2A\u672C\u5730\u76EE\u5F55\u4E2D\u7684\u63D2\u4EF6\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4E0B\u8F7D\u5E76\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4E0B\u8F7D\u5E76\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u540C\u65F6\u8BBE\u7F6E\u4E86 zip \u6587\u4EF6\u7684 md5sum \u7684\u503C\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return d}});var s=l(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);