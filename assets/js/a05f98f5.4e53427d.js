"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["865802"],{247442:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>n,metadata:()=>o,assets:()=>i,toc:()=>m,contentTitle:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","title":"CREATE WORKLOAD GROUP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE WORKLOAD GROUP","language":"en"},"sidebar":"docs","previous":{"title":"SHOW WORKLOAD GROUPS","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS"},"next":{"title":"ALTER WORKLOAD POLICY","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-POLICY"}}'),s=r("785893"),a=r("250065");let n={title:"CREATE WORKLOAD GROUP",language:"en"},l=void 0,i={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to create a workload group. Workload groups enable the isolation of cpu resources and memory resources on a single be."}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE WORKLOAD GROUP [IF NOT EXISTS] "rg_name"\nPROPERTIES (\n    property_list\n);\n'})}),"\n",(0,s.jsx)(t.p,{children:"illustrate:"}),"\n",(0,s.jsx)(t.p,{children:"Properties supported by property_list:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"cpu_share: Required, used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get (10 / (10 + 30)) = 25% of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["memory_limit: Required, set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: ",(0,s.jsx)(t.code,{children:"physical_memory * mem_limit * memory_limit"}),", where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"enable_memory_overcommit: Optional, enable soft memory isolation for the workload group, default is false. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a workload group named g1:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:' create workload group if not exists g1\n properties (\n     "cpu_share"="10",\n     "memory_limit"="30%",\n     "enable_memory_overcommit"="true"\n );\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.p,{children:"CREATE, WORKLOAD, GROUP"})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return n}});var o=r(667294);let s={},a=o.createContext(s);function n(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);