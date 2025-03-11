"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["21482"],{846304:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>u,contentTitle:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-VAULT","title":"ALTER STORAGE VAULT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-VAULT.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-VAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-VAULT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER STORAGE VAULT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-STORAGE-VAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-VAULT"},"next":{"title":"SET DEFAULT STORAGE VAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SET-DEFAULT-STORAGE-VAULT"}}'),l=s("785893"),a=s("250065");let r={title:"ALTER STORAGE VAULT",language:"zh-CN"},c=void 0,i={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u66F4\u6539 Storage Vault \u7684\u53EF\u4FEE\u6539\u5C5E\u6027\u503C"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER STORAGE VAULT <storage_vault_name>\nPROPERTIES (<storage_vault_property>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"<storage_vault_property>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"type\uFF1A\u53EF\u9009\u503C\u4E3A s3, hdfs"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5F53 type \u4E3A s3 \u65F6\uFF0C\u5141\u8BB8\u51FA\u73B0\u7684\u5C5E\u6027\u5B57\u6BB5\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"s3.access_key\uFF1As3 vault \u7684 ak"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"s3.secret_key\uFF1As3 vault \u7684 sk"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"vault_name\uFF1Avault \u7684 \u540D\u5B57\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"use_path_style\uFF1A\u662F\u5426\u5141\u8BB8 path style url\uFF0C\u53EF\u9009\u503C\u4E3A true\uFF0Cfalse\u3002\u9ED8\u8BA4\u503C\u662F false\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5F53 type \u4E3A hdfs \u65F6\uFF0C\u7981\u6B62\u51FA\u73B0\u7684\u5B57\u6BB5\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"path_prefix\uFF1A\u5B58\u50A8\u8DEF\u5F84\u524D\u7F00"}),"\n",(0,l.jsx)(n.li,{children:"fs.defaultFS\uFF1Ahdfs name"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709 ADMIN_PRIV \u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539 s3 storage vault ak"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER STORAGE VAULT old_vault_name\nPROPERTIES (\n  "type"="S3",\n  "VAULT_NAME" = "new_vault_name",\n   "s3.access_key" = "new_ak"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539 hdfs storage vault"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER STORAGE VAULT old_vault_name\nPROPERTIES (\n  "type"="hdfs",\n  "VAULT_NAME" = "new_vault_name",\n  "hadoop.username" = "hdfs"\n);\n'})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},a=t.createContext(l);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);