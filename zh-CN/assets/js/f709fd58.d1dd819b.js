"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["542187"],{582487:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-distribution","title":"\u67E5\u8BE2 tablet \u5206\u5E03","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/be-http/tablet-distribution.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-distribution","permalink":"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-distribution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u67E5\u8BE2 tablet \u5206\u5E03","language":"zh-CN"}}'),l=t("785893"),r=t("250065");let a={title:"\u67E5\u8BE2 tablet \u5206\u5E03",language:"zh-CN"},s=void 0,d={},o=[{value:"\u8BF7\u6C42\u8DEF\u5F84",id:"\u8BF7\u6C42\u8DEF\u5F84",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BF7\u6C42\u53C2\u6570",id:"\u8BF7\u6C42\u53C2\u6570",level:2},{value:"\u8BF7\u6C42\u4F53",id:"\u8BF7\u6C42\u4F53",level:2},{value:"\u54CD\u5E94",id:"\u54CD\u5E94",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function c(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u8BF7\u6C42\u8DEF\u5F84",children:"\u8BF7\u6C42\u8DEF\u5F84"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"GET /api/tablets_distribution?group_by={enum}&partition_id={int}"})}),"\n",(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u83B7\u53D6 BE \u8282\u70B9\u4E0A\u6BCF\u4E00\u4E2A partition \u4E0B\u7684 tablet \u5728\u4E0D\u540C\u78C1\u76D8\u4E0A\u7684\u5206\u5E03\u60C5\u51B5"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BF7\u6C42\u53C2\u6570",children:"\u8BF7\u6C42\u53C2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"group_by"}),"\n\u5206\u7EC4\uFF0C\u5F53\u524D\u53EA\u652F\u6301",(0,l.jsx)(e.code,{children:"partition"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"partition_id"}),"\n\u6307\u5B9A partition \u7684 id\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u8FD4\u56DE\u6240\u6709 partition\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BF7\u6C42\u4F53",children:"\u8BF7\u6C42\u4F53"}),"\n",(0,l.jsx)(e.p,{children:"\u65E0"}),"\n",(0,l.jsx)(e.h2,{id:"\u54CD\u5E94",children:"\u54CD\u5E94"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'```json\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n```\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'```shell\ncurl "http://127.0.0.1:8040/api/tablets_distribution?group_by=partition&partition_id=123"\n\n```\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return a}});var i=t(667294);let l={},r=i.createContext(l);function a(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);