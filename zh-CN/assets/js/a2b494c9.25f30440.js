"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["711795"],{467963:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>t,toc:()=>a,contentTitle:()=>o});var l=JSON.parse('{"id":"admin-manual/open-api/fe-http/debug-point-action","title":"\u4EE3\u7801\u6253\u6869","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/debug-point-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/debug-point-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/debug-point-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4EE3\u7801\u6253\u6869","language":"zh-CN"}}'),d=i("785893"),s=i("250065");let r={title:"\u4EE3\u7801\u6253\u6869",language:"zh-CN"},o="\u4EE3\u7801\u6253\u6869",t={},a=[{value:"\u6728\u6869\u4EE3\u7801\u793A\u4F8B",id:"\u6728\u6869\u4EE3\u7801\u793A\u4F8B",level:2},{value:"\u603B\u5F00\u5173",id:"\u603B\u5F00\u5173",level:2},{value:"\u6253\u5F00\u6728\u6869",id:"\u6253\u5F00\u6728\u6869",level:2},{value:"API",id:"api",level:3},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"\u5411\u6728\u6869\u4F20\u9012\u53C2\u6570",id:"\u5411\u6728\u6869\u4F20\u9012\u53C2\u6570",level:2},{value:"API",id:"api-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u5728 FE \u548C BE \u4EE3\u7801\u4E2D\u4F7F\u7528\u53C2\u6570",id:"\u5728-fe-\u548C-be-\u4EE3\u7801\u4E2D\u4F7F\u7528\u53C2\u6570",level:3},{value:"\u5173\u95ED\u6728\u6869",id:"\u5173\u95ED\u6728\u6869",level:2},{value:"API",id:"api-2",level:3},{value:"\u53C2\u6570",id:"\u53C2\u6570-1",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"\u6E05\u9664\u6240\u6709\u6728\u6869",id:"\u6E05\u9664\u6240\u6709\u6728\u6869",level:2},{value:"API",id:"api-3",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"\u5728\u56DE\u5F52\u6D4B\u8BD5\u4E2D\u4F7F\u7528\u6728\u6869",id:"\u5728\u56DE\u5F52\u6D4B\u8BD5\u4E2D\u4F7F\u7528\u6728\u6869",level:2},{value:"\u5E76\u53D1\u95EE\u9898",id:"\u5E76\u53D1\u95EE\u9898",level:3},{value:"Examples",id:"examples-4",level:3}];function c(e){let n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u4EE3\u7801\u6253\u6869",children:"\u4EE3\u7801\u6253\u6869"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE3\u7801\u6253\u6869\uFF0C\u662F\u6307\u5728 FE \u6216 BE \u6E90\u7801\u4E2D\u63D2\u5165\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5F53\u7A0B\u5E8F\u6267\u884C\u5230\u8FD9\u91CC\u65F6\uFF0C\u53EF\u4EE5\u6539\u53D8\u7A0B\u5E8F\u7684\u53D8\u91CF\u6216\u884C\u4E3A\uFF0C\u8FD9\u6837\u7684\u4E00\u6BB5\u4EE3\u7801\u79F0\u4E3A\u4E00\u4E2A",(0,d.jsx)(n.code,{children:"\u6728\u6869"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4E3B\u8981\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u6216\u56DE\u5F52\u6D4B\u8BD5\uFF0C\u7528\u6765\u6784\u9020\u6B63\u5E38\u65B9\u6CD5\u65E0\u6CD5\u5B9E\u73B0\u7684\u5F02\u5E38\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6BCF\u4E00\u4E2A\u6728\u6869\u90FD\u6709\u4E00\u4E2A\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u4FBF\u53D6\u540D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u673A\u5236\u63A7\u5236\u6728\u6869\u7684\u5F00\u5173\uFF0C\u8FD8\u53EF\u4EE5\u5411\u6728\u6869\u4F20\u9012\u53C2\u6570\u3002"}),"\n",(0,d.jsx)(n.p,{children:"FE \u548C BE \u90FD\u652F\u6301\u4EE3\u7801\u6253\u6869\uFF0C\u6253\u6869\u5B8C\u540E\u8981\u91CD\u65B0\u7F16\u8BD1 BE \u6216 FE\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u6728\u6869\u4EE3\u7801\u793A\u4F8B",children:"\u6728\u6869\u4EE3\u7801\u793A\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:"FE \u6869\u5B50\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-java",children:'private Status foo() {  \n	// dbug_fe_foo_do_nothing \u662F\u4E00\u4E2A\u6728\u6869\u540D\u5B57\uFF0C\n	// \u6253\u5F00\u8FD9\u4E2A\u6728\u6869\u4E4B\u540E\uFF0CDebugPointUtil.isEnable("dbug_fe_foo_do_nothing") \u5C06\u4F1A\u8FD4\u56DE true\n	if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n		return Status.Nothing;\n	}\n      	\n     do_foo_action();\n     \n     return Status.Ok;\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"BE \u6869\u5B50\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c++",children:'void Status foo() {\n\n     // dbug_be_foo_do_nothing \u662F\u4E00\u4E2A\u6728\u6869\u540D\u5B57\uFF0C\n     // \u6253\u5F00\u8FD9\u4E2A\u6728\u6869\u4E4B\u540E\uFF0CDBUG_EXECUTE_IF \u5C06\u4F1A\u6267\u884C\u5B8F\u53C2\u6570\u4E2D\u7684\u4EE3\u7801\u5757\n     DBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u603B\u5F00\u5173",children:"\u603B\u5F00\u5173"}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u628A\u6728\u6869\u603B\u5F00\u5173 ",(0,d.jsx)(n.code,{children:"enable_debug_points"})," \u6253\u5F00\u4E4B\u540E\uFF0C\u624D\u80FD\u6FC0\u6D3B\u6728\u6869\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6728\u6869\u603B\u5F00\u5173\u662F\u5173\u95ED\u7684\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u603B\u5F00\u5173",(0,d.jsx)(n.code,{children:"enable_debug_points"})," \u5206\u522B\u5728 FE \u7684 fe.conf \u548C BE \u7684 be.conf \u4E2D\u914D\u7F6E\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6253\u5F00\u6728\u6869",children:"\u6253\u5F00\u6728\u6869"}),"\n",(0,d.jsx)(n.p,{children:"\u6253\u5F00\u603B\u5F00\u5173\u540E\uFF0C\u8FD8\u9700\u8981\u901A\u8FC7\u5411 FE \u6216 BE \u53D1\u9001 http \u8BF7\u6C42\u7684\u65B9\u5F0F\uFF0C\u6253\u5F00\u6216\u5173\u95ED\u6307\u5B9A\u540D\u79F0\u7684\u6728\u6869\uFF0C\u53EA\u6709\u8FD9\u6837\u5F53\u4EE3\u7801\u6267\u884C\u5230\u8FD9\u4E2A\u6728\u6869\u65F6\uFF0C\u76F8\u5173\u4EE3\u7801\u624D\u4F1A\u88AB\u6267\u884C\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"debug_point_name"}),"\n\u6728\u6869\u540D\u5B57\u3002\u5FC5\u586B\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"timeout"}),"\n\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u8D85\u65F6\u4E4B\u540E\uFF0C\u6728\u6869\u5931\u6D3B\u3002\u9ED8\u8BA4\u503C -1 \u8868\u793A\u6C38\u8FDC\u4E0D\u8D85\u65F6\u3002\u53EF\u9009\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"execute"}),"\n\u6728\u6869\u6700\u5927\u6267\u884C\u6B21\u6570\u3002\u9ED8\u8BA4\u503C -1 \u8868\u793A\u4E0D\u9650\u6267\u884C\u6B21\u6570\u3002\u53EF\u9009\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"request-body",children:"Request body"}),"\n",(0,d.jsx)(n.p,{children:"\u65E0"}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    msg: "OK",\n    code: 0\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5F00\u6728\u6869 ",(0,d.jsx)(n.code,{children:"foo"}),"\uFF0C\u6700\u591A\u6267\u884C 5 \u6B21\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u5411\u6728\u6869\u4F20\u9012\u53C2\u6570",children:"\u5411\u6728\u6869\u4F20\u9012\u53C2\u6570"}),"\n",(0,d.jsxs)(n.p,{children:["\u6FC0\u6D3B\u6728\u6869\u65F6\uFF0C\u9664\u4E86\u524D\u6587\u6240\u8FF0\u7684 timeout \u548C execute\uFF0C\u8FD8\u53EF\u4EE5\u4F20\u9012\u5176\u5B83\u81EA\u5B9A\u4E49\u53C2\u6570\u3002",(0,d.jsx)(n.br,{}),"\n\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F62\u5982 key=value \u7684 key-value \u5BF9\uFF0C\u5728 url \u7684\u8DEF\u5F84\u90E8\u5206\uFF0C\u7D27\u8DDF\u5728\u6728\u6869\u540D\u79F0\u540E\uFF0C\u4EE5\u5B57\u7B26 '?' \u5F00\u5934\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"api-1",children:"API"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"POST /api/debug_point/add/{debug_point_name}[?k1=v1&k2=v2&k3=v3...]\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"k1=v1"}),"\nk1 \u4E3A\u53C2\u6570\u540D\u79F0\uFF0Cv1 \u4E3A\u53C2\u6570\u503C\uFF0C\u591A\u4E2A\u53C2\u6570\u7528&\u5206\u9694\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"request-body-1",children:"Request body"}),"\n",(0,d.jsx)(n.p,{children:"\u65E0"}),"\n",(0,d.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    msg: "OK",\n    code: 0\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u8BBE FE \u5728 fe.conf \u4E2D\u6709\u914D\u7F6E http_port=8030\uFF0C\u5219\u4E0B\u9762\u7684\u8BF7\u6C42\u6FC0\u6D3B FE \u4E2D\u7684\u6728\u6869",(0,d.jsx)(n.code,{children:"foo"}),"\uFF0C\u5E76\u4F20\u9012\u4E86\u4E24\u4E2A\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"percent"})," \u548C ",(0,d.jsx)(n.code,{children:"duration"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?percent=0.5&duration=3"\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"\u6CE8\u610F\uFF1A\n1\u3001\u5728 FE \u6216 BE \u7684\u4EE3\u7801\u4E2D\uFF0C\u53C2\u6570\u540D\u548C\u53C2\u6570\u503C\u90FD\u662F\u5B57\u7B26\u4E32\u3002\n2\u3001\u5728 FE \u6216 BE \u7684\u4EE3\u7801\u4E2D\u548C http \u8BF7\u6C42\u4E2D\uFF0C\u53C2\u6570\u540D\u79F0\u548C\u503C\u90FD\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002\n3\u3001\u53D1\u7ED9 FE \u6216 BE \u7684 http \u8BF7\u6C42\uFF0C\u8DEF\u5F84\u90E8\u5206\u683C\u5F0F\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u662F IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\u4E0D\u540C\u3002\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5728-fe-\u548C-be-\u4EE3\u7801\u4E2D\u4F7F\u7528\u53C2\u6570",children:"\u5728 FE \u548C BE \u4EE3\u7801\u4E2D\u4F7F\u7528\u53C2\u6570"}),"\n",(0,d.jsxs)(n.p,{children:["\u6FC0\u6D3B FE \u4E2D\u7684\u6728\u6869",(0,d.jsx)(n.code,{children:"OlapTableSink.write_random_choose_sink"}),"\u5E76\u4F20\u9012\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"needCatchUp"})," \u548C ",(0,d.jsx)(n.code,{children:"sinkNum"}),":"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u53EF\u80FD\u9700\u8981\u7528\u6237\u540D\u548C\u5BC6\u7801"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/OlapTableSink.write_random_choose_sink?needCatchUp=true&sinkNum=3"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 FE \u4EE3\u7801\u4E2D\u4F7F\u7528\u6728\u6869 OlapTableSink.write_random_choose_sink \u7684\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"needCatchUp"})," \u548C ",(0,d.jsx)(n.code,{children:"sinkNum"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-java",children:'private void debugWriteRandomChooseSink(Tablet tablet, long version, Multimap<Long, Long> bePathsMap) {\n    DebugPoint debugPoint = DebugPointUtil.getDebugPoint("OlapTableSink.write_random_choose_sink");\n    if (debugPoint == null) {\n        return;\n    }\n    boolean needCatchup = debugPoint.param("needCatchUp", false);\n    int sinkNum = debugPoint.param("sinkNum", 0);\n    ...\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u6FC0\u6D3B BE \u4E2D\u7684\u6728\u6869",(0,d.jsx)(n.code,{children:"TxnManager.prepare_txn.random_failed"}),"\u5E76\u4F20\u9012\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"percent"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -X POST "http://127.0.0.1:8040/api/debug_point/add/TxnManager.prepare_txn.random_failed?percent=0.7\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 BE \u4EE3\u7801\u4E2D\u4F7F\u7528\u6728\u6869 ",(0,d.jsx)(n.code,{children:"TxnManager.prepare_txn.random_failed"})," \u7684\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"percent"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c++",children:'DBUG_EXECUTE_IF("TxnManager.prepare_txn.random_failed",\n		{if (rand() % 100 < (100 * dp->param("percent", 0.5))) {\n		        LOG_WARNING("TxnManager.prepare_txn.random_failed random failed");\n		        return Status::InternalError("debug prepare txn random failed");\n		}}\n);\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u5173\u95ED\u6728\u6869",children:"\u5173\u95ED\u6728\u6869"}),"\n",(0,d.jsx)(n.h3,{id:"api-2",children:"API"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"POST /api/debug_point/remove/{debug_point_name}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u53C2\u6570-1",children:"\u53C2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"debug_point_name"}),"\n\u6728\u6869\u540D\u5B57\u3002\u5FC5\u586B\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"request-body-2",children:"Request body"}),"\n",(0,d.jsx)(n.p,{children:"\u65E0"}),"\n",(0,d.jsx)(n.h3,{id:"response-2",children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    msg: "OK",\n    code: 0\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"examples-2",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["\u5173\u95ED\u6728\u6869",(0,d.jsx)(n.code,{children:"foo"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6E05\u9664\u6240\u6709\u6728\u6869",children:"\u6E05\u9664\u6240\u6709\u6728\u6869"}),"\n",(0,d.jsx)(n.h3,{id:"api-3",children:"API"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"POST /api/debug_point/clear\n"})}),"\n",(0,d.jsx)(n.h3,{id:"request-body-3",children:"Request body"}),"\n",(0,d.jsx)(n.p,{children:"\u65E0"}),"\n",(0,d.jsx)(n.h3,{id:"response-3",children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    msg: "OK",\n    code: 0\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"examples-3",children:"Examples"}),"\n",(0,d.jsx)(n.p,{children:"\u6E05\u9664\u6240\u6709\u6728\u6869\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'curl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u5728\u56DE\u5F52\u6D4B\u8BD5\u4E2D\u4F7F\u7528\u6728\u6869",children:"\u5728\u56DE\u5F52\u6D4B\u8BD5\u4E2D\u4F7F\u7528\u6728\u6869"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u63D0\u4EA4 PR \u65F6\uFF0C\u793E\u533A CI \u7CFB\u7EDF\u9ED8\u8BA4\u5F00\u542F FE \u548C BE \u7684",(0,d.jsx)(n.code,{children:"enable_debug_points"}),"\u914D\u7F6E\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u56DE\u5F52\u6D4B\u8BD5\u6846\u67B6\u63D0\u4F9B\u65B9\u6CD5\u51FD\u6570\u6765\u5F00\u5173\u6307\u5B9A\u7684\u6728\u6869\uFF0C\u5B83\u4EEC\u58F0\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-groovy",children:"// \u6253\u5F00\u6728\u6869\uFF0Cname \u662F\u6728\u6869\u540D\u79F0\uFF0Cparams \u662F\u4E00\u4E2Akey-value\u5217\u8868\uFF0C\u662F\u4F20\u7ED9\u6728\u6869\u7684\u53C2\u6570\ndef enableDebugPointForAllFEs(String name, Map<String, String> params = null);\ndef enableDebugPointForAllBEs(String name, Map<String, String> params = null);\n// \u5173\u95ED\u6728\u6869\uFF0Cname \u662F\u6728\u6869\u7684\u540D\u79F0\ndef disableDebugPointForAllFEs(String name);\ndef disableDebugPointForAllFEs(String name);\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u5728\u8C03\u7528\u6D4B\u8BD5 action \u4E4B\u524D\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"enableDebugPointForAllFEs()"})," \u6216 ",(0,d.jsx)(n.code,{children:"enableDebugPointForAllBEs()"})," \u6765\u5F00\u542F\u6728\u6869\uFF0C ",(0,d.jsx)(n.br,{}),"\n\u8FD9\u6837\u6267\u884C\u5230\u6728\u6869\u4EE3\u7801\u65F6\uFF0C\u76F8\u5173\u4EE3\u7801\u624D\u4F1A\u88AB\u6267\u884C\uFF0C",(0,d.jsx)(n.br,{}),"\n\u7136\u540E\u5728\u8C03\u7528\u6D4B\u8BD5 action \u4E4B\u540E\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"disableDebugPointForAllFEs()"})," \u6216 ",(0,d.jsx)(n.code,{children:"disableDebugPointForAllBEs()"})," \u6765\u5173\u95ED\u6728\u6869\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5E76\u53D1\u95EE\u9898",children:"\u5E76\u53D1\u95EE\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["FE \u6216 BE \u4E2D\u5F00\u542F\u7684\u6728\u6869\u662F\u5168\u5C40\u751F\u6548\u7684\uFF0C\u540C\u4E00\u4E2A Pull Request \u4E2D\uFF0C\u5E76\u53D1\u8DD1\u7684\u5176\u5B83\u6D4B\u8BD5\uFF0C\u53EF\u80FD\u4F1A\u53D7\u5F71\u54CD\u800C\u610F\u5916\u5931\u8D25\u3002\n\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u89C4\u5B9A\uFF0C\u4F7F\u7528\u6728\u6869\u7684\u56DE\u5F52\u6D4B\u8BD5\uFF0C\u5FC5\u987B\u653E\u5728 regression-test/suites/fault_injection_p0 \u76EE\u5F55\u4E0B\uFF0C\n\u4E14\u7EC4\u540D\u5FC5\u987B\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"nonConcurrent"}),"\uFF0C\u793E\u533A CI \u7CFB\u7EDF\u5BF9\u4E8E\u8FD9\u4E9B\u7528\u4F8B\uFF0C\u4F1A\u4E32\u884C\u8FD0\u884C\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"examples-4",children:"Examples"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-groovy",children:"// \u6D4B\u8BD5\u7528\u4F8B\u7684.groovy \u6587\u4EF6\u5FC5\u987B\u653E\u5728 regression-test/suites/fault_injection_p0 \u76EE\u5F55\u4E0B\uFF0C\n// \u4E14\u7EC4\u540D\u8BBE\u7F6E\u4E3A 'nonConcurrent'\nsuite('debugpoint_action', 'nonConcurrent') {\n    try {\n        // \u6253\u5F00\u6240\u6709FE\u4E2D\uFF0C\u540D\u4E3A \"PublishVersionDaemon.stop_publish\" \u7684\u6728\u6869\n        // \u4F20\u53C2\u6570 timeout\n        // \u4E0E\u4E0A\u9762curl\u8C03\u7528\u65F6\u4E00\u6837\uFF0Cexecute \u662F\u6267\u884C\u6B21\u6570\uFF0Ctimeout \u662F\u8D85\u65F6\u79D2\u6570\n        GetDebugPoint().enableDebugPointForAllFEs('PublishVersionDaemon.stop_publish', [timeout:1])\n        // \u6253\u5F00\u6240\u6709BE\u4E2D\uFF0C\u540D\u4E3A \"Tablet.build_tablet_report_info.version_miss\" \u7684\u6728\u6869\n        // \u4F20\u53C2\u6570 tablet_id, version_miss \u548C timeout\n        GetDebugPoint().enableDebugPointForAllBEs('Tablet.build_tablet_report_info.version_miss',\n                                                  [tablet_id:'12345', version_miss:true, timeout:1])\n\n        // \u6D4B\u8BD5\u7528\u4F8B\uFF0C\u4F1A\u89E6\u53D1\u6728\u6869\u4EE3\u7801\u7684\u6267\u884C\n        sql \"\"\"CREATE TABLE tbl_1 (k1 INT, k2 INT)\n               DUPLICATE KEY (k1)\n               DISTRIBUTED BY HASH(k1)\n               BUCKETS 3\n               PROPERTIES (\"replication_allocation\" = \"tag.location.default: 1\");\n            \"\"\"\n        sql \"INSERT INTO tbl_1 VALUES (1, 10)\"\n        sql \"INSERT INTO tbl_1 VALUES (2, 20)\"\n        order_qt_select_1_1 'SELECT * FROM tbl_1'\n\n    } finally {\n        GetDebugPoint().disableDebugPointForAllFEs('PublishVersionDaemon.stop_publish')\n        GetDebugPoint().disableDebugPointForAllBEs('Tablet.build_tablet_report_info.version_miss')\n    }\n}\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var l=i(667294);let d={},s=l.createContext(d);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);