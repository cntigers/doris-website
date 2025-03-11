"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816311"],{428345:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"release-versioning","title":"Doris Versioning","description":"\x3c!--","source":"@site/community/release-versioning.md","sourceDirName":".","slug":"/release-versioning","permalink":"/community/release-versioning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Doris Versioning","language":"en"},"sidebar":"community","previous":{"title":"How to access a new Trino Connector plugin","permalink":"/community/how-to-contribute/trino-connector-developer-guide"},"next":{"title":"Release Preparation","permalink":"/community/release-and-verify/release-prepare"}}'),s=r("785893"),o=r("250065");let t={title:"Doris Versioning",language:"en"},a=void 0,l={},d=[{value:"Release Versioning",id:"release-versioning",level:2},{value:"Version Upgrade and Downgrade",id:"version-upgrade-and-downgrade",level:2},{value:"How to choose a version",id:"how-to-choose-a-version",level:2},{value:"CPU Model and Binary Version",id:"cpu-model-and-binary-version",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"release-versioning",children:"Release Versioning"}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris uses a three-digit version number (X.Y.Z)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Major version X"}),": represents major feature releases or architecture upgrades, such as the vectorized execution engine in version 1.x.x; the new optimizer in version 2.x.x; and the storage-computing separation architecture in version 3.x.x. Major versions are usually changed on a grade-level cycle."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Minor version Y"}),": represents the release of important features, performance optimization, or changes in metadata and data formats. Minor version changes are usually updated on a quarterly basis."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Patch version Z"}),": mainly used to fix bugs, optimize performance, and update minor features. The patch version is usually released every 2-4 weeks."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"version-upgrade-and-downgrade",children:"Version Upgrade and Downgrade"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Major (X) and minor (Y) version upgrades may alter metadata or data formats. Apache Doris ensures forward compatibility for these changes, allowing upgrades from old to new versions, but not downgrades. Therefore, it is recommended to backup data before upgrading to a major or minor version."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Patch version (Z) offers full compatibility, supports upgrading and downgrading between new and old versions, and prevents data compatibility issues."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-choose-a-version",children:"How to choose a version"}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris maintains two main version branches: Stable and Latest."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The latest version includes the latest features, optimizations, and bug fixes, ideal for users who want to test new features, conduct POCs, performance testing, or test pre-launch environments."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stable version provides continuous bug fixes, ensuring greater stability and is recommended for production use."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cpu-model-and-binary-version",children:"CPU Model and Binary Version"}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris offers three binary versions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"x64 (avx2)"}),": for x86_64 CPUs supporting avx2 instructions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"x64 (no avx2)"}),": for x86_64 CPUs not supporting avx2."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARM64"}),": for ARM architecture CPUs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can check whether the CPU supports the avx2 instruction by running the command ",(0,s.jsx)(n.code,{children:"cat /proc/cpuinfo |grep avx2"}),"."]})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var i=r(667294);let s={},o=i.createContext(s);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);