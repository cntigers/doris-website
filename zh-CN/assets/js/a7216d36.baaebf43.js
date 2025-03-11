"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["642260"],{884463:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>r,contentTitle:()=>d});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-migration","title":"\u8FC1\u79FB tablet","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/be-http/tablet-migration.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-migration","permalink":"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-migration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u8FC1\u79FB tablet","language":"zh-CN"}}'),t=s("785893"),l=s("250065");let a={title:"\u8FC1\u79FB tablet",language:"zh-CN"},d=void 0,c={},r=[{value:"\u8BF7\u6C42\u8DEF\u5F84",id:"\u8BF7\u6C42\u8DEF\u5F84",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BF7\u6C42\u53C2\u6570",id:"\u8BF7\u6C42\u53C2\u6570",level:2},{value:"\u8BF7\u6C42\u4F53",id:"\u8BF7\u6C42\u4F53",level:2},{value:"\u54CD\u5E94",id:"\u54CD\u5E94",level:2},{value:"\u63D0\u4EA4\u7ED3\u679C",id:"\u63D0\u4EA4\u7ED3\u679C",level:3},{value:"\u6267\u884C\u72B6\u6001",id:"\u6267\u884C\u72B6\u6001",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u8BF7\u6C42\u8DEF\u5F84",children:"\u8BF7\u6C42\u8DEF\u5F84"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"GET /api/tablet_migration?goal={enum}&tablet_id={int}&schema_hash={int}&disk={string}"})}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 BE \u8282\u70B9\u4E0A\u8FC1\u79FB\u5355\u4E2A tablet \u5230\u6307\u5B9A\u78C1\u76D8"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BF7\u6C42\u53C2\u6570",children:"\u8BF7\u6C42\u53C2\u6570"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"goal"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"run"}),"\uFF1A\u63D0\u4EA4\u8FC1\u79FB\u4EFB\u52A1"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"status"}),"\uFF1A\u67E5\u8BE2\u4EFB\u52A1\u7684\u6267\u884C\u72B6\u6001"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"tablet_id"}),"\n\u9700\u8981\u8FC1\u79FB\u7684 tablet \u7684 id"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"schema_hash"}),"\nschema hash"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"disk"}),"\n\u76EE\u6807\u78C1\u76D8\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BF7\u6C42\u4F53",children:"\u8BF7\u6C42\u4F53"}),"\n",(0,t.jsx)(e.p,{children:"\u65E0"}),"\n",(0,t.jsx)(e.h2,{id:"\u54CD\u5E94",children:"\u54CD\u5E94"}),"\n",(0,t.jsx)(e.h3,{id:"\u63D0\u4EA4\u7ED3\u679C",children:"\u63D0\u4EA4\u7ED3\u679C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6216"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u6267\u884C\u72B6\u6001",children:"\u6267\u884C\u72B6\u6001"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'    {\n        status: "Success",\n        msg: "migration task is running",\n        dest_disk: "xxxxxx"\n    }\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6216"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'    {\n        status: "Success",\n        msg: "migration task has finished successfully",\n        dest_disk: "xxxxxx"\n    }\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6216"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'```shell\ncurl "http://127.0.0.1:8040/api/tablet_migration?goal=run&tablet_id=123&schema_hash=333&disk=/disk1"\n\n```\n'})})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return a}});var i=s(667294);let t={},l=i.createContext(t);function a(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);