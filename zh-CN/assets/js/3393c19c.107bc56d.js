"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["463578"],{633978:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-restore","title":"\u6062\u590D tablet","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/be-http/tablet-restore.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-restore","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/tablet-restore","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6062\u590D tablet","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u91CD\u52A0\u8F7D tablet","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/tablet-reload"},"next":{"title":"\u8C03\u6574 BE VLOG","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/be-vlog"}}'),r=t("785893"),a=t("250065");let i={title:"\u6062\u590D tablet",language:"zh-CN"},l=void 0,o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'POST /api/restore_tablet?tablet_id={int}&schema_hash={int}"'})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u7528\u4E8E\u6062\u590D trash \u76EE\u5F55\u4E2D\u88AB\u8BEF\u5220\u7684 tablet \u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tablet_id"}),"\n\u9700\u8981\u6062\u590D\u7684 table \u7684 id"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"schema_hash"}),"\nschema hash"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```json\n{\n    msg: "OK",\n    code: 0\n}\n```\n'})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\ncurl -X POST "http://127.0.0.1:8040/api/restore_tablet?tablet_id=123456&schema_hash=1111111"\n\n```\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);