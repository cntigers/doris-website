"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["210159"],{194851:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-BACKUP","title":"SHOW-BACKUP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-BACKUP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-ANALYZE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE"},"next":{"title":"SHOW-BACKENDS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"}}'),l=s("785893"),r=s("250065");let i={title:"SHOW-BACKUP",language:"zh-CN"},a=void 0,c={},d=[{value:"SHOW-BACKUP",id:"show-backup",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-backup",children:"SHOW-BACKUP"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW BACKUP"}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B BACKUP \u4EFB\u52A1"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" SHOW BACKUP [FROM db_name]\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    1. Doris \u4E2D\u4EC5\u4FDD\u5B58\u6700\u8FD1\u4E00\u6B21 BACKUP \u4EFB\u52A1\u3002\n    2. \u5404\u5217\u542B\u4E49\u5982\u4E0B\uFF1A\n        JobId\uFF1A                  \u552F\u4E00\u4F5C\u4E1Aid\n        SnapshotName\uFF1A           \u5907\u4EFD\u7684\u540D\u79F0\n        DbName\uFF1A                 \u6240\u5C5E\u6570\u636E\u5E93\n        State\uFF1A                  \u5F53\u524D\u9636\u6BB5\n            PENDING\uFF1A        \u63D0\u4EA4\u4F5C\u4E1A\u540E\u7684\u521D\u59CB\u72B6\u6001\n            SNAPSHOTING\uFF1A    \u6267\u884C\u5FEB\u7167\u4E2D\n            UPLOAD_SNAPSHOT\uFF1A\u5FEB\u7167\u5B8C\u6210\uFF0C\u51C6\u5907\u4E0A\u4F20\n            UPLOADING\uFF1A      \u5FEB\u7167\u4E0A\u4F20\u4E2D\n            SAVE_META\uFF1A      \u5C06\u4F5C\u4E1A\u5143\u4FE1\u606F\u4FDD\u5B58\u4E3A\u672C\u5730\u6587\u4EF6\n            UPLOAD_INFO\uFF1A    \u4E0A\u4F20\u4F5C\u4E1A\u5143\u4FE1\u606F\n            FINISHED\uFF1A       \u4F5C\u4E1A\u6210\u529F\n            CANCELLED\uFF1A      \u4F5C\u4E1A\u5931\u8D25\n        BackupObjs\uFF1A             \u5907\u4EFD\u7684\u8868\u548C\u5206\u533A\n        CreateTime\uFF1A             \u4EFB\u52A1\u63D0\u4EA4\u65F6\u95F4\n        SnapshotFinishedTime\uFF1A   \u5FEB\u7167\u5B8C\u6210\u65F6\u95F4\n        UploadFinishedTime\uFF1A     \u5FEB\u7167\u4E0A\u4F20\u5B8C\u6210\u65F6\u95F4\n        FinishedTime\uFF1A           \u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4\n        UnfinishedTasks\uFF1A        \u5728 SNAPSHOTING \u548C UPLOADING \u9636\u6BB5\u4F1A\u663E\u793A\u8FD8\u672A\u5B8C\u6210\u7684\u5B50\u4EFB\u52A1id\n        Status\uFF1A                 \u5982\u679C\u4F5C\u4E1A\u5931\u8D25\uFF0C\u663E\u793A\u5931\u8D25\u4FE1\u606F\n        Timeout\uFF1A                \u4F5C\u4E1A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B example_db \u4E0B\u6700\u540E\u4E00\u6B21 BACKUP \u4EFB\u52A1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" SHOW BACKUP FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, BACKUP\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);