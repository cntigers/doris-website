"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["46285"],{668040:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/compaction-run","title":"\u89E6\u53D1 Compaction","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/be-http/compaction-run.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/compaction-run","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/compaction-run","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u89E6\u53D1 Compaction","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u67E5\u770B Compaction \u72B6\u6001","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/compaction-status"},"next":{"title":"\u67E5\u8BE2\u5143\u4FE1\u606F","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/meta"}}'),i=t("785893"),l=t("250065");let a={title:"\u89E6\u53D1 Compaction",language:"zh-CN"},c=void 0,r={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u89E6\u53D1 Compaction",id:"\u89E6\u53D1-compaction",level:3},{value:"\u67E5\u8BE2\u72B6\u6001",id:"\u67E5\u8BE2\u72B6\u6001",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"POST /api/compaction/run?tablet_id={int}&compact_type={enum}"}),"\n",(0,i.jsx)(n.code,{children:"POST /api/compaction/run?table_id={int}&compact_type=full"})," \u6CE8\u610F\uFF0Ctable_id=xxx \u53EA\u6709\u5728 compact_type=full \u65F6\u6307\u5B9A\u624D\u4F1A\u751F\u6548\u3002\n",(0,i.jsx)(n.code,{children:"GET /api/compaction/run_status?tablet_id={int}"})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u624B\u52A8\u89E6\u53D1 Compaction \u4EE5\u53CA\u72B6\u6001\u67E5\u8BE2\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tablet_id"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tablet \u7684 id"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"table_id"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"table \u7684 id\u3002\u6CE8\u610F\uFF0Ctable_id=xxx \u53EA\u6709\u5728 compact_type=full \u65F6\u6307\u5B9A\u624D\u4F1A\u751F\u6548\uFF0C\u5E76\u4E14 tablet_id \u548C table_id \u53EA\u80FD\u6307\u5B9A\u4E00\u4E2A\uFF0C\u4E0D\u80FD\u591F\u540C\u65F6\u6307\u5B9A\uFF0C\u6307\u5B9A table_id \u540E\u4F1A\u81EA\u52A8\u5BF9\u6B64 table \u4E0B\u6240\u6709 tablet \u6267\u884C full_compaction\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"compact_type"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53D6\u503C\u4E3A",(0,i.jsx)(n.code,{children:"base"}),"\u6216",(0,i.jsx)(n.code,{children:"cumulative"}),"\u6216",(0,i.jsx)(n.code,{children:"full"}),"\u3002full_compaction \u7684\u4F7F\u7528\u573A\u666F\u8BF7\u53C2\u8003",(0,i.jsx)(n.a,{href:"../../trouble-shooting/repairing-data",children:"\u6570\u636E\u6062\u590D"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.h3,{id:"\u89E6\u53D1-compaction",children:"\u89E6\u53D1 Compaction"}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 tablet \u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE JSON \u683C\u5F0F\u7684\u9519\u8BEF\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 compaction \u6267\u884C\u4EFB\u52A1\u89E6\u53D1\u5931\u8D25\u65F6\uFF0C\u8FD4\u56DE JSON \u683C\u5F0F\u7684\u9519\u8BEF\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 compaction \u6267\u884C\u89E6\u53D1\u6210\u529F\u65F6\uFF0C\u5219\u8FD4\u56DE JSON \u683C\u5F0F\u7684\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"status\uFF1A\u89E6\u53D1\u4EFB\u52A1\u72B6\u6001\uFF0C\u5F53\u6210\u529F\u89E6\u53D1\u65F6\u4E3A Success\uFF1B\u5F53\u56E0\u67D0\u4E9B\u539F\u56E0\uFF08\u6BD4\u5982\uFF0C\u6CA1\u6709\u83B7\u53D6\u5230\u5408\u9002\u7684\u7248\u672C\uFF09\u65F6\uFF0C\u8FD4\u56DE Fail\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"msg\uFF1A\u7ED9\u51FA\u5177\u4F53\u7684\u6210\u529F\u6216\u5931\u8D25\u7684\u4FE1\u606F\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u8BE2\u72B6\u6001",children:"\u67E5\u8BE2\u72B6\u6001"}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 tablet \u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE JSON \u683C\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 tablet \u5B58\u5728\u5E76\u4E14 tablet \u4E0D\u5728\u6B63\u5728\u6267\u884C compaction\uFF0C\u8FD4\u56DE JSON \u683C\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u82E5 tablet \u5B58\u5728\u5E76\u4E14 tablet \u6B63\u5728\u6267\u884C compaction\uFF0C\u8FD4\u56DE JSON \u683C\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"run_status\uFF1A\u83B7\u53D6\u5F53\u524D\u624B\u52A8 compaction \u4EFB\u52A1\u6267\u884C\u72B6\u6001"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=cumulative"\n'})})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);