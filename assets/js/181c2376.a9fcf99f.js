"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529382"],{533959:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS","title":"SHOW-BACKENDS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-BACKENDS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-BACKUP","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP"},"next":{"title":"SHOW-BROKER","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"}}'),a=n("785893"),i=n("250065");let r={title:"SHOW-BACKENDS",language:"en"},o=void 0,l={},c=[{value:"SHOW-BACKENDS",id:"show-backends",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"show-backends",children:"SHOW-BACKENDS"}),"\n",(0,a.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(t.p,{children:"SHOW BACKENDS"}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to view the BE nodes in the cluster"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:" SHOW BACKENDS;\n"})}),"\n",(0,a.jsx)(t.p,{children:"illustrate:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    1. LastStartTime indicates the last BE start time.\n    2. LastHeartbeat indicates the last heartbeat.\n    3. Alive indicates whether the node is alive or not.\n    4. If SystemDecommissioned is true, it means that the node is being safely decommissioned.\n    5. If ClusterDecommissioned is true, it means that the node is going offline in the current cluster.\n    6. TabletNum represents the number of shards on the node.\n    7. DataUsedCapacity Indicates the space occupied by the actual user data.\n    8. AvailCapacity Indicates the available space on the disk.\n    9. TotalCapacity represents the total disk space. TotalCapacity = AvailCapacity + DataUsedCapacity + other non-user data files occupy space.\n   10. UsedPct Indicates the percentage of disk used.\n   11. ErrMsg is used to display the error message when the heartbeat fails.\n   12. Status is used to display some status information of BE in JSON format, including the time information of the last time BE reported its tablet.\n   13. HeartbeatFailureCounter: The current number of heartbeats that have failed consecutively. If the number exceeds the `max_backend_heartbeat_failure_tolerance_count` configuration, the isAlive will be set to false.\n   14. NodeRole is used to display the role of Backend node. Now there are two roles: mix and computation. Mix node represent the origin Backend node and computation Node represent the compute only node.\n"})}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SHOW, BACKENDS\n"})}),"\n",(0,a.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var s=n(667294);let a={},i=s.createContext(a);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);