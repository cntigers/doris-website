"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["748418"],{516705:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE","title":"ALTER-RESOURCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ALTER-RESOURCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER-POLICY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"},"next":{"title":"ALTER-COLOCATE-GROUP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"}}'),i=s("785893"),r=s("250065");let t={title:"ALTER-RESOURCE",language:"zh-CN"},c=void 0,a={},o=[{value:"ALTER-RESOURCE",id:"alter-resource",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"alter-resource",children:"ALTER-RESOURCE"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"ALTER RESOURCE"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u5DF2\u6709\u7684\u8D44\u6E90\u3002\u4EC5 root \u6216 admin \u7528\u6237\u53EF\u4EE5\u4FEE\u6539\u8D44\u6E90\u3002\n\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER RESOURCE \'resource_name\'\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1Aresource type \u4E0D\u652F\u6301\u4FEE\u6539\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A spark0 \u7684 Spark \u8D44\u6E90\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER RESOURCE \'spark0\' PROPERTIES ("working_dir" = "hdfs://127.0.0.1:10000/tmp/doris_new");\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A remote_s3 \u7684 S3 \u8D44\u6E90\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER RESOURCE \'remote_s3\' PROPERTIES ("s3.connection.maximum" = "100");\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u4FEE\u6539\u51B7\u70ED\u5206\u5C42S3\u8D44\u6E90\u76F8\u5173\u4FE1\u606F"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u652F\u6301\u4FEE\u6539\u9879\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.access_key"})," s3\u7684ak\u4FE1\u606F"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.secret_key"})," s3\u7684sk\u4FE1\u606F"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.session_token"})," s3\u7684session token\u4FE1\u606F"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.connection.maximum"})," s3\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA450"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.connection.timeout"})," s3\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA41000ms"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3.connection.request.timeout"})," s3\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA43000ms"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7981\u6B62\u4FEE\u6539\u9879\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"s3.region"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'s3.bucket"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"s3.root.path"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"s3.endpoint"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'  ALTER RESOURCE "showPolicy_1_resource" PROPERTIES("s3.connection.maximum" = "1111");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER, RESOURCE\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var l=s(667294);let i={},r=l.createContext(i);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);