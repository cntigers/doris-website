"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["885780"],{969694:function(A,e,n){n.r(e),n.d(e,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"admin-manual/fe/table-query-plan-action","title":"Table Query Plan Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/table-query-plan-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/table-query-plan-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/table-query-plan-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Table Query Plan Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Statement Execution Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/statement-execution-action"},"next":{"title":"Table Row Count Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/table-row-count-action"}}'),t=n("785893"),r=n("250065");let a={title:"Table Query Plan Action",language:"zh-CN"},l=void 0,i={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(A){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"POST /api/<db>/<table>/_query_plan"})}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"\u7ED9\u5B9A\u4E00\u4E2A SQL\uFF0C\u7528\u4E8E\u83B7\u53D6\u8BE5 SQL \u5BF9\u5E94\u7684\u67E5\u8BE2\u8BA1\u5212\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u63A5\u53E3\u76EE\u524D\u7528\u4E8E Spark-Doris-Connector \u4E2D\uFF0CSpark \u83B7\u53D6 Doris \u7684\u67E5\u8BE2\u8BA1\u5212\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"<db>"})}),"\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"<table>"})}),"\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u8868"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,t.jsx)(e.p,{children:"\u65E0"}),"\n",(0,t.jsx)(e.h2,{id:"request-body",children:"Request body"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'{\n	"sql": "select * from db1.tbl1;"\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"partitions": {\n			"10039": {\n				"routings": ["10.81.85.89:9062"],\n				"version": 2,\n				"versionHash": 982459448378619656,\n				"schemaHash": 1294206575\n			}\n		},\n		"opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,t.jsx)(e.code,{children:"opaqued_query_plan"})," \u4E3A\u67E5\u8BE2\u8BA1\u5212\u7684\u4E8C\u8FDB\u5236\u683C\u5F0F\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u83B7\u53D6\u6307\u5B9A sql \u7684\u67E5\u8BE2\u8BA1\u5212"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"partitions": {\n			"10039": {\n				"routings": ["192.168.1.1:9060"],\n				"version": 2,\n				"versionHash": 982459448378619656,\n				"schemaHash": 1294206575\n			}\n		},\n		"opaqued_query_plan": "DAABDAACDwABD...",\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function d(A={}){let{wrapper:e}={...(0,r.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(c,{...A})}):c(A)}},250065:function(A,e,n){n.d(e,{Z:function(){return l},a:function(){return a}});var s=n(667294);let t={},r=s.createContext(t);function a(A){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:a(A.components),s.createElement(r.Provider,{value:e},A.children)}}}]);