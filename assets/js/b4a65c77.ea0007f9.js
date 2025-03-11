"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["732661"],{608425:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>m,contentTitle:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP","title":"ALTER WORKLOAD GROUP","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER WORKLOAD GROUP","language":"en"},"sidebar":"docs","previous":{"title":"CREATE WORKLOAD GROUP","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP"},"next":{"title":"DROP WORKLOAD GROUP","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/DROP-WORKLOAD-GROUP"}}'),n=r("785893"),o=r("250065");let a={title:"ALTER WORKLOAD GROUP",language:"en"},l=void 0,i={},m=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This statement is used to modify the workload group."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'ALTER WORKLOAD GROUP  "<rg_name>"\nPROPERTIES (\n  `<property>`\n  [ , ... ]\n);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["1.",(0,n.jsx)(t.code,{children:"<property>"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"<property>"})," \u683C\u5F0F\u4E3A ",(0,n.jsx)(t.code,{children:"<key>"})," = ",(0,n.jsx)(t.code,{children:"<value>"}),"\uFF0C",(0,n.jsx)(t.code,{children:"<key>"}),"\u7684\u5177\u4F53\u53EF\u9009\u503C\u5982\u4E0B\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"<cpu_share>"})}),(0,n.jsx)(t.td,{children:"used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get (10 / (10 + 30)) = 25% of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share."}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"<memory_limit>"})}),(0,n.jsxs)(t.td,{children:["set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: ",(0,n.jsx)(t.code,{children:"physical_memory * mem_limit * memory_limit"}),", where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit."]}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"<enable_memory_overcommit>"})}),(0,n.jsx)(t.td,{children:"enable soft memory isolation for the workload group, default is false. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit."}),(0,n.jsx)(t.td,{children:"Y"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Modify the workload group named g1:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'alter workload group g1\nproperties (\n    "cpu_share"="30",\n    "memory_limit"="30%"\n);\n'})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var s=r(667294);let n={},o=s.createContext(n);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);