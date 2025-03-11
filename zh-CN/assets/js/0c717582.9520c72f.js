"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["67369"],{482546:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/log-action","title":"Log Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/log-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/log-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/log-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Log Action","language":"zh-CN"}}'),o=r("785893"),s=r("250065");let a={title:"Log Action",language:"zh-CN"},i=void 0,l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"GET /rest/v1/log\n"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"GET \u7528\u4E8E\u83B7\u53D6 Doris \u6700\u65B0\u7684\u4E00\u90E8\u5206 WARNING \u65E5\u5FD7\uFF0CPOST \u65B9\u6CD5\u7528\u4E8E\u52A8\u6001\u8BBE\u7F6E FE \u7684\u65E5\u5FD7\u7EA7\u522B\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,o.jsx)(n.p,{children:"\u65E0"}),"\n",(0,o.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"add_verbose"})}),"\n",(0,o.jsx)(n.p,{children:"POST \u65B9\u6CD5\u53EF\u9009\u53C2\u6570\u3002\u5F00\u542F\u6307\u5B9A Package \u7684 DEBUG \u7EA7\u522B\u65E5\u5FD7\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"del_verbose"})}),"\n",(0,o.jsx)(n.p,{children:"POST \u65B9\u6CD5\u53EF\u9009\u53C2\u6570\u3002\u5173\u95ED\u6307\u5B9A Package \u7684 DEBUG \u7EA7\u522B\u65E5\u5FD7\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,o.jsx)(n.p,{children:"\u65E0"}),"\n",(0,o.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'GET /rest/v1/log\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"LogContents": {\n			"logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n			"log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n			"showingLast": "603 bytes of log"\n		},\n		"LogConfiguration": {\n			"VerboseNames": "org",\n			"AuditNames": "slow_query,query",\n			"Level": "INFO"\n		}\n	},\n	"count": 0\n}  \n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,o.jsx)(n.code,{children:"data.LogContents.log"})," \u8868\u793A\u6700\u65B0\u4E00\u90E8\u5206 ",(0,o.jsx)(n.code,{children:"fe.warn.log"})," \u4E2D\u7684\u65E5\u5FD7\u5185\u5BB9\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'POST /rest/v1/log?add_verbose=org\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"LogConfiguration": {\n			"VerboseNames": "org",\n			"AuditNames": "slow_query,query",\n			"Level": "INFO"\n		}\n	},\n	"count": 0\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(667294);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);